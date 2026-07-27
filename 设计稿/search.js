
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

/* ── 顶栏长条搜索框(第九批批注 #2)──
   原来顶栏是个放大镜图标,点开全屏遮罩。现在直接在顶栏输入,结果就地下拉。
   写在这里而不是各页内联脚本:58 个页面共用这一份,不会漂移。 */
(function(){
  function wire(){
    const box=document.querySelector('.tsearch'); if(!box) return;
    const inp=box.querySelector('input');
    const drop=document.createElement('div'); drop.className='tdrop'; box.appendChild(drop);
    const close=()=>drop.classList.remove('open');
    const draw=()=>{
      if(!IDX){ loadIdx().then(draw); return; }
      const q=inp.value.trim(); if(!q){ close(); return; }
      const {n,groups}=runSearch(q);
      let h='',c=0;
      if(!n){ h='<div class="sg">没有匹配</div>'; }
      else{
        for(const [g,items] of groups){ h+='<div class="sg">'+g+'</div>';
          for(const x of items){ if(c++>=6) break;
            h+='<a class="si" href="ep-'+x.e.id+'.html"><div class="a">'+(g==='标题'?x.s:x.e.t)+'</div>'+
               (g!=='标题'?'<div class="b">'+x.s+'</div>':'<div class="b">'+x.e.p+'</div>')+'</a>'; } }
        h+='<a class="more" href="search.html?q='+encodeURIComponent(q)+'">查看全部 '+n+' 条结果 →</a>';
      }
      drop.innerHTML=h; drop.classList.add('open');
    };
    inp.addEventListener('focus',()=>{ loadIdx(); if(inp.value.trim()) draw(); });
    inp.addEventListener('input',draw);
    inp.addEventListener('keydown',e=>{
      if(e.key==='Enter'&&inp.value.trim()) location.href='search.html?q='+encodeURIComponent(inp.value.trim());
      if(e.key==='Escape'){ close(); inp.blur(); } });
    document.addEventListener('click',e=>{ if(!e.target.closest('.tsearch')) close(); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',wire); else wire();
})();

/* ── 日期标题:今天 / 昨天 / 日期(第十二批批注 #1)──
   .dateh 的文字节点就是日期(那条横线是 :after,不受影响)。 */
(function(){
  function relabel(){
    const p=n=>String(n).padStart(2,'0');
    const k=d=>d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());
    const now=new Date(), yst=new Date(); yst.setDate(yst.getDate()-1);
    const map={[k(now)]:'今天',[k(yst)]:'昨天'};
    document.querySelectorAll('.dateh').forEach(el=>{
      const t=el.textContent.trim();
      if(map[t]) el.textContent=map[t];
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',relabel); else relabel();
})();

/* ── 点一条内容 = 开新窗口(第十三批批注)──
   凡是指向单集页的链接都新开一个标签页,读文章不打断当前这一屏的浏览。
   左右两栏的导航(主题/公司/播客)不算「一条内容」,仍在原窗口跳。 */
(function(){
  function blank(){
    document.querySelectorAll('a[href^="ep-"]').forEach(a=>{
      a.target='_blank'; a.rel='noopener';
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',blank); else blank();
  // 搜索下拉/手机端搜索的结果是后插进 DOM 的,插完再补一次
  document.addEventListener('input',()=>setTimeout(blank,0),true);
})();
