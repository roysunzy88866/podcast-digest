---
title: 重造互联网：DocsNet 与一场隐私保卫战
podcast: The a16z Show
date: 2026-10-05
source_url: undefined
duration: "45:11"
type: episode
cover: "#64748b"
description: 互联网基础设施先驱 Barrett Lyon 讲述他如何从底层重建网络：无中心服务器的加密点对点通信、自有硬件、全 AI 运维的 26 个站点，以及为什么 VPN 不够。
host: "[[Barrett Lyon]]"
cohosts: ["[[Joel de la Garza]]"]
companies: ["[[DocsNet]]", "[[Prolexic]]"]
concepts: ["[[VPN]]", "[[点对点通信]]", "[[运营商级 NAT]]", "[[智能体]]", "[[广告追踪]]", "[[LLM]]", "[[数据中心]]", "[[审查]]"]
category: 创业与行业
tags:
  - 创业与行业
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-01-a16z-rebuilding-the-internet-for-privacy-barr#post","headline":"重造互联网：DocsNet 与一场隐私保卫战","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-01-a16z-rebuilding-the-internet-for-privacy-barr","mainEntityOfPage":"https://talk.solomind.cc/2026-10-01-a16z-rebuilding-the-internet-for-privacy-barr","description":"互联网基础设施先驱 Barrett Lyon 讲述他如何从底层重建网络：无中心服务器的加密点对点通信、自有硬件、全 AI 运维的 26 个站点，以及为什么 VPN 不够。","datePublished":"2026-10-05","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Barrett Lyon"},{"@type":"Person","name":"Joel de la Garza"},{"@type":"Organization","name":"DocsNet"},{"@type":"Organization","name":"Prolexic"},{"@type":"Thing","name":"VPN"},{"@type":"Thing","name":"点对点通信 (P2P)"},{"@type":"Thing","name":"运营商级 NAT (carrier grade NAT)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"广告追踪 (tracking)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"数据中心 (data center)"},{"@type":"Thing","name":"审查 (censorship)"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"重造互联网：DocsNet 与一场隐私保卫战","item":"https://talk.solomind.cc/2026-10-01-a16z-rebuilding-the-internet-for-privacy-barr"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>重造互联网：DocsNet 与一场隐私保卫战</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 重造互联网：DocsNet 与一场隐私保卫战

<div class="pd-byl"><b>Barrett Lyon</b> · Prolexic 创办者 · 2026-10-05</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-01-a16z-rebuilding-the-internet-for-privacy-barr.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">互联网在协议设计方面其实已经有点停滞了，几乎没有什么新东西，一切都是在其之上构建的。</div><div class="a">— Barrett Lyon <button class="pd-ts" data-t="07:45" data-who="Barrett Lyon" data-en="The internet has really kind of stagnated a bit from protocol design. There's like not a lot of new stuff. All of it's built on top." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Barrett Lyon]] · [[Joel de la Garza]]
>
> **公司** [[DocsNet]] · [[Prolexic]]
>
> **概念** [[VPN]] · [[点对点通信]] · [[运营商级 NAT]] · [[智能体]] · [[广告追踪]] · [[LLM]] · [[数据中心]] · [[审查]]

这一集是 a16z 的 [[Joel de la Garza|Joel De La Garza]] 和互联网基础设施老兵 [[Barrett Lyon|Barrett Lyon]] 的对谈。

Barrett 是 DDoS 防御公司 [[Prolexic|Prolexic]]（后来被 Akamai 收购并保留名字）的创办者，还在纽约现代艺术博物馆 MoMA 留下过永久收藏的网络可视化艺术品。

这次聊的是他的新公司 [[DocsNet|DocsNet]]——一套从底层重造的互联网替代网络。他的判断很直接：

互联网在协议设计上已经停滞了，「几乎没有什么新东西，一切都是在其之上构建的」，而[[审查|审查]]蔓延和隐私被侵蚀，让他决定造一个「从底层设计就旨在保护人们免受广告商、追踪器、恶意软件以及试图了解你行踪的外国对手侵害」的替代网络 <button class="pd-ts" data-t="07:53" data-who="Barrett Lyon" data-en="So there's that. And then just noticing the shift of censorship and people's privacy being eroded and all of this kind of thing kind of And then the uprise of VPN made it really interesting to make kind of an alternative network that kind of is designed from the ground up to protect people from advertisers, trackers, malware, and foreign adversaries trying to learn about what you're doing." aria-label="回原文"></button>。

## 为什么 VPN 不够

Barrett 认为市面上大部分 [[VPN|VPN]] 其实只是「入口和出口点」：

