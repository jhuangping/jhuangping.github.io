import{_ as m,a as x,b as _,c,d as b}from"./TabItem-BZAe4E6a.js";import{_ as v}from"./LatticeTable-BZ-aAWxS.js";import{_ as S}from"./LatticeHeadline-vAXp6lnu.js";import{r as g,c as w,e,i as $,a as l,A as n,s as o,b as k}from"./index-CPHuEMGI.js";const P={__name:"flex-item",setup(C){const i=g({columns:["參數","對應屬性","說明"],rows:[{cells:["<code>$b</code>","<code>flex-basis</code>","基礎尺寸（如 <code>200px</code>、<code>30%</code>）"]},{cells:["<code>$s</code>","<code>flex-shrink</code>","縮小比例（通常 0 或 1）"]},{cells:["<code>$g</code>","<code>flex-grow</code>","放大比例（通常 0 或 1）"]}]});return(T,s)=>{const f=S,r=v,a=_,t=x,u=b,p=c,d=m;return k(),w("div",null,[e(f,{title:"flex item",subtitle:"flex"}),s[12]||(s[12]=$('<p>用來快速設定 Flex 子元素的三個主要屬性：</p><ul><li><code>flex-basis</code>：基礎寬度（或高度，依方向而定）</li><li><code>flex-shrink</code>：縮小比例</li><li><code>flex-grow</code>：放大比例 </li></ul><hr><h2>參數 (Parameters)</h2><h3 class="use-code"><code>fx-i(<span class="opy">$b, $s, $g</span>) </code></h3>',5)),e(r,{columns:i.value.columns,rows:i.value.rows},null,8,["columns","rows"]),s[13]||(s[13]=l("p",{class:"tip"},[n("若參數為 null，則不輸出該屬性"),l("br"),n("讓你可以只設定需要的部分，不會污染其他屬性 ")],-1)),s[14]||(s[14]=l("br",null,null,-1)),s[15]||(s[15]=l("hr",null,null,-1)),s[16]||(s[16]=l("h2",null,"範例 (Example)",-1)),s[17]||(s[17]=l("h3",null,"設定基礎寬度",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...s[0]||(s[0]=[n("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...s[1]||(s[1]=[n("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...s[2]||(s[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"flex-item"),n("("),l("span",{class:"o"},"200px"),n(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...s[3]||(s[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),n(` {
  flex-basis: `),l("span",{class:"o"},"200px"),n(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[18]||(s[18]=l("h3",null,"設定 grow / shrink",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...s[4]||(s[4]=[n("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...s[5]||(s[5]=[n("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...s[6]||(s[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"flex-item"),n("("),l("span",{class:"o"},"null, 0, 1"),n(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...s[7]||(s[7]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),n(` {
  flex-shrink: `),l("span",{class:"o"},"0"),n(`;
  flex-grow: `),l("span",{class:"o"},"1"),n(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[19]||(s[19]=l("h3",null,"三個屬性一起設定",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...s[8]||(s[8]=[n("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...s[9]||(s[9]=[n("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...s[10]||(s[10]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"fx-i"),n("("),l("span",{class:"o"},"150px, 1, 0"),n(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...s[11]||(s[11]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),n(` {
  flex-basis: `),l("span",{class:"o"},"150px"),n(`;
  flex-shrink: `),l("span",{class:"o"},"1"),n(`;
  flex-grow: `),l("span",{class:"o"},"0"),n(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{P as default};
