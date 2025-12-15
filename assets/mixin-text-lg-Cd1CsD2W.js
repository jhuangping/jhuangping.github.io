import{_ as c}from"./LatticeTable-fVp187r_.js";import{_ as l}from"./LatticeHeadline-DbwJ8jck.js";import{r as o,c as r,e,i as a,b as d}from"./index-Dur5vxo0.js";const f={__name:"mixin-text-lg",setup(i){const n=o({columns:["參數","Type","說明","預設值"],rows:[{cells:["<code>$setting</code>","<code>String</code>","linear-gradient 的設定字串","<code>'45deg, #f00, #00f'</code>"]}]});return(g,s)=>{const t=l,p=c;return d(),r("div",null,[e(t,{title:"text linear gradient",subtitle:"text"}),s[0]||(s[0]=a('<p>用來為文字套上 <b>linear-gradient</b> 漸層效果 </p><hr><h2>參數</h2><h3 class="use-code"><code>text-lg(<span>$setting</span>)</code> <code>t-lg(<span>$setting</span>) </code></h3>',4)),e(p,{columns:n.value.columns,rows:n.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=a(`<br><hr><h2>使用範例</h2><pre><code><span class="o">.title</span> {
  <span class="gy">// 基本使用</span>
  <span class="p">@include</span> <span class="b">text-lg</span>(<span class="g">&#39;90deg, #ff0000, #00ff00&#39;</span>);

  <span class="gy">// 使用方向語法</span>
  <span class="p">@include</span> <span class="b">text-lg</span>(<span class="g">&#39;to right, red, blue&#39;</span>);

  <span class="gy">// 使用預設值（45deg 紅 → 藍）</span>
  <span class="p">@include</span> <span class="b">text-lg</span>();
}
</code></pre><p class="tip">快速別名 <code>t-lg</code> 完全等同於 <code>text-lg</code>，只是更短、更好記</p>`,5))])}}};export{f as default};
