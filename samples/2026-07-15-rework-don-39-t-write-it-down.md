---
title: 别记客户反馈：37signals 的产品决策逻辑
podcast: REWORK
date: 2026-08-30
source_url: undefined
duration: "22:16"
type: episode
cover: "#64748b"
description: "37signals 联合创始人 Jason Fried 和 David Heinemeier Hansson 解释为什么不追踪客户反馈、不给路线图、不为\"加点 AI\"恐慌。"
host: "[[Kimberly]]"
cohosts: ["[[Jason]]", "[[David]]"]
companies: ["[[37Signals]]", "[[Basecamp]]"]
concepts: ["[[客户反馈]]", "[[路线图]]", "[[共识错觉]]", "[[AI]]", "[[痛点]]"]
category: 产品方法
tags:
  - 产品方法
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-15-rework-don-39-t-write-it-down#post","headline":"别记客户反馈：37signals 的产品决策逻辑","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-15-rework-don-39-t-write-it-down","mainEntityOfPage":"https://talk.solomind.cc/2026-07-15-rework-don-39-t-write-it-down","description":"37signals 联合创始人 Jason Fried 和 David Heinemeier Hansson 解释为什么不追踪客户反馈、不给路线图、不为\"加点 AI\"恐慌。","datePublished":"2026-08-30","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kimberly"},{"@type":"Person","name":"Jason"},{"@type":"Person","name":"David"},{"@type":"Organization","name":"37Signals"},{"@type":"Organization","name":"Basecamp"},{"@type":"Thing","name":"客户反馈 (customer feedback)"},{"@type":"Thing","name":"路线图 (roadmap)"},{"@type":"Thing","name":"共识错觉 (illusion of agreement)"},{"@type":"Thing","name":"AI"},{"@type":"Thing","name":"痛点 (pain point)"}],"articleSection":"产品方法"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"产品方法","item":"https://talk.solomind.cc/tags/产品方法"},{"@type":"ListItem","position":3,"name":"别记客户反馈：37signals 的产品决策逻辑","item":"https://talk.solomind.cc/2026-07-15-rework-don-39-t-write-it-down"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>别记客户反馈：37signals 的产品决策逻辑</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 别记客户反馈：37signals 的产品决策逻辑

<div class="pd-byl">2026-08-30</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-15-rework-don-39-t-write-it-down.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">每个个体客户都有关于他们自己的场景、情况、现实和视角的重要事情要说，这对他们来说都有价值。但我们必须为广大的客户群构建产品。</div><div class="a">— Jason <button class="pd-ts" data-t="01:06" data-who="Jason" data-en="Every individual customer has an important thing to say about their own scenario, their own situation, their own reality, their own perspective, and it’s all valuable for them. But we have to build a product for the customer base at large." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kimberly]] · [[Jason]] · [[David]]
>
> **公司** [[37Signals]] · [[Basecamp]]
>
> **概念** [[客户反馈]] · [[路线图]] · [[共识错觉]] · [[AI]] · [[痛点]]

这一集是 [[37Signals|37signals]] 的联合创始人 [[Jason|Jason]] Fried 和 [[David|David]] Heinemeier Hansson 聊他们怎么处理[[客户反馈|客户反馈]]——核心主张很反直觉：去听，但别记下来。他们做 [[Basecamp|Basecamp]] 这类产品，用户量很大，每天收到大量反馈。

他们的做法是，不把这些反馈制度化、不列清单、不建追踪表。原因是，一旦你写下来，就会觉得自己有义务去处理它，容易被某个人的好故事打动而做出反应。真正重要的东西，会一遍又一遍地出现，到那时候自然显而易见，不需要靠清单来提醒 <button class="pd-ts" data-t="00:40" data-who="Jason" data-en="Who wrote that? Did we write that? Just kidding. Yeah. The idea behind that, which is still I think very true, although there’s some reasons to write a few things down, we can talk about that. But the primary thing is that, especially for a product like Basecamp, we have lots and lots and lots and lots of people using it. So you get a lot of feedback and you hear a lot of things. And the things you keep hearing over and over and over are the things you’re going to be reminded of that are probably the important things. Every individual customer has an important thing to say about their own scenario, their own situation, their own reality, their own perspective, and it’s all valuable for them. But we have to build a product for the customer base at large. And so you have to be careful not to design by anecdote or fix by anecdote or change by anecdote because someone can write a really strong point and they could be making a great point that other people are making too." aria-label="回原文"></button>。

