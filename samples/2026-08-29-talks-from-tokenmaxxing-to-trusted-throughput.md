---
title: "token 不是越省越好:用「可信吞吐量」优化 AI 开发的真 ROI"
podcast: 精选演讲
date: 2026-09-27
source_url: undefined
duration: "22:55"
type: episode
cover: "#64748b"
description: Ironclad 工程 VP Mingxin 分享团队度过 AI 采纳期后如何度量与优化 token 支出：提出「可信吞吐量」框架，并拆解代码审查与 CI 的新瓶颈。
guests: ["[[Mingsheng Hong]]"]
companies: ["[[Ironclad]]"]
concepts: ["[[可信吞吐量]]", "[[token]]", "[[代码审查]]", "[[CI-CD]]", "[[不稳定的测试]]", "[[智能体循环]]", "[[提示词缓存]]", "[[上下文修剪]]", "[[代码行数]]", "[[PR]]"]
category: AI 编程
tags:
  - AI 编程
  - 组织与领导力
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-29-talks-from-tokenmaxxing-to-trusted-throughput#post","headline":"token 不是越省越好:用「可信吞吐量」优化 AI 开发的真 ROI","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-29-talks-from-tokenmaxxing-to-trusted-throughput","mainEntityOfPage":"https://talk.solomind.cc/2026-08-29-talks-from-tokenmaxxing-to-trusted-throughput","description":"Ironclad 工程 VP Mingxin 分享团队度过 AI 采纳期后如何度量与优化 token 支出：提出「可信吞吐量」框架，并拆解代码审查与 CI 的新瓶颈。","datePublished":"2026-09-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Mingsheng Hong"},{"@type":"Organization","name":"Ironclad"},{"@type":"Thing","name":"可信吞吐量 (trusted throughput)"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"不稳定的测试 (flaky test)"},{"@type":"Thing","name":"智能体循环 (agentic loop)"},{"@type":"Thing","name":"提示词缓存 (prompt caching)"},{"@type":"Thing","name":"上下文修剪 (context pruning)"},{"@type":"Thing","name":"代码行数 (lines of code)"},{"@type":"Thing","name":"PR"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"token 不是越省越好:用「可信吞吐量」优化 AI 开发的真 ROI","item":"https://talk.solomind.cc/2026-08-29-talks-from-tokenmaxxing-to-trusted-throughput"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>token 不是越省越好:用「可信吞吐量」优化 AI 开发的真 ROI</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# token 不是越省越好:用「可信吞吐量」优化 AI 开发的真 ROI

<div class="pd-byl"><b>Mingsheng Hong</b> · Ironclad 工程 VP · 2026-09-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-29-talks-from-tokenmaxxing-to-trusted-throughput.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们更多地把使用量面板看作一个烟雾报警器。</div><div class="a">— Mingsheng Hong <button class="pd-ts" data-t="01:54" data-who="Mingsheng Hong" data-en="We think of the usage dashboard more as a smoke detector." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Mingsheng Hong]]
>
> **公司** [[Ironclad]]
>
> **概念** [[可信吞吐量]] · [[token]] · [[代码审查]] · [[CI-CD]] · [[不稳定的测试]] · [[智能体循环]] · [[提示词缓存]] · [[上下文修剪]] · [[代码行数]] · [[PR]]

一提到控制 AI token 开销,大多数人的直觉是砍预算。但 [[Ironclad|Ironclad]] 负责人工智能的工程副总裁 Mingxin 在这场演讲里给出的答案正相反:目标不是省钱,而是提高花出去的每一分钱换来的回报——公司刚跨过全员采纳 AI 那道坎,她在过去几个季度里摸索出了一套度量与优化的做法。

一个反直觉的提醒:用量面板别做成排行榜。媒体上流传着各种耸人听闻的故事——亚马逊有员工自发做了个 [[token|token 用量]]面板,结果工程师们开始互相攀比谁用得多,争着登上排行榜榜首;还有公司一个月内在 Claude 上花了 5 亿美元。

