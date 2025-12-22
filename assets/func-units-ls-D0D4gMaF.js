import{_ as l}from"./LatticeTable-B0Naatzu.js";import{_ as c}from"./LatticeHeadline-0FdPbW1y.js";import{l as n}from"./func-units-CZel95qk.js";import{c as r,e as a,i as e,g as t,b as i}from"./index-XeVrB2dC.js";const b={__name:"func-units-ls",setup(m){return(u,s)=>{const o=c,p=l;return i(),r("div",null,[a(o,{title:"letter spacing",subtitle:"Typography Units"}),s[0]||(s[0]=e(`<h1 class="use-code is:title"><code>ls()</code>  字距換算工具</h1><p>對應設計工具的字距邏輯的字距換算工具，能讓設計稿與前端呈現保持一致<br> 這個函式能自動完成計算，並支援 em 或 px 輸出 </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">ls</span>(<span class="r">$ls, $font, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,5)),a(p,{columns:t(n).columns,rows:t(n).rows},null,8,["columns","rows"]),s[1]||(s[1]=e(`<h4>範例</h4><pre><code><span class="gy">// 設計稿字距 50</span>
<span class="o">.title</span> { letter-spacing: <span class="b">ls</span>(<span class="o">50, 16</span>); }

<span class="gy">// 保留 2 位小數</span>
<span class="o">.text</span> { letter-spacing: <span class="b">ls</span>(<span class="o">20, 14, 2, round</span>); }</code></pre>`,2))])}}};export{b as default};
