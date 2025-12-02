# git submodule
以 `git-main-module` 與 `git-sub-module` 為例

## 對主 Repository 加入 Git SubModule
`git submodule add <remote repository> <local path>`

remote repository 就是要填你的子 Repository 的 URL，local path 指的是你要放在本地端主 Repository 的路徑位置

範例 : 
`git submodule add https://github.com/git-sub-module.git reference/git-sub-module`


請注意，這是代表的是自動創立 reference/git-sub-module 這個資料夾，而裡面就會放子 Repository 的專案內容！

這時候在主 Repository 會發現多了一個檔案，那就是 **.gitmodules**
```git
[submodule "reference/git-sub-module"]
  path = reference/git-sub-module
  url = https://github.com/git-sub-module.git
```

這個檔案就是會幫你紀錄子模組的訊息～

而在.git 資料夾裡面，會發現也多了一個 modules/reference/git-sub-module 的 git 的相關內容

接著，我們對主 repository 進行 push 的動作
```git
git add .
git commit -m "add submodule"
git push
```

會發現 GitHub 上的內容，後面的 Hash 值，其實就是對應到我們的 git-sub-module 第一次 commit 的 Hash 值，因此這邊如果點擊的話，會自動跳到 git-sub-module repository 的頁面！這樣代表我們成功建立子模組的關係

## 子模組進行更新後，如何同步

### 子模組更新內容
在本地端對子模組進行新的內容更改，並 push 到 remote repository

```git
cd git-sub-module
echo "update sub module content" >> sub.txt
git add .
git commit -m "update content"
git push
```

### 主模組這邊的子模組同步更新
轉移到本地端 git-main-module 主模組這邊進行子模組的更新
```git
cd git-main-module
# 拉取主子模組remote的更新內容，並且與master進行merge
git submodule update --remote --merge
```

## 主模組下的子模組進行更新後，如何 push 到對應的 remote 子模組更新

這時候的話，需要分兩次 push，分別是子模組的內容的 push，主模組的內容的 push！

```git
cd git-main-module/reference/git-sub-module
echo "hey update" >> sub.txt
# 在當前子模組的目錄下，先將子模組的內容commit後進行push
git add .
git commit -m "update"
git push
```

可以回到 git-main-module 目錄下，進行主 repository 的更新！

```git
cd git-main-module
# 在當前主模組的目錄下，將主模組的內容commit後進行push
git add .
git commit -m "update"
git push
```

## 主子模組整個都要更新

如果有一種情況是，你這個主模組多人共用，因此主子模組皆有可能被更改到，那可以用以下指令直接更新本地端的

`git pull --recurse-submodules <branch>`

## Clone 主子模組
如果要 clone 主模組的專案，要一併將子模組也 clone 下來的話，可以使用以下的指令

```git
git clone <remote_url>
git submodule update --init --recursive
```
或
```git
git clone --recurse-submodules <remote_url>
```

## 如何刪除 Git Submodule 的關係

如果主模組要刪除與子模組的關係的話，步驟比較多，不過按照以下步驟一一刪除一些內容即可！
```git
# 在主模組目錄下解除submodule關係
git submodule deinit reference/git-sub-module
刪除在.gitmodules檔案的與git-sub-module的內容
git add .gitmodules
git rm --cached reference/git-sub-module
# 這個路徑下的所有檔案刪除
rm -rf .git/modules/reference/git-sub-module 
git commit -m 'remove submodule'
rm -rf reference/git-sub-module
git push
```