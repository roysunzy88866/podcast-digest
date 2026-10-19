---
title: 一个分数不够：AI 模型排行榜为什么不可信，以及怎么自己做一个
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "52:11"
type: episode
cover: "#64748b"
description: Wolfram Ravenwolf 讲了怎么从零搭建可复现的 AI 智能体评测，以及排行榜上的一个数字到底藏了多少坑。
guests: ["[[Wolfram Ravenwolf]]"]
companies: ["[[WolfBench]]", "[[CoreWeave]]", "[[W and B]]"]
concepts: ["[[智能体]]", "[[基准测试]]", "[[终端基准]]", "[[沙箱]]", "[[推理]]", "[[轨迹]]", "[[过度思考]]", "[[一致性]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-from-zero-to-leaderboard-agent-evaluatio#post","headline":"一个分数不够：AI 模型排行榜为什么不可信，以及怎么自己做一个","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-from-zero-to-leaderboard-agent-evaluatio","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-from-zero-to-leaderboard-agent-evaluatio","description":"Wolfram Ravenwolf 讲了怎么从零搭建可复现的 AI 智能体评测，以及排行榜上的一个数字到底藏了多少坑。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Wolfram Ravenwolf"},{"@type":"Organization","name":"WolfBench"},{"@type":"Organization","name":"CoreWeave"},{"@type":"Organization","name":"W and B"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"基准测试 (benchmark)"},{"@type":"Thing","name":"终端基准 (TerminalBench)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"轨迹 (traces)"},{"@type":"Thing","name":"过度思考 (overthinking)"},{"@type":"Thing","name":"一致性 (consistency)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"一个分数不够：AI 模型排行榜为什么不可信，以及怎么自己做一个","item":"https://talk.solomind.cc/2026-10-11-talks-from-zero-to-leaderboard-agent-evaluatio"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>一个分数不够：AI 模型排行榜为什么不可信，以及怎么自己做一个</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 一个分数不够：AI 模型排行榜为什么不可信，以及怎么自己做一个

<div class="pd-byl"><b>Wolfram Ravenwolf</b> · CoreWeave AI 布道师 · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-from-zero-to-leaderboard-agent-evaluatio.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但首先，我的指导原则是：思维方式大于技能组合，技能组合大于工具组合。</div><div class="a">— Wolfram Ravenwolf <button class="pd-ts" data-t="03:34" data-who="Wolfram Ravenwolf" data-en="But first, my guiding principles are mindset is greater than skill set, greater than tool set." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Wolfram Ravenwolf]]
>
> **公司** [[WolfBench]] · [[CoreWeave]] · [[W and B]]
>
> **概念** [[智能体]] · [[基准测试]] · [[终端基准]] · [[沙箱]] · [[推理]] · [[轨迹]] · [[过度思考]] · [[一致性]]

[[Wolfram Ravenwolf|Wolfram Ravenwolf]] 的自我介绍很直接：早上评测模型，晚上搭[[智能体|智能体]]，全天宣传 AI。他在 [[CoreWeave|CoreWeave]] 做 AI 布道师，也是播客 ThirstAI 的联合主播。

这场工作坊的核心观点是：市面上的模型排行榜大多不可信，但他会告诉你为什么，以及怎么自己搭一个可信的。

## 为什么一个平均分说明不了任何事

他的出发点很朴素：想知道哪个模型配哪个智能体最好用。但智能体一直在换——一月是 OpenClaw，二月是 Hermes agent，现在又常用 Codex。

所以需要一个稳定的评测方法。

问题在于，大多数排行榜只给一个平均分。他反复强调一句话：「**性能是一个分布，不是一个点**」<button class="pd-ts" data-t="04:24" data-who="嘉宾" data-en="And the premise is one score is not enough because performance is a distribution, not a point. The thing I just liked about the leaderboards and a lot of evaluations I have seen is you see some nice bars, and you see some numbers, and it's an average, an aggregate, and it doesn't really tell you very much." aria-label="回原文"></button>。

平均分背后藏着东西：是模型真的好，还是碰上了一次走运的运行？有什么隐藏的代价？

这就是为什么很多人看着排行榜说「我不信，我的体验不是这样」。

他做的 [[WolfBench|WolfBench]] 是一个开源框架（Apache 2 协议），有图表、仪表盘和排行榜，但他更想讲的是方法论本身——你可以拿去配自己的工具。

## 你评测的不是模型，是一整套配置

这是全场最重要的一个认知转变。你以为在给模型打分，实际上你测的是一个特定组合：

