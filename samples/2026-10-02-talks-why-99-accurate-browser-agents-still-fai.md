---
title: "为什么99%准确率的浏览器智能体还是会失败"
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "16:29"
type: episode
cover: "#64748b"
description: Browserbase 工程师 Derek Meegan 讲解浏览器智能体演示与生产的差距，以及如何真正让它们可靠运行。
guests: ["[[Derek Meegan]]"]
companies: ["[[Browserbase]]"]
concepts: ["[[浏览器智能体]]", "[[智能体]]", "[[工具调用]]", "[[计算机使用]]", "[[无障碍树]]", "[[可观测性]]", "[[模型成本]]", "[[反机器人机制]]", "[[技能]]", "[[重试]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai#post","headline":"为什么99%准确率的浏览器智能体还是会失败","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai","description":"Browserbase 工程师 Derek Meegan 讲解浏览器智能体演示与生产的差距，以及如何真正让它们可靠运行。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Derek Meegan"},{"@type":"Organization","name":"Browserbase"},{"@type":"Thing","name":"浏览器智能体 (browser agent)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"工具调用 (tool call)"},{"@type":"Thing","name":"计算机使用 (computer use)"},{"@type":"Thing","name":"无障碍树 (accessibility tree)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"模型成本 (model costs)"},{"@type":"Thing","name":"反机器人机制 (antibots)"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"重试 (retry)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"为什么99%准确率的浏览器智能体还是会失败","item":"https://talk.solomind.cc/2026-10-02-talks-why-99-accurate-browser-agents-still-fai"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>为什么99%准确率的浏览器智能体还是会失败</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 为什么99%准确率的浏览器智能体还是会失败

<div class="pd-byl"><b>Derek Meegan</b> · BrowserBase 软件工程师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-talks-why-99-accurate-browser-agents-still-fai.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这一切是说，你的智能体只是又一个账目项目，你的智能体应该带给你的多于它索取的。</div><div class="a">— Derek Meegan <button class="pd-ts" data-t="06:40" data-who="Derek Meegan" data-en="And this is all to say that your agent is just another line item and that your agent should give you more than it takes." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Derek Meegan]]
>
> **公司** [[Browserbase]]
>
> **概念** [[浏览器智能体]] · [[智能体]] · [[工具调用]] · [[计算机使用]] · [[无障碍树]] · [[可观测性]] · [[模型成本]] · [[反机器人机制]] · [[技能]] · [[重试]]

[[浏览器智能体|浏览器智能体]]的演示总是很惊艳：在一个网站上跑一次，你在旁边盯着，一切顺利。

但生产环境完全不同——成千上万次无人值守的运行，网站随时会变，模型也可能状态不佳。

[[Derek Meegan|Derek Meegan]] 是 [[Browserbase|Browserbase]] 的软件工程师，这场演讲回答了一个核心问题：演示和生产之间，到底差了什么。

## 智能体是怎么“看”网页的

可以把模型的输出理解为一种概率分布：

模型收到输入（页面状态、目标、已执行的步骤），在所有可能的动作中挑出最可能的一个，转成结构化的[[工具调用|工具调用]]，再去操作浏览器。

但浏览器本身很复杂，有好几层接口：

进出的网络请求、页面的 HTML 文档树、截图、[[无障碍树|无障碍树]]（一种页面的语义化文本描述），以及底层的动态代码执行环境，可以直接写 JavaScript 去控制浏览器。

业界主要有三种接法：一是把页面转成文本表示；二是靠截图让模型像人一样“看”屏幕操作；

三是越来越流行的做法——去掉定制工具，让[[智能体|智能体]]直接对浏览器写任意代码 <button class="pd-ts" data-t="03:08" data-who="嘉宾" data-en="And finally, and becoming increasingly popular, is de-harnessing your agent, removing tailor-made tools in favor of dynamic execution environments where the agent can write arbitrary code against the browser." aria-label="回原文"></button>。

## 为什么说“没有部分分”

问题的核心在于一种不对称：成本是持续累积的，价值却只在最后一步兑现。

智能体每走一步，都在增加成本，也累积失败的风险。但只有整个任务从头到尾完成，你才拿到价值。付账单付到 99% 等于没付。

