---
title: LLM 网关生产化实战：Twilio 首席工程师的取舍与踩坑
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "16:04"
type: episode
cover: "#64748b"
description: Twilio 首席工程师 Kanesh Manuja 讲解 LLM 网关生产化：如何在可用性、延迟、护栏、成本四者间取舍，以及跨供应商回退、护栏放置与超时等实战经验。
guests: ["[[Kanish Manuja]]"]
companies: ["[[Twilio]]"]
concepts: ["[[LLM 网关]]", "[[回退]]", "[[断路器]]", "[[延迟]]", "[[护栏]]", "[[提示词注入]]", "[[推理模型]]", "[[fail open]]", "[[负载卸载]]", "[[集中式治理]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-productionizing-llm-gateways-architectur#post","headline":"LLM 网关生产化实战：Twilio 首席工程师的取舍与踩坑","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-productionizing-llm-gateways-architectur","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-productionizing-llm-gateways-architectur","description":"Twilio 首席工程师 Kanesh Manuja 讲解 LLM 网关生产化：如何在可用性、延迟、护栏、成本四者间取舍，以及跨供应商回退、护栏放置与超时等实战经验。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kanish Manuja"},{"@type":"Organization","name":"Twilio"},{"@type":"Thing","name":"LLM 网关 (LLM gateway)"},{"@type":"Thing","name":"回退 (fallback)"},{"@type":"Thing","name":"断路器 (circuit breaker)"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"推理模型 (reasoning models)"},{"@type":"Thing","name":"fail open"},{"@type":"Thing","name":"负载卸载 (load shedding)"},{"@type":"Thing","name":"集中式治理 (centralized governance)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"LLM 网关生产化实战：Twilio 首席工程师的取舍与踩坑","item":"https://talk.solomind.cc/2026-08-28-talks-productionizing-llm-gateways-architectur"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>LLM 网关生产化实战：Twilio 首席工程师的取舍与踩坑</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# LLM 网关生产化实战：Twilio 首席工程师的取舍与踩坑

<div class="pd-byl"><b>Kanish Manuja</b> · Twilio 首席工程师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-productionizing-llm-gateways-architectur.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">网关的核心处，是四样东西之间的博弈：可用性、延迟、你的护栏，以及成本。</div><div class="a">— Kanish Manuja <button class="pd-ts" data-t="01:08" data-who="Kanish Manuja" data-en="And right at the heart of the gateway is a fight between four things. It's availability, latency, your guardrails, and costs." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kanish Manuja]]
>
> **公司** [[Twilio]]
>
> **概念** [[LLM 网关]] · [[回退]] · [[断路器]] · [[延迟]] · [[护栏]] · [[提示词注入]] · [[推理模型]] · [[fail open]] · [[负载卸载]] · [[集中式治理]]

这一集聊的是一个每个用大模型的公司都绕不开的东西：[[LLM 网关|LLM 网关]]——架在你的应用和各家模型供应商之间的中间件，负责路由、认证、[[回退|回退]]、速率限制和各种治理。你在产品里见过的那句「出了点问题，请重试」，背后就是这套系统在撑着。主讲人是 [[Twilio|Twilio]] 的首席工程师 Kanesh Manuja,他把团队在生产环境里踩过的坑和学到的教训全部摊开来讲。

他给出的核心框架是：网关的心脏处是四样东西的博弈——**可用性、[[延迟|延迟]]、[[护栏|护栏]]、成本**。一旦发生降级，你不可能四样全要，必须想清楚自己的用例要什么。整场演讲就是围绕这四样，逐个讲怎么取舍、怎么做。

## 可用性：别照搬普通 API 的高可用套路

只有一个模型供应商，他们的上限就是你的上限，他们的宕机就是你的宕机。传统软件工程应对不可靠依赖的办法——指数退避重试、加抖动、[[断路器|断路器]](失败次数够了就跳闸、停止调用)——对 LLM 都不够用，因为 LLM 调用又慢又贵：重试一次就飞快吃掉你的延迟预算，盲目重试只会成倍推高成本和尾延迟；而且当你明明有另一家完全正常的供应商可以路由过去时，触发断路器毫无意义。

更好的做法是**按请求回退**：先试供应商 A,失败了按顺序再试 B。如果你对延迟有极高的执念，可以并行向两家同时发请求——但那会让成本直接翻倍。断路器思想仍可借用：主供应商持续失败就把它移出请求路径、放进冷却期，几分钟后试着放回来。

失败计数存放的位置也有讲究：放实例内存里实现简单，但每次改部署规模，配置和预期都跟着变；做全集群共享才能获得快速故障转移。

几个团队反复栽跟头的地方：

- **回退不透明**。行业虽然在向 OpenAI API 兼容格式收敛，但工具调用 schema、token 上限、停止原因等仍有细微差异。网关需要一层归一化层来保证跨供应商回退真正可用，并且要把回退路径好好测试。
- **流式输出锁死你的选择**。一旦开始向客户端流式返回内容，就不能中途换供应商，已发出去的定死了——那句「出了点问题」不是偷懒，是设计使然的权衡。
- **备用供应商的容量反而要更高**。团队往往把主供应商配置、测试得很到位，备用供应商却得不到同等重视。但它是你最后一道防线，它挂了你的应用就挂了。

## 延迟：静默的杀手，要按模型按路由监控

可用性故障是明摆着的——会失败、会告警、会传呼你；高延迟却是悄无声息的，需要比可用性调优更多的关注。

两个具体动作：

- **别测网关级聚合延迟**。网关往往跑混合负载：嵌入请求不到一秒、分类请求不到一秒、聊天请求三秒、推理请求耗时很长。混在一起算聚合数字「是个谎言」；正确做法是**按模型、按路由追踪 P99**。
- **按模型类别、按路由设超时**。他强调「再怎么强调都不为过」：没有超时是静默故障的头号根因——网关以为请求在被正常服务，实际上并没有。

一句值得记住的话：**[[推理模型|推理模型]]的「正常」，相当于聊天模型的「故障」**——推理模型高度非确定，同一个提示词可能耗时 2 秒到 60 秒不等，他们见过 P99 无缘无故飙到 60 秒。没有魔法解法，但至少可以按路由固定推理级别；对路由器模型(替你选模型的那种)，要在不确定的系统里尽量让请求具有确定性。还可以**对冲长尾**：主请求消耗到延迟预算的 P90 时就再发一个请求，能有效压住 P99 长尾。

## 护栏：它自己也是个会宕机的服务

护栏负责防[[提示词注入|提示词注入]]攻击、PII 过滤、毒性过滤，防止 LLM 对客户爆粗口。但它就像另一个服务，也可能宕机、也可能不可靠，于是你必须选：**[[fail open|fail open]](护栏挂了仍放行请求)还是 fail close(护栏挂了就拦截请求)**。这本质是可用性与安全的权衡，没有通用答案——比如毒性过滤器挂了，你可能仍愿意放行；默认选择应该是「你能忍受的最坏情况」。

具体改善手段：

- **时间预算**：请求永远不该被护栏耗时束缚，决定速率的步骤应该始终是 LLM 本身，给护栏设独立超时。
- **护栏也要回退**：二级提供商、二级检查、缓存决策，别只给模型供应商做回退。
- **放置位置三选一**：prehook 在输入上跑，最安全但增加串行延迟；并行跑是他最喜欢的方案，但流式输出配合不好——如果产出结构化输出，请不要流式，把护栏并发跑；posthook 最适合输出监控和审计。

## 网关自身：别为全公司建一个中央网关

最后他反身审视：网关本身就是你加进请求路径的新依赖。几个教训：

- **API 密钥按最细粒度隔离**——按路由、按使用场景拆分，否则一个嘈杂的租户就是最大的问题来源。
- **确保支持[[负载卸载|负载卸载]]**，把它纳入操作手册和演练日。遇到重试风暴时你没法简单横向扩容，web 服务器的内部队列必须设成有界，不能接受无界请求；有需要还可以做流量优先级，保证负载之下最重要的用例先被服务。
- **最重要的一条**：中央网关是单点故障。如果你在考虑给整个公司建一个中央网关，重新想想——大多数场景下，人们想要的其实不是中央网关，而是**[[集中式治理|集中式治理]]**。路径是：把网关去中心化，通过插件和自定义代码把治理(成本追踪、速率限制管理等)集中化。网关可以由单一团队管理，但不要部署成面向全公司的单一部署，哪怕它是分布式的。

演讲结尾他说，今天是他儿子的生日，而他在这里和陌生人谈论熔断——所以你们至少能为他做的一件事，是去为你和你的客户预防一次事故。

## 本集带走

- **网关的核心是四选一的取舍**：可用性、延迟、护栏、成本，发生降级时不可能全保；先想清楚你的用例要什么，再把对应杠杆设计出来给调用方。
- **回退而非重试**：LLM 调用又慢又贵，按请求回退到第二供应商比盲目重试划算；备用供应商的容量余量要设得比主供应商更高，并好好测试它的兼容性。
- **按模型按路由监控 P99、按路由设超时**：网关级聚合延迟是谎言；没有超时是静默故障的头号根因。
- **推理模型按路由固定推理级别，长尾用对冲压**：主请求用掉 P90 延迟预算就再发一个请求。
- **护栏也要高可用设计**：想清楚 fail open 还是 fail close、给护栏时间预算和二级回退；结构化输出不要流式，好让护栏并行跑。
- **别建全公司中央网关**：流量去中心化，治理集中化——用插件统一成本追踪和速率限制，而不是把所有流量塞进一个单点。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">网关的核心处，是四样东西之间的博弈：可用性、延迟、你的护栏，以及成本。</span>  
> *And right at the heart of the gateway is a fight between four things. It's availability, latency, your guardrails, and costs.*  
> <span class="qm">—— Kanish Manuja · [01:08]</span> ^q1

> <span class="qz">如果你只有一个模型供应商，他们的上限就是你的上限，他们的宕机就是你的宕机。</span>  
> *If you have a single model provider, their ceiling is your ceiling. Their outage is your outage.*  
> <span class="qm">—— Kanish Manuja · [01:50]</span> ^q2

> <span class="qz">盲目重试只会成倍增加你的成本和你的尾延迟。</span>  
> *So blind retries just multiply your cost and your tail latencies.*  
> <span class="qm">—— Kanish Manuja · [02:54]</span> ^q3

> <span class="qz">我认为，你的备用提供商的吞吐量、容量或余量应该设得更高，因为那是你的最后一道防线。</span>  
> *And I would argue that your throughputs or your capacity or your headroom should be even higher for the second provider or the fallback provider because that's your last line of defense.*  
> <span class="qm">—— Kanish Manuja · [06:12]</span> ^q4

> <span class="qz">你应该按模型、按路由追踪你的 P99,而不是一个网关级别的数字。</span>  
> *You should be tracking your P99 per model per route, not a gateway-wide number.*  
> <span class="qm">—— Kanish Manuja · [07:27]</span> ^q5

> <span class="qz">推理模型的「正常」，实际上相当于聊天模型的「故障」。</span>  
> *Reasoning models normal is actually a chat models outage.*  
> <span class="qm">—— Kanish Manuja · [08:06]</span> ^q6

> <span class="qz">而且我强烈建议，在一个不确定性的系统里，你至少要让请求尽可能具有确定性。</span>  
> *And I would highly recommend that you at least make requests as deterministic as possible with an undeterministic system.*  
> <span class="qm">—— Kanish Manuja · [09:12]</span> ^q7

> <span class="qz">你的请求永远不应该被你的护栏耗时所束缚。决定速率的步骤应该始终是 LLM。</span>  
> *Your request should never be bound by your guardrail timing. It should always be the LLM that is the rate determining step.*  
> <span class="qm">—— Kanish Manuja · [11:21]</span> ^q8

> <span class="qz">这里有一条前进的路径，你实际上可以把网关去中心化，同时仍然把治理集中化。</span>  
> *And there is a path forward where you can actually decentralize the gateway and still centralize governance.*  
> <span class="qm">—— Kanish Manuja · [15:00]</span> ^q9

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for|Harness 工程：让智能体零人工写代码的实操]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)</span>
- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)</span>
- [[2026-08-08-talks-realtime-multiplayer-automation-and-you|别只盯着敲代码：GitHub Next 用 Markdown 重塑自动化与协作]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、护栏 (guardrails)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Twilio</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)</span>

