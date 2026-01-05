import{_ as S,a as v,b as C,c as $,d as T}from"./TabItem-Dra_lVGm.js";import{_ as L}from"./LayoutNoteLink-Ccn9ihE2.js";import{_ as N}from"./LatticeBlock-Cm56lnbK.js";import{_ as y}from"./LatticeTable-CuWXHU-g.js";import{_ as z}from"./LatticeGrammar-BxwXShg0.js";import{_ as k}from"./LatticeScssCode-BqFH6URe.js";import{_ as x}from"./LatticeHeadline-BnGk4fEz.js";import{r as B,c as w,e as a,a as n,A as l,s as o,b as H}from"./index-NDWqd22d.js";const P={class:"tip"},j={__name:"html-lang",setup(V){const i=["Parameter Name","Type","Default value","Description"],r=B([{cells:["<code>$lang</code>","<code>String</code>","<code>en</code>","語言代碼（ex: cht, chs, zh, en）"]},{cells:["<code>$isChild</code>","<code>Boolean</code>","<code>true</code>","是否為後代選擇器（false 時會直接拼接在元素上）"]}]);return(D,s)=>{const c=x,f=k,d=z,_=y,g=N,b=L,t=C,p=v,e=T,u=$,m=S;return H(),w("div",null,[a(c,{title:"html-lang",subtitle:"at-root"}),s[13]||(s[13]=n("p",null,[l("用來根據 "),n("code",null,'<html lang="...">'),l(" 屬性自動套用不同語言的樣式，並支援 語言代碼的 fallback 規則 ")],-1)),s[14]||(s[14]=n("hr",null,null,-1)),a(f,{code:"html-lang()"}),a(d,{code:"html-lang",var:"$lang, $isChild"}),a(g,{label:"參數 (Parameters)"},{default:o(()=>[a(_,{columns:i,rows:r.value},null,8,["rows"])]),_:1}),n("p",P,[s[1]||(s[1]=l("Tip: ",-1)),s[2]||(s[2]=n("code",null,"$lang",-1)),s[3]||(s[3]=l(" 參數可使用 ",-1)),a(b,{url:"config-language"},{default:o(()=>[...s[0]||(s[0]=[n("code",null,"$useLanguage",-1)])]),_:1}),s[4]||(s[4]=l(" 中定義的語言代碼 ",-1))]),s[15]||(s[15]=n("br",null,null,-1)),s[16]||(s[16]=n("hr",null,null,-1)),s[17]||(s[17]=n("h2",null,"範例 (Example)",-1)),a(m,{value:"0"},{default:o(()=>[a(p,null,{default:o(()=>[a(t,{value:"0"},{default:o(()=>[...s[5]||(s[5]=[l("SCSS",-1)])]),_:1}),a(t,{value:"1"},{default:o(()=>[...s[6]||(s[6]=[l("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...s[7]||(s[7]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".title"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"cht"),l(`) {
    font-family: `),n("span",{class:"g"},"'Noto Serif TC'"),l(`;
  }
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"chs"),l(`) {
    font-family: `),n("span",{class:"g"},"'Noto Sans SC'"),l(`;
  }
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"en"),l(`) {
    font-family: `),n("span",{class:"g"},"'Roboto'"),l(`;
  }
}`)])],-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...s[8]||(s[8]=[n("pre",null,[n("code",null,[n("span",{class:"o"},"html[lang=zh-Hans] .title"),l(`,
`),n("span",{class:"o"},"html[lang=zh] .title"),l(" { font-family: "),n("span",{class:"g"},"'Noto Serif TC'"),l(`; }

`),n("span",{class:"o"},"html[lang=zh-Hant] .title"),l(`,
`),n("span",{class:"o"},"html[lang=zh] .title"),l(" { font-family: "),n("span",{class:"g"},"'Noto Sans SC'"),l(`; }

`),n("span",{class:"o"},"html[lang=en] .title"),l(" { font-family: "),n("span",{class:"g"},"'Roboto'"),l(`; }
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[18]||(s[18]=n("br",null,null,-1)),s[19]||(s[19]=n("h3",null,"搭配子選擇器",-1)),a(m,{value:"0"},{default:o(()=>[a(p,null,{default:o(()=>[a(t,{value:"0"},{default:o(()=>[...s[9]||(s[9]=[l("SCSS",-1)])]),_:1}),a(t,{value:"1"},{default:o(()=>[...s[10]||(s[10]=[l("CSS",-1)])]),_:1})]),_:1}),a(u,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...s[11]||(s[11]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".btn"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"cht"),l(", "),n("span",{class:"r"},"$isChild"),l(": "),n("span",{class:"o"},"false"),l(`) {
    &::before { content: `),n("span",{class:"g"},'"確定"'),l(`; }
  }
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"html-lang"),l("("),n("span",{class:"o"},"en"),l(", "),n("span",{class:"o"},"false"),l(`) {
    &::before { content: `),n("span",{class:"g"},'"OK"'),l(`; }
  }
}
`)])],-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...s[12]||(s[12]=[n("pre",null,[n("code",null,[n("span",{class:"o"},"html[lang=zh-Hans].btn::before"),l(`,
`),n("span",{class:"o"},"html[lang=zh].btn::before"),l(" { content: "),n("span",{class:"g"},'"確定"'),l(`; }

`),n("span",{class:"o"},"html[lang=en].btn::before"),l(" { content: "),n("span",{class:"g"},'"OK"'),l("; }")])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{j as default};