## 客户说的不是你要做的

客户反馈的价值不在于他们建议你加什么功能，而在于他们暴露了什么[[痛点|痛点]]。大多数客户不是软件设计师，他们知道什么感觉不对，但不知道怎么改才对，更不知道怎么改才能服务好所有用户 <button class="pd-ts" data-t="03:58" data-who="David" data-en="And as Jason says, the magic here is not or even rarely what they’re suggesting that they want in the product. It’s what they’re revealing that doesn’t work for them or isn’t obvious or it’s just a pain or doesn’t resonate with the language that they’re using. And it’s those anecdotes that actually contain the real magic. That’s where the real gold is. It’s not, could you add this extra checkpoint on this specific screen? Because as it so happens, most customers are not software designers. Their software users, they know what doesn’t feel right. They don’t necessarily know how to make it right and certainly not for a broad class of customers that encompasses everyone we have to service. So you really have to divorce this idea that the customer describes their problems and they are 100% right about those problems." aria-label="回原文"></button>。

David 打了个比方：客户经常是在要求你贴管道胶带——某个地方突起来了，他们想糊一下。但作为设计师，你的活儿是发现铆钉的公差不对，做一次更大的简化，而不是到处打补丁 <button class="pd-ts" data-t="04:51" data-who="David" data-en="Not the same thing as what you should do in what order you should do it, how you should do it. All of those things you almost have to make it go through the sieve. And then what’s left is just that pain point. It’s just like, this is a real issue. And what’s fascinating about these anecdotes is they often come in very different shapes. One person will suggest this specific feature. Another person will suggest another feature that doesn’t seem like it’s related at all, but it’s all coming from the same core hurt. And your job as a software designer is to realize this constellation of problems is actually the same thing. And there’s a grander simplification that we should make. Because what happens a lot when customers try to design your software for you is they want a patch. They want to just put some duct tape on something that’s sticking up, but you go like, no, actually the reason this thing is sticking up is because the rivets are not the right tolerance." aria-label="回原文"></button>。

更常见的情况是，不同客户提的看似不相关的功能需求，其实源自同一个核心痛点。你的工作是看出这些零散问题背后的同一件事 <button class="pd-ts" data-t="04:51" data-who="David" data-en="Not the same thing as what you should do in what order you should do it, how you should do it. All of those things you almost have to make it go through the sieve. And then what’s left is just that pain point. It’s just like, this is a real issue. And what’s fascinating about these anecdotes is they often come in very different shapes. One person will suggest this specific feature. Another person will suggest another feature that doesn’t seem like it’s related at all, but it’s all coming from the same core hurt. And your job as a software designer is to realize this constellation of problems is actually the same thing. And there’s a grander simplification that we should make. Because what happens a lot when customers try to design your software for you is they want a patch. They want to just put some duct tape on something that’s sticking up, but you go like, no, actually the reason this thing is sticking up is because the rivets are not the right tolerance." aria-label="回原文"></button>。

## 路线图是共识错觉的温床

他们没有产品[[路线图|路线图]]，不是藏着不公开，是真的没有。只大概知道接下来一个月在做什么。原因有两层：一是做了一件事之后会产生新的发现和方向，如果提前把几个月的工作排死，就没法跟着线索走；二是没必要把精力稀释到七个月之后，现在能做多少就做多少 <button class="pd-ts" data-t="07:49" data-who="Jason" data-en="Yeah. I mean, we don’t really have one. We have roughly what we’re working on now. Now extends out a few weeks. It used to extend out six weeks. Now it’s a little bit less than that perhaps. But let’s just call it a month. We kind of know we’re roughly working on over the next month. And it’s not that we’re trying to hide the backlog or the roadmap. We just don’t have them. It’s not like there’s like a smoke-filled room in the back where all the secrets are. We don’t have them. We really literally figure it out as we go. And part of that is you launch something new, like the work we put out there into the world, a new feature or something, and that can create ripples in the product that then lead us to new things and new discoveries and new ideas. So if you just lay things out before they exist in the product and you lay out months worth of work before it exists in the product, you’re not leaving yourself open to opportunities that come up because you do one thing and then you do something else." aria-label="回原文"></button>。

