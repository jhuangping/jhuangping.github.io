import{_ as i}from"./LatticeBlock-BAOOrMdK.js";import{_ as f}from"./LatticeTable-DGOqCxQG.js";import{_ as m}from"./LatticeGrammar-B3OAbBSv.js";import{_ as u}from"./LatticeScssCode-BE0BRj7w.js";import{_}from"./LatticeHeadline-CG1XX9Zt.js";import{r as d,c as b,e,a as o,i as g,A as s,s as $,b as k}from"./index-DL_OigAO.js";const V={__name:"func-difference",setup(x){const l=d({columns:["參數","說明","預設"],rows:[{cells:["<code>$primaryColor</code>","主要顏色（基準色）","—"]},{cells:["<code>$background</code>","背景顏色（比較色）","—"]},{cells:["<code>$alpha</code>","透明度（0 ~ 1）","<code>1</code>"]}]});return(w,n)=>{const a=_,c=u,t=m,r=f,p=i;return k(),b("div",null,[e(a,{title:"Difference Color",subtitle:"mix blend mode"}),n[0]||(n[0]=o("p",null,"顏色差異運算",-1)),n[1]||(n[1]=o("ul",null,[o("li",null,[s("計算兩個顏色在 "),o("b",null,"紅、綠、藍通道"),s("上的差異")]),o("li",null,[s("輸出一個新的 "),o("code",null,"rgba"),s(" 顏色")]),o("li",null,"可用於 對比檢測（例如文字與背景的可讀性）、或製造特殊的視覺效果 ")],-1)),n[2]||(n[2]=o("hr",null,null,-1)),e(p,{label:"參數說明"},{default:$(()=>[e(c,{code:"difference()"}),e(t,{code:"difference",var:"$primaryColor, $background, $alpha"}),e(r,{columns:l.value.columns,rows:l.value.rows},null,8,["columns","rows"])]),_:1}),n[3]||(n[3]=g(`<br><h4 class="mb:2">使用範例</h4><pre><code><span class="gy">按鈕背景色</span>
<span class="o">.btn</span> {
  background-color: <span class="b">difference</span>(<span class="o">#ff0000, #000000</span>);
}

<span class="gy">文字顏色（帶透明度）</span>
<span class="o">.text</span> {
  color: <span class="b">difference</span>(<span class="o">#00ff00, #ffffff, 0.8</span>);
}</code></pre>`,3))])}}};export{V as default};