</div>
</div>
<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
      if(all[i].closest('.mrel')) continue;   // C13d:页尾手机克隆块不许被当成正文关联框搬走(实测被搬空过)
      var t=all[i].querySelector('.callout-title-inner');
      if(t&&t.textContent.trim().indexOf('关联')===0){ box=all[i]; break; }
    }
    if(!box) return;
    if(box.closest('.right.sidebar')) return;
    var wrap=document.createElement('div');
    wrap.className='pd-rel';
    var h=document.createElement('h3'); h.textContent='这一集涉及';
    wrap.appendChild(h); wrap.appendChild(box);
    var toc=side.querySelector('.toc');
    if(toc&&toc.parentElement) toc.parentElement.insertBefore(wrap, toc.nextSibling);
    else side.appendChild(wrap);
  }
  // C13f 第九批 #3:深浅色不再待在顶栏 —— 首页搬进左栏,集页没有左栏,搬到右栏末尾。
  // 仍是**搬节点不重写**(🔒 #2 亮暗双模式的行为在 Quartz 手里),搬前比 parentElement 保幂等。
  function adopt(){
    var acts=document.querySelector('.pd-top .pd-acts');
    function grab(sel,host){
      if(!host) return;
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==host) host.appendChild(el);
    }
    // 2026-08-15 用户条8:深浅色回顶栏,和分享/收藏/搜索一起(撤 C13f #3「深色进侧栏」)。
    // 阅读模式仍不并入(设计稿顶栏只有分享/收藏/深色/搜索)。顺序由 custom.scss 的 order 排;
    // 搬节点不重写(🔒#2 亮暗行为归 Quartz)。
    ['.darkmode', '.search'].forEach(function (sel) { grab(sel, acts); });
  }
  function graph(){
    var art=document.querySelector('article'); if(!art) return;
    var g=document.querySelector('.right.sidebar .graph'); if(!g) return;
    var box=document.createElement('div'); box.className='pd-graph';
    box.appendChild(g); art.appendChild(box);
  }
  function topbar(){
    var bar=document.querySelector('article .pd'); if(!bar) return;
    var qb=document.getElementById('quartz-body'); if(!qb||!qb.parentElement) return;
    qb.parentElement.insertBefore(bar, qb);
  }
  // C13f:相关单集区(.pd-ex / .pd-exit)里的单集链接也在新标签页开,与首页卡片同口径。
  // 它们是 markdown 双链、由 Quartz 渲染成 <a>,只能渲染完再打标记。
  // ⚠️ 这段注释会原样进页面 —— 别在这里写那个区块的中文标题,
  //    render-related 有一条守卫在断言「不传 related 时整页不出现那四个字」。
  // data-router-ignore 是关键:Quartz SPA 判 _blank 只看事件目标本身,点到子元素会漏。
  function newtab(){
    document.querySelectorAll('.pd-ex a, .pd-exit a').forEach(function(a){
      if(a.target==='_blank') return;
      if(a.host && a.host!==location.host) return;   // 站外链接不归这条口径管
      a.target='_blank'; a.rel='noopener'; a.dataset.routerIgnore='';
    });
  }
  // 站名 logo 缺文件时摘掉 <img>,露出底下的引号标记(与首页同一条口径)
  function logos(){
    document.querySelectorAll('.pd .mk img').forEach(function(im){
      if(im.__lg) return; im.__lg=1;
      var kill=function(){ if(im.parentElement) im.remove(); };
      if(im.complete && im.naturalWidth===0){ kill(); return; }
      im.addEventListener('error', kill, {once:true});
    });
  }
  // C13h 分享/收藏(移植 设计稿/actions.js):分享=系统面板,失败(非用户取消)退回复制;
  // 收藏=localStorage(键 pd-favs,按路径),再点取消;toast 轻提示。SPA:委托绑定一次,每次 nav 恢复实心态。
  function toast(msg){
    var t=document.createElement('div'); t.className='toast'; t.textContent=msg;
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('in'); });
    setTimeout(function(){ t.classList.remove('in'); setTimeout(function(){ t.remove(); },250); },1600);
  }
  function favs(){ try{ return JSON.parse(localStorage.getItem('pd-favs')||'{}'); }catch(e){ return {}; } }
  function favSync(){
    var b=document.querySelector('.ico[data-act="fav"]'); if(!b) return;
    b.classList.toggle('on', !!favs()[location.pathname]);
  }
  function doCopy(){
    if(!navigator.clipboard){ toast('请手动复制地址栏链接'); return; }
    navigator.clipboard.writeText(location.href).then(
      function(){ toast('链接已复制'); }, function(){ toast('复制失败,请手动复制地址栏'); });
  }
  // 手机端「← 返回」= 回上一级(history.back);历史栈空(外站/新标签直开)→ 降级走 href="/" 回首页(ADR 0019)。
  // 用委托监听而非内联 onclick:避开 CSP unsafe-inline;桌面(≥1024)不拦、走默认 href。
  if(!window.__pdBack){ window.__pdBack=1;
    document.addEventListener('click', function(ev){
      var a=ev.target.closest && ev.target.closest('.pd-back'); if(!a) return;
      if(innerWidth<1024 && history.length>1){ ev.preventDefault(); history.back(); }
    });
  }
  if(!window.__pdActs){ window.__pdActs=1;
    document.addEventListener('click', function(ev){
      var b=ev.target.closest && ev.target.closest('.ico[data-act]'); if(!b) return;
      if(b.dataset.act==='share'){
        var h1=document.querySelector('article h1');
        var title=h1?h1.textContent.trim():document.title;
        if(navigator.share){
          navigator.share({title:title,url:location.href}).catch(function(e){
            if(!e || e.name!=='AbortError') doCopy();   // 用户自己取消→不打扰;真调不通→退回复制
          });
        } else doCopy();
      } else if(b.dataset.act==='fav'){
        var o=favs(); var k=location.pathname;
        if(o[k]) delete o[k]; else o[k]=1;
        localStorage.setItem('pd-favs', JSON.stringify(o));
        b.classList.toggle('on', !!o[k]);
        toast(o[k] ? ('已收藏 · 共 '+Object.keys(o).length+' 集') : '已取消收藏');
      }
    });
  }
  // C13d:mtoc 的 document/window 级监听只绑一次;回调每次现查当前 .mtoc(SPA 换页旧节点自然失联,不泄漏)
  function mtocScroll(){
    var bar=document.querySelector('.mtoc'); if(!bar||!bar.__items) return;
    var items=bar.__items, panel=bar.querySelector('.mtm'), label=bar.querySelector('.mtl'), prog=bar.querySelector('.mtbar');
    var off=bar.offsetHeight+24, idx=-1;
    for(var i=0;i<items.length;i++){
      if(items[i].el.getBoundingClientRect().top<=off) idx=i; else break;
    }
    if(window.scrollY>=document.body.scrollHeight-window.innerHeight-2) idx=items.length-1;
    if(idx!==bar.__cur){
      bar.__cur=idx;
      label.textContent=idx<0?'':items[idx].label;
      bar.classList.toggle('at', idx>=0);
      panel.querySelectorAll('a').forEach(function(a,i){ a.classList.toggle('on', i===idx); });
    }
    var max=document.body.scrollHeight-window.innerHeight;
    prog.style.width=(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)+'%';
  }
  if(!window.__pdMtocEvts){ window.__pdMtocEvts=1;
    var mtocTick=false;
    window.addEventListener('scroll', function(){
      if(!mtocTick){ mtocTick=true; requestAnimationFrame(function(){ mtocScroll(); mtocTick=false; }); }
    }, {passive:true});
    document.addEventListener('click', function(e){
      var bar=document.querySelector('.mtoc.open');
      if(bar && !e.target.closest('.mtoc')){ bar.classList.remove('open'); var t=bar.querySelector('.mtt'); if(t) t.setAttribute('aria-expanded','false'); }
    });
  }
  // C13d 手机端(移植 设计稿/m-detail.js;真站差异:顶栏不吸顶 → 吸顶条 top:0、跳转偏移只算条高;
  // 无人物页 → 去掉 chip 形态分支;小节 = article 里带 id 的 h2,与桌面右栏目录同源)
  function mtoc(){
    var art=document.querySelector('article'); if(!art) return;
    if(art.querySelector('.mtoc')) return;               // SPA nav 后 DOM 是新的;同页重跑不重复建
    // 小节收集照设计稿口径:标题(真站是 h3 正文小节 + h2 收尾节)+ 组标 .pd-sec(金句区与相关区的组标;
    // ⚠️ 本注释会原样进页面,守卫测试断言「无相关集时页面不出现那个区块的中文标题」——别在这里写它),
    // 无 id 就发一个,再按文档序排 —— 设计稿当年也是 h2 + .sec 混收
    var items=[];
    [].forEach.call(art.querySelectorAll('h2[id], h3[id]'), function(h){
      items.push({el:h,label:h.textContent.trim()});
    });
    [].forEach.call(art.querySelectorAll('.pd-sec'), function(sec,i){
      if(!sec.id) sec.id='pdsec'+i;
      var t=(sec.firstChild && sec.firstChild.nodeType===3 ? sec.firstChild.textContent : sec.textContent).trim();
      items.push({el:sec,label:t});
    });
    if(items.length<2) return;
    items.sort(function(a,b){ return a.el.compareDocumentPosition(b.el) & 4 ? -1 : 1; });
    // 不用 innerHTML(守卫测试拦它防「搬节点」被偷换成重写)—— 这里全是自造新壳,逐个 createElement
    function el(tag,cls,txt){ var e=document.createElement(tag); if(cls)e.className=cls; if(txt)e.textContent=txt; return e; }
    var bar=el('div','mtoc');
    var toggle=el('button','mtt'); toggle.type='button'; toggle.setAttribute('aria-expanded','false');
    var mtk=el('span','mtk','目录'), label=el('span','mtl'), caret=el('i','','⌄');
    toggle.appendChild(mtk); toggle.appendChild(label); toggle.appendChild(caret);
    var panel=el('div','mtm'), prog=el('span','mtbar');
    bar.appendChild(toggle); bar.appendChild(panel); bar.appendChild(prog);
    items.forEach(function(it,i){
      var a=document.createElement('a'); a.href='#'+it.el.id; a.dataset.i=i; a.textContent=it.label;
      panel.appendChild(a);
    });
    // 就地插在第一节之前 → 滚到这里才吸顶(第一屏留给标题/播放条/钩子)
    items[0].el.parentElement.insertBefore(bar, items[0].el);
    bar.__items=items; bar.__cur=-1;   // 状态挂节点上:单例监听每次现查当前条,旧节点随 SPA 换页自然失联
    toggle.addEventListener('click', function(){
      var open=bar.classList.toggle('open'); toggle.setAttribute('aria-expanded', open?'true':'false');
    });   // toggle/panel 的监听挂在自家节点上,随节点销毁,不泄漏
    panel.addEventListener('click', function(e){
      var a=e.target.closest('a'); if(!a) return;
      e.preventDefault();
      var it=items[+a.dataset.i];
      window.scrollTo({top:it.el.getBoundingClientRect().top+window.scrollY-bar.offsetHeight-8, behavior:'smooth'});
      bar.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    });
    mtocScroll();
    // 页尾「这一集涉及」:克隆右栏里的关联框**本体**(同源不漂移;目录已被吸顶条取代不克隆)。
    // 不克隆 .pd-rel 外壳 —— 实测撞过一次空壳(壳先建、框后搬,克隆到只有标题的半成品);
    // 直接选框本身 + 「必须真有链接」守卫,拿不到内容宁可不出块。
    var box=document.querySelector('.right.sidebar .pd-rel blockquote[data-callout]');
    if(box && box.querySelector('a') && !art.querySelector('.mrel')){
      var wrap=el('div','mrel');
      wrap.appendChild(el('h3','','这一集涉及'));
      wrap.appendChild(box.cloneNode(true));
      art.appendChild(wrap);
    }
  }
  // C13j 补遗:实体页关联药丸集数徽标(设计稿 .chp b)。数据 = 页内 script.pd-epn(构建期与 phero 同源);
  // 从**当前页 DOM** 现读 —— SPA 换页不重跑新页内联脚本,闭包里的旧数据会漏配新页(实测),读 DOM 才与页同步。
  // ③ 的药丸段 = 「标题→说明段→链接段」的第二个 p(与 custom.scss 药丸选择器同口径);④ 在 .pd-peers 里,天然不吃徽标。
  function chips(){
    var el=document.querySelector('article script.pd-epn'); if(!el) return;
    var d; try{ d=JSON.parse(el.textContent); }catch(e){ return; }
    var as=document.querySelectorAll('article h2 + p + p > a.internal');
    for(var i=0;i<as.length;i++){
      var a=as[i]; if(a.querySelector('b')) continue;
      var n=d[(a.textContent||'').trim()];
      if(n){ var b=document.createElement('b'); b.textContent=n+' 集'; a.appendChild(b); }
    }
  }
  // C13j 补遗:右栏目录第四节改叫「④ 同主题的人」(设计稿右栏叫法比正文小节标题短;
  // ⚠️ 本注释会原样进页面,别在这里写正文那个小节的中文标题 —— 守卫测试在拿它查空壳);非实体页无 ④,天然 no-op
  function tocPeers(){
    var links=document.querySelectorAll('.toc a');
    for(var i=0;i<links.length;i++){
      var t=(links[i].textContent||'').trim();
      if(t.indexOf('④')===0 && t!=='④ 同主题的人') links[i].textContent='④ 同主题的人';
    }
  }
  // 手机端顶栏左上角:站内点进来的显「← 返回」,外部/分享链接直开的显 站名+logo(ADR 0019 补充,
  // 用户 2026-08-16 手机 #12)。判据 = document.referrer 是不是本站 origin;SPA 换页 referrer 不更新,
  // 故再兜一条「站内换过页没」。
  // ⚠️ 原兜底用 history.length>1 —— 手机/微信内置浏览器分享链接直开也常 >1(会话预置历史),误判成站内、
  //    害得分享页顶上显返回键而非站名(用户 2026-08-29 报)。改用「站内换过页没」判断。
  //    状态挂 window 而非模块级 var(GLM 011[1]):Quartz SPA 换页可能重执行本段脚本,var 会每次重置成当前
  //    pathname → spaNavigated 永远置不了 true。window 上用「未设置才记」守卫,只在**第一次**记真·落地路径,
  //    重执行/换页都存活;__pdSpa 一旦置 true 就 sticky。referrer 用整 origin 比对(new URL),防
  //    「本站origin.evil.com」前缀欺骗(GLM 011[2])。
  if (window.__pdLanding == null) window.__pdLanding = location.pathname; // == null 兼捕未设置态,且不把该字面量带进页面(既有「页面无脏词」闸门)
  function pdSameOrigin(u){ try { return new URL(u).origin === location.origin; } catch (e) { return false; } }
  function direct(){
    if (location.pathname !== window.__pdLanding) window.__pdSpa = true; // 跳到别的页 = 站内导航(sticky)
    var fromSite = pdSameOrigin(document.referrer || '') || window.__pdSpa === true;
    document.body.classList.toggle('pd-direct', !fromSite);
  }
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); direct(); }
  document.addEventListener('nav', all);
  // 跨断点缩放:右栏出现/消失后,深浅色开关要搬到当前看得见的位置去
  var rt; addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(adopt, 150); });
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', all); else all();
})();
</script>

