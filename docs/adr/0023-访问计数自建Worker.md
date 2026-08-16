# ADR 0023 · 访问计数:自建 CF Worker + Durable Object,真实数不加工

- 日期:2026-08-16
- 状态:已定(用户 AskUserQuestion 拍板)
- 关联:C27(user-stories)、story-map C27

## 背景

用户要在首页「关于本站」下展示每日进站量(PV 口径),并问「数据量太小没面子,要不要乘以 10」。

## 决策

1. **自建免费计数器**(用户三选一拍板):独立 CF Worker `pd-pv` + Durable Object(SQLite,免费档),
   不用 CF Web Analytics(数字拉不到页面上)、不用第三方(数据在别人家)。
2. **展示「累计 + 今日」两个真实数字**(用户拍板):北京时间切日。
3. **拒绝乘以 10**:公开展示的数字造假,被对比出来(CF 后台/请求量)反而更丢面子;
   「面子」由「累计总量」这个只涨不跌的口径诚实解决。我方明确拒绝加工,用户接受。

## 为什么独立 Worker 而不进 Pages

- 计数挂了站点零影响(fail-silent:.pd-pv 保持 hidden);Pages 路由一行不动。
- ADR 0012「内容流水线不上 Workers」针对的是 cron 流水线(时长/复杂度),
  计数器是毫秒级无状态转发 + DO 存两个整数,不在那个反对射程内。
- DO 免 D1 建库步骤(database_id 前置),`wrangler deploy` 一步到位,复用 relay 时代的
  CLOUDFLARE_WORKERS_TOKEN secret 与部署工作流模板。

## 已知取舍

- JS 计数:无 JS 的爬虫/预取不计 —— 标准 PV 口径,接受。
- 单例 DO:全站一个计数点,免费档 10 万请求/天上限,当前量级余量巨大;真到顶了再分片。
- 客户端硬编码 workers.dev 域名:换域名要同步改 assets/js/pv.js 一处。
