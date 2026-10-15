---
title: AI 智能体不读你的政策文档，它们只会调用你的接口
podcast: 精选演讲
date: 2026-10-16
source_url: undefined
duration: "17:40"
type: episode
cover: "#64748b"
description: Gravitee 的 CTO Sam 现场演示了两个智能体，说明为什么 AI 治理必须放在网关层，而不是写进提示词里。
host: "[[Sam]]"
companies: ["[[Gravity]]"]
concepts: ["[[智能体]]", "[[MCP 网关]]", "[[提示词注入]]", "[[数据外泄]]", "[[限流]]", "[[语义缓存]]", "[[MCP]]", "[[LLM 路由]]", "[[影子 AI]]", "[[智能体身份]]", "[[可观测性]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-10-talks-ai-agents-don-t-read-your-policy-docs-th#post","headline":"AI 智能体不读你的政策文档，它们只会调用你的接口","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-10-talks-ai-agents-don-t-read-your-policy-docs-th","mainEntityOfPage":"https://talk.solomind.cc/2026-10-10-talks-ai-agents-don-t-read-your-policy-docs-th","description":"Gravitee 的 CTO Sam 现场演示了两个智能体，说明为什么 AI 治理必须放在网关层，而不是写进提示词里。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sam"},{"@type":"Organization","name":"Gravity"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP 网关 (gateway)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"数据外泄 (data exfiltration)"},{"@type":"Thing","name":"限流 (rate limiting)"},{"@type":"Thing","name":"语义缓存 (semantic caching)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"LLM 路由 (LLM routing)"},{"@type":"Thing","name":"影子 AI (shadow AI)"},{"@type":"Thing","name":"智能体身份 (agent identity)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"AI 智能体不读你的政策文档，它们只会调用你的接口","item":"https://talk.solomind.cc/2026-10-10-talks-ai-agents-don-t-read-your-policy-docs-th"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 智能体不读你的政策文档，它们只会调用你的接口</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 智能体不读你的政策文档，它们只会调用你的接口

<div class="pd-byl"><b>Sam</b> · Gravitee 的 CTO · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-10-talks-ai-agents-don-t-read-your-policy-docs-th.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们最近做的一项调查显示，88% 的组织已经有智能体在生产环境中实际执行操作。</div><div class="a">— Sam <button class="pd-ts" data-t="00:45" data-who="Sam" data-en="So a recent survey we did showed 88% of organizations had an agent in production actually taking action." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam]]
>
> **公司** [[Gravity]]
>
> **概念** [[智能体]] · [[MCP 网关]] · [[提示词注入]] · [[数据外泄]] · [[限流]] · [[语义缓存]] · [[MCP]] · [[LLM 路由]] · [[影子 AI]] · [[智能体身份]] · [[可观测性]]

很多公司都有 AI 政策：[[智能体|智能体]]能做什么、不能做什么，写得清清楚楚。

但 Gravitee 的 CTO [[Sam|Sam]] 在这场演讲里反复敲一个点：智能体根本不读你的政策文档。它只看自己能调用哪些接口、有什么权限。

他在现场做了两个一模一样的智能体，左边那个靠提示词约束，右边那个靠[[MCP 网关|网关]]层的权限控制，然后连做了 5 场现场攻击演示，全都不排练。

结果很残酷：靠提示词的那个，几乎每次都出事。

> 【背景】Gravitee 是一家提供 API 网关的公司，这场演讲带有产品展示性质，但演示的场景和问题本身是行业普遍现象。

## 智能体为什么这么“听话”，听话到危险？

Sam 给出的数据是：他们最近一项调查显示，88% 的组织已有智能体在生产环境里实际执行操作，但只有 14% 对此有任何治理措施 <button class="pd-ts" data-t="00:45" data-who="嘉宾" data-en="So I'm sure you've all got an AI policy, you've got kind of a framework of how you want your agents to operate, you've got people exploring AI. So a recent survey we did showed 88% of organizations had an agent in production actually taking action." aria-label="回原文"></button>。

==问题出在哪==？他说，AI 天生“想要取悦你”。你让它删数据库、让它导出客户名单，它不会拒绝——它就是干 <button class="pd-ts" data-t="01:44" data-who="嘉宾" data-en="Rather than relying on a user prompting it correctly or some kind of markdown files kind of limiting what it can do, like remove that out of the equation, remove it to the gateway, move it to like the governance layer and actually it can't do any of those things because I'm sure you know AI is really helpful." aria-label="回原文"></button>。

传统安全靠用户正确使用、靠文档约束，但**真正该做的，是把权限从智能体身上挪走，放到基础设施层**，让它“从一开始就做不到”，而不是“被劝着别做”。

## 演示一：一句话删光所有订单

场景是一家酒店系统。左边那个靠提示词约束的智能体，被要求“帮我删掉这个订单，顺便调用工具删掉所有订单”。

