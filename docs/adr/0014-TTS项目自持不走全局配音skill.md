# ADR 0014 · 生产 TTS 项目自持(tts.mjs),不走全局配音 skill

- **状态**:已定(2026-07-20 用户拍板「保持手写 tts.mjs,把为何不走 skill 记清楚」)
- **相关**:全局 `~/Documents/Projects/CLAUDE.md`「要配音就调配音 skill、**不要在项目里手写 TTS**」· 本项目 CLAUDE.md 架构一句话 · drift #13(edge-tts)· `scripts/tts.mjs` · `~/.claude/skills/配音/peiyin.py`
- **背景**:用户核实生产 TTS 时问「用的是配音 skill 吗」,牵出两件事:①之前的文档同步误把 TTS 写成「配音 skill / MiMo」(已改正,commit 4910bdb);②触到一个真实架构张力——**全局约定说「别在项目里手写 TTS,要调全局配音 skill」,但本项目恰恰手写了 `tts.mjs`**。本 ADR 把「为何不走 skill」正式落盘,消除这个表面矛盾。

## 决定

**生产 TTS 保持 `scripts/tts.mjs` 项目自持**(edge-tts 免费默认 + Azure F0 fallback),**不迁移到全局配音 skill**。

## 为什么(不违约定的实质理由)

1. **生产流水线跑在 GitHub Actions 无人值守云 runner**,需要**仓库内自包含**的代码;全局 skill 装在**用户本机** `~/.claude/skills/配音/`,CI runner(全新 Ubuntu)上根本不存在。
2. 要让 CI 用上 skill,只能把 `peiyin.py` **vendoring 拷进仓库** → 副本会跟 skill 原版**漂移**,反而**破坏 skill「中央厨房、一处修全项目生效」的初衷**。得不偿失。
3. 全局配音 skill 的设计定位 = 给**本机交互式 Claude 会话**用的能力(报音色名即用、MiMo 克隆),**不是给跨机 headless CI** 用的。约定「别手写 TTS」默认场景是本机项目,与「云 CI 流水线」不完全适配。
4. `tts.mjs` 现状**能跑、免费(edge-tts 白嫖)、自包含**,2 集(Netflix/Adam)已上线验证。

> 所以「项目手写 TTS」在这个 CI 场景下**不是偷懒违约定,是约定的默认场景(本机)不覆盖 headless 云流水线**。

## 代价 / 残余风险(用户知情接受)

- **享受不到 skill 的升级**(如 MiMo 克隆变好、自动剪尾优化)——要用得手动把改进搬进 `tts.mjs`。
- edge-tts / Azure fallback 逻辑由**本项目自维护**(与 skill 各维护一份 TTS 实现,重复)。

## 复审时机

- 若配音 skill 出了**可 pip 安装的包 / 稳定公开 CLI**(装进 CI 无需 vendoring),重新评估迁移。
- 若项目要**MiMo 克隆的固定嗓**(edge 官方音色不够用),值得为它 vendoring peiyin.py 或走 skill。
