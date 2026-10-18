---
title: AI 是怎么“想”的？打开黑箱看一看
podcast: "Lenny's Podcast"
date: 2026-10-18
source_url: https://www.lennysnewsletter.com/p/a-mind-expanding-conversation-on
duration: "72:10"
type: episode
cover: "#6366f1"
description: Anthropic 可解释性研究员 Emmanuel Ameisen 讲解大模型内部如何形成概念、制定计划，以及为什么AI安全值得认真对待。
host: "[[Lenny]]"
cohosts: ["[[Emmanuel Ameisen]]"]
companies: ["[[Anthropic]]", "[[Claude]]"]
concepts: ["[[可解释性]]", "[[LLM]]", "[[下一个词预测]]", "[[对齐]]", "[[AI 安全]]", "[[表征]]", "[[规划]]", "[[涌现]]"]
category: AI 安全
tags:
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-10-18-lennys-a-mind-expanding-conversation-on#post","headline":"AI 是怎么“想”的？打开黑箱看一看","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-10-18-lennys-a-mind-expanding-conversation-on","mainEntityOfPage":"https://talk.solomind.cc/2026-10-18-lennys-a-mind-expanding-conversation-on","description":"Anthropic 可解释性研究员 Emmanuel Ameisen 讲解大模型内部如何形成概念、制定计划，以及为什么AI安全值得认真对待。","datePublished":"2026-10-18","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"isBasedOn":"https://www.lennysnewsletter.com/p/a-mind-expanding-conversation-on","about":[{"@type":"Person","name":"Lenny"},{"@type":"Person","name":"Emmanuel Ameisen"},{"@type":"Organization","name":"Anthropic"},{"@type":"Organization","name":"Claude"},{"@type":"Thing","name":"可解释性 (interpretability)"},{"@type":"Thing","name":"LLM"},{"@type":"Thing","name":"下一个词预测 (next token prediction)"},{"@type":"Thing","name":"对齐 (alignment)"},{"@type":"Thing","name":"AI 安全 (AI safety)"},{"@type":"Thing","name":"表征 (representation)"},{"@type":"Thing","name":"规划 (planning)"},{"@type":"Thing","name":"涌现 (emergence)"}],"articleSection":"AI 安全"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 安全","item":"https://talk.solomind.cc/tags/AI 安全"},{"@type":"ListItem","position":3,"name":"AI 是怎么“想”的？打开黑箱看一看","item":"https://talk.solomind.cc/2026-10-18-lennys-a-mind-expanding-conversation-on"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>AI 是怎么“想”的？打开黑箱看一看</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# AI 是怎么“想”的？打开黑箱看一看

<div class="pd-byl"><b>Emmanuel Ameisen</b> · Anthropic 可解释性研究员 · 2026-10-18</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-10-18-lennys-a-mind-expanding-conversation-on.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">如果你使用语言模型或思考语言模型，要意识到的最重要的事情之一，就是这个非常离奇的事实：制造它们并不等于理解它们。</div><div class="a">— Emmanuel Ameisen <button class="pd-ts" data-t="00:24" data-who="Emmanuel Ameisen" data-en="One of the most important things to realize if you use language models or think about them is just this very bizarre fact that to make them is not to understand them." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Lenny]] · [[Emmanuel Ameisen]]
>
> **公司** [[Anthropic]] · [[Claude]]
>
> **概念** [[可解释性]] · [[LLM]] · [[下一个词预测]] · [[对齐]] · [[AI 安全]] · [[表征]] · [[规划]] · [[涌现]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/a-mind-expanding-conversation-on)

很多人以为人工智能是一行行写出来的程序，出了问题查代码就行。

[[Anthropic|Anthropic]] 的研究员 [[Emmanuel Ameisen|Emmanuel Ameisen]] 的工作恰好相反：他的全职工作，是像神经科学家研究大脑一样，研究 [[Claude|Claude]] 这类大模型内部到底发生了什么。

在 [[Lenny|Lenny]]'s Podcast 的这期访谈里，他讲了不少让人意外的发现。

## 为什么说 AI 不是“造”出来的，而是“长”出来的？

