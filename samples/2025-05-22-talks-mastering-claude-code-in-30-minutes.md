---
title: Claude Code 实战技巧：从提问到并行
podcast: 精选演讲
date: 2026-08-31
source_url: undefined
duration: "27:29"
type: episode
cover: "#64748b"
description: Claude Code 创建者 Boris 分享这个终端编程智能体的使用技巧，从基于代码的问答到多会话并行工作流。
host: "[[Boris]]"
companies: ["[[Anthropic]]", "[[Claude Code]]"]
concepts: ["[[智能体]]", "[[ClaudeMD]]", "[[MCP]]", "[[SDK]]", "[[LLM]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2025-05-22-talks-mastering-claude-code-in-30-minutes#post","headline":"Claude Code 实战技巧：从提问到并行","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2025-05-22-talks-mastering-claude-code-in-30-minutes","mainEntityOfPage":"https://talk.solomind.cc/2025-05-22-talks-mastering-claude-code-in-30-minutes","description":"Claude Code 创建者 Boris 分享这个终端编程智能体的使用技巧，从基于代码的问答到多会话并行工作流。","datePublished":"2026-08-31","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Boris"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agentic)"},{"@type":"Thing","name":"ClaudeMD"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"SDK"},{"@type":"Thing","name":"LLM"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"Claude Code 实战技巧：从提问到并行","item":"https://talk.solomind.cc/2025-05-22-talks-mastering-claude-code-in-30-minutes"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Claude Code 实战技巧：从提问到并行</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# Claude Code 实战技巧：从提问到并行

<div class="pd-byl"><b>Boris</b> · Claude Code 创建者 · 2026-08-31</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2025-05-22-talks-mastering-claude-code-in-30-minutes.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以在 Anthropic，技术员工的入职过去通常需要两到三周。现在大约只需要两到三天。</div><div class="a">— Boris <button class="pd-ts" data-t="04:56" data-who="Boris" data-en="And so at Anthropic, onboarding used to take about two or three weeks for technical hires. It's now about two or three days." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Boris]]
>
> **公司** [[Anthropic]] · [[Claude Code]]
>
> **概念** [[智能体]] · [[ClaudeMD]] · [[MCP]] · [[SDK]] · [[LLM]]

这一集是 [[Anthropic|Anthropic]] 技术成员 [[Boris|Boris]] 讲 [[Claude Code|Claude Code]] 的实战用法——Claude Code 是他造的一个完全[[智能体|智能体]]化的编程助手，不是补全一行代码，而是构建功能、写整个文件、修整个 bug，而且跑在终端里，不绑任何 IDE <button class="pd-ts" data-t="01:27" data-who="嘉宾" data-en="So what is Claude Code? Claude Code is a new kind of AI assistant. And there's been different generations of AI assistants for coding." aria-label="回原文"></button>。

## 先从"问代码"开始，别上来就让它写

Boris 最推荐的上手方式是**基于代码的 Q&A**：直接向你的代码库提问，不写代码。比如问"这段代码怎么用的"、"这个函数为什么有 15 个参数、参数名为什么这么怪"——Claude Code 不会只做文本搜索，它会翻 Git 历史，查出这些参数是谁加的、关联什么 issue，然后给你一个总结 <button class="pd-ts" data-t="06:07" data-who="嘉宾" data-en="Something that I do a lot also is ask it about Git history. So for example, why does this function have 15 arguments? And why are the arguments named this weird way?" aria-label="回原文"></button>。Anthropic 新人技术入职第一天就装 Claude Code 然后开始问代码库，以前入职要两三周，现在两三天 <button class="pd-ts" data-t="04:56" data-who="嘉宾" data-en="It'll answer these kind of questions. And so at Anthropic, onboarding used to take about two or three weeks for technical hires. It's now about two or three days." aria-label="回原文"></button>。

这里有个关键点：Claude Code **不做索引**，代码不上传、不存远程数据库、不拿来训练模型，本地启动就能用，零等待 <button class="pd-ts" data-t="05:05" data-who="嘉宾" data-en="It's now about two or three days. What's also kind of cool about Q&amp;A is we don't do any sort of indexing. So there's no remote database with your code." aria-label="回原文"></button>。

另外有个实用招：用 macOS 听写功能，按两次听写键直接用嘴说提示词，不用手打 <button class="pd-ts" data-t="03:49" data-who="嘉宾" data-en="And something that I actually do is, for a lot of my prompts, I won't hand-type them into Claude Code. If you're on macOS, you can go into your system settings under Accessibility as Dictation, and you can enable it." aria-label="回原文"></button>。

## 让它写代码前，先让它想

