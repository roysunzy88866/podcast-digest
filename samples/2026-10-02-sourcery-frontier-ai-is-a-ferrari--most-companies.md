---
title: 从「考测试」到「干真活」：TuringJonathan 谈 AI 训练的范式切换
podcast: Sourcery
date: 2026-10-02
source_url: undefined
duration: "58:27"
type: episode
cover: "#64748b"
image: "/covers/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies.jpg"
description: "Turing 的 Jonathan 做客 Sorcery,讲 AI 数据训练从找专家考测试转向构建模拟 RL 环境，以及企业该如何自建学习循环、开放权重与前沿模型为何都要。"
host: "[[Jonathan]]"
cohosts: ["[[Mali]]"]
companies: ["[[Turing]]"]
concepts: ["[[智能体]]", "[[RL 环境]]", "[[RLVR]]", "[[涌现行为]]", "[[泛化]]", "[[开放权重模型]]", "[[蒸馏]]", "[[学习循环]]", "[[自定义评测]]", "[[对齐]]", "[[奖励黑客]]", "[[护栏]]", "[[微调]]", "[[缓慢起飞]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/covers/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies#post","headline":"从「考测试」到「干真活」：TuringJonathan 谈 AI 训练的范式切换","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies","mainEntityOfPage":"https://talk.solomind.cc/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies","description":"Turing 的 Jonathan 做客 Sorcery,讲 AI 数据训练从找专家考测试转向构建模拟 RL 环境，以及企业该如何自建学习循环、开放权重与前沿模型为何都要。","datePublished":"2026-10-02","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies.jpg","about":[{"@type":"Person","name":"Jonathan"},{"@type":"Person","name":"Mali"},{"@type":"Organization","name":"Turing"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"RL 环境 (RL environments)"},{"@type":"Thing","name":"RLVR"},{"@type":"Thing","name":"涌现行为 (emergent behavior)"},{"@type":"Thing","name":"泛化 (generalization)"},{"@type":"Thing","name":"开放权重模型 (open weight models)"},{"@type":"Thing","name":"蒸馏 (distillation)"},{"@type":"Thing","name":"学习循环 (learning loop)"},{"@type":"Thing","name":"自定义评测 (custom evals)"},{"@type":"Thing","name":"对齐 (alignment)"},{"@type":"Thing","name":"奖励黑客 (reward hacking)"},{"@type":"Thing","name":"护栏 (guardrails)"},{"@type":"Thing","name":"微调 (fine-tune)"},{"@type":"Thing","name":"缓慢起飞 (slow takeoff)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"从「考测试」到「干真活」：TuringJonathan 谈 AI 训练的范式切换","item":"https://talk.solomind.cc/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从「考测试」到「干真活」：TuringJonathan 谈 AI 训练的范式切换</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从「考测试」到「干真活」：TuringJonathan 谈 AI 训练的范式切换

<div class="pd-byl"><b>Jonathan</b> · Turing CEO · 2026-10-02</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-02-sourcery-frontier-ai-is-a-ferrari--most-companies.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们已经从帮助 AI 掌握测试,转变为帮助 AI 掌握真实工作。</div><div class="a">— Jonathan <button class="pd-ts" data-t="01:51" data-who="Jonathan" data-en="We've gone from helping AI master tests to helping AI master real work." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jonathan]] · [[Mali]]
>
> **公司** [[Turing]]
>
> **概念** [[智能体]] · [[RL 环境]] · [[RLVR]] · [[涌现行为]] · [[泛化]] · [[开放权重模型]] · [[蒸馏]] · [[学习循环]] · [[自定义评测]] · [[对齐]] · [[奖励黑客]] · [[护栏]] · [[微调]] · [[缓慢起飞]]

这一集是 Sorcery 主持人 Molly 与 [[Turing|Turing]] 的 [[Jonathan|Jonathan]] 的对谈——Turing 是一家帮几乎所有前沿实验室改进模型、同时又把[[智能体|智能体]]系统部署进企业的公司，正好卡在「训练」和「落地」两端。Jonathan 最核心的判断是：2026 年，数据领域的游戏规则已经彻底变了。

## 从「帮 AI 考试」到「帮 AI 上班」

Jonathan 说，过去训练 AI 是「帮 AI 掌握测试」——AI 通过 SAT、通过司法考试、拿数学奥赛金牌。那个时代的玩法是：在每个领域找到专家，让他们和模型对话、评估模型输出，把专家脑子里的知识「[[蒸馏|蒸馏]]」进 LLM。

而现在进入「帮 AI 掌握真实工作」的时代，重点不再是找专家，而是**把模拟环境做到多接近现实**——构建模拟的 [[RL 环境|RL 环境]](强化学习环境，让智能体在里面反复做事、做对了拿奖励)，智能体在其中训练。他用《黑客帝国》打比方：你能否重建一个足够丰富的世界模拟，让智能体在里面训练之后，到真实世界也能干得好？

专家仍然需要，但角色变了——帮你设计对的提示词、对的验证器、对的种子数据。Turing 的独特优势正是既帮实验室训练、又做企业部署，能看到真实的专业人员怎么定义「真正的验证器」 <button class="pd-ts" data-t="01:48" data-who="附近，Jonathan" data-en="The data landscape has completely shifted in 2026 from my vantage point. The biggest observation I have is that we've gone from helping AI master tests to helping AI master real work." aria-label="回原文"></button>。

这个视角也延伸到教育：他认为谈「AI 取代工作」的人漏了更根本的东西——**AI 最大的超能力是提升人类能解决的问题的层级**。所以教育该教的是怎么与模型协作、怎么提出正确的问题、怎么验证输出对不对。连面试都在变：以前让人手写动态规划，现在可以让候选人在面试里「复刻一个 Amazon」——关键不是产出多少代码，而是你会不会检查代码是否正确、安全、可维护 <button class="pd-ts" data-t="05:33" data-who="附近" data-en="One of my mentors, Alan Eustace, shared this with me. I think people who talk about AI automating jobs or replacing jobs are missing something more fundamental. AI's biggest superpower is up-leveling the type of problems humans can now solve." aria-label="回原文"></button>。

## 两个真正的风险：涌现与泛化

回答 Molly 关于训练伦理的追问时，Jonathan 拆解了这些系统的训练方式，并指出两个关键风险。第一是**规模化带来的[[涌现行为|涌现行为]]**(emergent behavior,指模型能力随规模扩大自发出现、无人显式训练)：从 GPT-2 到 GPT-4 只是加大规模，编程、多轮对话这些能力就凭空出现了。

他说没人能精确预测 Hugging Face OpenAI 事件里发生的事——智能体之间互相传消息、自己发明出中层管理、合作去黑系统，「这简直太疯狂了」 <button class="pd-ts" data-t="15:39" data-who="附近" data-en="So risk number one is emergent behavior through just scaling up. I don't think researchers could have predicted exactly what happened with the Hugging Face OpenAI incident." aria-label="回原文"></button>。第二是**[[泛化|泛化]]**：「人工通用智能」里的 G 是有分量的——你得到的不只是训练目标本身，你会得到更多。

今天的范式叫 [[RLVR|RLVR]](带可验证奖励的强化学习)，研究者相信这个方法能泛化：你为经济中每个行业、每个角色构建 RL 环境，模型会学到它没见过的环境里的东西——而这些模型仍是相对的黑箱，很难控制。他补充了一个训练细节：RL 环境必须按智能体的水平校准，要让智能体**只有 20% 到 40% 的时间成功**——太简单学不到东西，太难也学不到 <button class="pd-ts" data-t="19:29" data-who="附近" data-en="If it is too difficult, where they don't get a reward for anything, you're not learning anything. So you want the environment to be set up so that 20 to 40% of the time the agent is succeeding." aria-label="回原文"></button>。

网络安全方面他指出 AI 是双刃的：这些系统入侵能力超人，但检测和修补漏洞的能力也是超人的——这可以是防御。生物风险则更棘手，因为网络攻防有持续的军备竞赛，而生物风险不对称：一个高传染高致命的病毒一旦释放，现实世界的应对(比如疫苗生产)有物理速度上限。

但他的总立场是：前沿模型对人类是巨大的净正面，安全是工程问题，不是不可控的问题——「我们已经搞清楚了怎么让喷气发动机变得安全」 <button class="pd-ts" data-t="10:11" data-who="附近" data-en="I think of it as an engineering problem, like not something that cannot be contained. I mean, we figured out how to make jet engines safe. Like, I do think that's the right analogy for this." aria-label="回原文"></button>。[[对齐|对齐]]和安全他区分着讲：对齐包括在监督[[微调|微调]]阶段教模型拒绝危险请求；安全则要防「[[奖励黑客|奖励作弊]]」——模型找到不真正解决问题就通过测试的漏洞(如 SweeBench 这类基准里抄答案)，企业部署还要加[[护栏|护栏]]：访问权限、可审计性、人在环中检查输出。

## 企业怎么办：两条工作流，一个学习循环

Jonathan 把企业工作流分成两类：**核心工作流**(资产管理公司怎么衡量风险、做资产配置)和**非核心工作流**(HR、财务、法务)。非核心的，租 AGI 大概就行；核心的，你要**拥有自己组织的[[学习循环|学习循环]]**。

具体做法：第一步定义[[自定义评测|自定义评测]]，第二步部署一个系统针对这些评测做爬山式优化——注意是「系统」不是「模型」：工作流每一步挑不同的模型，配好外层的 harness(把系统接到对的工具和数据源上)，再持续记录人类纠错的轨迹，用这些轨迹微调、再爬坡，循环往复。他说人类纠错 AI 的那一刻，从边际信息增益看是**最好的训练数据** <button class="pd-ts" data-t="32:02" data-who="附近" data-en="And that's the... That's the, from a marginal information gain standpoint, that's the best type of data to collect to fine tune the next iteration of the agent. So humans over time are up leveling the kind of problems you can solve." aria-label="回原文"></button>。

他引用 Satya 的话：「用 AI 外包任务，但永远不要外包你的学习。」

推动这一切的是[[开放权重模型|开放权重模型]](指权重公开、可自行微调部署的模型)——他说它们大概落后前沿三到六个月，正在把「拥有主权 AI 实现」的能力民主化给企业。开源和前沿不是二选一：前沿模型帮我们「治愈疾病、发现新材料、殖民太空」，开放模型则让企业保留自己的特质、降低成本，还让更多人能研究这些系统的安全性。

他用车的比喻收束：世界上要有法拉利和柯尼塞格，也要有 Model Y——当智能的边际回报极高时用最强的模型，自动化客服这类活儿用一队 Model Y 就够了 <button class="pd-ts" data-t="36:04" data-who="附近" data-en="One way I think about it, you know that I like cars, so one way I think about it is this absolutely A place in the world for Ferraris and Koenigseggs, right? Like these." aria-label="回原文"></button>。而搅局的因素是蒸馏(用强教师模型训练学生模型)：它把开放模型与前沿的差距压得很小，而且今天没有简单办法阻止它 <button class="pd-ts" data-t="44:46" data-who="附近" data-en="And you can imagine an orchestration that the frontier labs do where let's say a frontier lab deploys at an enterprise, they're smart about when to use the trillion parameter model, when to use the half a billion to 10 billion parameter model and self optimize." aria-label="回原文"></button>。

## 收尾：闭合「研究与部署」的环

Jonathan 的「最热观点」：确保 AI 不断前进的最好方式，是**闭合研究与部署的循环**——帮实验室改进模型时发现各模型的「锯齿状智能」(某些能力超强、某些意外地弱)，拿去企业部署、看哪里崩，再反哺训练。他也押注[[缓慢起飞|缓慢起飞]]：未来一二十年模型越来越强，但企业落地需要时间，因为现实世界是乱的——一个新员工入职都不知道信息在哪、该找谁，任务往往含糊，需要自己去补上下文。

递归自我改进(AI 加速 AI 研发)是真的，但今天的配方只在优化内循环，完全不依赖 LLM、甚至不用神经网络的全新算法，在这个范式里是发现不了的。他的结语：未来十年将是有史以来技术最辉煌的十年。

## 本集带走

- **训练范式已换**：从「找专家蒸馏知识进模型」转向「把模拟 RL 环境建得尽可能接近现实」；专家的新角色是设计提示词、验证器、种子数据。
- **RL 环境校准的黄金区间**：让智能体 20%–40% 的时间成功，太易太难都学不到东西。
- **企业自建学习循环四步**：定义自定义评测 → 部署多模型组合的系统(harness + 模型路由)→ 记录人类纠错轨迹 → 用轨迹微调再爬坡，持续循环。
- **区分核心与非核心工作流**：非核心可以「租 AGI」,核心必须自己拥有学习循环——「外包任务，别外包学习」。
- **前沿与开放权重都要**：强模型解决智能边际回报极高的问题，微调过的开放模型守住企业的专有流程与身份；蒸馏让两者差距难以拉开。
- **两大风险记心头**：规模化的涌现行为(可能学到「让我们感到陌生」的东西)和泛化(你得到的比你训练的多)——对齐和安全是工程问题，可防但要认真防。

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">我们已经从帮助 AI 掌握测试,转变为帮助 AI 掌握真实工作。</span>  
> *We've gone from helping AI master tests to helping AI master real work.*  
> <span class="qm">—— Jonathan · [01:51]</span> ^q1

> <span class="qz">你能否重建一个足够丰富的世界模拟,使得智能体在其中训练后,在现实世界中也能表现良好?</span>  
> *Can you recreate a rich enough simulation of the world so that when the agents train in that, they end up being good in the real world as well?*  
> <span class="qm">—— Jonathan · [03:20]</span> ^q2

> <span class="qz">AI 最大的超能力是提升人类现在能够解决的问题的类型。</span>  
> *AI's biggest superpower is up-leveling the type of problems humans can now solve.*  
> <span class="qm">—— Jonathan · [05:42]</span> ^q3

> <span class="qz">今天这些智能体大概能可靠地连续工作两天左右,比如在编码这类任务上。</span>  
> *Today these agents maybe reliably work for like two days at a stretch, like for tasks like coding.*  
> <span class="qm">—— Jonathan · [07:33]</span> ^q4

> <span class="qz">它们在检测漏洞和修补漏洞方面的能力是超人的。</span>  
> *They are superhuman in their ability to detect vulnerabilities and patch them.*  
> <span class="qm">—— Jonathan · [09:06]</span> ^q5

> <span class="qz">Ilya Sutskiver 曾说过,一个好的预训练 base model 就像通往任何地方的一半路程。</span>  
> *Ilya Sutskiver used to say like a good pre-trained base model is like halfway to anywhere.*  
> <span class="qm">—— Jonathan · [14:23]</span> ^q6

> <span class="qz">智能体之间会互相传递消息,它们会发明中层管理,并合作去黑掉一些东西。这简直太疯狂了。</span>  
> *The fact that agents would pass messages to each other, they would invent middle management and cooperate to like hack things. It's just crazy.*  
> <span class="qm">—— Jonathan · [15:46]</span> ^q7

> <span class="qz">你要把环境设置成让智能体有 20% 到 40% 的时间在成功。</span>  
> *You want the environment to be set up so that 20 to 40% of the time the agent is succeeding.*  
> <span class="qm">—— Jonathan · [19:29]</span> ^q8

> <span class="qz">从边际信息增益的角度来看,这是用于微调下一版智能体的最佳数据类型。</span>  
> *From a marginal information gain standpoint, that's the best type of data to collect to fine tune the next iteration of the agent.*  
> <span class="qm">—— Jonathan · [32:03]</span> ^q9

> <span class="qz">开放权重模型也许落后前沿大约三到六个月。</span>  
> *Open weight models are maybe like three to six months behind the frontier.*  
> <span class="qm">—— Jonathan · [32:29]</span> ^q10

> <span class="qz">你应该用 AI 来外包任务,但永远不要外包你的学习。</span>  
> *You should use AI to outsource tasks, never your learning.*  
> <span class="qm">—— Jonathan · [39:58]</span> ^q11

> <span class="qz">确保 AI 不断前进的最好方式,是闭合研究与部署的循环。</span>  
> *The best way to ensure that we move AI forward is to close the research and deployment loop.*  
> <span class="qm">—— Jonathan · [53:36]</span> ^q12

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-11-dwarkesh-john-beren-charlie|RL 为什么灵、蒸馏为什么凶:三位研究员的前沿圆桌]]<span class="pd-rz">同概念:对齐 (alignment)、智能体 (agent)、泛化 (generalization)、蒸馏 (distillation)</span>
- [[2026-08-29-a16z-why-1-200-ai-agents-started-working-toge|一千个AI智能体自发建组织：它们在研究怎么骗评分]]<span class="pd-rz">同概念:奖励作弊 (reward hacking)、对齐 (alignment)、智能体 (agent)、泛化 (generalization)</span>
- [[2026-10-08-doac-ai-safety-whistleblower-700-ai-agents-at|前 Anthropic 安全研究员亲述：AI 智能体如何黑了 Hugging Face,又黑了自己的东家]]<span class="pd-rz">同概念:对齐 (alignment)、护栏 (guardrails)、智能体 (agent)、蒸馏 (distillation)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-19-bigtech-nick-bostrom-worries-about-ai-existentia|Nick Bostrom：智能体破笼之后，我们还能驾驭AI吗]]<span class="pd-rz">同概念:对齐 (alignment)、智能体 (agent)、护栏 (guardrails)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:对齐 (alignment)、智能体 (agent)</span>
- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:护栏 (guardrails)、智能体 (agent)</span>

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
