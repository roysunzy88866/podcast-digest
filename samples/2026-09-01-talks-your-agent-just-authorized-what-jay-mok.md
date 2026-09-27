---
title: 智能体拿你的钱包购物怎么办：PayPal 的智能体授权心智模型
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "15:57"
type: episode
cover: "#64748b"
description: PayPal 智能体支付产品经理 Jay Mock 与企业支付团队资深工程师 Ben Coombs 讲解如何给智能体授权：按风险等级选证据强度，从日志回滚到密码学证明。
guests: ["[[Jay Mok]]", "[[Ben Coumes]]"]
companies: ["[[PayPal]]"]
concepts: ["[[智能体]]", "[[智能体授权]]", "[[Claude Code]]", "[[保险库]]", "[[OAuth]]", "[[可验证意图]]", "[[AP2 授权指令]]", "[[审批令牌]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-01-talks-your-agent-just-authorized-what-jay-mok#post","headline":"智能体拿你的钱包购物怎么办：PayPal 的智能体授权心智模型","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-01-talks-your-agent-just-authorized-what-jay-mok","mainEntityOfPage":"https://talk.solomind.cc/2026-09-01-talks-your-agent-just-authorized-what-jay-mok","description":"PayPal 智能体支付产品经理 Jay Mock 与企业支付团队资深工程师 Ben Coombs 讲解如何给智能体授权：按风险等级选证据强度，从日志回滚到密码学证明。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Jay Mok"},{"@type":"Person","name":"Ben Coumes"},{"@type":"Organization","name":"PayPal"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"智能体授权 (agent authorization)"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"保险库 (vault)"},{"@type":"Thing","name":"OAuth"},{"@type":"Thing","name":"可验证意图 (verifiable intents)"},{"@type":"Thing","name":"AP2 授权指令 (AP2 mandate)"},{"@type":"Thing","name":"审批令牌 (approval token)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"智能体拿你的钱包购物怎么办：PayPal 的智能体授权心智模型","item":"https://talk.solomind.cc/2026-09-01-talks-your-agent-just-authorized-what-jay-mok"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>智能体拿你的钱包购物怎么办：PayPal 的智能体授权心智模型</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 智能体拿你的钱包购物怎么办：PayPal 的智能体授权心智模型

<div class="pd-byl"><b>Jay Mok</b> · PayPal 智能体支付产品经理 · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-01-talks-your-agent-just-authorized-what-jay-mok.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">到了 2026 年，并不是机器或智能体发射核弹，而是它们拿走了你的钱包疯狂购物，买了一大堆加密货币，还给你买了一堆 Spanx 塑身衣。</div><div class="a">— Jay Mok <button class="pd-ts" data-t="00:33" data-who="Jay Mok" data-en="And in 2026, it's not that the machines are or the agents are launching nukes, but rather they've taken your wallet and they've gone on a shopping spree and they buy like a bunch of crypto and new bunch of Spanx for you." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Jay Mok]] · [[Ben Coumes]]
>
> **公司** [[PayPal]]
>
> **概念** [[智能体]] · [[智能体授权]] · [[Claude Code]] · [[保险库]] · [[OAuth]] · [[可验证意图]] · [[AP2 授权指令]] · [[审批令牌]]

2026 年的「终结者」噩梦不再是机器发射核弹，而是[[智能体|智能体]]拿走你的钱包疯狂购物——买一堆加密货币，还给你买了一堆塑身衣。这是 [[PayPal|PayPal]] 智能体支付产品经理 Jay Mock 在开场抛出的玩笑，但它引出一个正经问题：当智能体（agent，能自主替你执行任务的 AI 程序）开始替人花钱，我们怎么防范？Jay Mock 和 PayPal 企业支付团队资深工程师 Ben Coombs 这一小节分享的正是一套思考[[智能体授权|智能体授权]]的心智模型。

## 三个必须回答的问题

智能体授权的核心就是三问：**① 人类是否授权了这次操作？**——通常靠通行密钥（passkey，一种用设备本地加密验证身份的登录方式）之类的手段完成身份验证；**② 现在在这个范围内是否被允许？

**——通常是一个有时限的令牌（token），限定金额，还可能限定商家或具体购买意图；**③ 之后能否证明？**——出了问题、产生争议时，你能不能拿出证据说明是人类确实授权了那笔交易 <button class="pd-ts" data-t="01:26" data-who="Jay Mock" data-en="Okay. So the key questions that we kind of like start off with is in terms of like agent authorization is did the human authorize this? Is this allowed right now in this scope and can we prove it later?" aria-label="回原文"></button>。

而怎么回答这三个问题，取决于上下文：场景是低风险还是高风险？各方是开放生态还是封闭生态（业内常说的 KYA，know your agent，认识你的智能体，说的就是这个）？

Jay 用了一个类比：**刷卡进公司**。你在前台刷卡进楼之后，去楼里任何房间都不用再刷卡——因为你已经处在可信边界之内，遇到同事也会天然多一分信任。封闭生态就像楼内，开放生态就像上街 <button class="pd-ts" data-t="03:23" data-who="Jay Mock" data-en="I like to use an analogy. I like analogies. And the analogy I like to use is kind of like the, you know, badging into work." aria-label="回原文"></button>。

## 低风险：Claude Code 这类工具操作

最熟悉的例子是 [[Claude Code|Claude Code]]。你给它接上 GitHub、Jira 等工具的连接器，这个连接过程本身就是身份验证，即完成了人类授权。

权限范围就是 Claude 的工具权限——允许、拒绝、或动手前先问你。而因为写代码风险相对低：错了可以回滚、可以看系统日志，所以**不需要密码学级别的证明**，日志就够了 <button class="pd-ts" data-t="04:37" data-who="Jay Mock" data-en="And then authority and evidence is really about how you answer those three questions I had shared in the prior slide. So, we'll talk a little bit first about, like, Claude Codes, since that's what most people are very familiar with." aria-label="回原文"></button>。这就是矩阵的左上角：低风险 + 封闭生态 → 靠简单日志和可回滚兜底。

> 【背景】Claude Code 是 Anthropic 的编程智能体。

## 中风险：共享保险库 + OAuth 权限范围

一旦涉及真金白银，风险升级——但生态仍然封闭的话，做法是中等的。例子：一家 TripAdvisor 式的旅游公司，握有入住率数据、评论等内容想变现，买方是旅行代理类的智能体。

PayPal 与合作伙伴 Nevermind 合作，用两块企业支付基础设施（原语）搭出这个场景：一是**[[保险库|保险库]]（vault）**，代表买方智能体保管支付凭证；二是通过 **[[OAuth|OAuth]]**（一种让第三方在限定权限内访问你资源的授权协议）把凭证访问权开放给各商家。由此构建出一个买卖双方智能体互认的、更可信的封闭生态 <button class="pd-ts" data-t="06:23" data-who="Jay Mock" data-en="Okay, so the next example we're going to talk about is a more medium stakes scenario and why we're calling this medium stakes even though it's within a known or kind of closed ecosystem is because it has to do with money and payments." aria-label="回原文"></button>。

具体流程：人类用商用卡授权支付，把卡共享给买方智能体，授权指令上带权限范围来控制额度和用途。争议处理呢？

因为是封闭生态，**靠现有交易日志就够，不需要密码学证明** <button class="pd-ts" data-t="08:46" data-who="Jay Mock" data-en="Then it also has scopes associated with that mandate, so that's how you're able to control the authority. But in terms of the actual dispute handling, we really don't have a, we're not using cryptographic proof that's being sent as part of that request." aria-label="回原文"></button>。风险比写代码高（有钱在动），但双方从 Nevermind 这个第三方「借用信任」，卖方敢收款、买方不越权 <button class="pd-ts" data-t="09:51" data-who="Ben Coombs" data-en="Yeah, so the last slide that Jay talked about, you know, we're kind of going over the medium stakes example. In that scenario, you know, both parties know each other." aria-label="回原文"></button>。

## 高风险：互不相识时，靠可验证意图 + AP2 指令

真正难的是：双方互不相识、没经过审核，智能体要自主支付。Ben 认为行业应收敛到 **FIDO [[可验证意图|可验证意图]] + [[AP2 授权指令|AP2 授权指令]]（mandate）** 标准。它的本质是一个多层的选择性披露 JWT（一种可携带声明并带签名的令牌格式）：第一层由可信凭证提供方（希望是 PayPal）创建；第二层封装用户给智能体的指令，由用户用私钥签名；第三层（做自主支付时才有）由智能体自己签署 <button class="pd-ts" data-t="10:40" data-who="Ben Coombs" data-en="And so, like, we think, you know, we believe that the best option for that, you know, to actually do these autonomous payments where, you know, not everyone's known, like, you know, the stakes are high." aria-label="回原文"></button>。

这样设计的好处是**各方可各自验证对自己重要的那一层**：商家验证结账是否正确，支付处理方验证支付指令是否正确——而且**交易各方之间不需要有任何关系**。Ben 认为如果自主支付要做到大规模，这就是最佳路径 <button class="pd-ts" data-t="11:20" data-who="Ben Coombs" data-en="So that case, the agent would sign that third layer. So where that's powerful is that Party involved in a transaction can verify the part that's important to them." aria-label="回原文"></button>。

PayPal 据此做了个新产品：**[[审批令牌|审批令牌]]（approval token）**。传统 PayPal 订单是同步的——找到商品、打开应用、批准、完成。

现在用户在智能体上发起流程，被重定向到 PayPal 确认给智能体的指令，PayPal 返回一个含金额、有效期、指定商家的 JSON 载荷——一个目前只有 PayPal 能批准的不透明字符串。这个功能即将上线生产环境，选 PayPal 付款的 Gemini 用户会用到 <button class="pd-ts" data-t="11:53" data-who="Ben Coombs" data-en="And so I think if there's gonna be autonomous payments at scale, we think that that's going to be the best way to accomplish it. Pictures on the screen are depicting our PayPal approval token." aria-label="回原文"></button>。

## 回到那张矩阵

把三档串起来：**低风险**——楼内刷卡，操作可撤销可重做，Claude 输出错了也没什么大不了；**中风险**——同一系统边界内彼此认识的双方，涉及资金，但靠第三方执行支付指令来兜底；**高风险**——用户让智能体自主行事、且不知道它会和谁交易，这时各方需要可验证的证明（目前生产环境还没真正见到这一档落地）<button class="pd-ts" data-t="13:11" data-who="Ben Coombs" data-en="We didn't have the two columns filled out on the right-hand side. We want to reinforce this mental model where starting at the top, we have the low stakes scenario." aria-label="回原文"></button>。回到开头的类比：低风险是你刷了卡在楼里；高风险是你在街上遇到陌生人——对方掏出一个徽章给你看够吗？大概不够，你需要达到可验证标准的东西来证明「是人类授权了智能体」<button class="pd-ts" data-t="14:46" data-who="Jay Mock" data-en="That's all I have. Yeah, I mean, I think if we could just go back to analogies, you know, like in the low stakes, it's kind of like, hey, you're within the building, you've put badges in, you're within the building, whereas in the high stakes, it's kind of like you are on the street and you meet somebody." aria-label="回原文"></button>。

还有一层更大的判断：这套模型不只用于支付，任何**难以逆转的高风险智能体操作**都适用——医疗医嘱、电子签名、证券交易 <button class="pd-ts" data-t="14:25" data-who="Ben Coombs" data-en="And so we believe that that will be, I know, verifiable events and AP2 mandates. I think the interesting thing is like, it's also our belief that, you know, this is a model that won't just be used for payments, but we think it could be for any sort of high stakes action that's hard to reverse." aria-label="回原文"></button>。

## 本集带走

- **判断授权强度先看两个维度**：风险高低（操作可否逆转、是否涉及钱）+ 生态开放度（双方认不认识）。风险和证据强度要匹配。
- **低风险别过度设计**：像 Claude Code 那样，身份验证 + 工具权限范围 + 日志/回滚就够了，不需要密码学证明。
- **中风险靠「借用信任」**：封闭生态里引入一个共同信任的第三方保管支付凭证（保险库），再用 OAuth 按权限范围分发访问权，争议靠交易日志解决。
- **高风险靠多层签名**：可验证意图 + AP2 指令——用户签指令、智能体签执行，各方各验所需那一层，无需互识即可交易，这是大规模自主支付的前提。
- **这套模型可平移**：任何难以逆转的智能体操作（医嘱、电子签名、证券交易）都能套用同一套「风险 × 证据」矩阵。

<div class="pd-sec pd-sec-q">全部金句 <span>2 条</span></div>

> <span class="qz">到了 2026 年，并不是机器或智能体发射核弹，而是它们拿走了你的钱包疯狂购物，买了一大堆加密货币，还给你买了一堆 Spanx 塑身衣。</span>  
> *And in 2026, it's not that the machines are or the agents are launching nukes, but rather they've taken your wallet and they've gone on a shopping spree and they buy like a bunch of crypto and new bunch of Spanx for you.*  
> <span class="qm">—— Jay Mok · [00:33]</span> ^q1

> <span class="qz">我认为有意思的是，这也是我们的信念：这个模型不会只用于支付，我们认为它可以用于任何难以逆转的高风险操作。</span>  
> *I think the interesting thing is like, it's also our belief that, you know, this is a model that won't just be used for payments, but we think it could be for any sort of high stakes action that's hard to reverse.*  
> <span class="qm">—— Ben Coumes · [14:25]</span> ^q2

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-07-21-trainingdata-factory-s-matan-grinberg-the-coming-dark|Factory CEO Matan:早两年等于错，退款、路由器与软件工厂]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、令牌 (token)</span>
- [[2026-09-09-twiml-do-ai-tokenomics-matter-more-than-model|斯坦福语言学家的代币经济学：你的 token 贬值了]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)、令牌 (token)</span>
- [[2026-02-19-lennys-head-of-claude-code-what-happens|Claude Code 负责人：写代码已被解决，下一步是什么]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2025-07-20-lennys-anthropic-co-founder-benjamin-mann|Anthropic 联合创始人：安全为什么不是添头，而是 Claude 性格的来源]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>
- [[2026-01-18-lennys-the-non-technical-pms-guide-to-building|非技术 PM 的 AI 编程法：用 Cursor 和 Claude Code 独自造出赚钱产品]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