租一台服务器装上软件，你加密连过去，请求从那个节点发出，以此绕开「IP 地址当身份」的问题 <button class="pd-ts" data-t="12:54" data-who="Barrett Lyon" data-en="Maybe we could double click a bit on sort of your thoughts around it because that's the interesting part. So a lot of the VPNs, I would say, are just entry and exit points." aria-label="回原文"></button>。

但这里有个阴暗面——那些服务器到底是谁的？「是大品牌 VPN 自己拥有的，还是租来的？如果是租的，又是从谁那里租的？

那些人拿数据在做什么？」<button class="pd-ts" data-t="20:20" data-who="Barrett Lyon" data-en="Oh, no logs, no this. And the question is like, okay, well, whose servers are those? Are they owned by big brand VPN or are they leased?" aria-label="回原文"></button> 很多 VPN 连归属方都不公开，他的态度是：不放心把数据交给一家不谈谁拥有它的公司。

更让他警惕的是情报机构直接下场造假：

FBI 曾自己做一个加密通讯应用，专门推销给有组织犯罪团伙，号称安全、用户极少，结果这批人全被起诉，「我想现在大部分人都在监狱里」<button class="pd-ts" data-t="17:52" data-who="Barrett Lyon" data-en="And without bashing on anyone specific, I think for me the most illustrative story was in the news, there was actually an issue where a bunch of organized criminals were arrested across the world." aria-label="回原文"></button>。

他的结论是：如果产品是免费的，「那你就是产品」。

## DocsNet 是怎么做的

DocsNet 的核心不是另一个 VPN，而是一整个网内生态系统。因为整张网由他们控制，他们做了一个「平行互联网」：

网内有 196 个互联网上不存在的域名，用户可以注册域名、租用 IP 地址或网状地址、创建策略，「全都在几毫秒之内完成」<button class="pd-ts" data-t="13:57" data-who="Barrett Lyon" data-en="And then inside, we can create either, you can call it a walled garden or a parallel internet or whatever you want to call it, but we built an entire mesh network." aria-label="回原文"></button>。

通信层面做的是真正的点对点：注册账号只需做一个证明人类的小谜题，拿到一个可随时更换、可删除重建的令牌；

加好友时 App 在后台完成一次密码学交换（Barrett 特意把这层抽象掉，他的经验是「如果你告诉人们这是 PKI，那它就行不通」），两部手机就解锁了直接对话的能力 <button class="pd-ts" data-t="15:10" data-who="Barrett Lyon" data-en="And so what you're saying is you've actually built this sort of like transient way for folks to connect and chat without there being any record. Yeah, so you create your account." aria-label="回原文"></button>。

加密是他自有的方案，不是标准 PKI，「连 PKI 都不算，这是私钥，不是公钥」，且做到后量子安全。

效果是：没有中间人、中间没有服务器，「你的手机就成了你朋友的服务器」，可以点对点互发 20 GB 的文件，带三四层加密 <button class="pd-ts" data-t="16:46" data-who="Barrett Lyon" data-en="It's gone. So it's really no middle man, no server in the middle, and your phone becomes a server to your friend. And it's fast." aria-label="回原文"></button>。

顺带解决了一个老互联网的顽疾——[[运营商级 NAT|运营商级 NAT]]（运营商让大量用户共享地址，导致设备无法被直接连到）：

他说这是「整个互联网最大的污点之一，正在摧毁应用程序做出真正酷的东西的能力」，而消除它正是 DocsNet 的目标之一 <button class="pd-ts" data-t="09:31" data-who="Barrett Lyon" data-en="But now we have really high powerful Wi-Fi on the edge, incredible opportunities to create better mesh protocols. And better P2P and kind of really one of the biggest stains of the entire internet is carrier grade NAT." aria-label="回原文"></button>。

## 从软件到线路，全部自持

做隐私网络最要命的一课是：**如果不是你的设备，你就无法制定政策。

** 租来的服务器、机柜之外的运营商互联，每层都有自己的数据和政策，租用「裸金属即服务」的阴暗面让他最终决定自建。

所以 DocsNet 的技术栈从软件一路拥有到线路，连负责路由的 AI 组件都跑在自己的裸金属上 <button class="pd-ts" data-t="21:14" data-who="Barrett Lyon" data-en="You know, the bare metal as a service kind of creepy underbelly. And this is like one big difference with I think a lot of folks, right, is that you own the full stack from like software to wire." aria-label="回原文"></button>。

公司总部在美国，另设一家瑞士公司处理全部欧洲业务——他认为公司治理和司法辖区分离在这类事情上是真实重要的。

最惊人的是规模与人数的反差：

全球约 26 个站点、带冗余路由，全部团队只有 12 个人，没有网络管理员、没有系统管理员——「这些全都由 AI 完成，而且它实际上运转正常」<button class="pd-ts" data-t="22:12" data-who="Barrett Lyon" data-en="Okay. And we have no network administrator, no sysadmin. That's all done by AI." aria-label="回原文"></button>。