能问答之后进编辑代码。Claude Code 的工具集很小——编辑文件、跑 bash 命令、搜索文件——它自己串联起来探索代码、头脑风暴、再动手改 <button class="pd-ts" data-t="08:08" data-who="嘉宾" data-en="It figures out how to use the tools. And with Claude Code, we give it a pretty small set of tools. It's not a lot." aria-label="回原文"></button>。你不需要指定它用哪个工具，说"做这件事"它自己会串。

一个很容易犯的错：一上来就让它"实现一个 3000 行的功能"。有时候能一次对，但经常它做出来的不是你要的。

最简单的解法：**先让它做计划**。直接说"在写代码之前，先做个计划，让我过目，批准了再写"——不需要开什么特殊模式，说一句话它就懂 <button class="pd-ts" data-t="08:48" data-who="嘉宾" data-en="This is something we highly recommend. And something I see sometimes is people, they take Claude Code and they ask it, hey, implement this enormous 3,000 line feature." aria-label="回原文"></button>。

还有个常用咒语：`commit push PR`。Claude 会自己查 Git log 弄清提交格式、创建分支、推送、建 pull request，不用你多解释 <button class="pd-ts" data-t="09:25" data-who="嘉宾" data-en="That's it. This is also, I want to think with this one, this commit push PR, this is a really common incantation that I use. There's nothing special about it, but Claude is kind of smart enough to interpret this, so it'll make a commit, it'll push it to the branch, make a branch, and then make a pull request from your GitHub." aria-label="回原文"></button>。

## 给它反馈工具，让它自己迭代

这是真正拉开差距的用法：**给 Claude 一种检查自己工作的方式**。比如写单元测试、用 Puppeteer 截图、截 iOS 模拟器的图——给它看结果的工具，它就能自己迭代两三轮，从"还不错"到"几乎完美" <button class="pd-ts" data-t="11:14" data-who="嘉宾" data-en="So kind of do a little bit of exploration, do a little bit of planning, and ask me for confirmation before you start to write code. These other two on the right are extremely powerful." aria-label="回原文"></button>。无论你的领域是单元测试、集成测试还是 UI 截图，思路一样：给它看结果的通道，它自己会改 <button class="pd-ts" data-t="11:47" data-who="嘉宾" data-en="So the trick is give it some sort of tool that it can use for feedback to check its work and then based on that it will iterate by itself and you're going to get a much better result." aria-label="回原文"></button>。

## 接入团队工具：bash 工具和 MCP

更进一层是把你团队已有的工具接进来。两种方式：bash 工具（比如你们自研的 CLI，告诉它用 `--help` 去学怎么用）和 [[MCP|MCP]] 工具。

告诉它一次，它就会用。经常用的可以写进 [[ClaudeMD|ClaudeMD]] 让它跨会话记住 <button class="pd-ts" data-t="10:00" data-who="嘉宾" data-en="As you get a little bit more advanced, you're going to want to start to plug in your team's tools. And this is where Claude Code starts to really shine. And there's generally two kinds of tools." aria-label="回原文"></button>。

## 上下文管理：ClaudeMD 是核心

Claude Code 有套分层上下文系统，最基础的是 **ClaudeMD**——一个特殊文件名的 markdown 文件。放在项目根目录，每次启动 Claude Code 自动读入上下文。

里面写常见 bash 命令、架构决策、重要文件、风格指南之类的 <button class="pd-ts" data-t="12:39" data-who="嘉宾" data-en="There's different ways to do this. The simplest one is what we call ClaudeMD. And Claude.md is the special file name." aria-label="回原文"></button>。尽量短，太长会吃上下文又没大用 <button class="pd-ts" data-t="13:27" data-who="嘉宾" data-en="The kinds of things you put in CloudMD, it's like common bash commands, common MCP tools, architectural decisions, important files, anything that you would kind of typically need to know in order to work in this codebase." aria-label="回原文"></button>。

ClaudeMD 分三层：
- **项目级**：签入源码控制，团队共享，写一次所有人受益
- **本地级**：不签入，只给自己用
- **嵌套目录级**：放在子目录里，Claude 在那个目录工作时自动拉入 <button class="pd-ts" data-t="13:02" data-who="嘉宾" data-en="You can also have a local ClaudeMD. And this one, you don't usually check into source control. So ClaudeMD, you should check into source control, share with your team so that you can write it once and share it with your team." aria-label="回原文"></button>

公司层面还有 **enterprise route**，跨所有代码库自动拉入，统一管理 <button class="pd-ts" data-t="14:03" data-who="嘉宾" data-en="So these are the ClaudeMDs that will get pulled in automatically, but then also you can put ClaudeMDs in nested directories, and those will get automatically pulled when Claude works in those directories." aria-label="回原文"></button>。

