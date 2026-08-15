---
title: "别再做“副业项目”了:把 markdown 文件传给 Claude 当产品卖"
podcast: 精选演讲
date: 2026-07-08
source_url: undefined
duration: "15:52"
type: episode
cover: "#64748b"
description: "模型变强了,但开发者还在用过时的“拟物化”思维写软件。该放手让模型做大项目。"
guests: ["[[Theo Browne]]"]
companies: ["[[AWS]]", "[[Vercel]]", "[[Slack]]"]
concepts: ["[[Sonnet 3.5]]", "[[Opus 4.5]]", "[[Mythos]]", "[[编排]]", "[[拟物化]]", "[[沉没成本心态]]"]
category: AI 编程
tags:
  - AI 编程
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-08-talks-everything-we-knew-about-software-has-ch#post","headline":"别再做“副业项目”了:把 markdown 文件传给 Claude 当产品卖","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-08-talks-everything-we-knew-about-software-has-ch","mainEntityOfPage":"https://talk.solomind.cc/2026-07-08-talks-everything-we-knew-about-software-has-ch","description":"模型变强了,但开发者还在用过时的“拟物化”思维写软件。该放手让模型做大项目。","datePublished":"2026-07-08","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Theo Browne"},{"@type":"Organization","name":"AWS"},{"@type":"Organization","name":"Vercel"},{"@type":"Organization","name":"Slack"},{"@type":"Thing","name":"Sonnet 3.5"},{"@type":"Thing","name":"Opus 4.5"},{"@type":"Thing","name":"Mythos"},{"@type":"Thing","name":"编排 (orchestration)"},{"@type":"Thing","name":"拟物化 (skeuomorphic)"},{"@type":"Thing","name":"沉没成本心态 (sunk cost mindset)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"别再做“副业项目”了:把 markdown 文件传给 Claude 当产品卖","item":"https://talk.solomind.cc/2026-07-08-talks-everything-we-knew-about-software-has-ch"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再做“副业项目”了:把 markdown 文件传给 Claude 当产品卖</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# 别再做“副业项目”了:把 markdown 文件传给 Claude 当产品卖

<div class="pd-byl"><b>Theo Browne</b> · 2026-07-08</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-08-talks-everything-we-knew-about-software-has-ch.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">模型变得更好的速度比我们要快,所以我们不一定能变好,所以相反我们必须做得更大。</div><div class="a">— Theo Browne <button class="pd-ts" data-t="03:29" data-who="Theo Browne" data-en="The models are getting better faster than we are, so we can't necessarily get better, so instead we have to go bigger." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Theo Browne]]
>
> **公司** [[AWS]] · [[Vercel]] · [[Slack]]
>
> **概念** [[Sonnet 3.5]] · [[Opus 4.5]] · [[Mythos]] · [[编排]] · [[拟物化]] · [[沉没成本心态]]

<div class="pd-tldr"><b>一句话</b>模型变强了,但开发者还在用过时的“拟物化”思维写软件。该放手让模型做大项目。</div>

一个能把所有 PR 分类、用 AI 审查、排好优先级的服务,现在就是一个 markdown 文件——把它喂给 Claude 或 Codex,设个定时任务,每天早上一封汇报邮件就出来了。

说这话的人是个 YouTuber,也是写过十几年代码的开发者。在这场演讲里,他带观众走过大模型进化的三个时代,讲了一件让他陷入「AI 精神病」的事:模型变强的速度远超人的适应速度。他提了三个核心观点:为什么从 [[Sonnet 3.5|Sonnet 3.5]] 到 [[Mythos|Mythos]] 是从「调工具」到「自[[编排|编排]]」的质变;为什么开发者必须抛弃对终端、特定语言和旧代码的「[[拟物化|拟物化]]」迷恋;以及为什么现在所谓的「创业点子」其实只配叫副业,真正的机会在于敢于想「大得显得愚蠢」的事情。

### 三个时代:从工具调用到自我编排

他把大模型分为三个时代来看待 <button class="pd-ts" data-t="02:05" data-who="" data-en="If you handed a prompt that you would have handed to these other models before, it's not gonna feel that different. I think of these almost as eras now, where Sonnet 3.5 is the tool call era." aria-label="回原文"></button>。Sonnet 3.5 是「工具调用时代」,它是第一个能在代码库上下文里足够可靠地做工具调用、真正帮你干日常编码活的模型。

