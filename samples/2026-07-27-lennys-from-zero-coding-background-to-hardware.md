---
title: 不审查AI生成的PR：自动评分审批机器人实战
podcast: "Lenny's Podcast"
date: 2026-07-27
source_url: https://www.lennysnewsletter.com/p/from-zero-coding-background-to-hardware
duration: "24:11"
type: episode
cover: "#6366f1"
image: "/covers/2026-07-27-lennys-from-zero-coding-background-to-hardware.jpg"
description: 用AI智能体给PR打风险分、自动批准低风险项，把人类审查员从队列中解放出来。
host: "[[Claire]]"
companies: ["[[Intercom]]", "[[Vercel]]"]
concepts: ["[[智能体]]", "[[沙箱]]", "[[Eve]]", "[[风险评分]]"]
category: 智能体
tags:
  - 智能体
  - AI 编程
socialImage: "https://talk.solomind.cc/covers/2026-07-27-lennys-from-zero-coding-background-to-hardware.jpg"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-07-27-lennys-from-zero-coding-background-to-hardware#post","headline":"不审查AI生成的PR：自动评分审批机器人实战","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-07-27-lennys-from-zero-coding-background-to-hardware","mainEntityOfPage":"https://talk.solomind.cc/2026-07-27-lennys-from-zero-coding-background-to-hardware","description":"用AI智能体给PR打风险分、自动批准低风险项，把人类审查员从队列中解放出来。","datePublished":"2026-07-27","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"image":"https://talk.solomind.cc/covers/2026-07-27-lennys-from-zero-coding-background-to-hardware.jpg","isBasedOn":"https://www.lennysnewsletter.com/p/from-zero-coding-background-to-hardware","about":[{"@type":"Person","name":"Claire"},{"@type":"Organization","name":"Intercom"},{"@type":"Organization","name":"Vercel"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"沙箱 (sandbox)"},{"@type":"Thing","name":"Eve"},{"@type":"Thing","name":"风险评分 (risk scoring)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"不审查AI生成的PR：自动评分审批机器人实战","item":"https://talk.solomind.cc/2026-07-27-lennys-from-zero-coding-background-to-hardware"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>不审查AI生成的PR：自动评分审批机器人实战</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13V3"/><path d="M6.5 6.5 10 3l3.5 3.5"/><path d="M4.5 11.5V16a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 20 20" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg><svg class="if" viewBox="0 0 20 20" width="19" height="19" fill="currentColor"><path d="M10 16.8s-6-3.8-6-8.4a3.2 3.2 0 0 1 6-1.5 3.2 3.2 0 0 1 6 1.5c0 4.6-6 8.4-6 8.4z"/></svg></button></div></div></header></div>

# 不审查AI生成的PR：自动评分审批机器人实战

