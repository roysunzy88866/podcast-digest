---
title: 让语音智能体又快又聪明：Elise AI 的级联架构
podcast: 精选演讲
date: 2026-09-17
source_url: undefined
duration: "12:52"
type: episode
cover: "#64748b"
description: Elise AI 的 Bo 讲解如何用级联架构构建实时语音智能体：流式投机转写、后台工具智能体、前缀缓存，提速不牺牲智能。
guests: ["[[Bohan Li]]"]
companies: ["[[Elise AI]]", "[[Cartesia]]"]
concepts: ["[[语音智能体]]", "[[级联语音智能体]]", "[[转写]]", "[[工具调用]]", "[[文本转语音]]", "[[前缀缓存]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-15-talks-realtime-voice-agents-with-frontier-inte#post","headline":"让语音智能体又快又聪明：Elise AI 的级联架构","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-15-talks-realtime-voice-agents-with-frontier-inte","mainEntityOfPage":"https://talk.solomind.cc/2026-09-15-talks-realtime-voice-agents-with-frontier-inte","description":"Elise AI 的 Bo 讲解如何用级联架构构建实时语音智能体：流式投机转写、后台工具智能体、前缀缓存，提速不牺牲智能。","datePublished":"2026-09-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Bohan Li"},{"@type":"Organization","name":"Elise AI"},{"@type":"Organization","name":"Cartesia"},{"@type":"Thing","name":"语音智能体 (voice agents)"},{"@type":"Thing","name":"级联语音智能体 (Cascaded Voice Agents)"},{"@type":"Thing","name":"转写 (transcription)"},{"@type":"Thing","name":"工具调用 (tool calling)"},{"@type":"Thing","name":"文本转语音 (text-to-speech)"},{"@type":"Thing","name":"前缀缓存 (prefix cache)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"让语音智能体又快又聪明：Elise AI 的级联架构","item":"https://talk.solomind.cc/2026-09-15-talks-realtime-voice-agents-with-frontier-inte"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让语音智能体又快又聪明：Elise AI 的级联架构</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让语音智能体又快又聪明：Elise AI 的级联架构

<div class="pd-byl"><b>Bohan Li</b> · Elise AI · 2026-09-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-15-talks-realtime-voice-agents-with-frontier-inte.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们必须把工具结果推回主智能体的上下文里，让它以为自己做了工具调用，但其实没有。</div><div class="a">— Bohan Li <button class="pd-ts" data-t="04:08" data-who="Bohan Li" data-en="So, we had to push the tools back into the context of the main agent so that it thinks it made the tool call, but it really didn't." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Bohan Li]]
>
> **公司** [[Elise AI]] · [[Cartesia]]
>
> **概念** [[语音智能体]] · [[级联语音智能体]] · [[转写]] · [[工具调用]] · [[文本转语音]] · [[前缀缓存]]

这一集聊的是怎么让[[语音智能体|语音智能体]]做到「实时响应」和「Frontier 级智能」兼得——这在语音领域是个出了名的矛盾：反应慢就没人愿意用，模型不够聪明又办不成事。主讲人 Bo 来自 [[Elise AI|Elise AI]](一家做医疗、住房领域 AI 的公司)，之前做过自动驾驶，他正是把自动驾驶的思路搬进了语音系统。

他的核心主张是：[[级联语音智能体|级联语音智能体]]——把整条链路拆成感知、规划、控制三层，就像自动驾驶里的摄像头/激光雷达 → 规划器 → 控制器：

- **感知 = [[转写|转写]]**：把用户说的音频变成语言模型能处理的数据；
- **规划 = LLM**:接收转写结果，产出要回的话；
- **控制 = [[文本转语音|文本转语音]]**：把文本变成用户听到的声音。

他在这三层各做了一两个关键技巧，下面逐层拆开。

## 感知层：流式投机转写器

转写有个两难：快的流式转写器一边听一边出字，但常常听错；准确的批处理转写要等更多上下文，但慢。Bo 的解法是**流式投机转写器(streaming speculative transcriber)**——把一个快的流式转写器(如 Flux)叠在一个更准、更慢、能利用更多上下文的批处理转写器(如 scribe v2)之下：

- 流式层先快速出字，立刻给下游用；
- 准确层随后校验，若发现听错了就发**纠错**；如果新音频先到了，旧的准确结果直接作废、被取消，用更新的上下文重新算；
- 因为准确层拿到了智能体之前问的问题(「请说出你的姓名和出生日期」)，它能结合上下文纠错——比如意识到某段音频是在报姓名、另一段是出生日期 <button class="pd-ts" data-t="03:24" data-who="Bo" data-en="And here is where kind of the first correction comes in. So because the scribe v2 layer understands the context of the question, it is able to understand that this is talking about a name and this is a date of birth." aria-label="回原文"></button>。

## 规划层：后台智能体 + 提前生成

这一层用的是「慢但聪明」的大模型，所以最大敌人是**往返次数**——尤其是[[工具调用|工具调用]](智能体调外部系统查信息，每次都要等一轮推理)。Bo 的技巧是：让**后台智能体替主智能体做工具调用**，再把工具结果悄悄推回主智能体的上下文，「让它以为自己做了工具调用，但其实没有」<button class="pd-ts" data-t="04:08" data-who="Bo" data-en="So one way to get rid of that is by having background agents do the tool calling for you and kind of So, we had to push the tools back into the context of the main agent so that it thinks it made the tool call, but it really didn't." aria-label="回原文"></button>。

