import{_ as u}from"./LatticeBlock-Dz9ap4dQ.js";import{_ as d}from"./LatticeTable-klrjXbh2.js";import{_}from"./LatticeGrammar-CW4Bx5kC.js";import{_ as m}from"./LatticeScssCode-C19MdmRh.js";import{_ as b}from"./LatticeHeadline-K7MKTOjw.js";import{r as f,c as g,e as a,i as h,s as c,b as y,a as n,A as l}from"./index-BNrrEEM2.js";const k={__name:"input-placeholder",setup(x){const o=f({columns:["參數","說明","預設值"],rows:[{cells:["<code>$color</code>","placeholder 文字顏色","<code>null</code>（不設定）"]}]});return(w,s)=>{const p=b,t=m,r=_,i=d,e=u;return y(),g("div",null,[a(p,{title:"input placeholder",subtitle:"input"}),s[3]||(s[3]=h("<p>用來設定 <code>&lt;input&gt;</code> 或 <code>&lt;textarea&gt;</code> 的 placeholder 文字樣式 </p><p>功能說明：</p><ul><li>一次寫法，支援所有主流瀏覽器的 placeholder</li><li>可選擇性設定顏色</li><li>可透過 <code>@content</code> 加入更多樣式</li><li>讓 placeholder 樣式更一致、可維護</li></ul><p>輕量、實用的 placeholder 樣式工具，非常適合表單 UI 設計</p><hr>",5)),a(e,{label:"參數說明"},{default:c(()=>[a(t,{code:"input-placeholder()"}),a(r,{code:"input-placeholder",var:"$color"}),a(i,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"]),s[0]||(s[0]=n("p",{class:"tip"},[l("若 "),n("code",null,"$color"),l(" 為 "),n("code",null,"null"),l("，則不輸出 "),n("code",null,"color"),n("br"),l(" 你可以在 "),n("code",null,"@content"),l(" 裡加入更多樣式（如字距、透明度等） ")],-1)),s[1]||(s[1]=n("br",null,null,-1))]),_:1}),a(e,{label:"使用範例"},{default:c(()=>[...s[2]||(s[2]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 設定 placeholder 顏色"),l(`
`),n("span",{class:"o"},"input"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"input-placeholder"),l("("),n("span",{class:"o"},"#999"),l(`);
}
`),n("span",{class:"gy"},"--- or ---"),l(`
`),n("span",{class:"o"},"input"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"input-placeholder()"),l(` {
    color: `),n("span",{class:"o"},"#999"),l(`;
  };
}

`),n("span",{class:"gy"},"// 設定顏色 + 額外樣式"),l(`
`),n("span",{class:"o"},"input"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"input-placeholder"),l("("),n("span",{class:"o"},"#aaa"),l(`) {
    opacity: `),n("span",{class:"o"},"0.7"),l(`;
    letter-spacing: `),n("span",{class:"o"},"1px"),l(`;
  }
}
`),n("span",{class:"gy"},"--- or ---"),l(`
`),n("span",{class:"o"},"input"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"input-placeholder()"),l(` {
    color: `),n("span",{class:"o"},"#aaa"),l(`;
    opacity: `),n("span",{class:"o"},"0.7"),l(`;
    letter-spacing: `),n("span",{class:"o"},"1px"),l(`;
  }
}

`),n("span",{class:"gy"},"// 只加自訂樣式（不改顏色）"),l(`
`),n("span",{class:"o"},"input"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"input-placeholder()"),l(` {
    font-style: `),n("span",{class:"o"},"italic"),l(`;
  }
}`)])],-1)])]),_:1})])}}};export{k as default};