Mingxin 从中吸取的教训是,追踪每个团队、每个人的 token 用量确实重要,但它的定位应该是「烟雾报警器」——如果某个团队或个人几乎不怎么用 AI,那才是值得调查的异常信号;反过来,绝不能制造出「多用 token = 更好」的间接激励。她类比了[[代码行数|代码行数]](LOC)这个传统生产力指标:它值得追踪,但如果拿它当优化目标,就没法激励高质量的工程工作——毕竟删代码有时比写代码更有价值。token 用量同理。

先说采纳还没到位的团队。在谈省钱之前,如果团队还处在推动大家用 AI 的阶段,功夫应该花在别处:自上而下的推动之后,要坐下来跟抵触或挣扎的个人聊,理解他们的出发点。比如有工程师说,自己过去以手工打磨代码为荣为乐,现在乐趣被「审查 AI 生成的代码」取代了——这不是矫情,而是要帮他们找到 AI 时代里仍然高影响力、能继续成长的技术工作。

核心概念是「[[可信吞吐量|可信吞吐量]]」(trusted throughput):不是花了多少 token,而是产出了多少**被信任的高质量成果**——代码经过内部审查验证、最终在客户部署中得到检验的产出。怎么度量?

Mingxin 团队的指标演进了一路:代码行数不行;于是数开放的 [[PR|PR]] 数量——AI 让 PR 暴涨,拐点明显;但 PR 不落地没意义,改成数已合并的 PR;可合并的 PR 也不等价——10 行代码修掉一个并发 bug,和 1000 行样板代码,价值天差地别;于是他们又给每个合并的 PR 打复杂度标签,做法很务实:把 PR 喂给一两个 LLM,用精心设计的提示词让它按「T 恤尺码」(S/M/L 这类粗粒度档位)打分,用 AI 生成更复杂的 PR 就算更高价值。她坦承这套指标仍在迭代,乐见同行一起探讨如何更好地近似 AI 创造的价值。定性的一面,可信吞吐量来自三个桶:客观指标(测试覆盖率、安全检查、金丝雀发布)、主观人类判断([[代码审查|代码审查]]、设计审查看质量和架构契合度),以及最终客户的真实感知——有没有导致回滚的生产事故、有没有关于易用性和 bug 的投诉。

AI 带来的新瓶颈在哪?代码生成变得充裕后,压力整体下移到了两处:代码审查,和 CI/CD(持续集成/持续部署,即代码合并前自动跑测试和构建的环节)。

先说一个要警惕的反模式:CI 过载时,工程师的变通办法是干脆不拆 PR、提交超大 PR——因为跑一轮回归测试要一小时,拆成 10 个 PR 就要十小时。但这风险很大:大 PR 让人工审查开销更高、注意力摊薄、审查质量下降。代码审查的正确原则,是把 AI 工具引入为第一道防线:代码风格问题、测试覆盖缺失这类简单事项全让 AI 先把一遍,作者通过了这些检查,审查才流转到人类——人只把深度判断花在主观性的问题上(架构是否合理、安全设计是否过关),最终责任仍由工程团队承担。

CI 侧的压力更隐蔽:代码生成变容易、PR 拆得又小又多之后,CI 负载大增。不解决的话,工程师就得浪费时间「照看」PR 等合并——碰到[[不稳定的测试|不稳定的测试]](flaky test,同一代码时而过时而不飘忽不定的测试)还得手动点重跑,士气很低;用智能体代劳循环重试,又反过来烧 token。Ironclad 的做法是把这当成平台工程/开发者体验的正经投资:消除 flaky 测试、改进 CI 基础设施,并且度量对的指标——比如 PR 从准备好提交到实际提交之间隔了多久(典型 CI 跑一小时、提交却要两三小时就是危险信号),以及一个 PR 要重试几次才能过测试。

