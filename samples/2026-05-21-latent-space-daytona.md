---
title: 赋予AI智能体计算机——Daytona创始人Ivan Burazin
podcast: Latent Space
date: 2026-05-21
source_url: https://www.latent.space/p/daytona
duration: "70:18"
type: episode
cover: "#0e7490"
image: "/covers/2026-05-21-latent-space-daytona.jpg"
description: "Daytona 为智能体打造毫秒级启动的裸金属沙箱,迎击 RL 训练与后台智能体的算力新挑战。"
guests: ["[[Ivan Burazin]]"]
companies: ["[[Daytona]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[突发负载]]", "[[裸金属]]", "[[计算机使用]]", "[[托管型 Kubernetes]]"]
category: 智能体
tags:
  - 智能体
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/">跨国深谈</a><nav class="pd-nav"><a href="/">最新</a><span class="soon" title="必读页归 C13c">最热</span></nav><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>赋予AI智能体计算机——Daytona创始人Ivan Burazin</span></a><div class="pd-acts"></div></div></header></div>

# 赋予AI智能体计算机——Daytona创始人Ivan Burazin

<div class="pd-byl"><b>Ivan Burazin</b> · Daytona CEO</div>

<div class="pd-mt">2026-05-21 · Latent Space · 70:18 · <a class="mcat" href="./tags/%E6%99%BA%E8%83%BD%E4%BD%93">智能体</a></div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-05-21-latent-space-daytona.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">但如果你想一次启动 50,000 个,我们现在大约需要 75 秒。</div><div class="a">Ivan Burazin · 16:36</div></div>

