---
title: 不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记
podcast: "Lenny's Podcast"
date: 2026-08-10
source_url: https://www.lennysnewsletter.com/p/claude-code-for-normal-people-skills
duration: "24:11"
type: episode
cover: "#6366f1"
image: "/covers/2026-08-10-lennys-claude-code-for-normal-people-skills.jpg"
description: 用 Vercel 的 Eve 框架搭一个自动审查 PR 并给风险打分的智能体，让低风险代码直接通过。
host: "[[Claire]]"
companies: ["[[Intercom]]", "[[Vercel]]", "[[chat prd]]"]
concepts: ["[[PR 审查智能体]]", "[[智能体]]", "[[沙箱]]", "[[风险评分]]", "[[Eve]]", "[[Codex]]", "[[浏览器使用]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-08-10-lennys-claude-code-for-normal-people-skills.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-10-lennys-claude-code-for-normal-people-skills#post","headline":"不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-10-lennys-claude-code-for-normal-people-skills","mainEntityOfPage":"https://talk.solomind.cc/2026-08-10-lennys-claude-code-for-normal-people-skills","description":"用 Vercel 的 Eve 框架搭一个自动审查 PR 并给风险打分的智能体，让低风险代码直接通过。","datePublished":"2026-08-10","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-10-lennys-claude-code-for-normal-people-skills.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/claude-code-for-normal-people-skills","about":[{"@type":"Person","name":"Claire"},{"@type":"Organization","name":"Intercom"},{"@type":"Organization","name":"Vercel"},{"@type":"Organization","name":"chat prd"},{"@type":"Thing","name":"PR 审查智能体 (PR review agent)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"风险评分 (risk scoring)"},{"@type":"Thing","name":"Eve"},{"@type":"Thing","name":"Codex"},{"@type":"Thing","name":"浏览器使用 (browser use)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记","item":"https://talk.solomind.cc/2026-08-10-lennys-claude-code-for-normal-people-skills"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# 不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记

<div class="pd-byl"><b>Claire</b> · 2026-08-10</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-10-lennys-claude-code-for-normal-people-skills.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">AI 批准的 PR 以及 AI 编写的代码总体上甚至可能更安全，并且比你仅在流程中使用人类的质量更高。</div><div class="a">— Claire <button class="pd-ts" data-t="03:47" data-who="Claire" data-en="AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire]]
>
> **公司** [[Intercom]] · [[Vercel]] · [[chat prd]]
>
> **概念** [[PR 审查智能体]] · [[智能体]] · [[沙箱]] · [[风险评分]] · [[Eve]] · [[Codex]] · [[浏览器使用]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/claude-code-for-normal-people-skills)

<div class="pd-tldr"><b>一句话</b>用 Vercel 的 Eve 框架搭一个自动审查 PR 并给风险打分的智能体，让低风险代码直接通过。</div>

既然公司已经让 AI 写代码了，为什么还得人工一个个去审这些 AI 提交的代码？答案其实很简单：你不需要。

只要用 AI 搭一个机器人去评分、自动批准那些低风险的 PR，就能省下大把时间。说这话的人是 [[Claire|Claire]]，她在这一集里手把手演示了怎么搭这样一个系统 <button class="pd-ts" data-t="00:33" data-who="Claire" data-en="Now, what do we do with all these PRs? Well, people smarter than us have figured this out. And you know what the answer is?" aria-label="回原文"></button>。

这一集来自 How I AI 栏目，主讲人 Claire 完整演示了如何搭建一个 PR 审查机器人。你会听到这样几块内容：别人是怎么用 AI 自动审代码的；Claire 喜欢用哪个框架来搭机器人，以及它是怎么工作的；她具体是怎么给风险算分、决定哪些 PR 能自动放行的；以及她做这个项目踩了什么坑、有什么意外收获。带着这张地图，我们进正文。

先说别人怎么干的，这也正是启发了 Claire 的源头。很多人觉得 AI 写的代码肯定得人盯着，不然不安全。

但 [[Intercom|Intercom]] 的实践给出了反直觉的结论：他们发现 AI 审查和批准的 PR，实际上比纯人工审查的还要安全，质量也更高 <button class="pd-ts" data-t="03:47" data-who="Claire" data-en="But what they really think and what they've proven with their adoption of AI is that AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop." aria-label="回原文"></button>。这套打分审查系统给他们带来了实打实的效率提升——AI 批准的 PR 速度比人工快了足足 5 倍，而且代码上线后的回滚率（也就是代码上线后出问题、必须被撤销的比例）也更低 <button class="pd-ts" data-t="04:19" data-who="Claire" data-en="One is that AI approved PRs are approved faster, actually five times faster than their human PRs. So one, you are getting some speed." aria-label="回原文"></button>。更重要的是，这种做法还能满足合规要求，不管是 SOC 2 还是 HIPAA 的框架，只要你把这套逻辑写进风险策略里，保证每一步都是可审计、可查询的，就完全合规 <button class="pd-ts" data-t="04:52" data-who="Claire" data-en="of their required compliance frameworks, whether those are SOC 2, HIPAA, etc. So I often get this objection from folks. They say, well, I'm in a SOC 2 environment I couldn't possibly do." aria-label="回原文"></button>。

说完了别人怎么做，接下来是 Claire 自己的实操。她搭这个机器人，核心选用了 [[Vercel|Vercel]] 的 [[Eve|Eve]] 框架。

她特别推荐这个框架，因为搭建企业级[[智能体|智能体]]最痛苦的部分——配置 Slack、GitHub 权限、管理各种 token 和连接器——在 Eve 里几乎都是现成的。你只需要用向导点几下，就能把 Slack 和 GitHub 连接好，智能体还可以自带一个能直接跑代码的[[沙箱|沙箱]]（sandbox，一种隔离的安全执行环境，保证程序运行不会把系统搞坏）<button class="pd-ts" data-t="06:30" data-who="Claire" data-en="Why do I like Eve? Well, Eve has become The simplest way for me to deploy AI agents in the enterprise in Slack and GitHub without the torture and pain of something like Hermes Agent" aria-label="回原文"></button>。

有了基础设施，接下来就是定义机器人的行为。Claire 写的指令其实很短，也就是四五段文字，根本不需要过度设计 <button class="pd-ts" data-t="13:42" data-who="Claire" data-en="It's pretty simple. I will show you our instructions just to make this like very clear how easy it is to set this up." aria-label="回原文"></button>。

机器人的核心技能是读取 PR 的代码差异（diff，即修改了哪些内容），然后根据六大维度来评估风险：变更面和影响范围有多大、是否容易回滚、是否涉及数据安全、是否改变了运营方式、测试验证是否完整等 <button class="pd-ts" data-t="15:53" data-who="Claire" data-en="And so it looks at six things. How big is the change surface and blast radius? Is it easily reversible, right?" aria-label="回原文"></button>。算出一个总分后，24 分以下判为低风险自动放行，25 到 64 分属于中风险，65 分以上是高风险，中高风险的 PR 必须交由人工来审批 <button class="pd-ts" data-t="16:20" data-who="Claire" data-en="And then it has sort of like a script that it runs to calculate a score. And then anything under 24 points, again, I did not like choose these thresholds. Anything below 24 points is low risk." aria-label="回原文"></button>。

机器人搭好了，具体工作流程是怎么样的？这正是她接下来演示的重点。

她把这个机器人取名叫 Merge Mommy。当一个 PR 准备好后，机器人就会自动运行：如果只是改了文档，它打出低分（比如 6/100 分），但如果代码有合并冲突，它就会亮红灯拦截 <button class="pd-ts" data-t="18:09" data-who="Claire" data-en="And so what happens on once the PR is ready to go, Merge Mommy runs. It gives a risk score, six out of 10. It's very low risk." aria-label="回原文"></button>。

如果遇到那种清理废弃代码的大型改动，因为它修改了服务器的 API 行为，机器人就会打出 45/100 分的中风险，并果断拒绝自动合并 <button class="pd-ts" data-t="19:58" data-who="Claire" data-en="I can't take myself seriously when I say it, but I'm gonna say it anyways. Merge Mommy gave it a 45 out of 100, a medium risk," aria-label="回原文"></button>。Claire 特别提到一个小细节：因为 GitHub 的规则要求必须有人类审查通过，机器人没法代替人类点最终的按钮，所以机器人其实是在 Slack 频道里通知人类：「这个低风险代码我审过了，没问题，你直接点同意合并就行。」这就把审查工作变成了一秒钟的点击活儿 <button class="pd-ts" data-t="12:22" data-who="Claire" data-en="So it's like very similar to how a human would do code review. How does it work from a technical flow perspective? So the GitHub, I have a GitHub app." aria-label="回原文"></button>。

工作流打通了，人怎么省事？这正是搭建这个机器人最让人爽的地方。

Claire 坦言她本来很怕搭建这种 GitHub App 和 Slack 机器人，以为要配各种复杂的权限折腾好几天 <button class="pd-ts" data-t="21:10" data-who="Claire" data-en="and making it like a two click process to get this thing to production. Now, I just have to say this is something that I was really intimidated to build. I thought this was going to take me like days and days and days." aria-label="回原文"></button>。但她用了 [[Codex|Codex]] 的 Chrome [[浏览器使用|浏览器自动化]]功能，直接让 AI 操控浏览器去点各种配置按钮，她自己只在旁边管一下二次验证，把最烦人的部分外包给了 AI <button class="pd-ts" data-t="10:31" data-who="Claire" data-en="You have to do all this stuff. And so what I did is my favorite hack is I had it use Chrome browser use and I let it navigate Slack bot setup." aria-label="回原文"></button>。结果是，不仅审查时间大大缩短了，AI 还顺带给人类派了活儿：AI 把风险都查清楚，人只要在 Slack 上点个确认就行 <button class="pd-ts" data-t="20:36" data-who="Claire" data-en="hey, this can be approved or this requires human review. Again, I like to say this thing where we can put AI to work for us or we can have AI put us" aria-label="回原文"></button>。

## 本集带走

最后收个尾，这一集值得带走的是这几件事。第一，既然是 AI 写的代码，完全可以把审查工作也交给 AI，只要系统做得好，它甚至比人工审查更安全、合规也不在话下。

第二，搭这样一个智能体一点都不复杂，用 Vercel 的 Eve 这种框架，你只要写几段简短的规则，给六个维度的打分标准，它就能自己干活。第三，即使机器人不能直接按 GitHub 的最终通过键，也能通过 Slack 把审查变成只需点击两下的流程，大幅提升速度。第四，那些繁琐的第三方服务配置，你可以直接让 AI 去操控浏览器替你点，最后别忘了像对待面向客户的产品一样，持续在内部跑评估，看看机器人到底打分打得准不准。

<div class="pd-sec">全部金句 <span>4 条</span></div>

> <span class="qz">AI 批准的 PR 以及 AI 编写的代码总体上甚至可能更安全，并且比你仅在流程中使用人类的质量更高。</span>  
> *AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop.*  
> <span class="qm">—— Claire · [03:47]</span> ^q1

> <span class="qz">AI 批准的 PR 批准得更快，实际上比他们人类 PR 快 5 倍。</span>  
> *AI approved PRs are approved faster, actually five times faster than their human PRs.*  
> <span class="qm">—— Claire · [04:16]</span> ^q2

> <span class="qz">你可以安全地不审查 PR，方法是将 AI 加入流程中。</span>  
> *you can safely not review PRs by putting AI in the loop.*  
> <span class="qm">—— Claire · [02:55]</span> ^q3

> <span class="qz">我们可以让 AI 为我们工作，或者我们可以让 AI 让我们工作。</span>  
> *we can put AI to work for us or we can have AI put us to work.*  
> <span class="qm">—— Claire · [20:37]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Intercom、Vercel · 同概念:Codex、Eve、智能体 (agent)、沙箱 (sandbox)、风险评分 (risk scoring)</span>
- [[2026-07-13-lennys-this-solo-builder-runs-247-local|GPT 5.6 测评：我为什么抛弃 Fable，把 Soul 当主力]]<span class="pd-rz">同公司:chat PRD · 同概念:Codex、智能体 (agent)、浏览器自动化 (browser use)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Slack · 同概念:Codex、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同概念:Codex、智能体 (agent)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同概念:Codex、智能体 (agent)</span>

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
