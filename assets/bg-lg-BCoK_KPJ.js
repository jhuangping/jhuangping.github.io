import{_,a as f,b as m,c as b,d as v,e as T,f as k}from"./LatticeHeadline-Bqg6cnjd.js";import{r as x,c as S,e as a,a as n,A as s,s as o,b as y}from"./index-DLKXIvMG.js";const P={__name:"bg-lg",setup($){const u=["Parameter Name","Type","Default value","Description"],p=x([{cells:["<code>$setting</code>","<code>String</code>","<code>&apos;45deg, #f00, #00f&apos;</code>","漸層設定，格式為 <code>&apos;角度, 顏色1, 顏色2,...&apos;</code>"]}]);return(w,l)=>{const r=_,d=f,e=v,c=b,t=k,g=T,i=m;return y(),S("div",null,[a(r,{title:"bg-lg",subtitle:"background"}),l[4]||(l[4]=n("p",null,[s("用來快速設定 線性漸層背景，只需要傳入角度與顏色組合，就能生成對應的 "),n("code",null,"background: linear-gradient(...)"),s("。 ")],-1)),l[5]||(l[5]=n("hr",null,null,-1)),l[6]||(l[6]=n("h2",null,"參數 (Parameters)",-1)),a(d,{columns:u,rows:p.value},null,8,["rows"]),l[7]||(l[7]=n("p",null,[n("code",null,"bg-lg($setting)")],-1)),l[8]||(l[8]=n("br",null,null,-1)),l[9]||(l[9]=n("hr",null,null,-1)),l[10]||(l[10]=n("h2",null,"範例 (Example)",-1)),a(i,{value:"0"},{default:o(()=>[a(c,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[0]||(l[0]=[s("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[1]||(l[1]=[s("CSS",-1)])]),_:1})]),_:1}),a(g,null,{default:o(()=>[a(t,{value:"0"},{default:o(()=>[...l[2]||(l[2]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 基本使用"),s(`
`),n("span",{class:"o"},".box"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-lg"),s("("),n("span",{class:"g"},"'90deg, #ff0, #0ff'"),s(`);
}

`),n("span",{class:"gy"},"// 使用預設值"),s(`
`),n("span",{class:"o"},".card"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-lg"),s(`();
}
`)])],-1)])]),_:1}),a(t,{value:"1"},{default:o(()=>[...l[3]||(l[3]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 基本使用"),s(`
`),n("span",{class:"o"},".box"),s(` {
  background: `),n("span",{class:"o"},"linear-gradient(90deg, #ff0, #0ff)"),s(`;
}

`),n("span",{class:"gy"},"// 使用預設值"),s(`
`),n("span",{class:"o"},".card"),s(` {
  background: `),n("span",{class:"o"},"linear-gradient(45deg, #f00, #00f)"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{P as default};
