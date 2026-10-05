---
title: 模型已经够好了，为什么智能体还只能写代码？
podcast: 精选演讲
date: 2026-09-29
source_url: undefined
duration: "20:32"
type: episode
cover: "#64748b"
description: Composio 联合创始人兼 CTO Karan Vedya 拆解编程智能体成功的六个基础设施原语，主张瓶颈已从模型转移到没人建的知识工作基础设施。
guests: ["[[Karan Vaidya]]"]
companies: ["[[Composio]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[上下文]]", "[[验证]]", "[[governance]]", "[[可逆性]]", "[[中心化]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-from-coding-to-knowledge-work-agents-kar#post","headline":"模型已经够好了，为什么智能体还只能写代码？","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-from-coding-to-knowledge-work-agents-kar","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-from-coding-to-knowledge-work-agents-kar","description":"Composio 联合创始人兼 CTO Karan Vedya 拆解编程智能体成功的六个基础设施原语，主张瓶颈已从模型转移到没人建的知识工作基础设施。","datePublished":"2026-09-29","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Karan Vaidya"},{"@type":"Organization","name":"Composio"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"验证 (verification)"},{"@type":"Thing","name":"governance"},{"@type":"Thing","name":"可逆性 (reversibility)"},{"@type":"Thing","name":"中心化 (centralization)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"模型已经够好了，为什么智能体还只能写代码？","item":"https://talk.solomind.cc/2026-09-03-talks-from-coding-to-knowledge-work-agents-kar"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>模型已经够好了，为什么智能体还只能写代码？</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 模型已经够好了，为什么智能体还只能写代码？

<div class="pd-byl"><b>Karan Vaidya</b> · Composio 联合创始人兼 CTO · 2026-09-29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-from-coding-to-knowledge-work-agents-kar.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">它之所以奏效，是因为围绕编程的所有基础设施和系统本来就是为智能体而生的。</div><div class="a">— Karan Vaidya <button class="pd-ts" data-t="01:20" data-who="Karan Vaidya" data-en="It only worked because all the infrastructure and systems around coding were literally meant for agents." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Karan Vaidya]]
>
> **公司** [[Composio]]
>
> **概念** [[智能体]] · [[沙箱]] · [[上下文]] · [[验证]] · [[governance]] · [[可逆性]] · [[中心化]]

如今绝大多数[[智能体|智能体]]的工具调用都发生在同一个领域——软件工程。其他所有工作都远远落后。说这话的人是 [[Composio|Composio]] 联合创始人兼 CTO Karan Vedya，他要回答的是一个万亿美元级的问题：如果模型在不断变好，为什么我们仍然只有智能体编程？

三年前编程智能体只是自动补全，今天软件工程已经完全自主，从按 tab 走到了「让 Claude 大展身手」。大多数人说这是因为模型变好了，加上 Claude Code、Codex、Cursor 这些脚手架。

但他指出，光靠这些不够——编程智能体之所以成功，是因为围绕代码的基础设施本来就是为智能体而生的：仓库、提交历史、测试、CI/CD、代码评审、linter，出问题还能回滚。正是这些系统让你敢于信任智能体。而现在我们把同样出色的智能体指向客服、财务、销售，它们却「只是在盲干」，因为那些领域根本没有这套基础设施。

他认为核心是六个原语，编程领域六者兼备，知识工作领域一个都没有：

**一、[[中心化|中心化]]。** 编程智能体起点就拥有一切——代码库就是单一事实来源。

而知识工作里，一笔交易散落在五个平台：记录在 Salesforce，文档在 Notion，邮件在 Gmail，对话在 Slack，客服历史在 Zendesk。智能体还没开始干活，就得先自己把所有线索串起来——而这只是编程智能体的起点。所以要构建一个「缺失的中心」，所有应用、连接、登录集中一处，让智能体获得与编程智能体相同的起跑线。

**二、历史记录。** 代码领域历史是免费的：Git 记录了每一次改动，智能体随时能回看某个变更怎么做的、为什么有效。

而知识工作的答案散落在数百个应用里，没有一个保留历史——智能体没有记忆，几乎每次都从空白开始，不知道之前试过什么；你也一样，智能体说它成功了，你却无法核实。一旦一切经由中心化层运行，就能记录智能体的每一个动作：碰了什么、跳过了什么。这首先给智能体记忆（回看并复现成功做法），其次给你信任——随它做得越多越敢交更多任务。

**三、[[上下文|上下文]]。** 有两种：一是架构，事物如何流动关联，像资深工程师脑中的地图、初级工程师要三个月才能建立的认知；二是风格——不是客观正确，而是「好」在你公司长什么样，比如你们特有的 TypeScript 装饰器用法，这不在操作手册里，而在代码库中，智能体直接看代码就能学到。

知识工作同理：给客户写文档前，要查数据库里的使用数据、Salesforce 里的交易详情，答案不孤立在任何一个工具里。记录下足够多智能体动作后，还能蒸馏出组织如何运转的「技能」——哪些方法有效、什么导致了失败。记录不再只是历史，而是一幅公司运作图景，智能体可以查询它，不用再猜。

**四、[[验证|验证]]。** 编程智能体自己测试自己：单元测试抓小错，集成测试抓远处的错，类型系统、编译器、linter 层层把关，智能体自己闭合循环。

他举了自己的翻车案例：把智能体指向招聘群发邮件，它完全按指令执行，发了大量邮件——其中还带着不体面的内容，最终差点挂上 Twitter。关键在于：过去那一整套检查全都会通过——邮件有效、地址真实、确实送达了真人。

世界上没有任何测试能质疑真正重要的问题：这事根本就不该发吗？在代码里是测试告诉你错了，在这里是互联网告诉他错了。修复方法是在它成为现实之前拦截：一是发送前对照你以前的邮件草稿检查风格；二是给智能体[[沙箱|沙箱]]——模拟真实工具的环境，破坏性操作先在沙箱里做，你审查后才执行真事。

**五、[[governance|治理]]。** 代码领域这是多道闸门：智能体只能在自己的分支上为所欲为，合并到 main 前有人类审查，关键文件有 code owners，只发预览部署不碰生产。

他讲了那个著名的案例：Meta 超级智能实验室的对齐负责人把智能体接到邮箱上，它开始大量删邮件，叫停也不停，最后她跑到物理机器前才停住——200 封邮件已消失。她事先在提示词里写了要确认，但那只是提示词，很可能在上下文压缩中被压掉了。

「如果连专职做 AI 对齐的人都无法正确提示智能体，那大概我们谁都不行。」知识工作不是没有控制部件——Gmail 有权限范围、Salesforce 有权限等级——但散落各处，大家最后只能靠提示词，而提示词是脆弱的。

所以墙要建两层：第一层是确定性的访问控制（招聘智能体只能读邮件，客服智能体能建草稿但不能发送），边界存在于智能体之外，它无法争辩、不会遗忘；第二层是自然语言策略，约束已有权限内的行为，比如「未经许可永远别删超过 10 封邮件」。前者管能触达什么，后者管能用触达做什么——是强制约束，不是要求它守规矩。

**六、[[可逆性|可逆性]]。** 这是知识工作里最难复刻的。

代码几乎总能撤销：revert 提交、bisect 找到破坏生产的那个提交。而这正是你敢让智能体大干一场的原因。

但那 200 封邮件永远消失了；已发出的邮件撤不回，已完成的转账拿不回钱。知识工作的大多数操作没有撤销按钮——这改变了爆炸半径：代码你可以在事后信任智能体，让它跑、查结果、错了撤销；这里没有回头路，你只剩「事前信任」一个选项。

「不是它们失败得更频繁，而是在外面，失败是永远的。」他们的做法：能撤销的操作给撤销按钮；不能撤销的硬删除等，先过沙箱、审查后才进真实环境——在代码里你在错误发生后撤销，在这里你在发生前抓住，不同时机、同样结果。

最后是全场最核心的判断：两年来模型是瓶颈，所有人竞相造更好的模型；现在模型已经好到软件工程可以 100% 自主，其他一切成了瓶颈。同一个写代码的模型也能做招聘和销售，但它现在是在盲干——没有历史、没有上下文、没法验证、没有护栏、没有撤销。瓶颈转移到了没人构建的基础设施上，而这正是 Composio 在做的：他们已支撑超过十亿次工具调用，每月三亿次。

## 本集带走
- **编程智能体成功靠的不是模型，是地基**：仓库、Git 历史、测试、CI、评审、回滚——这套为智能体而生的基础设施，知识工作领域一项都没有。
- **六个原语当检查清单**：中心化（单一事实来源）、历史记录（记忆+可核查）、上下文（架构+公司风格）、验证（沙箱+风格比对，事前拦截）、治理（确定性权限+策略，别靠提示词）、可逆性（能撤销给按钮，不能撤销先过沙箱）。
- **提示词不是护栏**：写在提示词里的规则会在上下文压缩中丢掉；真正的墙必须建在智能体之外，它忘了墙存在也跨不过去。
- **知识工作智能体的风险本质不同**：不是失败率更高，而是失败不可逆——代码可以事后信任，这里只能事前把关。
- **瓶颈已经转移**：模型够好之后，缺的是没人建的知识工作基础设施——这也是机会所在。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">它之所以奏效，是因为围绕编程的所有基础设施和系统本来就是为智能体而生的。</span>  
> *It only worked because all the infrastructure and systems around coding were literally meant for agents.*  
> <span class="qm">—— Karan Vaidya · [01:20]</span> ^q1

> <span class="qz">但它同时也是一场灾难，那种最终会挂上 Twitter、顶着我的名字的灾难。</span>  
> *It was also a disaster, the kind that ends up on Twitter with my name on top of it.*  
> <span class="qm">—— Karan Vaidya · [10:40]</span> ^q2

> <span class="qz">如果连一个专职做 AI 对齐的人都无法正确地提示智能体，那大概我们谁都不行。</span>  
> *And if someone whose sole job is AI alignment can't prompt the agent correctly, then probably none of us can.*  
> <span class="qm">—— Karan Vaidya · [13:54]</span> ^q3

> <span class="qz">而提示词是脆弱的。</span>  
> *And prompting is fragile.*  
> <span class="qm">—— Karan Vaidya · [14:32]</span> ^q4

> <span class="qz">不是更好的指令，而是一堵智能体无法逾越的墙，即使它忘了这堵墙的存在。</span>  
> *Not like a better instruction, but wall that the agent can't cross, even if it forgot that wall existed.*  
> <span class="qm">—— Karan Vaidya · [14:49]</span> ^q5

> <span class="qz">合在一起，这才是对智能体的真正治理，不是要求智能体守规矩，而是强制约束它能做什么。</span>  
> *Together, it's real governance for the agent, not asking the agent to behave, but enforcing it what it can do.*  
> <span class="qm">—— Karan Vaidya · [16:09]</span> ^q6

> <span class="qz">而是因为在外面，失败是永远的。</span>  
> *It's that out there failure is forever.*  
> <span class="qm">—— Karan Vaidya · [17:46]</span> ^q7

> <span class="qz">现在瓶颈是还没有人构建的基础设施，而这正是我们在 Composio 所构建的。</span>  
> *Now it's infrastructure that nobody has yet built, and that's what we are building at Composio.*  
> <span class="qm">—— Karan Vaidya · [19:48]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-27-talks-boris-cherny-we-cut-80-of-claude-code-s|Claude Code 造物主 Boris:删掉 80% 系统提示词，让模型跑两周不停]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、验证 (verification)</span>
- [[2026-07-28-yc-boris-cherny-building-claude-code-e3mkr7|别再微管理 Claude:Claude Code 造物主的智能体实战心法]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、验证 (verification)</span>
- [[2026-08-09-talks-multiplayer-agentic-engineering-arjun-si|让非工程师也能下指令：Superconductor 的多人智能体协作法]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-14-pg-together-ai-product-team|Together AI 产品团队全公开：一套仓库让 PM 下指令就出生产级 PR]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、沙箱 (sandbox)</span>
- [[2025-08-17-lennys-why-chatgpt-will-be-the-next-big-growth|Brian Balfour：ChatGPT 即将打开新分发渠道，你怎么下注]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同概念:智能体 (agent)、验证 (verification)</span>

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