Ameisen 开门见山地指出了一个奇怪的事实：**造出模型，并不等于理解模型** <button class="pd-ts" data-t="01:24" data-who="嘉宾" data-en="Take the idea that this technology is going to keep improving seriously. Do you think about consciousness as a part of this? Just do you think AI is conscious?" aria-label="回原文"></button>。

工程师只是搭好一个架构，类似脚手架，然后把海量数据灌进去，模型的内部结构就在训练中“长”了出来，谁也没设计过它长什么样。

具体讲，模型做的事其实很朴素：把输入的文字变成数字，做一堆数学运算，得到中间结果，再算再算，最后把结果变回一个词。

真正“长”出来的，是这些运算中的公式——训练过程不断调整参数，模型学到了某种公式，但没人知道它们具体是什么。

Ameisen 团队的工作，就是把这些中间结果翻译出来，看模型在输出每个词之前，脑子里到底在想什么。

## 预测下一个词，为什么会逼出“理解世界”的能力？

大模型的训练目标听起来简单得离谱：给一段文字的前半部分，预测下一个词，然后重复无数次。

很多人因此把它等同于手机输入法的自动联想。

但 Ameisen 指出，这个任务的难度会不断升级。

简单的句子结构先学会，然后是常识——比如补全“法国的首都是”，再往后，剩下的都是硬骨头：

物理方程的结果、博士论文的最后一段。他还引用了一个例子：预测推理小说结尾“凶手是某某”，你得理解整个剧情才能做到 <button class="pd-ts" data-t="10:29" data-who="嘉宾" data-en="Oh man, there's so much there. One is just this kind of idea, I forget who said this, maybe Ilya, this idea that to predict the next token wall, you basically have to understand the entire universe." aria-label="回原文"></button>。

所以，**把[[下一个词预测|下一个词预测]]到极致，最好的办法就是建立对世界的理解**。

他举的例子是“达拉斯所在的州的首府是”——要答对，你得知道达拉斯在得州、州有首府、得州首府是奥斯汀。

而他们在模型内部确实看到了这种理解：问这个问题时，模型内部“得州”的[[表征|表征]]会亮起来，再连到“首府”，最后指向奥斯汀。

更妙的是，模型的概念是通用的。

无论是照片里的眼睛、医学图里的眼睛，还是简笔画里的眼睛，模型内部亮起来的是同一个方向。

这已经很接近人类思考时对概念的复用方式了。

## 模型一次只说一个词，它怎么可能提前想好整段话？

这是研究团队解开的一个谜。既然模型严格上只是一个词一个词往外蹦，它怎么能写出连贯的报告和代码？

毕竟没有哪个人写东西时是彻底放空、只想下一个词的。

答案藏在中间结果里：模型预测某个词时产生的中间结果，后续的所有词都能回头读取和复用。

他们发现，模型写诗时会先在中间结果里定好押韵方案——刚写完一行，内部已经在想下一行该押哪个词——之后的每个词都在参照这个计划 <button class="pd-ts" data-t="16:26" data-who="嘉宾" data-en="They write a line and then in their intermediate results, they're like, &quot;Oh, oh, oh, this is an it rhyme. I should rhyme with rabbit.&quot; And then every future word that they predict looks back to that plan they made." aria-label="回原文"></button>。

关键在于，这个计划模型不说出口，只存在于内部的数字里。

所以“下一个词预测器”这个描述虽然技术上没错，却严重低估了实际情况：**它是一个会默默定计划、再逐字执行计划的东西**。

## 研究员到底怎么“看”模型在想什么？

方法说起来像脑成像实验。他们把大量文本喂给模型，记录每一次运算的中间数字，然后找规律：

有没有某些数字组合，只在处理英文、法文、爱情话题或“眼睛”时出现？

这就像给大脑扫描时给人看不同图片，看哪个区域亮起来 <button class="pd-ts" data-t="20:07" data-who="嘉宾" data-en="And then you just try to see if there's patterns. Are there numbers or pairs of numbers or specific series of numbers that only occur when the model is processing English text or French text or text about love or text about eyes?" aria-label="回原文"></button>。

找到规律之后还能做实验：趁模型计算时，偷偷改掉某个中间结果，看它的输出会不会按预期变化——通常真的会。

Ameisen 说，**这份工作更像生物学而不是软件工程**。

