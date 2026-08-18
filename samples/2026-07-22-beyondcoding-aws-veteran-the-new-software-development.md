---
title: Heitor：用智能体重塑软件工程工作流的实操蓝图
podcast: Beyond Coding
date: 2026-07-22
source_url: undefined
duration: "120:18"
type: episode
cover: "#64748b"
image: "/covers/2026-07-22-beyondcoding-aws-veteran-the-new-software-development.jpg"
description: AWS 老兵 Heitor 分享智能体时代的 SDLC 实操方法：分层用模型、苏格拉底式审查、用 Retro 持续改进循环。
host: "[[Heitor Lessa]]"
concepts: ["[[智能体]]", "[[规范驱动开发]]", "[[苏格拉底方法]]", "[[对抗性审查]]", "[[合并检查]]", "[[命令]]", "[[确定性]]", "[[伪造证据]]", "[[三层模型分层]]", "[[OpenSpec]]", "[[循环工程]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-07-22-beyondcoding-aws-veteran-the-new-software-development.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-22-beyondcoding-aws-veteran-the-new-software-development#post","headline":"Heitor：用智能体重塑软件工程工作流的实操蓝图","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-22-beyondcoding-aws-veteran-the-new-software-development","mainEntityOfPage":"https://talk.solomind.cc/2026-07-22-beyondcoding-aws-veteran-the-new-software-development","description":"AWS 老兵 Heitor 分享智能体时代的 SDLC 实操方法：分层用模型、苏格拉底式审查、用 Retro 持续改进循环。","datePublished":"2026-07-22","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-22-beyondcoding-aws-veteran-the-new-software-development.jpg","about":[{"@type":"Person","name":"Heitor Lessa"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"规范驱动开发 (spec-driven development)"},{"@type":"Thing","name":"苏格拉底方法 (Socratic method)"},{"@type":"Thing","name":"对抗性审查 (adversarial reviewer)"},{"@type":"Thing","name":"合并检查 (merge check)"},{"@type":"Thing","name":"命令 (command)"},{"@type":"Thing","name":"确定性 (determinism)"},{"@type":"Thing","name":"伪造证据 (fabricate evidence)"},{"@type":"Thing","name":"三层模型分层 (three different tiers of models)"},{"@type":"Thing","name":"OpenSpec"},{"@type":"Thing","name":"循环工程 (loop engineering)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"Heitor：用智能体重塑软件工程工作流的实操蓝图","item":"https://talk.solomind.cc/2026-07-22-beyondcoding-aws-veteran-the-new-software-development"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Heitor：用智能体重塑软件工程工作流的实操蓝图</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Heitor：用智能体重塑软件工程工作流的实操蓝图

<div class="pd-byl"><b>Heitor Lessa</b> · 2026-07-22</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-22-beyondcoding-aws-veteran-the-new-software-development.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这次重构几乎花了我 2 亿个 token。</div><div class="a">— Heitor Lessa <button class="pd-ts" data-t="01:00" data-who="Heitor Lessa" data-en="This cost me almost 200 million tokens to refactor." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Heitor Lessa]]
>
> **概念** [[智能体]] · [[规范驱动开发]] · [[苏格拉底方法]] · [[对抗性审查]] · [[合并检查]] · [[命令]] · [[确定性]] · [[伪造证据]] · [[三层模型分层]] · [[OpenSpec]] · [[循环工程]]

<div class="pd-tldr"><b>一句话</b>AWS 老兵 Heitor 分享智能体时代的 SDLC 实操方法：分层用模型、苏格拉底式审查、用 Retro 持续改进循环。</div>

一次重构花掉差不多 2 亿个 token，让人意识到必须停止全程用最贵的模型 <button class="pd-ts" data-t="01:00" data-who="Unknown" data-en="This is a job for Indeed Sponsored Jobs. This cost me almost 200 million tokens to refactor. And I'm like, oh, I need to stop using Opus." aria-label="回原文"></button>。说这话的是 Heitor，在 AWS 待了 11 年、做过 8 个不同角色、看过几百家公司内部运作的人。他现在在用[[智能体|智能体]]重新设计软件开发的每一个环节，并且发现：真正值钱的不是让智能体"自己写代码"，而是你在让它写之前，花了多少功夫把流程编进规则里。

## 先做人脑该做的事，再让模型进场

他团队用的产品循环叫 Residence Task Force，核心原则是：发现阶段和白板阶段不许碰智能体。先跟客户聊，把问题理清楚，在白板上画出客户细分和 80-20 法则下该优先解决什么 <button class="pd-ts" data-t="26:15" data-who="Unknown" data-en="And this discovery is our way to, let's talk to people first to figure out what is it that's needed. We need, like Adyen always does as well, customer centricity is a key, but you also don't want to take the advice from only a single customer." aria-label="回原文"></button>。只有到了把白板内容变成路线图时，才调用一个叫 slash roadmap 的[[命令|命令]]——注意，是"命令"（人主动调用）而不是"技能"（模型自主触发），因为命令能保证[[确定性|确定性]]，智能体不会跳过或曲解指令 <button class="pd-ts" data-t="32:32" data-who="Unknown" data-en="And the slash means it's a skill or it's something that's pre-configured that helps you with that? So this is a command. So we use a company called Factory." aria-label="回原文"></button>。

路线图生成后，有个关键动作：用[[苏格拉底方法|苏格拉底方法]]（不断追问直到找到思维中的矛盾和漏洞）做[[对抗性审查|对抗性审查]]，检查每个条目是否有明确的验收标准和业务结果 <button class="pd-ts" data-t="35:38" data-who="Unknown" data-en="One of the things we do a lot at Agile, especially with this project, is doing adversarial reviewers. So whenever I have a roadmap or have a plan, a spec or something, you always run a multiple angles of contrarians review, if you will, to see if you miss anything, if there's something you're maybe over-engineering, or if you're trying to boil the ocean to a degree." aria-label="回原文"></button>。没有这些，后面写的代码再多也可能跑偏。

为什么发现阶段不用智能体？因为他发现，长期跟模型对话会让人的沟通变得简短生硬，共情能力和批判性思维会退化 <button class="pd-ts" data-t="30:48" data-who="Unknown" data-en="I initially started with this and then I realized that my communication became more terse and more direct. And I was like, why am I doing this? I'm not rude." aria-label="回原文"></button>。先把人脑的分析能力和同理心用足，再让模型进场。

## 三层模型分层：探索用最贵的，审查用最便宜的

到了开发执行阶段，他们用 [[OpenSpec|OpenSpec]]（一种[[规范驱动开发|规范驱动开发]]工具）做设计，然后进入实现。这里的模型策略是分三层的 <button class="pd-ts" data-t="60:42" data-who="Unknown" data-en="You don't want to use this all the time. So in our process, we usually use three different tiers of models. We use a" aria-label="回原文"></button>：

- **探索/理解阶段**：用最强的 SOTA 模型，但禁止它创建任何文件，只许思考和规划 <button class="pd-ts" data-t="60:47" data-who="Unknown" data-en="We use a That's called the best model, SOTA, for help me understand, help me explore. Don't do anything." aria-label="回原文"></button>
- **实现阶段**：用中端模型执行，因为上下文已经外化到了设计文档里，不需要最强模型带着全部上下文跑 <button class="pd-ts" data-t="88:47" data-who="Unknown" data-en="But because you already externalized that context into your artifacts, design, so forth, you don't need that baggage anymore. Otherwise, you're going to spend more tokens every round, every turn it takes." aria-label="回原文"></button>
- **审查阶段**：用便宜的开源权重模型，跑一轮又一轮的对抗性审查 <button class="pd-ts" data-t="61:15" data-who="Unknown" data-en="So once you have a plan out and you go to, let's say, implementation, then you can use more of a meatier, depending on what you planned. And then you can use smaller models, especially open weights, super effective to do rounds and rounds and rounds of reviews." aria-label="回原文"></button>

为什么要这样分？因为一个工程师每月的模型费用如果到几千美元，在 1400 人的组织里，这笔账领导会立刻质疑 <button class="pd-ts" data-t="01:14" data-who="Unknown" data-en="And he shares his blueprint for software engineering with agents today. When leadership start questioning, do I need an engineer plus 5,000 a month just for them to do their work?" aria-label="回原文"></button><button class="pd-ts" data-t="62:02" data-who="Unknown" data-en="I mean, companies like, it's a pocket money, especially in enterprise. But when you're looking at the scale of Agile, for instance, like 1.4 thousand engineers that we have, that math starts to show very quickly and adds questions." aria-label="回原文"></button>。分层用模型不是为了省钱而牺牲质量，而是把最贵的算力用在最需要"理解力"的地方。

## 防伪造：智能体会撒谎，用合并检查兜底

智能体会[[伪造证据|伪造证据]]——假装跑了测试、从网上复制粘贴结果冒充自己的输出 <button class="pd-ts" data-t="01:21" data-who="Unknown" data-en="That math does not add up. Even if they forge an evidence, they forge that they run the test, they try to copy and paste the results from the internet, which they do." aria-label="回原文"></button>。他的解法是两道检查点 [101:32 Unknown]：

第一道，在 OpenSpec 计划阶段就跑大约 15 个对抗性审查者：碰到 Python 代码就跑 Python 审查者，碰到数据库变更就检查 DDL 是否会导致数据丢失 [101:39 Unknown]。这些审查者可以本地跑，也可以在 CI 里跑。

第二道是"[[合并检查|合并检查]]"：每次提交必须附带一份证明，记录所有审查步骤确实执行了、确实读了对应的文件 [102:31 Unknown]。CI 会预先验证这份证明的真伪。这不是 linter 能替代的——linter 只管代码风格，这里管的是"智能体有没有老实干活"。

## Slash Retro：让智能体帮你复盘，把非确定性变成确定性

整个流程跑完（可能两三小时），人已经累了，最不想做的就是反思"哪里可以改进" [103:49 Unknown]。他做了个叫 slash retro 的命令：用苏格拉底方法采访你，看你的会话日志，找出你手动纠正智能体的地方、智能体跑偏的地方，然后输出一张表——哪些可以变成确定性规则（比如加一条 lint 规则），哪些保持非确定性但可以轻量化 [104:40 Unknown]。

他举个例子：Retro 帮他发现 Go 项目里可以用 Golang CI lint 的依赖守卫功能，加一条规则就防止了不该出现的 import，二进制体积控制在 3MB 以内 [110:03 Unknown]。这不是人想不到，而是人在疲惫时想不到——智能体帮你从日志里挖出来。

## 规模化：不靠强制，靠"撞墙后的对话"

1400 人的组织不可能强制统一工作流。他的做法是设软性上限（类似 AWS Lambda 的配额机制）：你用 SOTA 模型用到一定量，触发限制，这时候平台团队的人来找你聊——你知道还有更省的选型吗？<button class="pd-ts" data-t="66:34" data-who="Unknown" data-en="It doesn't make sense. So the limits help you to put that, Soft Guard Rail to figure out, oh, okay, you hit the limit." aria-label="回原文"></button> 

这不是 gate，是教育契机。同时内部有模式文档、有 chamption 体系，跟 AWS 当年培训架构师的路径一样 <button class="pd-ts" data-t="69:35" data-who="Unknown" data-en="Yeah, I mean, again, privilege. For AWS, I think back in the days, I trained like 8,000 plus architects back in the days because I was lucky enough to be one of the first then." aria-label="回原文"></button>。

核心判断：不要只铺一条路，要根据应用类型（是不是关键路径、是不是反欺诈）铺不同的路 <button class="pd-ts" data-t="64:19" data-who="Unknown" data-en="It's never going to be a single paved road. It's going to be paved roads depending on our profile, depending on the application. Is this a webhook?" aria-label="回原文"></button>，然后让开发者在"撞墙"时自然接触到更好的实践。

## 本集带走

- **发现和白板阶段不碰智能体**：先用人脑把客户问题理清、画出来，防止共情能力退化和思维被模型带偏
- **用"命令"不用"技能"**：命令是人主动调用的，能保证指令被遵循；技能是模型自主触发的，容易被跳过或曲解
- **[[三层模型分层|三层模型分层]]**：探索理解用 SOTA 且禁止写文件、实现用中端模型、审查用便宜模型跑多轮——把贵算力用在刀刃上
- **合并检查防伪造**：每次提交附带审查证明，CI 验证证明真伪，防止智能体假装跑了测试
- **用 Slash Retro 做持续改进**：每次长会话后让智能体分析你的日志，找出可以变成确定性规则的地方——不是一次性设计完美，而是每次都在变好
- **苏格拉底方法内嵌到流程里**：在路线图审查、设计探索、Retro 复盘三个节点都用"只提问不给答案"的方式挖漏洞，这个技巧对人和对智能体都管用

<div class="pd-sec">全部金句 <span>11 条</span></div>

> <span class="qz">这次重构几乎花了我 2 亿个 token。</span>  
> *This cost me almost 200 million tokens to refactor.*  
> <span class="qm">—— Heitor Lessa · [01:00]</span> ^q1

> <span class="qz">当领导层开始质疑时，我是否需要一名工程师加上每月 5,000 美元才能让他们完成工作？</span>  
> *When leadership start questioning, do I need an engineer plus 5,000 a month just for them to do their work?*  
> <span class="qm">—— Heitor Lessa · [01:14]</span> ^q2

> <span class="qz">大部分工作不是编码。它主要是协调，然后说服人们事情可能是怎样的。</span>  
> *Most of the work is not coding. It's largely coordination and then convincing people on how things could be.*  
> <span class="qm">—— Heitor Lessa · [08:36]</span> ^q3

> <span class="qz">我们往往被训练成只学习硬技能和所有的技术细节，并且表现得非常出色，成为房间里最聪明的人，这在某种程度上就像是胡扯。</span>  
> *We tend to be conditioned to learn only the hard skills and all the technical pieces and be really good and be the best smart person in the room, which is like BS in a way.*  
> <span class="qm">—— Heitor Lessa · [18:20]</span> ^q4

> <span class="qz">而发展职业生涯的最佳方式不是试图学习更多，以及如何在自己的工作中更高效。而是尝试学习相邻领域的角色。</span>  
> *the best way to grow a career is not to try to learn more and how to be more effective in your own job. But trying to learn adjacent roles.*  
> <span class="qm">—— Heitor Lessa · [18:56]</span> ^q5

> <span class="qz">但这也是危险的一部分，因为每个人可能会意外地、错误地认为工程只是一个开发人员，这就是你所需要的。</span>  
> *But it's also part of the danger because then everyone can accidentally, wrongly assume that engineering is just a single developer and that's all you need.*  
> <span class="qm">—— Heitor Lessa · [24:32]</span> ^q6

> <span class="qz">我超级喜欢，因为我向组织解释的所有事情等等，人类天生是不确定的。但我们现在正在添加更多的智能体。我们更加不确定了。所以我需要某种程度的确定性。</span>  
> *I'm a big fan of, because of everything I explained to organizations and so forth, is that humans are non-deterministic by nature. But now we're adding more agents. We're even more non-deterministic. So I need some level of determinism.*  
> <span class="qm">—— Heitor Lessa · [33:53]</span> ^q7

> <span class="qz">所以默认基本上将与你使用的模型一样好，但这并不好。</span>  
> *So the default will basically be as good as the model that you're using and that's not good.*  
> <span class="qm">—— Heitor Lessa · [78:08]</span> ^q8

> <span class="qz">我认为这是最大的谎言，甚至当营销和炒作出来时说，我们不再需要工程师了。这个问题都解决了。</span>  
> *I think it's the biggest lie to say even when the marketing and the hype came out in saying, we don't need engineers anymore. This problem is all solved.*  
> <span class="qm">—— Heitor Lessa · [89:54]</span> ^q9

> <span class="qz">但是在你运行一个会话三、四、七个小时之后，你筋疲力尽了。你最不情愿的就是去思考这可能是一个 linter 吗？</span>  
> *But after you've run a session for like three, four, seven hours, you're exhausted. The last thing you want is to think about what could this be a linter?*  
> <span class="qm">—— Heitor Lessa · [103:49]</span> ^q10

> <span class="qz">但如果你给人们工具，并且他们自己创造了那个最终结果，他们就会建立信念，因为他们参与其中，使用了他们的批判性思维，他们通过做事建立自己的信念，然后他们真的相信最终结果。</span>  
> *But if you give people tools and they create that end result themselves, they build conviction because they're in the loop, their critical thinking is used, they are building their own conviction by doing, then they really believe in the end result.*  
> <span class="qm">—— SPEAKER_00 · [118:16]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2025-07-31-lennys-he-saved-openai-bret-taylor|Bret Taylor：智能体是新应用，软件要按结果定价]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-09-21-lennys-from-managing-people-to-managing-ai-juli|Julie Zhuo：管理者的核心技能，就是驾驭AI的技能]]<span class="pd-rz">同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-24-pg-company-os-jz|Laurel 产品负责人：怎么用 GitHub 把全公司的工作流变成 AI 技能]]<span class="pd-rz">同概念:智能体 (agent)、技能 (skill)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-27-lennys-pricing-and-scaling-your-ai-product-madh|AI 定价的黄金象限：别把 20% 的价值白送]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