AI 运行在自己的安全环境里，推理数据不外流给大厂；从安全角度看这还顺手削掉了一大风险面：

公司里没有一千个能碰网络的员工，「单就公司架构而言，影响半径非常小」——要知道最具破坏性的网络攻击往往都带内部威胁成分 <button class="pd-ts" data-t="22:33" data-who="Barrett Lyon" data-en="The nice thing though, if you think about our footprint of like who's involved, you know, we don't have a thousand employees with access to this network. Yeah. Me." aria-label="回原文"></button>。

## 数十年的追踪，加上廉价的 AI

DocsNet 的另一半动机是[[广告追踪|广告追踪]]。Barrett 指出你所有 App 里都有追踪器——WhatsApp 有、连 Apple 的「遥测」某种程度上也是追踪器，而且屏蔽它们应用照常能用 <button class="pd-ts" data-t="28:42" data-who="Barrett Lyon" data-en="And I think you're seeing now where intelligence agencies are actually using data brokers and using the techniques of ad agencies. Yeah, so, like, all your apps have these trackers in them." aria-label="回原文"></button>。

面对「我在 Target 买了条内裤又怎样」的质疑，他的回答是：

不是那一条的问题，「是所有加在一起」——把每个应用、每个网站的追踪聚合起来，就能推断你是不是喝咖啡、几点起床、收入多少、是不是在为孩子的出生或离婚做准备，「他们很可能比你的配偶更早知道这些事件」<button class="pd-ts" data-t="29:45" data-who="Barrett Lyon" data-en="And then when you aggregate all those data points together, you could know if you're a coffee drinker, what time you wake up in the morning, what your income is, where you shop." aria-label="回原文"></button>。

而拐点在于：规模化「投币式智能」诞生了。

「你可以把所有那些数据直接倒进一个 [[LLM|LLM]] 里，说，告诉我关于这个人的情况」，你会得到一个答案 <button class="pd-ts" data-t="31:01" data-who="Barrett Lyon" data-en="There's more telemetry, there's more data, everything you do is being tracked, and you can combine that with intelligence, right, to actually arrive at some pretty scary conclusions." aria-label="回原文"></button>。

跨平台协调的舆论行动他已经观察到苗头——这也是他对当下「[[数据中心|数据中心]]喝水」等说法极度反感的原因：

他过去几个月跑了二十多个数据中心，没见过一个抗议者，弗吉尼亚那个大型园区外面只有田野里的兔子，而数据中心所在县是全美最富裕的县之一。

在他看来公众舆论正被某些利益集团刻意操纵，而「如果我们在削弱这些基础设施，那我们就是在做糟糕的决定，而且是根据 Instagram 帖子在做」<button class="pd-ts" data-t="27:45" data-who="Barrett Lyon" data-en="And to me... The future of our tech is needing to build this infrastructure now. And if we're crippling it, then we're making bad decisions." aria-label="回原文"></button>。

## 本集带走

- **VPN 的根本缺陷在信任链**：多数 VPN 只是租来的出入口，服务器归属、数据去向全不透明；免费的更要警惕——你就是产品。
- **控制硬件才有政策权**：DocsNet 从软件自持到线路、26 个站点 12 个人全 AI 运维，顺带把内部威胁的影响半径压到最小。
- **点对点可行且体验更好**：证书式好友互信 + 网内地址，手机互为服务器，20 GB 文件点对点直传、多层加密、无中间服务器。
- **追踪的威胁是聚合而非单条**：单条数据无害，全量聚合后可推断重大人生事件；廉价 LLM 让这种推断人人可得。
- **审查不该让网络层背锅**：IP 地址不是驾照，年龄等身份限制应该在协议栈的其他位置解决，而不是砸在网络上。

> 【背景】本集为 a16z Podcast 节目，转写稿未标注说话人，正文时间戳的说话人归属系依据对话内容判断。

<div class="pd-sec pd-sec-q">全部金句 <span>13 条</span></div>

> <span class="qz">互联网在协议设计方面其实已经有点停滞了，几乎没有什么新东西，一切都是在其之上构建的。</span>  
> *The internet has really kind of stagnated a bit from protocol design. There's like not a lot of new stuff. All of it's built on top.*  
> <span class="qm">—— Barrett Lyon · [07:45]</span> ^q1

> <span class="qz">运营商级 NAT 是整个互联网最大的污点之一，它正在摧毁应用程序做出真正酷的东西的能力。</span>  
> *One of the biggest stains of the entire internet is carrier grade NAT. It's just destroying applications ability to do really cool stuff.*  
> <span class="qm">—— Barrett Lyon · [09:35]</span> ^q2

