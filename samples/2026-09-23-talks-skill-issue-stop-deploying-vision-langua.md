---
title: 别再拿视觉语言模型干所有活：一条3、4美元的自动标注训练流水线
podcast: 精选演讲
date: 2026-09-29
source_url: undefined
duration: "18:53"
type: episode
cover: "#64748b"
description: Hugging Face 视觉工程师 Merve 演示用视觉语言模型自动标注+评判，训练出更小更快的目标检测模型。
guests: ["[[Merve Noyan]]"]
companies: ["[[Hugging Face]]"]
concepts: ["[[视觉语言模型]]", "[[智能体]]", "[[零样本分割]]", "[[目标检测]]", "[[Transformers]]", "[[RFDETR]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-23-talks-skill-issue-stop-deploying-vision-langua#post","headline":"别再拿视觉语言模型干所有活：一条3、4美元的自动标注训练流水线","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-23-talks-skill-issue-stop-deploying-vision-langua","mainEntityOfPage":"https://talk.solomind.cc/2026-09-23-talks-skill-issue-stop-deploying-vision-langua","description":"Hugging Face 视觉工程师 Merve 演示用视觉语言模型自动标注+评判，训练出更小更快的目标检测模型。","datePublished":"2026-09-29","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Merve Noyan"},{"@type":"Organization","name":"Hugging Face"},{"@type":"Thing","name":"视觉语言模型 (vision language model)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"零样本分割 (zero shot segmentation)"},{"@type":"Thing","name":"目标检测 (object detection)"},{"@type":"Thing","name":"Transformers"},{"@type":"Thing","name":"RFDETR"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"别再拿视觉语言模型干所有活：一条3、4美元的自动标注训练流水线","item":"https://talk.solomind.cc/2026-09-23-talks-skill-issue-stop-deploying-vision-langua"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别再拿视觉语言模型干所有活：一条3、4美元的自动标注训练流水线</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别再拿视觉语言模型干所有活：一条3、4美元的自动标注训练流水线

<div class="pd-byl"><b>Merve Noyan</b> · Hugging Face 视觉工程师 · 2026-09-29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-23-talks-skill-issue-stop-deploying-vision-langua.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">他们试图用视觉语言模型做所有事情，但你永远无法做到实时。</div><div class="a">— Merve Noyan <button class="pd-ts" data-t="01:08" data-who="Merve Noyan" data-en="they try to use vision language models for everything, but you will never get real time." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Merve Noyan]]
>
> **公司** [[Hugging Face]]
>
> **概念** [[视觉语言模型]] · [[智能体]] · [[零样本分割]] · [[目标检测]] · [[Transformers]] · [[RFDETR]]

把[[视觉语言模型|视觉语言模型]]（VLM，能同时看图和读文字的大模型）当成万能视觉方案，是很多开发者的本能——但这条路走不通。说这话的人是 Merve，在 [[Hugging Face|Hugging Face]] 做计算机视觉工作，最近一头扎进[[智能体|智能体]]和端侧方向，甚至为视觉语言模型写过一本书。她这场演讲的核心主张是：想要实时、想要鲁棒，就该用小而专的任务模型；而 VLM 的正确用法是退到幕后，帮你标注数据、当裁判，把专用模型「喂」出来。

## 为什么别直接用 VLM 干视觉活

Merve 观察到的开发者通病，是拿 VLM 做所有事情。第一个硬伤是永远做不到实时——她说的实时，是指在烤面包机这样的低端设备上也能跑 30、40 FPS，不管你做的是图像分类还是实例分割。第二个硬伤是精度：只要你认真训练一个 [[RFDETR|RFDETR]] 这样的专用检测模型，它总是会胜过视觉语言模型，她在现场展示了这一点 <button class="pd-ts" data-t="01:15" data-who="Merve" data-en="And the common behaviors I observe with the developers is the fact that they try to use vision language models for everything, but you will never get real time." aria-label="回原文"></button>。

还有一个更实际的坑：开发者不读许可证。每次她发[[目标检测|目标检测]]相关的内容，总有人问 YOLO——YOLO 确实是好模型，但它是 AGPL 3.0 许可证，她敢打赌有开发者根本不知道商用要付费就直接部署了。所以她今天想劝所有人迁移到 Apache 2.0 许可证的模型 <button class="pd-ts" data-t="02:02" data-who="Merve" data-en="Whenever I post something about object detection, they always ask me about YOLO. YOLO is a good model, but it has AGPL 3.0 license, I think. And I could swear on my life that there is some developers that actually deploy it without knowing that they have to pay for it." aria-label="回原文"></button>。

## 她造了个叫 VibeVision 的工具包

灵感来自一个社区帖子：有人把 SAM 3.1 模型作为工具交给 Gemma 4 去调用。Merve 把这个思路扩展成一个工具包，包含两部分：一是把她偏好的视觉模型打包成工具给编码智能体用，二是一条「vibe 训练」流水线——这是她讲的重头。

流水线的逻辑是：只有图像、没有标注时，先用一个视觉语言模型当标注器，再用两个视觉语言模型当裁判筛标注质量，最后训练你要的专用模型。具体做法：随便拿一个图像数据集，用 QN 3.5（约 8B 的 VLM）标注出边界框；然后把标注结果交给两个裁判——Gemma4E4B 和接近 2B 的 LFM 2.5 VL。

她查过研究，用一组较小裁判的集成效果更好。两个裁判的裁定按「最小一致」合并（只要一个说行就保留），最后拿去训练 RFDETR medium 或 large <button class="pd-ts" data-t="05:50" data-who="Merve" data-en="And this is how the pipeline actually looks like. So first up, I labeled the data set, like I take an image data set, like any image data set, I labeled that image data set with Q1 3.59B, and then I passed the labeled data set to two judges." aria-label="回原文"></button>。

这里有个关键技巧：QN 输出的边界框本质上是 token，但她不把 token 传给裁判，而是把边界框直接叠加画在图上，连同标签描述一起传给裁判，让裁判看着图判断「这个框标得对不对」。而那些标签描述本身也是编码智能体生成的，人只需要批准一下 <button class="pd-ts" data-t="07:18" data-who="Merve" data-en="And then it will start, like, if the dataset has labels, like, you can actually just get to training, but if it doesn't have it, you can just start annotating. And I basically, like, the trick is I pass the overlaid bounding boxes on images to the judge." aria-label="回原文"></button>。

## 成本和效果

整条流水线跑下来只要大约三、四美元——标注用 DeepInfra 的无服务器接口（便宜到离谱），评判用 Hugging Face Jobs，训练用一块 L4（RFDETR 模型非常小，甚至可以本地跑）<button class="pd-ts" data-t="08:47" data-who="Merve" data-en="I have a lot of compute credits and I'm super impatient in life. So like I use a good amount of hardware for experimentations but I benchmarked it and overall it takes like three, four dollars if you want to run this entire pipeline to train models which to me is crazy." aria-label="回原文"></button>。

效果在两个问题上验证。路牌检测：数据集有真实标注可以对比，训练出的模型 mean average precision（检测精度的标准指标）超过 50，和伪标注比有一点差距，但可以预期，因为它就是从 QN 学的。

文档解析：用 DocVQA 数据集提取图像、表格、签名，这是个新任务，结果模型不仅学会了，还泛化得很好——训练后的模型检测到了签名，而 QN 对同一测试集的标注反而漏掉了。她把这归功于 RFDETR 作为骨干网络本身够强 <button class="pd-ts" data-t="10:52" data-who="Merve" data-en="And also, RockOak is also a good value, to be frank, for such use case. And for the document parsing, it actually generalizes, which to me is crazy. Here, the trained model output, you can see that it detected the signature." aria-label="回原文"></button>。

## 三个坑

**裁判的平衡问题**。LFM 倾向于大量拒绝。

如果按「共识」剔除两个裁判都否掉的样本，剩下的样本会少到泛化极差，所以她改成「最小一致」：只要一个裁判说行就保留。但如果你的数据集大、且在意召回率，她建议反过来取共识，或者人工观察 <button class="pd-ts" data-t="11:40" data-who="Merve" data-en="So first up, there is a huge judging balance. So for depending on the problem, LFM, Tends to reject a lot." aria-label="回原文"></button>。

**提示词必须人审**。裁判用的提示词由模型生成，但这是全流程唯一必须人类点头的环节——你还是得看一眼你的数据集，这逃不掉 <button class="pd-ts" data-t="12:21" data-who="Merve" data-en="For document parsing, the gap isn't as big. And secondly, the prompt generation is a bit hard, so this is the only part where as a human you have to approve, okay, the model generates the prompts for you, for the judge, and then you will say, okay, I approve this, because you need to still take a look at it, take a look at your data set a little, there's no escaping that." aria-label="回原文"></button>。

**编码智能体是个毫无头绪的计算机视觉工程师**。哪怕好如 Opus 4.8，它也会对交通标志做水平翻转、对红绿灯做抖动（数据增强的常见手段）——这肯定会毁掉你的数据集，因为翻转后的「停止」标志已经不是真实世界的标志了。她后来加了开关，可以明确告诉智能体做不做数据增强 <button class="pd-ts" data-t="13:06" data-who="Merve" data-en="It's clueless as a computer vision engineer as well as it misses common sense. For instance, it was doing horizontal flip over the traffic signs or it was doing jitter over the traffic lights which will definitely corrupt your data sets and break it." aria-label="回原文"></button>。

## 工具包另一半：模型即工具

工具包里是她从深度估计到[[零样本分割|零样本分割]]（不给训练样本、直接用自然语言指哪分割哪）的私藏模型清单，依据三条选型标准：许可证优先（必须 Apache 2.0 或 MIT）、性能达标、最后才是 vibes。选型靠 Hugging Face 几个月前上线的基准排行榜加上她自己读 CV 会议论文 <button class="pd-ts" data-t="13:30" data-who="Merve" data-en="And your coding agent will help you with that. And lastly, the second part of this toolkit is my preferred models as tools. So this repository covers my favorite models from depth estimation to zero shot segmentation." aria-label="回原文"></button>。

她特别安利了一个冷门模型：大部分模型做不了开放式指代分割——「分割这辆红车」可以，但「分割蓝色车旁边那辆橙色车旁边的红车」就做不到。TII 出的 Falcon Perception 能做到，而且只有约 6 亿参数、Apache 2.0 许可证。

其他推荐：姿态任务用 sapiens 系列；零样本检测用 Moondream 3 和更小的 MM Grounding Dyno；OCR 从基准榜按大小选。整套还带 RoboFlow 的 supervision 和 tracker 库，可做实例和边界框跟踪 <button class="pd-ts" data-t="14:38" data-who="Merve" data-en="And Falcon Perception, which is a model by TII, can actually do it, and it's only like 600 million parameters with Apache 2.0 license. So this one does the zero shot segmentation for me." aria-label="回原文"></button>。

## 下一步

工业场景的部件往往「不可描述」——自然语言不是好入口。她认为图像引导检测（给一张示例图，让模型在所有图像里找同类物体）可能是出路。

另外她想试交并比合并：不让裁判做接受/拒绝的二选一，而是让裁判自己生成框、取交并比。分割支持也在做。

至于训练 VLM 本身实现自我改进？她说那很令人兴奋，但得先解决开发者训练任务专用模型并部署到边缘这件事 <button class="pd-ts" data-t="16:01" data-who="Merve" data-en="And future plans. So first off, I could hear you say, okay, this will definitely not work for the industry use cases because industry use cases have different parts." aria-label="回原文"></button>。

> 【背景】交并比即 IoU，是目标检测中衡量两个边界框重叠程度的常用指标。

## 本集带走

- **VLM 当标注器+裁判，专用模型干活**：想实时、想小模型部署，别直接上 VLM；用大 VLM 标注、小 VLM 集成当裁判，最后训练 RFDETR 这类小模型。
- **裁判合并取「最小一致」而非共识**：小裁判爱拒绝，取共识会把你数据剔光；数据集大且在意召回时再考虑共识。
- **把边界框画在图上给裁判看**，别传坐标 token——直观且更准。
- **盯住编码智能体的数据增强**：水平翻转交通标志、抖动红绿灯这类操作会悄悄毁掉数据集，要么关掉要么人审。
- **先查许可证再选模型**：YOLO 是 AGPL 3.0，商用要付费；优先 Apache 2.0 / MIT。
- **整条流水线成本约 3-4 美元**：标注走便宜的无服务器接口，评判和训练用按次作业即可。
- **冷门宝藏 Falcon Perception**：6 亿参数就能做复杂指代的零样本分割。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">他们试图用视觉语言模型做所有事情，但你永远无法做到实时。</span>  
> *they try to use vision language models for everything, but you will never get real time.*  
> <span class="qm">—— Merve Noyan · [01:08]</span> ^q1

> <span class="qz">大多数人让 VLM 或 LLM 给标注打一个分数，但这些分数完全不管用，尤其是当你的模型和裁判规模不同的时候。</span>  
> *most of the people ask the VLM or LLM to assign some score to it, but those scores absolutely don't work, especially if your models are of different size with judges.*  
> <span class="qm">—— Merve Noyan · [06:28]</span> ^q2

> <span class="qz">总体上如果你想跑这整条流水线来训练模型，大概要三、四美元，这对我来说太疯狂了。</span>  
> *overall it takes like three, four dollars if you want to run this entire pipeline to train models which to me is crazy.*  
> <span class="qm">—— Merve Noyan · [08:54]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同公司:Hugging Face · 同概念:智能体 (agent)</span>
- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同公司:Hugging Face · 同概念:智能体 (agent)</span>
- [[2026-08-29-a16z-why-1-200-ai-agents-started-working-toge|一千个AI智能体自发建组织：它们在研究怎么骗评分]]<span class="pd-rz">同公司:Hugging Face · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同公司:Hugging Face · 同概念:智能体 (agent)</span>
- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同公司:Hugging Face · 同概念:智能体 (agent)</span>
- [[2026-09-19-bigtech-ai-doom-backlash-arrives-anthropic-opena|AI 末日论反弹：是营销烟雾弹，还是真该警惕？]]<span class="pd-rz">同公司:Hugging Face · 同概念:智能体 (agent)</span>

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
