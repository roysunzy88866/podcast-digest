---
title: 给AI智能体一间自己的屋子：Google DeepMind谈沙盒环境
podcast: 精选演讲
date: 2026-10-12
source_url: undefined
duration: "20:32"
type: episode
cover: "#64748b"
description: Google DeepMind的Philipp Schmid讲解Interactions API和自带沙盒的托管智能体，并现场演示一台AI电台。
guests: ["[[Philipp Schmid]]"]
companies: ["[[Google DeepMind]]"]
concepts: ["[[Gemini API]]", "[[智能体]]", "[[沙箱]]", "[[Interactions API]]", "[[智能体 API]]", "[[anti-gravity]]", "[[AI Studio]]", "[[Managed Agents]]", "[[函数调用]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-07-talks-why-ai-agents-should-have-their-own-sand#post","headline":"给AI智能体一间自己的屋子：Google DeepMind谈沙盒环境","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-07-talks-why-ai-agents-should-have-their-own-sand","mainEntityOfPage":"https://talk.solomind.cc/2026-10-07-talks-why-ai-agents-should-have-their-own-sand","description":"Google DeepMind的Philipp Schmid讲解Interactions API和自带沙盒的托管智能体，并现场演示一台AI电台。","datePublished":"2026-10-12","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Philipp Schmid"},{"@type":"Organization","name":"Google DeepMind"},{"@type":"Thing","name":"Gemini API"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Interactions API"},{"@type":"Thing","name":"智能体 API (Agents API)"},{"@type":"Thing","name":"anti-gravity"},{"@type":"Thing","name":"AI Studio"},{"@type":"Thing","name":"Managed Agents"},{"@type":"Thing","name":"函数调用 (function calling)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给AI智能体一间自己的屋子：Google DeepMind谈沙盒环境","item":"https://talk.solomind.cc/2026-10-07-talks-why-ai-agents-should-have-their-own-sand"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给AI智能体一间自己的屋子：Google DeepMind谈沙盒环境</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给AI智能体一间自己的屋子：Google DeepMind谈沙盒环境

<div class="pd-byl"><b>Philipp Schmid</b> · Google DeepMind · 2026-10-12</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-07-talks-why-ai-agents-should-have-their-own-sand.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">而 Gemini API 里的 anti-gravity 智能体仍然是同一个 harness,意思是如果我们改进 Gemini 使它在那个 harness 下变得更好，我们在 anti-gravity 里受益，但我们在 Gemini API 里也受益。</div><div class="a">— Philipp Schmid <button class="pd-ts" data-t="08:51" data-who="Philipp Schmid" data-en="Then the anti-gravity agent we have in the Gemini API, but it's still the same harness, meaning if we improve Gemini to become better with that harness, we benefit inside anti-gravity, but we also benefit inside of the Gemini API." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Philipp Schmid]]
>
> **公司** [[Google DeepMind]]
>
> **概念** [[Gemini API]] · [[智能体]] · [[沙箱]] · [[Interactions API]] · [[智能体 API]] · [[anti-gravity]] · [[AI Studio]] · [[Managed Agents]] · [[函数调用]]

[[Philipp Schmid|Philipp Schmid]]来自[[Google DeepMind|Google DeepMind]]，主要做[[AI Studio|AI Studio]]和[[Gemini API|Gemini API]]相关的工作。

这场演讲的核心主张写在标题里：AI[[智能体|智能体]]应该有自己专属的沙盒——一个由服务方管理的运行环境。

他把这个想法背后的新产品讲了一遍，还现场跑了个演示。

## AI智能体是怎么一步步走到今天的？

Schmid先快速回顾了大模型的演进。

在ChatGPT出现之前，最早的BERT和GPT模型让人兴奋的地方，是能接着句子往下写——给几个词，模型就能连贯地续写一首诗。

有意思，但没什么实际用处。

之后模型学会了执行指令，能回答问题了。ChatGPT出现后，人机交互变成了你一句我一句的对话。

再后来加上[[函数调用|函数调用]]，模型可以替你执行动作。

而现在到了新阶段：

你不再一步步下指令，而是给模型一个目标，告诉它怎么验证目标有没有达成，然后让它自己跑几个小时甚至几天，回来交结果 <button class="pd-ts" data-t="02:31" data-who="Philipp Schmid" data-en="And now we are in this black box with goals, thinking, and functions where we no longer just prompt the model. We basically give a goal to the model, tell them how to verify its goal, how to deploy it, and hopefully have it running for multiple hours or even days, and come back with the results we want to achieve." aria-label="回原文"></button>。

## 新API的核心变化：不再有“用户回合”

传统的大模型API都遵循“用户回合”结构：用户发一句，模型回一句。Schmid认为这在智能体时代已经不合适了。

比如模型调用函数后，函数的返回结果要硬塞进一个“用户”角色发回去。可这个结果明明来自运行环境，不是来自用户，「for me always felt a little bit weird」<button class="pd-ts" data-t="07:26" data-who="Philipp Schmid" data-en="Function calling is not very a user role, right? With normal or like with previous APIs, you would need to use the user turn to return some function output, which for me always felt a little bit weird because the output or the new input is coming from the environment and not from the user." aria-label="回原文"></button>。

**于是新的[[Interactions API|Interactions API]]把对话改成了一条由“步骤”组成的时间线**：每个动作、每次生成都是独立的类型，想加新能力也容易扩展。

这套API还有服务端状态管理——多轮对话只需要传上一轮的ID，服务器会自动拼接历史。

另外支持长时间运行的异步任务，比如视频生成很耗时，你可以先拿到一个ID，等生成完再来取结果。

## 重点来了：每个智能体配一个沙盒

在Google I/O上发布的[[anti-gravity|anti-gravity]]智能体，带来了关键的environment（环境）字段。

你在API请求里指定remote，Google的后端就会启动一个云上沙盒，智能体可以在里面跑代码、创建文件、装依赖、调用你自己的API <button class="pd-ts" data-t="09:09" data-who="Philipp Schmid" data-en="And with that new agent, we also introduce this environment field. And an environment here, remote, is basically for that API call, your agent gets a sandbox managed by us, meaning if you send a request, our backend starts as a cloud sandbox where the agent can run code, can create files, write files." aria-label="回原文"></button>。

关键在于：**这一切由Google托管，无状态，你不用管任何基础设施**。用他的话说，你不用碰Terraform，不用想Kubernetes、微服务这些事 <button class="pd-ts" data-t="12:02" data-who="Philipp Schmid" data-en="And every time I call this new agent, it will start from that already pre-loaded, pre-configured environment. And so it's very easy for you to use agents to build their own environments and then to create agents out of them which you can share with your users or with your customers without writing any Terraform, without thinking about Kubernetes, microservices, Firecracker, or anything else." aria-label="回原文"></button>。

环境还能跨回合复用，甚至可以让多个智能体共享同一个环境——3个智能体可以通过文件系统交换上下文，或者让子智能体接手前一个智能体的工作。

> 【背景】沙盒指隔离的独立运行环境，程序在里面随便折腾也不会影响外部系统。

## 智能体就是一堆文件

演示环节，Schmid展示了一个AI电台应用。它本质上是套在[[Managed Agents|托管智能体]]上的一层界面：

智能体先用Python装依赖、读技能文件，然后自己研究话题、写台词、生成语音和音乐，最后混音出成品。

现场播放了一段关于“早餐麦片该先倒还是先倒牛奶”的电台节目，主持人Paul连线波士顿的David和悉尼的Sarah，两人一本正经地辩论，David还打了个肉汁土豆泥的比方。

有意思的是，**打开这个智能体的内部，它就是几个文件**：一个agent.md写指令，几个Python文件封装具体能力，比如调用语音合成模型。

想把它从界面搬到自己的后端，复制文件、创建智能体就行 <button class="pd-ts" data-t="17:35" data-who="Philipp Schmid" data-en="That's all it takes for our agent. And if you want to take that agent from the UI to a back end, you just need to copy that file and create the agent and then use it." aria-label="回原文"></button>。

## 智能体甚至能造智能体

[[智能体 API|Agents API]]让你把一个智能体的“大脑”、指令和环境打包定义好，团队之间可以共享。

更妙的是**可以让智能体先搭建自己的环境**——比如装好GitHub命令行工具、放入技能文件、做完检查——得到一个环境ID，再基于这个预装好的环境创建新智能体，每次调用都从这里起步 <button class="pd-ts" data-t="11:42" data-who="Philipp Schmid" data-en="So you can think about, I have some kind of scaffolding to do where I need to install the GitHub CLI, add some skills, and maybe do some sanity checks. I can use the agent to create its own environment." aria-label="回原文"></button>。

现场演示中，Schmid问沙盒里的智能体“你在哪运行”，几秒后得到回答：Ubuntu系统、8个vCPU、16GB内存、Python和pip都装好了。

环境里的文件还可以随时下载出来分享。

## 本集带走

- Interactions API把传统的“用户-模型回合”改成了步骤时间线，函数结果不再伪装成用户输入。
- 托管智能体自带云上沙盒，能跑代码、装依赖、读写文件，开发者不用管任何基础设施。
- 沙盒环境可复用、可共享，多个智能体能通过文件系统协作。
- 智能体本质上就是一组文件（agent.md加技能脚本），可以打包分享，甚至用智能体来搭建环境再创建新智能体。
- 想上手可以去 ai.studio 或 ai.dev，用Gmail账号即可免费试用。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">而 Gemini API 里的 anti-gravity 智能体仍然是同一个 harness,意思是如果我们改进 Gemini 使它在那个 harness 下变得更好，我们在 anti-gravity 里受益，但我们在 Gemini API 里也受益。</span>  
> *Then the anti-gravity agent we have in the Gemini API, but it's still the same harness, meaning if we improve Gemini to become better with that harness, we benefit inside anti-gravity, but we also benefit inside of the Gemini API.*  
> <span class="qm">—— Philipp Schmid · [08:51]</span> ^q1

> <span class="qz">我们的智能体其实就是文件。</span>  
> *And our agent is just files.*  
> <span class="qm">—— Philipp Schmid · [16:47]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-03-talks-an-interaction-is-all-you-need-ivan-leo|一次交互就够了：Google DeepMind 的新 API 到底想解决什么]]<span class="pd-rz">同公司:Google DeepMind · 同概念:anti-gravity、Gemini API、Interactions API、函数调用 (function calling)、托管智能体 (managed agents)、智能体 (agent)、沙箱 (sandbox)、AI Studio</span>
- [[2026-09-14-talks-agents-without-code-skills-yaml-and-file|智能体就只是文件：当配置取代 Python]]<span class="pd-rz">同嘉宾:Philipp Schmid · 同概念:函数调用 (function calling)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同概念:托管智能体 (managed agents)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同公司:OpenAI · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
