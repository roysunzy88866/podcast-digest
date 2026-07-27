---
title: 用 AI 武装技术型 PM：Codex 工作流全解析
podcast: Product Growth Podcast
date: 2026-07-09
source_url: https://www.news.aakashg.com/p/pm-guide-ai-design
duration: "74:34"
type: episode
cover: "#64748b"
image: "/covers/2026-07-09-pg-pm-guide-ai-design.jpg"
description: 设计师 Meng To 展示如何用 Codex 搭建插件与技能生态，转型为掌控智能体舰队的超级个体。
host: "[[Meng To]]"
cohosts: ["[[Akash]]"]
companies: ["[[Cursor]]", "[[obsidian]]", "[[hey gen]]", "[[Figma]]"]
concepts: ["[[Codex]]", "[[智能体]]", "[[上下文]]", "[[护栏]]", "[[playwright]]", "[[计划模式]]", "[[数字分身]]"]
category: AI 编程
tags:
  - AI 编程
  - 职业与个人成长
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/">跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>用 AI 武装技术型 PM：Codex 工作流全解析</span></a><div class="pd-acts"></div></div></header></div>

# 用 AI 武装技术型 PM：Codex 工作流全解析

<div class="pd-byl"><b>Meng To</b> · 设计师</div>

<div class="pd-mt">2026-07-09 · Product Growth Podcast · 74:34 · <a class="mcat" href="./tags/AI%20%E7%BC%96%E7%A8%8B">AI 编程</a> · <a class="mcat" href="./tags/%E8%81%8C%E4%B8%9A%E4%B8%8E%E4%B8%AA%E4%BA%BA%E6%88%90%E9%95%BF">职业与个人成长</a></div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-09-pg-pm-guide-ai-design.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">因为有了 AI，你不再需要害怕创办公司了，因为 AI 可以为你处理所有的文书工作，为你处理所有的会计工作，所有那些无聊的事情。</div><div class="a">Meng To · 68:39</div></div>

