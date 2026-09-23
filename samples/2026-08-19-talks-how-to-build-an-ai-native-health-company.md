---
title: 从传统科技公司到 AI 原生：Maven Clinic 的转型实录
podcast: 精选演讲
date: 2026-09-24
source_url: undefined
duration: "17:18"
type: episode
cover: "#64748b"
description: Maven Clinic 的工程负责人 Dan 分享这家女性健康平台两年内转型 AI 原生公司的具体做法：工具落地、招聘与考核变革、工作方式重塑与 AI 可靠性把关。
guests: ["[[Dan Feng]]"]
companies: ["[[Maven Clinic]]"]
concepts: ["[[AI 原生公司]]", "[[AI 编程工具]]", "[[代码审查]]", "[[幻觉]]", "[[招聘]]", "[[迭代周期]]"]
category: AI 编程
tags:
  - AI 编程
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-08-19-talks-how-to-build-an-ai-native-health-company#post","headline":"从传统科技公司到 AI 原生：Maven Clinic 的转型实录","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-08-19-talks-how-to-build-an-ai-native-health-company","mainEntityOfPage":"https://talk.solomind.cc/2026-08-19-talks-how-to-build-an-ai-native-health-company","description":"Maven Clinic 的工程负责人 Dan 分享这家女性健康平台两年内转型 AI 原生公司的具体做法：工具落地、招聘与考核变革、工作方式重塑与 AI 可靠性把关。","datePublished":"2026-09-24","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Dan Feng"},{"@type":"Organization","name":"Maven Clinic"},{"@type":"Thing","name":"AI 原生公司 (AI-native)"},{"@type":"Thing","name":"AI 编程工具 (AI coding tools)"},{"@type":"Thing","name":"代码审查 (code review)"},{"@type":"Thing","name":"幻觉 (hallucination)"},{"@type":"Thing","name":"招聘 (hire)"},{"@type":"Thing","name":"迭代周期 (sprint)"}],"articleSection":"AI 编程"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"AI 编程","item":"https://talk.solomind.cc/tags/AI 编程"},{"@type":"ListItem","position":3,"name":"从传统科技公司到 AI 原生：Maven Clinic 的转型实录","item":"https://talk.solomind.cc/2026-08-19-talks-how-to-build-an-ai-native-health-company"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>从传统科技公司到 AI 原生：Maven Clinic 的转型实录</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 从传统科技公司到 AI 原生：Maven Clinic 的转型实录

<div class="pd-byl"><b>Dan Feng</b> · Maven Clinic 工程负责人 · 2026-09-24</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-08-19-talks-how-to-build-an-ai-native-health-company.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我认为采用它不是可选的。即使你选择不采用，你的竞争对手也会采用。</div><div class="a">— Dan Feng <button class="pd-ts" data-t="01:21" data-who="Dan Feng" data-en="I think adopting it is not optional. Even if you choose not to, your competitors will do." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Dan Feng]]
>
> **公司** [[Maven Clinic]]
>
> **概念** [[AI 原生公司]] · [[AI 编程工具]] · [[代码审查]] · [[幻觉]] · [[招聘]] · [[迭代周期]]

这一集来自一场现场演讲，主角是 [[Maven Clinic|Maven Clinic]](一家专注于孕产、生育、育儿、更年期的大型数字健康平台)的 Dan。他讲的主题是：一家传统科技公司，如何在两年内转型成一家「[[AI 原生公司|AI 原生]]」公司。

开场他先给听众泼了盆冷水：AI 已经在这里、每天都在进步，采用它不是可选项——即使你选择不用，你的竞争对手也会用。他引用了一个说法：就像拖拉机想取代农民，但真正会发生的是，会操作拖拉机的农民取代不会操作的农民。

他先承认：AI 原生没有单一定义，更没有一套照着做就能「叮」一声变身的操作手册。对他们来说，它归结为三件事。

## 三件事：内部用 AI、产品装 AI、改文化

第一件，内部能用 AI 就用 AI。可以简单到生成每日摘要、管理会议、创建 Jira 任务——任何今天需要手动做的事，都应该想一想能不能用 AI 做；任何想让别人替你做的事，先想想能不能用 AI 做。他透露，如今 Maven 包括 CIO 在内的很多领导者，都自己用 AI 解决这类任务，而不是委派给别人。

第二件，把 AI 构建进产品，目标有两个：改善用户体验、降低运营成本。最典型的例子是 AI 聊天机器人——24/7 全天候可用、即时响应客户，比人工客服又好又便宜。

第三件(他认为最重要)，改文化、改流程、改工作方式，让 AI 的价值最大化。

## 落地策略：抓中间的大多数

