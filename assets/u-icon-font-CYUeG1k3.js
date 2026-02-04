import{_ as p}from"./LatticeTable-BiE0n4NR.js";import{_ as r}from"./LatticeGrammar-Cf0PxrB8.js";import{_ as m}from"./LatticeScssCode-DGDOmNHn.js";import{_ as f}from"./LatticeBlock-84aYVsHv.js";import{_}from"./LatticeHeadline-CGlEl7vO.js";import{r as b,c as g,e as s,i as y,a as n,s as a,b as w,A as o}from"./index-CWOuoNZf.js";const B={__name:"u-icon-font",setup(S){const c=b({columns:["參數","說明","預設"],rows:[{cells:["<code>$fontFamily</code>","icon font 字體名稱","<code>null</code>"]},{cells:["<code>$useIcon</code>","icon 名稱與 glyph 對應表","<code>null</code>"]}]});return(L,l)=>{const i=_,e=f,t=m,u=r,d=p;return w(),g("div",null,[s(i,{subtitle:"Utility",title:"Icon Font"}),l[9]||(l[9]=y('<p>Icon Font 工具，用來快速生成 icon 字體樣式與對應的 class</p><p class="mb:2">主要用途</p><ul class="mt:0"><li>統一字型樣式<ul><li>對所有 class 名稱包含 <code>u-icon-</code> 或有 <code>data-icon</code> 屬性的元素，統一設定 <code>font-family</code> 與顏色</li><li>預設字型顏色使用 <code>inherit</code></li></ul></li><li>自動生成 icon 對應<ul><li>根據 <code>$useIcon</code> map（icon 名稱 → Unicode 編碼），自動生成對應的 <code>::before content</code></li><li>例如：<code>add: \\e900</code> → <code>.u-icon-add::before { content: &quot;\\e900&quot;; }</code></li></ul></li></ul><hr>',4)),s(e,{label:"使用重點"},{default:a(()=>[...l[0]||(l[0]=[n("ul",null,[n("li",null,[o("快速套用 icon → 用 "),n("code",null,".u-icon-*"),o(" 或 "),n("code",null,'data-icon="*"')]),n("li",null,[o("字型與顏色自動設定 → 不需手動指定 "),n("code",null,"font-family"),o(" 或 "),n("code",null,"color")]),n("li",null,[o("集中管理 icon → 所有 icon 對應都在 "),n("code",null,"$useIcon"),o(" map 中，方便維護與擴充 ")])],-1)])]),_:1}),s(e,{label:"使用範例"},{default:a(()=>[l[1]||(l[1]=n("h4",{class:"mb:-10"},"使用 class",-1)),s(t,{code:".u-icon-*"}),l[2]||(l[2]=n("pre",null,[n("code",null,[n("span",{class:"r"},[o('<span class="'),n("span",{class:"g"},"u-icon-add"),o('"></span>')]),o(`
`)])],-1)),l[3]||(l[3]=n("br",null,null,-1)),l[4]||(l[4]=n("h4",{class:"mb:-10"},"使用 data-attribute",-1)),s(t,{code:'data-icon="*"'}),l[5]||(l[5]=n("pre",null,[n("code",null,[n("span",{class:"r"},[o('<span data-icon="'),n("span",{class:"g"},"close"),o('"></span>')]),o(`
`)])],-1))]),_:1}),l[10]||(l[10]=n("br",null,null,-1)),l[11]||(l[11]=n("hr",null,null,-1)),s(e,{label:"設定方式"},{default:a(()=>[s(t,{code:"utility.icon"}),s(u,{code:"utility.icon",hideVar:""}),l[6]||(l[6]=n("h4",{class:"mb:2"},"可用參數",-1)),s(d,{columns:c.value.columns,rows:c.value.rows},null,8,["columns","rows"]),l[7]||(l[7]=n("h4",{class:"mb:2"},"SCSS file setting",-1)),l[8]||(l[8]=n("pre",{class:"mt:0"},[n("code",null,[n("span",{class:"gy"},"// 初始化 icon font 設定"),o(`
`),n("span",{class:"p"},"@use"),o(),n("span",{class:"g"},"'LatticeCSS/utility/icon'"),o(),n("span",{class:"p"},"with"),o(` (
  `),n("span",{class:"r"},"$fontFamily"),o(": "),n("span",{class:"g"},"'fontawesome'"),o(`,
  `),n("span",{class:"r"},"$useIcon"),o(`: (
    add: \\e900,
    arrow-left: \\e901,
    arrow-right: \\e902,
    arrow-top: \\e903,
    catalog: \\e904,
    close: \\e905,
    delete: \\e906,
    download: \\e907,
    edit: \\e908,
    facebook: \\e909,
    hook: \\e90a,
    ig: \\e90b,
    line: \\e90c,
    menu: \\e90d,
    play: \\e90e,
    search: \\e90f,
    ...
  )
);
`),n("span",{class:"gy"},"// 引入 LatticeCSS utility"),o(`
`),n("span",{class:"p"},"@use"),o(),n("span",{class:"g"},"'LatticeCSS/utility'"),o(`;

`),n("span",{class:"gy"},"// 初始化 icon font"),o(`
`),n("span",{class:"p"},"@include"),o(),n("span",{class:"b"},"utility.icon"),o(";")])],-1))]),_:1})])}}};export{B as default};
