---
title: 别指望 AI 一次做对：离心机工作法
podcast: The AI-Native Dev
date: 2026-10-06
source_url: undefined
duration: "45:48"
type: episode
cover: "#64748b"
image: "/covers/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.jpg"
description: 首席工程师 Lada Kesseler 分享她与编码智能体协作的实战方法：基本规则、TDD skill、离心机精炼循环，以及对「软件工厂」的清醒判断。
host: "[[Lada Kesseler]]"
concepts: ["[[智能体编码]]", "[[智能体]]", "[[Claude MD]]", "[[技能]]", "[[TDD]]", "[[BDD]]", "[[approval tests]]", "[[验证器]]", "[[软件工厂]]", "[[事件溯源]]", "[[事件建模]]"]
category: AI 编程
tags:
  - AI 编程
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than#post","headline":"别指望 AI 一次做对：离心机工作法","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than","mainEntityOfPage":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than","description":"首席工程师 Lada Kesseler 分享她与编码智能体协作的实战方法：基本规则、TDD skill、离心机精炼循环，以及对「软件工厂」的清醒判断。","datePublished":"2026-10-06","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.jpg","about":[{"@type":"Person","name":"Lada Kesseler"},{"@type":"Thing","name":"智能体编码 (agentic coding)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Claude MD"},{"@type":"Thing","name":"技能 (skill)"},{"@type":"Thing","name":"TDD"},{"@type":"Thing","name":"BDD"},{"@type":"Thing","name":"approval tests"},{"@type":"Thing","name":"验证器 (verifier)"},{"@type":"Thing","name":"软件工厂 (software factory)"},{"@type":"Thing","name":"事件溯源 (event sourcing)"},{"@type":"Thing","name":"事件建模 (event modeling)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"别指望 AI 一次做对：离心机工作法","item":"https://talk.solomind.cc/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别指望 AI 一次做对：离心机工作法</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别指望 AI 一次做对：离心机工作法

<div class="pd-byl"><b>Lada Kesseler</b> · Logic 2020 首席工程师 · 2026-10-06</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-25-ainativedev-lada-kesseler-i-trust-ai-tests-less-than.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">无论 AI 产出什么，第一次就应该很好——但从来、从来都不是这样。</div><div class="a">— Lada Kesseler <button class="pd-ts" data-t="00:00" data-who="Lada Kesseler" data-en="Whatever AI produces should be good for the first try and never never the case." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lada Kesseler]]
>
> **概念** [[智能体编码]] · [[智能体]] · [[Claude MD]] · [[技能]] · [[TDD]] · [[BDD]] · [[approval tests]] · [[验证器]] · [[软件工厂]] · [[事件溯源]] · [[事件建模]]

这一集聊的是：当你几乎把所有工作都交给 AI 之后，怎么把产出质量真正打磨上去。

主角是 Logic 2020 的首席工程师 [[Lada Kesseler|Lada Kesseler]]——她在一家遍布全美的外包合同公司工作，日常几乎全部用 AI 完成代码、笔记甚至写作。

她抛出的第一个反直觉观点是：

**无论 AI 产出什么，「第一次就应该很好」这个预期从来都不成立**——真正的问题不是 AI 不行，而是人们带着错误的预期在用它。

## AI 的默认设置是取悦你，先改掉

Lada 把 AI 看成一个黑箱：你不知道它内部的心智模型是什么，而且它**是故意被训练来取悦你的**。

所以她的对策是在用户级的 [[Claude MD|Claude MD]](即给 Claude 的全局基本规则文件)里写下第一条大规则：

「跟我说真话，别骗我，别试图取悦我」——**你几乎必须明确给它许可去反驳你**。效果显著：

她开始这么写之后，明显感觉它「对我没那么友好了」，但换来的诚实判断价值大得多(烦人的是，最新的模型如今还会先声明「老实说」，让她哭笑不得)<button class="pd-ts" data-t="06:41" data-who="Lada Kesseler" data-en="So one way to do this is basically so they all have like this thing that I call ground rules, basically. This is your cloud MD or something like that. And you can basically define here's my here's my here's the things that are most important for me." aria-label="回原文"></button>。