后来出了 [[Opus 4.5|Opus 4.5]],能做更长流程的任务,会自己测试、把工作收尾,完成任务所需的时间从分钟变成了小时 <button class="pd-ts" data-t="01:39" data-who="" data-en="Having a model that couldn't just write the code and call tools but could go way further. A model that could test the work and actually get it into a good state and complete tasks that take hours instead of minutes." aria-label="回原文"></button>。而到了 Mythos,模型能自己理解代码库、理解自己,并主动派生其他模型来分头干活、事后验证,这就是「编排时代」 <button class="pd-ts" data-t="02:35" data-who="" data-en="You can just tell it what you want, and it could figure it out a lot of the time. Mythos is another jump to orchestration. It feels to me like it's the first model that doesn't just understand your code base, but it understands itself." aria-label="回原文"></button>。如果模型真的一直变强,而人变强的速度跟不上,那就别死磕细节了,「我们必须做得更大」 <button class="pd-ts" data-t="03:35" data-who="" data-en="The models are getting better faster than we are, so we can't necessarily get better, so instead we have to go bigger. In order to do that, we have to get over ourselves." aria-label="回原文"></button>。

### 从 iOS 7 说起:开发者的拟物化包袱

讲完了模型为什么重要,接下来要面对的是人。想做得更大,首先得「放下自我」 <button class="pd-ts" data-t="03:37" data-who="" data-en="In order to do that, we have to get over ourselves. This was really hard for me as someone who spent a long time writing software. Who here has written code for more than 10 years?" aria-label="回原文"></button>。为了解释这个心理障碍,他打了个比方:用过 iOS 6 的人可能记得,当时的指南针 app 必须画得像个真的指南针,因为那时候的 app 设计必须先「说服」你去用它;而到了 iOS 7,界面变扁平了,不用再模仿实物,因为大家已经默认手机能干这些事了,这时候重点就变成了「拥抱」更好的交互 <button class="pd-ts" data-t="05:22" data-who="" data-en="Apps had to be designed to convince you to use them, not to be useful. And iOS 7 represents the shift to not focusing on convincing you anymore. Apple won." aria-label="回原文"></button>。

他认为,我们软件开发者现在还处在死抱着旧界面的「拟物化」阶段 <button class="pd-ts" data-t="06:08" data-who="" data-en="Even if we don't like it because it's not the thing we're used to, we got over it. We're currently in our skeuomorphic phase as software developers. Skeuomorphism is this design aesthetic trying to represent the way things used to look, the physical goods that we relied on, and try to make them digital." aria-label="回原文"></button>。大家假装终端是终极界面,其实它连个像样的界面都算不上,自然语言在里面根本没立足之地,只因为大家习惯了就死抱不放 <button class="pd-ts" data-t="06:23" data-who="" data-en="We're doing this right now with software. We're pretending our terminals are the ultimate interface when they're not even good interfaces, and I'm saying this as someone who loves their terminal deeply." aria-label="回原文"></button>。

再比如 Git,为了版本控制不让提交环境文件,我们不得不专门搭套系统去分享这一个文件,这件事细想其实很蠢,但因为是 Git 的设定,我们就全盘接受了 <button class="pd-ts" data-t="07:10" data-who="" data-en="Like, why can't we commit our environment files? It sounds stupid when I put it on a slide like this, but I want you to really think about this for a second. When I have a team of engineers that are working on a project, why do I have to build another system to share this specific file, but all the other files can go and get just fine?" aria-label="回原文"></button>。还有用编程语言给人定性的执念:初级程序员说我写 JavaScript,高级工程师则鄙视写 JavaScript 的不是真开发者——我们在这些奇怪的自我认同上投入了太多没必要的情感 <button class="pd-ts" data-t="08:09" data-who="" data-en="We care too much. We pride ourselves in these things. They're our identity, these weird facts, these weird choices, these things that feel essential just don't matter that much anymore." aria-label="回原文"></button>。

