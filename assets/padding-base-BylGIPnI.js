import{_ as f,a as x,b as _,c as b,d as y}from"./TabItem-CO9pI6XC.js";import{_ as $}from"./LatticeTable-DHY7v61C.js";import{_ as v}from"./LatticeHeadline-0vjNdYw_.js";import{r as c,c as w,e as a,a as s,A as n,s as p,b as T}from"./index-D4tG5tm4.js";const V={__name:"padding-base",setup(N){const o=c({columns:["參數","說明","預設值"],rows:[{cells:["<code>$left</code>","左側 padding","<code>auto</code>"]},{cells:["<code>$right</code>","右側 padding（預設等於 <code>$left</code>）","<code>$left</code>"]}]}),d=c({columns:["參數","說明","預設值"],rows:[{cells:["<code>$top</code>","上方 padding","<code>auto</code>"]},{cells:["<code>$bottom</code>","下方 padding（預設等於 <code>$top</code>）","<code>$top</code>"]}]});return(S,l)=>{const i=v,t=$,e=_,g=x,u=y,r=b,m=f;return T(),w("div",null,[a(i,{title:"padding",subtitle:"padding"}),l[4]||(l[4]=s("p",null,[n("設定上下或左右的 "),s("code",null,"padding"),n("，並支援單參數與雙參數的簡寫方式 ")],-1)),l[5]||(l[5]=s("hr",null,null,-1)),l[6]||(l[6]=s("h2",null,"Mixin 說明",-1)),l[7]||(l[7]=s("h3",{class:"use-code"},[s("code",null,[n("px("),s("span",{class:"opy"},"$left, $right"),n(") ")])],-1)),a(t,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"]),l[8]||(l[8]=s("p",{class:"tip"},[n("若只傳入一個值 → 左右相同"),s("br"),n(" 若傳入兩個值 → 左右分別設定 ")],-1)),l[9]||(l[9]=s("br",null,null,-1)),l[10]||(l[10]=s("h3",{class:"use-code"},[s("code",null,[n("py("),s("span",{class:"opy"},"$top, $bottom"),n(") ")])],-1)),a(t,{columns:d.value.columns,rows:d.value.rows},null,8,["columns","rows"]),l[11]||(l[11]=s("p",{class:"tip"},[n("若只傳入一個值 → 上下相同"),s("br"),n(" 若傳入兩個值 → 上下分別設定 ")],-1)),l[12]||(l[12]=s("br",null,null,-1)),l[13]||(l[13]=s("hr",null,null,-1)),l[14]||(l[14]=s("h2",null,"使用範例",-1)),a(m,{value:"0"},{default:p(()=>[a(g,null,{default:p(()=>[a(e,{value:"0"},{default:p(()=>[...l[0]||(l[0]=[n("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:p(()=>[...l[1]||(l[1]=[n("CSS",-1)])]),_:1})]),_:1}),a(r,null,{default:p(()=>[a(u,{value:"0"},{default:p(()=>[...l[2]||(l[2]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".className"),n(` {
  `),s("span",{class:"gy"},"// 左右 padding 相同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"px"),n("("),s("span",{class:"o"},"20px"),n(`);

  `),s("span",{class:"gy"},"// 左右 padding 不同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"px"),n("("),s("span",{class:"o"},"10px, 30px"),n(`);

  `),s("span",{class:"gy"},"// 上下 padding 相同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"py"),n("("),s("span",{class:"o"},"40px"),n(`);

  `),s("span",{class:"gy"},"// 上下 padding 不同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"py"),n("("),s("span",{class:"o"},"10px, 50px"),n(`);

  `),s("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"px"),n(`();
}`)])],-1)])]),_:1}),a(u,{value:"1"},{default:p(()=>[...l[3]||(l[3]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".className"),n(` {
  `),s("span",{class:"gy"},"// 左右 padding 相同"),n(`
  padding-left: `),s("span",{class:"o"},"20px"),n(`;
  padding-right: `),s("span",{class:"o"},"20px"),n(`;

  `),s("span",{class:"gy"},"// 左右 padding 不同"),n(`
  padding-left: `),s("span",{class:"o"},"10px"),n(`;
  padding-right: `),s("span",{class:"o"},"30px"),n(`;

  `),s("span",{class:"gy"},"// 上下 padding 相同"),n(`
  padding-top: `),s("span",{class:"o"},"40px"),n(`;
  padding-bottom: `),s("span",{class:"o"},"40px"),n(`;

  `),s("span",{class:"gy"},"// 上下 padding 不同"),n(`
  padding-top: `),s("span",{class:"o"},"10px"),n(`;
  padding-bottom: `),s("span",{class:"o"},"50px"),n(`;

  `),s("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),n(`
  padding-left: `),s("span",{class:"o"},"auto"),n(`;
  padding-right: `),s("span",{class:"o"},"auto"),n(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{V as default};
