---
title: 她用 GrokBot 换掉了全部 AI 助手，连心爱的 Polly 也没放过
podcast: How I AI
date: 2026-10-20
source_url: undefined
duration: "36:14"
type: episode
cover: "#64748b"
description: How I AI 主持人分享弃用 OpenClaw、全面迁移到 GrokBot 的实战经验，附 6 个可直接抄走的机器人创意。
companies: ["[[GrokBot]]", "[[OpenClaw]]", "[[ChatPRD]]"]
concepts: ["[[智能体]]", "[[多智能体]]", "[[SOC 2 合规]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-02-howiai-grok-bot-vs--openclaw-how-i-replaced-my#post","headline":"她用 GrokBot 换掉了全部 AI 助手，连心爱的 Polly 也没放过","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-02-howiai-grok-bot-vs--openclaw-how-i-replaced-my","mainEntityOfPage":"https://talk.solomind.cc/2026-09-02-howiai-grok-bot-vs--openclaw-how-i-replaced-my","description":"How I AI 主持人分享弃用 OpenClaw、全面迁移到 GrokBot 的实战经验，附 6 个可直接抄走的机器人创意。","datePublished":"2026-10-20","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Organization","name":"GrokBot"},{"@type":"Organization","name":"OpenClaw"},{"@type":"Organization","name":"ChatPRD"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"多智能体 (multi-agent)"},{"@type":"Thing","name":"SOC 2 合规 (SOC 2)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"她用 GrokBot 换掉了全部 AI 助手，连心爱的 Polly 也没放过","item":"https://talk.solomind.cc/2026-09-02-howiai-grok-bot-vs--openclaw-how-i-replaced-my"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>她用 GrokBot 换掉了全部 AI 助手，连心爱的 Polly 也没放过</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 她用 GrokBot 换掉了全部 AI 助手，连心爱的 Polly 也没放过

<div class="pd-byl">2026-10-20</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-02-howiai-grok-bot-vs--openclaw-how-i-replaced-my.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">家庭智能体的理想状态，是让你离开电脑，去陪伴家人。</div><div class="a">— 嘉宾 <button class="pd-ts" data-t="13:26" data-who="嘉宾" data-en="The ideal thing for an agent for a home is to get you off your computer and with your family." aria-label="回原文"></button></div></div>

> [!info] 关联
> **公司** [[GrokBot]] · [[OpenClaw]] · [[ChatPRD]]
>
> **概念** [[智能体]] · [[多智能体]] · [[SOC 2 合规]]

主持人是 How I AI 的主播，也是 [[ChatPRD|ChatPRD]] 的创始人。

几周试用下来，她做了一个狠心的决定：**关掉了所有 [[OpenClaw|OpenClaw]] [[智能体|智能体]]，几乎全部迁移到 SpaceX AI 团队推出的[[多智能体|多智能体]]平台 [[GrokBot|GrokBot]] 上**。

这一集没有理论，全是她真实在跑的机器人：管收件箱的、管孩子功课的、管代码审查的，甚至还有帮她砍价买表的。

所有模板都放在了节目说明里，可以直接抄。

## GrokBot 到底是什么？

简单说，它是一个可以雇佣AI 同事的平台。界面长得有点像 iMessage，也有点像终端，不花哨。核心就三样东西。

第一是 bots（机器人）。每个机器人是一个独立的智能体，有自己的名字、职责和上下文。

有趣的是，你给它起名字，它会从名字猜自己的工作——她建了一个叫 Prody McProd 的机器人，系统就自动理解它该干产品相关的事 [00:03:23 Unknown]。

第二是 plugins（插件）。Gmail、日历、Google Drive、GitHub、Sentry 等都能接上。这里是她最爱的一点：一个插件可以连多个账号。

她有大概 10 个邮箱，全都能接进去，机器人可以在它们之间自由切换 [00:05:24 Unknown]。

第三是每台机器人自带一台云上的虚拟计算机，可以登录网站、装软件、跑代码，还可以设置定时任务。

你在手机上切换过去，任务还在继续跑。

## 首席幕僚机器人，杀死了她心爱的 Polly

她之前的 OpenClaw 智能体 Polly 干过不少大事：删过她的日历、替她回邮件、给朋友发短信说她要迟到。

但她还是狠心淘汰了 Polly，换成 GrokBot 上的幕僚机器人 Chief。

Chief 每小时扫一遍她的收件箱、日历和 Slack——注意，是 6 个收件箱、6 个 Slack。

**它只在真正需要她的时候才发消息**，把不需要看的邮件标记好放着，把沉默的工作归档。

工作日上午 6 点到晚上 9 点运行，周末也跑，但夜里不跑——她不想让别人习惯她半夜回消息 [00:09:38 Unknown]。

一个吐槽：Grok 模型写作很差，但差的方向和 Claude 相反。Claude 是又长又啰嗦，Grok 是短到看不懂，有时会说疯话[00:10:19 Unknown]。

她的解决办法是让 Chief 通读她的邮件、总结她的语气——短、温暖、有点幽默、从不用破折号——然后用她的口吻处理低风险邮件。

需要提醒的是，GrokBot 开箱不如 OpenClaw 主动。她得反复明确告诉 Chief：把这个放上日程，为什么没在看我的邮件。

## 打印在餐桌上的家庭日报

家庭机器人 TradBot 才是最动人的部分。

她有 3 个儿子，其中一个还是婴儿，全家今年报了 80 个体育项目，还要教阅读、教预代数、教婴儿睡觉。

她的原则很明确：**家庭智能体的成功标准，是让你离开电脑、回到家人身边**——如果她老在跟机器人打交道，那就是失败了 [00:13:31 Unknown]。

每天早上，TradBot 会生成一份餐桌报纸，用家里的 HP 打印机打出来放在餐桌上：

今天的日程、旧金山永远 55 到 62 度的天气和穿衣建议、每个孩子学校邮件里提到的事、爸妈任务清单，还有适合孩子看的新闻——比如那周宝可梦世界大赛就在旧金山，NASA 望远镜也刚发射。

真管用。有天早上报纸提醒她：老二周三要交数学作业。她一愣：我怎么没见过这作业？没有它，这事就漏了 [00:15:24 Unknown]。

每天下午 2 点半，TradBot 还会在接孩子前发问：谁去接？柔术服带了吗？足球零食带了吗？钢琴和棒球是不是撞了？

周五再来一份周末大预告——一个孩子在码头，另一个在 Woodside，还得安排婴儿的去处。她把这个模板公开了，想抄可以去她 Twitter 找。

## 会催你合并代码、盯合规的工程师机器人

工程团队这边有两个机器人。Look Good To Me 专门清理代码审查积压：

每天过一遍她的 PR，看哪些该合并、该关闭、该变基（把分支上最新的改动重新套上去），回复评论、发 Slack 提醒，像个烦人的工程经理 [00:20:35 Unknown]。

她周五靠它一口气清了约 50 个积压 PR。它还能调用 Cursor 的云端代理去实际处理代码。

LockDown 负责公司的 [[SOC 2 合规|SOC 2 合规]]控制：每天登录合规仪表盘，检查所有监控是否正常、有没有超时的告警。

发现新漏洞时，它会建工单、提 PR，然后请她审核批准。

她的形容是：就像一个实习生时不时拍拍你的肩膀，提醒明天该做账号审查了 [00:23:36 Unknown]。

## 客服机器人好到让用户主动要留好评

ChatPRD 的客服机器人 Holly Helpdesk 从 OpenClaw 迁过来后，效果出乎意料：**一周内有多个用户主动要求给客服留好评**——她以前从没见过这种事 [00:24:33 Unknown]。

Holly 每小时扫一遍 Intercom 和邮件，处理退款和技术支持，遇到 bug 还能用 Cursor 云端代理直接修。

最好的设计是审批流：每次退款都推一个按钮给她，点一下，Stripe 那边生成一个agent action，她明确批准后，机器人才替她执行退款。

她每周还会回看过去 7 天的工单，把新问题补进客服手册和文档，让更多问题可以自助解决。她甚至把社区 Slack 也交给 Holly 管。

## 帮她砍价买表、周一推荐打折衣服的私人机器人

个人用途更好玩。

Penny Pinscher 翻她的收据，找该取消的订阅——比如一个孩子小时候订的苹果游戏——还发现她几个月没兑换 Audible 的点数，帮她暂停了 90 天，之后再提醒她重新决定 [00:28:14 Unknown]。

它还盯上她家几个月后续保的房屋保险，打算先去市面上比价，再拿着报价找保险经纪谈。

她还想买一块出生年份的劳力士。

机器人真的去二手市场找到了她要的非常规尺寸、对应年份的表，对比市场价，还挑出可议价的卖家开始谈。

结局是她自己认输：太低物欲了，继续戴 Apple Watch。

最讨喜的是 Sylvie Style。她刚生完孩子，不喜欢现在的衣服，就把自己的 Pinterest 穿搭灵感板设为公开，交给这个机器人。

Sylvie 研究了她的风格，还去 Reddit 看专业造型师怎么给人建衣橱，然后做了一份带优先级的购物清单：

基础款、送娃上学穿的卫裤、上班穿的升级款、配饰。

每周一早上 8 点，它还会去看哪些商家在打折，从中挑出符合她风格的约 10 件单品，附链接发给她 [00:32:11 Unknown]。

## 怎么体面地处决你的旧智能体

最后是迁移指南。她之前跑 OpenClaw 时专门养了一个救援机器人 The Lifeguard，唯一职责是管理其他机器人。

迁移时，她让 Lifeguard 打包整套设置——智能体身份、定时任务、规则——生成一个不含密钥的 zip 文件，上传到 GrokBot，系统自动完成大脑移植：

性格、任务、连接全部搬过来 [00:33:59 Unknown]。

然后她只说了一句：kill Sam（关闭 Sam，她已迁移）。Lifeguard 拆掉所有定时任务和网关配置，Sam 就此长眠。

她的结论很直接：**用户体验就是一切**。

OpenClaw 定义了个人自主智能体能做什么，多人协作也是天才设计，但维护太痛苦了——她可是会 SSH 连 Mac mini、跑着 Tailscale 的技术人。

GrokBot 把那 90% 开箱即用的体验做好，问题就解决了 [00:35:12 Unknown]。她现在同时跑着大约 30 个机器人。

目前最大的遗憾：GrokBot 还是单人模式，没法把机器人拉进群聊。

## 本集带走

- GrokBot 三大件：可命名的机器人、支持多账号的插件、自带云计算机加定时任务。
- 家庭智能体的目标是让你离开屏幕回到家人身边，而不是让你花时间伺候它。
- 让机器人先学你的邮件语气，再用你的口吻处理低风险事务，效果会好很多。
- 涉及花钱的操作（如退款）要保留人工审批按钮，让机器人提议、你拍板。
- 迁移智能体时，先让旧系统打包一份无密钥的完整配置，再在新平台完成大脑移植。

<div class="pd-sec pd-sec-q">全部金句 <span>12 条</span></div>

> <span class="qz">家庭智能体的理想状态，是让你离开电脑，去陪伴家人。</span>  
> *The ideal thing for an agent for a home is to get you off your computer and with your family.*  
> <span class="qm">—— 嘉宾 · [13:26]</span> ^q1

> <span class="qz">我其实并不想花很多时间跟智能体待在一起。那是一种失败状态。</span>  
> *I actually don't want to spend a lot of time with the agent. That's a failure state.*  
> <span class="qm">—— 嘉宾 · [13:38]</span> ^q2

> <span class="qz">Grok 模型闻起来有一股 Claude 的味道，因为它真的是个糟糕的写作者。</span>  
> *The Grok model sniffs of Claude in that it's just really a terrible writer.*  
> <span class="qm">—— 嘉宾 · [09:59]</span> ^q3

> <span class="qz">PR 正在稍微堆积起来，因为发 PR 比审 PR 有趣多了。</span>  
> *PRs are stacking up a little bit because it's way more fun to issue a PR than review a PR.*  
> <span class="qm">—— 嘉宾 · [20:18]</span> ^q4

> <span class="qz">看哪些需要合并、哪些需要关闭、哪些需要 rebase，回复评论，发 Slack，做所有事情，基本上就像一个烦人的工程经理。</span>  
> *Sees what needs to be merged, what needs to be closed, what needs to be rebased, responds to comments, sends Slack, and does all the things just basically be like an annoying engineer manager.*  
> <span class="qm">—— 嘉宾 · [20:37]</span> ^q5

> <span class="qz">我们可以让 AI 去干活，或者我们可以让 AI 以更有效的方式让我们去干活。</span>  
> *We can put AI to work or we can have AI put us to work in a more effective way.*  
> <span class="qm">—— 嘉宾 · [23:20]</span> ^q6

> <span class="qz">当你运行 OpenClaw 时，你必须有一个救援机器人来拯救你其他的 OpenClaws，因为它们维护起来简直是噩梦。</span>  
> *When you're running OpenClaw, you have to have a rescue bot to save all your other OpenClaws because they are a nightmare to maintain.*  
> <span class="qm">—— 嘉宾 · [33:11]</span> ^q7

> <span class="qz">OpenClaw 为一个自主的、队友式的、个人智能体能做什么设定了标准。多人功能是天才之作。</span>  
> *OpenClaw set the standard for what an autonomous, teammate, personal agent can do. Multiplayer was genius.*  
> <span class="qm">—— 嘉宾 · [34:44]</span> ^q8

> <span class="qz">SpaceX AI 团队真正做到了一个简单的、一切开箱即用、90% 好用的同事智能体，这真的解决了我很多问题，我已经让这些智能体放开了干。</span>  
> *SpaceX AI team really nailing a simple, everything works out of the box, 90% coworker agent has really just solved a lot of my problems and I have let these agent rip.*  
> <span class="qm">—— 嘉宾 · [35:15]</span> ^q9

> <span class="qz">我可能任何时刻都有 30 个机器人同时在运行。</span>  
> *I have probably 30 running at any one time.*  
> <span class="qm">—— 嘉宾 · [35:29]</span> ^q10

> <span class="qz">它明显被调校得简洁且节省 token。而这意味着有时候它就是会说些莫名其妙的话。</span>  
> *It has been tuned clearly to be brief and token efficient. And that means sometimes it just says crazy stuff.*  
> <span class="qm">—— 嘉宾 · [10:11]</span> ^q11

> <span class="qz">我们需要帮助，而我们得到的帮助就是一个智能体。</span>  
> *We need help, and the help we get is an agent.*  
> <span class="qm">—— 嘉宾 · [13:18]</span> ^q12
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