同样分层的还有权限系统：企业可以设全局策略，比如某些命令自动批准、某些 URL 永远禁止抓取、员工无法覆盖 <button class="pd-ts" data-t="16:08" data-who="嘉宾" data-en="You can also have global configs that are across all your projects, or you can have enterprise policies. And this is essentially a global config that you roll out for all of your employees, everyone on your team automatically." aria-label="回原文"></button>。MCP 服务器配置也可以签入代码库，新人在仓库里跑 Claude Code 就会被提示安装 <button class="pd-ts" data-t="16:55" data-who="嘉宾" data-en="So pretty convenient both to unblock people and also just to keep your code base safe. And then same thing for MCP servers. Have an MCP JSON file, check it into the code base." aria-label="回原文"></button>。

管理这些的内置工具：`/memory` 查看所有记忆文件、编辑特定文件；输入 `#` 加内容可以让 Claude 自动把东西写进 ClaudeMD <button class="pd-ts" data-t="17:37" data-who="嘉宾" data-en="There's a lot of tools built into Claude to manage this. So as an example, if you run slash memory, you can see all the different memory files that are getting pulled in." aria-label="回原文"></button>。

## 实用快捷键

- **Shift-Tab**：进入自动接受编辑模式（bash 命令仍需批准），适合它写单元测试迭代时用，省得逐条确认 <button class="pd-ts" data-t="19:06" data-who="嘉宾" data-en="And here's just a quick reference sheet. So anytime, you can hit Shift-Tab to accept edits. And this switches you into auto accept edits mode." aria-label="回原文"></button>
- **`#`**：让 Claude 记住某件事，自动写入 ClaudeMD <button class="pd-ts" data-t="19:28" data-who="嘉宾" data-en="I'll usually just switch into auto accept mode so I don't have to OK every single edit. Anytime you want Claude to remember something, so for example, if it's not using a tool correctly and you want it to use it correctly from then on, just type the pound sign and then tell it what to remember, and it'll remember it." aria-label="回原文"></button>
- **`!`**：直接跑 bash 命令，输出进上下文窗口，Claude 下一轮能看到 <button class="pd-ts" data-t="19:42" data-who="嘉宾" data-en="It'll incorporate it into ClaudeMD automatically. If you ever want to drop down to bash mode, so just run a bash command, you can hit the exclamation mark and type in your command, that'll run locally, but that also goes into the context window, so Claude will see it on the next turn." aria-label="回原文"></button>
- **`@`**：提及文件和文件夹，拉入上下文 <button class="pd-ts" data-t="20:03" data-who="嘉宾" data-en="And Claude will see the command and the output. You can at mention files and folders. Any time you can hit escape to stop what Claude is doing." aria-label="回原文"></button>
- **Escape**：随时打断，不会破坏会话。可以打断后改指令让它重做，比如 20 行改动能指出其中一行不对让它重来 <button class="pd-ts" data-t="20:05" data-who="嘉宾" data-en="You can at mention files and folders. Any time you can hit escape to stop what Claude is doing. No matter what Claude is doing, you can always safely hit escape." aria-label="回原文"></button>
- **Escape 两次**：跳回历史记录 <button class="pd-ts" data-t="20:29" data-who="嘉宾" data-en="And then I'll tell it to redo the edit. You can hit escape twice to jump back in history. And then after you're done with the session, you can start Claude with a resume to resume that session if you want, or dash dash continue." aria-label="回原文"></button>
- **Control-R**：看 Claude 完整输出的原始内容 <button class="pd-ts" data-t="20:40" data-who="嘉宾" data-en="And then after you're done with the session, you can start Claude with a resume to resume that session if you want, or dash dash continue. And then anytime if you want to see more output, hit control R. And that'll show you the entire output, the same thing that Claude sees in its context window." aria-label="回原文"></button>

## SDK：当超级智能的 Unix 工具用

Claude Code 有个 [[SDK|SDK]]，就是 `claude -p` 那个标志背后的东西。你可以传入提示词、指定允许的工具、要 JSON 还是流式 JSON 输出。

