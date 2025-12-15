import{_ as o}from"./LatticeTable-fVp187r_.js";import{_ as p}from"./LatticeHeadline-DbwJ8jck.js";import{r as i,c as t,e,i as a,b as d}from"./index-Dur5vxo0.js";const f={__name:"mixin-size",setup(u){const n=i({columns:["參數","說明","預設"],rows:[{cells:["<code>$width</code>","寬度，或傳入 <code>full</code>","-"]},{cells:["<code>$height</code>","高度，預設等於 <code>$width</code>","<code>$width</code>"]}]});return(r,s)=>{const l=p,c=o;return d(),t("div",null,[e(l,{title:"size",subtitle:"size"}),s[0]||(s[0]=a('<p>常用的基礎工具，用來快速設定元素的寬度與高度，支援單參數、雙參數與 full 模式</p><hr><h2>Mixin 一覽表</h2><h3 class="use-code"><code>size(<span>$width, $height</span>) </code></h3><p class="mb:0">設定元素寬高，並支援：</p><ul class="mt:0"><li>單參數 → 寬高相同</li><li>雙參數 → 寬高不同</li><li><code>full</code> → 寬高都變成 100% </li></ul>',6)),e(c,{columns:n.value.columns,rows:n.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=a(`<br><h3 class="use-code"><code>full()</code></h3><p>寬高 100%</p><br><hr><h2>使用範例</h2><pre><code><span class="o">.className</span> {
  <span class="gy">// 單參數（寬高相同）</span>
  <span class="p">@include</span> <span class="b">size</span>(<span class="o">200px</span>);

  <span class="gy">// 雙參數（寬高不同）</span>
  <span class="p">@include</span> <span class="b">size</span>(<span class="o">200px, 100px</span>);

  <span class="gy">// full 模式（寬高 100%）</span>
  <span class="p">@include</span> <span class="b">size</span>(<span class="o">full</span>);
}</code></pre>`,7))])}}};export{f as default};
