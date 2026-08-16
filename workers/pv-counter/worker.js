// C27 · 访问计数 Worker(2026-08-16 用户拍板:自建免费计数器,真实 PV 不加工)。
// 独立 Worker + Durable Object(SQLite 免费档),不碰 Pages 站点路由 —— 计数挂了站点零影响。
// 存储:单例 DO(idFromName("global")),键 total=累计、d:<北京日>=当日。
// 端点:POST /hit 计一次并返回数字;GET /stats 只读。CORS 白名单站点域名。

/** 北京时间(UTC+8)的日期串 YYYY-MM-DD —— 「今日」按北京时间切日(用户验收标准 2) */
export function bjDay(ts = Date.now()) {
  return new Date(ts + 8 * 3600e3).toISOString().slice(0, 10);
}

const ALLOW = new Set([
  "https://talk.solomind.cc",
  "http://localhost:8099", // 本地静态预览
  "http://localhost:8080", // 本地 quartz --serve
]);

/** CORS 头:白名单内回显来源,名单外一律按站点域名(等于对陌生来源关门) */
export function corsHeaders(origin) {
  const o = ALLOW.has(origin) ? origin : "https://talk.solomind.cc";
  return {
    "Access-Control-Allow-Origin": o,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export class Counter {
  constructor(state) {
    this.storage = state.storage;
  }
  async fetch(req) {
    const url = new URL(req.url);
    const dayKey = "d:" + bjDay();
    let [total, today] = await Promise.all([this.storage.get("total"), this.storage.get(dayKey)]);
    total = total || 0;
    today = today || 0;
    if (req.method === "POST" && url.pathname === "/hit") {
      total += 1;
      today += 1;
      await this.storage.put({ total, [dayKey]: today });
    }
    return Response.json({ total, today });
  }
}

export default {
  async fetch(req, env) {
    const h = corsHeaders(req.headers.get("Origin") || "");
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: h });
    const url = new URL(req.url);
    const ok =
      (req.method === "POST" && url.pathname === "/hit") ||
      (req.method === "GET" && url.pathname === "/stats");
    if (!ok) return new Response("not found", { status: 404, headers: h });
    const stub = env.COUNTER.get(env.COUNTER.idFromName("global"));
    const res = await stub.fetch(req);
    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(h)) out.headers.set(k, v);
    return out;
  },
};