David 提了一个更狠的观点：路线图制造的是"[[共识错觉|共识错觉]]"。客户看到路线图上写了"日历"两个字，脑子里想的是自己理想中的日历——要能同步 Outlook、要有周视图、要能跳四年。

等日历真的出来了，发现不是他们想的那个东西，就觉得"没用"。你用一个宽泛的词让人产生了具体期望，最后必然失望 <button class="pd-ts" data-t="09:55" data-who="David" data-en="I think the other problem is that roadmaps are breeding ground for illusions of agreement, that you think because there’s a bullet point on some roadmap that vaguely sounds like it’s addressing a desire you have for the product, that it’s actually going to fulfill that desire. Very often you’re going to get a feature that’s in the vicinity of this problem, but it doesn’t solve what you’re trying to achieve very well or it doesn’t feel right. It doesn’t have the right shape. It doesn’t have the right handle. And now you’ve bought a product on a premise of future features that you don’t know what shape they’re going to take in their final form. You don’t know whether you’re going to like it and you might very well feel a little bit suckered. You’re buying a product that does not exist yet on this premise of a very vague promise." aria-label="回原文"></button>。买产品应该按它今天的样子买，之后来的都是额外的，不该基于还没做出来的东西做购买决策 <button class="pd-ts" data-t="10:46" data-who="David" data-en="Usually it’s like one line on that damn roadmap. In Q4, we will deal with whatever, upload permission, something. And then Q4 rolls around and you get this feature and you’re like, “Well, that’s not solving the problem.” And now there’s a bit of snookering there. So I think in general, the good way of buying products is to buy as they exist today. And then anything that comes after that is gravy. You should not be basing your purchase decisions on, “Well, this thing I kind of feel like I really need is coming in Q4.” No, that’s not the way to buy and it’s a way to get greatly disappointed. Now you feel locked in and now all your data’s there and resentment grows and blah, blah, blah." aria-label="回原文"></button>。

## 提前承诺，每次都后悔

他们试过提前承诺"年底前做"，结果每次都后悔。不是因为功能本身不好，而是你给自己设了一个截止日期，九个月后别的更重要的事冒出来了，你还得为当初的承诺让路 <button class="pd-ts" data-t="13:44" data-who="Jason" data-en="It always ends in regret always. And it’s not that the thing that we promised isn’t maybe a good thing that we wanted to deliver. It’s that the promise was set on a timeline way ahead of time. It’s usually by the end of the year. That’s the thing. It’s like March. Well, we’ll do that by the end of the year. Of course we will. It’s like nine months from now or whatever. That’s the thing I always regret. Not necessarily the feature, even though I regret that too, but the bigger thing is like, okay, well, here’s a deadline now that we set for ourselves and we’re going to push off as far as we can. And then all these other things are going to come up and now we have to put one of those aside because of this promise we made nine months ago. It’s always something I regret. And so basically we don’t do that at all anymore." aria-label="回原文"></button>。

David 说得更直白：如果你真的觉得这件事重要，现在就做。把承诺推到未来，本质上是狡猾地说"是"——让三个月后的自己去承受后果，而不是今天 <button class="pd-ts" data-t="14:24" data-who="David" data-en="And this is where all these lessons come from, hard worn mistakes of us promising things or setting out we’re going to do these three things. And the reason it usually turns into regret is that you’re promising this in the future because you don’t want to work on it now. And there is actually the tell. If this was truly so important, you just work on it now. Why are you promising it by the end of the year? You should just be on it right now. But it’s a way to say yes in a weasely way. It’s a way to say yes in a, well, I don’t have to deal with the consequences of that yes today where I actually want to pursue a bunch of other things that I think is important for the evolution of the product. So I’ll push it off such that it’s a later yes, such that it’s Jason in three months who have to deal with that problem. Not Jason today who has to deal with that problem. And I think that’s virtually never a good idea. I can’t actually recall ever us having made a public promise like that where it panned out on the other side like, oh, I’m so glad we’ve promised that. Because you know what? Even if you deliver and even if you deliver what they want, you would’ve been better off just giving that surprise then." aria-label="回原文"></button>。

