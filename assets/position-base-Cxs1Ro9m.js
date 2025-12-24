import{_ as d}from"./LatticeBlock-DLnlnv5b.js";import{_ as b}from"./LatticeTable-BTl1O2MD.js";import{_ as m}from"./LatticeScssCode-DmvcEpOQ.js";import{_ as f}from"./LatticeHeadline-Bci94iqe.js";import{r as i,c as x,e,i as _,s as p,b as w,a as s,A as n}from"./index-Dhf5dUn1.js";const V={__name:"position-base",setup(z){const a=i({columns:["Mixin","定位方式","效果","常見用途"],rows:[{cells:['<code><span class="b">abs-center</span>(<span class="r">$z-index</span>)</code>',"absolute","置中","tooltip、絕對定位元件"]},{cells:['<code><span class="b">abs-full</span>(<span class="r">$z-index</span>)</code>',"absolute","鋪滿父層","背景層、遮罩"]},{cells:['<code><span class="b">fixed-center</span>(<span class="r">$z-index</span>)</code>',"fixed","置中","modal、popup、loading"]},{cells:['<code><span class="b">fixed-full</span>(<span class="r">$z-index</span>)</code>',"fixed","鋪滿視窗","overlay、全螢幕遮罩"]}]}),o=i({columns:["參數","說明","預設"],rows:[{cells:["<code>$z-index</code>","可選，設定 z-index","<code>auto</code>"]}]});return(v,l)=>{const u=f,r=m,c=b,t=d;return w(),x("div",null,[e(u,{title:"position",subtitle:"position"}),l[4]||(l[4]=_("<p>快速完成<b>「置中」</b>與<b>「鋪滿」</b>的定位需求，支援 <b>absolute</b> 與 <b>fixed</b> 兩種模式，並可選擇性設定 <b>z-index</b></p><p>Position Center / Full（絕對定位與固定定位工具）<br>這組 Mixin 提供四大功能： </p><ul><li>絕對置中（absolute center）</li><li>絕對鋪滿（absolute full）</li><li>固定置中（fixed center）</li><li>固定鋪滿（fixed full）</li></ul><p>並且每個功能都支援可選的 <code>z-index</code></p><hr>",5)),e(t,{label:"Mixin 一覽表"},{default:p(()=>[e(r,{code:["abs-center()","abs-full()","fixed-center()","fixed-full()"]}),e(c,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),l[0]||(l[0]=s("br",null,null,-1)),l[1]||(l[1]=s("h4",{class:"mb:2"},"參數說明",-1)),e(c,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"]),l[2]||(l[2]=s("br",null,null,-1))]),_:1}),e(t,{label:"使用範例"},{default:p(()=>[...l[3]||(l[3]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".className"),n(` {
  // 絕對置中
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"abs-center"),n("("),s("span",{class:"o"},"10"),n(`);

  // 絕對鋪滿
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"abs-full"),n(`();

  // 固定置中
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"fixed-center"),n("("),s("span",{class:"o"},"15"),n(`);

  // 固定鋪滿
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"fixed-full"),n("("),s("span",{class:"o"},"5"),n(`);
}`)])],-1)])]),_:1})])}}};export{V as default};
