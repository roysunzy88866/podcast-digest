---
title: 让 AI 智能体读懂你的开源库：文档优化实战清单
podcast: 精选演讲
date: 2026-09-26
source_url: undefined
duration: "16:09"
type: episode
cover: "#64748b"
description: C15T 创始人 Christopher Burns 分享如何让 LLM 与编码智能体真正理解并推荐你的开源库，从 llms.txt 到 node_modules 内置文档的完整做法。
guests: ["[[Christopher Burns]]"]
companies: ["[[C15T]]"]
concepts: ["[[lead type]]", "[[智能体]]", "[[智能体体验]]", "[[llms.txt]]", "[[agents.md]]", "[[WebMCP]]", "[[node modules]]", "[[Aura AI]]"]
category: AI 编程
tags:
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-26-talks-how-we-got-llms-to-recommend-our-open-so#post","headline":"让 AI 智能体读懂你的开源库：文档优化实战清单","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-26-talks-how-we-got-llms-to-recommend-our-open-so","mainEntityOfPage":"https://talk.solomind.cc/2026-08-26-talks-how-we-got-llms-to-recommend-our-open-so","description":"C15T 创始人 Christopher Burns 分享如何让 LLM 与编码智能体真正理解并推荐你的开源库，从 llms.txt 到 node_modules 内置文档的完整做法。","datePublished":"2026-09-26","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Christopher Burns"},{"@type":"Organization","name":"C15T"},{"@type":"Thing","name":"lead type"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体体验 (agent experience)"},{"@type":"Thing","name":"llms.txt"},{"@type":"Thing","name":"agents.md"},{"@type":"Thing","name":"WebMCP"},{"@type":"Thing","name":"node modules"},{"@type":"Thing","name":"Aura AI"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"让 AI 智能体读懂你的开源库：文档优化实战清单","item":"https://talk.solomind.cc/2026-08-26-talks-how-we-got-llms-to-recommend-our-open-so"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让 AI 智能体读懂你的开源库：文档优化实战清单</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让 AI 智能体读懂你的开源库：文档优化实战清单

<div class="pd-byl"><b>Christopher Burns</b> · C15T 创始人 · 2026-09-26</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-26-talks-how-we-got-llms-to-recommend-our-open-so.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">真正有意思的是,我们从 wizards 安装我们的软件,变成了智能体安装它们</div><div class="a">— Christopher Burns <button class="pd-ts" data-t="03:34" data-who="Christopher Burns" data-en="So what's really funny is that we went from wizards installing our software to agents installing them" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Christopher Burns]]
>
> **公司** [[C15T]]
>
> **概念** [[lead type]] · [[智能体]] · [[智能体体验]] · [[llms.txt]] · [[agents.md]] · [[WebMCP]] · [[node modules]] · [[Aura AI]]

[[Christopher Burns|Christopher Burns]] 是开源 cookie 横幅库 [[C15T|C15T]](就是网站上那个 cookie 同意横幅)的创始人。他开场先自嘲:没有科学背景、不来自实验室,只是个"滑来滑去、点来点去、东西不好使"的普通开发者——"我只是在这个问题上比你们多折腾了一阵子"。<button class="pd-ts" data-t="00:37" data-who="嘉宾" data-en="So yeah, the whole point of it was that how I got LLMs to understand my open source library and what I did to do it well. Is it some kind of scientific background?" aria-label="回原文"></button>

但折腾出了真结果:C15T 已有 300 万 NPM 下载量、45% 的月环比增长、2800 个网站在生产环境使用,从 Minlify 到 Zed 都在用。

这意味着获客逻辑变了:过去是 Collison 兄弟那种"把笔记本塞到你手里帮你装上 Stripe"的著名推广方式,如今"差不多就是一条提示词"。以前优化的是开发者体验,现在同一套基元正在变成**[[智能体体验|智能体体验]]**。<button class="pd-ts" data-t="04:03" data-who="嘉宾" data-en="These are the co-founders of Stripe, the Collison Brothers, and they had a really classic saying of like a Collison Brothers install, and they would hand you their laptop, and they would install Stripe." aria-label="回原文"></button>

