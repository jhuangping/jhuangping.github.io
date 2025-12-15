import{_ as f,a as x,b as _,c as b,d as y}from"./TabItem-Fqw19348.js";import{_ as $}from"./LatticeTable-fVp187r_.js";import{_ as v}from"./LatticeHeadline-DbwJ8jck.js";import{r as c,c as w,e as a,a as s,A as n,s as o,b as T}from"./index-Dur5vxo0.js";const V={__name:"margin-base",setup(N){const p=c({columns:["參數","說明","預設值"],rows:[{cells:["<code>$left</code>","左側 margin","<code>auto</code>"]},{cells:["<code>$right</code>","右側 margin（預設等於 <code>$left</code>）","<code>$left</code>"]}]}),t=c({columns:["參數","說明","預設值"],rows:[{cells:["<code>$top</code>","上方 margin","<code>auto</code>"]},{cells:["<code>$bottom</code>","下方 margin（預設等於 <code>$top</code>）","<code>$top</code>"]}]});return(S,l)=>{const r=v,e=$,m=_,i=x,u=y,d=b,g=f;return T(),w("div",null,[a(r,{title:"margin",subtitle:"margin"}),l[4]||(l[4]=s("p",null,[n("設定上下或左右的 "),s("code",null,"margin"),n("，並支援單參數與雙參數的簡寫方式 ")],-1)),l[5]||(l[5]=s("hr",null,null,-1)),l[6]||(l[6]=s("h2",null,"Mixin 說明",-1)),l[7]||(l[7]=s("h3",{class:"use-code"},[s("code",null,[n("mx("),s("span",{class:"opy"},"$left, $right"),n(") ")])],-1)),a(e,{columns:p.value.columns,rows:p.value.rows},null,8,["columns","rows"]),l[8]||(l[8]=s("p",{class:"tip"},[n("若只傳入一個值 → 左右相同"),s("br"),n(" 若傳入兩個值 → 左右分別設定 ")],-1)),l[9]||(l[9]=s("br",null,null,-1)),l[10]||(l[10]=s("h3",{class:"use-code"},[s("code",null,[n("my("),s("span",{class:"opy"},"$top, $bottom"),n(") ")])],-1)),a(e,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),l[11]||(l[11]=s("p",{class:"tip"},[n("若只傳入一個值 → 上下相同"),s("br"),n(" 若傳入兩個值 → 上下分別設定 ")],-1)),l[12]||(l[12]=s("br",null,null,-1)),l[13]||(l[13]=s("hr",null,null,-1)),l[14]||(l[14]=s("h2",null,"使用範例",-1)),a(g,{value:"0"},{default:o(()=>[a(i,null,{default:o(()=>[a(m,{value:"0"},{default:o(()=>[...l[0]||(l[0]=[n("SCSS",-1)])]),_:1}),a(m,{value:"1"},{default:o(()=>[...l[1]||(l[1]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:o(()=>[a(u,{value:"0"},{default:o(()=>[...l[2]||(l[2]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".className"),n(` {
  `),s("span",{class:"gy"},"// 左右 margin 相同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"mx"),n("("),s("span",{class:"o"},"20px"),n(`);

  `),s("span",{class:"gy"},"// 左右 margin 不同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"mx"),n("("),s("span",{class:"o"},"10px, 30px"),n(`);

  `),s("span",{class:"gy"},"// 上下 margin 相同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"my"),n("("),s("span",{class:"o"},"40px"),n(`);

  `),s("span",{class:"gy"},"// 上下 margin 不同"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"my"),n("("),s("span",{class:"o"},"10px, 50px"),n(`);

  `),s("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),n(`
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"mx"),n(`();
}`)])],-1)])]),_:1}),a(u,{value:"1"},{default:o(()=>[...l[3]||(l[3]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".className"),n(` {
  `),s("span",{class:"gy"},"// 左右 margin 相同"),n(`
  margin-left: `),s("span",{class:"o"},"20px"),n(`;
  margin-right: `),s("span",{class:"o"},"20px"),n(`;

  `),s("span",{class:"gy"},"// 左右 margin 不同"),n(`
  margin-left: `),s("span",{class:"o"},"10px"),n(`;
  margin-right: `),s("span",{class:"o"},"30px"),n(`;

  `),s("span",{class:"gy"},"// 上下 margin 相同"),n(`
  margin-top: `),s("span",{class:"o"},"40px"),n(`;
  margin-bottom: `),s("span",{class:"o"},"40px"),n(`;

  `),s("span",{class:"gy"},"// 上下 margin 不同"),n(`
  margin-top: `),s("span",{class:"o"},"10px"),n(`;
  margin-bottom: `),s("span",{class:"o"},"50px"),n(`;

  `),s("span",{class:"gy"},"// 預設 auto（常用於水平置中）"),n(`
  margin-left: `),s("span",{class:"o"},"auto"),n(`;
  margin-right: `),s("span",{class:"o"},"auto"),n(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{V as default};
