---
title: "给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行"
podcast: 精选演讲
date: 2026-09-29
source_url: undefined
duration: "20:50"
type: episode
cover: "#64748b"
description: "Two Sigma 的 Xu Fang 讲述如何让云端智能体以员工本人身份安全运行:header 打标做归属追踪,Google 企业索引做内网搜索,拿到全部能力同时压住风险。"
guests: ["[[Shu Fang, Two Sigma]]"]
companies: ["[[Two Sigma]]"]
concepts: ["[[智能体]]", "[[Claude Code]]", "[[Kubernetes]]", "[[提示词注入]]", "[[可观测性]]"]
category: 智能体
tags:
  - 智能体
  - AI 安全
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two#post","headline":"给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two","mainEntityOfPage":"https://talk.solomind.cc/2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two","description":"Two Sigma 的 Xu Fang 讲述如何让云端智能体以员工本人身份安全运行:header 打标做归属追踪,Google 企业索引做内网搜索,拿到全部能力同时压住风险。","datePublished":"2026-09-29","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Shu Fang, Two Sigma"},{"@type":"Organization","name":"Two Sigma"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"Claude Code"},{"@type":"Thing","name":"Kubernetes"},{"@type":"Thing","name":"提示词注入 (prompt injection)"},{"@type":"Thing","name":"可观测性 (observability)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行","item":"https://talk.solomind.cc/2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 给智能体系上绳索:Two Sigma 让云端 AI 以你的身份安全运行

<div class="pd-byl"><b>Shu Fang, Two Sigma</b> · 2026-09-29</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-03-talks-tethered-our-agents-are-us-shu-fang-two.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">你和你的智能体现在是完全相同的身份。</div><div class="a">— Shu Fang, Two Sigma <button class="pd-ts" data-t="05:19" data-who="Shu Fang, Two Sigma" data-en="You have you and your you agent are now the exact same identity." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Shu Fang, Two Sigma]]
>
> **公司** [[Two Sigma]]
>
> **概念** [[智能体]] · [[Claude Code]] · [[Kubernetes]] · [[提示词注入]] · [[可观测性]]

这一集是一场题为《Tethered, Our Agents Are Us》的企业 AI 实践演讲,主角是量化基金 [[Two Sigma|Two Sigma]] 的 Xu Fang。开场他先解释了公司名字:Two Sigma 的「两个 sigma」不是指两位很潮的联合创始人,而是指小波动率与大波动率之和——把它们加总起来对冲风险、获取差异化的 alpha。他强调观点仅代表个人,不是在推销任何东西或股票。

真正的主题相当大胆:这家有 25 年历史、身处严格监管行业的公司,做到了**公司里每个人都有一个云端[[智能体|智能体]],而且这些智能体以用户本人的身份运行**。为什么他们不但不怕,反而觉得这样更安全?这就是本集要讲的事。

## 问题:机器身份方案为什么走不通

回到 2025 年 6 月前后,[[Claude Code|Claude Code]] 正式发布,大家开始在本地机器上用智能体。能力很强,但有两个限制:一是受限于命令行界面(CLI,就是黑底白字的命令窗口),二是只能在本地跑。

他们想实现的世界是:无论你用手机、Slack 还是浏览器,都能远程使用智能体。这不仅是能力问题——很多很多人,不管懂不懂技术,根本不习惯完全在 CLI 里操作。

于是问题变成:智能体以什么身份运行?常规做法是给它一个机器身份,关联到你的用户账号。但他们发现这条路很快崩溃:权限同步极难维持;任何涉及软件许可的地方,现在得处理两份许可;有些系统(比如 Google Workspace、邮箱)压根不支持多个身份操作同一份底层数据;还有些系统的第一步就是拦截这种身份;另外你还得重新设计公开与私密的边界。

那就反过来——让智能体直接以用户本人的完全相同身份远程运行,之前所有的约束就都不成立了。

## 地基:现成的个人命名空间

他们手里已有现成基础设施:一个 [[Kubernetes|Kubernetes]](管理容器的系统)集群体系,每个区域里**每个用户都有专属命名空间,里面所有东西都以该用户身份运行**。这套东西不是为智能体建的——而是为了那些不适合塞进某人本地机器的自动化运维:自动化任务、代码容器、研究 notebook 等。

