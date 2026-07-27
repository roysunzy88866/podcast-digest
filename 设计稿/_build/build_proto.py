import json,os,re,html,collections
R='/Users/Admin/Documents/Projects/X视频'; P=f'{R}/需求共创/原型'
eps=json.load(open('all.json')); meta=json.load(open('proto_meta.json'))
HAVE=meta['have']
CATCOLOR={"智能体":"#3E938A","创业与行业":"#8A6E4B","产品方法":"#5566B8","组织与领导力":"#57789A",
          "职业与个人成长":"#7E6BA8","AI 编程":"#2F7F92","增长与销售":"#A65A3C","AI 安全":"#B0574F"}
CAT=collections.Counter()
for e in eps:
    for t in e['tags']: CAT[t]+=1
def sl(s): return re.sub(r'[^A-Za-z0-9]+','-',s).strip('-').lower() or 'x'
CATSLUG={c:f'cat-{sl(c) if sl(c)!="x" else str(i)}.html' for i,c in enumerate(CAT)}
# 人物 → 集
PEP=collections.defaultdict(list)
for e in eps:
    for g in e['guests']: PEP[g].append(e['id'])
PSLUG={p:f'person-{sl(p)}.html' for p in PEP}
EP={e['id']:e for e in eps}
def epurl(i): return f'ep-{i}.html'
def thumb(e,cls='th'):
    if e['id'] in HAVE: return f'<div class="{cls} fr"><img src="{HAVE[e["id"]]}"></div>'
    c=CATCOLOR.get(e['cat'],'#888')
    return f'<div class="{cls} fb" style="background:{c}"><span>{html.escape(e["cat"] or "")}</span></div>'
def esc(x): return html.escape(x or '')
def mins(d): return f'{int(d//60)} 分钟' if d else ''

