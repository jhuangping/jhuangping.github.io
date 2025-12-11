import{_ as x,a as c,b as v,c as S,d as g}from"./TabItem-Dr9wb14q.js";import{_ as b}from"./LatticeTable-BGUG83MF.js";import{_}from"./LatticeHeadline-B3-Tszyf.js";import{r as $,c as w,e as a,i as C,a as l,s as e,b as M,A as n}from"./index-CTHYSNjc.js";const N={__name:"med-breakpoint",setup(y){const i=["Mixin 名稱","功能","參數"],m=$([{cells:["<code>med-max($media)</code>","建立 max-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:["<code>med-min($media)</code>","建立 min-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:["<code>med-range($max, $min)</code>","建立 範圍寬度 Media Query","<p><code>$max</code>：最大寬度</p><p><code>$min</code>：最小寬度</p>"]},{cells:["<code>med-max-h($size)</code>","建立 max-height Media Query","<code>$size</code>：最大高度"]},{cells:["<code>med-min-h($size)</code>","建立 min-height Media Query","<code>$size</code>：最小高度"]},{cells:["<code>med-range-h($max, $min)</code>","建立 範圍高度 Media Query","<code>$max</code>：最大高度<br><br><code>$min</code>：最小高度"]}]);return(z,s)=>{const r=_,f=b,d=v,u=c,o=g,p=S,t=x;return M(),w("div",null,[a(r,{title:"breakpoint",subtitle:"media"}),s[24]||(s[24]=C("<p>統一管理響應式斷點，讓響應式設計更簡潔、可維護</p><p>提供了 寬度 <code>(width)</code> 與 高度 <code>(height)</code> 兩大類的 Media Query 建立方式，並支援： </p><ul><li>max-width / min-width / range-width</li><li>max-height / min-height / range-height</li><li>斷點名稱對應：可從 <code>$useBreakpoints</code> 取得設定好的斷點值</li><li>自訂數值：若斷點名稱不存在，可直接傳入 px 數值</li></ul><hr><h2>Mixin 說明</h2>",5)),a(f,{columns:i,rows:m.value},null,8,["rows"]),s[25]||(s[25]=l("p",null," ",-1)),s[26]||(s[26]=l("hr",null,null,-1)),s[27]||(s[27]=l("h2",null,"範例 (Example)",-1)),s[28]||(s[28]=l("h3",null,"Max-width",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(d,{value:"0"},{default:e(()=>[...s[0]||(s[0]=[n("SCSS",-1)])]),_:1}),a(d,{value:"1"},{default:e(()=>[...s[1]||(s[1]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[2]||(s[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-max"),n("("),l("span",{class:"o"},"sm"),n(`) {
    font-size: `),l("span",{class:"o"},"14px"),n(`;
  }
}
`)])],-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[3]||(s[3]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (max-width: "),l("span",{class:"o"},"768px"),n(`) {
  `),l("span",{class:"o"},".title"),n(" { font-size: "),l("span",{class:"o"},"14px"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[29]||(s[29]=l("h3",null,"Min-width",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(d,{value:"0"},{default:e(()=>[...s[4]||(s[4]=[n("SCSS",-1)])]),_:1}),a(d,{value:"1"},{default:e(()=>[...s[5]||(s[5]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[6]||(s[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".container"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-min"),n("("),l("span",{class:"o"},"md"),n(`) {
    padding: `),l("span",{class:"o"},"20px"),n(`;
  }
}
`)])],-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[7]||(s[7]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (min-width: "),l("span",{class:"o"},"1025px"),n(`) {
  `),l("span",{class:"o"},".container"),n(" { padding: "),l("span",{class:"o"},"20px"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[30]||(s[30]=l("h3",null,"Range-width",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(d,{value:"0"},{default:e(()=>[...s[8]||(s[8]=[n("SCSS",-1)])]),_:1}),a(d,{value:"1"},{default:e(()=>[...s[9]||(s[9]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[10]||(s[10]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".box"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-range"),n("("),l("span",{class:"o"},"1280"),n(", "),l("span",{class:"r"},"$sm"),n(`) {
    display: `),l("span",{class:"o"},"flex"),n(`;
  }
}`)])],-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[11]||(s[11]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (min-width: "),l("span",{class:"o"},"769px"),n(") "),l("span",{class:"r"},"and"),n(" (max-width: "),l("span",{class:"o"},"1280px"),n(`) {
  `),l("span",{class:"o"},".box"),n(" { display: "),l("span",{class:"o"},"flex"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[31]||(s[31]=l("h3",null,"Max-height",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(d,{value:"0"},{default:e(()=>[...s[12]||(s[12]=[n("SCSS",-1)])]),_:1}),a(d,{value:"1"},{default:e(()=>[...s[13]||(s[13]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[14]||(s[14]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".panel"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-max-h"),n("("),l("span",{class:"o"},"800"),n(`) {
    overflow: `),l("span",{class:"o"},"auto"),n(`;
  }
}`)])],-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[15]||(s[15]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (max-height: "),l("span",{class:"o"},"800px"),n(`) {
  `),l("span",{class:"o"},".panel"),n(" { overflow: "),l("span",{class:"o"},"auto"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[32]||(s[32]=l("h3",null,"Min-height",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(d,{value:"0"},{default:e(()=>[...s[16]||(s[16]=[n("SCSS",-1)])]),_:1}),a(d,{value:"1"},{default:e(()=>[...s[17]||(s[17]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[18]||(s[18]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".text"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-min-h"),n("("),l("span",{class:"o"},"600"),n(`) {
    font-size: `),l("span",{class:"o"},"18px"),n(`;
  }
}`)])],-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[19]||(s[19]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" all "),l("span",{class:"r"},"and"),n(" (min-height: "),l("span",{class:"o"},"601px"),n(`) {
  `),l("span",{class:"o"},".text"),n(" { font-size: "),l("span",{class:"o"},"18px"),n(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[33]||(s[33]=l("h3",null,"Range-height",-1)),a(t,{value:"0"},{default:e(()=>[a(u,null,{default:e(()=>[a(d,{value:"0"},{default:e(()=>[...s[20]||(s[20]=[n("SCSS",-1)])]),_:1}),a(d,{value:"1"},{default:e(()=>[...s[21]||(s[21]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...s[22]||(s[22]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".section"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"med-range-h"),n("("),l("span",{class:"o"},"1080"),n(", "),l("span",{class:"o"},"720"),n(`) {
    line-height: `),l("span",{class:"o"},"1.5"),n(`;
  }
}
`)])],-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...s[23]||(s[23]=[l("pre",null,[l("code",null,[l("span",{class:"r"},"@media"),n(" screen "),l("span",{class:"r"},"and"),n(" (min-height: "),l("span",{class:"o"},"721px"),n(") "),l("span",{class:"r"},"and"),n(" (max-height: "),l("span",{class:"o"},"1080px"),n(`) {
  `),l("span",{class:"o"},".section"),n(" { line-height: "),l("span",{class:"o"},"1.5"),n(`; }
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{N as default};