具体机制是**提前生成 + 取消**：

- 转写层每出一个检测文本，就触发一次主智能体的提前生成——但**在确认用户说完了之前绝不真正输出**；
- 生成过程中不调用工具，所以极快；
- 一旦后台智能体把工具结果(比如纠正过转写错误的姓名、出生日期)准备好了，之前那次「没带工具结果」的提前生成就被取消，带着完整上下文重新触发生成 <button class="pd-ts" data-t="05:28" data-who="Bo" data-en="The background agent is going to be the detection from the transcriber from the ScribeV2. Here, our eager agent generation that was made without any tool calls is going to get canceled because the background agent finally is able to find the name and date of birth it's looking for." aria-label="回原文"></button>。

后台智能体还会做实质性的纠错，比如对姓名做**语音匹配**(把听错的音按发音对应回正确的名字)<button class="pd-ts" data-t="05:50" data-who="Bo" data-en="Some intelligence there. We're going to be correcting mistranscriptions of name, doing some phonetic matching here. And yeah, and then we'll kind of, once we've understood that this is the end of the user utterance, we'll kind of emit it out." aria-label="回原文"></button>。

## 控制层：前缀缓存 + 抑制重播

文本转语音(TTS)的目标是：智能体还在流式吐字时，音频就开始播，把生成延迟藏起来。这里 Bo 引入**[[前缀缓存|前缀缓存]](prefix cache)**——检查智能体正在吐出的这串词，之前有没有生成过一模一样的音频：

- 「你说你的名字是」这种高频话术，早就生成过、直接命中缓存，**三个词之后就能开播**，用户瞬间听到回应；
- 缓存里没有的部分(比如具体的名字)才走 TTS 引擎——他们用的是支持 WebSocket 的 [[Cartesia|Cartesia]];
- 诀窍在于：Cartesia 其实拿到了**完整句子**，会按标准自然韵律生成整句，但它不知道缓存的存在。等它生成回来，系统把已经播过的那段音频**抑制掉**，只把剩下的部分接在缓存音频后面播。用户最多感到极轻微的卡顿，「你很可能根本注意不到」<button class="pd-ts" data-t="09:19" data-who="Bo" data-en="The user, there might be a tiny bit of a hiccup. I'll play some audio later, and you probably won't be able to notice. And effectively, we're kind of taking this part and just emitting it directly after this audio has finished playing." aria-label="回原文"></button>。

> 【背景】WebSocket 是一种保持客户端与服务端持续连接、可双向实时推流的网络协议，适合音频流这种场景。

## 实际效果

Bo 现场播放了一段真实通话录音：智能体接听妇产科诊所电话，完成确认患者信息、发短信收保险资料、查日历、预约下周超声波检查的全流程，对话自然流畅。他总结：流式输出背后其实有大量事情在同时发生，**语音智能体真正值得下功夫的地方恰恰在这个 harness(执行框架)里**——是它让对话变得自然 <button class="pd-ts" data-t="11:35" data-who="Bo" data-en="Yeah, that's pretty much it. Yeah, you can kind of see all this streaming, and a lot of things are happening in the background, and yeah, this is what really makes voice agents interesting, and there's a lot of effort that can be done in the harness to really kind of get a natural conversation, which is what we're after." aria-label="回原文"></button>。

结尾他简单介绍了 Elise AI:总部在纽约，正在向湾区扩张，专注住房和医疗保健这些「生活中最关键的领域」。

## 本集带走

- **级联拆层是底座**：感知(转写)→ 规划(LLM)→ 控制(TTS),每层单独提速，合起来才不牺牲智能。
- **快慢双转写互为保险**：快的流式层负责即时出字，准的批处理层负责结合问题上下文纠错；新音频一到，过期的纠错结果直接取消。
- **工具调用挪到后台**：让后台智能体替主智能体查工具、把结果静默塞回上下文，主智能体的提前生成不带工具调用，因此极快；结果到位后取消重生成。
- **每次检测都提前生成、确认说完才输出**：这是「听起来秒回」但「说的内容正确」的关键机制。
- **前缀缓存抢首响**：高频话术直接复用历史音频先播，慢的 TTS 只补个性化的尾部，并抑制重播段落，用户几乎无感。
- **减少 LLM 往返次数是第一 性能指标**：慢模型换不掉，但每省一次往返就是真金白银的延迟。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">我们必须把工具结果推回主智能体的上下文里，让它以为自己做了工具调用，但其实没有。</span>  
> *So, we had to push the tools back into the context of the main agent so that it thinks it made the tool call, but it really didn't.*  
> <span class="qm">—— Bohan Li · [04:08]</span> ^q1

> <span class="qz">用户其实不知道发生了什么。对他们来说，这看起来就是非常快的响应时间。</span>  
> *The user doesn't really know what's going on. It just looks like really fast response times to them.*  
> <span class="qm">—— Bohan Li · [08:25]</span> ^q2

> <span class="qz">所以更多上下文、更多音频会胜过旧的准确结果。</span>  
> *So more context, more audio is going to beat the old accurate one.*  
> <span class="qm">—— Bohan Li · [03:15]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-15-talks-voice-agents-can-just-do-things-charlie|语音智能体不一定要说话:OpenAI 的三种语音交互模式]]<span class="pd-rz">同概念:工具调用 (tool calling)、语音智能体 (voice agents)、转写 (transcription)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|估值150亿的隐形AI公司：我们最好的工作是独自安静地完成]]<span class="pd-rz">同概念:自动驾驶 (self-driving)</span>

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
