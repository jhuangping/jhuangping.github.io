import{_ as x,a as g,b,c as $,d as w}from"./TabItem-mXcBkgmD.js";import{_ as v}from"./LatticeBlock-BH36mF_z.js";import{_ as T}from"./LatticeTable-CQw4cBv4.js";import{_ as L}from"./LatticeGrammar-Cd3yeHcz.js";import{_ as S}from"./LatticeScssCode-D1xrZD_7.js";import{_ as B}from"./LatticeHeadline-DbmhXlwD.js";import{r as k,c as C,e as s,a as l,A as o,s as a,b as G}from"./index-CY5MHss3.js";const I={__name:"flex-grid",setup(y){const e=k({columns:["參數","說明","預設值"],rows:[{cells:["<code>$item</code>","每行項目數（自動計算寬度）","<code>auto</code>（不設定）"]},{cells:["<code>$col</code>","column gap","<code>null</code>"]},{cells:["<code>$row</code>","row gap","<code>$col</code>"]},{cells:["<code>$init</code>","是否輸出初始化樣式","<code>null</code>"]}]});return(N,n)=>{const c=B,t=S,p=L,r=T,u=v,i=b,m=g,d=w,_=$,f=x;return G(),C("div",null,[s(c,{title:"flex grid",subtitle:"flex"}),n[8]||(n[8]=l("p",null,"用來建立一個「簡易版的 Flex Grid 系統」，讓你可以：",-1)),n[9]||(n[9]=l("ul",null,[l("li",null,"設定每行要放幾個項目（自動計算寬度）"),l("li",null,"設定 column gap / row gap"),l("li",null,"可選擇是否初始化樣式（display + wrap） ")],-1)),n[10]||(n[10]=l("p",null,[o("它讓你不用寫複雜的 "),l("code",null,"calc()"),o(" 或手動算間距，只要一行就能完成 ")],-1)),n[11]||(n[11]=l("hr",null,null,-1)),s(u,{label:"Mixin 說明"},{default:a(()=>[s(t,{code:"fx-gd-init()"}),n[0]||(n[0]=l("p",null,"初始化 Flex Grid ",-1)),s(p,{code:"fx-gd-init",var:""}),n[1]||(n[1]=l("p",{class:"tip"},[o("通常會直接使用 "),l("code",null,"fx-gd($init: true)"),o(" 自動輸出 ")],-1)),n[2]||(n[2]=l("br",null,null,-1)),s(t,{code:"fx-gd()"}),s(p,{code:"fx-gd",var:"$item, $col, $row, $init"}),s(r,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"])]),_:1}),n[12]||(n[12]=l("br",null,null,-1)),s(u,{label:"範例 (Example)"},{default:a(()=>[n[7]||(n[7]=l("h4",null,"3 欄 Grid",-1)),s(f,{value:"0"},{default:a(()=>[s(m,null,{default:a(()=>[s(i,{value:"0"},{default:a(()=>[...n[3]||(n[3]=[o("SCSS",-1)])]),_:1}),s(i,{value:"1"},{default:a(()=>[...n[4]||(n[4]=[o("CSS",-1)])]),_:1})]),_:1}),s(_,null,{default:a(()=>[s(d,{value:"0"},{default:a(()=>[...n[5]||(n[5]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".grid"),o(` {
  `),l("span",{class:"p"},"@include"),o(),l("span",{class:"b"},"fx-gd"),o("("),l("span",{class:"o"},"3, 20px, 20px, true"),o(`);
}
`),l("span",{class:"gy"},"--- or ---"),o(`
`),l("span",{class:"o"},".grid"),o(` {
  `),l("span",{class:"p"},"@include"),o(),l("span",{class:"b"},"fx-gd"),o("("),l("span",{class:"o"},"3, 20px, 20px, init"),o(`);
}
`)])],-1)])]),_:1}),s(d,{value:"1"},{default:a(()=>[...n[6]||(n[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".grid"),o(` {
  display: `),l("span",{class:"o"},"flex"),o(`;
  flex-wrap: `),l("span",{class:"o"},"wrap"),o(`;
  gap: `),l("span",{class:"o"},"20px 20px"),o(`;
}
`),l("span",{class:"o"},".grid > *"),o(` {
  width: `),l("span",{class:"b"},"calc"),o("("),l("span",{class:"o"},"(100% - (20px * 2)) / 3"),o(`);
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{I as default};
