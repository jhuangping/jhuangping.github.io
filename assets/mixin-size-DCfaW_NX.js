import{_ as p}from"./LatticeTable-BGUG83MF.js";import{_ as t}from"./LatticeHeadline-B3-Tszyf.js";import{r as c,c as i,e,a as l,i as u,A as d,b as r}from"./index-CTHYSNjc.js";const z={__name:"mixin-size",setup(m){const n=c({columns:["參數","說明","預設"],rows:[{cells:["<code>$width</code>","寬度，或傳入 <code>full</code>","-"]},{cells:["<code>$height</code>","高度，預設等於 <code>$width</code>","<code>$width</code>"]}]});return(f,s)=>{const a=t,o=p;return r(),i("div",null,[e(a,{title:"size",subtitle:"size"}),s[0]||(s[0]=l("p",null,"常用的基礎工具，用來快速設定元素的寬度與高度，支援單參數、雙參數與 full 模式",-1)),s[1]||(s[1]=l("hr",null,null,-1)),s[2]||(s[2]=l("h2",null,"Mixin 一覽表",-1)),s[3]||(s[3]=l("h3",{class:"use-code"},[l("code",null,"size($width, $height)")],-1)),s[4]||(s[4]=l("p",{class:"mb:0"},"設定元素寬高，並支援：",-1)),s[5]||(s[5]=l("ul",{class:"mt:0"},[l("li",null,"單參數 → 寬高相同"),l("li",null,"雙參數 → 寬高不同"),l("li",null,[l("code",null,"full"),d(" → 寬高都變成 100% ")])],-1)),e(o,{columns:n.value.columns,rows:n.value.rows},null,8,["columns","rows"]),s[6]||(s[6]=u(`<br><h3 class="use-code"><code>full()</code></h3><p>寬高 100%</p><br><hr><h2>使用範例</h2><pre><code><span class="o">.className</span> {
  <span class="gy">// 單參數（寬高相同）</span>
  <span class="p">@include</span> <span class="b">size</span>(<span class="o">200px</span>);

  <span class="gy">// 雙參數（寬高不同）</span>
  <span class="p">@include</span> <span class="b">size</span>(<span class="o">200px, 100px</span>);

  <span class="gy">// full 模式（寬高 100%）</span>
  <span class="p">@include</span> <span class="b">size</span>(<span class="o">full</span>);
}</code></pre>`,7))])}}};export{z as default};
