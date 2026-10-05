---
title: "为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG"
podcast: 精选演讲
date: 2026-09-29
source_url: undefined
duration: "20:44"
type: episode
cover: "#64748b"
description: "LlamaIndex 联合创始人兼 CEO Gerry 讲解 2026 年 RAG 如何演化为智能体 harness 加文档上下文层,并拆解解析、提取、搜索三层核心做法。"
guests: ["[[Jerry Liu]]"]
companies: ["[[LlamaIndex]]"]
concepts: ["[[LlamaParse]]", "[[LightParse]]", "[[parsebench]]", "[[RAG]]", "[[智能体]]", "[[上下文]]", "[[文档 OCR]]", "[[VLM]]", "[[MCP 服务器]]"]
category: 智能体
tags:
  - 智能体
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-23-talks-building-the-document-context-layer-for#post","headline":"为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-23-talks-building-the-document-context-layer-for","mainEntityOfPage":"https://talk.solomind.cc/2026-09-23-talks-building-the-document-context-layer-for","description":"LlamaIndex 联合创始人兼 CEO Gerry 讲解 2026 年 RAG 如何演化为智能体 harness 加文档上下文层,并拆解解析、提取、搜索三层核心做法。","datePublished":"2026-09-29","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jerry Liu"},{"@type":"Organization","name":"LlamaIndex"},{"@type":"Thing","name":"LlamaParse"},{"@type":"Thing","name":"LightParse"},{"@type":"Thing","name":"parsebench"},{"@type":"Thing","name":"RAG"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"上下文 (context)"},{"@type":"Thing","name":"文档 OCR (document OCR)"},{"@type":"Thing","name":"VLM"},{"@type":"Thing","name":"MCP 服务器 (MCP servers)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG","item":"https://talk.solomind.cc/2026-09-23-talks-building-the-document-context-layer-for"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 为 AI 智能体构建文档上下文层:LlamaIndex 谈 2026 年的 RAG

<div class="pd-byl"><b>Jerry Liu</b> · LlamaIndex 联合创始人兼 CEO · 2026-09-29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-23-talks-building-the-document-context-layer-for.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">归根结底,你可以拥有一个无限聪明的智能体,但你从这个能端到端做越来越多事情的无限聪明的智能体中真正获得价值的能力,其实是给它正确的任务去做。</div><div class="a">— Jerry Liu <button class="pd-ts" data-t="05:38" data-who="Jerry Liu" data-en="In the end, you could have an infinitely smart agent, but your ability to actually get value out of this infinitely smart agent that's able to do more and more stuff end to end is actually giving it the right things to do." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jerry Liu]]
>
> **公司** [[LlamaIndex]]
>
> **概念** [[LlamaParse]] · [[LightParse]] · [[parsebench]] · [[RAG]] · [[智能体]] · [[上下文]] · [[文档 OCR]] · [[VLM]] · [[MCP 服务器]]

把 10 万亿页以上的人类知识锁在 PDF、PowerPoint、Word、Excel 里,而 AI [[智能体|智能体]]连原始 PDF 的二进制都读不懂——这就是 [[LlamaIndex|LlamaIndex]] 选的赛道。说这话的人是 Gerry,LlamaIndex 的联合创始人兼 CEO,这家公司 2023 年以 [[RAG|RAG]] 框架起家,如今定位是「AI 智能体的主要文档基础设施」<button class="pd-ts" data-t="00:12" data-who="Gerry" data-en="I think we can get started. Hey, everyone. I'm Gerry, co-founder and CEO of LlamaIndex, and today I'm excited to give a talk called Building the Document Context Layer for AI Agents." aria-label="回原文"></button>。在这场 AI Engineer World Fair 的演讲里,他把 2026 年的 RAG 拆成一个公式:智能体 harness + [[上下文|上下文]]层,而他的公司押注的是后者。

## 2026 年的 RAG:检索复杂性搬进了智能体层

三年前的 naive RAG(就是在私有文档语料上搭一个简单聊天机器人)是一条固定流水线:切块、嵌入、放进向量数据库、做 naive 的 top-k 检索、再用 LLM 生成 <button class="pd-ts" data-t="01:50" data-who="Gerry" data-en="This is a snapshot from actually three years ago when I first gave a talk on this, and naive RAG was basically just building a simple chatbot over your private corpus of data." aria-label="回原文"></button>。所有步骤都是固定的。Gerry 认为这条路已经变了,有两个关键变化。

