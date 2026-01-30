import{_ as f}from"./LatticeBlock-Cmb-lu-l.js";import{_ as b}from"./LatticeTable-C3v95GrU.js";import{_ as g}from"./LatticeGrammar-aCBYUnHW.js";import{_}from"./LayoutNoteLink-D2KVmoST.js";import{_ as w}from"./LatticeScssCode-Cv0IqA5U.js";import{_ as $}from"./LatticeHeadline-sDF0Qg4Z.js";import{r as i,c as v,e as s,s as t,b as y,a as l,A as n}from"./index-Cyi5GN-D.js";const T={__name:"func-font",setup(k){const a=i({columns:["參數","說明","預設"],rows:[{cells:["<code>$fontVal</code>","設定檔內的字型 key","—"]},{cells:["<code>$default</code>","fallback 字型清單","<code>$fontDefault</code>"]}]}),e=i({columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","字重名稱 / 縮寫 / 數字","<code>base</code>"]}]});return(L,o)=>{const m=$,u=w,d=_,c=g,p=b,r=f;return y(),v("div",null,[s(m,{title:"font",subtitle:"font"}),s(r,{label:"字型設定工具"},{default:t(()=>[s(u,{code:"font()"}),l("p",null,[o[1]||(o[1]=n("從設定檔 ",-1)),s(d,{url:"config-font"},{default:t(()=>[...o[0]||(o[0]=[l("code",null,"$useFont",-1)])]),_:1}),o[2]||(o[2]=n(" 取得字型名稱，並自動補上 fallback 字型",-1)),o[3]||(o[3]=l("br",null,null,-1)),o[4]||(o[4]=n(" 這樣可以避免瀏覽器找不到主要字型時，顯示錯誤或不一致的字體 ",-1))]),s(c,{code:"font",var:"$fontVal, $default"}),s(p,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),o[5]||(o[5]=l("h4",{class:"mb:2"},"使用範例",-1)),o[6]||(o[6]=l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),n(` {
  font-family: `),l("span",{class:"b"},"font"),n("("),l("span",{class:"g"},"'noto'"),n(`);
}
`),l("span",{class:"gy"},"// => 'Noto Sans TC', Arial, 'Microsoft JhengHei', sans-serif;"),n(`

`),l("span",{class:"o"},".subtitle"),n(` {
  font-family: `),l("span",{class:"b"},"font"),n("("),l("span",{class:"g"},"'roboto'"),n(", "),l("span",{class:"o"},"Georgia"),n(`);
}
`),l("span",{class:"gy"},"// => 'Roboto', Georgia;"),n(`
`)])],-1)),o[7]||(o[7]=l("br",null,null,-1)),o[8]||(o[8]=l("hr",null,null,-1))]),_:1}),s(r,{label:"字重轉換工具"},{default:t(()=>[s(u,{code:"b()"}),o[9]||(o[9]=l("p",null,[n("將字重名稱或縮寫轉換成 CSS 可用的數值（100–900）或關鍵字（lighter, bolder）"),l("br"),n(" 這樣可以用語意化的方式指定字重，而不是直接寫數字 ")],-1)),s(c,{code:"b",var:"$val"}),s(p,{columns:e.value.columns,rows:e.value.rows},null,8,["columns","rows"]),o[10]||(o[10]=l("br",null,null,-1)),o[11]||(o[11]=l("div",{class:"tip"},[l("h4",{class:"mb:2"},"支援的輸入形式"),l("ul",{class:"mt:0"},[l("li",null,[n("名稱："),l("code",null,"thin"),n(", "),l("code",null,"light"),n(", "),l("code",null,"medium"),n(", "),l("code",null,"bold"),n(" …")]),l("li",null,[n("縮寫："),l("code",null,"t"),n(", "),l("code",null,"l"),n(", "),l("code",null,"m"),n(", "),l("code",null,"b"),n(", "),l("code",null,"r"),n("（regular）…")]),l("li",null,[n("數字："),l("code",null,"100"),n(", "),l("code",null,"400"),n(", "),l("code",null,"600"),n(" …")]),l("li",null,"預設：若未指定 → bold ")])],-1)),o[12]||(o[12]=l("h4",{class:"mb:2"},"使用範例",-1)),o[13]||(o[13]=l("pre",null,[l("code",null,[l("span",{class:"o"},".thin"),n(` {
  font-weight: `),l("span",{class:"b"},"b"),n("("),l("span",{class:"o"},"thin"),n("); "),l("span",{class:"gy"},"// => 100"),n(`
}

`),l("span",{class:"o"},".medium"),n(` {
  font-weight: `),l("span",{class:"b"},"b"),n("("),l("span",{class:"o"},"m"),n("); "),l("span",{class:"gy"},"// => 500"),n(`
}

`),l("span",{class:"o"},".bold"),n(` {
  font-weight: `),l("span",{class:"b"},"b"),n("(); "),l("span",{class:"gy"},"// => bold"),n(`
}

`),l("span",{class:"o"},".custom"),n(` {
  font-weight: `),l("span",{class:"b"},"b"),n("("),l("span",{class:"o"},"600"),n("); "),l("span",{class:"gy"},"// => 600"),n(`
}`)])],-1))]),_:1})])}}};export{T as default};
