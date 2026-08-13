---
title: 用 AI 对抗 AI：一种不用读代码的编程语言 BAML
podcast: 精选演讲
date: 2026-07-31
source_url: undefined
duration: "21:22"
type: episode
cover: "#64748b"
description: 一家八人团队靠 AI 写出稳定的编程语言 BAML，秘诀是放下审查、拥抱「slop」，并重写编程的底层地基。
guests: ["[[Vaibhav Gupta]]"]
concepts: ["[[BAML]]", "[[垃圾话]]", "[[智能体]]", "[[代码审查]]", "[[不变量]]", "[[执行跟踪]]", "[[类型系统]]", "[[工具调用]]", "[[TypeScript]]", "[[JavaScript]]", "[[架构文件]]", "[[依赖图]]", "[[CI-CD]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo#post","headline":"用 AI 对抗 AI：一种不用读代码的编程语言 BAML","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo","mainEntityOfPage":"https://talk.solomind.cc/2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo","description":"一家八人团队靠 AI 写出稳定的编程语言 BAML，秘诀是放下审查、拥抱「slop」，并重写编程的底层地基。","datePublished":"2026-07-31","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Vaibhav Gupta"},{"@type":"Thing","name":"BAML"},{"@type":"Thing","name":"垃圾话 (slop)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"代码审查 (code reviews)"},{"@type":"Thing","name":"不变量 (invariants)"},{"@type":"Thing","name":"执行跟踪 (execution trace)"},{"@type":"Thing","name":"类型系统 (type system)"},{"@type":"Thing","name":"工具调用 (tool calls)"},{"@type":"Thing","name":"TypeScript"},{"@type":"Thing","name":"JavaScript"},{"@type":"Thing","name":"架构文件 (architecture.md)"},{"@type":"Thing","name":"依赖图 (dependency graph)"},{"@type":"Thing","name":"CI/CD"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"用 AI 对抗 AI：一种不用读代码的编程语言 BAML","item":"https://talk.solomind.cc/2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 AI 对抗 AI：一种不用读代码的编程语言 BAML</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# 用 AI 对抗 AI：一种不用读代码的编程语言 BAML

<div class="pd-byl"><b>Vaibhav Gupta</b> · 2026-07-31</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-31-talks-fighting-slop-with-slop-vaibhav-gupta-bo.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">为了击败劣质代码,我们必须成为劣质代码。</div><div class="a">— Vaibhav Gupta <button class="pd-ts" data-t="01:19" data-who="Vaibhav Gupta" data-en="To defeat the slop, we must become the slop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Vaibhav Gupta]]
>
> **概念** [[BAML]] · [[垃圾话]] · [[智能体]] · [[代码审查]] · [[不变量]] · [[执行跟踪]] · [[类型系统]] · [[工具调用]] · [[TypeScript]] · [[JavaScript]] · [[架构文件]] · [[依赖图]] · [[CI-CD]]

<div class="pd-tldr"><b>一句话</b>一家八人团队靠 AI 写出稳定的编程语言 BAML，秘诀是放下审查、拥抱「slop」，并重写编程的底层地基。</div>

做一门编程语言——而且要做对，通常需要八个人干上两年。但一个团队不仅没花这么久，还干脆废掉了[[代码审查|代码审查]]，允许每个工程师随便用自己喜欢的 AI 工具。

他们的秘诀反直觉得很：既然垃圾代码（slop，指那些不读、不维护、堆积如山的代码）打不败，不如反过来用它、甚至主动造它。说这话的人叫 Vaibhav，他做的事是造了一门给 AI 用的编程语言 [[BAML|BAML]]。

这一集里，Vaibhav 完整分享了他的团队三年来的工程实践，主要聊了三块。第一块是管理上怎么放手：既然管不住工程师用哪个 AI，不如换个[[不变量|不变量]]来管；第二块是工具上怎么补位：既然人不再逐行读代码，就造出一堆「sloppy 工具」让系统和[[智能体|智能体]]互相监督；第三块最核心，他提出真正要赢这场仗，得重写编程语言本身的地基——让[[类型系统|类型系统]]替你把住信任关，这也是他造 BAML 的初衷。

