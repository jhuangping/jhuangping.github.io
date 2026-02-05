import{_ as i}from"./LatticeBlock-DCNh2nnb.js";import{_ as r}from"./LatticeTable-Bq7YFgsE.js";import{_ as m}from"./LatticeGrammar-KatcUOyl.js";import{_ as w}from"./LatticeScssCode-Cv2UOIE8.js";import{_}from"./LatticeHeadline-CHLOaSjt.js";import{r as b,c as f,e as a,a as l,A as s,s as c,b as g}from"./index-lg5BKigg.js";const W={__name:"l-wrap",setup(y){const p=b({columns:["參數","說明","type","預設"],rows:[{cells:["<code>$type</code>","容器類型（media / clamp)","<code>String</code>","<code>clamp</code>"]},{cells:["<code>$baseWidth</code>","基礎容器寬度（px）","<code>Number</code>","<code>1024</code>"]},{cells:["<code>$both</code>","左右 padding 總和（px）","<code>Number</code>","<code>15</code>"]},{cells:["<code>$customName</code>","是否啟用「自定義名稱」模式","<code>Boolean</code>","<code>false</code>"]},{cells:["<code>$useWidth</code>","動態寬度容器設置","<code>Array</code>","內建一組 map"]}]});return(v,n)=>{const e=_,u=w,t=m,d=r,o=i;return g(),f("div",null,[a(e,{subtitle:"Layout",title:"Wrap"}),n[9]||(n[9]=l("p",null,[s("容器寬度管理工具，主要用來建立一套統一的「版心容器」樣式，支援不同寬度、滿版、以及特殊容器（html、main）"),l("br"),s(" 讓版面在不同螢幕寬度下保持一致的排版基準，並且能快速切換容器大小 ")],-1)),n[10]||(n[10]=l("hr",null,null,-1)),a(o,{label:"功能說明"},{default:c(()=>[a(u,{code:"layout.wrap"}),a(t,{code:"layout.wrap",hideVar:""}),a(d,{columns:p.value.columns,rows:p.value.rows},null,8,["columns","rows"]),n[1]||(n[1]=l("h4",{class:"mb:2"},"用途",-1)),n[2]||(n[2]=l("ul",{class:"mt:0"},[l("li",null,[s("統一管理 "),l("code",null,".l-wp"),s(" 系列容器樣式")]),l("li",null,[s("自動產生多種不同寬度 class，例如："),l("code",null,".l-wp-1024"),s(", "),l("code",null,".l-wp-1440"),s(", "),l("code",null,".l-wp-720")]),l("li",null,[s("支援特殊版本："),l("code",null,"html"),s("、"),l("code",null,"main"),s("、"),l("code",null,"full"),s("、"),l("code",null,"max")])],-1)),n[3]||(n[3]=l("h4",{class:"mb:2"},"功能細節",-1)),n[4]||(n[4]=l("ul",{class:"mt:0"},[l("li",null,[s("特殊容器"),l("ul",null,[l("li",null,[l("code",null,".l-wp-html"),s(" / "),l("code",null,".l-wp:html"),s(" → 滿版 HTML 容器，最小寬度 320px")]),l("li",null,[l("code",null,".l-wp-main"),s(" / "),l("code",null,".l-wp:main"),s(" → 滿版 Main 容器")])])]),l("li",null,[s("動態寬度容器"),l("ul",null,[l("li",null,[s("預設會依 $useWidth 產生："),l("code",null,".l-wp-1680"),s(", "),l("code",null,".l-wp-1440"),s(", "),l("code",null,".l-wp-1366"),s(", "),l("code",null,".l-wp-1140"),s(", "),l("code",null,".l-wp-1024"),s(", "),l("code",null,".l-wp-960"),s(", "),l("code",null,".l-wp-720"),s(", "),l("code",null,".l-wp-540")]),l("li",null,[s("若 "),l("code",null,"$custom = true"),s(" → 使用鍵值對名稱")])])]),l("li",null,[s("滿版容器"),l("ul",null,[l("li",null,[l("code",null,".l-wp-full"),s(", "),l("code",null,".l-wp-max"),s(", "),l("code",null,".l-wp:full"),s(", "),l("code",null,".l-wp:max")])])])],-1)),n[5]||(n[5]=l("p",{class:"tip"},[s("管理整個容器系列，產生 "),l("code",null,".l-wp-*"),s(),l("code",null,".l-wp:*"),s(" 類別 ")],-1)),n[6]||(n[6]=l("br",null,null,-1)),n[7]||(n[7]=l("hr",null,null,-1)),a(o,{label:"使用範例"},{default:c(()=>[...n[0]||(n[0]=[l("pre",null,[l("code",null,[l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"l-wp-1024"),s('">')]),s("固定寬度 1024px 的容器"),l("span",{class:"r"},"</div>"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"l-wp-1440"),s('">')]),s("固定寬度 1440px 的容器"),l("span",{class:"r"},"</div>"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"l-wp-full"),s('">')]),s("滿版容器"),l("span",{class:"r"},"</div>"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"l-wp-html"),s('">')]),s("HTML 基礎容器"),l("span",{class:"r"},"</div>"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"l-wp-main"),s('">')]),s("Main 基礎容器"),l("span",{class:"r"},"</div>"),s(`
`)])],-1),l("br",null,null,-1),l("hr",null,null,-1)])]),_:1})]),_:1}),a(o,{label:"設定方式"},{default:c(()=>[...n[8]||(n[8]=[l("h4",{class:"mb:2"},"SCSS file setting",-1),l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"gy"},"// 引入 LatticeCSS layout"),s(`
`),l("span",{class:"gy"},"// 初始化 wrap 設定"),s(`
`),l("span",{class:"p"},"@use"),s(),l("span",{class:"g"},"'LatticeCSS/layout/wrap'"),s(),l("span",{class:"b"},"with"),s(` (
  `),l("span",{class:"r"},"$type"),s(": "),l("span",{class:"g"},"'media'"),s(`,
  `),l("span",{class:"r"},"$baseWidth"),s(": "),l("span",{class:"o"},"1024"),s(`,
  `),l("span",{class:"r"},"$both"),s(": "),l("span",{class:"o"},"45"),s(`,
  `),l("span",{class:"r"},"$useWidth"),s(`: (
    `),l("span",{class:"o"},"1680"),s(`,
    `),l("span",{class:"o"},"1440"),s(`,
    `),l("span",{class:"o"},"1366"),s(`,
    `),l("span",{class:"o"},"1280"),s(`,
    `),l("span",{class:"o"},"1200"),s(`,
    `),l("span",{class:"o"},"1140"),s(`,
    `),l("span",{class:"o"},"1024"),s(`,
    `),l("span",{class:"o"},"970"),s(`,
    `),l("span",{class:"o"},"960"),s(`,
    `),l("span",{class:"o"},"720"),s(`,
    `),l("span",{class:"o"},"540"),s(`,
    `),l("span",{class:"gy"},"自行擴充 ..."),s(`
  )
);
`),l("span",{class:"p"},"@use"),s(),l("span",{class:"g"},"'LatticeCSS/layout'"),s(`;

`),l("span",{class:"gy"},"// 初始化 wrap"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"layout.wrap"),s(";")])],-1)])]),_:1})])}}};export{W as default};