CSS='''


/* ══ 标题字体:阿里巴巴普惠体(方向A 拍板;字体文件取自仓库 assets/fonts/)══ */
@font-face{
  font-family:"AlibabaPuHuiTi";
  font-weight:100 900; font-style:normal; font-display:swap;
  src:url("AlibabaPuHuiTi-subset.woff2") format("woff2");
}
:root{ --puhui:"AlibabaPuHuiTi","PingFang SC","Microsoft YaHei",system-ui,sans-serif; }
/* 标题一律普惠体,与仓库 custom.scss 同规则 */
.top .b, .card .t, .list .t, h1.pt, .mid h2, .hero h1, .sec, .qr .z, .hook .z,
.ex b, .sh, .dateh, .phero h1{
  font-family:var(--puhui); letter-spacing:0.2px;
}

/* ══ 少数派设计 token(实抓 sspai.com 的 home.css / sspai-ui.css,2026-07-25)══ */
:root{
  --B8:#000; --B7:#48494c; --B6:#6f7174; --B5:#acaeb3; --B4:#cdcdce;
  --B3:#e4e4e5; --B2:#f0f0f3; --B1:#f7f7f9; --B0:#fff;
  --red:#fd281a; --red-t:#ff492b;
  --accent:#b8443c;               /* 项目方向A 的暖红,暂保留;见文末待定 */
  --font: -apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",
          "微软雅黑","helvetica neue",helvetica,ubuntu,roboto,noto,"segoe ui",Arial,sans-serif;
}
*{box-sizing:border-box}
html{font-size:14px}
body{margin:0;background:var(--B0);color:var(--B8);font-family:var(--font);font-size:14px;line-height:1.75}
a{color:inherit;text-decoration:none}
.banner{background:#fff6f5;border-bottom:1px solid #f0dbd9;color:#8a5450;font-size:12.5px;padding:8px 20px;text-align:center}
.banner b{color:#b8443c}
/* 头部:整条通栏,内容对齐 1200 容器(与正文左边缘齐) */
.top{border-bottom:1px solid var(--B3);background:var(--B0);position:sticky;top:0;z-index:30}
.topin{max-width:1200px;margin:0 auto;display:flex;align-items:center;padding:12px 24px}
.mainnav{display:flex;align-items:center;margin-left:40px}
.mainnav a{font-size:15px;color:var(--B7);padding:0 16px}      /* 少数派菜单项 padding:16px */
.mainnav a:hover{color:var(--accent)}
.acts{margin-left:auto;display:flex;align-items:center;gap:8px} /* 少数派 right: gap:8px */
.ico{width:32px;height:32px;border:0;background:none;border-radius:8px;cursor:pointer;font-size:15px;color:var(--B7);display:flex;align-items:center;justify-content:center}
.ico:hover{background:var(--B1)}
/* 搜索:图标点开居中弹层(少数派 left:calc(50vw-310px); top:140px; width:620px) */
.skrim{display:none;position:fixed;inset:0;background:#0000001f;z-index:60;justify-content:center;align-items:flex-start}
.sbox{margin-top:140px;width:620px;max-width:92vw;background:var(--B0);border-radius:10px;box-shadow:0 14px 44px #00000026;padding:4px}
.sbox input{width:100%;height:45px;font-size:15px;line-height:21px;padding:12px;border:0;outline:0;font-family:inherit}
.shist{display:flex;gap:8px;align-items:center;padding:12px 16px 16px;font-size:13px;color:var(--B6);flex-wrap:wrap}
".shist b{font-weight:400;background:var(--B1);border-radius:6px;padding:6px 8px;color:var(--B7);cursor:pointer}
.shist b:hover{color:var(--accent)}
#sres{max-height:46vh;overflow-y:auto}
#sres .sg{font-size:11px;color:var(--B5);padding:10px 16px 4px;letter-spacing:.5px}
#sres .si{display:block;padding:9px 16px;border-radius:8px;cursor:pointer}
#sres .si:hover{background:var(--B1)}
#sres .si .a{font-size:15px;color:var(--B8);line-height:1.5}
#sres .si .b{font-size:12px;color:var(--B6);margin-top:3px}
#sres .more{display:block;padding:11px 16px;font-size:13px;color:var(--accent);border-top:1px solid var(--B2);margin-top:6px}
mark{background:#fdeceb;color:var(--accent);padding:0 1px;border-radius:2px}
.sbig input{width:100%;height:52px;font-size:17px;padding:0 16px;border:1px solid var(--B3);border-radius:10px;outline:0;font-family:inherit;margin-bottom:18px}
.sbig input:focus{border-color:var(--accent)}
.cnt2{font-size:13px;color:var(--B6);margin:6px 0 4px}
.gsec{font-size:12px;color:var(--B5);letter-spacing:.5px;margin:26px 0 0;padding-bottom:6px;border-bottom:1px solid var(--B2)}
.gtag{font-weight:500;color:var(--accent)}
.empty{font-size:14px;color:var(--B5);padding:26px 0}
.top .b{font-size:18px;font-weight:600;color:var(--B8);white-space:nowrap}
.top nav a{font-size:14px;color:#5c5c5c;margin-right:4px}
.top nav a:hover{color:#b8443c}
.sr{margin-left:auto;border:1px solid var(--B3);background:var(--B1);border-radius:5px;padding:7px 13px;font-size:13px;color:var(--B6);width:320px}
.shell{display:grid;grid-template-columns:200px minmax(0,588px) 282px;justify-content:center;gap:0;max-width:1200px;margin:0 auto;min-height:80vh}
@media (max-width:1279px){.shell{grid-template-columns:164px minmax(0,520px) 224px;max-width:960px}}
.shell.two{grid-template-columns:200px minmax(0,870px);max-width:1200px}
@media (max-width:1279px){.shell.two{grid-template-columns:164px minmax(0,796px);max-width:960px}}
.shell.det{grid-template-columns:minmax(0,700px) 282px;justify-content:center;max-width:1000px}
@media (max-width:1279px){.shell.det{grid-template-columns:minmax(0,640px) 224px;max-width:900px}}
.left{padding:24px 14px 24px 0}
.right{padding:24px 0 24px 24px}
.mid{padding:24px 32px 60px;min-width:0}
.vi{display:block;font-size:16px;font-weight:500;color:var(--B6);padding:10px 12px;border-radius:8px;margin-bottom:2px}
.vi.on{background:#fff;color:#1a1a1a;font-weight:700;border-left-color:#b8443c}
.vi:hover{color:#b8443c}
.cl{display:flex;justify-content:space-between;align-items:center;font-size:15px;color:var(--B6);padding:9px 12px;border-radius:8px;margin-bottom:1px}
.cl i{font-style:normal;font-size:11.5px;color:var(--B5)}
.cl.on{background:#fff;color:#1a1a1a;font-weight:700}
.cl:hover{color:#b8443c}
.about{margin-top:24px;padding-top:16px;border-top:1px solid var(--B3);font-size:12px;line-height:1.85;color:#8a8a8a}
.about b{display:block;color:#333;font-size:12.5px;margin-bottom:5px}
.sh{font-size:12px;font-weight:700;color:#a09a94;letter-spacing:.6px;margin:0 0 10px}
.blk{margin-bottom:28px}
.rr{display:flex;justify-content:space-between;font-size:13px;color:#666;padding:4px 0}
.rr span:last-child{color:var(--B5);font-size:11.5px}
.dateh{display:flex;align-items:center;gap:12px;font-size:13px;font-weight:500;color:var(--B5);margin:26px 0 0}
.dateh:first-child{margin-top:2px}
.dateh:after{content:"";flex:1;height:1px;background:var(--B3)}
.grid{display:grid;grid-template-columns:1fr;gap:0}
.card{display:flex;gap:48px;padding:40px 0;border-bottom:1px solid var(--B2);align-items:stretch;background:none;border-radius:0;min-height:calc(105px + 80px)}
.grid>.card:last-child{border-bottom:none}
.card:hover{border-color:#dcd8d3;box-shadow:0 2px 10px #0000000a}
.card.full{background:none}
.card .tx{flex:1;min-width:0;display:flex;flex-direction:column;align-self:stretch}
.card .t{font-size:20px;font-weight:500;line-height:1.5;color:var(--B8);margin:0 0 16px;transition:color .15s}

.card .q{font-size:15px;line-height:1.66;margin:8px 0 0;font-weight:400;color:var(--B7);-webkit-line-clamp:2;min-height:3.32em}


.card .m a:hover{color:#b8443c;text-decoration:underline}
.star{font-size:11px;color:#b8443c;font-weight:700;letter-spacing:.3px}
.th{flex:0 0 140px;width:140px;height:105px;border-radius:4px;overflow:hidden;position:relative;border:1px solid var(--B3);align-self:flex-start}

.fr img{position:absolute;width:100%;height:100%;object-fit:cover}
.fb{display:flex;align-items:center;justify-content:center;padding:6px}
.fb span{color:#fff;font-size:11px;font-weight:700;text-align:center;line-height:1.3}
.chip{display:inline-block;font-size:10.5px;padding:1px 8px;border-radius:10px;margin-left:5px;border:1px solid;}
h1.pt{font-size:29px;line-height:1.35;margin:0 0 10px}
.byl{font-size:14.5px;color:#3d3d3d}
.mt{font-size:12.5px;color:var(--B6);margin:4px 0 20px}
.play{display:flex;align-items:center;gap:13px;border:1px solid #ecdedc;background:#fdf9f9;border-radius:7px;padding:11px 16px;margin-bottom:24px}
.play .pb{width:34px;height:34px;flex:0 0 34px;border-radius:50%;background:#b8443c;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px}
.play .tt{font-size:14px;font-weight:600;display:block}
.play .s{font-size:12px;color:#9a8f8e}
.play .bar{flex:1;height:3px;background:#ecdedc;border-radius:2px;margin:0 8px}
.hook{border-left:3px solid #b8443c;padding:3px 0 3px 20px;margin:0 0 24px}
.hook .z{font-size:22px;line-height:1.62;font-weight:600}
.hook .a{font-size:13px;color:#8a8a8a;margin-top:9px}
.tldr{background:#f7f6f3;border-radius:6px;padding:13px 17px;font-size:14.5px;color:#3a3a3a;margin-bottom:30px}
.tldr b{color:#b8443c;font-size:11.5px;letter-spacing:1px;display:block;margin-bottom:3px}
.mid h2{font-size:20px;margin:36px 0 13px;line-height:1.45}
.mid p{margin:0 0 17px;font-size:16.5px;line-height:1.95;color:#252525}
blockquote{margin:0 0 17px;padding:11px 16px;background:#f8f7f4;border-left:2px solid #e0ddd8;font-size:15px;color:#4a4a4a}
.wl{border-bottom:1px solid #dcc8c6}
.wl:hover{color:#b8443c}
.ts{font:inherit;font-size:11px;background:#f4eceb;color:#a1524b;border:0;border-radius:50%;width:17px;height:17px;line-height:17px;padding:0;cursor:pointer;display:inline-block;text-align:center;vertical-align:1px;margin:0 1px}
.ts:hover{background:#e8d5d3}
.ts:before{content:"↩"}
.ts{position:relative}
.ts:hover:after{content:attr(data-t) " " attr(data-who) " · 点开英文原话";position:absolute;left:50%;transform:translateX(-50%);bottom:22px;white-space:nowrap;background:var(--B8);color:#fff;font-size:11px;padding:4px 8px;border-radius:5px;z-index:9}
.orig{background:#fbf7f6;border:1px dashed #e3d0ce;border-radius:6px;padding:11px 14px;margin:9px 0;font-size:13.5px;color:#5a4a48;line-height:1.75}
.orig b{font-size:11px;color:#a1524b;letter-spacing:.5px}
.sec{font-size:13px;font-weight:700;color:#6a6a6a;letter-spacing:.4px;margin:36px 0 14px;display:flex;align-items:baseline;gap:9px}
.sec span{font-weight:400;font-size:11.5px;color:var(--B5)}
.qr{padding:15px 0;border-bottom:1px solid var(--B2)}
.qr .z{font-size:17px;line-height:1.7;font-weight:500}
.qr .e{font-size:12.5px;color:var(--B6);margin-top:5px;line-height:1.55}
.qr .m{font-size:11.5px;color:var(--B5);margin-top:6px}
.exit{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
.ex{border:1px solid var(--B3);border-radius:6px;padding:15px 17px;background:#fff}
.ex b{display:block;font-size:11.5px;color:#b8443c;margin-bottom:8px;letter-spacing:.4px}
.ex a{display:block;font-size:14px;padding:5px 0;line-height:1.5}
.ex a:hover{color:#b8443c}
.toc a{display:block;font-size:13px;color:#7a7a7a;padding:6px 0 6px 11px;border-left:2px solid var(--B3);line-height:1.5}
.toc a.on{color:#b8443c;border-left-color:#b8443c;font-weight:600}
.hero{border-bottom:1px solid var(--B3);padding-bottom:18px;margin-bottom:18px}
.hero h1{margin:0 0 6px;font-size:26px;display:flex;align-items:center;gap:11px}
.hero .dot{width:11px;height:11px;border-radius:50%}
.hero .cnt{font-size:13px;color:var(--B6);font-weight:400}
.hero p{margin:6px 0 0;font-size:14px;color:#6a6a6a;max-width:640px}
.frow{display:flex;align-items:flex-start;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.frow .k{font-size:12px;color:var(--B5);width:100%;margin-bottom:2px}
.fx{font:inherit;font-size:12.5px;background:#fff;border:1px solid var(--B3);border-radius:14px;padding:3px 11px;color:#5c5c5c;cursor:pointer}
.fx:hover{border-color:#b8443c;color:#b8443c}
.fx b{font-weight:600;color:var(--B5);margin-left:3px;font-size:11px}
.sortbar{display:flex;gap:14px;font-size:12.5px;color:var(--B6);border-top:1px solid var(--B2);margin-top:14px;padding-top:12px}
.sortbar b{color:#1a1a1a}
.list .row{display:flex;gap:48px;padding:40px 0;border-bottom:1px solid var(--B2);align-items:stretch;min-height:calc(105px + 80px)}
.list .row:last-child{border-bottom:none}
.list .row:hover .t{color:var(--accent)}
.list .tx{flex:1;min-width:0;display:flex;flex-direction:column;align-self:stretch}
.list .t{font-size:20px;font-weight:500;line-height:1.5;color:var(--B8);margin:0 0 16px;transition:color .15s}
.list .q{font-size:15px;margin:8px 0 0;line-height:1.66;color:var(--B7)}

.av{flex:0 0 74px;width:74px;height:74px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:700}
.phero{display:flex;gap:18px;align-items:flex-start;padding-bottom:20px;border-bottom:1px solid var(--B3);margin-bottom:6px}
.derived{font-size:13px;color:#777;margin-top:9px;padding-left:11px;border-left:2px solid #e8dedd;line-height:1.7}
.derived i{font-style:normal;color:#b8443c;font-size:11px;display:block;margin-bottom:2px}
.nums{font-size:12.5px;color:var(--B6);margin-top:10px}
.nums b{color:#1a1a1a;font-size:15px}
.chips{display:flex;flex-wrap:wrap;gap:7px}
.chp{font-size:12px;padding:3px 11px;border:1px solid var(--B3);border-radius:13px;color:#5c5c5c;background:#fff}
.chp b{color:var(--B5);font-weight:400;font-size:10.5px;margin-left:3px}
.chp:hover{border-color:#b8443c;color:#b8443c}
.back{font-size:13px;color:var(--B6);margin-bottom:14px;display:inline-block}
.back:hover{color:#b8443c}

/* ── 真数据长短不一 → 锁行数保证等高。标题 2 行,金句给足 3 行(金句是主角,不砍)── */
.card .t,.card .q,.list .t,.list .q{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
.card .t{-webkit-line-clamp:2;min-height:2.9em}
.card .q{-webkit-line-clamp:2}

.list .t{-webkit-line-clamp:2}
.list .q{-webkit-line-clamp:2;min-height:3.32em}
.grid{align-items:stretch}

/* ── 响应式(与少数派断点对齐:1280 / 1024)── */
@media (max-width:1023px){
  .shell,.shell.two,.shell.det{grid-template-columns:1fr;max-width:100%}
  .shell .right,.shell.det .right{display:none}
  .shell .left{border-right:0;border-bottom:1px solid var(--B3);display:flex;gap:6px;flex-wrap:wrap;align-items:center;padding:11px 14px}
  .shell .left .about,.shell .left .sh{display:none}
  .shell .left .vi,.shell .left .cl{padding:5px 11px;border-left:0;border-radius:14px;border:1px solid var(--B3);background:#fff}
  .mid{padding:18px 15px 40px}
  .card,.list .row{gap:16px;padding:32px 0;min-height:calc(81px + 64px)}
  .th{flex:0 0 108px;width:108px;height:81px}
  .card .t,.list .t{font-size:17px}
  .card .q,.list .q{font-size:13.5px;-webkit-line-clamp:2;min-height:3.2em}
  .exit{grid-template-columns:1fr}
  .top{gap:10px;padding:11px 14px;flex-wrap:wrap}
  .sr{width:100%;order:9;margin-left:0}
  h1.pt{font-size:22px}
  .hook .z{font-size:18px}
  .card .t{font-size:15.5px}
}


/* ── 卡片内容规格(用户 2026-07-25 定):标题 / 金句(斜体带引号) / 嘉宾(名字·职位) / 标签 / 图 ── */
.card .q,.list .q{font-style:italic;font-synthesis-style:auto}
.card .who,.list .who{font-size:12.5px;color:var(--B7);margin-top:12px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.card .who .role,.list .who .role{color:var(--B5)}
.card .tags,.list .tags{margin-top:auto;padding-top:12px;display:flex;gap:8px;align-items:center;
  flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;min-height:34px}
.card .tags::-webkit-scrollbar,.list .tags::-webkit-scrollbar{display:none}
.card .tags .chip,.list .tags .chip{margin-left:0;flex:0 0 auto}
.card .star,.list .star{flex:0 0 auto;margin-right:4px}

/* ══════════ 手机端 · 独立设计(<1024px)══════════
   模型照少数派:顶栏只有站名+☰ / ☰ 开全屏菜单(搜索在菜单里) / 视图切换用 20px 大字下拉 */
.mobonly{display:none}
.mdrop,.mmenu{display:none}
@media (max-width:1023px){
  .deskonly{display:none}
  .mobonly{display:flex}
  .topin{padding:12px 16px}
  .mainnav{display:none}
  .shell,.shell.two,.shell.det{grid-template-columns:1fr;max-width:100%}
  .shell .left,.shell .right,.shell.det .right{display:none}
  .mid{padding:0 16px 44px}
  .exit{grid-template-columns:1fr}

  /* 视图切换:一行 20px 大字 + ⌄,点开 220px 下拉(少数派 mobile-feed-dropdown) */
  .mdrop{display:block;padding:14px 16px 4px;position:relative;z-index:6}
  .mdt{font:inherit;font-family:var(--puhui);font-size:20px;font-weight:600;background:none;border:0;
       padding:0;color:var(--B8);display:inline-flex;align-items:center;gap:8px;height:28px;cursor:pointer}
  .mdt i{font-style:normal;font-size:15px;color:var(--B5)}
  .mdm{display:none;position:absolute;left:16px;top:46px;width:220px;background:var(--B0);
       border:1px solid var(--B3);border-radius:10px;box-shadow:0 10px 30px #00000018;padding:4px;flex-direction:column;gap:4px}
  .mdm.open{display:flex}
  .mdm a{display:flex;justify-content:space-between;font-size:15px;height:auto;padding:9px 12px;border-radius:7px;color:var(--B7)}
  .mdm a.on{background:var(--B1);color:var(--B8);font-weight:600}
  .mdm a i{font-style:normal;color:var(--B5);font-size:12px}

  /* ☰ 全屏菜单(少数派:height:100%; padding:0 20px 20px) */
  .mmenu{display:block;position:fixed;inset:0;background:var(--B0);z-index:80;padding:0 20px 20px;
         overflow-y:auto;transform:translateY(100%);transition:transform .22s ease;visibility:hidden}
  .mmenu.open{transform:translateY(0);visibility:visible}
  .mmhead{display:flex;align-items:center;padding:14px 0;position:sticky;top:0;background:var(--B0)}
  .mmhead .b{font-family:var(--puhui);font-size:18px;font-weight:600;flex:1}
  .mmsearch{width:100%;height:45px;font-size:15px;padding:0 14px;border:1px solid var(--B3);
            border-radius:10px;outline:0;font-family:inherit;margin:4px 0 8px}
  .mmsearch:focus{border-color:var(--accent)}
  .mmsec{font-size:12px;color:var(--B5);letter-spacing:.5px;margin:22px 0 8px}
  .mmnav a,.mmcat a{display:flex;justify-content:space-between;align-items:center;
                    font-size:17px;padding:13px 0;border-bottom:1px solid var(--B2);color:var(--B8)}
  .mmnav a i,.mmcat a i{font-style:normal;font-size:12px;color:var(--B5)}
  #mmres .si{display:block;padding:10px 0;border-bottom:1px solid var(--B2)}
  #mmres .si .a{font-size:15px}
  #mmres .si .b{font-size:12px;color:var(--B6);margin-top:2px}
  #mmres .sg{font-size:11px;color:var(--B5);padding:12px 0 2px}
  #mmres .more{display:block;padding:12px 0;color:var(--accent);font-size:14px}
}

.card,.list .row{overflow:hidden}
.card .q,.list .q{overflow-wrap:anywhere}
'''
open(f'{P}/style.css','w',encoding='utf-8').write(CSS)

