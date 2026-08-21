---
title: "别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具"
podcast: Y Combinator Startup Podcast
date: 2026-08-07
source_url: undefined
duration: "55:51"
type: episode
cover: "#64748b"
image: "/covers/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd.jpg"
description: "Stephen Haney 带着他 12 人的团队打造了 Paper,一款直接以 HTML 和 CSS 为底层的设计工具。"
host: "[[Stephen Haney]]"
companies: ["[[Paper]]", "[[Cursor]]", "[[Claude Code]]", "[[Figma]]", "[[Conductor]]"]
concepts: ["[[智能体]]", "[[MCP 服务器]]", "[[代码即真相来源]]", "[[策展式设计]]", "[[HTML]]", "[[CSS]]", "[[Paper Snapshot]]", "[[着色器]]", "[[Paper Mono]]", "[[React]]"]
category: 产品方法
tags:
  - 产品方法
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd#post","headline":"别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd","mainEntityOfPage":"https://talk.solomind.cc/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd","description":"Stephen Haney 带着他 12 人的团队打造了 Paper,一款直接以 HTML 和 CSS 为底层的设计工具。","datePublished":"2026-08-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd.jpg","about":[{"@type":"Person","name":"Stephen Haney"},{"@type":"Organization","name":"Paper"},{"@type":"Organization","name":"Cursor"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Figma"},{"@type":"Organization","name":"Conductor"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP 服务器 (MCP server)"},{"@type":"Thing","name":"代码即真相来源 (source of truth)"},{"@type":"Thing","name":"策展式设计 (curation design process)"},{"@type":"Thing","name":"HTML"},{"@type":"Thing","name":"CSS"},{"@type":"Thing","name":"Paper Snapshot"},{"@type":"Thing","name":"着色器 (shader)"},{"@type":"Thing","name":"Paper Mono"},{"@type":"Thing","name":"React"}],"articleSection":"产品方法"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"产品方法","item":"https://talk.solomind.cc/tags/产品方法"},{"@type":"ListItem","position":3,"name":"别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具","item":"https://talk.solomind.cc/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具

<div class="pd-byl"><b>Stephen Haney</b> · Paper 的创始人 · 2026-08-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">结果证明,如果你为人类构建了很棒的交接,你同时也为智能体构建了很棒的交接,因为智能体理解 HTML 和 CSS,而且这些在它们的训练数据中。</div><div class="a">— Stephen Haney <button class="pd-ts" data-t="03:35" data-who="Stephen Haney" data-en="It turns out if you build a great handoff for humans, you've also built a great handoff for agents because agents understand HTML and CSS and it's in their training data." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Stephen Haney]]
>
> **公司** [[Paper]] · [[Cursor]] · [[Claude Code]] · [[Figma]] · [[Conductor]]
>
> **概念** [[智能体]] · [[MCP 服务器]] · [[代码即真相来源]] · [[策展式设计]] · [[HTML]] · [[CSS]] · [[Paper Snapshot]] · [[着色器]] · [[Paper Mono]] · [[React]]

你一眼就能认出那种「AI 味」的网站:超粗体的大标题、铺天盖地的紫色渐变、为了凑数堆砌的卡片和图标——它们看起来像是用 vibe coding(全凭感觉用自然语言让 AI 写代码的做法)随手糊出来的。说这话的人是 [[Stephen Haney|Stephen Haney]],[[Paper|Paper]] 的创始人。

在他看来,如果你直接把模型吐出来的设计上线,你的产品就会沦为百万个平庸项目中的一个。过去 10 年、20 年里所有伟大的公司,几乎都有着卓越的设计 <button class="pd-ts" data-t="00:19" data-who="Stephen Haney" data-en="And so I think design is this great differentiator. And if you look at every great company of the last 10, 20 years, basically all of them have exceptional design." aria-label="回原文"></button>。

这一集 YC 的对谈里,身为连续创业者的 Stephen 讲了三件事:Paper 作为一款「[[智能体|智能体]]原生(agent-native)」设计工具到底有什么不一样,为什么它敢用 [[HTML|HTML]] 和 [[CSS|CSS]] 直接当渲染引擎,又是怎么跟 [[Cursor|Cursor]]、[[Claude Code|Claude Code]] 这些编程智能体无缝打通,让设计师在画布上画完就能直接变成代码、甚至抓取线上网站做秒级改版的。中后段,他拿着 Paper 现场改造了几个带有浓重「AI 味」的真实网站,并分享了他总结的「如何把设计从 AI 手里抢回来」的排版心法。最后他回答了一个直击灵魂的问题:既然模型越来越有品味了,设计师到底会不会被取代?

