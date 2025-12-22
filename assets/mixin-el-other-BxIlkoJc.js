import{_ as y,a as x,b as j,c as T,d as S}from"./TabItem-BAQxWGe5.js";import{_ as B}from"./LatticeTable-B0Naatzu.js";import{_ as C}from"./LatticeHeadline-0FdPbW1y.js";import{c as D,e as o,a as l,s as a,b as N,A as s,g as p}from"./index-XeVrB2dC.js";const m={columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","max-width 的值，若為 <code>null</code> 則不輸出","—"]},{cells:["<code>$w</code>","width 的值","<code>100%</code>"]}]},w={columns:["參數","說明","預設"],rows:[{cells:["<code>$h</code>","高度比例","<code>9</code>"]},{cells:["<code>$w</code>","寬度比例","<code>16</code>"]},{cells:["<code>$patch</code>","額外補上 padding-top（px）","<code>null</code>"]}]},f={columns:["參數","說明","預設"],rows:[{cells:["<code>$w</code>","寬度比例","<code>16</code>"]},{cells:["<code>$h</code>","高度比例","<code>9</code>"]}]},b={columns:["參數","說明","預設"],rows:[{cells:["<code>$ar</code>","	aspect-ratio 值（如 <code>16/9</code>、<code>1/1</code>）","<code>null</code>"]},{cells:["<code>$w</code>","最大寬度（可為 px、%、full、無單位數字）","<code>null</code>"]}]},r={fit:{columns:["縮寫","轉換後","說明"],rows:[{cells:["<code>n</code>","none","不縮放"]},{cells:["<code>in</code> / <code>con</code>","contain","完整顯示，可能留白"]},{cells:["<code>out</code> / <code>cov</code>","cover","填滿容器，可能裁切"]},{cells:["<code>f</code>","fill","拉伸填滿"]},{cells:["<code>full</code> / <code>sd</code>","scale-down","盡量縮小但不放大"]}]},position:{columns:["縮寫","轉換後"],rows:[{cells:["<code>t</code>","top"]},{cells:["<code>b</code>","bottom"]},{cells:["<code>l</code>","left"]},{cells:["<code>r</code>","right"]},{cells:["<code>c</code>","center"]}]}},g={columns:["參數","說明","預設"],rows:[{cells:["<code>$arrow</code>","appearance 的值（通常為 <code>none</code>）","<code>none</code>"]}]},$={columns:["參數","說明","預設"],rows:[{cells:["<code>$tip</code>","是否啟用 <code>mix-blend-mode: difference</code>（false = 關閉，true = 開啟）","<code>false</code>"]},{cells:["<code>$cr</code>","文字顏色","<code>#fff</code>"]},{cells:["<code>$bg</code>","背景顏色","<code>#E06666</code>"]}]},H={__name:"mixin-el-other",setup(W){return(k,n)=>{const v=C,u=j,t=x,d=B,e=S,c=T,i=y;return N(),D("div",null,[o(v,{title:"other",subtitle:"element"}),n[54]||(n[54]=l("h2",null,"尺寸控制",-1)),o(i,{class:"is:des",value:"0"},{default:a(()=>[o(t,null,{default:a(()=>[o(u,{value:"0"},{default:a(()=>[...n[0]||(n[0]=[s("max-w",-1)])]),_:1}),o(u,{value:"1"},{default:a(()=>[...n[1]||(n[1]=[s("pa-height / pa-h",-1)])]),_:1}),o(u,{value:"2"},{default:a(()=>[...n[2]||(n[2]=[s("aspect",-1)])]),_:1}),o(u,{value:"3"},{default:a(()=>[...n[3]||(n[3]=[s("ar-w",-1)])]),_:1})]),_:1}),o(c,null,{default:a(()=>[o(e,{value:"0"},{default:a(()=>[n[4]||(n[4]=l("h3",{class:"use-code"},[l("code",null,[s("max-w("),l("span",{class:"opy"},"$val, $w"),s(")")])],-1)),n[5]||(n[5]=l("p",null,[s("設定 "),l("code",null,"max-width"),s(" 並維持 "),l("code",null,"width"),s("，常用於圖片、容器、響應式區塊 ")],-1)),n[6]||(n[6]=l("h4",null,"參數說明",-1)),o(d,{columns:p(m).columns,rows:p(m).rows},null,8,["columns","rows"]),n[7]||(n[7]=l("h4",null,"範例",-1)),n[8]||(n[8]=l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"max-w"),s("("),l("span",{class:"o"},"600px"),s(`);
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"max-w"),s("("),l("span",{class:"o"},"null, 80%"),s(`);
`)])])],-1))]),_:1}),o(e,{value:"1"},{default:a(()=>[n[9]||(n[9]=l("h3",{class:"use-code"},[l("code",null,[s("pa-height("),l("span",{class:"opy"},"$h, $w, $patch"),s(")")]),s(" / "),l("code",null,[s("pa-h("),l("span",{class:"opy"},"$h, $w, $patch"),s(") ")])],-1)),n[10]||(n[10]=l("p",null,"用於建立固定比例的容器，根據寬高比計算 padding-bottom 以維持比例（常用於影片、容器）",-1)),n[11]||(n[11]=l("p",{class:"tip"},"這是傳統 RWD 影片容器常用的寫法（YouTube 16:9 → 56.25%）",-1)),n[12]||(n[12]=l("h4",null,"參數說明",-1)),o(d,{columns:p(w).columns,rows:p(w).rows},null,8,["columns","rows"]),n[13]||(n[13]=l("h4",null,"使用範例",-1)),n[14]||(n[14]=l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 16:9 比例"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"pa-height"),s(`();

`),l("span",{class:"gy"},"// 4:3 比例 + 額外 padding-top"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"pa-height"),s("("),l("span",{class:"o"},"3, 4, 10"),s(`);

`),l("span",{class:"gy"},"// 依圖片大小 750 x 500"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"pa-height"),s("("),l("span",{class:"o"},"500, 750"),s(`);
`)])])],-1))]),_:1}),o(e,{value:"2"},{default:a(()=>[n[15]||(n[15]=l("h3",{class:"use-code"},[l("code",null,[s("aspect("),l("span",{class:"opy"},"$w, $h"),s(") ")])],-1)),n[16]||(n[16]=l("p",null,[s("使用現代 CSS 的 "),l("code",null,"aspect-ratio"),s(" 屬性，直接設定寬高比例 ")],-1)),n[17]||(n[17]=l("h4",null,"參數說明",-1)),o(d,{columns:p(f).columns,rows:p(f).rows},null,8,["columns","rows"]),n[18]||(n[18]=l("h4",null,"使用範例",-1)),n[19]||(n[19]=l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 16:9 比例"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"aspect"),s("("),l("span",{class:"o"},"16, 9"),s(`)
`),l("span",{class:"gy"},"--- ro ---"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"aspect"),s(`()

`),l("span",{class:"gy"},"// 依圖片大小 750 x 500"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"aspect"),s("("),l("span",{class:"o"},"750, 500"),s(`)
`)])])],-1))]),_:1}),o(e,{value:"3"},{default:a(()=>[n[24]||(n[24]=l("h3",{class:"use-code"},[l("code",null,[s("ar-w("),l("span",{class:"opy"},"$ar, $w"),s(") ")])],-1)),n[25]||(n[25]=l("p",null,"「比例 + 寬度控制」的組合工具，用來同時設定:",-1)),n[26]||(n[26]=l("ul",null,[l("li",null,"aspect-ratio（寬高比例）"),l("li",null,"max-width（最大寬度）")],-1)),n[27]||(n[27]=l("p",null,"常用於 圖片容器、影片框、RWD 卡片、需要固定比例的 UI 元件",-1)),n[28]||(n[28]=l("h4",null,"參數說明",-1)),o(d,{columns:p(b).columns,rows:p(b).rows},null,8,["columns","rows"]),n[29]||(n[29]=l("h4",null,"使用範例",-1)),o(i,{value:"0"},{default:a(()=>[o(t,null,{default:a(()=>[o(u,{value:"0"},{default:a(()=>[...n[20]||(n[20]=[s("SCSS",-1)])]),_:1}),o(u,{value:"1"},{default:a(()=>[...n[21]||(n[21]=[s("CSS",-1)])]),_:1})]),_:1}),o(c,null,{default:a(()=>[o(e,{value:"0"},{default:a(()=>[...n[22]||(n[22]=[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 16:9 + 最大寬度 600px"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"ar-w"),s("("),l("span",{class:"o"},"16/9, 600px"),s(`);

