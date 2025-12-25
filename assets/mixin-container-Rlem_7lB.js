import{_ as m}from"./LatticeBlock-Dz9ap4dQ.js";import{_}from"./LatticeTable-klrjXbh2.js";import{_ as f}from"./LatticeGrammar-CW4Bx5kC.js";import{_ as b}from"./LatticeScssCode-C19MdmRh.js";import{_ as w}from"./LatticeHeadline-K7MKTOjw.js";import{r,c as y,e as s,a as n,s as i,b as $,A as l}from"./index-BNrrEEM2.js";const k={__name:"mixin-container",setup(x){const e=r({columns:["參數","說明","必填","預設"],rows:[{cells:["<code>$w</code>","觸發寬度（px）","✅ 必填","<code>null</code>"]},{cells:["<code>$name</code>","容器名稱（null = 無名容器）","❌ 選填","<code>null</code>"]}]}),c=r({columns:["參數","說明","預設"],rows:[{cells:["<code>$name</code>","容器名稱，可為 <code>null</code>（無名容器）","<code>null</code>"]},{cells:["<code>$type</code>","容器類型，常用 <code>inline-size</code> 或 <code>size</code>","<code>inline-size</code>"]}]});return(g,o)=>{const d=w,t=b,a=f,u=_,p=m;return $(),y("div",null,[s(d,{title:"container query",subtitle:"container"}),o[8]||(o[8]=n("p",null,"設定容器查詢（Container Query），並建立基於容器寬度的響應式樣式",-1)),o[9]||(o[9]=n("hr",null,null,-1)),s(p,{label:"Mixin 說明"},{default:i(()=>[s(t,{code:"cont()"}),o[0]||(o[0]=n("p",null,[l("建立 "),n("code",null,"@container"),l(" 查詢，讓你可以針對某個容器的寬度變化套用不同樣式，而不是依賴傳統的 @media（視窗寬度） ")],-1)),s(a,{code:"cont",var:"$w, $type"}),o[1]||(o[1]=n("h4",null,"參數說明",-1)),s(u,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),o[2]||(o[2]=n("br",null,null,-1)),s(t,{code:"cont-set()"}),o[3]||(o[3]=n("p",null,[l("搭配 "),n("code",null,"@container"),l(" 查詢使用，讓該元素能被用於 CSS Container Query，讓元件可以依照「容器大小」而不是「視窗大小」進行響應式調整 ")],-1)),s(a,{code:"cont-set",var:"$name, $type"}),o[4]||(o[4]=n("p",{class:"mb:0"},"用來在元素上設定：",-1)),o[5]||(o[5]=n("ul",null,[n("li",null,[n("code",null,"container-type")]),n("li",null,[n("code",null,"container-name"),l("（可選） ")])],-1)),o[6]||(o[6]=n("h4",null,"參數說明",-1)),s(u,{columns:c.value.columns,rows:c.value.rows},null,8,["columns","rows"])]),_:1}),o[10]||(o[10]=n("br",null,null,-1)),s(p,{label:"使用範例"},{default:i(()=>[...o[7]||(o[7]=[n("pre",null,[n("code",null,[n("span",{class:"gy"},"// 無名容器"),l(`
`),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"cont"),l("("),n("span",{class:"o"},"500"),l(`) {
  `),n("span",{class:"o"},".child"),l(" { flex-direction: "),n("span",{class:"o"},"column"),l(`; }
}

`),n("span",{class:"o"},".section"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"cont-set"),l(`();
}

`),n("span",{class:"gy"},"// 具名容器"),l(`
`),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"cont"),l("("),n("span",{class:"o"},"768, card"),l(`) {
  `),n("span",{class:"o"},".card-item"),l(" { gap: "),n("span",{class:"o"},"1rem"),l(`; }
}

`),n("span",{class:"o"},".card"),l(` {
  `),n("span",{class:"p"},"@include"),l(),n("span",{class:"b"},"cont-set"),l("("),n("span",{class:"o"},"card, size"),l(`);
}`)])],-1)])]),_:1})])}}};export{k as default};
