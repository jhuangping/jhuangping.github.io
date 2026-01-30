import{_ as b,a as S,b as c,c as _,d as $}from"./TabItem-Dm0vhPld.js";import{_ as w}from"./LatticeBlock-Cmb-lu-l.js";import{_ as C}from"./LatticeTable-C3v95GrU.js";import{_ as M}from"./LatticeScssCode-Cv0IqA5U.js";import{_ as y}from"./LayoutNoteLink-D2KVmoST.js";import{_ as k}from"./LatticeHeadline-sDF0Qg4Z.js";import{r as z,c as L,e as a,a as l,A as n,s as e,b as Q}from"./index-Cyi5GN-D.js";const I={__name:"med-breakpoint",setup(T){const m=["Mixin 名稱","功能","參數"],r=z([{cells:['<code><span class="b">med-max</span>(<span class="r">$media</span>)</code>',"建立 max-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:['<code><span class="b">med-min</span>(<span class="r">$media</span>)</code>',"建立 min-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:['<code><span class="b">med-range</span>(<span class="r">$max, $min</span>)</code>',"建立 範圍寬度 Media Query","<p><code>$max</code>：最大寬度</p><p><code>$min</code>：最小寬度</p>"]},{cells:['<code><span class="b">med-max-h</span>(<span class="r">$size</span>)</code>',"建立 max-height Media Query","<code>$size</code>：最大高度"]},{cells:['<code><span class="b">med-min-h</span>(<span class="r">$size</span>)</code>',"建立 min-height Media Query","<code>$size</code>：最小高度"]},{cells:['<code><span class="b">med-range-h</span>(<span class="r">$max, $min</span>)</code>',"建立 範圍高度 Media Query","<code>$max</code>：最大高度<br><br><code>$min</code>：最小高度"]}]);return(B,s)=>{const f=k,x=y,g=M,v=C,i=w,o=c,u=S,p=$,d=_,t=b;return Q(),L("div",null,[a(f,{title:"breakpoint",subtitle:"media"}),s[36]||(s[36]=l("p",null,"統一管理響應式斷點，讓響應式設計更簡潔、可維護",-1)),s[37]||(s[37]=l("p",null,[n("提供了 寬度 "),l("code",null,"(width)"),n(" 與 高度 "),l("code",null,"(height)"),n(" 兩大類的 Media Query 建立方式，並支援： ")],-1)),l("ul",null,[s[3]||(s[3]=l("li",null,"max-width / min-width / range-width",-1)),s[4]||(s[4]=l("li",null,"max-height / min-height / range-height",-1)),l("li",null,[s[1]||(s[1]=n("斷點名稱對應：可從 ",-1)),a(x,{url:"config-breakpoints"},{default:e(()=>[...s[0]||(s[0]=[l("code",null,"$useBreakpoints",-1)])]),_:1}),s[2]||(s[2]=n(" 取得設定好的斷點值",-1))]),s[5]||(s[5]=l("li",null,"自訂數值：若斷點名稱不存在，可直接傳入 px 數值",-1))]),s[38]||(s[38]=l("hr",null,null,-1)),s[39]||(s[39]=l("br",null,null,-1)),a(g,{code:["med-max()","med-min()","med-range()","med-max-h()","med-min-h()","med-range-h()"]}),a(i,{label:"Mixin 說明"},{default:e(()=>[a(v,{columns:m,rows:r.value},null,8,["rows"])]),_:1}),s[40]||(s[40]=l("p",null," ",-1)),a(i,{label:"範例 (Example)"},{default:e(()=>[s[30]||(s[30]=l("h4",null,"Max-width",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[6]||(s[6]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[7]||(s[7]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...s[8]||(s[8]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-max"),n("("),l("span",{class:"o"},"sm"),n(`) {
    font-size: `),l("span",{class:"o"},"14px"),n(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...s[9]||(s[9]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (max-width: "),l("span",{class:"o"},"768px"),n(`) {
  `),l("span",{class:"o"},".title"),n(" { font-size: "),l("span",{class:"o"},"14px"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[31]||(s[31]=l("h4",null,"Min-width",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[10]||(s[10]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[11]||(s[11]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...s[12]||(s[12]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".container"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-min"),n("("),l("span",{class:"o"},"md"),n(`) {
    padding: `),l("span",{class:"o"},"20px"),n(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...s[13]||(s[13]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (min-width: "),l("span",{class:"o"},"1025px"),n(`) {
  `),l("span",{class:"o"},".container"),n(" { padding: "),l("span",{class:"o"},"20px"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[32]||(s[32]=l("h4",null,"Range-width",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[14]||(s[14]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[15]||(s[15]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...s[16]||(s[16]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".box"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-range"),n("("),l("span",{class:"o"},"1280"),n(", "),l("span",{class:"r"},"$sm"),n(`) {
    display: `),l("span",{class:"o"},"flex"),n(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...s[17]||(s[17]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (min-width: "),l("span",{class:"o"},"769px"),n(") "),l("span",{class:"r"},"and"),n(" (max-width: "),l("span",{class:"o"},"1280px"),n(`) {
  `),l("span",{class:"o"},".box"),n(" { display: "),l("span",{class:"o"},"flex"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[33]||(s[33]=l("h4",null,"Max-height",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[18]||(s[18]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[19]||(s[19]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...s[20]||(s[20]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".panel"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-max-h"),n("("),l("span",{class:"o"},"800"),n(`) {
    overflow: `),l("span",{class:"o"},"auto"),n(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...s[21]||(s[21]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (max-height: "),l("span",{class:"o"},"800px"),n(`) {
  `),l("span",{class:"o"},".panel"),n(" { overflow: "),l("span",{class:"o"},"auto"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[34]||(s[34]=l("h4",null,"Min-height",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[22]||(s[22]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[23]||(s[23]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...s[24]||(s[24]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".text"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-min-h"),n("("),l("span",{class:"o"},"600"),n(`) {
    font-size: `),l("span",{class:"o"},"18px"),n(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...s[25]||(s[25]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (min-height: "),l("span",{class:"o"},"601px"),n(`) {
  `),l("span",{class:"o"},".text"),n(" { font-size: "),l("span",{class:"o"},"18px"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[35]||(s[35]=l("h4",null,"Range-height",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[26]||(s[26]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[27]||(s[27]=[n("CSS",-1)])]),_:1})]),_:1}),a(d,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...s[28]||(s[28]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".section"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-range-h"),n("("),l("span",{class:"o"},"1080"),n(", "),l("span",{class:"o"},"720"),n(`) {
    line-height: `),l("span",{class:"o"},"1.5"),n(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...s[29]||(s[29]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" screen "),l("span",{class:"r"},"and"),n(" (min-height: "),l("span",{class:"o"},"721px"),n(") "),l("span",{class:"r"},"and"),n(" (max-height: "),l("span",{class:"o"},"1080px"),n(`) {
  `),l("span",{class:"o"},".section"),n(" { line-height: "),l("span",{class:"o"},"1.5"),n(`; }
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{I as default};