**为什么不用自定义渲染引擎,而是直接拿 HTML 当画布**

想要理解 Paper,得先从「智能体原生」这个概念说起。历史上,像 [[Figma|Figma]] 或 Sketch(都是知名的视觉设计工具)这类软件,底层都用的是各自的自定义渲染引擎。

这对人类设计师来说体验很好,因为可以不受约束地自由画图;但对 AI 智能体来说,这就成了一堵高墙——它们很难理解那种专有的数据格式,结果就是生成同样一张图,要消耗多得多的 token(大语言模型处理信息的最小计费单位),速度更慢,准确率也更低 <button class="pd-ts" data-t="01:20" data-who="Stephen Haney" data-en="And that makes it very easy for agents to use because they understand HTML and CSS really well. And historically, a lot of design tools have custom rendering engines." aria-label="回原文"></button>。Paper 的做法截然不同:它直接用最基础的 HTML 和 CSS 作为实际的渲染引擎 <button class="pd-ts" data-t="01:10" data-who="Stephen Haney" data-en="It's an agent-native design tool. And what that means is we use HTML and CSS as the actual rendering engine. And that makes it very easy for agents to use because they understand HTML and CSS really well." aria-label="回原文"></button>。

这意味着当设计师在画布上操作时,底层生成的其实就是真实的网页代码。当你让一个 AI 智能体去处理一个 Paper 文件时,它实际上只是在读取 CSS,而智能体对 CSS 简直是了如指掌 <button class="pd-ts" data-t="01:43" data-who="Stephen Haney" data-en="Yeah, it's crazy to think you're only 12 people because I hear about you all the time from everybody who's using you, and especially from so many founders that are just picking the design tool that they want to build and live in all the time, and doing that from the ground floor, being AI-native themselves." aria-label="回原文"></button>。这层「不翻译、直读」的设定,不仅省下了海量的 token,还大大减少了 AI 在格式转换中产生的「幻觉」。

除了画图,Paper 还干了两件很刷存在感的事。一是做了一个完全开源的[[着色器|着色器]]库(用 WebGL 技术渲染的视觉效果动画,常用于做高级感的背景或加载状态)<button class="pd-ts" data-t="05:26" data-who="Stephen Haney" data-en="So because we are using basically the browser to render, we can also render shaders really easily. And shaders are basically WebGL animations that we build. This is called Paper Shaders." aria-label="回原文"></button>,让设计师不用懂代码就能调出带有极强复古感或未来感的动态视觉。

YC 的设计负责人甚至用它给被录取的创业者做了带名字动画的录取通知,极具传播度 <button class="pd-ts" data-t="07:51" data-who="主持人" data-en="We've used it for, we have startup school. And so Ev, who leads design here at YC, has actually created custom animated shaders with the YC branding, with people's names on them, tickets that are, you know, you can play with and animate when people get accepted and send it to them." aria-label="回原文"></button>。二是他们正在发布一款名为 [[Paper Mono|Paper Mono]] 的等宽字体,因为他们发现市面上大多数等宽字体都是给程序员在终端里看代码用的,缺乏品牌感,他们想要一款既能写代码又能做品牌营销的全能字体 <button class="pd-ts" data-t="10:36" data-who="Stephen Haney" data-en="It works really well. Similarly, we develop a font. Paper Mono is a new font that we're launching I'm really proud of." aria-label="回原文"></button>。有趣的是,Stephen 把做开源着色器库和造字体当成了公司的「营销预算」——与其花钱买广告,不如给设计社区做点真正有用的好东西 <button class="pd-ts" data-t="10:20" data-who="Stephen Haney" data-en="And so I think the product design is very interesting, but we'll always have the brand design and the graphics too. To be honest, the way we think about the shaders is this is our marketing budget." aria-label="回原文"></button>。

**工具变了,人怎么办?这正是下一个话题:打通智能体栈**

