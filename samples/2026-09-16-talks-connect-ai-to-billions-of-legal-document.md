---
title: 法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生
podcast: 精选演讲
date: 2026-09-19
source_url: undefined
duration: "20:26"
type: episode
cover: "#64748b"
description: Legora 工程师 Jacob 与搜索引擎 Turbo Puffer CEO Simon 讲解：法律 AI 平台如何支撑从 4 亿到 100 亿向量的检索，以及为何对象存储原生架构最省钱。
guests: ["[[Simon Eskildsen]]", "[[Jacob Lauritzen]]"]
companies: ["[[Legora]]", "[[Turbo Puffer]]"]
concepts: ["[[对象存储]]", "[[向量搜索]]", "[[智能体]]", "[[命名空间]]", "[[内存层级]]", "[[Elasticsearch]]", "[[Postgres]]", "[[客户管理的加密密钥]]", "[[BM25]]"]
category: 创业与行业
tags:
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-16-talks-connect-ai-to-billions-of-legal-document#post","headline":"法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-16-talks-connect-ai-to-billions-of-legal-document","mainEntityOfPage":"https://talk.solomind.cc/2026-09-16-talks-connect-ai-to-billions-of-legal-document","description":"Legora 工程师 Jacob 与搜索引擎 Turbo Puffer CEO Simon 讲解：法律 AI 平台如何支撑从 4 亿到 100 亿向量的检索，以及为何对象存储原生架构最省钱。","datePublished":"2026-09-19","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Simon Eskildsen"},{"@type":"Person","name":"Jacob Lauritzen"},{"@type":"Organization","name":"Legora"},{"@type":"Organization","name":"Turbo Puffer"},{"@type":"Thing","name":"对象存储 (object storage)"},{"@type":"Thing","name":"向量搜索 (vector search)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"命名空间 (namespace)"},{"@type":"Thing","name":"内存层级 (memory hierarchy)"},{"@type":"Thing","name":"Elasticsearch"},{"@type":"Thing","name":"Postgres"},{"@type":"Thing","name":"客户管理的加密密钥 (customer-managed encryption keys)"},{"@type":"Thing","name":"BM25"}],"articleSection":"创业与行业"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"创业与行业","item":"https://talk.solomind.cc/tags/创业与行业"},{"@type":"ListItem","position":3,"name":"法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生","item":"https://talk.solomind.cc/2026-09-16-talks-connect-ai-to-billions-of-legal-document"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生

<div class="pd-byl"><b>Simon Eskildsen</b> · Turbo Puffer CEO · 2026-09-19</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-16-talks-connect-ai-to-billions-of-legal-document.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">几百毫秒的写延迟。如果你像 Shopify 那样为名人闪购做库存预留，那可不行。但对搜索来说非常非常好。</div><div class="a">— Simon Eskildsen <button class="pd-ts" data-t="08:17" data-who="Simon Eskildsen" data-en="Hundreds of milliseconds. If you're like Shopify and doing inventory reservations for a Kylie Jenner flash sale, not gonna work. Very, very good for search." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Simon Eskildsen]] · [[Jacob Lauritzen]]
>
> **公司** [[Legora]] · [[Turbo Puffer]]
>
> **概念** [[对象存储]] · [[向量搜索]] · [[智能体]] · [[命名空间]] · [[内存层级]] · [[Elasticsearch]] · [[Postgres]] · [[客户管理的加密密钥]] · [[BM25]]

把 AI 接上 legal 行业的海量文档，检索（把最相关的文档从几十亿份里捞出来）就是生死线。这一集是 [[Legora|Legora]] 工程师 Jacob 和搜索引擎 [[Turbo Puffer|Turbo Puffer]] 的 CEO 兼联合创始人 Simon 的对谈。

Legora 是一个面向法律工作的协作式 AI 平台，客户包括律师事务所和企业法务团队，可以大致理解为法律工作领域的 Linear + Figma + Notion + GitHub。Simon 一开场就抛出重磅信息：他们做这套搜索的历程，是从几十万份文档一路卷到 20 亿份文档的。

Legora 有两类搜索。第一类是**项目搜索**：项目是客户的工作单位，比如一家律所帮你做收购，会把这个案子的所有雇佣协议、供应商合同都传上来，搜索就限定在这个项目内，规模从几十份到数百万份文档不等。

第二类是**法律研究**：类似深度研究式的工作负载，要横跨海量法律、判例、法规，回答「这事该怎么处理」，也用于诉讼支持。语料库正逼近 100 亿个向量，而且增长极快。

## 项目搜索的演进：三个方案，两次翻车

第一版最简单：一个大[[对象存储|对象存储]]放原始文档，加一个 [[Elasticsearch|Elasticsearch]] 集群做所有租户的索引和检索。初期够用。

