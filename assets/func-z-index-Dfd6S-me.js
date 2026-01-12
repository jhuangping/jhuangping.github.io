import{_ as x,a as z,b as g,c as k,d as v}from"./TabItem-De4zdHFJ.js";import{_ as y}from"./LatticeBlock-zEcopGch.js";import{_ as $}from"./LatticeTable-Bkm-qByj.js";import{_ as w}from"./LatticeGrammar-BWz8UwkC.js";import{_ as L}from"./LatticeScssCode-DBtHHCJS.js";import{_ as S}from"./LayoutNoteLink-6tgjRpo7.js";import{_ as T}from"./LatticeHeadline--xzOewIS.js";import{r as B,c as C,e as o,a as s,A as l,s as a,b as I}from"./index-Ddb2smQe.js";const N={class:"mt:0"},D={__name:"func-z-index",setup(H){const t=B({columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","<code>$useZIndex</code> map 的 key 名稱","<code>null</code>"]}]});return(V,n)=>{const m=T,e=S,i=L,r=w,_=$,u=y,p=g,f=z,d=v,c=k,b=x;return I(),C("div",null,[o(m,{title:"z-index",subtitle:"function"}),n[20]||(n[20]=s("p",null,"集中管理所有 z-index，避免在專案裡到處寫「魔法數字」",-1)),n[21]||(n[21]=s("p",{class:"mb:0"},"功能說明",-1)),s("ul",N,[s("li",null,[n[1]||(n[1]=l("從設定檔 ",-1)),o(e,{url:"config-z-index"},{default:a(()=>[...n[0]||(n[0]=[s("code",null,"$useZIndex",-1)])]),_:1}),n[2]||(n[2]=l(" 讀取對應 key 的 z-index 值",-1))]),n[3]||(n[3]=s("li",null,[l("語意化 → 用名稱取代數字（"),s("code",null,"z(modal)"),l(" 比 "),s("code",null,"z-index: 1000"),l(" 更清楚）")],-1)),n[4]||(n[4]=s("li",null,"可維護性高 → 修改只需在設定檔更新，不必全專案搜尋替換",-1))]),n[22]||(n[22]=s("hr",null,null,-1)),o(u,{label:"參數說明"},{default:a(()=>[o(i,{code:"z()"}),o(r,{code:"z",var:"$val"}),o(_,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),n[5]||(n[5]=s("br",null,null,-1))]),_:1}),o(u,{label:"使用範例"},{default:a(()=>[n[18]||(n[18]=s("h4",{class:"mb:0"},"config.scss",-1)),s("pre",null,[s("code",null,[n[7]||(n[7]=s("span",{class:"p"},"@forward",-1)),n[8]||(n[8]=l()),n[9]||(n[9]=s("span",{class:"g"},"'LatticeCSS/config'",-1)),n[10]||(n[10]=l()),n[11]||(n[11]=s("span",{class:"b"},"with",-1)),n[12]||(n[12]=l(` (
  `,-1)),o(e,{url:"config-z-index"},{default:a(()=>[...n[6]||(n[6]=[l("$useZIndex",-1)])]),_:1}),n[13]||(n[13]=l(` (
    ...
  )
);
`,-1))])]),n[19]||(n[19]=s("h4",{class:"mb:2"},"fileScss.scss",-1)),o(b,{value:"0"},{default:a(()=>[o(f,null,{default:a(()=>[o(p,{value:"0"},{default:a(()=>[...n[14]||(n[14]=[l("SCSS",-1)])]),_:1}),o(p,{value:"1"},{default:a(()=>[...n[15]||(n[15]=[l("CSS",-1)])]),_:1})]),_:1}),o(c,null,{default:a(()=>[o(d,{value:"0"},{default:a(()=>[...n[16]||(n[16]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// Header 層級"),l(`
`),s("span",{class:"o"},".header"),l(" { z-index: "),s("span",{class:"b"},"z"),l("("),s("span",{class:"o"},"header"),l(`); }

`),s("span",{class:"gy"},"// Modal 層級"),l(`
`),s("span",{class:"o"},".modal"),l(" { z-index: "),s("span",{class:"b"},"z"),l("("),s("span",{class:"o"},"modal"),l(`); }

`),s("span",{class:"gy"},"// 未定義的 key"),l(`
`),s("span",{class:"o"},".unknown"),l(" { z-index: "),s("span",{class:"b"},"z"),l("("),s("span",{class:"o"},"abc"),l("); }")])],-1)])]),_:1}),o(d,{value:"1"},{default:a(()=>[...n[17]||(n[17]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// Header 層級"),l(`
`),s("span",{class:"o"},".header"),l(" { z-index: "),s("span",{class:"o"},"100"),l(`; }

`),s("span",{class:"gy"},"// Modal 層級"),l(`
`),s("span",{class:"o"},".modal"),l(" { z-index: "),s("span",{class:"o"},"1000"),l(`; }

`),s("span",{class:"gy"},"// 未定義的 key"),l(`
`),s("span",{class:"o"},".unknown"),l(" {  }")])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{D as default};