说完了 Paper 为什么长这样,接下来是它怎么跟当下的 AI 编程工具配合的。2025 年底随着 Claude Code(一款可以直接在终端里写代码的 AI 智能体)的爆火,Stephen 发现原本离终端很远的设计师,竟然也开始学起了 GitHub(代码托管平台),跟开发者抢着用命令行 <button class="pd-ts" data-t="12:27" data-who="Stephen Haney" data-en="We already saw some people using it. And then in, what was this, last December of 2025, the Claude Code explosion happened. And I didn't think designers were going to be in terminals." aria-label="回原文"></button>。敏锐捕捉到这个趋势后,Paper 迅速推出了桌面版,并内置了一个 [[MCP 服务器|MCP 服务器]](一种让大语言模型和外部软件互通指令的标准接口)。

有了这个接口,Paper 就能和 Cursor(主打 AI 辅助编程的代码编辑器)、Claude Code 以及 [[Conductor|Conductor]](一款整合了代码编写和合并发布功能的应用)等工具联动,组成了一套全新的「智能体工作栈」<button class="pd-ts" data-t="12:50" data-who="Stephen Haney" data-en="Let's be part of this explosion. The way we see it is kind of the new agent stack. And what I mean by that is you'll see I have Cursor." aria-label="回原文"></button>。在这个新栈里,Paper 成了人类和 AI 沟通的「可视化界面」:有时候用自然语言给 AI 下指令并不精准,直接在画布上拖拽、绘画反而快得多 <button class="pd-ts" data-t="03:50" data-who="Stephen Haney" data-en="And so when you ask an agent to work with a paper file, it's literally just reading the CSS out and agents know exactly what to do with it. We try to basically extend the agent with a visual interface." aria-label="回原文"></button>。

主持人敏锐地指出,过去设计到开发的交接一直有个致命痛点:设计师画完交给开发者,开发写出来的东西往往变了味,或者代码后来更新了,设计稿却没同步,最后根本搞不清哪个才是唯一的真相来源。而在这种新工作流下,代码本身就是唯一的真相来源,设计工具不再是孤立的一座岛,而是彻底融入了整个开发堆栈 <button class="pd-ts" data-t="15:57" data-who="主持人" data-en="And so it's what is the source of truth? And what's really nice about this is the code is the source of truth and both systems know how to work on that same code base." aria-label="回原文"></button>。

更夸张的是,有的人甚至会在睡前给画布留下一堆意见,然后启动智能体让它跑一整夜,生成几百个排版变体。第二天早上醒来,人要做的只是像策展人一样,挑出满意的方案组合起来 <button class="pd-ts" data-t="21:11" data-who="主持人" data-en="Like they're doing a lot more work than I thought they were going to be doing. And it's so cool. And now they come in and they curate, you know, they come in, oh, that's a good idea." aria-label="回原文"></button>。一种全新的「[[策展式设计|策展式设计]]流程」正在诞生。

**光有空壳不行,核心还是看怎么落地实操:识别并清除 AI 的审美破绽**

了解了这套工作流,接下来的演示就非常硬核了。Stephen 直接拉出几个用户提交的真实网站,现场诊断并改造它们。

第一个是一个叫 Legion Health 的在线精神医疗网站。Stephen 一针见血:我甚至不敢信任这个品牌,因为它的对齐和排版太缺乏打磨,而做医疗首先得建立信任 <button class="pd-ts" data-t="17:31" data-who="Stephen Haney" data-en="I don't know, when I first look at this, I see the little pill up there at the top and it makes me think this was just like a vibe-coded thing because it matches so much of the style that we see that the agents are just spitting out." aria-label="回原文"></button>。

更妙的是,他还顺手展示了一个叫 [[Paper Snapshot|Paper Snapshot]] 的功能:可以直接把线上的实时网页抓取进画布,变成可以随意编辑的图层,而不是一张死板的截图 <button class="pd-ts" data-t="18:40" data-who="Stephen Haney" data-en="I'll show you Paper Snapshot. Paper Snapshot is a way to grab content from your live site. This replaces taking screenshots of things." aria-label="回原文"></button>。他当场让接入的智能体(GPT 5.5 模型)瞬间生成了三个视觉冲击力更强的排版变体供挑选。

