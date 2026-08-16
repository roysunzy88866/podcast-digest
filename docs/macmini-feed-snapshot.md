# Mac mini · lennys 新鲜 feed 快照(治断更 drift #56)

> 为什么:Substack **按地理**给陈旧 feed —— US 侧(GitHub runner 直抓 / CF Worker)都拿到旧副本,
> 唯住宅 IP 新鲜(实测 Mac mini 抓到最新集)。让 Mac mini 定时抓新鲜 feed 提交,云端流水线改读它
> (`SOURCES` lennys `snapshotFile: data/lennys-live-feed.xml` → `readForwardFeed`)。CF Worker 那套已废弃删除。
>
> 边界:Mac mini **只抓 feed 存文件**,不做任何内容处理;独立 launchd label,不碰别的爬虫/项目。

## 前置(Mac mini 现状)
- ✅ 仓库已 clone 在 `~/patrol/podcast-digest`
- ✅ git 已装;mihomo 代理常驻 `127.0.0.1:7890`(这台连 github 要代理,抓 lennys 是直连)
- ✅ 抓 lennys 新鲜已验证

## 1. 🖐 git 推送凭证(**用户手动步**,涉及令牌)
巡航脚本要 `git push` 回仓。这台没配凭证,配一次(细粒度 PAT):

1. 建令牌:GitHub → Settings → Developer settings → **Fine-grained tokens** → Generate →
   - Repository access:只选 `roysunzy88866/podcast-digest`
   - Permissions → Repository → **Contents: Read and write**
   - Generate,复制令牌(只显示一次)
2. 在 Mac mini 上存起来(把 `<PAT>` 换成刚复制的令牌;令牌只你经手,AI 不碰):
   ```sh
   git config --global credential.helper store
   printf 'https://roysunzy88866:%s@github.com\n' '<PAT>' >> ~/.git-credentials
   chmod 600 ~/.git-credentials
   # 验证可推:
   cd ~/patrol/podcast-digest && git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 push --dry-run origin main
   ```

## 2. 装 launchd 定时(每 3 小时)
```sh
cd ~/patrol/podcast-digest
git -c http.proxy=http://127.0.0.1:7890 -c https.proxy=http://127.0.0.1:7890 pull --rebase origin main   # 拉到脚本
cp tools/com.user.lennys-feed-snapshot.plist ~/Library/LaunchAgents/
launchctl unload ~/Library/LaunchAgents/com.user.lennys-feed-snapshot.plist 2>/dev/null
launchctl load  ~/Library/LaunchAgents/com.user.lennys-feed-snapshot.plist
```

## 3. 试跑 + 看日志
```sh
bash ~/patrol/podcast-digest/tools/refresh-live-feed.sh    # 手动跑一次
tail -20 ~/Library/Logs/lennys-feed-snapshot.out.log
launchctl list | grep lennys-feed-snapshot                 # 确认已装
```

## 排查
- push 失败:多半凭证没存对 / 代理没起 → 重跑第 1 步验证命令。
- 抓到旧的:确认脚本抓 feed **没走代理**(走代理会经 US 出口拿到旧的,drift #56 病根)。
- 云端仍 0 新:确认 Mac mini 真提交了新快照(`git log --oneline -3` 看有没有 chore 🤖 快照 commit)。
