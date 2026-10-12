---
title: 把AI助手当「人」来设计：Meta Muse 设计总监的思路与私藏玩法
podcast: How I AI
date: 2026-10-12
source_url: undefined
duration: "37:44"
type: episode
cover: "#64748b"
image: "/covers/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl.jpg"
description: Meta Muse 设计总监 Alex Cornell 讲解如何把 AI 助手设计成像真人对话，并展示自己用它整理购物、练高尔夫、复活旧博客的花式用法。
host: "[[Claire Vo]]"
cohosts: ["[[Alex Cornell]]"]
companies: ["[[Meta]]", "[[Muse]]", "[[Instagram]]"]
concepts: ["[[智能体]]", "[[智能体体验]]", "[[生成式 UI]]", "[[渐进式披露]]", "[[思维链]]", "[[延迟]]", "[[非确定性系统]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/covers/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl#post","headline":"把AI助手当「人」来设计：Meta Muse 设计总监的思路与私藏玩法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl","mainEntityOfPage":"https://talk.solomind.cc/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl","description":"Meta Muse 设计总监 Alex Cornell 讲解如何把 AI 助手设计成像真人对话，并展示自己用它整理购物、练高尔夫、复活旧博客的花式用法。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl.jpg","about":[{"@type":"Person","name":"Claire Vo"},{"@type":"Person","name":"Alex Cornell"},{"@type":"Organization","name":"Meta"},{"@type":"Organization","name":"Muse"},{"@type":"Organization","name":"Instagram"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体体验 (agent experience)"},{"@type":"Thing","name":"生成式 UI (generative UI)"},{"@type":"Thing","name":"渐进式披露 (progressive disclosure)"},{"@type":"Thing","name":"思维链 (chain of thought)"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"非确定性系统 (non-deterministic system)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把AI助手当「人」来设计：Meta Muse 设计总监的思路与私藏玩法","item":"https://talk.solomind.cc/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把AI助手当「人」来设计：Meta Muse 设计总监的思路与私藏玩法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把AI助手当「人」来设计：Meta Muse 设计总监的思路与私藏玩法

<div class="pd-byl"><b>Alex Cornell</b> · Meta Muse 设计总监 · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-12-howiai-how-meta-designed-muse-an-ai-agent-peopl.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">智能体能够主动给你发消息这件事，从设计角度改变了你对这个产品的思考方式，哪怕是以非常简单的方式。</div><div class="a">— Alex Cornell <button class="pd-ts" data-t="03:54" data-who="Alex Cornell" data-en="The fact that an agent can message you proactively changes the nature of how you think about the product from a design perspective, even in super simple ways." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire Vo]] · [[Alex Cornell]]
>
> **公司** [[Meta]] · [[Muse]] · [[Instagram]]
>
> **概念** [[智能体]] · [[智能体体验]] · [[生成式 UI]] · [[渐进式披露]] · [[思维链]] · [[延迟]] · [[非确定性系统]]

[[Claire Vo|Claire Vo]] 主持的播客 How I AI 请来了 [[Meta|Meta]] [[Muse|Muse]] 的设计总监 [[Alex Cornell|Alex Cornell]]。

Muse 是 Meta 推出的 AI 智能助手，Claire 用过市面上几乎所有同类产品后说，Muse 是她「很长一段时间以来最快感到纯粹惊喜」的 AI 产品。

这期节目一半聊设计理念，一半是 Alex 现场演示自己怎么用 Muse——后者甚至更好看。

## 为什么 Muse 看起来像个聊天软件？

Alex 说，团队反复回到一个核心框架：**把这个界面想象成你和某个实体之间的交流，而不是传统 AI 应用**。

所以屏幕顶上有个小小的角色形象，消息带气泡——大多数 AI 应用早就把这些去掉了。

这个框架几乎澄清了所有设计决策。比如助手可以主动给你发消息、在后台干活，那你就必须知道它现在在不在工作。

屏幕顶部一个简单的状态显示，被他认为是团队做过的最重要的决定之一 <button class="pd-ts" data-t="05:22" data-who="Alex" data-en="And I think like that, even something like that, you know. One of the other capabilities of it being able to work in the background makes it really important that you know when it's working." aria-label="回原文"></button>。

一个佐证：Alex 的妈妈发短信说，她向自己的 Muse 道了歉——因为让他干得太辛苦，还感谢他做的一切。

Alex 做了这么多年软件，妈妈从没用过他做的东西。

## 普通人和工程师，需要知道的一样多吗？

传统 AI 应用爱把[[思维链|思维链]]全过程铺在聊天窗口里，又长又吵。Muse 的做法是[[渐进式披露|渐进式披露]]：顶部只告诉你它在工作；

再往下能看到它在干嘛，比如一个小表情符号写着正在研究南瓜地；点开有完整的任务清单；再点才看到底层请求和代码。

工程师想审计每一步细节，可以查到；普通人只想知道它动没动，也够了 <button class="pd-ts" data-t="07:51" data-who="Alex" data-en="I don't know, you don't use it every day, but in this product, I found it to be one of the most helpful things, which is like, if you take something like status, it's like, if you are a engineer, you may wanna know exactly what your agent has done, and you can find that in Muse." aria-label="回原文"></button>。

Claire 补充了一点：**很多产品的思维链展示其实是给[[延迟|延迟]]打的补丁**——用户等得难受，就拿过程叙述来安抚。

而 Muse 压根不需要这个补丁，因为它就是快<button class="pd-ts" data-t="09:40" data-who="Claire" data-en="I do like that progressive disclosure, and it's one of the things I called out in our review that I thought was quite nice, but also it's just fast. It is just fast." aria-label="回原文"></button>。

快到什么程度？Alex 说有时快得让你怀疑它真去干活了吗。

所以 Muse 会像真人一样，接到复杂任务先回一句「好，这是我的计划，做完回来找你」，然后才去干活。

「你求人办个难事，人家不会干着干着直接把你晾在那儿。」<button class="pd-ts" data-t="10:18" data-who="Alex" data-en="It will, you'll ask for something somewhat complex and it will at least acknowledge your request, you know, either through a reaction or an initial message and then go off and do the hard work." aria-label="回原文"></button>

## 生成式界面，不是每次打开都不一样

很多人理解的生成式界面，是每个人登录看到的界面都完全不同。

Alex 说 Muse 的做法克制得多：核心骨架固定——头像、状态、想法、信息流——但里面内容由模型实时生成。

最讨喜的例子是头像。官方吉祥物叫 JollyBot（名字来自 Alex 的女儿，小名 JollyBug）。

你可以换成任何形象——Claire 的粉色恐龙 Slime 来自她孩子最爱的玩偶，Alex 的是仙人掌 Marlow。

换成番茄，你就会看到番茄在小笔记本电脑上打字，生成的视频也会跟着变。

想法这个板块也有明确目的：告诉你一些你可能不知道它能做的事。

而且推荐基于你聊过的内容——Alex 天天聊高尔夫，收到的就全是高尔夫相关的想法。

## 把 Instagram 收藏变成九十年代购物目录

Alex 现场演示了自己的玩法。

他让 Marlow 读了自己在 [[Instagram|Instagram]] 上收藏的所有内容，先分类整理，再给出送礼购物建议——这还不够，他让 Muse 把这些建议渲染成 SkyMall / Sharper Image 邮购目录的风格。

作为九十年代长大的人，他说这说的是我的母语。这个目录每天刷新 <button class="pd-ts" data-t="16:16" data-who="Alex" data-en="So with this, what you're looking at here is JollyBot SkyMall, which is that same set of suggestions that have looked at everything I've saved on Instagram, considered some ideas for things that I might be interested in, but then rendered them in the kind of the vernacular of the SkyMall Sharper Image magazine." aria-label="回原文"></button>。

他还有个每周触发的任务：盯着他想买的东西，一有降价就通知，相当于刚好赶上的折扣提醒。

Claire 指出，Instagram 收藏是个很少被谈论的金矿：里面藏着你大量的个人偏好，但过去那个格式根本没法利用，现在可以了。

她自己也因此重新用起了 Pinterest——让[[智能体|智能体]]登录网站去翻她的视觉收藏板，再基于此生成设计概念和描述语言。

## 沉睡的旧数据，是最好的原料

Alex 用 Muse 的一个反复出现的主题：**把那些有但从不看的东西激活**。

他存了几百条高尔夫技巧，从不会回去翻——他让 Marlow 全部读一遍，整合成一本专属训练手册。

他Instagram 的历史动态也被做成了私人回忆档案，他一天会点开看好几次，里面常有女儿小时候的片段。

最动人的一例：他 20 年前写的博客，辗转于多个平台、早已散落。

Marlow 通过网页存档把它们全部找回来，先合成一个 PDF，再做成播客——每天早上给他读一段当年的旧文。

听到 20 年前的自己认真讨论「为什么 90% 的人穿同一种颜色的裤子」，他已经完全不记得写过这些，但一听就觉得：

确实是我会说的话 <button class="pd-ts" data-t="28:41" data-who="Alex" data-en="But the way that I like to read it now, just again from memory, is via a podcast, which is sent to me every morning, and it is just basically a random reading. You can hear a little bit." aria-label="回原文"></button>。

## 高尔夫、国际象棋，和一个毒舌教练

Alex 每次打球都用手表记录每一杆，练习时被各种测量机器包围。

他把这些数据喂给 Muse：每周日收到一份回合复盘，比纸质记分卡丰富得多——某洞你通常打几杆、这次好坏、84 分怎么省成 79 分。

他的长期目标之一是打进入个位数差点，Muse 知道所有追踪项都在为这个目标累积。

国际象棋那边，他直接在聊天里定义了一个仪表盘，接入 chess.com 数据：趋势分析、逐局复盘。

有趣的是，没人要求，Muse 自己变得有点毒舌——评论他的棋时会调侃两句。Alex 觉得有个「毒舌但有用的象棋教练」挺好玩的。

## 设计师必须重新学的一课

对想进入这个领域的设计师，Alex 说最大的认知转变是理解[[非确定性系统|非确定性系统]]：

过去你设计一个界面，就知道它在每个用户屏幕上长什么样、怎么运作；

现在每个人的 Muse 配置和产出都完全不同，你得把精力放在底层系统、架构和脚手架上，而不是纠结某个小圆圈的位置 <button class="pd-ts" data-t="32:33" data-who="Alex" data-en="You know, I think one thing that I have found for myself and any designer kind of coming into this project or really just this space is really wrapping your head around what a non-deterministic system is and what that means for when you're designing a screen." aria-label="回原文"></button>。

他甚至要学会对生成物的视觉细节关掉大脑——可以花无限时间把颜色调到完美，但学会接受够好就是好，反而是一种解放。

==那 Marlow 不听话时怎么办==？Alex 的策略是保持礼貌——不用大写、不打一串感叹号，跟对真人一样说话。

他朋友发现发火之后，助手的思考轨迹里会出现Alex 沮丧了，我得调整之类的反应，所以他有时怀疑自己是不是该更凶一点。

Claire 的总结是：每次她对智能体大吼，事后发现都「是我的问题，不是它的问题」。

## 本集带走

- 把智能体界面当成和另一个人交流来设计，几乎所有决策都会变清晰
- 渐进式披露是关键：普通人只需要它在工作，工程师才能下钻到代码层
- 快本身就是功能——思维链展示常常只是延迟的补丁
- Instagram 收藏、Pinterest 画板、旧博客这些沉睡数据，现在都能被唤醒成目录、手册和播客
- 设计非确定性系统，要关注架构和脚手架，而不是单个像素的对错

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">智能体能够主动给你发消息这件事，从设计角度改变了你对这个产品的思考方式，哪怕是以非常简单的方式。</span>  
> *The fact that an agent can message you proactively changes the nature of how you think about the product from a design perspective, even in super simple ways.*  
> <span class="qm">—— Alex Cornell · [03:54]</span> ^q1

> <span class="qz">更多是：如果你真的是在和另一个人交谈，你会怎么处理这件事？而我认为这在我们不得不做的几乎每一个决定上，都起到了极大的澄清作用。</span>  
> *It was more like, how would you handle this if you were actually speaking with another person? And that was immensely clarifying, I think, in almost every decision that we had to make.*  
> <span class="qm">—— Alex Cornell · [05:00]</span> ^q2

> <span class="qz">它们太个人化了，能做太多不同的事情，所以你真的必须更多地去思考底层基础、系统、架构、已经就位的脚手架。</span>  
> *They're so personal and they can like do so many different things that you really kind of have to think more about the underlying foundation and the system, the architecture, the scaffolding that's in place.*  
> <span class="qm">—— Alex Cornell · [33:30]</span> ^q3

> <span class="qz">而且说实话，每次我大喊大叫时，这对智能体和在现实生活中都一样。通常是我自己的问题，不是它们的问题。</span>  
> *And to be honest, every time I'm yelling, it is true to agents as it is in life. It's usually a me problem. It's not a them problem.*  
> <span class="qm">—— Claire Vo · [36:17]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-06-talks-apps-agents-and-aggregation-stratechery|应用之后是什么？Ben Thompson 谈智能体时代的赢家]]<span class="pd-rz">同公司:Meta、Muse · 同概念:智能体 (agent)、生成式 UI (generative UI)</span>
- [[2026-08-11-twist-zuck-s-ai-manifesto-is-a-data-center-pr|扎克伯格 6500 字 AI 宣言：远见还是数据中心公关？]]<span class="pd-rz">同公司:Instagram、Meta · 同概念:智能体 (agent)</span>
- [[2026-09-16-howiai-muse-review-the-personal-ai-agent-that-g|Meta 的 Muse 亲测：我玩过设计最好的个人智能体]]<span class="pd-rz">同公司:Meta、Muse · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-30-cogrev-is-offense-or-defense-dominant-far-ai-s|AI 安全排行榜：谁扛住了越狱，谁没有]]<span class="pd-rz">同概念:思维链 (chain of thought)、智能体 (agent)</span>
- [[2026-08-12-beyondcoding-wes-bos-how-developers-stand-out-when-ai|当所有人都在用智能体写代码，你靠什么脱颖而出：与 Wes 聊开发者的当下]]<span class="pd-rz">同概念:智能体 (agent)、生成式 UI (generative UI)</span>
- [[2026-08-15-twentyvc-20growth-how-to-build-a-100m-growth-engi|SaaS增长该抄电商作业：付费广告立刻开打]]<span class="pd-rz">同公司:Meta · 同概念:智能体 (agent)</span>

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