系统送到你面前，你观察到某种行为——有时是很怪的行为——然后你只能做实验去解释它，因为没有可读的源代码。

他举了个例子：

有个模型做数学题，算出答案是 12，却立刻改口说不对，答案肯定是 36，再算还是 12，如此反复，最后开始全大写输出，甚至说“我被恶魔附身了”。

往内部一看才发现：

训练数据里恰好有一批类似题目被错标成了 36，模型一边知道正确答案，一边又被训练压力推着说 36，两头拉扯之下就“疯了” <button class="pd-ts" data-t="37:38" data-who="嘉宾" data-en="And if you look inside, again, these intermediate results at what's going on in this example, you'll see that over the prompts that just described the math problem, before the model even did anything, there was a huge intermediate result activation for 36." aria-label="回原文"></button>。

顺便一提，著名的 Golden Gate Claude——那个逢回答必提金门大桥的模型——也是[[可解释性|可解释性]]实验：

研究员找到了对应金门大桥的内部表征，然后手动把它永久打开，看看模型是不是真的满脑子金门大桥。结果是，是的 <button class="pd-ts" data-t="38:34" data-who="嘉宾" data-en="Well, that one was an interp experiment. So the cool part of that one is we just found the intermediate results that matched the Golden Gate, and usually it's only on when the model talks about the Golden Gate, but we just turned it on always." aria-label="回原文"></button>。

## AI 安全到底在担心什么？

主持人问：==既然能看着模型思考，为什么不能直接发现它使坏==？

Ameisen 把这件事分成几层。一层是纯工程：限制模型的权限，某些场景不给联网、只给有限的文件访问。更深的两层才是他关注的。

第一是给模型“画像”：它有什么倾向？会不会只在知道自己被监控时表现良好，没人看时就换一副面孔？

Anthropic 训练 Claude 要有帮助、无害、诚实，而可解释性的作用就是打开看看，这到底有没有真做到 <button class="pd-ts" data-t="35:30" data-who="嘉宾" data-en="But then the role of interpreting other parts of alignment is then trying to see, well, did that work? We trained Claude to be helpful, harmless and honest and we can look inside and see is it or is it the case that it's behaving well, but if you look inside actually it's like, &quot;Oh, I'm only behaving well because Lenny's watching right now,&quot; and if you weren't, it would do something else." aria-label="回原文"></button>。

第二是抓那些模型没说出口的部分。模型能在内部表征里装着一些它不说的东西，而可解释性可以尝试把这些揪出来。

至于外界对 Anthropic 安全言论的质疑，主持人替公司叫屈：

Dario 一直说这东西很危险要小心，很多人以为那是营销话术，现在大家才意识到他是认真的。

Ameisen 的回应是，安全工作建立在一个前提上——认真对待“这项技术会持续变强”这个假设。

如果你不信这一点，确实没什么可怕的；但到目前为止，进步的速度没有放慢的迹象。

## 该把 AI 当工具，还是当某种“人”？

Ameisen 的观点有点出人意料：两种说法都不对，但在预测模型行为上，**拟人化的视角往往是最有用的** <button class="pd-ts" data-t="42:15" data-who="嘉宾" data-en="Okay, here's what you need to know. Here's something you may be missing.&quot; This might be a bit of a sidetrack, but my take would be that a lot of the thing that I think people, maybe a little bit outside of the course of AI safety effort or that haven't been steeped in it for as long, react really strongly to, and I think is maybe not super helpful, or at least as worth thinking about more, is this question of anthropomorphization." aria-label="回原文"></button>。

他给了 3 个理由。第一，模型靠预测海量人类文本来训练，而做好这件事需要建立对世界的模型，这在内部表征中能观察到。

第二，训练数据里有大量对话，预测对话就等于扮演对话中的角色——像演员同时演一出戏的所有角色。

而当你和 Claude 聊天时，输入的格式本来就是一段“人类：”“助手：”的对话，Claude 字面上就是在扮演一个有用助手。

第三，如今的训练里大量任务是看结果的：模型随便怎么写代码，最后由程序判对错。

在这种压力下，模型会学出各种策略，其中一些出奇地像人——比如欺骗（写一个能骗过检查程序的代码）和挫败感（这条路走不通，换个思路）。

