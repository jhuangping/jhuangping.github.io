import{_ as b}from"./LatticeGrammar-Cd3yeHcz.js";import{_,a as f,b as g,c as v,d as B}from"./TabItem-mXcBkgmD.js";import{_ as S}from"./LatticeBlock-BH36mF_z.js";import{_ as x}from"./LatticeScssCode-D1xrZD_7.js";import{_ as y}from"./LatticeHeadline-DbmhXlwD.js";import{c as L,e as a,a as n,A as s,s as o,b as C,_ as T}from"./index-CY5MHss3.js";function N(k,l){const u=y,p=x,e=S,c=g,i=f,t=B,r=v,d=_,m=b;return C(),L("div",null,[a(u,{subtitle:"Components",title:"Banner"}),l[14]||(l[14]=n("p",null,"Banner 元件樣式 的工具。提供一套基礎結構與常用子元素 class，快速生成一個具有圖片、文字資訊層的 Banner 區塊",-1)),l[15]||(l[15]=n("p",{class:"mb:2"},"主要用途",-1)),l[16]||(l[16]=n("ul",{class:"mt:0"},[n("li",null,"統一管理 Banner 元件的樣式。"),n("li",null,"提供容器、圖片、文字資訊層的結構。"),n("li",null,[s("支援 "),n("code",null,"@content"),s(" 插入，方便在呼叫時擴充 ")])],-1)),l[17]||(l[17]=n("hr",null,null,-1)),l[18]||(l[18]=n("h2",null,"結構與功能",-1)),a(e,{label:"基礎樣式"},{default:o(()=>[a(p,{code:["c-bn-*","c-bn:*"]}),l[0]||(l[0]=n("p",{class:"mb:2"},[s("適用於 "),n("code",null,".c-bn"),s(" 以及所有以 "),n("code",null,"c-bn-*"),s(" 或 "),n("code",null,"c-bn:*"),s(" 開頭的 class")],-1)),l[1]||(l[1]=n("ul",{class:"mt:0"},[n("li",null,"移除行高，避免圖片下方空隙"),n("li",null,[s("設定 "),n("code",null,"overflow: hidden"),s(" 與 "),n("code",null,"position: relative"),s("，方便後續定位")])],-1)),l[2]||(l[2]=n("br",null,null,-1))]),_:1}),a(e,{label:"Banner 控制容器"},{default:o(()=>[a(p,{code:".c-bn__ctr"}),l[3]||(l[3]=n("ul",null,[n("li",null,[n("code",null,"max-width: 100%"),s(" → 保持寬度自適應")]),n("li",null,[n("code",null,"position: relative"),s(" → 作為圖片或資訊層的定位基準")])],-1)),l[4]||(l[4]=n("br",null,null,-1))]),_:1}),a(e,{label:"Banner 資訊層"},{default:o(()=>[a(p,{code:".c-bn__info"}),l[5]||(l[5]=n("ul",null,[n("li",null,"使用 Flexbox → 置中對齊文字或內容"),n("li",null,"絕對定位填滿整個 Banner"),n("li",null,[n("code",null,"line-height: lh(24)"),s(" → 使用自訂函式計算文字行高")]),n("li",null,[n("code",null,"z-index: 3"),s(" → 保證文字層在圖片之上")])],-1)),l[6]||(l[6]=n("br",null,null,-1))]),_:1}),a(e,{label:"Banner 圖片層"},{default:o(()=>[a(p,{code:[".c-bn__pic",".c-bn__img",".c-bn__bg"]}),l[7]||(l[7]=n("ul",null,[n("li",null,[n("code",null,"width: 100%"),s(" → 圖片寬度自適應")]),n("li",null,[n("code",null,"min-height: 150px"),s(" → 保持最小高度")]),n("li",null,[s("內部 "),n("code",null,"img"),s(" → 設定 "),n("code",null,"width: 100%"),s("，確保圖片填滿容器")])],-1))]),_:1}),l[19]||(l[19]=n("hr",null,null,-1)),a(e,{label:"使用範例"},{default:o(()=>[a(d,{class:"is:des",value:"0"},{default:o(()=>[a(i,null,{default:o(()=>[a(c,{value:"0"},{default:o(()=>[...l[8]||(l[8]=[s("SCSS",-1)])]),_:1}),a(c,{value:"1"},{default:o(()=>[...l[9]||(l[9]=[s("HTML",-1)])]),_:1})]),_:1}),a(r,null,{default:o(()=>[a(t,{value:"0"},{default:o(()=>[...l[10]||(l[10]=[n("div",null,[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 範例 1 : 資訊層字是白色 | 字級 2rem"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.banner()"),s(` {
  `),n("span",{class:"o"},"&__info"),s(` {
    color: `),n("span",{class:"o"},"#fff"),s(`;
    font-size: `),n("span",{class:"o"},"2rem"),s(`;
  }
}

`),n("span",{class:"gy"},"// 範例 2 : 資訊層字是紅色 | 字級與 範例 1 相同"),s(`
`),n("span",{class:"o"},".c-bn-className"),s(` {
  `),n("span",{class:"o"},".c-bn__info"),s(` {
    color: `),n("span",{class:"o"},"#f00"),s(`;
  }
}`)])])],-1)])]),_:1}),a(t,{value:"1"},{default:o(()=>[...l[11]||(l[11]=[n("div",null,[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 範例 1 : 資訊層字是白色 | 字級 2rem"),s(`
`),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn"),s('">')]),s(`
  `),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn__ctr"),s('">')]),s(`
    `),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn__pic"),s('">')]),s(`
      `),n("span",{class:"r"},[s('<img src="'),n("span",{class:"g"},"banner.jpg"),s('" alt="'),n("span",{class:"g"},"Banner"),s('">')]),s(`
    `),n("span",{class:"r"},"</div>"),s(`
    `),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn__info"),s('">')]),s(`
      `),n("span",{class:"r"},"<h2>"),s("歡迎來到網站"),n("span",{class:"r"},"</h2>"),s(`
    `),n("span",{class:"r"},"</div>"),s(`
  `),n("span",{class:"r"},"</div>"),s(`
`),n("span",{class:"r"},"</div>"),s(`

`),n("span",{class:"gy"},"// 範例 2 : 資訊層字是紅色 | 字級與 範例 1 相同"),s(`
`),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn-className"),s('">')]),s(`
  `),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn__ctr"),s('">')]),s(`
    `),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn__pic"),s('">')]),s(`
      `),n("span",{class:"r"},[s('<img src="'),n("span",{class:"g"},"banner.jpg"),s('" alt="'),n("span",{class:"g"},"Banner"),s('">')]),s(`
    `),n("span",{class:"r"},"</div>"),s(`
    `),n("span",{class:"r"},[s('<div class="'),n("span",{class:"g"},"c-bn__info"),s('">')]),s(`
      `),n("span",{class:"r"},"<h2>"),s("歡迎來到網站"),n("span",{class:"r"},"</h2>"),s(`
    `),n("span",{class:"r"},"</div>"),s(`
  `),n("span",{class:"r"},"</div>"),s(`
`),n("span",{class:"r"},"</div>")])])],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),l[20]||(l[20]=n("br",null,null,-1)),l[21]||(l[21]=n("hr",null,null,-1)),a(e,{label:"設定方式"},{default:o(()=>[a(p,{code:"components.banner"}),a(m,{code:"components.banner",hideVar:""}),l[12]||(l[12]=n("h4",{class:"mb:2"},"SCSS file setting",-1)),l[13]||(l[13]=n("pre",{class:"mt:0"},[n("code",null,[n("span",{class:"gy"},"// 引入 LatticeCSS components"),s(`
`),n("span",{class:"p"},"@use"),s(),n("span",{class:"g"},"'LatticeCSS/components'"),s(`;

`),n("span",{class:"gy"},"// 初始化 banner"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.banner"),s(`() {
  `),n("span",{class:"gy"},"// 通用樣式自行擴充 ..."),s(`
}

`),n("span",{class:"gy"},"// 其他用法 : .c-bn-*, .c-bn:*"),s(`
`),n("span",{class:"o"},[s(".c-bn-"),n("span",{class:"opy"},"className")]),s(" { ... }")])],-1))]),_:1})])}const w={},A=T(w,[["render",N]]);export{A as default};
