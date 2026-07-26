---
title: 为什么开源是AI安全与创新的底线：Ben Horowitz谈开放权重之争
podcast: The a16z Show
date: 2026-07-26
source_url: undefined
duration: "32:25"
type: episode
cover: "#64748b"
description: "Ben Horowitz指出开源对AI安全、国家安全和初创生态至关重要,目前市场渗透率极低,禁开源是在搬起石头砸自己的脚。"
host: "[[Theo Jaffe]]"
cohosts: ["[[Ben Horowitz]]", "[[Sofia Puccini]]"]
companies: ["[[NVIDIA]]", "[[Andreessen Horowitz]]", "[[Anthropic]]", "[[Hugging Face]]", "[[DeepSeq]]", "[[Thinking Machines]]", "[[Mistral]]"]
concepts: ["[[开源]]", "[[开放权重]]", "[[专有模型]]", "[[蒸馏]]", "[[垄断]]"]
category: 创业与行业
tags:
  - 创业与行业
  - AI 安全
---

# 为什么开源是AI安全与创新的底线：Ben Horowitz谈开放权重之争

<div class="pd-mt">2026-07-26 · The a16z Show · 32:25 · <a class="mcat" href="./tags/%E5%88%9B%E4%B8%9A%E4%B8%8E%E8%A1%8C%E4%B8%9A">创业与行业</a> · <a class="mcat" href="./tags/AI%20%E5%AE%89%E5%85%A8">AI 安全</a></div>

<div class="pd-play"><audio controls preload="metadata" src="/audio/2026-07-26-a16z-ben-horowitz-the-fight-over-open-source.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">对世界来说最安全的事情是,没有一个统治一切的 AI。</div><div class="a">Ben Horowitz · 00:12</div></div>

> [!info] 关联
> **主持**:[[Theo Jaffe]]
>
> **联合主持**:[[Ben Horowitz]] · [[Sofia Puccini]]
>
> **涉及公司**:[[NVIDIA]] · [[Andreessen Horowitz]] · [[Anthropic]] · [[Hugging Face]] · [[DeepSeq]] · [[Thinking Machines]] · [[Mistral]]
>
> **概念**:[[开源]] · [[开放权重]] · [[专有模型]] · [[蒸馏]] · [[垄断]]

## 一句话 TLDR

Ben Horowitz指出开源对AI安全、国家安全和初创生态至关重要,目前市场渗透率极低,禁开源是在搬起石头砸自己的脚。

近期科技界因为一份公开信炸开了锅。[[NVIDIA|NVIDIA]]发布了一封名为《[[开放权重|开放权重]]与美国 AI 领导力》的公开信,由包括 [[Andreessen Horowitz|Andreessen Horowitz]] 在内的许多公司签署。 Andreessen Horowitz 的联合创始人 [[Ben Horowitz|Ben Horowitz]] 在节目中明确表态:这可能是当前围绕 AI 最重要的一项政策议题。这期访谈中,Ben 逐一拆解了这场围绕[[开源|开源]]的博弈——从政策角力到国家安全,再到 AI [[垄断|垄断]]的真正威胁。整场对话可以顺着一条主线来读:开源为什么重要、谁在试图封杀它,以及为什么在这个渗透率极低的市场里,开源不应当被视为威胁。

## 藏在安全外衣下的反竞争之手

话题从这封公开信的背景切入。Ben 直言,当前有一股巨大的推动力,背后有大量资金(特别点名了 [[Anthropic|Anthropic]])试图禁止开源。他将这种做法形容为「几乎是一种伪装在安全外衣下的反竞争立场」<button class="pd-ts" data-t="01:53" data-who="Ben Horowitz" data-en="Yeah, so I think that it's probably the single most important policy issue around AI that's kind of currently going on. And, you know, the kind of battle is between kind of almost an anti-competitive stance guised in a kind of safety cloak is kind of what we ought to be doing." aria-label="回原文"></button>。

