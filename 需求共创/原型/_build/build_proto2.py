import json,os,re,html,collections
exec(open('build_proto.py').read().split("# ── 首页 ──")[0])   # 复用 CSS/工具/索引
idx=json.load(open('proto_idx.json'))
LINKS={}
for e in eps:
    for g in e['guests']: LINKS[g]=PSLUG[g]
def rich(t,epid):
    """先转义 → 再把时间戳变成 ↩ 按钮 → 最后只在【标签之外的文本】里替换人名为链接。
    (踩过的坑:直接全串替换会把 <a> 标签塞进 button 的 title 属性,引号断裂、内容漏进正文)"""
    t=html.escape(t)
    t=re.sub(r'\[(\d{2}:\d{2})(?:\s+([^\]]+))?\]',
             lambda m:f'<button class="ts" data-t="{m.group(1)}" data-who="{(m.group(2) or "").strip()}"></button>',t)
    out=[]
    for seg in re.split(r'(<[^>]+>)', t):      # 奇数段是标签,原样保留
        if seg.startswith('<'):
            out.append(seg); continue
        for name,url in LINKS.items():
            seg=seg.replace(html.escape(name), f'<a class="wl" href="{url}">{html.escape(name)}</a>')
        out.append(seg)
    return ''.join(out)

def paras(b,epid):
    o=[]
    for p in b.split('\n\n'):
        p=p.strip()
        if not p: continue
        o.append(('<blockquote>'+rich(p.lstrip('> '),epid)+'</blockquote>') if p.startswith('>') else ('<p>'+rich(p,epid)+'</p>'))
    return '\n'.join(o)

# ── 单集页 ──
for e in eps:
    dp=f'{R}/data/episodes/{e["id"]}/digest.json'
    if not os.path.exists(dp): continue
    dg=json.load(open(dp)); md=dg.get('digest_md','')
    parts=re.split(r'\n## ',md); lead=parts[0]
    secs=[(p.split('\n')[0].strip(),'\n'.join(p.split('\n')[1:]).strip()) for p in parts[1:]]
    qs=dg.get('quotes',[])
    hook=qs[0] if qs else None
    toc=''.join(f'<a href="#s{i}"{" class=on" if i==0 else ""}>{esc(t)}</a>' for i,(t,_) in enumerate(secs))
    body_html=''.join(f'<h2 id="s{i}">{esc(t)}</h2>{paras(b,e["id"])}' for i,(t,b) in enumerate(secs))
    qh=''.join(f'''<div class="qr"><div class="z">「{esc(q["zh"])}」</div><div class="e">{esc(q["en"][:130])}…</div>
<div class="m">{esc(q.get("speaker",""))} · {q.get("timestamp","")} <button class="ts" data-t="{q.get("timestamp","")}"></button></div></div>''' for q in qs)
    same=[x for x in eps if x['id']!=e['id'] and set(x['tags'])&set(e['tags'])][:3]
    other=[x for x in eps if x['id']!=e['id'] and not(set(x['tags'])&set(e['tags']))][:3]
    ents=''
    ep=f'{R}/data/episodes/{e["id"]}/entities.json'
    if os.path.exists(ep):
        E=json.load(open(ep))['entities']
        def grp(t,ic):
            xs=[x['name'] for x in E if x['type']==t][:5]
            return f'<div class="rr" style="display:block"><span>{ic} {" · ".join(esc(x) for x in xs)}</span></div>' if xs else ''
        ents=grp('person','👤')+grp('company','🏢')+grp('concept','💡')
    guest=e['guests'][0] if e['guests'] else ''
    body=f'''<div class="shell det"><div class="mid">
<a class="back" href="index.html">← 返回</a>
<h1 class="pt">{esc(e["title"])}</h1>
<div class="byl">{f'<a class="wl" href="{PSLUG[guest]}">{esc(guest)}</a>' if guest else ''}</div>
<div class="mt">{esc(e["pod"])} · {e["date"]}{''.join(catchip(t) for t in e["tags"])}</div>
<div class="play"><span class="pb">▶</span><span><span class="tt">听中文精华</span><span class="s">{mins(e["dur"])} · AI 合成朗读</span></span><span class="bar"></span><span class="s">00:00</span></div>
{f'<div class="hook"><div class="z">「{esc(hook["zh"])}」</div><div class="a">— {esc(hook.get("speaker",""))} <button class="ts" data-t="{hook.get("timestamp","")}"></button></div></div>' if hook else ''}
<div class="tldr"><b>一句话</b>{esc(dg.get("tldr",""))}</div>
{paras(lead,e["id"])}{body_html}
<div class="sec">全部金句 <span>{len(qs)} 条(中英对照,已过机器闸门)</span></div>{qh}
<div class="sec">接着看</div>
<div class="exit"><div class="ex"><b>顺着「{esc(e["cat"])}」挖下去</b>{''.join(f'<a href="{epurl(x["id"])}">{esc(x["title"])}</a>' for x in same)}</div>
<div class="ex"><b>换个口味</b>{''.join(f'<a href="{epurl(x["id"])}">{esc(x["title"])}</a>' for x in other)}</div></div>
</div><div class="right"><div class="blk"><div class="sh">本集目录</div><div class="toc">{toc}</div></div>
<div class="blk"><div class="sh">这一集涉及</div>{ents}</div></div></div>'''
    open(f'{P}/{epurl(e["id"])}','w',encoding='utf-8').write(shell(e['title'],body))