第一,智能体循环和工具使用好了太多,智能体推理和它与上下文交互的方式之间有了更清晰的分离。看 Claude Code、Claude Cowork、OpenClaw、Codex 这些「现代广义智能体」,检索的复杂性已经内置到智能体层里:与其用各种 hack 绕过 top-k 检索的局限,不如让智能体自己推理「最好的搜索关键词是什么」,即使检索工具很基础,它也能靠正确的查询自我循环、解决任务 <button class="pd-ts" data-t="02:33" data-who="Gerry" data-en="And there's basically a cleaner separation now between agent reasoning and how they actually interact with context. If you look at what I call kind of the modern generalized agent, which includes, you know, all your favorite applications and tools out there from Claude Code, Claude Cowork, OpenClaw, Codex, and a few others, you know, the retrieval complexity has started to get baked into the agent layer." aria-label="回原文"></button>。

第二,上下文正在向栈的上层移动。GenAI 前两年半大家都在聊怎么管理上下文窗口、防止溢出;随着 compaction、长上下文等技术演进,讨论变成了怎么把正确的 [[MCP 服务器|MCP 服务器]]、技能和任务接到智能体上 <button class="pd-ts" data-t="03:12" data-who="Gerry" data-en="Number two, context is moving up the stack. There's been a lot of conversations, I think, for the first two and a half years of GenAI of how do you actually manage the agent context window, make sure it doesn't overflow, that type of thing." aria-label="回原文"></button>。构建方式的抽象也在上移:2023 到 2025 年你还通过 Python、TypeScript 写代码定义程序,如今越来越多非技术职能的人用英语定义 runbook 和目标;未来甚至不必用英语定义任务,只需定义目标和评分标准,智能体会用所有可用的上下文自己达成目标 <button class="pd-ts" data-t="03:58" data-who="Gerry" data-en="And so maybe in 2023 to 2025, you define programs and you still build stuff via like importing Python, using TypeScript through code. It's pretty clear these days more and more people are just building stuff using English, whether you're a software engineer or you're in a non-technical function like go-to-market, marketing, and you're defining runbooks through English and kind of like defining the right goals and making sure that AI is aligned on the right task." aria-label="回原文"></button>。

所以他有个核心判断:上下文就是一切。你可以拥有一个无限聪明的智能体,但你能从中获得多少价值,取决于你给它什么——包括任务和目标,也包括对组织上下文宝库的访问:网页搜索、通过工具和 MCP 服务器的连接器、Snowflake 或 Databricks 数据仓库,以及那 90% 存在 SharePoint、Box、Dropbox、S3 里、被锁在文档容器中的非结构化数据 <button class="pd-ts" data-t="05:38" data-who="Gerry" data-en="In fact, we do think context really is everything. In the end, you could have an infinitely smart agent, but your ability to actually get value out of this infinitely smart agent that's able to do more and more stuff end to end is actually giving it the right things to do." aria-label="回原文"></button>。

## 文档 OCR 为什么难:PDF 是为打印设计的

智能体无法直接理解原始 PDF 的二进制,因为这个格式是为显示和打印目的渲染的,不是为机器消费设计的:文本几乎是带坐标的单独字形;表格不以表格形式存储,而是边框线段加画在特定单元格位置上的文本;多栏布局下,PDF 里的字符顺序也不保证对应人类的阅读顺序 <button class="pd-ts" data-t="08:45" data-who="Gerry" data-en="First off, you know, document OCR is hard. Some of you might have seen a blog post that we put out a few months ago related to this topic. But the reason this problem even exists is an agent cannot actually take the raw PDF file binary and make sense of it." aria-label="回原文"></button>。[[文档 OCR|文档 OCR]] 存在了 20 多年,就是要造出一种既对人类可解释、也对 AI 智能体可解释的数字化表示。Word 文档同样难:虽然比 PDF 结构化一些,但是自定义的定制 XML 格式,冗余标签很多,智能体仍需从中推断结构、提取正确的格式和语义元数据,同时忽略标签、渲染出页面整体结构 <button class="pd-ts" data-t="10:07" data-who="Gerry" data-en="Because again, it's basically just an arbitrary sequence of characters drawn with coordinate positions. Related to this, even Word doc parsing is hard. They're a little bit more structured than PDFs, but they're in kind of like this custom bespoke XML format, and this applies to PowerPoints as well." aria-label="回原文"></button>。