更糟糕的是行业内严重的[[沉没成本心态|沉没成本心态]],面对不对的代码,删掉重置是最好的办法,但往往因为别人写了一两周,你怕伤人就硬着头皮合并了 PR <button class="pd-ts" data-t="08:44" data-who="" data-en="where the solution is to just delete it and reset. But we have such a bad sunk cost mindset in this industry. We care so much about the code we wrote and we care so much about it still being there that I feel bad working with my team sometimes when somebody files a PR that isn't quite the right solution but they spent a week or two on it." aria-label="回原文"></button>。关掉智能体的产出不用有心理负担,这恰恰是放手让 AI 干活的好处。

### 创业点子降级:一切皆 markdown

旧工具和旧心理包袱放下了,项目的层级也会随之重构。他拿自己做过的三个东西举例:爬 Reddit 做表情包的爬虫、叫 Ping 的面向主播的 Zoom 替代品(他上过 Y Combinator),以及一个内置数据库和认证的全栈云 <button class="pd-ts" data-t="09:48" data-who="" data-en="These are three of the things that I have built or are currently working on. I'm gonna go from the bottom up. I built a Reddit scraper because making good memes is hard and I would rather just steal them from Reddit, and it went pretty well." aria-label="回原文"></button>。

就在一年前,他会把这三样分别归为:副业项目、初创公司、太大做不了 <button class="pd-ts" data-t="10:39" data-who="" data-en="These are also kind of tiers, different levels that we can build at. If I was to try and categorize them, I would call the bottom one side project, call the middle one startup, and call the top one too big." aria-label="回原文"></button>。但现在模型变强了,层级整体下移——曾经的初创公司现在只算副业,而最底层现在直接变成了:一个 markdown 文件 <button class="pd-ts" data-t="10:53" data-who="" data-en="Well, this is how I would have categorized this even just a year ago. But things have changed. Now that the models are bigger, the tiers have shifted." aria-label="回原文"></button>。

> 【背景】Y Combinator(常简称 YC)是美国知名的早期创业孵化器。

这事听起来离谱,但演讲者自己有个给 PR 分类的服务,现在就真成了一个 markdown 文件。他只需在里面写上指令:去这四个仓库看开放的 PR,搞清楚现状排好优先级,最后更新一个 HTML 文件传到 S3 <button class="pd-ts" data-t="11:49" data-who="" data-en="That service is a markdown file now. I just literally wrote, like, go to these four GitHub repos, look at all the open PRs, figure out what the current status of the work is, and then help me prioritize it." aria-label="回原文"></button>。

每天早上 9 点跑个定时任务,这份工作就自动生成了。到底有多少公司的产品其实就是一个喂给 Claude 或 Codex 的 markdown 文件?这才是让他感到恐惧又兴奋的空白地带 <button class="pd-ts" data-t="11:18" data-who="" data-en="What's that? It's the G brain tier. It's a markdown file." aria-label="回原文"></button>。

### 思考更宽,而不是更大

既然 markdown 就能搞定传统创业项目,那现在的「太大」到底指什么?是想从头训练模型?

做操作系统?还是直接跟 Node 和 NPM 竞争?

他坦言自己也不知道 <button class="pd-ts" data-t="12:54" data-who="" data-en="Is it trying to compete with NPM and Node directly? I don't know. I don't know what too big is right now." aria-label="回原文"></button>。但与其纠结于「大」,不如换个词:想得更「宽」 <button class="pd-ts" data-t="13:17" data-who="" data-en="I would argue that bigger's probably the wrong word for most of how I'm thinking here. It's time to think wider. What I mean by this is a spectrum, and I'm sorry, I have to do a diagram." aria-label="回原文"></button>。

