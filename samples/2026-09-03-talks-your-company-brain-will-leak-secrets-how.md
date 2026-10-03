---
title: 公司大脑会泄密：如何培育一个不漏底的公司知识库
podcast: 精选演讲
date: 2026-09-28
source_url: undefined
duration: "26:14"
type: episode
cover: "#64748b"
description: PromptQL CEO 联合创始人 Tanmay 讲解如何构建不泄露机密的「公司大脑」：共享 wiki、权限作用域与人工背书。
guests: ["[[Tanmai Gopal]]"]
companies: ["[[PromptQL]]"]
concepts: ["[[公司大脑]]", "[[编码智能体]]", "[[智能体]]", "[[沙箱]]", "[[wiki]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-your-company-brain-will-leak-secrets-how#post","headline":"公司大脑会泄密：如何培育一个不漏底的公司知识库","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-your-company-brain-will-leak-secrets-how","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-your-company-brain-will-leak-secrets-how","description":"PromptQL CEO 联合创始人 Tanmay 讲解如何构建不泄露机密的「公司大脑」：共享 wiki、权限作用域与人工背书。","datePublished":"2026-09-28","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Tanmai Gopal"},{"@type":"Organization","name":"PromptQL"},{"@type":"Thing","name":"公司大脑 (company brain)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"wiki"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"公司大脑会泄密：如何培育一个不漏底的公司知识库","item":"https://talk.solomind.cc/2026-09-03-talks-your-company-brain-will-leak-secrets-how"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>公司大脑会泄密：如何培育一个不漏底的公司知识库</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 公司大脑会泄密：如何培育一个不漏底的公司知识库

<div class="pd-byl"><b>Tanmai Gopal</b> · PromptQL CEO · 2026-09-28</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-your-company-brain-will-leak-secrets-how.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我要讲的是：如果你去构建一个公司大脑，它很可能会泄露公司机密——这本来就是我们构建公司大脑时最大的担忧，也就是实习生入职后突然拿到所有人薪酬明细的那种情况。</div><div class="a">— Tanmai Gopal <button class="pd-ts" data-t="00:18" data-who="Tanmai Gopal" data-en="I'm going to talk about the fact that if you go ahead and build a company brain, it will likely leak company secrets, which is kind of the big fear that we have about building a company brain anyway, which is this case of intern joins the company and then suddenly gets comp details on everybody kind of situation." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Tanmai Gopal]]
>
> **公司** [[PromptQL]]
>
> **概念** [[公司大脑]] · [[编码智能体]] · [[智能体]] · [[沙箱]] · [[wiki]]

「[[公司大脑|公司大脑]]」——把全公司的知识喂给 AI [[智能体|智能体]]——最大的拦路虎恰恰是它最诱人的地方：一旦建成，实习生入职第一天可能就拿到所有人的薪酬明细。[[PromptQL|PromptQL]] 的 CEO 联合创始人 Tanmay 在这场演讲里，拿出过去一年给 15-20 家企业落地公司大脑的经验（客户从 AI 原生公司、Instacart 这类技术先锋公司到财富 100 强银行都有），讲清楚了怎么建一个既共享又不泄密的大脑。

他们的团队背景是做 GraphQL 引擎的——一个在数据访问领域很流行的开源项目，客户遍布 Apple、Meta、JPMorgan，用他的话说，这让他们「和数据与数据安全形成了一种爱恨交织的关系」。

## 先看健康大脑长什么样：一条持续上升的曲线

Tanmay 先抛了一个现场互动问题：如果给一个运转良好的公司大脑画「每日更新数」曲线，长什么样？多数人猜平稳波动或下降，但他们自己团队近两个月的数据出乎意料——**持续上升**。

原因他一开始也震惊，后来想通了：一旦系统开始运转，人们就会不断教它更多东西。教会它查数据，明天就教它解读数据，后天教它据此行动，再后来教它做 A/B 测试。

而且因为每个智能体的学习都不完美，各自都有一个稳定的「补课速率」，这些速率还会累加。所以每日更新数持续温和上升，是大脑健康的标志；反过来，那些第一天热情爆棚、让某个人去「抓取所有 Slack 和邮件建个共享技能库」的做法，结果都是没人在乎、曲线一路向下。