现有两条路线各有短板。一是启发式、流水线式的方法(PyPDF 这类开源库),靠手写规则聚类文本、识别表格和段落;二是用 [[VLM|VLM]](视觉语言模型)把文档一次性转成文本,读视觉结构效果不错,但在纯文本页面上会产生幻觉、成本极其高昂,还缺少语义和定位能力 <button class="pd-ts" data-t="11:00" data-who="Gerry" data-en="If you're familiar with document understanding, you know, it's been around for quite a bit of time. There's a lot of these, like, heuristic and pipeline-based approaches which focused on kind of more, I guess, like, human-driven handwritten techniques to analyze, like, kind of various pieces of text, group them into clusters and identify tables, paragraphs, and be able to kind of, like, generate some sort of output representation." aria-label="回原文"></button>。LlamaIndex 的做法是混合:深度理解文件容器和二进制的流水线,加上视觉方法,做成一个他们认为处于成本-准确率帕累托前沿的方案 <button class="pd-ts" data-t="11:58" data-who="Gerry" data-en="It can hallucinate on text-only pages, it costs a ton of money, and also it still lacks a lot of the semantics and grounding that you typically expect with some sort of document processing tool." aria-label="回原文"></button>。

他还给出一个反直觉的判断:文档 OCR 的帕累托前沿,永远会比前沿模型在文档理解上的前沿更准、更便宜——因为文档是非常特定的数据类型,总有办法把 Gemini、GPT、Opus 的最新视觉理解能力蒸馏出来,变成精心定制、能大规模高精度处理文档的工作流 <button class="pd-ts" data-t="12:16" data-who="Gerry" data-en="And so for us, we really think about combining both the pipeline-based approaches of deeply understanding the file containers and binaries with the vision-based approaches to help generate, you know, kind of a hybrid approach that we think is at the Pareto frontier of cost and accuracy." aria-label="回原文"></button>。他们的商业服务 [[LlamaParse|LlamaParse]] 就是这么做的:优化底层的 PDF、Word、PowerPoint 引擎,一个精心调优的智能体框架在便宜的专门模型和前沿模型之间自动路由,再加参数高效、专注于表格图表等特定元素、经微调的文档 VLM <button class="pd-ts" data-t="12:49" data-who="Gerry" data-en="To some extent, that's exactly what we do. You know, we both optimize the underlying, like, PDF engines plus, like, Word, PowerPoint, and others. We have an agentic harness that's, like, carefully tuned for auto-routing between cheaper, specialized models to frontier models." aria-label="回原文"></button>。

## 怎么验证:ParseBench 和三个准确率区间

文档理解绝对没有 100% 被解决——Gerry 用自家基准 ParseBench 证明这一点:2000 页经过人工验证的页面,衡量表格、图表、内容忠实度、语义格式,优化目标是「AI 智能体实际如何理解文档」而非句法正确性;benchmark 了约 50 个前沿模型、开放权重模型和专门的 OCR 方案,页面在 [[parsebench|parsebench]].ai、Hugging Face 和 Kaggle 完全公开 <button class="pd-ts" data-t="13:44" data-who="Gerry" data-en="There's just a lot of complexity in a lot of these document types, and if you're actually trying to unlock context at scale, most of the models are not up for the task." aria-label="回原文"></button>。

他按场景把需求分成三个区间 <button class="pd-ts" data-t="15:08" data-who="Gerry" data-en="But, you know, you fundamentally need to kind of advance a lot of the core capabilities to make sure that you're able to process and unlock the vast strobes of enterprise context out there." aria-label="回原文"></button>:

- **高准确性区间**:保险、金融服务等受监管行业,需要 99 到接近 100% 的准确率——错误提取的后果是搞砸财务模型、甚至被标记欺诈;值得为每页多付一点钱换取更深入的智能体推理。
- **低成本区间**:比如为 RAG 知识库索引 SharePoint 里每天持续更新的百万级文档。稍有出错没关系,只要智能体足够好,它可以深入文档、用正确的引用和溯源找回正确信息;关键是可扩展、成本最优的离线索引流水线。
- **低延迟区间**:基于 VLM 的方法通常不快。如果用户向 Claude Cowork 一次性上传 1000 份文档、要求一分钟内处理完,这对包括自家在内的每一家 OCR 服务都很吃力;所以还需要极低延迟的方案,哪怕只是实时场景的辅助 <button class="pd-ts" data-t="16:19" data-who="Gerry" data-en="So for these, you know, being able to create some sort of scalable offline indexing pipeline that has the best, like, cost constraints is something that is optimal." aria-label="回原文"></button>。

## LightParse:智能体循环里的免费快解析器

