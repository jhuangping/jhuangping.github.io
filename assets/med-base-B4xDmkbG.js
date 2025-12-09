import{_ as f,a as v,b,c as _,d as x}from"./TabItem-BNhLxIaC.js";import{_ as S}from"./LatticeTable-DuznFzOb.js";import{_ as g}from"./LatticeHeadline-jGaKQb2h.js";import{r as w,c as C,e as a,i as T,a as s,s as o,b as k,A as n}from"./index-DEfK6y00.js";const E={__name:"med-base",setup(B){const r=["Mixin 名稱","適用裝置"],i=w([{cells:["<code>active()</code>","手機、平板 (觸控)"]},{cells:["<code>hover()</code>","桌機、筆電 (滑鼠)"]},{cells:["<code>med($device)</code>","依參數切換桌機或手機樣式<br><code>desktop</code> : 桌機、筆電<br><code>mobile</code> : 移動裝置"]}]);return(N,l)=>{const c=g,m=S,e=b,t=v,p=x,u=_,d=f;return k(),C("div",null,[a(c,{title:"media",subtitle:"media"}),l[12]||(l[12]=T("<p>依據使用者裝置的 輸入方式 <b>(hover / pointer)</b> 來套用不同的樣式，讓設計能更精準區分桌機、手機、平板或觸控筆的使用情境。 </p><ul><li><b>區分互動能力：</b>判斷裝置是否支援 <code>hover</code>，以及指標的精細程度 (<code>fine</code> vs <code>coarse</code>)。</li><li><b>提升使用體驗：</b>桌機/筆電可使用 hover 效果；手機/平板則避免 hover，並加大點擊區域。</li><li><b>裝置適配：</b>針對觸控筆或特殊裝置 (智慧電視) 提供額外調整。 </li></ul><hr><h2>Mixin 說明</h2>",4)),a(m,{columns:r,rows:i.value},null,8,["rows"]),l[13]||(l[13]=s("p",null," ",-1)),l[14]||(l[14]=s("hr",null,null,-1)),l[15]||(l[15]=s("h2",null,"範例 (Example)",-1)),l[16]||(l[16]=s("h3",null,"手機樣式",-1)),a(d,{value:"0"},{default:o(()=>[a(t,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[0]||(l[0]=[n("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[1]||(l[1]=[n("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:o(()=>[a(p,{value:"0"},{default:o(()=>[...l[2]||(l[2]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".btn"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"active"),n(`() {
    font-size: `),s("span",{class:"o"},"18px"),n(`;
    padding: `),s("span",{class:"o"},"12px"),n(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:o(()=>[...l[3]||(l[3]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"none"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"coarse"),n(`) {
  `),s("span",{class:"o"},".btn"),n(` {
    font-size: `),s("span",{class:"o"},"18px"),n(`;
    padding: `),s("span",{class:"o"},"12px"),n(`;
  }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),l[17]||(l[17]=s("h3",null,"桌機樣式",-1)),a(d,{value:"0"},{default:o(()=>[a(t,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[4]||(l[4]=[n("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[5]||(l[5]=[n("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:o(()=>[a(p,{value:"0"},{default:o(()=>[...l[6]||(l[6]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".menu-item"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"hover()"),n(` {
    `),s("span",{class:"o"},"&:hover"),n(" { color: "),s("span",{class:"o"},"red"),n(`; }
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:o(()=>[...l[7]||(l[7]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"hover"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"fine"),n(`) {
  `),s("span",{class:"o"},".menu-item:hover"),n(" { color: "),s("span",{class:"o"},"red"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),l[18]||(l[18]=s("h3",null,"依裝置參數切換",-1)),a(d,{value:"0"},{default:o(()=>[a(t,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[8]||(l[8]=[n("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[9]||(l[9]=[n("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:o(()=>[a(p,{value:"0"},{default:o(()=>[...l[10]||(l[10]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".card"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"med"),n("("),s("span",{class:"o"},"desktop"),n(`) {
    box-shadow: `),s("span",{class:"o"},"0 0 10px rgba(0,0,0,.2)"),n(`;
  }
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"med"),n("("),s("span",{class:"o"},"mobile"),n(`) {
    box-shadow: `),s("span",{class:"o"},"none"),n(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:o(()=>[...l[11]||(l[11]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"hover"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"fine"),n(`) {
  `),s("span",{class:"o"},".card"),n(" { box-shadow: "),s("span",{class:"o"},"0 0 10px rgba(0,0,0,.2)"),n(`; }
}
`),s("span",{class:"r"},"@media"),n(" (hover: "),s("span",{class:"o"},"none"),n(") "),s("span",{class:"r"},"and"),n(" (pointer: "),s("span",{class:"o"},"coarse"),n(`) {
  `),s("span",{class:"o"},".card"),n(" { box-shadow: "),s("span",{class:"o"},"none"),n(`; }
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{E as default};