## 为什么「 obvious 方案」全都不行

公司大脑有两个核心用例：一是**个人用**——比如收到客户的安全问卷，让 AI 查公司大脑帮忙作答并回复；二是**多人协作用**——一群人围着同一个 AI 处理事故：拉日志、查代码库、提 PR、部署 staging、设告警。两者都撞上同一个安全问题：怎么让一个人贡献的知识，安全地流到另一个人手里？

试过的三条路，条条是坑：

1. **让员工在 GitHub 上互相写共享技能。** 听着美好，实际上「没有人会为另一个人写技能」——他自己连整理自己的记忆都勉强，何况为不认识的将来的人写文档。
2. **团队大脑。** 每个团队一个共享 AI、自动存记忆。好用，但这只是多了一个孤岛——比如 Claude 的 tag 有按频道记忆，知识锁死在一个频道里，别的团队用不上。
3. **全员写进一个共享 [[wiki|wiki]]——这才是对的路，但要加三个关键设计。**

## 三条设计原则：共享 wiki + 作用域 + 人来背书

Tanmay 给出了他的公司大脑定义：**放在一组互相链接的 markdown 文件里的共享上下文，加上交给[[编码智能体|编码智能体]]的数据与工具访问控制规则**。注意这不是「拉进 LLM 的知识库」——他们明确不走「构建巨型知识图谱再保护它」的路线，那条路「没成功过，也不会成功」。底层逻辑是把 Claude Code 式的编码智能体用于一切通用问题，大脑是为这种智能体建的。

具体做法三条：

- **所有上下文进一个全公司 wiki**（一大堆可以互相链接的 markdown 文件），不许再分孤岛，「不要在这条规则上让步」。
- **每个文件有作用域（scope）**：规定谁能读写这个文件。往财务 wiki 加东西，就必须带财务作用域；个人内容带个人作用域。
- **最关键的一条：不许智能体自动写记忆。** 自动添加意味着没人知道发生了什么。正确姿势是让智能体**建议**要添加什么内容、带什么作用域，然后由人点「接受」或「拒绝」。这比 GitHub 的写技能+PR 审查+合并轻得多，又不像自动写记忆那么 YOLO——是工作的甜点位。

他们自己的 UX 是这样：AI 帮你回完邮件，弹出一个框，列出它建议写入的几条事实要点；你只管核对「这些事实对不对」，对就点 Add to Wiki，选好每页的作用域，链接由智能体处理。

由此推出两条铁律：**第一，一切进一个公司级 wiki；第二，每一条变更都必须挂在一个真人的名字上**——wiki 里不许出现「Claude 添加了这个」「Hermes 添加了这个」，必须是「Tanmay 添加了这个」。这样出了泄密事故，你知道该找谁补救。

## 第二个用例：多人共用一个 AI 时，凭证也要跟着人走

多人协作才是产生最多公司大脑知识的场景。他给了一个真实的 SRE 案例：团队的 WikiLearning（自动学习功能）挂了，智能体一开始没技能、调查失败；有人现场教它——别用 like 查询，用 equals 查询——它挖出了根因：wiki 页面名带自定义前缀导致生产环境查询出问题。

更精彩的是随后另一个同事加入争论「这个技术决定就是错的」，而**争论本身创造了最高质量的知识**：真正该记录的不是「页面有前缀」，而是「页面不该有前缀，否则会在生产环境造成查询问题」。两个人一起解决问题的过程，才是知识密度最高的时刻。

但这带来严重的权限提升问题：工程师本来只被允许提 PR，现在你却能用同一个智能体部署到生产环境？在银行里，调试的人、部署到 staging 的人、设告警的人、部署上线的人根本不是同一批人。

解法是把「读取用用户凭证」延伸到「执行工具也用用户凭证」：**永远不要把凭证存在[[沙箱|沙箱]]里**，而是在 HTTP 层、SQL 层实时注入当前用户的凭证，让 AI 在每次交互中以那个人的身份行事。再加上一条：把与真实数据的所有交互虚拟化/代理化，**谁添加了某个工具，谁就控制谁能访问它**。

