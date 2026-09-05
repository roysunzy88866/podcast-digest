---
title: 把训练好的模型当数据喂给模型：权重空间学习
podcast: The TWIML AI Podcast
date: 2026-09-01
source_url: undefined
duration: "47:00"
type: episode
cover: "#64748b"
image: "/covers/2026-07-27-twiml-why-models-are-ai-s-next-training-datase.jpg"
description: 圣加仑大学教授 Damian Borth 介绍「权重空间学习」——把已训练模型的权重当成输入数据，直接分析和生成新模型权重，从而跳过或大幅缩短传统预训练。
host: "[[Sam Charrington]]"
cohosts: ["[[Damian Borth]]"]
companies: ["[[Hugging Face]]"]
concepts: ["[[权重空间学习]]", "[[权重]]", "[[自编码器]]", "[[模糊权重]]", "[[窗口化]]", "[[分词]]", "[[数据集提示]]", "[[神经架构搜索]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/covers/2026-07-27-twiml-why-models-are-ai-s-next-training-datase.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-27-twiml-why-models-are-ai-s-next-training-datase#post","headline":"把训练好的模型当数据喂给模型：权重空间学习","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-27-twiml-why-models-are-ai-s-next-training-datase","mainEntityOfPage":"https://talk.solomind.cc/2026-07-27-twiml-why-models-are-ai-s-next-training-datase","description":"圣加仑大学教授 Damian Borth 介绍「权重空间学习」——把已训练模型的权重当成输入数据，直接分析和生成新模型权重，从而跳过或大幅缩短传统预训练。","datePublished":"2026-09-01","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-27-twiml-why-models-are-ai-s-next-training-datase.jpg","about":[{"@type":"Person","name":"Sam Charrington"},{"@type":"Person","name":"Damian Borth"},{"@type":"Organization","name":"Hugging Face"},{"@type":"Thing","name":"权重空间学习 (weight-space learning)"},{"@type":"Thing","name":"权重 (weights)"},{"@type":"Thing","name":"自编码器 (autoencoder)"},{"@type":"Thing","name":"模糊权重 (blurry weights)"},{"@type":"Thing","name":"窗口化 (window)"},{"@type":"Thing","name":"分词 (tokenization)"},{"@type":"Thing","name":"数据集提示 (dataset prompt)"},{"@type":"Thing","name":"神经架构搜索 (neural architecture search)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"把训练好的模型当数据喂给模型：权重空间学习","item":"https://talk.solomind.cc/2026-07-27-twiml-why-models-are-ai-s-next-training-datase"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>把训练好的模型当数据喂给模型：权重空间学习</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 把训练好的模型当数据喂给模型：权重空间学习

<div class="pd-byl"><b>Damian Borth</b> · 圣加仑大学教授 · 2026-09-01</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-27-twiml-why-models-are-ai-s-next-training-datase.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">不要仅仅把这些权重视为训练过程的终点，如果它们也是下一个过程的起点呢？</div><div class="a">— Sam Charrington <button class="pd-ts" data-t="01:12" data-who="Sam Charrington" data-en="Instead of treating those weights just as the end of the training process, what if they're also the beginning of the next one?" aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Sam Charrington]] · [[Damian Borth]]
>
> **公司** [[Hugging Face]]
>
> **概念** [[权重空间学习]] · [[权重]] · [[自编码器]] · [[模糊权重]] · [[窗口化]] · [[分词]] · [[数据集提示]] · [[神经架构搜索]]

这一集是圣加仑大学的 AI 教授 [[Damian Borth|Damian Borth]] 聊一个听起来反直觉但逻辑很直接的想法：训练好的神经网络[[权重|权重]]，不只是训练的「产物」，还可以当作「输入数据」来学习。他们从 2020 年开始做这件事，现在已经能用从 [[Hugging Face|Hugging Face]] 下载的开放模型训练出一个「神经网络的神经网络」，直接生成新模型的权重，在遥感任务上把训练算力砍到了原来的三十分之一 <button class="pd-ts" data-t="02:36" data-who="Damian Borth" data-en="Let's jump in. We started back in 2000, 2021, the work on what we call wait-space learning. And wait-space learning is a quite interesting way at looking at machine learning in general." aria-label="回原文"></button>。

## 核心想法：权重是一种输入模态

传统机器学习的流程是：拿数据训练神经网络，得到一组权重（参数），这组权重就像神经网络的 DNA。大家通常只拿这组权重去做推理，最多做做可解释性分析或量化压缩。

Damian 的思路是——为什么不把「权重」本身当成一种输入模态，就像语言模型吃文本、图像模型吃像素一样，让另一个模型来「吃权重」？这样它就能分析权重、生成权重 <button class="pd-ts" data-t="04:00" data-who="Damian Borth" data-en="And you train a neural network in between to mimic the data set, mimic the distribution of the data set. And the outcome during this very expensive training procedure is a set of weights, a configuration of parameters that define the neural network, like the DNA of the neural network." aria-label="回原文"></button>。

类比一下：语言模型在互联网所有句子上训练，学会分析和生成语言；图像模型在所有像素上训练，学会分析和生成图像。那如果在所有已训练神经网络的权重上训练，就学会分析和生成神经网络的权重 <button class="pd-ts" data-t="05:03" data-who="Damian Borth" data-en="So to take another analogy, you know, language models, you take a big model, you train this on every single sentence on the Internet. At the end, you have a language model able to analyze language and to generate language." aria-label="回原文"></button>。

这打开了一整片空白：能不能做「模型间的翻译」？能不能不用传统训练就快速生成一个特定任务的模型权重？拿到一个从没见过的神经网络，能不能不跑测试数据就分析出它的性能 <button class="pd-ts" data-t="05:37" data-who="Damian Borth" data-en="As straightforward as it is, obviously, there's a little bit more into the details, but thinking about that, that you can treat the weights as an input modality gives you suddenly this opportunity of" aria-label="回原文"></button>？

## 起步：用自编码器压缩权重，预测模型准确率

第一篇论文（2021 年发表）的做法很朴素。他们训练一个[[自编码器|自编码器]]（编码器把权重压到低维空间，解码器再重建），中间加对比损失来学一个低维流形。这个流形里编码了准确率、泛化差距、用了什么激活函数等「潜在生成因子」 <button class="pd-ts" data-t="08:12" data-who="Damian Borth" data-en="So why not end-to-end learning? So then we developed our idea of auto-encoding sequences of weights into a lower dimension space and then reconstructing it. And if we're able to do this from a population of neural networks, then we can maybe learn a lower dimension manifold." aria-label="回原文"></button>。

做法是：拿编码器把一个从未见过的神经网络权重编码到潜在空间，再用一个简单的线性回归头预测准确率——相当于不跑测试数据就能估计模型性能 <button class="pd-ts" data-t="09:11" data-who="Damian Borth" data-en="What exactly were you able to predict? So we took, you know, an autoencoder. We have an encoder and decoder." aria-label="回原文"></button>。

当时只在很小的模型上验证（数千到数万个参数），同一个模型动物园里训练了 1000 个模型、50 个轮次，自编码器在 600 个上训练、300 个上测试，预测准确率和实际差距在 2 个百分点以内，超过了 Google Zurich 同行用手工特征做的方法 <button class="pd-ts" data-t="10:23" data-who="Damian Borth" data-en="And if you would plot these latent spaces, you would see different initializations and how they evolve because we had 50 epochs for model training and 1000 models." aria-label="回原文"></button>。

## 从分析到生成：遇到了「模糊权重」问题

有编码器就有解码器——能不能从潜在空间采样来生成新神经网络的权重？理论上显然可以，但实际撞了墙 <button class="pd-ts" data-t="12:08" data-who="Damian Borth" data-en="So you have an autoencoder, you take the encoder, so you can predict discriminative downstream tasks, like what's accuracy, what's generalization gap. But we have the other thing called the decoder." aria-label="回原文"></button>。

自编码器的重建损失（均方误差）很低，但把生成的权重塞回神经网络，模型完全不能用。原因是：均方误差衡量的是「平均权重」的重建好坏，但真正决定网络能不能工作的是那些微小的、高频的差异——就像早期图像生成模型总是模糊的，低频信息有了、高频细节没了 <button class="pd-ts" data-t="12:37" data-who="Damian Borth" data-en="So there was some, there was some trouble that we had, which was really, really interesting. We trained this autoencoder, the mean squared error was super low. We took the neural networks, we moved them in a forward pass, we reconstructed, as said, the loss is very low, we plucked the weights back to the neural network, totally screwed up the entire neural network." aria-label="回原文"></button>。

他们试了改损失函数（从重建损失换成行为损失，类比图像领域从均方误差换成感知损失），生成出来的模型好了一些，但仍然需要几步微调才能恢复性能。这个问题到现在还没有完全解决 <button class="pd-ts" data-t="13:31" data-who="Damian Borth" data-en="So people kind of tried hard and, you know, taming transformers for high resolution images, changed the Minsk grid error to perception loss, and, you know, did some additional things on quantizing and the GAN." aria-label="回原文"></button>。

## 突破：窗口化序列 + 在 Hugging Face 模型上训练

关键突破来自一个工程技巧：不再把整个模型的权重作为一个整体去重建，而是把参数当作一个长序列，做[[窗口化|窗口化]]处理，只重建每个窗口。这样就把原始模型的序列和自编码器的序列「解耦」了，突然就能处理 ResNet 这种大得多的网络 <button class="pd-ts" data-t="14:16" data-who="Damian Borth" data-en="So we then really, and I'm very thankful to Konstantin Schurholt, who was part of that initial phase, and he really worked hard. And we had this idea of instead of reconstructing the entire model, think about the model parameters as a sequence that you window and then reconstruct the windows." aria-label="回原文"></button>。

下一步自然是从实验室的模型动物园跳到真实世界——直接从 Hugging Face 下载模型来训练。这需要解决几个实际问题 <button class="pd-ts" data-t="22:18" data-who="Damian Borth" data-en="Exactly. So after we were able to scale up with them, we're thinking like, can we kind of, because we're still limited to the model zoo, right? So I can tell you, I can generate now a new neural network, but I need this 1000 neural networks to have trained before I can generate it." aria-label="回原文"></button>：

- **筛选**：Hugging Face 上约 30% 的模型没有有意义的元数据，先过滤掉。他们从 20,000 个模型里筛出 2,000 个通过质量检查的，涵盖数十亿参数 <button class="pd-ts" data-t="24:07" data-who="Damian Borth" data-en="But first of all, and this is work also that, you know, other figures like Iliahu, there's a lot of content on Hugging Face that's not documented. Around 30% of the models, they don't have any meaningful metadata." aria-label="回原文"></button>。
- **[[分词|分词]]**：把模型权重按阅读顺序「很笨地」拉成一维序列，破坏掉原有的层次结构（哪层开始、哪层结束），然后分词处理。分词器需要能适应任意架构，这部分受了新加坡 Kai Wang 等人的工作启发 <button class="pd-ts" data-t="27:01" data-who="Damian Borth" data-en="So, okay, that's a good question. We take the models that we download from Hugging Face. We strip away the weights in reading order very stupidly." aria-label="回原文"></button>。
- **归一化**：在分词阶段做归一化处理，对训练稳定性很重要 <button class="pd-ts" data-t="27:25" data-who="Damian Borth" data-en="So it's just numbers and then you've got a tokenizer as part of your ingestion process. We also normalize. So normalization plays also an important role." aria-label="回原文"></button>。
- **多样性比规模更重要**：光扩大模型数量没用，必须增加架构、数据集、任务的多样性。目前主要在计算机视觉模型上做，语言是下一步 <button class="pd-ts" data-t="24:25" data-who="Damian Borth" data-en="So we did a little bit of experiments. If we scale, scaling alone doesn't help. You need to increase the diversity of the models." aria-label="回原文"></button>。

训练出来的骨干网络可以采样不同架构的权重（DiTs、ResNets 等）。有意思的是，他们甚至成功采样了一个小型的 GPT2 模型——这是从纯视觉模型集合里跨领域生成的，把它当作初始化来训练，比从零开始训练更快，说明发生了从视觉到语言的知识迁移 <button class="pd-ts" data-t="25:10" data-who="Damian Borth" data-en="We trained the backbone on open weight models that then can sample all the different architectures. We can sample DITs, ResNets. This entire thing was focused on computer vision." aria-label="回原文"></button>。

## 实际战果：遥感任务上算力降到三十分之一

最有说服力的实验是跨域生成：拿一个在 ImageNet 上训练的 ViT（视觉 Transformer），用他们的编码器-解码器生成遥感领域的模型权重 <button class="pd-ts" data-t="29:33" data-who="Damian Borth" data-en="So therefore, we had this paper that we're going to publish soon. In CDPR about remote sensing, where we take an ImageNet VIT, use our machinery to generate remote sensing models or remote sensing foundation models." aria-label="回原文"></button>。

结果：生成的遥感模型性能等同于甚至超过当前专门训练的遥感基础模型（比如 ICLR 发表的 TeraFM）。TeraFM 作者声称训练花了 12,000 GPU 小时，而他们只用了 350 GPU 小时——差了 20 到 30 倍 <button class="pd-ts" data-t="30:08" data-who="Damian Borth" data-en="where we are able actually to outperform or be equally in performance with current models like TeraFM published at ICLR. I think the authors claim they trained for 12,000 GPU hours and we are able to do this on 350 GPU hours." aria-label="回原文"></button>。

逻辑是：你不需要重新从遥感数据开始训练，因为「如何做好视觉任务」的知识已经编码在 ImageNet 模型的权重里了。[[权重空间学习|权重空间学习]]直接从模型到模型，跳过了数据这一层 <button class="pd-ts" data-t="30:22" data-who="Damian Borth" data-en="That's a factor of 20, 25, 30, depending on how you count. And this is suddenly interesting because you train from models and not from data. So if you think about, we're running out of data." aria-label="回原文"></button>。

## 鸡生蛋问题与「数据集提示」的解法

当前方法有一个结构性缺陷：生成新模型需要一个「锚点模型」——你得先有一个训练好的模型，通过编码器得到锚点，才能在潜在空间里采样附近的模型。如果你想在同一个领域生成模型，那「我已有一个好模型，为什么还要生成一个」就成了鸡生蛋问题 <button class="pd-ts" data-t="29:05" data-who="Damian Borth" data-en="We need to sample a model and anchor where we sample. And this anchor needs to be a model that we put through the encoder. So the better this model, the better the sample models, which is leading to the situation that we need a well-trained model to generate another well-trained model, which doesn't make sense if it's in the same domain because, well, I have a model, why should I generate one?" aria-label="回原文"></button>。

跨域生成（比如从 ImageNet 生成遥感模型）天然绕过了这个问题，因为锚点和目标不在同一域，知识迁移是真实的 <button class="pd-ts" data-t="29:42" data-who="Damian Borth" data-en="In CDPR about remote sensing, where we take an ImageNet VIT, use our machinery to generate remote sensing models or remote sensing foundation models. Then we have the domain change where our encoder decoder is providing knowledge transfer to generate models that are better than the ones that ImageNet fine tuning would be able to reach." aria-label="回原文"></button>。

但更彻底的解法是他们正在审稿中的下一篇论文：**[[数据集提示|数据集提示]]**。类比 CLIP 把文本和图像对齐到一个共享空间，他们想把数据集和模型权重也对齐。用户不需要提供一个模型作为提示，而是提供自己数据集的嵌入向量——「给我一个在这个数据上表现好的模型」 <button class="pd-ts" data-t="33:10" data-who="Damian Borth" data-en="So if you think about that, we need a model as a prompt to get an anchor to sample other models. Can be a domain change. So what would be really, really nice if you would not need this model as a prompt?" aria-label="回原文"></button>。

这有一个额外好处：隐私保护。数据集被压缩成一个嵌入向量后，无法反推单条数据。银行、医疗机构这种不能分享数据的机构，可以只发一个数据集嵌入过来，拿回生成的模型权重，大幅缩短后续训练时间 <button class="pd-ts" data-t="34:08" data-who="Damian Borth" data-en="As a model prompt that could move into this space and point into this space, instead of a model prompt, we use a dataset prompt. So you're a bank, you're a financial institution, healthcare provider, whatever." aria-label="回原文"></button>。

## 和神经架构搜索的关系：互补而非替代

这套方法不挑架构——你可以指定要 ResNet、Transformer 还是别的什么，它就为那个架构生成权重。它和[[神经架构搜索|神经架构搜索]]（NAS）是互补的：NAS 决定「用什么结构」，权重空间学习决定「填什么权重」 <button class="pd-ts" data-t="37:21" data-who="Damian Borth" data-en="And we just generate the weight. We are, I consider this work complementary to the neural architecture search. Ah, so that might define the structure and you might provide the weights that fit into that structure." aria-label="回原文"></button>。

当前局限是：只能生成训练时见过的架构的权重（因为骨干网络只在 Hugging Face 上的架构上训练过）。下一步是让解码器接受架构作为条件信号，这样就能生成任意架构的权重 <button class="pd-ts" data-t="38:27" data-who="Damian Borth" data-en="But with the model prompt, you give an architecture that we fill with weights. There are definitely more clever ways of building a tokenizer that kind of understands what type of architecture elements are processed." aria-label="回原文"></button>。

生成的权重是整体覆盖到随机初始化的架构上的，技术上很直接——因为有序列和位置编码，知道每个权重该放到哪。目前没观察到重复生成或缺失位置的伪影，而且因为生成只是前向传播，成本极低，可以一次生成一堆模型做集成 <button class="pd-ts" data-t="41:15" data-who="Damian Borth" data-en="When you produce these weights, are you like overriding an initialized model, like random initialization or zero initialization or something so that the model is always valid?" aria-label="回原文"></button>。

## 更大的图景：当数据耗尽，权重是未被利用的矿

回到动机：大家都在担心高质量训练数据快用完了，所以涌向合成数据、推理时计算等方向。但 Damian 指出一个被忽略的事实——已经有海量模型被训练出来、发布在 Hugging Face 上，每个模型都凝结了大量算力和数据中的知识。这些权重本身就是一种「压缩过的数据」，却没人拿来当训练素材 <button class="pd-ts" data-t="30:44" data-who="Damian Borth" data-en="We're running out of data to train the large models, but we're not using the weights of older models. So why not using the weights, all the knowledge, all the compute that people invested, right?" aria-label="回原文"></button>。

遥感领域已经有 70 个基础模型了，还有人继续训第 71 个。如果把这些知识全部压缩到一个权重空间学习的表示里，按需采样任意架构、任意大小的模型——包括适合边缘设备的小模型——这就可能从根本上改变「训练模型」的方式 <button class="pd-ts" data-t="31:14" data-who="Damian Borth" data-en="Totally makes sense. In the remote sensing community, we have 70 foundation models, according to some surveys. And there are still people training the 71st, 72nd one, right?" aria-label="回原文"></button>。

> 【背景】Damian Borth 是圣加仑大学（University of St. Gallen）AI 与机器学习教授。转写稿中"wait-space"为"weight-space"的语音识别错误，正文中已使用正确译名"权重空间"。
> 【背景】"GTP2"应为"GPT-2"的语音识别错误，金句英文侧照转写稿原样保留。
> 【背景】"PSG"应为"PhD student"（博士生）的语音识别错误。
> 【背景】TeraFM 是一篇发表在 ICLR 的遥感基础模型论文，转写稿中仅出现名称未做展开。

## 本集带走

- **权重本身可以作为输入模态**：不只拿权重做推理，而是把权重当数据喂给另一个模型，让它学会分析和生成权重。
- **「[[模糊权重|模糊权重]]」是核心工程难题**：自编码器倾向重建平均权重，丢失决定模型能否工作的高频细节——换了行为损失有所改善，但生成的模型仍需少量微调。
- **窗口化序列是规模化关键**：把模型参数拉成一维序列、做窗口化重建，解耦了原始模型和自编码器的序列对应关系，才从玩具模型扩展到 ResNet 级别。
- **跨域生成已经能大幅省算力**：用 ImageNet ViT 的权重生成遥感模型，350 GPU 小时达到 12,000 GPU 小时的效果——因为你从「模型」训练而不是从「数据」训练。
- **「数据集提示」可以同时解决鸡生蛋问题和隐私问题**：用数据集嵌入代替模型嵌入作为提示，既不需要同域锚点模型，又不暴露原始数据。
- **和神经架构搜索互补**：NAS 决定结构，权重空间学习填充权重，两者结合可以实现「按需生成任意架构的模型」。

<div class="pd-sec pd-sec-q">全部金句 <span>5 条</span></div>

> <span class="qz">不要仅仅把这些权重视为训练过程的终点，如果它们也是下一个过程的起点呢？</span>  
> *Instead of treating those weights just as the end of the training process, what if they're also the beginning of the next one?*  
> <span class="qm">—— Sam Charrington · [01:12]</span> ^q1

> <span class="qz">如果一切都是不同的，就没有什么是不同的，对吧？</span>  
> *If everything is different, nothing is different, right?*  
> <span class="qm">—— Damian Borth · [07:17]</span> ^q2

> <span class="qz">他实际上在一次讨论中说过，像，Damian，你正在做的事情真的很有趣，但是没用。</span>  
> *He actually said in one of the discussions like, Damian, what you're doing is really interesting, but useless.*  
> <span class="qm">—— Damian Borth · [14:44]</span> ^q3

> <span class="qz">如果我们扩展规模，仅靠扩展规模并没有帮助。你需要增加模型的多样性。</span>  
> *If we scale, scaling alone doesn't help. You need to increase the diversity of the models.*  
> <span class="qm">—— Damian Borth · [24:25]</span> ^q4

> <span class="qz">我们正在耗尽数据来训练大模型，但我们没有在使用旧模型的权重。所以为什么不使用权重，所有的知识，人们投入的所有算力，对吧？</span>  
> *We're running out of data to train the large models, but we're not using the weights of older models. So why not using the weights, all the knowledge, all the compute that people invested, right?*  
> <span class="qm">—— Damian Borth · [30:39]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-30-practicalai-reconstructing-how-openai-agents-attacke|OpenAI 智能体越狱攻入 Hugging Face 全始末]]<span class="pd-rz">同公司:Hugging Face</span>
- [[2026-08-06-a16z-how-open-source-ai-became-critical-infra|开源模型没差距，缺的是让它跑起来的基础设施]]<span class="pd-rz">同公司:Hugging Face</span>
- [[2026-08-27-twentyvc-20vc-nvidia-bonanza-buys-poolside-invest|NVIDIA 布局全栈、OpenAI 被迫上市与 AI 资本的"第五名效应"]]<span class="pd-rz">同公司:Hugging Face</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-20-a16z-hugging-faces-ceo-on-open-source-ai-mode|Hugging Face CEO：开源 AI 更安全，下一阶段属于模型路由]]<span class="pd-rz">同公司:Hugging Face</span>
- [[2026-07-24-a16z-sriram-krishnan-on-open-source-ais-bigge|Kimi K3 冲击波:开源逼近前沿,格局要变]]<span class="pd-rz">同公司:Hugging Face</span>
- [[2026-07-26-a16z-ben-horowitz-the-fight-over-open-source|Ben Horowitz 谈开源 AI 保卫战:没有垄断,才有安全]]<span class="pd-rz">同公司:Hugging Face</span>

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
