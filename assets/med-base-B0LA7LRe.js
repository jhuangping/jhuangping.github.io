import{_ as b,a as v,b as x,c as S,d as g}from"./TabItem-De4zdHFJ.js";import{_ as w}from"./LatticeBlock-zEcopGch.js";import{_ as C}from"./LatticeTable-Bkm-qByj.js";import{_ as T}from"./LatticeScssCode-DBtHHCJS.js";import{_ as k}from"./LatticeHeadline--xzOewIS.js";import{r as $,c as B,e as l,i as L,a as s,s as o,b as N,A as n}from"./index-Ddb2smQe.js";const j={__name:"med-base",setup(V){const c=["Mixin 名稱","適用裝置"],i=$([{cells:['<code><span class="b">active()</span></code>',"手機、平板 (觸控)"]},{cells:['<code><span class="b">hover()</span></code>',"桌機、筆電 (滑鼠)"]},{cells:['<code><span class="b">med</span>(<span class="r">$device</span>)</code>',"依參數切換桌機或手機樣式<br><code>desktop</code> : 桌機、筆電<br><code>mobile</code> : 移動裝置"]}]);return(z,a)=>{const m=k,_=T,f=C,r=w,e=x,t=v,p=g,d=S,u=b;return N(),B("div",null,[l(m,{title:"media",subtitle:"media"}),a[15]||(a[15]=L("<p>依據使用者裝置的 輸入方式 <b>(hover / pointer)</b> 來套用不同的樣式，讓設計能更精準區分桌機、手機、平板或觸控筆的使用情境 </p><ul><li><b>區分互動能力：</b>判斷裝置是否支援 <code>hover</code>，以及指標的精細程度 (<code>fine</code> vs <code>coarse</code>)</li><li><b>提升使用體驗：</b>桌機/筆電可使用 hover 效果；手機/平板則避免 hover，並加大點擊區域</li><li><b>裝置適配：</b>針對觸控筆或特殊裝置 (智慧電視) 提供額外調整 </li></ul><hr><br>",4)),l(_,{code:["active()","hover()","med()"]}),l(r,{label:"Mixin 說明"},{default:o(()=>[l(f,{columns:c,rows:i.value},null,8,["rows"])]),_:1}),a[16]||(a[16]=s("p",null," ",-1)),l(r,{label:"範例 (Example)"},{default:o(()=>[a[12]||(a[12]=s("h4",null,"手機樣式",-1)),l(u,{value:"0"},{default:o(()=>[l(t,null,{default:o(()=>[l(e,{value:"0"},{default:o(()=>[...a[0]||(a[0]=[n("SCSS",-1)])]),_:1}),l(e,{value:"1"},{default:o(()=>[...a[1]||(a[1]=[n("CSS",-1)])]),_:1})]),_:1}),l(d,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[2]||(a[2]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".btn"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"active"),n(`() {
    font-size: `),s("span",{class:"o"},"18px"),n(`;
    padding: `),s("span",{class:"o"},"12px"),n(`;
  }
}
`)])],-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[3]||(a[3]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"none"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"coarse"),n(`) {
  `),s("span",{class:"o"},".btn"),n(` {
    font-size: `),s("span",{class:"o"},"18px"),n(`;
    padding: `),s("span",{class:"o"},"12px"),n(`;
  }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),a[13]||(a[13]=s("h4",null,"桌機樣式",-1)),l(u,{value:"0"},{default:o(()=>[l(t,null,{default:o(()=>[l(e,{value:"0"},{default:o(()=>[...a[4]||(a[4]=[n("SCSS",-1)])]),_:1}),l(e,{value:"1"},{default:o(()=>[...a[5]||(a[5]=[n("CSS",-1)])]),_:1})]),_:1}),l(d,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[6]||(a[6]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".menu-item"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"hover()"),n(` {
    `),s("span",{class:"o"},"&:hover"),n(" { color: "),s("span",{class:"o"},"red"),n(`; }
  }
}
`)])],-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[7]||(a[7]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"hover"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"fine"),n(`) {
  `),s("span",{class:"o"},".menu-item:hover"),n(" { color: "),s("span",{class:"o"},"red"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),a[14]||(a[14]=s("h4",null,"依裝置參數切換",-1)),l(u,{value:"0"},{default:o(()=>[l(t,null,{default:o(()=>[l(e,{value:"0"},{default:o(()=>[...a[8]||(a[8]=[n("SCSS",-1)])]),_:1}),l(e,{value:"1"},{default:o(()=>[...a[9]||(a[9]=[n("CSS",-1)])]),_:1})]),_:1}),l(d,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[10]||(a[10]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".card"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"med"),n("("),s("span",{class:"o"},"desktop"),n(`) {
    box-shadow: `),s("span",{class:"o"},"0 0 10px rgba(0,0,0,.2)"),n(`;
  }
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"med"),n("("),s("span",{class:"o"},"mobile"),n(`) {
    box-shadow: `),s("span",{class:"o"},"none"),n(`;
  }
}
`)])],-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[11]||(a[11]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"hover"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"fine"),n(`) {
  `),s("span",{class:"o"},".card"),n(" { box-shadow: "),s("span",{class:"o"},"0 0 10px rgba(0,0,0,.2)"),n(`; }
}
`),s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"none"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"coarse"),n(`) {
  `),s("span",{class:"o"},".card"),n(" { box-shadow: "),s("span",{class:"o"},"none"),n(`; }
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{j as default};
