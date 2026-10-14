---
title: 传感器数据撑爆了数据库怎么办？让 Postgres 自己变强
podcast: Software Engineering Daily
date: 2026-10-14
source_url: undefined
duration: "48:09"
type: episode
cover: "#64748b"
description: Tiger Data 产品负责人 Brandon Purcell 讲解 TimescaleDB 如何让 PostgreSQL 轻松应对海量时序数据。
host: "[[Kevin Ball]]"
cohosts: ["[[Brandon Purcell]]"]
companies: ["[[TimescaleDB]]", "[[Tiger Data]]", "[[Postgres]]", "[[HyperCore]]", "[[Tiger Cloud]]", "[[Tiger Lake]]", "[[Fluid Storage]]", "[[PG vector]]", "[[CERN]]", "[[Postgres Connector]]"]
concepts: ["[[超级表]]", "[[数据块]]", "[[连续聚合]]", "[[智能体]]", "[[编码智能体]]", "[[零拷贝]]"]
category: 智能体
tags:
  - 智能体
  - 创业与行业
socialImage: "https://talk.solomind.cc/index-og-image.webp"
jsonLd: |
  {"@context":"https://schema.org","@graph":[{"@type":"BlogPosting","@id":"https://talk.solomind.cc/2026-09-22-sed-scaling-time-series-workloads-on-postgre#post","headline":"传感器数据撑爆了数据库怎么办？让 Postgres 自己变强","inLanguage":"zh-CN","url":"https://talk.solomind.cc/2026-09-22-sed-scaling-time-series-workloads-on-postgre","mainEntityOfPage":"https://talk.solomind.cc/2026-09-22-sed-scaling-time-series-workloads-on-postgre","description":"Tiger Data 产品负责人 Brandon Purcell 讲解 TimescaleDB 如何让 PostgreSQL 轻松应对海量时序数据。","datePublished":"2026-10-14","author":{"@type":"Organization","name":"跨国深谈"},"publisher":{"@type":"Organization","name":"跨国深谈"},"about":[{"@type":"Person","name":"Kevin Ball"},{"@type":"Person","name":"Brandon Purcell"},{"@type":"Organization","name":"TimescaleDB"},{"@type":"Organization","name":"Tiger Data"},{"@type":"Organization","name":"Postgres"},{"@type":"Organization","name":"HyperCore"},{"@type":"Organization","name":"Tiger Cloud"},{"@type":"Organization","name":"Tiger Lake"},{"@type":"Organization","name":"Fluid Storage"},{"@type":"Organization","name":"PG vector"},{"@type":"Organization","name":"CERN"},{"@type":"Organization","name":"Postgres Connector"},{"@type":"Thing","name":"超级表 (hyper table)"},{"@type":"Thing","name":"数据块 (chunks)"},{"@type":"Thing","name":"连续聚合 (continuous aggregates)"},{"@type":"Thing","name":"智能体 (agent)"},{"@type":"Thing","name":"编码智能体 (coding agent)"},{"@type":"Thing","name":"零拷贝 (zero copy)"}],"articleSection":"智能体"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"跨国深谈","item":"https://talk.solomind.cc/"},{"@type":"ListItem","position":2,"name":"智能体","item":"https://talk.solomind.cc/tags/智能体"},{"@type":"ListItem","position":3,"name":"传感器数据撑爆了数据库怎么办？让 Postgres 自己变强","item":"https://talk.solomind.cc/2026-09-22-sed-scaling-time-series-workloads-on-postgre"}]}]}
---

<div class="pd"><header class="pd-top"><div class="pd-topin"><a class="b" href="/"><span class="mk"><img src="/logos/site.png" alt=""></span>跨国深谈</a><a class="pd-back" href="/">← 返回</a><a class="pd-mtitle" href="/">←<span>传感器数据撑爆了数据库怎么办？让 Postgres 自己变强</span></a><div class="pd-acts"><button class="ico" data-act="share" title="分享"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5v11"/><path d="M8 7l4-3.5L16 7"/><path d="M6 12.5V19a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 19v-6.5"/></svg></button><button class="ico" data-act="fav" title="收藏"><svg class="io" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg><svg class="if" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 20.3C12 20.3 4 16 4 10.2 4 7.6 6 6 8.1 6c1.6 0 2.9.9 3.9 2.3C13 6.9 14.3 6 15.9 6 18 6 20 7.6 20 10.2c0 5.8-8 10.1-8 10.1z"/></svg></button></div></div></header></div>