先说他们团队的第一仗：标准之争。招来的顶尖工程师个个有主见，有人爱用 Claude，有人爱用 Codex，有人天天上 Hacker News 追新工具，你根本管不住他们用什么。

Vaibhav 的团队没有硬性统一，而是立了一个不变量：一个极小的 architecture.md 文件（描述系统架构的文本，放在仓库根目录）。这个文件只写那些几个月甚至几年都不会变的底层规则，比如编译器分几层；至于具体怎么实现、用什么模型，完全不管。

但文件加了一条要求：智能体在编译器深处改东西之前，必须先去跟至少一个活人聊聊。这一下就把进度天然拖慢了一点，防止 AI 莽撞改动核心代码 <button class="pd-ts" data-t="02:10" data-who="Vaibhav" data-en="So instead of trying to hold standards in our code base, we did something that is an invariant. We built an architecture.md file. Instead of using ClaudeMD, just pick something that every model can just understand." aria-label="回原文"></button>。

标准的问题刚摁下去，真正的硬仗来了：设计。Vaibhav 团队有一条铁律——代码可以是 slop，写作不能。

意思是代码写得糙点 AI 能补，但设计文档必须写清楚，因为它决定了整个系统的方向。可光有规则没人执行。

他们先是做了一个内部的设计文档工具，能版本控制、能评论，想替代 Notion 和 GitHub 在这块的用途——结果没人用。于是他们又在这工具之上加了个 Slack 集成，每次有人改文档，一个频道就自动推送。

没想到这个频道迅速成了全公司最热闹的地方：凌晨两点有人发了个新设计文档，立刻有三个人爬起来围观，因为有意思 <button class="pd-ts" data-t="03:15" data-who="Vaibhav" data-en="Every time a design doc got updated, this channel got notifications. And what ended up happening is this channel became the most popular channel in our company really fast." aria-label="回原文"></button>。最后再加一条硬规则：你要发设计文档，就必须逼着人去读。这几板斧下去，文档质量稳了。

文档稳了，代码怎么自己稳下来？这是架构之战。

Vaibhav 的团队造了一个可视化内部[[依赖图|依赖图]]（dependency graph，代码模块之间谁依赖谁的网状关系）的工具，能实时盯着代码库怎么变。更重要的是，他们在上面叠了一层 CLI（命令行界面）脚本，保证某些架构不变量绝对不能被打破。

一旦 AI 试图加一个有问题的依赖，或者建一个漏掉边界的新包，CI（持续集成，代码一提交就自动跑测试的流程）或者 git 提交历史立刻就会标红报警。结果是：他们已经三四个月没动过整体架构了 <button class="pd-ts" data-t="04:33" data-who="Vaibhav" data-en="And by this, we're actually able to make our architecture change. We haven't changed our architecture in the last three or four months. But as much as we might do design docs, and as much as we might have stable code, would you genuinely ship code without reading it?" aria-label="回原文"></button>。

可是，再稳的架构、再好的设计文档，真能不读代码就发布吗？尤其他们做的可是编程语言——这种东西有泛型（generics，允许代码处理多种类型的机制）、闭包（closures，能记住外部变量的函数）、内存分配、FFI 边界（外部函数接口，让不同语言互相调用的边界）等等一堆绕不过的死规矩，错一个全盘崩。

Python 25 年了还有 bug。谁敢不读代码就放出去？

这就是他们玩法最不一样的地方：让智能体去读、去测、甚至去改。他们搭了一套系统，让智能体不停地用 BAML 写程序、从零搭东西，然后把 Claude 做事的全过程对话记录摊开看。

不光人看，更主要的是派另一批智能体去查这些记录，找出哪里出错了、哪里本来一次[[工具调用|工具调用]]能搞定却用了三次。找出问题后，再让智能体试着修，人负责复核哪些是真 bug、哪些是 AI 的幻觉。

