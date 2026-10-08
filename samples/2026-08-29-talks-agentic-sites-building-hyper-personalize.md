---
title: 智能体网站：为每一个人实时生成的超个性化网页
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "20:24"
type: episode
cover: "#64748b"
description: Adobe 首席科学家展示如何用 Cerebras 快速推理构建实时识别用户意图、逐人生成页面的网站，并延伸到客厅语音场景。
guests: ["[[Carlos Sanchez]]"]
companies: ["[[Cerebras]]", "[[Adobe Experience Manager]]", "[[Adobe]]"]
concepts: ["[[智能体网站]]", "[[超个性化]]", "[[推理]]", "[[Gemma 4]]", "[[PromptFoo]]", "[[OneLabs]]", "[[LLM]]"]
category: 智能体
tags:
  - 智能体
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-29-talks-agentic-sites-building-hyper-personalize#post","headline":"智能体网站：为每一个人实时生成的超个性化网页","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-29-talks-agentic-sites-building-hyper-personalize","mainEntityOfPage":"https://talk.solomind.cc/2026-08-29-talks-agentic-sites-building-hyper-personalize","description":"Adobe 首席科学家展示如何用 Cerebras 快速推理构建实时识别用户意图、逐人生成页面的网站，并延伸到客厅语音场景。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Carlos Sanchez"},{"@type":"Organization","name":"Cerebras"},{"@type":"Organization","name":"Adobe Experience Manager"},{"@type":"Organization","name":"Adobe"},{"@type":"Thing","name":"智能体网站 (agentic sites)"},{"@type":"Thing","name":"超个性化 (hyper-personalized)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"Gemma 4"},{"@type":"Thing","name":"PromptFoo"},{"@type":"Thing","name":"OneLabs"},{"@type":"Thing","name":"LLM"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体网站：为每一个人实时生成的超个性化网页","item":"https://talk.solomind.cc/2026-08-29-talks-agentic-sites-building-hyper-personalize"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体网站：为每一个人实时生成的超个性化网页</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体网站：为每一个人实时生成的超个性化网页

<div class="pd-byl"><b>Carlos Sanchez</b> · Adobe 首席科学家 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-29-talks-agentic-sites-building-hyper-personalize.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>



> [!info] 关联
> **人物** [[Carlos Sanchez]]
>
> **公司** [[Cerebras]] · [[Adobe Experience Manager]] · [[Adobe]]
>
> **概念** [[智能体网站]] · [[超个性化]] · [[推理]] · [[Gemma 4]] · [[PromptFoo]] · [[OneLabs]] · [[LLM]]

一个网站同时服务所有访客、内容千人一面——这套沿用多年的做法正在被推翻。这一集的主角是 [[Adobe|Adobe]] 的首席科学家，他负责的产品是很多人没听过的 [[Adobe Experience Manager|Adobe Experience Manager]](内容管理系统，为大品牌运营网站和数字资产)。

他现场演示了他们正在构建的「[[智能体网站|智能体网站]]」：网站能识别每个浏览者的意图，实时为他单独生成页面，生成一个页面只要约 1.1 秒。他反复强调一句话：这在今天已经可能了，而且只会更快、更便宜。

## 什么叫「一个人的受众」

营销人一直梦想为每个个体做个性化，他们把这个项目叫做「一个人的受众」(audience of one)。目标很明确：判断浏览用户是谁、想达成什么，然后实时为当前这个人个性化页面，最终带来更高的参与度或转化率。他们要解决的正是「一个网站适合所有人」这个老问题，同时帮客户免掉人工创建成千上万个页面变体的苦差，全部交给 AI。

一个关键设计决定：**不生成整站，只个性化部分区块**。营销团队有严格的品牌指南，整站生成容易出幻觉；所以被定制的是网站的不同区块——hero 卡片、产品推荐、博客信息流、导航、行动号召按钮等，而生成内容以全站为语料库做检索增强(RAG,即让模型基于既有文档而非凭空作答)，保证内容有根有据。

## 为什么选 Cerebras:快就是转化

个性化页面必须快——他们给自定的硬约束是页面生成不能超过一两秒，因为「网站越快，转化越多」是被反复验证的。于是模型选型看两个指标：准确性之外，更要速度。他们用 [[PromptFoo|PromptFoo]](一个可以针对多家模型提供商批量评估提示词和模型的开源工具)持续跑评估：同一套 15 个提示词，在大量模型和提供商上测准确性和延迟。

结果差距悬殊：用 [[Cerebras|Cerebras]] 跑 Google 的 [[Gemma 4|Gemma 4]] 模型，生成一个页面平均延迟 1.1 秒；第二名是 4.6 秒。现场实测：整页生成含一次 [[LLM|LLM]] 往返，其中 LLM 部分约一秒，吞吐达到每秒 2,200–2,300 token——他说这是「以前做梦都不敢想的速度」。

