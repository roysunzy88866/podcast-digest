---
title: 给 AI 智能体发一个钱包：Circle 的纳米支付方案
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "20:32"
type: episode
cover: "#64748b"
description: Circle 智能体技术团队工程师 Harshal 讲智能体卡在付费墙这一瓶颈，并演示 Circle Agent Stack 与 X402 如何让智能体自主完成微支付。
guests: ["[[Harshal Bhangale]]"]
companies: ["[[Circle]]"]
concepts: ["[[USDC]]", "[[智能体]]", "[[X402]]", "[[微交易]]", "[[护栏]]", "[[Nanopayments]]", "[[Claude Code]]", "[[Circle Agent Wallet]]", "[[付费墙]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-talks-why-your-ai-agent-needs-a-wallet-usdc-an#post","headline":"给 AI 智能体发一个钱包：Circle 的纳米支付方案","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-talks-why-your-ai-agent-needs-a-wallet-usdc-an","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-talks-why-your-ai-agent-needs-a-wallet-usdc-an","description":"Circle 智能体技术团队工程师 Harshal 讲智能体卡在付费墙这一瓶颈，并演示 Circle Agent Stack 与 X402 如何让智能体自主完成微支付。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Harshal Bhangale"},{"@type":"Organization","name":"Circle"},{"@type":"Thing","name":"USDC"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"X402"},{"@type":"Thing","name":"微交易 (microtransactions)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"Nanopayments"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Circle Agent Wallet"},{"@type":"Thing","name":"付费墙 (paywall)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给 AI 智能体发一个钱包：Circle 的纳米支付方案","item":"https://talk.solomind.cc/2026-09-01-talks-why-your-ai-agent-needs-a-wallet-usdc-an"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给 AI 智能体发一个钱包：Circle 的纳米支付方案</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给 AI 智能体发一个钱包：Circle 的纳米支付方案

<div class="pd-byl"><b>Harshal Bhangale</b> · Circle 智能体技术团队工程师 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-talks-why-your-ai-agent-needs-a-wallet-usdc-an.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因为在过去 30 年里，我们围绕唯一一个客户构建了互联网，那就是人类。</div><div class="a">— Harshal Bhangale <button class="pd-ts" data-t="03:32" data-who="Harshal Bhangale" data-en="because for the last 30 years, we've built the internet around one customer, and that was humans." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Harshal Bhangale]]
>
> **公司** [[Circle]]
>
> **概念** [[USDC]] · [[智能体]] · [[X402]] · [[微交易]] · [[护栏]] · [[Nanopayments]] · [[Claude Code]] · [[Circle Agent Wallet]] · [[付费墙]]

这一集来自一个 AI 工程大会的演讲，主角是 [[Circle|Circle]] [[智能体|智能体]]技术产品团队的工程师 Harshal。Circle 是发行 [[USDC|USDC]]（全球最大的受监管稳定币）的公司，所以开场他就回应了全场最大的疑问：一家稳定币公司为什么出现在 AI 大会上？他的答案是：团队多年积累的「让支付更简单、更便宜」的能力，恰恰是 AI 智能体落地的一大瓶颈——你的智能体再聪明，遇到[[付费墙|付费墙]]还是会卡住：要么停下来等你注册账号、绑信用卡、管理 API 密钥，要么干脆跳过那个端点。

## 智能体经济已经来了，但支付还停在「人类时代」

Harshal 简短回顾了智能体的演进：2023 年靠提示词对话（ChatGPT 那类），2024 年有了工作流，2025 年是 MCP、技能和编排，而他认为 2026 年是智能体真正开始为自己想要的服务付费的一年。 信号已经有了：仅仅过去 30 天，智能体通过 [[X402|X402]] 与付费 API 端点成交约 2400 万美元，其中 99% 用 USDC 结算。他承认这个量级在整个格局里还很小，「但它只会变得更大」。

