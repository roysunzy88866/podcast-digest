---
title: 用 AI 代替人审 PR：风险评分与自动批准实操
podcast: "Lenny's Podcast"
date: 2026-08-03
source_url: https://www.lennysnewsletter.com/p/chatgpt-codex-voice-browser-sites
duration: "24:11"
type: episode
cover: "#6366f1"
image: "/covers/2026-08-03-lennys-chatgpt-codex-voice-browser-sites.jpg"
description: 不用人工逐一审查所有 AI 生成的 PR，用智能体做风险评分，低风险自动放行。
host: "[[Claire]]"
companies: ["[[Intercom]]", "[[Vercel]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[Eve]]", "[[PR]]", "[[风险评分]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-08-03-lennys-chatgpt-codex-voice-browser-sites.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-03-lennys-chatgpt-codex-voice-browser-sites#post","headline":"用 AI 代替人审 PR：风险评分与自动批准实操","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-03-lennys-chatgpt-codex-voice-browser-sites","mainEntityOfPage":"https://talk.solomind.cc/2026-08-03-lennys-chatgpt-codex-voice-browser-sites","description":"不用人工逐一审查所有 AI 生成的 PR，用智能体做风险评分，低风险自动放行。","datePublished":"2026-08-03","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-03-lennys-chatgpt-codex-voice-browser-sites.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/chatgpt-codex-voice-browser-sites","about":[{"@type":"Person","name":"Claire"},{"@type":"Organization","name":"Intercom"},{"@type":"Organization","name":"Vercel"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Eve"},{"@type":"Thing","name":"PR"},{"@type":"Thing","name":"风险评分 (risk scoring)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"用 AI 代替人审 PR：风险评分与自动批准实操","item":"https://talk.solomind.cc/2026-08-03-lennys-chatgpt-codex-voice-browser-sites"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 AI 代替人审 PR：风险评分与自动批准实操</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# 用 AI 代替人审 PR：风险评分与自动批准实操

<div class="pd-byl">2026-08-03</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-03-lennys-chatgpt-codex-voice-browser-sites.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">AI 批准的 PR，以及总体上 AI 编写的代码，甚至可能比你仅仅靠人类循环所做的更安全、质量更高。</div><div class="a">— Claire <button class="pd-ts" data-t="03:47" data-who="Claire" data-en="That AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire]]
>
> **公司** [[Intercom]] · [[Vercel]]
>
> **概念** [[智能体]] · [[沙箱]] · [[Eve]] · [[PR]] · [[风险评分]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/chatgpt-codex-voice-browser-sites)

<div class="pd-tldr"><b>一句话</b>不用人工逐一审查所有 AI 生成的 PR，用智能体做风险评分，低风险自动放行。</div>

你不必由人类逐一审查每一个 [[PR|PR]]——把 AI 纳入审查循环，低风险的直接自动放行，只把真正需要人类判断的留下来 <button class="pd-ts" data-t="00:37" data-who="Claire" data-en="And you know what the answer is? You don't have to review all your PRs. Yep." aria-label="回原文"></button>。

## 为什么敢让 AI 批准 PR

[[Intercom|Intercom]] 已经把 PR 吞吐量提升了 2 到 3 倍，他们造了一个 PR 审查[[智能体|智能体]]来打分并自动批准。关键发现：AI 批准的 PR 不但更快——比纯人类审查快 5 倍——而且质量更高，回退率（代码上线后需要回滚修复的比例）明显更低 <button class="pd-ts" data-t="04:19" data-who="Claire" data-en="One is that AI approved PRs are approved faster, actually five times faster than their human PRs. So one, you are getting some speed." aria-label="回原文"></button>。在安全与质量上，AI 不是劣势，反而成了优势 <button class="pd-ts" data-t="04:00" data-who="Claire" data-en="and even higher quality than what you're doing with just a human in the loop. They have used AI as an advantage when it comes to safety and quality as opposed to" aria-label="回原文"></button>。

合规方面，只要你的风险策略和代码审查策略里写清楚了、过程可审计、可查询、可辩护，SOC 2、HIPAA 这类框架下也能做自动批准——当然要跟安全和合规团队一起过 <button class="pd-ts" data-t="05:00" data-who="Claire" data-en="But in fact, there are frameworks as long as it's in your risk policies, as long as it's in your code review policies," aria-label="回原文"></button>。

## 这个智能体具体干什么

逻辑很直接，跟人类审查流程对标：读取 PR → 看具体 diff（代码变更内容）→ 打风险分 → 发布评分依据。低风险的自动提交批准；需要人的升级给人类；有硬性阻塞的就直接要求修改 <button class="pd-ts" data-t="11:43" data-who="Claire" data-en="It's pretty simple. If you were building a PR review agent, this is what I would suggest you do, which is it reads the PR." aria-label="回原文"></button>。

技术流程：GitHub 上 PR 变更完成后触发事件 → [[Vercel|Vercel]] 的 GitHub 集成接住 → 启动[[沙箱|沙箱]]、检出仓库、看 diff → 跑技能和工具评估风险和质量 → 输出结果（通过 / 需修改 + 评论）→ 在 Slack 里通知相关的人 <button class="pd-ts" data-t="12:22" data-who="Claire" data-en="So it's like very similar to how a human would do code review. How does it work from a technical flow perspective? So the GitHub, I have a GitHub app." aria-label="回原文"></button>。

## 风险评分怎么算

评分看六个维度：变更范围和爆炸半径有多大；是否容易回滚（比如大数据迁移就难逆转）；是否涉及数据安全；是否改变运营相关的东西；验证缺口——测试够不够、CI 是否跑完、能不能实际验证几条路径 <button class="pd-ts" data-t="15:51" data-who="Claire" data-en="And then once it reads the code, it scores the risk. And so it looks at six things. How big is the change surface and blast radius?" aria-label="回原文"></button>。

然后跑一个脚本算分：24 分以下低风险，25 到 64 中等，65 以上高风险。中高风险必须人工批准 <button class="pd-ts" data-t="16:20" data-who="Claire" data-en="And then it has sort of like a script that it runs to calculate a score. And then anything under 24 points, again, I did not like choose these thresholds. Anything below 24 points is low risk." aria-label="回原文"></button>。

还有仓库级别的分类规则：文档改的是低风险，功能逻辑是中等，认证和计费是高风险。diff 大小本身不决定风险等级 <button class="pd-ts" data-t="15:09" data-who="Claire" data-en="It reads and reviews the PR. It has a couple repo specific risk kind of categories. So like docs are low risk," aria-label="回原文"></button>。

## 实际跑起来什么样

[[Claire|Claire]] 给机器人起名叫 Merge Mommy。一个文档更新的 PR：打了 6 分（满分 100），低风险，但因为存在合并冲突所以没自动批准——这也是评分要检查的项目之一 <button class="pd-ts" data-t="18:02" data-who="Claire" data-en="that didn't really need a bunch of review. And so what happens on once the PR is ready to go, Merge Mommy runs. It gives a risk score, six out of 10." aria-label="回原文"></button>。

另一个干净的文档 PR：7 分，低风险，自动批准，在 PR 页面留下一个绿色勾 <button class="pd-ts" data-t="18:34" data-who="Claire" data-en="the approval blocker is the pull request has merge conflicts. A cleaner example here is this doc, which I already merged," aria-label="回原文"></button>。一个弃用旧代码的 PR：删了约 35 处、大面积红 diff，打了 45 分，中等风险——因为改动大、涉及服务端 API 行为变更，不自动批准，转人工 <button class="pd-ts" data-t="19:33" data-who="Claire" data-en="And then let's show one where Merge Mommy did not approve it. This is a deprecation PR. So we had chat V1 and chat PRD and we're moving to chat V2." aria-label="回原文"></button>。

自动批准的 PR 不会直接合并，因为仓库规则要求「必须有审批」，而机器人不算数（勾是灰色的）。做法是：机器人标记为已审查，然后推到 Slack 频道，人点一下批准、点一下合并，两步搞定 <button class="pd-ts" data-t="19:07" data-who="Claire" data-en="So it's just like a really nice automated flow. Now, why do we have to have a human do it? As you can see, this checkmark is gray." aria-label="回原文"></button>。

## 用什么框架、怎么搭

用的 Vercel 的 [[Eve|Eve]] 框架。Eve 智能体的核心就是目录结构里放指令、技能和工具，支持沙箱执行，连接 Slack 和 GitHub 通过 Vercel 连接器的向导几步就配好 <button class="pd-ts" data-t="06:23" data-who="Claire" data-en="through how I built a code review risk scoring bot with Vercel's Eve. So if you have not heard about Eve, I'm a little bit obsessed with Eve. Why do I like Eve?" aria-label="回原文"></button>。底层用的 chat SDK（也是 Vercel 开源的），处理多渠道聊天的各种配置细节 <button class="pd-ts" data-t="08:14" data-who="Claire" data-en="And this has been the easiest framework to get up and running. It uses the chat SDK behind the scenes. And if you are creating any sort of chat bot in Slack, Teams, WhatsApp, whatever, I mean..." aria-label="回原文"></button>。

搭建过程本身是用 Codex 完成的。初始提示词就一句话：做一个内部 GitHub 应用，在所有 checks 通过后审查 PR，评低中高风险，自动批准低风险的 <button class="pd-ts" data-t="09:24" data-who="Claire" data-en="Well, I built it in Codex. And so I'm going to show you the amazing prompt where I started this PR review bot, which says," aria-label="回原文"></button>。代码是 Codex 生成的，但真正省事的是让 Codex 用 Chrome 浏览器操作去点完 Slack 机器人设置和 GitHub 应用权限配置那些繁琐的界面——不用人自己去点 <button class="pd-ts" data-t="10:19" data-who="Claire" data-en="And I'll tell you a little bit about how the code actually works in a sec. But what was actually awesome is if you've ever set up a Slack bot or a GitHub app, You have to like click through a bunch of configuration screens." aria-label="回原文"></button>。

整个智能体的代码量很少：一段指令（四五段文字加几个要点）、一个读取 PR 的技能、两个工具（读文件信息和提交风险决策）、一个 Slack 通知器 <button class="pd-ts" data-t="13:08" data-who="Claire" data-en="or it needs some help. So if you were to set up your Eve agent to be similar to mine, what would it have? Well, it would have a couple of things." aria-label="回原文"></button>。不需要过度设计 <button class="pd-ts" data-t="14:03" data-who="Claire" data-en="It is like four or five paragraphs, a couple of bullet points, and it's ready to go. You do not need to over-engineer this. And it works really, really well." aria-label="回原文"></button>。

## 持续改进

Intercom 的做法是在每次审查运行后把结果记录到内部评估平台，工程师定期看：智能体判对了吗、判错了吗、评分机制要不要调 <button class="pd-ts" data-t="22:49" data-who="Claire" data-en="And what would you put into your risk scoring that I haven't thought of? The final bonus piece off this, which I didn't show," aria-label="回原文"></button>。跟面向用户的 AI 产品一样，内部智能体也要跑评估来持续改进，尤其碰的是代码这种关键东西 <button class="pd-ts" data-t="23:14" data-who="Claire" data-en="Are we happy with the scoring mechanism? So very similar to how you'd use evals to improve your customer facing AI products, you're going to want to use evals to improve your internally facing AI bots," aria-label="回原文"></button>。

## 本集带走

- **低风险 PR 可以不让人审**：用智能体打分，24 分以下自动批准，人只看中高风险
- **评分看六个维度**：变更范围、可逆性、数据安全、运营影响、验证缺口、CI 状态——diff 大小不直接决定风险
- **仓库级别定分类规则**：文档低风险、功能逻辑中风险、认证计费高风险，写进指令就行
- **合规可以做**：只要策略里有写、过程可审计可查询，SOC 2 环境下也能自动批准
- **配置界面让 AI 去点**：用 Codex 的 Chrome 浏览器操作能力，让 AI 帮你完成 Slack 机器人和 GitHub 应用的权限配置
- **自动批准≠直接合并**：仓库规则通常要求"人"审批，所以机器人标记后推 Slack，人两步确认合并
- **内部智能体也要跑评估**：每次审查结果记下来，定期看判对判错，持续调评分机制

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">AI 批准的 PR，以及总体上 AI 编写的代码，甚至可能比你仅仅靠人类循环所做的更安全、质量更高。</span>  
> *That AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop.*  
> <span class="qm">—— Claire · [03:47]</span> ^q1

> <span class="qz">差异大小并不决定风险。</span>  
> *Diff size does not set risk.*  
> <span class="qm">—— Claire · [15:21]</span> ^q2

> <span class="qz">我喜欢说这个，我们可以让 AI 为我们工作，或者我们可以让 AI 让我们去工作。这是一个两者都做的例子。</span>  
> *I like to say this thing where we can put AI to work for us or we can have AI put us to work. And this is an example where you do both.*  
> <span class="qm">—— Claire · [20:36]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Intercom、Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、风险评分 (risk scoring)、Codex</span>
- [[2026-08-10-lennys-claude-code-for-normal-people-skills|不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记]]<span class="pd-rz">同公司:Intercom、Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、风险评分 (risk scoring)、Codex</span>
- [[2026-07-27-lennys-from-zero-coding-background-to-hardware|不审查AI生成的PR：自动评分审批机器人实战]]<span class="pd-rz">同公司:Intercom、Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、风险评分 (risk scoring)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