推广新技术时总是有三类人。早期采用者不用管太多，只要给他们开好工具，鼓励他们把学到的东西分享给全公司。

真正要下功夫的是中间的大多数：为他们建共享基础设施、做好用的工具、让采用过程尽量无缝，并且持续倾听反馈、持续改进。一个实例是：去年 Maven 大部分人用 Cursor,今年很多人切换到了另一款 [[AI 编程工具|AI 编程工具]]——他们两个都支持，「在他们所在之处与之相会」。

> 【背景】原文此处提及的新工具为 Claude Code(Anthropic 出品的编程助手)。

对少数慢的采用者，也要理解他们的顾虑，但更重要的是：清楚地告诉他们公司要往哪走。

## AI 擅长执行，所以改招聘和考核

核心逻辑：只要知道要做什么，AI 真的很擅长执行——所以要改的是[[招聘|招聘]]和奖励的方式。

过去的工作模式是：资深工程师感知问题、想出方案，分派给其他工程师实现，以此并行提速。但现在资深工程师不愿意把实现分派出去了——因为方案想清楚后，用 AI 立刻就能做完，分派给人反而开销更大、效率更低。

这带来两个推论：新人的门槛变了，你必须能独立解决问题，公司已经无法承担「别人给你分派实现任务」的模式；同时，招人时要找真正对 AI 感兴趣的人(领域变化太快，需要他们持续学习、带着团队不掉队)。另一层是：有了 AI,工程师能做的远超从前，PM 和工程师的边界在模糊——真正理解产品的工程师，贡献可以远大于只懂软件的传统工程师；对系统的深刻理解、处理复杂模糊问题的能力，也变得更有价值，因为那正是 AI 的短板。

考核也在变：绩效评估里开始问「你在 AI 方面做了什么」，并且明确奖励那些用 AI 倍增自己影响力的人。

## 重新切规划周期：季度规划死了

传统流程是花几周甚至几个月充实需求、敲定设计、再做实现——因为实现贵，开头做错后面改起来代价高。但事实是，任何大项目他们从来就没在一开始做对过。现在有了 AI,构建快到几分钟就能完成，**论证才是贵的那个**——所以要重新设计工作方式：

- 一年期的目标照样可以想，大胆梦想，但只当它是激励和方向。
- 真正聚焦的是**未来两到四周**要交付什么：PM 和设计师说清这个[[迭代周期|迭代周期]]要做什么，工程师专注实现，周期结束时(甚至更早)发布。
- PM 利用同期时间去充实下一批需求。如果迭代中发现之前定的方向错了，完全没问题——换挡，快速修正。
- 文档也变了：不再写一页又一页的 PRD 或技术设计文档，只写一两页的短文档，它的作用就是沟通、供迭代。

最尴尬的是三个月、六个月的中期目标：现在很难规划，因为你不知道三个月后 AI 模型会有什么能力。他承认，这对习惯了季度规划的老兵最难适应——但适应新时代就是我们的职责。

## 软件开发：从低风险任务建立信心

AI 编程工具可能是最成功的 AI 应用，但不必一步到位。Maven 的路径是：从风险最低的任务起步——写单元测试和文档(极易验证、风险极低)——借此建立信心；然后构建自己的规则、技能和护栏；再推广到整个工程师团队，要求所有任务都用 AI 编程工具；有人不用时，正是要去了解「为什么」的时候。此刻，他们几乎所有的实现都用 AI 编程工具完成，工程师真正专注的是审查、架构设计和评估。

写代码快了，[[代码审查|代码审查]]就成了瓶颈：以前一个好工程师每天写几百行以内，现在轻松上千行——照老办法审查根本跟不上。他们试了多款 AI 审查工具，有点帮助，但还不敢 100% 依赖，工程师的反馈仍然非常有价值。所以他们改了审查制度：

- 允许工程师**自行判断**这个 PR 还需不需要人审——觉得足够简单、有信心，可以直接合并，但责任照旧由他担。
- 想要人审的，守最佳实践：每个 PR 不超过 500 行，因为没人能对几千行的代码做出有意义的审查。
- 启用堆叠式 PR:大功能拆成多个 PR,别人在审的同时你可以继续往下写。

最要避免的是「橡皮图章」——提交了代码审查，你什么也做不了，只能盲目批准确认。那是最坏的情况，只会给人虚假的信心：以为审过了、没问题，就发布了。

同时他们继续投入 AI 代码审查工具，因为认为那才是未来。最终目标：AI 自动化从设计、实现到发布的端到端全生命周期，甚至监控线上流量、及早发现问题并自动修复——还在路上。

## 可靠性：幻觉消不干净，就分层处理

传统软件只做你实现的东西，不多不少；但生成式 AI 有[[幻觉|幻觉]]，不能忽视，可完全消除的成本非常高，有时也没必要。正确做法是从一开始就有一个整体方案。

