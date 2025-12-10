import{_ as m,a as x,b as _,c,d as b}from"./TabItem-BFPeGtyP.js";import{_ as v}from"./LatticeTable-Dd4FkaPG.js";import{_ as S}from"./LatticeHeadline-QrivTIRq.js";import{r as g,c as w,e,i as $,a as l,A as s,s as o,b as k}from"./index-B507jP-v.js";const P={__name:"flex-item",setup(C){const i=g({columns:["參數","對應屬性","說明"],rows:[{cells:["<code>$b</code>","<code>flex-basis</code>","基礎尺寸（如 <code>200px</code>、<code>30%</code>）"]},{cells:["<code>$s</code>","<code>flex-shrink</code>","縮小比例（通常 0 或 1）"]},{cells:["<code>$g</code>","<code>flex-grow</code>","放大比例（通常 0 或 1）"]}]});return(T,n)=>{const f=S,r=v,a=_,t=x,u=b,p=c,d=m;return k(),w("div",null,[e(f,{title:"flex item",subtitle:"flex"}),n[12]||(n[12]=$('<p>用來快速設定 Flex 子元素的三個主要屬性：</p><ul><li><code>flex-basis</code>：基礎寬度（或高度，依方向而定）</li><li><code>flex-shrink</code>：縮小比例</li><li><code>flex-grow</code>：放大比例 </li></ul><hr><h2>參數 (Parameters)</h2><h3><code class="f:18!">fx-i($b, $s, $g)</code></h3>',5)),e(r,{columns:i.value.columns,rows:i.value.rows},null,8,["columns","rows"]),n[13]||(n[13]=l("p",{class:"tip"},[s("若參數為 null，則不輸出該屬性"),l("br"),s("讓你可以只設定需要的部分，不會污染其他屬性 ")],-1)),n[14]||(n[14]=l("br",null,null,-1)),n[15]||(n[15]=l("hr",null,null,-1)),n[16]||(n[16]=l("h2",null,"範例 (Example)",-1)),n[17]||(n[17]=l("h3",null,"設定基礎寬度",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...n[0]||(n[0]=[s("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...n[1]||(n[1]=[s("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...n[2]||(n[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"flex-item"),s("("),l("span",{class:"o"},"200px"),s(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...n[3]||(n[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  flex-basis: `),l("span",{class:"o"},"200px"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[18]||(n[18]=l("h3",null,"設定 grow / shrink",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...n[4]||(n[4]=[s("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...n[5]||(n[5]=[s("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...n[6]||(n[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"flex-item"),s("("),l("span",{class:"o"},"null, 0, 1"),s(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...n[7]||(n[7]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  flex-shrink: `),l("span",{class:"o"},"0"),s(`;
  flex-grow: `),l("span",{class:"o"},"1"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[19]||(n[19]=l("h3",null,"三個屬性一起設定",-1)),e(d,{value:"0"},{default:o(()=>[e(t,null,{default:o(()=>[e(a,{value:"0"},{default:o(()=>[...n[8]||(n[8]=[s("SCSS",-1)])]),_:1}),e(a,{value:"1"},{default:o(()=>[...n[9]||(n[9]=[s("CSS",-1)])]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(u,{value:"0"},{default:o(()=>[...n[10]||(n[10]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"fx-i"),s("("),l("span",{class:"o"},"150px, 1, 0"),s(`);
}
`)])],-1)])]),_:1}),e(u,{value:"1"},{default:o(()=>[...n[11]||(n[11]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),s(` {
  flex-basis: `),l("span",{class:"o"},"150px"),s(`;
  flex-shrink: `),l("span",{class:"o"},"1"),s(`;
  flex-grow: `),l("span",{class:"o"},"0"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{P as default};
