---
title: 语音智能体的关键不是快，而是像人：LiveKit 关于延迟与人性的演讲
podcast: 精选演讲
date: 2026-10-20
source_url: undefined
duration: "16:51"
type: episode
cover: "#64748b"
description: LiveKit 的 Jesse Hall 讲了为什么更快的模型救不了语音智能体，以及怎样让 AI 打电话时真正像个真人。
guests: ["[[Jesse Hall]]"]
companies: ["[[LiveKit]]"]
concepts: ["[[智能体]]", "[[语音智能体]]", "[[延迟]]", "[[排行榜陷阱]]", "[[端到端基准测试]]", "[[轮次检测器]]", "[[异步工具调用]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-latency-is-a-budget-humanlike-is-the-goa#post","headline":"语音智能体的关键不是快，而是像人：LiveKit 关于延迟与人性的演讲","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-latency-is-a-budget-humanlike-is-the-goa","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-latency-is-a-budget-humanlike-is-the-goa","description":"LiveKit 的 Jesse Hall 讲了为什么更快的模型救不了语音智能体，以及怎样让 AI 打电话时真正像个真人。","datePublished":"2026-10-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jesse Hall"},{"@type":"Organization","name":"LiveKit"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"语音智能体 (voice agent)"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"排行榜陷阱 (leaderboard trap)"},{"@type":"Thing","name":"端到端基准测试 (benchmark)"},{"@type":"Thing","name":"轮次检测器 (turn detector)"},{"@type":"Thing","name":"异步工具调用 (asynchronously)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"语音智能体的关键不是快，而是像人：LiveKit 关于延迟与人性的演讲","item":"https://talk.solomind.cc/2026-10-11-talks-latency-is-a-budget-humanlike-is-the-goa"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>语音智能体的关键不是快，而是像人：LiveKit 关于延迟与人性的演讲</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 语音智能体的关键不是快，而是像人：LiveKit 关于延迟与人性的演讲

<div class="pd-byl"><b>Jesse Hall</b> · LiveKit · 2026-10-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-latency-is-a-budget-humanlike-is-the-goa.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">一个能分辨你说完了一个想法和你还在思考的智能体。</div><div class="a">— Jesse Hall <button class="pd-ts" data-t="01:40" data-who="Jesse Hall" data-en="One that knows the difference between you finishing your thought and you still thinking." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jesse Hall]]
>
> **公司** [[LiveKit]]
>
> **概念** [[智能体]] · [[语音智能体]] · [[延迟]] · [[排行榜陷阱]] · [[端到端基准测试]] · [[轮次检测器]] · [[异步工具调用]]

你有没有给药店、航空公司或者 4S 店打过电话，接电话的是个 AI？你说着说着插了一句话，它就乱了套。

行业里大多数人的解法是更快——更快的模型、更低的[[延迟|延迟]]。[[Jesse Hall|Jesse Hall]] 在这场演讲里说：这是错的方向。

延迟是一个预算，而目标完全是另一回事：让[[语音智能体|语音智能体]]尽可能像人。

## 为什么榜单第一名救不了语音智能体

Hall 是 [[LiveKit|LiveKit]] 的人。LiveKit 是开源的实时框架和基础设施，OpenAI 的 ChatGPT 语音模式背后用的就是它。

LiveKit 不自己造语音识别、大语言模型或语音合成模型，各家模型都能插进它的体系，「我们在这场比赛里没有自己的马，我们只是看它们跑了很多次」<button class="pd-ts" data-t="14:32" data-who="嘉宾" data-en="So we don't have a horse in this race. We just watch all of them run a lot. And so we can confidently pick the winners." aria-label="回原文"></button>。

语音[[智能体|智能体]]通常是 3 个模型串成一条流水线：语音转文字、大语言模型、文字转语音。问题在于，==怎么选模型==？排行榜帮不了你。

**榜单测的是单个模型，而你交付的是一整条流水线**。

比如你想订 3 号的预约，语音识别听成了 30 号——从那一刻起，语言模型再聪明，也是在自信满满地订错日子，错误会一路往下流，下面的层毫无察觉 <button class="pd-ts" data-t="04:36" data-who="嘉宾" data-en="And every error flows downhill from there and the layers below it have no idea. And so those leaderboard scores, they came from clean audio in a quiet room. But your callers, they're calling on a speakerphone in traffic with kids in the backseat." aria-label="回原文"></button>。

而且榜单的分数来自安静房间里的干净音频，你的用户是在车里开着免提、后座还有孩子。Hall 给这起了个名字：榜单陷阱。

## 你测量的延迟，和用户听到的延迟不是一回事

即使选好了模型，你很可能还在量错东西。语音合成服务商报告的是首字节时间，仪表盘上很好看，但字节不是声音。

他们实测过一些主流服务商，开头先送出几百毫秒的静音，最坏的情况有四分之三秒的纯静音。

**用户听到的是首个声音的时间，不是首字节** <button class="pd-ts" data-t="06:05" data-who="嘉宾" data-en="So time to first audio is actually what your caller hears. And so this is the distinction that this entire talk hangs on. This measured latency versus perceived latency." aria-label="回原文"></button>。

语言模型也一样。首个 token 时间是文本指标，但语音合成不能对一个 token 开口，它需要一整句话。

所以 token 流得最快的模型，不一定是先把第一句话说完的模型。

还有榜单完全忽略的一点：真正的智能体不只要聊天，还要干活——查订单、查空房、订房间。

一个工具调用可能花 2 秒、10 秒甚至 40 秒以上，没有任何模型选型能藏住 40 秒。人类前台会怎么做？

她不会僵住，她会说「稍等，我查一下您的账户」。她一边干活一边听。这才是我们要的人类行为。

## 核心技巧：让工具调用和对话不再共用一条线

那智能体能不能一边干活一边继续说话？可以。

Hall 展示了全场唯一一段代码：一个普通的工具函数，只多了一行——第一次更新就把麦克风交还给智能体，让它继续在后台干活 <button class="pd-ts" data-t="08:02" data-who="嘉宾" data-en="There's just one thing different, and that is this line right here. The first update hands the mic back to the agent while it keeps working in the background. And that's the whole trick." aria-label="回原文"></button>。

整个诀窍就是：**对话和工具不再共用一个线程**。

接着他放了一段演示：

智能体帮人订酒店，用户中途打断它、又把日期从 10 月改到 12 月，智能体照常接住，对话没有一次尴尬的停顿。

Hall 强调，这不是某一个模型好，而是基础设施、框架和模型作为一个系统好——这是任何单模型榜单都看不见的。

## 该说话和不该说话，人靠语调，机器也要靠音频

榜单漏掉的另一个维度：什么时候该开口，什么时候该闭嘴。人类协商轮到谁说话只需要几百毫秒，主要靠语调。

等完整文字稿回来再判断的流水线，天生就晚了。LiveKit 做了一个直接基于音频的[[轮次检测器|轮次检测器]]，听的是语音的节奏、音高和语调。

他们公布的数字：

在同样的延迟预算下，最好的替代方案 9.9% 的时候会打断用户，他们的方案是 4.5%，评测工具全部开源，你可以拿自己的数据跑一遍 <button class="pd-ts" data-t="10:40" data-who="嘉宾" data-en="And then we published the numbers on this. So at the same latency budget, the best alternative cuts users off 9.9% of the time. Ours is 4.5%." aria-label="回原文"></button>。

## 延迟预算到底是多少？

从用户说完最后一个字，到智能体发出第一个声音，这个窗口是固定大小的。接近 600 毫秒，才开始真正像人 <button class="pd-ts" data-t="11:48" data-who="嘉宾" data-en="If you can stay within a second and a half, end to end, the conversation still holds, but you're right on the edge. If you can get closer to 600 milliseconds, then it starts to feel really human." aria-label="回原文"></button>。

所以正确的问题从来不是我能做多快，而是「在这个窗口里，我能塞进一个多像人的智能体」。

在预算之内，剩下的钱应该花在模型质量上，而不是花在不重要的速度上。

## 换一种测评：别测零件，测整场对话

回到最初的问题==我该选什么模型==——这个问题本身就没法回答。于是 LiveKit 造了他们希望存在的东西：一个端到端的基准测试。

他们拿一个完整能用的智能体——就是刚才那段酒店前台，有真实后端、真的能下单——让几百个模拟用户打电话给它。

模拟器会打断、会含糊说话、会中途改主意。评分不看感觉，看结果：

正确的订单有没有落进数据库、用户有没有被切断、名字和日期对不对、有没有编造工具调用或泄露个人信息 <button class="pd-ts" data-t="12:52" data-who="嘉宾" data-en="And then we don't score it on vibes, but we score outcomes. Define the way that we would define them for a human. And so did the right reservation land in the database?" aria-label="回原文"></button>。

光看任务完成率还不够，因为完成率可以被猜出来。

他们额外惩罚那些完成分数看不见的问题：问了不必要的问题，或者两步能干完的事用了十步。

然后换掉技术栈：同一个智能体、同一批场景、逐字节相同的输入，只换模型。

有多少种智能体，就有多少种基准——这个基准属于你自己，可以拿去测你的智能体。全部开源：方法论、评测集、智能体本身。

演讲结尾还预告了一个模型：

在 LiveKit 推理服务上、专为生产环境语音智能体调优的 Gemma 系列模型，通过语音评测的比例 88%，约 380 毫秒开始说话，比下一个模型快两倍多 <button class="pd-ts" data-t="15:00" data-who="嘉宾" data-en="It's tuned specifically for production voice agents with long prompts, many tools, and tight latency budgets. It passes voice evals at 88%, and it starts speaking in about 380 milliseconds." aria-label="回原文"></button>。

## 本集带走

- 榜单测的是模型，你交付的是一整条流水线，照榜单选模型会掉进陷阱。
- 量「用户听到第一个声音的时间」，别量首字节或首 token。
- 超过一秒的操作应该异步化，让对话永不停止——对话和工具不共用一个线程。
- 测整场对话的结果，别测零件，并且上线后持续测。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">一个能分辨你说完了一个想法和你还在思考的智能体。</span>  
> *One that knows the difference between you finishing your thought and you still thinking.*  
> <span class="qm">—— Jesse Hall · [01:40]</span> ^q1

> <span class="qz">排行榜帮不了你，供应商肯定帮不了你。</span>  
> *The leaderboards can't help you. The vendors definitely can't help you.*  
> <span class="qm">—— Jesse Hall · [02:04]</span> ^q2

> <span class="qz">排行榜给组件打分，但你上线的是一个级联，一条流水线。</span>  
> *Leaderboards score components, but you are shipping a cascade, a pipeline,*  
> <span class="qm">—— Jesse Hall · [04:06]</span> ^q3

> <span class="qz">所以那些排行榜从来没有见过你的用户。</span>  
> *So those leaderboards never met your users.*  
> <span class="qm">—— Jesse Hall · [04:49]</span> ^q4

> <span class="qz">就是测量延迟与感知延迟，你的仪表盘说的与你的用户听到的。</span>  
> *This measured latency versus perceived latency. So what your dashboard says versus what your user hears.*  
> <span class="qm">—— Jesse Hall · [06:09]</span> ^q5

> <span class="qz">仪表盘说它非常快，但你的耳朵说它很慢。</span>  
> *The dashboard says it's really fast, but your ears say it's slow.*  
> <span class="qm">—— Jesse Hall · [06:17]</span> ^q6

> <span class="qz">一个最快流式输出 token 的模型，不一定是先说完一整句话的模型。</span>  
> *A model that streams tokens the fastest is not necessarily the model that finishes a sentence first.*  
> <span class="qm">—— Jesse Hall · [06:47]</span> ^q7

> <span class="qz">2 秒、10 秒、40 秒甚至更久，任何模型选择都无法掩盖 40 秒甚至更久的延迟。</span>  
> *2 seconds, 10, 40 or more seconds, and no model choice is going to be able to hide a 40 or more second latency.*  
> <span class="qm">—— Jesse Hall · [07:18]</span> ^q8

> <span class="qz">所以这再一次，不是一个模型表现好，而是整个系统表现好。</span>  
> *So this is, again, not one model being good. This is an entire system being good.*  
> <span class="qm">—— Jesse Hall · [09:49]</span> ^q9

> <span class="qz">所以问题从来不是我能跑多快，而是我能在这个窗口里塞进的最像真人的智能体是什么？</span>  
> *And so the question is never how fast can I go, but what is the most human-like agent that I can fit inside this window?*  
> <span class="qm">—— Jesse Hall · [11:54]</span> ^q10

> <span class="qz">语音智能体不是一个装上扬声器的聊天机器人。</span>  
> *A voice agent isn't a chat bot with a speaker stacked onto it.*  
> <span class="qm">—— Jesse Hall · [15:33]</span> ^q11
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
