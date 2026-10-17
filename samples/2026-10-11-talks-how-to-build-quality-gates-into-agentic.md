---
title: AI 写代码这么多，质量谁来把关？
podcast: 精选演讲
date: 2026-10-17
source_url: undefined
duration: "57:35"
type: episode
cover: "#64748b"
description: Qodo 开发者布道师 Nnenna Ndukwe 现场演示如何用规则、技能和层层关卡，让 AI 生成的代码敢署名、敢提交。
guests: ["[[Nnenna Ndukwe]]"]
companies: ["[[Codex]]", "[[Claude Code]]"]
concepts: ["[[AI 编程]]", "[[编码智能体]]", "[[代码审查]]", "[[代码质量]]", "[[TDD]]", "[[技能]]", "[[规则]]", "[[pull request]]", "[[确定性]]", "[[上下文管理层]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-how-to-build-quality-gates-into-agentic#post","headline":"AI 写代码这么多，质量谁来把关？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-how-to-build-quality-gates-into-agentic","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-how-to-build-quality-gates-into-agentic","description":"Qodo 开发者布道师 Nnenna Ndukwe 现场演示如何用规则、技能和层层关卡，让 AI 生成的代码敢署名、敢提交。","datePublished":"2026-10-17","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Nnenna Ndukwe"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"Claude Code"},{"@type":"Thing","name":"AI 编程 (AI coding)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"代码质量 (code quality)"},{"@type":"Thing","name":"TDD"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"规则 (rules)"},{"@type":"Thing","name":"pull request"},{"@type":"Thing","name":"确定性 (deterministic)"},{"@type":"Thing","name":"上下文管理层 (context management layer)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"AI 写代码这么多，质量谁来把关？","item":"https://talk.solomind.cc/2026-10-11-talks-how-to-build-quality-gates-into-agentic"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 写代码这么多，质量谁来把关？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 写代码这么多，质量谁来把关？

<div class="pd-byl"><b>Nnenna Ndukwe</b> · Qodo 开发者布道师 · 2026-10-17</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-how-to-build-quality-gates-into-agentic.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我不在乎你用什么工具，Codex、Claude Code 内置的代码审查、Codo，无论是什么，总是要运行一次本地代码审查，因为总有一些小的改动，你本可以在另一个开发者不得不查看你的代码之前更早地做出。</div><div class="a">— Nnenna Ndukwe <button class="pd-ts" data-t="30:49" data-who="Nnenna Ndukwe" data-en="I don't care what tool that you use, if it's a Codex, if it's Claude Code, their built-in code review, if you're using Codo, whatever it is, always run a local code review because there are always these small changes that you could probably make earlier before another developer has to see your code." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Nnenna Ndukwe]]
>
> **公司** [[Codex]] · [[Claude Code]]
>
> **概念** [[AI 编程]] · [[编码智能体]] · [[代码审查]] · [[代码质量]] · [[TDD]] · [[技能]] · [[规则]] · [[pull request]] · [[确定性]] · [[上下文管理层]]

AI 写代码已经很普遍了，但很少有人敢拍着胸脯说：这段 AI 生成的代码，出了问题我负责。

在一场现场工作坊里，Qodo 的开发者布道师 [[Nnenna Ndukwe|Nnenna Ndukwe]] 演示了一套完整流程——从规划到提交，每一关都设置质量关卡。

她的一句话概括了核心问题：我们得反复操舵AI 编程代理，==才能有底气说我可以把名字签在这段代码上==<button class="pd-ts" data-t="03:41" data-who="嘉宾" data-en="There are so many potential failure modes for using AI for coding, just to ship high-quality software. That is where we come into this process where we kind of have to overdo it with steering AI coding agents to get what we need out of it just so that we can get behind or stand behind the quality of the code" aria-label="回原文"></button>。

## 为什么 AI 写的代码不能直接用？

她的判断是：