`),l("span",{class:"gy"},"// 1:1 正方形 + 最大寬度 300（自動補 px）"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"ar-w"),s("("),l("span",{class:"o"},"1/1, 300"),s(`);

`),l("span",{class:"gy"},"// 只設定寬度（不設定比例）"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"ar-w"),s("("),l("span",{class:"o"},"null, 80%"),s(`);

`),l("span",{class:"gy"},"// 只設定比例（不限制寬度）"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"ar-w"),s("("),l("span",{class:"o"},"4/3"),s(");")])],-1)])]),_:1}),o(e,{value:"1"},{default:a(()=>[...n[23]||(n[23]=[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 16:9 + 最大寬度 600px"),s(`
aspect-ratio: `),l("span",{class:"o"},"16/9"),s(`;
width: `),l("span",{class:"o"},"100%"),s(`;
max-width: `),l("span",{class:"o"},"600px"),s(`;

`),l("span",{class:"gy"},"// 1:1 正方形 + 最大寬度 300（自動補 px）"),s(`
aspect-ratio: `),l("span",{class:"o"},"1/1"),s(`;
width: `),l("span",{class:"o"},"100%"),s(`;
max-width: `),l("span",{class:"o"},"300px"),s(`;

`),l("span",{class:"gy"},"// 只設定寬度（不設定比例）"),s(`
width: `),l("span",{class:"o"},"100%"),s(`;
max-width: `),l("span",{class:"o"},"80%"),s(`;

