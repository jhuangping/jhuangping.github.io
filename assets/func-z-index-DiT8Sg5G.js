import{_ as g,a as b,b as x,c as z,d as k}from"./TabItem-DojJw6c7.js";import{_ as v}from"./LatticeBlock-DLnlnv5b.js";import{_ as w}from"./LatticeTable-BTl1O2MD.js";import{_ as y}from"./LatticeGrammar-BKwVFBa9.js";import{_ as S}from"./LatticeScssCode-DmvcEpOQ.js";import{_ as $}from"./LatticeHeadline-Bci94iqe.js";import{r as L,c as T,e as l,i as B,s as o,b as C,a as s,A as n}from"./index-Dhf5dUn1.js";const G={__name:"func-z-index",setup(I){const e=L({columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","<code>$useZIndex</code> map 的 key 名稱","<code>null</code>"]}]});return(N,a)=>{const d=$,u=S,m=y,_=w,c=v,p=x,i=b,t=k,r=z,f=g;return C(),T("div",null,[l(d,{title:"z-index",subtitle:"function"}),a[8]||(a[8]=B('<p>集中管理所有 z-index，避免在專案裡到處寫「魔法數字」</p><p class="mb:0">功能說明</p><ul class="mt:0"><li>從設定檔 <code>$useZIndex</code> 讀取對應 key 的 z-index 值</li><li>語意化 → 用名稱取代數字（<code>z(modal)</code> 比 <code>z-index: 1000</code> 更清楚）</li><li>可維護性高 → 修改只需在設定檔更新，不必全專案搜尋替換</li></ul><hr>',4)),l(c,{label:"參數說明"},{default:o(()=>[l(u,{code:"z()"}),l(m,{code:"z",var:"$val"}),l(_,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),a[0]||(a[0]=s("br",null,null,-1))]),_:1}),l(c,{label:"使用範例"},{default:o(()=>[a[5]||(a[5]=s("h4",{class:"mb:0"},"config.scss",-1)),a[6]||(a[6]=s("pre",null,[s("code",null,[s("span",{class:"p"},"@forward"),n(),s("span",{class:"g"},"'LatticeCSS/config'"),n(),s("span",{class:"b"},"with"),n(` (
  `),s("span",{class:"r"},"$useZIndex"),n(`: (
    `),s("span",{class:"g"},"'header'"),n(": "),s("span",{class:"o"},"100"),n(`,
    `),s("span",{class:"g"},"'modal'"),n(": "),s("span",{class:"o"},"1000"),n(`,
    `),s("span",{class:"g"},"'tag'"),n(": "),s("span",{class:"o"},"9997"),n(`,
    `),s("span",{class:"g"},"'menu'"),n(": "),s("span",{class:"o"},"9999"),n(`,
    `),s("span",{class:"g"},"'menu:mask'"),n(": "),s("span",{class:"o"},"9999"),n(`,
    `),s("span",{class:"g"},"'global:cookie'"),n(": "),s("span",{class:"o"},"10001"),n(`,
    `),s("span",{class:"g"},"'el:info'"),n(": "),s("span",{class:"o"},"1"),n(`,
    `),s("span",{class:"g"},"'menu:dropdown'"),n(": "),s("span",{class:"o"},"-1"),n(`,
    ...
  )
);
`)])],-1)),a[7]||(a[7]=s("h4",{class:"mb:2"},"fileScss.scss",-1)),l(f,{value:"0"},{default:o(()=>[l(i,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[1]||(a[1]=[n("SCSS",-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[2]||(a[2]=[n("CSS",-1)])]),_:1})]),_:1}),l(r,null,{default:o(()=>[l(t,{value:"0"},{default:o(()=>[...a[3]||(a[3]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// Header 層級"),n(`
`),s("span",{class:"o"},".header"),n(" { z-index: "),s("span",{class:"b"},"z"),n("("),s("span",{class:"o"},"header"),n(`); }

`),s("span",{class:"gy"},"// Modal 層級"),n(`
`),s("span",{class:"o"},".modal"),n(" { z-index: "),s("span",{class:"b"},"z"),n("("),s("span",{class:"o"},"modal"),n(`); }

`),s("span",{class:"gy"},"// 未定義的 key"),n(`
`),s("span",{class:"o"},".unknown"),n(" { z-index: "),s("span",{class:"b"},"z"),n("("),s("span",{class:"o"},"abc"),n("); }")])],-1)])]),_:1}),l(t,{value:"1"},{default:o(()=>[...a[4]||(a[4]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// Header 層級"),n(`
`),s("span",{class:"o"},".header"),n(" { z-index: "),s("span",{class:"o"},"100"),n(`; }

`),s("span",{class:"gy"},"// Modal 層級"),n(`
`),s("span",{class:"o"},".modal"),n(" { z-index: "),s("span",{class:"o"},"1000"),n(`; }

`),s("span",{class:"gy"},"// 未定義的 key"),n(`
`),s("span",{class:"o"},".unknown"),n(" {  }")])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{G as default};