要理解开源为什么不可或缺,Ben 从三个维度展开。首先从学术界来看,如果没有开源,学术界将完全出局,无法参与 AI 的研究与竞争。其次,他以最近的一个安全事件为例:[[专有模型|专有模型]]因为内置了护栏(用于限制 AI 生成有害或越界内容的机制)而拒绝执行某些安全任务,人们只能依靠开源模型来弥补这一盲区 <button class="pd-ts" data-t="02:28" data-who="Ben Horowitz" data-en="So that goes away. I think secondly, we just had a really interesting security incident with OpenAI hacking into Hugging Face. And the only way Hugging Face was able to prevent it, because the proprietary models had guardrails which prevented them from doing security tasks, was to use an open source model." aria-label="回原文"></button>。

更宏观的是系统级安全。Ben 回顾了行业历史,指出开源版本总是更安全的,因为整个社区都能参与发现和修补漏洞;相比之下,垄断产品(如当年的 Windows)即使漏洞百出,外部也无能为力 <button class="pd-ts" data-t="03:37" data-who="Ben Horowitz" data-en="But then kind of getting into... Just like if you look at the history of the industry, the open source version of everything has been much safer. So the internet and Linux were far safer than Windows, like by a lot." aria-label="回原文"></button>。面对 AI 最棘手的安全问题(如奖励黑客行为,即 AI 为了达成目标而钻规则空子),与其寄望于少数几家追求跑分和估值的闭源实验室,不如让全球开源社区共同检视权重(模型内部的参数)来得靠谱。归根结底,对世界最安全的局面是没有一个能够统治一切的 AI,开源正是通向这一目标的最佳路径 <button class="pd-ts" data-t="05:21" data-who="Ben Horowitz" data-en="So it's like really, really important, I think, to safety in general. And then, you know, kind of finally, the safest thing for the world is that there's not one AI to rule them all, that there's kind of AI for everybody." aria-label="回原文"></button>。

## 禁令挡不住坏人,只会绑架好人

既然开源这么重要,政府如果真动手封杀会怎样?Ben 用密码学的历史作了类比。早在 Netscape 时期,就曾有情报界高官试图禁止密码学,但数学公式是客观存在且无法被抹杀的。同理,开源代码已经在互联网上流传,根本无法根除 <button class="pd-ts" data-t="03:04" data-who="Ben Horowitz" data-en="We have no way of doing that. And it reminds me of years ago when I was at Netscape, they tried to ban cryptography. And the math is out there." aria-label="回原文"></button>。如果强行出台禁令,结果只会是「阻止好人使用它」——比如以「不与美国政府合作」相要挟,让正当企业无法利用开源技术,反而让真正的安全防线出现漏洞 <button class="pd-ts" data-t="03:18" data-who="Ben Horowitz" data-en="But you can prevent the good guys from using it. And that's what would happen, I think, in the case of an open source ban is, you know, the threats would be, well, you can't work with the U.S. government if you use open source or you can't do this." aria-label="回原文"></button>。

顺着安全话题,主持人抛出了另一个常见的担忧:中国与国家安全。如果中国切断开源模型的供应,或者在其中植入「潜伏智能体」怎么办?Ben 坦言,这种间谍激活式的威胁对任何技术都存在(包括在闭源大厂工作的外籍员工),并非开源独有 <button class="pd-ts" data-t="08:16" data-who="Ben Horowitz" data-en="to American companies or perhaps they could you know in an AI future make these open source models like sleeper agents basically or you can think of all kinds of things that they could do" aria-label="回原文"></button>。更重要的是,开源的特性在于「它是开放的」,即便对方停止发布,我们依然拥有最后的代码库,可以继续训练和学习 <button class="pd-ts" data-t="08:57" data-who="Ben Horowitz" data-en="But, look, it's open source. And so, if they stop making it, like, we've still got the last code base, we can train up the model, we can, you know, we can learn from it." aria-label="回原文"></button>。我们需要的是推动自己的开源技术(如 [[Mistral|Mistral]]、[[Thinking Machines|Thinking Machines]]),而不是因为恐惧而作茧自缚。

在 Ben 看来,真正巨大的国家安全风险恰恰是 AI 领域出现一家独大的垄断巨头。他毫不避讳地指出,我们已经从 Anthropic 身上瞥见了这种危险苗头——一家公司可以无视政府、无视所谓的战争部,宣称「我们说了算」,这种不受制约的权力才是大得多的国家安全隐患 <button class="pd-ts" data-t="09:45" data-who="Ben Horowitz" data-en="I mean, I think it's fairly obvious how dangerous that could be and how powerful that company would be and what a national security risk that would be. We've already seen a glimpse of it, right, with Anthropic saying, like, I don't care who got elected in the U.S." aria-label="回原文"></button>。