用 Meegan 的话说，浏览器智能体“没有部分分” <button class="pd-ts" data-t="05:01" data-who="嘉宾" data-en="Yet, I only receive value from this browser trajectory when all steps of the task have been completed. That's all to say that with browser agents, there is no partial credit, and the vast majority of web automations fall into this category." aria-label="回原文"></button>。

一个思想实验说明了问题有多严重：假设每一步的独立成功率是 99%，听起来很好。但如果一个任务要 100 步，整体成功率只剩约 36% <button class="pd-ts" data-t="05:28" data-who="嘉宾" data-en="You have a browser agent where each step has an independent success rate of 99%. If your browser trajectory spans 100 steps, the overall success rate at scale starts to look like 36%, only about a third of the time." aria-label="回原文"></button>。

这就是为什么单纯换更强的模型不够。

## 先想清楚：智能体到底给你什么

在算细账之前，Meegan 提醒大家回到一个简单的公式：利润等于收入减去成本。

你的智能体只是账上的一行，它给你的必须多于它拿走的。

在 Browserbase 的场景里，客户往往不是为自己自动化，而是替他们的用户在网上执行操作。

所以浏览器智能体真正给你的，是反复可靠地替客户完成任务的能力 <button class="pd-ts" data-t="07:14" data-who="嘉宾" data-en="Oftentimes, they're not automating the web for their own needs, but instead performing actions on the web on their customers' behalf. And so a browser agent actually gives you a task completed for your customer repeatedly." aria-label="回原文"></button>。

衡量这个系统，按重要性排三个维度：性能、成本、可维护性。

其中性能是关键——一旦确认智能体能完成任务，成本和可维护性就都变成了优化问题，而优化问题是可以靠工程手段解决的 <button class="pd-ts" data-t="08:02" data-who="嘉宾" data-en="Because once we know a browser agent is performance, it can complete the task we asked it to do, then cost and maintainability simply become optimization problems." aria-label="回原文"></button>。

## 成功要留下“证据”，而且要允许重试

成功的定义要具体：一次运行应该留下一个可查证的产物。

付账单是确认邮件，下单是订单号或收据，提交表单是系统里新增的一条记录 <button class="pd-ts" data-t="08:13" data-who="嘉宾" data-en="So the first thing we need to ask is what success actually looks like. And success in these transactional browser trajectories look like some kind of concrete artifact that the run leaves behind." aria-label="回原文"></button>。

衡量成功率也有讲究。单次运行成功率 50% 的智能体，如果允许每次交易最多[[重试|重试]] 4 次，按交易计算的成功率就能升到 94% <button class="pd-ts" data-t="08:58" data-who="嘉宾" data-en="Its probability of success on any run is 50%. Yet, if you permit that agent to retry for a particular transaction, maybe up to four retries, your per transaction success rate quickly climbs to 94%." aria-label="回原文"></button>。

客户不在乎你重试了几次，只在乎任务是否可靠完成。所以：允许重试，按交易而非按运行来算成功率。

## 风险从哪来：网站会反扑，任务会漂移

即使系统跑起来了，还有几类风险。

环境会反抗——反爬虫机制处处针对自动化；任务本身会变；模型天生的不确定性意味着它可能偏离关键路径 <button class="pd-ts" data-t="11:53" data-who="嘉宾" data-en="And finally, the model strays off tasks. Models are inherently indeterministic. So from run to run, it may not follow the ideal path or the critical path to perform the action." aria-label="回原文"></button>。

还有一个经典困境：如果你今天在自动化某个网站，明天对方开放了官方接口怎么办？

Meegan 的判断是，对绝大多数浏览器智能体的用例来说，官方接口短期内不会来 <button class="pd-ts" data-t="11:51" data-who="嘉宾" data-en="But for the vast majority of browser agent use cases, an API isn't coming anytime soon. And finally, the model strays off tasks. Models are inherently indeterministic." aria-label="回原文"></button>。

## 实战：一次医保门户自动化是怎么搭起来的

演讲最精彩的部分是一个真实例子：自动化一个健康保险门户，登录并下载一份福利说明文件。

系统的演进分几步，每步都在砍掉模型不必要的责任。

一开始只有最简的智能体。

