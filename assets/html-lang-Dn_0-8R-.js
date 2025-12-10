import{_ as r,a as g,b,c as _,d as S}from"./TabItem-BFPeGtyP.js";import{_ as v}from"./LatticeTable-Dd4FkaPG.js";import{_ as C}from"./LatticeHeadline-QrivTIRq.js";import{r as T,c as N,e as a,a as l,A as n,s as t,b as $}from"./index-B507jP-v.js";const w={__name:"html-lang",setup(y){const f=["Parameter Name","Type","Default value","Description"],c=T([{cells:["<code>$lang</code>","<code>String</code>","<code>en</code>","語言代碼（ex: cht, chs, zh, en）"]},{cells:["<code>$isChild</code>","<code>Boolean</code>","<code>true</code>","是否為後代選擇器（false 時會直接拼接在元素上）"]}]);return(z,s)=>{const i=C,d=v,o=b,u=g,e=S,p=_,m=r;return $(),N("div",null,[a(i,{title:"html-lang",subtitle:"at-root"}),s[8]||(s[8]=l("p",null,[n("用來根據 "),l("code",null,'<html lang="...">'),n(" 屬性自動套用不同語言的樣式，並支援 語言代碼的 fallback 規則 ")],-1)),s[9]||(s[9]=l("hr",null,null,-1)),s[10]||(s[10]=l("h2",null,"參數 (Parameters)",-1)),s[11]||(s[11]=l("h3",null,[l("code",{class:"f:18!"},"html-lang($lang, $isChild)")],-1)),a(d,{columns:f,rows:c.value},null,8,["rows"]),s[12]||(s[12]=l("br",null,null,-1)),s[13]||(s[13]=l("hr",null,null,-1)),s[14]||(s[14]=l("h2",null,"範例 (Example)",-1)),a(m,{value:"0"},{default:t(()=>[a(u,null,{default:t(()=>[a(o,{value:"0"},{default:t(()=>[...s[0]||(s[0]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:t(()=>[...s[1]||(s[1]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:t(()=>[a(e,{value:"0"},{default:t(()=>[...s[2]||(s[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"html-lang"),n("("),l("span",{class:"o"},"cht"),n(`) {
    font-family: `),l("span",{class:"g"},"'Noto Serif TC'"),n(`;
  }
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"html-lang"),n("("),l("span",{class:"o"},"chs"),n(`) {
    font-family: `),l("span",{class:"g"},"'Noto Sans SC'"),n(`;
  }
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"html-lang"),n("("),l("span",{class:"o"},"en"),n(`) {
    font-family: `),l("span",{class:"g"},"'Roboto'"),n(`;
  }
}`)])],-1)])]),_:1}),a(e,{value:"1"},{default:t(()=>[...s[3]||(s[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},"html[lang=zh-Hans] .title"),n(`,
`),l("span",{class:"o"},"html[lang=zh] .title"),n(" { font-family: "),l("span",{class:"g"},"'Noto Serif TC'"),n(`; }

`),l("span",{class:"o"},"html[lang=zh-Hant] .title"),n(`,
`),l("span",{class:"o"},"html[lang=zh] .title"),n(" { font-family: "),l("span",{class:"g"},"'Noto Sans SC'"),n(`; }

`),l("span",{class:"o"},"html[lang=en] .title"),n(" { font-family: "),l("span",{class:"g"},"'Roboto'"),n(`; }
`)])],-1)])]),_:1})]),_:1})]),_:1}),s[15]||(s[15]=l("br",null,null,-1)),s[16]||(s[16]=l("h3",null,"搭配子選擇器",-1)),a(m,{value:"0"},{default:t(()=>[a(u,null,{default:t(()=>[a(o,{value:"0"},{default:t(()=>[...s[4]||(s[4]=[n("SCSS",-1)])]),_:1}),a(o,{value:"1"},{default:t(()=>[...s[5]||(s[5]=[n("CSS",-1)])]),_:1})]),_:1}),a(p,null,{default:t(()=>[a(e,{value:"0"},{default:t(()=>[...s[6]||(s[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".btn"),n(` {
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"html-lang"),n("("),l("span",{class:"o"},"cht"),n(", "),l("span",{class:"r"},"$isChild"),n(": "),l("span",{class:"o"},"false"),n(`) {
    &::before { content: `),l("span",{class:"g"},'"確定"'),n(`; }
  }
  `),l("span",{class:"p"},"@include"),n(),l("span",{class:"b"},"html-lang"),n("("),l("span",{class:"o"},"en"),n(", "),l("span",{class:"o"},"false"),n(`) {
    &::before { content: `),l("span",{class:"g"},'"OK"'),n(`; }
  }
}
`)])],-1)])]),_:1}),a(e,{value:"1"},{default:t(()=>[...s[7]||(s[7]=[l("pre",null,[l("code",null,[l("span",{class:"o"},"html[lang=zh-Hans].btn::before"),n(`,
`),l("span",{class:"o"},"html[lang=zh].btn::before"),n(" { content: "),l("span",{class:"g"},'"確定"'),n(`; }

`),l("span",{class:"o"},"html[lang=en].btn::before"),n(" { content: "),l("span",{class:"g"},'"OK"'),n("; }")])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{w as default};
