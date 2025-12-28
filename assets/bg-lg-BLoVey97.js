import{_ as b,a as k,b as v,c as T,d as x}from"./TabItem-DVruqs2u.js";import{_ as S}from"./LatticeBlock-CUTZpv0x.js";import{_ as $}from"./LatticeTable-BlpplT7t.js";import{_ as L}from"./LatticeGrammar-C35fjvlw.js";import{_ as y}from"./LatticeScssCode-BG3glMV4.js";import{_ as B}from"./LatticeHeadline-CuMDeEiL.js";import{r as w,c as C,e as o,a as n,A as a,s as e,b as N}from"./index-CRgGQZIT.js";const q={__name:"bg-lg",setup(P){const p=["Parameter Name","Type","Default value","Description"],_=w([{cells:["<code>$setting</code>","<code>String</code>","<code>&apos;45deg, #f00, #00f&apos;</code>","漸層設定，格式為 <code>&apos;角度, 顏色1, 顏色2,...&apos;</code>"]}]);return(V,s)=>{const r=B,u=y,d=L,m=$,l=S,t=v,i=k,c=x,g=T,f=b;return N(),C("div",null,[o(r,{title:"background linear-gradient",subtitle:"background"}),s[4]||(s[4]=n("p",null,[a("用來快速設定 線性漸層背景，只需要傳入角度與顏色組合，就能生成對應的 "),n("code",null,"background: linear-gradient(...)")],-1)),s[5]||(s[5]=n("hr",null,null,-1)),o(l,{label:"參數 (Parameters)"},{default:e(()=>[o(u,{code:"bg-lg()"}),o(d,{code:"bg-lg",var:"$setting"}),o(m,{columns:p,rows:_.value},null,8,["rows"])]),_:1}),s[6]||(s[6]=n("br",null,null,-1)),o(l,{label:"範例 (Example)"},{default:e(()=>[o(f,{value:"0"},{default:e(()=>[o(i,null,{default:e(()=>[o(t,{value:"0"},{default:e(()=>[...s[0]||(s[0]=[a("SCSS",-1)])]),_:1}),o(t,{value:"1"},{default:e(()=>[...s[1]||(s[1]=[a("CSS",-1)])]),_:1})]),_:1}),o(g,null,{default:e(()=>[o(c,{value:"0"},{default:e(()=>[...s[2]||(s[2]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 基本使用"),a(`
`),n("span",{class:"o"},".box"),a(` {
  `),n("span",{class:"p"},"@include"),a(),n("span",{class:"b"},"bg-lg"),a("("),n("span",{class:"g"},"'90deg, #ff0, #0ff'"),a(`);
}

`),n("span",{class:"gy"},"// 使用預設值"),a(`
`),n("span",{class:"o"},".card"),a(` {
  `),n("span",{class:"p"},"@include"),a(),n("span",{class:"b"},"bg-lg"),a(`();
}
`)])],-1)])]),_:1}),o(c,{value:"1"},{default:e(()=>[...s[3]||(s[3]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 基本使用"),a(`
`),n("span",{class:"o"},".box"),a(` {
  background: `),n("span",{class:"o"},"linear-gradient(90deg, #ff0, #0ff)"),a(`;
}

`),n("span",{class:"gy"},"// 使用預設值"),a(`
`),n("span",{class:"o"},".card"),a(` {
  background: `),n("span",{class:"o"},"linear-gradient(45deg, #f00, #00f)"),a(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{q as default};