# 传感器数据撑爆了数据库怎么办？让 Postgres 自己变强

<div class="pd-byl"><b>Brandon Purcell</b> · Tiger Data 产品负责人 · 2026-10-14</div>

<div class="pd-play"><button class="pb" type="button" aria-label="播放">▶</button><span class="tt"><span class="t1">听中文精华</span><span class="t2">AI 合成朗读</span></span><span class="bar"><i></i></span><span class="tm">00:00</span><audio preload="metadata" src="/audio/2026-09-22-sed-scaling-time-series-workloads-on-postgre.mp3">你的浏览器不支持音频播放,或音频尚未生成。</audio></div>

<div class="pd-hook"><div class="z">我们有一个客户拥有 2200 万台设备，它们全都在发出读数，每几秒一次、每秒一次，有些甚至是亚秒级的。</div><div class="a">— Brandon Purcell <button class="pd-ts" data-t="05:34" data-who="Brandon Purcell" data-en="We have one customer that has 22 million devices and they're all emitting readings every few seconds, every second, in some even sub-second as well." aria-label="回原文"></button></div></div>

> [!info] 关联
> **人物** [[Kevin Ball]] · [[Brandon Purcell]]
>
> **公司** [[TimescaleDB]] · [[Tiger Data]] · [[Postgres]] · [[HyperCore]] · [[Tiger Cloud]] · [[Tiger Lake]] · [[Fluid Storage]] · [[PG vector]] · [[CERN]] · [[Postgres Connector]]
>
> **概念** [[超级表]] · [[数据块]] · [[连续聚合]] · [[智能体]] · [[编码智能体]] · [[零拷贝]]

做物联网、金融、监控这类业务的人，几乎都会遇到同一个坑：设备每秒都在上报数据，表越涨越大，PostgreSQL 越跑越慢。

换一套专门的时序数据库，又意味着拆系统、改应用、维护多条数据管道。[[Brandon Purcell|Brandon Purcell]] 在 Software Engineering Daily 上聊了第三条路：不换数据库，给它装一个扩展。

他在科技行业干了很久，早年写代码，后来联合创办了地理空间分析公司 Spatial Key(在 [[Postgres|Postgres]] 上跑了约 13 年后卖出)，如今是 [[Tiger Data|Tiger Data]] 的产品管理总监。

## 时序数据为什么会难倒普通数据库？

传感器读数、金融行情、应用监控，这类数据有共同特点：只写入、几乎不更新，持续累积，查询时总是按时间段来查。

普通数据库为此苦不堪言：写入出现瓶颈，查询越来越慢，单表的索引越撑越大。

数据量有多大？Brandon 说他们有个客户接了 2200 万台设备，每台每几秒甚至每秒都在上报 <button class="pd-ts" data-t="05:34" data-who="嘉宾" data-en="So you end up with hundreds of thousands or even millions of devices. We have one customer that has 22 million devices and they're all emitting readings Every few seconds, every second, in some even sub-second as well." aria-label="回原文"></button>。

而多数人的起点恰恰是 Postgres——等到撑不住了，传统做法是拆家：交易数据留在 Postgres,分析数据搬去另一个分析型数据库。

代价是多套数据管道，还得改写应用。**[[TimescaleDB|TimescaleDB]] 的思路是让两者共存于同一个系统，应用一行代码都不用改**。

## 一张表还是那张表，底层却大变样

对开发者来说，迁移过去零差异：还是那张带时间戳的表，还是同样的 SQL <button class="pd-ts" data-t="07:00" data-who="嘉宾" data-en="Is there any difference at all I need to know in terms of? Zero. Zero difference at all." aria-label="回原文"></button>。变化全在引擎内部。

核心概念叫 hypertable([[超级表|超级表]])。它自动按时间把数据切成一个个 chunk([[数据块|数据块]])。

查询近三个月的数据，规划器只碰相关的块，不会扫全表——即使你有十几年的历史、几十亿行。

每个块内部还有一套混合存储：新数据用传统的行存储，按策略自动转成列存储并压缩。

列存储配合向量化执行(一次批量处理多批数据)，查询可以快 10 到 1000 倍 <button class="pd-ts" data-t="08:50" data-who="嘉宾" data-en="And the result is you think compression is slower, right? But when you're compressing the data combined with the vectorization, we've seen acceleration in queries 10 to 100 to 1,000 times." aria-label="回原文"></button>。压缩率通常在 90%,最高见过 98%——因为传感器读数往往大量重复。

