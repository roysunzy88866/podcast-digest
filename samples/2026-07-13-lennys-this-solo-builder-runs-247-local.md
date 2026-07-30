---
title: GPT 5.6 实测：为什么它打败了 Fable 成为我最爱的主力模型
podcast: "Lenny's Podcast"
date: 2026-07-13
source_url: https://www.lennysnewsletter.com/p/this-solo-builder-runs-247-local
duration: "36:38"
type: episode
cover: "#6366f1"
image: "/covers/2026-07-13-lennys-this-solo-builder-runs-247-local.jpg"
description: 深度实测 GPT 5.6 Soul：不仅设计品味碾压 Fable，更是浏览器操控和多步原型构建的实用利器。
host: "[[Alex Finn]]"
companies: ["[[Anthropic]]", "[[open ai]]"]
concepts: ["[[系统提示词]]", "[[gpt 5.6]]", "[[fable]]", "[[Codex]]", "[[智能体]]", "[[提示词]]", "[[原型]]", "[[浏览器使用]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>GPT 5.6 实测：为什么它打败了 Fable 成为我最爱的主力模型</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# GPT 5.6 实测：为什么它打败了 Fable 成为我最爱的主力模型



<div class="pd-mt">2026-07-13 · Lenny's Podcast · 36:38</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-13-lennys-this-solo-builder-runs-247-local.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我已经决定，这将是一个 70% 个人品味、30% 机器的分配比例来评估这些模型。</div><div class="a">Alex Finn · 07:27</div></div>

> [!info] 关联
> **人物** [[Alex Finn]]
>
> **公司** [[Anthropic]] · [[open ai]]
>
> **概念** [[系统提示词]] · [[gpt 5.6]] · [[fable]] · [[Codex]] · [[智能体]] · [[提示词]] · [[原型]] · [[浏览器使用]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/this-solo-builder-runs-247-local)

<div class="pd-tldr"><b>一句话</b>深度实测 GPT 5.6 Soul：不仅设计品味碾压 Fable，更是浏览器操控和多步原型构建的实用利器。</div>

播客主持人 [[Alex Finn|Alex Finn]] 在失去模型访问权限的一周里倍感煎熬，但这正是因为她遇到了真正的「心头好」——OpenAI 的 GPT 5.6 系列模型 <button class="pd-ts" data-t="00:36" data-who="Alex Finn" data-en="than all of them or not i have been testing this model for a couple weeks there was a few days there where we didn't have access and i found myself desperate" aria-label="回原文"></button>。本集聚焦于这个新发布的模型家族，特别是其中的大杯版「Soul」与 Anthropic 的 Fable 之间的正面交锋。Alex 会先用一套自建的评测基准告诉你 GPT 5.6 Soul 在设计品味上如何胜出，接着深入实际工作场景对比两者的协作能力，最后分享三个 Soul 表现极其亮眼的杀手级用例。

## 评测标准：拒绝「氛围感」，用 70/30 法则量化品味

说完了核心看点，接下来是她具体是怎么测的。Alex 对那种凭直觉的「氛围感测试」感到厌倦，因此她建立了一套名为「How i ai」的评测基准 <button class="pd-ts" data-t="04:22" data-who="Alex Finn" data-en="if you missed my episode on fable i got kind of bored of the vibey vibe check and i built a extremely scientific how i ai benchmark now this how i ai benchmark tests basically a couple things it tests the ability" aria-label="回原文"></button>。这套基准会考察模型在编写 PRD（产品需求文档）、开发设计[[原型|原型]]、调试代码以及像人类一样对话这四个高频场景的表现 <button class="pd-ts" data-t="04:33" data-who="Alex Finn" data-en="now this how i ai benchmark tests basically a couple things it tests the ability to generate good prds it tests the ability for it to wireframe against a couple different app ideas develop fully designed robust designed prototypes debug" aria-label="回原文"></button>。

在评判结果时，她没有完全依赖机器，而是采用了 70% 个人品味与 30% 机器评分（使用 GPT 5.5 作为最严厉的裁判）的加权法则 <button class="pd-ts" data-t="07:11" data-who="Alex Finn" data-en="the claire weighted index says now this is my show this is my podcast and so i sort of strike the balance between what the llm judge said about the performance of" aria-label="回原文"></button>。在这种强调实际视觉与交互体验的规则下，GPT 5.6 Soul 以极高的「设计品味」脱颖而出——它的品味得分远超其他模型，在盲测中经常产出 Alex 最喜欢的结果 <button class="pd-ts" data-t="07:38" data-who="Alex Finn" data-en="30 the machines split on evaluating these models and so if you look at that 70 30 split your girl loves five six soul she just does it had the highest taste score by a significant amount so i just thought it output" aria-label="回原文"></button>。

## 设计对决：Soul 的独特性与实用主义 vs Fable 的套路化

评测方法理清了，那具体到产品原型设计上，两者表现如何呢？在构建复杂的仪表盘或应用原型时，Alex 发现 Soul 的设计不仅更独特，而且真正具备可用性。它不会像其他模型那样默认产出千篇一律的「暗色模式、等宽字体」布局，而是能给出干净的中性色彩布局和良好的视觉层级，且所有交互功能都能真正运转 <button class="pd-ts" data-t="13:53" data-who="Alex Finn" data-en="the other ones really just looked like this dark mode mono space kind of layout as you can see here soul actually has like a really clean kind of like neutral color layout with great visual hierarchy semantic color" aria-label="回原文"></button>。

相比之下，Fable 虽然能产出可用的线框图，但往往设计缺乏独特性，颜色分配缺乏逻辑，阅读起来也更困难 <button class="pd-ts" data-t="14:32" data-who="Alex Finn" data-en="the fable design again it's pretty good it's actually a lot harder to read though and the design i would say is not as unique" aria-label="回原文"></button>。

> 【背景】在这类 AI 辅助的开发中，大家常吐槽模型会生成一种名为「slop（垃圾话/套路货）」的内容——比如千篇一律的渐变色、毫无必要的破折号（em dash）或是廉价感满满的 emoji。Alex 对此深恶痛绝。

Alex 特别指出，Soul 会有意识地避免落入这种俗套，虽然它有着极其偏爱「森林绿」的固执偏好（这可能被写在了它的系统[[提示词|提示词]]里），但它总能带着鲜明的「设计观点」去生成网页，给用户提供灵感 <button class="pd-ts" data-t="16:09" data-who="Alex Finn" data-en="of the same as the doc scheduler it just does the job of this is a incident triage site it just does the job a lot better than i would say the fable 5 did fable 5 is fine it's just not that unique and again" aria-label="回原文"></button>。

## 协作鸿沟：「理论聪明」的 Fable 与「实际有效」的 Soul

设计上的差异只是表象，工具变了，当真正让模型去干活时，人的感受成了决定性因素。Alex 对 Fable 最大的不满在于它的沟通方式：极其技术化、极其迂腐，就像一个从未见过人类的工程师在进行晦涩难懂的表达 <button class="pd-ts" data-t="20:14" data-who="Alex Finn" data-en="about it is incredibly inscrutable writing and that makes it very hard to collaborate with your model and so what i would say is my experience using fable has been it is like incredibly" aria-label="回原文"></button>。

这种沟通上的挫败感，折射出两者更深层的差异。Alex 总结道：Fable 是「理论上极其聪明」，而 Soul 是「实际上极其有效」 <button class="pd-ts" data-t="21:26" data-who="Alex Finn" data-en="and soul is like fable is theoretically hyper intelligent and soul is practically effective and so like i've been executive long time i've been a manager" aria-label="回原文"></button>。

这种差异在处理复杂代码架构时尤为致命。在构建一个产品原型工具时，Fable 顽固地执行了一套高度僵化的架构，导致只能运行特定的 GPT 5.5 模型，其他所有开源模型都无法运行。Alex 坚持认为这不是模型的问题，要求调整，但 Fable 固执己见 <button class="pd-ts" data-t="29:57" data-who="Alex Finn" data-en="so my example is it like had this very hardened tool calling loop in my prototyping tool and only gpt 5.5 would run like i could not get any other model to run" aria-label="回原文"></button>。

而当她切换到 Soul 并指示它「别再这么死板」时，Soul 能够跳出自己原先设下的思维局限，一次性就调整了架构并让所有模型顺利跑通 <button class="pd-ts" data-t="30:35" data-who="Alex Finn" data-en="to work this is ridiculous just do what you think is correct it it fixed it and it got it actually working now did it get it working perfectly no do i think this is a great design no i'm trying to figure out what the problem is but" aria-label="回原文"></button>。这种愿意重新评估自身局限、适当放宽确定性约束以「把事情办成」的实用主义，让 Soul 成为产品研发过程中的得力助手。

## 杀手级用例：视频剪辑与浏览器自动化

除了常规的代码和原型开发，Soul 的能力边界在两个具体的实用场景中被彻底激发。第一个是视频剪辑。Alex 需要将一段冗长的演讲录像剪辑成适合社交媒体发布的短视频，她只需将文件拖入，提出「横竖屏、节奏更紧凑」等需求，Soul 就迅速帮她生成了多段精彩的短视频片段，极大地节省了人工寻找素材和剪辑的枯燥时间 <button class="pd-ts" data-t="32:30" data-who="Alex Finn" data-en="the cursor team thank you very much and i really wanted to make it a hype video so all you have to do is literally drag the file in here and i said can you cut this video into five clips for social" aria-label="回原文"></button>。

最令 Alex 感到震撼的，是 Soul 在结合 Codex（一种编程工具）进行浏览器操控时的表现。通过 `@chrome` 指令让模型接管已登录的网页，Soul 化身为不知疲倦的助理。Alex 让它去清理积压的 500 条 LinkedIn 消息，设定了极高的筛选标准，Soul 准确地回复了重要消息、向关注者表达了感谢，甚至还能用来测试网页应用和填写繁琐的表单 <button class="pd-ts" data-t="34:09" data-who="Alex Finn" data-en="and like i'm sorry linkedin i know i'm not supposed to do this but i opened up linkedin and i said can you use chrome to reply to messages that are very high value to chat prd or the how i a podcast keep" aria-label="回原文"></button>。一旦习惯了这种级别的自动化，再回退到旧模型时，Alex 直呼「我的生活变糟了」 <button class="pd-ts" data-t="34:56" data-who="Alex Finn" data-en="browser use and five six and when i got rolled back to five five my life was worse so please please please learn to use at chrome at browser and at computer and just let let codex rip and let gpt56 rip" aria-label="回原文"></button>。

## 本集带走

1. **实用主义胜过死板的精确**：在构建产品时，Fable 那种追求极致精确和僵化架构的思路往往会作茧自缚；而 Soul 懂得适当放宽约束，跳出固有思维，从而真正解决阻碍交付的复杂技术难题。
2. **GPT 5.6 Soul 拥有碾压级的「设计品味」**：它不再产出千篇一律的套路化设计，而是带有鲜明的个人观点与审美偏好，输出的原型具备极高的可用性与视觉启发性。
3. **浏览器自动化是终极杀手锏**：结合 `@chrome` 或 `@browser` 等指令，模型能够直接接管网页端的高价值重复性劳动（如处理消息、筛选信息、填写表单），这是目前最具革命性的效率提升方式。

<div class="pd-sec">全部金句 <span>4 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我已经决定，这将是一个 70% 个人品味、30% 机器的分配比例来评估这些模型。</span>  
> *i've decided it's going to be a 70 claire vo 30 the machines split on evaluating these models*  
> <span class="qm">—— Alex Finn · [07:27]</span> ^q1

> <span class="qz">我讨厌和 Fable 5 交谈，因为它和我说话就像一个从未见过人类的工程师，就像它在地球上的第一天。</span>  
> *i hate talking to fable 5 because it talks to me like an engineer that has never met a human before it's like its first day on earth*  
> <span class="qm">—— Alex Finn · [08:29]</span> ^q2

> <span class="qz">Fable 理论上超级智能，而 Soul 实际上有效。</span>  
> *fable is theoretically hyper intelligent and soul is practically effective*  
> <span class="qm">—— Alex Finn · [21:23]</span> ^q3

> <span class="qz">只有 GPT 5.5 能运行，我无法让任何其他模型运行。</span>  
> *only gpt 5.5 would run like i could not get any other model to run*  
> <span class="qm">—— Alex Finn · [29:59]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|OpenClaw 深度玩法：三任 CPO 的九个智能体实战心得]] —— 同概念:soul、智能体 (agent)、浏览器使用 (browser use)
- [[2026-singju-openclaw-80apps|OpenClaw创始人：为何80%的应用将消失]] —— 同概念:codex、智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同公司:anthropic · 同概念:智能体 (agent)、codex

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-28-lennys-openai-codex-lead-on-the-new-shape|当代码不再是瓶颈,品味和策展成为产品团队的稀缺力]] —— 同概念:codex、原型 (prototype)、智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同公司:anthropic · 同概念:codex、智能体 (agent)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|iPod之父Tony Fadell：反直觉的产品课]] —— 同公司:anthropic · 同概念:智能体 (agent)、提示词 (prompt)

</div>
</div>

*本集关键词:模型评测 · 设计品味 · 前端原型 · 浏览器自动化 · vibe coding*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
