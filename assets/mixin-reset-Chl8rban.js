import{_ as d}from"./LatticeBlock-BfcNPi7u.js";import{_ as u}from"./LatticeTable-BVH2LRJ-.js";import{_ as m}from"./LatticeGrammar-B7pfkY6z.js";import{_}from"./LatticeScssCode-D274NkqP.js";import{_ as b}from"./LatticeHeadline-BswCHU26.js";import{r as f,c as g,e as n,i as x,a as e,s as c,b as k,A as s}from"./index-_tu4U4cc.js";const V={__name:"mixin-reset",setup(L){const o=f({columns:["$item 值","重置內容"],rows:[{cells:["<code>default</code>","清除 margin / padding"]},{cells:["<code>font</code>、<code>text</code>","重置字體大小、字重"]},{cells:["<code>list</code>、<code>ol</code>、<code>ul</code>、<code>li</code>","移除列表樣式"]},{cells:["<code>link</code>、<code>a</code>","移除連結預設樣式"]},{cells:["<code>table</code>","重置表格樣式"]},{cells:["<code>btn</code>、<code>button</code>","重置按鈕樣式"]},{cells:["<code>input</code>","重置輸入框樣式"]}]});return(v,l)=>{const a=b,i=_,p=m,r=u,t=d;return k(),g("div",null,[n(a,{title:"reset",subtitle:"reset"}),l[1]||(l[1]=x("<p>快速重置常見 <b>HTML</b> 元素的預設樣式，避免每次都手動寫 reset<br></p><p>用來重置不同類型元素的預設樣式，支援：</p><ul><li>字體 reset（font / text）</li><li>列表 reset（list / ol / ul / li）</li><li>連結 reset（link / a）</li><li>表格 reset（table）</li><li>按鈕 reset（btn / button）</li><li>輸入框 reset（input）</li><li>預設 reset（margin / padding）</li></ul><p>它讓你可以用語意化的方式重置元素，而不是每次都手寫一堆 CSS</p><hr><br>",6)),n(i,{code:["clear()","el-reset()"]}),n(p,{code:[{code:"clear",var:"$item"},{code:"el-reset",var:"$item"}]}),n(t,{label:"參數說明"},{default:c(()=>[n(r,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"])]),_:1}),l[2]||(l[2]=e("br",null,null,-1)),n(t,{label:"使用範例"},{default:c(()=>[...l[0]||(l[0]=[e("pre",null,[e("code",null,[e("span",{class:"gy"},"// 重置按鈕"),s(`
`),e("span",{class:"o"},".btn"),s(` {
  `),e("span",{class:"p"},"@include"),s(),e("span",{class:"b"},"el-reset"),s("("),e("span",{class:"o"},"btn"),s(`);
}

`),e("span",{class:"gy"},"// 重置列表"),s(`
`),e("span",{class:"o"},"ul"),s(` {
  `),e("span",{class:"p"},"@include"),s(),e("span",{class:"b"},"el-reset"),s("("),e("span",{class:"o"},"ul"),s(`);
}

`),e("span",{class:"gy"},"// 重置連結"),s(`
`),e("span",{class:"o"},"a"),s(` {
  `),e("span",{class:"p"},"@include"),s(),e("span",{class:"b"},"el-reset"),s("("),e("span",{class:"o"},"link"),s(`);
}

`),e("span",{class:"gy"},"// 重置字體"),s(`
`),e("span",{class:"o"},".title"),s(` {
  `),e("span",{class:"p"},"@include"),s(),e("span",{class:"b"},"el-reset"),s("("),e("span",{class:"o"},"font"),s(`);
}`)])],-1)])]),_:1})])}}};export{V as default};
