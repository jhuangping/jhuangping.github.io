# Astro Directives (指令) 整理

| 指令 (Directive) | 用途與說明 | 範例 / 備註 |
| :--- | :--- | :--- |
| `class:list` | 動態或條件式結合 CSS 類別，支援字串、陣列與物件格式。 | `<div class:list={['card', { active: isActive }]} />` |
| `set:html` | 將變數中的字串作為 HTML 內容安全地插入元素中。 | `<div set:html={article.content} />` |
| `set:text` | 將內容作為純文字插入，會自動跳脫 HTML 標籤以防範 XSS。 | `<p set:text={userInput} />` |
| `define:vars` | 將伺服器端的 JavaScript 變數傳遞到 `<style>` 或 `<script>` 中使用。 | `<style define:vars={{ textColor: userColor }}>` |
| `client:*` | 控制 UI 框架元件（React、Vue 等）在客戶端的載入與水合時機。 | `client:load`, `client:visible`, `client:idle`, `client:only="react"` |
| `is:inline` | 讓 `<script>` 或 `<style>` 保持原樣輸出，不經過 Astro 的打包與最佳化。 | `<script is:inline>console.log("raw")</script>` |
| `is:global` | 將 `.astro` 中 `<style>` 標籤的預設區域化（Scoped）樣式轉為全域樣式。 | `<style is:global> body { margin: 0; }</style>` |