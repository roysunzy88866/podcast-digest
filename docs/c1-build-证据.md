# C1 环境证据 · Quartz v5 本机真 build(2026-07-17)

> C1 定位=环境证据层:把「Quartz v5 能 build / Bases / Node 兼容」的纸面假设换成本机真跑证据。
> 本文件=真 build 的落盘证据(证据而非自述)。核实的纸面假设见 `需求共创/核实-Quartz现状-20260717.md`。
> 可复现:`scripts/bootstrap-site.sh`(钉 commit)+ 版本化的 `samples/`。

## 一、真 build 结果(✅ 全绿)

| 项 | 实测证据 |
|---|---|
| Quartz 版本 | **v5.0.0**,commit `9cf87ff1c248a8ca551093214b0fec3b31415009`(v5 分支 @2026-06-16,已钉) |
| Node | **22.16.0**(fnm 装,对齐 Quartz `.node-version`),npm 10.9.2 |
| `npm i` | ✅ 285 包 / 43s;**sharp 命中 darwin-arm64 预编译**(无源码编译,未触发 Python/libvips) |
| 插件 | ✅ `plugin install --from-config --latest` → **44 个全 resolved+built**(含 bases-page / note-properties / graph / search / backlinks / explorer) |
| `build` | ✅ 退出码 0、无 error;样片页 + og-image.webp 均产出(build 日志报 emit 68;磁盘 site/public 实测 **56** 文件——emit 计数含非文件输出,口径不同,以磁盘为准) |
| `build --serve` | ✅ 本地站 http://localhost:8080 起来 |
| 渲染验收 | ✅ 样片详情页浏览器打开,中文零乱码;`npm run verify:c1` 锚点(标题/嘉宾/导读串/占位标识)+ 防假绿结构检查全过(**去掉旧版误导的「逐字」命名——C1 不校验防失真**) |

## 二、真 build 暴露的本机问题 + 处置(纸面调研零覆盖)

1. **git 全局代理指向失效端口**:`http(s).proxy=127.0.0.1:10090`(无监听),真实代理是 clash `7890`。
   → create/plugin 内部 44 次 git clone 全挂。**处置**:`git config --global http(s).proxy` 改 10090→7890(修正坏配置)。
   ⚠️ **这是【全局】改动,波及用户所有 git 仓库**(超出「只动本项目」边界);**用户 2026-07-17 明确确认保留 7890**(10090 本就失效)。回退:改回 10090,或改用项目级 `git config --local`。
2. **本机无 Node 版本管理器**(nvm/fnm/volta 皆无),只有 Node 25.9(已过 EOL、上游未测)。
   → **处置**:`brew install fnm` + 切 22.16.0(对齐上游,依核实报告建议)。
3. **fresh clone 的 plugin install 撞 lockfile 旧 commit**(核实报告预警的坑)。
   → **处置**:`--latest` 抓最新版,44 个全过,坑绕开。
4. **vitest 测试门被 site/ 里 Quartz 自带几百个测试污染**(gitignore 不挡 vitest)。
   → **处置**:加 `vitest.config.ts` 限 `include: tests/**`,测试门锁回本仓库。

## 三、核实报告 §五「待本机真 build 证实」逐条对账

| 待证实点 | C1 结果 |
|---|---|
| Node 能否端到端真 build Quartz v5 | ✅ **能**(Node 22.16.0,退出码 0) |
| sharp/lightningcss 是否命中预编译还是回落源码 | ✅ **命中 darwin-arm64 预编译**,无源码编译 |
| plugin install 是否撞 lockfile 旧 commit,`--latest` 是否修好 | ✅ 会撞,`--latest` **修好**(44/44) |
| bases-page 能否真装 + 喂 `.base` 聚合是否真渲染 | ⏳ **推 C3**(插件已装上,但未喂真 `.base` 验聚合/未验已知渲染 bug) |
| NoteProperties 属性面板喂真 frontmatter 是否渲染 | ✅ **渲染**(样片 tags 已在详情页出 Properties 面板) |
| Cloudflare Access 下 unlisted 是否让聚合表漏集 | ⏳ **推 C4/C7** |
| 钉哪个 commit 可复现 | ✅ 钉 `9cf87ff`,`bootstrap-site.sh` 固化 |

## 四、C1 未做(留后续,防范围蔓延)

- 样片正文=**版式占位**(诚实标注),非第 1 期完整精华稿 → 真实精华由 **C2** 流水线产出,或用户提供 artifact 内容后替换。
- `[[双链]]` / frontmatter 类型化关系聚合(Bases 真渲染) / 金句 `^块ID` / 别名表 → **C3**。
- 音频播放器 / 私有 feed → **C4**;列表页 / 搜索 → **C5**;上云 + Access → **C7**。
- **site/ 版本化架构**(vendored / submodule / 内容分离)未定 → 记 tech-debt,C2 一起定。
