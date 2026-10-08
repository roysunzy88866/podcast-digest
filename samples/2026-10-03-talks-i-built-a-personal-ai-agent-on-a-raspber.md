---
title: "把 AI 智能体塞进树莓派:给它装上图数据库记忆"
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "19:59"
type: episode
cover: "#64748b"
description: "Neo4j 的 Jeremy Adams 现场演示:一台旧树莓派跑个人 AI 智能体,接 WhatsApp、连 Claude,再用图数据库给智能体装上可查询的记忆。"
guests: ["[[Jeremy Adams]]"]
companies: ["[[Neo4j]]"]
concepts: ["[[智能体]]", "[[智能体记忆]]", "[[NanoClaw]]", "[[树莓派]]", "[[MCP 服务器]]", "[[Docker]]", "[[Claude Agent SDK]]", "[[推理]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber#post","headline":"把 AI 智能体塞进树莓派:给它装上图数据库记忆","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber","description":"Neo4j 的 Jeremy Adams 现场演示:一台旧树莓派跑个人 AI 智能体,接 WhatsApp、连 Claude,再用图数据库给智能体装上可查询的记忆。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jeremy Adams"},{"@type":"Organization","name":"Neo4j"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体记忆 (agent memory)"},{"@type":"Thing","name":"NanoClaw"},{"@type":"Thing","name":"树莓派 (Raspberry Pi)"},{"@type":"Thing","name":"MCP 服务器 (MCP server)"},{"@type":"Thing","name":"Docker"},{"@type":"Thing","name":"Claude Agent SDK"},{"@type":"Thing","name":"推理 (inference)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把 AI 智能体塞进树莓派:给它装上图数据库记忆","item":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把 AI 智能体塞进树莓派:给它装上图数据库记忆</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把 AI 智能体塞进树莓派:给它装上图数据库记忆

<div class="pd-byl"><b>Jeremy Adams</b> · Neo4j 开发者关系 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以我有一个大脑袋,只不过它是通过一根线连到云端的,对吧?</div><div class="a">— Jeremy Adams <button class="pd-ts" data-t="09:25" data-who="Jeremy Adams" data-en="So I've got a big brain, though it's over a wire to the cloud, right?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jeremy Adams]]
>
> **公司** [[Neo4j]]
>
> **概念** [[智能体]] · [[智能体记忆]] · [[NanoClaw]] · [[树莓派]] · [[MCP 服务器]] · [[Docker]] · [[Claude Agent SDK]] · [[推理]]

这一集是 [[Neo4j|Neo4j]] 的 [[Jeremy Adams|Jeremy Adams]] 在 AI Engineer 大会上的一场现场演示演讲——Neo4j 是做图数据库的公司,他本人在里面做开发者关系(DevRel)。

他讲的是一个副业项目:把自己的一台旧树莓派([[树莓派|Raspberry Pi]],一种信用卡大小的廉价小电脑)改造成一个随身携带的个人 AI [[智能体|智能体]],还现场从包里掏出设备、接电、开机给大家看。

最抓人的点是:这个挂在脖子上、几十美元的小设备,跑着一个真正的智能体——脑子在云端,身体在你身上,还带着一个用图数据库搭起来的「记忆系统」,连展会 Wi-Fi 断了都能照常干活。

## 为什么不放在笔记本上:他要的是「小而透明」

市面上个人智能体的炒作很多,但 Adams 明确说他不想要一个装在笔记本电脑里的。

他自称来自老式的系统管理员/DevOps 世界,偏保守,想等这些东西真正稳固了再往主力机上装 <button class="pd-ts" data-t="06:13" data-who="Jeremy Adams" data-en="What did I mean by that? Well, there was a lot of hype happening and still is about these personal agents, but I did not want one that was on my laptop. I'm sorry." aria-label="回原文"></button>。

他的需求清单是:便宜、开放、可折腾,而且——比功能丰富更重要的——**他要能理解这东西到底在干什么** <button class="pd-ts" data-t="06:33" data-who="Jeremy Adams" data-en="Open, hackable, right? And for me, I wanted to understand what was happening more than it being feature-rich. That was more important to me." aria-label="回原文"></button>。

他先在 Craigslist(分类信息网站)上看到有人卖预装了 OpenClaw 的 Mac Mini,直接被「预装」两个字劝退,觉得那是个危险信号,而且涨价之后也不便宜了。

于是他翻出柜子里那台疫情时期拿来做过「称水槽碗碟重量提醒洗碗」实验的树莓派 4B,心想:它能跑智能体吗?

试了试——跑得相当好 <button class="pd-ts" data-t="07:25" data-who="Jeremy Adams" data-en="I should try it and see. And yeah, it claws real good. It's not a sticker." aria-label="回原文"></button>。

软件他没选 OpenClaw,选了另一个更合口味的项目 **[[NanoClaw|NanoClaw]]**:只有约 15 个源文件,代码量很小,最关键的是**用 [[Docker|Docker]] 容器来跑智能体进程,这样它们就没法在系统里横冲直撞** <button class="pd-ts" data-t="08:18" data-who="Jeremy Adams" data-en="And it was quite compact and small number of lines of code. It just used Docker containers to run the agent processes so they couldn't run amok on the system. I was like, OK, this is my kind of thing." aria-label="回原文"></button>。

它基于 [[Claude Agent SDK|Claude Agent SDK]],官方还鼓励你去改代码、加技能(skills)、按自己的需求折腾。消息通道他选了 WhatsApp,因为手机上本来就有。

> 【背景】Claude Agent SDK 是 Anthropic 提供的智能体开发工具包。

## 架构:脑子在云端,身体在脖子上

初始架构简单得出奇:iPhone 或 MacBook 上发 WhatsApp 消息 → 云端 → 树莓派上的 NanoClaw,就这一条链路,只需要注册一个凭证。

板子上跑着 Docker,里面还装了一个 Neo4j 数据库。

要点是:**这块板子上不跑任何 LLM [[推理|推理]]**——所有模型调用全走云端 <button class="pd-ts" data-t="09:19" data-who="Jeremy Adams" data-en="So you got all the power. There's no inference, no LLM inference happening on this thing. I am using the cloud for all that." aria-label="回原文"></button>。用他的话说,他有一个大脑袋,只不过是通过一根线连到云端的 <button class="pd-ts" data-t="09:25" data-who="Jeremy Adams" data-en="I am using the cloud for all that. So I've got a big brain, though it's over a wire to the cloud, right? But then I said, well, what can I do with this?" aria-label="回原文"></button>。

这也是这套方案能在如此弱的硬件上跑通的关键:树莓派只负责编排、存储和设备 IO,重活全交给云。

## 图数据库记忆:从电影查询到 POLE+O

对没接触过图的观众,他给了个快速入门:图就是节点(圆形,比如「人」「电影」)加边(它们之间的关系,比如「出演了」「导演了」)。

Tom Hanks 出演了《阿甘正传》,Robert Zemeckis 导演了它——两个 person 节点、一个 movie 节点,三条边,这就是图。

他把一个装满电影数据的 Neo4j(云端实例)接上智能体，在 WhatsApp 里问「Tom Hanks 出演过哪些电影」，智能体通过一个 [[MCP 服务器|MCP 服务器]](让智能体调用外部工具/数据的标准接口)连进数据库查询再回话——第一次还先回复说「你那边的配置坏了」，他修好认证之后就拿到了正确结果 <button class="pd-ts" data-t="10:32" data-who="Jeremy Adams" data-en="I'm like, oh, OK, let me fix it. So I got on the Claude, made sure Auth was working, and then I got a bunch of results back on the right there. And those all came right out of pulling data from the database, feeding it back up through the Claude Agent SDK, forming a response, and sending it back through the WhatsApp channel." aria-label="回原文"></button>。

真正的转折发生在飞机上:他发现不买机上 Wi-Fi 也能用 WhatsApp 的消息功能,立刻意识到自己随时能和云端智能体对话 <button class="pd-ts" data-t="10:57" data-who="Jeremy Adams" data-en="And I'm on the airplane, and I found that even without paying for Wi-Fi, I could use the messaging stuff, and WhatsApp was working. I was like, oh my god, I could talk to Claude right now." aria-label="回原文"></button>,于是当场发消息让它搭一个记忆系统。

他用了 POLE+O 这套建模法——把记忆组织成人物、物体、地点、事件、组织五类节点——这套方法源自欧洲警务系统,警匪剧里那张人物关系图就是这么画的 <button class="pd-ts" data-t="11:18" data-who="Jeremy Adams" data-en="So this is a way of doing memory where you just think of like person, object, location, event, and organization, right? And this actually came from the European policing" aria-label="回原文"></button>。

智能体当场写了个 skill,还提醒他数据挂在持久化挂载点上,重启也不会丢。

从此他去参加各种开发者活动,智能体都替他记录:去了哪儿、和谁聊了什么。

在 Neo4j 的浏览界面里放大看,能看到「去了门洛帕克的 Snowflake 办公室→参加某个 AI 聚会→和 Rebecca、Jeremy 这些人交谈」这样连成一片的记忆图谱。

## 离线模式与展位巡游:真硬件才有真问题

为了让演示更狠,他给自己加了一个任务:带着设备一个展位一个展位地走,录下各家展位的宣传信息。

于是问题来了——**会议 Wi-Fi 通常很糟糕,所以他必须做离线模式** <button class="pd-ts" data-t="15:31" data-who="Jeremy Adams" data-en="And then I was worried. I was like, oh, god, conference Wi-Fi is terrible, typically. So I need an offline mode." aria-label="回原文"></button>。

他的解法是把 Neo4j 直接跑在树莓派本地:离线时用正则表达式从语音转文字里解析出展位号,写查询插进本地库,联网后再上传云端做丰富化处理。

他还自己焊了个接在树莓派引脚上的实体按钮来触发录音——演示当天按钮都掉下来了,他捏着线头照样录了一句「我现在真的在 AI Engineer 大会的舞台上做着我准备了很久的演讲」。

巡游的数据后来真挖出了东西:他把各家展位的笔记清洗后存进云端 Neo4j,发现参展商可以连到「评估与可观测性」这样的主题节点上——BuildKite、LangChain 都挂在这个主题下。

他的结论是:**自己生成了一些可能是全新的、别人都没有的知识** <button class="pd-ts" data-t="17:57" data-who="Jeremy Adams" data-en="LangChain has that theme. So I was like, OK, I've actually generated some knowledge that was maybe novel that maybe nobody has any. So are there themes?" aria-label="回原文"></button>——一段没人整理过的、大会主题的图谱。

## 记忆的第二次升级:把全部聊天记录变成图谱

演讲最后他提到,后来又用 Neo4j 的[[智能体记忆|智能体记忆]]服务把系统升级了一轮:把自己历史上所有的 WhatsApp 消息全部导入,让服务从对话中蒸馏提炼出一堆记忆,再按人、地点、概念等维度组织好 <button class="pd-ts" data-t="18:55" data-who="Jeremy Adams" data-en="And that allowed me to get a whole bunch of memories. from the conversations and then it distilled them out. And you can see here that I've got all these different things, these conversations that I've had and so forth." aria-label="回原文"></button>。

这些记忆现在可以通过一个 MCP 服务器从这只「爪子」上直接访问——也就是说,这个挂在胸前的树莓派,已经带着他全部社交记忆在跑 <button class="pd-ts" data-t="19:17" data-who="Jeremy Adams" data-en="And, for example, all the people I've spoken to, or the locations, the concepts, whatever. So these are all the things that I've been doing, talking about with my claw, and they're all distilled out into memories that are now accessible via an MCP server from this very claw." aria-label="回原文"></button>。

## 本集带走

- **弱硬件 + 云端大脑是随身智能体的现实解法**:树莓派上不跑任何 LLM 推理,只做编排、存储和设备 IO,模型调用全走云,几十美元的设备就能跑真智能体。
- **用容器圈住智能体**:他选 NanoClaw 就因为智能体进程全跑在 Docker 容器里,坏不了宿主机——对不想把智能体放上主力机的人,这是低风险的入门方式。
- **记忆用图来建:POLE+O 五类节点**(人物/物体/地点/事件/组织),源自欧洲警务的关系图方法;智能体自己就能写成 skill,配合 MCP 服务器随时查询。
- **离线兜底思路**:本地跑一个数据库,离线时用正则从语音转文字里抠出结构化信息先存本地,联网后再上传云端做丰富化。
- **图谱能挖出新知识**:把散落的现场笔记连到主题节点后,他发现了各家公司共享的主题聚类(如「评估与可观测性」)——这是把记忆结构化之后才可能出现的洞察。

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">所以我有一个大脑袋,只不过它是通过一根线连到云端的,对吧?</span>  
> *So I've got a big brain, though it's over a wire to the cloud, right?*  
> <span class="qm">—— Jeremy Adams · [09:25]</span> ^q1

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-04-talks-open-models-change-the-economics-of-ai|Ollama CEO：开源模型正吃掉企业 80-90% 的 token]]<span class="pd-rz">同概念:Docker、推理 (inference)、智能体 (agent)</span>
- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|智能体时代的数据库：Andy Pavlo 谈 AI 如何重写数据库规则]]<span class="pd-rz">同公司:Neo4j · 同概念:智能体 (agent)、智能体记忆 (agent memory)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a|我用五个提示词「黑」了自己：你的 AI 助手并不安全]]<span class="pd-rz">同概念:Docker、MCP 服务器 (MCP server)、智能体 (agent)</span>
- [[2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd|别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具]]<span class="pd-rz">同概念:MCP 服务器 (MCP server)、智能体 (agent)</span>
- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>

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