在整个开发生命周期里——规划、开发、[[代码审查|代码审查]]、测试、部署——[[代码质量|代码质量]]在每一个环节都可能出问题，出问题的可能性无处不在<button class="pd-ts" data-t="03:27" data-who="嘉宾" data-en="But where can code quality break down in the agentic development lifecycle? Everywhere. Planning and design, development, code review, testing, deployment." aria-label="回原文"></button>。

尤其是支付这类敏感场景。她举的例子是：支付类改动里，AI 生成的代码经常看起来很对，但会埋下隐患 <button class="pd-ts" data-t="17:24" data-who="嘉宾" data-en="You can choose which one you want, but this is an intentionally small change, right, with some potential risks kind of built into the code, or it's a sensitive aspect of this payments API." aria-label="回原文"></button>。

这正适合用来演示质量关卡的价值。

## 第一步：把什么是好代码写下来，放在 AI 能读到的地方

她强调，团队要先定义清楚代码质量标准，而且这套标准要成文化，存在某个固定位置，让不管哪个 AI 界面——命令行、编辑器还是 CI 流程——都能读取并遵守 <button class="pd-ts" data-t="04:13" data-who="嘉宾" data-en="I think that there needs to be a verification aspect to agentic engineering. And it really starts with, number one, defining what code quality means to you. And your team, if you're working on a team of developers, that needs to be defined and then that needs to live somewhere." aria-label="回原文"></button>。

具体来说，仓库里要放两样东西：[[规则|规则]]和[[技能|技能]]。

规则告诉 AI 什么能做什么不能做；技能则是 AI 执行具体任务的方法指引，比如测试驱动开发的技能。

规则还可以按严重程度分级：有的违规直接阻止合并，有的只是建议改进。

这些规则按可访问性、正确性、可维护性、架构、安全等类别管理 <button class="pd-ts" data-t="33:46" data-who="嘉宾" data-en="And then they're divided by categories. There's accessibility, correctness, maintainability, architecture, security. And then they're also organized by level of severity." aria-label="回原文"></button>。

如果团队协作，这些规则最好放在团队统一的[[上下文管理层|上下文管理层]]里，而不是散落在各个仓库——AI 会自动从中挑出与当前任务相关的规则来遵守。

## 规划先行：先出计划，再写代码

演示中，她先让代理进入计划模式：只读代码、不许动手，产出两份文档——一份高层实现计划，一份详细的执行计划。

计划里包括要改什么行为、哪些规则适用、用什么技能、哪些测试能证明行为符合预期，还有提交代码的计划 <button class="pd-ts" data-t="25:30" data-who="嘉宾" data-en="I truly believe that this is a really important artifact to be able to take with you if you're not already using a structured template. I think that a plan should answer what behavior are we changing, which rules apply, what skills would guide the agent, which tests prove the expected behavior, and what kind of quality gauge should pass before we review." aria-label="回原文"></button>。

她特别提到，**规划越详细、越有结构，代理就越能遵守要求**，甚至能在发现遗漏时自我纠正 <button class="pd-ts" data-t="12:09" data-who="嘉宾" data-en="And this is very detailed templates because from what I have found is the more detailed that you are, relatively speaking, the more detailed that you are or consistent and structured with your planning phase and the document that your agent has to go back to and read," aria-label="回原文"></button>。

计划末尾还有完成的定义：哪些命令必须跑过、哪些改动被搁置了，全都记录在案。

## 确定性工具加 AI，缺一不可

在本地验证环节，她用了一整套[[确定性|确定性工具]]：RUF、PyRite、Bandit、PyTest、SEMGREP，再加上 conventional commits 提交规范 <button class="pd-ts" data-t="12:35" data-who="嘉宾" data-en="And then we have the local verification gates. I use RUF, PyRite, Bandit, PyTest, SEMGREP, and conventional commits, deterministic evidence that the changes made locally preserve the local contract." aria-label="回原文"></button>。她的立场很明确：

**自己是确定性工具与 AI 结合的坚定信徒**——AI 擅长理解意图，但跑测试、做静态分析这种有明确对错的事，交给传统工具更可靠。

最后是[[pull request|拉取请求]]环节。

