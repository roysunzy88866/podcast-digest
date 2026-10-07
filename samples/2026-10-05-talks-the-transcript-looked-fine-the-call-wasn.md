---
title: 日志会说谎：语音智能体的失败，你听得见却看不见
podcast: 精选演讲
date: 2026-10-07
source_url: undefined
duration: "17:42"
type: episode
cover: "#64748b"
description: Arise 产品经理 Fuad Ali 讲解语音智能体为何是「最难调试的类目」，以及如何用 trace、会话视图和音频评估看见那些文本日志里隐形的失败。
host: "[[Fuad]]"
companies: ["[[Arise]]"]
concepts: ["[[语音智能体]]", "[[OpenInference]]", "[[OTEL]]", "[[trace]]", "[[评估]]", "[[延迟]]", "[[智能体]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-05-talks-the-transcript-looked-fine-the-call-wasn#post","headline":"日志会说谎：语音智能体的失败，你听得见却看不见","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-05-talks-the-transcript-looked-fine-the-call-wasn","mainEntityOfPage":"https://talk.solomind.cc/2026-10-05-talks-the-transcript-looked-fine-the-call-wasn","description":"Arise 产品经理 Fuad Ali 讲解语音智能体为何是「最难调试的类目」，以及如何用 trace、会话视图和音频评估看见那些文本日志里隐形的失败。","datePublished":"2026-10-07","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Fuad"},{"@type":"Organization","name":"Arise"},{"@type":"Thing","name":"语音智能体 (voice agent)"},{"@type":"Thing","name":"OpenInference"},{"@type":"Thing","name":"OTEL"},{"@type":"Thing","name":"trace"},{"@type":"Thing","name":"评估 (eval)"},{"@type":"Thing","name":"延迟 (latency)"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"日志会说谎：语音智能体的失败，你听得见却看不见","item":"https://talk.solomind.cc/2026-10-05-talks-the-transcript-looked-fine-the-call-wasn"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>日志会说谎：语音智能体的失败，你听得见却看不见</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 日志会说谎：语音智能体的失败，你听得见却看不见

<div class="pd-byl"><b>Fuad</b> · 2026-10-07</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-05-talks-the-transcript-looked-fine-the-call-wasn.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">而且日志会说谎。如果你只看转录文本——我马上给大家放一段音频——它并不能真正捕捉到引擎盖下实际发生的事情。</div><div class="a">— Fuad <button class="pd-ts" data-t="02:01" data-who="Fuad" data-en="And the log lies. If you're just looking at transcripts, I'll play a little audio file for you guys in a second. It doesn't really capture what's actually going on under the hood." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Fuad]]
>
> **公司** [[Arise]]
>
> **概念** [[语音智能体]] · [[OpenInference]] · [[OTEL]] · [[trace]] · [[评估]] · [[延迟]] · [[智能体]]

这一集是一场技术演讲，主角是 [[Fuad|Fuad]] Ali——[[Arise|Arise]] 的产品经理，负责实验方向的产品。

他聊的是[[语音智能体|语音智能体]](打电话给你、跟你说话办事的 AI):这个领域正爆发式增长，但有一个致命问题——**它是不可见的**。

文字日志看起来一切正常，实际通话却一塌糊涂。

他开场甩出的例子很直观：White Castle 有个叫 Linda 的点餐机器人，Bojangles、麦当劳也在做类似的东西。

但想象一下，你凌晨两点在麦当劳，机器人给你下了 600 个芝士汉堡的订单——「我会相当恼火」。

语音[[智能体|智能体]]一旦出错， stakes 比聊天机器人高得多：它直接对真实世界执行动作。

## 转录文本没问题，通话却砸了：一段「看不见的失败」

Fuad 放了一段 AI 生成的退款通话录音。

看文字日志：用户说「我要给订单 14 退款」，智能体回「好的，已为订单 40 启动退款」，用户纠正「不，是 14」,智能体说「您的退款已确认」。

**看起来智能体自我纠正了**——但听了音频才知道真相完全不是这样:

- 用户提出退款后，智能体响应前有 **2.4 秒的死寂**，极伤用户体验；
- 智能体**抢在来电者说完之前开口**(互相压话)；
- 「14」被听成了「40」;
- 用户纠正之后，那句「您的退款已确认」其实没有真正确认 14——**退款最终还是按订单 40 处理的**，一个巨大的错误；
- 平淡的机器人式语调也不好看。

他的结论：这些都是**音频特有的问题**，如果你只读 LLM 的输出，你完全不会知道发生了任何问题。

「而且日志会说谎」——转录文本根本捕捉不到引擎盖下实际发生的事。

## 解法：把音频、转录、trace 放进同一个视图

Fuad 给出的核心方法是：

你要看到**超越文字记录的对话**——音频、转录文本、trace([[trace|追踪]]链路，记录每一次调用的完整过程)三者放在同一个会话视图里，同一视图能看到用户来回的多个轮次，再叠上指标：

[[延迟|延迟]]、首个音频耗时、打断事件、情感分析。

具体要做到几件事：

1. **逐个 span 可见**(span 即追踪链路里的每一段操作)，并且能从 trace 里直接内联播放音频，不需要外部工具、不需要导出;
2. **看输入输出和指标**：首个 token 耗时、音频 token 成本、打断事件；
3. **看关联，不是列表**：谁在什么时候说话、智能体何时停顿、哪里被打断、当时实际调用了哪些工具——工具调用的失败要能对着会话音频一起看。

底层实现上，Arise 把音频的语义约定映射到了 [[OpenInference|OpenInference]] 上——这是 Arise 在 2023 年首发的一套完全开源、符合 [[OTEL|OTEL]] 规范的语义约定，把 GenAI 运行时发生的事映射成统一的规范。

关键价值是**提供商无关**：

不管你用 OpenAI 的 realtime 还是 Google 的 Gemini Live,都被规范化成同一套可查询的 schema(数据结构)，不需要针对每个厂商做定制解析，一个自动插桩器捕获全部数据。

Fuad 强调这套东西开源免费，「你们可以拿去直接用，发到 Grafana 后端」，这不是产品推销。他给出的理由很实际：

如果你曾在凌晨两点根据一通客户电话调试，你就知道能在数十亿条涌入的 trace 里过滤、排序、直达你需要看的那一条有多重要。

## 只针对文字的评估不够，要有音频专属评估

第二个重点是[[评估|评估]](eval)。文字层面的「LLM 当裁判」评估效果有限，语音需要专属指标:

- **语调与情感分析**：基于实际音频对用户情绪分类(积极/中性/消极)，转录文本做不到这一点——转录「看起来没问题」太容易了，但语调真的很重要；
- **延迟**：尤其「首个音频时间」的 SLA,对客服用例仍然非常关键，要能标记打破指标的情况；
- **打断、转录漂移、任务成功率**。

而且评估要**直接对底层音频跑**，用基于音频模型的评估。

随着规模扩大，还要从「LLM 当裁判」走向「智能体当裁判」——让评估方真正访问工具、第三方系统做 RBAC 权限检查，验证智能体实际访问的确实是它有权访问的系统，把评估信息实时补全进来。

上手可以简单到一句话：

「嘿 Claude,帮我创建一个音频评估，用 GPT audio 做情感分析，在这些音频片段上捕捉用户沮丧的语气」——剩下的由 CLI 查询 span、筛选音频片段、创建并部署评估，直接挂到真实系统的 trace 上。

评估分数要直接挂在 span 上，这样才能做复杂查询筛选，并且评估挂上监控器之后可以自动触发**调查智能体**，去深挖：

哪些工具调用呈现得不对？智能体在哪失败？是不是碰到了没编码过的产品面？需要暴露新工具吗？

## 终局：让语音拥有和编码智能体同样的「观察-评估-改进」循环

Fuad 最后点题：你为改进编码智能体所做的同一个循环——**观察、评估、改进**——现在必须为语音来做。他描绘了这样一幅图景：

用户音频流入、自动被追踪、实时评估自动打分，然后一个 SRE 智能体(不是你雇的工程师)翻看追踪、理解故障模式、提出修复假设、在 dev 环境搭好修复、用失败的 trace 重放验证延迟确实降了。

你早上醒来，看到一个 PR,里面写着：「我发现了延迟高的原因——原来我们没有截断工具结果，给智能体传了太多信息，上下文过载。

我引入了截断算法，上线并在 dev 里验证，针对失败的 trace 做了测试，这是成绩单和延迟下降数据。」你只需要点批准或拒绝。

这就是他说的「自愈软件」。

为此 Arise 刚发布了「智能体实验」(agent experiments),他形容为「带追踪的 Postman」。

他的收尾劝告：

这种失败，你不会接受它发生在 coding agent 层面，不会接受它发生在能执行股票交易的智能体身上——**哪怕只是帮你点芝士汉堡的麦当劳智能体，你也不应该接受**。

用不用 Arise 都行，但请开始追踪你的音频。

> 【背景】OpenInference 与 OTEL:OTEL(OpenTelemetry)是业界通用的可观测性开放标准；OpenInference 是把 GenAI/LLM 的调用过程映射到这套标准的开源语义约定。「插桩器」(instrumenter)指自动埋点、把运行数据上报的工具。

## 本集带走

- **别只看转录文本排障**：延迟尖峰、压话、听错数字、语调问题，这些音频特有的失败在文字日志里全部隐形——那段退款通话的文字记录「看起来正常」，实际钱退错了订单。
- **把音频、转录、trace 合到一个会话视图**：能从 trace 里直接内联播放音频、看每个 span、看工具调用时刻，才谈得上真正调试。
- **统一 schema 换供应商不用改代码**：用开源的 OpenInference 语义约定把不同模型厂商的语音数据规范化，避免给每家写定制解析。
- **评估要跑在音频上，不是文字上**：情感/语调分类、首个音频时间 SLA、打断、转录漂移，都得基于实际音频测；评估分数挂到 span 上才能触发自动化。
- **套用编码智能体的成熟循环**：观察→评估→改进，让调查智能体和 SRE 智能体自动定位失败、提修复、用失败 trace 重放验证——人只负责批准 PR。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">而且日志会说谎。如果你只看转录文本——我马上给大家放一段音频——它并不能真正捕捉到引擎盖下实际发生的事情。</span>  
> *And the log lies. If you're just looking at transcripts, I'll play a little audio file for you guys in a second. It doesn't really capture what's actually going on under the hood.*  
> <span class="qm">—— Fuad · [02:01]</span> ^q1

> <span class="qz">不再只是用一个 LLM 当裁判去分析转录文本甚至音频，而是实际访问工具、访问第三方系统，并把评估信息实时补全进来。</span>  
> *You know, just an LLM as a judge analyzing a transcript or even analyzing audio, but actually accessing tools, accessing third-party systems, and hydrating some of that evaluation information inside of it.*  
> <span class="qm">—— Fuad · [11:36]</span> ^q2

> <span class="qz">它真的简单到就是：「嘿 Claude,帮我创建一个音频评估，用 GPT audio 做情感分析，在这些音频片段上捕捉用户沮丧的语气。」</span>  
> *It is literally as simple as, hey Claude, create an audio eval for me for sentiment analysis using GPT audio, and catch frustrated user tone on those audio spans.*  
> <span class="qm">—— Fuad · [11:54]</span> ^q3

> <span class="qz">你不会接受这种事发生在编码智能体层面，不会接受它发生在能执行股票交易的智能体身上——哪怕对一个帮你点芝士汉堡的麦当劳智能体来说赌注看似低一些，你也不应该接受它。</span>  
> *You wouldn't be OK with this happening at the coding agent level. You wouldn't be OK with it happening for an agent that's able to execute stocks on Robinhood. You shouldn't be OK with it, though the stakes might seem a little lower for a McDonald's agent that's ordering you a cheeseburger either.*  
> <span class="qm">—— Fuad · [16:47]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-28-talks-inside-clay-s-eval-stack-300m-agent-runs|Clay 的智能体矩阵：如何为数十亿次运行建评估]]<span class="pd-rz">同概念:智能体 (agent)、评估 (eval)、追踪 (trace)</span>
- [[2025-09-25-lennys-why-ai-evals-are-the-hottest-new-skill|做 evals 不是写单元测试，是从看数据开始的错误分析]]<span class="pd-rz">同概念:智能体 (agent)、追踪 (trace)</span>
- [[2025-12-02-talks-powering-the-ai-law-firm-with-harvey|Harvey 联合创始人 Gabe：产品就是模型，AI 律所的五年赌注]]<span class="pd-rz">同概念:智能体 (agent)、评估 (eval)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:智能体 (agent)</span>

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