最激进的一步是：找到新的语言特性后，不是靠猜它好不好用，而是直接拿它去做 A/B 测试，看哪个方案用的工具调用更少、错误更少，拿数据说话 <button class="pd-ts" data-t="06:00" data-who="Vaibhav" data-en="And most importantly, instead of trying to just detect these issues, we can go one step further. What if you could find language features, and instead of guessing what was good, guessing what skill was good, you could go and A-B test it." aria-label="回原文"></button>。这一套下来，Vaibhav 算了笔账：搁以前，做这门语言得八个人、干两年、耗成千上万个工时，最后搞不好还是个破系统；现在他们烧几十亿个 token（AI 处理文本的基本计费单位），就能跑通、还能稳 <button class="pd-ts" data-t="06:48" data-who="Vaibhav" data-en="And today, we can just spend billions of tokens and make it work, and we can make it stable. And you too can go home and build these internal tools and these sloppy tools to make sure that your code bases can ship without really having to read necessarily every single line of code, because your engineers aren't going to." aria-label="回原文"></button>。

但 Vaibhav 话锋一转，泼了盆冷水：他觉得这场仗他们能赢，但整个行业会输掉这场战争。为什么？

因为大家天天用的底层工具本身早就坏了。他拿 [[TypeScript|TypeScript]]（一种给 [[JavaScript|JavaScript]] 加类型的语言）举例，说它的设计目标是平衡正确性和生产力，但这里有个星号——它说的是人类的生产力。

JavaScript（一门网页开发最常用的语言）当年为了图省事，留下了一堆 baked-in 的 slop。比如它在排序时会偷偷把东西转成字符串处理，这种行为在 AI 写代码的时代就是埋雷：不管你乐意不乐意，只要在这些语言上盖楼， slop 就会一直在 <button class="pd-ts" data-t="08:14" data-who="Vaibhav" data-en="Why do we turn things to strings when we sort them? This is just slop baked into the language, whether you like it or not. What about this?" aria-label="回原文"></button>。

人类后来为了打补丁，弄出了 CoffeeScript、TypeScript，现在又想弄 Effect，可底下的地基本来就是裂的。Vaibhav 的问题是：我们写代码的方式都变了，干嘛还要补这个破烂？

顺着这个问题，他展示了 BAML 到底想怎么从第一性原理重做地基。核心是一个很颠覆的思路：人根本不用读所有代码。

他做了个原型——每次点开代码，看到的不是一堆字符，而是一个能自动把代码可视化的视图，你想看哪段就展开哪段，不想看的整块直接丢给 slop 算了。在一个不读代码的世界里，怎么理解程序？

靠[[执行跟踪|执行跟踪]]（execution trace，程序一步步跑下来的完整记录）。在 Python 或 TypeScript 里想完整跟踪每一步慢得要命，根本不现实。

但 BAML 从头设计，把跟踪做到几乎零性能开销。而且因为一切都是为智能体准备的，每个文件都自带跟踪系统，Claude 可以自己顺着它找 bug、找低效的地方，自己就把代码优化了 <button class="pd-ts" data-t="10:52" data-who="Vaibhav" data-en="In a world where we don't read all the code, the only way to understand the code is actually by the execution trace and actually by seeing exactly how much time was spent on what parts of my program at any given time." aria-label="回原文"></button>。

> 【背景】BAML 是 Vaibhav 团队做的编程语言，全称是「Boundary Abstract Markup Language」，最初主要用来帮开发者更结构化地写 AI 应用里的提示词和函数调用，后来逐渐演变成一门完整语言。

顺着这条线，他重新定义了「以智能体优先」的工具长什么样。比如现在我们查代码还用 grep 或 ripgrep（两种搜索源代码的命令行工具），搜出来一堆匹配行。

他提议：干嘛不直接用自然语言问「给我描述一下 calculate 这个函数」？系统不仅给源码，还自带文档字符串、还列出底层所有调用点。