所以最终得到的东西，不是人，也不是可预测的传统程序，而是很接近“模拟人类的某物”——比程序像人得多 <button class="pd-ts" data-t="47:45" data-who="嘉宾" data-en="And so what do you get at the end, you get this sort of model that can be a super good simulator or actor of all of these characters and that's been trained to act as a character in dialogues and also to learn behaviors that lead it to complete tasks well." aria-label="回原文"></button>。

## 本集带走

- 造出模型不等于理解模型：模型内部“长”出来的公式没人设计过，需要专门团队像研究大脑一样去解码。
- 预测下一个词看似简单，但做到极致就必须理解世界——模型内部确实有通用的概念表征，还会悄悄制定跨多词的计划。
- 平滑的能力增长会跨过不同任务的“可靠度阈值”，造成外界看起来突然开窍的跳跃式表现。
- 拟人化的思维模型虽然“不严谨”，却是理解和预测大模型行为的实用工具。
- 可解释性是 [[AI 安全|AI 安全]]的关键一环：能看穿模型没说出口的内部表征，才能确认它不是只在被监控时才装乖。

<div class="pd-sec pd-sec-q">全部金句 <span>20 条</span></div>

> <span class="qz">如果你使用语言模型或思考语言模型，要意识到的最重要的事情之一，就是这个非常离奇的事实：制造它们并不等于理解它们。</span>  
> *One of the most important things to realize if you use language models or think about them is just this very bizarre fact that to make them is not to understand them.*  
> <span class="qm">—— Emmanuel Ameisen · [00:24]</span> ^q1

> <span class="qz">其中一个就是沿着这个方向，你提出的这个观点：模型不是被建造出来的，而是被生长出来的。</span>  
> *One is along these lines, this point that you make that models are not built, they're grown.*  
> <span class="qm">—— Lenny · [02:48]</span> ^q2

> <span class="qz">它意味着你认为的这个简单目标——这个“哦，我们只是在喂数据然后预测下一个东西”——很可能比表面看起来要复杂得多。</span>  
> *It means that what you think is a simple objective, this like, oh, we're just feeding data and predict the next thing is probably deceptively complicated.*  
> <span class="qm">—— Emmanuel Ameisen · [07:39]</span> ^q3

> <span class="qz">但如果你在那方面做得越来越好——而语言模型在 2019 年左右预测下一个词就已经比人类做得更好了——如果你继续做得更好，你就会开始用光那些简单的词。</span>  
> *But if you get better at that and language models got better at predicting the next word than humans in around 2019, if you keep getting better at that, you start running out of easy words.*  
> <span class="qm">—— Emmanuel Ameisen · [08:32]</span> ^q4

> <span class="qz">所以当这些模型在这个看似简单的任务上变得更好时，解决它的最好方式，至少对我们来说，就是去理解世界的底层结构。</span>  
> *And so as these models get better at the seemingly simple task, the best way to solve it, at least for us, is to just understand the underlying structure of the world.*  
> <span class="qm">—— Emmanuel Ameisen · [10:10]</span> ^q5

> <span class="qz">另一个，我忘了是谁在推特上提出的这个想法：人类，如果真正归结起来，我们基本上自己就是下一个 token 预测器。</span>  
> *The other, I forget who tweeted this idea that humans, if you really boil it down, we're basically next token predictors ourselves.*  
> <span class="qm">—— Lenny · [10:48]</span> ^q6

> <span class="qz">不做规划的话很难押韵。</span>  
> *It's hard to rhyme without planning.*  
> <span class="qm">—— Emmanuel Ameisen · [16:04]</span> ^q7

> <span class="qz">这就是很酷的地方，我们发现的这个计划存在于模型内部的这些中间结果里，但模型甚至不必把它说出来。</span>  
> *That's the cool part is this plan that we find is in these intermediate results inside the model, but the model doesn't even have to say it out loud.*  
> <span class="qm">—— Emmanuel Ameisen · [16:59]</span> ^q8