## "我们得做点 AI"是最典型的恐慌

聊到最近的 [[AI|AI]] 热潮，David 说"AI"就是终极的共识错觉。客户说"你们能不能加点 AI"，跟说"你们能不能用电脑做点什么"一样空泛。它需要被塑造成具体的东西、被验证、被做好 <button class="pd-ts" data-t="19:49" data-who="David" data-en="Yes, because AI is such a great something bucket. It’s the ultimate illusion of agreement. Can you do something with AI? What the fuck do you mean? Can you do something with computer? That makes about as much sense. It needs to be shaped. It needs to be validated. It needs to be good. Like anything else in any part of commerce, in any kind of product, in any kind of service, you don’t want to deliver something. No one wants to buy something. They want to buy good. They want to buy great actually. They don’t most of the time just want to buy good. They want to buy something great. And that very rarely ever comes out of something. Now, that doesn’t mean that you should just ignore the whole world and all the technology changes that are happening and you can just stick to whatever you’ve been doing for 20 years, as it is in our case." aria-label="回原文"></button>。

很多公司的反应是"我们得做点什么"，这是恐惧驱动的膝反射。微软把 AI 功能硬塞进 MS Paint，最后又不得不拔掉，因为不合适、让产品变笨重、客户不想要 <button class="pd-ts" data-t="20:39" data-who="David" data-en="You have to be responsive to things changing. But having these knee jerk reactions that are bred out of fear, that are bred out of delivering something just produces the kind of slop that consumers have also been rejecting as of late. Microsoft famously have had to yank out all the AI something that they jammed into MS Paint and they jammed into all sorts of parts of the product where it just didn’t fit and that something made it worse and it made it cumbersome and customers didn’t want it. So as with anything, it’s this balancing act of realizing there are new opportunities, evaluating them and then turning them into something that’s actually valuable. And I mean, we’ve talked about this on the show several times where we’ve tried a lot of things around AI and we’ve gone quite far down, oh, can it help us do this? Can it help us do that? And we’ve occasionally, well, often found like, oh yeah, there’s a glimmer. I can’t ship a glimmer. It’s got to have a final solid shape. Otherwise, I’m just shipping gas. That doesn’t work. We got to get it solidified and we got to get it good. And by the time it is good and it is solidified and we go like, hell yeah, it’ll ship." aria-label="回原文"></button>。他们自己在 AI 方面也试了很多方向，有时会看到一线微光，但 David 的原则是：我没法发布微光，它必须有最终成型的样子，否则我只是在发布气体 <button class="pd-ts" data-t="20:39" data-who="David" data-en="You have to be responsive to things changing. But having these knee jerk reactions that are bred out of fear, that are bred out of delivering something just produces the kind of slop that consumers have also been rejecting as of late. Microsoft famously have had to yank out all the AI something that they jammed into MS Paint and they jammed into all sorts of parts of the product where it just didn’t fit and that something made it worse and it made it cumbersome and customers didn’t want it. So as with anything, it’s this balancing act of realizing there are new opportunities, evaluating them and then turning them into something that’s actually valuable. And I mean, we’ve talked about this on the show several times where we’ve tried a lot of things around AI and we’ve gone quite far down, oh, can it help us do this? Can it help us do that? And we’ve occasionally, well, often found like, oh yeah, there’s a glimmer. I can’t ship a glimmer. It’s got to have a final solid shape. Otherwise, I’m just shipping gas. That doesn’t work. We got to get it solidified and we got to get it good. And by the time it is good and it is solidified and we go like, hell yeah, it’ll ship." aria-label="回原文"></button>。

> 【背景】37signals 是 Basecamp 的开发商，Jason Fried 和 David Heinemeier Hansson 是其联合创始人，两人也是《REWORK》和《Getting Real》的作者。David 也是 Ruby on Rails 框架的创建者。Apple Intelligence 是苹果在 2024 年 WWDC 上宣布的 AI 功能集，发布后多次延期。Genmoji 是其中一项用 AI 生成自定义表情符号的功能。

