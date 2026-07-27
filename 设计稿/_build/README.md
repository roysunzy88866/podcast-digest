# 原型生成器

> # 🔴 停:现在**不要**重跑这些脚本
>
> **2026-07-26 起,`../` 下的 HTML 已经远远超出这些脚本能生成的内容。**
> 那一天用户用网页批注提了八批修改,全部是**直接改 HTML** 落地的,脚本里一行都没有:
>
> - 站名改「跨国深谈」、顶栏去吸顶、顶栏改「最新/最热」
> - 左栏改主题展开、右栏改「按公司/按播客」、删掉 ★ 标记
> - 手机端独立设计:单集页吸顶折叠目录 + 阅读进度、人物页吸顶 chip 条、
>   二级页顶栏合并成「← 标题」、首页摊开搜索/视图/主题、`↩` 触摸热区 43px
> - 大类页三轴筛选真正接通(`filter.js`)+ 排序,手机端隐藏筛选
> - 新增页面:`must-read.html`(必读,A+C 口径)、`all.html`(两端并排总览)、
>   `cover-crop.html`(裁法对照)、`must-read-rules.html`(必读口径对照)
> - 金句改「引号 + 斜体」(引号由 CSS 生成)、钩子收声
> - 分享/收藏(`actions.js`)、emoji 全换内联 SVG
> - 卡片改用真实封面 + 按长宽比分流裁法(拍板 #20)
> - 网页批注工具(`comment.js` + `serve.py`)
>
> **重跑 = 上面全部回退。** 要改结构,先把这些改动移植回脚本,或者继续直接改 HTML。
> 详细的决策与实测数字见 `../../UI交互重做-2026-07-25.md`。

`../` 下的 62 个 HTML 页面由这几个脚本生成,**改样式/结构请改脚本再重跑**,别直接改 HTML(会被覆盖)。

| 脚本 | 作用 |
|---|---|
| `build_proto.py` | 共享 CSS/骨架 + 首页 + 8 个大类页 |
| `build_proto2.py` | 40 个单集页 + 8 个人物页(复用 build_proto 的头部工具) |
| `build_search.py` | `search-index.json` + `search.js` + `search.html` |
| `roles.py` | 从标题/正文抽**嘉宾职位**(原型临时方案,生产应放流水线) |
| `guests.py` | 从标题/字段抽**嘉宾姓名**(同上) |
| `all.json` / `proto_meta.json` | 从 `samples/*.md` + `data/episodes/` 备好的数据快照 |

## 重跑
```bash
python3 build_proto.py && python3 build_proto2.py && python3 build_search.py
```
脚本里的 `R` 指向仓库根;`P` 指向 `设计稿`。

## 本地预览
`.claude/launch.json` 里有 `ui-proto`(端口 8123)。
⚠️ **项目路径含中文会让 `python3 -m http.server --directory` 静默失效** —— 服务目录用 `/tmp/uiproto`,
改完要 `rm -rf /tmp/uiproto && cp -R 设计稿 /tmp/uiproto` 同步。

## 已知取巧
- 字体 `AlibabaPuHuiTi-subset.woff2` 是从 `assets/fonts/` 拷来的副本(为让原型可独立打开),与仓库那份是同一个文件。
- `search-index.json` 是生成产物,已提交是为了原型开箱即用;改数据后需重跑 `build_search.py`。
