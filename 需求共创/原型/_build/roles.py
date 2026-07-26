import json,re,os,glob
R='/Users/Admin/Documents/Projects/X视频'
ROLE=r'(联合创始人|创始人|产品负责人|增长负责人|负责人|CEO|CTO|COO|CPO|CFO|CMO|总裁|副总裁|高管教练|高管|教母|之父|作者|专家|投资人|研究员|分析师|教练|顾问|合伙人|主管|总监|主编|主理人|首席[^,，、:：]{0,4}官)'
ORG=r'([A-Za-z][A-Za-z0-9&\.\-\' ]{1,18}|[一-龥]{2,8})'
EN=r'((?:co-)?founder|CEO|CTO|COO|CPO|head of [a-z ]{2,18}|chief [a-z]+ officer|VP of [a-z ]{2,14}|partner|author)'
# 不该被当成公司名的词(切歪时会冒出来)
BAD={'这个','一个','我们','他们','那个','公司','长期','三任','两任','资深','知名','著名','前任','现任',
     '多年','曾任','担任','来自','对话','专访','访谈','本期','今天','一位','某位','这位','产品','业务'}
def _cn(x): return bool(re.match(r'^[一-龥]+$', x))
def pick(text):
    if not text: return None
    m=re.search(ORG+r'\s*(?:的)?\s*'+ROLE, text)          # 「Vercel COO」「Netflix 产品负责人」
    if m:
        org=m.group(1).strip(' 的'); role=m.group(2)
        if len(org)>1 and org not in BAD:
            # 中文公司/中文职位之间不加空格(避免「高管 教练」「育儿 专家」)
            return (org+role) if (_cn(org) and _cn(role)) else f'{org} {role}'
        return role
    m=re.search(ROLE, text)
    if m: return m.group(1)
    m=re.search(EN, text, re.I)
    if m:
        v=m.group(1)
        return re.sub(r'\b(ceo|cto|coo|cpo|cfo|cmo|vp)\b', lambda x:x.group(1).upper(), v, flags=re.I)
    return None
def role_for(eid):
    mp=f'{R}/data/episodes/{eid}/meta.json'
    if not os.path.exists(mp): return None,None
    d=json.load(open(mp))
    gt=d.get('guest_titles')
    if gt:   # 可能是 list / dict / str,统一取第一个值
        if isinstance(gt,dict): gt=list(gt.values())
        if isinstance(gt,list): gt=gt[0] if gt else None
        if gt: return str(gt),'guest_titles'
    for src,txt in (('标题',d.get('title_zh')),('标题',d.get('title_en'))):
        r=pick(txt)
        if r: return r,src
    dp=f'{R}/data/episodes/{eid}/digest.json'
    if os.path.exists(dp):
        r=pick(json.load(open(dp)).get('digest_md','')[:400])
        if r: return r,'正文开头'
    return None,None
if __name__=='__main__':
    ok=0;tot=0
    for f in sorted(glob.glob(f'{R}/data/episodes/*/meta.json')):
        eid=json.load(open(f))['id']; r,s=role_for(eid); tot+=1
        if r: ok+=1
        zh=(json.load(open(f)).get('title_zh') or '')[:26]
        print(f'  {"✅" if r else "❌"} {str(r):26s} [{s or "-":8s}] ← {zh}')
    print(f'\n覆盖 {ok}/{tot} = {ok*100//tot}%')
