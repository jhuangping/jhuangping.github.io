import{_ as o}from"./LatticeTable-B0Naatzu.js";import{_ as l}from"./LatticeHeadline-0FdPbW1y.js";import{r as d,c as i,e as a,i as n,b as r}from"./index-XeVrB2dC.js";const _={__name:"mixin-el-display",setup(t){const e=d({columns:["參數","說明","預設值"],rows:[{cells:["<code>$switch</code>","切換元素顯示/隱藏","<code>hide</code>"]}]});return(h,s)=>{const c=l,p=o;return r(),i("div",null,[a(c,{title:"display",subtitle:"element"}),s[0]||(s[0]=n('<p>元素顯示控制工具，適合動畫、UI 狀態切換、互動元件</p><hr><h2>Mixin 說明</h2><h3 class="use-code"><code>el-hide()</code></h3><p>讓元素「不可見」且「不可點擊」</p><br><h3 class="use-code"><code>el-show()</code></h3><p>讓元素「可見」且「可點擊」</p><br><h3 class="use-code"><code>el-display(<span class="opy">$switch</span>) </code></h3><p>依照傳入的參數，自動決定要顯示或隱藏元素</p><h4>參數說明</h4>',12)),a(p,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=n(`<br><div class="tip"><code>$switch</code> : <p><b>顯示 : </b><code>show</code>、<code>1</code>、<code>true</code>、<code>yes</code>、<code>on</code></p><p class="mb:0"><b>隱藏 : </b><code>hide</code>、<code>0</code>、<code>false</code>、<code>no</code>、<code>off</code></p></div><br><hr><h2>使用範例</h2><h3>顯示元素</h3><pre><code><span class="o">.className</span> {
  <span class="p">@include</span> <span class="b">el-show</span>();
  <span class="gy">--- or ---</span>
  <span class="p">@include</span> <span class="b">el-display</span>(<span class="g">&#39;show&#39;</span>);
  <span class="gy">--- or ---</span>
  <span class="p">@include</span> <span class="b">el-display</span>(<span class="o">1</span>);
}
</code></pre><h3>隱藏元素</h3><pre><code><span class="o">.className</span> {
  <span class="p">@include</span> <span class="b">el-hide</span>();
  <span class="gy">--- or ---</span>
  <span class="p">@include</span> <span class="b">el-display</span>(<span class="g">&#39;hide&#39;</span>);
  <span class="gy">--- or ---</span>
  <span class="p">@include</span> <span class="b">el-display</span>(<span class="o">0</span>);
}</code></pre>`,9))])}}};export{_ as default};
