---
title: 60 行代码搭一个智能体，再花 5 分钟送上生产环境
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "59:46"
type: episode
cover: "#64748b"
description: AWS 的 Sandhya Subramani 和 Elizabeth Fuentes Leone 现场演示：从零搭一个客服智能体，加上护栏和记忆，一条命令部署上线。
guests: ["[[Sandhya Subramani]]", "[[Elizabeth Fuentes Leone]]"]
companies: ["[[strands agents]]", "[[AgentCore]]", "[[AWS]]"]
concepts: ["[[智能体]]", "[[工具]]", "[[钩子]]", "[[技能]]", "[[转向]]", "[[护栏]]", "[[可观测性]]", "[[LLM]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-agent-speedrun-elizabeth-fuentes-leone-s#post","headline":"60 行代码搭一个智能体，再花 5 分钟送上生产环境","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-agent-speedrun-elizabeth-fuentes-leone-s","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-agent-speedrun-elizabeth-fuentes-leone-s","description":"AWS 的 Sandhya Subramani 和 Elizabeth Fuentes Leone 现场演示：从零搭一个客服智能体，加上护栏和记忆，一条命令部署上线。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sandhya Subramani"},{"@type":"Person","name":"Elizabeth Fuentes Leone"},{"@type":"Organization","name":"strands agents"},{"@type":"Organization","name":"AgentCore"},{"@type":"Organization","name":"AWS"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"工具 (tool)"},{"@type":"Thing","name":"钩子 (hooks)"},{"@type":"Thing","name":"技能 (skills)"},{"@type":"Thing","name":"转向 (steering)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"可观测性 (observability)"},{"@type":"Thing","name":"LLM"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"60 行代码搭一个智能体，再花 5 分钟送上生产环境","item":"https://talk.solomind.cc/2026-10-11-talks-agent-speedrun-elizabeth-fuentes-leone-s"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>60 行代码搭一个智能体，再花 5 分钟送上生产环境</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 60 行代码搭一个智能体，再花 5 分钟送上生产环境

<div class="pd-byl"><b>Elizabeth Fuentes Leone</b> · AWS 工程师 · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-agent-speedrun-elizabeth-fuentes-leone-s.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你知道，它只是关于给你一个答案的概率。所以当你用钩子的时候，你可以更具确定性。你可以把代码放进你的智能体循环里。</div><div class="a">— Elizabeth Fuentes Leone <button class="pd-ts" data-t="31:39" data-who="Elizabeth Fuentes Leone" data-en="You know, it's only about the probability to give you an answer. So when you use a hook, you can be more deterministic. So you can put code inside your agent loop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sandhya Subramani]] · [[Elizabeth Fuentes Leone]]
>
> **公司** [[strands agents]] · [[AgentCore]] · [[AWS]]
>
> **概念** [[智能体]] · [[工具]] · [[钩子]] · [[技能]] · [[转向]] · [[护栏]] · [[可观测性]] · [[LLM]]

这是一场动手工作坊的实录。两位 [[AWS|AWS]] 的工程师 Sandy 和 Ellie，**带着现场约 250 名参与者，用一个下午走完了一条完整的路**：

想一个[[智能体|智能体]]、把它写出来、加上各种控制和[[护栏|护栏]]，最后部署到 AWS 的生产环境里。

整个过程用的[[工具|工具]]是 Strands Agents（一个开源的智能体框架）和 Amazon Bedrock [[AgentCore|AgentCore]]。她们讲得非常具体，值得每个对智能体感兴趣的人看看。

## 智能体的核心：一个不断循环的“想—做—答”

Sandy 先拆解了智能体到底是怎么工作的。

用户发来一个问题，大语言模型读一遍，决定该调用哪个工具，拿到工具的结果，再决定是继续调用还是直接回答。

这个循环转完，答案才发出去。

==工具为什么重要==？因为大语言模型本质上只是在预测下一个词。

你不想让它凭“感觉”回答客服问题，而是让它去查数据库、查订单记录。

工具就是那扇通向真实数据的门，智能体自己决定什么时候开哪扇门 <button class="pd-ts" data-t="18:01" data-who="嘉宾" data-en="The agent calls the LLM and the LLM then reads the question and calls a tool. So we want to define a set of tools because tools are the way by which we give an agent agency to execute a function because LLMs are mostly just going to be predicting the next token." aria-label="回原文"></button>。

现场搭建的客服智能体有 3 个工具：查客户、查订单历史、处理退款。配上系统提示词和模型，整个智能体不到 60 行代码。

## 换模型不用改架构

Strands Agents 是个开源的“智能体框架”，AWS 维护，但完全开放。

它的一个特点是不绑定任何模型：你可以用 Bedrock 上的模型，也可以接 OpenAI、Llama、Hugging Face，甚至自己部署的模型。

Sandy 特别提到，这意味着你可以用同一套代码、同一个系统提示词，去对比不同模型的表现。

换模型不用改架构，这在实际开发中省很多事 <button class="pd-ts" data-t="19:16" data-who="嘉宾" data-en="Now, another amazing thing about using an agent harness is because you can support a bunch of different models, you can swap out whichever model you want without really having to change the system prompt." aria-label="回原文"></button>。

## 钩子：给失控的智能体踩刹车

大语言模型是概率性的——提示词只是“建议”，它不保证照做。==那怎么加硬性规定==？

答案是 hooks（[[钩子|钩子]]）：在智能体运行的各个环节，插入你自己写的确定性代码。

现场演示了一个限速钩子：一次用户请求最多允许调用 3 次工具。如果模型“发疯”不停调工具，钩子直接拦截。

把上限改成 2 测试，可以看到工具调用被逐次拦下 <button class="pd-ts" data-t="30:56" data-who="嘉宾" data-en="And so it's actually blocked it. So here it's saying block lookup because it's exceeded the number of times. So when your agent starts to go haywire and we all worry about, oh my god, is my agent going to take over everything, right?" aria-label="回原文"></button>。

Ellie 补充了更实用的场景：

比如可以在调用前拦截用户输入里的信用卡号这类敏感信息，让模型根本收不到这些数据——既保安全，又不浪费令牌。

## 技能文件夹：该用哪套知识，智能体自己挑

系统提示词塞太多内容，既贵又乱。

做法是把知识拆成一个个“[[技能|技能]]”文件——比如“如何处理退款”“如何跟踪订单”“账户故障排查常见问题”——放在一个技能文件夹里，用 Markdown 写。

智能体收到问题后，先看一遍有哪些技能，挑出相关的那个当作工具来调用。

这样上下文只在需要时加载，系统提示词保持精简 <button class="pd-ts" data-t="36:15" data-who="嘉宾" data-en="And this is a way by which, so here what it would do is when we add agent skills, it would first go look up the skills folder and read all of the skills, see which one actually makes sense, and then it would use those skills." aria-label="回原文"></button>。演示里用户说“我想退无线耳机”，智能体自动调用了退款技能。

## 转向：配一个搭档智能体盯着它

模型经常“话多”，或者不按要求格式输出。

Steering（[[转向|转向]]）的思路很有意思：给主智能体配一个搭档智能体，像结对编程一样，边生成边检查。

搭档可以是写死的规则函数，也可以是另一个模型。演示里设了两条护栏：

一条管退款流程的顺序，一条管语气——不许过度承诺、不许给具体时间保证、不许怪客户、要体谅客户的不满 <button class="pd-ts" data-t="41:23" data-who="嘉宾" data-en="You can call it, you can invoke it at different points. You can invoke it before LLM, while LLM is being invocated, before tool call, after tool call, very similar to hooks, except at that hook point, now you're also adding another agent over there that can do a quick check." aria-label="回原文"></button>。

Ellie 还介绍了开源库 AgentControl：可以把这些规则存在数据库里。改规则只需改数据库，不用改智能体的代码。

她举了个例子：一个订房智能体，单间限住 5 人，来了 6 个人时不直接拒绝，而是自动改成订两间。

## 部署：一个装饰器，一条命令，5 分钟上线

Ellie 接管了后半场，主题是“怎么让智能体真正有用”——也就是部署。

AgentCore 是 AWS 专门用来把智能体送上生产环境的服务。从本地代码到生产，唯一需要改的是加一个装饰器标出入口点。

然后一条部署命令，剩下的交给 AgentCore：它自动创建容器、配置权限、生成基础设施代码。

Ellie 强调，平时在 AWS 上部署要手动创建角色、策略、权限，这里全部自动处理 <button class="pd-ts" data-t="56:19" data-who="嘉宾" data-en="And in core, it's handled everything for me. So I don't need to create the policy. I don't need to create permissions." aria-label="回原文"></button>。**她从零到智能体上线，用时约 5 分钟**。

部署后还自带两样东西：

- 会话与记忆：每个会话跑在独立容器里，短则 15 分钟、长则 8 小时。要长期记忆，用 AgentCore 的记忆服务，它会自动建好三类记忆的存储，连向量数据库都不用自己搭 <button class="pd-ts" data-t="05:37" data-who="嘉宾" data-en="So you can create an agent code memory So when you create agent code memory, you are going to have a semantic memory too. So agent code mills for you, mills in three different types of memory." aria-label="回原文"></button>。
- [[可观测性|可观测性]]：不是看内存占用那种，而是智能体层面的——花了多少令牌、调了哪些工具、循环内部发生了什么，都能在 CloudWatch 里看到 <button class="pd-ts" data-t="04:09" data-who="嘉宾" data-en="It's about agentic observability. How many tokens are expanded in this application? What tool is using this engine?" aria-label="回原文"></button>。

## 本集带走

- 智能体的核心是“模型—工具—循环”：模型负责推理决策，工具连接真实数据，循环把两者串起来，60 行代码就能跑通。
- 提示词是概率性的建议，钩子（hooks）是确定性的代码——安全、限速、拦截敏感信息这类硬规则，要用钩子做。
- 技能文件夹让智能体按需加载知识，避免把所有信息塞进系统提示词浪费令牌。
- 转向（steering）用搭档智能体实时纠偏，保证输出格式和语气符合要求。
- 从代码到生产可以很快：加一个装饰器、跑一条部署命令，权限、容器、可观测性、记忆全部自动配好。

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">你知道，它只是关于给你一个答案的概率。所以当你用钩子的时候，你可以更具确定性。你可以把代码放进你的智能体循环里。</span>  
> *You know, it's only about the probability to give you an answer. So when you use a hook, you can be more deterministic. So you can put code inside your agent loop.*  
> <span class="qm">—— Elizabeth Fuentes Leone · [31:39]</span> ^q1
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
