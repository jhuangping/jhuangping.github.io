import{_ as p}from"./LatticeTable-B0Naatzu.js";import{_ as c}from"./LatticeHeadline-0FdPbW1y.js";import{r,c as u,e as t,a as n,i as d,A as e,b as i}from"./index-XeVrB2dC.js";const f={__name:"mixin-text-stroke",setup(m){const o=r({columns:["參數","說明","預設值"],rows:[{cells:["<code>$w</code>","描邊寬度（px）","<code>1</code>"]},{cells:["<code>$color</code>","描邊顏色","<code>#f00</code>"]}]});return(x,s)=>{const l=c,a=p;return i(),u("div",null,[t(l,{title:"text stroke",subtitle:"text"}),s[0]||(s[0]=n("p",null,"讓文字呈現描邊效果，並支援設定描邊寬度與顏色",-1)),s[1]||(s[1]=n("hr",null,null,-1)),s[2]||(s[2]=n("h2",null,"參數說明",-1)),s[3]||(s[3]=n("h3",{class:"use-code"},[n("code",null,[e("text-stroke("),n("span",null,"$w, $color"),e(")")]),e(" "),n("code",null,[e("t-str("),n("span",null,"$w, $color"),e(") ")])],-1)),t(a,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"]),s[4]||(s[4]=d(`<br><hr><h2>使用範例</h2><pre><code><span class="gy">// 2px 黑色描邊</span>
<span class="p">@include</span> <span class="b">text-stroke</span>(<span class="o">2, #000</span>);

<span class="gy">// 3px 藍色描邊</span>
<span class="p">@include</span> <span class="b">text-stroke</span>(<span class="o">3, blue</span>);

<span class="gy">// 使用預設值（1px 紅色）</span>
<span class="p">@include</span> <span class="b">text-stroke</span>();
</code></pre><p class="tip">快速別名 <code>t-str</code> 完全等同於 <code>text-stroke</code>，只是更短、更好記</p>`,5))])}}};export{f as default};
