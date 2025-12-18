import{_ as t}from"./LatticeTable-BZ-aAWxS.js";import{_ as u}from"./LatticeHeadline-vAXp6lnu.js";import{r as o,c as d,e as n,i as p,a as c,b as r}from"./index-CPHuEMGI.js";const w={__name:"position-base",setup(b){const e=o({columns:["Mixin","定位方式","效果","常見用途"],rows:[{cells:['<code>abs-center(<span class="opy">$z-index</span>)</code>',"absolute","置中","tooltip、絕對定位元件"]},{cells:['<code>abs-full(<span class="opy">$z-index</span>)</code>',"absolute","鋪滿父層","背景層、遮罩"]},{cells:['<code>fixed-center(<span class="opy">$z-index</span>)</code>',"fixed","置中","modal、popup、loading"]},{cells:['<code>fixed-full(<span class="opy">$z-index</span>)</code>',"fixed","鋪滿視窗","overlay、全螢幕遮罩"]}]}),l=o({columns:["參數","說明","預設"],rows:[{cells:["<code>$z-index</code>","可選，設定 z-index","<code>auto</code>"]}]});return(m,s)=>{const i=u,a=t;return r(),d("div",null,[n(i,{title:"position",subtitle:"position"}),s[0]||(s[0]=p("<p>快速完成<b>「置中」</b>與<b>「鋪滿」</b>的定位需求，支援 <b>absolute</b> 與 <b>fixed</b> 兩種模式，並可選擇性設定 <b>z-index</b></p><p>Position Center / Full（絕對定位與固定定位工具）<br>這組 Mixin 提供四大功能： </p><ul><li>絕對置中（absolute center）</li><li>絕對鋪滿（absolute full）</li><li>固定置中（fixed center）</li><li>固定鋪滿（fixed full）</li></ul><p>並且每個功能都支援可選的 <code>z-index</code></p><hr><h2>Mixin 一覽表</h2>",6)),n(a,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=c("br",null,null,-1)),s[2]||(s[2]=c("h3",{class:"mb:0"},"參數說明",-1)),n(a,{columns:l.value.columns,rows:l.value.rows},null,8,["columns","rows"]),s[3]||(s[3]=p(`<br><h2>使用範例</h2><pre><code><span class="o">.className</span> {
  // 絕對置中
  <span class="p">@include</span> <span class="b">abs-center</span>(<span class="o">10</span>);

  // 絕對鋪滿
  <span class="p">@include</span> <span class="b">abs-full</span>();

  // 固定置中
  <span class="p">@include</span> <span class="b">fixed-center</span>(<span class="o">15</span>);

  // 固定鋪滿
  <span class="p">@include</span> <span class="b">fixed-full</span>(<span class="o">5</span>);
}</code></pre>`,3))])}}};export{w as default};
