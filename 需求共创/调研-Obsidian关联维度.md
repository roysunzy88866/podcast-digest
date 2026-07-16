# 调研报告 · Obsidian 知识关联维度（机制/页面呈现/本项目映射）

> 调研日期：2026-07-16 · 独立调研 agent · 每条带来源分级+链接
> 触发：第 19 轮用户纠正「本集涉及不是标签，是知识关联」，要我先搞懂 Obsidian 关联范式再画。
> 本文件是原始报告存档；设计结论已提炼进 需求共识.md。

## 〇、一句话地图：关联分三层

| 层 | 机制 | 谁产生 | 发布站(Quartz)还在吗 |
|---|---|---|---|
| 显式链接层 | Wikilink `[[]]`、嵌入 `![[]]`、块引 `^id` | 人/流水线写进正文或属性 | ✅ 在 |
| 自动反演层 | 反链(Linked/Unlinked)、关系图谱 | 引擎自动算 | ⚠️ 反链✅ 图谱✅ **未链接提及❌** |
| 人工编织层 | 别名、属性、标签、MOC、Dataview/Bases、Canvas | 人/流水线主动写 | 差异大 |

> **对 AI 流水线项目最要命的一句**：所谓「白送」的（反链/图谱/未链接提及）**全都以「有人真写了显式 `[[]]` 链接 + frontmatter 属性」为前提**。流水线真正的活=把关联落成显式链接和属性；做不到，自动层全部归零。

## 一、11 个维度速查（详见原报告，此处留结论）