那 X402 是什么？它是一种让智能体为资源付费的协议方式：服务器想收费时，返回一个 HTTP 402 头部（「需要付费」状态码），附上希望的支付方式；智能体用自己的加密钱包签一个授权，付款，然后重新发起请求拿到资源。

## 为什么传统支付轨道行不通

核心论据是一句很漂亮的判断：「过去 30 年，我们围绕唯一一个客户构建了互联网——人类。」注册流程、绑信用卡、管理 API 密钥，全是迎合人的交互方式设计的；而智能体不是那样运作的——它们想直接抓取数据、资源、算力或推理，而且消费知识的规模是人类根本达不到的。

有人会说：给它一张信用卡不就行了？问题在于交易形态完全不同。

智能体支付的是零星的小额款项——一美分、十美分这种量级——但频率极高。信用卡每笔约 3% 的手续费在这种模型下完全不可持续：「智能体每做一笔一美分的交易，你不可能付 3% 的手续费。」 而且卖方也已经开始主动适应这个新客群：既然智能体只要数据的一个子集，那干脆把那一小份数据包进付费墙——「付我 10 美分，拿走这份数据」——这就是[[微交易|微交易]]高频化的来源。

所以 Harshal 给出的需求定义是：智能体需要「像互联网一样运作的支付」——实时、低成本、可编程、始终在线。这就是 Circle Agent Stack 的出发点：一个面向智能体经济的全栈平台。

## 现场演示：有钱包 vs 没钱包的 Claude Code

demo 很直观：两个终端跑同一个任务——「为 FIFA 世界杯决赛规划我的行程」，包括航班、酒店、后勤、阿根廷进决赛的赔率、二级市场票价、其他球迷的现场体验，最后发邮件汇报、打电话确认。左边是原版 [[Claude Code|Claude Code]]，右边是装了 [[Circle Agent Wallet|Circle Agent Wallet]]（已充值）的 Claude Code。

结果对比很清楚。右边的智能体一路通过钱包为付费内容买单：通过 BlockRun 这个提供商调 Polymarket 数据查赔率，对付费端点逐笔付款，每笔调用都自动带上「单笔最大 15 美分」的[[护栏|护栏]]。

左边原版的智能体研究到一半就处处碰壁：没法原生发邮件，只能往已登录的 Gmail 里塞一封草稿发不出去；最后干脆「坦白」自己没有能力打电话，把要点直接打印在终端里了事。右边的智能体则真的发出了邮件（含去体育场怎么走、Reddit 上的注意事项、票价等），还打来了电话。 电话里它汇报了 MetLife 体育场的比赛日行程、SFO 直飞 EWR/JFK 的航班选择，Harshal 还现场追问「从酒店怎么去体育场」，它也答上了。

这里有个关键设计思想值得单独说：给智能体配钱包的美妙之处，是可以把护栏直接内置进钱包——设定每个会话、每天的最大支出额——人不必逐笔批准交易，因为那根本无法扩展（智能体一直在做大量小额的交易）。智能体在你画好的预算框内足够自主地花钱。

## 底层：为什么不用区块链直接结算，Nanopayments 是什么

区块链理论上能让这一切成立，但直接用有硬伤：再高效的区块链也有 gas 费（链上支付给网络的计算手续费），对微交易来说占比过高——虽然 gas 费本身有价值（防止网络被垃圾信息和滥用）；区块链还有吞吐量限制，因为区块空间是多方共享的基础设施，智能体面临的是负载下不可预测的延迟和性能下降。

Circle 的解法是在其 interop 产品之上加了一层叫 Gateway 的基础设施，产品名 [[Nanopayments|Nanopayments]]（纳米支付）：支持低至一微分的交易，对卖方免 gas 费，即时跨链。 机制是：你给钱包充入 USDC（Circle 与服务商合作把真美元兑换成 USDC），资金存入智能合约；之后智能体只需签署链下授权——本质是加密签名，声明「我向这个地址支付这笔金额」；服务器把这个转发给 Circle，几百毫秒内商家就确认用户有资金、释放资源。这样就绕开了每笔交易都上链结算的延迟，让智能体以它运行的节奏付费。

