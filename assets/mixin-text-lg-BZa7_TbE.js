import{_ as u}from"./LatticeBlock-CmcqIpnD.js";import{_}from"./LatticeTable-B6grjKqB.js";import{_ as d}from"./LatticeGrammar-Be9hM5bN.js";import{_ as m}from"./LatticeScssCode-CzBWBA2y.js";import{_ as g}from"./LatticeHeadline-ChbfV0d1.js";import{r as f,c as x,e as l,a as n,z as t,x as a,b}from"./index-Cemr9kf5.js";const T={__name:"mixin-text-lg",setup(v){const s=f({columns:["參數","Type","說明","預設值"],rows:[{cells:["<code>$setting</code>","<code>String</code>","linear-gradient 的設定字串","<code>'45deg, #f00, #00f'</code>"]}]});return(w,e)=>{const c=g,p=m,r=d,i=_,o=u;return b(),x("div",null,[l(c,{title:"text linear gradient",subtitle:"text"}),e[2]||(e[2]=n("p",null,[t("用來為文字套上 "),n("b",null,"linear-gradient"),t(" 漸層效果 ")],-1)),e[3]||(e[3]=n("hr",null,null,-1)),l(o,{label:"參數"},{default:a(()=>[l(p,{code:["text-lg()","t-lg"]}),l(r,{code:[{code:"text-lg",var:"$setting"},{code:"t-lg",var:"$setting"}]}),l(i,{columns:s.value.columns,rows:s.value.rows},null,8,["columns","rows"]),e[0]||(e[0]=n("br",null,null,-1))]),_:1}),l(o,{label:"使用範例"},{default:a(()=>[...e[1]||(e[1]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".title"),t(` {
  `),n("span",{class:"gy"},"// 基本使用"),t(`
  `),n("span",{class:"p"},"@include"),t(),n("span",{class:"b"},"text-lg"),t("("),n("span",{class:"g"},"'90deg, #ff0000, #00ff00'"),t(`);

  `),n("span",{class:"gy"},"// 使用方向語法"),t(`
  `),n("span",{class:"p"},"@include"),t(),n("span",{class:"b"},"text-lg"),t("("),n("span",{class:"g"},"'to right, red, blue'"),t(`);

  `),n("span",{class:"gy"},"// 使用預設值（45deg 紅 → 藍）"),t(`
  `),n("span",{class:"p"},"@include"),t(),n("span",{class:"b"},"text-lg"),t(`();
}
`)])],-1),n("p",{class:"tip"},[t("快速別名 "),n("code",null,"t-lg"),t(" 完全等同於 "),n("code",null,"text-lg"),t("，只是更短、更好記")],-1)])]),_:1})])}}};export{T as default};
