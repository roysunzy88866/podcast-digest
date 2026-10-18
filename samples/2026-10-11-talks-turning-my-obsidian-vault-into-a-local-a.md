---
title: 把敏感文档挡在 AI 外面：一套自己云上的“预处理工人”
podcast: 精选演讲
date: 2026-10-19
source_url: undefined
duration: "47:07"
type: episode
cover: "#64748b"
description: Superlinked 的 Filip Makraduli 演示了如何用私有云里的开源模型集群，替 Claude Code 处理敏感文档，既省 token 又不泄密。
guests: ["[[Filip Makraduli]]"]
companies: ["[[Superlinked]]", "[[Claude Code]]", "[[Obsidian]]"]
concepts: ["[[MCP]]", "[[OCR]]", "[[开源模型]]", "[[推理]]", "[[隐私]]", "[[模型路由]]", "[[GPU]]", "[[微调]]", "[[智能体]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-11-talks-turning-my-obsidian-vault-into-a-local-a#post","headline":"把敏感文档挡在 AI 外面：一套自己云上的“预处理工人”","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-11-talks-turning-my-obsidian-vault-into-a-local-a","mainEntityOfPage":"https://talk.solomind.cc/2026-10-11-talks-turning-my-obsidian-vault-into-a-local-a","description":"Superlinked 的 Filip Makraduli 演示了如何用私有云里的开源模型集群，替 Claude Code 处理敏感文档，既省 token 又不泄密。","datePublished":"2026-10-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Filip Makraduli"},{"@type":"Organization","name":"Superlinked"},{"@type":"Organization","name":"Claude Code"},{"@type":"Organization","name":"Obsidian"},{"@type":"Thing","name":"MCP"},{"@type":"Thing","name":"OCR"},{"@type":"Thing","name":"开源模型 (open source models)"},{"@type":"Thing","name":"推理 (inference)"},{"@type":"Thing","name":"隐私 (privacy)"},{"@type":"Thing","name":"模型路由 (model routing)"},{"@type":"Thing","name":"GPU"},{"@type":"Thing","name":"微调 (fine-tuning)"},{"@type":"Thing","name":"智能体 (agent)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把敏感文档挡在 AI 外面：一套自己云上的“预处理工人”","item":"https://talk.solomind.cc/2026-10-11-talks-turning-my-obsidian-vault-into-a-local-a"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把敏感文档挡在 AI 外面：一套自己云上的“预处理工人”</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把敏感文档挡在 AI 外面：一套自己云上的“预处理工人”

<div class="pd-byl"><b>Filip Makraduli</b> · Superlinked · 2026-10-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-11-talks-turning-my-obsidian-vault-into-a-local-a.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">所以价格大概低 10 倍左右，而质量非常接近，你可以看到，我们在 embedding 每个任务上最好的模型达到了最前沿模型的 99.8%。</div><div class="a">— Filip Makraduli <button class="pd-ts" data-t="27:31" data-who="Filip Makraduli" data-en="so you get kind of 10x lower price roughly with very similar quality, so you can see there the kind of The best model we had per task for embedding was 99.8% to kind of the frontier one." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Filip Makraduli]]
>
> **公司** [[Superlinked]] · [[Claude Code]] · [[Obsidian]]
>
> **概念** [[MCP]] · [[OCR]] · [[开源模型]] · [[推理]] · [[隐私]] · [[模型路由]] · [[GPU]] · [[微调]] · [[智能体]]

[[Filip Makraduli|Filip Makraduli]] 在 [[Superlinked|Superlinked]] 工作。这场演讲里，他展示了一个自己搭建的系统：

日常照常在 [[Claude Code|Claude Code]] 里干活，但一碰到涉及[[隐私|隐私]]、又费 token 的文档任务，就把活儿甩到自己私有云里的[[开源模型|开源模型]]集群上去处理。

整个项目开源在 GitHub 上，仓库叫 Superlinked Cy。

## 为什么要这么折腾：隐私和 token 账单

事情从他的 [[Obsidian|Obsidian]] 笔记库开始。他用 markdown 文件管理笔记，但很快发现两个绕不开的问题。

一是隐私：把文件直接喂给 Claude Code 这类[[智能体|智能体]]，对很多机构来说是不可接受的。

二是成本：处理带扫描件、图片的敏感文档往往要做 [[OCR|OCR]]，10 页带图的 PDF 塞进去，token 费用会迅速攀升。

他的思路是：**这些重活先在自己控制的私有云里用开源模型预处理，只把干净的、脱敏后的结果交回主智能体**。

这样既省了 token，也保留了更好的上下文——不用拿原始数据把上下文窗口塞满 <button class="pd-ts" data-t="03:14" data-who="嘉宾" data-en="The token costs can ramp up, so I wanted to find a way to Kind of do this but also having smaller artifacts means that you get better context so you kind of limit context loss in a way and you don't like fill out the context with data that can be processed in some way else." aria-label="回原文"></button>。

## 为什么用 MCP，而不是写个插件

[[MCP|MCP]] 可以理解为智能体调用外部工具的标准接口。

他没做成装在笔记本电脑上的插件，而是搭了一整个 MCP 服务器，中间一层叫 Psy MCP，背后连着一个带 [[GPU|GPU]] 的集群 <button class="pd-ts" data-t="10:43" data-who="嘉宾" data-en="The MCP setup, it has three tiers. So there is, you can see in the middle, the PSY MCP. There is the MCP client, that's kind of client and host through co-work or Claude Code or whatever you use, and that communicates with the PSY MCP server." aria-label="回原文"></button>。

好处是职责分离：

**数据存储在 Obsidian 里是容易的部分，真正的瓶颈是[[推理|推理]]基础设施**——想规模化跑多个开源模型、想部署到生产环境，事情就难了。

而这套集群方案让他可以自己挑选 GPU、配置工作池，清楚知道哪个模型跑在哪张卡上 <button class="pd-ts" data-t="09:31" data-who="嘉宾" data-en="which I will also talk about later. And everything runs on a server you can control, so through SAI you can pick your worker pools, you can pick your GPUs, basically, and understand which models are pinned where, and that flexibility from a cloud perspective was an advantage, and I wanted to keep it that way, and that's why I went with MCP rather than just a skill." aria-label="回原文"></button>。

出于隐私考虑，这套 MCP 是单向的：服务器只暴露工具，不做客户端反向的采样等复杂通信 <button class="pd-ts" data-t="13:27" data-who="嘉宾" data-en="However, in our case, just because this was more of a privacy setup, we do not do this. Basically the sci MCP edge only exposes the tools and they can be used, the ones that kind of were initialized in the handshake and that's it." aria-label="回原文"></button>。

## 演示：一封含敏感信息的 NDA

他用合成的邮件和合同数据做演示。一份 NDA 里有电话号码、社会安全号这类个人信息。

他在 Claude Code 里用自然语言下指令，系统调用私有云里的 OCR 模型把扫描件转成 markdown，再做实体识别和脱敏。

结果是：Claude Code 只拿到脱敏后的版本，整个过程在私有云里完成，个人身份信息不会泄露到外部 API <button class="pd-ts" data-t="22:40" data-who="嘉宾" data-en="So the idea is that you preprocess the document through the OCR tool calling thing. You get the token saving cost, the better context management and so on, but you also get the redacted file so personal information is not leaked." aria-label="回原文"></button>。

工具箱目前包括文档转 markdown、实体抽取、打标签、摘要、问答等，都是开源模型在干活。

## 开源 OCR 模型，质量并不妥协

一个常见顾虑是：==用开源模型是不是要牺牲质量==？他的回答是，至少在 OCR 上完全不是。

开源 OCR 模型已经非常好，把这部分工作外包出去，质量上没什么损失 <button class="pd-ts" data-t="15:11" data-who="嘉宾" data-en="A detail here is that with OCR, OCR models especially, the open source models are very good. So you're not compromising in quality by offloading some of the work to open source OCR models." aria-label="回原文"></button>。

他们的嵌入模型测试也支持这个判断：在 MTEB 任务上评估，**最好的开源模型达到前沿模型 99.8% 的质量，而价格大约低 10 倍** <button class="pd-ts" data-t="27:07" data-who="嘉宾" data-en="So if you contribute a tool that is maybe around content guarding or policy checking or whatever you find useful, we'd love to kind of have that. as a contribution and in some of our tests we've also seen that due to this infrastructure that I explained we get very good performance around embedding models so we also have generation models but the tests that we have the benchmarks for now are around embedding models so you get kind of 10x lower price roughly" aria-label="回原文"></button>。

## 真正的竞争力在基础设施

一个关键发现：即使单个模型的推理没优化到极致，**只要整体架构搭得好，端到端的延迟和性能照样能赢** <button class="pd-ts" data-t="28:13" data-who="嘉宾" data-en="But the point of this is that sometimes, especially in production use cases and with certain loads, You get the advantage through the end-to-end improvements. So if your infrastructure and architecture is set up well, you basically get the latency improvement and the better performance even if your per model inference is not optimized." aria-label="回原文"></button>。

具体做法包括：每个工作节点有自己的批处理器，而不是所有请求挤一个共享队列；

模型可以在单张 GPU 上热切换，方便在多个[[微调|微调]]模型之间快速测试；支持自动缩容，不用时不烧钱 <button class="pd-ts" data-t="23:50" data-who="嘉宾" data-en="So we have A gateway that kind of helps us connect this to different worker pools that each have this batcher per worker so that the batching is done per worker and that gave us better performance instead of just having all the batching up front." aria-label="回原文"></button>。

他们还测试了针对德语法律文本微调的 LoRA，成本低、部署快。

团队还在探索[[模型路由|模型路由]]：

根据任务难度、甚至根据哪个模型已经在 GPU 上“热着”，动态决定调用哪个——有时候调用一个已在显存里的贵模型，比重新加载一个便宜模型更划算 <button class="pd-ts" data-t="34:16" data-who="嘉宾" data-en="I think a lot of stuff will be done in this way kind of fairly soon. And yeah, this is the idea that you can kind of estimate per model to find which models are warm." aria-label="回原文"></button>。

## 现场有人追问：Claude 会不会偷看原文？

问答环节有个尖锐的问题：Claude 要决定是否调用 MCP，==那它在做决定前会不会已经读了文件==？

他坦承这确实可以进一步测试，但目前的测试中，把 MCP 和所有处理都放在私有云里时，没有出现数据泄露。

最坏情况下，你可以干脆换掉 Claude Code，用开源智能体框架自己搭一套——预处理层照样有用 <button class="pd-ts" data-t="43:38" data-who="嘉宾" data-en="Definitely that can be kind of tested more and more, but in the test that I've done, like if you host the kind of MCP and everything else is on the virtual private cloud, this seemed to have worked without kind of the data leaking, but I'm sure there can be more guardrails to kind of reinforce this at that," aria-label="回原文"></button>。

集群本身也可以完全自建：仓库里有 Helm charts、Kubernetes 配置，一条 Terraform 命令就能部署，不依赖他们托管的集群 <button class="pd-ts" data-t="31:09" data-who="嘉宾" data-en="And there is a lot of stuff to do kind of in the future, but the operational capability is still there, so we have the Helm charts and the Kubernetes cluster and you can use also Terraform apply to deploy the cluster which is also open source so it's not hidden like kind of just the code is open source but we have basically everything." aria-label="回原文"></button>。

## 本集带走

- 敏感文档可以先在私有云里用开源模型做 OCR 和脱敏，只把干净结果交回 Claude Code 等主智能体，兼顾隐私和 token 成本。
- 开源模型在 OCR、实体识别这类任务上质量已经接近闭源模型，嵌入模型测试显示约 10 倍的价格优势、99.8% 的质量。
- 推理基础设施往往是被低估的瓶颈：好的批处理、模型热切换和架构设计能带来端到端的性能提升。
- 未来方向是在私有云内做模型路由——根据任务和模型“冷热”状态动态选模型，甚至搭建多模型互评的机制。
- 项目完全开源，Superlinked 提供免费算力申请，也欢迎社区贡献新工具。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">所以价格大概低 10 倍左右，而质量非常接近，你可以看到，我们在 embedding 每个任务上最好的模型达到了最前沿模型的 99.8%。</span>  
> *so you get kind of 10x lower price roughly with very similar quality, so you can see there the kind of The best model we had per task for embedding was 99.8% to kind of the frontier one.*  
> <span class="qm">—— Filip Makraduli · [27:31]</span> ^q1

> <span class="qz">所以如果你的基础设施和架构搭建得好，即使你的单模型推理没有优化，你基本上也能获得延迟改进和更好的性能。</span>  
> *So if your infrastructure and architecture is set up well, you basically get the latency improvement and the better performance even if your per model inference is not optimized.*  
> <span class="qm">—— Filip Makraduli · [28:18]</span> ^q2

> <span class="qz">它只是变成了模型会钻空子的东西，而从未被真正使用。你永远不能把那个当作一个合适的评估。</span>  
> *but it just becomes something that like the models hack and never actually use it. You can never use that as a proper evaluation.*  
> <span class="qm">—— Filip Makraduli · [37:08]</span> ^q3
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
