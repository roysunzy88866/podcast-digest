# Mac mini 订阅巡航 · 安装清单(C17 / ADR 0018)

> 读者:在 Mac mini 上开一个 Claude 会话、照本清单一步步做的人(或 AI)。
> 巡航做什么:每日 2-3 次自动「发现 4 个订阅频道的新演讲 → GLM 品味判官筛 → 对味的下载音频+传 GitHub Release+落种子 → push 回仓」;
> 之后云端 cron 例行班次**自动**接管种子跑完整流水线(ADR 0018.5,无需任何手动触发)。
> 边界(ADR 0018.1/0018.7):Mac mini 只做抓取代理,**不做任何内容处理**;独立目录+独立 launchd label,不触碰每日新闻项目。

## 0. 前置依赖(装过就跳)

```sh
xcode-select --install          # git(若未装)
brew install node yt-dlp gh     # node ≥ 20 / yt-dlp(YouTube 下载)/ gh(传 Release asset)
python3 --version               # macOS 自带即可(跑 tools/glm-ask 用)
```

## 1. 克隆仓库(独立目录,别混进每日新闻项目)

```sh
mkdir -p ~/patrol && cd ~/patrol
git clone https://github.com/<owner>/<repo>.git podcast-digest   # 用实际仓库地址
cd podcast-digest
npm ci --no-audit --no-fund
```

⚠️ **别装本仓的 git hooks**(开发机才装):hooks 里的 gate-all 会因「音频是云端产物、本地 checkout 必缺」永远红(drift #38 口径),装了会拦死巡航的自动提交。克隆下来默认没装,保持即可。

## 2. `.env` 放 GLM key(用户自持,绝不进仓)

仓库根目录建 `.env`(已在 .gitignore):

```
ZHIPU_API_KEY=<用户自己的智谱 key>
```

> 由用户亲手粘贴 key;会话里的 AI 不接触明文(项目铁律)。判官模型默认 glm-5.2,要换设 `PATROL_JUDGE_MODEL`。

## 3. 🖐 git 推送凭证 + gh 登录(**用户手动步**,涉及账号凭证)

巡航要 `git push` 回仓、`gh release upload` 传音频,两者都要凭证:

```sh
gh auth login        # 跟着提示走(浏览器登录);选 HTTPS
gh auth setup-git    # 让 git push 复用 gh 的凭证
gh auth status       # 确认 Logged in
git -C ~/patrol/podcast-digest push --dry-run origin main   # 确认可推
```

## 4. 网络(默认直连,不写死任何代理)

- Mac mini 直连外网时:什么都不用配。
- 若这台机也要走代理:给 launchd 的 `EnvironmentVariables` 加
  `HTTPS_PROXY=http://<代理>:<端口>` 和 `NODE_USE_ENV_PROXY=1`(Node fetch 认后者才吃代理 env);
  yt-dlp/gh/git 认 `HTTPS_PROXY` 本身。巡航派生 seed-talk 时会自动透传,**不会**落回开发机的 7877 默认。

## 5. 手动试跑(先烟测再全量)

```sh
cd ~/patrol/podcast-digest
node scripts/patrol-talks.mjs --discover-only    # 只发现+去重+预过滤,打印各频道拿到几条(不花钱不动 git)
node scripts/patrol-talks.mjs --judge-sample 3   # 真调判官试 3 条,看判定合不合口味(几分钱;不下载不动 git)
node scripts/patrol-talks.mjs --limit 2          # 首次全量建议限流:最多落种 2 条,验证下载→上传→push 全链
node scripts/patrol-talks.mjs                    # 正式:全量巡航
```

⚠️ 首跑积压提醒:AI Engineer 是会后浪涌型频道,首跑可能一次发现 15-30 条新演讲(判官全判、对味的全下载)。想分批消化就用 `--limit N` 跑几轮。

## 6. 装 launchd 定时(每日 3 巡)

```sh
mkdir -p ~/Library/LaunchAgents ~/Library/Logs
sed -e "s|__REPO__|$HOME/patrol/podcast-digest|g" \
    -e "s|__NODE__|$(which node)|g" \
    -e "s|__HOME__|$HOME|g" \
    tools/launchd/com.podcast-digest.patrol.plist > ~/Library/LaunchAgents/com.podcast-digest.patrol.plist
plutil -lint ~/Library/LaunchAgents/com.podcast-digest.patrol.plist   # 必须 OK
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.podcast-digest.patrol.plist
launchctl list | grep podcast-digest   # 看到 com.podcast-digest.patrol 即装好
```

- 默认班次 09:40 / 15:40 / 21:40(本地时间,刻意避开整点)。装前 `launchctl list | grep -v com.apple` 看一眼每日新闻项目的班次,撞了就改 plist 里的 `StartCalendarInterval` 错开(ADR 0018.7)。
- 立即手动触发一次:`launchctl kickstart gui/$(id -u)/com.podcast-digest.patrol`
- 卸载:`launchctl bootout gui/$(id -u)/com.podcast-digest.patrol`

## 7. 验证与日常怎么看

| 想知道 | 看哪里 |
|---|---|
| 巡航跑没跑/报错 | `tail -100 ~/Library/Logs/podcast-digest-patrol.log`(退出非零=有失败,响亮) |
| 每条视频的判定与理由 | `data/talks-seed/patrol-log.jsonl`(随仓提交;action=rejected 带判官理由,人工复核纠偏就看它) |
| 判官误杀了想捞回 | 从 patrol-log 找到 videoId,手动 `node scripts/seed-talk.mjs 'https://www.youtube.com/watch?v=<id>'` 即走人工圈选通道 |
| 种子有没有被云端接走 | push 后等下一班 cron(UTC 2/8/14/20),GitHub Actions「C7b Auto Pipeline」run 日志里有「talks 源自动进场」 |
| 改订阅/过滤规则 | 只改 `data/talk-subscriptions.json`(规则是数据),commit+push 即生效 |
| 品味口径纠偏 | 用户裁决回写 `需求共创/内容品味档案.md`(判官运行时读它,活文档,推上去下轮即生效) |

## 8. yt-dlp 升级(已知维护成本,ADR 0018.7 用户知情)

YouTube 反爬变阵时 yt-dlp 会突然下载失败(patrol-log 里连片 seed-failed / meta-failed)。处置:

```sh
brew upgrade yt-dlp    # 一般升级即愈;升完手动跑一次 node scripts/patrol-talks.mjs 验证
```