# ── 人物页 ──
for p,ids in PEP.items():
    myeps=[EP[i] for i in ids]
    allq=[]
    for i in ids:
        dp=f'{R}/data/episodes/{i}/digest.json'
        if os.path.exists(dp):
            for q in json.load(open(dp)).get('quotes',[]):
                if q.get('speaker','').strip()==p.strip(): allq.append((q,i))
    if not allq:
        for i in ids:
            dp=f'{R}/data/episodes/{i}/digest.json'
            if os.path.exists(dp): allq+= [(q,i) for q in json.load(open(dp)).get('quotes',[])[:3]]
    qh=''.join(f'''<div class="qr"><div class="z">「{esc(q["zh"])}」</div><div class="e">{esc(q["en"][:120])}…</div>
<div class="m"><a class="wl" href="{epurl(i)}">{esc(EP[i]["title"][:30])}</a> · {q.get("timestamp","")} <button class="ts" data-t="{q.get("timestamp","")}"></button></div></div>''' for q,i in allq[:8])
    eph=''.join(f'<div class="row" data-go="{epurl(x["id"])}"><div class="tx"><div class="t">{esc(x["title"])}</div>'
                f'<div class="m">{esc(x["pod"])} · {x["date"]} · {esc(x["cat"])} · 作为嘉宾</div></div>{thumb(x)}</div>' for x in myeps)
    cons=collections.Counter()
    for i in ids:
        ep2=f'{R}/data/episodes/{i}/entities.json'
        if os.path.exists(ep2):
            for x in json.load(open(ep2))['entities']:
                if x['type'] in ('concept','company'): cons[x['name']]+=1
    allc=collections.Counter()
    for e2 in eps:
        ep2=f'{R}/data/episodes/{e2["id"]}/entities.json'
        if os.path.exists(ep2):
            for x in json.load(open(ep2))['entities']:
                if x['type'] in ('concept','company'): allc[x['name']]+=1
    chips=''.join(f'<span class="chp">{esc(k)}<b>{allc[k]} 集</b></span>' for k,_ in cons.most_common(9))
    cat0=myeps[0]['cat']
    peers=[g for g,v in PEP.items() if g!=p and any(EP[i]['cat']==cat0 for i in v)][:5]
    peerh=''.join(f'<a class="chp" href="{PSLUG[g]}">{esc(g)}</a>' for g in peers)
    ini=''.join(w[0] for w in p.split()[:2]).upper()
    body=f'''<div class="shell det"><div class="mid">
<a class="back" href="index.html">← 返回</a>
<div class="phero"><div class="av" style="background:{CATCOLOR.get(cat0,'#888')}">{ini}</div><div>
<h1 class="pt" style="font-size:27px;margin-bottom:2px">{esc(p)}</h1>
<div class="byl">{esc(myeps[0]["pod"])} 嘉宾</div>
<div class="nums">本站收录 <b>{len(ids)}</b> 集 · <b>{len(allq)}</b> 条金句</div></div></div>
<div class="sec">① 他说过的话 <span>{len(allq)} 条,均已过机器闸门</span></div>{qh}
<div class="sec">② 出现在这些集 <span>{len(ids)} 集</span></div><div class="list">{eph}</div>
<div class="sec">③ 他谈到的 <span>点进去有真内容 —— 本页主要出口</span></div><div class="chips">{chips}</div>
<div class="sec">④ 也在聊「{esc(cat0)}」的人</div><div class="chips">{peerh or '<span class="chp">暂无</span>'}</div>
</div><div class="right"><div class="blk"><div class="sh">本页导航</div><div class="toc">
<a class="on">① 他说过的话</a><a>② 出现在这些集</a><a>③ 他谈到的</a><a>④ 同主题的人</a></div></div>
<div class="blk"><div class="sh">回到</div><div class="rr"><a href="{CATSLUG.get(cat0,'index.html')}">{esc(cat0)} 主题</a></div>
<div class="rr"><a href="index.html">首页</a></div></div></div></div>'''
    open(f'{P}/{PSLUG[p]}','w',encoding='utf-8').write(shell(p,body))
print(f'✅ {len([e for e in eps])} 个单集页 + {len(PEP)} 个人物页')