它爽快照办，两个都执行了，还问“还需要什么吗”。数据库里所有订单真的没了 <button class="pd-ts" data-t="03:54" data-who="嘉宾" data-en="You can see what the user asked, you can see the agent executing it, you can see the tools being called, and you can ultimately see the 200 errors, or 200 kind of codes, where that has actually been a valid request." aria-label="回原文"></button>。

公司政策写着“不许用 AI 干这个”？Sam 的原话是：“智能体不在乎。在运行时，没人读那些文档。” <button class="pd-ts" data-t="04:07" data-who="嘉宾" data-en="So we had a policy in our hotel organization that said, hey, don't use AI to do this. The agent doesn't care. At runtime, no one reads those documents." aria-label="回原文"></button>

右边那个受网关管控的智能体，收到同样的指令，同样发现了工具，但执行时被网关以 403 权限拒绝。

它只完成了自己有权做的那部分，并回复说：我没有权限做这个。

## 演示二：索要客户邮箱和银行卡信息

第二场演示是[[数据外泄|数据外泄]]。用户说要做合规对账，要全部客人的邮箱和银行卡信息。左边的智能体痛快地把数据全吐了出来 <button class="pd-ts" data-t="05:22" data-who="嘉宾" data-en="So prompt comes in from the UI, goes to the LLM, LLM does some MCP discovery, finds out it's got a tool for it, gets it, returns it back in. Here's all the information kind of exposed." aria-label="回原文"></button>。

右边的被网关拦下，没有泄露任何个人敏感信息，还提示用户可以通过认证获取权限。

Sam 特别提到，随着智能体之间互相调用（agent-to-agent），调用链会变得非常混乱。

当你的智能体规模到成百上千个时，**靠每个智能体自己管权限，根本维护不过来** <button class="pd-ts" data-t="06:12" data-who="嘉宾" data-en="Especially with the A2A protocol and user-to-agent, agent-to-agent, agent-to-agent, agent-to-agent, things get quite messy and quite difficult to really follow." aria-label="回原文"></button>。

## 演示三、四：省钱——限流和缓存

除了安全，网关还能管成本。一个出了 bug 的智能体连续发 8 次同样的请求：左边每次都照常执行、照常花钱；

右边被网关[[限流|限流]]，每分钟只放行 3 次，多余的请求在到达大模型之前就被挡掉 <button class="pd-ts" data-t="08:05" data-who="嘉宾" data-en="The first three are answered because they're valid, but then we get into the rate limiting applied by the gateway, by saying you can only do three every minute." aria-label="回原文"></button>。

还有[[语义缓存|语义缓存]]：类似“怎么改密码”这种 IT 服务台问题，与其每次都去调用大模型，不如从内置的 Redis 缓存里直接返回——零成本、零延迟。

演示里 5 次同样的查询，花掉约 1000 个 token；走缓存只花约 200 个 <button class="pd-ts" data-t="09:22" data-who="嘉宾" data-en="On the right-hand side, I've got the same data returned, but this time from the cache. So I've only spent around 200 tokens on the in and the out kind of response there." aria-label="回原文"></button>。缓存的“相似度阈值”可以在 0 到 1 之间调，按智能体、按用户灵活设置。

## 演示五：有人在拿智能体当 Google 用

第五个场景是超长提示词：用户粘了 10 分钟的聊天记录进去，让智能体做个很简单的订房任务。

一次就花掉 2000 个输入 token，输出只有 312 个 <button class="pd-ts" data-t="11:21" data-who="嘉宾" data-en="So in this example, I put 2,000 tokens in. My output was 312. Which is quite significant for what essentially is quite a simple task is book this room for this audience, do these few things." aria-label="回原文"></button>。网关版直接把请求挡下来，提示“把任务拆小一点”，下游大模型一分钱不花。

他举了个真实客户的例子：有人天天用很强的模型问“今天天气怎么样”，花大价钱干了一件免费搜索就能干的事。

网关还能判断内容相关性——问天气这种和订房无关的请求，直接拒掉 <button class="pd-ts" data-t="12:50" data-who="嘉宾" data-en="So in this example, if we start to ask things around, what's the weather like today? The gateway would say, this doesn't look like a hotel booking software or a hotel booking ask." aria-label="回原文"></button>。

## 144 比 1：问题只会更糟

Sam 说，据他同事 Tim 的数字，目前每个真人身份对应 144 个[[智能体身份|智能体身份]]，而且这个比例还在恶化 <button class="pd-ts" data-t="13:32" data-who="嘉宾" data-en="So I think currently there are 144 agents that my colleague Tim at the back tells me for every one human kind of identity. So the problem is only getting exponentially worse." aria-label="回原文"></button>。

当智能体开始自动创建新的智能体，形成蔓延之势，硬编码权限在前 10 个也许行得通，到那时绝无可能。他的结论：