## 核心思路:没有万能工具,只有一条文档流水线

他的第一个判断是:没有任何单一工具能解决所有问题,"像蝙蝠侠的万能腰带,很多非常小的东西,各自针对不同领域"。他们把这些小工具都构建进 C15T,后来又抽象成一个独立开源框架(演讲中称为 [[lead type|lead type]]),做成一条"框架中立的文档流水线":接收你的 .mdx 文件,运行一条生成命令,输出所有针对[[智能体|智能体]]体验优化的内容。其他开发者公司已在实现并看到类似效果。<button class="pd-ts" data-t="05:10" data-who="嘉宾" data-en="So all of the things that we're gonna talk about now are things that we have already solved with this open source framework. We have our friends at other developer companies implementing it and seeing similar results about how to optimize for the agent experience." aria-label="回原文"></button>

下面是具体清单——从几乎人人都知道的,到大多数人还没做的。

## 第一层:llms.txt 和 llms-full.txt

**问题一:文档有几百个页面,智能体怎么导航找到答案?** 第一个解法是 [[llms.txt|llms.txt]]。

但研究中有个反直觉发现:**不要自动生成,要手写**。把它写成"你正试图把答案传达给 LLM"的样子——"大约 40 行优质内容,胜过 1000 行噪音"。<button class="pd-ts" data-t="06:24" data-who="嘉宾" data-en="It is much better to write your LLMs.txt from hand. Obviously our tool wraps it, but write it as you are trying to get the answers across to the LLMs. For about 40 good lines beats 1,000 lines of noise from our testing." aria-label="回原文"></button>

**问题二:智能体不会"浏览",只会"抓取"。** 所以还需要 llms-full.txt:把它想象成一个站点地图,包含实际页面、链接、以及每个页面用途的简短描述,供 LLM 参考。<button class="pd-ts" data-t="06:44" data-who="嘉宾" data-en="And that comes to the second issue of agents don't know how to browse. They know how to fetch. So you then need the second part of the solution of the LLMs full." aria-label="回原文"></button>

## 第二层:直接给智能体发 Markdown,别发 HTML

事情开始变复杂、也是当前大量优化集中的地方:**HTML 很贵(token 意义上),为什么不直接把 Markdown 交给智能体?** 可以,而且现在人人都开始做 ".md 后缀"——在正常网址末尾加 .md(比如 Next.js Quickstart 加 .md),加载后就进入 Markdown 版本。<button class="pd-ts" data-t="07:07" data-who="嘉宾" data-en="Again, most people have heard these two solutions. But where things are starting to get very complicated, and we're seeing a lot of optimizations right now, is that HTML is expensive, and why can't we just ship Markdown to the agents?" aria-label="回原文"></button>

但真正关键的一步大多数人没做:在网站 header 里声明存在 Markdown 替代版本。所有最好的文档网站(Minify、Vercel、C15T)都在 header 里放了这一行,等于告诉每个来访的智能体"这里有 Markdown 版"。

至于谁真的支持这个声明?"Perplexity、一些智能体,这些都还没有定论。"<button class="pd-ts" data-t="07:49" data-who="嘉宾" data-en="But what's really important here, and it's really worth noting, is this line at the bottom. If you look at all the best documentation websites, Minify, Vercel, C15T, pat myself on the back, they all have this in the header." aria-label="回原文"></button>

另外 .md 文件要保证**多种获取方式**,因为不是所有智能体能力相同:
- 直接加 .md 后缀;
- 在 Next.js config 里加重定向:检测到请求 header 接受 markdown 时,不返回 HTML 而返回 markdown;
- 提供 URL 查询参数 `mode=agent`,给那些无法附加 header 标签的智能体用。<button class="pd-ts" data-t="08:24" data-who="嘉宾" data-en="And then the second thing as well is that taking the .mds You need to make sure that they're available through multiple methods. So one of them is like the .md." aria-label="回原文"></button>

