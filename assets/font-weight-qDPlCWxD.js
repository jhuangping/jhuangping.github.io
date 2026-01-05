import{_ as d}from"./LatticeBlock-BfcNPi7u.js";import{_ as i}from"./LatticeTable-BVH2LRJ-.js";import{_ as r}from"./LatticeHeadline-BswCHU26.js";import{r as u,c as b,e,a as l,A as s,s as c,b as f}from"./index-_tu4U4cc.js";const w={__name:"font-weight",setup(m){const a=u({columns:["Mixin 名稱","對應字重","數值"],rows:[{cells:['<code><span class="b">f-lighter</span></code>',"lighter","相對字重"]},{cells:['<code><span class="b">f-bolder</span></code>',"bolder","相對字重"]},{cells:['<code><span class="b">f-thin</span></code>',"Thin","100"]},{cells:['<code><span class="b">f-extralight</span></code>',"Extra Light","200"]},{cells:['<code><span class="b">f-light</span></code>',"Light","300"]},{cells:['<code><span class="b">f-regular</span></code>',"Regular","400"]},{cells:['<code><span class="b">f-medium</span></code>',"Medium","500"]},{cells:['<code><span class="b">f-semibold</span></code>',"Semi Bold","600"]},{cells:['<code><span class="b">f-bold</span></code>',"Bold","700"]},{cells:['<code><span class="b">f-extrabold</span></code>',"Extra Bold","800"]},{cells:['<code><span class="b">f-heavy</span></code>',"Heavy / Black","900"]}]});return(_,n)=>{const t=r,p=i,o=d;return f(),b("div",null,[e(t,{title:"font weight",subtitle:"font"}),n[2]||(n[2]=l("p",null,[s("不必每次都手寫數字或記住每個字重的對應值"),l("br"),s("它能做到：")],-1)),n[3]||(n[3]=l("ul",null,[l("li",null,[s("以語意化名稱設定字重（如 "),l("code",null,"f-bold"),s("、"),l("code",null,"f-light"),s("）")]),l("li",null,"以數字對應字重（100–900）"),l("li",null,"讓排版系統更一致、可維護 ")],-1)),n[4]||(n[4]=l("hr",null,null,-1)),e(o,{label:"Mixin 一覽表"},{default:c(()=>[e(p,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),n[0]||(n[0]=l("br",null,null,-1))]),_:1}),e(o,{label:"使用範例"},{default:c(()=>[...n[1]||(n[1]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"f-bold"),s(`;
}

`),l("span",{class:"o"},".note"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"f-light"),s(`;
}

`),l("span",{class:"o"},".banner"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"f-heavy"),s(`;
}`)])],-1)])]),_:1})])}}};export{w as default};
