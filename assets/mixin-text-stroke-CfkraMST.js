import{_}from"./LatticeBlock-CUTZpv0x.js";import{_ as m}from"./LatticeTable-BlpplT7t.js";import{_ as i}from"./LatticeGrammar-C35fjvlw.js";import{_ as d}from"./LatticeScssCode-BG3glMV4.js";import{_ as x}from"./LatticeHeadline-CuMDeEiL.js";import{r as f,c as b,e,a as s,s as c,b as k,A as o}from"./index-CRgGQZIT.js";const V={__name:"mixin-text-stroke",setup(w){const n=f({columns:["參數","說明","預設值"],rows:[{cells:["<code>$w</code>","描邊寬度（px）","<code>1</code>"]},{cells:["<code>$color</code>","描邊顏色","<code>#f00</code>"]}]});return($,t)=>{const a=x,r=d,p=i,u=m,l=_;return k(),b("div",null,[e(a,{title:"text stroke",subtitle:"text"}),t[2]||(t[2]=s("p",null,"讓文字呈現描邊效果，並支援設定描邊寬度與顏色",-1)),t[3]||(t[3]=s("hr",null,null,-1)),e(l,{label:"參數說明"},{default:c(()=>[e(r,{code:["text-stroke()","t-str()"]}),e(p,{code:[{code:"text-stroke",var:"$w, $color"},{code:"t-str",var:"$w, $color"}]}),e(u,{columns:n.value.columns,rows:n.value.rows},null,8,["columns","rows"]),t[0]||(t[0]=s("br",null,null,-1))]),_:1}),e(l,{label:"使用範例"},{default:c(()=>[...t[1]||(t[1]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 2px 黑色描邊"),o(`
`),s("span",{class:"p"},"@include"),o(),s("span",{class:"b"},"text-stroke"),o("("),s("span",{class:"o"},"2, #000"),o(`);

`),s("span",{class:"gy"},"// 3px 藍色描邊"),o(`
`),s("span",{class:"p"},"@include"),o(),s("span",{class:"b"},"text-stroke"),o("("),s("span",{class:"o"},"3, blue"),o(`);

`),s("span",{class:"gy"},"// 使用預設值（1px 紅色）"),o(`
`),s("span",{class:"p"},"@include"),o(),s("span",{class:"b"},"text-stroke"),o(`();
`)])],-1),s("p",{class:"tip"},[o("快速別名 "),s("code",null,"t-str"),o(" 完全等同於 "),s("code",null,"text-stroke"),o("，只是更短、更好記")],-1)])]),_:1})])}}};export{V as default};