## 整个栈怎么拼起来

总结起来三层：最上面是 Circle Agent Wallets，让智能体持有钱、自主花钱、由钱包强制执行你设的护栏；卖方一侧，商户用 SDK 写几行代码就能把端点包装成可变现的付费资源；底下由 USDC 和 Nanopayments 负责以亚秒级速度结算——匹配智能体的运行速度。想试的话，去 agents.circle.com 点几下就能给智能体装上一个有钱的钱包。

## 本集带走

- **智能体卡住的地方不是「不够聪明」，而是「不能付钱」**：遇到付费墙、注册流程、API 密钥管理，智能体就只能跳过或等你介入。
- **微交易 + 高频是全新形态**：智能体的支付是 1–10 美分级、每分钟几十笔，信用卡约 3% 的手续费模型直接不可持续；卖方也在顺势把数据切片装进付费墙（「付 10 美分拿走这份数据」）。
- **X402 的机制一句话**：服务器返回 402 头部说明怎么付，智能体用钱包签名授权、付款、重发请求。
- **护栏内置在钱包里，而不是靠人审批**：设单笔/每会话/每日上限，智能体在预算框内自主消费——逐笔人审在微交易场景根本无法扩展。
- **别让智能体直接在链上付**：gas 费吃掉微交易、链上延迟不可预测；Circle 的 Nanopayments 用链下授权 + 几百毫秒结算解决，支持低至一微分的交易、对卖方免 gas。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">因为在过去 30 年里，我们围绕唯一一个客户构建了互联网，那就是人类。</span>  
> *because for the last 30 years, we've built the internet around one customer, and that was humans.*  
> <span class="qm">—— Harshal Bhangale · [03:32]</span> ^q1

> <span class="qz">每当智能体尝试进行一笔一美分的交易时，你不可能支付 3% 的手续费。</span>  
> *You cannot pay 3% each time an agent tries to make a one-cent transaction.*  
> <span class="qm">—— Harshal Bhangale · [04:53]</span> ^q2

> <span class="qz">智能体需要像互联网一样运作的支付。</span>  
> *The agents need payments to work like the internet.*  
> <span class="qm">—— Harshal Bhangale · [05:44]</span> ^q3

> <span class="qz">你可以把这些护栏直接内置到钱包里，而你作为人类不必逐笔批准每一笔交易，因为那样根本无法扩展</span>  
> *You sort of build these guardrails into the wallet, and you don't have to, as a human, approve every single transaction, because that would just not scale*  
> <span class="qm">—— Harshal Bhangale · [09:32]</span> ^q4

> <span class="qz">仅仅在过去的 30 天里，智能体已经与付费 API 端点进行了交易，通过 X402 的交易量大约是 2400 万美元。</span>  
> *Just in the last 30 days, agents have transacted with paid API endpoints, and the volume is about like $24 million over X402.*  
> <span class="qm">—— Harshal Bhangale · [02:22]</span> ^q5

> <span class="qz">智能体现在可以持有自己的钱，自主地花这些钱，但要在你设定的护栏之内。</span>  
> *The agents can now hold their money, spend that money autonomously, but within the guardrails that you set.*  
> <span class="qm">—— Harshal Bhangale · [19:38]</span> ^q6

> <span class="qz">而我们相信今年，2026 年，是智能体真正开始为它们想要的服务付费的一年。</span>  
> *And we believe this year, 2026, is when agents actually start paying for services that they want.*  
> <span class="qm">—— Harshal Bhangale · [02:12]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-01-talks-when-ai-agents-pay-and-sellers-monetize|机器人流量已超人类：当 AI 智能体开始自己付钱]]<span class="pd-rz">同概念:X402、护栏 (guardrails)、智能体 (agent)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、护栏 (guardrails)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、护栏 (guardrails)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
