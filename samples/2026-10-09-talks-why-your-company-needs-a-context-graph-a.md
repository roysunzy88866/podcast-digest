---
title: 给公司装一个“大脑”：为什么你需要上下文图谱
podcast: 精选演讲
date: 2026-10-15
source_url: undefined
duration: "14:52"
type: episode
cover: "#64748b"
description: Merge 联合创始人兼首席技术官 Gil Feig 讲解什么是上下文图谱、为什么光接几个工具接口不够，以及怎么搭建公司级人工智能的数据底座。
guests: ["[[Gil Feig]]"]
companies: ["[[Merge]]"]
concepts: ["[[上下文图]]", "[[MCP]]", "[[实时 API 调用]]", "[[同步缓存数据]]", "[[技能]]", "[[记忆]]", "[[派生上下文]]", "[[向量数据库]]", "[[可追溯性]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-09-talks-why-your-company-needs-a-context-graph-a#post","headline":"给公司装一个“大脑”：为什么你需要上下文图谱","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-09-talks-why-your-company-needs-a-context-graph-a","mainEntityOfPage":"https://talk.solomind.cc/2026-10-09-talks-why-your-company-needs-a-context-graph-a","description":"Merge 联合创始人兼首席技术官 Gil Feig 讲解什么是上下文图谱、为什么光接几个工具接口不够，以及怎么搭建公司级人工智能的数据底座。","datePublished":"2026-10-15","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Gil Feig"},{"@type":"Organization","name":"Merge"},{"@type":"Thing","name":"上下文图 (context graph)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"实时 API 调用 (live API calls)"},{"@type":"Thing","name":"同步缓存数据 (cached data)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"记忆 (memory)"},{"@type":"Thing","name":"派生上下文 (derived context)"},{"@type":"Thing","name":"向量数据库 (vector database)"},{"@type":"Thing","name":"可追溯性 (traceability)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给公司装一个“大脑”：为什么你需要上下文图谱","item":"https://talk.solomind.cc/2026-10-09-talks-why-your-company-needs-a-context-graph-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给公司装一个“大脑”：为什么你需要上下文图谱</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给公司装一个“大脑”：为什么你需要上下文图谱

<div class="pd-byl"><b>Gil Feig</b> · Merge 联合创始人兼首席技术官 · 2026-10-15</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-09-talks-why-your-company-needs-a-context-graph-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">原因在于，获取上下文本身就是一套公司原则和流程。</div><div class="a">— Gil Feig <button class="pd-ts" data-t="06:52" data-who="Gil Feig" data-en="The reason is that getting context is actually a set of company principles and processes in and of itself." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Gil Feig]]
>
> **公司** [[Merge]]
>
> **概念** [[上下文图]] · [[MCP]] · [[实时 API 调用]] · [[同步缓存数据]] · [[技能]] · [[记忆]] · [[派生上下文]] · [[向量数据库]] · [[可追溯性]]

[[Gil Feig|Gil Feig]] 是 [[Merge|Merge]] 的联合创始人和首席技术官。Merge 服务超过 400 家企业客户，包括 OpenAI、Netflix、Ramp 和 Perplexity。

在这次演讲里，他讲了一个很多公司在做人工智能时会踩的坑：以为给智能体接上几个系统接口就万事大吉了。

真正需要的是一层完整的“[[上下文图|上下文图谱]]”——相当于公司的共享大脑。

## 光靠实时查接口，为什么答不了简单问题？

他举了个例子。员工问智能体：客户 A 上周为什么不高兴？这好办，智能体查一下 Zendesk 的工单就有答案了。

但问题换成“哪些客户上周不高兴”，难度陡增。智能体得把上周所有工单翻一遍。

如果换成“过去一年哪些客户不高兴”，实时查询根本做不到——每次只能拉一小批数据，翻到超时也翻不完 <button class="pd-ts" data-t="04:15" data-who="嘉宾" data-en="What if we're saying which customers were upset in the last year? We should be able to answer that. Our agent should be able to answer that, but it can't if it has to live look up and pull tickets 100 at a time, thousands and thousands of those until it times out and it just can't answer the question." aria-label="回原文"></button>。

Feig 解释说，这不是技术不行，而是底层激励不对。

没有哪家平台愿意提供一个能用自然语言直接查询的接口，因为把数据向量化要花钱，而且方便了你就意味着你更少去用他们的产品 <button class="pd-ts" data-t="04:38" data-who="嘉宾" data-en="So MCP is not fully solving a lot of these problems because the underlying access patterns of the APIs of these other platforms don't support a live lookup methodology." aria-label="回原文"></button>。

所以结论是：**凡是需要语义查询、跨大量数据做分析的场景，必须在本地同步一份数据副本**。

只有简单的单点查询和操作——比如在 Stripe 里查某个客户、做一笔操作——才适合实时接口。

## 上下文分四层，各有各的用处

Feig 把上下文图谱里的东西分成几类。

最上面是提示词、[[技能|技能]]和[[记忆|记忆]]。技能是关键：每个公司对“客户不高兴”的定义不一样。

有的看工单数量，有的公司习惯先看 Qualtrics 的问卷数据。“怎么判断客户满不满意”这件事本身，就是一个应该沉淀下来的技能 <button class="pd-ts" data-t="07:25" data-who="嘉宾" data-en="That's why skills are important because you need skills like how do we determine if a customer is happy? So now your agent should first check the skills before it then goes and starts checking your synced layer, your live layer for what data to get and then summarizing and returning it." aria-label="回原文"></button>。

然后是实时接口调用。搭建容易、运行便宜，适合简单查询。

第三类是同步缓存的数据，存在本地[[向量数据库|向量数据库]]里。这是回答复杂问题的必需品，但搭建更复杂、运行更贵，数据保鲜也难。

第四类是衍生上下文：拉数据的同时顺手做总结存下来，下次再遇到同样的问题就不用重新查、重新总结了。

## 一次查询进来，大脑是怎么运转的？

整个流程像一条流水线。提示词进来，先由路由器判断该交给谁处理。接着查有没有匹配的技能或记忆，有就先执行。

技能需要外部数据的话，先看本地缓存——数据够不够新鲜、有没有超过约定时限？新鲜就用缓存，不新鲜就退回实时接口。

凑够上下文后，把新发现存进记忆，总结好，发回去 <button class="pd-ts" data-t="10:09" data-who="嘉宾" data-en="So quick flowchart of how this works when a query comes in or a prompt comes in. So first thing here is, do we have a skill or memory match? If so, yes." aria-label="回原文"></button>。

Feig 强调这里面没有魔法，全是取舍的算术。一个实际例子：给客户 Acme 写一段状态汇报，包含续约风险和最近一次客服互动。

流程是查缓存的客户摘要，缺失就实时调 CRM，再查工单系统——但只拉 5 条工单，不拉全量历史，因为实时查询会超时 <button class="pd-ts" data-t="13:17" data-who="嘉宾" data-en="Otherwise, it might have to do a live lookup. We only want to pull five tickets. We can't pull the full history because, again, when we have live lookups, we run into timeout risk." aria-label="回原文"></button>。

## 数据从哪来的，永远别弄丢

最后一块是可追溯性。Feig 说这 upfront 看着不重要，但千万别丢掉数据的来源信息：

从哪取的、什么时候取的、用什么权限、谁访问过、有没有被转换过、原始样子是什么 <button class="pd-ts" data-t="12:15" data-who="嘉宾" data-en="So you need to know where it came from. Where did we fetch it? When did we fetch it?" aria-label="回原文"></button>。

ChatGPT 回答完附上来源链接，大家习惯了。但企业场景更严格：

当业务决策建立在这份数据上，当数据会过时、会被基于一年前的同步内容做决定，你必须知道它的来历。

他还提醒：数据过期多久应该作废，也要定好规则，比如超过一个月就不再采信。

## 三个要点值得记住

第一，**工具不等于上下文**。上下文图谱是数据、同步的副本、公司的流程和技能加在一起的东西，不只是接了哪些工具 <button class="pd-ts" data-t="13:33" data-who="嘉宾" data-en="We might store that derived summary, and we'll pass that back. So key takeaways, tools are not context. A context graph is gonna help you reason across the whole company." aria-label="回原文"></button>。

第二，数据多不等于好。要的是新鲜、高质量、按需拉取，同步进来的数据要结构化得当。

第三，每个答案都要能追溯。否则哪天人工智能做了个糟糕的决定，你连原因都查不出来。

## 本集带走

- 实时接口只够简单查询，语义分析和跨数据集的问题必须在本地同步数据副本
- 上下文分四层：技能与记忆、实时调用、同步缓存、衍生总结，混合使用
- “怎么判断客户满不满意”这类公司特有的流程，应该沉淀成智能体的技能
- 每条数据都要保留来源、时间、权限等元信息，过期数据要定作废规则
- 工具不等于上下文，公司的数据、流程和技能共同构成大脑

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">原因在于，获取上下文本身就是一套公司原则和流程。</span>  
> *The reason is that getting context is actually a set of company principles and processes in and of itself.*  
> <span class="qm">—— Gil Feig · [06:52]</span> ^q1

> <span class="qz">数据越多，不一定越好。</span>  
> *More data, not always better.*  
> <span class="qm">—— Gil Feig · [13:58]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-14-trainingdata-anthropic-s-katelyn-lesse-angela-jiang-b|Anthropic 平台负责人：Claude 平台的「三层蛋糕」与给 token 分工的「策略」]]<span class="pd-rz">同概念:MCP、技能 (skills)、记忆 (memory)</span>
- [[2026-08-29-talks-agents-are-where-microservices-were-in-2|Navan 架构师谈生产环境智能体：从运行时到护栏的实战分层]]<span class="pd-rz">同概念:MCP、技能 (skills)、记忆 (memory)</span>
- [[2026-09-17-sed-scaling-agent-workloads-at-vercel|把智能体从「桌上的宠物」搬进云端：Vercel 开源框架 Eve]]<span class="pd-rz">同概念:MCP、技能 (skills)、记忆 (memory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-08-talks-how-a-remote-company-builds-ai-fluency-e|1400 人分布在全球 82 国，这家公司怎么让员工学会用 AI]]<span class="pd-rz">同概念:MCP、技能 (skills)</span>
- [[2026-07-26-lennys-anthropics-first-technical-pm-on|Anthropic 产品负责人:评估是新的 PRD,不反驳你的 AI 才是好 AI]]<span class="pd-rz">同概念:技能 (skills)、MCP</span>
- [[2025-05-22-talks-mastering-claude-code-in-30-minutes|Claude Code 实战技巧：从提问到并行]]<span class="pd-rz">同概念:MCP</span>

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
