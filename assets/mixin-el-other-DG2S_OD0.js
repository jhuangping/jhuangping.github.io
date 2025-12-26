import{_ as j,a as S,b as T,c as C,d as L}from"./TabItem-CsKq3B1u.js";import{_ as B}from"./LatticeTable-DXKkUU_6.js";import{_ as D}from"./LatticeGrammar-TWljJxw9.js";import{_ as N}from"./LatticeScssCode-DHOb7VBs.js";import{_ as W}from"./LatticeHeadline-BqNZ9NBs.js";import{c as k,e as o,a as s,s as a,b as P,A as l,g as e}from"./index-BrAGrMUl.js";const b={columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","max-width 的值，若為 <code>null</code> 則不輸出","—"]},{cells:["<code>$w</code>","width 的值","<code>100%</code>"]}]},f={columns:["參數","說明","預設"],rows:[{cells:["<code>$h</code>","高度比例","<code>9</code>"]},{cells:["<code>$w</code>","寬度比例","<code>16</code>"]},{cells:["<code>$patch</code>","額外補上 padding-top（px）","<code>null</code>"]}]},g={columns:["參數","說明","預設"],rows:[{cells:["<code>$w</code>","寬度比例","<code>16</code>"]},{cells:["<code>$h</code>","高度比例","<code>9</code>"]}]},v={columns:["參數","說明","預設"],rows:[{cells:["<code>$ar</code>","	aspect-ratio 值（如 <code>16/9</code>、<code>1/1</code>）","<code>null</code>"]},{cells:["<code>$w</code>","最大寬度（可為 px、%、full、無單位數字）","<code>null</code>"]}]},w={fit:{columns:["縮寫","轉換後","說明"],rows:[{cells:["<code>n</code>","none","不縮放"]},{cells:["<code>in</code> / <code>con</code>","contain","完整顯示，可能留白"]},{cells:["<code>out</code> / <code>cov</code>","cover","填滿容器，可能裁切"]},{cells:["<code>f</code>","fill","拉伸填滿"]},{cells:["<code>full</code> / <code>sd</code>","scale-down","盡量縮小但不放大"]}]},position:{columns:["縮寫","轉換後"],rows:[{cells:["<code>t</code>","top"]},{cells:["<code>b</code>","bottom"]},{cells:["<code>l</code>","left"]},{cells:["<code>r</code>","right"]},{cells:["<code>c</code>","center"]}]}},$={columns:["參數","說明","預設"],rows:[{cells:["<code>$arrow</code>","appearance 的值（通常為 <code>none</code>）","<code>none</code>"]}]},x={columns:["參數","說明","預設"],rows:[{cells:["<code>$tip</code>","是否啟用 <code>mix-blend-mode: difference</code>（false = 關閉，true = 開啟）","<code>false</code>"]},{cells:["<code>$cr</code>","文字顏色","<code>#fff</code>"]},{cells:["<code>$bg</code>","背景顏色","<code>#E06666</code>"]}]},U={__name:"mixin-el-other",setup(V){return(E,n)=>{const y=W,p=T,i=S,u=N,d=D,t=B,c=L,r=C,m=j;return P(),k("div",null,[o(y,{title:"other",subtitle:"element"}),n[40]||(n[40]=s("h2",null,"尺寸控制",-1)),o(m,{class:"is:des",value:"0"},{default:a(()=>[o(i,null,{default:a(()=>[o(p,{value:"0"},{default:a(()=>[...n[0]||(n[0]=[l("max-w",-1)])]),_:1}),o(p,{value:"1"},{default:a(()=>[...n[1]||(n[1]=[l("pa-height / pa-h",-1)])]),_:1}),o(p,{value:"2"},{default:a(()=>[...n[2]||(n[2]=[l("aspect",-1)])]),_:1}),o(p,{value:"3"},{default:a(()=>[...n[3]||(n[3]=[l("ar-w",-1)])]),_:1})]),_:1}),o(r,null,{default:a(()=>[o(c,{value:"0"},{default:a(()=>[o(u,{code:"max-w()"}),n[4]||(n[4]=s("p",null,[l("設定 "),s("code",null,"max-width"),l(" 並維持 "),s("code",null,"width"),l("，常用於圖片、容器、響應式區塊 ")],-1)),o(d,{code:"max-w",var:"$val, $w"}),o(t,{columns:e(b).columns,rows:e(b).rows},null,8,["columns","rows"]),n[5]||(n[5]=s("h4",{class:"mb:2"},"範例",-1)),n[6]||(n[6]=s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"max-w"),l("("),s("span",{class:"o"},"600px"),l(`);
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"max-w"),l("("),s("span",{class:"o"},"null, 80%"),l(`);
`)])])],-1))]),_:1}),o(c,{value:"1"},{default:a(()=>[o(u,{code:["pa-height()","pa-h()"]}),n[7]||(n[7]=s("p",null,"用於建立固定比例的容器，根據寬高比計算 padding-bottom 以維持比例（常用於影片、容器）",-1)),n[8]||(n[8]=s("p",{class:"tip"},"這是傳統 RWD 影片容器常用的寫法（YouTube 16:9 → 56.25%）",-1)),o(d,{code:[{code:"pa-height",var:"$h, $w, $patch"},{code:"pa-h",var:"$h, $w, $patch"}]}),o(t,{columns:e(f).columns,rows:e(f).rows},null,8,["columns","rows"]),n[9]||(n[9]=s("h4",{class:"mb:2"},"使用範例",-1)),n[10]||(n[10]=s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 16:9 比例"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"pa-height"),l(`();

`),s("span",{class:"gy"},"// 4:3 比例 + 額外 padding-top"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"pa-height"),l("("),s("span",{class:"o"},"3, 4, 10"),l(`);

`),s("span",{class:"gy"},"// 依圖片大小 750 x 500"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"pa-height"),l("("),s("span",{class:"o"},"500, 750"),l(`);
`)])])],-1))]),_:1}),o(c,{value:"2"},{default:a(()=>[o(u,{code:"aspect()"}),n[11]||(n[11]=s("p",null,[l("使用現代 CSS 的 "),s("code",null,"aspect-ratio"),l(" 屬性，直接設定寬高比例 ")],-1)),o(d,{code:"aspect",var:"$w, $h"}),o(t,{columns:e(g).columns,rows:e(g).rows},null,8,["columns","rows"]),n[12]||(n[12]=s("h4",{class:"mb:2"},"使用範例",-1)),n[13]||(n[13]=s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 16:9 比例"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"aspect"),l("("),s("span",{class:"o"},"16, 9"),l(`)
`),s("span",{class:"gy"},"--- ro ---"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"aspect"),l(`()

`),s("span",{class:"gy"},"// 依圖片大小 750 x 500"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"aspect"),l("("),s("span",{class:"o"},"750, 500"),l(`)
`)])])],-1))]),_:1}),o(c,{value:"3"},{default:a(()=>[o(u,{code:"ar-w()"}),n[18]||(n[18]=s("p",null,"「比例 + 寬度控制」的組合工具，用來同時設定:",-1)),n[19]||(n[19]=s("ul",null,[s("li",null,"aspect-ratio（寬高比例）"),s("li",null,"max-width（最大寬度）")],-1)),n[20]||(n[20]=s("p",null,"常用於 圖片容器、影片框、RWD 卡片、需要固定比例的 UI 元件",-1)),o(d,{code:"ar-w",var:"$ar, $w"}),o(t,{columns:e(v).columns,rows:e(v).rows},null,8,["columns","rows"]),n[21]||(n[21]=s("h4",{class:"mb:2"},"使用範例",-1)),o(m,{value:"0"},{default:a(()=>[o(i,null,{default:a(()=>[o(p,{value:"0"},{default:a(()=>[...n[14]||(n[14]=[l("SCSS",-1)])]),_:1}),o(p,{value:"1"},{default:a(()=>[...n[15]||(n[15]=[l("CSS",-1)])]),_:1})]),_:1}),o(r,null,{default:a(()=>[o(c,{value:"0"},{default:a(()=>[...n[16]||(n[16]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 16:9 + 最大寬度 600px"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"ar-w"),l("("),s("span",{class:"o"},"16/9, 600px"),l(`);

