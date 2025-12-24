import{_ as m}from"./LatticeBlock-DLnlnv5b.js";import{_ as f}from"./LatticeTable-BTl1O2MD.js";import{_ as b}from"./LatticeGrammar-BKwVFBa9.js";import{_}from"./LatticeScssCode-DmvcEpOQ.js";import{_ as g}from"./LatticeHeadline-Bci94iqe.js";import{r as p,c as w,e as o,s as i,b as v,a as l,A as n}from"./index-Dhf5dUn1.js";const N={__name:"func-font",setup(y){const a=p({columns:["參數","說明","預設"],rows:[{cells:["<code>$fontVal</code>","設定檔內的字型 key","—"]},{cells:["<code>$default</code>","fallback 字型清單","<code>$fontDefault</code>"]}]}),t=p({columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","字重名稱 / 縮寫 / 數字","<code>base</code>"]}]});return($,s)=>{const d=g,e=_,c=b,u=f,r=m;return v(),w("div",null,[o(d,{title:"font",subtitle:"font"}),o(r,{label:"字型設定工具"},{default:i(()=>[o(e,{code:"font()"}),s[0]||(s[0]=l("p",null,[n("從設定檔 "),l("code",null,"$useFont"),n(" 取得字型名稱，並自動補上 fallback 字型"),l("br"),n(" 這樣可以避免瀏覽器找不到主要字型時，顯示錯誤或不一致的字體 ")],-1)),o(c,{code:"font",var:"$fontVal, $default"}),o(u,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=l("h4",{class:"mb:2"},"使用範例",-1)),s[2]||(s[2]=l("pre",null,[l("code",null,[l("span",{class:"o"},".title"),n(` {
  font-family: `),l("span",{class:"b"},"font"),n("("),l("span",{class:"g"},"'noto'"),n(`);
}
`),l("span",{class:"gy"},"// => 'Noto Sans TC', Arial, 'Microsoft JhengHei', sans-serif;"),n(`

`),l("span",{class:"o"},".subtitle"),n(` {
  font-family: `),l("span",{class:"b"},"font"),n("("),l("span",{class:"g"},"'roboto'"),n(", "),l("span",{class:"o"},"Georgia"),n(`);
}
`),l("span",{class:"gy"},"// => 'Roboto', Georgia;"),n(`
`)])],-1)),s[3]||(s[3]=l("br",null,null,-1)),s[4]||(s[4]=l("hr",null,null,-1))]),_:1}),o(r,{label:"字重轉換工具"},{default:i(()=>[o(e,{code:"b()"}),s[5]||(s[5]=l("p",null,[n("將字重名稱或縮寫轉換成 CSS 可用的數值（100–900）或關鍵字（lighter, bolder）"),l("br"),n(" 這樣可以用語意化的方式指定字重，而不是直接寫數字 ")],-1)),o(c,{code:"b",var:"$val"}),o(u,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),s[6]||(s[6]=l("br",null,null,-1)),s[7]||(s[7]=l("div",{class:"tip"},[l("h4",{class:"mb:2"},"支援的輸入形式"),l("ul",{class:"mt:0"},[l("li",null,[n("名稱："),l("code",null,"thin"),n(", "),l("code",null,"light"),n(", "),l("code",null,"medium"),n(", "),l("code",null,"bold"),n(" …")]),l("li",null,[n("縮寫："),l("code",null,"t"),n(", "),l("code",null,"l"),n(", "),l("code",null,"m"),n(", "),l("code",null,"b"),n(", "),l("code",null,"r"),n("（regular）…")]),l("li",null,[n("數字："),l("code",null,"100"),n(", "),l("code",null,"400"),n(", "),l("code",null,"600"),n(" …")]),l("li",null,"預設：若未指定 → bold ")])],-1)),s[8]||(s[8]=l("h4",{class:"mb:2"},"使用範例",-1)),s[9]||(s[9]=l("pre",null,[l("code",null,[l("span",{class:"o"},".thin"),n(` {
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
}`)])],-1))]),_:1})])}}};export{N as default};