数据集、模型、[[推理|推理]]引擎、智能体框架、沙盒环境，加上你自己选的所有设置。**改掉其中任何一项，就等于换了一个新测试** <button class="pd-ts" data-t="07:32" data-who="嘉宾" data-en="And the most important thing I think that people need to realize is you're not ranking a model. If you are benchmarking a model, it's this model. But you are actually benchmarking a specific configuration." aria-label="回原文"></button>。

连你控制不了的部分都会掺一脚：推理服务商悄悄更新后端，结果就变了；沙盒供应商改了配置，你可能根本察觉不到。

所以两个团队报告同一个[[基准测试|基准测试]]、数字却差很多，一点都不奇怪——设置不同，根本没法比。

他的建议是：条件必须统一，每次跑的设置完全一样；而且一定要跑多次。「单次运行就是基准彩票」<button class="pd-ts" data-t="06:51" data-who="嘉宾" data-en="A single run is benchmark lottery. It is a random result, and it is just a ballpark number, so you have to do multiple runs. I do five with WolfBitch, but you could do more" aria-label="回原文"></button>，他每次跑 5 遍。

## 变量比你想的多得多

光设置就能列一长串。

上下文窗口：模型标称 100 万，供应商可能只给 256K，因为到一定长度后质量会明显下降，而且全程用满窗口又贵又慢。系统提示词：

说「你是一个乐于助人的助手」和说「你是一个自主行动的智能体」，结果完全不同——他见过模型想问用户问题，可测试环境里根本没有用户。

工具配置也很微妙。TerminalBench 是公开基准，他见过模型直接联网搜到了现成答案。这算作弊吗？

他说未必——一个聪明的智能体找到公开解决方案为什么要自己从头想？但这取决于你想测什么 <button class="pd-ts" data-t="20:56" data-who="嘉宾" data-en="If you give the agent web access, I've seen where a model went out and looked up the solution for the benchmark, because Terminal Bench is a public benchmark. And you have to look in the traces to see what happened here." aria-label="回原文"></button>。

还有任务超时。他一开始给每个任务 2 小时，结果发现模型做不出来时会原地打转，反复失败，烧掉大量时间和钱。

后来改成 1 小时。并发数、重试策略、温度、随机种子……每一项都是要拍板的选择。

## 一个分数拆成四层看

WolfBench 排行榜上每根柱子其实是四个数字叠起来的。最底下深色的部分，他叫[[一致性|一致性]]：5 次运行里每次都做出来的任务占多少。

这个数字高，说明模型可靠。

黄色是平均分，就是别家排行榜通常报的那个数。

上下箭头是 5 次运行里的最好和最差成绩，两者离得远就说明方差大、随机性高——分数再高也不敢把任务交给它。

最上面的星号是天花板：至少做出来过一次的任务比例。

两个模型平均分几乎一样时，他会选一致性更高的那个——差 6 个百分点就是明显的差距了 <button class="pd-ts" data-t="40:53" data-who="嘉宾" data-en="Like here, it's 73% to 74%. It's almost the same. If you just look at the average score, it's almost exactly the same thing." aria-label="回原文"></button>。

## 便宜模型可能更贵：一个真实的反例

排行榜上第二名是 Gemini 3.5 Flash，分数逼近第一名 GPT 5.5。看起来是个便宜又快的模型占了便宜？

切到三维视图就露馅了。GPT 5.5 用了 1.36 亿个 token，Gemini 3.5 Flash 用了 16.5 亿个。算成钱：620 美元对 497 美元 <button class="pd-ts" data-t="42:42" data-who="嘉宾" data-en="So it costs, in this case, $620. Compared to 497. So 500 to over 600." aria-label="回原文"></button>。**所谓的便宜模型反而更贵**，而且那么多 token 也拖慢速度。

所以他提醒：别想当然觉得小模型省钱，得实际比一比。

最贵的翻车是 Fable。测它花了 11000 美元，成绩却不好——因为模型拒绝执行了 13 项任务。

而它拒绝的部分原因是太聪明了：明明基准测试规定了做法，它偏说我知道更好的办法，最后一验证，失败 <button class="pd-ts" data-t="47:19" data-who="嘉宾" data-en="I also saw the same with Fable, by the way, where the model was very smart, and it seemed to know it was so smart. So what it did is it decided to go this direction." aria-label="回原文"></button>。

## 思考太多反而考砸

还有一个反直觉的发现。他把 Opus 4.6 的思考档位调到最高，分数反而下降了；在 Claude Code 里也复现了同样现象。

而 GPT 系列提高思考档位，分数如预期上升。

翻[[轨迹|轨迹]]记录找到了原因：**模型在[[过度思考|过度思考]]**。

给它 1 小时，它思考两分钟决定执行一个命令，发现命令不存在，再思考三分钟怎么装。

