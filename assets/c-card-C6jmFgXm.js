import{_ as m}from"./LatticeGrammar-DVYW4YPv.js";import{_ as f,a as b,b as g,c as v,d as x}from"./TabItem-CllODmq0.js";import{_ as S}from"./LatticeBlock-Bsn5k2B1.js";import{_ as y}from"./LatticeScssCode-QiQM6fap.js";import{_ as C}from"./LatticeHeadline-BhxiByke.js";import{c as w,e as a,a as s,A as n,s as o,b as L,_ as k}from"./index-7WYnqDRJ.js";function T(N,l){const r=C,c=y,p=S,t=g,e=b,d=x,u=v,i=f,_=m;return L(),w("div",null,[a(r,{subtitle:"Components",title:"Card"}),l[13]||(l[13]=s("ul",null,[s("li",null,"卡片元件的基礎樣式"),s("li",null,"提供圖片、影片、浮層、遮罩等常見結構"),s("li",null,[n("支援 "),s("code",null,"@content"),n("，讓你在呼叫時擴充不同卡片樣式 ")])],-1)),l[14]||(l[14]=s("hr",null,null,-1)),a(p,{label:"結構與功能"},{default:o(()=>[a(c,{code:[".c-crd__pic",".c-crd__video"]}),l[0]||(l[0]=s("ul",null,[s("li",null,[n("設定 "),s("code",null,"position: relative")]),s("li",null,"作為卡片的 媒體容器（圖片或影片），方便在裡面放置浮層或遮罩")],-1)),l[1]||(l[1]=s("br",null,null,-1)),a(c,{code:[".c-crd__lbx",".c-crd__float"]}),l[2]||(l[2]=s("ul",null,[s("li",null,[n("設定 "),s("code",null,"position: absolute"),n("，並置中")]),s("li",null,"適合用來放置 浮動內容（例如播放按鈕、文字標籤）")],-1)),l[3]||(l[3]=s("br",null,null,-1)),a(c,{code:[".c-crd__mask",".c-crd__mk"]}),l[4]||(l[4]=s("ul",null,[s("li",null,"設定為絕對定位，填滿整個卡片"),s("li",null,"常用於 遮罩層（例如半透明背景、hover 效果）")],-1)),l[5]||(l[5]=s("br",null,null,-1)),l[6]||(l[6]=s("hr",null,null,-1))]),_:1}),a(p,{label:"使用範例"},{default:o(()=>[a(i,{class:"is:des",value:"0"},{default:o(()=>[a(e,null,{default:o(()=>[a(t,{value:"0"},{default:o(()=>[...l[7]||(l[7]=[n("SCSS",-1)])]),_:1}),a(t,{value:"1"},{default:o(()=>[...l[8]||(l[8]=[n("HTML",-1)])]),_:1})]),_:1}),a(u,null,{default:o(()=>[a(d,{value:"0"},{default:o(()=>[...l[9]||(l[9]=[s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"components.card()"),n(` {
  `),s("span",{class:"o"},"&--shadow"),n(` {
    box-shadow: `),s("span",{class:"o"},"#007bff"),n(`;
    border-radius: `),s("span",{class:"o"},"#fff"),n(`;
    overflow `),s("span",{class:"o"},"20px"),n(`;
  }
}

`),s("span",{class:"gy"}," // 其他用法 .c-crd-* .c-crd:* "),n(`
`),s("span",{class:"o"},".c-crd-shadow"),n(` {
  box-shadow: `),s("span",{class:"o"},"#007bff"),n(`;
  border-radius: `),s("span",{class:"o"},"#fff"),n(`;
  overflow `),s("span",{class:"o"},"20px"),n(`;

  `),s("span",{class:"o"},[n(".c-crd__"),s("span",{class:"opy"},"xxx")]),n(` {
    `),s("span",{class:"gy"}," // 自行設定 ... "),n(`
  }
}
`)])])],-1)])]),_:1})]),_:1}),a(d,{value:"1"},{default:o(()=>[...l[10]||(l[10]=[s("div",null,[s("pre",null,[s("code",null,[s("span",{class:"r"},[n('<div class="'),s("span",{class:"g"},"c-crd c-crd--shadow"),n('">')]),n(`
  `),s("span",{class:"r"},[n('<div class="'),s("span",{class:"g"},"c-crd__pic"),n('">')]),n(`
    `),s("span",{class:"r"},[n('<img src="'),s("span",{class:"g"},"image.jpg"),n('" alt="'),s("span",{class:"g"},"Card Image"),n('">')]),n(`
    `),s("span",{class:"r"},[n('<div class="'),s("span",{class:"g"},"c-crd__mask"),n('">')]),s("span",{class:"r"},"</div>"),n(`
    `),s("span",{class:"r"},[n('<div class="'),s("span",{class:"g"},"c-crd__lbx"),n('">')]),n("浮層內容"),s("span",{class:"r"},"</div>"),n(`
  `),s("span",{class:"r"},"</div>"),n(`
`),s("span",{class:"r"},"</div>"),n(`

`),s("span",{class:"gy"}," // 其他用法 .c-crd-* .c-crd:* "),n(`
`),s("span",{class:"r"},[n('<div class="'),s("span",{class:"g"},"c-crd-shadow"),n('">')]),n(`
  `),s("span",{class:"r"},[n('<div class="'),s("span",{class:"g"},[n("c-crd__"),s("span",{class:"opy"},"xxx")]),n('"></div>')]),n(`
`),s("span",{class:"r"},"</div>")])])],-1)])]),_:1})]),_:1})]),_:1}),l[15]||(l[15]=s("br",null,null,-1)),l[16]||(l[16]=s("hr",null,null,-1)),a(p,{label:"設定方式"},{default:o(()=>[a(c,{code:"components.card"}),a(_,{code:"components.card",hideVar:""}),l[11]||(l[11]=s("h4",{class:"mb:2"},"SCSS file setting",-1)),l[12]||(l[12]=s("pre",{class:"mt:0"},[s("code",null,[s("span",{class:"gy"},"// 引入 LatticeCSS components"),n(`
`),s("span",{class:"p"},"@use"),n(),s("span",{class:"g"},"'LatticeCSS/components'"),n(`;

`),s("span",{class:"gy"},"// 初始化 card"),n(`
`),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"components.card"),n(`() {
  `),s("span",{class:"gy"},"// 通用樣式自行擴充 ..."),n(`
}

`),s("span",{class:"gy"},"// 其他用法 : .c-crd-*, .c-crd:*"),n(`
`),s("span",{class:"o"},[n(".c-crd-"),s("span",{class:"opy"},"className")]),n(" { ... }")])],-1))]),_:1})])}const B={},A=k(B,[["render",T]]);export{A as default};