> [!info] 关联
> **主持**:[[Meng To]]
>
> **联合主持**:[[Akash]]
>
> **涉及公司**:[[Cursor]] · [[obsidian]] · [[hey gen]] · [[Figma]]
>
> **概念**:[[Codex]] · [[智能体]] · [[上下文]] · [[护栏]] · [[playwright]] · [[计划模式]] · [[数字分身]]
>
> **来源**:[Product Growth Podcast](https://www.news.aakashg.com/p/pm-guide-ai-design)

<div class="pd-tldr"><b>一句话</b>设计师 Meng To 展示如何用 Codex 搭建插件与技能生态，转型为掌控智能体舰队的超级个体。</div>

当行业里充斥着「产品经理（PM）要被 AI 取代」的焦虑时，设计师 [[Meng To|Meng To]] 给出了一个极为落地的反直觉判断：被淘汰的只会是非技术型 PM，而掌握 AI 工具的技术型 PM 将迎来效能的十倍放大。Meng To 是设计教育领域多年的内容创作者，也是多个 SaaS 产品的独立开发者。本集他深度拆解了自己日常使用的 AI 工作流——从选对主力工具、配置本地知识库、搭建多[[智能体|智能体]]并发，到最终转型为掌控全局的超级个体。全文脉络分为四个部分：先看他的主力工具栈，再看如何组织本地项目，接着是生成与设计的高级实操，最后落到人究竟该如何自我定位。

## 告别单一编辑器：为什么主力工具是 Codex

一切工作流的起点，是选对那个能连接一切的超级枢纽。Meng To 坦言，自己在 OpenAI 推出 Codex 之前是 Cursor（一款带有 AI 智能体的代码编辑器）的重度用户，但 Codex 的出现彻底改变了他的思维模式——它不仅是写代码的工具，更是启动项目和管理[[上下文|上下文]]的中枢 <button class="pd-ts" data-t="03:10" data-who="Meng To" data-en="amazing i'm not saying that as as a bad thing i used to be a I was a huge cursor user before OpenAI came up with Codex which basically changed the whole mindset around," aria-label="回原文"></button>。他将 Codex 形容为「加了类固醇的 ChatGPT（一种增强版的聊天机器人）」，既能聊天，又能创建幻灯片、网站和移动应用 <button class="pd-ts" data-t="04:09" data-who="Meng To" data-en="all right so obviously i'm going to be covering codex which for those who don't know is basically the chat gpt but 10x like one story or steroids basically so you can not just chat with an ai" aria-label="回原文"></button>。

**工具变了，人怎么用好它？这就需要一套辅助的周边工具链。** 他强调「上下文为王」，并推荐了几个必备工具：首先是一个 AI 浏览器，它包含一个「提问」按钮，还能让 AI 智能体直接接管并操作你的电脑 <button class="pd-ts" data-t="04:42" data-who="Meng To" data-en="and basically what is really cool about this is for me context is king so anything that you have that is context is super useful so you're browsing something you want" aria-label="回原文"></button>；其次是 Whisper Flow（一款语音输入工具），它不仅识别准确率高，还能处理生僻词，对需要大量输入上下文的 PM 非常友好 <button class="pd-ts" data-t="05:06" data-who="Meng To" data-en="of you want to use your voice and with swift flow is the fastest one it has the best accuracy and you want to deal with dictionaries words that are hard to use" aria-label="回原文"></button>；最后是 Obsidian（一款本地文档管理软件），因为像 Codex 这样的工具会在本地生成大量文档，你需要 Obsidian 来把这些文件夹组织成一个有条理的「知识库」 <button class="pd-ts" data-t="08:46" data-who="Meng To" data-en="i've never shown this to anyone outside of our team but this is my codex my real codex is not a demo one and these are all my projects so for example i have content and this is a project and all" aria-label="回原文"></button>。

Meng To 甚至大量使用 AI 虚拟形象（Avatar）来录制视频。他解释说，当前的营销已经全面转向 UGC（用户生成内容），人们厌倦了公司的官方套话，更渴望看到真实个人的分享。通过使用 HeyGen（一种专门用于生成[[数字分身|数字分身]]的 AI 模型）生成自己的克隆体和声音，再配合屏幕录制，你就不必每次录视频前都精心打扮，依然能向团队或受众传递极具人情味的信息 <button class="pd-ts" data-t="12:41" data-who="Meng To" data-en="for example is a really good ai model for that they you know they can generate a clone of yourself including your voice and then you can just use that and type the stuff that you want your AI avatar to say" aria-label="回原文"></button>。

## 从零起步：如何组织你的本地项目与技能库

说完了周边工具为什么重要，接下来是他具体是怎么把这些工具串起来跑通一个项目的。

Meng To 展示了他的真实工作区，并强调一个核心理念：**一切数据都必须是本地的**。因为只有当所有文档、代码和上下文都存在于你的电脑上时，AI 才能获得最大的权限和最强的能力，无需依赖互联网或私人数据库 <button class="pd-ts" data-t="10:31" data-who="Meng To" data-en="content which by the way are basically just folders and again this is the superpower that kind of open claw introduced to the world is that everything has to be local everything has to exist on your computer first and the rest" aria-label="回原文"></button>。

他建议建立清晰的本地文件夹结构：在「下载」目录下建一个总的项目文件夹，然后在里面为每一个项目、每一条业务线（例如内容创作、财务发票、客户支持等）建立专属的子文件夹 <button class="pd-ts" data-t="27:49" data-who="Meng To" data-en="your downloads folder right everyone knows what their downloads folders are and then from the downloads folder you're gonna create a project a folder called projects and" aria-label="回原文"></button>。这种做法不仅是为了整洁，更是为了精准控制 AI 的上下文范围——如果给 AI 喂太多无关的文件，就会白白消耗大量的 Token（大模型处理信息的计量单位） <button class="pd-ts" data-t="29:21" data-who="Meng To" data-en="so that the ai has context because you don't want to give ai too much context otherwise it's going to cost too much tokens that's why you want to have something like this" aria-label="回原文"></button>。

为了让 AI 更懂你的具体需求，Codex 提供了「插件」和「技能」两种扩展方式。插件类似于 Figma 的插件，背后有完整的团队做深度集成（比如 Gmail、Slack 或 Discord 插件） <button class="pd-ts" data-t="14:00" data-who="Meng To" data-en="the skill is just how deeply integrated it is usually a plugin is more like it has you know the whole backend stuff and the whole integration more like a figma plugin or photoshop plugin" aria-label="回原文"></button>。其中最重要的是「computer use（计算机使用）」功能，它能让 AI 直接操作你的命令行，甚至像人类一样浏览网页、点击按钮、测试流程并修复 bug <button class="pd-ts" data-t="15:10" data-who="Meng To" data-en="iagents and it does all of these tasks but then you have computer use which works on everything right? It doesn't require someone to build something. It's going to just use your" aria-label="回原文"></button>。

> 【背景】这段访谈中也涉及了对 MCP（Model Context Protocol，模型上下文协议）的讨论，它是一种让大模型更好地与外部工具（如 Figma）或 API 进行通信的标准，能大幅拓展 AI 的执行边界。

而「技能」则更轻量，任何人都可以自己编写或从网上下载，用来指导 AI 在生成前端设计、文案或特定代码（如 SwiftUI）时的行为准则。例如，他会下载专门的「品味技能」来提升 AI 的审美，或者下载关于 CSS（层叠样式表）和动画的技能包来优化网页落地页 <button class="pd-ts" data-t="21:09" data-who="Meng To" data-en="front-end development and design skills and css and tailwind skills so uh other skills that i would recommend if you're building landing pages for like you look at libraries like jsap for animations or um" aria-label="回原文"></button>。

## 多智能体并发：像产品经理一样指挥你的 AI 舰队

工具搭好了，真正的生产力飞跃来自于并发处理和设计落地。Meng To 认为，传统的 Figma 或 VS Code（一款代码编辑器）将人限制在了单一任务和单一光标上，但如今的 AI 时代，你拥有一支「智能体大军」 <button class="pd-ts" data-t="46:53" data-who="Meng To" data-en="a time you have one cursor what you need to understand nowadays is that you don't have to do that anymore you have an army of agents so when I say an agent like this is an agent this is an agent this is an agent" aria-label="回原文"></button>。

他演示了从零生成应用的过程：创建项目后，第一步永远不是直接写代码，而是使用「[[计划模式|计划模式]]」，让 AI 先产出一份详细的架构和功能清单供你审批 <button class="pd-ts" data-t="30:02" data-who="Meng To" data-en="to do is the plan mode so you're going to start with i want to plan this so you know obviously it also took what i said but you always want to start with i want to plan this and the reason why is" aria-label="回原文"></button>。在构建中，如果你遇到不懂的地方，随时可以提问。例如，当 AI 提出使用外部截图服务时，Meng To 凭借自己的工程经验，反问它使用 Playwright（一种自动化测试工具）是否会更好，从而引导 AI 做出更优的技术选型 <button class="pd-ts" data-t="41:23" data-who="Meng To" data-en="so here it says screenshot service like browserless and screenshot one do you think that playwright would be a better technology for taking screenshots right so this depends on your knowledge i know that playwright is one of the best ways" aria-label="回原文"></button>。

在界面生成方面，他展示了如何基于真实数据快速生成幻灯片，并利用「品味技能」让产出的排版和字体达到资深设计师的水平 <button class="pd-ts" data-t="45:10" data-who="Meng To" data-en="we have these beautiful slides i'm also using the taste skill that gives me better design skills and better fonts and typography that looks like it was done by a senior designer now that being said" aria-label="回原文"></button>。虽然他提到像 GPT 5.5（相较于早期的 GPT 5.3 版本）这类更强的底层模型能以更快的速度（如 18 秒内）生成内容，但他也提醒：AI 仍会在排版时犯「塞入过多信息」的错误 <button class="pd-ts" data-t="45:23" data-who="Meng To" data-en="of course it's going to make mistakes so for example sometimes it likes to cram a lot of information a lot of lines and it doesn't it's not smart enough to know that it's not able to cram all" aria-label="回原文"></button>。这正是需要人类介入的地方。

人类的高效指令从何而来？他给出了三个层级的输入法：最慢的是打字，其次是使用 Whisper Flow 语音输入，而最高效的则是「截图」。因为「一图胜千言」，通过一个快捷键（Command+Command）截取当前浏览器的画面传给 AI，能提供最精准且即时的视觉上下文 <button class="pd-ts" data-t="42:45" data-who="Meng To" data-en="a screenshot you have this new you know you select for example the browser and then you have this new shortcut which is like command command and then it takes the screenshot automatically of that browser that you had focus and look at" aria-label="回原文"></button>。

## 创业终局：用那最后的 8% 人类品味构建护城河

当 AI 能包办代码、设计和测试时，人的价值究竟在哪？这正是访谈最后落到的核心议题。

近期包括 Meta 和 Oracle 等大公司裁掉了许多 PM，市场似乎在释放悲观信号。但 Meng To 坚定地澄清：被裁掉的是那些在公司里扮演官僚和政客角色的非技术型 PM；真正懂技术、懂工作流的技术型 PM 是被留下来的 <button class="pd-ts" data-t="66:20" data-who="Meng To" data-en="that pms are getting fired i think it's important to clarify that it's the the non-technical pms that are getting fired the technical pms are actually staying at those companies uh and and this gives us a very important message which is that" aria-label="回原文"></button>。这里的「技术」并不是指你必须手写每一行代码（Meng To 自己在过去六个月就没写过一行代码），而是指你要懂所有的技术行话、清楚什么是最好的 AI 模型，并掌握整个工作流的设计 <button class="pd-ts" data-t="66:59" data-who="Meng To" data-en="because ai can kind of juggle around that um your job is basically to understand all of the jargon so what is the best ai model you know when someone who's more technical than you who's working on those projects" aria-label="回原文"></button>。

> 【背景】Meta 指全球社交巨头 Facebook 的母公司，Oracle（甲骨文）则是全球大型企业级软件公司。大厂的人员优化动作往往被行业视为技术工种需求变化的晴雨表。

他认为，无论你是转型到更技术的角色，还是直接走向独立创业，最终的公式都是：**你必须成为某个领域的专家，然后部署一支智能体舰队去为你干活，而你的全部精力应该投入到那最后的 8% 人类品味和编排任务中** <button class="pd-ts" data-t="71:31" data-who="Meng To" data-en="and that formula is you being the best at your job and you deploying your fleet of agents and you utilizing that last eight percent of a human taste to orchestrate all the tasks and make sure that it's like" aria-label="回原文"></button>。

这 8% 具体指什么？包括质量保证、确保计划合理，以及作为人类去统筹编排一切。他用了一个绝佳的类比：AI 确实在不断提高质量的基准线（地板变高了），但质量的最高上限也在被无限拉高。就像 Airbnb（爱彼迎，一家全球知名的房屋短租平台）的 CEO 所说的「要追求十一星级的体验」，你的工作是永远把底线维持在五星以上，同时构思如何达到未来的十一星 <button class="pd-ts" data-t="72:00" data-who="Meng To" data-en="the ceiling of quality is also getting higher so your job is always to get to if this is a five star which is by the way is a podcast I listened from the CEO of Airbnb you want to get to 11 star but at the minimum should be the five star and" aria-label="回原文"></button>。

归根结底，万事万物都有公式，无论是做爆款内容还是做生意。AI 时代最安全的生存法则，就是利用 AI 处理所有枯燥的文书、会计和代码工作，而你自己紧握领域知识与品味，做整个舰队唯一的指挥官。

## 本集带走

1. **非技术型 PM 正在被淘汰**：被淘汰的是只会做流程管理和政治博弈的角色。新时代的 PM 即便不手写代码，也必须深刻理解 AI 模型、智能体工作流和技术行话，才能驾驭工具。
2. **上下文是新的生产力护城河**：所有的文档和项目都必须高度组织化并保持在本地。语音输入和截图是把海量高质上下文喂给 AI 的最快方式。
3. **人的价值在于那最后 8% 的品味与统筹**：AI 能帮你完成 90% 以上的执行工作，但你的核心竞争力在于作为业务专家，部署智能体舰队，并负责最终的质量保证与体验上限的突破。

<div class="pd-sec">全部金句 <span>5 条(中英对照,已过机器闸门)</span></div>

> 因为有了 AI，你不再需要害怕创办公司了，因为 AI 可以为你处理所有的文书工作，为你处理所有的会计工作，所有那些无聊的事情。  
> *because ai you don't need to be scared of starting a company anymore because ai can take care of all the paperwork for you all the accounting for you all the the boring stuff*  
> —— Meng To · [68:39] ^q1

> 你最清楚，因为就像任何商业规则一样，你必须成为那个最了解这个主题的人，否则你就没有任何筹码。  
> *you know best because like any business rule is that you have to be the one who knows this topic the best otherwise you don't have any leverage*  
> —— Meng To · [69:26] ^q2

> 然后让 AI 成为你的放大器、扩音器，这样你就可以快速做出这些微观决策，并且你可以部署一支智能体舰队。  
> *then let ai be your amplifier magnifier so that you can quickly make these micro decisions and you can deploy a fleet of agents*  
> —— Meng To · [69:51] ^q3

> 你不必再那样做了，你有一支智能体大军。  
> *you don't have to do that anymore you have an army of agents*  
> —— Meng To · [46:54] ^q4

> 最终你会被解雇，因为 AI 会在某个时间点取代所有人，或者我们将找到新的工作方式。  
> *eventually you will get fired because ai will replace everyone at some point or we will find new ways to do our job*  
> —— Meng To · [00:00] ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同公司:cursor · 同概念:codex、智能体 (agent)
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|Dan Shipper 的未来工作预测：别等 AI 末日，用 Codex 重塑一切]] —— 同公司:cursor · 同概念:codex、智能体 (agent)
- [[2026-06-24-pg-company-os-jz|AI 时代的产品团队：Laurel CPO 的公司操作系统与「超级个体」实战]] —— 同嘉宾:Akash · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同概念:护栏 (guardrails)、智能体 (agent)、codex
- [[2026-singju-openclaw-80apps|OpenClaw创始人：为何80%的应用将消失]] —— 同概念:codex、智能体 (agent)、mcp
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性]] —— 同公司:figma · 同概念:智能体 (agent)

</div>
</div>

*本集关键词:AI 工作流 · Codex · 智能体 · 技术型 PM · 数字分身*

<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
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
  function adopt(){
    var acts=document.querySelector('.pd-top .pd-acts'); if(!acts) return;
    ['.search','.darkmode','.readermode'].forEach(function(sel){
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==acts) acts.appendChild(el);
    });
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
  function all(){ topbar(); move(); adopt(); graph(); }
  document.addEventListener('nav', all);
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
