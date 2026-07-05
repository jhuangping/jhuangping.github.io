# Git Commit

## 合併「過去所有」歷史，或是「某個分支」的所有紀錄

### 使用 `git reset` (最簡單、最快速)

把當前分支從頭到尾所有的 Commit 全部合併成一個，這是最直接的方法

1. 找到最初始的 Commit ID（假設是第一個 commit）：
  ```bash
  git log --reverse
  ```
2. 重設到起點，但保留檔案變更：
  ```bash
  git reset --soft <第一個_commit_的_ID>
  ```
  ⚠️：使用 `--soft` 會保留你所有的程式碼修改，並將它們放在「暫存區 (Staging Area)」

3. 重新提交：

  ```bash
  git commit --amend -m "這裡寫你合併後的新訊息"
  ```

---

### 使用 `git rebase -i` (最精確、可選範圍)
如果你想手動挑選哪些要合併、哪些要保留，可以使用互動式 Rebase
1. 啟動互動模式（針對最後 N 個 Commit）：
  ```bash
  git rebase -i HEAD~N  # N 是你想合併的數量
  ```
  或者合併到最初始：
  ```bash
  git rebase -i --root
  ```
2. 在編輯器中操作：
會看到類似清單，除了第一行保留 `pick` 外，將其餘下方的 `pick` 全部改為 `s` (squash) 或 `f` (fixup)
3. 儲存並退出，Git 會自動幫你完成合併

---

### 合併分支時使用 `--squash`
如果是要把某個開發分支（如 `dev`）的所有紀錄合併進主分支（如 `main`），且不希望主分支看到開發過程中的瑣碎紀錄：
```bash
git checkout main
git merge --squash dev
git commit -m "合併 dev 分支的所有變更"
```
這會將 `dev` 分支的所有變動「壓縮」成一個未提交的狀態，讓你在 `main` 分支上只產生一個新的 Commit

---

### 重要提醒：
- 影響遠端：如果你已經將這些 Commit 推送（Push）到遠端伺服器（如 GitHub），合併後必須使用 `git push -f` 強制推送。這會覆蓋遠端的歷史紀錄，請務必確認沒有其他協作者正在基於這些舊紀錄工作。
- 備份：在進行這類操作前，建議先開一個備份分支（例如 `git branch backup_stable`），萬一合併壞了還能救回來。