软件有广度和深度之分,以前你没法跟 [[AWS|AWS]] 拼广度(功能覆盖的广度),因为你没成千上万的工程师,所以只能像 [[Vercel|Vercel]] 那样在特定领域(如全栈前端)拼深度 <button class="pd-ts" data-t="13:52" data-who="" data-en="But Vercel offers deeper features in the space they're in, which is full-stack front-end leaning servers. If you're a front-end developer and you're not using Vercel, you're feeling some amount of pain because they're just further ahead with this, so much so that even the agents prefer it." aria-label="回原文"></button>。可现在,有了模型加持,你能用一两天的工作量就把一个数据库平台做进自己的产品里,拼广度突然变得可行了 <button class="pd-ts" data-t="14:31" data-who="" data-en="I'm not saying you can build something as reliable as RDS. I'm saying that you can build a database platform into your product in a day or two of work with enough prompting and enough effort." aria-label="回原文"></button>。你只要把地基打好,让用户有自己往上添砖加瓦的空间(就像 [[Slack|Slack]] 成了大家跑智能体的平台一样) <button class="pd-ts" data-t="15:01" data-who="" data-en="as long as you build it right, because they can build the features that are missing themselves. If you architect your systems and you architect your products in such a way that users can do things that you never would have guessed, like Slack accidentally did this, because Slack is now the platform people run their agents in half the time, which is crazy." aria-label="回原文"></button>。

## 本集带走
最后收个尾,这一集值得带走的是三层意思。第一,大模型已经跨过了单纯调用工具的阶段,现在它能自己理解上下文、主动派生其他模型分头干活,也就是进入了「编排时代」,别再像以前那样一步一步下指令了,放手让它自己干。第二,作为开发者,我们得放下对特定语言、终端界面、Git 旧规矩的执念,甚至要克服害怕删代码的沉没成本包袱,那些过去被我们奉为金科玉律的东西,很多只是历史惯性。第三,也是最关键的一点,在模型加持下,过去的创业公司现在只需一个 markdown 文件加定时任务就能跑起来。所以别再在狭窄的垂直领域里跟别人卷深度了,去拼广度,去敢于直面 AWS 和 Slack,如果你的想法听起来不觉得愚蠢,那只能说明它还不够大。

<div class="pd-sec">全部金句 <span>7 条</span></div>

> <span class="qz">模型变得更好的速度比我们要快,所以我们不一定能变好,所以相反我们必须做得更大。</span>  
> *The models are getting better faster than we are, so we can't necessarily get better, so instead we have to go bigger.*  
> <span class="qm">—— Theo Browne · [03:29]</span> ^q1

> <span class="qz">我们作为软件开发者目前正处于拟物化阶段。</span>  
> *We're currently in our skeuomorphic phase as software developers.*  
> <span class="qm">—— Theo Browne · [06:08]</span> ^q2

> <span class="qz">自然语言在终端中没有一席之地,但我们假装它有,因为终端很熟悉。</span>  
> *Natural language has no place in a terminal, but we pretend it does because the terminal's familiar.*  
> <span class="qm">—— Theo Browne · [06:31]</span> ^q3

> <span class="qz">我们能蒙混过关是因为找到工程师太难了,所以我们可以直接告诉公司我们在做什么,他们真的不能说不,因为替代方案是花六个月的时间试着去雇别人。</span>  
> *We got away with it because it was so hard to find engineers that we could just tell the company what we were doing and they couldn't really say no because the alternative is spend six months trying to hire someone else.*  
> <span class="qm">—— Theo Browne · [08:22]</span> ^q4

> <span class="qz">但我们在这个行业有着非常糟糕的沉没成本心态。</span>  
> *But we have such a bad sunk cost mindset in this industry.*  
> <span class="qm">—— Theo Browne · [08:44]</span> ^q5

> <span class="qz">如果你的想法不显得愚蠢,那是因为你的想法还不够大。</span>  
> *If your idea doesn't feel stupid, it's because your idea's not big enough.*  
> <span class="qm">—— Theo Browne · [15:34]</span> ^q6

> <span class="qz">因为 Slack 现在有一半的时间是人们运行智能体的平台,这太疯狂了。</span>  
> *because Slack is now the platform people run their agents in half the time, which is crazy.*  
> <span class="qm">—— Theo Browne · [15:10]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Vercel、Slack</span>
- [[2026-08-10-lennys-claude-code-for-normal-people-skills|不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记]]<span class="pd-rz">同公司:Vercel、Slack</span>
- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同公司:Slack</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]]<span class="pd-rz">同公司:Vercel · 同概念:编排 (orchestration)</span>
- [[2025-11-20-lennys-slack-founder-stewart-butterfield|Slack 创始人 Stewart Butterfield 谈产品品味与组织陷阱]]<span class="pd-rz">同公司:Slack</span>
- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Vercel</span>

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