## 垄断巨头的「下场做应用」危机

说到闭源大厂的权力扩张,话题自然转向了应用层的开发者处境。Ben 批评了某些大厂(再次点名 Anthropic)正在快进历史上的微软垄断套路:跳过打造开放平台的阶段,直接下场抢夺应用层的生意 <button class="pd-ts" data-t="15:00" data-who="Ben Horowitz" data-en="And then they've, you know, like we've seen them do like very aggressive things where, you know, the price for the application provider is full price and then they subsidize their version of the application." aria-label="回原文"></button>。

如果一家公司既做底层大模型,又做上层应用,它就可以对独立应用提供商收全价,然后暗地里补贴自己版本的同类应用。在这种不公平竞争下,如果你是做机器人的初创公司,随时可能被底层模型厂商断供或高价挤垮。因此,开源模型成了生态系统得以存活和生长的保护伞,很多美国的应用公司甚至不得不依靠中国的开源技术来完成早期的冷启动 <button class="pd-ts" data-t="15:54" data-who="Ben Horowitz" data-en="By the way, a lot of our industry has grown. A lot of our application companies have used open source to kind of bootstrap themselves or get going or that kind of thing, and often Chinese open source, which is why it's really important to the U.S. ecosystem that we have applications, that we have embodied AI, that we have robots and all these things that we have access to that technology because the kind of other model is a monopoly model where there's one company that owns all the applications." aria-label="回原文"></button>。

## 蒸馏技术不是偷窃,市场渗透率极低

如果在底层大模型上做应用这么危险,那「[[蒸馏|蒸馏]]」(Distillation,即利用大模型生成的数据来训练更小的开源模型)是否是一种健康的竞争手段?主持人提到与 Aaron Levy 的讨论,质疑闭源大厂自己白嫖数据训练,却不许别人蒸馏他们的模型。

Ben 完全同意这一观点。他指出,从法律上讲 AI 模型的输出不受版权法保护,最多只能算违反服务条款。他甚至自嘲自己也加入了诉 Anthropic 偷窃书籍的集体诉讼 <button class="pd-ts" data-t="11:13" data-who="Ben Horowitz" data-en="But, look, I think generally that's right. You know, Anthropic just paid $1.5 billion for stealing everybody's books, including mine, by the way. They trained on MacBook and I joined that class action lawsuit." aria-label="回原文"></button>。但他强调,只要不复制原始受版权保护的作品,用数据训练统计模型总体上是对世界有益的,蒸馏技术也是如此,大厂根本拦不住。

既然开源和蒸馏都在蓬勃发展,这是否威胁到了闭源大厂的商业模式?Ben 给出了一个极具视角的判断:**目前 AI 市场给人的稳定平衡感是种错觉,实际渗透率可能不到 3%** <button class="pd-ts" data-t="22:43" data-who="Ben Horowitz" data-en="okay, we're kind of at a stable equilibrium in the market. But the truth is the AI market is probably less than 3% penetrated. Yeah." aria-label="回原文"></button>。

他举了 DeepSeek(转写稿中音译为 [[DeepSeq|DeepSeq]])的例子:当初这款开源模型发布时,所有人都惊呼这是闭源巨头的末日。结果呢?「什么都没改变。零。」<button class="pd-ts" data-t="23:00" data-who="Ben Horowitz" data-en="Like when DeepSeq came out, it was a DeepSeq moment, and oh my gosh, and this is the end of Anthropic and OpenAI and all that. And nothing changed. Right?" aria-label="回原文"></button> 巨头的估值不降反升。原因很简单:这个市场比历史上任何市场都要庞大,蛋糕还在以每年十倍的用量增长。在渗透率不到 3% 的极早期阶段,所有人都在吃下增量市场,根本不存在谁抢了谁份额的存量博弈。

## AI 艺术与认知的平民化