还有个反直觉的判断：**这件事不需要大模型**。因为要做的只是生成文本、决定区块怎么排布，不需要大量世界知识，小而快的模型反而更合适。评估也没有一次定终身——不同网站规模、行业、电商类型的要求不同，需要按站点持续跑模型评估，足够快、「够好但不追求完美」的小模型就是正确选择。

## 演示：浏览信号如何变成定制页面

整套架构分三层：浏览器端采集用户信号；后端(部分跑在 Google、部分在 Cloudflare)调用 LLM、基于全站 RAG 做[[推理|推理]]生成；Adobe Experience Manager 在边缘提供页面和静态内容，外加向量数据库和推理设施。

现场演示用的是一家咖啡机公司的全生成式示例站点。他像普通用户一样浏览、看故事、看产品，一个调试面板实时显示采集到的信号：用户被归类为「探索型」，访问过哪些页面、每页停留多久，这些数据全部喂给 LLM。随后他搜「我想找一台露营时能煮咖啡的咖啡机」，一秒多后返回的整页都是为他刚生成的：文案写着「露营不应意味着妥协」，推荐的全是适合露营的机型。

两类个性化场景值得区分：**即时搜索页**必须快到一两秒，因为用户在等；而「为你推荐」(For You)页面可以**预生成**——用户浏览时持续收集信号、后台生成，等他点开时内容已备好甚至可预取。后者对速度要求低，但要注意多次生成、多次 LLM 调用的成本。

搜索查询还会被归组成画像或意图类型(想买东西 vs 只想了解信息)，分几组、怎么对待每类客户由营销人员决定，AI 负责为每组人选内容、排区块——营销人员甚至可以直接用自然语言定义策略，再用分析数据驱动个性化循环不断改进。产品对比页也能按需生成：判断出用户在两个选项间犹豫时，即时给他一份量身定制的并排对比。

## 附赠玩法：给任何网站一小时内造一个智能体站

他们还做了个工具([[OneLabs|OneLabs]]):输入任意 URL,不到一小时就能生成一个对应的智能体站点，专门用来给客户做演示。他上周拿 AI engineering 的站点试了——生成出来的站就一个搜索框，搜「欧洲 AI 会议」就得到一份聚焦欧洲会议的定制页面。

最后一个把思路推到极致的演示：私人助手 + 生成式站点。他在客厅用 Google TV 语音说「我想买一台咖啡机」，电视上立刻出现一个完全针对这句查询生成的购买页面——不需要手机、不需要电脑，只靠声音和一个能实时呈现个性化内容的东西。至于「网页已死」的争论，没人知道答案，但他认为这类意图驱动、逐人生成的体验，正是网页还能走下去的一条路。

## 本集带走

- **只个性化区块，不生成整站**：营销有品牌红线，生成内容必须以全站为语料库(RAG)锚定，定制范围限定在 hero 卡片、推荐、导航等局部。
- **速度是硬指标**：页面生成控制在 1-2 秒内；Cerebras + Gemma 4 实测平均 1.1 秒、每秒约 2,300 token,比第二名 4.6 秒好一个量级。
- **这类任务用小模型就够了**：只是排布文本和区块，不需要大模型的世界知识；不同站点要求不同，用 PromptFoo 之类工具按站点持续评估、选「够快够好」的模型。
- **区分即时与预生成**：搜索结果页必须实时；推荐页可以后台预生成、预取，但要算清多次 LLM 调用的成本。
- **意图分组交给营销定义**：分几类画像、每类怎么对待由营销人员用自然语言定，AI 按组选内容，再用分析数据闭环改进。
- **一个站点一小时可复制**：输入 URL 即可生成对应的智能体演示站，这条路径已可规模化。

<div class="pd-sec pd-sec-q">全部金句 <span>0 条</span></div>



<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges|Tokens 进、互动出：推荐系统正在像 LLM 一样扩展]]<span class="pd-rz">同概念:LLM、推理 (inference)</span>
- [[2026-10-01-practicalai-open-models-and-the-future-of-physical-a|NVIDIA 开放模型与物理 AI:世界模型为什么是关键拼图]]<span class="pd-rz">同概念:LLM、推理 (inference)</span>
- [[2026-10-02-nopriors-frontier-chips-for-frontier-ai-labs-with|内存带宽才是 AI 芯片的下一个战场：Fractile 创始人 Walter 的押注]]<span class="pd-rz">同概念:LLM、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-27-doac-the-man-who-calls-bs-on-ai-ai-is-the-wor|Ed Zitron：生成式 AI 是一场万亿级骗局]]<span class="pd-rz">同概念:LLM、推理 (inference)</span>
- [[2026-09-03-practicalai-less-about-models-more-about-architectur|Rackspace 首席 AI 官 Chetan Gupta:企业该停止纠结模型、开始思考架构]]<span class="pd-rz">同概念:LLM、推理 (inference)</span>
- [[2026-10-05-talks-research-to-reality-with-google-deepmind|在浏览器里跑大模型：DeepMind 带来的开源新玩具]]<span class="pd-rz">同概念:Gemma 4、推理 (inference)</span>

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
