---
title: AI能破解密码学吗？三位专家说：先别慌
podcast: The a16z Show
date: 2026-10-13
source_url: undefined
duration: "42:01"
type: episode
cover: "#64748b"
description: Stanford教授Dan Bonnet与a16z两位研究者拆解AI威胁密码学的恐慌：目前什么都没变，缺的是信息。
host: "[[Liz Harkaby]]"
cohosts: ["[[Dan Bonnet]]", "[[Eddie Lazarin]]", "[[Justin Baylor]]"]
companies: ["[[OpenAI]]", "[[A16z Crypto]]"]
concepts: ["[[密码学]]", "[[后量子密码学]]", "[[格密码学]]", "[[椭圆曲线密码学]]", "[[基于哈希的签名]]", "[[量子计算]]", "[[Frontier Labs]]", "[[沙箱]]", "[[漏洞]]"]
category: AI 安全
tags:
  - AI 安全
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-13-a16z-can-ai-break-cryptography-what-the-exper#post","headline":"AI能破解密码学吗？三位专家说：先别慌","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-13-a16z-can-ai-break-cryptography-what-the-exper","mainEntityOfPage":"https://talk.solomind.cc/2026-10-13-a16z-can-ai-break-cryptography-what-the-exper","description":"Stanford教授Dan Bonnet与a16z两位研究者拆解AI威胁密码学的恐慌：目前什么都没变，缺的是信息。","datePublished":"2026-10-13","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Liz Harkaby"},{"@type":"Person","name":"Dan Bonnet"},{"@type":"Person","name":"Eddie Lazarin"},{"@type":"Person","name":"Justin Baylor"},{"@type":"Organization","name":"OpenAI"},{"@type":"Organization","name":"A16z Crypto"},{"@type":"Thing","name":"密码学 (cryptography)"},{"@type":"Thing","name":"后量子密码学 (post-quantum cryptography)"},{"@type":"Thing","name":"格密码学 (lattice)"},{"@type":"Thing","name":"椭圆曲线密码学 (elliptic curve cryptography)"},{"@type":"Thing","name":"基于哈希的签名 (hash-based signatures)"},{"@type":"Thing","name":"量子计算 (quantum computing)"},{"@type":"Thing","name":"Frontier Labs"},{"@type":"Thing","name":"沙箱 (sandboxes)"},{"@type":"Thing","name":"漏洞 (bugs)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"AI能破解密码学吗？三位专家说：先别慌","item":"https://talk.solomind.cc/2026-10-13-a16z-can-ai-break-cryptography-what-the-exper"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI能破解密码学吗？三位专家说：先别慌</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI能破解密码学吗？三位专家说：先别慌

<div class="pd-byl"><b>Dan Bonnet</b> · Stanford密码学教授 · 2026-10-13</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-13-a16z-can-ai-break-cryptography-what-the-exper.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">当我看完这份清单时，留在我脑海里的印象是：哇，这是数学和计算机科学领域令人难以置信的进展，但这里没有任何关于密码学的问题。</div><div class="a">— Dan Bonnet <button class="pd-ts" data-t="03:37" data-who="Dan Bonnet" data-en="And as I finished the list, the thing that kind of stuck in my mind is that, wow, this is incredible progress in mathematics, in computer science, but there are no questions here on cryptography." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Liz Harkaby]] · [[Dan Bonnet]] · [[Eddie Lazarin]] · [[Justin Baylor]]
>
> **公司** [[OpenAI]] · [[A16z Crypto]]
>
> **概念** [[密码学]] · [[后量子密码学]] · [[格密码学]] · [[椭圆曲线密码学]] · [[基于哈希的签名]] · [[量子计算]] · [[Frontier Labs]] · [[沙箱]] · [[漏洞]]

[[OpenAI|OpenAI]]最近放出的约700篇论文让数学界为之一振，也让加密圈炸了锅。

安全研究员Justin Drake发推警告区块链行业进入 bunker mode,担心AI会比[[量子计算|量子计算]]机更早破解椭圆曲线密码。

a16z Crypto的Liz请来Stanford[[密码学|密码学]]教授[[Dan Bonnet|Dan Bonnet]]、a16z普通合伙人[[Eddie Lazarin|Eddie Lazarin]]和研究合伙人Justin Thaler,把事实和猜测分开。Dan的第一句话就是:「大家冷静，别慌。」

## 恐慌从哪来？700篇论文里没有一篇关于密码学

