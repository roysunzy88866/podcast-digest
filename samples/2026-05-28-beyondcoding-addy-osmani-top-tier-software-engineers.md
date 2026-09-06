---
title: 从看护智能体到认知投降：工程师该守住什么
podcast: Beyond Coding
date: 2026-08-18
source_url: undefined
duration: "17:55"
type: episode
cover: "#64748b"
image: "/covers/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers.jpg"
description: Google Cloud AI总监谈智能体工具的实用边界与工程师的认知危机。
concepts: ["[[智能体]]", "[[harness]]", "[[认知债务]]", "[[认知投降]]", "[[验证]]", "[[爆炸半径]]", "[[FOMO]]", "[[认知带宽]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers#post","headline":"从看护智能体到认知投降：工程师该守住什么","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers","mainEntityOfPage":"https://talk.solomind.cc/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers","description":"Google Cloud AI总监谈智能体工具的实用边界与工程师的认知危机。","datePublished":"2026-08-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers.jpg","about":[{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"harness"},{"@type":"Thing","name":"认知债务 (cognitive debt)"},{"@type":"Thing","name":"认知投降 (cognitive surrender)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"爆炸半径 (blast radius)"},{"@type":"Thing","name":"FOMO"},{"@type":"Thing","name":"认知带宽 (cognitive bandwidth)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"从看护智能体到认知投降：工程师该守住什么","item":"https://talk.solomind.cc/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从看护智能体到认知投降：工程师该守住什么</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从看护智能体到认知投降：工程师该守住什么

<div class="pd-byl">2026-08-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-05-28-beyondcoding-addy-osmani-top-tier-software-engineers.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你试图从看护毕业到更严肃的事情，你有点需要围绕你的智能体拥有身份。</div><div class="a"><button class="pd-ts" data-t="01:52" data-who="" data-en="If you were trying to graduate from babysitting to something more serious, you kind of need to have identity around your agents." aria-label="回原文"></button></div></div>

> [!info] 关联
> **概念** [[智能体]] · [[harness]] · [[认知债务]] · [[认知投降]] · [[验证]] · [[爆炸半径]] · [[FOMO]] · [[认知带宽]]

很多人把[[智能体|智能体]]当保姆养——给它权限、盯着它干活、随时救火。这不是智能体的问题，是使用方式的问题。想从"看护"毕业，核心不是换更好的工具，而是给智能体建立身份和治理：当多个子智能体同时跑不同任务时，你得知道谁在干什么，并且限制每个智能体的"[[爆炸半径|爆炸半径]]"——别让它能删你的生产数据或客户信息 <button class="pd-ts" data-t="01:52" data-who="嘉宾" data-en="where they don't really know what they're doing. If you were trying to graduate from babysitting to something more serious, you kind of need to have identity around your" aria-label="回原文"></button>。

现在最大的风险不是技术本身，而是[[FOMO|FOMO]]驱动的盲目实验。一个人试验个人智能体，不小心泄露API密钥、收到巨额账单，这很常见 <button class="pd-ts" data-t="03:07" data-who="嘉宾" data-en="really know what they're doing, you know, goes and does that and they could easily leak API keys. They could end up with a very large, you know, bill at the end of it, those types of things." aria-label="回原文"></button>。但从单人创业公司到成熟企业，能承受的风险完全不同——后者需要安全保障和隐私机制到位 <button class="pd-ts" data-t="11:07" data-who="嘉宾" data-en="And also realize that there's a big difference between, you know, the risk that a person who's, for example, a solo founder or a three person company can take trying out like" aria-label="回原文"></button>。

关于选什么工具（[[harness|harness]]，即套在模型外面的执行框架），有个反直觉的建议：不要迷信"原厂组合最优"。某家公司的模型配上它自家的harness，不一定比拿同一模型配另一个harness效果更好 <button class="pd-ts" data-t="07:26" data-who="嘉宾" data-en="will lead to the very best possible outcome. Maybe that statement holds true, but it's also possible, especially if you can use that model, whether it's your" aria-label="回原文"></button>。

但如果你日常工作已经忙不过来，没有带宽逐个试工具，专注一个也完全没问题——因为各家harness的能力正在趋同，你在一个工具上建立的肌肉记忆和工作模式，切换后大概率还能用 <button class="pd-ts" data-t="09:06" data-who="嘉宾" data-en="If there's a harness you're using or tool you're using that is actually delivering you good value right now, stick with it. Similar to how orchestration U XS are all kind of converging on" aria-label="回原文"></button>。真正值得你花"创新预算"去关注的，是那些跟所有人做法都不一样的冷门尝试，哪怕看起来很疯狂 <button class="pd-ts" data-t="09:35" data-who="嘉宾" data-en="current one will probably still apply if you decide to switch at a later point. So I'm always looking for not what is converging, but what is like the thing that people are" aria-label="回原文"></button>。

比工具选择更深的危机是两个词：[[认知债务|认知债务]]和[[认知投降|认知投降]]。认知债务是指代码生成太快，你开始丧失"事情到底怎么完成的"肌肉记忆和技能——如果有天智能体帮不上忙，你还能卷起袖子自己干吗 <button class="pd-ts" data-t="12:37" data-who="嘉宾" data-en="around this that I've I've talked about recently. One of them is cognitive debt. And so especially as we get used to the fact that code is getting generated so quickly right now," aria-label="回原文"></button>？

认知投降更极端：你完全停止批判性思维，智能体生成什么就提交什么、发布什么，出了错再让智能体修 <button class="pd-ts" data-t="13:22" data-who="嘉宾" data-en="And the other end of that spectrum is what we're seeing more and more of these days, which is cognitive surrender. So you, you, you just stop having critical thinking at all" aria-label="回原文"></button>。问题是——你怎么判断智能体修对了没有？生成变容易了，[[验证|验证]]才是当前真正的瓶颈 <button class="pd-ts" data-t="13:51" data-who="嘉宾" data-en="whether the agent actually got those fixes right or not right? So generation is now easy. Verification is a big thing that I think that we as engineers need to keep a close eye on." aria-label="回原文"></button>。

解法不是回到纯手动，而是把"什么是好的、什么是对的"编码进系统里：用户旅程、测试用例、视觉回归测试——任何能让智能体的输出有东西可对比的锚点 <button class="pd-ts" data-t="15:04" data-who="嘉宾" data-en="situation? And I think that what you need is to codify what good and what right means into your system. So that can be everything from your user journeys to your" aria-label="回原文"></button>。否则智能体最多只能打开浏览器点几下，说"我猜注册功能能用"，但这不等于验证了行为没有从上一个版本偏移 <button class="pd-ts" data-t="15:34" data-who="嘉宾" data-en="it going to do? Maybe it will fire open a browser and load up the app and then click around and see, OK, well, I guess I'm able to register." aria-label="回原文"></button>。

最后一条实用建议：别以为跑多个智能体就等于你有更多脑子。[[认知带宽|认知带宽]]不能并行化。把任务分两堆——孤立的、低风险的扔给后台智能体；需要你真正动脑的，老老实实自己盯 <button class="pd-ts" data-t="16:55" data-who="嘉宾" data-en="job, to experiment, to get better at what they do. Running multiple agents does not mean that there is more of you to go around because you have cognitive bandwidth that doesn't" aria-label="回原文"></button>。

## 本集带走
- **给智能体设爆炸半径**：多智能体并行时，必须有身份和治理机制，限制每个智能体能触碰的范围
- **别迷信原厂配对**：同一模型配不同harness可能效果更好，值得用你的"创新预算"去试
- **工具趋同，别怕锁定**：各harness能力在收敛，一个工具上建立的模式切换后仍适用
- **盯冷门而非热点**：真正值得花时间看的是那些跟所有人做法都不一样的尝试
- **把"对"编码进系统**：用测试、用户旅程等锚点让智能体输出可对比，解决验证瓶颈
- **认知带宽不并行**：任务分两类，低风险孤立任务委派出去，需要动脑的自己盯

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">如果你试图从看护毕业到更严肃的事情，你有点需要围绕你的智能体拥有身份。</span>  
> *If you were trying to graduate from babysitting to something more serious, you kind of need to have identity around your agents.*  
> <span class="qm">—— 嘉宾 · [01:52]</span> ^q1

> <span class="qz">如果智能体可以做任何事情，你想限制爆炸半径，因为我们已经看到很多它们去做你真的没预料到的事情的案例。</span>  
> *if agents can do anything, you want to limit the blast radius because we have seen lots of cases of them going off and doing things that you didn't really expect.*  
> <span class="qm">—— 嘉宾 · [02:10]</span> ^q2

> <span class="qz">把你花在尝试另一个工具的时间看作拥有一个创新代币或一个创新预算，对吧？你没有世界上所有的时间。</span>  
> *Think about the time that you take to invest in trying in another tool as having an innovation token or an innovation budget, right? You don't have all the time in the world.*  
> <span class="qm">—— 嘉宾 · [08:46]</span> ^q3

> <span class="qz">其中一个是认知债务。特别是当我们习惯了代码生成得如此之快这一事实，我们也可能开始丧失关于事情如何正确完成的肌肉记忆。</span>  
> *One of them is cognitive debt. And so especially as we get used to the fact that code is getting generated so quickly right now, we can also start to lose our muscle memory around how things get done right.*  
> <span class="qm">—— 嘉宾 · [12:37]</span> ^q4

> <span class="qz">你需要的是将什么是好的、什么是对的编码进你的系统中。</span>  
> *what you need is to codify what good and what right means into your system.*  
> <span class="qm">—— 嘉宾 · [15:03]</span> ^q5

> <span class="qz">我想我是能够做这些动作的，但这并不等同于能够验证从一个版本到另一个版本行为没有改变。</span>  
> *I guess I'm able to do these actions, but that's not the same as being able to verify that the behavior hasn't changed from one release to another.*  
> <span class="qm">—— 嘉宾 · [15:39]</span> ^q6

> <span class="qz">运行多个智能体并不意味着有更多的你可以到处去，因为你有认知带宽这并不并行化。</span>  
> *Running multiple agents does not mean that there is more of you to go around because you have cognitive bandwidth that doesn't parallelize.*  
> <span class="qm">—— 嘉宾 · [16:55]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Anthropic、Claude code · 同概念:harness、智能体 (agent)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同公司:Claude code · 同概念:harness、智能体 (agent)</span>
- [[2026-08-11-talks-evolution-of-agentic-surfaces-gagan-bhat|Anthropic 构建生产级智能体的教训:harness 须为模型能力演进而生]]<span class="pd-rz">同公司:Anthropic · 同概念:harness、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-19-pragmatic-from-chrome-devtools-to-ai-engineering|Addy Osmani：从造浏览器到对抗认知投降]]<span class="pd-rz">同概念:智能体 (agent)、认知债务 (cognitive debt)、认知投降 (cognitive surrender)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic、Claude code · 同概念:智能体 (agent)、验证 (verification)</span>
- [[2026-07-14-ainativedev-patrick-debois-maps-the-patterns-of-ai-n|DevOps 之父 Patrick Debois：AI 时代组织比技术更难成熟]]<span class="pd-rz">同概念:harness、智能体 (agent)</span>

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
