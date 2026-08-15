# ADR 0022 · JSON Feed 全文订阅源(面向 Agent + 现代 RSS 阅读器)

- 状态:已接受(2026-08-16,用户 AskUserQuestion 明选:「加 JSON Feed /feed.json」+「订阅源放整篇中文精华全文」)
- 关联:切片 C26 · 呼应 C22(llms.txt,ADR 无独立号)对「agentic-llms.txt / MCP 已排除」的结论 · 现有 `/feed.xml`(播客 feed,C4 Scenario 3)· `/llms.txt`(C22)

## 背景

站上已有两条订阅面:
- `/feed.xml` —— 播客 RSS(中文配音**音频** enclosure + tldr 摘要 + iTunes 命名空间),面向播客 App「听」。
- `/llms.txt` —— llmstxt.org 目录(站名+简介+每集链接+一句话摘要),面向 AI/Agent 做**索引**。

缺口:没有一条给 **Agent / RSS 阅读器直接读中文精华文字**的订阅源。`/feed.xml` 是音频版;`/llms.txt` 只有目录摘要没全文;Quartz 自带 `/index.xml` 是噪音(含标签页、只取最近 10、描述是页面裸文本)。C22 当时把 MCP 排除(需常开服务、逆「全云端无常开机器」架构),把 agentic-llms.txt 排除(无交易可指)——但没给「读全文」的结构化订阅源。

## 决定

1. **新增 JSON Feed `/feed.json`**(jsonfeed.org v1.1)。选 JSON Feed 而非再造 XML RSS:一份通吃——现代 RSS 阅读器(Feedly/Inoreader/NetNewsWire/Reeder)都支持,且结构化 JSON 对 Agent 比解析 XML / 抓 llms.txt 友好得多。
2. **item 放中文精华全文**(用户明选):`content_text = digest_md`(markdown 原样)。用 `content_text` 不用 `content_html`——agent 读 markdown 更好,且**不引 md→html 渲染依赖**(简到极致,同 build-feed「不引 XML 库」)。`summary = tldr`(摘要仍在,阅读器可折叠)。
3. **排序按 `added`(入库日)降序** → 新精华置顶,同首页「最新」口径(drift #47);`date_published = 原集日期`(同 `/feed.xml`,内容真实发布日),`date_modified = 入库日`。阅读器靠 item `id`(=集页 URL)判新未读,不受 date 影响。
4. **版权红线守住**:feed 顶层 `authors = 本站`(我们写的中文精华),**不冒充原播客本体**(不标 PodcastEpisode/PodcastSeries,同 seo.mjs JSON-LD 口径);`url` 指本站集页,不用 `external_url` 劫持主链接把订阅者引走。诚实溯源(isBasedOn 原播客)在集页,feed 不重复。
5. **只做 JSON Feed 这一条**(用户未选 rss.xml / llms-full.txt)。不做自发现 `<link>` 注入(patch-site 脆弱,agent/reader 按已知 URL 取即可;留作低成本后续)。

## 理由

- 「读全文」是现有两条订阅面都缺的真缺口;JSON Feed 一份同时覆盖 Agent + 现代阅读器,边际成本最低(复用 `samples/*.md` 已发布口径 + `digest_md`,零新基建)。
- 全文 vs 摘要:精华正文本来就已公开在集页(静态 HTML),放进 feed 只是让批量抓取变容易;用户为「Agent 一次喂全」明选全文。
- 判断权归用户(对外/谁能用/内容深度),已 AskUserQuestion 拍板。

## 影响

- 构建期加一步 `build-json-feed.mjs`(collectPublishedFull → `seo.mjs` 纯函数 `buildJsonFeed` → `public/feed.json`),deploy-site 通道随站上线;`_headers` 给 `/feed.json` 同 `/feed.xml` 的 `max-age=3600`;部署前硬断言 `items>0`(防再漏订阅源静默上线,同 drift #29 feed 教训)。
- feed.json 约 1.1MB(128 集全文),静态文件 + 短缓存可接受;若下载量成问题再分页(同 C24「不做真分页,留待需求真出现」的克制)。
- 不碰 pipeline / 防失真闸门 / 现有 feed.xml / llms.txt。分类源用 render.mjs `episodeCategories`(与首页卡片 chip 同源)。