OpenAI这批论文覆盖数百个话题，很多与密码学相邻——用的数学推理技巧是相通的。

但Dan逐条看完后发现问题:**700篇里没有一篇涉及密码学**，连理论密码学都没有 <button class="pd-ts" data-t="03:48" data-who="Dan" data-en="And as I finished the list, the thing that kind of stuck in my mind is that, wow, this is incredible progress in mathematics, in computer science, but there are no questions here on cryptography." aria-label="回原文"></button>。

这有两种解释。

要么AI模型试过、破解不了——这本身就是好消息，说明密码学格外结实；要么模型有进展但选择不公开——这就值得警惕。

Justin说这种缺席有点显眼<button class="pd-ts" data-t="05:23" data-who="Justin" data-en="So their absence is a little bit conspicuous, right, is what Dan is saying. And it's something that... You know, you have to consider the explanations for." aria-label="回原文"></button>。

关键在于：我们并不知道[[Frontier Labs|前沿实验室]]有没有认真试过。

Dan呼吁实验室公开说明：用最强的模型攻击过哪些标准密码算法，结果如何。

## 密码学的地基，本来就是假设

现代密码学不是靠证明安全的，而是建立在某些数学问题很难算的假设上。为什么不能证明？

因为这牵扯到计算机科学的著名难题P versus NP,人类离解决它还很远 <button class="pd-ts" data-t="06:43" data-who="Dan" data-en="We have to assume that certain problems are hard. The reason we can't prove that those problems are hard is because that's related to a famous open problem in computer science called the P versus NP problem." aria-label="回原文"></button>。

而这种失败恰恰是信心的来源——「**人们试图破解它们却失败了，这给了我们更多信心**」<button class="pd-ts" data-t="08:24" data-who="Dan" data-en="This is actually how we gain confidence in our assumptions. The fact that people try to break them and fail gives us more confidence. So in fact, I would say this would be an extremely positive development" aria-label="回原文"></button>。

还有一层：专家们普遍相信这些问题根本没有高效算法，不是算法存在但人类不够聪明。

如果算法根本不存在，AI再聪明也找不到不存在的东西 <button class="pd-ts" data-t="17:12" data-who="Justin" data-en="And so if there is not one, it doesn't matter how smart the AI is, it cannot find the non-existent algorithm, right? And so, you know, the worry is, you know, that just our belief is totally wrong." aria-label="回原文"></button>。

## AI和量子威胁不是一回事，但AI威胁面更广

很多人把两件事混在一起。量子计算机威胁的主要是椭圆曲线和RSA这类系统；

而**AI理论上可以攻击所有密码方案**，包括本用来应对量子威胁的后量子密码 <button class="pd-ts" data-t="22:48" data-who="Dan" data-en="You know, I will add to that, though, that the quantum threat is really only about these elliptic curve type systems and RSA and such. The AI threat, in some sense, is broader in that it could actually also look at our post-quantum system." aria-label="回原文"></button>。

好消息是，迁移已经开始。NIST已在标准化多种后量子公钥系统，iMessage、Signal等已完成或正在混合部署。

今天很多网络连接同时用椭圆曲线和格密码加密，破掉一个，另一个还在 <button class="pd-ts" data-t="39:25" data-who="Dan" data-en="They are actually using agile cryptography. They're encrypted using elliptic curves and lattices at the same time. If you break elliptic curves, it doesn't matter because it's also encrypted under a lattice base system." aria-label="回原文"></button>。即使最坏情况发生，也有备份可以切换。

## 真正缺的是时间，而AI恰好能补上

过去一个新密码系统要等大约10年，让全世界专家反复攻击、都攻不破，才敢大规模部署 <button class="pd-ts" data-t="12:53" data-who="Dan" data-en="You're totally right. In the past, when someone would make an assumption and build a system based on it, we'd have to wait like 10 years before that system could be deployed to gain confidence, to give people enough time to analyze the assumption." aria-label="回原文"></button>。

现在这个过程可以被压缩。让最强的模型跑一个月猛攻一个新方案，攻不破，信心可能比传统十年的检验还强。

Eddie的想象更激进：实验室可以说，我们花了5000万美元、放了最强的模型去攻，攻不破——「我们比以往任何时候都更有信心」<button class="pd-ts" data-t="14:26" data-who="Eddie" data-en="So we actually have the prospect to have more confidence in our security than ever before. It's just there's a little bit of a gap in how that information is being created and shared." aria-label="回原文"></button>。

## 普通人该做什么？什么都不用做