某个触发器进入控制器,请求启动计算资源;一个独立的身份服务被 pod 里的 sidecar(随行辅助容器)拉取凭据,容器挂载该身份后,就以「你」的身份运行。任何用户已有这套东西,所以部署智能体时「一切都已经配置好了」,个人构建智能体、部署进自己的命名空间、以自己的身份运行,不需要额外流程;想推广成全公司通用的,走和普通应用一样的标准机制——生产支持、安全审查。

## 危险一:分不清是「你」还是「你的智能体」

人和智能体同身份,第一个危险是内部的:某些行动你可能想审计、想拦截,或者至少要有追踪记录和归属——到底是以人类身份操作,还是智能体在做事?演讲者开玩笑说「我留这胡子就是为了让你们暂时分清我们俩」。

他们的解法非常朴素:**用一个 header(HTTP 请求头),确保每一个智能体持续向它附加标记**,原理和你平时在确定性代码里做 trace ID 完全一样——让[[可观测性|可观测性]]栈把一个 trace ID 贯穿不同系统传播下去。差别只在控制向量是智能体本身。你可以通过 HTTP 客户端、MCP、skills 等已有手段,强制 header 最初被填充、沿途每一处持续被填充——「你对智能体、harness 和框架的控制手段比你想象的要多得多」。

而且收益超出预期:不只是知道行动者是谁,还能获得贯穿系统的完整传播——**能够重放导致某个最终结果的整条行动链**。对比之下,如果用机器身份,你只会知道「某个时刻机器身份触发了初始流程」,后续动作无法正确回溯到起源点;而有了这个 header,行动者始终是你,链条完整。

有人在问答里质疑:header 本身能被伪造吧?他的回答是:某人当然可以在字段里写上自己在用智能体,但**底层的来源身份本身无法被模仿、无法被截获**——既有完整的身份生态和链,又有 header,两者配合。

## 危险二:开放网络访问是最大的恐惧

更大的危险来自 LLM 本身的特性:这些是「时间点上的数学函数」,无法基于当前数据自行更新,所以访问外部网络是核心能力——网页搜索、网页抓取工具。但一旦有了这个能力,你就暴露在巨大的漏洞攻击面之下:**数据外泄风险**(丢失 IP、暴露敏感信息)、不可信内容回流([[提示词注入|提示词注入]]、恶意软件),还有版权授权合规问题。他坦承「说实话,这是我们最大的恐惧」。

他们的解法是 Google 的 Web Grounding for Enterprise——一个专为受监管行业设计的产品,允许在你现有的 VPC(虚拟私有云网络边界)之内使用 Google 的网页索引,提供搜索(search)和抓取(fetch)两个核心能力,正好镜像智能体需要的网络访问,并附带各种安全保证。唯一缺点是数据不实时:普通内容 24 小时内新鲜、更新频繁的网站 6 小时内新鲜。但对智能体的大多数用例来说绰绰有余,并且**完全消除了外部出站(egress)这个漏洞攻击面**。

怎么强制智能体走这条路?同样是现有原语:直接 deny 掉 Claude Code 等工具原生的 WebSearch、WebFetch 工具——「这些甚至根本不在你可用的工具套件之中」,然后用重定向,通过 MCP CLI 和客户端代码,让一切网络访问都经过那个缓存索引。有听众追问 Google 自己的策展会不会被攻破——策展很可能是用生成式 AI 做的,确实可能失败,但因为一切保持在内部,提示词注入风险被大大降低。

## 结果:风险大降,价值没丢

用金融的方式总结:这是个风险与回报的定位问题,他们在优化「回报/风险」比率(类似夏普比率)。最终结论是:**没有损失期望价值,同时极大地降低了风险**——索引固然有滞后,但相比单纯的纯身份验证,光靠那个打标原语就获得了多得多的可观测性。

