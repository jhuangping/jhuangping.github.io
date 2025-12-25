import{_ as x,a as b,b as v,c as S,d as g}from"./TabItem-CHbyCqO8.js";import{_ as w}from"./LatticeBlock-Dz9ap4dQ.js";import{_ as $}from"./LatticeTable-klrjXbh2.js";import{_ as k}from"./LatticeGrammar-CW4Bx5kC.js";import{_ as C}from"./LatticeScssCode-C19MdmRh.js";import{_ as T}from"./LatticeHeadline-K7MKTOjw.js";import{r as L,c as B,e,a as l,A as s,s as o,b as N}from"./index-BNrrEEM2.js";const q={__name:"flex-item",setup(P){const i=L({columns:["參數","對應屬性","說明"],rows:[{cells:["<code>$b</code>","<code>flex-basis</code>","基礎尺寸（如 <code>200px</code>、<code>30%</code>）"]},{cells:["<code>$s</code>","<code>flex-shrink</code>","縮小比例（通常 0 或 1）"]},{cells:["<code>$g</code>","<code>flex-grow</code>","放大比例（通常 0 或 1）"]}]});return(V,n)=>{const m=T,r=C,_=k,c=$,f=w,a=v,t=b,u=g,p=S,d=x;return N(),B("div",null,[e(m,{title:"flex item",subtitle:"flex"}),n[16]||(n[16]=l("p",null,"用來快速設定 Flex 子元素的三個主要屬性：",-1)),n[17]||(n[17]=l("ul",null,[l("li",null,[l("code",null,"flex-basis"),s("：基礎寬度（或高度，依方向而定）")]),l("li",null,[l("code",null,"flex-shrink"),s("：縮小比例")]),l("li",null,[l("code",null,"flex-grow"),s("：放大比例 ")])],-1)),n[18]||(n[18]=l("hr",null,null,-1)),e(f,{label:"參數 (Parameters)"},{default:o(()=>[e(r,{code:"fx-i()"}),e(_,{code:"fx-i",var:"$b, $s, $g"}),e(c,{columns:i.value.columns,rows:i.value.rows},null,8,["columns","rows"]),n[0]||(n[0]=l("p",{class:"tip"},[s("若參數為 null，則不輸出該屬性"),l("br"),s("讓你可以只設定需要的部分，不會污染其他屬性 ")],-1))]),_:1}),n[19]||(n[19]=l("br",null,null,-1)),e(f,{label:"範例 (Example)"},{default:o(()=>[n[13]||(n[13]=l("h4",null,"設定基礎寬度",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...n[1]||(n[1]=[s("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...n[2]||(n[2]=[s("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...n[3]||(n[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"flex-item"),s("("),l("span",{class:"o"},"200px"),s(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...n[4]||(n[4]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  flex-basis: `),l("span",{class:"o"},"200px"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[14]||(n[14]=l("h4",null,"設定 grow / shrink",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...n[5]||(n[5]=[s("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...n[6]||(n[6]=[s("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...n[7]||(n[7]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"flex-item"),s("("),l("span",{class:"o"},"null, 0, 1"),s(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...n[8]||(n[8]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  flex-shrink: `),l("span",{class:"o"},"0"),s(`;
  flex-grow: `),l("span",{class:"o"},"1"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[15]||(n[15]=l("h4",null,"三個屬性一起設定",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...n[9]||(n[9]=[s("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...n[10]||(n[10]=[s("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...n[11]||(n[11]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"fx-i"),s("("),l("span",{class:"o"},"150px, 1, 0"),s(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...n[12]||(n[12]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  flex-basis: `),l("span",{class:"o"},"150px"),s(`;
  flex-shrink: `),l("span",{class:"o"},"1"),s(`;
  flex-grow: `),l("span",{class:"o"},"0"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{q as default};
