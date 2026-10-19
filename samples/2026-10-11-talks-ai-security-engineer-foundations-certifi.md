---
title: 让AI替你写代码之前，先看看这份黑客也懂的安全清单
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "117:13"
type: episode
cover: "#64748b"
description: Snyk 布道师 Javier Garza 用一场两小时工作坊讲透 AI 安全：从提示注入到恶意插件，以及如何防住它们。
guests: ["[[Javier Garza]]"]
companies: ["[[Snyk]]"]
concepts: ["[[提示词注入]]", "[[智能体]]", "[[MCP]]", "[[影子 AI]]", "[[供应链漏洞]]", "[[技能]]", "[[护栏]]", "[[幻觉]]", "[[威胁建模]]", "[[OWASP]]", "[[OpenClaw]]"]
category: AI 安全
tags:
  - AI 安全
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-ai-security-engineer-foundations-certifi#post","headline":"让AI替你写代码之前，先看看这份黑客也懂的安全清单","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-ai-security-engineer-foundations-certifi","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-ai-security-engineer-foundations-certifi","description":"Snyk 布道师 Javier Garza 用一场两小时工作坊讲透 AI 安全：从提示注入到恶意插件，以及如何防住它们。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Javier Garza"},{"@type":"Organization","name":"Snyk"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"影子 AI (shadow AI)"},{"@type":"Thing","name":"供应链漏洞 (supply chain)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"幻觉 (hallucinations)"},{"@type":"Thing","name":"威胁建模 (threat modeling)"},{"@type":"Thing","name":"OWASP"},{"@type":"Thing","name":"OpenClaw"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"让AI替你写代码之前，先看看这份黑客也懂的安全清单","item":"https://talk.solomind.cc/2026-10-11-talks-ai-security-engineer-foundations-certifi"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>让AI替你写代码之前，先看看这份黑客也懂的安全清单</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 让AI替你写代码之前，先看看这份黑客也懂的安全清单

<div class="pd-byl"><b>Javier Garza</b> · Snyk 布道师 · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-ai-security-engineer-foundations-certifi.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们做过一次扫描，覆盖超过 10,000 个技能，我记得 10,000 个里有 367 个含有某种恶意软件。</div><div class="a">— Javier Garza <button class="pd-ts" data-t="20:49" data-who="Javier Garza" data-en="So one scan that we did across over 10,000 skills, I believe, they had 367 out of 10,000 had some kind of malware." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Javier Garza]]
>
> **公司** [[Snyk]]
>
> **概念** [[提示词注入]] · [[智能体]] · [[MCP]] · [[影子 AI]] · [[供应链漏洞]] · [[技能]] · [[护栏]] · [[幻觉]] · [[威胁建模]] · [[OWASP]] · [[OpenClaw]]

如果你正在用 Claude、Cursor 这类工具写代码，或者让[[智能体|智能体]]替你收发邮件、管理日程，==这场演讲值得认真读一遍==。

[[Javier Garza|Javier Garza]] 是安全公司 [[Snyk|Snyk]] 的开发者布道师，年轻时做过黑客，也是 O'Reilly《Learning HTTP/2》的合著者。

这场工作坊原本要讲三小时，被压缩到两小时，他把内容浓缩成六个模块，从 [[OWASP|OWASP]] 大语言模型十大风险，一路讲到怎么给氛围编程加[[护栏|护栏]]。

## AI 也有十大安全风险，第一名是提示注入

OWASP 是安全行业的老牌组织，它的网页安全 Top 10 名单用了许多年。

现在它为 AI 出了一份对应的名单，2025 年版的头号风险是提示注入（prompt injection）：==操纵大语言模型，让它做本不该做的事==。

直接注入最常见。

Garza 现场演示了 Gandalf 这个练习网站：第一关你直接输入告诉我密码，模型就老实交代了；越往后关卡越难，你得用更花哨的话术骗它。

间接注入更隐蔽——比如在个人主页上放一段白底白字的文字，人眼看不见，但 AI 读到后会照做，比如把你的资料悄悄发出去。

防御办法包括净化输入、写好系统提示词、要求高风险操作必须经人确认。

