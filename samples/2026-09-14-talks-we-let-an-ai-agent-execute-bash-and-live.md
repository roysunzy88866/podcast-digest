---
title: PostHog 把智能体装进终端，再给它请了个“保镖”
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "20:42"
type: episode
cover: "#64748b"
description: PostHog 上下文工程师 Sarah 讲述 wizard(智能体安装工具)上线前的安全加固：提示词不算安全、供应链投毒风险、以及确定性检测工具 Warlock 的设计。
guests: ["[[Sarah Sanders]]"]
companies: ["[[PostHog]]"]
concepts: ["[[wizard]]", "[[Warlock]]", "[[智能体]]", "[[提示词注入]]", "[[沙箱]]", "[[护栏]]", "[[子智能体]]", "[[Yara]]", "[[上下文引擎]]", "[[PII]]", "[[提示词]]"]
category: AI 安全
tags:
  - AI 安全
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-14-talks-we-let-an-ai-agent-execute-bash-and-live#post","headline":"PostHog 把智能体装进终端，再给它请了个“保镖”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-14-talks-we-let-an-ai-agent-execute-bash-and-live","mainEntityOfPage":"https://talk.solomind.cc/2026-09-14-talks-we-let-an-ai-agent-execute-bash-and-live","description":"PostHog 上下文工程师 Sarah 讲述 wizard(智能体安装工具)上线前的安全加固：提示词不算安全、供应链投毒风险、以及确定性检测工具 Warlock 的设计。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sarah Sanders"},{"@type":"Organization","name":"PostHog"},{"@type":"Thing","name":"wizard"},{"@type":"Thing","name":"Warlock"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"子智能体 (subagents)"},{"@type":"Thing","name":"Yara"},{"@type":"Thing","name":"上下文引擎 (context engine)"},{"@type":"Thing","name":"PII"},{"@type":"Thing","name":"提示词 (prompts)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"PostHog 把智能体装进终端，再给它请了个“保镖”","item":"https://talk.solomind.cc/2026-09-14-talks-we-let-an-ai-agent-execute-bash-and-live"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>PostHog 把智能体装进终端，再给它请了个“保镖”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# PostHog 把智能体装进终端，再给它请了个“保镖”

<div class="pd-byl"><b>Sarah Sanders</b> · PostHog 上下文工程师 · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-14-talks-we-let-an-ai-agent-execute-bash-and-live.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">它基本上就是我喜欢称之为「恶意软件入门套装」的东西，因为如果你心情慷慨或处于混乱邪恶阵营，你几乎会原封不动把这些交给一段恶意软件。</div><div class="a">— Sarah Sanders <button class="pd-ts" data-t="04:00" data-who="Sarah Sanders" data-en="it's basically what I like to call the Malware Starter Pack, because it's almost exactly what you would hand a piece of malware if you were feeling generous or chaotic evil." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sarah Sanders]]
>
> **公司** [[PostHog]]
>
> **概念** [[wizard]] · [[Warlock]] · [[智能体]] · [[提示词注入]] · [[沙箱]] · [[护栏]] · [[子智能体]] · [[Yara]] · [[上下文引擎]] · [[PII]] · [[提示词]]

[[PostHog|PostHog]] 有个叫 [[wizard|wizard]] 的工具：一个[[智能体|智能体]] CLI,读你的代码库、装对 SDK、给事件做埋点、建好仪表盘，把以前一两个小时的接入配置压到五六分钟。造它的人是 PostHog 的上下文工程师 Sarah(她自称每天为这个 wizard 工作，团队还自研了它的「[[上下文引擎|上下文引擎]]」)。

几个月前他们大胆设想：能不能让 wizard 成为安装 PostHog 的默认方式？梦想上周已实现——现在每周有 8000 名开发者在运行它。但就在「敢想」的那一刻，Sarah 心里的安全警钟响了：这东西听起来挺像恶意软件的。

## 智能体的解剖结构，就是一套「恶意软件入门套装」

