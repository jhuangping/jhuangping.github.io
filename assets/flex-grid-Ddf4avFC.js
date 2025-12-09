import{_,a as m,b as f,c as x,d as g}from"./TabItem-BNhLxIaC.js";import{_ as b}from"./LatticeTable-DuznFzOb.js";import{_ as w}from"./LatticeHeadline-jGaKQb2h.js";import{r as $,c as v,e as s,i as T,a as l,s as e,b as S,A as o}from"./index-DEfK6y00.js";const G={__name:"flex-grid",setup(B){const a=$({columns:["參數","說明","預設值"],rows:[{cells:["<code>$item</code>","每行項目數（自動計算寬度）","<code>auto</code>（不設定）"]},{cells:["<code>$col</code>","column gap","<code>null</code>"]},{cells:["<code>$row</code>","row gap","<code>$col</code>"]},{cells:["<code>$init</code>","是否輸出初始化樣式","<code>null</code>"]}]});return(N,n)=>{const c=w,d=b,t=f,i=m,p=g,u=x,r=_;return S(),v("div",null,[s(c,{title:"flex grid",subtitle:"flex"}),n[4]||(n[4]=T("<p>用來建立一個「簡易版的 Flex Grid 系統」，讓你可以：</p><ul><li>設定每行要放幾個項目（自動計算寬度）</li><li>設定 column gap / row gap</li><li>可選擇是否輸出初始化樣式（display + wrap） </li></ul><p>它讓你不用寫複雜的 <code>calc()</code> 或手動算間距，只要一行就能完成。 </p><hr><h2>Mixin 說明</h2><h3><code>fx-gd-init()</code></h3><p>初始化 Flex Grid,通常會直接使用 <code>fx-gd($init: true)</code> 自動輸出。 </p><hr><h3><code>fx-gd($item, $col, $row, $init)</code></h3>",9)),s(d,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),n[5]||(n[5]=l("br",null,null,-1)),n[6]||(n[6]=l("hr",null,null,-1)),n[7]||(n[7]=l("h2",null,"範例 (Example)",-1)),n[8]||(n[8]=l("h3",null,"3 欄 Grid",-1)),s(r,{value:"0"},{default:e(()=>[s(i,null,{default:e(()=>[s(t,{value:"0"},{default:e(()=>[...n[0]||(n[0]=[o("SCSS",-1)])]),_:1}),s(t,{value:"1"},{default:e(()=>[...n[1]||(n[1]=[o("CSS",-1)])]),_:1})]),_:1}),s(u,null,{default:e(()=>[s(p,{value:"0"},{default:e(()=>[...n[2]||(n[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".grid"),o(` {
  `),l("span",{class:"p"},"@include"),o(),l("span",{class:"b"},"fx-gd"),o("("),l("span",{class:"o"},"3, 20px, 20px, true"),o(`);
}
`),l("span",{class:"gy"},"--- or ---"),o(`
`),l("span",{class:"o"},".grid"),o(` {
  `),l("span",{class:"p"},"@include"),o(),l("span",{class:"b"},"fx-gd"),o("("),l("span",{class:"o"},"3, 20px, 20px, init"),o(`);
}
`)])],-1)])]),_:1}),s(p,{value:"1"},{default:e(()=>[...n[3]||(n[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".grid"),o(` {
  display: `),l("span",{class:"o"},"flex"),o(`;
  flex-wrap: `),l("span",{class:"o"},"wrap"),o(`;
  gap: `),l("span",{class:"o"},"20px 20px"),o(`;
}
`),l("span",{class:"o"},".grid > *"),o(` {
  width: `),l("span",{class:"b"},"calc"),o("("),l("span",{class:"o"},"(100% - (20px * 2)) / 3"),o(`);
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{G as default};
