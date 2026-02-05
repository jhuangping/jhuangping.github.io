import{_ as c}from"./LayoutNoteLink-CmRAxMYZ.js";import{_ as d}from"./LatticeBlock-DCNh2nnb.js";import{_ as w}from"./LatticeTable-Bq7YFgsE.js";import{_}from"./LatticeGrammar-KatcUOyl.js";import{_ as f}from"./LatticeScssCode-Cv2UOIE8.js";import{_ as b}from"./LatticeHeadline-CHLOaSjt.js";import{r as x,c as g,e as l,a as s,s as p,b as $,A as o}from"./index-lg5BKigg.js";const T={__name:"mixin-wp",setup(L){const t=x({columns:["參數","說明","type","預設"],rows:[{cells:["<code>$w</code>","最大寬度 (px)，預設為 <code>$wrapBaseWidth</code>","<code>Number</code>","<code>1024</code>"]},{cells:["<code>$both</code>"," 左右邊距 (px)，預設為 <code>$wrapBoth</code>","<code>Number</code>","<code>15</code>"]}]});return(B,n)=>{const e=b,r=f,u=_,i=w,a=d,m=c;return $(),g("div",null,[l(e,{title:"wrap",subtitle:"mixin"}),n[12]||(n[12]=s("p",{class:"mb:0"},"寬度自適應工具，用來幫容器設定一個智慧寬度公式，確保在不同螢幕大小下，內容區塊的寬度保持合理，不會太窄或太寬",-1)),n[13]||(n[13]=s("ul",null,[s("li",null,"幫主要容器（例如 .l-wrap）設定寬度"),s("li",null,"自動計算 最小寬度 / 動態寬度 / 最大寬度"),s("li",null,"適合用在版心 (wrapper)、主要內容區塊、Section 容器")],-1)),n[14]||(n[14]=s("hr",null,null,-1)),l(a,{label:"參數說明"},{default:p(()=>[l(r,{code:"wp()"}),l(u,{code:"wp",var:"$w, $both"}),l(i,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),n[0]||(n[0]=s("br",null,null,-1))]),_:1}),l(a,{label:"使用範例"},{default:p(()=>[n[9]||(n[9]=s("h4",{class:"mb:0"},"config.scss",-1)),s("pre",null,[s("code",null,[n[2]||(n[2]=s("span",{class:"p"},"@forward",-1)),n[3]||(n[3]=o()),n[4]||(n[4]=s("span",{class:"g"},"'LatticeCSS/config'",-1)),n[5]||(n[5]=o()),n[6]||(n[6]=s("span",{class:"b"},"with",-1)),n[7]||(n[7]=o(` (
  `,-1)),l(m,{url:"config-wrap"},{default:p(()=>[...n[1]||(n[1]=[o("wrap config ...",-1)])]),_:1}),n[8]||(n[8]=o(` (
    ...
  )
);
`,-1))])]),n[10]||(n[10]=s("h4",{class:"mb:0"},"fileScss.scss",-1)),n[11]||(n[11]=s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 預設最大寬度 1024px，左右邊距 15px"),o(`
`),s("span",{class:"o"},".l-wp"),o(` {
  `),s("span",{class:"p"},"@include"),o(),s("span",{class:"b"},"wp"),o(`();
}

`),s("span",{class:"gy"},"// 最大寬度 1680px，左右邊距 15px"),o(`
`),s("span",{class:"o"},".l-wp-1680"),o(` {
  `),s("span",{class:"p"},"@include"),o(),s("span",{class:"b"},"wp"),o("("),s("span",{class:"o"},"1680"),o(`);
}

`),s("span",{class:"gy"},"// 最大寬度 1440px，左右邊距 30px"),o(`
`),s("span",{class:"o"},".l-wp-1440"),o(` {
  `),s("span",{class:"p"},"@include"),o(),s("span",{class:"b"},"wp"),o("("),s("span",{class:"o"},"1440"),o(", "),s("span",{class:"o"},"30"),o(`);
}`)])],-1))]),_:1})])}}};export{T as default};