> <span class="qz">很多时候他们是在要求网络去解决一个身份问题，而网络并不做身份这件事。</span>  
> *A lot of times they're asking the network to solve an identity problem, and the network doesn't do identity.*  
> <span class="qm">—— Barrett Lyon · [10:18]</span> ^q3

> <span class="qz">一个 IP 地址不是你的驾照。</span>  
> *An IP address is not your driver's license.*  
> <span class="qm">—— Barrett Lyon · [10:28]</span> ^q4

> <span class="qz">我们建了一整个网状网络，196 个互联网上不存在的域名。</span>  
> *We built an entire mesh network. 196 different domains that don't exist on the internet.*  
> <span class="qm">—— Barrett Lyon · [13:55]</span> ^q5

> <span class="qz">我觉得 PKI 的关键教训其实是：如果你告诉人们这是 PKI，那它就行不通。</span>  
> *I think the key lesson of PKI was actually, if you tell people it's PKI, it's not going to work.*  
> <span class="qm">—— Joel De La Garza · [15:39]</span> ^q6

> <span class="qz">所有那些应用都把自己伪装成你在给某个人发送东西，但你实际上是先把东西发给一个服务器。</span>  
> *All of those applications disguise themselves as you sending something to somebody else. But you're really sending something to a server.*  
> <span class="qm">—— Barrett Lyon · [16:16]</span> ^q7

> <span class="qz">真的没有中间人，中间没有服务器，你的手机就成了你朋友的服务器。</span>  
> *It's really no middle man, no server in the middle, and your phone becomes a server to your friend.*  
> <span class="qm">—— Barrett Lyon · [16:46]</span> ^q8

> <span class="qz">如果它是免费的，那就没有什么是免费的；如果你没有为它付费，那你就是产品。</span>  
> *Well, if it's free, there's nothing free. And if you're not paying for it, you are the product.*  
> <span class="qm">—— Barrett Lyon · [18:30]</span> ^q9

> <span class="qz">如果不是你的设备，你就无法制定政策。</span>  
> *If it's not your equipment, you can't set policy.*  
> <span class="qm">—— Barrett Lyon · [20:52]</span> ^q10

> <span class="qz">当你把所有这些数据点聚合在一起，就能知道你是不是喝咖啡的人、你早上几点起床、你的收入是多少、你在哪里购物。</span>  
> *When you aggregate all those data points together, you could know if you're a coffee drinker, what time you wake up in the morning, what your income is, where you shop.*  
> <span class="qm">—— Barrett Lyon · [29:34]</span> ^q11

> <span class="qz">从核心上讲，就像是试图重现互联网过去的那种氛围，然后看看我们能把它带向何方。</span>  
> *At the core, it's like trying to recreate that vibe the internet used to have and then see where we could take it.*  
> <span class="qm">—— Barrett Lyon · [31:32]</span> ^q12

> <span class="qz">互联网成功是因为它是免费的。</span>  
> *The internet succeeded because it was free.*  
> <span class="qm">—— Joel De La Garza · [31:49]</span> ^q13

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-09-19-twentyvc-20vc-anti-data-centres-is-a-chinese-psyo|推理才是赚钱的生意：Positron 联合创始人谈内存墙、缓存暴利与「守住前沿」之争]]<span class="pd-rz">同概念:数据中心 (data center)、智能体 (agent)、推理 (inference)</span>
- [[2026-09-30-a16z-the-1-trillion-ai-buildout-state-of-mark|25张图表看懂AI是不是泡沫：a16z年度市场全景]]<span class="pd-rz">同概念:数据中心 (data center)、智能体 (agent)、推理 (inference)</span>
- [[2026-10-03-twentyvc-20vc-the-future-of-datacentres-what-you|卖数据中心、卖 GPU、再卖 token:Crusoe 的 AI 算力生意经]]<span class="pd-rz">同概念:数据中心 (data center)、智能体 (agent)、推理 (inference)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-18-a16z-how-do-you-defend-against-ai-that-can-ha|当签名已死：AI智能体如何击穿传统网络安全]]<span class="pd-rz">同嘉宾:Joel De La Garza · 同概念:智能体 (agent)、推理 (inference)</span>
- [[2026-10-01-practicalai-open-models-and-the-future-of-physical-a|NVIDIA 开放模型与物理 AI:世界模型为什么是关键拼图]]<span class="pd-rz">同概念:LLM、智能体 (agent)、推理 (inference)</span>
- [[2025-09-07-lennys-how-ai-is-reshaping-the-product-role|PM的生存法则：AI时代别当瓶颈，去抢活干]]<span class="pd-rz">同概念:LLM、智能体 (agent)</span>

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
