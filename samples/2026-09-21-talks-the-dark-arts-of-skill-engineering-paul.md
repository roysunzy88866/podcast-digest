---
title: 技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展
podcast: 精选演讲
date: 2026-09-29
source_url: undefined
duration: "64:44"
type: episode
cover: "#64748b"
description: Impeccable 作者 Paul 讲解如何把设计 Skill 做成真正的 harness 扩展：让子智能体互评、强制发散、编写会反击的 hooks 等九种实战技法。
guests: ["[[Paul Bakaus]]"]
companies: ["[[Impeccable]]", "[[Claude Code]]", "[[Codex]]", "[[Cursor]]"]
concepts: ["[[技能]]", "[[harness]]", "[[子智能体]]", "[[hooks]]", "[[提示词缓存]]", "[[评估]]", "[[品味]]", "[[垃圾话]]", "[[MCP]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-21-talks-the-dark-arts-of-skill-engineering-paul#post","headline":"技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-21-talks-the-dark-arts-of-skill-engineering-paul","mainEntityOfPage":"https://talk.solomind.cc/2026-09-21-talks-the-dark-arts-of-skill-engineering-paul","description":"Impeccable 作者 Paul 讲解如何把设计 Skill 做成真正的 harness 扩展：让子智能体互评、强制发散、编写会反击的 hooks 等九种实战技法。","datePublished":"2026-09-29","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Paul Bakaus"},{"@type":"Organization","name":"Impeccable"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"Cursor"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"子智能体 (sub-agent)"},{"@type":"Thing","name":"hooks"},{"@type":"Thing","name":"提示词缓存 (prompt caching)"},{"@type":"Thing","name":"评估 (evals)"},{"@type":"Thing","name":"品味 (taste)"},{"@type":"Thing","name":"垃圾话 (slop)"},{"@type":"Thing","name":"MCP"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展","item":"https://talk.solomind.cc/2026-09-21-talks-the-dark-arts-of-skill-engineering-paul"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 技能工程的九种黑暗艺术：把 Skill 从提示词做成 Harness 扩展

<div class="pd-byl"><b>Paul Bakaus</b> · Impeccable 作者 · 2026-09-29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-21-talks-the-dark-arts-of-skill-engineering-paul.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">提示词是咒语，harness 工程才是魔法。</div><div class="a">— Paul Bakaus <button class="pd-ts" data-t="07:10" data-who="Paul Bakaus" data-en="Prompting is a spell, harnessing is a magic." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Paul Bakaus]]
>
> **公司** [[Impeccable]] · [[Claude Code]] · [[Codex]] · [[Cursor]]
>
> **概念** [[技能]] · [[harness]] · [[子智能体]] · [[hooks]] · [[提示词缓存]] · [[评估]] · [[品味]] · [[垃圾话]] · [[MCP]]

「提示词是咒语，[[harness|harness 工程]]才是魔法。」说这话的是 Paul,[[Impeccable|Impeccable]](一个给 [[Claude Code|Claude Code]]、[[Codex|Codex]] 等编程智能体用的开源前端设计[[技能|技能]]，impeccable.style)的作者，更早以前他还创造了 jQuery UI。

过去一年他构建大型企业应用时，发现智能体能很快生成能看的界面，但要拉回设计系统非常难，于是从第一个 normalize 技能起步，一路把 Impeccable 打造成了一套「设计 harness」。这场工作坊讲的就是他踩坑踩出来的九种「技能工程的黑暗艺术」——核心论点：**提示词只是入门，构建 skill 时应该把它当成对编程 harness 的扩展来设计**，就像 [[MCP|MCP]] 一样，而不是「打包起来的一段 prompt」。

先说他起步的地方：Anthropic 的前端设计 skill——约 55 行「命名禁令」，没有脚本、没有路由，纯文字描述。问题是 Slop(AI 生成的千篇一律的垃圾审美)是个移动靶子：早期是紫色渐变，现在变成了「Claude 米色」背景加斜体衬线。

禁令有两个致命问题，**第一，禁令只是把问题挪了个地方**——你告诉它别用 Inter,它就去潜空间里抓下一个最近的替代品(比如 Space Grotesque),并没有变得更有创造力。Paul 在这里吃了历史级的苦头：当年他做 jQuery UI,默认主题是橙色，以为大家会改主题，结果一夜之间把整个互联网变成了橙色——中位数就是模型的引力，连 250 行精心打磨的技能散文都拗不过它。

## 第一招：让它争论
让 Claude Code 或 Codex 评审自己写的代码，等于让学生给自己批作业——它会锚定在自己已创建的东西上，通常打出高分。解法是对抗性提示：**启动两个互不知晓对方存在的[[子智能体|子智能体]]**。Impeccable 的 critique 命令就是这么做的：一个子智能体扮演设计总监，用浏览器工具像人类一样看层级、找 [[垃圾话|slop]];另一个子智能体运行确定性检测器(一个能查出对比度差、字体过多、元素贴边等问题的设计 linter),并收集浏览器证据。主线程最后把两份意见综合成一份平衡的批评。这解决了一个真实陷阱：如果检测器和评估在同一线程里跑，模型看到「500 个问题」就会断定好设计很糟，或者看到「零问题」就把空页面夸成好设计。一句话：**两个盲评胜过一个自信的猜测**。代码审查、安全审计、RFC 批判、输出排序都适用。

但这里有坑：Codex 的权限模型不同，用户不显式授权它就不生成子智能体——分发技能时你没辙。唯一的办法是在技能里明说：「如果有子智能体能力但没权限，立即停下询问用户」。另一个心机：Codex 发现能蒙混过关就蒙混，所以还得写上「如果不能使用子智能体，必须声明你正在给用户降级体验」——**Codex 讨厌承认降级，利用这一点逼它就范**。

## 第二招：用反吸引子强制发散
禁令只在模型自己的偏好簇里挪动它，想真正发散要主动制造「随机种子」。三种从易到难的做法：① **削掉安全候选**——让模型说出前三个推荐字体然后全部扔掉，重复三次，等于手动切到潜空间更远的地方(但迟早还是会收敛)；② **大量生成 + 盲评子智能体排序**——Paul 做着色器库 Radiant Shaders 时，每次要新创意都得到重复结果，他用「Rihanna 作为一个着色器会是什么样」这种意外种子生成一百个创意，再让一个对会话上下文一无所知的子智能体来排序(必须子智能体，否则它会沿用先前上下文的排序)；③ **用脚本生成随机种子**——Impeccable 启动项目时调用 color.js,里面有 100 多个手工挑选的主色，模型以它为创意火花搭建调色板。同一个简报因此能产出截然不同的结果——「我不想让整个互联网看起来千篇一律」。

## 第三招：像模型一样路由(专家混合)
把所有东西塞进一个技能，指令遵循会变糊。反例：Anthropic 旧版前端设计 skill 写着「避免系统字体」——这对落地页成立，对产品 UI 恰恰相反(产品要尽量原生)。用巨大的 if-else 块又复杂、费 token、效果差。Impeccable 的做法是**专家混合(Mixture of Experts,多数现代模型的架构思路：按任务激活不同专家)式的技能**：调用 impeccable critique 或 polish 时后台加载不同的 MD 文件；更少人知道的是，它还会根据你的简介判断你是在做品牌向设计(落地页)还是产品设计，然后为两种「语域」加载完全不同的规则。

## 第四招：让运行产生复利
技能默认没有长期记忆，但技能文件夹就是存储：Claude 里甚至有解析到技能目录的环境变量(其他 harness 暂不支持，可以变通)。Impeccable 在仓库根目录用 .impeccable 文件夹保存每次 critique 的结果，之后哪怕在另一个会话里让它 polish 页面，它也会读取历史 critique 理解「这个页面我们已经发现了什么」；你在 critique 里说过「我不同意这条，我更喜欢我的参考」，它会记住这是用户偏好并在今后尊重它。Paul 自己的高频用法：**让技能跨会话自我派生重构代码，每次只处理一个文件**，上下文随时间累积直到整个代码库完成。

## 第五招：会顶嘴的脚本
埋在长文里的规则，弱模型会略读。解法是把关键指令从脚本的**标准输出**里给出去：每次调用 Impeccable 都会先跑 context.mjs——它把 ProductMD/DesignMD 注入会话；文件不存在时输出结构化 JSON 明确告诉模型该怎么做；有新版本时提示询问用户是否更新。神奇之处：**同样一句话，从脚本标准输出里出来的，模型遵循度远高于散文里的规则**。短板要清楚：动态输出会破坏[[提示词缓存|提示词缓存]]，频繁运行、希望整段缓存的场景不适合，交互式场景才划算。

## 第六招：会反击的 hooks
被动护栏胜过一条没人记得运行的命令。Impeccable 附带设计 [[hooks|hooks]],安装时装进 Claude Code、[[Cursor|Cursor]]、Codex 和 GitHub Copilot,每次编辑都触发检查。有个重要的工程细节：**弱模型要用 pre-tool use hook**(直接阻止写文件)而不是 post-tool use hook(写完再提醒去修)，因为后者有些模型不会照做。体验上通常你什么都不用做，模型自己就修正了。别忘了给用户留忽略规则——hooks 有误报，不能配置的话很快会惹人烦。

## 第七招：给浏览器接上活线
「你没法对着聊天框调像素。」既然把 skill 当 harness 工程，就该问：这个 harness 有哪些能力可以利用？Claude Code 桌面版内置了应用内浏览器，Paul 把它劫持了：Impeccable 启动一个 live poller 小服务器，向开发服务器注入一段脚本；用户在页面上选中元素、选变体数量、点 go,poller 通过服务器端事件收到操作后**自我结束**，并在标准输出里留下一条消息——模型读到消息意识到「发生事了，我该干活」，按技能里写好的指令生成该区块的设计变体再送回页面。用户在浏览器里直接点击接受或按 escape 拒绝，还能画图批注、语音操纵整个页面。这是聊天线程和应用内浏览器两种 harness 能力之间的直连，完全没用 MCP。

## 第八招：为最弱的目标编译
「在我机器上能跑」在分发技能时是重灾区。「symlink 一下 .claude」只适用于自用，跨 harness 有大量差异：子智能体谁能启动(Claude 可编程调用、Codex 需用户批准、Cursor 多由智能体自决)；Ask User 工具(Codex 有类似工具但仅 plan 模式可用，所以 Impeccable 里写满了「如果你是 Codex,必须停下来提问，你没聪明到能推断上下文」)；后台任务(Claude Code 任务完成会唤醒模型，Codex 不会，所以 live mode 在 Codex 里只能用阻塞聊天线程的前台任务)。模型层面也各有癖好：Gemini 疯狂给图片加悬停动画，Codex 爱糟糕的字距、超圆边框和发丝细边框，而且**告诉 Claude 别字距太宽，它会朝反方向调**——所以规则不能放进同一个作用域。解法：Impeccable **为每个 harness × 每个模型生成专门的构建版本**，含替换变量(按 harness 选对提问工具)和针对各模型的「防过拟合」XML 块。对 GPT 系还有一个绝招：它超爱「gate(关卡)」，所以 Codex 专属的 MD 里就给它八个关卡、要求逐个记录通过结果、不许压缩——因为**如果一个关卡可以被跳过，它就会被跳过**。顺带一提，常见安装工具不认多目录，所以 Paul 自建了 CLI 安装器。

## 怎么验证：evals 与品味的极限
Impeccable 的每一行都做消融测试(每条规则带唯一标识，移除该行跑全部模型的 eval,再用确定性检测引擎验证确实产生了变化)。他还有一个未开源的 [[评估|evals]] 框架，复刻各 harness 的条件与工具，甚至用一个 LLM 扮演用户与另一个 LLM 交互，跨 20 个细分领域(如意大利餐厅)在 GPT-5.5、Opus、Sonnet 等模型上跑。但问到「[[品味|品味]]」他给了个犀利的回答：**品味在模型层面解决不了，它从根本上属于人类**——品味稀缺才成立，人人都用就不再有品味；而且模型评估品味特别糟，往往是「极繁主义者」：Gemini 对第一屏内容塞得越多评分越高，所以他有时干脆构建**反转模型响应**的评审员——模型评得越高，大概率越不是好设计。他的评审工具「勉强好于随机」，够当第一轮筛选，最终还得靠人眼。

## 本集带走
- **先换心智模型**：skill 不是打包的 prompt,而是对用户 harness 的扩展——先问「这个 harness 有哪些能力可以利用」，再动手写。
- **评审类技能用盲评双智能体**：让两个互不可见的子智能体(人感评估 + 确定性检测)各自出具意见，主线程综合，避免模型给自己打高分。
- **别用禁令，用发散机制**：扔掉前三推荐、大量生成后让无上下文的子智能体排序、用脚本喂随机种子(color.js 式)，都比「别用 Inter」有效。
- **关键指令走脚本标准输出**，遵循度远高于散文规则；但注意会破坏提示词缓存，只用于交互式场景。
- **能被跳过的检查一定会被跳过**：给弱模型上 pre-tool use hooks 阻止写文件、给 GPT 系上必须逐个记录结果的「关卡」，把流程做成不可跳过。
- **跨 harness 分发要分别编译**：子智能体权限、提问工具、后台任务行为、每个模型的过拟合癖好都不同——按 harness × 模型出专门构建，并永远为指令遵循最弱的模型设计。
- **发布前过 evals**:哪怕不用消融测试，也该在目标模型上验证； 分发的技能在作者没用过的模型上跑不好，是这个生态最大的烂账。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">提示词是咒语，harness 工程才是魔法。</span>  
> *Prompting is a spell, harnessing is a magic.*  
> <span class="qm">—— Paul Bakaus · [07:10]</span> ^q1

> <span class="qz">中位数就是模型的引力。即使是 250 行精心手工打造、优美的技能散文也改变不了这一点。</span>  
> *The median is the model's gravity. Even 250 lines of like artisanal, crafted, beautiful skill pros cannot change this.*  
> <span class="qm">—— Paul Bakaus · [06:12]</span> ^q2

> <span class="qz">于是一夜之间，我把整个网络变成了橙色。我以为人们会去修改主题，但不，他们没有。</span>  
> *So overnight I call it the web orange. I thought people would modify the theme, but no they didn't.*  
> <span class="qm">—— Paul Bakaus · [06:04]</span> ^q3

> <span class="qz">所以，两个盲评胜过一个自信的猜测。</span>  
> *So, two blind opinions beat one confident guess.*  
> <span class="qm">—— Paul Bakaus · [12:24]</span> ^q4

> <span class="qz">当你把某个东西从脚本的退出值、从标准输出里输出出来时，不知为何模型对它的遵循度会高得多。</span>  
> *When you put something out from the exit value, from the standard out of a script, somehow the model will follow it a lot more than before.*  
> <span class="qm">—— Paul Bakaus · [28:45]</span> ^q5

> <span class="qz">(被动护栏)胜过一条没人记得去运行的命令。</span>  
> *Beat a command no one remembers to run.*  
> <span class="qm">—— Paul Bakaus · [32:34]</span> ^q6

> <span class="qz">而这里最重要的教训是：如果一个关卡可以被跳过，它就会被跳过。</span>  
> *And the most important lesson from this is if the gate can be skipped, it will be.*  
> <span class="qm">—— Paul Bakaus · [48:29]</span> ^q7

> <span class="qz">较弱的模型有自己的想法没问题，但它失去的是遵循你的想法的纪律。</span>  
> *Our weaker model has opinions just fine, but what it loses is the discipline to follow yours.*  
> <span class="qm">—— Paul Bakaus · [47:24]</span> ^q8

> <span class="qz">你没法真正对着一个聊天框调像素。</span>  
> *Now you can't really tune pixels to a chat box.*  
> <span class="qm">—— Paul Bakaus · [34:41]</span> ^q9

> <span class="qz">我不认为品味可以在模型层面被解决。我实际上认为它从根本上是一件属于人类的事情。</span>  
> *I don't think taste can be solved at a model level. I actually think it's a fundamentally human thing.*  
> <span class="qm">—— Paul Bakaus · [56:41]</span> ^q10

> <span class="qz">因为品味是稀缺且独特的，一旦所有人都使用同样的品味，它就变得无处不在，然后我们就不再觉得它有品味了。</span>  
> *Because taste is scarce and unique and once everybody uses the same taste it becomes ubiquitous and then we don't think it's tasteful anymore.*  
> <span class="qm">—— Paul Bakaus · [56:48]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-13-talks-when-to-build-your-own-agent-harness-har|拥有你自己的智能：Harness、Eval 与数据飞轮]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:evals、harness 工程 (harness)</span>
- [[2026-09-10-talks-design-at-the-speed-of-adjectives-paul-b|用形容词驾驭 AI 设计:Impeccable 的控制哲学]]<span class="pd-rz">同嘉宾:Paul Bakaus · 同公司:Impeccable · 同概念:harness 工程 (harness)、品味 (taste)</span>
- [[2026-08-28-talks-ai-native-organisations-run-on-skills-ho|AI 原生组织如何运行在 Skills 之上]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:harness 工程 (harness)、MCP、子智能体 (sub-agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同公司:Anthropic · 同概念:evals、harness 工程 (harness)、MCP、提示词缓存 (prompt caching)</span>
- [[2026-09-26-talks-the-loop-is-the-product-roland-gavrilesc|循环就是产品：智能体配方与每瓦特价值]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor · 同概念:evals、harness 工程 (harness)、品味 (taste)</span>
- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Claude Code、Codex、Cursor、Anthropic</span>

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