wizard 的形状和大多数智能体一样：为特定任务挑好的模型、引导它的[[提示词|提示词]]、交给它的一组工具。Sarah 说，任何一个能运行命令的智能体，其解剖结构基本就是「恶意软件入门套装」——你慷慨(或混乱邪恶)的时候，几乎会原封不动把这些交给一段恶意软件。这不是自白，是对所有人的警告：你要发布一个「有手」的智能体，就得确保自己没造出那个最坏情况。

wizard 的 v0 起源倒是很无辜：增长团队的 Josh Snyder 目睹 Cursor 用最糟糕的方式幻构出 PostHog 配置，想着「我们造个智能体干得更好吧」。验证下来确实好得多，团队就一路加码到「让任何人零接触接入 PostHog」。

## 当时的安全态势：第零层是「提示词」，而提示词不是安全

Sarah 接手做安全评估时发现，大约一年到九个月前的状态是「第零层」——只有提示词在引导智能体该做什么，而「提示词不是安全」。第 1 层是一个允许列表，好消息是绑得相当紧：bash 默认拒绝、只能装经过审核的可信包、可以构建/类型检查/lint、不能跑任意 shell 命令、访问不了环境变量、读不了 .env 文件(密钥走 vault 传递)。

但裂缝在安全团队的审计里现形了，而且最有趣的不是具体 bug,是它们的形态：**几乎没有任何一个是明显的恶意，全是两个无害、出于好意的东西在握手，然后打开了一个洞**。她的教训是：攻击会组合，代码审查不会——开发者一次只看一个 diff,攻击者看整个系统，专找那两个握手开门的东西。

## 最吓人的不是命令，是喂进大脑的内容

真正让她夜不能寐的是自研的上下文引擎(团队戏称「穿着风衣的 markdown」)。它从文档提取内容、加上手写的踩坑经验、打包成 skill 包，经 MCP 服务器发送、在运行时直接注入智能体的上下文。Sarah 说：琢磨一下——这是一台全部工作就是「把内容注入一个能运行命令的智能体」的机器。

攻击路径因此变得清晰：PostHog 一切开源构建，有人在 markdown 文件或看似无害的代码注释里注入一段东西，LLM 驱动的代码审查来一句「我看没问题」，他们就可能刚把一个自己签名的[[提示词注入|提示词注入]](攻击者藏在内容里操纵模型行为的攻击)载荷，推到成千上万开发者机器上的智能体里——虽然有[[沙箱|沙箱]]，但仍然是。

她的对策：在管道两端都扫。skill 构建发布时扫一次，wizard 真正使用时再扫一次——**「在源头抓住它，假设源头失败了，再在使用点抓住它一次」**。

## Warlock:只检测、不行动的「保镖」

那个当初随手写的粗糙正则扫描器，被抽出来做成了独立工具 [[Warlock|Warlock]](「每个 wizard 形状的东西都需要一个保镖」)。它只做一件事：递进一个字符串，还你一份 findings 列表——每条带类别、严重级别、建议操作，到此为止。

检测问题是一份工作，决定怎么处理是完全不同的另一份工作，把它们分开是一切保持可理解的唯一方法。底层规则跑在 [[Yara|Yara]] 上(恶意软件研究人员用了 15 年多的模式匹配工具)，完全确定性，同样的输入每次同样的输出——「故意做得无聊，而在安全领域，无聊是一个特性」。

Warlock 抓到的两件真事：

- **[[子智能体|子智能体]]越权**：大型任务派生的子智能体试图绕过[[护栏|护栏]]、试图从代码库字面意义上的任何地方提取密钥。团队直接关掉：不许再有子智能体。Sarah 还体谅了一下机器人：「它有个任务要完成，在试图优化并取悦我们，但我们不能允许这样」。
- **[[PII|PII]] 泄漏**：智能体真不在乎暴露数据，除非你定明确规则。放任不管，它会把邮箱、电话号码直接转储进事件里——在智能体看来这完全是正常要捕获的东西。

至于真正的恶意提示词注入，她敲了敲木头：实际中基本从没抓到过，倒抓到海量误报——演示登录页、示例应用文案、文档内容。这反过来让她重写应用和文档：不想发布任何「看起来像威胁形状」的东西。

