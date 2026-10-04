---
title: Figma 第一个 MCP server 是怎么三个月做出来的
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "16:28"
type: episode
cover: "#64748b"
description: Figma 工程师 Jesse 讲述团队如何三个月内构建 Figma 首个 MCP server：序列化格式选型、eval 体系、绕过客户端缺陷的技巧与产品决策。
guests: ["[[Jesse Lumarie]]"]
companies: ["[[Figma]]"]
concepts: ["[[MCP 服务器]]", "[[智能体]]", "[[评估]]", "[[CodeConnect]]", "[[上下文窗口]]", "[[React Tailwind]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-28-talks-building-the-engine-while-flying-the-pla#post","headline":"Figma 第一个 MCP server 是怎么三个月做出来的","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-28-talks-building-the-engine-while-flying-the-pla","mainEntityOfPage":"https://talk.solomind.cc/2026-08-28-talks-building-the-engine-while-flying-the-pla","description":"Figma 工程师 Jesse 讲述团队如何三个月内构建 Figma 首个 MCP server：序列化格式选型、eval 体系、绕过客户端缺陷的技巧与产品决策。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jesse Lumarie"},{"@type":"Organization","name":"Figma"},{"@type":"Thing","name":"MCP 服务器 (MCP server)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"CodeConnect"},{"@type":"Thing","name":"上下文窗口 (context window)"},{"@type":"Thing","name":"React Tailwind"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Figma 第一个 MCP server 是怎么三个月做出来的","item":"https://talk.solomind.cc/2026-08-28-talks-building-the-engine-while-flying-the-pla"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Figma 第一个 MCP server 是怎么三个月做出来的</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Figma 第一个 MCP server 是怎么三个月做出来的

<div class="pd-byl"><b>Jesse Lumarie</b> · Figma 工程师 · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-28-talks-building-the-engine-while-flying-the-pla.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你今天真的把 Figma MCP 的输出复制下来，粘贴到一个简单的 HTTP server 里，它应该是像素级精确的。如果不是，请提一个 bug。</div><div class="a">— Jesse Lumarie <button class="pd-ts" data-t="04:18" data-who="Jesse Lumarie" data-en="If you actually copy the output of the Figma MCP today and you paste it into a simple HTTP server, it should be pixel perfect. And if it's not, file a bug." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jesse Lumarie]]
>
> **公司** [[Figma]]
>
> **概念** [[MCP 服务器]] · [[智能体]] · [[评估]] · [[CodeConnect]] · [[上下文窗口]] · [[React Tailwind]]

这一集是 [[Figma|Figma]] 工程师 Jesse 的技术演讲，讲的是他们如何在大约三个月内构建了 Figma 的第一个 [[MCP 服务器|MCP server]]——一种让 AI 编程工具直接读取设计稿上下文的通道，AI 工具不用做专门集成，接上这个 server 就能开工。Jesse 本来做增长项目，看到内部演示后很兴奋，觉得能让非设计师也用上 Figma，就每周抽一天自己搞起了插件版的 MCP server——一个公司其实并不存在的「20% 项目」。

后来他和其他人组成小团队正式推进。开场他就强调：后面我会频繁说「我」和「我们」，这背后是一个很大的团队 <button class="pd-ts" data-t="00:14" data-who="Jesse" data-en="All right, get started. Hi, I'm Jesse, and I've been a software engineer at Figma for about three years, and I'm going to talk to you about how we built Figma's first MCP server in about three months." aria-label="回原文"></button>。

> 【背景】MCP 指 Model Context Protocol，Anthropic 在 2024 年 11 月发布的规范，让 AI 智能体能调用外部工具和数据。

## 最大的选型：怎么把设计稿喂给智能体

Figma 的画布在内部是一张 C++ 场景图(scene graph)——由相连节点构成的图，类似 HTML DOM。要传给[[智能体|智能体]]，得先决定用什么格式表示它。

