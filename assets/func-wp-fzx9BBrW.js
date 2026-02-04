import{_ as c}from"./LayoutNoteLink-Bq_vFBhQ.js";import{_ as d}from"./LatticeBlock-84aYVsHv.js";import{_ as w}from"./LatticeTable-BiE0n4NR.js";import{_}from"./LatticeGrammar-Cf0PxrB8.js";import{_ as f}from"./LatticeScssCode-DGDOmNHn.js";import{_ as b}from"./LatticeHeadline-CGlEl7vO.js";import{r as g,c as x,e as l,a as n,s as p,b as $,A as o}from"./index-CWOuoNZf.js";const T={__name:"func-wp",setup(L){const t=g({columns:["參數","說明","type","預設"],rows:[{cells:["<code>$w</code>","最大寬度 (px)，預設為 <code>$wrapBaseWidth</code>","<code>Number</code>","<code>1024</code>"]},{cells:["<code>$both</code>"," 左右邊距 (px)，預設為 <code>$wrapBoth</code>","<code>Number</code>","<code>15</code>"]}]});return(B,s)=>{const e=b,r=f,u=_,i=w,a=d,m=c;return $(),x("div",null,[l(e,{title:"Wrap",subtitle:"function"}),s[11]||(s[11]=n("p",{class:"mb:0"},"寬度自適應工具，用來產生隨著螢幕大小自動調整的容器寬度，確保內容區塊在不同裝置下保持合理的寬度，不會太窄或太寬",-1)),s[12]||(s[12]=n("ul",null,[n("li",null,"建立一個 智慧寬度計算公式，讓容器在不同螢幕下自動調整"),n("li",null,"在小螢幕不會太窄，在大螢幕不會太寬，中間則隨螢幕寬度平滑調整"),n("li",null,"主要用於：網站主要容器 .l-wrap、Section、Card 列表等")],-1)),s[13]||(s[13]=n("hr",null,null,-1)),l(a,{label:"參數說明"},{default:p(()=>[l(r,{code:"wp()"}),l(u,{code:"wp",var:"$w, $both"}),l(i,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),s[0]||(s[0]=n("br",null,null,-1))]),_:1}),l(a,{label:"使用範例"},{default:p(()=>[s[9]||(s[9]=n("h4",{class:"mb:0"},"config.scss",-1)),n("pre",null,[n("code",null,[s[2]||(s[2]=n("span",{class:"p"},"@forward",-1)),s[3]||(s[3]=o()),s[4]||(s[4]=n("span",{class:"g"},"'LatticeCSS/config'",-1)),s[5]||(s[5]=o()),s[6]||(s[6]=n("span",{class:"b"},"with",-1)),s[7]||(s[7]=o(` (
  `,-1)),l(m,{url:"config-wrap"},{default:p(()=>[...s[1]||(s[1]=[o("wrap config ...",-1)])]),_:1}),s[8]||(s[8]=o(` (
    ...
  )
);
`,-1))])]),s[10]||(s[10]=n("h4",{class:"mb:0"},[o("fileScss.scss"),n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 預設最大寬度 1024px，左右邊距 15px"),o(`
`),n("span",{class:"o"},".l-wrap"),o(" { width: "),n("span",{class:"b"},"wp"),o(`(); }

`),n("span",{class:"gy"},"// 最大寬度 1680px，左右邊距 15px"),o(`
`),n("span",{class:"o"},".l-wrap-1680"),o(" { width: "),n("span",{class:"b"},"wp"),o("("),n("span",{class:"o"},"1680"),o(`); }

`),n("span",{class:"gy"},"// 最大寬度 1440px，左右邊距 30px"),o(`
`),n("span",{class:"o"},".l-wrap-1440"),o(" { width: "),n("span",{class:"b"},"wp"),o("("),n("span",{class:"o"},"1440"),o(", "),n("span",{class:"o"},"30"),o("); }")])])],-1))]),_:1})])}}};export{T as default};
