// feed-relay:从 Cloudflare 边缘代抓被 Substack「按请求方 IP 喂陈旧」的 RSS feed(drift #55)。
//
// 病根:GitHub Actions runner IP 抓 www.lennysnewsletter.com/feed 拿到停在旧日期的副本;
//       本机(住宅 IP)抓同一 URL 是新鲜的。query cache-buster + 客户端 Cache-Control 都无效
//       (源站按 IP 决定给什么,查询参数改不了 · 验证 run 31936505062 实证)。
// 此招:Worker 从 CF 网络抓 + `cf.cacheTtl:0`(CF 原生边缘缓存指令,比客户端头强)+ 不同 IP 段,
//       试图拿到新鲜 feed。成不成要 curl 部署后的 Worker 验(有没有 08-15)。
//
// 安全:只代抓白名单内的 feed 主机,不做开放代理;只 GET,只回源文本。
const ALLOW = new Set([
  "www.lennysnewsletter.com",
  "www.dwarkesh.com",
  "dwarkesh.com",
  "insecureagents.substack.com",
  "www.interconnects.ai",
]);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

export default {
  async fetch(request) {
    const reqUrl = new URL(request.url);
    const target = reqUrl.searchParams.get("url");
    if (!target) return new Response("missing ?url=", { status: 400 });

    let t;
    try {
      t = new URL(target);
    } catch {
      return new Response("bad url", { status: 400 });
    }
    if (t.protocol !== "https:" || !ALLOW.has(t.hostname)) {
      return new Response("host not allowed", { status: 403 });
    }
    // 只许 feed 路径(GLM 017[1]:host 白名单不够,防被当同域任意路径的开放代理)
    const isFeedPath = t.pathname === "/feed" || t.pathname === "/feed.json" || /\.(rss|xml)$/i.test(t.pathname);
    if (!isFeedPath) return new Response("path not allowed (feed only)", { status: 403 });

    let upstream;
    try {
      upstream = await fetch(t.toString(), {
        headers: { "User-Agent": UA, Accept: "*/*", "Cache-Control": "no-cache" },
        cf: { cacheTtl: 0, cacheEverything: false }, // 强制回源,不吃 CF 边缘缓存
      });
    } catch {
      return new Response("upstream error", { status: 502 }); // GLM 017[4]:不外泄异常细节
    }

    const body = await upstream.text();
    return new Response(body, {
      status: upstream.status,
      headers: {
        "content-type":
          upstream.headers.get("content-type") || "application/rss+xml; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  },
};