他们手里有三个选项：一是内部表示，类似 JSX/XML,抽象但保真度不高；二是 D2R,即 [[React Tailwind|React Tailwind]] 表示——因为 Figma 有 sites 产品，已有现成的场景图转 HTML 管线；三是直接给一张截图。他们押注 React Tailwind,直觉依据是：很多模型都在这类代码上做过 RL(强化学习训练)，效果应该会好 <button class="pd-ts" data-t="04:30" data-who="Jesse" data-en="And if it's not, file a bug. We had a hunch that this representation would be the best one because lots of the models were sort of RL'd on this React Tailwind type of code, and we had a suspicion that it would work really well." aria-label="回原文"></button>。结果今天的 MCP 输出粘贴进一个简单的 HTTP server 就能做到像素级精确——「如果不是，请提一个 bug」<button class="pd-ts" data-t="04:18" data-who="Jesse" data-en="And the reason why we had this is Figma has a sites product, and so we already had a way of basically converting the scene graph into HTML. If you actually copy the output of the Figma MCP today and you paste it into a simple HTTP server, it should be pixel perfect." aria-label="回原文"></button>。

图片的处理上踩过坑：最初把 Base64 数据直接嵌进代码，「直接把[[上下文窗口|上下文窗口]]撑爆了，方方面面都很糟。别那么做」<button class="pd-ts" data-t="05:21" data-who="Jesse" data-en="Our first attempt was just passing Base64 data into the code, and that was just a terrible idea. It just blew up the context window and was bad all around. Don't do that." aria-label="回原文"></button>。

改成把图片抽出来放到顶层，再附一张当前节点的截图。单靠图片转代码效果不好，但「把代码上下文加上图片一起用，智能体的输出反而更好了」<button class="pd-ts" data-t="05:30" data-who="Jesse" data-en="We'd also pass an image of the current node to the agent as well. While the image by itself did not do a good job of converting to code, having the code context plus the image actually had better agentic output." aria-label="回原文"></button>。

## eval:从手工 Excel 到每周几百次

怎么知道哪种表示「更好」？他们先做了很简单的 [[评估|eval]],定量看有没有用对变量、主题化、间距，定性看「好不好看」「信息不全时决策是否合理」。

第一次花了两小时人肉往 Excel 表格里填评分，「然后我们说，再也不干这种事了。太痛苦了。

能不手工做 eval 就别手工做」<button class="pd-ts" data-t="06:11" data-who="Jesse" data-en="It was awful. Don't do evals by hand if you can help it. We had a bunch of toy repos that we kind of created or kind of had folks create for us." aria-label="回原文"></button>。难点在于：开源代码很多，但附带 FIG 设计文件的开源项目几乎没有，所以只能自己造数据或做自动化。最终他们写了个 web 应用来跑 eval,现在每周自动运行几百次，工程师改了 prompt 就能用 LLM judge(用另一个大模型当裁判打分)自动评分，把不需要人的环节里的人移出了流程 <button class="pd-ts" data-t="06:55" data-who="Jesse" data-en="Engineers can kick this off and sort of grade against prompt changes with LLM judges. So we kind of remove the human from the loop where we don't need it. But having an agent translate a pixel-perfect version of code isn't enough." aria-label="回原文"></button>。

## 像素级完美只是半个故事：CodeConnect

企业不在乎像素级完美——如果代码没有用上经过实战检验、带可访问性和国际化支持的组件，那就不行。Figma 已有 [[CodeConnect|CodeConnect]],能把设计组件链接到代码库里的真实组件。

他们把它接进 MCP:同样是画一个按钮，不传一大坨 React Tailwind,而是通过 CodeConnect 传回一个指针，智能体就会用你代码库里真正的 button 组件。这既带来高保真实现，又省上下文窗口——「你就从这个庞大的 React Tailwind 东西变成了那个小的 React 组件，它只是写着『使用 button 组件』」<button class="pd-ts" data-t="08:30" data-who="Jesse" data-en="And by connecting the user's code to the design, we're able to pass back effectively what is a pointer, which allows the agent to use the code component leading to our higher fidelity implementation." aria-label="回原文"></button>。

## 客户端支持参差，只能自己 hack

MCP 规范在推进，但各客户端支持节奏差异很大：Claude Desktop 支持早但 Claude Code 功能不全，OpenAI 和 VS Code 很久才有支持，VS Code 到七月(July)才 GA，而且很多客户端只支持 tools。VS Code 最终支持了几乎所有规范，「真的就像是黄金客户端」<button class="pd-ts" data-t="02:26" data-who="Jesse" data-en="And in many cases, only tools were supported. VS Code was truly like the golden client. They eventually supported kind of all pieces of the spec, but it was hard to kind of understand what you were building towards because clients supported so many different things." aria-label="回原文"></button>——但很难搞清到底在为什么而构建。

