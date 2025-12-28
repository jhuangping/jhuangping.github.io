import{_ as m}from"./LatticeGrammar-C35fjvlw.js";import{_,a as f,b as g,c as x,d as y}from"./TabItem-DVruqs2u.js";import{_ as S}from"./LatticeBlock-CUTZpv0x.js";import{_ as k}from"./LatticeScssCode-BG3glMV4.js";import{_ as v}from"./LatticeHeadline-CuMDeEiL.js";import{c as L,e as a,a as n,A as s,s as t,b as B,_ as C}from"./index-CRgGQZIT.js";function T(V,l){const r=v,o=k,p=S,c=g,e=f,u=y,b=x,d=_,i=m;return B(),L("div",null,[a(r,{subtitle:"Components",title:"Button"}),l[12]||(l[12]=n("p",{class:"mb:0"},[s("按鈕元件基礎樣式 的工具。它提供一套通用的 "),n("code",null,".c-btn"),s(" 樣式規範，並支援子元素（文字、標籤），同時允許在呼叫時插入額外樣式")],-1)),l[13]||(l[13]=n("ul",{class:"mt:0"},[n("li",null,"統一管理 按鈕元件的基礎樣式"),n("li",null,[s("提供 "),n("code",null,".c-btn"),s(" 與其子元素的結構")]),n("li",null,[s("支援 "),n("code",null,"@content"),s(" 擴充，方便在呼叫時加入自訂樣式 ")])],-1)),l[14]||(l[14]=n("hr",null,null,-1)),a(p,{label:"結構與功能"},{default:t(()=>[l[0]||(l[0]=n("h4",null,"相關 class",-1)),a(o,{code:".c-btn"}),l[1]||(l[1]=n("p",{class:"mb:0"},[s("適用於 "),n("code",null,".c-btn"),s(" 以及所有以 "),n("code",null,"c-btn-"),s(" 或 "),n("code",null,"c-btn:"),s(" 開頭的 class")],-1)),l[2]||(l[2]=n("ul",{class:"mt:0"},[n("li",null,"鼠移上去顯示可點擊"),n("li",null,"保持文字垂直居中"),n("li",null,"文字置中"),n("li",null,"與其他 inline 元素對齊"),n("li",null,"防止文字換行"),n("li",null,"禁止文字被選取"),n("li",null,"移除預設邊框"),n("li",null,"提供平滑的互動效果"),n("li",null,"修正 Safari 在 border-radius 下的渲染問題")],-1)),l[3]||(l[3]=n("br",null,null,-1)),a(o,{code:[".c-btn__txt",".c-btn__name",".c-btn__label"]}),l[4]||(l[4]=n("p",null,"子元素文字樣式，繼承父元素顏色",-1)),l[5]||(l[5]=n("p",{class:"tip"},"這樣可以確保按鈕文字顏色與按鈕本身一致，方便主題化",-1))]),_:1}),l[15]||(l[15]=n("hr",null,null,-1)),a(p,{label:"使用範例"},{default:t(()=>[a(d,{class:"is:des",value:"0"},{default:t(()=>[a(e,null,{default:t(()=>[a(c,{value:"0"},{default:t(()=>[...l[6]||(l[6]=[s("SCSS",-1)])]),_:1}),a(c,{value:"1"},{default:t(()=>[...l[7]||(l[7]=[s("HTML",-1)])]),_:1})]),_:1}),a(b,null,{default:t(()=>[a(u,{value:"0"},{default:t(()=>[...l[8]||(l[8]=[n("div",null,[n("pre",null,[n("code",null,[n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.button()"),s(` {
  `),n("span",{class:"o"},"&--primary"),s(` {
    background: `),n("span",{class:"o"},"#007bff"),s(`;
    color: `),n("span",{class:"o"},"#fff"),s(`;
    padding: `),n("span",{class:"o"},"10px 20px"),s(`;
    border-radius: `),n("span",{class:"o"},"4px"),s(`;
  }

  `),n("span",{class:"o"},"&--danger"),s(` {
    background: `),n("span",{class:"o"},"#dc3545"),s(`;
    color: `),n("span",{class:"o"},"#fff"),s(`;
    padding: `),n("span",{class:"o"},"10px 20px"),s(`;
    border-radius: `),n("span",{class:"o"},"4px"),s(`;
  }
}

`),n("span",{class:"gy"}," // 其他用法 .c-btn-* .c-btn:* "),s(`
`),n("span",{class:"o"},".c-btn-primary"),s(` {
  background: `),n("span",{class:"o"},"#007bff"),s(`;
  color: `),n("span",{class:"o"},"#fff"),s(`;
  padding: `),n("span",{class:"o"},"10px 20px"),s(`;
  border-radius: `),n("span",{class:"o"},"4px"),s(`;

  `),n("span",{class:"o"},".c-btn__label"),s(` {
    `),n("span",{class:"gy"}," // 自行設定 ... "),s(`
  }
}

`),n("span",{class:"o"},".c-btn-danger"),s(` {
  background: `),n("span",{class:"o"},"#dc3545"),s(`;
  color: `),n("span",{class:"o"},"#fff"),s(`;
  padding: `),n("span",{class:"o"},"10px 20px"),s(`;
  border-radius: `),n("span",{class:"o"},"4px"),s(`;

  `),n("span",{class:"o"},".c-btn__label"),s(` {
    `),n("span",{class:"gy"}," // 自行設定 ... "),s(`
  }
}
`)])])],-1)])]),_:1}),a(u,{value:"1"},{default:t(()=>[...l[9]||(l[9]=[n("div",null,[n("pre",null,[n("code",null,[n("span",{class:"r"},[s('<button class="'),n("span",{class:"g"},"c-btn c-btn--primary"),s('">')]),s(`
  `),n("span",{class:"r"},[s('<span class="'),n("span",{class:"g"},"c-btn__txt"),s('">')]),s("送出"),n("span",{class:"r"},"</span>"),s(`
`),n("span",{class:"r"},"</button>"),s(`

`),n("span",{class:"r"},[s('<button class="'),n("span",{class:"g"},"c-btn c-btn--danger"),s('">')]),s(`
  `),n("span",{class:"r"},[s('<span class="'),n("span",{class:"g"},"c-btn__label"),s('">')]),s("刪除"),n("span",{class:"r"},"</span>"),s(`
`),n("span",{class:"r"},"</button>"),s(`

`),n("span",{class:"gy"}," // 其他用法 .c-btn-* .c-btn:* "),s(`
`),n("span",{class:"r"},[s('<button class="'),n("span",{class:"g"},"c-btn-primary"),s('">')]),s(`
  `),n("span",{class:"r"},[s('<span class="'),n("span",{class:"g"},"c-btn__txt"),s('">')]),s("送出"),n("span",{class:"r"},"</span>"),s(`
`),n("span",{class:"r"},"</button>"),s(`

`),n("span",{class:"r"},[s('<button class="'),n("span",{class:"g"},"c-btn-danger"),s('">')]),s(`
  `),n("span",{class:"r"},[s('<span class="'),n("span",{class:"g"},"c-btn__label"),s('">')]),s("刪除"),n("span",{class:"r"},"</span>"),s(`
`),n("span",{class:"r"},"</button>"),s(`
`)])])],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),l[16]||(l[16]=n("br",null,null,-1)),l[17]||(l[17]=n("hr",null,null,-1)),a(p,{label:"設定方式"},{default:t(()=>[a(o,{code:"components.button"}),a(i,{code:"components.button",hideVar:""}),l[10]||(l[10]=n("h4",{class:"mb:2"},"SCSS file setting",-1)),l[11]||(l[11]=n("pre",{class:"mt:0"},[n("code",null,[n("span",{class:"gy"},"// 引入 LatticeCSS components"),s(`
`),n("span",{class:"p"},"@use"),s(),n("span",{class:"g"},"'LatticeCSS/components'"),s(`;

`),n("span",{class:"gy"},"// 初始化 button"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.button"),s(`() {
  `),n("span",{class:"gy"},"// 通用樣式自行擴充 ..."),s(`
}

`),n("span",{class:"gy"},"// 其他用法 : .c-btn-*, .c-btn:*"),s(`
`),n("span",{class:"o"},[s(".c-btn-"),n("span",{class:"opy"},"className")]),s(" { ... }")])],-1))]),_:1})])}const N={},G=C(N,[["render",T]]);export{G as default};
