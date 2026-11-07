# Git Merge
---
## 強制拉取遠端分支

想完全放棄本地的所有修改與提交，**直接以遠端分支的內容強制覆蓋本地**，請依序執行以下指令：

### 1. 放棄目前的合併狀態
```bash
git merge --abort
```

### 2. 強制重設本地分支到遠端狀態

執行以下指令，這會將你目前的本地分支 `branch/dev` 重設到與遠端`branch/dev` 完全一致

⚠️ 注意：這會清除你本地所有尚未提交的修改，以及本地那 2 個尚未推送到遠端的提交（commits），請確認這些變更已不再需要或已備份

```bash
git fetch origin
git reset --hard origin/branch/dev
```