## 第三层:让智能体能向你的网站提问(WebMCP)

目前智能体只能抓取你的网页,无法向网站提问。方向是 [[WebMCP|WebMCP]]——还很早期,但他的工具已经向 WebMCP 暴露了三个工具:SearchDocs、GetPages、AskDocs,把文档上下文整合起来,智能体可以直接提问。他甚至认为未来会出现通过电子邮件通信的智能体,旧金山已有公司在做。<button class="pd-ts" data-t="09:15" data-who="嘉宾" data-en="So they're the ones that pretty much everybody knows, and it's pretty basic internet knowledge at this point. But one of the really interesting ones is where we're going next, and our tooling is also helping this, is that an agent can't ask your website anything." aria-label="回原文"></button>

## 最重要也最不舒服的真相:智能体根本不访问你的网站

对任何有开发者模块的人(NPM、cargo、Python),"令人不安的真相是,编码智能体实际上从不访问那个网站。它们实际访问的是 node_modules。"<button class="pd-ts" data-t="10:24" data-who="嘉宾" data-en="And I think the most important one that anybody who has any type of developer module surface, NPM modules, cargo, Python, whatever, is that the uncomfortable truth is that coding agents are" aria-label="回原文"></button> 它们读仓库、读 node_modules,带着过时的训练数据,试图从编译后的源码里搞清楚这个库能干什么。

解法是跟着 Vercel 这类思想领袖做:把打包好的 markdown 文档直接放进 node_modules,附带一个 [[agents.md|agents.md]] 文件,内容大意是"有问题的话,所有文档都在这里,去 grep 它们"。<button class="pd-ts" data-t="10:46" data-who="嘉宾" data-en="They have previous stale training data, and they're trying to work it out on what it can do from the compiled source. So again, following what people like Vercel are doing and people who are thought leaders in this industry is that we take the bundled markdown documents and then we also put them in the node modules with an agents.md file." aria-label="回原文"></button>

这一招效果出奇地真实:跨多个模型测试,**相比去搜索网页、找工具、从代码库拉 markdown 文件,能节省近 50% 的 token**。<button class="pd-ts" data-t="11:22" data-who="嘉宾" data-en="And we actually see that this has surprisingly real effects. We can see that between many different models, almost 50% token saving on instead of trying to search the web, find the right tools, pulling the markdown files from your code base." aria-label="回原文"></button> 如果你的库经常变动,node_modules 内置文档是非常有效的方案——智能体拿到的永远是和安装版本一致的文档。

这在不用任何 skills 的情况下就生效,也可以加一条 skill 明确说"先看 node_modules"。agents.md 里还可以写得更具体:"使用 C15T Next.js 库时,阅读打包好的文档,验证它们是否匹配,再继续。"<button class="pd-ts" data-t="11:54" data-who="嘉宾" data-en="This is also working without any skills, but if you want as well, you can add skills to it to say, look at the node modules and go from there. And again, just doubling down into this point, looking at like the agents.md file, you can say like when working with C15T Next.js library, read the bundles and..." aria-label="回原文"></button>

## 怎么检验你的网站对智能体是否友好

这个领域刚开始出现测试框架。Cloudflare 推出了一个,他最喜欢的是一个叫 [[Aura AI|Aura AI]] 的新工具:输入你的网站,它会给出优化建议。他乐意展示自家 59 分的成绩——"三周前它还要高得多",因为评分标准一直在变,这本身就是这个领域"永远在变"的写照。<button class="pd-ts" data-t="13:04" data-who="嘉宾" data-en="And one of the big things was when I put this talk together, you know, we were seeing the results that Claude was recommending, but there was not really any, like, test suites yet or test harnesses on, like, is your site agent ready?" aria-label="回原文"></button>

