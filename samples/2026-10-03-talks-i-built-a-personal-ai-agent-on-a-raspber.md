---
title: 把 AI 助手挂在脖子上：一块树莓派的随身记忆实验
podcast: 精选演讲
date: 2026-10-06
source_url: undefined
duration: "19:59"
type: episode
cover: "#64748b"
description: Neo4j 的 Jeremy Adams 演讲：用一块 Raspberry Pi 4B 挂在胸前，做一个便宜、可折腾的个人 AI 智能体。
guests: ["[[Jeremy Adams]]"]
companies: ["[[Neo4j]]"]
concepts: ["[[智能体]]", "[[智能体记忆]]", "[[NanoClaw]]", "[[树莓派]]", "[[MCP 服务器]]", "[[Docker]]", "[[Claude Agent SDK]]", "[[推理]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber#post","headline":"把 AI 助手挂在脖子上：一块树莓派的随身记忆实验","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber","mainEntityOfPage":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber","description":"Neo4j 的 Jeremy Adams 演讲：用一块 Raspberry Pi 4B 挂在胸前，做一个便宜、可折腾的个人 AI 智能体。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jeremy Adams"},{"@type":"Organization","name":"Neo4j"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体记忆 (agent memory)"},{"@type":"Thing","name":"NanoClaw"},{"@type":"Thing","name":"树莓派 (Raspberry Pi)"},{"@type":"Thing","name":"MCP 服务器 (MCP server)"},{"@type":"Thing","name":"Docker"},{"@type":"Thing","name":"Claude Agent SDK"},{"@type":"Thing","name":"推理 (inference)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把 AI 助手挂在脖子上：一块树莓派的随身记忆实验","item":"https://talk.solomind.cc/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把 AI 助手挂在脖子上：一块树莓派的随身记忆实验</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把 AI 助手挂在脖子上：一块树莓派的随身记忆实验

<div class="pd-byl"><b>Jeremy Adams</b> · Neo4j 开发者关系 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-03-talks-i-built-a-personal-ai-agent-on-a-raspber.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">对我来说，我更想理解发生了什么，而不是它功能丰富。</div><div class="a">— Jeremy Adams <button class="pd-ts" data-t="06:33" data-who="Jeremy Adams" data-en="And for me, I wanted to understand what was happening more than it being feature-rich." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jeremy Adams]]
>
> **公司** [[Neo4j]]
>
> **概念** [[智能体]] · [[智能体记忆]] · [[NanoClaw]] · [[树莓派]] · [[MCP 服务器]] · [[Docker]] · [[Claude Agent SDK]] · [[推理]]

来自 [[Neo4j|Neo4j]] 的 [[Jeremy Adams|Jeremy Adams]] 在 AI Engineer 大会上做了一个相当“活”的现场演示：

他从口袋里掏出电池、插上麦克风、接好视频采集线，当场启动挂在自己胸前的一台 [[树莓派|Raspberry Pi]] 4B，讲他如何用这块小主板搭出一个带长期记忆的个人 AI 助手。

整个过程像一个爱折腾的老系统管理员的手记——便宜、开放、能自己看懂每一行代码，比功能丰富更重要。

## 为什么不直接用笔记本电脑跑？

Jeremy 的态度很明确：他对那些跑在笔记本电脑上的个人[[智能体|智能体]]不放心。

他来自老派的系统管理员和运维圈子，习惯等一项技术足够成熟再上手。

他还在 Craigslist 上看到有人卖预装了 OpenClaw 的 Mac Mini，他的第一反应是“预装？这本身就是个危险信号”，而且涨价之后 Mac Mini 也不再便宜。

他想要的东西有四个特点：**便宜、开放、可折腾，而且能看懂内部在干什么**。

于是他想起了衣柜里那台疫情期间玩过的树莓派，决定试试。“它到底能不能跑智能体？我不知道。我应该试一下看看。”

结论是：跑得很好。

## 小小的“爪子”到底装了什么？

这块 Raspberry Pi 4B 不是最新型号，但足够用。他一开始甚至跑了很久 32 位系统，后来才发现它支持 64 位 ARM。

上面装了 [[Docker|Docker]]，跑着容器化的 Neo4j 图数据库，还有他选定的智能体框架 [[NanoClaw|NanoClaw]]——他没用更出名的 OpenClaw，而是选了这个只有大约 15 个源文件的项目，代码量小，用 Docker 容器跑智能体进程，防止它们在系统里乱来。

它基于 [[Claude Agent SDK|Claude Agent SDK]]，鼓励用户修改和扩展。

整个架构其实很朴素：手机上的 WhatsApp 发消息，树莓派上的 NanoClaw 接收处理，**真正的语言模型[[推理|推理]]全部发生在云端**。

用他的话说，大脑很大，“只不过这个大脑是通过一根线连到云端的”。树莓派本地不做任何推理。

## 图数据库到底是什么？

给没用过图的读者补一句：**图数据库就是用圆圈和连线存数据**。圆圈叫节点，连线叫关系。

比如“Tom Hanks（人）参演了《阿甘正传》（电影）”，就是两个节点加一条边。就这么简单，现在你懂图了。

他的第一个实验是让 WhatsApp 里的助手查询云端的 Neo4j 电影库。第一次问“Tom Hanks 演过什么电影”，助手居然先回他：你的配置有问题，认证没弄好。

修好之后，答案才正常返回。整个过程通过一个 [[MCP 服务器|MCP 服务器]]连进数据库，再把结果拼成回复送回 WhatsApp。

## 在飞机上，没有 Wi-Fi，做出了记忆系统

最有意思的一段发生在飞机上。他发现即使不买机上 Wi-Fi，WhatsApp 消息照样能发——也就是说，他可以在三万英尺上跟胸前的助手对话。

于是他开始琢磨记忆这件事。

他采用的框架叫 POLE+O，说穿了就是五类东西：人物、物体、地点、事件、组织。

这个框架来自欧洲警务系统——警匪剧里侦探在墙上钉照片、拉红线的那块板子，本质上就是一张图。

他让助手当场写一个技能，把这五类实体存进 Neo4j，重启也不丢。“我说，这太神奇了。”

从此他去参加各种开发者活动，去过的地点、聊过的人、参加的活动，都自动变成了图上的节点：

去过 Menlo Park 的 Snowflake 办公室，Menlo Park 本身是一个地点节点，活动是另一个节点，人和事全部连在一起。

## 挂着它逛展位，居然逛出了新知识

大会前他又加了一样东西：USB 麦克风加语音转文字，还焊了一个物理按钮触发录音。

他的计划是挂着这台设备在会场里一个展位一个展位地逛，把各家的宣传语录下来。

考虑到会场 Wi-Fi 通常靠不住，他做了一个离线模式：

把 Neo4j 直接跑在胸前的树莓派上，离线时用正则表达式从语音转文字的结果里解析出展位号，写进本地数据库，回头有网了再同步到云端。

他还顺手写了一个叫 Cypher Shell Browser 的小工具，不用昂贵的图形界面就能查询数据库。现场演示时，他真的查出了 Microsoft 等展商的原始笔记。

真正的惊喜在云端。

他把逛展收集的数据导入后做了关联分析，发现展商们可以按主题连成网络：BuildKite 和 LangChain 都挂着“评估与可观测”这个主题节点。

他说，这一刻他“**实际上生成了一些可能是新的、也许没有任何人掌握过的知识**”——整个会场的展商格局，被一台挂在他脖子上的树莓派画成了一张图。

## 下一步：把全部聊天记录变成可检索的记忆

演讲结尾他提到，后来用 Neo4j 的 agent memory service 把自己历年的 WhatsApp 对话全部导入，系统自动把这些对话蒸馏成结构化的记忆——聊过的人、去过的地点、讨论过的概念，全部可以通过 MCP 服务器被胸前的这台设备随时查询。

一个人的对话史，变成了一张可浏览的记忆图谱。

## 本集带走

- 个人 AI 助手不一定要跑在笔记本电脑上：一块 Raspberry Pi 4B 加 WhatsApp 加云端模型，就是一套便宜、开放、看得见内部逻辑的方案。
- 大脑和身体可以分离：树莓派只负责消息通道和本地存储，语言模型推理全在云端。
- POLE+O（人物、物体、地点、事件、组织）来自欧洲警务的线索分析法，很适合做智能体的长期记忆结构。
- 离线模式很关键：会场、飞机上 Wi-Fi 靠不住，本地跑一个数据库，回头再同步。
- 逛展位录下来的零散笔记，经过图数据库关联之后，能提炼出别人没有的全局知识。

<div class="pd-sec pd-sec-q">全部金句 <span>1 条</span></div>

> <span class="qz">对我来说，我更想理解发生了什么，而不是它功能丰富。</span>  
> *And for me, I wanted to understand what was happening more than it being feature-rich.*  
> <span class="qm">—— Jeremy Adams · [06:33]</span> ^q1

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-04-talks-open-models-change-the-economics-of-ai|Ollama CEO：开源模型正吃掉企业 80-90% 的 token]]<span class="pd-rz">同概念:Docker、推理 (inference)、智能体 (agent)</span>
- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同公司:Neo4j · 同概念:智能体 (agent)、智能体记忆 (agent memory)</span>
- [[2026-07-08-latent-space-modal|不只做推理：Modal 如何跨界多节点训练与智能体云]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a|我用五个提示词「黑」了自己：你的 AI 助手并不安全]]<span class="pd-rz">同概念:Docker、MCP 服务器 (MCP server)、智能体 (agent)</span>
- [[2026-08-07-yc-how-to-design-in-the-agent-era-e3n42jd|别让 AI 默认审美毁了你的产品:Paper 如何用 HTML 重新定义设计工具]]<span class="pd-rz">同概念:MCP 服务器 (MCP server)、智能体 (agent)</span>
- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同概念:推理 (inference)、智能体 (agent)</span>

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
