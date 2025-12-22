import{_ as b}from"./LatticeTable-B0Naatzu.js";import{_ as w}from"./LatticeHeadline-0FdPbW1y.js";import{f as r,t as d,l as t,a as h,v as c,p as i,h as m}from"./func-units-CZel95qk.js";import{c as $,e as n,i as l,a as e,g as a,A as o,b as g}from"./index-XeVrB2dC.js";const U={__name:"func-units",setup(v){return(S,s)=>{const u=w,p=b;return g(),$("div",null,[n(u,{title:"units",subtitle:"units"}),s[0]||(s[0]=l(`<p>用於 單位轉換、精度控制、比例計算 的 SCSS 工具函式</p><p class="mb:0">這些函式可協助你在 RWD、排版、視窗單位、比例運算等場景中，保持一致、可控、可維護的數值邏輯<br> 所有函式皆支援:</p><ul class="mt:0"><li>自訂小數位數</li><li>精度模式（floor / ceil / round）</li><li>自動處理 auto</li><li>與設定檔（config map）整合</li></ul><hr><h2>Function 一覽</h2><h2>精度控制（Decimal Precision）</h2><h3 class="use-code is:title"><code>fd()</code>  Fix Decimal</h3><p>控制數字的小數精度，可選擇捨去、進位或四捨五入</p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">fd</span>(<span class="r">$number, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,11)),n(p,{columns:a(r).columns,rows:a(r).rows},null,8,["columns","rows"]),s[1]||(s[1]=l(`<h4>範例</h4><div><pre><code><span class="b">fd</span>(<span class="o">3.14159, 2</span>); <span class="gy">// 3.14</span>
<span class="b">fd</span>(<span class="o">3.14159, 2, ceil</span>); <span class="gy">// 3.15</span>
</code></pre></div><br><hr><h2>字體單位轉換（Typography Units）</h2><br><h3 class="use-code is:title"><code>rem()</code>  px → rem</h3><p>將 px 轉換為 rem，支援精度控制</p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">rem</span>(<span class="r">$val, $fz, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,11)),n(p,{columns:a(d).columns,rows:a(d).rows},null,8,["columns","rows"]),s[2]||(s[2]=l(`<h4>範例</h4><pre><code><span class="b">rem</span>(<span class="o">32</span>); <span class="gy">// 2rem</span>
<span class="b">rem</span>(<span class="o">20, 10</span>); <span class="gy">// 2rem</span>
<span class="b">rem</span>(<span class="o">auto</span>); <span class="gy">// auto</span>
</code></pre><br><h3 class="use-code is:title"><code>em()</code>  px → em</h3><p>與 <code>rem()</code> 相同，但轉換為 em </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">em</span>(<span class="r">$val, $fz, $digits, $mode</span>)
</code></pre><h4>範例</h4><pre><code><span class="b">em</span>(<span class="o">24</span>); <span class="gy">// 1.5em</span>
<span class="b">em</span>(<span class="o">20, 10</span>); <span class="gy">// 2em</span>
</code></pre><br><h3 class="use-code is:title"><code>ls()</code>  字距換算工具</h3><p>對應設計工具的字距邏輯的字距換算工具，能讓設計稿與前端呈現保持一致<br> 這個函式能自動完成計算，並支援 em 或 px 輸出 </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">ls</span>(<span class="r">$ls, $font, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,15)),n(p,{columns:a(t).columns,rows:a(t).rows},null,8,["columns","rows"]),s[3]||(s[3]=l(`<h4>範例</h4><pre><code><span class="gy">// 設計稿字距 50</span>
<span class="o">.title</span> { letter-spacing: <span class="b">ls</span>(<span class="o">50, 16</span>); }

<span class="gy">// 保留 2 位小數</span>
<span class="o">.text</span> { letter-spacing: <span class="b">ls</span>(<span class="o">20, 14, 2, round</span>); }
</code></pre><br><h3 class="use-code is:title"><code>lh()</code>  行高換算工具</h3><p>將指定的行高轉換為相對單位，方便在不同字體大小下保持一致的排版比例<br> 支援百分比 (%) 行高，會自動轉換為相對數值 </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">lh</span>(<span class="r">$lh, $px, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,8)),n(p,{columns:a(h).columns,rows:a(h).rows},null,8,["columns","rows"]),s[4]||(s[4]=l(`<h4>範例</h4><pre><code><span class="gy">// px 行高 → 無單位</span>
<span class="r">p</span> { line-height: <span class="b">lh</span>(<span class="o">24, 16</span>); }

<span class="gy">// 百分比行高 → 無單位</span>
<span class="r">h1</span> { line-height: <span class="b">lh</span>(<span class="o">150%, 20</span>); }

<span class="gy">// 控制小數位數</span>
<span class="o">.text</span> { line-height: <span class="b">lh</span>(<span class="o">22, 16, 2, round</span>); }
</code></pre><br><hr><h2>視窗單位轉換（Viewport Units）</h2><h3 class="use-code is:title"><code>vw()</code>  px → vw</h3><p>依據視窗寬度（ <code>$win</code> : 預設 1920）轉換為 vw。 </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">vw</span>(<span class="r">$val, $win, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,10)),n(p,{columns:a(c).vw.columns,rows:a(c).vw.rows},null,8,["columns","rows"]),s[5]||(s[5]=l(`<br><h3 class="use-code is:title"><code>dvw()</code>  px → dvw</h3><p>使用動態 viewport width（避免瀏覽器 UI 影響）。</p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">dvw</span>(<span class="r">$val, $win, $digits, $mode</span>)
</code></pre><h4>範例</h4><pre><code><span class="b">vw</span>(<span class="o">192</span>); <span class="gy">// 10vw</span>
<span class="b">dvw</span>(<span class="o">192</span>); <span class="gy">// 10dvw</span>
<span class="b">vw</span>(<span class="o">100, 1440</span>); <span class="gy">// 6.94vw</span>
</code></pre><br><h3 class="use-code is:title"><code>vh()</code>  px → vh</h3><p>依據視窗高度（ <code>$h</code> 預設 1080）轉換為 vh </p><h4>參數</h4>`,11)),n(p,{columns:a(c).vh.columns,rows:a(c).vh.rows},null,8,["columns","rows"]),s[6]||(s[6]=l(`<h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">vh</span>(<span class="r">$val, $h, $digits, $mode</span>)
</code></pre><br><h3 class="use-code is:title"><code>dvh()</code>  px → dvh</h3><p>動態 viewport height 版本</p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">dvh</span>(<span class="r">$val, $h, $digits, $mode</span>)
</code></pre><h4>範例</h4><pre><code><span class="b">vh</span>(<span class="o">108</span>); <span class="gy">// 10vh</span>
<span class="b">dvh</span>(<span class="o">108</span>); <span class="gy">// 10dvh</span>
</code></pre><br><hr><h2>百分比轉換（Percentage Units）</h2><h3 class="use-code is:title"><code>pa()</code>  px → %</h3><p>將 px 轉換為百分比（ <code>$D</code> 預設 1920），基準值(分母)可自訂 </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">pa</span>(<span class="r">$val, $D, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,17)),n(p,{columns:a(i).columns,rows:a(i).rows},null,8,["columns","rows"]),s[7]||(s[7]=l(`<h4>範例</h4><pre><code><span class="b">pa</span>(<span class="o">960</span>); <span class="gy">// 50%</span>
<span class="b">pa</span>(<span class="o">100, 375</span>); <span class="gy">// 26.67%</span>
</code></pre><br><hr><h2>幾何運算（Geometry Utilities）</h2><h3 class="use-code is:title"><code>hypotenuse()</code>  計算斜邊長度</h3><p>計算直角三角形的斜邊長度(使用勾股定理)，並支援小數精度控制</p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">hypotenuse</span>(<span class="r">$a, $b, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,10)),n(p,{columns:a(m).columns,rows:a(m).rows},null,8,["columns","rows"]),s[8]||(s[8]=e("h4",null,"範例",-1)),s[9]||(s[9]=e("pre",null,[e("code",null,[e("span",{class:"b"},"hypotenuse"),o("("),e("span",{class:"o"},"3, 4"),o(`);
`),e("span",{class:"b"},"hypotenuse"),o("("),e("span",{class:"o"},"10, 10, 2, round"),o(");")])],-1))])}}};export{U as default};