原本要 AI 来回调用好几次工具才能拼出来的信息，现在一次调用全齐 <button class="pd-ts" data-t="12:28" data-who="Vaibhav" data-en="If I wanted to grep through my code base and understand what it was, I would ripgrep say something like calculate, and it would give me a bunch of code where everything was being used, and maybe it would be somewhat useful." aria-label="回原文"></button>。更进一步，每个函数写完，立刻就能变成一个独立的 CLI 命令直接跑——add 函数就变成一个能接 A、B 两个参数、双击即用的程序，不需要你真去搭环境执行。

所有东西都是类型安全、确定性的，智能体不用再费劲去猜去搜，直接拿结果。而且它能编译到任何架构，跨 Windows、Mac、Linux 完全不用操心部署，甚至能编成 Wasm（一种能在浏览器里跑的二进制格式）<button class="pd-ts" data-t="14:00" data-who="Vaibhav" data-en="And I can just run it really quickly and see what happens. What if every single CLI tool I had could be packed into a CLI that's complete standalone that I can just run without ever having to actually execute any of the code?" aria-label="回原文"></button>。工程师一下被解放了，能动得跟智能体一样快。

地基重写的另一个重头戏，是错误处理。Vaibhav 问了个扎心的问题：除了 Rust（一门以严格著称的语言），谁见过好看的错误处理？

AI 写代码碰到错误，最常见的套路是套一层 try-catch，再套一层，再套一层，最后干脆放弃，直接打个 `console.log` 说「出错了」拉倒 <button class="pd-ts" data-t="15:15" data-who="Vaibhav" data-en="Have you seen error handling be beautiful ever? Other than Rust? What I see agents do over here is you do try-catch, and then they keep nesting try-catch after try-catch after try-catch, and eventually they give up and say console.log, some error happened, and deal with it." aria-label="回原文"></button>。BAML 想从根上治这个病。

他演示了 divide（除法）这个容易出事的函数：它不仅会抛「除以零」的错误，而且系统自己知道它可能抛这个错——函数自己清楚自己的错误类型，不需要程序员写半个字去声明。更妙的是，谁调用了 divide，调用者也会自动继承这个错误类型。

于是编译器能拿出铁证：你到底处理没处理这个错？如果你想发布一个保证绝不抛异常的 API，而代码里还藏着两个没处理的错误，编译直接拦下。

如果你想让某个函数不再抛某个错，写两行 catch，编译器立刻能证明它已经被摁住了，不会再逃出去。没有猜测，没有未知，一切都被证明 <button class="pd-ts" data-t="16:10" data-who="Vaibhav" data-en="So error types now get inferred without you ever having to do any guesswork. That means if you catch or handle errors, we can do exhaustive guarantees, and the compiler can prove that you have handled the error or not handled the error." aria-label="回原文"></button>。代码的本质是信任，我们今天之所以不敢闭眼用 AI 写的代码，就是因为底下的系统不够刚性、给不了这种保证。

但这又引出个现实问题：让全世界把已有代码都重写成 BAML，那是痴人说梦。于是他们的解法是让 BAML 能嵌进任何你已经在用的语言里。

你可以直接在 Python 里调 BAML 写的 calculate 函数，完全是类型安全的；不仅有同步版，还白送你一个异步版。更野的是，你可以把 Python 的 lambda（匿名函数）、泛型、闭包（closures，能记住外部变量的函数）跨语言边界传给 BAML 那头，它能接住、能跑通 <button class="pd-ts" data-t="18:44" data-who="Vaibhav" data-en="But what if you went a little bit sillier? What if you started passing around lambdas? Across language boundaries." aria-label="回原文"></button>。

