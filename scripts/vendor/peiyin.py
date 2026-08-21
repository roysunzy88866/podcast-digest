# vendored from ~/.claude/skills/配音/peiyin.py @ 2026-08-22 (sha256:e75501149248)
# C37/ADR 0014 修订:CI 云 runner 无本机 skill,vendoring 换 MiMo 嗓;上游改动需手动同步(漂移风险用户知情接受)
# 本副本不改一行逻辑;key 走 env PEIYIN_MIMO_KEY(GitHub Secret),调用方 tts.mjs 只用 --no-fallback 模式
#!/usr/bin/env python3
"""配音 skill · 中央厨房(单文件,可 import 可 CLI)。

所有项目共享的 TTS 核心:MiMo 克隆/内置 + edge-tts 兜底、重试、剪尾怪声、密钥查找。
音色按名字点菜(voices.json),项目口味(语速/EQ/混音)留在各项目,不进这里。
架构与边界见 docs/设计与迁移.md;改这个文件 = 波及所有用配音的项目,必过 GLM 复核 + 实跑一段音频。

兼容约束(别破坏):Python 3.9 / 纯标准库必需(edge_tts、lameenc 按需惰性导入)/
不依赖 ffmpeg 也能完整工作(AI新闻重构 生产机 Mac mini 无 ffmpeg,vendored 本文件随 rsync 部署)。

用法:
  库(官方音色):    from peiyin import synth;  data, meta = synth("你好", voice="mimo_default", fmt="mp3")
  库(克隆业务声音): synth("你好", voice={"engine": "mimo-clone", "ref": "<业务自己的参考音.mp3>"}, fmt="mp3")
  命令行:          python3 peiyin.py --voice mimo_default -t "你好" -o out.mp3

业务边界:skill 只提供引擎 + 官方音色 + "克隆"这个动作,**不自带任何业务要克隆的声音**;
业务要克隆自己的产品嗓子,把自己的参考音路径用 spec 传进来(见上"克隆业务声音")。
"""
from __future__ import annotations

import argparse
import array
import base64
import io
import json
import os
import re
import subprocess
import sys
import tempfile
import time
import urllib.request
import wave

SKILL_DIR = os.path.dirname(os.path.abspath(__file__))
MIMO_EP = "https://api.xiaomimimo.com/v1/chat/completions"
# 密钥多路查找:env → 主力开发机 → AI新闻重构生产机
MIMO_KEY_PATHS = ["~/Documents/Projects/MI.md", "~/.config/ainews/mimo_key"]
DEFAULT_EDGE_FALLBACK = "zh-CN-YunxiNeural"

EDGE_ALIAS = {
    "云希": "zh-CN-YunxiNeural", "云健": "zh-CN-YunjianNeural",
    "云扬": "zh-CN-YunyangNeural", "云夏": "zh-CN-YunxiaNeural",
    "晓晓": "zh-CN-XiaoxiaoNeural", "晓伊": "zh-CN-XiaoyiNeural",
}
MIMO_BUILTINS = {"mimo_default", "冰糖", "茉莉", "苏打", "白桦", "Mia", "Chloe", "Milo", "Dean"}

_cache: dict = {}


# ---------- 音色菜单 ----------

def load_registry(path: str | None = None) -> dict:
    """voices.json:名字 → {engine, ref/voice, fallback}。缺文件不报错(vendored 场景直接传 spec)。"""
    p = path or os.environ.get("PEIYIN_VOICES") or os.path.join(SKILL_DIR, "voices.json")
    if "registry:" + p not in _cache:
        try:
            with open(p, encoding="utf-8") as f:
                _cache["registry:" + p] = json.load(f)
        except OSError:
            _cache["registry:" + p] = {}
    return _cache["registry:" + p]


def resolve_voice(voice, registry_path: str | None = None) -> dict:
    """名字或 spec → 完整 spec {engine, voice?, ref?, fallback}。
    名字查找顺序:voices.json → edge 别名 → zh-* 直传 → MiMo 内置名直传。"""
    if isinstance(voice, dict):
        spec = dict(voice)
    else:
        reg = load_registry(registry_path)
        if voice in reg:
            spec = dict(reg[voice])
            spec.setdefault("name", voice)
        elif voice in EDGE_ALIAS:
            spec = {"engine": "edge", "voice": EDGE_ALIAS[voice], "name": voice}
        elif voice.startswith("zh-"):
            spec = {"engine": "edge", "voice": voice, "name": voice}
        elif voice in MIMO_BUILTINS:
            spec = {"engine": "mimo", "voice": voice, "name": voice}
        else:
            raise ValueError("未知音色 %r(voices.json 里没有,也不是 edge/MiMo 内置名)" % voice)
    fb = spec.get("fallback", DEFAULT_EDGE_FALLBACK)
    spec["fallback"] = EDGE_ALIAS.get(fb, fb)
    return spec


