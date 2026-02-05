import{_ as r}from"./LatticeBlock-DCNh2nnb.js";import{_ as m}from"./LatticeTable-Bq7YFgsE.js";import{_ as d}from"./LatticeGrammar-KatcUOyl.js";import{_}from"./LatticeScssCode-Cv2UOIE8.js";import{_ as f}from"./LatticeHeadline-CHLOaSjt.js";import{r as b,c as g,e as o,s as i,b as w,a as l,A as n}from"./index-lg5BKigg.js";const y={__name:"mixin-size",setup(x){const e=b({columns:["參數","說明","預設"],rows:[{cells:["<code>$width</code>","寬度，或傳入 <code>full</code>","-"]},{cells:["<code>$height</code>","高度，預設等於 <code>$width</code>","<code>$width</code>"]}]});return(z,s)=>{const p=f,t=_,a=d,u=m,c=r;return w(),g("div",null,[o(p,{title:"size",subtitle:"size"}),o(c,{label:"Mixin 一覽表"},{default:i(()=>[o(t,{code:"size()"}),s[0]||(s[0]=l("p",null,"常用的基礎工具，用來快速設定元素的寬度與高度，支援單參數、雙參數與 full 模式",-1)),o(a,{code:"size",var:"$width, $height"}),o(u,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=l("br",null,null,-1)),s[2]||(s[2]=l("div",{class:"tip"},[l("p",{class:"mb:0"},"設定元素寬高，並支援："),l("ul",{class:"mt:0"},[l("li",null,"單參數 → 寬高相同"),l("li",null,"雙參數 → 寬高不同"),l("li",null,[l("code",null,"full"),n(" → 寬高都變成 100% ")])])],-1)),s[3]||(s[3]=l("br",null,null,-1)),o(t,{code:"full()"}),s[4]||(s[4]=l("p",null,"寬高 100%",-1)),o(a,{code:"full",var:""}),s[5]||(s[5]=l("br",null,null,-1))]),_:1}),o(c,{label:"使用範例"},{default:i(()=>[...s[6]||(s[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".className"),n(` {
  `),l("span",{class:"gy"},"// 單參數（寬高相同）"),n(`
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"size"),n("("),l("span",{class:"o"},"200px"),n(`);

  `),l("span",{class:"gy"},"// 雙參數（寬高不同）"),n(`
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"size"),n("("),l("span",{class:"o"},"200px, 100px"),n(`);

  `),l("span",{class:"gy"},"// full 模式（寬高 100%）"),n(`
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"size"),n("("),l("span",{class:"o"},"full"),n(`);
}`)])],-1)])]),_:1})])}}};export{y as default};