规范里有但他们特别想要的两个特性：elicitation(server 向用户提问、拿回输入)和 sampling(server 借用客户端的 LLM 做小型查询)。他们想组合两者：问用户「要不要把你的代码库映射到 CodeConnect」,然后让智能体扫描代码找匹配，批量建立连接，输出更好、上下文更省。

可惜大多客户端没实现，sampling 即便在 VS Code 里也只能当通用智能体查询，不能针对代码库。于是他们用工具调用绕过：获取某个设计的上下文时，发现它是组件且未连接，就下发一个 prompt 模仿 elicitation 去问用户；用户同意后再下发 prompt 让智能体扫描代码库找匹配，模仿 sampling,最后批量传回建立 CodeConnect <button class="pd-ts" data-t="11:49" data-who="Jesse" data-en="When you got the context of a particular component, or sorry, of a particular design in Figma, if we noticed it was a component and that it wasn't code connected, we'd send down a prompt to ask the user if they'd want to map the unleaked component, kind of mimicking elicitation." aria-label="回原文"></button>。

「在我们的案例里，魔法在于结合这两个特性……最终用户获得了更好的体验」<button class="pd-ts" data-t="12:14" data-who="Jesse" data-en="It's a really great tool, and it's open source and great. But the magic, in our case, was combining these two features, because we could ask the user for permission, we can have the agent give us those suggestions, and we can map them, and in the end, the users got a better experience." aria-label="回原文"></button>。

另一个小技巧：规范里的 server instructions(给 LLM 的使用说明)写在规范里却没客户端实现，他们就把它塞进每次工具调用里。为了让输出适配不同代码库，他们还在工具调用里加了可选参数，让智能体回报用户用的语言和框架——「这并不完美。

智能体会撒谎。但它至少是一个信号」<button class="pd-ts" data-t="12:55" data-who="Jesse" data-en="This is imperfect. Agents lie. But it was at least a signal for us to understand, like, oh, this type of user, this felt user may not have had a good experience." aria-label="回原文"></button>,帮他们判断哪类用户可能体验不好。

## 架构：先本地，再远程

做 beta 时目标有四个：快速上线、安全标准尽可能高、尊重文件权限、尊重定价打包以免被滥用。2025 年 3 月规范引入 OAuth 后，他们面临选择：继续本地 server 还是转远程。

「我们搁置了」<button class="pd-ts" data-t="13:41" data-who="Jesse" data-en="And so after the spec changed and introduced OAuth in March 2025, we had to decide whether to keep our MCP server local or sort of switch to the new remote server using streamable HTTP and kind of like work on all the OAuth problems." aria-label="回原文"></button>。本地方案很快：Figma 桌面应用是 Electron 的，前端就是跑在里面的 Figma.com,通过 IPC 桥接到 Node 进程读写文件系统，再暴露一个 server-send events server,客户端就能本地直连。

企业也喜欢「数据不外发」。这是最快验证产品市场契合的路径。

内部上线时反馈「非常坦诚」，修完各种毛病后社区口碑转正。同年九月上线远程 server,十月两个 server 都 GA,随后加入读写能力。「这些事情综合起来，最终让它成为 Figma 有史以来增长最快的产品之一，这是我们在开始做这个时没有预料到的」<button class="pd-ts" data-t="15:10" data-who="Jesse" data-en="And then we started adding read and write capabilities. And kind of all these things combined ended up making for Figment one of the fastest growing products that they've ever had, which was not something we expected when we started working on this." aria-label="回原文"></button>。

去年底他还顺手孵化了 make in your local codebase——Figma 在 GitHub 和本地代码库上工作的智能体方案。他最后想让人带走两件事：第一，「MCP 规范才两岁，我们仍在摸索最佳做法」——这个领域太早了；第二，Figma 的文化是放手让工程师去构建、去发现下一步——「我并没有被正式指派到 MCP 项目上…

…但我最终帮助了它们被构建出来，只是因为我被给予了这样做的自由空间」<button class="pd-ts" data-t="16:10" data-who="Jesse" data-en="And then second, Figma's done a great job of letting engineers build and figure out what's next and letting them run with it. I wasn't staffed on MCP. I wasn't staffed on our make product." aria-label="回原文"></button>。

## 本集带走