针对低延迟这块,LlamaIndex 发布了 [[LightParse|LightParse]]:基于 Rust、现有最快的开源解析器,完全免费(MIT 或 Apache 许可证),不使用 VLM,却是现有最准确的 markdown 解析器 <button class="pd-ts" data-t="17:09" data-who="Gerry" data-en="So besides LlamaParse, which is kind of our commercial service around document processing and extraction, we also created this tool called LightParse. It is surprisingly really, really good." aria-label="回原文"></button>。

推荐的使用模式是「快慢结合」:把 LightParse 作为智能体循环里的默认工具,先对所有文档做一次极快的遍历扫描;当智能体真的需要深入某个有表格、有图表的页面、精确理解数值时,再调用 LlamaParse 这类基于 VLM 的慢工具仔细读 <button class="pd-ts" data-t="17:31" data-who="Gerry" data-en="And it basically is the most accurate markdown parser out there that doesn't use a VLM or any sort of deeper model. And so this is kind of nice because you can use it as a default in the assistive agent loop." aria-label="回原文"></button>。LightParse 以一键安装的 skill 形式提供,可以补充任何更深入的 OCR 工具。

## 解析之外:提取、搜索和可重复的工作流

解析层之外还有语义与存储层。很多用例需要从文档大规模拿回结构化信息:处理百万张发票、报销单、收据、理赔单时,你要的是能放进下游数据库的结构化输出,本质是自动化人类扫描纸质文件、做数据录入的工作 <button class="pd-ts" data-t="19:05" data-who="Gerry" data-en="In terms of the semantic and storage layer, you know, besides document parsing, a lot of use cases also require actually getting back structured information at scale from documents." aria-label="回原文"></button>。

LlamaParse 的提取能力朝「低成本同时极高准确率」调优,每个提取输出都带细粒度引用、可回溯到源文档,流水线级运行时带置信度分数,能在数值入库前标记哪些值没把握 <button class="pd-ts" data-t="19:41" data-who="Gerry" data-en="A lot of our capabilities are actually tuned towards like low cost while extremely high accuracy. And you get back granular citations all the way back to the source document for every extracted output." aria-label="回原文"></button>。再往上是文档搜索:检索、BM25、grep、向量搜索、阅读和滚动组成的扩展工具集 <button class="pd-ts" data-t="20:00" data-who="Gerry" data-en="And of course, you can run this in a pipeline at scale with confidence scores and also, you know, being able to actually flag whether or not we're certain about a certain value before deciding to put it into some sort of system." aria-label="回原文"></button>。

平台分三层:文档解析层(把 PDF、PPT、Word 数字化成准确且省 token 的上下文)、语义与存储层(面向人类和智能体的文档管理——不靠人打开 Word,而是给智能体一个能捕获、存储、管理文档的接口)、智能体层的可重复文档工作流(发票处理、KYC、理赔这类固定流程,别总丢给通用智能体,应该做专门工作流、仔细调成本和准确率)<button class="pd-ts" data-t="06:52" data-who="Gerry" data-en="And at the same time, agents are also starting to generate exponentially more data in terms of, you know, more agent-native formats in terms of Markdown and HTML." aria-label="回原文"></button>。

他还留了一份未解决问题清单:智能体原生文档格式、文档版本管理、文档编辑、「爬山作为服务」(hill climbing as a service)——离智能体和人类在文档上协作的完整软件还有一段路 <button class="pd-ts" data-t="08:16" data-who="Gerry" data-en="So, when we talk about the concepts today, in terms of these three layers, we'll talk about this concept of document OCR, which is one of the core concepts of this track, to document extraction, document search, and document workflows." aria-label="回原文"></button>。因时间关系这些没展开,幻灯片会放到网上。

## 本集带走

- **2026 年的 RAG = 智能体 harness + 上下文层**:别再手写 hack 绕过 top-k 检索的局限,把选检索词、自我循环这件事交给智能体本身。
- **PDF 读不懂是格式问题,不是模型问题**:PDF 为打印设计,文本是带坐标的字形、表格是线段——解析层的目标是造出人和智能体都能解释的表示。
- **专用 OCR 能同时打败前沿模型的价格和精度**:把 Gemini/GPT/Opus 的视觉能力蒸馏进定制工作流,一直会是文档这个特定数据类型上的帕累托前沿。
- **按三个区间选方案**:受监管行业上 99%+ 准确率、舍得每页多花钱;海量索引走低成本离线流水线;实时上传场景需要极低延迟的轻解析。
- **快慢结合的智能体模式**:先用免费的 LightParse 快速扫全部文档,需要精读表格图表时再调 VLM 级工具。
- **可重复流程别交给通用智能体**:发票、KYC、理赔这类固定工作流,值得专门建工作流并精细调成本与准确率,还要带置信度分数和回溯源文档的引用。