把它当成一个 Unix 工具：给它输入、它给你 JSON，可以管道进管道出 <button class="pd-ts" data-t="20:53" data-who="嘉宾" data-en="And then anytime if you want to see more output, hit control R. And that'll show you the entire output, the same thing that Claude sees in its context window. The next thing I wanna talk about is the Claude Code SDK." aria-label="回原文"></button>。比如 `git status` 管道进去用 jq 选结果、从日志里管道进大日志让它分析、从 Sentry CLI 拉数据让它处理 <button class="pd-ts" data-t="22:00" data-who="嘉宾" data-en="You can pipe out of it. The piping is also pretty cool. So you can use, for example, git status and pipe this in and use jq to select the result." aria-label="回原文"></button>。他们在 CI 和事件响应流水线里大量用这个 <button class="pd-ts" data-t="21:42" data-who="嘉宾" data-en="So this is awesome for building on. We use this in CI all the time. We use this for incident response." aria-label="回原文"></button>。

## 高级玩法：并行多会话

Boris 说自己是普通用户，一次跑一个 Claude。但他看到的高级用户几乎都是：开 SSH 会话、用 tmux 隧道、同一仓库检出多份（或用 Git work trees 隔离），然后并行跑一堆 Claude 同时干活 <button class="pd-ts" data-t="22:38" data-who="嘉宾" data-en="You can also pipe it in and have Claude do something with it. The final thing, and this is probably the most advanced use cases we see, I'm sort of a Claude normie, so I'll have usually one Claude running at a time, and maybe I'll have a few terminal tabs for a few different repos running at a time." aria-label="回原文"></button>。想跑多少会话就跑多少，并行能干很多事 <button class="pd-ts" data-t="23:16" data-who="嘉宾" data-en="But for now, these are some ideas for how to do more work in parallel with Claude. You can run as many sessions as you want. And there's a lot that you can get done in parallel." aria-label="回原文"></button>。

## 本集带走

- **从问答开始上手**：别一上来就让它写代码，先问代码库的问题，同时摸清它能一次搞定什么、什么需要你手把手带
- **写代码前先让它做计划**：一句话"先做计划让我看"，避免它花力气做出不是你要的东西
- **给它自我检查的工具**：单元测试、UI 截图——只要有反馈通道，它自己迭代两三轮能从"还行"到"几乎完美"
- **ClaudeMD 写短、签入代码库**：团队共享一份，写一次所有人受益；太长反而浪费上下文
- **把 SDK 当 Unix 工具**：管道进管道出，适合塞进 CI 流水线和自动化脚本
- **并行是高阶玩家的标配**：多检出 + tmux，同一仓库同时跑多个 Claude

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">所以在 Anthropic，技术员工的入职过去通常需要两到三周。现在大约只需要两到三天。</span>  
> *And so at Anthropic, onboarding used to take about two or three weeks for technical hires. It's now about two or three days.*  
> <span class="qm">—— Boris · [04:56]</span> ^q1

> <span class="qz">而得到你想要的结果的最简单方法是要求它先思考。</span>  
> *And the easiest way to get the result you want is ask it to think first.*  
> <span class="qm">—— Boris · [09:03]</span> ^q2

> <span class="qz">Bash 本质上是相当危险的，并且它能以意想不到的方式改变系统状态。但与此同时如果你必须手动批准每一条 bash 命令，作为一名工程师这超级烦人，而且你无法真正提高生产力，因为你只是在不断地批准每一条命令。</span>  
> *Bash is inherently pretty dangerous and it can change system state in unexpected ways. But at the same time if you have to manually approve every single bash command, it's super annoying as an engineer, and you can't really be productive because you're just constantly approving every command.*  
> <span class="qm">—— Boris · [24:21]</span> ^q3

> <span class="qz">所以我认为很有可能在年底之前，人们就不再使用 IDE 了。</span>  
> *And so I think there's a good chance that by the end of the year, people aren't using IDEs anymore.*  
> <span class="qm">—— Boris · [26:22]</span> ^q4

> <span class="qz">我认为 Anthropic 大约 80% 的人员是技术人员，每天都使用 Claude Code。</span>  
> *I think about 80% of people at Anthropic that are technical use Claude Code every day.*  
> <span class="qm">—— Boris · [27:08]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-08-talks-anthropic-s-cca-exam-as-a-field-guide-fo|别迷信大上下文：拆解 Claude 认证架构师考试的反模式]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:LLM</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Anthropic、Claude Code、GitHub</span>
- [[2026-06-09-howiai-claude-fable-5-review-what-the-new-mytho|Claude Fable 5 亲测：最聪明模型的能干与不能干]]<span class="pd-rz">同公司:Anthropic、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]]<span class="pd-rz">同公司:Anthropic、Claude Code · 同概念:智能体 (agentic)、MCP</span>
- [[2025-10-26-lennys-how-block-is-becoming-the-most-ai-native|Block CTO：代码质量与产品成功毫无关系，打造 AI 原生公司靠的是组织重组]]<span class="pd-rz">同公司:Anthropic · 同概念:LLM、MCP</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic、Claude Code</span>

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