最终交付的是一整套框架:云端智能体以用户身份运行,配上部署好的护栏与攻击面防护,以及多种交互入口(让不习惯 CLI 的人也能用),外加为每个用户托管的一队 Claude 等智能体。他还特别想对企业里的人说:生成式 AI 领域确实有大量让安全团队害怕的事情,你不会想在自己本地机器上以完全权限运行一个智能体——恐怖故事一大堆。**但在企业里,你可以利用企业资源真正压低那些风险因素,把能力的真实价值拿出来,这才是该投入时间的地方**。

问答里还有一个值得注意的前瞻判断:被问到本地 LLM(自托管模型)时,他表示对于企业的大量 token 使用和推理,「自己管理的本地模型」可能是最终方向——因为成本、因为模型弃用、因为每当前沿实验室发新模型就出现性能退化,这种波动性太大;随着开放权重模型越来越先进,他们不需要冒这个险。

## 本集带走

- **别用「用户+机器身份」的双身份方案**:权限同步、双份软件许可、Google Workspace 这类系统不支持多身份操作同一数据、部分系统直接拦截——这条路会快速崩溃。
- **让智能体以用户本人身份跑,但必须系上绳索**:利用企业已有的个人命名空间基础设施(每用户、每区域、以用户身份运行),智能体部署进去就行,不需要新建东西。
- **归属追踪用打标原语就能做**:一个持续附加的 header + trace ID 式传播,不仅分清了「人做还是智能体做」,还能重放完整的行动链;身份本身防伪造,header 负责标记。
- **安全上网用内网化的缓存索引替代开放访问**:封掉原生的 WebSearch/WebFetch 工具,把所有网络访问重定向到 VPC 内的索引服务,数据新鲜度 24 小时内对多数用例足够,换来外部出站攻击面归零。
- **对企业的启示**:别因为「太前沿不敢上」就把智能体拒之门外——用企业级资源把风险因素压下来,期望价值可以不丢。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">你和你的智能体现在是完全相同的身份。</span>  
> *You have you and your you agent are now the exact same identity.*  
> <span class="qm">—— Shu Fang, Two Sigma · [05:19]</span> ^q1

> <span class="qz">你对智能体、harness 和框架的控制手段比你想象的要多得多,你可以用一些已有的原语来强制执行它。</span>  
> *You have a lot more determinants to control over agents and the harnesses and the frameworks than you may think, and you can enforce it with some of the already existing primitives.*  
> <span class="qm">—— Shu Fang, Two Sigma · [08:44]</span> ^q2

> <span class="qz">但提示词注入的风险被大大降低了,因为一切都保持在内部。</span>  
> *But the prompt injection risk is far reduced because everything still remains internal.*  
> <span class="qm">—— Shu Fang, Two Sigma · [18:15]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-06-11-practicalai-zero-trust-for-ai-agents|Anthropic 零信任框架：智能体安全的六层防御]]<span class="pd-rz">同概念:可观测性 (observability)、提示词注入 (prompt injection)、智能体 (agent)、MCP</span>
- [[2026-03-29-lennys-how-openclaw-changed-my-life-claire-vo|把 AI 当员工来管理:Claire Vo 的九个智能体生活实战]]<span class="pd-rz">同概念:Claude Code、提示词注入 (prompt injection)、智能体 (agent)</span>
- [[2026-07-15-talks-claude-fable-claude-tag-and-anthropic-s|把系统提示词删掉八成:Anthropic 团队这样用 Claude 自己造 Claude]]<span class="pd-rz">同概念:Claude Code、提示词注入 (prompt injection)、智能体 (agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-09-29-ainativedev-liz-fong-jones-2x-the-prs-1-5x-the-incid|AI 写代码翻倍之后：Honeycomb 的审查、信任与主人翁意识]]<span class="pd-rz">同概念:可观测性 (observability)、智能体 (agent)、Kubernetes、MCP</span>
- [[2026-06-25-practicalai-aiuc-1-building-trust-in-ai-agents|AI 智能体怎么认证：从标准到红队测试的全流程]]<span class="pd-rz">同概念:提示词注入 (prompt injection)、智能体 (agent)、可观测性 (observability)</span>
- [[2025-07-17-lennys-inside-every-dan-shipper|Dan Shipper：15人零手写代码，AI原生公司怎么运转]]<span class="pd-rz">同概念:Claude Code、智能体 (agent)</span>

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