## 本集带走

- **听反馈但不记下来**：一遍遍出现的痛点自然会浮出来，写下来反而会制造"必须处理"的义务感，容易被个别好故事带偏。
- **从需求里提炼痛点，别照着功能做**：不同客户提的看似不相关的功能，可能源自同一个核心问题，你的活儿是做一次更大的简化，不是到处打补丁。
- **不给路线图**：路线图上的宽泛词汇（"日历""访客访问"）只会制造共识错觉——客户按自己的想象填充细节，交付时必然有落差。
- **不提前承诺**：真重要就现在做；推到未来承诺，本质上是把包袱甩给未来的自己。
- **抗拒"我们得做点什么"的恐惧驱动**：不管是 AI 还是别的热点，没成型、没做好的东西不要发布——不能发布微光，只能发布成型的东西。

<div class="pd-sec pd-sec-q">全部金句 <span>14 条</span></div>

> <span class="qz">每个个体客户都有关于他们自己的场景、情况、现实和视角的重要事情要说，这对他们来说都有价值。但我们必须为广大的客户群构建产品。</span>  
> *Every individual customer has an important thing to say about their own scenario, their own situation, their own reality, their own perspective, and it’s all valuable for them. But we have to build a product for the customer base at large.*  
> <span class="qm">—— Jason · [01:06]</span> ^q1

> <span class="qz">我认为当你开始记下来、列清单、记录东西时，你会觉得，好吧，现在你觉得有义务对它做点什么或用它做点什么。</span>  
> *I think when you begin to jot things down and make lists and record stuff, you’re like, well, now you feel like there’s an obligation to do something about it or do something with it.*  
> <span class="qm">——  · [01:34]</span> ^q2

> <span class="qz">这里的魔力不在于甚至很少是他们建议他们想要在产品里的东西。而是他们揭示出来的东西，那些对他们不起作用的、不显而易见的、只是个痛点的、或者与他们使用的语言不产生共鸣的东西。</span>  
> *The magic here is not or even rarely what they’re suggesting that they want in the product. It’s what they’re revealing that doesn’t work for them or isn’t obvious or it’s just a pain or doesn’t resonate with the language that they’re using.*  
> <span class="qm">——  · [03:59]</span> ^q3

> <span class="qz">一个人会建议这个特定的功能。另一个人会建议另一个似乎完全不相关的功能，但它们都来自同一个核心痛点。作为软件设计师，你的工作是要意识到这个问题的星座实际上是同一件事。</span>  
> *One person will suggest this specific feature. Another person will suggest another feature that doesn’t seem like it’s related at all, but it’s all coming from the same core hurt. And your job as a software designer is to realize this constellation of problems is actually the same thing.*  
> <span class="qm">——  · [05:10]</span> ^q4

> <span class="qz">当客户尝试为你设计软件时经常发生的情况是，他们想要一个补丁。他们只想在某样突起的东西上贴一些管道胶带，但你会想，不，实际上这东西突起来的原因是铆钉没有合适的公差。</span>  
> *What happens a lot when customers try to design your software for you is they want a patch. They want to just put some duct tape on something that’s sticking up, but you go like, no, actually the reason this thing is sticking up is because the rivets are not the right tolerance.*  
> <span class="qm">——  · [05:27]</span> ^q5

> <span class="qz">你不会听到所有那些因为产品形状不对而没有注册你产品的客户的声音。你不会听到所有结构问题的声音，那些问题并不明显，无法由单一客户以简单的方式表达出来。</span>  
> *You’re not going to hear about all the customers who didn’t sign up for your product because it didn’t have the right shape at all for them to be enticed to use it. You’re not going to hear about all the sort of structural problems that the thing has that just aren't obvious and can’t be articulated by a single customer in an easy way.*  
> <span class="qm">——  · [06:53]</span> ^q6

> <span class="qz">路线图是共识错觉的温床，你认为因为某条路线图上有一个要点，听起来含糊地解决了你对产品的渴望，它实际上就会满足那个渴望。</span>  
> *Roadmaps are breeding ground for illusions of agreement, that you think because there’s a bullet point on some roadmap that vaguely sounds like it’s addressing a desire you have for the product, that it’s actually going to fulfill that desire.*  
> <span class="qm">—— David · [09:57]</span> ^q7

