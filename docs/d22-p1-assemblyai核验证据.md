# D22 前置核验 P1 · AssemblyAI 转写(证据)

**日期**:2026-07-18 · **结论:P1 通过**。AssemblyAI 国内直连、说话人分离准、质量对得上官方稿、无幻觉 → **VAD 不需要**(Whisper 铁律对它不适用)。**ASR 进料口技术上成立**。

## 证据(真调 Modal 集源 mp3,该集有官方稿作 ground truth)
- **国内直连**:提交 + 轮询 + 拿结果全通(key 运行时从用户 `Assembly.md` 现读,不落盘、不回显)。**~24 秒转完 57 分钟**音频。
- **词数**:AssemblyAI **9896 词** vs 官方稿 **9858 词**(差 0.4%,内容基本一致)。
- **说话人分离**:3 个(A/B/C),段数比 **B140 > A132 >> C34**,对上官方 meta 的 **Akshat > swyx >> Vibhu** → A=swyx、B=Akshat、C=Vibhu(A 开场作主持「We're here with Akshat…together with Vibhu」印证)。
- **质量**:开场「Akshat…Modo…Vibhu…Series C」与官方稿一致;且 `Series C` AssemblyAI **转对了**,官方 Substack 稿那处反而是错的 `3C` → 质量不输官方稿。
- **幻觉**:结尾静音高发区干净、**0 连续完全重复段** → 无幻觉。**VAD 不需要**(「转写前必 VAD」是针对 Whisper 系写的;AssemblyAI Universal-2 不在静音处无中生有)。
- **成本**:~$0.15(从 $50 起步额度走)。

## 对 D22 的影响 / 剩下的 build
- 进料口技术成立。**剩下**:①mp3 URL → AssemblyAI → 转成**现有 pipeline 兼容**的 `transcript.en.json`(逐词时间戳+说话人)+ meta ②`speaker_map`(A/B/C → 真名,机器定不了 → 给证据、用户点头,同 C2)③喂现有 `translate → condense → gate` 流水线 ④挑一集**真没官方稿**的集端到端验通。
- 说话人分离让金句「谁说的」归属可保(防失真三联的说话人层照常工作)。