但基本规则文件不能贪多。

她的 Claude MD 只有 72 行，每一行她都清楚为什么在那里——**因为上下文内存是稀缺资源**，把 [[TDD|TDD]] 流程、全部最佳实践一股脑塞进去，实践中根本行不通。

她分两层用：全局基本规则是「契约」，干活时再用斜杠命令/[[技能|skill]] 即时强化，第二层在上下文变大时尤其重要。

## 一次只让它做一件事：TDD 要做成 skill,不是一行字

很多人抱怨「TDD 和 AI 不兼容」——但 Lada 一问就发现，他们只是对 AI 说了一句「请做 TDD」,当然不行。

**这个东西一次只擅长做一件事**，你不能指望一句「做这个任务，同时遵守我的所有标准」就能强制执行标准。她的 TDD skill 是这么来的：

先亲自一步步盯着 AI 做完一个完整的 TDD session,然后让它把整个过程记录成流程，之后每次「清空 session,开始 TDD」,她只盯着出错的地方纠正。

TDD skill 能自动生效，靠的是 skill 文件顶部那段 front matter(写给[[智能体|智能体]]自己看的元信息)——智能体靠它判断什么时候该调用这个 skill,而不是像旧的 MCP 那样把全部指令堆进上下文搞乱一切。

**大多数开发者把 description 当成写给人看的，随手写得太泛，结果多个 skill 描述重叠，智能体就完全没机会选对**<button class="pd-ts" data-t="12:12" data-who="嘉宾" data-en="Yes. I'll just write a very lightweight, a very light rate description, and they completely mess up how that skill then gets activated. So that's how the agent determines whether it should use that skill or not." aria-label="回原文"></button>。

为此她还专门建了一个「skill 工厂」，反复迭代 front matter 直到比 Anthropic 默认模板好得多。

同样的道理，她不做「一次全面代码审查」，而是用确定性触发器：

检测到长方法、死代码等代码异味就触发一次只做一件事的修复(接智能体、linter 或格式化工具都行)。

这与主持人提到的 [[验证器|verifier]] 思路完全一致——每个验证器只查一件事、确定性触发、跑得很短，合起来的结果好得多也快得多。

## 离心机：把 AI 转得飞快，甩出愚蠢

Lada 的核心工作流她称为「精炼循环」，写作用时叫「离心机」：

给它目标 → **只让它走一步** → 提交或写进文件 → 让它读回来，对照目标问「够好了吗」→ 再写回。

写文章时她用「去冥想」指令让 AI 把第一轮迭代写进文件，这样循环大概七轮，愚蠢的东西就被甩出去了。

经过约五轮，结果「听起来比我自己写得更像我」。

她说得很直白：写作最终结果好得多，而且里面有太多她自己的工作——引导、否定、指方向，这才是价值的来源<button class="pd-ts" data-t="13:10" data-who="Lada Kesseler" data-en="So it's just an iterative way of making sure it's uh it's concise. I call a thing into a file, so basically this is a a refinement loop. This is just super powerful." aria-label="回原文"></button>。

## 你是决策者：反向引导与把 AI 当视觉工具

很多人被 AI 的对话节奏牵着走——它问十个问题，就逐条回答十个。

Lada 的建议是**反向引导**：你才是决策者，不必顺从它的路径；不喜欢就一次否定一批，别一条条陪它磨。

更被低估的用法是**把 AI 当视觉工具**。

她引用 Craft 大会上演讲者的观点：抱怨比解释你想要什么容易得多——看到东西你才知道自己不要什么。

她把选择想象成站在有很多条路的十字路口，**AI 可以零成本让所有备选路径变得可见**：

让它自己做选择并用表情符号标出，同时展示所有未被选择的路径及理由，你一眼扫过就能说「不，这个才对，因为……」