但后来合规需求来了——美国客户只许数据处理发生在美国境内，欧洲只许在欧盟，澳大利亚只许在澳洲。于是他们把整套架构在多个地区上复制了三到四份，烦、开销大，但能用。

第三阶段是企业客户：最大的银行和律所要求**完全物理隔离**（本质是要自己的数据库），以及**[[客户管理的加密密钥|客户管理的加密密钥]]**——客户把加密钥匙放在自己的 Key Vault 里，只授权 Legora 读取，用它加解密静态数据。这样客户随时可以撤销授权，Legora 就读不了数据了，控制权完全在客户手里。

于是他们从 Elasticsearch 迁到 [[Postgres|Postgres]]（用 PG Vector 的 diskann 做向量、TS Vector 做全文搜索）。为什么放 Postgres？

因为他们本来就在用 Postgres 处理 OLTP 负载，只需要维护一个系统。做法很激进：存文档分块的表做了 4000 个分区，每个项目对项目键做哈希再装箱进分区。

一开始还行，但成本高、性能一般，规模化之后直接崩了。原因很有意思：项目有冷有热——有的项目建完就再也没人查，有的天天被查。装箱时冷的和热的落进同一个分区，分区越撑越大，Postgres 查询时把分区拉进内存再换下一个，缓存被反复抖动，搜索和摄取的 P99 从 100 毫秒飙升到 20 秒，用户体验稀烂。

## 为什么换成 Turbo Puffer 就顺了

在约 4 亿份文档的规模，他们迁到了 Turbo Puffer，每个项目一个[[命名空间|命名空间]]。收益立竿见影：拿到了真正的 [[BM25|BM25]] 相关性、更好的延迟，而且运维极简——不用像 Postgres 那样维护一堆集群，因为它是基于 blob 的，直接查本来就有的 blob；不活跃的项目就静静躺在 blob 里，冷热分区的问题根本不存在了。

Simon 解释了底层原因。Turbo Puffer 从创立起架构就没变过：**写入直接进对象存储**——没有磁盘复制、没有共识协议（让多台机器对数据状态达成一致的机制），就是直写 S3，先进预写日志，后台再异步构建向量、文本、列式等各种索引。

这个取舍很明确：写要几百毫秒，「如果你像 Shopify 那样为名人闪购做库存预留，那不行；但对搜索来说非常非常好」——搜索场景写慢点无所谓，只要读性能好。查询时请求到达某个命名空间（可以想成 S3 上一个与其他一切隔离的目录），带着亲和性去最可能命中缓存的节点，先查内存缓存、再查 NVMe SSD 缓存、最后才到对象存储。

核心设计哲学是**最小化往返次数**——S3 上 1 MB 大小的 blob，P99 延迟约 200 毫秒，所以理想情况下一次查询只做约三次往返，一切优化都围绕这个目标。少往返、高并发，也正好把现代磁盘用到最优。

对 Legora 最关键的是隔离性：既然分离的原子单元是命名空间（表），那每张表都可以用不同的密钥加密、每个命名空间都可以放在不同的 bucket 里。有的客户用几千个 bucket，就为了让自己的客户因为「bucket 在我自己的云账户里」而安心。

加密和分离天然就是多租户原生的。有个细节：NVMe SSD 缓存这层，Turbo Puffer 原本视为易失存储（跟内存一样），但 Legora 的客户不这么认为、要求加密。结果他们干脆禁用了磁盘缓存——发现光靠内存缓存性能就够好，部分工作负载就一直这么跑着。

迁移后延迟在数量级上直接改善（这还只是中位数，P99 改善更大）。Jacob 强调这在[[智能体|智能体]]时代尤其要命：单次 RAG 式查询是一回事，但一个智能体要做 20 次、100 次查询，延迟是累加的。

## 法律研究：极端冷热不均的场景

法律研究的难点是语料巨大、读取量高（QPS 会大幅飙升），因为他们做大量扇出——一个查询拆成一堆子查询继续追。法律语料还像一张图：有城市、县、州、联邦的权威层级；有时间有效性（一个法官可能推翻另一地的裁决）；新法规还可能对旧法规设豁免和特殊条款——找到这条就得找到所有相关的，搜索量爆炸式增长。

Turbo Puffer 的解法是把不同司法辖区做成不同命名空间：欧盟法天天被查、超级热；丹麦法律（他们是丹麦人）没人在乎，就留在 blob 上——深度研究式工作负载能容忍取冷 blob 的 500 毫秒延迟。Simon 把这叫「向不同[[内存层级|内存层级]]里吹气」：热数据靠近存（内存），冷数据推到层级深处（SSD、对象存储），追求最佳性能成本比。