`),l("span",{class:"gy"},"// 只設定比例（不限制寬度）"),s(`
aspect-ratio: `),l("span",{class:"o"},"4/3"),s(";")])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n[55]||(n[55]=l("br",null,null,-1)),n[56]||(n[56]=l("hr",null,null,-1)),n[57]||(n[57]=l("h2",null,"媒體顯示",-1)),o(i,{class:"is:des",value:"0"},{default:a(()=>[o(t,null,{default:a(()=>[o(u,{value:"0"},{default:a(()=>[...n[30]||(n[30]=[s("object / obj",-1)])]),_:1}),o(u,{value:"1"},{default:a(()=>[...n[31]||(n[31]=[s("appearance",-1)])]),_:1})]),_:1}),o(c,null,{default:a(()=>[o(e,{value:"0"},{default:a(()=>[n[32]||(n[32]=l("h3",{class:"use-code"},[l("code",null,[s("object("),l("span",{class:"opy"},"$fit, $position"),s(")")]),s(" / "),l("code",null,[s("obj("),l("span",{class:"opy"},"$fit, $position"),s(") ")])],-1)),n[33]||(n[33]=l("p",null,"object-fit + object-position 簡寫工具，設定圖片、影片、背景媒體的裁切與對齊方式",-1)),n[34]||(n[34]=l("h4",null,"參數說明",-1)),n[35]||(n[35]=l("h4",null,"object-fit: $fit",-1)),o(d,{columns:p(r).fit.columns,rows:p(r).fit.rows},null,8,["columns","rows"]),n[36]||(n[36]=l("h4",null,"object-position: $position",-1)),o(d,{columns:p(r).position.columns,rows:p(r).position.rows},null,8,["columns","rows"]),n[37]||(n[37]=l("p",{class:"tip"},[s("若傳入非縮寫，例如 "),l("code",null,"20% 80%"),s("，也會直接套用。 ")],-1)),n[38]||(n[38]=l("h4",null,"使用範例",-1)),n[39]||(n[39]=l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 讓圖片 cover + 置中"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"object"),s("("),l("span",{class:"o"},"cov, c"),s(`);