Tanmay 总结：这个架构不复杂，只要守住这几条原则反推，合理的架构只有一种。演讲最后他预告了 PromptQL tag——对标 Claude tag 的产品，思路相同但不锁死在 Claude 上，GLM、GPT 都能用。

## 本集带走

- **别「构建」公司大脑，要「培育」它**：让每个做工作的人拥有并构建自己那部分，指望一个大项目给百年老组织建大脑是不可能的。
- **健康度有个可量化信号**：每日更新数持续温和上升 = 好大脑；一次性狂建后无人维护 = 失败。
- **三条设计铁律**：① 所有知识进一个全公司 wiki，不分孤岛；② 每个文件按作用域控制读写；③ 智能体只**建议**写入内容和作用域，人点接受/拒绝——不自动写记忆。
- **每条变更挂真人名字**：杜绝「AI 添加」，出了泄密能追溯到人。
- **凭证永不进沙箱**：读上下文和执行工具都用当前用户的凭证，在 HTTP/SQL 层注入，让共享 AI 在每次交互中「以人行事」。
- **争论产生最高质量的知识**：多人协作解决问题（包括互相抬杠）的过程，比个人总结更值得写进大脑。

<div class="pd-sec pd-sec-q">全部金句 <span>6 条</span></div>

> <span class="qz">我要讲的是：如果你去构建一个公司大脑，它很可能会泄露公司机密——这本来就是我们构建公司大脑时最大的担忧，也就是实习生入职后突然拿到所有人薪酬明细的那种情况。</span>  
> *I'm going to talk about the fact that if you go ahead and build a company brain, it will likely leak company secrets, which is kind of the big fear that we have about building a company brain anyway, which is this case of intern joins the company and then suddenly gets comp details on everybody kind of situation.*  
> <span class="qm">—— Tanmai Gopal · [00:18]</span> ^q1

> <span class="qz">你没法为一个有 100 年历史的组织构建公司大脑，对吧？你连为自己的家庭构建一个都很难，对吧？</span>  
> *you can't build a company brain for an organization that's like 100 years old, right? You can barely build it for your own family, right?*  
> <span class="qm">—— Tanmai Gopal · [10:03]</span> ^q2

> <span class="qz">我们要去培育一个公司大脑，而不是构建一个。</span>  
> *we're going to grow a company brain. We're not going to build one, right?*  
> <span class="qm">—— Tanmai Gopal · [10:37]</span> ^q3

> <span class="qz">这很好，但问题是它仍然不是公司大脑，因为它仍然是隔离的。</span>  
> *This is nice, but the problem is it's still not a company brain because it's still isolated, right?*  
> <span class="qm">—— Tanmai Gopal · [14:27]</span> ^q4

> <span class="qz">那场争论创造了知识，因为真正的问题是有人做了一个没有记录下来的技术决定。</span>  
> *That argument creates knowledge because the actual problem was that somebody made a technical decision that was not documented.*  
> <span class="qm">—— Tanmai Gopal · [22:13]</span> ^q5

> <span class="qz">因为那位工程师本来只被允许做 PR 的工作，但现在我可以用同一个智能体部署到生产环境？那太可怕了。</span>  
> *Because the engineer was allowed to do the PR work, but now I can use the same agent to deploy to prod? That's too scary.*  
> <span class="qm">—— Tanmai Gopal · [23:19]</span> ^q6

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a|智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、编码智能体 (coding agent)</span>
- [[2026-07-07-ainativedev-inside-anthropic-how-claude-tag-is-chang|Claude Tag:住在 Slack 里的主动型队友，如何让 65% 的 PR 由 AI 开出]]<span class="pd-rz">同公司:Slack · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同公司:Slack · 同概念:智能体 (agent)、沙箱 (sandbox)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)、编码智能体 (coding agent)</span>
- [[2026-10-03-talks-yolo-mode-safely-microvm-sandboxes-for-a|我用五个提示词「黑」了自己：你的 AI 助手并不安全]]<span class="pd-rz">同公司:Claude · 同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