- **选智能体「熟悉」的代码格式**：在抽象 XML 和 React Tailwind 之间，他们押了后者，因为模型在这种代码上做过强化学习——判断依据是模型的训练分布，不是格式本身的优雅程度。
- **图片别嵌 Base64**:会把上下文窗口撑爆；图片应抽出顶层、以截图形式作为代码上下文的补充，两者组合效果最好。
- **别手工做 eval**:第一次两小时填 Excel 就让他们彻底转向自动化，最终建成每周跑几百次、LLM judge 打分的 eval 流水线。
- **客户端不支持规范？用工具调用模仿**：elicitation 和 sampling 没实现，他们就靠下发 prompt 分两步模拟「先问用户、再让智能体扫描代码库」，同样跑通了 CodeConnect 映射工作流。
- **验证路径优先**：先做本地 Electron + Node 方案最快拿到用户反馈，远程和 OAuth 之后再说；企业客户反而喜欢数据不出本地的本地方案。
- **给智能体留自报口味的通道**：在工具调用里加可选参数让智能体回报语言和框架，虽然智能体会撒谎，但足够当作定位体验问题的信号。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">如果你今天真的把 Figma MCP 的输出复制下来，粘贴到一个简单的 HTTP server 里，它应该是像素级精确的。如果不是，请提一个 bug。</span>  
> *If you actually copy the output of the Figma MCP today and you paste it into a simple HTTP server, it should be pixel perfect. And if it's not, file a bug.*  
> <span class="qm">—— Jesse Lumarie · [04:18]</span> ^q1

> <span class="qz">我们最初的尝试是把 Base64 数据直接传进代码，那是个非常糟糕的主意。它直接把上下文窗口撑爆了，方方面面都很糟。别那么做。</span>  
> *Our first attempt was just passing Base64 data into the code, and that was just a terrible idea. It just blew up the context window and was bad all around. Don't do that.*  
> <span class="qm">—— Jesse Lumarie · [05:16]</span> ^q2

> <span class="qz">我们花了大概两个小时把一个 eval 的评分填进 Excel 表格。然后我们说，再也不干这种事了。太痛苦了。能不手工做 eval 就别手工做。</span>  
> *And we spent like two hours grading an eval into an Excel spreadsheet. And we said, we're never doing that again. It was awful. Don't do evals by hand if you can help it.*  
> <span class="qm">—— Jesse Lumarie · [06:04]</span> ^q3

> <span class="qz">这样我们在不需要人的环节就把人从流程里移除了。</span>  
> *So we kind of remove the human from the loop where we don't need it.*  
> <span class="qm">—— Jesse Lumarie · [06:55]</span> ^q4

> <span class="qz">企业不在乎它是不是像素级完美。如果它没有使用经过实战检验、可访问、并且国际化了的组件，那就不行。</span>  
> *An enterprise doesn't care if it's pixel-perfect. If it's not using, it's battle-tested, accessible, and internationalized components.*  
> <span class="qm">—— Jesse Lumarie · [07:10]</span> ^q5

> <span class="qz">右边的截图是 MCP Inspector,如果你在开发 MCP server 却没用过它，那你就是在亏待自己。</span>  
> *The screenshot on the right is the MCP Inspector, and if you haven't used it and you're developing an MCP server, you're doing yourself a disservice.*  
> <span class="qm">—— Jesse Lumarie · [12:04]</span> ^q6

> <span class="qz">我并没有被正式指派到 MCP 项目上，也没有被正式指派到我们的 make 产品上。但我最终帮助了它们被构建出来，只是因为我被给予了这样做的自由空间，并在此过程中学到了大量东西。</span>  
> *I wasn't staffed on MCP. I wasn't staffed on our make product. But I ended up helping them be built just because I was kind of giving the leeway to do so and learning a ton along the way.*  
> <span class="qm">—— Jesse Lumarie · [16:10]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd|别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具]]<span class="pd-rz">同公司:Figma、Cursor · 同概念:MCP server、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同公司:Figma、Cursor · 同概念:智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic · 同概念:eval、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-24-pg-srini-raghavan-podcast|Freshworks CPO：用 AI PDLC 把发布周期从六个月压到两周]]<span class="pd-rz">同公司:Figma、Cursor · 同概念:智能体 (agent)</span>
- [[2026-10-04-talks-dashboards-are-dead-sarah-simionescu-com|仪表盘已死：智能体才是新用户]]<span class="pd-rz">同公司:Claude · 同概念:上下文窗口 (context window)、智能体 (agent)</span>
- [[2025-12-02-talks-powering-the-ai-law-firm-with-harvey|Harvey 联合创始人 Gabe：产品就是模型，AI 律所的五年赌注]]<span class="pd-rz">同概念:eval、智能体 (agent)</span>

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