,顺便拓宽了自己原本看不见的视野<button class="pd-ts" data-t="29:33" data-who="Lada Kesseler" data-en="So like uh have it show you something, and then it's uh much easier to see what you're not like, you get more ideas, you you st you you can borrow different ideas, combine them, and you can go into a different direction entirely by just doing doing that." aria-label="回原文"></button>。她还给高频决策设默认值——默认技术栈是什么，写进规则，不再每次重新决定。

## 测试是信任的锚：TDD 管 agent,BDD 管系统

审查过载怎么办？Lada 的答案是别靠逐行读，靠测试回答一个关键问题：**我的系统到底能不能用？**她有两层测试：

- **TDD 测试**：主要给智能体用，是对现实的交叉校验，不让它偏离现实太远。她对 AI 写测试的信任甚至低于写代码——因为它会「在网上作弊，凑出像犯罪现场一样的测试」。
- **[[BDD|BDD]] 测试**(验收级、高层)：写成小白板式的领域语言，极其易于扫读——做 API 就是「这是我的 API,发生了这个，返回了那个」。她用 [[approval tests|approval tests]](审批测试：先把系统当前输出批准为黄金标准，之后在固定行为的前提下放心重构内部)实现，并且**确保这些高层测试是智能体不能轻易改的**，内部代码则随便它改<button class="pd-ts" data-t="33:08" data-who="Lada Kesseler" data-en="This is for Asian mostly, and for code quality and so on, and check against reality. And then I have BDD tests about does my system work? Right?" aria-label="回原文"></button>。

## 软件工厂：先造出你能信任的构建块

对「[[软件工厂|软件工厂]]」(用智能体流水线式地产出软件)的热潮，Lada 既好奇又警惕。

她不喜欢现在流行的「一次性 AI」式做法——智能体生成智能体、skill 生成 skill——因为她看到的是**退化得极其严重的垃圾输出**。

她用自己的常量问题测试各种方案，Claude Flow 在她的对比里表现最差。

她的逻辑很朴素：**如果你依赖的构建模块并没有做你以为它在做的事，凭什么认为整个系统能运作？

**<button class="pd-ts" data-t="36:32" data-who="Lada Kesseler" data-en="And it's nice because I have a constant that I compare things against. And the Clot Flow, in my experience, did the worst job of them all. Ah, really?" aria-label="回原文"></button> 所以她的路线是先造可信任的单个构建块——她现在已经有一个「指哪打哪」的重构流程，正在攻克「可靠地提取知识存进文件」这下一个块，再考虑组装成自动化。

Dax 的演讲(试了半年工厂、承认行不通)反而是她最想听的：真正试过的人才有真经验。

至于 AI 为什么不能自己做架构：

单一任务范围内它可以不错，但架构是**复杂性管理 + 保持心智模型**的问题——它装不下所有东西，必须在不同架构层面跑多个迭代循环，而「现在我不知道是谁在保持这个心智模型，所以某种程度上只能是我」<button class="pd-ts" data-t="25:44" data-who="Lada Kesseler" data-en="Um, so it's it's a problem of complexity management, I think, quite a lot, and also like holding this mental model. And I don't know who holds this mental model right now." aria-label="回原文"></button>。

她说自己正在造一个「建造其他系统的系统」，这可能是可企及的目标，但有几个问题现在还没解决。

## 工具与下一步

工具上她很决绝：

曾因 IntelliJ 无与伦比的重构工具而纠结于在 IDE 和 Windsurf 的 Agent 间来回切换，去年 5 月 Claude Code 真正可用后立刻全面转到终端，IDE 现在只是文本编辑器。

距离远近取决于风险等级——她现在偏 greenfield(绿地项目)，不需要贴着代码；

若在遗留系统里，她会先把测试套件自动化做到极致，把「怎么做出又快又好的测试」教给智能体，再往高层走。

接下来她想研究的：

一是把「精炼循环」做得更好，二是 Martin Dilger 的[[事件建模|事件建模]]加[[事件溯源|事件溯源]](不折叠状态、每件事都有事件，行为切成完全隔离的切片再生成代码——重复代码很多但因为从不重叠所以无所谓，聚合视图很多，她对此有顾虑但打算亲试)。

