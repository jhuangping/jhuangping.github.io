import{_ as w,a as x,b as y,c as k,d as L}from"./TabItem-CqM9Vhho.js";import{_ as N}from"./LatticeBlock-84aYVsHv.js";import{_ as T}from"./LatticeTable-BiE0n4NR.js";import{_ as z}from"./LatticeGrammar-Cf0PxrB8.js";import{_ as B}from"./LayoutNoteLink-Bq_vFBhQ.js";import{_ as V}from"./LatticeScssCode-DGDOmNHn.js";import{_ as C}from"./LatticeHeadline-CGlEl7vO.js";import{r as m,c as S,e as s,s as e,b as G,A as l,a as n}from"./index-CWOuoNZf.js";const j={__name:"func-font",setup(A){const i=m({columns:["參數","說明","預設"],rows:[{cells:["<code>$fontVal</code>","設定檔內的字型 key","—"]},{cells:["<code>$default</code>","fallback 字型清單","<code>$fontDefault</code>"]}]}),r=m({columns:["參數","說明","預設"],rows:[{cells:["<code>$val</code>","字重名稱 / 縮寫 / 數字","<code>base</code>"]}]}),f=m({columns:["參數","說明","type","預設"],rows:[{cells:["<code>$mix</code>","最大間距 (px)，同時也是預設的浮動範圍","<code>Number</code>","—"]},{cells:["<code>$min</code>","最小間距 (px)，保證在最小螢幕下仍有足夠間距","<code>Number</code>","—"]},{cells:["<code>$float</code>","浮動範圍，預設等於 <code>$mix</code>，可自訂。通常透過 <code>dvw()</code> 計算，依據視窗寬度動態變化","<code>Number || Function</code>","<code>null</code>"]}]});return(F,o)=>{const _=C,a=y,b=x,t=V,g=B,u=z,c=T,p=N,d=L,v=k,$=w;return G(),S("div",null,[s(_,{title:"font",subtitle:"font"}),s($,{class:"is:des",value:"0"},{default:e(()=>[s(b,null,{default:e(()=>[s(a,{value:"0"},{default:e(()=>[...o[0]||(o[0]=[l("字型設定",-1)])]),_:1}),s(a,{value:"1"},{default:e(()=>[...o[1]||(o[1]=[l("字重轉換",-1)])]),_:1}),s(a,{value:"2"},{default:e(()=>[...o[2]||(o[2]=[l("字級自適應",-1)])]),_:1})]),_:1}),s(v,null,{default:e(()=>[s(d,{value:"0"},{default:e(()=>[s(p,{label:"字型設定工具"},{default:e(()=>[s(t,{code:"font()"}),n("p",null,[o[4]||(o[4]=l("從設定檔 ",-1)),s(g,{url:"config-font"},{default:e(()=>[...o[3]||(o[3]=[n("code",null,"$useFont",-1)])]),_:1}),o[5]||(o[5]=l(" 取得字型名稱，並自動補上 fallback 字型",-1)),o[6]||(o[6]=n("br",null,null,-1)),o[7]||(o[7]=l(" 這樣可以避免瀏覽器找不到主要字型時，顯示錯誤或不一致的字體 ",-1))]),s(u,{code:"font",var:"$fontVal, $default"}),s(c,{columns:i.value.columns,rows:i.value.rows},null,8,["columns","rows"]),o[8]||(o[8]=n("h4",{class:"mb:2"},"使用範例",-1)),o[9]||(o[9]=n("pre",null,[n("code",null,[n("span",{class:"o"},".title"),l(` {
  font-family: `),n("span",{class:"b"},"font"),l("("),n("span",{class:"g"},"'noto'"),l(`);
}
`),n("span",{class:"gy"},"// => 'Noto Sans TC', Arial, 'Microsoft JhengHei', sans-serif;"),l(`

`),n("span",{class:"o"},".subtitle"),l(` {
  font-family: `),n("span",{class:"b"},"font"),l("("),n("span",{class:"g"},"'roboto'"),l(", "),n("span",{class:"o"},"Georgia"),l(`);
}
`),n("span",{class:"gy"},"// => 'Roboto', Georgia;"),l(`
`)])],-1))]),_:1})]),_:1}),s(d,{value:"1"},{default:e(()=>[s(p,{label:"字重轉換工具"},{default:e(()=>[s(t,{code:"b()"}),o[10]||(o[10]=n("p",null,[l("將字重名稱或縮寫轉換成 CSS 可用的數值（100–900）或關鍵字（lighter, bolder）"),n("br"),l(" 這樣可以用語意化的方式指定字重，而不是直接寫數字 ")],-1)),s(u,{code:"b",var:"$val"}),s(c,{columns:r.value.columns,rows:r.value.rows},null,8,["columns","rows"]),o[11]||(o[11]=n("br",null,null,-1)),o[12]||(o[12]=n("div",{class:"tip"},[n("h4",{class:"mb:2"},"支援的輸入形式"),n("ul",{class:"mt:0"},[n("li",null,[l("名稱："),n("code",null,"thin"),l(", "),n("code",null,"light"),l(", "),n("code",null,"medium"),l(", "),n("code",null,"bold"),l(" …")]),n("li",null,[l("縮寫："),n("code",null,"t"),l(", "),n("code",null,"l"),l(", "),n("code",null,"m"),l(", "),n("code",null,"b"),l(", "),n("code",null,"r"),l("（regular）…")]),n("li",null,[l("數字："),n("code",null,"100"),l(", "),n("code",null,"400"),l(", "),n("code",null,"600"),l(" …")]),n("li",null,"預設：若未指定 → bold ")])],-1)),o[13]||(o[13]=n("h4",{class:"mb:2"},"使用範例",-1)),o[14]||(o[14]=n("pre",null,[n("code",null,[n("span",{class:"o"},".thin"),l(` {
  font-weight: `),n("span",{class:"b"},"b"),l("("),n("span",{class:"o"},"thin"),l("); "),n("span",{class:"gy"},"// => 100"),l(`
}

`),n("span",{class:"o"},".medium"),l(` {
  font-weight: `),n("span",{class:"b"},"b"),l("("),n("span",{class:"o"},"m"),l("); "),n("span",{class:"gy"},"// => 500"),l(`
}

`),n("span",{class:"o"},".bold"),l(` {
  font-weight: `),n("span",{class:"b"},"b"),l("(); "),n("span",{class:"gy"},"// => bold"),l(`
}

`),n("span",{class:"o"},".custom"),l(` {
  font-weight: `),n("span",{class:"b"},"b"),l("("),n("span",{class:"o"},"600"),l("); "),n("span",{class:"gy"},"// => 600"),l(`
}
`)])],-1))]),_:1})]),_:1}),s(d,{value:"2"},{default:e(()=>[s(p,{label:"字級自適應工具"},{default:e(()=>[s(t,{code:"fz()"}),o[15]||(o[15]=n("p",null,"產生隨著螢幕寬度自動縮放的字體大小，確保字體在不同裝置下保持合理大小，不會太小或太大",-1)),s(u,{code:"fz",var:"$mix, $min, $float"}),s(c,{columns:f.value.columns,rows:f.value.rows},null,8,["columns","rows"]),o[16]||(o[16]=n("h4",{class:"mb:2"},"使用範例",-1)),o[17]||(o[17]=n("pre",null,[n("code",null,[n("span",{class:"o"},".responsive-text"),l(` {
  font-size: `),n("span",{class:"b"},"fz"),l("("),n("span",{class:"o"},"24, 14"),l("); "),n("span",{class:"gy"},"// 最大 24px，最小 14px"),l(`
}

`),n("span",{class:"o"},".small-text"),l(` {
  font-size: `),n("span",{class:"b"},"fz"),l("("),n("span",{class:"o"},"16, 12"),l("); "),n("span",{class:"gy"},"// 最大 16px，最小 12px"),l(`
}`)])],-1))]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{j as default};