然后发现下载文件涉及和页面的程序化交互、还要从存储里取回文件，干脆把这些封装成一个工具调用，不用模型临场决策 <button class="pd-ts" data-t="13:19" data-who="嘉宾" data-en="So you create a tool that does this all in one transaction. Instead of the model needing to make decisions on the fly, you encapsulate a complex operation into a single tool call." aria-label="回原文"></button>。

接着给智能体一个校验工具，用文字识别确定性地提取文件里的信息，和系统记录比对——智能体从此能权威地知道自己做对了没有 <button class="pd-ts" data-t="13:36" data-who="嘉宾" data-en="This can be done by giving it another tool. This tool is an OCR tool that deterministically extracts entities from the document and compares that against the system of record." aria-label="回原文"></button>。

再往后，注意到登录流程永远不变，就把认证逻辑从模型手里抽出来，做成独立函数。

步骤更少、成本更低、性能更好，还能在同一个门户的多个业务流程里复用 <button class="pd-ts" data-t="14:10" data-who="嘉宾" data-en="And you want to reuse the same authentication mechanism for many business operations on the same portal. So you pull that authentication logic out from the responsibility of the model." aria-label="回原文"></button>。

最后，为剩下真正有模糊性的部分写一份“[[技能|技能]]”——类似过去给人类用的标准操作流程，只不过是给智能体的。

回到开头概率分布的比喻：智能体知道自己在第二步，也知道下一步该做什么，歧义就从决策过程中被移除了 <button class="pd-ts" data-t="15:21" data-who="嘉宾" data-en="So if we introduce the critical path to the agent, it knows it's at step two and knows that it needs to take step three because we have outlined it in this skill, then it's more likely to take that step three." aria-label="回原文"></button>。

最终的系统是：

请求进来，独立的认证函数先登录浏览器，智能体按技能文档导航门户，调用确定性的下载函数，再用校验工具确认成败。

整个设计的原则就是：把不需要模型负责的步骤，统统从模型手里拿走。

## 本集带走

- 浏览器智能体没有部分分：成本逐累积，价值只在终点兑现，每步 99% 的成功率跑 100 步只剩约 36%。
- 按“交易”而非“单次运行”衡量成功率，允许重试——50% 单次成功率加重试可达 94%。
- 成功要可验证：每次运行应留下具体产物，如确认邮件、订单号、新记录。
- 性能是第一位的；确认能完成任务后，成本和可维护性都是可工程化的优化问题。
- 架构的核心思路是做减法：把确定性步骤（登录、下载、校验）封装成工具和函数，只让模型处理真正模糊的部分。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">这一切是说，你的智能体只是又一个账目项目，你的智能体应该带给你的多于它索取的。</span>  
> *And this is all to say that your agent is just another line item and that your agent should give you more than it takes.*  
> <span class="qm">—— Derek Meegan · [06:40]</span> ^q1

> <span class="qz">然而，如果你允许该智能体针对某笔交易进行重试，也许最多四次重试，你的每笔交易成功率会迅速攀升到 94%。</span>  
> *Yet, if you permit that agent to retry for a particular transaction, maybe up to four retries, your per transaction success rate quickly climbs to 94%.*  
> <span class="qm">—— Derek Meegan · [08:58]</span> ^q2

> <span class="qz">客户并不一定在乎你执行了多少次重试，而是在乎工作流是否成功且可靠地完成了。</span>  
> *The customer does not care necessarily how many retries you perform, but rather that the workflow was completed successfully and reliably.*  
> <span class="qm">—— Derek Meegan · [09:16]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-05-sourcery-john-collison--stripe-ai-agents-will-rew|Stripe 联合创始人：AI 智能体会重造互联网的商业逻辑]]<span class="pd-rz">同公司:Browserbase · 同概念:computer use、智能体 (agent)</span>
- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、工具调用 (tool call)</span>
- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同概念:computer use、智能体 (agent)、可观测性 (observability)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-02-24-talks-braintrust-s-ankur-goyal-on-why-evals-ar|评测优先:Braintrust 创始人谈 AI 产品开发的真正工程]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)</span>
- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同概念:技能 (skill)、智能体 (agent)</span>
- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当写代码变便宜,OpenAI Codex负责人说「品味」成了最贵的资源]]<span class="pd-rz">同概念:computer use、智能体 (agent)</span>

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