<script>
(function(){
  function bind(){
    document.querySelectorAll('button.pd-ts').forEach(function(b){
      if(b.dataset.bound) return;
      b.dataset.bound='1';
      b.addEventListener('click',function(){
        var n=b.nextElementSibling;
        if(n&&n.classList.contains('pd-orig')){ n.remove(); return; }
        var d=document.createElement('div');
        d.className='pd-orig';
        var h=document.createElement('b');
        h.textContent='英文原话 '+(b.dataset.t||'')+(b.dataset.who?' · '+b.dataset.who:'');
        d.appendChild(h);
        d.appendChild(document.createElement('br'));
        d.appendChild(document.createTextNode(b.dataset.en||''));
        b.after(d);
      });
    });
  }
  document.addEventListener('nav', bind);
  bind();
})();
</script>

<script>
(function(){
  function fmt(s){
    if(!isFinite(s)||s<0) s=0;
    var m=Math.floor(s/60), x=Math.floor(s%60);
    return (m<10?'0':'')+m+':'+(x<10?'0':'')+x;
  }
  function wire(box){
    if(box.dataset.wired) return; box.dataset.wired='1';
    var a=box.querySelector('audio'), pb=box.querySelector('.pb'),
        bar=box.querySelector('.bar'), fill=box.querySelector('.bar > i'),
        tm=box.querySelector('.tm'), t2=box.querySelector('.t2');
    if(!a||!pb||!bar||!fill||!tm) return;
    var total=0;
    function paint(){
      var cur=a.currentTime||0;
      fill.style.width=(total?(cur/total*100):0)+'%';
      tm.textContent=fmt(cur)+(total?' / '+fmt(total):'');
    }
    a.addEventListener('loadedmetadata',function(){
      total=a.duration||0;
      if(total&&t2) t2.textContent=Math.round(total/60)+' 分钟 · AI 合成朗读';
      paint();
    });
    a.addEventListener('timeupdate',paint);
    a.addEventListener('play',function(){ pb.textContent='❚❚'; pb.setAttribute('aria-label','暂停'); });
    a.addEventListener('pause',function(){ pb.textContent='▶'; pb.setAttribute('aria-label','播放'); });
    a.addEventListener('ended',function(){ pb.textContent='▶'; });
    pb.addEventListener('click',function(){ if(a.paused) a.play(); else a.pause(); });
    function seek(ev){
      if(!total) return;
      if(ev.clientX==null) return;
      var r=bar.getBoundingClientRect();
      var x=Math.min(Math.max(ev.clientX-r.left,0),r.width);
      a.currentTime=(x/r.width)*total;
      paint();
    }
    bar.addEventListener('pointerdown',function(ev){
      seek(ev);
      function mv(e){ seek(e); }
      function up(){ document.removeEventListener('pointermove',mv); document.removeEventListener('pointerup',up); }
      document.addEventListener('pointermove',mv); document.addEventListener('pointerup',up);
    });
    a.addEventListener('error',function(){
      box.classList.add('pd-play-dead');
      box.textContent='本集中文精华音频还没生成好,稍后再来听。';
    });
  }
  function all(){ document.querySelectorAll('.pd-play').forEach(wire); }
  document.addEventListener('nav', all);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', all); else all();
})();
</script>
