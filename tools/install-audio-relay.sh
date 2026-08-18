#!/bin/bash
# C30 · 音频搬运工 Mac mini 安装脚本(幂等,重复跑无害)。
# 在 Mac mini 上跑:cd ~/patrol/podcast-digest && bash tools/install-audio-relay.sh
# 前置:gh 已认证(gh auth status 绿;失效则先 gh auth login)。
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
NODE_BIN="$(which node)"
PLIST_SRC="$REPO/tools/launchd/com.podcast-digest.audio-relay.plist"
PLIST_DST="$HOME/Library/LaunchAgents/com.podcast-digest.audio-relay.plist"
PROXY="${AUDIO_RELAY_PROXY:-http://127.0.0.1:7890}" # Mac mini 连 GitHub 走 clash 7890(同 patrol)

echo "① 拉最新代码…"
# Mac mini 的 ~/.gitconfig 有「http.https://github.com/.proxy=空」的 URL 级规则,优先级压过环境变量
# → 环境变量代理全被无视(2026-08-18 实测)。用 -c 覆盖同名键才生效;HTTP/1.1 是该 git 过代理的协议要求
# (不加会「expected flush after ref listing」)。不动全局配置——巡航依赖现状。
git -C "$REPO" -c "http.https://github.com/.proxy=$PROXY" -c http.version=HTTP/1.1 pull --rebase origin main

echo "② 生成并安装 plist(node=$NODE_BIN)…"
mkdir -p "$HOME/Library/LaunchAgents" "$HOME/Library/Logs"
sed -e "s|__NODE__|$NODE_BIN|g" -e "s|__REPO__|$REPO|g" -e "s|__HOME__|$HOME|g" "$PLIST_SRC" > "$PLIST_DST"
# git/gh 子进程要代理(音频下载直连,脚本内部保证——所以不设 NODE_USE_ENV_PROXY)
/usr/libexec/PlistBuddy -c "Add :EnvironmentVariables:AUDIO_RELAY_PROXY string $PROXY" "$PLIST_DST" 2>/dev/null \
  || /usr/libexec/PlistBuddy -c "Set :EnvironmentVariables:AUDIO_RELAY_PROXY $PROXY" "$PLIST_DST"

echo "③ 装载 launchd(每 3h 一班,:20)…"
launchctl bootout "gui/$(id -u)/com.podcast-digest.audio-relay" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST_DST"
launchctl list | grep com.podcast-digest.audio-relay

echo "④ 手动跑一轮验通(清单空时应打「收工」)…"
AUDIO_RELAY_PROXY="$PROXY" "$NODE_BIN" "$REPO/scripts/audio-relay.mjs"

echo "✅ 安装完成。日志:~/Library/Logs/podcast-digest-audio-relay.log"
