import{_}from"./LatticeGrammar-B3OAbBSv.js";import{_ as f,a as b,b as S,c as g,d as v}from"./TabItem-DofG51Ln.js";import{_ as L}from"./LatticeBlock-BAOOrMdK.js";import{_ as k}from"./LatticeScssCode-BE0BRj7w.js";import{_ as C}from"./LatticeHeadline-CG1XX9Zt.js";import{c as T,e as o,i as x,a as l,s as t,b as B,A as n,_ as V}from"./index-DL_OigAO.js";function y(I,s){const c=C,e=k,a=L,u=S,i=b,p=v,r=g,d=f,m=_;return B(),T("div",null,[o(c,{subtitle:"Components",title:"select"}),s[13]||(s[13]=x('<mark>FIXME: 待調整更彈性可維護</mark><p class="mb:2">建立 下拉選單 (Select 元件) 的基礎樣式，讓原生 <code>&lt;select&gt;</code> 看起來更一致、更美觀，同時保留擴充的彈性</p><ul class="mt:0"><li>統一管理 下拉選單容器 與 <code>&lt;select&gt;</code> 標籤的樣式</li><li>自訂下拉箭頭（使用 <code>::after</code>）</li><li>移除瀏覽器預設樣式（例如 IE 的展開按鈕）。</li><li>支援 <code>@content</code> 擴充，方便自訂不同主題</li></ul><hr>',4)),o(a,{label:"結構與功能"},{default:t(()=>[o(e,{code:".c-select"}),s[0]||(s[0]=l("p",null,"外層容器",-1)),s[1]||(s[1]=l("ul",null,[l("li",null,[n("讓容器包住 "),l("code",null,"<select>"),n("，並能放置自訂箭頭")]),l("li",null,"半透明白色背景 / 基礎邊框 / 避免額外間距"),l("li",null,[n("箭頭 ("),l("code",null,"&::after"),n(")")]),l("ul",null,[l("li",null,[n("使用 "),l("code",null,"content: ''"),n(" + "),l("code",null,"border"),n(" 來畫出一個小箭頭")]),l("li",null,"放在右側置中")])],-1)),s[2]||(s[2]=l("br",null,null,-1)),o(e,{code:"select"}),s[3]||(s[3]=l("p",null,"下拉選單本體",-1)),s[4]||(s[4]=l("ul",null,[l("li",null,"移除預設邊框，改用圓角"),l("li",null,"移除瀏覽器預設樣式（尤其是箭頭）"),l("li",null,"預留右側空間給自訂箭頭"),l("li",null,"自適應寬度"),l("li",null,"移除 focus 外框"),l("li",null,[n("特殊處理"),l("ul",null,[l("li",null,"隱藏 IE 的展開按鈕，避免樣式衝突")])])],-1)),s[5]||(s[5]=l("br",null,null,-1)),s[6]||(s[6]=l("hr",null,null,-1))]),_:1}),o(a,{label:"使用範例"},{default:t(()=>[o(d,{class:"is:des",value:"0"},{default:t(()=>[o(i,null,{default:t(()=>[o(u,{value:"0"},{default:t(()=>[...s[7]||(s[7]=[n("SCSS",-1)])]),_:1}),o(u,{value:"1"},{default:t(()=>[...s[8]||(s[8]=[n("HTML",-1)])]),_:1})]),_:1}),o(r,null,{default:t(()=>[o(p,{value:"0"},{default:t(()=>[...s[9]||(s[9]=[l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"select()"),n(` {
  `),l("span",{class:"o"},"&--primary"),n(` {
    border-color: `),l("span",{class:"o"},"#007bff"),n(`;

    `),l("span",{class:"o"},"select"),n(` {
      background: `),l("span",{class:"o"},"#fff"),n(`;
      color: `),l("span",{class:"o"},"#007bff"),n(`;
    }
  }
}`)])])],-1)])]),_:1}),o(p,{value:"1"},{default:t(()=>[...s[10]||(s[10]=[l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"r"},[n('<div class="'),l("span",{class:"g"},"c-select c-select--primary"),n('">')]),n(`
  `),l("span",{class:"r"},"<select>"),n(`
    `),l("span",{class:"r"},"<option>"),n("選項一"),l("span",{class:"r"},"</option>"),n(`
    `),l("span",{class:"r"},"<option>"),n("選項二"),l("span",{class:"r"},"</option>"),n(`
    `),l("span",{class:"r"},"<option>"),n("選項三"),l("span",{class:"r"},"</option>"),n(`
  `),l("span",{class:"r"},"</select>"),n(`
`),l("span",{class:"r"},"</div>")])])],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),s[14]||(s[14]=l("br",null,null,-1)),s[15]||(s[15]=l("hr",null,null,-1)),o(a,{label:"設定方式"},{default:t(()=>[o(e,{code:"components.path"}),o(m,{code:"components.path",hideVar:""}),s[11]||(s[11]=l("h4",{class:"mb:2"},"SCSS file setting",-1)),s[12]||(s[12]=l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"gy"},"// 引入 LatticeCSS components"),n(`
`),l("span",{class:"p"},"@use"),n(),l("span",{class:"g"},"'LatticeCSS/components'"),n(`;

`),l("span",{class:"gy"},"// 初始化 select"),n(`
`),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"components.select"),n(`() {
  自訂樣式 ...
}`)])],-1))]),_:1})])}const E={},A=V(E,[["render",y]]);export{A as default};