def shell(title,body,cls=''):
    return f'''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title><link rel="stylesheet" href="style.css?v=23"><script src="search.js" defer></script></head><body>
<div class="banner"><b>可点击原型 · 结构与交互稿</b> —— 内容全部为真数据;配色/字体/间距不算数,视觉另定。40 集中仅 6 集有配图,其余走兜底色块(真实情况)。</div>
<header class="top"><div class="topin">
<a class="b" href="index.html">英文播客中文精华</a>
<nav class="mainnav"><a href="{list(CATSLUG.values())[0]}">主题</a><a href="index.html">人物</a><a href="index.html">关于</a></nav>
<div class="acts"><button class="ico deskonly" onclick="openSearch()">🔍</button><button class="ico deskonly">◐</button>
<button class="ico mobonly" onclick="document.getElementById('mm').classList.add('open')">☰</button></div>
</div></header>
<div class="mdrop" id="md"><button class="mdt" onclick="document.getElementById('mdm').classList.toggle('open')"><span id="mdl">最新</span> <i>⌄</i></button><div class="mdm" id="mdm"></div></div>
<div class="mmenu" id="mm">
  <div class="mmhead"><span class="b">英文播客中文精华</span><button class="ico" onclick="document.getElementById('mm').classList.remove('open')">✕</button></div>
  <input class="mmsearch" id="mmq" placeholder="搜标题 / 金句 / 正文 / 人名">
  <div id="mmres"></div>
  <div class="mmsec">浏览</div><div class="mmnav" id="mmnav"></div>
  <div class="mmsec">主题</div><div class="mmcat" id="mmcat"></div>
</div>
<div class="skrim" id="sk" onclick="if(event.target===this)this.style.display='none'">
  <div class="sbox"><input id="sq" placeholder="搜标题 / 金句 / 正文 / 人名">
  <div id="sres"></div>
  <div class="shist"><span>试试</span><b>智能体</b><b>护城河</b><b>Anthropic</b><b>增长</b></div></div>
</div>
{body}
<script>
function openSearch(){{const k=document.getElementById('sk');k.style.display='flex';
  loadIdx().then(()=>{{const i=document.getElementById('sq');i.focus();i.oninput=drawS;}});}}
function drawS(){{const i=document.getElementById('sq'),r=document.getElementById('sres');
  const {{n,groups}}=runSearch(i.value);
  if(!i.value.trim()){{r.innerHTML='';return}}
  if(!n){{r.innerHTML='<div class="sg">没有匹配</div>';return}}
  let h='',c=0;
  for(const [g,items] of groups){{ h+='<div class="sg">'+g+'</div>';
    for(const x of items){{ if(c++>=6) break;
      h+='<a class="si" href="ep-'+x.e.id+'.html"><div class="a">'+(g==='标题'?x.s:x.e.t)+'</div>'+
         (g!=='标题'?'<div class="b">'+x.s+'</div>':'<div class="b">'+x.e.p+'</div>')+'</a>'; }} }}
  h+='<a class="more" href="search.html?q='+encodeURIComponent(i.value)+'">查看全部 '+n+' 条结果 →</a>';
  r.innerHTML=h; }}
document.addEventListener('keydown',e=>{{ if(e.key==='Escape'){{const k=document.getElementById('sk'); if(k)k.style.display='none';}}
  if(e.key==='Enter'&&document.activeElement&&document.activeElement.id==='sq'){{
    location.href='search.html?q='+encodeURIComponent(document.activeElement.value);}} }});
document.querySelectorAll('.shist b').forEach(b=>b.onclick=()=>{{const i=document.getElementById('sq');i.value=b.textContent;drawS();}});

// ── 手机端:从左栏/右栏克隆内容,填进大字下拉与全屏菜单(始终与桌面同源,不会漂移)──
(function(){{
  const L=document.querySelector('.shell .left'), mdm=document.getElementById('mdm'),
        mdl=document.getElementById('mdl'), mmnav=document.getElementById('mmnav'), mmcat=document.getElementById('mmcat');
  if(L&&mdm){{
    const items=[...L.querySelectorAll('.vi,.cl')];
    items.forEach(a=>{{
      const c=document.createElement('a'); c.href=a.getAttribute('href')||'#';
      const cnt=a.querySelector('i'); c.innerHTML=(a.querySelector('span')?a.querySelector('span').textContent:a.textContent).trim()+(cnt?'<i>'+cnt.textContent+'</i>':'');
      if(a.classList.contains('on')){{c.classList.add('on'); if(mdl) mdl.textContent=c.textContent.replace(/\d+$/,'').trim();}}
      mdm.appendChild(c);
    }});
  }}
  if(mmnav) mmnav.innerHTML='<a href="index.html">最新</a><a href="'+({list(CATSLUG.values())[0]!r})+'">主题</a><a href="index.html">人物</a><a href="index.html">关于</a>';
  if(mmcat){{
    const R=document.querySelector('.shell .right'); const rows=R?[...R.querySelectorAll('.rr')].slice(0,8):[];
    mmcat.innerHTML=rows.map(r=>{{const sp=r.querySelectorAll('span');
      return '<a href="'+(r.getAttribute('href')||'#')+'">'+sp[0].textContent+'<i>'+(sp[1]?sp[1].textContent:'')+'</i></a>';}}).join('');
  }}
  const q=document.getElementById('mmq');
  if(q) q.addEventListener('focus',()=>loadIdx(),{{once:true}});
  if(q) q.addEventListener('input',()=>{{
    const r=document.getElementById('mmres'); if(!IDX){{loadIdx().then(()=>q.dispatchEvent(new Event('input')));return}}
    const {{n,groups}}=runSearch(q.value);
    if(!q.value.trim()){{r.innerHTML='';return}}
    if(!n){{r.innerHTML='<div class="sg">没有匹配</div>';return}}
    let h='',c=0;
    for(const [g,items] of groups){{h+='<div class="sg">'+g+'</div>';
      for(const x of items){{ if(c++>=5) break;
        h+='<a class="si" href="ep-'+x.e.id+'.html"><div class="a">'+(g==='标题'?x.s:x.e.t)+'</div>'+
           (g!=='标题'?'<div class="b">'+x.s+'</div>':'')+'</a>';}}}}
    h+='<a class="more" href="search.html?q='+encodeURIComponent(q.value)+'">查看全部 '+n+' 条 →</a>';
    r.innerHTML=h;}});
  document.addEventListener('click',e=>{{const m=document.getElementById('mdm');
    if(m&&m.classList.contains('open')&&!e.target.closest('.mdrop')) m.classList.remove('open');}});
}})();

document.querySelectorAll('[data-go]').forEach(el=>{{
 el.style.cursor='pointer';
 el.addEventListener('click',ev=>{{ if(ev.target.closest('a')) return; location.href=el.dataset.go; }});
}});
document.querySelectorAll('.ts').forEach(b=>b.onclick=()=>{{
 let n=b.nextElementSibling;
 if(n&&n.classList.contains('orig')){{n.remove();return}}
 const d=document.createElement('div');d.className='orig';
 d.innerHTML='<b>英文原话 '+(b.dataset.t||'')+(b.dataset.who?' · '+b.dataset.who:'')+'</b><br>'+(b.dataset.en||'“…original English transcript segment…”')+
 '<br><span style="font-size:11px;color:#b0a3a1">↑ 就地展开,不跳走。数据来自 transcript.en.json</span>';
 b.after(d);
}});
</script></body></html>'''

