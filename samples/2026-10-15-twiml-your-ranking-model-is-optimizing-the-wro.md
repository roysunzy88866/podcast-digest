---
title: 别再优化点击了：你的排序模型瞄错了目标
podcast: The TWIML AI Podcast
date: 2026-10-16
source_url: undefined
duration: "52:43"
type: episode
cover: "#64748b"
image: "/covers/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro.jpg"
description: "Sequin 联合创始人 Zoe Weil 讲解为什么电商排序不该学 TikTok,以及如何从犹豫和滚动里读出购物者真心。"
host: "[[Sam Charrington]]"
cohosts: ["[[Zoe Weil]]"]
companies: ["[[Sequin]]"]
concepts: ["[[排序模型]]", "[[大型事件模型]]", "[[隐式反馈]]", "[[Rust]]"]
category: 创业与行业
tags:
  - 创业与行业
socialImage: "https://talk.solomind.cc/covers/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro#post","headline":"别再优化点击了：你的排序模型瞄错了目标","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro","mainEntityOfPage":"https://talk.solomind.cc/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro","description":"Sequin 联合创始人 Zoe Weil 讲解为什么电商排序不该学 TikTok,以及如何从犹豫和滚动里读出购物者真心。","datePublished":"2026-10-16","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro.jpg","about":[{"@type":"Person","name":"Sam Charrington"},{"@type":"Person","name":"Zoe Weil"},{"@type":"Organization","name":"Sequin"},{"@type":"Thing","name":"排序模型 (ranking model)"},{"@type":"Thing","name":"大型事件模型 (large event models)"},{"@type":"Thing","name":"隐式反馈 (implicit feedback)"},{"@type":"Thing","name":"Rust"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"别再优化点击了：你的排序模型瞄错了目标","item":"https://talk.solomind.cc/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再优化点击了：你的排序模型瞄错了目标</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别再优化点击了：你的排序模型瞄错了目标

<div class="pd-byl"><b>Zoe Weil</b> · Sequin 联合创始人 · 2026-10-16</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-15-twiml-your-ranking-model-is-optimizing-the-wro.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">这些在大多数人看来也许互不相关，但线上消费的每一美元都经过某个地方的排序模型。</div><div class="a">— Zoe Weil <button class="pd-ts" data-t="03:27" data-who="Zoe Weil" data-en="And these seem maybe to most people to be unrelated, but every dollar of online spending consumption goes through a ranking model somewhere." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam Charrington]] · [[Zoe Weil]]
>
> **公司** [[Sequin]]
>
> **概念** [[排序模型]] · [[大型事件模型]] · [[隐式反馈]] · [[Rust]]

你在网上看到的一切——一条裤子、一间酒店、一条广告——背后都有一个[[排序模型|排序模型]]在决定先给你看什么。

[[Zoe Weil|Zoe Weil]] 联合创办的 [[Sequin|Sequin]] 就是为全球最大的消费公司做这件事的。她的核心观点很反直觉：

几十年来大家都在解决“帮用户找到东西”，但真正值钱的是“在用户购买意愿最强的那一刻，影响他的行为”。

## 为什么说排序模型优化错了东西？

信息检索领域的传统智慧是：只要检索结果和查询足够相关，转化率自然会上去。Zoe 在研究生院学的就是这个。

她承认这条路已经被走通了，前沿实验室做得很好，不再是有趣的研究方向。

但商业世界是另一回事。TikTok 和 Instagram 表面上在做推荐，实际上是在潜移默化地让你想要原本不想要的东西。

它们能做到，靠的是几十亿人每天打开应用 10 到 21 次产生的海量数据 <button class="pd-ts" data-t="06:10" data-who="Zoe" data-en="And the reason that they're able to do that is that billions of people use their apps and are frankly addicted to those apps. They open their apps 10 to 21 times a day." aria-label="回原文"></button>。

而 Wayfair、Priceline 这样的大公司做不到——没人像刷 TikTok 一样刷家具网站。所以无论多大，消费公司天然缺数据。

## 缺数据怎么办？往一次会话里挖

Sequin 的答案不是跨客户汇总数据(他们明确不共享客户数据)，**而是把单次访问的信息榨到极致**：

悬停多久、滚动多快、在两件商品之间来回多少次。

所有数据要在纳秒级清洗、毫秒级过模型，50 毫秒内把重新排序的结果端给用户。

支撑这一切的是他们叫“大事件模型”的东西——不是大语言模型，Sequin 几乎不用大语言模型，也不做生成式 AI。

大事件模型类比大语言模型对文本的泛化能力，但泛化的对象是人的行为和事件流 <button class="pd-ts" data-t="09:52" data-who="Zoe" data-en="And the idea behind large event models is that the same way that large language models are able to generalize. to text, including text that they haven't seen before ever." aria-label="回原文"></button>。

技术栈上有个反常识的选择：核心后端全部用 [[Rust|Rust]] 写。

主持人问能不能用 Python,Zoe 的回答很干脆：“我真心觉得不行”，因为超低延迟的特征变换和推理太核心了 <button class="pd-ts" data-t="20:56" data-who="Zoe" data-en="I do not think we could have done it in Python. Certainly we do a lot of R&amp;D in Python, but the core of our backend is all in Rust. So no, I can definitively say we could not have done it in Python at all." aria-label="回原文"></button>。

他们赶上了一个好时机——Rust 在开源 AI 库里的支持在过去几年才成熟起来。

## 你买了网球拍，就不该再给你看网球拍

一个具体例子。你把网球拍加进购物车后，Sequin 不会展示其他网球拍——那只会拉低转化。他们会推荐吸汗带、网球球。

但具体推哪一款，因人而异：你是怎么在蓝色和粉色之间做出决定的？花了多久？来回比了多少次？

有意思的是，同一个“配套商品”模块在商品详情页和购物车页面的排序逻辑完全不同。

到了购物车页，你已经认定了这支球拍；在详情页，你还没committed,所以要展示更多样化的选择 <button class="pd-ts" data-t="29:31" data-who="Zoe" data-en="Complimentary module on an Add to Cart page. And that's because by the time the user gets to the Add to Cart page, they've already committed to the tennis racket, right?" aria-label="回原文"></button>。

关键在于：Sequin 完全不关心用户身份。姓名、位置统统不要。在他们眼里，“用户就是一次会话里的一串事件” <button class="pd-ts" data-t="26:56" data-who="Zoe" data-en="When I think about a user, think about it as a collection of events in a session. I don't care if you're John Smith or Adam, whatever, to seek when you're just a collection of events." aria-label="回原文"></button>。

这也是她回应“监控资本主义”质疑的方式：

不做跨站追踪，不存储个人信息，只在一次实时交互里工作——像店里的售货员注意到你在某件商品前多停留了一会儿。

## 最被浪费的数据，是那 99% 没买的人

Zoe 讲了一个她和大银行高管的对话。对方炫耀自己有海量交易数据，她的回应是：

这是最没意思的数据，因为 99% 的人根本不会成交，“**我感兴趣的是你实际上没有的那 99% 的数据**” <button class="pd-ts" data-t="37:25" data-who="Zoe" data-en="That transaction data is useless because 99% of people don't actually convert. I'm interested in the 99% of data you actually don't have. And that's what I have." aria-label="回原文"></button>。

这一点对做 AI 系统的人有普遍启示。很多团队做检索增强、做智能助手，反馈信号只有点击或点赞，团队苦于反馈太少。

Sequin 的思路是：[[隐式反馈|隐式反馈]]几乎无限——滚动速度、悬停时长都是反馈。

另一个成果：广告收入和自然转化通常此消彼长，因为列表位置就那么多。

Sequin 声称能让两者同时上涨，因为他们展示的是用户真正想看的东西，而不是诱导点击 <button class="pd-ts" data-t="35:19" data-who="Zoe" data-en="Now what Sequin has proven that we can do time and time again is we can get people to click significantly more and get them to also buy after the fact. Why is that?" aria-label="回原文"></button>。

## 大厂论文为什么帮不了你

Zoe 对行业惯例的一段话很扎心。这个领域最大的创新者是社交媒体公司，它们发表了大量论文，Amazon 以前也常发。

Wayfair 或 Priceline 的科学家读论文、照着实现，往往也能实现成功——但产出的效果和人家不一样，因为你没有他们的数据 <button class="pd-ts" data-t="15:53" data-who="Zoe" data-en="You're going to read these papers and you're going to try to implement it. And you know what? Oftentimes you're successful at implementing it, except guess what?" aria-label="回原文"></button>。

Sequin 的解法之一是自己积累论文里没有的知识。

她指出大厂科学家发论文要等几个月的法务审批，发出来的版本已经严重稀释。

Sequin 从这些机构挖人，把没有发表过的经验(她称之为“剩余知识”)整理成内部的评测工具库和知识库，再加上嵌入客户现场的部署工程师，构成了他们所谓的“递归栈”的核心。

## 本集带走

- 排序系统的默认目标是“帮人找到东西”，但在商业场景里，真正的目标是影响高购买意愿时刻的行为——两者的优化方向完全不同。
- 数据匮乏的公司照搬大厂论文，即使实现成功也达不到同样效果，因为缺的不是算法而是数据。
- 点击和交易只占用户行为的一小撮；悬停时长、滚动速度、来回比较的次数这些隐式信号才是被浪费的富矿。
- 身份不重要：把用户看作“一次会话中的一串事件”，既能做实时个性化，又避开跨站追踪的隐私问题。
- 超低延迟系统选语言是认真的事：Sequin 的核心后端全用 Rust,他们认为 Python 做不到毫秒级的特征变换和推理。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">这些在大多数人看来也许互不相关，但线上消费的每一美元都经过某个地方的排序模型。</span>  
> *And these seem maybe to most people to be unrelated, but every dollar of online spending consumption goes through a ranking model somewhere.*  
> <span class="qm">—— Zoe Weil · [03:27]</span> ^q1

> <span class="qz">相反，它们是在随着时间推移以微妙的方式扭曲终端用户的意愿，让他们想要那些原本不会想要的东西，对吧？</span>  
> *Instead, they're bending the end user's will in subtle ways over time to make them want things that they otherwise wouldn't want, right?*  
> <span class="qm">—— Zoe Weil · [05:27]</span> ^q2

> <span class="qz">所以，无论你作为一家消费类业务规模有多大，你都会面临数据匮乏。</span>  
> *And so regardless of how big you are as a consumer business, you are going to be data starved.*  
> <span class="qm">—— Zoe Weil · [07:14]</span> ^q3

> <span class="qz">关键是，我能让人们多买 2 美元，但我可以持续地、大规模地做到这一点。</span>  
> *The point is I can get people to buy $102, but I can do it consistently and at scale.*  
> <span class="qm">—— Zoe Weil · [07:59]</span> ^q4

> <span class="qz">我们完全不是在试图帮助人们找到东西。</span>  
> *We are not at all trying to help people find things.*  
> <span class="qm">—— Zoe Weil · [09:10]</span> ^q5

> <span class="qz">所以不，我可以明确地说，我们完全不可能用 Python 做成。</span>  
> *So no, I can definitively say we could not have done it in Python at all.*  
> <span class="qm">—— Zoe Weil · [21:03]</span> ^q6

> <span class="qz">我说，实际上，那是我能拿到的最不有趣的数据，因为你只给我看了人类行为的一小部分。</span>  
> *I was like, actually, that's like, that's the least interesting data you could give me because you're only showing me a sliver of human behavior.*  
> <span class="qm">—— Zoe Weil · [37:07]</span> ^q7

> <span class="qz">那些交易数据是没用的，因为 99% 的人实际上不会转化。</span>  
> *That transaction data is useless because 99% of people don't actually convert.*  
> <span class="qm">—— Zoe Weil · [37:18]</span> ^q8

> <span class="qz">我感兴趣的是你实际上没有的那 99% 的数据。</span>  
> *I'm interested in the 99% of data you actually don't have.*  
> <span class="qm">—— Zoe Weil · [37:25]</span> ^q9

> <span class="qz">问题是，让这些模型工作需要你对什么特征驱动价值有内在的理解，而这没有写在任何研究论文里。</span>  
> *The thing is that getting these models to work requires you to have an innate understanding of what features drive value, and that is not written in any research paper.*  
> <span class="qm">—— Zoe Weil · [38:44]</span> ^q10

> <span class="qz">语言，无论你能多有创造力，都有一定的重复性，而人类根本没有，对吧？</span>  
> *Language, despite however creative that you can get, has a certain repetition to it that human beings simply do not have, right?*  
> <span class="qm">—— Zoe Weil · [49:11]</span> ^q11

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-07-28-talks-blake-scholl-how-50-people-built-a-super|Boom 创始人：从纸板模型到突破音障，再让超音速飞行在美国重新合法]]<span class="pd-rz">同公司:Amazon</span>
- [[2026-08-05-bigtech-how-the-ai-bet-pays-off-ai-lab-strategy|红杉合伙人 David Cahn：AI 需赚回 4 万亿，这场棋局没有中间态]]<span class="pd-rz">同公司:Amazon</span>
- [[2026-08-08-bigtech-demis-steps-down-apple-s-memory-problem|巨头财报季:AI 军备竞赛下的供应链、会计戏法与路线分歧]]<span class="pd-rz">同公司:Amazon</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:Rust</span>
- [[2026-09-09-pragmatic-building-codex-with-tibo-sottiaux|Codex 负责人亲述:OpenAI 内部如何造编程智能体]]<span class="pd-rz">同概念:Rust</span>
- [[2026-09-11-talks-building-ambitious-software-jonathan-kel|从拒用 AI 到全面拥抱：Dioxus 团队的智能体编程实战课]]<span class="pd-rz">同概念:Rust</span>

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
