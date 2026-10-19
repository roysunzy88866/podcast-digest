---
title: 当AI写代码写得飞快，谁来检查它写对了没有？
podcast: 精选演讲
date: 2026-10-20
source_url: undefined
duration: "41:43"
type: episode
cover: "#64748b"
description: OpenAI Codex 部署工程师与 Sonar 的 Killian Carlsen-Phelan 讲如何给 AI 编程代理套上验证的缰绳。
guests: ["[[Killian Carlsen-Phelan]]"]
companies: ["[[OpenAI]]", "[[Codex]]", "[[Sonar]]"]
concepts: ["[[智能体]]", "[[验证]]", "[[沙箱]]", "[[钩子]]", "[[SQL 注入]]", "[[污点分析]]", "[[CI-CD]]", "[[密钥泄露]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-sonarqube-openai-agentic-development-kil#post","headline":"当AI写代码写得飞快，谁来检查它写对了没有？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-sonarqube-openai-agentic-development-kil","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-sonarqube-openai-agentic-development-kil","description":"OpenAI Codex 部署工程师与 Sonar 的 Killian Carlsen-Phelan 讲如何给 AI 编程代理套上验证的缰绳。","datePublished":"2026-10-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Killian Carlsen-Phelan"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"Codex"},{"@type":"Organization","name":"Sonar"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"钩子 (hook)"},{"@type":"Thing","name":"SQL 注入 (SQL injection)"},{"@type":"Thing","name":"污点分析 (taint analysis)"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"密钥泄露 (secrets)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"当AI写代码写得飞快，谁来检查它写对了没有？","item":"https://talk.solomind.cc/2026-10-11-talks-sonarqube-openai-agentic-development-kil"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>当AI写代码写得飞快，谁来检查它写对了没有？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 当AI写代码写得飞快，谁来检查它写对了没有？

<div class="pd-byl"><b>Killian Carlsen-Phelan</b> · Sonar 开发者内容工程师 · 2026-10-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-sonarqube-openai-agentic-development-kil.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">更便宜的实现往往会把瓶颈转移到规范和验证上，而这真的不是我们想做的。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="01:39" data-who="嘉宾" data-en="Cheaper implementations tend to shift the bottleneck to specification and verification, and that's really not what we're wanting to do." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Killian Carlsen-Phelan]]
>
> **公司** [[OpenAI]] · [[Codex]] · [[Sonar]]
>
> **概念** [[智能体]] · [[验证]] · [[沙箱]] · [[钩子]] · [[SQL 注入]] · [[污点分析]] · [[CI-CD]] · [[密钥泄露]]

当 AI 代理替你写代码已经不成问题，==真正的问题变成了：你怎么知道它写的是安全的==？

这场演讲里，[[OpenAI|OpenAI]] 的部署工程团队先给出三条原则，[[Sonar|Sonar]] 的开发者内容工程师 [[Killian Carlsen-Phelan|Killian Carlsen-Phelan]] 再现场演示了如何用 SonarQube 插件把 [[Codex|Codex]] 的输出管起来。

## 完成必须带着证据

OpenAI 方面的开场人抛出了三条核心主张。第一条：

代理说任务完成了，不等于完成了——**完成意味着拿出证据，比如一个可审查的代码改动、能通过编译和测试**，而不是只回一句修好了<button class="pd-ts" data-t="01:31" data-who="嘉宾" data-en="So the definition of done for us, typically it's a reviewable diff, some tool evidence, that type of thing. It doesn't mean just saying fixed. It actually means saying fixed and providing the evidence supporting this fact." aria-label="回原文"></button>。

更麻烦的是关联失败：

代理常见的翻车方式，要么是上下文不全，要么是局部修复破坏了全局约束，要么是它自己生成的测试把同样的缺陷又[[验证|验证]]了一遍。

所以自我检查有用，但不是独立的裁判，要主动去找反证——编译器怎么说？测试怎么说？<button class="pd-ts" data-t="02:30" data-who="嘉宾" data-en="You can't determine whether a task is done without looking at both parts of it. So you typically want to almost seek out disconfirming evidence of a task being completed." aria-label="回原文"></button>

## 沙箱关得住它，但证明不了它对

第二条原则：**限制不等于正确**。

[[沙箱|沙箱]]可以限制代理能写什么文件、能用什么工具，但「沙箱能拦住一次写入，却不能证明一条查询是安全的」<button class="pd-ts" data-t="03:22" data-who="嘉宾" data-en="Even what intent is there? So a sandbox can contain a write, but it can't prove that a query is safe. What I'm trying to get at is that no Oracle is proof and that you want to layer controls with different boundaries, sort of this defense in depth, these multi-layers of guardrails, that's sort of the overall idea." aria-label="回原文"></button>。

正确做法是层层设防：执行层管它能做什么，产物层管它做出来的东西是否合格，而最终要不要上线，决定权始终在人手里。

第三条：反馈机制要放在循环内部，通过技能（skill）、MCP 工具和[[钩子|钩子]]（hook）在代理工作的每一步都做检查，比如拦截写死的密钥。

## 瓶颈已经从写代码挪到了查代码

Killian 接棒，给出了 Sonar 的调研数据：

超过 1000 名开发者受访，42% 已提交的代码是 AI 生成或辅助的，但 96% 的开发者并不完全信任它——而只有不到一半的人会在合并前完整验证 <button class="pd-ts" data-t="07:02" data-who="嘉宾" data-en="We did some research in the past year or so, and we surveyed over 1,000 developers. And we found that 42% of committed code is either AI-generated or AI-assisted." aria-label="回原文"></button>。

没人信它，却有大量不被信任的代码进了代码库。

原因很简单：**过去写代码是瓶颈，现在 AI 把这一步基本解决了，瓶颈挪到了验证上**。人查不过来，就得靠工具。

## 四步循环：生成、引导、验证、解决

Sonar 提出的**以代理为中心的开发循环分四步**：

生成（交给 Codex 这类工具）、引导（把项目规范、架构等高质量上下文喂给代理，还能省下不少令牌开销）、验证（代码一写完就查安全和质量问题）、解决（发现问题立刻修复），如此迭代 <button class="pd-ts" data-t="08:24" data-who="嘉宾" data-en="What help and what tools can I get to verify that this is not gonna nuke my code base or nuke my customers and create all sorts of bad issues going on? So we have four steps in the ACDC, the agent-centric development cycle." aria-label="回原文"></button>。

验证还要分内外两个循环：外循环是传统的 CI 流水线，推送、跑测试、失败、回去改、再推送——Killian 直言这是很多开发者的噩梦。

内循环则是把验证左移到编辑器里，代码生成完当场验证，不用来回折腾。

## 一个 90 天才能消失的密钥

演示用的是不到 200 行的 Python 小项目，Killian 在里面埋了 4 个问题。SonarQube 一扫，安全评级直接给了最低的 E。

其中一个问题是把 OpenAI API 密钥明文写在了源代码里——Killian 坦言自己也犯过这种错。

他给出一个数字：公开仓库里泄露的密钥，平均要 90 天才会被处理，期间任由爬虫抓取 <button class="pd-ts" data-t="17:09" data-who="嘉宾" data-en="This happens all the time, and a lot of times what happens is people accidentally push these into production code, and the average remediation time for a secret in a public repository is 90 days right now." aria-label="回原文"></button>。

另一个是 [[SQL 注入|SQL 注入]]：查询参数从命令行一路传进拼接的字符串。==谁控制了命令行参数，谁就控制了你的数据库==。

SonarQube 用[[污点分析|污点分析]]追踪数据从源头到汇点的完整路径，把这类问题揪出来。

## 装上插件之后发生了什么

现场演示里，Codex 装上 SonarQube 插件后有几层防护。

密钥检测钩子会在代理试图读取含密钥的文件时直接拦截——密钥既不进模型上下文，也不进日志 <button class="pd-ts" data-t="27:35" data-who="嘉宾" data-en="So you can see instantly this was blocked. No secrets were leaked into the LL1 context. Nothing is being stored in any logs or anything like that." aria-label="回原文"></button>。

不过 Killian 也坦率承认，这个钩子挂在工具调用上，如果代理自己写脚本绕过去读文件，理论上可以绕过。

验证分两档：

有代理分析功能的话，代理每改一次文件，服务端立刻扫描，确认修复没引入新问题——用 Killian 的话说，免得修一个问题冒出三个，像打九头蛇。

免费版没有这个功能，那就等下次 CI 推送时再验。另一项上下文增强则在代理动手前把项目规范和架构喂给它。

针对 AI 时代，Sonar 还专门写了一条规则 S8702：**不让 AI 代理写出会被别的代理利用的代码** <button class="pd-ts" data-t="35:19" data-who="嘉宾" data-en="Here is the secret block, blocker severity that I mentioned earlier, but the one that I wanna highlight and get fixed today is this S8702. This is a rule that we wrote specifically for AI agentic workflows." aria-label="回原文"></button>。

现场演示让 Codex 修掉这个问题，它给出了参数化查询，扫描通过，闭环完成。

## 本集带走

- 完成的定义是：拿出可验证的证据，而不是代理说一句修好了。
- 沙箱管得住权限，管不住正确性；验证要分层，最终上线决定权在人。
- 瓶颈已从代码生成转移到代码验证：42% 的提交代码由 AI 参与生成，但 96% 的开发者不完全信任它。
- 把验证从 CI 外循环左移到编辑器内循环，能在代码生成后当场发现问题。
- 对 AI 生成代码要防的不只是漏洞，还有AI 写给 AI 利用的新型攻击面。

<div class="pd-sec pd-sec-q">全部金句 <span>11 条</span></div>

> <span class="qz">更便宜的实现往往会把瓶颈转移到规范和验证上，而这真的不是我们想做的。</span>  
> *Cheaper implementations tend to shift the bottleneck to specification and verification, and that's really not what we're wanting to do.*  
> <span class="qm">—— 嘉宾 · [01:39]</span> ^q1

> <span class="qz">自我批判是有用的，但它不是一个独立的 oracle,我们经常发现</span>  
> *So self-critique is useful, but it's not an independent oracle, and we often tend to find that*  
> <span class="qm">—— 嘉宾 · [02:13]</span> ^q2

> <span class="qz">所以你通常想要几乎主动去寻找任务已完成的反证。</span>  
> *So you typically want to almost seek out disconfirming evidence of a task being completed.*  
> <span class="qm">—— 嘉宾 · [02:30]</span> ^q3

> <span class="qz">所以一个沙箱可以容纳一次写入，但它无法证明一个查询是安全的。</span>  
> *So a sandbox can contain a write, but it can't prove that a query is safe.*  
> <span class="qm">—— 嘉宾 · [03:22]</span> ^q4

> <span class="qz">我想说的是，没有任何 oracle 是证明，你需要用不同的边界来分层控制，有点像纵深防御，这些多层护栏，这大致是整体思路。</span>  
> *What I'm trying to get at is that no Oracle is proof and that you want to layer controls with different boundaries, sort of this defense in depth, these multi-layers of guardrails, that's sort of the overall idea.*  
> <span class="qm">—— 嘉宾 · [03:31]</span> ^q5

> <span class="qz">我们发现 42% 的已提交代码要么是 AI 生成的，要么是 AI 辅助的。</span>  
> *And we found that 42% of committed code is either AI-generated or AI-assisted.*  
> <span class="qm">—— Killian Carlsen-Phelan · [07:02]</span> ^q6

> <span class="qz">所以瓶颈现在已经从单纯的代码生成转移到了代码验证，对吧？</span>  
> *So the bottleneck has shifted now from just code generation to code verification, right?*  
> <span class="qm">—— Killian Carlsen-Phelan · [07:58]</span> ^q7

> <span class="qz">我们有海量的代码正在被生成，但现在这受制于人类的极限：“嘿，我如何确保这是安全的？”</span>  
> *We have a massive amount of code being generated, but now it is up to the human limitation of, hey, how do I make sure that this is safe?*  
> <span class="qm">—— Killian Carlsen-Phelan · [08:04]</span> ^q8

> <span class="qz">这种事经常发生，很多时候人们不小心把这些推到了生产代码里，而现在，公开仓库里一个密钥的平均修复时间是 90 天。</span>  
> *This happens all the time, and a lot of times what happens is people accidentally push these into production code, and the average remediation time for a secret in a public repository is 90 days right now.*  
> <span class="qm">—— Killian Carlsen-Phelan · [16:54]</span> ^q9

> <span class="qz">你的 token 就那么摆在那里，全世界都看得见，所有爬虫都能抓，长达 90 天。</span>  
> *Your token is just sitting out there for all the world to see, all the bots to scrape for 90 days.*  
> <span class="qm">—— Killian Carlsen-Phelan · [17:11]</span> ^q10

> <span class="qz">这意味着任何控制了 sys.argv 的人都能控制你的数据库，对吧？</span>  
> *That means that anybody who controls sys.orgv gets to control your database, right?*  
> <span class="qm">—— Killian Carlsen-Phelan · [18:08]</span> ^q11
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
