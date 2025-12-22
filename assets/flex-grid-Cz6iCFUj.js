import{_,a as m,b as f,c as x,d as g}from"./TabItem-BAQxWGe5.js";import{_ as b}from"./LatticeTable-B0Naatzu.js";import{_ as w}from"./LatticeHeadline-0FdPbW1y.js";import{r as $,c as v,e as o,i as T,a as l,s as e,b as S,A as s}from"./index-XeVrB2dC.js";const G={__name:"flex-grid",setup(y){const a=$({columns:["參數","說明","預設值"],rows:[{cells:["<code>$item</code>","每行項目數（自動計算寬度）","<code>auto</code>（不設定）"]},{cells:["<code>$col</code>","column gap","<code>null</code>"]},{cells:["<code>$row</code>","row gap","<code>$col</code>"]},{cells:["<code>$init</code>","是否輸出初始化樣式","<code>null</code>"]}]});return(B,n)=>{const c=w,d=b,p=f,u=m,t=g,i=x,r=_;return S(),v("div",null,[o(c,{title:"flex grid",subtitle:"flex"}),n[4]||(n[4]=T('<p>用來建立一個「簡易版的 Flex Grid 系統」，讓你可以：</p><ul><li>設定每行要放幾個項目（自動計算寬度）</li><li>設定 column gap / row gap</li><li>可選擇是否初始化樣式（display + wrap） </li></ul><p>它讓你不用寫複雜的 <code>calc()</code> 或手動算間距，只要一行就能完成 </p><hr><h2>Mixin 說明</h2><h3 class="use-code"><code>fx-gd-init()</code></h3><p>初始化 Flex Grid,通常會直接使用 <code>fx-gd($init: true)</code> 自動輸出 </p><br><h3 class="use-code"><code>fx-gd(<span class="opy">$item, $col, $row, $init</span>) </code></h3>',9)),o(d,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),n[5]||(n[5]=l("br",null,null,-1)),n[6]||(n[6]=l("hr",null,null,-1)),n[7]||(n[7]=l("h2",null,"範例 (Example)",-1)),n[8]||(n[8]=l("h3",null,"3 欄 Grid",-1)),o(r,{value:"0"},{default:e(()=>[o(u,null,{default:e(()=>[o(p,{value:"0"},{default:e(()=>[...n[0]||(n[0]=[s("SCSS",-1)])]),_:1}),o(p,{value:"1"},{default:e(()=>[...n[1]||(n[1]=[s("CSS",-1)])]),_:1})]),_:1}),o(i,null,{default:e(()=>[o(t,{value:"0"},{default:e(()=>[...n[2]||(n[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".grid"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"fx-gd"),s("("),l("span",{class:"o"},"3, 20px, 20px, true"),s(`);
}
`),l("span",{class:"gy"},"--- or ---"),s(`
`),l("span",{class:"o"},".grid"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"fx-gd"),s("("),l("span",{class:"o"},"3, 20px, 20px, init"),s(`);
}
`)])],-1)])]),_:1}),o(t,{value:"1"},{default:e(()=>[...n[3]||(n[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".grid"),s(` {
  display: `),l("span",{class:"o"},"flex"),s(`;
  flex-wrap: `),l("span",{class:"o"},"wrap"),s(`;
  gap: `),l("span",{class:"o"},"20px 20px"),s(`;
}
`),l("span",{class:"o"},".grid > *"),s(` {
  width: `),l("span",{class:"b"},"calc"),s("("),l("span",{class:"o"},"(100% - (20px * 2)) / 3"),s(`);
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{G as default};
