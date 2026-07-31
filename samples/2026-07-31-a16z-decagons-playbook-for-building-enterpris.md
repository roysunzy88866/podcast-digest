---
title: "Decagon 拆解:为何九成工作流跑在开源模型上"
podcast: The a16z Show
date: 2026-07-31
source_url: undefined
duration: "80:23"
type: episode
cover: "#64748b"
description: "Decagon 的创始人解释了他们为何把90%工作流转向开源小模型,以及 AI 应用层的护城河。"
host: "[[Sarah Wang]]"
cohosts: ["[[Ashwin Srinivas]]", "[[Kimberley Tan]]", "[[Jesse Zhang]]"]
companies: ["[[Decagon]]", "[[Sierra]]"]
concepts: ["[[Duet Autopilot]]", "[[智能体]]", "[[开源模型]]", "[[前沿模型]]", "[[微调]]", "[[应用层]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><a href="/must-read">最热</a></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>Decagon 拆解:为何九成工作流跑在开源模型上</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M5.5 3.5h9v14L10 14l-4.5 3.5z"/></svg></button></div></div></header></div>

# Decagon 拆解:为何九成工作流跑在开源模型上

<div class="pd-byl"><b>Jesse Zhang</b> · Decagon 创始人</div>

<div class="pd-mt">2026-07-31 · The a16z Show · 80:23</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-31-a16z-decagons-playbook-for-building-enterpris.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们构建的东西不是一个擅长客户支持的智能体,而是一个擅长遵循业务流程的智能体。</div><div class="a">Ashwin Srinivas · 00:42</div></div>

> [!info] 关联
> **人物** [[Sarah Wang]] · [[Ashwin Srinivas]] · [[Kimberley Tan]] · [[Jesse Zhang]]
>
> **公司** [[Decagon]] · [[Sierra]]
>
> **概念** [[Duet Autopilot]] · [[智能体]] · [[开源模型]] · [[前沿模型]] · [[微调]] · [[应用层]]

<div class="pd-tldr"><b>一句话</b>Decagon 的创始人解释了他们为何把90%工作流转向开源小模型,以及 AI 应用层的护城河。</div>

一家做企业 AI [[智能体|智能体]]的公司,居然把 90% 的工作流从 GPT 这样的前沿大模型,换成了开源小模型——不是为了省钱,而是为了更快、更聪明。这是 [[Decagon|Decagon]] 的联合创始人 [[Jesse Zhang|Jesse Zhang]] 在这集访谈里抛出的反直觉事实。 [04:16]

这一集 YC 母公司 a16z 的播客里,[[Sarah Wang|Sarah Wang]] 和 [[Kimberley Tan|Kimberley Tan]] 与 Decagon 的两位联创 Jesse Zhang 和 [[Ashwin Srinivas|Ashwin Srinivas]] 坐在了一起。他们主要聊了三件事:为什么把大部分 AI 堆栈转向[[开源模型|开源模型]],以及怎么持续[[微调|微调]]它们;为什么在 AI 大实验室越来越强的今天,做具体业务的[[应用层|应用层]]公司不仅有活路,还能成长为「特定垂直领域的实验室」;以及他们怎么卖进全球最大的那几家企业,还提出了一个很安抚人心的判断:AI 会消灭琐碎的岗位,但不会消灭人的职业生涯。

要说清楚他们为什么拥抱开源,得先从一个最常见的技术误区说起。很多人以为,选 AI 模型就是一道「要最聪明但贵的大模型,还是稍微笨一点但便宜的小模型」的选择题 [05:04]。Ashwin 明确指出,这是一个虚假的权衡 [05:21]。在具体的业务场景里(比如判断一个进线客户是在聊退换货、还是在查物流),任务是非常细分的,你根本不需要调动一个懂写代码、懂数学的大模型的所有智力。如果你把一个开源的小模型,拿这些细分任务去微调(fine-tune,即在已有模型基础上用特定数据继续训练),它在该任务上的表现,反而能击败那些最先进的大模型 [05:34]。于是你同时拿到了三个好处:干得更好、成本更低、延迟更低。

既然小模型这么好,大模型还有什么用?这正是他们工作流里「两套模型」的精妙之处。Jesse 解释,在主干的对话流程中,他们用微调过的、聪明且快速的小模型;但最近他们上线了一个叫 [[Duet Autopilot|Duet Autopilot]] 的系统——这其实是一个专门用来「管理 AI」的 AI [06:15]。它会去审查上百万段的实际对话记录,自己寻找哪些话题处理得不好,然后自己写出原模型的变体去对比测试效果。这种需要广泛探索、极度复杂的元任务,才是那些最聪明、最贵的[[前沿模型|前沿模型]]真正的用武之地 [06:46]。

知道了怎么用模型,接下来的问题是:企业真的会自己养一个团队来干这些事吗?答案是会,但会非常慢 [07:13]。Jesse 解释了门槛在哪:微调模型最大的难点不是操作本身,而是你必须自己建立一套极其贴合业务的评估体系,去端到端地衡量最终的客户结果 [11:11]。因为这套评估标准和业务深度绑定,企业最终都必须建立自己的内部团队和工具。所以他们成立了 Decagon Labs,专门做持续训练 [09:13]。只要前沿模型的能力在变,就会不断催生新的可自动化场景,这就变成了一座不停运转的「模型工厂」 [10:09]。

说完了模型和工具,工具变了,做应用的公司怎么办?这正是下一个话题:实验室(大模型公司)会不会把应用层公司全干掉?Jesse 觉得这是个误解。模型本身确实越来越强,企业根本没法直接拿一个完美的大模型,给它一堆权限就指望它自己把活干了。要让模型在企业里落地,你需要给它加护栏(明确界限,防止灾难性错误),需要让数百个业务专家协作管理它的行为逻辑,需要测试它有没有越过合规红线 [35:33]。这些护栏、测试平台和业务逻辑的录入软件,才是应用层公司真正的护城河 [18:30]。

既然护城河这么深,大客户怎么拿下来?Ashwin 提到,他们能在一年内快速签下全球最大的几家银行、航空公司和电信公司,靠的正是「产品化」而非传统的堆人力 [45:11]。当时业界流行像 Palantir 那样派驻大量前期部署工程师去驻场,Ashwin 正是从 Palantir 出来的。但他直言不讳:派工程师去驻场随机接需求是个陷阱,长期看你会沦为一家「美化版的咨询公司」 [26:20]。所以他们要求工程师必须把客户的需求提炼进核心产品,让接下来的 10 个客户免费享受到成果 [24:07]。此外,卖进大企业最难的是内部冗长的审查流程,他们发现,光给产品是不够的,必须帮客户画出一张极细的路线图:告诉对方在哪个阶段该跑什么测试、怎么初次上线、出问题怎么兜底 [42:54]。这套打法让他们从客户那里拿到了极高的迭代速度,甚至还从竞品 [[Sierra|Sierra]] 手里把客户抢了过来 [38:17]。

业务跑通了,那面对「AGI 要来了大家都没饭吃」的焦虑,在前线摸爬滚打的他们怎么看?主持人分享了一个小故事:她想拿「长远职业发展」劝一位同事留下,对方却回答「有了 AGI 我们就不再需要职业了」,这深深刺痛了她 [28:23]。Jesse 非常确定地说:AGI 之后绝对还有职业 [29:01]。因为本质上,人类的大多数工作本就是建立在各种抽象层之上的社会分工。回到客户支持这个具体场景,人们最怕的是 AI 取代人工。但 Ashwin 指出这是现实版的杰文斯悖论(某种资源利用效率提高,反而会导致对该资源的需求增加) [77:21]。他们发现,当支持成本下降时,客户不会立刻裁掉 60% 的人,而是会把支持入口铺满每个页面、甚至开放给免费用户,去挖掘更多潜在需求。最终,AI 吃掉的是机械、琐碎的接线员动作,而把人释放去创造更多收入。

## 本集带走

最后收个尾,这一集值得带走的是三句话。第一,不要再把模型选择当成「变笨换便宜」的妥协,针对具体细分任务去微调开源小模型,你能同时拿到更好、更快、更便宜这三个好处,真正贵的大模型应该留给需要广泛探索的元任务。第二,不要迷信大实验室会吃掉一切,大模型本身离企业真正可用之间,隔着一整套需要对接业务逻辑、风控合规和测试评估的基础设施,这就是应用层公司死不掉的护城河。第三,面对 AI 带来的失业焦虑,不妨看看真实的商业反馈:当效率提升、成本下降,企业的直接反应往往不是裁员,而是用更低的成本去满足过去被压抑的无限需求,就像那句扎心的结论——AI 会消灭那些本不该由人干的机械工作,但它不会消灭人的职业生涯。

<div class="pd-sec">全部金句 <span>3 条(中英对照,已过机器闸门)</span></div>

> <span class="qz">我们构建的东西不是一个擅长客户支持的智能体,而是一个擅长遵循业务流程的智能体。</span>  
> *The thing that we built was not an agent that does customer support well, but rather an agent that follows business process well.*  
> <span class="qm">—— Ashwin Srinivas · [00:42]</span> ^q1

> <span class="qz">如果你不能做到这一点,那你只是在构建一个美化的咨询卡车。</span>  
> *If you can't do that, then you're just building a glorified consulting truck.*  
> <span class="qm">—— Ashwin Srinivas · [22:46]</span> ^q2

> <span class="qz">是的,我想就像 AI 会扼杀工作,但不会扼杀职业,在某种程度上。</span>  
> *Yeah, I think it's like AI will kill jobs, but not careers in a way.*  
> <span class="qm">—— Jesse Zhang · [77:24]</span> ^q3

*本集关键词:企业 AI · 开源模型 · 智能体 · 微调 · 企业级销售*

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
    ['.search','.readermode'].forEach(function(sel){ grab(sel,acts); });
    // 深浅色进右栏末尾 —— 但右栏在窄屏可能不显示,槽跟着一起没了。
    // 只在槽真的看得见时才搬进去,看不见就退回顶栏(🔒 #2:任何屏宽都得有入口)。
    var side=document.querySelector('.right.sidebar'), slot=null;
    if(side){
      slot=side.querySelector('.pd-themesw');
      if(!slot){ slot=document.createElement('div'); slot.className='pd-themesw'; side.appendChild(slot); }
      // 同上:槽是空的(:empty → display:none),要判**右栏**看不看得见
      if(!(side.offsetWidth || side.offsetHeight || side.getClientRects().length)) slot=null;
    }
    grab('.darkmode', slot || acts);
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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
