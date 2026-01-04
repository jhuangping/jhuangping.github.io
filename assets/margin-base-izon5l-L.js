import{_ as x,a as $,b as y,c as v,d as w}from"./TabItem-mXcBkgmD.js";import{_ as T}from"./LatticeBlock-BH36mF_z.js";import{_ as L}from"./LatticeTable-CQw4cBv4.js";import{_ as S}from"./LatticeGrammar-Cd3yeHcz.js";import{_ as B}from"./LatticeScssCode-D1xrZD_7.js";import{_ as N}from"./LatticeHeadline-DbmhXlwD.js";import{r as _,c as k,e as o,a as n,A as s,s as l,b as C}from"./index-CY5MHss3.js";const q={__name:"margin-base",setup(V){const t=_({columns:["參數","說明","預設值"],rows:[{cells:["<code>$left</code>","左側 margin","<code>auto</code>"]},{cells:["<code>$right</code>","右側 margin（預設等於 <code>$left</code>）","<code>$left</code>"]}]}),e=_({columns:["參數","說明","預設值"],rows:[{cells:["<code>$top</code>","上方 margin","<code>auto</code>"]},{cells:["<code>$bottom</code>","下方 margin（預設等於 <code>$top</code>）","<code>$top</code>"]}]});return(P,a)=>{const d=N,p=B,c=S,m=L,r=T,u=y,g=$,i=w,f=v,b=x;return C(),k("div",null,[o(d,{title:"margin",subtitle:"margin"}),a[8]||(a[8]=n("p",null,[s("設定上下或左右的 "),n("code",null,"margin"),s("，並支援單參數與雙參數的簡寫方式 ")],-1)),a[9]||(a[9]=n("hr",null,null,-1)),o(r,{label:"Mixin 說明"},{default:l(()=>[o(p,{code:"mx()"}),o(c,{code:"mx",var:"$left, $right"}),o(m,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),a[0]||(a[0]=n("p",{class:"tip"},[s("若只傳入一個值 → 左右相同"),n("br"),s(" 若傳入兩個值 → 左右分別設定 ")],-1)),a[1]||(a[1]=n("br",null,null,-1)),o(p,{code:"my()"}),o(c,{code:"my",var:"$top, $bottom"}),o(m,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),a[2]||(a[2]=n("p",{class:"tip"},[s("若只傳入一個值 → 上下相同"),n("br"),s(" 若傳入兩個值 → 上下分別設定 ")],-1)),a[3]||(a[3]=n("br",null,null,-1))]),_:1}),o(r,{label:"使用範例"},{default:l(()=>[o(b,{value:"0"},{default:l(()=>[o(g,null,{default:l(()=>[o(u,{value:"0"},{default:l(()=>[...a[4]||(a[4]=[s("SCSS",-1)])]),_:1}),o(u,{value:"1"},{default:l(()=>[...a[5]||(a[5]=[s("CSS",-1)])]),_:1})]),_:1}),o(f,null,{default:l(()=>[o(i,{value:"0"},{default:l(()=>[...a[6]||(a[6]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".className"),s(` {
  `),n("span",{class:"gy"},"// 左右 margin 相同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"mx"),s("("),n("span",{class:"o"},"20px"),s(`);

  `),n("span",{class:"gy"},"// 左右 margin 不同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"mx"),s("("),n("span",{class:"o"},"10px, 30px"),s(`);

  `),n("span",{class:"gy"},"// 上下 margin 相同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"my"),s("("),n("span",{class:"o"},"40px"),s(`);

  `),n("span",{class:"gy"},"// 上下 margin 不同"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"my"),s("("),n("span",{class:"o"},"10px, 50px"),s(`);

  `),n("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),s(`
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"mx"),s(`();
}`)])],-1)])]),_:1}),o(i,{value:"1"},{default:l(()=>[...a[7]||(a[7]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".className"),s(` {
  `),n("span",{class:"gy"},"// 左右 margin 相同"),s(`
  margin-left: `),n("span",{class:"o"},"20px"),s(`;
  margin-right: `),n("span",{class:"o"},"20px"),s(`;

  `),n("span",{class:"gy"},"// 左右 margin 不同"),s(`
  margin-left: `),n("span",{class:"o"},"10px"),s(`;
  margin-right: `),n("span",{class:"o"},"30px"),s(`;

  `),n("span",{class:"gy"},"// 上下 margin 相同"),s(`
  margin-top: `),n("span",{class:"o"},"40px"),s(`;
  margin-bottom: `),n("span",{class:"o"},"40px"),s(`;

  `),n("span",{class:"gy"},"// 上下 margin 不同"),s(`
  margin-top: `),n("span",{class:"o"},"10px"),s(`;
  margin-bottom: `),n("span",{class:"o"},"50px"),s(`;

  `),n("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),s(`
  margin-left: `),n("span",{class:"o"},"auto"),s(`;
  margin-right: `),n("span",{class:"o"},"auto"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{q as default};
