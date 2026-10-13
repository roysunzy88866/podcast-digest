---
title: 智能体出错的账，该谁付？Reducto 删掉重做 MCP 的教训
podcast: 精选演讲
date: 2026-10-14
source_url: undefined
duration: "16:21"
type: episode
cover: "#64748b"
description: Reducto 产品负责人 Abhi Arya 讲了他们如何删掉第一个 MCP 服务器、推翻重来的过程，核心是一个问题：智能体自信地犯错时，谁来发现、谁来买单。
guests: ["[[Abhi Arya]]"]
companies: ["[[Reducto]]", "[[Claude Code]]"]
concepts: ["[[智能体]]", "[[智能体体验]]", "[[MCP]]", "[[销售管线]]", "[[不确定性]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-08-talks-why-we-deleted-our-mcp-server-and-rebuil#post","headline":"智能体出错的账，该谁付？Reducto 删掉重做 MCP 的教训","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-08-talks-why-we-deleted-our-mcp-server-and-rebuil","mainEntityOfPage":"https://talk.solomind.cc/2026-10-08-talks-why-we-deleted-our-mcp-server-and-rebuil","description":"Reducto 产品负责人 Abhi Arya 讲了他们如何删掉第一个 MCP 服务器、推翻重来的过程，核心是一个问题：智能体自信地犯错时，谁来发现、谁来买单。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Abhi Arya"},{"@type":"Organization","name":"Reducto"},{"@type":"Organization","name":"Claude Code"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体体验 (agent experience)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"销售管线 (pipeline)"},{"@type":"Thing","name":"不确定性 (uncertainty)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体出错的账，该谁付？Reducto 删掉重做 MCP 的教训","item":"https://talk.solomind.cc/2026-10-08-talks-why-we-deleted-our-mcp-server-and-rebuil"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体出错的账，该谁付？Reducto 删掉重做 MCP 的教训</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体出错的账，该谁付？Reducto 删掉重做 MCP 的教训

<div class="pd-byl"><b>Abhi Arya</b> · Reducto 产品负责人 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-08-talks-why-we-deleted-our-mcp-server-and-rebuil.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我认为这个结构、这个架构其实归结为一个问题，那就是：谁为智能体犯错买单？</div><div class="a">— Abhi Arya <button class="pd-ts" data-t="02:35" data-who="Abhi Arya" data-en="And so I think that structure, that architecture really comes down to one question and that is who pays for the agent being wrong?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Abhi Arya]]
>
> **公司** [[Reducto]] · [[Claude Code]]
>
> **概念** [[智能体]] · [[智能体体验]] · [[MCP]] · [[销售管线]] · [[不确定性]]

[[Reducto|Reducto]] 产品负责人 [[Abhi Arya|Abhi Arya]] 讲了他们如何删掉第一个 [[MCP|MCP]] 服务器、推翻重来的过程，核心是一个问题：==[[智能体|智能体]]自信地犯错时，谁来发现、谁来买单==。

Reducto 是一家处理非结构化文档的公司，3 年处理了超过 30 亿份文档，客户包括 Harvey、ScaleAI。

他们做的事，是在模型和企业数据之间加一层，把乱七八糟的扫描件、排版复杂的文件，变成 AI 能用的干净数据。

## 智能体优先到底是什么意思？

Abhi 的女朋友问他什么是智能体优先软件，他发现自己一时答不上来。

优化提示词、写好接口，这些其实都是在优化模型，不是把智能体放在第一位。

他认为这是个架构问题，而架构问题归结为一句话：**智能体犯错时，谁付代价**？<button class="pd-ts" data-t="02:35" data-who="嘉宾" data-en="Agent-first software is inherently an architecture problem. And so I think that structure, that architecture really comes down to one question and that is who pays for the agent being wrong?" aria-label="回原文"></button>

他分了三类。第一类是全自动模式：写个提示词，让智能体随便干。

它一定会犯错，而且犯错时非常自信，你根本看不出来，最后是你替它向客户买单。第二类是用户优先：

给用户一堆按钮和开关，再外挂一个能力很弱的智能体，本质上就是个聊天机器人——用户的能力和智能体的能力都被封了顶。

第三类是他认为正确答案：为用户服务的[[智能体体验|智能体体验]]——智能体有丰富的能力，能真正帮人干活，同时人还能验证它做了什么。

## 第一个版本：演示很惊艳，一上手就崩

他们做的是自动化文档[[销售管线|流水线]]：解析、分类、切分、提取。销售团队天天泡在配置界面里，而不是琢磨结果。

于是 Abhi 用 [[Claude Code|Claude Code]] 搭了个最小可用版本，把应用里每个接口都包成一个 MCP 工具，全塞进一个大文件。他精心设计了提示词，发到 Slack，效果很好。

但这什么也说明不了——他知道自己想演示什么，那是被精心安排的表演 <button class="pd-ts" data-t="05:20" data-who="嘉宾" data-en="I knew exactly what I was doing. I was building a really curated demo, and that's why the standalone demo told me nothing at all. The real test happened when I gave the MCP to everyone on the team, and immediately it broke." aria-label="回原文"></button>。真正的考验是把工具发给全团队。结果立刻崩了：

有人喂进去一段客户通话的半成品记录或一个 Notion 页面，智能体就闷头把整条工作流从头到尾搭完，还信誓旦旦地说一切正常。

可无论用户还是智能体，都说不清这条流水线到底干了什么。

这就是全自动模式在生产环境里的当头一棒：智能体从不承认自己不确定，人也没有任何地方可以验证。

## 修复办法：删掉整个文件，少给工具但给对工具

你可能以为解决办法是把提示词写得更细。Abhi 说，真正该改的是架构。他一个提交就把那个大文件整个删了。

替换它的不是更多工具，而是更少的、但承载了真实工作结构的工具。<button class="pd-ts" data-t="06:30" data-who="嘉宾" data-en="The whole file that we use to talk to the MCP, I deleted the entire thing in one commit. And what replaced it wasn't more tools. It was mostly fewer tools, but they carried the structure of actual work." aria-label="回原文"></button>

举个例子：常见需求是把分类接口接到提取节点。

以前是让模型靠猜、靠提示词提示去拼装；现在做成一个分类转提取工具，一步到位，后续步骤自动衔接。

智能体没机会在已知正确的环节上自由发挥。

又因为智能体没有记忆状态，他们加了一个快照工具，一次调用就能拿回整条流水线的实时状态和具体错误代码，智能体去查实际存在的东西，而不是瞎编变量名。

结果是：**把上下文从提示词搬进结构里，智能体从瞎猜变成了查证**。而人能看懂每一步，也能向下游解释智能体的输出。

## 建好了流水线，问题又出现在运行时

构建阶段的问题解决了，运行时的问题冒出来了：如果产出本身就错了——比如数据结构很糟，或者用户没说清用途——==谁能发现==？

智能体出错是安静地出错：不是报个崩溃，而是流水线跑完 100 份文档，可能漏掉了第 30 页的一个扫描件，而且没人知道。<button class="pd-ts" data-t="09:12" data-who="嘉宾" data-en="And with agents, it goes wrong quietly. So instead of a seg fault or some actual error, the pipeline runs across 100 documents and maybe it missed a scan on page 30 or maybe the user didn't specify what types of documents were going into the pipeline." aria-label="回原文"></button>

**他们的解法是把[[不确定性|不确定性]]变得可见**。

Reducto 的提取本身输出置信度分数和边界框，他们把这类信息喂回模型，让提取结果随时间越来越准。

同时要求智能体暴露自己的不确定：

遇到一个字段有两种读法，不许猜，也不许卡住，而是要问用户我看到了两种理解，你指的是哪个。

在评估中，凡是基于站不住脚的假设完成任务，一律判失败；奖励提问，惩罚硬猜。<button class="pd-ts" data-t="10:47" data-who="嘉宾" data-en="Basically, in our evals, we started failing the agent for building any shaky assumptions, and we gave our harness prompt guidance to use the ask user question tools, et cetera, that Claude Code and other frontier harnesses offer instead of guessing." aria-label="回原文"></button>

判断权不全在智能体手里。每次生成新东西，它都要向用户解释做了什么、为什么，由用户来审。

## 最强的智能体，放在人就在旁边的地方

回头看这些失败，形状都一样：**智能体的自主权和访问权限，超过了人能验证的范围**。

Abhi 的结论是，智能体在搭建流水线、生成数据结构、组织上下文时最强，而这时出错也最便宜——因为人就在旁边。<button class="pd-ts" data-t="12:14" data-who="嘉宾" data-en="And that intelligence lives in the construction overall. So building the pipeline, generating the schema, and pulling in the right context is where the agent is most powerful and where a mistake is the cheapest because the human is right there." aria-label="回原文"></button>

他们还做了埋点：

记录每个会话里的提示词，让销售团队导出自己的 Claude Code 会话，看人在哪里推翻了智能体、模型哪里信心不足、哪里提了问。

这些数据流回长期指导规则，系统靠多搭流水线变得更会搭流水线，不需要人工重写，形成了一个按组织、按用户自我改进的循环。

一个意外的信号：他从没要求销售团队用这个东西，只是在 Claude 企业版里把工具暴露出来。

销售自己在客户通话前，先用 Circleback 和 Slack 了解客户，再用这个工具提问、搭流水线，最后敢把它带到高价值客户面前演示——因为演示不光是能跑，人还能说：

这是我搭的，你来看。<button class="pd-ts" data-t="15:09" data-who="嘉宾" data-en="And that's where they also started to trust the output enough to put this in front of high-value customers because the demo didn't just work, but the human actually said, hey, I built this, come check it out, and it actually paid off in these sales calls." aria-label="回原文"></button>

## 本集带走

- 智能体优先不是模型问题，是架构问题，核心是：智能体自信地犯错时，谁发现、多快发现。
- 全自动模式让用户替智能体的错误买单；纯用户优先则把智能体退化成聊天机器人，两头都受限。
- 修复之道是少而结构化的工具：把上下文从提示词搬进结构，让正确路径成为最简单的路径。
- 让不确定性可见：模型遇到歧义要提问而不是猜，最终判断权留在能负责的人手里。
- 智能体最强、出错最便宜的地方，是搭建和生成阶段——因为人就在旁边。

<div class="pd-sec pd-sec-q">全部金句 <span>15 条</span></div>

> <span class="qz">所以我认为这个结构、这个架构其实归结为一个问题，那就是：谁为智能体犯错买单？</span>  
> *And so I think that structure, that architecture really comes down to one question and that is who pays for the agent being wrong?*  
> <span class="qm">—— Abhi Arya · [02:35]</span> ^q1

> <span class="qz">而当它搞砸的时候——它肯定会搞砸——你完全不会察觉，因为它对自己在做的事情非常自信，而你要为它的错误买单，对你的客户、你的用户等等。</span>  
> *And when it messes up, which it will, you won't have any idea because it's really confident about what it's doing, and you're the one that's paying for it being wrong to your customers, to your users, et cetera.*  
> <span class="qm">—— Abhi Arya · [02:55]</span> ^q2

> <span class="qz">最后一个桶，也是我认为会胜出的桶，是服务用户的智能体体验。</span>  
> *And lastly, the bucket that I think wins here is agent experience in service of the user.*  
> <span class="qm">—— Abhi Arya · [03:27]</span> ^q3

> <span class="qz">这个框架使智能体体验不再是一个关于模型的问题，而更多是一个关于上下文、能力和整体自我提升的问题。</span>  
> *This framing is what turns agent experience into less of a question of the model and more of a question of context, capability, and overall self-improvement.*  
> <span class="qm">—— Abhi Arya · [03:47]</span> ^q4

> <span class="qz">现在智能体没法在我们已知为真的部分上自由发挥了。</span>  
> *Now the agent doesn't get to freelance the parts that we know are true.*  
> <span class="qm">—— Abhi Arya · [07:29]</span> ^q5

> <span class="qz">智能体不再猜测，开始引用。</span>  
> *The agents stopped guessing and started referencing.*  
> <span class="qm">—— Abhi Arya · [08:00]</span> ^q6

> <span class="qz">智能体本身非常自信地错了，而智能体所拥有的不确定性完全不可见。</span>  
> *The agent itself is very confidently wrong and the uncertainty that the agent has is completely invisible.*  
> <span class="qm">—— Abhi Arya · [09:30]</span> ^q7

> <span class="qz">在我们的系统里，或者说在 Reducto，失败携带着信息。</span>  
> *In our system, or with Reducto, failures carry information.*  
> <span class="qm">—— Abhi Arya · [09:46]</span> ^q8

> <span class="qz">所以我们奖励的是提问，而不是猜测。</span>  
> *So we rewarded asking instead of guessing.*  
> <span class="qm">—— Abhi Arya · [10:47]</span> ^q9

> <span class="qz">智能体基本上满足的是你所写的东西，而不是你想要的结果。</span>  
> *The agent basically satisfies what you wrote and not the outcome that you wanted.*  
> <span class="qm">—— Abhi Arya · [11:14]</span> ^q10

> <span class="qz">而在底层，它们基本上是同一个形状：智能体拥有的自主权和访问权限超出了人类所能验证的范围。</span>  
> *And underneath, they're basically one shape where the agent had more autonomy and more access than the human could verify.*  
> <span class="qm">—— Abhi Arya · [12:02]</span> ^q11

> <span class="qz">智能体只是盒子里的智能，而你围绕它们构建的 harness 才是赋予它们能力、在下游交付这些成果的东西。</span>  
> *Agents are just intelligence in a box and the harness that you surround them with is what provides them with the ability to deliver these outcomes downstream.*  
> <span class="qm">—— Abhi Arya · [12:59]</span> ^q12

> <span class="qz">在我们不用手工重写的情况下，这就变成了每个组织或每个用户构建这些流水线时的一个自我改进循环。</span>  
> *Without us rewriting by hand, this then became a self-improving loop per org or per user that was building these pipelines.*  
> <span class="qm">—— Abhi Arya · [13:45]</span> ^q13

> <span class="qz">但除此之外，关键在于：当你的智能体自信地出错时，谁会发现？他们多快会发现？</span>  
> *But beyond that, it's when your agent is really confidently wrong, who finds out and how fast do they find out?*  
> <span class="qm">—— Abhi Arya · [15:54]</span> ^q14

> <span class="qz">如果你为此而构建，那么你就能构建出人们真正愿意托付实际工作的东西。</span>  
> *If you build for that, then you can build for something that people will actually trust with real work.*  
> <span class="qm">—— Abhi Arya · [16:03]</span> ^q15

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-13-pg-the-complete-claude-stack-for-pms|产品经理驾驭 Claude 生态：用五层架构打造专属 AI 幕僚长]]<span class="pd-rz">同公司:Claude Code · 同概念:MCP、智能体 (agent)</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同公司:Claude Code · 同概念:MCP、智能体 (agent)</span>
- [[2026-07-23-practicalai-surviving-the-new-economics-of-a-post-ag|IBM 单日暴跌 25%:企业软件的好日子到头了吗？]]<span class="pd-rz">同公司:Claude Code · 同概念:MCP、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同公司:Claude Code · 同概念:MCP</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Claude Code · 同概念:智能体 (agent)</span>

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
