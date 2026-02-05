import{_ as c}from"./LatticeBlock-DCNh2nnb.js";import{_ as p}from"./LatticeGrammar-KatcUOyl.js";import{_ as r}from"./LatticeScssCode-Cv2UOIE8.js";import{_ as d}from"./LatticeHeadline-CHLOaSjt.js";import{c as m,e as o,a as l,s as t,b as f,A as s,_ as y}from"./index-lg5BKigg.js";function g(_,n){const e=d,u=r,i=p,a=c;return f(),m("div",null,[o(e,{subtitle:"Layout",title:"HTML / Body"}),n[6]||(n[6]=l("p",null,"全域排版初始化工具，主要用來統一設定 HTML 與 BODY 的基礎樣式，確保整個專案在字體、字距、行高、顏色等方面有一致的基準",-1)),n[7]||(n[7]=l("hr",null,null,-1)),o(a,{label:"功能說明"},{default:t(()=>[o(u,{code:"layout.body"}),o(i,{code:"layout.body",hideVar:""}),n[0]||(n[0]=l("p",{class:"tip"},[s("別名 "),l("code",null,"layout.html-init")],-1)),n[1]||(n[1]=l("h4",{class:"mb:2"},"用途",-1)),n[2]||(n[2]=l("ul",{class:"mt:0"},[l("li",null,"統一 HTML 與 BODY 的字體大小、字型、行高、字距、顏色"),l("li",null,"提供一個乾淨的排版基準，方便後續 RWD 或設計系統延伸")],-1)),n[3]||(n[3]=l("h4",{class:"mb:2"},"功能特色",-1)),n[4]||(n[4]=l("ul",{class:"mt:0"},[l("li",null,[s("HTML 字體大小"),l("ul",null,[l("li",null,[s("從 "),l("code",null,"config"),s(" 中讀取 "),l("code",null,"$htmlFontSize")]),l("li",null,[s("若有設定 → 轉換為 "),l("code",null,"px")]),l("li",null,"可搭配 RWD 條件式（例如在不同斷點縮放字體）")])]),l("li",null,[s("BODY 樣式"),l("ul",null,[l("li",null,[l("code",null,"font-family"),s(" → 使用 "),l("code",null,"$fontDefault"),s(" 統一字型")]),l("li",null,[l("code",null,"font-size"),s(" → 若 HTML 有設定，則轉換為 "),l("code",null,"rem"),s("；否則使用 "),l("code",null,"px")]),l("li",null,[l("code",null,"line-height"),s(" → 使用自訂函式 "),l("code",null,"lh()"),s(" 計算比例，確保精準")]),l("li",null,[l("code",null,"letter-spacing"),s(" → 使用自訂函式 "),l("code",null,"ls()"),s(" 處理字距單位")]),l("li",null,[l("code",null,"color"),s(" → 使用設定檔中的文字顏色")]),l("li",null,[s("支援 "),l("code",null,"@content"),s(" → 可在呼叫時插入額外樣式")])])])],-1))]),_:1}),n[8]||(n[8]=l("hr",null,null,-1)),o(a,{label:"設定方式"},{default:t(()=>[...n[5]||(n[5]=[l("h4",{class:"mb:2"},"SCSS file setting",-1),l("p",{class:"my:2"},"config.scss file",-1),l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"gy"},"// 設置 LatticeCSS"),s(`
`),l("span",{class:"p"},"@forward"),s(),l("span",{class:"g"},"'LatticeCSS/config'"),s(),l("span",{class:"b"},"with"),s(` (
  `),l("span",{class:"r"},"$htmlFontSize"),s(": "),l("span",{class:"o"},"null"),s(`,
  `),l("span",{class:"r"},"$htmlLineHeight"),s(": "),l("span",{class:"o"},"null"),s(`,
  `),l("span",{class:"r"},"$htmlColor"),s(": "),l("span",{class:"o"},"null"),s(`,
  `),l("span",{class:"r"},"$bodyFontSize"),s(": "),l("span",{class:"o"},"16"),s(`,
  `),l("span",{class:"r"},"$bodyLineHeight"),s(": "),l("span",{class:"o"},"24"),s(`,
  `),l("span",{class:"r"},"$bodyColor"),s(": "),l("span",{class:"o"},"#000"),s(`,
  `),l("span",{class:"r"},"$fontDefault"),s(": ( "),l("span",{class:"g"},"'Microsoft JhengHei', sans-serif"),s(` ),
  `),l("span",{class:"gy"},"其他設定 ..."),s(`
);
`)])],-1),l("p",{class:"mb:2"},"layout.scss file",-1),l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"p"},"@use"),s(),l("span",{class:"g"},"'LatticeCSS/layout'"),s(`;

`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"layout.body"),s(` {
  scroll-behavior: `),l("span",{class:"r"},"smooth"),s(`;
  min-height: `),l("span",{class:"r"},"100dvh"),s(`;
  `),l("span",{class:"gy"},"自行擴充 ..."),s(`
}`)])],-1)])]),_:1})])}const b={},C=y(b,[["render",g]]);export{C as default};