`),s("span",{class:"gy"},"// 1:1 正方形 + 最大寬度 300（自動補 px）"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"ar-w"),l("("),s("span",{class:"o"},"1/1, 300"),l(`);

`),s("span",{class:"gy"},"// 只設定寬度（不設定比例）"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"ar-w"),l("("),s("span",{class:"o"},"null, 80%"),l(`);

`),s("span",{class:"gy"},"// 只設定比例（不限制寬度）"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"ar-w"),l("("),s("span",{class:"o"},"4/3"),l(");")])],-1)])]),_:1}),o(c,{value:"1"},{default:a(()=>[...n[17]||(n[17]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 16:9 + 最大寬度 600px"),l(`
aspect-ratio: `),s("span",{class:"o"},"16/9"),l(`;
width: `),s("span",{class:"o"},"100%"),l(`;
max-width: `),s("span",{class:"o"},"600px"),l(`;

`),s("span",{class:"gy"},"// 1:1 正方形 + 最大寬度 300（自動補 px）"),l(`
aspect-ratio: `),s("span",{class:"o"},"1/1"),l(`;
width: `),s("span",{class:"o"},"100%"),l(`;
max-width: `),s("span",{class:"o"},"300px"),l(`;

`),s("span",{class:"gy"},"// 只設定寬度（不設定比例）"),l(`
width: `),s("span",{class:"o"},"100%"),l(`;
max-width: `),s("span",{class:"o"},"80%"),l(`;