import sys as _sys
_sys.path.insert(0,'/private/tmp/claude-502/-Users-Admin-Documents-Projects-X--/2b177d26-ec4a-4aac-9a3a-1a2dd14c8529/scratchpad')
from roles import role_for as _role_for
from guests import guest_of as _guest_of
_ROLECACHE={}
_GCACHE={}
def guest_name(e):
    if e['id'] not in _GCACHE:
        n,_=_guest_of(e['id']); _GCACHE[e['id']]=n
    return _GCACHE[e['id']]
def who_of(e):
    """卡片第三行 = 人名 · 职位(不放播客名)"""
    n=guest_name(e); r=(role_of(e) or '').lstrip(' ·').strip()
    if n and n in PSLUG: n=f'<a href="{PSLUG[n]}">{esc(n)}</a>'
    elif n: n=esc(n)
    if n and r:
        _plain=re.sub(r'<[^>]+>','',n)
        if _plain.strip()==r.strip() or r.strip() in _plain: return n
        return f'{n}<span class="role"> · {esc(r)}</span>'
    if n: return n
    if r: return f'<span class="role">{esc(r)}</span>'
    return '<span class="role">—</span>'

def role_of(e):
    if e['id'] not in _ROLECACHE:
        r,src=_role_for(e['id']); _ROLECACHE[e['id']]=r
    r=_ROLECACHE[e['id']]
    return f' · {r}' if r else ''

