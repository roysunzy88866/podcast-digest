#!/usr/bin/env bash
# 构建站点 + 部署 talk.solomind.cc —— 唯一部署真相(2026-07-25 抽出)。
#
# 为什么抽出来:原逻辑内联在 pipeline.yml 的部署步里,而 pipeline.yml 的并发组 c7b-pipeline
# 串行排队 → 想单独上线一个视觉改动,得排在长跑的内容处理(ASR 可达 60-77 分钟)后面。
# 抽成脚本后,deploy-site.yml(独立并发组)与 pipeline.yml 都调这一份,
# **两处调用同一真相,不会漂移**(项目忌讳复制两份部署逻辑)。
#
# 调用前提(两个 workflow 都已满足):已 checkout 仓库、装好 node/ffmpeg/edge-tts、npm deps 已装。
# 环境变量:CLOUDFLARE_API_TOKEN(secret)、CLOUDFLARE_ACCOUNT_ID。
# 用法:bash scripts/deploy-site.sh   (在仓库根目录跑)
set -e

# 0) 确保已发布集都有音频(audio.mp3 gitignore,现场补合成;仅当集有 digest.json)。
#    修:已提交的干净集(如 Netflix)音频不在仓、rebuildAll 未必重跑 → 部署前统一补,避免 cp 找不到音频。
for d in data/episodes/*/; do
  [ -d "$d" ] || continue   # 空 glob 保护(与下方 cp 循环一致)
  # ⚠️ 不要在这里判「audio.mp3 在不在」。tts.mjs 自己会比对**音频对应文本的指纹**:
  #    没变就跳过(幂等、不重复计费),变了就重念。加了「文件在就跳过」反而会挡住它 ——
  #    自从部署加了音频缓存(旧音频会被取回来),那样会让改过内容的集挂着**旧文本念的音频**,
  #    而这条部署通道不跑 gate-all,没人拦得住。
  if [ -f "${d}digest.json" ]; then
    node scripts/tts.mjs "$d" || echo "::warning::音频合成失败 $d"
  fi
done
# 1) bootstrap Quartz v5(钉 commit)+ baseUrl 设 talk.solomind.cc
# ⚠️ 必须 rm -rf site:流水线步骤 build-list.mjs 默认写 site/content/index.md 会预建出 site/,
#    若沿用 `[ -d site ] ||` 跳过 clone → 对半拉子 site 执行 checkout 报 "unable to read tree"(C7b 首次部署干净集才暴露)。
QUARTZ_COMMIT=9cf87ff1c248a8ca551093214b0fec3b31415009
rm -rf site
git clone --branch v5 --single-branch https://github.com/jackyzha0/quartz.git site
git -C site checkout "$QUARTZ_COMMIT"
cd site
npm i --no-audit --no-fund
node ./quartz/bootstrap-cli.mjs create -X new -t default -l shortest -b "talk.solomind.cc"
node ./quartz/bootstrap-cli.mjs plugin install --from-config --latest
# C10 配置定制补丁(弹框关/站名/Bases 默认视图;C11 主题色/默认浅色/custom.scss/普惠体字体。site/ 每次重建,定制必须走这里)
node ../scripts/patch-site.mjs
# 2) 灌内容(集页 + 实体页)+ 列表首页
cp ../samples/*.md content/ 2>/dev/null || true
if ls ../samples/entities/*.md >/dev/null 2>&1; then
  mkdir -p content/entities && cp ../samples/entities/*.md content/entities/
fi
node ../scripts/build-list.mjs
node ../scripts/build-tag-pages.mjs   # C13b 大类页(三轴筛选)
node ./quartz/bootstrap-cli.mjs build
# C13a 硬断言 [standard-change: 用户 2026-07-26 明文授权]:首页卡片流真进产物。
# 原为「Bases 卡片真渲染」(插件 --latest 浮动、类名漂移会静默毁首页;GLM 20260724-014[2])——
# Bases 骨架已退役,改断言自家卡片 + 反向断言 Bases 痕迹清零(DoD#3 的部署期版本)。
grep -q 'class="card"' public/index.html && grep -q 'data-slug=' public/index.html || { echo "::error::首页卡片流未进产物(build-list/Quartz 原样 HTML 透传坏了?),拒绝部署"; exit 1; }
grep -q 'bases-card' public/index.html && { echo "::error::首页仍有 Bases 残留(bases-card),C13a 要求痕迹清零,拒绝部署"; exit 1; } || true
# 3) 音频进 public/audio(C7a:随 Pages 静态,drift #18;当年手动 cp,此处脚本化)
mkdir -p public/audio
for f in ../data/episodes/*/audio.mp3; do
  [ -e "$f" ] || continue   # 空 glob 保护(set -e 下无匹配会把字面量传给 cp 而失败)
  id=$(basename "$(dirname "$f")")
  cp "$f" "public/audio/$id.mp3"
done
ls -la public/audio
# 3.2) 每集配图进 public/covers(随 Pages 静态;集页 frontmatter 的 image 指向 /covers/<id>.jpg)
mkdir -p public/covers
for f in ../data/episodes/*/cover.jpg; do
  [ -e "$f" ] || continue   # 空 glob 保护
  id=$(basename "$(dirname "$f")")
  cp "$f" "public/covers/$id.jpg"
done
echo "public/covers jpg=$(ls public/covers/*.jpg 2>/dev/null | wc -l | tr -d ' ')"
# 3.5) 私有播客 feed 随站点部署(drift #29:此步原缺 → feed.xml 不进 public/、
#      Quartz 只出自家 index.xml,线上 /feed.xml 源头 404、订阅端只剩 CDN 幽灵)。
#      build-feed ROOT 脚本锚定仓库根,从 site/ 跑仍正确读 samples/ + data/episodes。
node ../scripts/build-feed.mjs --out public/feed.xml
# feed 短缓存(drift #29:原遗留 s-maxage=7d 让新集最多 7 天才对播客 App 可见)。
printf '/feed.xml\n  Cache-Control: public, max-age=3600, must-revalidate\n' > public/_headers
# 部署前硬断言:feed 真在产物里且有 enclosure(Scenario 5 回归防护,防再次漏 feed 静默上线)。
feed_n=$(grep -c '<enclosure' public/feed.xml || true)
echo "public/feed.xml enclosure=$feed_n(public/audio mp3=$(ls public/audio/*.mp3 2>/dev/null | wc -l | tr -d ' '))"
[ "${feed_n:-0}" -gt 0 ] || { echo "::error::public/feed.xml 无 enclosure,拒绝部署(drift #29 回归:feed 必须随站点上线,不放行只剩 CDN 幽灵的站)"; exit 1; }
# 4) 部署(CF API token,非交互;项目 voice-solomind)
npx wrangler pages deploy public --project-name voice-solomind --branch main