当被问到到底该怎么识别和摆脱那股「AI 生成的廉价感」时,Stephen 掏出了他压箱底的排版心法,总结下来极其反直觉:第一,模型特别喜欢滥用加粗,把字重往回拉到尽可能细,看起来反而更有高级感;第二,模型喜欢在一张图里用七八种字号,把它强行精简到三种以内,版面立刻清爽;第三,警惕毫无意义的装饰元素,比如满屏的卡片、为了占位而加的渐变色和小图标 <button class="pd-ts" data-t="24:47" data-who="Stephen Haney" data-en="I have some very specific rules I can share with you. One is that models love bold. They love bold styles." aria-label="回原文"></button>。他甚至总结了 AI 设计的「天启四骑士」:毫无必要的浅色/深色模式切换、全大写带字间距的超小标题、带多余小图标的徽章,以及被滥用的紫色渐变——遇到这些东西,最正确的做法就是直接删掉 <button class="pd-ts" data-t="34:57" data-who="主持人" data-en="Totally, totally. I think a lot of design is deleting. You know, it's kind of nice to overbuild and then pull it back." aria-label="回原文"></button>。

第二个案例是一个面向建筑重工行业的运营网站 Cytex,Stephen 现场指示 Cursor 里的 Composer 2.5 模型(一款在精确度上表现极佳的模型):「清理这个框架,最多用三种字号,而且不准加粗」。短短几秒后,改完的版面看起来确实更严肃、更值得托付重型机械业务了 <button class="pd-ts" data-t="32:00" data-who="Stephen Haney" data-en="In real life, I might have just done this by hand because it'd be faster. But if you had an entire site that you wanted to go through, for instance, using the agent is really useful." aria-label="回原文"></button>。

第三个是个跨境支付的网站 Mereda,面对一个热情过头但略显杂乱的支付页面,Stephen 展示了如何用 AI 先建立一个专业、可信的基础底子,然后再由人类设计师手动介入,把原本那种狂野的国际化活力感一点点拉回来。这正是 Paper 的核心价值所在:它始终是一个人类主导的设计工具,你既能让 AI 帮你加速,也能随时伸手进去精修每一个细节 <button class="pd-ts" data-t="38:40" data-who="Stephen Haney" data-en="So before... I ran this one through paper real quick before we came on. All I asked it was actually to pull back and just create a foundation for this site that is a little more professional and a little more trustworthy." aria-label="回原文"></button>。

**既然模型越来越聪明,设计师到底会不会失业?**

> 【背景】对谈中 Stephen 多次提到 Figma 和 Sketch,这两款是目前行业内最主流的传统视觉设计软件,底层均采用自定义渲染引擎。

聊完实操,话题自然转向了未来。面对主持人「智能体到底能不能学会人类的品味」的追问,Stephen 的回答显得相当保守。

他承认,像 Fable 这样的新一代模型,已经在一些细微的战术层面(比如字母间距)变得更有深思熟虑的感觉了 <button class="pd-ts" data-t="41:22" data-who="Stephen Haney" data-en="The little tactical things will get better over time. And I think what I'm encouraged by is a model like Fable seems much more thoughtful. It feels like it actually put some thought into its decisions compared to previous models." aria-label="回原文"></button>。但他坚信模型无法替代人类,因为设计的本质不仅仅是产出最终的像素,而是在一个组织内部做决策、平衡各方利益相关者、深入探索问题空间 <button class="pd-ts" data-t="41:37" data-who="Stephen Haney" data-en="And so I think that is a piece of design, is that thoughtfulness. Now, do I ever think it's going to replace a human making these design decisions? No, no way." aria-label="回原文"></button>。他预测,模型在战术上会越来越强,但这反而凸显了人类在制定更高阶产品策略时的不可替代性。

有趣的是,尽管做出了这样一款深度捆绑 AI 的工具,Paper 内部的工程实践却显得有些「古典」。他们团队只有 12 个人,极度重视代码质量——每一行代码仍然需要多个人类工程师亲自阅读审查 <button class="pd-ts" data-t="44:08" data-who="Stephen Haney" data-en="And we don't have, we use agents for coding quite a bit, but we still read our code. We read all of our code, every single line. Every line?" aria-label="回原文"></button>。

