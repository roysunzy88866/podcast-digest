#!/usr/bin/env bash
# 重建 site/(Quartz v5 发布层)—— C1 环境证据的可复现落地
# site/ 本身是 gitignore 的构建区;本脚本 + samples/ + 核实报告 = 让它可从零重建。
#
# 前置(本机 2026-07-17 已满足):
#   - macOS + Homebrew
#   - git 能连 github(本机走 clash 7890;git 全局 http(s).proxy 须指向可用端口,别指失效端口)
#   - 联网(fnm 下 Node、clone Quartz 与 44 个插件)
set -euo pipefail

# Quartz v5 分支 @2026-06-16,C1 钉定此 commit 保证可复现(核实报告 §一/§二)
QUARTZ_COMMIT=9cf87ff1c248a8ca551093214b0fec3b31415009
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> 1/5 Node 22.16.0(对齐 Quartz .node-version;本机 Node 25.9 已过 EOL、上游未测)"
command -v fnm >/dev/null 2>&1 || brew install fnm
eval "$(fnm env)"
fnm install 22.16.0
fnm use 22.16.0
echo "    node=$(node -v) npm=$(npm -v)"

echo "==> 2/5 clone Quartz v5 并钉 commit(可复现的命门:commit 必须真 checkout 成功)"
if [ -d site ]; then
  # site/ 已存在:必须是完好的 Quartz git 仓库,否则别在半成品上硬跑(GLM 005-[1])
  if ! git -C site rev-parse --git-dir >/dev/null 2>&1 || [ ! -f site/package.json ]; then
    echo "    ✗ site/ 已存在但不是完好的 Quartz 仓库。请先 'rm -rf site' 再重跑。" >&2
    exit 1
  fi
else
  # full single-branch clone(不加 --depth):带 v5 完整历史,保证钉定 commit 可达
  git clone --branch v5 --single-branch https://github.com/jackyzha0/quartz.git site
fi
# 钉 commit:checkout 失败=硬错并退出,绝不静默降级到浮动 HEAD(否则可复现性作废,GLM 005-[2])
if ! git -C site checkout "$QUARTZ_COMMIT" 2>/dev/null; then
  echo "    ✗ 无法 checkout 钉定 commit $QUARTZ_COMMIT —— 可复现性无法保证。" >&2
  echo "      site/ 历史里没有它(可能 upstream 变动或 site/ 不完整)。人工核对 commit 后再跑。" >&2
  exit 1
fi
echo "    已钉 commit: $(git -C site rev-parse HEAD)"

echo "==> 3/5 依赖 + 初始化 + 插件(--latest 避开 lockfile 钉旧 commit 的 build 失败坑)"
cd site
npm i
node ./quartz/bootstrap-cli.mjs create -X new -t default -l shortest -b "podcast-digest.local"
node ./quartz/bootstrap-cli.mjs plugin install --from-config --latest

echo "==> 4/5 灌样片(来自版本化的 samples/)"
if ! ls "$ROOT"/samples/*.md >/dev/null 2>&1; then
  echo "    ✗ samples/ 无 .md 样片,灌不进内容(否则站里没样片、verify 会红)。" >&2
  exit 1
fi
cp "$ROOT"/samples/*.md content/
echo "    已灌 $(ls "$ROOT"/samples/*.md | wc -l | tr -d ' ') 篇集页"
# C3:实体页(自建聚合)进 content/entities/,[[双链]]按 basename 解析、不受子目录影响
if ls "$ROOT"/samples/entities/*.md >/dev/null 2>&1; then
  mkdir -p content/entities
  cp "$ROOT"/samples/entities/*.md content/entities/
  echo "    已灌 $(ls "$ROOT"/samples/entities/*.md | wc -l | tr -d ' ') 个实体页"
fi

echo "==> 5/5 build"
node ./quartz/bootstrap-cli.mjs build

echo ""
echo "✅ 重建完成。本地起站:"
echo "   cd site && eval \"\$(fnm env)\" && fnm use 22.16.0 && node ./quartz/bootstrap-cli.mjs build --serve"
echo "   → http://localhost:8080/2026-07-08-latent-space-modal"