def catchip(t):
    c=CATCOLOR.get(t,'#888')
    return f'<a class="chip" style="color:{c};border-color:{c}55" href="{CATSLUG[t]}">{esc(t)}</a>'
def guestlink(e):
    if not e['guests']: return ''
    g=e['guests'][0]
    return f'<a href="{PSLUG[g]}">{esc(g)}</a>'

# ── 首页 ──
byday=collections.defaultdict(list)
for e in eps: byday[e['date']].append(e)
def card(e,full=False):
    return (f'<div class="card{" full" if full else ""}" data-go="{epurl(e["id"])}">'
            f'<div class="tx">'
            f'<div class="t">{esc(e["title"])}</div>'
            f'<div class="q">「{esc((e.get("q") or e["desc"] or "")[:56])}」</div>'
            f'<div class="who">{who_of(e)}</div>'
            f'<div class="tags">{"<b class=star>★ 今天最值得读</b>" if full else ""}{"".join(catchip(t) for t in e["tags"])}</div>'
            f'</div>{thumb(e)}</div>')
mid=''
for day in sorted(byday,reverse=True)[:14]:
    lst=byday[day]
    mid+=f'<div class="dateh">{day}</div><div class="grid">'
    for idx,e in enumerate(lst):
        mid+=card(e, full=(idx==0 and len(lst)>1))
    mid+='</div>'