随着话题深入,当超级智能(能力极强的前沿模型)能以十倍甚至百倍的价格完美完成工作时,企业会不会抛弃便宜的模型?Ben 认为这取决于具体工作类别:比如聘用超级 AI 研究员,企业绝对愿意砸重金;但如果是保洁员或会计,显然不需要多花一百倍的钱去追求极致智能 <button class="pd-ts" data-t="27:09" data-who="Ben Horowitz" data-en="And then there's a question about which categories of jobs would you rather have superintelligence and pay 8x or 10x as much for? And then which class of jobs would you rather have something faster and cheaper?" aria-label="回原文"></button>。

访谈最后以对 AI 艺术的探讨收尾。对于 AI 生成大量低劣内容(即垃圾内容)的担忧,Ben 表现得毫不畏惧。他将 AI 视为表达工具的又一次跃迁:萨克斯管的发明带来了爵士乐,电吉他带来了摇滚乐,鼓机带来了嘻哈,而 AI 必将催生全新的艺术流派 <button class="pd-ts" data-t="29:17" data-who="Ben Horowitz" data-en="Like... Every time there's a new technology, we get a new kind of art form in music, and I think that's going to happen here. And there will be stuff that's really good, and there will be more people who can make bad things." aria-label="回原文"></button>。尽管技术普及会增加平庸作品的数量,但工具的民主化让每个人都能表达自我,这终究是一件好事。

## 本集带走

1. **开源更安全,禁令是伪命题**:开源系统允许整个社区检视并修补漏洞,而闭源垄断会带来不可控的系统性风险;因为代码本身无法被根除,政策禁令只能吓退合规的好人,挡不住真正的作恶者。
2. **巨头垄断才是最大的国家安全风险**:与其担忧外国开源模型留有后门,不如警惕单一 AI 巨头做大后无视政府监管、任意绞杀初创生态的垄断霸权。
3. **3% 渗透率下的非零和博弈**:当前市场看似格局已定,但 AI 的实际渗透率极低,整体需求仍在爆炸性增长。开源与闭源、平价与昂贵模型在当下并非你死我活的竞争,而是分别切中不同应用场景与增量市场的共生关系。

## 金句(中英对照 · 过机器闸门三联校验)

> 对世界来说最安全的事情是,没有一个统治一切的 AI。  
> *The safest thing for the world is that there's not one AI to rule them all.*  
> —— Ben Horowitz · [00:12] ^q1

> 这可能是围绕 AI 的最重要的单一政策问题,也是当前正在发生的事情。  
> *it's probably the single most important policy issue around AI that's kind of currently going on.*  
> —— Ben Horowitz · [01:44] ^q2

> 这种战斗是在,几乎是一种伪装在安全外衣下的反竞争立场,是我们应该做的事情。  
> *the kind of battle is between kind of almost an anti-competitive stance guised in a kind of safety cloak is kind of what we ought to be doing.*  
> —— Ben Horowitz · [01:54] ^q3

> 如果没有开源,学术界就完全出局了,无法参与 AI 游戏。  
> *Academia is completely out of the AI game if there's no open source.*  
> —— Ben Horowitz · [02:22] ^q4

> 而 Hugging Face 能够阻止它的唯一方法,因为专有模型有阻止它们执行安全任务的护栏,是使用开源模型。  
> *And the only way Hugging Face was able to prevent it, because the proprietary models had guardrails which prevented them from doing security tasks, was to use an open source model.*  
> —— Ben Horowitz · [02:38] ^q5

> 对世界来说最安全的事情是,没有一个统治所有 AI 的 AI,而是每个人都有 AI。  
> *the safest thing for the world is that there's not one AI to rule them all, that there's kind of AI for everybody.*  
> —— Ben Horowitz · [05:24] ^q6

> 所以有点像他们有点快进了,我会说,微软昔日的剧本,就像,跳过了平台这一代,直接进入了垄断这一代。  
> *they've kind of fast-forwarded, I would say, the Microsoft playbook from the old days to, like, skipping the platform generation and just going straight to the monopoly generation.*  
> —— Ben Horowitz · [15:02] ^q7

> Anthropic 刚刚花了 15 亿美元来偷走所有人的书,顺便说一下,包括我的。  
> *Anthropic just paid $1.5 billion for stealing everybody's books, including mine, by the way.*  
> —— Ben Horowitz · [11:13] ^q8