## 压缩反而更快？还有 CERN 的 70TB 变 5TB

==直觉上压缩过的数据查询应该更慢，但配合向量化执行，结果恰恰相反==。真实的例子：

[[CERN|CERN]](欧洲核子研究中心)原先存了约 70TB 时序数据，迁移到 TimescaleDB 后压到 5TB,还因此能把数据整体搬到更快的固态硬盘上，性能跟着提升 <button class="pd-ts" data-t="30:03" data-who="嘉宾" data-en="And they were using a previous database before and had migrated over to TimescaleDB. And one of the things they called out, they had like 70 terabytes of data for time series across." aria-label="回原文"></button>。

写入端的收益同样明显。普通 Postgres 表的写入速度会随数据增长线性下滑，TimescaleDB 基本保持平稳。

在普通硬件上能做到每秒百万行以上的写入 <button class="pd-ts" data-t="16:39" data-who="嘉宾" data-en="And that's something we're evolving over time. And what we found is you can, on nominal hardware, get to a million rows per second plus from an ingestion standpoint, which is very difficult to do in vanilla Postgres." aria-label="回原文"></button>。

## 通用数据库、时序数据库、向量库，能不能只要一个？

**Brandon 的另一个论点是：别拆**。

设备元数据放在普通表里，和超级表直接 join;向量嵌入用 pgvector(或其扩展 pgvector scale)存在同一个库里；全文检索用他们开源的 PG Text Search,据称规模可对标 Elasticsearch <button class="pd-ts" data-t="32:06" data-who="嘉宾" data-en="And we also have authored something called PG Text Search, which is an open source extension for Text Search. And we've seen it, you know, scale alongside what you would see, you know, comparable to Elastic Search." aria-label="回原文"></button>。

三者组合起来能做混合搜索。而在很多公司，这意味着至少三套系统，再靠应用层拼数据。

## 云端的热冷分层：10 年数据，只热 2 年

[[Tiger Cloud|Tiger Cloud]] 是托管服务，但更有意思的是分层存储(tiered data):设一个策略，比如 10 年数据只保留最近 2 年在本地热存储，其余 8 年自动搬到 S3,底层是 Iceberg 格式——但查起来仍是一张表，跨冷热区间查询时自动合并结果 <button class="pd-ts" data-t="21:00" data-who="嘉宾" data-en="And what it does behind the scenes is it takes a table and let's say you have 10 years of history and you want the first two years to be in hot queryable and then you want the other eight years to be tiered." aria-label="回原文"></button>。

还有个测试中的产品 [[Tiger Lake|Tiger Lake]],打算和 Snowflake、Databricks 做双向同步。

## 给 AI 代理准备的新玩具：秒级分叉数据库

roadmap 上最超前的是 [[Fluid Storage|Fluid Storage]]:[[零拷贝|零拷贝]]分叉。

几秒或几分钟就能把生产数据库 fork 出一个副本，让 AI 代理或 CI/CD 流程在副本上随便折腾，改动的部分以差异形式记录，不碰生产系统 <button class="pd-ts" data-t="34:58" data-who="嘉宾" data-en="We're internally working on an evolution to our storage engine called Fluid Storage, which is sort of a zero copy type storage that allows you to create forks without having to copy the underlying data." aria-label="回原文"></button>。

主持人立刻想到质量测试：如今测一个数据密集的功能，弄一份生产数据副本又慢又麻烦，这个能力正好补上缺口。

## 上手门槛和坑在哪？

支持 Postgres 16、17、18(刚发布的版本弃用了 15)。一条 curl 命令或 Docker 镜像就能本地跑起来。真正需要花心思的主要是两件事：

一是数据块大小调优(默认 7 天，高吞吐场景可能要缩到 1 小时，云端已有自动推荐)；

二是[[连续聚合|连续聚合]]的刷新策略——比如船上的设备离线一个月，回传一批数据，物化视图就得大范围重算，很耗 CPU 和磁盘 <button class="pd-ts" data-t="37:43" data-who="嘉宾" data-en="You have devices that go offline that may, in some cases, we have a ship carrier, their devices could go offline for two weeks to a month. And then all of a sudden you have all of this" aria-label="回原文"></button>。

他们正在做的细粒度刷新只更新变化的设备，专门解决这个问题。