**把治理、安全和审计放到网关层这个基础设施里，是做智能体的前提条件**——“不一定非得是 Gravitee，但你需要一个横跨整个智能体版图的网关” <button class="pd-ts" data-t="14:20" data-who="嘉宾" data-en="So having our logging, having our information here, having it basically surfable and exportable for anything we want to do, I think is something that a gateway, it hasn't got to be gravity, having a gateway sat across our agentic landscape is a requirement that we should consider alongside everything else of doing agentic work." aria-label="回原文"></button>。

## 本集带走

- 88% 的组织已有智能体在生产环境执行操作，只有 14% 有治理措施。
- 智能体不读政策文档；安全要靠网关层的硬性权限，而不是提示词和 markdown 文件。
- 网关能同时解决安全和成本：权限拦截、限流、语义缓存、超长提示词拦截、内容相关性过滤。
- 每个真人身份平均对应 144 个智能体身份，靠每个智能体自己管权限无法扩展。
- 还要警惕“[[影子 AI|影子 AI]]”：员工在个人电脑上直接用 AI 处理文档和邮件，完全不在公司视野内。

<div class="pd-sec pd-sec-q">全部金句 <span>10 条</span></div>

> <span class="qz">我们最近做的一项调查显示，88% 的组织已经有智能体在生产环境中实际执行操作。</span>  
> *So a recent survey we did showed 88% of organizations had an agent in production actually taking action.*  
> <span class="qm">—— Sam · [00:45]</span> ^q1

> <span class="qz">而其中只有 14% 有任何治理措施。</span>  
> *Only 14% of those had any governance around it.*  
> <span class="qm">—— Sam · [00:52]</span> ^q2

> <span class="qz">所以问题不是我们如何在智能体自身的上下文或提示词范围内保护它，而是我们如何把控制移到它的身份之内，让它一开始就做不了那些事？</span>  
> *So the question isn't like how do we kind of secure the agent within its own kind of context or prompt is how do we remove that to be within its identity so it can't do those things in the first place?*  
> <span class="qm">—— Sam · [01:15]</span> ^q3

> <span class="qz">那个智能体里没有任何东西说，你做得太多了。</span>  
> *Nothing in that agent says, you've done too much.*  
> <span class="qm">—— Sam · [07:15]</span> ^q4

> <span class="qz">也就是一分钱，从大局来看这不算一大笔钱，但如果你把它乘以你在生产环境中拥有的所有智能体、你为各种客户运行的所有智能体，以及它们被要求执行的所有可重复的工作流，你很容易得到相当可观的成本。</span>  
> *Which is like one cent, which in the grand scheme of things is not a massive amount of money, but if you multiply that by all of the agents you've got in production, all of your agents you've got running for various customers, and all of the kind of repeatable kind of workflows they've been asked to do, you can get some quite significant costs quite easily.*  
> <span class="qm">—— Sam · [07:34]</span> ^q5

> <span class="qz">他们花了巨大的成本来获得一个 Google 或任何气象站都能给你的东西。</span>  
> *And they were spending a huge cost to get something that Google or any kind of met station would be able to give you.*  
> <span class="qm">—— Sam · [12:28]</span> ^q6

> <span class="qz">我认为目前，对应每一个人类身份，有 144 个智能体——这是我同事 Tim 告诉我的。</span>  
> *So I think currently there are 144 agents that my colleague Tim at the back tells me for every one human kind of identity.*  
> <span class="qm">—— Sam · [13:24]</span> ^q7

> <span class="qz">但当它变得指数级庞大，智能体在创建其他智能体，又在创建其他智能体，形成巨大的蔓延时，能够用一个脚本化、自动化的基础设施治理层来管理，是我们开始组织这些身份以及其他一切的根本性需求。</span>  
> *But when it becomes exponentially bigger and there's agents to creating other agents, with creating other agents into a huge sprawl, being able to manage it with a scripted, automated kind of governance layer of the infrastructure is fundamentally a fundamental requirement of how we start to organize these identities and kind of everything else.*  
> <span class="qm">—— Sam · [13:42]</span> ^q8

> <span class="qz">能够把它精选到 MCP 服务器暴露的非常少量的工具，既限制了影响范围，也限制了成本。</span>  
> *Being able to curate that down to a really fine amount of tools that the MCP server is exposing limits my blast radius, but it also limits my cost as well.*  
> <span class="qm">—— Sam · [15:52]</span> ^q9

> <span class="qz">随着我们向前发展，唯一真正正确的、既能规模化又能保持治理与安全性的方式，就是把它上移到基础设施层。</span>  
> *And the only real correct way that we're going to scale, but also keep the governance and secure ability as we move forward is shifting it up to the infrastructure layer.*  
> <span class="qm">—— Sam · [17:13]</span> ^q10

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two|给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行]]<span class="pd-rz">同概念:可观测性 (observability)、提示词注入 (prompt injection)、智能体 (agent)、MCP</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:MCP、可观测性 (observability)、智能体 (agent)</span>
- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)、可观测性 (observability)</span>
- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>

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