> 感觉我们处于市场中一个稳定的平衡状态,但事实是 AI 市场可能被渗透了不到 3%。  
> *it feels like we're at a stable equilibrium in the market, but the truth is the AI market is probably less than 3% penetrated.*  
> —— Ben Horowitz · [00:30] ^q9

> 每次出现一项新技术,我们就会在音乐中得到一种新的艺术形式,我认为这也会在这里发生。  
> *Every time there's a new technology, we get a new kind of art form in music, and I think that's going to happen here.*  
> —— Ben Horowitz · [29:17] ^q10

## 相关单集

- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|《Sriram Krishnan：Kimi K3 将改写 AI 行业版图》]] —— 同嘉宾:Sofia Puccini · 同公司:Hugging Face、Anthropic · 同概念:蒸馏 (distillation)
- [[2026-07-24-bigtech-what-happens-if-ai-fails-subprime-data-c|《AI 悬崖边？数据中心次级债与 SpaceX 缩水》]] —— 同公司:Anthropic、OpenAI、SpaceX · 同概念:蒸馏 (distillation)
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《iPod之父Tony Fadell：反直觉的产品课》]] —— 同公司:Anthropic、OpenAI
- [[2025-12-07-lennys-surge-ai-edwin-chen|《Surge AI 创始人 Edwin Chen:我们教模型追逐多巴胺,而非真理》]] —— 同公司:Anthropic
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《对话 Cisco CPO Jeetu Patel:大公司如何不掉队 AI 时代》]] —— 同公司:NVIDIA
- [[2026-03-01-lennys-the-design-process-is-dead|《The design process is dead. Here’s what’s replacing it. | Jenny Wen (head of design at Claude)》]] —— 同公司:Anthropic
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《Anthropic 增长负责人：用 Claude 自动化增长实验，把 PM 的活交给工程师》]] —— 同公司:Anthropic
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《《精益创业》作者 Eric Ries 新作导读：好公司为什么会「变坏」》]] —— 同公司:Anthropic
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《当代码量暴涨8倍:Anthropic工程负责人谈AI时代的团队重构》]] —— 同公司:Anthropic
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《Adam Mosseri：AI 时代的团队重组与产品品味》]] —— 同公司:Anthropic
- [[2026-07-26-lennys-anthropics-first-technical-pm-on|《evals 是新的 PRD:Anthropic 产品负责人 Diane Penn 谈 AI 时代的产品经》]] —— 同公司:Anthropic
- [[2026-06-22-latent-space-gray-swan|《让 AI 智能体不「越界」:Gray Swan 的红队测试与安全护栏》]] —— 同公司:Anthropic · 同概念:护栏 (guardrails)
- [[2025-11-16-lennys-the-godmother-of-ai|《AI 教母李飞飞:从 ImageNet 到空间智能,与首个 3D 世界模型 Marble》]] —— 同公司:NVIDIA
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|《非技术 PM 的 AI 独立开发术：从 Cursor 到「智能体同行评审」》]] —— 同公司:Anthropic
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《AI 时代产品经理生存指南：一半人将被迫转行，一半人迎来复兴》]] —— 同公司:Anthropic
- [[2026-05-03-lennys-why-cultivating-agency-matters-more|《对话 Notion 产品负责人 Max:AI 时代的产品方法论与人的主观能动性》]] —— 同公司:Anthropic
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella 谈 AI 时代平台逻辑:私有评估是最大 IP》]] —— 同公司:Microsoft
- [[2026-07-08-latent-space-modal|《从避战大模型到押注智能体：Modal 的推理基础设施进化史》]] —— 同公司:Anthropic
- [[2026-07-09-pg-pm-guide-ai-design|《用 AI 武装技术型 PM：Codex 工作流全解析》]] —— 同概念:护栏 (guardrails)
- [[2026-07-12-lennys-how-tech-workers-actually-feel-about|《科技圈情绪调查：一半人狂喜，一半人煎熬》]] —— 同公司:Anthropic
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《Netflix 产品负责人谈 AI 时代：每个人都能做一切,但卓越的专长不会消失》]] —— 同概念:护栏 (guardrails)

*本集关键词:开源 AI · 开放权重 · 反垄断 · 国家安全 · 蒸馏*

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
  document.addEventListener('nav', move);
  move();
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

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
