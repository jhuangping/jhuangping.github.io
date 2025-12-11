import{_ as o}from"./LatticeTable-BGUG83MF.js";import{_ as t}from"./LatticeHeadline-B3-Tszyf.js";import{r as p,c as i,e as n,i as l,b as d}from"./index-CTHYSNjc.js";const f={__name:"mixin-reset",setup(r){const e=p({columns:["$item 值","重置內容"],rows:[{cells:["<code>default</code>","清除 margin / padding"]},{cells:["<code>font</code>、<code>text</code>","重置字體大小、字重"]},{cells:["<code>list</code>、<code>ol</code>、<code>ul</code>、<code>li</code>","移除列表樣式"]},{cells:["<code>link</code>、<code>a</code>","移除連結預設樣式"]},{cells:["<code>table</code>","重置表格樣式"]},{cells:["<code>btn</code>、<code>button</code>","重置按鈕樣式"]},{cells:["<code>input</code>","重置輸入框樣式"]}]});return(u,s)=>{const a=t,c=o;return d(),i("div",null,[n(a,{title:"reset",subtitle:"reset"}),s[0]||(s[0]=l('<p>快速重置常見 <b>HTML</b> 元素的預設樣式，避免每次都手動寫 reset<br></p><p>用來重置不同類型元素的預設樣式，支援：</p><ul><li>字體 reset（font / text）</li><li>列表 reset（list / ol / ul / li）</li><li>連結 reset（link / a）</li><li>表格 reset（table）</li><li>按鈕 reset（btn / button）</li><li>輸入框 reset（input）</li><li>預設 reset（margin / padding）</li></ul><p>它讓你可以用語意化的方式重置元素，而不是每次都手寫一堆 CSS</p><hr><h2>參數說明</h2><h3 class="use-code"><code>clear($item)</code> <code>el-reset($item)</code></h3>',7)),n(c,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=l(`<br><hr><h2>使用範例</h2><pre><code><span class="gy">// 重置按鈕</span>
<span class="o">.btn</span> {
  <span class="p">@include</span> <span class="b">el-reset</span>(<span class="o">btn</span>);
}

<span class="gy">// 重置列表</span>
<span class="o">ul</span> {
  <span class="p">@include</span> <span class="b">el-reset</span>(<span class="o">ul</span>);
}

<span class="gy">// 重置連結</span>
<span class="o">a</span> {
  <span class="p">@include</span> <span class="b">el-reset</span>(<span class="o">link</span>);
}

<span class="gy">// 重置字體</span>
<span class="o">.title</span> {
  <span class="p">@include</span> <span class="b">el-reset</span>(<span class="o">font</span>);
}</code></pre>`,4))])}}};export{f as default};