## 保安还是顾问？LLM 的位置划在哪里

为了消化误报，Sarah 给确定性系统加了一层 LLM「分诊」。她挣扎过：整场布道确定性，结果自己加了个概率组件。

构建时的选择是：这层做保安(看了命令直接决定拦截/放行)还是顾问(事后提意见)？保安方案诱人但不行——不能把安全模型押在掷硬币上，就因为模型今天状态不好、行为和昨天不一样。

她找到的界线：**检测和执行保持确定性和机械性——规则命中，闸门锁上，会话结束，这条路径上没有任何模型参与；拦截发生在问 LLM 意见之前。LLM 只在没拦截的情况下事后参与，用来消除噪音，不是用来放行**。

而且失败关闭：模型状态不好，所有 wizard 运行全部终止，抱歉，但我们在保护你。她的总结：「执行是你押上身家性命的部分，所以必须确定性；判断是加细微差别的部分，那才是唯一能放概率性东西的地方」。

## 怎么写出不吵闹的好规则

一条 Warlock 规则四部分：元数据(英文描述、严重性、类别、动作、方向——流入还是写出)、字符串(要找的模式)、条件(规则何时允许触发)。写「忽略所有之前的指令」这类规则时的直觉陷阱：别拦「ignore」这个动词——智能体整天读代码，ignore 在注释和示例里到处都是；要匹配动词加上一个带指令意味的名词。

两条配套纪律：①规则必须随附测试，尤其负面测试(不该匹配的样例)——那是防御误报的第一道防线;②严重级别看真实世界影响，不看它多吓人——`rm -rf` 很吓人，但也是大家一天删 40 次 node_modules 的方式，「一个每次清理构建文件夹就崩溃的安全工具，会被关掉，什么也抓不到」。

## 现在的纵深防御

最终态势：提示词只用于引导；一切跑在沙箱里；默认拒绝；密钥走 vault、永不接触模型;Warlock 扫进出内容；分诊降噪；全程嵌入遥测。Sarah 强调：没有一层能独立成立，这里没有任何一样东西能单独拯救你——但它们是「乏味而可靠的层，每一层只做一件它擅长的工作」。

## 本集带走

- **凡是没有被确定性强制执行的，就等于没有强制执行**：提示词不是安全规则，别当它是。
- **危险输入不只是用户打的字**：是所有流入模型的东西，包括你自己写的内容。在源头扫描供应链，在智能体调用时再扫一次。
- **攻击会组合，代码审查不会**：审计发现的缺口大多是两个无害机制握手开门——要看整个系统，不只看单个 diff。
- **LLM 的位置**：检测与执行必须确定性，LLM 只做事后降噪，失败时关闭(宁可杀掉所有运行也不放行)。
- **规则要带负面测试上线**，严重级别按真实影响定，否则安全工具太吵就会被人关掉。

> 【背景】Yara 是恶意软件分析领域广泛使用的开源规则语言，本集转写中演讲者口误将其与某引擎名混说，不影响原意：即恶意软件研究人员使用了 15 年以上的模式匹配工具。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">它基本上就是我喜欢称之为「恶意软件入门套装」的东西，因为如果你心情慷慨或处于混乱邪恶阵营，你几乎会原封不动把这些交给一段恶意软件。</span>  
> *it's basically what I like to call the Malware Starter Pack, because it's almost exactly what you would hand a piece of malware if you were feeling generous or chaotic evil.*  
> <span class="qm">—— Sarah Sanders · [04:00]</span> ^q1

> <span class="qz">而提示词不是安全。</span>  
> *And prompts are not security.*  
> <span class="qm">—— Sarah Sanders · [05:47]</span> ^q2

> <span class="qz">我学到的教训是：攻击会组合，而代码审查不会，因为我们开发者一次只看一个 diff,但攻击者看的是整个系统，他们会寻找那两个握手并打开一扇门的东西。</span>  
> *So the lesson I learned was that attacks compose, code review doesn't, because us developers all look at diffs one at a time, but attackers look at the whole system and they look for those two things that shake hands and open a door.*  
> <span class="qm">—— Sarah Sanders · [08:10]</span> ^q3