而一个不开思考的智能体直接试错：跑命令、报错、修、再跑——反而完成了更多任务 <button class="pd-ts" data-t="46:04" data-who="嘉宾" data-en="And the difference, if you look at the traces, is that you see the model, it thinks too much. It's overthinking. And that means I give it one hour." aria-label="回原文"></button>。想一小时不如动手试一小时。

## 柱子是主张，轨迹才是证据

他对透明度的执着体现在一个功能上：

排行榜上任何一根柱子都可以点击，直接跳转到 Weave 页面，看到组成这个分数的全部 5 次运行的完整轨迹——89 项任务，每一步模型发了什么命令、怎么分析的，全部可查 <button class="pd-ts" data-t="47:40" data-who="嘉宾" data-en="And this is also an important feature I have to show you. A bar is a claim, a trace is evidence. I'm talking about traces all the time." aria-label="回原文"></button>。

这不是装饰。他自己每次跑完都要检查所有错误：

如果响应里出现重复字符，或者提示词模板的 token 泄漏进了回答，那说明是推理引擎的问题，不是模型的锅。

他测过刚发布的新模型，第一轮成绩平平，一周后原样重跑变好了——因为推理引擎的适配优化跟上了。

所以下次看到一个排行榜，先问一句：==能看轨迹吗==？

## 本集带走

- 你评测的从来不是模型本身，而是模型+智能体+沙盒+全部设置的一整套配置，动一个变量就是新测试。
- 性能是分布不是点：看一致性（每次都做对的比例）、最好最差成绩的方差和天花板，别只看平均分。
- 便宜模型不一定省钱：Gemini 3.5 Flash 分数接近 GPT 5.5，但烧了多得多的 token，总花费反而更高。
- 思考档位拉满可能考砸：模型过度思考、原地打转，不如快速试错的智能体完成的任务多。
- 单次运行是基准彩票，至少跑 5 遍；发布结果时把全部轨迹公开，让别人能验证你的数字。

<div class="pd-sec pd-sec-q">全部金句 <span>9 条</span></div>

> <span class="qz">但首先，我的指导原则是：思维方式大于技能组合，技能组合大于工具组合。</span>  
> *But first, my guiding principles are mindset is greater than skill set, greater than tool set.*  
> <span class="qm">—— Wolfram Ravenwolf · [03:34]</span> ^q1

> <span class="qz">前提是：单一分数是不够的，因为性能是一个分布，而不是一个点。</span>  
> *And the premise is one score is not enough because performance is a distribution, not a point.*  
> <span class="qm">—— Wolfram Ravenwolf · [04:20]</span> ^q2

> <span class="qz">而且有可能出现这种情况：一个更便宜、更快的模型反而耗时更长、花费更多，比某个更大的模型还多，因为它就是用了太多 token。</span>  
> *And it can happen that a cheaper and faster model takes longer and costs more than one of the bigger models because it just uses so many tokens.*  
> <span class="qm">—— Wolfram Ravenwolf · [06:22]</span> ^q3

> <span class="qz">单次运行就是基准彩票。</span>  
> *A single run is benchmark lottery.*  
> <span class="qm">—— Wolfram Ravenwolf · [06:49]</span> ^q4

> <span class="qz">所以基本上是把思考做对，然后工具就变得可以互换。</span>  
> *So basically get the thinking right, and then the tools become interchangeable.*  
> <span class="qm">—— Wolfram Ravenwolf · [07:22]</span> ^q5

> <span class="qz">即使它有 bug，你至少是在用同一个 bug 测试所有模型。</span>  
> *Even if it has a bug, you are at least testing all the models with the same bug.*  
> <span class="qm">—— Wolfram Ravenwolf · [13:52]</span> ^q6

> <span class="qz">如果你给智能体联网权限，我见过一个模型跑出去查了那个基准测试的答案，因为 Terminal Bench 是一个公开的基准测试。</span>  
> *If you give the agent web access, I've seen where a model went out and looked up the solution for the benchmark, because Terminal Bench is a public benchmark.*  
> <span class="qm">—— Wolfram Ravenwolf · [20:47]</span> ^q7

> <span class="qz">我当时测试 Opus 4.6 时，我把思考调到最大，分数反而下降了。</span>  
> *When I tested Opus 4.6 at the time, I raised the thinking to max, and the score decreased.*  
> <span class="qm">—— Wolfram Ravenwolf · [45:31]</span> ^q8

> <span class="qz">一根柱子是一个主张，一条轨迹是证据。</span>  
> *A bar is a claim, a trace is evidence.*  
> <span class="qm">—— Wolfram Ravenwolf · [47:40]</span> ^q9
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
