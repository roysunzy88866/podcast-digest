---
title: 训练机器人缺数据？答案藏在数十亿网络视频里
podcast: 精选演讲
date: 2026-09-30
source_url: undefined
duration: "16:24"
type: episode
cover: "#64748b"
description: Bright Data 的 Rafael 介绍面向机器人与世界模型训练的视频动作索引：不按关键词、而按动作搜索网络视频，先搜索后采集。
guests: ["[[Rafael Levi]]"]
companies: ["[[Bright Data]]"]
concepts: ["[[世界模型]]", "[[视频索引]]", "[[训练数据]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-24-talks-physical-ai-s-next-bottleneck-is-finding#post","headline":"训练机器人缺数据？答案藏在数十亿网络视频里","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-24-talks-physical-ai-s-next-bottleneck-is-finding","mainEntityOfPage":"https://talk.solomind.cc/2026-09-24-talks-physical-ai-s-next-bottleneck-is-finding","description":"Bright Data 的 Rafael 介绍面向机器人与世界模型训练的视频动作索引：不按关键词、而按动作搜索网络视频，先搜索后采集。","datePublished":"2026-09-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Rafael Levi"},{"@type":"Organization","name":"Bright Data"},{"@type":"Thing","name":"世界模型 (world models)"},{"@type":"Thing","name":"视频索引 (video indexing)"},{"@type":"Thing","name":"训练数据 (training data)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"训练机器人缺数据？答案藏在数十亿网络视频里","item":"https://talk.solomind.cc/2026-09-24-talks-physical-ai-s-next-bottleneck-is-finding"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>训练机器人缺数据？答案藏在数十亿网络视频里</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 训练机器人缺数据？答案藏在数十亿网络视频里

<div class="pd-byl"><b>Rafael Levi</b> · Bright Data · 2026-09-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-24-talks-physical-ai-s-next-bottleneck-is-finding.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">正如我所说,AI 已经不再是难的部分了,数据才是。</div><div class="a">— Rafael Levi <button class="pd-ts" data-t="02:31" data-who="Rafael Levi" data-en="So as I said, the AI is no longer the hard part. The data is." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Rafael Levi]]
>
> **公司** [[Bright Data]]
>
> **概念** [[世界模型]] · [[视频索引]] · [[训练数据]]

训练 AI 机器人，最难的部分已经不是模型，而是数据。[[Bright Data|Bright Data]] 的 Rafael(在这家做数据采集的公司干了八年多)在一次演讲里给出了一个数据来源的新思路：别再雇人录动作了，去网上搜视频——但要按「动作」搜，不是按标题搜。

先把问题的量级摆出来。聊天 LLM 有数万亿词的文本可以吃，图像生成有数十亿张带标注的图片，但机器人领域呢？只有大约一百万个「机器人在做事情」的视频，数据集非常小 <button class="pd-ts" data-t="02:39" data-who="Rafael" data-en="And this is what I want to talk about, right? So for chat LLMs, there's trillions of words and texts, right? So we have so much text data to train the LLMs." aria-label="回原文"></button>。

现在业界的补法主要有几条路，Rafael 逐个拆了：

- **雇人录动作**：付钱让人录「怎么开门」「怎么坐下」。问题是被要求做动作时，人做得不自然——动作跟你平常随手开门完全不同，这是有偏差的数据，训练效果打折扣。而且人在镜头前本来就会变行为。
- **仿真**：便宜，但电子游戏里的物理引擎「几乎可以了，但还不足以用来训练机器人」。
- **手动遥控机器人采数据**：可行但不可扩展——一天顶多录八小时，一年能攒多少？

替代方案就是网络。YouTube 上有大约五十亿个视频，第一人称开门的视频可能有数百万小时；每天都有网络视频在展示重力、运动、因果(事故就是最大的因果关系)，是机器人很好的训练素材 <button class="pd-ts" data-t="05:50" data-who="Rafael" data-en="You'll be surprised. Every day, the web video shows gravity, motions, right? So cause and effect, obviously accidents, the biggest cause and effect, right?" aria-label="回原文"></button>。

这不只是直觉，有实证：Meta 训练的一个 AI 模型，先喂了大约一百万小时的真实世界视频，之后只需要 62 小时的真实机器人数据，就能实际控制一个真机器人——全程不需要仿真 <button class="pd-ts" data-t="06:12" data-who="Rafael" data-en="The problem is that there's a lot of noise, right? Oh, and for example, right, so one of the AI models that Meta trained, they gave it about a million hours of real-world videos, and then all it took is 62 hours of real robotics data to actually control a real robot." aria-label="回原文"></button>。

「视频里没人告诉你机器臂该怎么动」也不是障碍。已有方法可以让 AI 逐帧对比两幅画面、测量运动差异，持续做下去就能推算出角度、距离等训练所需的全部信息——所以不一定需要传感器数据，只需要对视频做加工 <button class="pd-ts" data-t="07:09" data-who="Rafael" data-en="So there is methods actually out there how an AI can distinguish and actually learn from the actions that are in the video. If you take two frames, frame by frame," aria-label="回原文"></button>。

真正的问题是噪音和浪费。NVIDIA 训练 Cosmos 机器人时下载一百万小时视频、丢掉大约 96%;Stable Video Diffusion 也丢弃 74%。这些是白白浪费的算力、带宽、存储和钱 <button class="pd-ts" data-t="08:00" data-who="Rafael" data-en="So a few more examples, right? So for example, NVIDIA, when they train in the Cosmos robot, they're throwing out about 96% of the video. So what does that mean?" aria-label="回原文"></button>。

于是 Bright Data 的产品思路是「先搜索，后采集」：预先给数十亿视频建索引(目前已索引 11 亿个)，让你**按动作搜索**——输入「人在洗碗」「人在叠 T 恤」这样带细节的查询(描述越细，返回越准)，直接拿到这些动作的视频片段，而不是先下载百万小时再扔掉九成。片段附带时间戳、匹配得分和帧数，通过 API 返回，再稍做运动/距离处理就能喂给机器人训练。噪音少了，训练时的幻觉问题也跟着减少 <button class="pd-ts" data-t="13:21" data-who="Rafael" data-en="You can actually get exactly the specific actions that you are interested in. Again, it's very crucial for robotic training because noise creates problems, hallucinations, right?" aria-label="回原文"></button>。

用途也不止机器人。机器人训练之外，物理[[世界模型|世界模型]]、甚至品牌监测都用得上——视频标题完全没提你的品牌，但画面里桌上摆着你的化妆品，按标题搜索永远找不到，按画面索引就能找到 <button class="pd-ts" data-t="12:05" data-who="Rafael" data-en="Now, I'm not sure if any of you are training any robots, so I'm going to give you another example of how useful it could be. Let's say you have a brand, and you want to know where your brand is being demoed on videos." aria-label="回原文"></button>。

> 【背景】Waymo 等自动驾驶公司确实依赖大量行车视频数据训练模型，但这是讲者未提及的背景补充。

Rafael 的核心质问是：所有东西都能在网上找到时，为什么要雇一百万人去录开门视频？

## 本集带走

- **机器人训练的数据瓶颈是真实的**：文本有数万亿词、图片有数十亿张，机器人视频只有约一百万个，量级差了三四个数量级。
- **网络视频可以当机器人的[[训练数据|训练数据]]**：Meta 用约一百万小时通用视频 + 仅 62 小时机器人数据就让 AI 控制了真机器人；AI 可以靠逐帧测运动差异从普通视频里提取角度、距离，不需要传感器数据。
- **雇人录动作的数据是带偏差的**：被指令做的动作不自然，不等于直觉行为，训练效果不同。
- **「先搜索、后采集」避免绝大部分浪费**：直接按动作检索预索引的视频(他们已索引 11 亿个)，拿到片段而非下载百万小时再丢掉 96%。
- **按画面索引解锁按标题搜不到的信息**：品牌露出、特定动作、事故片段——标题里没写的，画面里有。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">正如我所说,AI 已经不再是难的部分了,数据才是。</span>  
> *So as I said, the AI is no longer the hard part. The data is.*  
> <span class="qm">—— Rafael Levi · [02:31]</span> ^q1

> <span class="qz">电子游戏里的物理效果几乎可以了,但还不足以用来训练机器人。</span>  
> *The physics in video games are almost there, but they're not good enough to train a robot on it.*  
> <span class="qm">—— Rafael Levi · [04:44]</span> ^q2

> <span class="qz">他们给它大约一百万小时的真实世界视频,然后只需要 62 小时的真实机器人数据,就能实际控制一个真实的机器人。</span>  
> *They gave it about a million hours of real-world videos, and then all it took is 62 hours of real robotics data to actually control a real robot.*  
> <span class="qm">—— Rafael Levi · [06:17]</span> ^q3

> <span class="qz">比如说,NVIDIA 在训练 Cosmos 机器人时,他们丢弃了大约 96% 的视频。</span>  
> *So for example, NVIDIA, when they train in the Cosmos robot, they're throwing out about 96% of the video.*  
> <span class="qm">—— Rafael Levi · [08:00]</span> ^q4

> <span class="qz">我们在数十亿个预先建好索引的视频中进行搜索,不是按关键词而是按动作搜索,并为你提供可以直接使用的片段。</span>  
> *We search through billions and billions of pre-indexed videos, not by keywords but by actions, and we provide you with ready-to-use clips.*  
> <span class="qm">—— Rafael Levi · [09:32]</span> ^q5

> <span class="qz">你给的描述越多,你实际得到的内容就越多。</span>  
> *The more description you give, the more you actually get back.*  
> <span class="qm">—— Rafael Levi · [11:01]</span> ^q6

> <span class="qz">当所有东西都能在网上找到时,为什么需要一百万人去做这件事？</span>  
> *Why do you need a million people doing that when everything is available online?*  
> <span class="qm">—— Rafael Levi · [14:34]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-31-bigtech-leopold-blows-up-openai-drastically-cuts|「最纯 AGI 押注」爆仓始末与 AI 时代财富大洗牌]]<span class="pd-rz">同公司:Meta、NVIDIA</span>
- [[2026-09-25-talks-why-llm-recommenders-will-be-ai-s-bigges|Tokens 进、互动出：推荐系统正在像 LLM 一样扩展]]<span class="pd-rz">同公司:Meta、YouTube</span>
- [[2026-07-08-talks-jensen-huang-why-companies-need-open-age|黄仁勋对话 LangChain:用开放堆栈打造企业超级智能体]]<span class="pd-rz">同公司:NVIDIA</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-16-lennys-the-godmother-of-ai|AI 教母李飞飞:从 ImageNet 到空间智能]]<span class="pd-rz">同概念:世界模型 (world models)</span>
- [[2026-10-05-twist-jason-mentors-the-next-generation-why-ai|Ask Jason:读传记、50万怎么花，与 AI 导师 Aristotle]]<span class="pd-rz">同概念:训练数据 (training data)</span>
- [[2026-08-05-bigtech-how-the-ai-bet-pays-off-ai-lab-strategy|红杉合伙人 David Cahn：AI 需赚回 4 万亿，这场棋局没有中间态]]<span class="pd-rz">同公司:Meta、NVIDIA</span>

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
