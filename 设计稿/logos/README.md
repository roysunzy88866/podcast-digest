# 公司 logo(右栏「按公司」卡片用)

把 logo 图片丢进这个文件夹，文件名 = **公司名全小写、非字母数字换成 `-`**，格式 `.png`。

| 右栏显示 | 文件名 |
|---|---|
| Anthropic | `anthropic.png` |
| OpenAI | `openai.png` |
| Slack | `slack.png` |
| WorkOS | `workos.png` |
| Google | `google.png` |
| Mercury | `mercury.png` |
| Meta | `meta.png` |
| Cursor | `cursor.png` |

**规格**：显示成 28×28 的圆角方块，`object-fit:contain` + 白底 —— 所以

- 方图最省事（正方形 logo / favicon 那种），长条图也不会变形，只是两边留白；
- 建议 **≥ 56×56**（2× 高清屏），太小会糊；
- 透明底 PNG 最好，卡片会自动衬白。

**没放文件也不会出错**：图裂了会自动移除，退回「首字母底板」（Anthropic → `A`），
所以可以先只喂几家、剩下的慢慢补。

## 站名前面那个标记

顶栏站名「跨国深谈」前面那个红色小方块，文件名是 **`site.png`**，显示成 26×26 圆角方块、
`object-fit:cover`（**会填满、超出部分裁掉**，所以给方图）。建议 ≥52×52。

没放文件时是现在看到的红底白引号（引号是本站母题：每句都能回到原话）。
一旦放了 `site.png`，那个引号会自动退场。**建议用不透明的图**——透明底 PNG 会露出底下的红。

改尺寸/形状去 `style.css`：公司 logo 看 `.cc .lg`（第十批），站名标记看 `.mk`（第十一批）。
