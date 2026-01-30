import{_ as u}from"./LatticeBlock-Cmb-lu-l.js";import{_ as m}from"./LatticeTable-C3v95GrU.js";import{_}from"./LatticeGrammar-aCBYUnHW.js";import{_ as d}from"./LatticeScssCode-Cv0IqA5U.js";import{_ as f}from"./LatticeHeadline-sDF0Qg4Z.js";import{r as b,c as g,e as a,i as w,s as t,b as $,a as n,A as s}from"./index-Cyi5GN-D.js";const y={__name:"func-content",setup(S){const e=b({columns:["參數","說明","範例"],rows:[{cells:["<code>$fa-var</code>","Icon 的 Unicode 字元碼","<code>&#92;f007</code>"]}]});return(v,o)=>{const l=f,p=d,r=_,i=m,c=u;return $(),g("div",null,[a(l,{title:"content",subtitle:"content"}),o[2]||(o[2]=w('<p>主要用於搭配 Icon Font (例如 Font Awesome、Material Icons...)，<br> 將設定檔或參數傳入的 icon 代號 (通常是 Unicode 字元碼) 包裝成 <br> CSS 可用的 <code>content</code> 值，避免手動打斜線或引號 </p><p class="mb:0">功能特色：</p><ul class="mt:0"><li>自動將 Unicode 代碼轉換成合法的 CSS <code>content</code> 字串</li><li>省略每次在 SCSS 中都要手動寫 <code>&quot;\\&quot;f007\\&quot;&quot;</code> 這種繁瑣格式</li><li>預設用雙引號，也可改用單引號</li></ul><hr>',4)),a(c,{label:"參數說明"},{default:t(()=>[a(p,{code:"content()"}),a(r,{code:"content",var:"$fa-var"}),a(i,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),o[0]||(o[0]=n("br",null,null,-1))]),_:1}),a(c,{label:"使用範例"},{default:t(()=>[...o[1]||(o[1]=[n("pre",null,[n("code",null,[n("span",{class:"r"},"$useIcons"),s(`: (
  add: `),n("span",{class:"o"},"\\e900"),s(`,
  arrow-left: `),n("span",{class:"o"},"\\e901"),s(`,
  arrow-right: `),n("span",{class:"o"},"\\e902"),s(`,
  arrow-top: `),n("span",{class:"o"},"\\e903"),s(`,
  catalog: `),n("span",{class:"o"},"\\e904"),s(`,
  close: `),n("span",{class:"o"},"\\e905"),s(`,
  delete: `),n("span",{class:"o"},"\\e906"),s(`,
  download: `),n("span",{class:"o"},"\\e907"),s(`,
  edit: `),n("span",{class:"o"},"\\e908"),s(`,
  facebook: `),n("span",{class:"o"},"\\e909"),s(`,
  hook: `),n("span",{class:"o"},"\\e90a"),s(`,
  ig: `),n("span",{class:"o"},"\\e90b"),s(`,
  line: `),n("span",{class:"o"},"\\e90c"),s(`,
  menu: `),n("span",{class:"o"},"\\e90d"),s(`,
  play: `),n("span",{class:"o"},"\\e90e"),s(`,
  search:`),n("span",{class:"o"}," \\e90f"),s(`
  `),n("span",{class:"gy"},"..."),s(`
) `),n("span",{class:"r"},"!default"),s(`;

`),n("span",{class:"p"},"@each"),s(),n("span",{class:"r"},"$name, $glyph"),s(),n("span",{class:"p"},"in"),s(),n("span",{class:"r"},"$useIcons"),s(` {
  `),n("span",{class:"o"},'[data-icon="#{'),n("span",{class:"r"},"$name"),n("span",{class:"o"},'}"]::before'),s(` {
    content: `),n("span",{class:"b"},"content"),s("("),n("span",{class:"r"},"$glyph"),s(`)
  }
}`)])],-1)])]),_:1})])}}};export{y as default};