`),l("span",{class:"gy"},"// contain + 靠上"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"object"),s("("),l("span",{class:"o"},"in, t"),s(`);

`),l("span",{class:"gy"},"// scale-down + 靠右下"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"object"),s("("),l("span",{class:"o"},"sd"),s(", "),l("span",{class:"g"},'"right bottom"'),s(`);

`),l("span",{class:"gy"},"// 只設定 object-fit"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"object"),s("("),l("span",{class:"o"},"cov"),s(`);
`)])])],-1))]),_:1}),o(e,{value:"1"},{default:a(()=>[n[40]||(n[40]=l("h3",{class:"use-code"},[l("code",null,[s("appearance("),l("span",{class:"opy"},"$arrow"),s(") ")])],-1)),n[41]||(n[41]=l("p",null,"跨瀏覽器的表單外觀重置工具，主要用來移除或修改瀏覽器預設的表單樣式（例如 select 的下拉箭頭、input 的原生外觀等）",-1)),n[42]||(n[42]=l("h4",null,"參數說明",-1)),o(d,{columns:p(g).columns,rows:p(g).rows},null,8,["columns","rows"]),n[43]||(n[43]=l("br",null,null,-1)),n[44]||(n[44]=l("div",{class:"tip"},[l("p",null,"常用值："),l("ul",null,[l("li",null,"none → 移除預設外觀（最常用）"),l("li",null,"auto → 使用瀏覽器預設外觀"),l("li",null,"其他自訂值（較少用）")])],-1)),n[45]||(n[45]=l("h4",null,"使用範例",-1)),n[46]||(n[46]=l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"o"},"select"),s(` {
  `),l("span",{class:"gy"},"// 移除 select 的預設箭頭"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"appearance"),s("("),l("span",{class:"o"},"none"),s(`);

  `),l("span",{class:"gy"},"// 保留預設外觀（較少用）"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"appearance"),s("("),l("span",{class:"o"},"auto"),s(`);
}
`)])])],-1))]),_:1})]),_:1})]),_:1}),n[58]||(n[58]=l("br",null,null,-1)),n[59]||(n[59]=l("hr",null,null,-1)),n[60]||(n[60]=l("h2",null,"開發輔助",-1)),o(i,{class:"is:des",value:"0"},{default:a(()=>[o(t,null,{default:a(()=>[o(u,{value:"0"},{default:a(()=>[...n[47]||(n[47]=[s("test",-1)])]),_:1})]),_:1}),o(c,null,{default:a(()=>[o(e,{value:"0"}),n[48]||(n[48]=l("h3",{class:"use-code"},[l("code",null,[s("test("),l("span",{class:"opy"},"$tip, $cr, $bg"),s(") ")])],-1)),n[49]||(n[49]=l("p",null,"開發階段用的快速 Debug 樣式工具，立即把某個元素「標記」出來，方便檢查排版、位置、層級、間距等問題",-1)),n[50]||(n[50]=l("h4",null,"參數說明",-1)),o(d,{columns:p($).columns,rows:p($).rows},null,8,["columns","rows"]),n[51]||(n[51]=l("p",{class:"tip"},[s("支援內容插槽 "),l("code",null,"@content;")],-1)),n[52]||(n[52]=l("h4",null,"使用範例",-1)),n[53]||(n[53]=l("pre",null,[l("code",null,[l("span",{class:"o"},".className"),s(` {
  `),l("span",{class:"gy"},"// 基本使用（啟用差異模式）"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"test"),s("("),l("span",{class:"o"},"1"),s(`) {
    font-size: `),l("span",{class:"o"},"20px"),s(`;
  }

  `),l("span",{class:"gy"},"// 不啟用差異模式（純色 Debug）"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"test"),s("("),l("span",{class:"o"},"false, #000, yellow"),s(`);
}`)])],-1))]),_:1})]),_:1})])}}};export{H as default};
