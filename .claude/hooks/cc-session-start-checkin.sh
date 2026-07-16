#!/usr/bin/env bash
# 新会话交接钩子(SessionStart 🟡):开局自动把交接态怼到 AI 眼前,堵「忘了读交接」。
# 注意:agent 改 .claude/settings.json 能卸掉本钩子——这是 🟡 不是焊死。
set -uo pipefail
ROOT="${CLAUDE_PROJECT_DIR:-.}"

echo "=== 开工 · 新会话交接(上线档) ==="
if [ -f "$ROOT/docs/wip.md" ]; then
  echo "--- docs/wip.md(上次做到哪 / 下一步)---"
  cat "$ROOT/docs/wip.md"
else
  echo "(缺 docs/wip.md:上线档必须有,先补)"
fi
if [ -f "$ROOT/docs/story-map.md" ]; then
  echo "--- 切片状态(docs/story-map.md)---"
  grep -E '^\| C' "$ROOT/docs/story-map.md" 2>/dev/null || echo "(story-map 无切片行)"
fi
echo "--- 最近 5 条提交 ---"
git -C "$ROOT" log --oneline -5 2>/dev/null || echo "(无 git 历史)"
echo "=== 按项目 CLAUDE.md「新会话自启 SOP」走:两锚校验 + glm-check scorecard + 报告下一步;不一致→停+问+记 drift ==="
exit 0