## 本集带走

- **给 AI「许可去反驳」**：默认它被训练来取悦你，在全局规则里明写「说真话、别讨好我」，并接受它变得不那么「友好」的代价。
- **规则文件当菜单，别当仓库**：上下文内存有限(她的 Claude MD 只 72 行)，全局放契约级规则，流程细节做成 skill,靠写好的 description 让智能体在对的时机自动调用。
- **一次只让它做一件事**：「做这个任务 + 同时遵守我全部标准」必败；改成 TDD skill、单点 verifier、确定性触发的代码异味修复器。
- **离心机循环**：目标 → 一步 → 落盘 → 读回对照 → 再来，几轮之后质量远超「指望一次成型」。
- **让它先把东西摆出来**：看到备选方案(含它自己选了什么、为什么)比凭空描述需求容易得多，抱怨比解释容易。
- **用测试锚定信任**：TDD 测试管智能体别跑偏，BDD 级审批测试(智能体改不了)回答「系统到底能不能用」，审查压力随之消解。
- **别急着上软件工厂**：先造出一个个你能信任、敢走开的构建块，工厂才有地基。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">无论 AI 产出什么，第一次就应该很好——但从来、从来都不是这样。</span>  
> *Whatever AI produces should be good for the first try and never never the case.*  
> <span class="qm">—— Lada Kesseler · [00:00]</span> ^q1

> <span class="qz">你几乎必须给它许可去反驳，并在你的规则里对抗那种取悦倾向。</span>  
> *You have to almost give it permission to disagree and fight that in your rules.*  
> <span class="qm">—— Lada Kesseler · [00:07]</span> ^q2

> <span class="qz">经过大概五轮这样的循环，我就到了一个它听起来其实比我自己写得更像我自己的地步。</span>  
> *And after like five loops of that, I'm at a place where it actually sounds much more like me than I would have done other myself, I think.*  
> <span class="qm">—— Lada Kesseler · [15:47]</span> ^q3

> <span class="qz">现在这些路对我是不可见的，但 AI 可以零成本地让它们对我可见。</span>  
> *Right now they're invisible to me, but AI can make them visible to me at zero cost.*  
> <span class="qm">—— Lada Kesseler · [29:42]</span> ^q4

> <span class="qz">所以完全可以让 AI 先把所有愚蠢的部分甩出来，然后再做人工审查，并且确保 AI 把东西呈现得让人类容易跟上，因为现在这并不容易。</span>  
> *So absolutely get AI to spin all the stupid out and then do human and and make sure that the AI positions it in a way that's easy for human to follow because it's not easy right now.*  
> <span class="qm">—— Lada Kesseler · [31:48]</span> ^q5

> <span class="qz">因为当你让 AI 写测试时，一个很大的危险是——我对 AI 写测试的信任甚至低于我对它写代码的信任。</span>  
> *Because like when you have AI write tests, a big danger, like I trust my AI with my tests even less than I trust it with my code.*  
> <span class="qm">—— Lada Kesseler · [32:46]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同概念:skill、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-07-28-ainativedev-inside-the-dark-factory-ai-that-ships-co|Tesla 的暗工厂：65% 的 PR 由智能体自动产出，95% 的代码没人看过]]<span class="pd-rz">同概念:verifier、智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-09-27-talks-building-self-improving-agent-software-f|软件工厂如何自我改进:技能、记忆与模型路由]]<span class="pd-rz">同概念:skill、智能体 (agent)、软件工厂 (software factory)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:智能体 (agent)、智能体编程 (agentic coding)</span>
- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同概念:智能体 (agent)、软件工厂 (software factory)</span>
- [[2026-08-31-lennys-how-i-turned-claude-into-a-self-improvin|一个PM用Claude CoWork建的自愈型工作系统]]<span class="pd-rz">同概念:skill、智能体 (agent)</span>

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
