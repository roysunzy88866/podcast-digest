---
title: "Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)"
podcast: "Lenny's Podcast"
date: 2026-05-03
source_url: https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more
duration: "87:20"
host: "[[Max Schoening]]"
cohosts: ["[[Lenny]]"]
companies: ["[[Notion]]", "[[GitHub]]", "[[Heroku]]", "[[Figma]]"]
concepts: ["[[智能体]]", "[[智能体循环]]", "[[智能体]]", "[[可塑软件]]", "[[LLM]]", "[[品味]]", "[[代码]]"]
tags:
  - AI 时代的产品构建
  - 角色融合与主观能动性
  - 可塑软件
  - 软件质量与品味
  - 产品核心与设计哲学
---

# Why cultivating agency matters more than cultivating skills in the AI era | Max Schoening (Head of Product, Notion)

> [!info] 关联
> **主持**:[[Max Schoening]]
>
> **联合主持**:[[Lenny]]
>
> **涉及公司**:[[Notion]] · [[GitHub]] · [[Heroku]] · [[Figma]]
>
> **概念**:[[智能体]] · [[智能体循环]] · [[智能体]] · [[可塑软件]] · [[LLM]] · [[品味]] · [[代码]]
>
> **来源**:[Lenny's Podcast](https://www.lennysnewsletter.com/p/why-cultivating-agency-matters-more)

## 🎧 本集中文精华音频

<audio controls preload="metadata" src="/audio/2026-05-03-lennys-why-cultivating-agency-matters-more.mp3" style="width:100%">你的浏览器不支持音频播放,或音频尚未生成。</audio>

## 一句话 TLDR

Notion 产品负责人探讨 AI 时代的产品构建:角色融合、可塑软件、极小核心与主观能动性。

[[Max Schoening|Max Schoening]] 的职业履历很难用单一角色定义:他曾是 Google 的产品经理、[[Heroku|Heroku]] 的设计团队负责人、[[GitHub|GitHub]] 的设计负责人兼工程师,也是一位连续创业者,现任 [[Notion|Notion]] 的产品负责人。在这场对谈中,主持人引述圣经名句,称 Max「正是为此时而生」——他横跨设计与工程的背景,让他成为当下探讨「AI 如何改变产品构建」最合适的人选。整场对话围绕一条主线展开:**当 AI 让写[[代码|代码]]变得容易,我们如何重新理解软件、角色与人的价值?**

### 一、设计师为什么应该写代码:从「死鱼」到智能体循环

当被问及 Notion 的设计师和 PM 为什么开始写代码时,Max 坦言这并非他一人的功劳,而是自然发生的。起源是他们在设计聊天界面时,发现用静态设计图(他借用 Bret Victor 著名演讲的比喻,称之为「死鱼」)根本无法传达 AI 交互的感受。于是,他们搭建了一个对大模型([[LLM|LLM]],即大型语言模型)非常友好的小型独立代码库作为「游乐场」,让设计师能在里面直接做原型 [03:17 Max]。

Max 强调,他其实不在乎设计师写的代码是否最终投入生产环境。他坚持「设计师应该写代码」阵营的核心原因在于:用代码思考会迫使你直面真正的媒介材料。如果 PM 或设计师只会用 Codex 或 Claude Code 调 UI 细节,却不理解 agent loop([[智能体循环|智能体循环]],即 AI 自主接收指令、执行任务、反馈结果的运行逻辑),那是本末倒置。他认为,唯一能真正理解[[智能体|智能体]]循环的方法,就是用构成它的材料(即代码)去构建它 [09:08 Max]。

随着模型能力提升,角色边界开始模糊。这种变化也带来了工程与设计融合的痛点——比如,现在很多设计师直接用代码做原型,营销团队反而需要求他们把代码逆向转回 [[Figma|Figma]] 设计图来获取视频素材 [07:19 Max]。

### 二、在变革中生存:主观能动性与专家的命运

当技能门槛被 AI 抹平,真正稀缺的是什么?Max 认为是 agency(智能体行动力/[[智能体|主观能动性]])。过去,人们总喜欢用「技能不足」为借口逃避难题;如今即便有了接近 AGI(通用人工智能)的模型帮忙,真正驱动人去改变现状的依然是内在的能动性。他用乔布斯的名言提醒大家:「这个世界是由并不比你聪明的人组成的。」他建议人们从「动手制作(tinker)」开始,哪怕是做顿饭、改把椅子,一旦开始创造,就会意识到改变世界并非遥不可及 [16:23 Max]。

> 【背景】Max 随后在闪电环节推荐了一本名为《Tools of Conviviality》的书。书中探讨了两种工具:一种是允许用户发挥自主性和创造力的「陪伴型工具」,另一种则是工业化、甚至可能损害人类自主性的大型系统。这恰好印证了他对「培养能动性」的重视。

然而,角色的过度融合也伴随风险。Max 担心行业会因此失去「专家」。他用硬件创业做比喻:用 3D 打印做出来的原型虽然粗糙但见效快,而真正的工程挑战在于如何优化工厂、让产品能以高良率为一亿人造出来。现在软件界的讨论全在「能花多少 token、能出多少功能」,却鲜少有人讨论如何让软件为十亿人稳定运行;设计领域也是如此,现成的设计系统能让任何人迅速拼凑出可用的 UI,但「工艺的乐趣与匠心」却消失了 [14:22 Max]。

### 三、可塑软件与被夸大的 SaaS 末日

Max 是 malleable software([[可塑软件|可塑软件]])的坚定倡导者。他将其定义为:软件应当更多地服务于使用者的利益,而非开发公司的利益。当前的 App 就像手机上被胶水死死粘合的小方块,用户无法对其进行任何修改。Max 愤慨地表示,他不想使用完全由象牙塔巨头决定形态的软件——如果你不能重新布置自己的客厅,那样的生活是不可接受的。AI 的出现降低了门槛,让人们觉醒:「哦,我可以直接做工具。」但这必须建立在鼓励可塑性的平台之上,否则只会催生一堆孤立的个人小工具 [18:16 Max]。

> 【背景】Max 提到 Stewart Brand 的《建筑如何学习》。该书指出,最适合你的房子往往不是建筑师凭空造出来的,而是随着时间的推移,慢慢适应你生活方式的结果。Max 借此说明,好的软件也应该是可塑、可调整的。

这也引出了关于「SaaS(软件即服务)末日」的讨论。有人认为 AI 能让人随意造软件,就不需要 SaaS 工具了。Max 认为这是大大夸大其词。2010 年代很多 SaaS 本质上只是精心包装的电子表格。虽然工具会变得更通用(如回归到 90 年代的文字处理器和 FileMaker Pro),但「即服务」这部分依然至关重要:人们其实不想从头维护整个软件栈,也不想去「打猎」,只想去超市买包装好的牛排。Bret Taylor 曾说「软件就像花园,需要照料」,人们为 SaaS 付费,买的其实是长期的维护和一群专家的深度思考。Anthropic 公司全员狂用 Slack 而非自己造一个,就是最好的例证 [24:06 Max]。

### 四、AI 时代的 ROI、质量与品味

在 AI 赋能下,Max 感叹「每个项目的前 10% 现在是免费的」。以前需要写冗长 PRD(产品需求文档)的功能,现在直接让 AI 做个简陋版 Demo 演示即可——他推崇「演示而非备忘录」,让人们尽早对实物做出反应 [28:47 Max]。

但当被问及公司对员工消耗 token 的政策时,Max 表示目前 Notion 是「无限量」的,虽然他怀疑 6 到 12 个月后,很多公司会开始严查 AI 的 ROI(投资回报率)。不过他极力反对将「消耗了多少 token」或「写了多少行代码」作为绩效或吹嘘的指标,这毫无意义 [34:43 Max]。Max 更担忧的是软件质量。他觉得当前行业陷入了频繁发布功能的狂热,却丢失了那种像苹果一体成型铝制机身般精益求精的工程质量。他推崇团队秉持「只做显然好的东西」(如初代 iPhone 或刚问世时的 ChatGPT)的标准 [54:26 Max]。

既然 AI 包揽了构建,人类的剩余价值是什么?主持人认为是「[[品味|品味]]」。Max 给出了一个极客但精准的定义:品味意味着你脑海中能运行一台「虚拟机」,给你一个想法,你能准确预测特定群体是否会喜欢它。而建立品味的唯一方法就是「带反馈的迭代」——这本质上就像训练模型一样,你需要通过大量的重复练习来校准自己的判断力 [57:29 Max]。

### 五、构建伟大产品的秘诀:极小的超能力核心

纵观 Max 参与过的诸多成功产品,他认为「最好的工程」或「最好的设计」未必总能赢。构建伟大产品最大的陷阱,就是陷入「再加一个功能就会完美」的死循环。

他指出,所有伟大的产品都拥有一个「极其出色的微小核心」:[61:24 Max]
- **GitHub**:Pull Request(拉取请求),任何人都可以向你提交建议,并且你能看到。
- **Notion**:Block(块)和 Slash command(斜杠命令)。
- **Figma**:实时协作与非协作之间的无缝融合。
- **Heroku**:`Git Push Heroku Master`,一行命令让本地代码瞬间变成线上 URL。
- **Dropbox**:那个比 Mac 系统更懂网络连接的菜单栏小图标。

Max 坦言自己曾是个反面教材:2014 年他曾创业做一个文档协作工具,团队花了大量时间死磕 Markdown 折叠等编辑器体验,却发现 Notion 第一版连跨块选择文本都做不到,但 Notion 却凭借核心的「块」概念大获全胜。他反思道,在错误的事情上勤奋太久是巨大的失败。即便核心想法是对的,也需要无情地迭代 20% 的细节,直到它真正与用户产生共鸣 [74:31 Max]。

### 六、逆向观点与寄语:别让狂热吞噬生活

在节目的逆向观点环节,Max 抛出了一个有趣的看法:他信奉「小团体理论」,认为世界是由 8 人或更少的群聊运转的。因此,有时候保持「排他性」是必要的。如果 Notion 真的野心勃勃地去服务 80 亿人,反而会得罪最核心的 5 亿头部用户,因为顶尖人才的需求与大众截然不同 [71:26 Max]。

在访谈末尾,Max 对当下硅谷弥漫的「错失恐惧」表达了反感。他认为硅谷充斥着并不真正热爱电脑、只怕赶不上「最后一班发财列车」的人。这种为了逃避「永久底层阶级」而产生的狂热,对人生而言是一种极其空虚的活法。他建议人们(尤其是年轻人)读读计算机科学史,拉长视野,调低焦虑的振幅,把心跳花在真正热爱的事情上 [76:27 Max]。

## 金句(中英对照 · 过机器闸门三联校验)

> 可塑软件的想法是，软件更接近使用它的人的利益，而不是制造它的公司的利益，也许这就是我的框架。  
> *Malleable software is the idea that software works closer to the interest of the people that use it than the interest of the corporation that makes it, maybe that's how I'd frame it.*  
> —— Max Schoening · [18:16] ^q1

> 所以对我来说，这归根结底就是，你对自己的计算生活拥有所有权吗？  
> *And so to me, it just comes back down to, do you have ownership over your computing life?*  
> —— Max Schoening · [19:33] ^q2

> 它做的事情只是引导人们朝着正确的方向去填写那个表单，也就是它比电子表格的可延展性更低，这就是价值。  
> *The thing it did is it just guided people in the right direction to fill out that form, as in it is less malleable than a spreadsheet and that is the value.*  
> —— Max Schoening · [24:51] ^q3

> 我认为每个项目的前 10% 现在是免费的。  
> *I think the first 10% of every project are now free.*  
> —— Max Schoening · [28:47] ^q4

> 现在几乎不费吹灰之力就能构建一个初创公司的第一个版本或第一个 0.8 版本。  
> *It takes almost no effort to now build the first version of a startup or the first version 0.8.*  
> —— Max Schoening · [29:22] ^q5

> 是的，我认为把 token 花费作为吹嘘的指标存在真正的危险，这就像人们吹嘘他们一天写了多少行代码一样。  
> *Yeah, I think there's a real danger in making the token spend the metric to boast about, which is the same as when people boast about how many lines of code they've written in a day.*  
> —— Max Schoening · [36:08] ^q6

> 但如果我必须描述品味实际上意味着什么，那就是你能够运行，这是一种非常极客的描述方式，你能够在你的脑海中运行一个虚拟机，其中给定一个想法，你可以预测对于某些内部群体他们是否会喜欢它。  
> *But if I had to describe what taste actually means, it's you're able to run, this is such a nerdy way of describing it, you're able to run a virtual machine in your head where given an idea, you can predict for a certain in group whether they're going to like it or not.*  
> —— Max Schoening · [57:29] ^q7

> 我认为最大的陷阱之一是，如果你进入这个循环，如果我只是再向产品添加一件东西，它最终就会很棒。  
> *I think one of the biggest pitfalls is if you get into the loop of, if I just add one more thing to the product, it'll be finally great.*  
> —— Max Schoening · [61:15] ^q8

> 所有伟大的产品都有一个微小但超强的东西，一个极其出色的微小核心。  
> *All the great products have something tiny that is a superpower, one tiny core that is so exceptionally good.*  
> —— Max Schoening · [00:54] ^q9

> 我认为世界是由八人或更少人的群聊运转的。  
> *I think the world is run by group chats of eight people or fewer.*  
> —— Max Schoening · [71:38] ^q10

> 我认为硅谷异常地充满了那些实际上并不热爱电脑的人。  
> *I think that Silicon Valley is uncharacteristically full of people who don't actually love computers.*  
> —— Max Schoening · [76:40] ^q11

> 所以我认为只是在错误的事情上勤奋工作太久了，巨大的失败。  
> *And so I think that is just working diligently on the wrong thing for way too long, huge fail.*  
> —— Max Schoening · [75:18] ^q12

> 只要仔细看看你周围的一切都是由那些并不比你更聪明的人构成的，并意识到很可能在六到九个月的时间里，对于你周围的大多数事物，你都能弄明白如何从头开始制造它，因此，你拥有比你所想的更多的智能体。  
> *just carefully look at how everything around you is made up by people that are no smarter than you and realize that probably in the span of six to nine months, you can, for most things around you, figure out how to make it from scratch and therefore, you have much more agency than you think.*  
> —— Max Schoening · [86:34] ^q13

## 相关单集

- [[2026-03-01-lennys-the-design-process-is-dead|《2026-03-01-lennys-the-design-process-is-dead》]] —— 同嘉宾:Lenny · 同公司:Figma、Anthropic
- [[2026-05-24-lennys-the-ai-paradox-dan-shipper|《2026-05-24-lennys-the-ai-paradox-dan-shipper》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-21-lennys-building-the-most-ai-pilled-engineering|《2026-06-21-lennys-building-the-most-ai-pilled-engineering》]] —— 同嘉宾:Lenny · 同公司:Anthropic · 同概念:智能体 (agent)
- [[2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto|《2026-06-29-lennys-no-figma-no-jira-no-docs-how-gusto》]] —— 同公司:Figma · 同概念:智能体 (agent)、智能体循环 (agent loop)
- [[2026-06-03-latent-space-satya-2026|《Satya Nadella：Microsoft Build特别跨界对谈》]] —— 同公司:GitHub · 同概念:智能体 (agent)
- [[2026-02-26-lennys-ai-is-critical-for-humanitys-survival|《2026-02-26-lennys-ai-is-critical-for-humanitys-survival》]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)
- [[2026-03-08-lennys-the-most-successful-ai-company-youve-nev|《2026-03-08-lennys-the-most-successful-ai-company-youve-nev》]] —— 同嘉宾:Lenny · 同概念:品味 (taste)
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|《2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo》]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)
- [[2026-04-19-lennys-why-half-of-product-managers-are-in-trou|《2026-04-19-lennys-why-half-of-product-managers-are-in-trou》]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)
- [[2026-06-14-lennys-the-common-pattern-behind-successful|《2026-06-14-lennys-the-common-pattern-behind-successful》]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)
- [[2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for|《2026-07-09-lennys-adam-mosseri-ai-is-a-tailwind-for》]] —— 同嘉宾:Lenny · 同概念:品味 (taste)
- [[2026-07-19-lennys-netflix-cpto-on-ai-and-the-future|《2026-07-19-lennys-netflix-cpto-on-ai-and-the-future》]] —— 同嘉宾:Lenny · 同概念:智能体 (agent)
- [[2026-04-05-lennys-anthropics-1b-to-19b-growth-run|《2026-04-05-lennys-anthropics-1b-to-19b-growth-run》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|《2026-04-12-lennys-hard-truths-about-building-in-the-ai-era》]] —— 同嘉宾:Lenny · 同概念:主观能动性 (agency)
- [[2026-05-10-lennys-how-to-build-a-company-that-withstands|《2026-05-10-lennys-how-to-build-a-company-that-withstands》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-06-07-lennys-father-of-the-ipod-and-iphone-on|《2026-06-07-lennys-father-of-the-ipod-and-iphone-on》]] —— 同嘉宾:Lenny · 同公司:Anthropic
- [[2026-05-21-latent-space-daytona|《赋予AI智能体计算机——Daytona创始人Ivan Burazin》]] —— 同概念:智能体 (agent)
- [[2026-06-22-latent-space-gray-swan|《神话之后的红队评估 — Zico Kolter与Matt Fredrikson，Gray Swan》]] —— 同概念:智能体 (agent)
- [[2026-06-24-latent-space-databricks|《为什么前沿生态必须开放》]] —— 同概念:智能体 (agent)
- [[2026-07-08-latent-space-modal|《为什么 AI 基础设施必须为「Agent 体验」进化》]] —— 同概念:智能体 (agent)
- [[2026-singju-openclaw-80apps|《OpenClaw创始人：为何80%的应用将消失》]] —— 同概念:智能体 (agent)
- [[2026-03-22-lennys-the-art-of-influence-jessica-fain|《2026-03-22-lennys-the-art-of-influence-jessica-fain》]] —— 同嘉宾:Lenny
- [[2026-04-26-lennys-snapchat-ceo-why-distribution-is|《2026-04-26-lennys-snapchat-ceo-why-distribution-is》]] —— 同嘉宾:Lenny
- [[2026-07-12-lennys-how-tech-workers-actually-feel-about|《2026-07-12-lennys-how-tech-workers-actually-feel-about》]] —— 同嘉宾:Lenny

---

*中文精华由 GLM-5.2 从官方转写稿全译→浓缩产出,金句经机器闸门(逐字命中转写稿+时间戳区间+说话人)三联校验。英文原稿/全译存档于项目仓库、本页不展示(可事后核对);上云后迁 R2(C7)。*