具体到[[向量搜索|向量搜索]]，常见做法是在内存里建图导航，但图必须从中心开始导航，在对象存储上每穿一个节点就是一次 200 毫秒的 S3 往返，图的随机访问本质跟深层级内存天然矛盾。Turbo Puffer 的做法是把向量组织成簇、簇的簇、簇的簇的簇——「你基本上可以把 Turbo Puffer 想成一棵非常非常复杂的 B 树」。

树顶的根质心每次搜索都要碰，所以常驻 DRAM；装着实际法律案例的叶子节点留在 SSD 上，最后只需一次 1 毫秒往返。「这从根本上就是运行数据库最便宜的方式」。

全文搜索同样尊重内存层级：本质像哈希表，token 是键、含该词的文档 ID 集合是值，搜索就是取集合做交集并按词的稀有度打分（BM25 就是这个打分）。做交集时要压缩列表、省内存带宽，而且可以提前剪枝——见过太多高分文档后，只含常见词的文档就不用再算了。Simon 给了一个反直觉的结论：**在网络规模下，文本搜索比向量搜索更难、计算成本更高**。

## 本集带走

- **冷热分离是架构胜负手**：Postgres 方案崩在冷热项目装箱进同一分区、缓存反复抖动（P99 从 100 毫秒到 20 秒）；按项目/司法辖区拆成命名空间，冷的自然沉到 blob。
- **对象存储原生 = 天然合规**：写入直进 S3、无共识协议，换来的是每个命名空间可独立加密、可放独立 bucket、可放客户自己的云账户——企业级物理隔离和客户管理密钥原生成立。
- **写慢没关系，读要快**：搜索场景接受几百毫秒的写延迟，换真正的 BM25 和多租户下的极简运维（70+ 个租户不用各建一套 Elasticsearch）。
- **为智能体延迟优化检索**：单次查询快没用，智能体一次任务扇出 20-100 次查询，每次省一点乘起来就是数量级。
- **最小化往返次数**是一切设计的中心：S3 一次往返 P99 约 200 毫秒，理想一次查询约 3 次往返；向量索引用树形聚类而非图导航，就是为了让访问模式匹配深内存层级。

<div class="pd-sec pd-sec-q">全部金句 <span>3 条</span></div>

> <span class="qz">几百毫秒的写延迟。如果你像 Shopify 那样为名人闪购做库存预留，那可不行。但对搜索来说非常非常好。</span>  
> *Hundreds of milliseconds. If you're like Shopify and doing inventory reservations for a Kylie Jenner flash sale, not gonna work. Very, very good for search.*  
> <span class="qm">—— Simon Eskildsen · [08:17]</span> ^q1

> <span class="qz">如果你在很少的往返里做大量并发，你就能最优地利用磁盘，Turbo Puffer 的一切都是围绕这个设计的。</span>  
> *If you do a lot of concurrency in few round trips, you utilize them optimally, and everything in TurboPuffer is designed around this.*  
> <span class="qm">—— Simon Eskildsen · [09:49]</span> ^q2

> <span class="qz">在网络规模下，文本搜索比做向量搜索更困难、计算成本更高。</span>  
> *Text search at web scale is more difficult and more computationally expensive than doing vector search.*  
> <span class="qm">—— Simon Eskildsen · [19:06]</span> ^q3

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「创业与行业」挖下去**

- [[2026-09-01-cogrev-write-change-recall-forget-mongodb-s-pet|数据库60年 vs 智能体18个月：MongoDB 谈检索与记忆]]<span class="pd-rz">同概念:向量搜索 (vector search)、智能体 (agent)、RAG</span>
- [[2026-08-29-yc-max-junestrand-you-need-the-willingness|Legora：三个非律师如何造出法律AI操作系统]]<span class="pd-rz">同公司:Legora · 同概念:智能体 (agent)</span>
- [[2026-09-08-eyeonai-86-of-what-coding-agents-do-is-just-read|把 100 万 token 用出 5 万的体验：SubQuadratic 的稀疏注意力]]<span class="pd-rz">同概念:智能体 (agent)、RAG</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-07-17-talks-every-company-should-have-a-brain-garry|用 Markdown 组建一支军队:Y Combinator 掌门人的 AI 原生公司蓝图]]<span class="pd-rz">同概念:智能体 (agent)、Postgres、RAG</span>
- [[2026-07-24-talks-how-bridgewater-built-an-ai-analyst-that|桥水内部版 AI 分析师 PAT:把数小时研究压到几分钟]]<span class="pd-rz">同概念:智能体 (agent)、RAG</span>
- [[2026-08-14-cogrev-lindy-teammate-flo-crivello-on-multiplay|Lindy 创始人谈 AI 员工的上下文战争：从红黑树到"走去洗车"]]<span class="pd-rz">同概念:智能体 (agent)、RAG</span>

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
