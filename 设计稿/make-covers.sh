#!/usr/bin/env bash
# 重建原型用的封面缩略图(covers/ 不进仓 —— 它是可再生的)
#
# 原型卡片按拍板 #20 显示真实封面:近方图裁到脸(1.55×/48%)、宽图中心裁。
# 图源是流水线入库的 data/episodes/<id>/cover.jpg(640px,由 scripts/cover.mjs 从集页 og:image 抓取)。
# 这里只把它们缩到 280px(给 140px 卡片做 2 倍图),约 1.1MB —— 所以不占仓库体积,现取现生成。
#
# 用法:bash 设计稿/make-covers.sh      (在仓库任意位置跑都行)
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../.." && pwd)
OUT="$HERE/covers"

# 图源:优先主仓;若封面还没合并进来,退到配图分支的工作区去取。
# (cover.jpg 不在 .gitignore 里 —— 2026-07-26 时它们只存在于 claude/competent-snyder-f02abf 分支,
#  主仓 data/episodes/ 下一张都没有。合并之后第一条就能命中。)
SRC=""
for cand in "$ROOT/data/episodes" "$ROOT/.claude/worktrees/competent-snyder-f02abf/data/episodes"; do
  if [ -d "$cand" ] && compgen -G "$cand/*/cover.jpg" >/dev/null 2>&1; then SRC="$cand"; break; fi
done
if [ -z "$SRC" ]; then
  echo "✗ 找不到任何 cover.jpg。图源应在 data/episodes/<id>/cover.jpg" >&2
  echo "  · 若配图分支还没合并:先合 claude/competent-snyder-f02abf(那 43 张封面在它上面)" >&2
  echo "  · 若确实没生成过:让流水线跑 scripts/cover.mjs" >&2
  exit 1
fi
echo "· 图源:${SRC#$ROOT/}"
command -v sips >/dev/null || { echo "✗ 需要 macOS 自带的 sips" >&2; exit 1; }

mkdir -p "$OUT"
n=0; miss=0
for f in "$SRC"/*/cover.jpg; do
  [ -e "$f" ] || break                     # glob 没展开就别把字面量当文件(SRC 选取时已用 compgen 保证有图,这里是兜底)
  id=$(basename "$(dirname "$f")")
  if sips -Z 280 "$f" --out "$OUT/$id.jpg" >/dev/null 2>&1; then n=$((n+1)); else miss=$((miss+1)); fi
done
echo "✓ 生成 $n 张缩略图 → $OUT$([ "$miss" -gt 0 ] && echo " (失败 $miss 张)")"

# 提醒:原型里哪些集还没有图(卡片会退回主题色块,这是真实情况,不是 bug)
lack=0
for p in "$HERE"/ep-*.html; do
  [ -e "$p" ] || break                     # 目录里没有 ep-*.html 时 glob 不展开,别把字面量当文件数
  id=$(basename "$p" .html); id=${id#ep-}
  [ -f "$OUT/$id.jpg" ] || lack=$((lack+1))
done
[ "$lack" -gt 0 ] && echo "· 原型里有 $lack 集没抠到 og:image,卡片走兜底色块(预期行为)"
echo "· 服务目录同步:cp -R \"$HERE/\". /tmp/uiproto/"