> [!info] 关联
> **嘉宾**:[[Ivan Burazin]]
>
> **涉及公司**:[[Daytona]]
>
> **概念**:[[智能体]] · [[沙箱]] · [[突发负载]] · [[裸金属]] · [[计算机使用]] · [[托管型 Kubernetes]]
>
> **来源**:[Latent Space](https://www.latent.space/p/daytona)

<div class="pd-tldr"><b>一句话</b>Daytona 为智能体打造毫秒级启动的裸金属沙箱,迎击 RL 训练与后台智能体的算力新挑战。</div>

本期对话围绕**[[智能体|智能体]](agent,指能自主执行任务的 AI 程序)**的底层计算基础设施展开。主持人和嘉宾 [[Ivan Burazin|Ivan Burazin]]([[Daytona|Daytona]] CEO)是多年老友。Ivan 曾创办过浏览器端开发环境 Code Anywhere,后来又做过名为 Shift 的技术大会。如今他带着对底层基础设施的深刻理解,创立了 Daytona,并在去年做出了一个历史性的转型。整场对话不仅盘点了「智能体到底需要什么样的计算机」,还深入探讨了算力市场的爆发现状、Windows/Mac [[沙箱|沙箱]]的实战痛点,以及下一代基础设施的演进方向 <button class="pd-ts" data-t="00:04" data-who="Ivan Burazin" data-en="Okay, we're in the studio with Ivan Bourazin, CEO of Daytona. Welcome. Thanks for having me, man." aria-label="回原文"></button>。

## 从「为人服务的开发环境」到「为智能体服务的沙箱」

故事要从 2024 年底说起。当时 Ivan 从主持人那里获得了 Devin(一款知名的 AI 软件工程师)的访问权限,同时 OpenDevin(现已更名为 OpenHands 的开源项目)也刚刚出现。Ivan 敏锐地察觉到 AI 智能体可能是一个巨大的趋势,于是尝试把公司原本「为人类工程师自动化开发环境」的工具结合 OpenDevin,作为一个 SaaS(软件即服务)推出去 <button class="pd-ts" data-t="07:09" data-who="Ivan Burazin" data-en="Basically, we did a demo with, I think we discussed this as well. Devin was not public. You actually gave me access to Devin at that time." aria-label="回原文"></button>。

结果出乎意料:没什么人注册使用这个 SaaS。然而,大量正在开发智能体的团队却主动找上门来,问他们:「我的智能体需要一个计算沙箱(一种安全隔离的代码执行环境)运行时,你们能做吗?」Ivan 意识到,这是一个全新的市场 <button class="pd-ts" data-t="07:39" data-who="Ivan Burazin" data-en="Not very many people signed up and used it, but a lot of people reached out that were building agents and they're like, hey," aria-label="回原文"></button>。

起初,Daytona 拿原本给人类准备的底层设施去给智能体用,但遭到了 20 到 30 个试用客户的一致拒绝。大家普遍觉得「这不就是 EC2 或者虚拟机吗,为什么不一样?」这迫使 Ivan 疯狂补习 AI 行业知识。在一个跨年夜,他凭借直觉编程出了第一版专门面向智能体的沙箱最小可行产品 <button class="pd-ts" data-t="10:30" data-who="Ivan Burazin" data-en="And everyone said, we need, we want access. There was no logging, just an API key because it was just a beta or an alpha. And they said, oh, we want access." aria-label="回原文"></button>。

> 【背景】转写稿中嘉宾将「凭借直觉编码」说成了 vibe coded,这是科技圈流行词,指高度依赖 AI 辅助、凭感觉快速生成代码的开发方式。

当团队带着重写的新版本重新联系客户时,原本约定 15 分钟的通话全部延长到了 25 到 30 分钟,每一个客户都在追问:「我的 API key 呢?在哪里?」这个瞬间,Ivan 确信他们真正踩中了市场的痛点 <button class="pd-ts" data-t="10:21" data-who="Ivan Burazin" data-en="and we set up these calls and we gave it to, we just sent it to everyone. And all the calls went long, every single one. They were 15 minute calls and they all went to like 25, 30 minutes or whatnot." aria-label="回原文"></button>。

## 智能体需要的「可组合计算机」

Daytona 如今给自己的定位是「面向智能体的可组合计算机」。为什么不用「沙箱」这个词?因为「沙箱」容易让人误解为仅仅是个临时测试环境 <button class="pd-ts" data-t="05:29" data-who="Ivan Burazin" data-en="and output. Whereas what Daytona is today is essentially composable computers for agents. It is, the market calls them sandboxes, which can be misleading." aria-label="回原文"></button>。

Ivan 认为,智能体就像人类一样,需要不同配置的计算机来完成不同任务。就像他的妻子是建筑师,需要一台带 3D 显卡的 Windows 电脑来做渲染;智能体在执行各类任务时,也需要动态调整 CPU、内存或挂载 GPU 的能力。更重要的是,智能体不希望自己的「电脑」在工作还没完成时被关闭,它们需要能像人类合上笔记本盖子一样暂停,再打开时恢复原状(即有状态的快照机制)<button class="pd-ts" data-t="12:41" data-who="Ivan Burazin" data-en="And the other thing is they're not meant to last forever. So most of them are preemptible like they can there's a time that they can live. And so our thought was when we're going into this is agents will be like humans in" aria-label="回原文"></button>。

> 【背景】为了满足智能体对速度和持久状态的苛刻要求,Daytona 选择了直接运行在裸金属(未安装虚拟化层的纯物理服务器)上,而不是像大多数提供商那样套用虚拟机或 firecracker(一种轻量级虚拟化技术),从而获得了极快的数据读写速度和极低的网络延迟 <button class="pd-ts" data-t="13:54" data-who="Ivan Burazin" data-en="super fast and you see this on benchmarks is we essentially, we run on bare metal. We have our own scheduler." aria-label="回原文"></button>。

## 两种截然不同的算力负载

随着业务爆发(主持人提到 Daytona 报告了惊人的 74% 环比增长),Daytona 发现客户的工作负载分化成了截然不同的两类 <button class="pd-ts" data-t="06:21" data-who="Ivan Burazin" data-en="The market is exploding, right? Like you have been reporting 74% month-to-month growth and it also, it's just been going for a while." aria-label="回原文"></button>:

1. **后台智能体或长时间运行智能体**:例如 Cognition、Lovable 或 Harvey。它们的使用模式与人类类似,呈现「跟随太阳」的规律:中午负载最高,午夜最低,周末下降。这属于正常的波动。
2. **RL 与评估**:主要用于强化学习训练或模型评估。这类负载的使用模式呈现「方块状」——一旦启动,就直接跑到 100% 满载,然后突然停止。而且研究员们往往在午夜睡前启动任务,这与正常的日间波动截然不同 <button class="pd-ts" data-t="18:33" data-who="Ivan Burazin" data-en="So we basically split it up into two types of workloads in Daytona. One is what we call background agents or long running agents. And" aria-label="回原文"></button>。

这种极其突发的尖峰式负载给计算提供商带来了前所未有的挑战。Daytona 的平均利用率只有 15%,但峰值会瞬间冲到 90%。通过举办 Compute Conference(计算大会),Ivan 发现整个 AI 基础设施圈——从 Neon 的 Nikita 到 Parallel 的 Parag——都在被这种不可预测的尖峰负载折磨 <button class="pd-ts" data-t="21:33" data-who="Ivan Burazin" data-en="Yeah, absolutely. So do you want to lock them into commits? Yeah, we do." aria-label="回原文"></button>。

## 竞争策略:速度与易用性

在基准测试中,Daytona 的表现相当亮眼。启动单个沙箱算上网络延迟仅需 60 毫秒;如果同时并发启动 50,000 个沙箱,大约需要 75 秒(其他公开数据显示竞品可能需要长达 30 分钟)<button class="pd-ts" data-t="16:36" data-who="Ivan Burazin" data-en="That is one. But if you want to spin up 50,000 at once, we are now at about 75 seconds. So it takes about 75 seconds" aria-label="回原文"></button>。

但 Ivan 坦言,速度和基准测试只是入场券。在 RL 训练等场景中,他们真正打败的是[[托管型 Kubernetes|托管型 Kubernetes]](如 EKS 或 GKS)。Kubernetes 的交互接口太复杂,而 Daytona 提供了类似 Twilio 或 Stripe(两者均以开发者体验极佳著称)的简单 API 和 SDK。并且,Daytona 沙箱允许动态调整大小,几乎不会发生内存溢出,甚至支持在 Docker 容器里再嵌套运行 K3S(一种轻量级 Kubernetes),这解锁了大量在其他提供商上无法完成的复杂工作负载 <button class="pd-ts" data-t="28:04" data-who="Ivan Burazin" data-en="or should I say, let's take a step back. What we are competing against in that environment is essentially managed Kubernetes. So EKS, GKS, whatever." aria-label="回原文"></button>。

## 押注「计算机使用」

本期最重磅的信息之一是 Daytona 秘密押注了 computer use([[计算机使用|计算机使用]])。这源于一个庞大的市场痛点:全球约有一亿知识工作者,其薪水总额高达十万亿美金。其中很大一部分工作被锁死在 Windows 的传统应用程序里,没人愿意重写这些老旧系统 <button class="pd-ts" data-t="33:09" data-who="Ivan Burazin" data-en="But if we look at knowledge work in general, there's about 100 million knowledge workers in the US, about a billion in the world," aria-label="回原文"></button>。

> 【背景】转写稿中嘉宾多次提及 RPA(机器人流程自动化)和 OOM(Out Of Memory,内存耗尽)。RPA 指用软件模拟人类操作老旧系统;OOM 指程序因内存不足而崩溃。

主持人分享了自己用 Mac mini 虚拟沙箱做董事会报告的经历:即使接入了各种现代化的数据库,系统依然提示「缺失数据」。最后只能让智能体去模拟人类操作,登录网站、点击导出数据,才能真正端到端完成任务 <button class="pd-ts" data-t="35:40" data-who="Ivan Burazin" data-en="But if you want to lock it, like my own setup was basically the following. So I was doing a board deck recently, last month, whatever. And I'm like, okay, let's just let's just do automation." aria-label="回原文"></button>。

目前,想在云上启动一个 Windows 沙箱需要 3 到 5 分钟。Daytona 将其缩短到了秒级,并支持快照和分叉。相比之下,macOS 沙箱则面临苹果公司严格的授权限制:每台物理机只能运行两个虚拟机,且每 24 小时只能授权给一个不同用户。这意味着如果按秒收费,机器就会闲置一整天。Ivan 直言苹果公司此举是在自断财路 <button class="pd-ts" data-t="33:36" data-who="Ivan Burazin" data-en="So in the U.S. it's about 25 trillion. And most of them, most of that work is actually still locked into legacy apps inside of Windows," aria-label="回原文"></button>。

## 开源策略与组织文化

作为一家开源公司,Daytona 的新沙箱产品采用了 AGPL 3 许可证。这是一种巧妙的「防云白嫖」策略:它允许企业自由使用,但如果你想用它构建竞争产品,就必须同样开源你的代码。虽然纯粹的「开源信徒」认为这不够彻底,但 Ivan 发现,开源代码反而促进了客户对云产品的消费——因为开发者可以直接把仓库扔给智能体,让 AI 获得最完整的上下文来理解 Daytona 是怎么运作的 <button class="pd-ts" data-t="48:38" data-who="Ivan Burazin" data-en="So in the new sandbox product, we did add an AGPL three, which is," aria-label="回原文"></button>。

在公司运营上,Ivan 是个彻头彻尾的拼命三郎。在 25 人的团队中,约有 13 人是与他合作超过 7 年的老战友。这种基于极高信任度的文化,造就了令人难以置信的客户响应速度。当客户在 Slack 上求助时,Daytona 的团队真的能在 5 分钟内拉起一个语音 Huddle(临时语音会议)解决问题。这种极致的响应速度成了他们赢得客户的关键差异化因素 <button class="pd-ts" data-t="57:28" data-who="Ivan Burazin" data-en="The thing that's unique about I don't know unique about us, but I would say unique about any successful serial founder is that you're able to" aria-label="回原文"></button>。

## 看见未来:被重塑的 Git 与 CI

在访谈末尾,Ivan 分享了几个极其前瞻的洞察。首先是 Git 和 GitHub 的危机。目前大量客户正在构建编程智能体(如 Devin 的竞品),他们发现传统的 Git 流程太慢了,因为 Git 设计的初衷是给人类使用的「内循环之后」的产物。为了追求速度,甚至有客户把整个代码库塞进沙箱,定期全部打包成一个 JSON 文件传到 S3 上,自己搞了一套极其原始但飞快的版本控制 <button class="pd-ts" data-t="52:49" data-who="Ivan Burazin" data-en="What we saw from our customers was that they were all trying to figure out how to do versioning. Everyone is doing it in different ways. There were some really weird ways where people were doing that." aria-label="回原文"></button>。

其次是 CI(持续集成)的崩溃。随着智能体每天创建海量的代码提交,CI 系统已经变成了所有人的瓶颈。一家公司每天产生一千个提交,全在 CI 队列里排队等待。Daytona 的技术完全有能力替代传统的 CI Runner 机器 <button class="pd-ts" data-t="54:34" data-who="Ivan Burazin" data-en="Everyone's creating a bunch of PRs, like everyone. And then all that has to go through CI. And then that's the bottleneck." aria-label="回原文"></button>。

最后是对整个市场的预判。Semi Analysis(一家知名半导体分析机构)的 Dylan Patel 在他们的会议上指出,GPU 短缺之后,内存和 CPU 很快将成为下一个算力瓶颈 <button class="pd-ts" data-t="46:25" data-who="Ivan Burazin" data-en="And so how because that market is essentially quote unquote infinite, you will get to the point and Dylan Patel was at the conference talking about from Semi Analysis that talks usually about GPUs," aria-label="回原文"></button>。Ivan 认为,在这个增速疯狂的市场里,**预先囤积 CPU 将成为未来占领市场的关键战术**。最终,将会诞生一个专门为智能体构建的超级云,它包含沙箱、网络搜索和专为 AI 设计的数据库——这就是 Daytona 想要成为的那个存在 <button class="pd-ts" data-t="69:38" data-who="Ivan Burazin" data-en="So there will be a cloud built out specifically for agents. And so that cloud will have sandboxes and it will have web search and it'll have databases like SQLite or Neon or whatever," aria-label="回原文"></button>。

<div class="pd-sec">全部金句 <span>5 条(中英对照,已过机器闸门)</span></div>

> 但如果你想一次启动 50,000 个,我们现在大约需要 75 秒。  
> *But if you want to spin up 50,000 at once, we are now at about 75 seconds.*  
> —— Ivan Burazin · [16:36] ^q1

> 我们以前从未有过这种不可预测的工作负载,无论是在人类计算机还是人类  
> *unpredictable workloads that we've never had before in human computer or human*  
> —— Ivan Burazin · [23:29] ^q2

> PC 市场大约等于云市场。  
> *The PC market is about equal to the cloud market.*  
> —— Ivan Burazin · [45:42] ^q3

> 市场正在给那些转售 token 的 SaaS 供应商增加溢价。  
> *the market is adding premium to SaaS vendors that are reselling tokens.*  
> —— Ivan Burazin · [61:44] ^q4

> 整个基础设施市场每个月以 40% 左右的速度增长。  
> *The entire infrastructure market is growing 40% plus or minus month over month.*  
> —— Ivan Burazin · [67:14] ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-22-latent-space-gray-swan|让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-07-08-latent-space-modal|从避战大模型到押注智能体：Modal 的推理基础设施进化史]] —— 同概念:智能体 (agent)、沙箱 (sandbox)
- [[2026-06-24-latent-space-databricks|Databricks 的智能体平台与数据库「圣杯」：Reynold Xin 与 Matei Zaharia 的技术蓝图]] —— 同公司:Neon · 同概念:智能体 (agent)

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|把 Go-to-Market 当产品做：Vercel COO 谈用 AI 重构销售组织]] —— 同概念:智能体 (agent)
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」]] —— 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|1500 亿美元的隐形 AI 公司创始人：恐惧源于无知，最好的工作是独自安静地完成]] —— 同概念:智能体 (agent)

</div>
</div>

*本集关键词:智能体基础设施 · 计算沙箱 · 突发负载 · RPA与计算机使用 · 开源策略*

<script>
(function(){
  function move(){
    var side=document.querySelector('.right.sidebar'); if(!side) return;
    var box=null;
    var all=document.querySelectorAll('article blockquote[data-callout]');
    for(var i=0;i<all.length;i++){
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
  function adopt(){
    var acts=document.querySelector('.pd-top .pd-acts'); if(!acts) return;
    ['.search','.darkmode','.readermode'].forEach(function(sel){
      var el=document.querySelector('#quartz-body > .sidebar '+sel) || document.querySelector('.sidebar '+sel);
      if(el && el.parentElement!==acts) acts.appendChild(el);
    });
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
  function all(){ topbar(); move(); adopt(); graph(); }
  document.addEventListener('nav', all);
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