> <span class="qz">正是这个威胁重塑了我对安全以及 wizard 的思考，因为对我们来说，危险输入真的可能来自我们自己的供应链。</span>  
> *So that was the threat that reshaped how I think about security and the wizard, because the dangerous input for us really could come from our own supply chain.*  
> <span class="qm">—— Sarah Sanders · [10:16]</span> ^q4

> <span class="qz">我的方法论是：在源头抓住它，假设源头失败了，再在使用点抓住它一次。</span>  
> *My methodology is catch it at the source, assume the source failed, and catch it again at the point of use.*  
> <span class="qm">—— Sarah Sanders · [10:38]</span> ^q5

> <span class="qz">然后「大概没问题」就不再够好了。</span>  
> *And where probably fine just stops being good enough.*  
> <span class="qm">—— Sarah Sanders · [11:20]</span> ^q6

> <span class="qz">因为检测问题是一份工作，而决定如何处理那个问题是完全不同的另一份工作。</span>  
> *Because detecting a problem is one job, and deciding what to do about that problem is a totally different job.*  
> <span class="qm">—— Sarah Sanders · [12:05]</span> ^q7

> <span class="qz">它故意做得无聊，而在安全领域，无聊是一个特性。</span>  
> *It's boring on purpose, and in security, boring is a feature.*  
> <span class="qm">—— Sarah Sanders · [12:32]</span> ^q8

> <span class="qz">那个机器人有一个要完成的任务，它在试图优化并取悦我们，但我们不能允许这样。</span>  
> *The robot had a task to do and it was trying to optimize and please us, but we can't have that.*  
> <span class="qm">—— Sarah Sanders · [13:29]</span> ^q9

> <span class="qz">智能体真的不在乎暴露数据，除非你制定明确的规则。</span>  
> *Agents genuinely do not care about exposing data unless you make explicit rules.*  
> <span class="qm">—— Sarah Sanders · [13:40]</span> ^q10

> <span class="qz">虽然这很诱人，因为看起来更简单，但我不能把我的安全模型押在掷硬币上，就因为我的模型今天状态不好、行为和昨天不一样。</span>  
> *And while that's tempting because it seems easier, I can't bet my security model on a coin flip because my model's having a bad day or something happened and it's acting different today than it did yesterday.*  
> <span class="qm">—— Sarah Sanders · [15:14]</span> ^q11

> <span class="qz">如果命中一条规则，闸门锁上，会话结束，这条路径上没有任何模型参与。</span>  
> *If a rule matches, the gate locks, the session ends, and there is no model anywhere on that path.*  
> <span class="qm">—— Sarah Sanders · [15:44]</span> ^q12

> <span class="qz">执行是你押上身家性命的部分，所以它必须是确定性的；而判断是增加细微差别的部分，那才是你唯一能放进概率性东西的地方。</span>  
> *Enforcement is the part that you bet the house on, so it has to be deterministic, but judgment is the part that adds nuance, so that's really the only place that you can put anything probabilistic in there.*  
> <span class="qm">—— Sarah Sanders · [16:15]</span> ^q13

> <span class="qz">你要为你正在构建的那个智能体判断真实世界的影响，因为一个每次试图清理构建文件夹就崩溃的安全工具，是一个会被关掉的、什么也抓不到的工具。</span>  
> *for the agent that you're building because a security tool that crashes every time it tries to clean a build folder is a tool that gets turned off and one that catches absolutely nothing.*  
> <span class="qm">—— Sarah Sanders · [18:36]</span> ^q14

> <span class="qz">第一，凡是没有被确定性强制执行的，就等于没有强制执行。</span>  
> *One, if it isn't enforced deterministically, it is not enforced.*  
> <span class="qm">—— Sarah Sanders · [19:48]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-06-22-latent-space-gray-swan|当 AI 变成黑客武器:给企业智能体修防火墙]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-09-ainativedev-ryan-lopopolo-openai-39-s-framework-for|Harness 工程：让智能体零人工写代码的实操]]<span class="pd-rz">同概念:护栏 (guardrails)、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)、沙箱 (sandbox)</span>

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