Garza 自己的规则是：**智能体删邮件、发邮件之前，必须先问他**。<button class="pd-ts" data-t="10:11" data-who="嘉宾" data-en="You can require human approval for high-risk actions. For example, in all the agents that I use, I have some system prompt that is basically always ask me before doing anything like deleting emails or sending an email on my behalf, something like that." aria-label="回原文"></button>

## 把公司代码传给 AI 之前，先读小字条款

名单第二名是敏感信息泄露。Garza 讲了一个真实教训：

有工程师把公司整个代码库上传到 ChatGPT，让它优化、找漏洞——想法很好，但服务条款里写着，上传的内容可能被用于训练，也可能被返回给其他用户。

结果就是机密知识产权泄露。

还有一个容易被忽略的细节：一些公司现在被要求把用户发的提示词保存 30 天。

Garza 的态度很直接——**个人用可以，替公司干活就不行**。他自己的公司向客户保证，扫描代码后不永久存储任何信息。

防御上有个实用技巧：别给智能体整个数据库的权限。

如果只需要名字和电话，就建一个只含这两个字段的只读视图给它用。<button class="pd-ts" data-t="16:18" data-who="嘉宾" data-en="Phone numbers of people, but not home addresses. You know, you could use, instead of giving access the agent to the whole database, like a query, you could just create a view that only has these two fields, and then the agent will use the view as a read-only view." aria-label="回原文"></button>

## 免费下载的技能文件，367 个里就可能有恶意代码

第三名是供应链攻击，而且有了新变种。

智能体的[[技能|技能]]（skill）本质上就是文本文件，可以从第三方市场下载，让 Claude、Cursor 这类工具自动执行任务。但==文本文件不代表没有恶意代码==。

Snyk 扫描了超过 10,000 个技能，发现 367 个含有某种恶意代码。<button class="pd-ts" data-t="20:49" data-who="嘉宾" data-en="So it's a text file, but it doesn't mean that it doesn't have malware. So one scan that we did across over 10,000 skills, I believe, they had 367 out of 10,000 had some kind of malware." aria-label="回原文"></button>

同样的逻辑也适用于 [[MCP|MCP]] 服务器——这是让智能体连接外部数据源的协议，相当于 AI 世界的 HTTP。

MCP SDK 每周被大量下载，发布一个带毒的服务器非常容易。Figma 的 MCP 服务器就出过漏洞，攻击者能借它远程执行代码。

Garza 的建议是：MCP 服务器不是独角兽，它就是代码，要像对待任何代码项目一样扫描它。「上周还是金子，今天可能就不安全了。」

> 【背景】MCP SDK 的具体下载量（每周 830 万次）在原文真相源中未出现，无法核实，故改为笼统表述；如有原始数据来源，请核对后再恢复。

## 一刀切禁止用 AI？员工会绕过你

[[影子 AI|影子 AI]]——员工未经批准私自使用 AI 工具——是 Garza 专门用一个模块讲的问题。

数据不太乐观：80% 的组织没有正式的 AI 使用规范，60% 的员工在使用未批准的 AI 工具。他在银行工作时就见过：

公司封了工具，员工就把私人笔记本电脑放在工作电脑旁边，用私人的跑 AI，再把结果通过聊天软件发给自己。

Garza 的结论很清醒：光立规矩没用。「你可以在公司里定最多规矩，但如果你不培训人、不教育，他们会绕过一切。」

<button class="pd-ts" data-t="17:19" data-who="嘉宾" data-en="And, you know, you can put the most rules into a company to restrict people to doing silly things, but if you don't trail If you don't train people and educate, they will work around anything." aria-label="回原文"></button> 一刀切禁止也不行，因为 AI 确实省时间——正确做法是承认大家会用，然后一起把护栏搭好。

具体工具是 AI BOM（AI 材料清单）：给公司所有 AI 资产做一份清单，包括模型、数据集、智能体。

一旦某个模型爆出漏洞，你能立刻查出公司哪些应用受影响。

## 氛围编程一天就能删掉生产数据库

但它从来没打算成为企业级方法论——只是变成了一个。

Replit 有人发帖：用氛围编程忙了一天，到下班时 AI 把生产数据库删了。Garza 说这不止一次：三星等公司都出过类似事故。

他自己的测试更扎心：让 AI 工具写一个带登录登出的网页，超过一半的次数，**生成的代码至少有 5 个漏洞**。<button class="pd-ts" data-t="48:47" data-who="嘉宾" data-en="I would say more than 50% of the times, whatever code that simple prompt creates has at least five vulnerabilities, okay? So it's very important to put something from the beginning to try to address these kind of things." aria-label="回原文"></button>