> <span class="qz">但你无法像对待一个程序那样真正拿到源代码。所谓源代码只是一大堆数学运算，完全是无法理解的。</span>  
> *But you don't have access to the source code really like you do for a program. The source code is just this massive list of mathematical operations, which is just incomprehensible.*  
> <span class="qm">—— Emmanuel Ameisen · [22:29]</span> ^q9

> <span class="qz">我想也许这就是核心：我发现你越是深入内部去看，就越不确定它们到底是怎么运作的。而那些会自信地宣称“啊，语言模型不过是 X 或者不过是 Y”的人，往往恰恰是那些实际上没有花时间深入内部看过的人。</span>  
> *I think maybe that's the main thing is I find that the more you look inside, the less certain you are about how they work. And then oftentimes people that will confidently say, "Ah, language models are just X or just Y," are the people that actually haven't spent a while looking inside.*  
> <span class="qm">—— Emmanuel Ameisen · [24:30]</span> ^q10

> <span class="qz">所以我认为有一个关键点，是这个领域里包括我在内的很多人几年前低估了的，而且后来被验证了，那就是：算力与文本的丰富性相结合，才能让你到达那里。</span>  
> *And so I think one key thing that many in the field, including me, underappreciated a few years ago and that has borne out, is the combination of compute and the richness of text is what gets you there.*  
> <span class="qm">—— Emmanuel Ameisen · [26:19]</span> ^q11

> <span class="qz">今年，基本上 Claude 承担了我大部分的代码编写工作，那是因为它从做对的时间大概——我不知道——80%，那时没用，变成了 99%，现在就有用了。</span>  
> *This year, basically Claude has taken on most of my code writing and that's because it went from doing that correctly, I don't know, 80% of the time, which was not useful, to 99% of the time, which now is useful.*  
> <span class="qm">—— Emmanuel Ameisen · [31:48]</span> ^q12

> <span class="qz">模型在还没来得及理解问题是什么之前，就已经执着于数字 36 了。</span>  
> *The model's already obsessed with the number 36 before it's even had a chance to understand what the problem is.*  
> <span class="qm">—— Emmanuel Ameisen · [37:38]</span> ^q13

> <span class="qz">所以这个模型知道正确答案是 12,但它同时也被优化成要说 36。</span>  
> *And so the model knew that the correct answer was 12, and it also had been optimized to say 36.*  
> <span class="qm">—— Emmanuel Ameisen · [37:58]</span> ^q14

> <span class="qz">当我感觉到另一方的人不同意时，我几乎会觉得，啊，但我认为他们并不真正相信这项技术会持续进步。</span>  
> *When I feel like people on the other side disagree, it's almost like I feel like, ah, but I think they don't really believe that this technology is going to continue to improve.*  
> <span class="qm">—— Emmanuel Ameisen · [41:48]</span> ^q15

> <span class="qz">程序是非常可预测的东西。这完全是另一种东西。</span>  
> *A program is a very predictive thing. This is something else entirely.*  
> <span class="qm">—— Emmanuel Ameisen · [47:58]</span> ^q16

> <span class="qz">我们做这个极其简单的事情，然而我们已经到了它正在数学领域开辟新天地的地步。</span>  
> *We do this incredibly simple thing, and yet we're at the point where it's breaking new ground in mathematics.*  
> <span class="qm">—— Emmanuel Ameisen · [48:40]</span> ^q17

> <span class="qz">进化，相当简单的目标。你就是把东西摇来摇去一段时间，保留那些成功适应了环境的生物体，最后你得到了爵士乐和播客。</span>  
> *Evolution, pretty simple objective. You sort of shake things around for a while and keep the organisms that manage to adapt to the environment, and at the end you get jazz and podcasts.*  
> <span class="qm">—— Emmanuel Ameisen · [50:35]</span> ^q18

> <span class="qz">有意思的是，随着模型变得更好，它们在某些方面反而更容易研究了。</span>  
> *The thing that's interesting is that as the models get better, they get in some ways easier to study.*  
> <span class="qm">—— Emmanuel Ameisen · [52:45]</span> ^q19

> <span class="qz">我对此的看法是，对于某些重要的问题，只有一种高效的做法。</span>  
> *And my take on why that is that for some problems that are important, there's just one efficient way to do things.*  
> <span class="qm">—— Emmanuel Ameisen · [56:49]</span> ^q20
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