1. **Wikilink `[[]]`**：地基。`[[名]]`/`[[名|显示名]]`/`[[名#标题]]`/`[[名#^块]]`。Quartz 全支持。[官方](https://obsidian.md/help/links)
2. **反向链接**：Linked mentions（显式链来的）+ **Unlinked mentions（提到名字/别名但没链，引擎自动找）**。⚠️ **Unlinked mentions 只在桌面 App，Quartz 发布站没有**——当流水线「待补链信号」用，不能靠它在站上串联。纯文本子串匹配，别名表完备度决定召回。[官方](https://obsidian.md/help/plugins/backlinks) [别名](https://obsidian.md/help/aliases)
3. **嵌入 `![[]]`**：把别处内容内联展开。实体页可 `![[某集#金句]]` 嵌金句。Quartz 支持。[官方](https://obsidian.md/help/embeds)
4. **块引 `^id`**：给某句/某段锚点，精确引用。**金句机制的答案**——每条金句打 `^语义化ID`，任何页可精确引用+回链。Quartz 支持。[官方](https://obsidian.md/help/links)
5. **别名 Aliases**（frontmatter `aliases:`）：同一实体多个叫法归一（Modal/摩达尔、Sam Altman/奥特曼）。**流水线必写**，越全越准。Quartz 支持。[官方](https://obsidian.md/help/aliases)
6. **标签 Tags** `#tag`/嵌套 `#a/b`：轻关联=分面筛选（来源/赛道/类型/年份），不承担「人↔公司」定向关系。Quartz 生成标签页。[官方](https://obsidian.md/help/tags)
7. **属性 Properties**（frontmatter）：**类型化关系主力**——`guests: [[X]]` 表达「X 是嘉宾」而非平链。机器可读、可聚合、AI 最易稳定产出。⚠️ **v4 不显示，v5 有 NoteProperties 面板**。[官方](https://obsidian.md/help/properties) [Quartz v5](https://quartz.jzhao.xyz/plugins/noteproperties)
8. **关系图谱**：全局图 + **局部图（Local graph，N 跳邻域）**。边只来自显式链接。局部图=详情页关联区最直观一块。Quartz 渲染 local+global。[官方](https://obsidian.md/help/plugins/graph) [Quartz](https://quartz.jzhao.xyz/features/graph-view)
9. **MOC 地图笔记**：人工策划的主题索引页（「2025 AI Agent 演讲精华 MOC」）。**人工价值最高、不能全自动**（否则退化成机器列表）。机器出候选、人做编排。[LYT](https://notes.linkingyourthinking.com/Cards/MOCs+Overview)
10. **Dataview / Bases**（聚合引擎，实体页自动列「所有提到 TA 的集」）：
    - **Bases**（官方核心，2025 新增，[1.9.10 全量 2025-08-18](https://obsidian.md/changelog/2025-08-18-desktop-v1.9.10/)）：frontmatter 当数据库→表/列表/卡片/地图视图。**Quartz v5 原生渲染**。**推荐**。[官方](https://obsidian.md/help/bases) [Quartz](https://quartz.jzhao.xyz/features/bases)
    - **Dataview**（社区老牌，[0.5.70 2025-04 后停滞](https://www.obsidianstats.com/plugins/dataview)）：DQL 更灵活、能读正文行内字段，但**Quartz 不原生**（需 Syncer 预烤成静态）。备选。
11. **其它**：Breadcrumbs（类型化层级链接，App 内可视化，Quartz 不渲染其视图）；Juggl（已停更 2023-11）；Canvas（人工白板策展）。

## 二、三个判断题结论

### A. 成熟笔记页的「关联区块」范式（可直接抄成详情页）
顶部**属性区**（嘉宾/公司/概念/来源，可点）→ 正文**内联链接+金句块** → 底部**出链清单 + 反链清单 + 局部图 + 相关笔记聚合表**。

### B. 自动 vs 人工（AI 流水线最要命的表）
- **引擎自动白送**（前提是有显式链接）：Linked backlinks ✅站上有、图谱 ✅、出链清单 ✅、Unlinked mentions ❌站上无
- **流水线必写**：`[[]]` 内联链接、别名表、类型化属性、金句块 ID
- **一句话**：白送的全靠「真写了 `[[]]` 和属性」。流水线两件必做事：①正文实体写成 `[[]]`（或按别名表批量补链）②frontmatter 写全属性+别名。

### C. 本项目映射

**单集笔记 frontmatter（流水线产出）**：
```yaml
title: "..."
aliases: ["该集别名"]
podcast: "[[Latent Space]]"
host: "[[swyx]]"
guests: ["[[Akshat Bubna]]"]
companies: ["[[Modal]]", "[[NVIDIA]]"]
concepts: ["[[投机解码]]", "[[沙箱]]", "[[Agent]]"]
date: 2026-07-08
source_url: "..."
tags: [领域/AI, 类型/访谈, 年份/2026]
```
正文：精华里实体写 `[[]]`；每条金句打块 ID（`> …金句… ^key-insight-1`）。

**单集详情页知识关联区** = ①顶部属性卡(嘉宾/公司/概念/来源，可点) ②正文内联链接+可引用金句块 ③底部：本集出链 + 反链 + 局部图(1跳) + 相关单集(同嘉宾/同公司/同概念，Bases 聚合)

**实体页（人物/公司/概念，frontmatter `type:` 分面）** = ①别名表(越全越好) ②自动反链区「TA 出现在这些集」 ③**Bases 聚合表(主区)** ④金句墙(`![[某集#^金句]]` 嵌入) ⑤局部图 ⑥(可选)关联实体/MOC 导语

**流水线两条铁律**：①维护全局实体别名表，生成精华后按别名批量补链（未链接提及转显式，站上才可见）②类型化关系走 frontmatter 属性 + Bases 聚合（Quartz v5 原生，最稳最可移植）。

## 三、Quartz 支持度关键短板（发布场景必知）
- ❌ **未链接提及任何版本都没有** → 流水线里落成显式链接
- ⚠️ **Dataview 不原生**（需 Syncer 预烤）→ 用 Bases
- ⚠️ **属性面板 v4 不显示，v5 才有** → 用 **Quartz v5 + Bases + NoteProperties**
- 版本提示：Quartz 默认分支已 v5，但正式 tag 停 v4.0.8（2023-08，走分支滚动）。属性+Bases 只在 v5，务必确认跑 v5。[Quartz v5](https://quartz.jzhao.xyz/getting-started/whats-new)