AI 代码审查工具自动分析变更，发现问题后，再用一个修复技能自动解决，修复完重新验证、把结果回传到拉取请求上，被解决的问题自动划掉。

## 效果如何？她拿自己试过

她用这套流程给自己的一个开源项目做过验证，故意提交了一个超过 1900 行代码的大拉取请求来测试流程本身。

**结果只发现了一个可靠性方面的漏洞** <button class="pd-ts" data-t="31:39" data-who="嘉宾" data-en="It was intentionally large because I wanted to test the quality of this actual workflow itself. And only one bug was uncovered in over 1,900 lines of code using Codo for that automated code review." aria-label="回原文"></button>。对她来说，这证明了流程的价值。

## 本集带走

- 代码质量标准要成文化，放在 AI 能读取的地方，并按严重程度分级，部分规则可阻止合并
- 让 AI 先出详细计划再动手：计划包含行为目标、适用规则、测试方案和完成的定义
- 确定性工具（测试、静态分析、格式检查）与 AI 审查结合，早期且频繁地验证
- AI 审查发现问题后，可用代理技能自动修复，再重新验证，形成闭环
- 支付等敏感场景尤其要警惕：AI 生成的代码可能看起来很对但暗藏问题

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">我不在乎你用什么工具，Codex、Claude Code 内置的代码审查、Codo，无论是什么，总是要运行一次本地代码审查，因为总有一些小的改动，你本可以在另一个开发者不得不查看你的代码之前更早地做出。</span>  
> *I don't care what tool that you use, if it's a Codex, if it's Claude Code, their built-in code review, if you're using Codo, whatever it is, always run a local code review because there are always these small changes that you could probably make earlier before another developer has to see your code.*  
> <span class="qm">—— Nnenna Ndukwe · [30:49]</span> ^q1

> <span class="qz">而在使用 Codo 进行那次自动化代码审查的超过 1,900 行代码中，只发现了一个 bug。</span>  
> *And only one bug was uncovered in over 1,900 lines of code using Codo for that automated code review.*  
> <span class="qm">—— Nnenna Ndukwe · [31:39]</span> ^q2

> <span class="qz">所以我们才进入这样一个流程：我们不得不过度地去引导 AI 编码智能体，才能从中得到我们需要的东西，就为了让我们能够为代码的质量背书。</span>  
> *That is where we come into this process where we kind of have to overdo it with steering AI coding agents to get what we need out of it just so that we can get behind or stand behind the quality of the code*  
> <span class="qm">—— Nnenna Ndukwe · [03:41]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-09-27-talks-ai-generated-code-is-already-competing-w|AI 生成的代码到底行不行：百万 PR 数据给出的答案]]<span class="pd-rz">同公司:Codex · 同概念:代码审查 (code review)、拉取请求 (pull request)</span>
- [[2026-09-21-howiai-how-warp-ships-2-000-prs-a-month-with-ai|Warp CEO 的软件工厂：2000 个 PR 一个月，人成了瓶颈]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:代码审查 (code review)、编码智能体 (coding agent)</span>
- [[2026-07-09-beyondcoding-cracked-solo-dev-why-the-fastest-enginee|氛围编码 vs 氛围工程：智能体时代谁被淘汰]]<span class="pd-rz">同公司:Codex · 同概念:规则 (rules)、拉取请求 (pull request)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-12-a16z-why-companies-are-becoming-a-series-of-l|A16Z 消费投资合伙人 Anish Acharya：别怕“永久下层”，公司正在变成一串循环]]<span class="pd-rz">同公司:Claude Code、Codex · 同概念:编码智能体 (coding agent)</span>
- [[2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that|桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟]]<span class="pd-rz">同公司:Claude Code · 同概念:确定性工具 (deterministic)、静态分析 (static analysis)</span>
- [[2026-singju-openclaw-80apps|OpenClaw 创始人 Peter Steinberger：让智能体直接接管你的整台电脑]]<span class="pd-rz">同公司:Claude Code、Codex</span>

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