把上面的分析收拢成一个务实框架,优化 token ROI 有三块:第一,护栏——设定预算和配额、跟踪用量、定义异常以便及时告警,并配合定期人工审查;第二,持续寻找并创新用 AI 的最佳实践,比如让工程师写[[智能体循环|智能体循环]]:生成初始 PR 后自动跑测试、失败就自动修代码或测试再重试——但**一定要给循环步数设上限**,失控时不会烧掉太多 token;又如[[提示词缓存|提示词缓存]](厂商对相同前缀的提示词做优化处理),所以要引导用户把固定不变的系统提示词放顶部、变化内容放底部;再如[[上下文修剪|上下文修剪]]——长会话里要养成对上下文做摘要的「肌肉记忆」,好在 Claude Code 这类工具已能自动压缩上下文,既省 token 又提升输出质量;第三,学习循环——领导层和个人一起定护栏、看指标、再改进,把经验沉淀进组织知识库。至于自建还是购买,原则简单:非差异化的东西(IDE、CI 基础设施)买;与自身情境强相关的自建——他们维护一套内部 playbook,即针对不同任务(小 bug 修复、新 UI 功能、重构)打磨好的提示词集,团队内共享复用。边界案例仍在摸索,比如他们正在做一个叫 Builder Agent 的东西——基于云的代码生成服务,封装 Claude Code、Codex 等工具,同时外部厂商也在考察中。

## 本集带走
- **用量面板是烟雾报警器,不是排行榜**:盯「谁几乎不用 AI」这个异常信号,绝不奖励 token 用量最大化。
- **度量价值要演进指标**:从开放的 PR 数,到已合并 PR 数,再到给每个合并 PR 按 LLM 打的复杂度加权——近似衡量 AI 产出的真实价值。
- **可信吞吐量 = 三桶之和**:客观指标(测试覆盖/安全检查/金丝雀)+ 主观审查(质量/架构)+ 客户真实反馈(事故回滚/投诉工单)。
- **AI 审查当前置防线**:风格、测试覆盖这类简单项让 AI 先过,人只做架构、安全等深度判断,最终责任留在人身上。
- **别用超大 PR 绕过 CI 过载**:它会摊薄审查注意力、拉低质量;正解是投资平台工程,消除 flaky 测试,并度量「提交等待时长」和「重试次数」。
- **给智能体循环设步数上限**:自动修测试重试很省人力,但失控时不封顶就是烧钱。
- **提示词固定部分放顶部、长会话勤做摘要**:配合提示词缓存与上下文自动压缩,省 token 的同时也提升输出质量。
- **买非差异化的,自建差异化的**:内部把好提示词沉淀成 playbook 共享复用,这是必须自建的部分。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">我们更多地把使用量面板看作一个烟雾报警器。</span>  
> *We think of the usage dashboard more as a smoke detector.*  
> <span class="qm">—— Mingsheng Hong · [01:54]</span> ^q1

> <span class="qz">有生产力的、高质量的工程工作,可以说删除代码甚至更好。</span>  
> *Productive and high-quality edge work, one can argue that removing code is even better.*  
> <span class="qm">—— Mingsheng Hong · [10:06]</span> ^q2

> <span class="qz">有可能存在一个只有 10 行代码的 PR,却花了很长时间,找出并修复了一个并发 bug。</span>  
> *There can be a PR with only 10 lines of code that takes forever that finds and fix a concurrency bug.*  
> <span class="qm">—— Mingsheng Hong · [11:29]</span> ^q3

> <span class="qz">我们相信这是 AI 的黄金时代,最大化 token 投资回报率是每个团队成功的关键。</span>  
> *We believe that this is the golden era of AI, where maximizing token ROI is the key for every team's success.*  
> <span class="qm">—— Mingsheng Hong · [22:25]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同概念:代码审查 (code review)、CI/CD、token 用量 (token)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:代码审查 (code review)、Claude Code</span>
- [[2026-08-11-talks-circleback-ceo-ali-haghani-why-your-comp|Circleback 创始人 Ali：把公司记忆和运营流程全部交给智能体]]<span class="pd-rz">同概念:代码审查 (code review)、Claude Code</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:CI/CD、PR、token 用量 (token)</span>
- [[2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach|给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道]]<span class="pd-rz">同概念:CI/CD、token 用量 (token)</span>
- [[2026-09-10-talks-mousepower-agents-that-can-t-be-measured|鼠标力：为智能体时代找回「马力」这把尺子]]<span class="pd-rz">同概念:token 用量 (token)、代码审查 (code review)</span>

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