第一步是区分哪些失败可豁免、哪些不可：帮客户预约日程，一千次失败一次大概没关系(不是好体验，但用户再点一次按钮就行)；但帮用户提交报销申请就零容忍——申请 200 美元发了 50 美元、或反过来，每一单都会立刻引发升级投诉。对不可豁免的场景加额外关卡：收到收据后用**不同的模型审查同一张收据**，只有结果彼此一致才继续往下走；实在判断不了哪个对，就坦然告诉客户「我处理遇到困难，要不要转人工？」——这完全可以接受。

发布端同样严格：几百个集成测试覆盖所有已知用例并持续追加；因为模型可能做出不同行为，每个测试用例要跑很多次、持续要求高通过率(比如始终保持 90%)。上线后还有自动演化系统按预定义的评分标准逐条评估每次对话，另有一个专门的团队人工抽查对话，用来判断系统要不要改进、评分标准是太严还是太松。

新功能上线时，抽查不够，会人工审查约 20% 的对话。这整套流程让他们有信心：尽管知道幻觉存在，但重大事故不会溜出去。

## 本集带走

- **转型没有现成手册**，但有框架：内部能用 AI 就用 AI、把 AI 装进产品(体验+成本)、再改文化流程放大收益。
- **推广抓中间的大多数**：给早期采用者开工具让他们分享；给中间层建共享基础设施和易用工具；对慢的采用者，关键是讲清公司要往哪走。
- **AI 擅长执行 → 招聘和考核跟着变**：新人必须能独立解决问题；优先招真正对 AI 感兴趣、懂产品、能处理模糊问题的人；绩效里直接问「你在 AI 上做了什么」。
- **规划周期重切**：一年目标只当方向，聚焦两到四周的迭代；文档只写一两页供沟通迭代；中期(3-6 个月)规划基本放弃，因为预测不了模型能力。
- **从低风险任务起步**：先让 AI 写单测和文档建立信心，再建规则和护栏，最后全量推开。
- **代码审查制度重构**:PR 不超 500 行、允许自信的工程师免审合并但责任自负、大功能拆堆叠式 PR,坚决避免「橡皮图章」式假审查。
- **可靠性分层**：区分可豁免与不可豁免的失败；高风险场景用多模型交叉验证 + 转人工兜底；测试多轮跑、上线后自动评估 + 人工抽查(新功能审 20%)。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">我认为采用它不是可选的。即使你选择不采用，你的竞争对手也会采用。</span>  
> *I think adopting it is not optional. Even if you choose not to, your competitors will do.*  
> <span class="qm">—— Dan Feng · [01:21]</span> ^q1

> <span class="qz">但事实上，对于任何一个大项目，我们从来就没有在一开始就把它做对过。</span>  
> *But in fact, we never get the same thing right at the beginning anyway for any of our big projects.*  
> <span class="qm">—— Dan Feng · [07:30]</span> ^q2

> <span class="qz">你只是盲目地说，批准。这是我们真正应该避免的最坏情况，因为那只会给我们虚假的信心。</span>  
> *You just say, blindly prove it. This is the worst case we should really avoid, because that just gives us false confidence.*  
> <span class="qm">—— Dan Feng · [12:40]</span> ^q3

> <span class="qz">我们发现真正理解产品的工程师，事实上，他们的贡献可以远大于只专注于软件侧的传统工程师。</span>  
> *We found engineers who really understand the product, in fact, they can have way more contribution than the traditional engineer who only focus on software side.*  
> <span class="qm">—— Dan Feng · [06:06]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「AI 编程」挖下去**

- [[2026-08-04-ainativedev-datadog-deleted-all-its-ai-context-it-wo|Datadog 4000 人AI赋能实战：删掉上下文反而更好]]<span class="pd-rz">同概念:代码审查 (code review)、Cursor</span>
- [[2026-06-30-ainativedev-the-tessl-agent-build-your-software-fact|TESL 智能体：让你的编码智能体自己越用越好]]<span class="pd-rz">同概念:代码审查 (code review)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:代码审查 (code review)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-09-23-talks-agentic-ai-in-cybersecurity-with-abnorma|当攻击用 AI、防守靠智能体：Abnormal 与 Cogent 聊智能体网络安全]]<span class="pd-rz">同概念:AI 原生 (AI native)</span>
- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:幻觉 (hallucination)</span>
- [[2026-08-11-yc-peter-steinberger-fun-is-velocity-e3n9ea|OpenClaw 创始人复盘:被 18,000 人狂改、被舆论压垮,我学到了什么]]<span class="pd-rz">同概念:代码审查 (code review)</span>

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
