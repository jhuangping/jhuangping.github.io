import{_ as x,a as $,b as y,c as v,d as w}from"./TabItem-Cg7dXzuL.js";import{_ as T}from"./LatticeBlock-DCNh2nnb.js";import{_ as L}from"./LatticeTable-Bq7YFgsE.js";import{_ as S}from"./LatticeGrammar-KatcUOyl.js";import{_ as B}from"./LatticeScssCode-Cv2UOIE8.js";import{_ as N}from"./LatticeHeadline-CHLOaSjt.js";import{r as m,c as k,e as o,a as n,A as s,s as l,b as C}from"./index-lg5BKigg.js";const q={__name:"padding-base",setup(V){const p=m({columns:["參數","說明","預設值"],rows:[{cells:["<code>$left</code>","左側 padding","<code>auto</code>"]},{cells:["<code>$right</code>","右側 padding（預設等於 <code>$left</code>）","<code>$left</code>"]}]}),t=m({columns:["參數","說明","預設值"],rows:[{cells:["<code>$top</code>","上方 padding","<code>auto</code>"]},{cells:["<code>$bottom</code>","下方 padding（預設等於 <code>$top</code>）","<code>$top</code>"]}]});return(P,a)=>{const r=N,e=B,d=S,c=L,u=T,i=y,g=$,_=w,f=v,b=x;return C(),k("div",null,[o(r,{title:"padding",subtitle:"padding"}),a[8]||(a[8]=n("p",null,[s("設定上下或左右的 "),n("code",null,"padding"),s("，並支援單參數與雙參數的簡寫方式 ")],-1)),a[9]||(a[9]=n("hr",null,null,-1)),o(u,{label:"Mixin 說明"},{default:l(()=>[o(e,{code:"px()"}),o(d,{code:"px",var:"$left, $right"}),o(c,{columns:p.value.columns,rows:p.value.rows},null,8,["columns","rows"]),a[0]||(a[0]=n("p",{class:"tip"},[s("若只傳入一個值 → 左右相同"),n("br"),s(" 若傳入兩個值 → 左右分別設定 ")],-1)),a[1]||(a[1]=n("br",null,null,-1)),o(e,{code:"py()"}),o(d,{code:"py",var:"$top, $bottom"}),o(c,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),a[2]||(a[2]=n("p",{class:"tip"},[s("若只傳入一個值 → 上下相同"),n("br"),s(" 若傳入兩個值 → 上下分別設定 ")],-1)),a[3]||(a[3]=n("br",null,null,-1))]),_:1}),o(u,{label:"使用範例"},{default:l(()=>[o(b,{value:"0"},{default:l(()=>[o(g,null,{default:l(()=>[o(i,{value:"0"},{default:l(()=>[...a[4]||(a[4]=[s("SCSS",-1)])]),_:1}),o(i,{value:"1"},{default:l(()=>[...a[5]||(a[5]=[s("CSS",-1)])]),_:1})]),_:1}),o(f,null,{default:l(()=>[o(_,{value:"0"},{default:l(()=>[...a[6]||(a[6]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".className"),s(` {
  `),n("span",{class:"gy"},"// 左右 padding 相同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"px"),s("("),n("span",{class:"o"},"20px"),s(`);

  `),n("span",{class:"gy"},"// 左右 padding 不同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"px"),s("("),n("span",{class:"o"},"10px, 30px"),s(`);

  `),n("span",{class:"gy"},"// 上下 padding 相同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"py"),s("("),n("span",{class:"o"},"40px"),s(`);

  `),n("span",{class:"gy"},"// 上下 padding 不同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"py"),s("("),n("span",{class:"o"},"10px, 50px"),s(`);

  `),n("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"px"),s(`();
}`)])],-1)])]),_:1}),o(_,{value:"1"},{default:l(()=>[...a[7]||(a[7]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".className"),s(` {
  `),n("span",{class:"gy"},"// 左右 padding 相同"),s(`
  padding-left: `),n("span",{class:"o"},"20px"),s(`;
  padding-right: `),n("span",{class:"o"},"20px"),s(`;

  `),n("span",{class:"gy"},"// 左右 padding 不同"),s(`
  padding-left: `),n("span",{class:"o"},"10px"),s(`;
  padding-right: `),n("span",{class:"o"},"30px"),s(`;

  `),n("span",{class:"gy"},"// 上下 padding 相同"),s(`
  padding-top: `),n("span",{class:"o"},"40px"),s(`;
  padding-bottom: `),n("span",{class:"o"},"40px"),s(`;

  `),n("span",{class:"gy"},"// 上下 padding 不同"),s(`
  padding-top: `),n("span",{class:"o"},"10px"),s(`;
  padding-bottom: `),n("span",{class:"o"},"50px"),s(`;

  `),n("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),s(`
  padding-left: `),n("span",{class:"o"},"auto"),s(`;
  padding-right: `),n("span",{class:"o"},"auto"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{q as default};
