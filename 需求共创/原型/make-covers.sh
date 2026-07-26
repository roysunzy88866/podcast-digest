#!/usr/bin/env bash
# 重建原型用的封面缩略图(covers/ 不进仓 —— 它是可再生的)
#
# 原型卡片按拍板 #20 显示真实封面:近方图裁到脸(1.55×/48%)、宽图中心裁。
# 图源是流水线入库的 data/episodes/<id>/cover.jpg(640px,由 scripts/cover.mjs 从集页 og:image 抓取)。
# 这里只把它们缩到 280px(给 140px 卡片做 2 倍图),约 1.1MB —— 所以不占仓库体积,现取现生成。
#
# 用法:bash 需求共创/原型/make-covers.sh      (在仓库任意位置跑都行)
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(cd "$HERE/../.." && pwd)
SRC="$ROOT/data/episodes"
OUT="$HERE/covers"

[ -d "$SRC" ] || { echo "✗ 找不到 $SRC" >&2; exit 1; }
command -v sips >/dev/null || { echo "✗ 需要 macOS 自带的 sips" >&2; exit 1; }

mkdir -p "$OUT"
n=0; miss=0
for f in "$SRC"/*/cover.jpg; do
  [ -e "$f" ] || { echo "✗ 一张 cover.jpg 都没有 —— 先让流水线跑 scripts/cover.mjs" >&2; exit 1; }
  id=$(basename "$(dirname "$f")")
  if sips -Z 280 "$f" --out "$OUT/$id.jpg" >/dev/null 2>&1; then n=$((n+1)); else miss=$((miss+1)); fi
done
echo "✓ 生成 $n 张缩略图 → $OUT$([ "$miss" -gt 0 ] && echo " (失败 $miss 张)")"

# 提醒:原型里哪些集还没有图(卡片会退回主题色块,这是真实情况,不是 bug)
lack=0
for p in "$HERE"/ep-*.html; do
  id=$(basename "$p" .html); id=${id#ep-}
  [ -f "$OUT/$id.jpg" ] || lack=$((lack+1))
done
[ "$lack" -gt 0 ] && echo "· 原型里有 $lack 集没抠到 og:image,卡片走兜底色块(预期行为)"
echo "· 服务目录同步:cp -R \"$HERE/\". /tmp/uiproto/"
