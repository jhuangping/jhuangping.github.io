import{_ as t}from"./LatticeTable-B0Naatzu.js";import{_ as c}from"./LatticeHeadline-0FdPbW1y.js";import{a as n}from"./func-units-CZel95qk.js";import{c as r,e as a,i as p,g as e,b as i}from"./index-XeVrB2dC.js";const b={__name:"func-units-lh",setup(h){return(m,s)=>{const l=c,o=t;return i(),r("div",null,[a(l,{title:"line height",subtitle:"Typography Units"}),s[0]||(s[0]=p(`<h1 class="use-code is:title"><code>lh()</code>  行高換算工具</h1><p>將指定的行高轉換為相對單位，方便在不同字體大小下保持一致的排版比例<br> 支援百分比 (%) 行高，會自動轉換為相對數值 </p><h4 class="mb:0">SCSS 語法</h4><pre class="mt:0"><code><span class="b">lh</span>(<span class="r">$lh, $px, $digits, $mode</span>)
</code></pre><h4>參數</h4>`,5)),a(o,{columns:e(n).columns,rows:e(n).rows},null,8,["columns","rows"]),s[1]||(s[1]=p(`<h4>範例</h4><pre><code><span class="gy">// px 行高 → 無單位</span>
<span class="r">p</span> { line-height: <span class="b">lh</span>(<span class="o">24, 16</span>); }

<span class="gy">// 百分比行高 → 無單位</span>
<span class="r">h1</span> { line-height: <span class="b">lh</span>(<span class="o">150%, 20</span>); }

<span class="gy">// 控制小數位數</span>
<span class="o">.text</span> { line-height: <span class="b">lh</span>(<span class="o">22, 16, 2, round</span>); }</code></pre>`,2))])}}};export{b as default};
