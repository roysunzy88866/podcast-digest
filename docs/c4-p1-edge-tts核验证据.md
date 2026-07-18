# C4 前置核验 P1 · edge-tts 真调通 + 中文出声(证据)

**日期**:2026-07-18 · **结论:P1 通过**(本机真调 edge-tts,连通 MS 端点、6 个普通话音色可用、晓晓合成真中文 mp3)。C4 配音引擎定 **edge-tts**(drift #13),Cloudflare MeloTTS / Azure 作可插拔 fallback。

## 契约(为什么先验)
edge-tts 是**非官方接口**(白嫖 Edge「大声朗读」端点)。用户 AI新闻重构 项目生产验证过、并给了方案文档,但「国内直连可用」是在用户机器上测的,且非官方接口可能突挂。故本机先真调(纸面契约先验,踩过 Bases 坑),不拿别项目的实测当本机的实测。

## 证据(本机真跑,scratchpad venv,edge-tts 7.2.8)
1. **连通 + 中文音色**:`edge-tts --list-voices | grep zh-CN` → 6 个普通话音色(`zh-CN-XiaoxiaoNeural` 晓晓 / 晓伊 / 云健 / 云希 / 云夏 / 云扬)+ 辽宁/陕西方言。**MS 端点从本机直连可达(未挂代理)**——与 C1/C2「直连反而通」一致。
2. **晓晓合成真中文**:`--text "大家好…智能体和无服务器计算。"(42 字) --voice zh-CN-XiaoxiaoNeural --write-media edge-test.mp3` → **9.936s**、mp3 24kHz/48kbps 单声道、59616 字节。语速 ≈4.2 字/秒 → 3900 字精华约 **15.5 分钟**(与预期一致)。
3. **红利**:`--write-subtitles` 产出 **VTT 词级时间戳字幕**(中文正确)——C4 之外的红利(详情页可做同步文字 / 未来视频字幕)。

## 结论 / 对 C4 的影响
- edge-tts 本机可用 → **C4 无需用户任何凭证即可开工**(免 key),阻塞解除。
- **约束/兜底**(依用户文档实测 + 非官方性质,必须照做):
  1. SSML `<break>` **无效**(会被念出来)→ 要停顿靠分段合成 + 拼静音,不靠 SSML。
  2. 输出**裸 MP3 帧流**(无 ID3/Xing 头)→ 可字节直接拼接(不必 ffmpeg;但时长闸门仍用 ffprobe)。
  3. **非官方接口,微软改协议就挂** → 必须**缓存**(源 hash,同文本+音色只合成一次)+ **失败降级**到 CF MeloTTS/Azure(`synthesizeChunk` 可插拔)。
  4. C7 上 Cloudflare Worker 时 edge-tts 的 WebSocket 头(Sec-WebSocket-Version)限制**待验**——可能改用 CF MeloTTS 原生绑定,属 C7 再定(引擎可插拔已覆盖)。
- 样片留在 scratchpad `edge-test.mp3`(想亲耳听可开)。真听感验收在 C4 出整份精华音频 + 详情页播放器时。
