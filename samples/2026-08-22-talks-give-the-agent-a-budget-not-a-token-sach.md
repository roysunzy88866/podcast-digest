---
title: 给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道
podcast: 精选演讲
date: 2026-09-25
source_url: undefined
duration: "19:45"
type: episode
cover: "#64748b"
description: Anthropic CI 工程师 Sachin 讲解如何用非对称动词、速率限制、绊线和身份代理层，让智能体安全地在生产环境干真活。
guests: ["[[Sachin Malhotra]]"]
companies: ["[[Anthropic]]"]
concepts: ["[[智能体]]", "[[CI-CD]]", "[[token]]", "[[速率限制]]", "[[绊线]]", "[[允许列表]]", "[[非对称动词]]", "[[撤销测试]]", "[[代理]]", "[[身份]]", "[[功能开关]]", "[[金丝雀]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach#post","headline":"给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach","mainEntityOfPage":"https://talk.solomind.cc/2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach","description":"Anthropic CI 工程师 Sachin 讲解如何用非对称动词、速率限制、绊线和身份代理层，让智能体安全地在生产环境干真活。","datePublished":"2026-09-25","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Sachin Malhotra"},{"@type":"Organization","name":"Anthropic"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"CI/CD"},{"@type":"Thing","name":"token"},{"@type":"Thing","name":"速率限制 (rate limit)"},{"@type":"Thing","name":"绊线 (tripwire)"},{"@type":"Thing","name":"允许列表 (allow list)"},{"@type":"Thing","name":"非对称动词 (asymmetric verbs)"},{"@type":"Thing","name":"撤销测试 (undo test)"},{"@type":"Thing","name":"代理 (proxy)"},{"@type":"Thing","name":"身份 (identity)"},{"@type":"Thing","name":"功能开关 (feature flag)"},{"@type":"Thing","name":"金丝雀 (canary)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道","item":"https://talk.solomind.cc/2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给智能体预算，而不是令牌：Anthropic 的智能体安全上生产之道

<div class="pd-byl"><b>Sachin Malhotra</b> · Anthropic CI 工程师 · 2026-09-25</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-22-talks-give-the-agent-a-budget-not-a-token-sach.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">失败不在于模型本身。失败在于我给了智能体无限制的权力，去做一件我没有非常密切盯着的事情。</div><div class="a">— Sachin Malhotra <button class="pd-ts" data-t="03:18" data-who="Sachin Malhotra" data-en="The failure wasn't the model itself. The failure was that I was giving the agent unbounded amount of power to do something that I wasn't watching super intently." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sachin Malhotra]]
>
> **公司** [[Anthropic]]
>
> **概念** [[智能体]] · [[CI-CD]] · [[token]] · [[速率限制]] · [[绊线]] · [[允许列表]] · [[非对称动词]] · [[撤销测试]] · [[代理]] · [[身份]] · [[功能开关]] · [[金丝雀]]

[[Anthropic|Anthropic]] 的 CI 团队工程师 Sachin 负责公司所有代码的测试机制——测试隔离、合并自动化、CI 自动扩缩容，让几千名工程师每天能安全发布代码。这一集他讲的是一个很多人踩过的坑：给[[智能体|智能体]]一个「超级[[token|令牌]]」和一份工具列表，看它三秒钟搭好一个网站，大家鼓掌，然后有人把它放进了生产环境。

然后事故来了。智能体想「自我清理」，列出一批它认为不再需要的工作负载并删除。

管道里某个阶段的过滤器求值结果为空，选择器于是匹配到了**所有东西**——90 秒内删掉了约 200 个工作负载，波及约 20 名工程师的成果，其中有些是长时间运行的训练任务，甚至没做检查点，几个小时的工作量直接蒸发。没有人怀有恶意，智能体真心以为自己在打扫卫生。

Sachin 的复盘很扎心：智能体严格来说没做任何他本人做不了的事——毕竟它用的是他的令牌。失败的根源不是模型，而是**他给了智能体无限制的权力，去做一件他没有密切盯着的事**。

## 用带新员工的方式带智能体

我们已经解决过一次这类问题——只是对象是人。新工程师入职时，没人会站在他椅子后面盯着每一个按键；总有一条升级路径，灾难性的操作在结构上对他够不着。

智能体和新人的差别在于：它们永不疲倦、永不睡觉，而且每隔一段时间会非常自信地犯错——「说实话，这可能就是我们大多数人入职第一个月的样子」。所以答案不是发明新东西，而是**把你给工程师的入职清单写下来，变成智能体的策略**。

标准的修复办法是收窄令牌权限——直接把删除权限拿走。Sachin 认为这不对：你绝不会对新员工把整个「动词」拿走，而且对智能体也不管用——也许撑一两周，之后智能体真需要删点东西时，你就得坐在那儿一遍遍手动按回车。

核心问题在于：**令牌是个布尔值**——静态的权限列表，有或没有。列表太紧，智能体没用；太宽，你就在写事故复盘。

预算是另一种形状，有四个维度：能做多少？做多快？

能自己撤销什么？以及它执行时谁在看着？

## 原语一：非对称动词

「动词」指智能体能做的操作——API 调用、CLI 命令都算。之所以「非对称」，是因为看起来同样大小的动作，实际爆炸半径可能天差地别。关键思维转变：**别从资源出发，从动词出发**——问「这个动词出错时会发生什么」。

有些动词会**大声失败**：智能体错误地取消跳过一个测试，最坏结果就是 CI 对一堆人变红；错误地呼叫值班人员，也只是骚扰一下 on-call，总有人能纠正。有些动词会**安静地失败**：智能体不该跳过测试却跳过了，什么都不会变红，一个真正的 bug 可以带着绿色勾进生产环境，很久没人发现。

所以规则是：**把会大声报错的动词给智能体，会安静失败的留给人类**。在 Anthropic 的实践中，智能体可以重新启用被测试隔离服务跳过的测试（错了只是变红，人工恢复成本极低）；但「跳过测试」是值班人员在事故中的破例（break-glass）操作，智能体搞错就意味着 bug 溜进生产——这必须经过人类，且始终留下审计轨迹。关键细节：**智能体永远不亲自握着记录自己行为的笔**——中间有个[[代理|代理]]负责在每次调用上盖上调用者[[身份|身份]]的印章。

## 原语二：速率限制

这是预算理念最具体的形式：**一个会补充的天花板**。每个调用者在每个时间窗口内拿到少量破坏性操作额度，怎么花随它——没有审批、没有等待；越线了请求直接被弹回，等一会儿额度自动补充。效果是：智能体在限额内拥有完全自主权，而单个循环能糟到什么程度有硬性上限。

每一次写入都有[[速率限制|速率限制]]，没有例外，区别只在大小：删自己命名空间里的东西限额高一些，碰共享命名空间的限额小一些。事故之后，Sachin 隔壁的团队建了一个准入 webhook，把删除次数按每小时、每资源类型、每命名空间封顶。

他最喜欢的一个细节：绕过标志在 Claude Code 会话里**直接失效**——只会告诉智能体让人类自己去运行那条命令。于是智能体拿到限额，人类保留覆盖权，而且没人需要为提额提交工单，因为额度自己会补。

## 原语三：绊线优于允许列表

[[允许列表|允许列表]]本质上是你**预先做的猜测**——猜测智能体需要什么——而且是在你还没有任何行为数据时写下的。[[绊线|绊线]]则是你**事后获取数据**的方式：让智能体去干，每个操作都带着身份戳被记录下来。两者配合：速率限制是强制执行，绊线让你知道实际发生了什么。

观察的是**聚合情况**而非单个调用。一个真实案例：Anthropic 追踪「智能体针对测试失败每小时发起的调查线程数」。

某天早上这个数字远超基线，绊线呼叫了值班人员——这一步很重要，「没人看到的绊线毫无用处」。它在写入已发生之后才响，所以它是**烟雾报警器，不是门锁**。

查下来发现：智能体为几十个以同一种错误特征失败的任务各起了一个调查线程，每个单独看都合理，合在一起看才知道是基础设施故障。修复呢？

只是在智能体上下文里加了一两句话：「下次遇到这种事，先把多个失败关联起来再起调查线程」。下次它就照做了。

核心对比：允许列表不会随时间变好，只会过时；**绊线会随时间变好**。

## 衡量标尺：撤销测试

这不是写进代码的东西，而是评估上述三个原语时问的两个问题：**智能体能不能自己把它恢复回去？真搞错了影响有多糟？** 它和动词那条容易混：动词问的是你能不能**注意到**失败，撤销问的是你能不能**从中恢复**。

两个都能答「是」→ 记入日志，放行。任何一个答「否」→ 需要第二把钥匙，而第二把钥匙绝不能由智能体自己持有，必须另有其人，且要有审计记录。

CI 之外的例子是[[功能开关|功能开关]]：在[[金丝雀|金丝雀]]环境（预发布流量加内部试用客户）智能体握有完整旋钮，可以从 0 推到 100、根据 bug 报告开关切换；但**无权把开关提升到真正的生产环境**——最多只能提议。这里的第二把钥匙不是新认证系统，就是「生产的受限钥匙」和「金丝雀的受限钥匙」两把不同的钥匙。

回到开头那次删除事故做回测：速率限制会把它封在几十个工作负载以内；[[撤销测试|撤销测试]]则告诉你，别人命名空间里正在运行的任务**根本无法撤销删除**——所以超出上限的任何操作都需要持第二把钥匙的人类。

## 策略住在哪里：文本 + 基础设施

两个地方，缺一不可。

**文本层**：提示词、上下文文件、智能体行动前读的 markdown。在这里解释「为什么」和意图。

Sachin 把前面那句关联失败的指引一字不差写在 markdown 里，大约 80% 的时候管用。好处是改动便宜、能讲道理；坏处是文件会膨胀、需要打理，而且说到底**只是建议**——文本塑造意图，但没有任何强制执行。

**基础设施层**：代理（proxy，坐在智能体和真实系统之间的一层）。代理不读提示词、不知道也不在乎智能体为什么想做什么。

它只看到：一个删除在发生、预算被越过——返回一个 403，对话结束。它窄、确定性强：计数、比较、允许或拒绝；它解释不了为什么，但**再聪明的提示词注入也说服不了它放弃规则**。一句话：文本塑造智能体想做什么，基础设施约束它能错到什么程度。

架构上，每个智能体会话旁边都跑着自己的代理；每个出站调用都过代理，被盖上智能体自己的身份——不是 Sachin 的身份。集群把这个身份作为标签写到作业上，之后所有子作业继承同一身份，而系统里所有的保障——所有权、配额、速率限制、审批、绊线——全都以这一个标签为键，智能体从头到尾没碰过它。

为什么盖章必须由代理层而不是调用方自己做？因为如果智能体能在请求头里自报身份，它撞上限额后最简单的「修复」就是把 Sachin 改成 Sachin2——瞧，全新预算到手。

这时你其实没有速率限制，**只有一个建议**。有代理在链路中，智能体永远不用自报家门：代理持有真实凭证，用它已知而非智能体声称的身份盖章，还能按会话 ID 区分多个并行会话，看哪个在过度反应。

## 本集带走

- **从动词想安全，不从资源想**：把会大声失败（CI 变红、呼错人）的操作给智能体，把会安静失败（悄悄跳过测试让 bug 溜进生产）的留给人类。
- **给每次写入设一个会自动补充的上限**：限额内完全自主，越线自动弹回、无需提工单提额；共享命名空间的限额设得更小。
- **用绊线代替允许列表**：先放行并记录带身份戳的操作，盯着聚合指标，触线就呼叫值班人员；修复通常只是往智能体上下文里加一两句指引。
- **用撤销测试定档**：能自愈且爆炸半径可接受 → 放行；不能恢复或影响太糟 → 需要智能体拿不到的第二把钥匙 + 审计记录（如生产和金丝雀各一把受限钥匙）。
- **身份必须来自基础设施，不来自请求**：由代理层盖章，智能体永远不能自报身份——Sachin 说这是唯一真正重要的规则，「把这条做对，其他一切都只是调优」。
- **文本和基础设施各管一半**：markdown 文件解释意图（八成时候管用但只是建议），代理层做确定性的强制执行，提示词注入说服不了它。

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">失败不在于模型本身。失败在于我给了智能体无限制的权力，去做一件我没有非常密切盯着的事情。</span>  
> *The failure wasn't the model itself. The failure was that I was giving the agent unbounded amount of power to do something that I wasn't watching super intently.*  
> <span class="qm">—— Sachin Malhotra · [03:18]</span> ^q1

> <span class="qz">所以核心点是，你需要暂时停止思考资源，而去思考动词。</span>  
> *So the core point is that you need to stop thinking about resources for a second and think about verbs.*  
> <span class="qm">—— Sachin Malhotra · [06:09]</span> ^q2

> <span class="qz">一个真正的 bug 可以带着绿色勾选进入生产环境，而且直到很久以后都没人会注意到它。</span>  
> *A real bug can actually walk into production with green checks and nobody would notice it until much later.*  
> <span class="qm">—— Sachin Malhotra · [06:50]</span> ^q3

> <span class="qz">核心点是，允许列表并不会随时间变得更好。它们会变得过时，但绊线会随时间变得更好。</span>  
> *The core point is that allow lists don't really get better over time. They can get stale, but tripwires do get better over time.*  
> <span class="qm">—— Sachin Malhotra · [10:57]</span> ^q4

> <span class="qz">而这一点很重要，因为一个没人看到的绊线实际上毫无用处。</span>  
> *And that part's important, because a tripwire that nobody sees is practically useless.*  
> <span class="qm">—— Sachin Malhotra · [11:17]</span> ^q5

> <span class="qz">它实际上更像烟雾报警器，而不是门上的锁。</span>  
> *It's effectively the smoke detector, not the lock on the door.*  
> <span class="qm">—— Sachin Malhotra · [11:27]</span> ^q6

> <span class="qz">而第二把钥匙不是智能体自己持有的东西，它必须是另外某个人。</span>  
> *And the second key is not something that the agent holds itself, it has to be someone else.*  
> <span class="qm">—— Sachin Malhotra · [12:55]</span> ^q7

> <span class="qz">文本可以塑造意图，但任何地方都没有强制执行。</span>  
> *Text can shape the intent, but there is no enforcement anywhere.*  
> <span class="qm">—— Sachin Malhotra · [16:02]</span> ^q8

> <span class="qz">它做不到的是解释为什么，而且一个聪明的提示词注入也没法真的说服它放弃规则本身。</span>  
> *What it can't do is explain the why, and a clever prompt injection cannot really talk it out of the rule itself.*  
> <span class="qm">—— Sachin Malhotra · [16:28]</span> ^q9

> <span class="qz">现在，在这种情况下，你在技术上其实没有一个速率限制。你只有一个建议。</span>  
> *Now, in this case, you technically don't have a rate limit. You just have a suggestion.*  
> <span class="qm">—— Sachin Malhotra · [18:19]</span> ^q10

> <span class="qz">有了代理在链路中，智能体永远不能说它是谁。代理已经知道了。</span>  
> *With the proxy in the path, the agent never gets to say who it is. The proxy already knows.*  
> <span class="qm">—— Sachin Malhotra · [18:23]</span> ^q11

> <span class="qz">如果你把这一条规则做对了，其他一切都只是调优。</span>  
> *If you get that one rule right, everything else is just tuning.*  
> <span class="qm">—— Sachin Malhotra · [19:29]</span> ^q12

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-09-twiml-do-ai-tokenomics-matter-more-than-model|斯坦福语言学家的代币经济学：你的 token 贬值了]]<span class="pd-rz">同公司:Anthropic · 同概念:令牌 (token)、智能体 (agent)、Claude Code</span>
- [[2026-06-25-ainativedev-why-agents-are-forcing-enterprises-to-fi|DevOps 之父谈智能体开发：谁来管、怎么管、别踩什么坑]]<span class="pd-rz">同概念:CI/CD、令牌 (token)、智能体 (agent)</span>
- [[2026-09-07-twentyvc-20vc-the-100-billion-ai-assistant-race-t|邮箱里的 AI 助手：Plaid 前 CTO 谈如何在巨头围剿下赢]]<span class="pd-rz">同公司:Anthropic · 同概念:令牌 (token)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、Claude Code</span>
- [[2026-04-23-lennys-how-anthropics-product-team-moves|Claude Code 产品负责人:AI 时代 PM 的生存法则]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、Claude Code</span>
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|代码量暴涨8倍后，工程管理怎么办？]]<span class="pd-rz">同公司:Anthropic · 同概念:智能体 (agent)、Claude Code</span>

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