值得一提的还有 [[Postgres Connector|Postgres Connector]]:指向你现有的生产库，实时同步过来，让你并行测试，不用停机做备份恢复。

## 本集带走

- 时序数据的特点是只写不改、持续累积、按时间查询，普通 Postgres 会随数据增长出现写入和查询的线性退化。
- TimescaleDB 是 Postgres 扩展而非分叉：SQL 零变化，应用零改动，底层自动按时间分块、行存转列存压缩。
- 压缩配合向量化执行反而提速 10–1000 倍；CERN 把 70TB 压到 5TB。
- 冷数据自动分层到 S3,查询时冷热合并，仍是同一张表；Tiger Lake 将打通 Snowflake、Databricks。
- 正在开发的 Fluid Storage 支持零拷贝分叉数据库，让 AI 代理和测试环境秒级获得生产数据副本。

<div class="pd-sec pd-sec-q">全部金句 <span>4 条</span></div>

> <span class="qz">我们有一个客户拥有 2200 万台设备，它们全都在发出读数，每几秒一次、每秒一次，有些甚至是亚秒级的。</span>  
> *We have one customer that has 22 million devices and they're all emitting readings every few seconds, every second, in some even sub-second as well.*  
> <span class="qm">—— Brandon Purcell · [05:34]</span> ^q1

> <span class="qz">但当压缩数据与向量化结合时，我们看到查询加速了 10 倍到 100 倍再到 1000 倍。</span>  
> *But when you're compressing the data combined with the vectorization, we've seen acceleration in queries 10 to 100 to 1,000 times.*  
> <span class="qm">—— Brandon Purcell · [08:50]</span> ^q2

> <span class="qz">我们有客户在 Tiger Cloud 环境里，每秒有两万、三万个查询，每天打出数十亿次查询，而用的在我看来只是普通硬件，并非疯狂专用硬件。</span>  
> *And we have customers that are in our Tiger Cloud environment that have 20,000, 30,000 queries a second that are hitting billions of queries a day against what I would consider nominal hardware, not crazy specialized hardware.*  
> <span class="qm">—— Brandon Purcell · [19:26]</span> ^q3

> <span class="qz">我想我甚至看到了构建独立智能体的可能性，它们监控你的数据库、监控系统、实时给出建议，远超开箱即用的初始开发，而这一切在幕后使用的都是同一套工具。</span>  
> *And I think I see even the ability to build independent agents that are monitoring your database, monitoring the system, making recommendations in real time, above and beyond just the initial development out of the box, all using the same tools behind the scenes.*  
> <span class="qm">—— Brandon Purcell · [47:54]</span> ^q4

<div class="pd-sec">接着看</div>

<div class="pd-exit">
<div class="pd-ex">

**顺着「智能体」挖下去**

- [[2026-10-08-mad-what-happens-when-billions-of-ai-agents|当几十亿个AI智能体冲向你的数据库]]<span class="pd-rz">同公司:Postgres、Databricks、Snowflake · 同概念:智能体 (agent)</span>
- [[2026-07-25-twentyvc-20vc-mercor-cpo-on-revenue-concentration|Mercor CPO:开源模型蚕食不了数据生意]]<span class="pd-rz">同概念:智能体 (agent)、编码智能体 (coding agent)</span>
- [[2026-08-28-talks-how-to-avoid-disaster-when-vibe-coding-a|智能体怎么付钱、怎么花钱:Metronome 讲透按量计费与智能体商务]]<span class="pd-rz">同概念:智能体 (agent)、编码智能体 (coding agent)</span>

</div>
<div class="pd-ex">

**换个口味**

- [[2026-08-20-talks-prototyping-as-leadership-how-a-cto-ship|管理者日程突然能写代码了：CTO 的通宵智能体工作流]]<span class="pd-rz">同概念:智能体 (agent)、编码智能体 (coding agent)</span>
- [[2026-09-16-talks-connect-ai-to-billions-of-legal-document|法律 AI 的搜索之战：从 Elasticsearch 到对象存储原生]]<span class="pd-rz">同公司:Postgres · 同概念:智能体 (agent)</span>
- [[2024-10-08-talks-ship-pricing-as-fast-as-product-orb-s-m|Orb CEO Alvaro Morales:定价为什么该像产品一样快速迭代]]<span class="pd-rz">同公司:Snowflake · 同概念:智能体 (agent)</span>

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
