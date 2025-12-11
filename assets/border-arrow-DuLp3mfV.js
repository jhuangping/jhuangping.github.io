import{_ as d}from"./LatticeTable-BGUG83MF.js";import{_ as t}from"./LatticeHeadline-B3-Tszyf.js";import{r as a,c as u,e as s,i as l,a as r,b}from"./index-CTHYSNjc.js";const h={__name:"border-arrow",setup(i){const e=a({columns:["參數","說明","預設值"],rows:[{cells:["<code>$w</code>","箭頭寬度（左右 border 寬度）","<code>25px</code>"]},{cells:["<code>$h</code>","箭頭高度（上下 border 寬度）","<code>$w</code>"]},{cells:["<code>$path</code>","箭頭方向：<code>top</code> / <code>right</code> / <code>bottom</code> / <code>left</code>","<code>top</code>"]},{cells:["<code>$cr</code>","箭頭顏色","<code>#f00</code>"]}]}),c=a({columns:["$path","產生的箭頭方向","著色的 border"],rows:[{cells:["<code>top</code>","指向上","<code>border-top-color</code>"]},{cells:["<code>right</code>","指向右","<code>border-right-color</code>"]},{cells:["<code>bottom</code>","指向下","<code>border-bottom-color</code>"]},{cells:["<code>left</code>","指向左","<code>border-left-color</code>"]}]});return(m,o)=>{const p=t,n=d;return b(),u("div",null,[s(p,{title:"border arrow",subtitle:"border"}),o[0]||(o[0]=l('<p>一個經典技巧：利用 CSS <code>border</code> 來畫出三角形箭頭，常用於：</p><ul><li>Tooltip 小箭頭</li><li>Dialog / Popover 指示箭頭</li><li>Speech bubble 尖角</li><li>UI 元件的方向指示 </li></ul><hr><h2>參數說明</h2><h3><code class="f:18!">b-arrow($w, $h, $path, $cr)</code></h3>',5)),s(n,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),o[1]||(o[1]=r("br",null,null,-1)),o[2]||(o[2]=r("h3",null,"箭頭方向說明",-1)),s(n,{columns:c.value.columns,rows:c.value.rows},null,8,["columns","rows"]),o[3]||(o[3]=l(`<br><hr><h2>使用範例</h2><pre><code><span class="gy">// 向上箭頭</span>
<span class="o">.arrow-top</span> {
  <span class="p">@include</span> <span class="b">b-arrow</span>(<span class="o">20px, 20px, top, #00f</span>);
}

<span class="gy">// 向右箭頭</span>
<span class="o">.arrow-right</span> {
  <span class="p">@include</span> <span class="b">b-arrow</span>(<span class="o">15px, 15px, rigth, #333</span>);
}

<span class="gy">// 向下箭頭</span>
<span class="o">.arrow-bottom</span> {
  <span class="p">@include</span> <span class="b">b-arrow</span>(<span class="o">10px, 10px, bottom, #000</span>);
}

<span class="gy">// 向左箭頭</span>
<span class="o">.arrow-left</span> {
  <span class="p">@include</span> <span class="b">b-arrow</span>(<span class="o">12px, 12px, left, red</span>);
}</code></pre>`,4))])}}};export{h as default};