Dan的答案很干脆：世界今天和一周前、一年前完全一样，**没有任何具体的新信息表明某个密码假设被削弱了** <button class="pd-ts" data-t="15:22" data-who="Dan" data-en="But until we have more information, nothing has changed. So please don't panic. You know, keep calm." aria-label="回原文"></button>。

继续正常使用，别恐慌。

而且Justin Drake列的那些bunker mode建议，其实都是大机构本该遵守的基本卫生习惯——Coinbase就出来回应说他们早就在做了。

对普通人来说，慌忙迁移资产反而更危险。

Vitalik Buterin在后续推文里也提到，他自己因迁移操作失误损失的个人资金，比所有黑客攻击加起来还多 <button class="pd-ts" data-t="18:03" data-who="Eddie" data-en="And then Vitalik Buterin followed up with a slightly more toned down tweet, but still speculating about better attacks that AI might find on cryptosystems. So yeah, in Vitalik's tweet, even mentioned that he himself has lost more personal funds in botched migrations than in all hacks, right?" aria-label="回原文"></button>。

眼下真正的现实风险仍然是软件[[漏洞|漏洞]]，而AI恰恰很擅长找漏洞——中长期看，这对防御更有利。

## 区块链圈的新争论：只用哈希，还是用格？

这场讨论重新点燃了区块链社区的路线之争。比特币和以太坊核心开发者倾向于只依赖哈希函数：

如果某个哈希被破，换一个就行，整个框架依然成立；而格密码一旦底层问题被破，整个体系崩塌。

而且区块链本来就要依赖哈希(比如Merkle树)，只用哈希就不增加新的安全假设 <button class="pd-ts" data-t="27:36" data-who="Dan" data-en="Yeah, the other argument that I hear a lot in the blockchain space is that, specifically in Bitcoin and Ethereum, is that the hash assumptions that we make are necessary for other parts of the blockchain to operate." aria-label="回原文"></button>。

但格密码有哈希给不了的能力：门限签名、密钥派生等高级功能。

Dan坦言，作为密码学家他更希望最终用格，因为「能发挥的空间大得多」<button class="pd-ts" data-t="31:49" data-who="Dan" data-en="I would be quite happy if we ended up using lattice-based schemes because that gives us much more room to play in and build interesting structures. But the hash-based schemes are much, much more constrained." aria-label="回原文"></button>。

Justin则提醒：

纯哈希方案往往要靠很复杂的递归证明，代码复杂度暴增，出漏洞的面也就更大，而这类系统的安全性本身研究得也不够透 <button class="pd-ts" data-t="29:31" data-who="Justin" data-en="The more prosaic issue is this is just very complicated. Right, to like prove you ran a snark verifier that itself verified a proof that verified a proof. And so the surface area for bugs just gets very large." aria-label="回原文"></button>。

## 对创业者：AI是安全行业的礼物

Eddie指出，**闭源安全模式实际上已死**——AI的反编译能力让靠隐藏代码保安全不再可行。

创业公司需要重新审视自己的安全假设，还要为AI智能体设计[[沙箱|沙箱]]和权限边界 <button class="pd-ts" data-t="34:42" data-who="Eddie" data-en="Because of our ability to decompile things. It's also the case that because of the agentic properties of AI systems, by agentic properties I mean, they can go on unbounded side quests, right, and do all kinds of random things in pursuit of a goal for you." aria-label="回原文"></button>。

Dan更进一步：任何要部署新软件的公司，现在都可以先让模型攻击一遍再上线。

软件质量会整体上升，「没有模型验证通过的东西就不该发布」<button class="pd-ts" data-t="36:21" data-who="Dan" data-en="Over time, as more and more software shops adopt this technology, I believe that software quality is going to go up. Crypto quality is going to go up because nothing will ship unless the model said that it's valid." aria-label="回原文"></button>。

有估算认为，同样一美元能买到的智能，一年内便宜了95%以上，而软件漏洞的数量是有限的——照这个趋势，世界整体安全状况是在变好，不是变坏 <button class="pd-ts" data-t="37:04" data-who="Eddie" data-en="99% cheaper for intellectual capability per dollar, right? If that's the case and you pair that with a frame we've said before, we talked about before, which is that the number of bugs in software is finite, right?" aria-label="回原文"></button>。

## 如果明天真的宣布椭圆曲线被破了呢？

答案是：迁移到格密码，这条路已经在走了。如果连格也破了，就标准化第三种方案。

