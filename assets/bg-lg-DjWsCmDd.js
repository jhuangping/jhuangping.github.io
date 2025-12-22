import{_ as m,a as _,b as f,c as b,d as k}from"./TabItem-BAQxWGe5.js";import{_ as v}from"./LatticeTable-B0Naatzu.js";import{_ as T}from"./LatticeHeadline-0FdPbW1y.js";import{r as x,c as y,e as a,a as n,A as l,s as o,b as S}from"./index-XeVrB2dC.js";const L={__name:"bg-lg",setup($){const u=["Parameter Name","Type","Default value","Description"],p=x([{cells:["<code>$setting</code>","<code>String</code>","<code>&apos;45deg, #f00, #00f&apos;</code>","漸層設定，格式為 <code>&apos;角度, 顏色1, 顏色2,...&apos;</code>"]}]);return(w,s)=>{const r=T,d=v,e=f,c=_,t=k,i=b,g=m;return S(),y("div",null,[a(r,{title:"background linear-gradient",subtitle:"background"}),s[4]||(s[4]=n("p",null,[l("用來快速設定 線性漸層背景，只需要傳入角度與顏色組合，就能生成對應的 "),n("code",null,"background: linear-gradient(...)")],-1)),s[5]||(s[5]=n("hr",null,null,-1)),s[6]||(s[6]=n("h2",null,"參數 (Parameters)",-1)),s[7]||(s[7]=n("h3",{class:"use-code"},[n("code",null,[l("bg-lg("),n("span",{class:"opy"},"$setting"),l(") ")])],-1)),a(d,{columns:u,rows:p.value},null,8,["rows"]),s[8]||(s[8]=n("br",null,null,-1)),s[9]||(s[9]=n("hr",null,null,-1)),s[10]||(s[10]=n("h2",null,"範例 (Example)",-1)),a(g,{value:"0"},{default:o(()=>[a(c,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...s[0]||(s[0]=[l("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...s[1]||(s[1]=[l("CSS",-1)])]),_:1})]),_:1}),a(i,null,{default:o(()=>[a(t,{value:"0"},{default:o(()=>[...s[2]||(s[2]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 基本使用"),l(`
`),n("span",{class:"o"},".box"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"bg-lg"),l("("),n("span",{class:"g"},"'90deg, #ff0, #0ff'"),l(`);
}

`),n("span",{class:"gy"},"// 使用預設值"),l(`
`),n("span",{class:"o"},".card"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"bg-lg"),l(`();
}
`)])],-1)])]),_:1}),a(t,{value:"1"},{default:o(()=>[...s[3]||(s[3]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 基本使用"),l(`
`),n("span",{class:"o"},".box"),l(` {
  background: `),n("span",{class:"o"},"linear-gradient(90deg, #ff0, #0ff)"),l(`;
}

`),n("span",{class:"gy"},"// 使用預設值"),l(`
`),n("span",{class:"o"},".card"),l(` {
  background: `),n("span",{class:"o"},"linear-gradient(45deg, #f00, #00f)"),l(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{L as default};
