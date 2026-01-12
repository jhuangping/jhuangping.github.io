import{_ as r}from"./LatticeGrammar-BWz8UwkC.js";import{_ as e}from"./LatticeBlock-zEcopGch.js";import{_ as d}from"./LatticeScssCode-DBtHHCJS.js";import{_ as m}from"./LatticeHeadline--xzOewIS.js";import{c as b,e as o,a as l,A as s,s as u,b as c,_ as g}from"./index-Ddb2smQe.js";function x(v,n){const i=m,a=d,t=e,p=r;return c(),b("div",null,[o(i,{subtitle:"Components",title:"Lightbox"}),n[15]||(n[15]=l("p",{class:"mb:2"},"建立 Lightbox 元件 的基礎樣式，讓你能快速生成一個全螢幕的彈出視窗，常用於顯示圖片、影片（例如 YouTube）、或其他需要聚焦的內容",-1)),n[16]||(n[16]=l("ul",{class:"mt:0"},[l("li",null,"支援 開啟 / 關閉狀態 切換"),l("li",null,[s("支援 "),l("code",null,"@content"),s(" 擴充，方便自訂樣式 ")])],-1)),n[17]||(n[17]=l("hr",null,null,-1)),o(t,{label:"結構與功能"},{default:u(()=>[o(a,{code:".c-lbx"}),n[0]||(n[0]=l("p",null,"Lightbox 主容器",-1)),n[1]||(n[1]=l("ul",null,[l("li",null,"全螢幕覆蓋"),l("li",null,[s("保證在最上層 "),l("code",null,"z-index: 9999")]),l("li",null,"有過渡效果"),l("li",null,"預設隱藏狀態"),l("li",null,[s("當加上 "),l("code",null,".is-open"),s(" 或 "),l("code",null,".is:open"),s(" class 時，Lightbox 顯示並可互動")])],-1)),n[2]||(n[2]=l("br",null,null,-1)),o(a,{code:".c-lbx__ctr"}),n[3]||(n[3]=l("p",null,"中央內容容器",-1)),n[4]||(n[4]=l("ul",null,[l("li",null,"置中顯示"),l("li",null,"適合放置圖片、文字、表單或影片"),l("li",null,"有過渡效果")],-1)),n[5]||(n[5]=l("br",null,null,-1)),o(a,{code:".c-lbx__youtube"}),n[6]||(n[6]=l("p",null,"YouTube 影片容器",-1)),n[7]||(n[7]=l("ul",null,[l("li",null," 保持比例高度 & 支持響應式"),l("li",null,[s("內部 "),l("code",null,"iframe"),s(" → 絕對定位，填滿容器")])],-1)),n[8]||(n[8]=l("br",null,null,-1)),o(a,{code:".c-lbx__mask"}),n[9]||(n[9]=l("p",null,"遮罩層",-1)),n[10]||(n[10]=l("ul",null,[l("li",null,"絕對定位，覆蓋整個 Lightbox"),l("li",null,"半透明黑色背景 (用來暗化背景，聚焦內容)")],-1)),n[11]||(n[11]=l("br",null,null,-1))]),_:1}),n[18]||(n[18]=l("hr",null,null,-1)),o(t,{label:"使用範例"},{default:u(()=>[...n[12]||(n[12]=[l("pre",null,[l("code",null,[l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx is-open c-lbx--image"),s('">')]),s(`
  `),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx__ctr"),s('">')]),s(`
    `),l("span",{class:"r"},[s('<img src="'),l("span",{class:"g"},"photo.jpg"),s('" alt="'),l("span",{class:"g"},"Lightbox Image"),s('">')]),s(`
  `),l("span",{class:"r"},"</div>"),s(`
  `),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx__mask"),s('">')]),l("span",{class:"r"},"</div>"),s(`
`),l("span",{class:"r"},"</div>"),s(`

`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx is-open"),s('">')]),s(`
  `),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx__ctr"),s('">')]),s(`
    `),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx__youtube"),s('">')]),s(`
      `),l("span",{class:"r"},[s('<iframe src="'),l("span",{class:"g"},"https://www.youtube.com/embed/xxxx"),s('" frameborder="'),l("span",{class:"g"},"0"),s('">')]),l("span",{class:"r"},"</iframe>"),s(`
    `),l("span",{class:"r"},"</div>"),s(`
  `),l("span",{class:"r"},"</div>"),s(`
  `),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"c-lbx__mask"),s('"></div>')]),s(`
`),l("span",{class:"r"},"</div>")])],-1)])]),_:1}),n[19]||(n[19]=l("br",null,null,-1)),n[20]||(n[20]=l("hr",null,null,-1)),o(t,{label:"設定方式"},{default:u(()=>[o(a,{code:"components.lightbox"}),o(p,{code:"components.lightbox",hideVar:""}),n[13]||(n[13]=l("h4",{class:"mb:2"},"SCSS file setting",-1)),n[14]||(n[14]=l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"gy"},"// 引入 LatticeCSS components"),s(`
`),l("span",{class:"p"},"@use"),s(),l("span",{class:"g"},"'LatticeCSS/components'"),s(`;

`),l("span",{class:"gy"},"// 初始化 lightbox"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"components.lightbox"),s(`() {
  自訂樣式 ...
}`)])],-1))]),_:1})])}const f={},y=g(f,[["render",x]]);export{y as default};
