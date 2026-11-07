# Astro Directives (指令) 整理

## 一、 基礎常用指令

| 指令 (Directive) | 用途與說明 | 範例 / 備註 |
| :--- | :--- | :--- |
| `class:list` | 動態或條件式結合 CSS 類別，支援字串、陣列與物件格式。 | `<div class:list={['card', { active: isActive }]} />` |
| `set:html` | 將變數中的字串作為 HTML 內容安全地插入元素中。 | `<div set:html={article.content} />` |
| `set:text` | 將內容作為純文字插入，會自動跳脫 HTML 標籤以防範 XSS。 | `<p set:text={userInput} />` |
| `define:vars` | 將伺服器端的 JavaScript 變數傳遞到 `<style>` 或 `<script>` 中使用。 | `<style define:vars={{ textColor: userColor }}>` |
| `client:*` | 控制 UI 框架元件（React、Vue 等）在客戶端的載入與水合時機。 | `client:load`, `client:visible`, `client:idle`, `client:only="react"` |
| `is:inline` | 讓 `<script>` 或 `<style>` 保持原樣輸出，不經過 Astro 的打包與最佳化。 | `<script is:inline>console.log("raw")</script>` |
| `is:global` | 將 `.astro` 中 `<style>` 標籤的預設區域化（Scoped）樣式轉為全域樣式。 | `<style is:global> body { margin: 0; }</style>` |

---

## 二、 Client Directives (`client:*`) 水合時機詳細比較

Astro 預設採用 **Islands Architecture（群島架構）**，所有 UI 框架元件（React, Vue, Svelte, Solid 等）在預設情況下都只會在伺服器端渲染成純 HTML/CSS（零 JS 送至前端）。若需要互動性，必須明確指定 `client:*` 指令來控制 JavaScript 的下載與**水合（Hydration）**時機。

### 1. 各 Client 指令詳細比較表

| Client 指令 | 水合 / 載入時機 (Trigger) | 優先級 | 適用情境 (Use Cases) | 注意事項 / 運作細節 |
| :--- | :--- | :--- | :--- | :--- |
| `client:load` | 頁面初始載入時**立即**下載並執行 JS 水合。 | **高** | • 頁面核心互動元件<br>• 導覽列 (Navigation Bar)<br>• 搜尋框 / 搜尋列<br>• 使用者一進頁面就需要操作的 UI | 會直接影響 TTI (Time to Interactive)，非關鍵元件請避免使用。 |
| `client:idle` | 頁面初始載入完成且觸發 `requestIdleCallback`（瀏覽器空閒時）。 | **中** | • 次要互動元件<br>• 頁面底部的訂閱表單<br>• 頁尾 (Footer) 互動連結<br>• 浮動客服按鈕 | 在 `onload` 事件觸發後才進行載入，適合不影響首屏體驗的互動項目。 |
| `client:visible` | 元件進入使用者視口 (Viewport) 時（透過 `IntersectionObserver`）。 | **低 / 按需** | • 滾動到下方才看的到的元件<br>• 評論區 / 留言板<br>• 圖片輪播圖 (Carousel)<br>• 無限滾動列表項目 | 非常推薦用於長頁面，可大幅減少初始 Bundle 大小與首開載入時間。 |
| `client:media` | 符合指定的 CSS Media Query 時（例如螢幕寬度條件）。 | **條件觸發** | • 僅在行動裝置（或桌面端）發揮作用的 UI<br>• 響應式側邊欄 / 漢堡選單<br>• 特定螢幕尺寸才顯示的動態圖表 | 語法如：`client:media="(max-width: 50em)"`。若不符合條件，JS 完全不會下載。 |
| `client:only` | **完全跳過 SSR**，僅在客戶端渲染與水合。 | **N/A (僅前端)** | • 依賴 `window` / `localStorage` 的元件<br>• 複雜的前端畫布 (Canvas / Three.js)<br>• 個人 Dashboard / 登入後頁面 | 必須指定框架名稱，例如 `client:only="react"`。在 SSR 階段只會渲染佔位符，有利於避免 Hydration Mismatch。 |

---

## 三、 補充：`client:visible` 與 `client:media` 進階參數

### `client:visible` 支援 `rootMargin`
可以為 `IntersectionObserver` 設定預先載入的距離（`rootMargin`），讓元件在接近視窗前就提早完成水合，避免使用者滾動到該處時感到延遲：
```astro
<Comments client:visible={{ rootMargin: '200px' }} />
```

### `client:only` 指定框架範例
由於 Astro 在 SSR 階段不會處理 `client:only` 元件，因此必須明確提示 Astro 該元件使用的渲染引擎：
```astro
<ReactComponent client:only="react" />
<VueComponent client:only="vue" />
<SvelteComponent client:only="svelte" />
```