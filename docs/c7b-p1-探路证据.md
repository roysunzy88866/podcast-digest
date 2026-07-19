# C7b P1 前置核验 · 探路证据(先验后写)

> 铁律「纸面契约先验」的落地。C7b 把流水线搬上 GitHub Actions 前,先在真 runner 上验三个本地(macOS)测不了的风险。**全绿才写真编排器。**
> 证据来源:公开仓 `roysunzy88866/podcast-digest` workflow `.github/workflows/p1-probe.yml`,run [29675458166](https://github.com/roysunzy88866/podcast-digest/actions/runs/29675458166)(2026-07-19,2m18s,全 ✓)。

## 三个风险 · 逐条结论

| # | 风险(为什么本地测不了) | 验法 | 结论 |
|---|---|---|---|
| **P1a** | 海外 runner 能否连智谱 GLM 国内入口 `open.bigmodel.cn`?多慢?(drift #21 赌"墙外绕开 GFW",没实测过) | runner 真发一次 GLM-5.2 调用并计时 | ✅ **通**。runner 出口 IP `104.209.7.34`(US, San Jose, California)→ GLM 回复"收到"(正确)→ **往返 2.04 秒**。Secret 在日志打码 `***`。**"从国外访问国内 API 不被 GFW 挡、且快"——坐实。** |
| **P1b1** | edge-tts(非官方微软接口,免 key)+ ffmpeg 在 Linux runner 跑不跑得通? | `apt install ffmpeg` + `pip install edge-tts` → 遍历有 digest.json 的集真合成音频 → gate-audio | ✅ **通**。两集音频真合成(modal 577.1s/3.46MB 真 mp3、databricks 同),ffmpeg 拼接成功,gate-audio 四条 fail-closed 全过。 |
| **P1b2** | Quartz v5 clone 钉 commit + 插件 `--from-config --latest` + build 在 Linux 跑不跑得通? | 复刻 bootstrap-site.sh 的 Linux 等价步骤(去 fnm/brew,用 setup-node)→ build → gate-all | ✅ **通**。钉 commit `9cf87ff` clone、`npm i`、插件装、灌 samples、build-list、build 出 public/、gate-all 五层(三联+事实+实体+关联+音频)全绿。 |

## 首跑一个假失败(记账,非平台问题)

第一次 run [29675341883](https://github.com/roysunzy88866/podcast-digest/actions/runs/29675341883) P1b1/P1b2 挂在**音频闸门**:探路脚本只合成了 modal 一集,漏了 databricks(audio.mp3 gitignore、没现场再生)→ gate-audio「已发布集必须集集有音频、缺≠通过」如实拦下。**这恰恰证明闸门 fail-closed 正确**;修探路脚本为遍历全部有 digest 的集都合成后,重跑全绿。平台三风险首跑其实就已全过。

## 对 C7b 真编排器的启示

1. **GLM 走 `tools/glm-ask` 副本 + `ZHIPU_API_KEY` 环境变量注入**(Secret,不落盘)——已验可用。
2. **音频每集都得现场再生**(audio.mp3 gitignore):编排器处理某集必须跑 tts,否则 gate-audio 拦。这是真实约束、非探路 quirk。
3. **site/ 现场 bootstrap**:Linux 上 clone Quartz 钉 commit + 插件 + build 可行;但 **baseUrl 定制仍未进脚本**(wip 遗留、归 C7c/D21)——真编排器 build 时要把 baseUrl 设成 `voice.solomind.cc`,否则 feed URL 错。
4. **插件 `--latest` 是 D21 浮动风险**:本次能 build,但版本不钉;硬化归 C7c。
5. **Node 20 deprecation warning**(checkout/setup-node 被迫跑 Node 24):仅告警不影响,C7c 升 action 版本时收。

## 未验(留真编排器/后续 P 阶段)

- **ASR 兜底**(无官方稿的集):AssemblyAI/CF nova-3 从 runner 调的可达性 + 质量,真编排器处理无稿集时验(drift #14/#16)。
- **wrangler pages deploy 从 CI**:需 CF API token(Secret),Scenario 3 搭部署步时验。
- **端到端真跑一集新集**:P1 用的是已入库两集(digest 已在);真·新集从 RSS 进料的完整链留里程碑 E2E(Scenario 4)。
