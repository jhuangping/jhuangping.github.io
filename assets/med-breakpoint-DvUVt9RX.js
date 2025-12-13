import{_ as x,a as c,b as v,c as S,d as g}from"./TabItem-CO9pI6XC.js";import{_ as b}from"./LatticeTable-DHY7v61C.js";import{_}from"./LatticeHeadline-0vjNdYw_.js";import{r as $,c as w,e as a,i as C,a as l,s as e,b as M,A as s}from"./index-D4tG5tm4.js";const N={__name:"med-breakpoint",setup(y){const i=["Mixin 名稱","功能","參數"],m=$([{cells:['<code>med-max(<span class="opa">$media</span>)</code>',"建立 max-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:['<code>med-min(<span class="opa">$media</span>)</code>',"建立 min-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:['<code>med-range(<span class="opa">$max, $min</span>)</code>',"建立 範圍寬度 Media Query","<p><code>$max</code>：最大寬度</p><p><code>$min</code>：最小寬度</p>"]},{cells:['<code>med-max-h(<span class="opa">$size</span>)</code>',"建立 max-height Media Query","<code>$size</code>：最大高度"]},{cells:['<code>med-min-h(<span class="opa">$size</span>)</code>',"建立 min-height Media Query","<code>$size</code>：最小高度"]},{cells:['<code>med-range-h(<span class="opa">$max, $min</span>)</code>',"建立 範圍高度 Media Query","<code>$max</code>：最大高度<br><br><code>$min</code>：最小高度"]}]);return(z,n)=>{const r=_,f=b,o=v,d=c,p=g,u=S,t=x;return M(),w("div",null,[a(r,{title:"breakpoint",subtitle:"media"}),n[24]||(n[24]=C("<p>統一管理響應式斷點，讓響應式設計更簡潔、可維護</p><p>提供了 寬度 <code>(width)</code> 與 高度 <code>(height)</code> 兩大類的 Media Query 建立方式，並支援： </p><ul><li>max-width / min-width / range-width</li><li>max-height / min-height / range-height</li><li>斷點名稱對應：可從 <code>$useBreakpoints</code> 取得設定好的斷點值</li><li>自訂數值：若斷點名稱不存在，可直接傳入 px 數值</li></ul><hr><h2>Mixin 說明</h2>",5)),a(f,{columns:i,rows:m.value},null,8,["rows"]),n[25]||(n[25]=l("p",null," ",-1)),n[26]||(n[26]=l("hr",null,null,-1)),n[27]||(n[27]=l("h2",null,"範例 (Example)",-1)),n[28]||(n[28]=l("h3",null,"Max-width",-1)),a(t,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[0]||(n[0]=[s("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[1]||(n[1]=[s("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[2]||(n[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"med-max"),s("("),l("span",{class:"o"},"sm"),s(`) {
    font-size: `),l("span",{class:"o"},"14px"),s(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[3]||(n[3]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),s(" all "),l("span",{class:"r"},"and"),s(" (max-width: "),l("span",{class:"o"},"768px"),s(`) {
  `),l("span",{class:"o"},".title"),s(" { font-size: "),l("span",{class:"o"},"14px"),s(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[29]||(n[29]=l("h3",null,"Min-width",-1)),a(t,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[4]||(n[4]=[s("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[5]||(n[5]=[s("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[6]||(n[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".container"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"med-min"),s("("),l("span",{class:"o"},"md"),s(`) {
    padding: `),l("span",{class:"o"},"20px"),s(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[7]||(n[7]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),s(" all "),l("span",{class:"r"},"and"),s(" (min-width: "),l("span",{class:"o"},"1025px"),s(`) {
  `),l("span",{class:"o"},".container"),s(" { padding: "),l("span",{class:"o"},"20px"),s(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[30]||(n[30]=l("h3",null,"Range-width",-1)),a(t,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[8]||(n[8]=[s("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[9]||(n[9]=[s("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[10]||(n[10]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".box"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"med-range"),s("("),l("span",{class:"o"},"1280"),s(", "),l("span",{class:"r"},"$sm"),s(`) {
    display: `),l("span",{class:"o"},"flex"),s(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[11]||(n[11]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),s(" all "),l("span",{class:"r"},"and"),s(" (min-width: "),l("span",{class:"o"},"769px"),s(") "),l("span",{class:"r"},"and"),s(" (max-width: "),l("span",{class:"o"},"1280px"),s(`) {
  `),l("span",{class:"o"},".box"),s(" { display: "),l("span",{class:"o"},"flex"),s(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[31]||(n[31]=l("h3",null,"Max-height",-1)),a(t,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[12]||(n[12]=[s("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[13]||(n[13]=[s("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[14]||(n[14]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".panel"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"med-max-h"),s("("),l("span",{class:"o"},"800"),s(`) {
    overflow: `),l("span",{class:"o"},"auto"),s(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[15]||(n[15]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),s(" all "),l("span",{class:"r"},"and"),s(" (max-height: "),l("span",{class:"o"},"800px"),s(`) {
  `),l("span",{class:"o"},".panel"),s(" { overflow: "),l("span",{class:"o"},"auto"),s(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[32]||(n[32]=l("h3",null,"Min-height",-1)),a(t,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[16]||(n[16]=[s("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[17]||(n[17]=[s("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[18]||(n[18]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".text"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"med-min-h"),s("("),l("span",{class:"o"},"600"),s(`) {
    font-size: `),l("span",{class:"o"},"18px"),s(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[19]||(n[19]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),s(" all "),l("span",{class:"r"},"and"),s(" (min-height: "),l("span",{class:"o"},"601px"),s(`) {
  `),l("span",{class:"o"},".text"),s(" { font-size: "),l("span",{class:"o"},"18px"),s(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[33]||(n[33]=l("h3",null,"Range-height",-1)),a(t,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[20]||(n[20]=[s("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[21]||(n[21]=[s("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[22]||(n[22]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".section"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"med-range-h"),s("("),l("span",{class:"o"},"1080"),s(", "),l("span",{class:"o"},"720"),s(`) {
    line-height: `),l("span",{class:"o"},"1.5"),s(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[23]||(n[23]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),s(" screen "),l("span",{class:"r"},"and"),s(" (min-height: "),l("span",{class:"o"},"721px"),s(") "),l("span",{class:"r"},"and"),s(" (max-height: "),l("span",{class:"o"},"1080px"),s(`) {
  `),l("span",{class:"o"},".section"),s(" { line-height: "),l("span",{class:"o"},"1.5"),s(`; }
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{N as default};
