import{_ as b}from"./LatticeBlock-BfcNPi7u.js";import{_ as i}from"./LatticeTable-BVH2LRJ-.js";import{_}from"./LatticeGrammar-B7pfkY6z.js";import{_ as w}from"./LatticeScssCode-D274NkqP.js";import{_ as f}from"./LatticeHeadline-BswCHU26.js";import{r as t,c as g,e,a as o,A as l,s as p,b as x}from"./index-_tu4U4cc.js";const N={__name:"border-arrow",setup($){const n=t({columns:["參數","說明","預設值"],rows:[{cells:["<code>$w</code>","箭頭寬度（左右 border 寬度）","<code>25px</code>"]},{cells:["<code>$h</code>","箭頭高度（上下 border 寬度）","<code>$w</code>"]},{cells:["<code>$path</code>","箭頭方向：<code>top</code> / <code>right</code> / <code>bottom</code> / <code>left</code>","<code>top</code>"]},{cells:["<code>$cr</code>","箭頭顏色","<code>#f00</code>"]}]}),c=t({columns:["$path","產生的箭頭方向","著色的 border"],rows:[{cells:["<code>top</code>","指向上","<code>border-top-color</code>"]},{cells:["<code>right</code>","指向右","<code>border-right-color</code>"]},{cells:["<code>bottom</code>","指向下","<code>border-bottom-color</code>"]},{cells:["<code>left</code>","指向左","<code>border-left-color</code>"]}]});return(v,s)=>{const d=f,u=w,m=_,r=i,a=b;return x(),g("div",null,[e(d,{title:"border arrow",subtitle:"border"}),s[4]||(s[4]=o("p",null,[l("一個經典技巧：利用 CSS "),o("code",null,"border"),l(" 來畫出三角形箭頭，常用於：")],-1)),s[5]||(s[5]=o("ul",null,[o("li",null,"Tooltip 小箭頭"),o("li",null,"Dialog / Popover 指示箭頭"),o("li",null,"Speech bubble 尖角"),o("li",null,"UI 元件的方向指示 ")],-1)),s[6]||(s[6]=o("hr",null,null,-1)),e(a,{label:"參數說明"},{default:p(()=>[e(u,{code:"b-arrow()"}),e(m,{code:"b-arrow",var:"$w, $h, $path, $cr"}),e(r,{columns:n.value.columns,rows:n.value.rows},null,8,["columns","rows"]),s[0]||(s[0]=o("br",null,null,-1)),s[1]||(s[1]=o("h4",{class:"mb:2"},"箭頭方向說明",-1)),e(r,{columns:c.value.columns,rows:c.value.rows},null,8,["columns","rows"]),s[2]||(s[2]=o("br",null,null,-1))]),_:1}),e(a,{label:"使用範例"},{default:p(()=>[...s[3]||(s[3]=[o("pre",null,[o("code",null,[o("span",{class:"gy"},"// 向上箭頭"),l(`
`),o("span",{class:"o"},".arrow-top"),l(` {
  `),o("span",{class:"p"},"@include"),l(),o("span",{class:"b"},"b-arrow"),l("("),o("span",{class:"o"},"20px, 20px, top, #00f"),l(`);
}

`),o("span",{class:"gy"},"// 向右箭頭"),l(`
`),o("span",{class:"o"},".arrow-right"),l(` {
  `),o("span",{class:"p"},"@include"),l(),o("span",{class:"b"},"b-arrow"),l("("),o("span",{class:"o"},"15px, 15px, rigth, #333"),l(`);
}

`),o("span",{class:"gy"},"// 向下箭頭"),l(`
`),o("span",{class:"o"},".arrow-bottom"),l(` {
  `),o("span",{class:"p"},"@include"),l(),o("span",{class:"b"},"b-arrow"),l("("),o("span",{class:"o"},"10px, 10px, bottom, #000"),l(`);
}

`),o("span",{class:"gy"},"// 向左箭頭"),l(`
`),o("span",{class:"o"},".arrow-left"),l(` {
  `),o("span",{class:"p"},"@include"),l(),o("span",{class:"b"},"b-arrow"),l("("),o("span",{class:"o"},"12px, 12px, left, red"),l(`);
}`)])],-1)])]),_:1})])}}};export{N as default};
