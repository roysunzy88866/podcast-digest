
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
