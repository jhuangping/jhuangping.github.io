import{_ as f}from"./LatticeGrammar-KatcUOyl.js";import{_,a as $,b as v,c as y,d as k}from"./TabItem-Cg7dXzuL.js";import{_ as S}from"./LatticeScssCode-Cv2UOIE8.js";import{_ as I}from"./LatticeBlock-DCNh2nnb.js";import{_ as L}from"./LatticeTable-Bq7YFgsE.js";import{_ as T}from"./LatticeHeadline-CHLOaSjt.js";import{r as x,c as C,e as o,i as w,a as n,s as a,A as s,b as B}from"./index-lg5BKigg.js";const q={__name:"c-icon",setup(V){const i=x({columns:["參數","說明","預設"],rows:[{cells:["<code>$style</code>","圖示風格（例如 <code>outline</code>, <code>filled</code>）","<code>null</code>"]},{cells:["<code>$useIcon</code>","要使用的 icon 名稱清單","<code>()</code>"]},{cells:["<code>$path</code>","圖示檔案路徑","<code>null</code>"]},{cells:["<code>$extension</code>","副檔名（例如 <code>svg</code>, <code>png</code>）","<code>null</code>"]}]});return(N,l)=>{const u=T,m=L,c=I,e=S,t=v,d=$,p=k,r=y,g=_,b=f;return B(),C("div",null,[o(u,{subtitle:"Components",title:"Icon"}),l[11]||(l[11]=w('<p>建立 Icon 圖示系統 的工具</p><p class="mb:2">主要用途</p><ul class="mt:0"><li>建立一套 可重用的 Icon 類別 <code>.c-icon-*</code> <code>.c-icon:*</code></li><li>支援設定 多種風格 class（例如 <code>.is-outline</code>, <code>.is-filled</code>）</li><li>支援 不同檔案副檔名（例如 <code>.svg</code>, <code>.png</code>）</li><li>自動生成 <b>mask-image</b> 與 <b>background-image</b> 版本</li></ul><hr>',4)),o(c,{label:"參數"},{default:a(()=>[o(m,{columns:i.value.columns,rows:i.value.rows},null,8,["columns","rows"]),l[0]||(l[0]=n("br",null,null,-1))]),_:1}),l[12]||(l[12]=n("h3",null,[s("有指定 "),n("code",null,"$style"),s(" 的情況")],-1)),o(e,{code:[".c-icon-{name}.is-{style}",".c-icon:{style}|{name}"]}),l[13]||(l[13]=n("p",null,[s("使用 "),n("code",null,"mask-image")],-1)),l[14]||(l[14]=n("br",null,null,-1)),o(e,{code:[".c-icon-{name}-img.is-{style}",".c-icon:{style}|{name}|img"]}),l[15]||(l[15]=n("p",null,[s("使用 "),n("code",null,"background-image")],-1)),l[16]||(l[16]=n("br",null,null,-1)),l[17]||(l[17]=n("h3",null,[s("沒有指定 "),n("code",null,"$style"),s(" 的情況")],-1)),o(e,{code:[".c-icon-{name}",".c-icon:{name}"]}),l[18]||(l[18]=n("p",null,[s("使用 "),n("code",null,"mask-image")],-1)),l[19]||(l[19]=n("br",null,null,-1)),o(e,{code:[".c-icon-{name}-img",".c-icon:{name}|img"]}),l[20]||(l[20]=n("p",null,[s("使用 "),n("code",null,"background-image")],-1)),l[21]||(l[21]=n("br",null,null,-1)),l[22]||(l[22]=n("hr",null,null,-1)),o(c,{label:"使用範例"},{default:a(()=>[o(g,{class:"is:des",value:"0"},{default:a(()=>[o(d,null,{default:a(()=>[o(t,{value:"0"},{default:a(()=>[...l[1]||(l[1]=[s("有指定 $style",-1)])]),_:1}),o(t,{value:"1"},{default:a(()=>[...l[2]||(l[2]=[s("沒有指定 $style",-1)])]),_:1})]),_:1}),o(r,null,{default:a(()=>[o(p,{value:"0"},{default:a(()=>[...l[3]||(l[3]=[n("div",null,[n("pre",null,[n("code",null,[n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon-home is-outline"),s('"></i>')]),s(`
`),n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon-user-img is-outline"),s('"></i>')]),s(`
`),n("span",{class:"gy"},"--- or ---"),s(`
`),n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon:outline|home"),s('"></i>')]),s(`
`),n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon:outline|user|img"),s('"></i>')])])])],-1)])]),_:1}),o(p,{value:"1"},{default:a(()=>[...l[4]||(l[4]=[n("div",null,[n("pre",null,[n("code",null,[n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon-home"),s('"></i>')]),s(`
`),n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon-user-img"),s('"></i>')]),s(`
`),n("span",{class:"gy"},"--- or ---"),s(`
`),n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon:home"),s('"></i>')]),s(`
`),n("span",{class:"r"},[s('<i class="'),n("span",{class:"g"},"c-icon:user|img"),s('"></i>')])])])],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),l[23]||(l[23]=n("br",null,null,-1)),l[24]||(l[24]=n("hr",null,null,-1)),o(c,{label:"設定方式"},{default:a(()=>[o(e,{code:"components.icon"}),o(b,{code:"components.icon",hideVar:""}),l[5]||(l[5]=n("h4",{class:"mb:2"},"SCSS file setting",-1)),l[6]||(l[6]=n("pre",{class:"mt:0"},[n("code",null,[n("span",{class:"gy"},"// 引入 LatticeCSS components"),s(`
`),n("span",{class:"p"},"@use"),s(),n("span",{class:"g"},"'LatticeCSS/components'"),s(`;

`),n("span",{class:"gy"},"// 初始化 icon"),s(`
`),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.icon"),s(`(
  `),n("span",{class:"r"},"$path"),s(": "),n("span",{class:"g"},"'.. icon path'"),s(`,
  `),n("span",{class:"r"},"$useIcons"),s(`: (
    `),n("span",{class:"g"},`'facebook.svg',
    'instagram.svg',
    'gotop.png',`),s(`
    擴充新增 icon ...
  ))`)])],-1)),l[7]||(l[7]=n("p",{class:"mb:2"},"指定 Style",-1)),l[8]||(l[8]=n("pre",{class:"mt:0"},[n("code",null,[n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.icon"),s(`(
  `),n("span",{class:"r"},"$path"),s(": "),n("span",{class:"g"},"'.. icon path'"),s(`,
  `),n("span",{class:"r"},"$style"),s(": "),n("span",{class:"g"},"'outline'"),s(`,
  `),n("span",{class:"r"},"$useIcons"),s(`: (
    `),n("span",{class:"g"},`'facebook.svg',
    'instagram.svg',
    'gotop.png',`),s(`
    擴充新增 icon ...
  ))`)])],-1)),l[9]||(l[9]=n("p",{class:"mb:2"},"固定圖檔副檔名 png",-1)),l[10]||(l[10]=n("pre",{class:"mt:0"},[n("code",null,[n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"components.icon"),s(`(
  `),n("span",{class:"r"},"$path"),s(": "),n("span",{class:"g"},"'.. icon path'"),s(`,
  `),n("span",{class:"r"},"$extension"),s(": "),n("span",{class:"g"},"'png'"),s(`,
  `),n("span",{class:"r"},"$useIcons"),s(`: (
    `),n("span",{class:"g"},`'facebook',
    'instagram',
    'gotop',`),s(`
    擴充新增 icon ...
  ))`)])],-1))]),_:1})])}}};export{q as default};