left=('<a class="vi on" href="index.html">最新</a><a class="vi" href="index.html">必读</a>'
      f'<a class="vi" href="index.html">全部 {len(eps)}</a><a class="vi" href="{list(CATSLUG.values())[0]}">按主题</a>'
      '<div class="about"><b>关于本站</b>每周把几集英文播客变成能读的中文精华,每句都能回到原话。</div>')
ppl=sorted(PEP.items(),key=lambda x:-len(x[1]))[:5]
right=('<div class="blk"><div class="sh">按主题</div>'
       +''.join(f'<a class="rr" href="{CATSLUG[c]}"><span>{esc(c)}</span><span>{n}</span></a>' for c,n in CAT.most_common())
       +'</div><div class="blk"><div class="sh">常出现的人</div>'
       +''.join(f'<a class="rr" href="{PSLUG[p]}"><span>{esc(p)}</span><span>{len(v)} 集</span></a>' for p,v in ppl)
       +'</div><div class="blk"><div class="sh">随便看一集 🎲</div></div>')
open(f'{P}/index.html','w',encoding='utf-8').write(
    shell('英文播客中文精华',f'<div class="shell"><div class="left">{left}</div><div class="mid">{mid}</div><div class="right">{right}</div></div>'))

# ── 大类页 ──
for c,fn in CATSLUG.items():
    sel=[e for e in eps if c in e['tags']]
    cross=collections.Counter()
    for e in sel:
        for t in e['tags']:
            if t!=c: cross[t]+=1
    pods=collections.Counter(e['pod'] for e in sel)
    yrs=collections.Counter(e['date'][:4] for e in sel)
    rows=''.join(f'<div class="row" data-go="{epurl(e["id"])}"><div class="tx"><div class="t">{esc(e["title"])}</div>'
                 f'<div class="q">「{esc((e.get("q") or e["desc"] or "")[:52])}」</div>'
                 f'<div class="who">{who_of(e)}</div>'
                 f'<div class="tags">{"".join(catchip(t) for t in e["tags"])}</div></div>{thumb(e)}</div>' for e in sel)
    lf=''.join(f'<a class="cl{" on" if k==c else ""}" href="{CATSLUG[k]}"><span>{esc(k)}</span><i>{v}</i></a>' for k,v in CAT.most_common())
    ppl2=sorted(PEP.items(),key=lambda x:-len(x[1]))[:5]
    rightc=('<div class="blk"><div class="sh">常出现的人</div>'
       +''.join(f'<a class="rr" href="{PSLUG[p]}"><span>{esc(p)}</span><span>{len(v)} 集</span></a>' for p,v in ppl2)
       +'</div><div class="blk"><div class="sh">随便看一集 🎲</div></div>')
    body=f'''<div class="shell"><div class="left"><div class="sh">全部主题</div>{lf}
<div class="about"><a class="back" href="index.html">← 回首页</a></div></div>
<div class="mid"><div class="hero"><h1><span class="dot" style="background:{CATCOLOR.get(c,"#888")}"></span>{esc(c)} <span class="cnt">{len(sel)} 集</span></h1>
<p>本站「{esc(c)}」主题下的全部精华。</p></div>
<div class="frow"><span class="k">同时属于</span>{''.join(f'<a class="fx" href="{CATSLUG[k]}">{esc(k)} <b>{v}</b></a>' for k,v in cross.most_common())}</div>
<div class="frow"><span class="k">来自</span>{''.join(f'<button class="fx">{esc(k)} <b>{v}</b></button>' for k,v in pods.most_common())}</div>
<div class="frow"><span class="k">时间</span>{''.join(f'<button class="fx">{k} 年 <b>{v}</b></button>' for k,v in sorted(yrs.items(),reverse=True))}</div>
<div class="sortbar">排序 <b>最新</b> · 最早 · 最长 &nbsp;|&nbsp; 当前 <b>{len(sel)}</b> 集,未筛选</div>
<div class="list">{rows}</div></div><div class="right">{rightc}</div></div>'''
    open(f'{P}/{fn}','w',encoding='utf-8').write(shell(f'{c} · 主题',body))

json.dump({'CATSLUG':CATSLUG,'PSLUG':PSLUG,'PEP':{k:v for k,v in PEP.items()}},open('proto_idx.json','w'),ensure_ascii=False)
print(f'✅ 首页 + {len(CATSLUG)} 个大类页')