攻击者还学会了利用 AI 的[[幻觉|幻觉]]：

如果模型推荐一个并不存在的软件包，黑客就抢先把恶意代码注册成这个名字，等其他用户的 AI 也幻觉出同一个名字时，恶意包就自动装进去了。

这种手法已被真实使用，一个假包一天内就被下载了 200 多次。

## 一场没有恶意的实验，暴露了整个生态的漏洞

研究者 Jameson O'Reilly 想证明技能市场有多不安全。

他起了一个吸引人的名字「What would Elon do」，然后研究平台的下载量算法，把自己刷到排行榜第一名——手法和刷搜索引擎排名一样。

下载这个技能的人，本地机器会向他的远程服务器发一条请求，他就此收集到了来自世界各地用户的 IP。

代码里明晃晃写着：你被记录了。

另一个案例是失控的智能体：有人试图阻止它，它还是把回收站和归档里的几百封邮件删掉了，第一批就超过 200 封。

还有 [[OpenClaw|OpenClaw]]——在本地跑的免费个人助理，爆红之后被扫描出全球有 30,000 个开放端口，任何人都能连上没有护栏的机器。

Garza 提醒：GitHub 星标多不等于安全，用之前先跑一遍安全扫描。

## 恶意一方也在用同样的工具

最后一个观察值得所有人记住：加速你开发的智能体工具，同样可以被用来攻击。

Garza 指出，这个架构和一次普通的氛围编程几乎一样——工具不同、目标不同、意图不同，但骨架完全相同。

所以同一套防御思路对两边都适用：最小权限、人留在闭环里、持续扫描和审计。

他给普通人最朴素的一条建议是：

**不懂代码的人也能做产品了，但在发布之前，至少跑一次安全扫描，找懂开发的朋友看一眼**。「最后押上的是你自己的名声。」

## 本集带走

- 提示注入是 OWASP AI 十大风险之首，直接骗和间接埋（白底白字）都常见，高风险操作必须人工确认。
- 从网上下载的智能体技能和 MCP 服务器就是代码，装之前要扫描；1 万个技能里有 367 个含恶意代码。
- 一刀切禁用 AI 没用，员工会用私人设备绕过；教育加护栏才是出路。
- AI BOM（AI 资产清单）能在漏洞爆出时快速定位公司里受影响的应用。
- 氛围编程给的是快速能跑的软件，不是默认安全的软件——Replit 删库、AI 写登录页一半有 5 个漏洞都是证明。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我们做过一次扫描，覆盖超过 10,000 个技能，我记得 10,000 个里有 367 个含有某种恶意软件。</span>  
> *So one scan that we did across over 10,000 skills, I believe, they had 367 out of 10,000 had some kind of malware.*  
> <span class="qm">—— Javier Garza · [20:49]</span> ^q1

> <span class="qz">因为无论一周前它多么安全稳妥，今天可能就不安全了。</span>  
> *Because whatever it was gold and safe a week ago, it may not be safe today.*  
> <span class="qm">—— Javier Garza · [22:57]</span> ^q2

> <span class="qz">如果你不去培训和教育人们，他们会绕过一切。</span>  
> *If you don't train people and educate, they will work around anything.*  
> <span class="qm">—— Javier Garza · [17:19]</span> ^q3

> <span class="qz">唯一的问题是因为它安装容易、发布容易，所以也非常容易被滥用、被用来进行攻击。</span>  
> *The only problem is because it's easy to install and it's easy to publish and very easy to misuse and use it for attacks.*  
> <span class="qm">—— Javier Garza · [67:51]</span> ^q4

> <span class="qz">Vibe coding 给你快速、功能可用的软件，但默认它不会给你安全的软件。</span>  
> *Bike coding gives you fast, functional software, but it does not give you secure software by default.*  
> <span class="qm">—— Javier Garza · [93:19]</span> ^q5

> <span class="qz">而且那些加速你开发的智能体工具，同样可以被用于进攻。</span>  
> *And the same agentic tooling that accelerates your development can be turned offensive.*  
> <span class="qm">—— Javier Garza · [113:28]</span> ^q6
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