`),s("span",{class:"gy"},"// 只設定比例（不限制寬度）"),l(`
aspect-ratio: `),s("span",{class:"o"},"4/3"),l(";")])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n[41]||(n[41]=s("br",null,null,-1)),n[42]||(n[42]=s("hr",null,null,-1)),n[43]||(n[43]=s("h2",null,"媒體顯示",-1)),o(m,{class:"is:des",value:"0"},{default:a(()=>[o(i,null,{default:a(()=>[o(p,{value:"0"},{default:a(()=>[...n[22]||(n[22]=[l("object / obj",-1)])]),_:1}),o(p,{value:"1"},{default:a(()=>[...n[23]||(n[23]=[l("appearance",-1)])]),_:1})]),_:1}),o(r,null,{default:a(()=>[o(c,{value:"0"},{default:a(()=>[o(u,{code:["object()","obj()"]}),n[24]||(n[24]=s("p",null,"object-fit + object-position 簡寫工具，設定圖片、影片、背景媒體的裁切與對齊方式",-1)),o(d,{code:[{code:"object",var:"$fit, $position"},{code:"obj",var:"$fit, $position"}]}),n[25]||(n[25]=s("h4",{class:"mb:2"},"$fit: object-fit",-1)),o(t,{columns:e(w).fit.columns,rows:e(w).fit.rows},null,8,["columns","rows"]),n[26]||(n[26]=s("h4",{class:"mb:2"},"$position: object-position",-1)),o(t,{columns:e(w).position.columns,rows:e(w).position.rows},null,8,["columns","rows"]),n[27]||(n[27]=s("p",{class:"tip"},[l("若傳入非縮寫，例如 "),s("code",null,"20% 80%"),l("，也會直接套用。 ")],-1)),n[28]||(n[28]=s("h4",{class:"mb:2"},"使用範例",-1)),n[29]||(n[29]=s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 讓圖片 cover + 置中"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"object"),l("("),s("span",{class:"o"},"cov, c"),l(`);

`),s("span",{class:"gy"},"// contain + 靠上"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"object"),l("("),s("span",{class:"o"},"in, t"),l(`);

`),s("span",{class:"gy"},"// scale-down + 靠右下"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"object"),l("("),s("span",{class:"o"},"sd"),l(", "),s("span",{class:"g"},'"right bottom"'),l(`);

`),s("span",{class:"gy"},"// 只設定 object-fit"),l(`
`),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"object"),l("("),s("span",{class:"o"},"cov"),l(`);
`)])])],-1))]),_:1}),o(c,{value:"1"},{default:a(()=>[o(u,{code:"appearance()"}),n[30]||(n[30]=s("p",null,"跨瀏覽器的表單外觀重置工具，主要用來移除或修改瀏覽器預設的表單樣式（例如 select 的下拉箭頭、input 的原生外觀等）",-1)),o(d,{code:"appearance",var:"$arrow"}),o(t,{columns:e($).columns,rows:e($).rows},null,8,["columns","rows"]),n[31]||(n[31]=s("br",null,null,-1)),n[32]||(n[32]=s("div",{class:"tip"},[s("p",null,"常用值："),s("ul",null,[s("li",null,"none → 移除預設外觀（最常用）"),s("li",null,"auto → 使用瀏覽器預設外觀"),s("li",null,"其他自訂值（較少用）")])],-1)),n[33]||(n[33]=s("h4",{class:"mb:2"},"使用範例",-1)),n[34]||(n[34]=s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"o"},"select"),l(` {
  `),s("span",{class:"gy"},"// 移除 select 的預設箭頭"),l(`
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"appearance"),l("("),s("span",{class:"o"},"none"),l(`);

  `),s("span",{class:"gy"},"// 保留預設外觀（較少用）"),l(`
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"appearance"),l("("),s("span",{class:"o"},"auto"),l(`);
}
`)])])],-1))]),_:1})]),_:1})]),_:1}),n[44]||(n[44]=s("br",null,null,-1)),n[45]||(n[45]=s("hr",null,null,-1)),n[46]||(n[46]=s("h2",null,"開發輔助",-1)),o(m,{class:"is:des",value:"0"},{default:a(()=>[o(i,null,{default:a(()=>[o(p,{value:"0"},{default:a(()=>[...n[35]||(n[35]=[l("test",-1)])]),_:1})]),_:1}),o(r,null,{default:a(()=>[o(c,{value:"0"},{default:a(()=>[o(u,{code:"test()"}),n[36]||(n[36]=s("p",null,"開發階段用的快速 Debug 樣式工具，立即把某個元素「標記」出來，方便檢查排版、位置、層級、間距等問題",-1)),o(d,{code:"test",var:"$tip, $cr, $bg"}),o(t,{columns:e(x).columns,rows:e(x).rows},null,8,["columns","rows"]),n[37]||(n[37]=s("p",{class:"tip"},[l("支援內容插槽 "),s("code",null,"@content;")],-1)),n[38]||(n[38]=s("h4",{class:"mb:2"},"使用範例",-1)),n[39]||(n[39]=s("pre",null,[s("code",null,[s("span",{class:"o"},".className"),l(` {
  `),s("span",{class:"gy"},"// 基本使用（啟用差異模式）"),l(`
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"test"),l("("),s("span",{class:"o"},"1"),l(`) {
    font-size: `),s("span",{class:"o"},"20px"),l(`;
  }

  `),s("span",{class:"gy"},"// 不啟用差異模式（純色 Debug）"),l(`
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"test"),l("("),s("span",{class:"o"},"false, #000, yellow"),l(`);
}`)])],-1))]),_:1})]),_:1})]),_:1})])}}};export{U as default};
