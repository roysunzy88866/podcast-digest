import json,glob,os,collections,re
R='/Users/Admin/Documents/Projects/X视频'
_META={}
for f in glob.glob(f'{R}/data/episodes/*/meta.json'):
    d=json.load(open(f)); _META[d['id']]=d
# ① 按「同一播客里出现频次」识别主持人:占该源集数 ≥30% 的名字判为主持
_byPod=collections.defaultdict(lambda: collections.Counter())
_podN=collections.Counter()
for d in _META.values():
    p=d.get('podcast') or '?'; _podN[p]+=1
    names=set(filter(None,[(d.get('host') or '').strip()]+ (d.get('cohosts') or []) + (d.get('guests') or [])
                     + list((d.get('speaker_map') or {}).values())))
    for n in names: _byPod[p][n.strip()]+=1
HOSTS={p:{n for n,c in cnt.items() if c>=max(2,_podN[p]*0.3)} for p,cnt in _byPod.items()}
# 常见非人名的大写词(公司/产品/栏目),避免被当成人名
NOTNAME={'AI','The','This','How','What','Why','Big','New','OpenAI','Anthropic','Google','Meta','Netflix',
 'Slack','Vercel','Stripe','Figma','GitHub','Notion','Cisco','Snap','Zynga','Databricks','Modal','Daytona',
 'Product','Growth','Podcast','Show','Space','Latent','Technology','Codex','Claude','Kimi','SpaceX','Lenny'}
def _name_in_title(d):
    t=(d.get('title_zh') or '')+' '+(d.get('title_en') or '')
    # 连续两个首字母大写的英文词 = 人名候选
    for m in re.finditer(r'\b([A-Z][a-zA-Z\.\']{1,14})\s+([A-Z][a-zA-Z\.\'-]{1,16})\b', t):
        a,b=m.group(1),m.group(2)
        if a in NOTNAME or b in NOTNAME: continue
        return f'{a} {b}'
    m=re.search(r'\b(Dr\.?\s+[A-Z][a-zA-Z]{2,14})\b', t)
    if m: return m.group(1)
    return None

def guest_of(eid):
    d=_META.get(eid)
    if not d: return None,None
    pod=d.get('podcast') or '?'
    title=((d.get('title_zh') or '')+' '+(d.get('title_en') or ''))
    # 该集数据里已知的人名(说话人/嘉宾/实体)——标题抽出的名字必须在这里面才采信
    known=set()
    for x in (d.get('guests') or [])+(d.get('cohosts') or [])+list((d.get('speaker_map') or {}).values()):
        if x: known.add(x.strip())
    ep=f'{R}/data/episodes/{eid}/entities.json'
    if os.path.exists(ep):
        for e in json.load(open(ep))['entities']:
            if e.get('type')=='person': known.add(e['name'].strip())
    known={k for k in known if k and k not in HOSTS.get(pod,set())}
    tn=_name_in_title(d)
    if tn and tn not in HOSTS.get(pod,set()):
        toks=[t for t in re.split(r'\s+',tn) if len(t)>1]
        for k in known:                       # 标题名与已知说话人对得上 → 采信完整的那个
            if k==tn or any(t in k for t in toks) or any(t in tn for t in re.split(r'\s+',k) if len(t)>1):
                return (k if len(k)>=len(tn) else tn),'标题+校验'
        # 对不上 → 不采信标题(多半抓到的是公司名/短语)
    cand=[]
    for src,arr in (('guests',d.get('guests') or []),('cohosts',d.get('cohosts') or []),
                    ('speaker_map',list((d.get('speaker_map') or {}).values()))):
        for n in arr:
            n=(n or '').strip()
            if n and n not in HOSTS.get(pod,set()) and n!=(d.get('host') or '').strip():
                cand.append((src,n))
    if not cand:                      # ③ 退到实体里 role=guest
        ep=f'{R}/data/episodes/{eid}/entities.json'
        if os.path.exists(ep):
            for e in json.load(open(ep))['entities']:
                if e.get('type')=='person' and e.get('role')=='guest' and e['name'].strip() not in HOSTS.get(pod,set()):
                    cand.append(('entities',e['name'].strip()))
    if not cand: return None,None
    # ② 优先选标题里出现过的(姓或名命中即可)
    for src,n in cand:
        parts=[p for p in re.split(r'\s+', n) if len(p)>1]
        if any(p in title for p in parts) or n in title: return n,src+'+标题'
    return cand[0][1], cand[0][0]
if __name__=='__main__':
    ok=0; rows=[]
    for eid in sorted(_META):
        n,s=guest_of(eid); ok+= bool(n)
        rows.append((n,s,(_META[eid].get('title_zh') or _META[eid].get('title_en') or '')[:30]))
    print('识别为主持人的名字:',{p:sorted(v) for p,v in HOSTS.items() if v})
    print()
    for n,s,t in rows[:16]: print(f'  {str(n):24s} [{str(s):16s}] ← {t}')
    print(f'\n覆盖 {ok}/{len(rows)}')