<div class="pd-sec pd-sec-q">全部金句 <span>7 条</span></div>

> <span class="qz">归根结底,你可以拥有一个无限聪明的智能体,但你从这个能端到端做越来越多事情的无限聪明的智能体中真正获得价值的能力,其实是给它正确的任务去做。</span>  
> *In the end, you could have an infinitely smart agent, but your ability to actually get value out of this infinitely smart agent that's able to do more and more stuff end to end is actually giving it the right things to do.*  
> <span class="qm">—— Jerry Liu · [05:38]</span> ^q1

> <span class="qz">有超过 10 万亿页的人类原生知识被锁在 PDF、PowerPoint、Word 文档和 Excel 表格中。</span>  
> *There's over 10 trillion-plus pages of human-native knowledge locked up within PDFs, PowerPoints, Word documents, and Excel sheets.*  
> <span class="qm">—— Jerry Liu · [06:35]</span> ^q2

> <span class="qz">如今很清楚的是,越来越多的人只是用英语来构建东西,无论你是软件工程师,还是身处 go-to-market、市场营销这样的非技术职能。</span>  
> *It's pretty clear these days more and more people are just building stuff using English, whether you're a software engineer or you're in a non-technical function like go-to-market, marketing.*  
> <span class="qm">—— Jerry Liu · [03:58]</span> ^q3

> <span class="qz">所以未来将走向一种状态:你甚至可能不必用英语定义任务,而是更多定义目标和评分标准,然后智能体会用它所有可用的上下文真正解决任务。</span>  
> *So the future will move towards a state where you actually might not even have to define the task in English, but actually more the goal and a scoring rubric, and then the agent will use all available contexts available to it to actually solve the task.*  
> <span class="qm">—— Jerry Liu · [04:57]</span> ^q4

> <span class="qz">但文档 OCR 的帕累托前沿,相比前沿模型在文档理解方面所处的帕累托前沿,总是会精确得多也便宜得多。</span>  
> *But the Pareto Frontier for document OCR will always be much more accurate and cheap compared to the Pareto Frontier for wherever the Frontier models are in terms of document understanding.*  
> <span class="qm">—— Jerry Liu · [12:19]</span> ^q5

> <span class="qz">有我所谓的高准确性区间,一些机构基本需要 99 到接近 100% 的准确性,因为错误提取的负面后果就是你完全搞砸你的财务模型。</span>  
> *There's what I call like the high accuracy regime where like you know some institutions basically need like 99 to almost 100% accuracy because basically the downside of incorrect extraction is you completely mess up your financial model.*  
> <span class="qm">—— Jerry Liu · [15:13]</span> ^q6

> <span class="qz">我们把文档视为非结构化上下文的通用容器。</span>  
> *We see documents as universal containers for unstructured context.*  
> <span class="qm">—— Jerry Liu · [06:31]</span> ^q7

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-09-03-sed-moving-beyond-rag-with-precomputed-conte|把上下文当资产预编译：Pinecone Nexus 如何重做智能体检索]]<span class="pd-rz">同概念:RAG、上下文 (context)、智能体 (agent)、向量数据库 (vector database)</span>
- [[2026-09-23-talks-from-ingestion-to-agents-how-ai-teams-bu|智能体时代，你的 PDF 数据管道拖后腿了吗]]<span class="pd-rz">同概念:RAG、VLM、智能体 (agent)、上下文 (context)</span>
- [[2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay|Lindy 创始人谈 AI 员工的上下文战争：从红黑树到"走去洗车"]]<span class="pd-rz">同概念:RAG、上下文 (context)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-09-pg-pm-guide-ai-design|OpenAI Codex 全实操：用智能体舰队打造「10 倍速」工作流]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、Codex</span>
- [[2026-09-10-thepeel-how-databricks-went-1m-to-7b-arr-in-10-y|从 100 万到 69 亿美元:Databricks 销售掌门人 Ron 的企业级增长实战]]<span class="pd-rz">同公司:Databricks · 同概念:上下文 (context)、智能体 (agent)</span>
- [[2026-09-14-pg-together-ai-product-team|Together AI 产品团队全公开：一套仓库让 PM 下指令就出生产级 PR]]<span class="pd-rz">同概念:上下文 (context)、智能体 (agent)、Claude Code</span>

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