原因很简单:设计工具对性能(他们需要做到 120 帧每秒的流畅度)和多维度系统的精度要求极高,目前的 AI 编码智能体还达不到这种严苛标准 <button class="pd-ts" data-t="44:27" data-who="Stephen Haney" data-en="And so we just have to be really careful. And we want to make sure our experience, you know, designers need 120 FPS. It needs to be fast." aria-label="回原文"></button>。他们把这种模式称为「用智能体加速精英小队」,而不是盲目追求不用人类看代码的极致速度。而在其他容错率高的领域(比如营销网站),他们则放手让品牌设计师用 AI 搞定了全部代码 <button class="pd-ts" data-t="45:49" data-who="Stephen Haney" data-en="So I think that's really, really cool. And so I think a lot of times it shows up more not in our core product, where we're actually pretty human-based still for precision reasons, but in all the other stuff, all the videos we need to make, all the marketing site, all of that other stuff where we can have agents help us help people go faster." aria-label="回原文"></button>。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,别被工具的格式困住。

与其让 AI 去翻译那些专有的设计文件格式,不如直接用 HTML 和 CSS 当画布,这样既省钱又准确,还能让设计工具彻底打通编程工作流,让代码成为唯一的真相来源。第二,想摆脱 AI 生成的廉价感,秘诀就是做减法。

把字重减细、把字号精简到三种以内、果断删掉紫色渐变和满屏毫无意义的装饰卡片,高级感往往就藏在克制里。第三,即使模型越来越聪明,设计师也不会失业。

因为设计的核心从来不是画那几个像素,而是在组织内部做决策、定义产品价值。与其追求让 AI 全自动写代码,不如把人省下来去做这些真正需要品味和判断的事,让精英小队配上 AI 的速度,去打磨真正卓越的产品。

<div class="pd-sec">全部金句 <span>6 条</span></div>

> <span class="qz">结果证明,如果你为人类构建了很棒的交接,你同时也为智能体构建了很棒的交接,因为智能体理解 HTML 和 CSS,而且这些在它们的训练数据中。</span>  
> *It turns out if you build a great handoff for humans, you've also built a great handoff for agents because agents understand HTML and CSS and it's in their training data.*  
> <span class="qm">—— Stephen Haney · [03:35]</span> ^q1

> <span class="qz">说实话,我们对着色器的思考方式是我们的营销预算。</span>  
> *To be honest, the way we think about the shaders is this is our marketing budget.*  
> <span class="qm">—— Stephen Haney · [10:20]</span> ^q2

> <span class="qz">与其购买广告,不如让我们构建一种字体。</span>  
> *Instead of buying an ad, let's build a font.*  
> <span class="qm">—— Stephen Haney · [10:55]</span> ^q3

> <span class="qz">而且我认为如果你向世界展示的形象很平庸,很难建立一家伟大的公司。</span>  
> *And I think it's hard to build a great company if you have a mediocre presentation to the world.*  
> <span class="qm">—— Stephen Haney · [37:27]</span> ^q4

> <span class="qz">设计的角色是你最终看到了像素,但设计在组织中的角色是决策、利益相关者、引入需求和问题空间。</span>  
> *The role of design is you see the pixels at the end, but the role of design in an org is decisions and stakeholders and bringing in requirements and problem space.*  
> <span class="qm">—— Stephen Haney · [41:51]</span> ^q5

> <span class="qz">与你的市场保持价值一致,他们会原谅你的产品缺失的很多东西。</span>  
> *Being values aligned with your market, they will forgive so much about your product missing things.*  
> <span class="qm">—— Stephen Haney · [47:53]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同公司:Claude Code、Cursor · 同概念:智能体 (agent)</span>
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|别管金句，去捣鼓东西：Notion 产品负责人谈 AI 时代的产品与品味]]<span class="pd-rz">同公司:Figma、GitHub · 同概念:智能体 (agent)</span>
- [[2026-03-01-lennys-the-design-process-is-dead|AI 时代的设计大洗牌:对话 Anthropic 设计负责人 Jenny Wen]]<span class="pd-rz">同公司:Claude Code、Figma</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同公司:Claude Code、Cursor · 同概念:智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Cursor、Figma · 同概念:智能体 (agent)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同公司:Claude Code、Cursor · 同概念:智能体 (agent)</span>

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