> <span class="qz">购买产品的好方法是按它们今天存在的样子购买。然后之后来的任何东西都是额外的。你不应该基于"好吧，我觉得我真的需要的这个东西将在第四季度推出"来做购买决定。</span>  
> *The good way of buying products is to buy as they exist today. And then anything that comes after that is gravy. You should not be basing your purchase decisions on, "Well, this thing I kind of feel like I really need is coming in Q4."*  
> <span class="qm">——  · [11:03]</span> ^q8

> <span class="qz">你承诺在未来做这件事，因为你不想现在做这件事。实际上这就是破绽。如果这真的这么重要，你现在就应该做。为什么要承诺在年底前做？</span>  
> *You’re promising this in the future because you don’t want to work on it now. And there is actually the tell. If this was truly so important, you just work on it now. Why are you promising it by the end of the year?*  
> <span class="qm">—— David · [14:34]</span> ^q9

> <span class="qz">这是一种狡猾地说"是"的方式。这是一种说"是"的方式，即好吧，我今天不必处理那个"是"的后果，而我实际上想追求一堆其他事情。</span>  
> *It’s a way to say yes in a weasely way. It’s a way to say yes in a, well, I don’t have to deal with the consequences of that yes today where I actually want to pursue a bunch of other things.*  
> <span class="qm">—— David · [14:48]</span> ^q10

> <span class="qz">他们实际上让自己落后了，通过公开建立他们无法达到的截止日期，非常公开地。</span>  
> *They’ve made themselves behind actually by establishing deadlines they couldn’t hit publicly, very publicly.*  
> <span class="qm">—— Jason · [16:53]</span> ^q11

> <span class="qz">我们会迟到，但然后我们会很好。而他们用 Apple Intelligence 打破了这个基本的品牌承诺。</span>  
> *We’re going to be late, but then we’re going to be good. And they broke that fundamental brand promise with Apple Intelligence.*  
> <span class="qm">——  · [18:29]</span> ^q12

> <span class="qz">AI 是一个很棒的"某物"桶。它是共识错觉的终极体现。你能用 AI 做点什么吗？你到底什么意思？你能用电脑做点什么吗？这差不多是一回事。</span>  
> *AI is such a great something bucket. It’s the ultimate illusion of agreement. Can you do something with AI? What the fuck do you mean? Can you do something with computer? That makes about as much sense.*  
> <span class="qm">—— David · [19:49]</span> ^q13

> <span class="qz">有一线微光。我没法发布微光。它必须有最终的固体形状。否则，我只是在发布气体。那行不通。</span>  
> *There’s a glimmer. I can’t ship a glimmer. It’s got to have a final solid shape. Otherwise, I’m just shipping gas. That doesn’t work.*  
> <span class="qm">——  · [21:30]</span> ^q14

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「产品方法」挖下去**

- [[2026-07-22-rework-start-here-building-a-better-onboarding|Basecamp 5 引导设计：让CEO亲自带客户过产品]]<span class="pd-rz">同嘉宾:David、Jason · 同公司:37signals、Basecamp</span>
- [[2025-10-16-lennys-why-ai-makes-design-craft-and-quality-th|Figma CEO Dylan Field:想赢,产品就得有品味]]<span class="pd-rz">同概念:AI</span>
- [[2025-11-02-lennys-the-making-of-canva|Canva 创始人 Melanie Perkins:先想象未来,再一步步把它造出来]]<span class="pd-rz">同概念:AI</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-26-rework-one-way-doors|37signals 的快决策哲学：五分钟做决定，别回头看]]<span class="pd-rz">同嘉宾:David、Jason · 同公司:37signals</span>
- [[2026-01-29-lennys-marc-andreessen-the-real-ai-boom|Marc Andreessen：AI 是现代炼金术，为什么你不是在失业而是在变贵]]<span class="pd-rz">同概念:AI</span>
- [[2026-04-12-lennys-hard-truths-about-building-in-the-ai-era|Keith Rabois：别招大厂高管，别做客户调研]]<span class="pd-rz">同概念:客户反馈 (customer feedback)</span>

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