# ---------- 引擎 ----------

def _mimo_key() -> str:
    if "mimo_key" not in _cache:
        key = os.environ.get("PEIYIN_MIMO_KEY", "")
        for p in MIMO_KEY_PATHS:
            if key:
                break
            try:
                with open(os.path.expanduser(p), encoding="utf-8") as f:
                    t = f.read()
                key = next((l.strip() for l in t.splitlines() if l.strip().startswith("sk-")), "")
            except OSError:
                pass
        if not key:
            raise RuntimeError("MiMo key 缺失(查过 env PEIYIN_MIMO_KEY + %s)" % MIMO_KEY_PATHS)
        _cache["mimo_key"] = key
    return _cache["mimo_key"]


def _ref_dataurl(ref_path: str) -> str:
    p = os.path.expanduser(ref_path)
    if "ref:" + p not in _cache:
        with open(p, "rb") as f:
            _cache["ref:" + p] = "data:audio/mpeg;base64," + base64.b64encode(f.read()).decode()
    return _cache["ref:" + p]


def _mimo_synth_wav(text: str, spec: dict, timeout: int) -> bytes:
    """MiMo 单次合成 → wav bytes。失败抛异常(上层重试/降级)。"""
    if spec["engine"] == "mimo-clone":
        model, voice = "mimo-v2.5-tts-voiceclone", _ref_dataurl(spec["ref"])
    else:
        model, voice = "mimo-v2.5-tts", spec["voice"]
    body = json.dumps({
        "model": model,
        "messages": [{"role": "assistant", "content": text}],
        "audio": {"format": "wav", "voice": voice},
        "modalities": ["text", "audio"],
    }).encode("utf-8")
    req = urllib.request.Request(MIMO_EP, data=body, headers={
        "Authorization": "Bearer " + _mimo_key(), "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        r = json.loads(resp.read())
    if r.get("error"):
        raise RuntimeError("mimo error: " + str(r["error"])[:150])
    data = base64.b64decode(r["choices"][0]["message"]["audio"]["data"])
    if not data:
        raise RuntimeError("MiMo 返回空音频")
    return data


def _edge_synth_mp3(text: str, edge_voice: str) -> bytes:
    """edge-tts 合成 → mp3 bytes(24kHz 单声道无头 CBR,可裸帧拼接)。"""
    import asyncio

    import edge_tts
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tf:
        tmp = tf.name
    try:
        async def _go():
            await edge_tts.Communicate(text, edge_voice).save(tmp)
        asyncio.run(_go())
        with open(tmp, "rb") as f:
            data = f.read()
        if not data:
            raise RuntimeError("edge-tts 合成结果为空")
        return data
    finally:
        try:
            os.remove(tmp)
        except OSError:
            pass


def _retry(fn, retries: int):
    last = None
    for i in range(retries):
        try:
            return fn()
        except Exception as e:  # noqa: BLE001 — SSL 瞬断/网络抖动都要扛
            last = e
            if i < retries - 1:
                time.sleep(2 + i * 3)
    raise last


# ---------- 纯 Python 音频处理(无 ffmpeg 也能跑) ----------

def _decode_wav(data: bytes):
    """wav bytes → (采样率, 单声道 int16 array)。只支持 16bit PCM(MiMo 改格式就抛错走降级)。"""
    w = wave.open(io.BytesIO(data))
    if w.getsampwidth() != 2:
        raise RuntimeError("wav 非16位PCM (sampwidth=%d)" % w.getsampwidth())
    sr, ch = w.getframerate(), w.getnchannels()
    a = array.array("h")
    a.frombytes(w.readframes(w.getnframes()))
    if ch == 2:
        a = a[0::2]
    return sr, a


def _encode_wav(sr: int, a) -> bytes:
    buf = io.BytesIO()
    w = wave.open(buf, "wb")
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(sr)
    w.writeframes(a.tobytes())
    w.close()
    return buf.getvalue()


def tail_cut_sec(sr: int, a) -> float | None:
    """MiMo 尾部 ~0.5s 响怪声,与正文间有静音间隙 → 找裁切点(秒)。
    纯 Python 版 silencedetect(阈值 -35dB / 静音≥0.15s),语义与生产实测过的 ffmpeg 版一致:
    最后一段静音之后还有 >0.1s 音频(=怪声)且裁点在末尾 1.2s 内(防误切句中)→ 裁在静音开始+0.15s。"""
    thr = int(32768 * 10 ** (-35 / 20))          # ≈582
    win = max(1, sr // 100)                       # 10ms 窗
    dur = len(a) / sr
    silent = [max(map(abs, a[i:i + win]), default=0) < thr for i in range(0, len(a), win)]
    runs, start = [], None
    for i, s in enumerate(silent):
        if s and start is None:
            start = i
        elif not s and start is not None:
            runs.append((start, i))
            start = None
    if start is not None:
        runs.append((start, len(silent)))
    runs = [(s, e) for s, e in runs if (e - s) * win / sr >= 0.15]
    if not runs:
        return None
    ls, le = runs[-1][0] * win / sr, runs[-1][1] * win / sr
    if (dur - le) > 0.1 and (dur - ls) < 1.2:
        return ls + 0.15
    return None


def _fade_pad(sr: int, a, fade_ms: int, pad_ms: int):
    n = len(a)
    fade = min(int(sr * fade_ms / 1000), n)
    for i in range(fade):
        a[n - 1 - i] = int(a[n - 1 - i] * i / fade)
    if pad_ms:
        a.extend([0] * int(sr * pad_ms / 1000))
    return a


def _encode_mp3(sr: int, a) -> bytes:
    """PCM → mp3。优先 lameenc(纯 pip,生产机路线,48kbps CBR 可裸拼);没有则用 ffmpeg。"""
    try:
        import lameenc
        enc = lameenc.Encoder()
        enc.set_bit_rate(48)
        enc.set_in_sample_rate(sr)
        enc.set_channels(1)
        enc.set_quality(2)
        data = bytes(enc.encode(a.tobytes()) + enc.flush())
        if not data:
            raise RuntimeError("lameenc 编码为空")
        return data
    except ImportError:
        return _ffmpeg_convert(_encode_wav(sr, a), "wav", "mp3")


def _ffmpeg_convert(data: bytes, src_fmt: str, dst_fmt: str) -> bytes:
    codec = ["-b:a", "48k"] if dst_fmt == "mp3" else []
    r = subprocess.run(
        ["ffmpeg", "-f", src_fmt, "-i", "pipe:0",
         "-ac", "1", *codec, "-f", dst_fmt, "pipe:1", "-loglevel", "error"],
        input=data, capture_output=True, check=True)
    return r.stdout


def chunk_text(text: str, limit: int = 200) -> list:
    """按句末标点切 ≤limit 字的块(MiMo 长文上限实测 ~216 字;切在句界淡出自然)。"""
    sents = re.findall(r"[^。！？!?]*[。！？!?]|[^。！？!?]+$", text)
    chunks, cur = [], ""
    for s in sents:
        if cur and len(cur) + len(s) > limit:
            chunks.append(cur)
            cur = s
        else:
            cur += s
    if cur.strip():
        chunks.append(cur)
    return chunks or [text]


# ---------- 主入口 ----------

def synth(text, voice="mimo_default", fmt="mp3", tail="trim", fade_ms=None, pad_ms=0,
          retries=3, timeout=150, fallback=True, registry_path=None):
    """合成一段。返回 (音频 bytes, meta)。

    voice: 音色名(查菜单)或 spec dict {engine: mimo-clone|mimo|edge, ref/voice, fallback}
    fmt:   "mp3"(24kHz 单声道 48k CBR,可裸拼) | "wav"
    tail:  "trim"(找到静音间隙就剪掉尾部怪声+120ms淡出,找不到退回淡出) | "fade"(只淡出) | "none"
    fade_ms: 淡出时长;None = trim 剪中 120 / 其余 400
    pad_ms: 末尾补静音(拼接留呼吸用)
    fallback: MiMo 失败(重试后)是否自动降级到该音色的 edge 兜底;False = 抛异常交调用方
    meta: {engine: 实际引擎, fallback: 是否降级了, trimmed: 是否剪了尾, name}
    ⚠️ 限制:edge 引擎(含降级)出 fmt="wav" 需要 ffmpeg 解码——无 ffmpeg 机器请用 fmt="mp3"。
    """
    spec = resolve_voice(voice, registry_path)
    meta = {"engine": spec["engine"], "fallback": False, "trimmed": False,
            "name": spec.get("name", "")}
    if spec["engine"] in ("mimo", "mimo-clone"):
        try:
            wav = _retry(lambda: _mimo_synth_wav(text, spec, timeout), retries)
            sr, a = _decode_wav(wav)   # 解码也放进来:MiMo 改了 wav 格式要走降级,不能裸抛给调用方
        except Exception as e:
            if not fallback:
                raise
            sys.stderr.write("peiyin: MiMo 失败(%s: %s)→ 降级 edge %s\n"
                             % (type(e).__name__, str(e)[:80], spec["fallback"]))
            meta.update(engine="edge", fallback=True)
            return _edge_result(text, spec["fallback"], fmt, retries), meta
        if tail == "trim":
            cut = tail_cut_sec(sr, a)
            if cut is not None:
                a = a[:int(cut * sr)]
                meta["trimmed"] = True
                a = _fade_pad(sr, a, fade_ms if fade_ms is not None else 120, pad_ms)
            else:
                a = _fade_pad(sr, a, fade_ms if fade_ms is not None else 400, pad_ms)
        elif tail == "fade":
            a = _fade_pad(sr, a, fade_ms if fade_ms is not None else 400, pad_ms)
        elif pad_ms:
            a = _fade_pad(sr, a, 0, pad_ms)
        return (_encode_mp3(sr, a) if fmt == "mp3" else _encode_wav(sr, a)), meta
    if spec["engine"] == "edge":
        return _edge_result(text, spec["voice"], fmt, retries), meta
    raise ValueError("未知引擎 %r" % spec["engine"])


def _edge_result(text: str, edge_voice: str, fmt: str, retries: int) -> bytes:
    mp3 = _retry(lambda: _edge_synth_mp3(text, edge_voice), retries)
    return mp3 if fmt == "mp3" else _ffmpeg_convert(mp3, "mp3", "wav")


def main() -> int:
    ap = argparse.ArgumentParser(description="配音:文字→中文语音(MiMo 主 + edge 兜底)")
    ap.add_argument("--voice", default="mimo_default", help="官方音色名(edge 别名/MiMo 内置);克隆业务声音请当库用传 spec。默认 mimo_default(MiMo,音质更好;失败自动降级 edge)")
    ap.add_argument("-t", "--text", help="要念的文字;或用 -f")
    ap.add_argument("-f", "--file", help="文字文件路径,- 表示 stdin")
    ap.add_argument("-o", "--out", required=False, help="输出文件(.mp3/.wav)")
    ap.add_argument("--tail", default="trim", choices=["trim", "fade", "none"])
    ap.add_argument("--fade-ms", type=int, default=None)
    ap.add_argument("--pad-ms", type=int, default=0)
    ap.add_argument("--chunk", action="store_true", help="长文按句切块合成再拼接(mp3)")
    ap.add_argument("--no-fallback", action="store_true", help="MiMo 失败不降级 edge,直接报错")
    ap.add_argument("--list-voices", action="store_true")
    args = ap.parse_args()

    if args.list_voices:
        for name, s in load_registry().items():
            print("%-8s %s" % (name, s.get("描述", s.get("engine", ""))))
        print("edge 别名: " + " ".join(EDGE_ALIAS))
        print("MiMo 内置: " + " ".join(sorted(MIMO_BUILTINS)))
        return 0
    text = args.text or (sys.stdin.read() if args.file == "-" else
                         open(args.file, encoding="utf-8").read() if args.file else "")
    if not text.strip() or not args.out:
        ap.error("需要 -t/-f 提供文字 和 -o 输出路径")
    fmt = "wav" if args.out.endswith(".wav") else "mp3"
    kw = dict(voice=args.voice, fmt=fmt, tail=args.tail, fade_ms=args.fade_ms,
              pad_ms=args.pad_ms, fallback=not args.no_fallback)
    if args.chunk and fmt == "mp3":
        parts, metas = [], []
        for c in chunk_text(text):
            d, m = synth(c, **kw)
            parts.append(d)
            metas.append(m)
        data = b"".join(parts)
        meta = {"chunks": len(parts), "fallback": any(m["fallback"] for m in metas),
                "trimmed": sum(m["trimmed"] for m in metas)}
    else:
        data, meta = synth(text, **kw)
    with open(args.out, "wb") as f:
        f.write(data)
    sys.stderr.write("peiyin: %s %d bytes %s\n" % (args.out, len(data), json.dumps(meta, ensure_ascii=False)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
