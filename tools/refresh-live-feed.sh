#!/bin/bash
# Mac mini 定时抓「新鲜」lennys feed 存进仓,治 US runner 陈旧断更(drift #56)。
#   病根:Substack 按地理喂陈旧 —— US 侧(GitHub runner 直抓 / CF Worker)都拿到旧副本,
#         唯住宅 IP 新鲜(实测 Mac mini 抓到 08-15)。云端流水线改读本快照(SOURCES lennys.snapshotFile)。
#   抓 feed 直连(=保住宅 IP 新鲜);更新/推送走 mihomo 代理(这台连 github 要代理,直连超时)。
# 装机与凭证见 docs/macmini-feed-snapshot.md。launchd label: com.user.lennys-feed-snapshot
set -uo pipefail
# launchd 的 PATH 极简 → 显式补全,防 git/curl/diff/mktemp command not found(GLM 020[4])
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

REPO="${FEED_SNAP_REPO:-$HOME/patrol/podcast-digest}"
PROXY="${FEED_SNAP_PROXY:-http://127.0.0.1:7890}"
SNAP="data/lennys-live-feed.xml"
FEED="https://www.lennysnewsletter.com/feed"

cd "$REPO" || { echo "❌ 仓库不存在:$REPO"; exit 1; }

# 1) 更新到最新(走代理;autostash 防本地残留挡路)。失败=跳过本轮,下次重试。
git -c http.proxy="$PROXY" -c https.proxy="$PROXY" pull --rebase --autostash origin main >/dev/null 2>&1 \
  || { git rebase --abort 2>/dev/null; echo "⚠️ $(date '+%F %T') pull/rebase 失败(已 abort 清场,防卡死),跳过本轮"; exit 0; }

# 2) 直连抓最新 feed(不走代理=保新鲜)。
TMP="$(mktemp)"
if ! curl -s --fail --max-time 40 -A "Mozilla/5.0" "$FEED" -o "$TMP"; then
  echo "⚠️ $(date '+%F %T') 抓 feed 失败,跳过本轮"; rm -f "$TMP"; exit 0
fi
grep -q "<rss" "$TMP" || { echo "⚠️ $(date '+%F %T') 抓到的不是 RSS,跳过"; rm -f "$TMP"; exit 0; }

# 3) 内容没变就不提交(防 churn)。
if [ -f "$SNAP" ] && diff -q "$TMP" "$SNAP" >/dev/null 2>&1; then
  echo "= $(date '+%F %T') feed 无变化,不提交"; rm -f "$TMP"; exit 0
fi
mv "$TMP" "$SNAP"

# 4) 提交 + 推送(走代理;推失败=下次 pull-rebase 后自动重试,不硬卡)。
git add "$SNAP"
git commit -q -m "[chore 🤖] Mac mini 刷新 lennys live feed 快照(治断更 drift #56)" \
  || { echo "= $(date '+%F %T') 无改动可提交"; exit 0; }
if git -c http.proxy="$PROXY" -c https.proxy="$PROXY" push origin main >/dev/null 2>&1; then
  echo "✅ $(date '+%F %T') 快照已更新并推送"
else
  echo "⚠️ $(date '+%F %T') push 失败(下次重试)"
fi