<div class="pd-byl"><b>Claire</b> · 2026-07-27</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-07-27-lennys-from-zero-coding-background-to-hardware.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">而我要告诉你们，在 2026 年，答案是你可以通过将 AI 引入闭环来安全地不审查 PR。</div><div class="a">— Claire <button class="pd-ts" data-t="02:51" data-who="Claire" data-en="And I am telling you in 2026, the answer is you can safely not review PRs by putting AI in the loop." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Claire]]
>
> **公司** [[Intercom]] · [[Vercel]]
>
> **概念** [[智能体]] · [[沙箱]] · [[Eve]] · [[风险评分]]
>
> **来源** [Lenny's Podcast](https://www.lennysnewsletter.com/p/from-zero-coding-background-to-hardware)

<div class="pd-tldr"><b>一句话</b>用AI智能体给PR打风险分、自动批准低风险项，把人类审查员从队列中解放出来。</div>

你不必由人类一对一审查所有 AI 生成的 PR——把 AI 引入审查闭环，低风险的直接自动批准，人类只看真正需要专业判断的。这不是理论，[[Intercom|Intercom]] 已经这么干了：PR 吞吐量翻了两三倍，AI 审批的 PR 比纯人类审查的快 5 倍，回退率（上线后需要修复的代码比例）反而更低。而且只要你的风险政策和代码审查政策里有写、过程可审计、可查询、可辩护，SOC 2、HIPAA 这类合规框架下也能做 <button class="pd-ts" data-t="03:05" data-who="Claire" data-en="And I want to call attention to two blog posts that have really inspired me in this process. One is from Intercom about how they made AI approved PRs safe. If you don't know, Intercom has 2x, 3x their PR throughput." aria-label="回原文"></button>。

## 风险评分看什么

[[Claire|Claire]] 基于 Intercom 和一个叫 Diff Vader 的技术方案，用 [[Vercel|Vercel]] 的 [[Eve|Eve]] 框架搭了一个 PR 审查[[智能体|智能体]]，取名 Merge Mommy。它的逻辑很直白：等所有 CI 检查变绿 → 读取 PR 的 diff → 从六个维度打分 → 低于阈值自动批准，否则升级给人类。

六个评分维度是：变更面和爆炸半径多大；是否容易回滚（大型数据迁移就难回滚）；是否涉及数据安全；是否改变运营相关的东西；验证缺口——测试够不够完整、CI 有没有跑完；以及能否通过多种方式验证变更的正确性 <button class="pd-ts" data-t="15:53" data-who="Claire" data-en="And so it looks at six things. How big is the change surface and blast radius? Is it easily reversible, right?" aria-label="回原文"></button>。

打分脚本跑完，24 分以下算低风险，自动批准；25 到 64 是中等风险，65 及以上是高风险——中高都要求人类审查 <button class="pd-ts" data-t="16:20" data-who="Claire" data-en="And then it has sort of like a script that it runs to calculate a score. And then anything under 24 points, again, I did not like choose these thresholds. Anything below 24 points is low risk." aria-label="回原文"></button>。

## 怎么区分仓库里的风险类别

光靠 diff 大小不能定风险。Claire 的做法是按仓库内容分类：文档改动是低风险，功能逻辑是中等风险，认证和计费相关是高风险 <button class="pd-ts" data-t="15:09" data-who="Claire" data-en="It reads and reviews the PR. It has a couple repo specific risk kind of categories. So like docs are low risk," aria-label="回原文"></button>。

实际跑起来有个例子：Devin 自动提交的一个纯文档更新，Merge Mommy 打了 6 分（满分 10），很低——但有合并冲突，所以没自动批准，机器人把阻塞原因写在了评论里 <button class="pd-ts" data-t="18:09" data-who="Claire" data-en="And so what happens on once the PR is ready to go, Merge Mommy runs. It gives a risk score, six out of 10. It's very low risk." aria-label="回原文"></button>。另一个干净的文档 PR，7 分，自动通过，机器人留了一个灰色勾号 <button class="pd-ts" data-t="18:36" data-who="Claire" data-en="A cleaner example here is this doc, which I already merged, which again went through and said it's seven out of 10 low risk." aria-label="回原文"></button>。一个删除旧版本代码的弃用 PR，35 个变更、大红色 diff，打了 45 分（满分 100），中等风险——因为策略判定它改变了服务端 API 行为且变更量大，需要人类审 <button class="pd-ts" data-t="19:58" data-who="Claire" data-en="I can't take myself seriously when I say it, but I'm gonna say it anyways. Merge Mommy gave it a 45 out of 100, a medium risk," aria-label="回原文"></button>。

## 技术栈和搭建过程

框架选的 Vercel Eve：一个开源的智能体部署框架，智能体的指令、技能、工具都用自然文本或 TypeScript 写，不需要过度设计。Claire 整个指令文件就四五段加几个要点 <button class="pd-ts" data-t="13:48" data-who="Claire" data-en="to set this up. It's a chat PRD engineering agent. It reviews PRs." aria-label="回原文"></button>。

技术流程：GitHub 应用在 PR 变更完成后触发事件 → Vercel 的 GitHub 集成接住 → 启动[[沙箱|沙箱]]、检出仓库、看 diff → 跑技能和工具评估风险 → 输出批准或需要变更的评论 → 然后 ping Slack 通知人类做最终操作 <button class="pd-ts" data-t="12:22" data-who="Claire" data-en="So it's like very similar to how a human would do code review. How does it work from a technical flow perspective? So the GitHub, I have a GitHub app." aria-label="回原文"></button>。

搭这个智能体本身用的是 Codex（带浏览器使用能力）。Claire 只给了一句话提示词：「做一个内部 GitHub 机器人，在所有检查变绿后审查 PR，评低中高风险，自动批准低风险的」<button class="pd-ts" data-t="09:29" data-who="Claire" data-en="which says, I want to make an internal GitHub bot slash app that reviews PRs after all C-checks, that's checks," aria-label="回原文"></button>。代码生成不稀奇，真正省事的是让 Codex 用 Chrome 浏览器自动点完了 Slack 机器人设置和 GitHub 应用权限配置那些繁琐的界面操作——这是 Claire 强调的一个技巧：遇到复杂的 SaaS 配置，让带浏览器能力的 AI 去点 <button class="pd-ts" data-t="10:31" data-who="Claire" data-en="You have to do all this stuff. And so what I did is my favorite hack is I had it use Chrome browser use and I let it navigate Slack bot setup." aria-label="回原文"></button>。

## 人类在环的最终一步

因为仓库规则要求「必须有审查批准」，机器人自己的批准不满足这个硬性要求（勾号是灰色的）。所以流程是：机器人审查完，低风险的发到 Slack 频道，人类点一下批准、点一下合并，两步搞定 <button class="pd-ts" data-t="19:07" data-who="Claire" data-en="So it's just like a really nice automated flow. Now, why do we have to have a human do it? As you can see, this checkmark is gray." aria-label="回原文"></button>。Claire 的说法是：既让 AI 去干活（审查打分），又让 AI 把人安排去干最终那一下——两边都没闲着 <button class="pd-ts" data-t="20:36" data-who="Claire" data-en="hey, this can be approved or this requires human review. Again, I like to say this thing where we can put AI to work for us or we can have AI put us" aria-label="回原文"></button>。

## 本集带走

- **[[风险评分|风险评分]]维度比 diff 大小重要**：爆炸半径、可回滚性、数据安全、运营影响、测试完整性、可验证性——这六项决定了 PR 真正的风险等级。
- **按仓库内容分类定基线风险**：文档低、功能逻辑中、认证计费高，diff 大小不直接决定风险。
- **指令不需要长**：四五段自然语言加几个要点就能驱动一个可用的 PR 审查智能体。
- **用浏览器能力自动完成 SaaS 配置**：让 Codex 这类工具直接操作 Chrome 点完 Slack 和 GitHub 的设置界面，省掉大量手工配置。
- **合规不等于不能自动批准**：只要风险策略里有写、过程可审计可查询，SOC 2 环境下也能跑自动审批——但要跟安全合规团队确认。
- **对内部智能体跑 eval**：每次审查结果记录下来，让工程师标注对错，像改进面向用户的产品一样持续改进内部机器人 <button class="pd-ts" data-t="23:01" data-who="Claire" data-en="is they run evals on this internal agent. So every time this review is run, it gets logged into, I think it's like an internal eval platform." aria-label="回原文"></button>。

<div class="pd-sec">全部金句 <span>5 条</span></div>

> <span class="qz">而我要告诉你们，在 2026 年，答案是你可以通过将 AI 引入闭环来安全地不审查 PR。</span>  
> *And I am telling you in 2026, the answer is you can safely not review PRs by putting AI in the loop.*  
> <span class="qm">—— Claire · [02:51]</span> ^q1

> <span class="qz">但他们真正的想法以及他们通过采用 AI 证明的是，AI 审批的 PR 以及 AI 编写的代码总体上可能比只有人类参与审查更加安全，质量更高。</span>  
> *But what they really think and what they've proven with their adoption of AI is that AI approved PRs and AI written code in general can be even safer and even higher quality than what you're doing with just a human in the loop.*  
> <span class="qm">—— Claire · [03:43]</span> ^q2

> <span class="qz">实际上比他们的人类 PR 快 5 倍。</span>  
> *Actually five times faster than their human PRs.*  
> <span class="qm">—— Claire · [04:19]</span> ^q3

> <span class="qz">差异大小不设定风险。</span>  
> *Diff size does not set risk.*  
> <span class="qm">—— Claire · [15:21]</span> ^q4

> <span class="qz">我喜欢说这样一件事，我们可以让 AI 为我们工作，或者我们可以让 AI 让我们去工作。</span>  
> *I like to say this thing where we can put AI to work for us or we can have AI put us to work.*  
> <span class="qm">—— Claire · [20:36]</span> ^q5

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-08-05-lennys-build-an-ai-code-review-bot-in-30|用 AI 审 AI：Vercel 搭建自动批准 PR 机器人实操]]<span class="pd-rz">同公司:Intercom、Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、风险评分 (risk scoring)</span>
- [[2026-08-10-lennys-claude-code-for-normal-people-skills|不用人审，让 AI 自动批准 PR：我的风险评分机器人搭建记]]<span class="pd-rz">同公司:Intercom、Vercel · 同概念:Eve、智能体 (agent)、沙箱 (sandbox)、风险评分 (risk scoring)</span>
- [[2026-01-01-lennys-we-replaced-our-sales-team-with-20-ai-ag|用 20 个 AI 智能体换掉 8 人销售团队：SaaStr 创始人的前沿实战]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2025-11-30-lennys-what-the-best-gtm-teams-do-differently|Vercel COO 谈用 AI 重构销售：10 个 SDR 缩减到 1 个]]<span class="pd-rz">同公司:Vercel · 同概念:智能体 (agent)</span>
- [[2026-07-23-talks-jensen-huang-says-the-ai-doomers-have-it|黄仁勋：AI毁灭论是胡说八道，自由贸易让美国必赢]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>
- [[2026-08-11-a16z-the-ciso-playbook-for-ai-agents-datadog|AI失控了别慌,先盯紧漏洞数量爆炸]]<span class="pd-rz">同概念:智能体 (agent)、沙箱 (sandbox)</span>

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
  function all(){ topbar(); move(); adopt(); graph(); newtab(); logos(); favSync(); mtoc(); chips(); tocPeers(); }
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
