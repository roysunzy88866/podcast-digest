---
title: 用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操
podcast: "Lenny's Podcast"
date: 2026-08-05
source_url: https://www.lennysnewsletter.com/p/build-an-ai-code-review-bot-in-30
duration: "24:11"
type: episode
cover: "#6366f1"
image: "/covers/2026-08-05-lennys-build-an-ai-code-review-bot-in-30.jpg"
description: 别让 AI 生成的 PR 堵死你的审查队列，用智能体自动评分，低风险直接放行。
host: "[[Claire]]"
companies: ["[[Intercom]]", "[[ChatPRD]]", "[[Vercel]]", "[[Codex]]"]
concepts: ["[[Eve]]", "[[智能体]]", "[[风险评分]]", "[[沙箱]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-08-05-lennys-build-an-ai-code-review-bot-in-30.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-05-lennys-build-an-ai-code-review-bot-in-30#post","headline":"用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-05-lennys-build-an-ai-code-review-bot-in-30","mainEntityOfPage":"https://talk.solomind.cc/2026-08-05-lennys-build-an-ai-code-review-bot-in-30","description":"别让 AI 生成的 PR 堵死你的审查队列，用智能体自动评分，低风险直接放行。","datePublished":"2026-08-05","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-05-lennys-build-an-ai-code-review-bot-in-30.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/build-an-ai-code-review-bot-in-30","about":[{"@type":"Person","name":"Claire"},{"@type":"Organization","name":"Intercom"},{"@type":"Organization","name":"ChatPRD"},{"@type":"Organization","name":"Vercel"},{"@type":"Organization","name":"Codex"},{"@type":"Thing","name":"Eve"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"风险评分 (risk scoring)"},{"@type":"Thing","name":"沙箱 (sandbox)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操","item":"https://talk.solomind.cc/2026-08-05-lennys-build-an-ai-code-review-bot-in-30"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操

<div class="pd-byl"><b>Claire</b> · ChatPRD 创始人 · 2026-08-05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-05-lennys-build-an-ai-code-review-bot-in-30.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">AI 审批的 PR 以及总体上 AI 编写的代码甚至可以比仅有人类在流程中所做的更安全、质量更高。</div><div class="a">— Claire <button class="pd-ts" data-t="03:47" data-who="Claire" data-en="AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire]]
>
> **公司** [[Intercom]] · [[ChatPRD]] · [[Vercel]] · [[Codex]]
>
> **概念** [[Eve]] · [[智能体]] · [[风险评分]] · [[沙箱]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/build-an-ai-code-review-bot-in-30)

<div class="pd-tldr"><b>一句话</b>别让 AI 生成的 PR 堵死你的审查队列，用智能体自动评分，低风险直接放行。</div>

既然每个人都能用 AI 写代码，那你的公司大概率正被堆积如山的 PR（拉取请求）淹没——[[Claire|Claire]] 在这一集开场就甩出了最反直觉的结论：**你实际上根本不需要由人类一条条去审查所有这些 PR** <button class="pd-ts" data-t="00:37" data-who="Claire" data-en="And you know what the answer is? You don't have to review all your PRs. Yep." aria-label="回原文"></button>。在 2026 年，完全可以通过把 AI 放进审查流程里，安全地跳过人工把关。

这一集来自她的 How I AI 节目，Claire 是 [[ChatPRD|ChatPRD]] 的创始人，这次她手把手演示了如何构建一个 PR 审查、[[风险评分|风险评分]]和自动批准机器人。你会听到三块内容：首先是 [[Intercom|Intercom]] 是怎么用这套机制把 PR 吞吐量提高两三倍的同时，还能保证合规的；接着是她如何用 [[Vercel|Vercel]] 的 [[Eve|Eve]] 框架，配合 [[Codex|Codex]] 的浏览器操作功能，极其简单地搭出这个[[智能体|智能体]]；最后是具体的落地工作流，以及她对评估和维护这类代码机器人的建议。

既然提到了 Intercom 的成功，那就先来看看他们用这套自动审查系统拿到了什么结果。他们的核心主张是：AI 审批的 PR 不仅能提速，甚至可以比仅有人类参与时**更安全、质量更高** <button class="pd-ts" data-t="03:47" data-who="Claire" data-en="But what they really think and what they've proven with their adoption of AI is that AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop." aria-label="回原文"></button>。他们公布了几个关键指标：AI 审批 PR 的速度比人类快 5 倍；用 AI 写的代码上线后，回滚率（即代码在生产环境上线后必须修复的比例）要低得多 <button class="pd-ts" data-t="04:14" data-who="Claire" data-en="And to set the vision of what you can expect here, I love that they shared some metrics. One is that AI approved PRs are approved faster, actually five times faster than their human PRs." aria-label="回原文"></button>。

除了安全和质量，很多人一听自动化审批就会抛出合规问题的质疑。对此 Claire 强调，即便你身处 SOC 2（一种企业数据安全合规标准）环境，只要在风险策略和代码审查策略中明确规定，保证整个审查过程是可审计、可查询且可辩护的，你依然能在合规框架内实现自动审批 <button class="pd-ts" data-t="05:00" data-who="Claire" data-en="But in fact, there are frameworks as long as it's in your risk policies, as long as it's in your code review policies," aria-label="回原文"></button>。Intercom 正是通过这种做法，满足了包括 SOC 2 和 HIPAA（医疗数据隐私保护法案）在内的各种合规要求。

明确了合规性与可行性的前提，接下来看看 Claire 是如何具体打造这套系统的。她为 ChatPRD 构建了这个机器人，当时大量低风险的 PR（比如自动生成的文档更新）堆积在队列里，她和同事根本没时间看 <button class="pd-ts" data-t="05:50" data-who="Claire" data-en="I knew that I wanted to do this for chat PRD. I knew we had a lot of low risk PRS that were just sitting in the queue because my colleague and I were not getting to review them." aria-label="回原文"></button>。

她选中了 Vercel 的 Eve 框架。她之所以极力推荐 Eve，是因为它是她在 Slack 和 GitHub 上部署 AI 智能体最简单的方式。

创建一个 Slack 机器人或 GitHub 应用通常需要在后台点过无数个配置屏幕、挑选一堆权限，极其繁琐。但 Eve 提供了连接器向导，把这些刷新令牌之类的痛苦全接管了 <button class="pd-ts" data-t="07:42" data-who="Claire" data-en="and connecting it to enterprise data is super easy. So because Vercel has shipped a Vercel connectors, which are like managed connections inside your Vercel account," aria-label="回原文"></button>。此外，它底层使用开源的 chat SDK（聊天软件开发工具包），专门抹平了跨平台管理多渠道智能体的复杂性。

搭建工具选好了，但配置外部服务依然是个麻烦事，于是 Claire 动用了一个堪称「魔法」的技巧。她让 Codex 接管了 Chrome 浏览器的操作（即 Chrome browser use），让 AI 自己去点击 Slack 和 GitHub 的配置页面 <button class="pd-ts" data-t="10:31" data-who="Claire" data-en="You have to do all this stuff. And so what I did is my favorite hack is I had it use Chrome browser use and I let it navigate Slack bot setup." aria-label="回原文"></button>。

人类只负责按下双因素认证（2FA）的按钮和最后确认保存。这个技巧完美解决了「代码能写但不想碰第三方 SaaS 配置」的痛点。

配置全部搞定后，这个被命名为「Merge Mommy」的机器人具体是怎么干活的？它的技术流程非常精简：一旦所有 CI（持续集成）检查通过，GitHub 就会触发事件，Vercel 接管后启动一个[[沙箱|沙箱]]（一种隔离代码的安全运行环境），检出代码库并查看具体的 diff（代码差异）<button class="pd-ts" data-t="12:33" data-who="Claire" data-en="Keys off an event after all of the PR changes are done. Vercel's GitHub integration picks that up in the GitHub Vercel channel and it sends it a little bit of information." aria-label="回原文"></button>。

它通过几个技能来评估风险和质量，最后输出一个结论。如果是低风险，它会直接提交批准；如果需要人工介入，它就会在 Slack 里 ping 你 <button class="pd-ts" data-t="12:58" data-who="Claire" data-en="And then on the end, it outputs like a thumbs up check, like it needs changes and a comment. And then one fun thing that it does is after it does that review, it pings my colleague and I in Slack to say this PR is ready for review" aria-label="回原文"></button>。

这个智能体最难写的部分，其实就是一段自然语言写成的指令，连半页纸都不到，Claire 坦言这些指令是她自己写出来并做微调的 <button class="pd-ts" data-t="15:31" data-who="Claire" data-en="Maybe one page of text. I did not write any of this. I refined it." aria-label="回原文"></button>。它的核心是一个打分脚本，会考察 6 个维度：变更表面和爆炸半径（影响范围）有多大、是否容易逆转（比如大型数据迁移就很难撤回）、是否涉及数据安全、是否改变了系统运营方式，以及测试和 CI 是否完整 <button class="pd-ts" data-t="15:53" data-who="Claire" data-en="And so it looks at six things. How big is the change surface and blast radius? Is it easily reversible, right?" aria-label="回原文"></button>。

这套打分机制会给出一个具体分数：低于 24 分的是低风险，25 到 64 分是中风险，65 分及以上是高风险 <button class="pd-ts" data-t="16:20" data-who="Claire" data-en="And then it has sort of like a script that it runs to calculate a score. And then anything under 24 points, again, I did not like choose these thresholds. Anything below 24 points is low risk." aria-label="回原文"></button>。Claire 展示了三个实际案例：一个只改了文档的 PR 拿了 6 分，低风险但因为存在合并冲突被拦截了；另一个纯文档 PR 拿了 7 分顺利自动批准；而一个涉及废弃旧版 API、包含 35 处删除的大红色差异 PR，因为改变了服务器 API 行为，被判定为 45 分的中风险，机器人果断拒绝自动批准，把决定权交还给了人类 <button class="pd-ts" data-t="19:55" data-who="Claire" data-en="I'm sorry, I can't take myself seriously when I say it, but I'm gonna say it anyways. Merge Mommy gave it a 45 out of 100," aria-label="回原文"></button>。

有了自动评分，最后一步怎么把人类和 AI 的动作顺畅地接起来？这就涉及操作流程的设计。

由于代码仓库的规则通常不允许 bot（机器人）满足必需批准的硬性要求，所以 Merge Mommy 会在 PR 上留一个小灰勾作为信号，然后把消息推送到 Slack 频道里。Claire 和同事只需在 Slack 里看一眼，一键点击批准并合并即可。这个机制完美诠释了 Claire 说的一句话：我们可以让 AI 为我们工作，也可以让 AI 让我们工作，而这个流程让你两方面都做到了 <button class="pd-ts" data-t="20:36" data-who="Claire" data-en="hey, this can be approved or this requires human review. Again, I like to say this thing where we can put AI to work for us or we can have AI put us" aria-label="回原文"></button>。

最后，对于这种触碰核心代码的内部智能体，持续的评估和改进是必不可少的。正如 Intercom 在流程中所做的，他们把每一次机器人的审查结果都记录在内部的评估平台上，让工程师定期核对：智能体这次判对了吗？

我们的评分机制还准吗 <button class="pd-ts" data-t="22:57" data-who="Claire" data-en="especially the folks at Intercom do as part of this process, is they run evals on this internal agent. So every time this review is run," aria-label="回原文"></button>？就像你会用评估来改进面向客户的 AI 产品一样，面对内部关键系统的机器人，这套闭环检验同样不可或缺。

## 本集带走

最后收个尾，这一集值得带走的是这几层意思。第一，面对成堆的 AI 生成 PR，人类大可不必逐行死磕，只要策略清晰、可审计，你完全可以安全地跳过低风险代码的人工审查。

第二，写一个代码审查智能体没你想的那么难，用 Vercel 的 Eve 框架，配上一页纸不到的打分指令，甚至让 AI 自己去操纵浏览器搞定复杂的配置，一个下午就能搭出来。第三，真正的杠杆不只是让 AI 全自动干活，而是让它做好评风控、递出信号，最后由人类在 Slack 里点一下按钮完成合并，既榨取了速度，又守住了底线。别忘了，哪怕是内部代码机器人，也要像对待外部产品一样，持续跑评估闭环，才能保证它一直不会作妖。

<div class="pd-sec">全部金句 <span>3 条</span></div>

> <span class="qz">AI 审批的 PR 以及总体上 AI 编写的代码甚至可以比仅有人类在流程中所做的更安全、质量更高。</span>  
> *AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop.*  
> <span class="qm">—— Claire · [03:47]</span> ^q1

> <span class="qz">AI 审批的 PR 审批得更快，实际上比他们的人类 PR 快 5 倍。</span>  
> *AI approved PRs are approved faster, actually five times faster than their human PRs.*  
> <span class="qm">—— Claire · [04:16]</span> ^q2

> <span class="qz">我们可以让 AI 为我们工作，或者我们可以让 AI 让我们去工作。</span>  
> *we can put AI to work for us or we can have AI put us to work.*  
> <span class="qm">—— Claire · [20:37]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Codex、Slack · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:GitHub、Slack · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Codex · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同公司:Codex · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-09-talks-always-on-agents-run-production-without|当代码生成加速，谁来填运维的坑：用后台智能体接手生产环境长尾工作]]<span class="pd-rz">同公司:Slack · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>

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
  // 故再兜一条 history.length>1(站内点进必有返回历史)。命中「直开」给 body 打 .pd-direct,CSS 切显隐。
  function direct(){
    var ref = document.referrer || '';
    var fromSite = (ref.indexOf(location.origin) === 0) || history.length > 1;
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
