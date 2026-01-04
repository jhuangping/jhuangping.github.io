import{_ as b,a as S,b as v,c as C,d as T}from"./TabItem-mXcBkgmD.js";import{_ as $}from"./LatticeBlock-BH36mF_z.js";import{_ as h}from"./LatticeTable-CQw4cBv4.js";import{_ as N}from"./LatticeGrammar-Cd3yeHcz.js";import{_ as y}from"./LatticeScssCode-D1xrZD_7.js";import{_ as z}from"./LatticeHeadline-DbmhXlwD.js";import{r as x,c as B,e as a,a as n,A as l,s as t,b as L}from"./index-CY5MHss3.js";const R={__name:"html-lang",setup(k){const m=["Parameter Name","Type","Default value","Description"],i=x([{cells:["<code>$lang</code>","<code>String</code>","<code>en</code>","語言代碼（ex: cht, chs, zh, en）"]},{cells:["<code>$isChild</code>","<code>Boolean</code>","<code>true</code>","是否為後代選擇器（false 時會直接拼接在元素上）"]}]);return(w,s)=>{const r=z,f=y,_=N,d=h,g=$,o=v,p=S,e=T,u=C,c=b;return L(),B("div",null,[a(r,{title:"html-lang",subtitle:"at-root"}),s[8]||(s[8]=n("p",null,[l("用來根據 "),n("code",null,'<html lang="...">'),l(" 屬性自動套用不同語言的樣式，並支援 語言代碼的 fallback 規則 ")],-1)),s[9]||(s[9]=n("hr",null,null,-1)),a(f,{code:"html-lang()"}),a(_,{code:"html-lang",var:"$lang, $isChild"}),a(g,{label:"參數 (Parameters)"},{default:t(()=>[a(d,{columns:m,rows:i.value},null,8,["rows"])]),_:1}),s[10]||(s[10]=n("br",null,null,-1)),s[11]||(s[11]=n("hr",null,null,-1)),s[12]||(s[12]=n("h2",null,"範例 (Example)",-1)),a(c,{value:"0"},{default:t(()=>[a(p,null,{default:t(()=>[a(o,{value:"0"},{default:t(()=>[...s[0]||(s[0]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:t(()=>[...s[1]||(s[1]=[l("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:t(()=>[a(e,{value:"0"},{default:t(()=>[...s[2]||(s[2]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".title"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"cht"),l(`) {
    font-family: `),n("span",{class:"g"},"'Noto Serif TC'"),l(`;
  }
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"chs"),l(`) {
    font-family: `),n("span",{class:"g"},"'Noto Sans SC'"),l(`;
  }
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"en"),l(`) {
    font-family: `),n("span",{class:"g"},"'Roboto'"),l(`;
  }
}`)])],-1)])]),_:1}),a(e,{value:"1"},{default:t(()=>[...s[3]||(s[3]=[n("pre",null,[n("code",null,[n("span",{class:"o"},"html[lang=zh-Hans] .title"),l(`,
`),n("span",{class:"o"},"html[lang=zh] .title"),l(" { font-family: "),n("span",{class:"g"},"'Noto Serif TC'"),l(`; }

`),n("span",{class:"o"},"html[lang=zh-Hant] .title"),l(`,
`),n("span",{class:"o"},"html[lang=zh] .title"),l(" { font-family: "),n("span",{class:"g"},"'Noto Sans SC'"),l(`; }

`),n("span",{class:"o"},"html[lang=en] .title"),l(" { font-family: "),n("span",{class:"g"},"'Roboto'"),l(`; }
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[13]||(s[13]=n("br",null,null,-1)),s[14]||(s[14]=n("h3",null,"搭配子選擇器",-1)),a(c,{value:"0"},{default:t(()=>[a(p,null,{default:t(()=>[a(o,{value:"0"},{default:t(()=>[...s[4]||(s[4]=[l("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:t(()=>[...s[5]||(s[5]=[l("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:t(()=>[a(e,{value:"0"},{default:t(()=>[...s[6]||(s[6]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".btn"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"cht"),l(", "),n("span",{class:"r"},"$isChild"),l(": "),n("span",{class:"o"},"false"),l(`) {
    &::before { content: `),n("span",{class:"g"},'"確定"'),l(`; }
  }
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"en"),l(", "),n("span",{class:"o"},"false"),l(`) {
    &::before { content: `),n("span",{class:"g"},'"OK"'),l(`; }
  }
}
`)])],-1)])]),_:1}),a(e,{value:"1"},{default:t(()=>[...s[7]||(s[7]=[n("pre",null,[n("code",null,[n("span",{class:"o"},"html[lang=zh-Hans].btn::before"),l(`,
`),n("span",{class:"o"},"html[lang=zh].btn::before"),l(" { content: "),n("span",{class:"g"},'"確定"'),l(`; }

`),n("span",{class:"o"},"html[lang=en].btn::before"),l(" { content: "),n("span",{class:"g"},'"OK"'),l("; }")])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{R as default};
