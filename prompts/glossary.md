# 术语表 · 统一译名(全译 + 浓缩共用)

> 目的=分段并行翻译时跨段译名一致(试跑最大风险)。只管**一致性**,不管纠错。
> 用法:注入全译/浓缩 system prompt。新集发现高频新术语 → 补这里再跑。

## 保留英文不译(品牌/协议/库/缩写)
Modal · Kubernetes(K8s) · GPU · CPU · RDMA · IPv6 · vLLM · SGLang · DeFlash · Modal Bench · Gitpod · Ona · ChatGPT · Claude · Python · TypeScript · CI · ETL · DSL · RL · LLM · API · CTO · CEO · vibe coding · Cognition

## 统一中文译名
| 英文 | 中文 | 备注 |
|---|---|---|
| agent | 智能体 | ⚠️ **不译「代理」**;proxy 才是「代理」 |
| agency | 主观能动性 | ⚠️ 不译「智能体」(那是 agent);2026-07-24 漂移钉死 |
| prompt injection | 提示词注入 | 2026-07-24 漂移钉死(vs 提示注入) |
| micromanagement | 微管理 | 2026-07-24 漂移钉死(vs 微观管理) |
| sandbox | 沙箱 | 试跑高频(35次) |
| inference | 推理 | 试跑高频(34次) |
| decorator | 装饰器 | |
| speculative decoding | 投机解码 | |
| serverless | 无服务器 | |
| runtime | 运行时 | |
| cold start | 冷启动 | |
| snapshot / snapshotting | 快照 | GPU snapshotting=GPU 快照 |
| burstiness / bursty | 突发性 / 突发的 | |
| observability | 可观测性 | |
| guardrails | 护栏 | |
| supercloud | 超级云 | Modal 的多云容量池策略 |
| Auto Endpoints | Auto Endpoints | 产品名保留 |
| multi-node training | 多节点训练 | |
| post-training | 后训练 | |
| capacity pool | 容量池 | |

## ⚠️ 转写错纠正边界(依 drift-log #3)
- **全译层**:照搬原文错误,**不纠正**(如原稿 model philosophy / Modo / Eric / 3C,照译为「模型…/Modo/Eric/3C」,不擅自改 Modal/Erik/Series C)。它是真相派生,须镜像转写稿。
- **浓缩层(精华)**:才做「改对 + 标注『原文误作 X』」;金句英文侧仍照转写稿原样。