Dan强调，实验室负责任的做法是先私下向行业和政府披露，制定更新计划，而不是直接公开攻击方法——这是安全行业熟悉的老流程 <button class="pd-ts" data-t="40:20" data-who="Eddie" data-en="Yeah, and maybe at the risk of stating the obvious, I have no doubt they would be prudent enough to do this the right way. It goes without saying, but the labs shouldn't go and share this, just like throw out a scheme to break elliptic curves." aria-label="回原文"></button>。

用Liz的话收尾：聊完之后，我平静多了。

## 本集带走

- OpenAI的700篇论文没有任何一篇涉及密码学破解，目前没有具体的新威胁信息，普通人无需行动。
如果AI全力攻击后也失败，信心反而更强。
- AI威胁比量子威胁覆盖面更广，但NIST已标准化多种后量子方案，混合加密已在部署，有备份可切换。
- 前沿实验室应该公开披露：是否用最强模型攻击过标准密码算法，结果如何——这是填补恐慌真空的关键。
- 长远看，AI找漏洞的能力对防御更有利，可能让软件和密码系统的整体质量大幅提升。

<div class="pd-sec pd-sec-q">全部金句 <span>8 条</span></div>

> <span class="qz">当我看完这份清单时，留在我脑海里的印象是：哇，这是数学和计算机科学领域令人难以置信的进展，但这里没有任何关于密码学的问题。</span>  
> *And as I finished the list, the thing that kind of stuck in my mind is that, wow, this is incredible progress in mathematics, in computer science, but there are no questions here on cryptography.*  
> <span class="qm">—— Dan Bonnet · [03:37]</span> ^q1

> <span class="qz">所以这里的恐惧在于，如果这些密码学标准可破解，AI 实验室可能会破解它们。</span>  
> *And so the fear here is that the AI labs could break them if they are breakable.*  
> <span class="qm">—— Liz Harkaby · [06:26]</span> ^q2

> <span class="qz">人们尝试破解却失败了，这一事实反而给了我们更多的信心。</span>  
> *The fact that people try to break them and fail gives us more confidence.*  
> <span class="qm">—— Dan Bonnet · [08:24]</span> ^q3

> <span class="qz">而在另一端，我们得到的信心，可能比用传统流程十年所能得到的还要多。</span>  
> *And at the other end, we have more conviction about its confidence than you could probably get from the conventional process in a decade.*  
> <span class="qm">—— Justin Baylor · [14:11]</span> ^q4

> <span class="qz">我们认为它根本不存在。所以如果不存在，无论 AI 多么聪明，它也无法找到不存在的算法，对吧？</span>  
> *We think there is not one. And so if there is not one, it doesn't matter how smart the AI is, it cannot find the non-existent algorithm, right?*  
> <span class="qm">—— 嘉宾 · [17:04]</span> ^q5

> <span class="qz">现在，你能做的最糟糕的事情基本上就是「做点什么」。你应该什么都不做。</span>  
> *And yeah, it's basically the worst thing you can probably do right now is something. You should do nothing.*  
> <span class="qm">—— 嘉宾 · [18:55]</span> ^q6

> <span class="qz">这里的要点是，我们认为哈希函数是后量子的，但它们未必是后 AI 的。</span>  
> *And the point there is that we think of hash functions as post-quantum, but they might not be post-AI.*  
> <span class="qm">—— Liz Harkaby · [25:28]</span> ^q7

> <span class="qz">如果是这样，我们就是在净改善世界的安全状况，而不是在侵蚀它，对吧？</span>  
> *If that's the case, we are net improving the security status of the world instead of eroding it, right?*  
> <span class="qm">—— Justin Baylor · [37:26]</span> ^q8

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 安全」挖下去**

- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同公司:OpenAI · 同概念:前沿实验室 (Frontier Labs)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:OpenAI</span>
- [[2026-07-07-talks-chamath-palihapitiya-talks-ai-trump-and|Chamath 谈 AI：别信末日论，打破寡头垄断]]<span class="pd-rz">同公司:OpenAI</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2024-06-21-talks-product-led-ai-mustafa-suleyman-on-defin|Mustafa Suleiman:数据是新的护城河——AI 创业者的机会地图]]<span class="pd-rz">同公司:OpenAI</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:OpenAI</span>
- [[2025-06-22-lennys-the-quiet-architect-peter-deng|Peter Deng：产品不必是最重要的东西]]<span class="pd-rz">同公司:OpenAI</span>

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
