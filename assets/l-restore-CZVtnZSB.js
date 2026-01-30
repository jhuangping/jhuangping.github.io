import{_ as b,a as g,b as y,c as v,d as S}from"./TabItem-Dm0vhPld.js";import{_ as L}from"./LatticeTable-C3v95GrU.js";import{_ as T}from"./LatticeBlock-Cmb-lu-l.js";import{_ as C}from"./LatticeGrammar-aCBYUnHW.js";import{_ as N}from"./LatticeScssCode-Cv0IqA5U.js";import{_ as $}from"./LatticeHeadline-sDF0Qg4Z.js";import{r as w,c as k,e as u,a as l,A as n,s as e,b as B}from"./index-Cyi5GN-D.js";const G={__name:"l-restore",setup(H){const d=w({columns:["參數","說明","預設值"],rows:[{cells:["<code>$isReset</code>","是否套用 <code>unreset()</code>","<code>false</code>"]}]});return(M,s)=>{const f=$,p=N,i=C,o=T,_=L,a=y,r=g,t=S,m=v,c=b;return B(),k("div",null,[u(f,{subtitle:"Layout",title:"Restore"}),s[21]||(s[21]=l("p",{class:"mb:0"},"專門用來處理 編輯區塊樣式 的工具，目的在於：",-1)),s[22]||(s[22]=l("ul",{class:"mt:0"},[l("li",null,[l("code",null,"unreset()"),n("：恢復或自訂常見 HTML 元素的預設樣式（避免被 reset/normalize 完全清掉）")]),l("li",null,[l("code",null,"edit()"),n("：建立一個可編輯區塊 "),l("code",null,".l-edit"),n("，並可選擇是否套用 "),l("code",null,"unreset()"),n("，讓內容區塊在編輯器或文章顯示時更符合預期")])],-1)),s[23]||(s[23]=l("hr",null,null,-1)),u(o,{label:"恢復/自訂基本樣式"},{default:e(()=>[u(p,{code:"layout.unreset"}),u(i,{code:"layout.unreset",hideVar:""}),s[0]||(s[0]=l("h4",{class:"mb:2"},"用途",-1)),s[1]||(s[1]=l("ul",{class:"mt:0"},[l("li",null,"在 reset/normalize 之後，恢復一些常見 HTML 元素的預設樣式或自訂樣式"),l("li",null,"適合用於文章編輯器、Markdown 渲染區塊等，需要保留語意化標籤樣式的場景")],-1)),s[2]||(s[2]=l("h4",{class:"mb:2"},"功能",-1)),s[3]||(s[3]=l("ul",{class:"mt:0"},[l("li",null,[n("列表樣式："),l("ul",null,[l("li",null,[l("code",null,"li"),n(" → 顯示為 list-item，繼承 list-style-type")]),l("li",null,[l("code",null,"ul"),n(", "),l("code",null,"ol"),n(" → 可透過 class 控制不同樣式：")]),l("ul",null,[l("li",null,[l("code",null,".n"),n(" → 無標誌")]),l("li",null,[l("code",null,".c"),n(" → 空心圓")]),l("li",null,[l("code",null,".s"),n(" → 實心方形")]),l("li",null,[l("code",null,".dlz"),n(" → 十進制前置零")]),l("li",null,[l("code",null,".lr"),n(" / "),l("code",null,".ur"),n(" → 羅馬數字（小寫/大寫）")]),l("li",null,[l("code",null,".la"),n(" / "),l("code",null,".ua"),n(" → 英文字母（小寫/大寫）")]),l("li",null,[l("code",null,".lg"),n(" → 希臘字母")]),l("li",null,[l("code",null,".amn"),n(" → 亞美尼亞")]),l("li",null,[l("code",null,".grg"),n(" → 格魯吉亞")])])])]),l("li",null,[n("文字樣式："),l("ul",null,[l("li",null,[l("code",null,".sub"),n(" → 下標")]),l("li",null,[l("code",null,".sup"),n(" → 上標")]),l("li",null,[l("code",null,".red"),n(" → 紅色文字")])])])],-1))]),_:1}),s[24]||(s[24]=l("br",null,null,-1)),u(o,{label:"可編輯區塊樣式"},{default:e(()=>[u(p,{code:"layout.edit"}),s[4]||(s[4]=l("p",null,[n("建立 "),l("code",null,".l-edit"),n(" 區塊，作為文章編輯器或內容顯示容器")],-1)),s[5]||(s[5]=l("p",{class:"tip"},"預設樣式： 自動換行，避免文字溢出",-1)),u(i,{code:"layout.edit",var:"$isReset"}),u(_,{columns:d.value.columns,rows:d.value.rows},null,8,["columns","rows"])]),_:1}),u(o,{label:"設定方式"},{default:e(()=>[...s[6]||(s[6]=[l("h4",{class:"mb:2"},"SCSS file setting",-1),l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"gy"},"// 引入 LatticeCSS layout"),n(`
`),l("span",{class:"p"},"@use"),n(),l("span",{class:"g"},"'LatticeCSS/layout'"),n(`;

`),l("span",{class:"gy"},"// 初始化 unreset"),n(`
`),l("span",{class:"o"},".className"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"layout.unreset()"),n(` {
    `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
  }
}

`),l("span",{class:"gy"},"// 建立 .l-edit"),n(`
`),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"layout.edit()"),n(` {
  `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
}`)])],-1),l("p",{class:"mb:2"},[n("套用 "),l("code",null,"unreset")],-1),l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"layout.edit"),n("("),l("span",{class:"o"},"true"),n(`) {
  `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
}
`)])],-1)])]),_:1}),s[25]||(s[25]=l("br",null,null,-1)),s[26]||(s[26]=l("hr",null,null,-1)),u(o,{label:"使用範例"},{default:e(()=>[s[19]||(s[19]=l("h4",{class:"mb:2"},"恢復/自訂基本樣式",-1)),u(c,{value:"0"},{default:e(()=>[u(r,null,{default:e(()=>[u(a,{value:"0"},{default:e(()=>[...s[7]||(s[7]=[n("SCSS",-1)])]),_:1}),u(a,{value:"1"},{default:e(()=>[...s[8]||(s[8]=[n("CSS",-1)])]),_:1}),u(a,{value:"2"},{default:e(()=>[...s[9]||(s[9]=[n("HTML",-1)])]),_:1})]),_:1}),u(m,null,{default:e(()=>[u(t,{value:"0"},{default:e(()=>[...s[10]||(s[10]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".className"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"unreset()"),n(` {
    `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
  }
}`)])],-1)])]),_:1}),u(t,{value:"1"},{default:e(()=>[...s[11]||(s[11]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".className"),n(` {
  `),l("span",{class:"gy"},"unreset() 樣式"),n(`
  `),l("span",{class:"gy"},"--- & ---"),n(`
  `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
};`)])],-1)])]),_:1}),u(t,{value:"2"},{default:e(()=>[...s[12]||(s[12]=[l("pre",null,[l("code",null,[l("span",{class:"r"},[n('<div class="'),l("span",{class:"g"},"className"),n('">')]),n(`
  `),l("span",{class:"gy"},"文字內容 ..."),n(`
`),l("span",{class:"r"},"</div>")])],-1)])]),_:1})]),_:1})]),_:1}),s[20]||(s[20]=l("h4",{class:"mb:2"},"建立編輯區塊",-1)),u(c,{value:"0"},{default:e(()=>[u(r,null,{default:e(()=>[u(a,{value:"0"},{default:e(()=>[...s[13]||(s[13]=[n("SCSS",-1)])]),_:1}),u(a,{value:"1"},{default:e(()=>[...s[14]||(s[14]=[n("CSS",-1)])]),_:1}),u(a,{value:"2"},{default:e(()=>[...s[15]||(s[15]=[n("HTML",-1)])]),_:1})]),_:1}),u(m,null,{default:e(()=>[u(t,{value:"0"},{default:e(()=>[...s[16]||(s[16]=[l("pre",null,[l("code",null,[l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"layout.edit()"),n(` {
  `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
};`)])],-1)])]),_:1}),u(t,{value:"1"},{default:e(()=>[...s[17]||(s[17]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".l-edit"),n(` {
  `),l("span",{class:"gy"},"自訂樣式 ..."),n(`
};`)])],-1)])]),_:1}),u(t,{value:"2"},{default:e(()=>[...s[18]||(s[18]=[l("pre",null,[l("code",null,[l("span",{class:"r"},[n('<div class="'),l("span",{class:"g"},"l-edit"),n('">')]),n(`
  `),l("span",{class:"gy"},"edit 內容 ..."),n(`
`),l("span",{class:"r"},"</div>")])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{G as default};
