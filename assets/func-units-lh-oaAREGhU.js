import{_ as m}from"./LatticeBlock-CmcqIpnD.js";import{_ as u}from"./LatticeTable-B6grjKqB.js";import{_ as d}from"./LatticeGrammar-Be9hM5bN.js";import{_ as f}from"./LatticeScssCode-CzBWBA2y.js";import{_ as h}from"./LatticeHeadline-ChbfV0d1.js";import{a as l}from"./func-units-7SoFe2Dv.js";import{c as g,e as t,a as s,x as a,z as n,b,h as p}from"./index-Cemr9kf5.js";const V={__name:"func-units-lh",setup(x){return($,o)=>{const c=h,_=f,r=d,i=u,e=m;return b(),g("div",null,[t(c,{title:"line height",subtitle:"Typography Units"}),t(_,{code:"lh()"},{default:a(()=>[...o[0]||(o[0]=[n(" 行高換算工具",-1)])]),_:1}),o[2]||(o[2]=s("p",null,[n("將指定的行高轉換為相對單位，方便在不同字體大小下保持一致的排版比例"),s("br"),n(" 支援百分比 (%) 行高，會自動轉換為相對數值 ")],-1)),t(r,{code:"lh",var:"$lh, $px, $digits, $mode"}),t(e,{label:"參數"},{default:a(()=>[t(i,{columns:p(l).columns,rows:p(l).rows},null,8,["columns","rows"])]),_:1}),t(e,{label:"範例"},{default:a(()=>[...o[1]||(o[1]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// px 行高 → 無單位"),n(`
`),s("span",{class:"r"},"p"),n(" { line-height: "),s("span",{class:"b"},"lh"),n("("),s("span",{class:"o"},"24, 16"),n(`); }

`),s("span",{class:"gy"},"// 百分比行高 → 無單位"),n(`
`),s("span",{class:"r"},"h1"),n(" { line-height: "),s("span",{class:"b"},"lh"),n("("),s("span",{class:"o"},"150%, 20"),n(`); }

`),s("span",{class:"gy"},"// 控制小數位數"),n(`
`),s("span",{class:"o"},".text"),n(" { line-height: "),s("span",{class:"b"},"lh"),n("("),s("span",{class:"o"},"22, 16, 2, round"),n("); }")])],-1)])]),_:1})])}}};export{V as default};
