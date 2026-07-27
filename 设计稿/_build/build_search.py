import json,os,re,html,collections
exec(open('build_proto.py',encoding='utf-8').read().split("# ── 首页 ──")[0])
R='/Users/Admin/Documents/Projects/X视频'; P=f'{R}/需求共创/原型'

# ── 生成检索索引:标题 / 金句 / 正文 / 人名,四类分别可命中 ──
idx=[]
for e in eps:
    d=f'{R}/data/episodes/{e["id"]}'
    quotes=[];body=''
    if os.path.exists(f'{d}/digest.json'):
        dg=json.load(open(f'{d}/digest.json'))
        quotes=[{'zh':q['zh'],'sp':q.get('speaker',''),'ts':q.get('timestamp','')} for q in dg.get('quotes',[])]
        body=re.sub(r'\[[^\]]*\]|[#>*`]','',dg.get('digest_md',''))[:6000]
    people=[]
    if os.path.exists(f'{d}/entities.json'):
        for x in json.load(open(f'{d}/entities.json'))['entities']:
            if x['type']=='person': people.append(x['name'])
    idx.append({'id':e['id'],'t':e['title'],'p':e['pod'],'dt':e['date'],'c':e['cat'],
                'tg':e['tags'],'q':quotes,'b':body,'pe':people,'du':e['dur']})
json.dump(idx,open(f'{P}/search-index.json','w'),ensure_ascii=False,separators=(',',':'))
print('索引:',len(idx),'集 ·',os.path.getsize(f'{P}/search-index.json')//1024,'KB')

SEARCH_JS=r'''
let IDX=null,IDXP=null;
function loadIdx(){ if(!IDXP) IDXP=fetch('search-index.json').then(r=>r.json()).then(j=>IDX=j); return IDXP; }
function hl(s,q){ if(!q) return s;
  const i=s.toLowerCase().indexOf(q.toLowerCase()); if(i<0) return s;
  return s.slice(0,i)+'<mark>'+s.slice(i,i+q.length)+'</mark>'+s.slice(i+q.length); }
function snip(text,q,pad=34){
  const i=text.toLowerCase().indexOf(q.toLowerCase()); if(i<0) return '';
  const a=Math.max(0,i-pad), b=Math.min(text.length,i+q.length+pad);
  return (a>0?'…':'')+hl(text.slice(a,b),q)+(b<text.length?'…':''); }
function runSearch(q){
  q=(q||'').trim(); if(!q||!IDX) return {n:0,groups:[]};
  const L=q.toLowerCase();
  const G={标题:[],金句:[],人名:[],正文:[]};
  for(const e of IDX){
    if(e.t.toLowerCase().includes(L)){ G.标题.push({e,s:hl(e.t,q)}); continue; }
    const mq=e.q.find(x=>x.zh.toLowerCase().includes(L));
    if(mq){ G.金句.push({e,s:hl(mq.zh,q),sub:(mq.sp||'')+' · '+(mq.ts||'')}); continue; }
    const mp=e.pe.find(x=>x.toLowerCase().includes(L));
    if(mp){ G.人名.push({e,s:hl(mp,q),sub:'出现在本集'}); continue; }
    if(e.b.toLowerCase().includes(L)){ G.正文.push({e,s:snip(e.b,q)}); }
  }
  const groups=Object.entries(G).filter(([,v])=>v.length);
  return {n:groups.reduce((a,[,v])=>a+v.length,0),groups};
}
'''
open(f'{P}/search.js','w',encoding='utf-8').write(SEARCH_JS)

# ── 独立结果页 ──
lf=''.join(f'<a class="cl" href="{CATSLUG[k]}"><span>{esc(k)}</span><i>{v}</i></a>' for k,v in CAT.most_common())
body=f'''<div class="shell two"><div class="left"><div class="sh">全部主题</div>{lf}
<div class="about"><a class="back" href="index.html">← 回首页</a></div></div>
<div class="mid">
<div class="hero"><h1>搜索</h1><p>搜标题、金句、正文与人名 —— 全站 {len(idx)} 集中文精华的全文检索。</p></div>
<div class="sbig"><input id="qq" placeholder="试试:智能体 / 增长 / Anthropic / 护城河" autofocus></div>
<div class="frow" id="scope"><span class="k">只看</span>
<button class="fx on" data-g="">全部</button><button class="fx" data-g="标题">标题</button>
<button class="fx" data-g="金句">金句</button><button class="fx" data-g="人名">人名</button>
<button class="fx" data-g="正文">正文</button></div>
<div id="res"></div></div></div>'''
extra='''<script src="search.js"></script><script>
const q=document.getElementById('qq'),res=document.getElementById('res');let G='';
function card(x,g){return `<div class="row" data-go="ep-${x.e.id}.html"><div class="tx">
 <div class="t">${g==='标题'?x.s:x.e.t}</div>
 ${g!=='标题'?`<div class="q">${g==='金句'?'「'+x.s+'」':x.s}</div>`:''}
 <div class="m"><b class="gtag">${g}</b>${x.sub?'<span>'+x.sub+'</span>':''}<span>${x.e.p}</span><span>${x.e.dt}</span></div>
</div></div>`}
function render(){const {n,groups}=runSearch(q.value);
 if(!q.value.trim()){res.innerHTML='<p class="empty">输入关键词开始检索。</p>';return}
 if(!n){res.innerHTML='<p class="empty">没有找到「'+q.value+'」。换个词试试?</p>';return}
 let h='<div class="cnt2">找到 <b>'+n+'</b> 条结果</div>';
 for(const [g,items] of groups){ if(G&&G!==g) continue;
   h+='<div class="gsec">'+g+' · '+items.length+'</div><div class="list">'+items.map(x=>card(x,g)).join('')+'</div>';}
 res.innerHTML=h;
 res.querySelectorAll('[data-go]').forEach(el=>{el.style.cursor='pointer';
   el.onclick=ev=>{if(ev.target.closest('a'))return;location.href=el.dataset.go}});
}
document.querySelectorAll('#scope .fx').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#scope .fx').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');G=b.dataset.g;render()});
loadIdx().then(()=>{const u=new URLSearchParams(location.search).get('q');if(u){q.value=u}render()});
q.addEventListener('input',render);
</script>'''
open(f'{P}/search.html','w',encoding='utf-8').write(shell('搜索',body).replace('</body>',extra+'</body>'))
print('✅ search.html + search.js + search-index.json')
