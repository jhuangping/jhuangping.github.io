import{_ as f,a as x,b as _,c as b,d as $}from"./TabItem-BFPeGtyP.js";import{_ as y}from"./LatticeTable-Dd4FkaPG.js";import{_ as v}from"./LatticeHeadline-QrivTIRq.js";import{r,c as w,e as a,a as n,A as s,s as o,b as T}from"./index-B507jP-v.js";const V={__name:"margin-base",setup(S){const p=r({columns:["參數","說明","預設值"],rows:[{cells:["<code>$left</code>","左側 margin","<code>auto</code>"]},{cells:["<code>$right</code>","右側 margin（預設等於 <code>$left</code>）","<code>$left</code>"]}]}),t=r({columns:["參數","說明","預設值"],rows:[{cells:["<code>$top</code>","上方 margin","<code>auto</code>"]},{cells:["<code>$bottom</code>","下方 margin（預設等於 <code>$top</code>）","<code>$top</code>"]}]});return(B,l)=>{const c=v,e=y,m=_,i=x,u=$,d=b,g=f;return T(),w("div",null,[a(c,{title:"margin",subtitle:"margin"}),l[4]||(l[4]=n("p",null,[s("設定上下或左右的 "),n("code",null,"margin"),s("，並支援單參數與雙參數的簡寫方式 ")],-1)),l[5]||(l[5]=n("hr",null,null,-1)),l[6]||(l[6]=n("h2",null,"Mixin 說明",-1)),l[7]||(l[7]=n("h3",{class:"use-code"},[n("code",null,"mx($left, $right)")],-1)),a(e,{columns:p.value.columns,rows:p.value.rows},null,8,["columns","rows"]),l[8]||(l[8]=n("p",{class:"tip"},[s("若只傳入一個值 → 左右相同"),n("br"),s(" 若傳入兩個值 → 左右分別設定 ")],-1)),l[9]||(l[9]=n("br",null,null,-1)),l[10]||(l[10]=n("h3",{class:"use-code"},[n("code",null,"my($top, $bottom)")],-1)),a(e,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),l[11]||(l[11]=n("p",{class:"tip"},[s("若只傳入一個值 → 上下相同"),n("br"),s(" 若傳入兩個值 → 上下分別設定 ")],-1)),l[12]||(l[12]=n("br",null,null,-1)),l[13]||(l[13]=n("hr",null,null,-1)),l[14]||(l[14]=n("h2",null,"使用範例",-1)),a(g,{value:"0"},{default:o(()=>[a(i,null,{default:o(()=>[a(m,{value:"0"},{default:o(()=>[...l[0]||(l[0]=[s("SCSS",-1)])]),_:1}),a(m,{value:"1"},{default:o(()=>[...l[1]||(l[1]=[s("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:o(()=>[a(u,{value:"0"},{default:o(()=>[...l[2]||(l[2]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 左右 margin 相同"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"mx"),s("("),n("span",{class:"o"},"20px"),s(`);

`),n("span",{class:"gy"},"// 左右 margin 不同"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"mx"),s("("),n("span",{class:"o"},"10px, 30px"),s(`);

`),n("span",{class:"gy"},"// 上下 margin 相同"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"my"),s("("),n("span",{class:"o"},"40px"),s(`);

`),n("span",{class:"gy"},"// 上下 margin 不同"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"my"),s("("),n("span",{class:"o"},"10px, 50px"),s(`);

`),n("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"mx"),s("();")])],-1)])]),_:1}),a(u,{value:"1"},{default:o(()=>[...l[3]||(l[3]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 左右 margin 相同"),s(`
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
margin-right: `),n("span",{class:"o"},"auto"),s(";")])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{V as default};