工程师完全不用操心这背后的桥是怎么搭的。更重要的是，这样一来，类型系统就成了唯一的、绝对不撒谎的真理中心，专门负责把住不变量的门 <button class="pd-ts" data-t="19:10" data-who="Vaibhav" data-en="It should just work so engineers don't have to go fuss with it. And more importantly, so when the agent does something, the type system never lies. The type system becomes the absolute center of truth that prevents invariants from entering your code base." aria-label="回原文"></button>。

## 本集带走

最后收个尾，这一集值得带走的是三层意思。第一，传统那套代码审查和流程标准化，在 AI 时代不一定是唯一答案——既然管不住工程师用什么工具、也读不完他们写的代码，不如换个思路：定一个极小的架构不变量，用工具和智能体互相监督来兜底，甚至主动用 slop 对抗 slop。

第二，要赢这场仗光靠管理不够，得重写工具地基。既然人不再逐行读代码，就要让代码可视化、让程序能自带执行跟踪、让函数变成立刻能跑的独立命令，甚至重做类型推断和错误处理，把信任问题从「靠人看」变成「靠编译器证明」。

第三，这也是最狠的一层：我们今天用的很多语言和系统，底层早就 baked-in 了 slop，越打补丁越碎；真正想以智能体的速度发布软件，可能得有人硬着头皮去重造 Git、重造数据库、甚至重造编程语言。Vaibhav 自己就选了最难的那条路——他在做 BAML。

<div class="pd-sec">全部金句 <span>8 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">为了击败劣质代码,我们必须成为劣质代码。</span>  
> *To defeat the slop, we must become the slop.*  
> <span class="qm">—— Vaibhav Gupta · [01:19]</span> ^q1

> <span class="qz">劣质代码就是任何你不阅读的代码。</span>  
> *Slop is just any code you don't read.*  
> <span class="qm">—— Vaibhav Gupta · [01:30]</span> ^q2

> <span class="qz">无论你们承不承认,这都是你们的代码库曾经拥有的最少量的劣质代码。</span>  
> *Whether any of you admit it or not, this is the least amount of slop that your code base will ever have.*  
> <span class="qm">—— Vaibhav Gupta · [01:32]</span> ^q3

> <span class="qz">代码可以是劣质的,写作不能。</span>  
> *Code can be slopped, writing cannot.*  
> <span class="qm">—— Vaibhav Gupta · [02:46]</span> ^q4

> <span class="qz">这就是烘烤进语言里的垃圾,不管你喜欢不喜欢。</span>  
> *This is just slop baked into the language, whether you like it or not.*  
> <span class="qm">—— Vaibhav Gupta · [08:14]</span> ^q5

> <span class="qz">代码是信任的问题。</span>  
> *Code is a matter of trust.*  
> <span class="qm">—— Vaibhav Gupta · [17:15]</span> ^q6

> <span class="qz">我们不盲目使用 LLM 代码的原因是我们还不信任它,因为它们底层的系统没有足够的刚性。</span>  
> *The reason that we don't use LLM code blindly is because we don't trust it yet, because the systems underneath them don't have enough rigidity.*  
> <span class="qm">—— Vaibhav Gupta · [17:17]</span> ^q7

> <span class="qz">更重要的是,所以当智能体做某事时,类型系统从不撒谎。</span>  
> *And more importantly, so when the agent does something, the type system never lies.*  
> <span class="qm">—— Vaibhav Gupta · [19:10]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-07-13-lennys-this-solo-builder-runs-247-local|GPT 5.6 测评：我为什么抛弃 Fable，把 Soul 当主力]]<span class="pd-rz">同公司:Codex · 同概念:智能体 (agent)、劣质代码 (slop)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Codex · 同概念:智能体 (agent)</span>
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|SaaS 不会死,PM 迎来黄金期:Dan Shipper 的 AI 工作预测]]<span class="pd-rz">同公司:Codex · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:智能体 (agent)、CI/CD</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同公司:Codex · 同概念:智能体 (agent)</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
    // 只搬搜索;阅读模式不并进顶栏(设计稿详情页顶栏只有分享+收藏,用户 2026-08-01 拍板摘掉)。
    ['.search'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
