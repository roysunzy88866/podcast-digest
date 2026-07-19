# ADR 0012 · C7b 执行环境 = GitHub Actions cron(不用 Cloudflare Workers)

- **状态**:已定(2026-07-19 用户认可)
- **相关**:drift #21 / #20 · ADR 0011(全自动) · 需求共识 L206 🔒 留痕 · story-map C7b

## 背景
C7b(无人值守)要定时自动跑整条流水线。共识 L206 🔒 原设想「CF Workers 定时触发 → …机器闸门(Workers 跑) → Quartz build → Pages 发布」。C7b P1 架构核验实测:**Cloudflare Workers runtime(V8 isolate,无二进制、无文件系统)跑不了** ffmpeg(音频合成,tts/gate-audio)、quartz build(Node 构建工具链)、glm-ask CLI(子进程)、本地 fs(27 脚本)。即「Workers 跑整条流水线」是未核验的纸面设想(同 Bases 坑,drift 已登记)。

## 备选与淘汰
| 方案 | 淘汰理由 |
|---|---|
| 全上 Workers | 26 脚本全为 Workers runtime 重写 + ffmpeg/quartz 仍要外包 = 工作量地狱、部分做不到 |
| CF Container | 还在 Beta(无 SLA)、要 Worker 编排+Dockerfile+生命周期续命、按量计费、为长驻服务设计(跑批处理偏重) |
| Mac mini | 国内直连 GLM 是优势,但**墙内 → 部署 CF 要翻墙** + 需常开维护(违「无常开机器」初衷) |

## 决策
**GitHub Actions cron。** 用户 2026-07-19 认可。

## 理由
1. **复用现有 26 个 `.mjs` 脚本几乎不重写** —— Linux runner 上 ffmpeg/node/quartz/glm-ask CLI/fs 全套可跑。
2. **cron 定时内置**(`on: schedule`)。
3. **免费**:公开仓库 Actions 无限;私有仓库 2000 分钟/月,几十集/月大概率够。
4. **机器在墙外反而绕开 GFW**:访问 CF 部署、海外播客源顺;调国内智谱 GLM 也可达(中国防火墙不挡「从国外访问国内 API」,顶多慢 —— **实施前实测一次确认**)。
5. **与 C7c 合流**:上线 checklist 本就要建 GitHub 远端 + CI,一并做。

## 后果 / 交底
- **改 🔒 L206**:「CF Workers 跑流水线」→ GitHub Actions;共识已留痕。「全云端·无常开机器」精神不变(Actions 按需跑完即退)。
- **内容仍托管 Cloudflare Pages**(voice.solomind.cc)。**已诚实交底:国内访问不保证稳定**(CF 免费版无境内节点、GFW 间歇干扰);境外托管 + 版权灰色不能备案下**无更好解**,CF 自定义域已是相对较好。用户知情继续。
- **密钥**:GLM/ASR key 走 GitHub Secrets(用户自持,Claude 不碰明文)。
- **全自动发布**沿 ADR 0011(风险自担 + 通知/回滚安全网)。

## 待新 session 实现(P1 前置核验先行)
① 建 GitHub 远端仓库(公开 vs 私有,用户定——关系 Actions 免费额度与代码是否公开)+ push。
② `.github/workflows/`:cron → checkout → 装 ffmpeg + node deps → 跑流水线(去重「有没有新集」)→ 闸门全过 → `wrangler pages deploy` → 通知。
③ **P1 核验**:runner(海外)真调智谱 GLM 一次(验可达+速度)+ 真装 ffmpeg 端到端跑一集。
④ 失败/坏稿告警 + 一键回滚(CF Pages 回滚上一版)。