问答环节有网站代理公司问:从零建一个普通网站(不一定是开发者工具),该专注哪个方法?他的答案:第一是为**每一个页面**提供 .md 文件(很多 CMS 不是这样构建的,他自己甚至为此造了个自用 CMS);优先级是 llms.txt 第一、llms-full.txt 第二;即使你的系统没有 markdown,也推荐手动做这些文件。理由很直接:越来越多的网站访问者是智能体而不是真实人类,从 token 效率角度也该主动提供 markdown。<button class="pd-ts" data-t="14:49" data-who="嘉宾" data-en="If you were just building a website, not necessarily a developer tool, but just a website to be found, which of these methods would you concentrate on if you're starting from scratch?" aria-label="回原文"></button>

## 本集带走

- **手写 llms.txt,别自动生成**:约 40 行优质内容胜过 1000 行噪音;配上 llms-full.txt 当"站点地图"(页面+链接+一句话用途)。
- **给每个页面提供 .md 版本**,并在 header 里声明存在 Markdown 替代版;同时支持多种获取方式(.md 后缀、按 header 协商返回 markdown、`mode=agent` 查询参数)。
- **把打包好的文档直接放进 node_modules,附 agents.md**:智能体实际读的是 node_modules 而不是你的网站——实测能省近 50% token,库频繁更新时尤其有效。
- **用 Aura AI / Cloudflare 的工具检测网站对智能体的友好度**,但分数标准一直在变,持续跟进即可。
- **别追求完美**:市场、智能体、LLM 永远在变,"你添加的每一件小事确实都很重要"。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">真正有意思的是,我们从 wizards 安装我们的软件,变成了智能体安装它们</span>  
> *So what's really funny is that we went from wizards installing our software to agents installing them*  
> <span class="qm">—— Christopher Burns · [03:34]</span> ^q1

> <span class="qz">手写你的 LLMs.txt 是好得多的。</span>  
> *It is much better to write your LLMs.txt from hand.*  
> <span class="qm">—— Christopher Burns · [06:20]</span> ^q2

> <span class="qz">从我们的测试来看,大约 40 行优质内容胜过 1,000 行噪音。</span>  
> *For about 40 good lines beats 1,000 lines of noise from our testing.*  
> <span class="qm">—— Christopher Burns · [06:33]</span> ^q3

> <span class="qz">但事情开始变得非常复杂、也是我们现在看到大量优化的地方,是 HTML 很昂贵,为什么我们不能直接把 Markdown 交给智能体?</span>  
> *But where things are starting to get very complicated, and we're seeing a lot of optimizations right now, is that HTML is expensive, and why can't we just ship Markdown to the agents?*  
> <span class="qm">—— Christopher Burns · [07:07]</span> ^q4

> <span class="qz">我们可以看到,在许多不同的模型之间,与试图搜索网页、找到正确的工具相比,能节省近 50% 的 token,不用从你的代码库中拉取 markdown 文件。</span>  
> *We can see that between many different models, almost 50% token saving on instead of trying to search the web, find the right tools, pulling the markdown files from your code base.*  
> <span class="qm">—— Christopher Burns · [11:22]</span> ^q5

> <span class="qz">所以永远不要因为追求完美而卡住。</span>  
> *So never get caught with being perfect.*  
> <span class="qm">—— Christopher Burns · [14:00]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-05-27-devtools-cloudflare-devs|Cloudflare 三人聊：让模型直接写代码，别再堆工具了]]<span class="pd-rz">同公司:Cloudflare · 同概念:智能体 (agent)</span>
- [[2026-07-31-talks-patrick-collison-is-ai-breaking-the-lean|Stripe 创始人 Patrick Collison：现在是有史以来最好的创业时机]]<span class="pd-rz">同公司:Stripe · 同概念:智能体 (agent)</span>
- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-16-talks-rebuilding-the-web-for-agents-liad-yosef|智能体网络来了：网站和浏览器正在被“拆成原子”]]<span class="pd-rz">同概念:llms.txt、智能体 (agent)、WebMCP</span>
- [[2026-09-24-practicalai-from-agents-md-to-enterprise-deployment|把智能体当普通应用来部署:企业级 AI 落地的老办法新用途]]<span class="pd-rz">同概念:agents.md、智能体 (agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Stripe、Vercel · 同概念:智能体 (agent)</span>

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
