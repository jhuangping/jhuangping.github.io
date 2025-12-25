import{_,a as v,b as g,c as S,d as b}from"./TabItem-C6tZTPmb.js";import{_ as $}from"./LatticeBlock-_MRLUH-a.js";import{_ as w}from"./LatticeTable-BoHZBYhd.js";import{_ as C}from"./LatticeScssCode-BtN-BRTl.js";import{_ as M}from"./LatticeHeadline-Dt3I2N3e.js";import{r as y,c as z,e as a,i as k,a as s,s as e,b as Q,A as l}from"./index-HF5HLple.js";const A={__name:"med-breakpoint",setup(T){const m=["Mixin 名稱","功能","參數"],r=y([{cells:['<code><span class="b">med-max</span>(<span class="r">$media</span>)</code>',"建立 max-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:['<code><span class="b">med-min</span>(<span class="r">$media</span>)</code>',"建立 min-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:['<code><span class="b">med-range</span>(<span class="r">$max, $min</span>)</code>',"建立 範圍寬度 Media Query","<p><code>$max</code>：最大寬度</p><p><code>$min</code>：最小寬度</p>"]},{cells:['<code><span class="b">med-max-h</span>(<span class="r">$size</span>)</code>',"建立 max-height Media Query","<code>$size</code>：最大高度"]},{cells:['<code><span class="b">med-min-h</span>(<span class="r">$size</span>)</code>',"建立 min-height Media Query","<code>$size</code>：最小高度"]},{cells:['<code><span class="b">med-range-h</span>(<span class="r">$max, $min</span>)</code>',"建立 範圍高度 Media Query","<code>$max</code>：最大高度<br><br><code>$min</code>：最小高度"]}]);return(B,n)=>{const c=M,f=C,x=w,i=$,o=g,d=v,p=b,t=S,u=_;return Q(),z("div",null,[a(c,{title:"breakpoint",subtitle:"media"}),n[30]||(n[30]=k("<p>統一管理響應式斷點，讓響應式設計更簡潔、可維護</p><p>提供了 寬度 <code>(width)</code> 與 高度 <code>(height)</code> 兩大類的 Media Query 建立方式，並支援： </p><ul><li>max-width / min-width / range-width</li><li>max-height / min-height / range-height</li><li>斷點名稱對應：可從 <code>$useBreakpoints</code> 取得設定好的斷點值</li><li>自訂數值：若斷點名稱不存在，可直接傳入 px 數值</li></ul><hr><br>",5)),a(f,{code:["med-max()","med-min()","med-range()","med-max-h()","med-min-h()","med-range-h()"]}),a(i,{label:"Mixin 說明"},{default:e(()=>[a(x,{columns:m,rows:r.value},null,8,["rows"])]),_:1}),n[31]||(n[31]=s("p",null," ",-1)),a(i,{label:"範例 (Example)"},{default:e(()=>[n[24]||(n[24]=s("h4",null,"Max-width",-1)),a(u,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[0]||(n[0]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[1]||(n[1]=[l("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[2]||(n[2]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".title"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"med-max"),l("("),s("span",{class:"o"},"sm"),l(`) {
    font-size: `),s("span",{class:"o"},"14px"),l(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[3]||(n[3]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),l(" all "),s("span",{class:"r"},"and"),l(" (max-width: "),s("span",{class:"o"},"768px"),l(`) {
  `),s("span",{class:"o"},".title"),l(" { font-size: "),s("span",{class:"o"},"14px"),l(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[25]||(n[25]=s("h4",null,"Min-width",-1)),a(u,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[4]||(n[4]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[5]||(n[5]=[l("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[6]||(n[6]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".container"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"med-min"),l("("),s("span",{class:"o"},"md"),l(`) {
    padding: `),s("span",{class:"o"},"20px"),l(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[7]||(n[7]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),l(" all "),s("span",{class:"r"},"and"),l(" (min-width: "),s("span",{class:"o"},"1025px"),l(`) {
  `),s("span",{class:"o"},".container"),l(" { padding: "),s("span",{class:"o"},"20px"),l(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[26]||(n[26]=s("h4",null,"Range-width",-1)),a(u,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[8]||(n[8]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[9]||(n[9]=[l("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[10]||(n[10]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".box"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"med-range"),l("("),s("span",{class:"o"},"1280"),l(", "),s("span",{class:"r"},"$sm"),l(`) {
    display: `),s("span",{class:"o"},"flex"),l(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[11]||(n[11]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),l(" all "),s("span",{class:"r"},"and"),l(" (min-width: "),s("span",{class:"o"},"769px"),l(") "),s("span",{class:"r"},"and"),l(" (max-width: "),s("span",{class:"o"},"1280px"),l(`) {
  `),s("span",{class:"o"},".box"),l(" { display: "),s("span",{class:"o"},"flex"),l(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[27]||(n[27]=s("h4",null,"Max-height",-1)),a(u,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[12]||(n[12]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[13]||(n[13]=[l("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[14]||(n[14]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".panel"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"med-max-h"),l("("),s("span",{class:"o"},"800"),l(`) {
    overflow: `),s("span",{class:"o"},"auto"),l(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[15]||(n[15]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),l(" all "),s("span",{class:"r"},"and"),l(" (max-height: "),s("span",{class:"o"},"800px"),l(`) {
  `),s("span",{class:"o"},".panel"),l(" { overflow: "),s("span",{class:"o"},"auto"),l(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[28]||(n[28]=s("h4",null,"Min-height",-1)),a(u,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[16]||(n[16]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[17]||(n[17]=[l("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[18]||(n[18]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".text"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"med-min-h"),l("("),s("span",{class:"o"},"600"),l(`) {
    font-size: `),s("span",{class:"o"},"18px"),l(`;
  }
}`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[19]||(n[19]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),l(" all "),s("span",{class:"r"},"and"),l(" (min-height: "),s("span",{class:"o"},"601px"),l(`) {
  `),s("span",{class:"o"},".text"),l(" { font-size: "),s("span",{class:"o"},"18px"),l(`; }
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),n[29]||(n[29]=s("h4",null,"Range-height",-1)),a(u,{value:"0"},{default:e(()=>[a(d,null,{default:e(()=>[a(o,{value:"0"},{default:e(()=>[...n[20]||(n[20]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:e(()=>[...n[21]||(n[21]=[l("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:e(()=>[a(p,{value:"0"},{default:e(()=>[...n[22]||(n[22]=[s("pre",null,[s("code",null,[s("span",{class:"o"},".section"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"med-range-h"),l("("),s("span",{class:"o"},"1080"),l(", "),s("span",{class:"o"},"720"),l(`) {
    line-height: `),s("span",{class:"o"},"1.5"),l(`;
  }
}
`)])],-1)])]),_:1}),a(p,{value:"1"},{default:e(()=>[...n[23]||(n[23]=[s("pre",null,[s("code",null,[s("span",{class:"r"},"@media"),l(" screen "),s("span",{class:"r"},"and"),l(" (min-height: "),s("span",{class:"o"},"721px"),l(") "),s("span",{class:"r"},"and"),l(" (max-height: "),s("span",{class:"o"},"1080px"),l(`) {
  `),s("span",{class:"o"},".section"),l(" { line-height: "),s("span",{class:"o"},"1.5"),l(`; }
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{A as default};
