---
title: 永不下班的 AI 同事：常驻智能体是怎么造出来的
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "45:13"
type: episode
cover: "#64748b"
description: Stanford CS146S 课程讲座，Lee 讲解 always-on agent 的架构与工程细节。
host: "[[Lee]]"
companies: ["[[SpaceX]]", "[[Cursor]]", "[[GrokBot]]"]
concepts: ["[[智能体]]", "[[子智能体]]", "[[上下文窗口]]", "[[压缩]]", "[[提示词缓存]]", "[[自动审查]]", "[[computer use]]", "[[评估]]", "[[记忆]]", "[[firecracker]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-stanford-cs146s-how-always-on-agents-wor#post","headline":"永不下班的 AI 同事：常驻智能体是怎么造出来的","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-stanford-cs146s-how-always-on-agents-wor","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-stanford-cs146s-how-always-on-agents-wor","description":"Stanford CS146S 课程讲座，Lee 讲解 always-on agent 的架构与工程细节。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Lee"},{"@type":"Organization","name":"SpaceX"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"GrokBot"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"压缩 (compaction)"},{"@type":"Thing","name":"提示词缓存 (prompt caching)"},{"@type":"Thing","name":"自动审查 (auto review)"},{"@type":"Thing","name":"computer use"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"firecracker"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"永不下班的 AI 同事：常驻智能体是怎么造出来的","item":"https://talk.solomind.cc/2026-10-11-talks-stanford-cs146s-how-always-on-agents-wor"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>永不下班的 AI 同事：常驻智能体是怎么造出来的</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 永不下班的 AI 同事：常驻智能体是怎么造出来的

<div class="pd-byl"><b>Lee</b> · SpaceX 工程师 · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-stanford-cs146s-how-always-on-agents-wor.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">有趣的是，这其实比疲于盯着数百条 shell 命令并逐条批准更安全。</div><div class="a">— Lee <button class="pd-ts" data-t="05:14" data-who="Lee" data-en="Funnily enough, that's actually more secure than the fatigue of having to watch hundreds of shell commands and approve each one." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lee]]
>
> **公司** [[SpaceX]] · [[Cursor]] · [[GrokBot]]
>
> **概念** [[智能体]] · [[子智能体]] · [[上下文窗口]] · [[压缩]] · [[提示词缓存]] · [[自动审查]] · [[computer use]] · [[评估]] · [[记忆]] · [[firecracker]]

在 Stanford 的一堂课上，一位自称 [[Lee|Lee]] 的工程师——曾在 [[Cursor|Cursor]] 工作、现在 [[SpaceX|SpaceX]] 做相关产品——系统讲了讲一类新产品：常驻[[智能体|智能体]](always-on agent)。

它不是你敲一条指令才动一下的聊天机器人，而是跑在云端、有自己的电脑、能连续工作数周的数字同事。

这堂课把背后的架构拆得很透，值得每一个关心 AI 走向的人看看。

## 从复制粘贴到发短信给同事

Lee 把开发者用 AI 的方式分成 4 个阶段 <button class="pd-ts" data-t="00:39" data-who="嘉宾" data-en="Notably, you close your laptop and the process stops. It's no longer running. And I want to talk about how you can take this simple idea." aria-label="回原文"></button>:最早是从 ChatGPT 里复制代码贴进编辑器；然后是模型能在终端里改文件、跑命令；

第三阶段出现了专门的编程智能体应用，人们开始并行跑多个智能体，但每条命令都得人工审批；

现在进入第四阶段——智能体常驻后台，有自己的电脑和[[记忆|记忆]]，你睡觉它还在干活。

交互方式也变了。以前是你发一句、等一下、再发一句；

现在你可以像跟朋友发消息一样连着说话，先让它去看某个讨论串，紧接着又改口说这事儿周四再办，模型也能理解。

这类产品能火，Lee 的解释很简单：「我们都知道怎么发短信」<button class="pd-ts" data-t="05:50" data-who="嘉宾" data-en="And this type of always-on agent we're calling a bot, but as you'll notice, there's actually quite a few of these new types of products popping up right now and gaining a lot of traction." aria-label="回原文"></button>。

## 安全审批交给 AI,反而更靠谱

以前人工盯着几百条命令逐条批准，人会疲劳、会看漏。现在流行叫 auto review 的机制：由另一个 AI 模型检查所有要执行的命令。

Lee 说，**做盲测的话，多数情况下模型查得比人还好** <button class="pd-ts" data-t="05:20" data-who="嘉宾" data-en="Funnily enough, that's actually more secure than the fatigue of having to watch hundreds of shell commands and approve each one. We've reached the point where if you did a blind test with what the AI model's checking on the commands and what a human's checking on the commands, most of the time the model's actually doing a better job." aria-label="回原文"></button>。

其他安全设计包括：不可逆的操作(比如发邮件)必须先给用户看草稿、要求批准；密码等信息尽量不进入模型对话；

对邮件这类不可信输入要做防护，避免钓鱼邮件伪装成用户指令(即提示注入攻击)。

## 它凭什么能一直跑？靠随睡随醒

常驻智能体的核心架构是三层：触发器(你的消息、Slack、邮件、定时任务)唤醒服务器上的智能体；

需要时再启动一台云端 Linux 虚拟机供它使用；干完活就把两者休眠，状态存进数据库 <button class="pd-ts" data-t="10:11" data-who="嘉宾" data-en="So let's go a little bit further into the kind of the mind of this always on agent or going behind the scenes. What does it mean for the agent to be always on? You can kind of read this chart from left to right, but it starts out with the server being asleep and also this computer that the agent can use being asleep." aria-label="回原文"></button>。

不为省钱的理由很直白：让全世界每人一台电脑永远开机，资源根本不够。

这台虚拟机跑在 [[firecracker|firecracker]] 虚拟化技术上，好处是可以随时做快照、关机、再启动。

智能体和虚拟机必须分开部署——否则给虚拟机打一个紧急安全补丁，整个智能体循环也得跟着停摆 <button class="pd-ts" data-t="15:05" data-who="嘉宾" data-en="If you put the agent loop on the virtual machine, then you can't shut down the virtual machine independently from the agent server. So yeah, you want to save everything on the server so you can always kind of rebuild that virtual machine." aria-label="回原文"></button>。

智能体还有个该不该打扰用户的判断逻辑。

就像同事不会每取得一点进展就来汇报一次，它多数时候安静干活，只在真正重要时才找你 <button class="pd-ts" data-t="12:00" data-who="嘉宾" data-en="That all happens and then we have basically a router that dedupes that and figures out how to put it into the conversation and then it's It has this heuristic of, do I need to bug the user about this or not?" aria-label="回原文"></button>。

SpaceX 现在常见的场景是：员工能去开会，但派自己的机器人去旁听记笔记 <button class="pd-ts" data-t="11:33" data-who="嘉宾" data-en="Maybe that's a phone call or a meeting that you put your bot in. It's increasingly common now at SpaceX where we see bots joining meetings for employees where they could make it to the meeting but they want their bot to go and just take notes and come back to them which is kind of funny." aria-label="回原文"></button>。

## 一个老大难：模型的工作记忆会满

模型的[[上下文窗口|上下文窗口]]有限，就像人的工作记忆。解法有几个：

一是[[子智能体|子智能体]]。

主智能体像项目经理，把昂贵的活(跑大量命令、截图、录屏)交给带着全新记忆的助手去干，助手只把结果带回来，不污染主对话 <button class="pd-ts" data-t="23:35" data-who="嘉宾" data-en="Kind of putting the pieces together. You have this main agent. And it's kind of like your orchestrator." aria-label="回原文"></button>。

这样用起来就像拥有无限上下文。

二是动态工具发现。

把所有工具的完整定义塞进上下文会占掉大半空间，所以每次只放工具名字，模型要用时再自己去文件里读详情 <button class="pd-ts" data-t="21:15" data-who="嘉宾" data-en="So one kind of context engineering or harness trick that a lot of the popular harnesses now use is it's called dynamic context or I think some other folks call it the tool search tool which is a fun name but basically you're only putting the names of the tools into the every message that gets sent to the model and then the model can decide" aria-label="回原文"></button>。

三是[[压缩|压缩]]。对话太长就得总结，而所有压缩都有损，==怎么摘要才不丢关键信息==，Lee 说这个问题「光它就够写好几个博士论文」<button class="pd-ts" data-t="32:01" data-who="嘉宾" data-en="And there's, I'm sure, entire PhDs just for this problem. It's very, very tough to do, right? But just to show an example, let's say you're going back and forth with your bot, you have over 100,000 tokens, and then you go and do something else." aria-label="回原文"></button>。

## 省钱的艺术：缓存就是生命线

大多数 token 消耗理应是缓存命中的——因为每加一条消息，其实是把整个对话重发一遍。

缓存命中的 token 价格大打折扣，所以要把系统提示、工具定义这些固定内容放在开头、保持顺序不变，别因为一个 A/B 测试就把所有人的缓存全打爆 <button class="pd-ts" data-t="31:05" data-who="嘉宾" data-en="everything in the prompt in order such that even if you deploy a new change where you want to test out some new change to the system prompt or add a new tool you can you can almost hash each section and always keep a fixed order like let's say you're doing an A-B test and you want to put a new piece of the prompt in there you really don't want that to screw up the prompt order for everybody else otherwise you just busted the cache and then that's that's problematic." aria-label="回原文"></button>。

Lee 还分享了一个技巧：趁缓存还热的窗口期(比如 10 到 60 分钟)提前做压缩，用户回来时从摘要继续，便宜得多 <button class="pd-ts" data-t="32:20" data-who="嘉宾" data-en="Maybe it's 10 minutes, maybe it's 60 minutes. One trick that we do, which I think is really helpful, is while you're still within the warm cache period, you should probably do the compaction right now." aria-label="回原文"></button>。

## 干活的优先级：先试最便宜的

遇到任务，智能体按成本从低到高爬梯子：先看对话里已有的信息；不行就调 API 或插件；再不行搜网页；然后开浏览器去点；

再不行直接动用整台 Linux 电脑跑脚本；全都失败，才去找用户要输入 <button class="pd-ts" data-t="21:31" data-who="嘉宾" data-en="And that just helps you save on your context usage, which then also helps save on costs, save on usage, which is better for everybody. In general, the principle here really is to try the cheapest option or the most reliable option first and kind of work your way up the ladder here." aria-label="回原文"></button>。这正是一个好同事的样子——**尽量自己解决，不事事烦你**。

从电脑上获取信息也有类似的梯子：截图、读 HTML、读无障碍树(更省 token)、实在不行点像素，最后才让用户来处理验证码或双重验证 <button class="pd-ts" data-t="22:48" data-who="嘉宾" data-en="On that computer, so the Linux machine that the agent is able to use, there's kind of three different ways that it can retrieve information from it. Of course it can just take a screenshot of the screen, but there's more efficient ways of doing this." aria-label="回原文"></button>。

## 六个月后的模型会更好，所以删掉产品

Lee 提到 Cursor 和 SpaceX 共同的一条原则：假设今天的模型是史上最差的，六个月后你可能得把整个界面推倒重来 <button class="pd-ts" data-t="37:51" data-who="嘉宾" data-en="One of the principles that we had at Cursor and now at SpaceX is to delete the product. And what we mean by this is you kind of have to internalize and assume that the models today are the worst they'll ever be, which means that in six months you might need to completely rebuild the UI." aria-label="回原文"></button>。

正确的策略是**尽量少建、只做最简单的界面，为下一代模型留空间**。

他对未来 6 到 12 个月的预测包括：智能体的连续工作时间将从几小时拉长到几周甚至几个月；

语音直接对话会成为部分人首选的交互方式；模型会更擅长在干中学，把技能沉淀成文件。他还留了一个行业级难题：

智能体一跑一个月，模型一个月迭代一版，你根本没法完整[[评估|评估]]它——要么改进评估方法，要么放慢发版 <button class="pd-ts" data-t="40:31" data-who="嘉宾" data-en="The first one is going back to this idea of agents that run for a month. What do you do when you need to evaluate an agent that runs for a month, but the models ship every month?" aria-label="回原文"></button>。

## 本集带走

- 常驻智能体的架构是薄客户端 + 厚服务器：触发器唤醒服务器上的智能体循环，需要时才启动云端 Linux 虚拟机，用完即休眠。
- 有限上下文的三大解法：子智能体分担昂贵工作、动态工具发现、高质量的对话压缩。
- 缓存命中是成本生命线：固定内容放前头、顺序别乱、趁缓存热的时候提前压缩。
- 安全靠多层：AI 审查每条命令、不可逆操作要人工批准、密码不进对话、防提示注入。
- 设计原则是假设模型每六个月大幅变强——尽量少建，为下一代模型留出推倒重来的余地。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">有趣的是，这其实比疲于盯着数百条 shell 命令并逐条批准更安全。</span>  
> *Funnily enough, that's actually more secure than the fatigue of having to watch hundreds of shell commands and approve each one.*  
> <span class="qm">—— Lee · [05:14]</span> ^q1

> <span class="qz">我们已经到了这样一个阶段：如果你对 AI 模型检查命令和人类检查命令做盲测，大多数时候模型实际上做得更好。</span>  
> *We've reached the point where if you did a blind test with what the AI model's checking on the commands and what a human's checking on the commands, most of the time the model's actually doing a better job.*  
> <span class="qm">—— Lee · [05:20]</span> ^q2

> <span class="qz">有点矛盾的是，随着模型变得更好，界面实际上反而变得简单了不少。</span>  
> *Kind of paradoxically, but as the models have gotten better, the interface has gotten quite a bit more simple, actually.*  
> <span class="qm">—— Lee · [05:32]</span> ^q3

> <span class="qz">有意思的是，现在人们已经不太谈论幻觉了，因为它基本上算是个已被解决的问题。</span>  
> *It's funny you don't really hear people talk about hallucinations anymore because it's kind of a solved problem mostly.*  
> <span class="qm">—— Lee · [07:26]</span> ^q4

> <span class="qz">它们可以像人类一样在屏幕上点击操作，而且这方面的能力越来越强，也就是所谓的 computer use，这基本上意味着任何没有暴露 API 或 MCP 服务器的 SaaS 产品或网站，都可以无界面地、自主地通过 computer use 被这些模型和这些 bot 使用。</span>  
> *They can click around on a screen just like a human would and they're getting increasingly better at doing that, otherwise known as computer use, which basically means that any SaaS product or any website that didn't expose an API or an MCP server can be used headlessly, basically, so autonomously through computer use by these models and these bots.*  
> <span class="qm">—— Lee · [07:48]</span> ^q5

> <span class="qz">这就是你怎么做出一个感觉拥有无限上下文的产品。</span>  
> *And this is how you get to a product that feels like it has infinite context.*  
> <span class="qm">—— Lee · [24:11]</span> ^q6

> <span class="qz">事实证明，这对智能体也非常有帮助，所以为智能体设计好的错误信息也有点 DX 的成分。</span>  
> *Turns out that's also very helpful for agents, so there is some DX in designing good error messages for agents, too.*  
> <span class="qm">—— Lee · [26:22]</span> ^q7

> <span class="qz">最终它会到达一个需要总结的点，而所有压缩都是有损的。</span>  
> *Eventually it's going to hit a point where it needs to summarize and all compression is lossy.*  
> <span class="qm">—— Lee · [31:46]</span> ^q8

> <span class="qz">我们用的一个技巧，我觉得非常有用，就是在热缓存期间还没结束的时候，你应该现在就去做压缩。</span>  
> *One trick that we do, which I think is really helpful, is while you're still within the warm cache period, you should probably do the compaction right now.*  
> <span class="qm">—— Lee · [32:20]</span> ^q9

> <span class="qz">我们在 Cursor 以及现在在 SpaceX 的一个原则是：删除产品。</span>  
> *One of the principles that we had at Cursor and now at SpaceX is to delete the product.*  
> <span class="qm">—— Lee · [37:46]</span> ^q10

> <span class="qz">所以这里一个好的策略是，你要尽量为模型的下一代而构建。</span>  
> *So a good strategy here is you really want to try to build for the next generation of the model.*  
> <span class="qm">—— Lee · [38:18]</span> ^q11
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
