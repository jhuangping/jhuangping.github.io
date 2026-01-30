import{_ as g}from"./LatticeBlock-BAOOrMdK.js";import{_ as v,a as $,b as S,c as T,d as w}from"./TabItem-DofG51Ln.js";import{_ as y}from"./LatticeTable-DGOqCxQG.js";import{_ as L}from"./LatticeGrammar-B3OAbBSv.js";import{_ as B}from"./LatticeScssCode-BE0BRj7w.js";import{_ as k}from"./LatticeHeadline-CG1XX9Zt.js";import{r as C,c as N,e as l,i,a as s,A as n,s as a,b as V}from"./index-DL_OigAO.js";const D={__name:"border-radius",setup(E){const p=["模式","說明"],e=C({side:[{cells:['<code><span class="p">@include</span> <span class="b">rx</span>(<span class="o">10px</span>)</code>',"單邊半徑"]},{cells:['<code><span class="p">@include</span> <span class="b">rx</span>(<span class="o">10px, 20px</span>)</code>',"上/下（左、右）| 左/右(上、下)"]}],one:[{cells:['<code><span class="p">@include</span> <span class="b">rxx</span>(<span class="o">10px</span>)</code>',"單一半徑"]},{cells:['<code><span class="p">@include</span> <span class="b">rxx</span>(<span class="o">10px, 20px</span>)</code>',"橢圓圓角（水平 10px、垂直 20px）"]}]});return(P,o)=>{const m=k,t=B,r=L,c=y,d=S,_=$,u=w,b=T,x=v,f=g;return V(),N("div",null,[l(m,{title:"border radius",subtitle:"border"}),o[4]||(o[4]=i("<p>快速設定元素的 <b>單邊圓角</b> 或 <b>單個角的圓角</b>，並支援： </p><ul><li>單一半徑（一般圓角）</li><li>雙半徑（橢圓圓角，如 <code>10px 20px</code>）</li><li>上方、下方、左側、右側單邊圓角</li><li>單個角（左上、右上、左下、右下） </li></ul><hr><h3>設置單邊圓角</h3>",4)),l(t,{code:"rx()"}),l(r,{code:"rx",var:"$radius1, $radius2"}),o[5]||(o[5]=s("p",{class:"tip"},"x 為方向",-1)),l(c,{columns:p,rows:e.value.side},null,8,["rows"]),o[6]||(o[6]=s("p",null,[s("code",null,"rt"),n(" (top) : 設定上方兩個圓角（左上、右上） ")],-1)),o[7]||(o[7]=s("p",null,[s("code",null,"rb"),n(" (bottom) : 設定下方兩個圓角（左下、右下） ")],-1)),o[8]||(o[8]=s("p",null,[s("code",null,"rl"),n(" (left) : 設定左方兩個圓角（左下、左上） ")],-1)),o[9]||(o[9]=s("p",null,[s("code",null,"rr"),n(" (right) : 設定右方兩個圓角（右下、右上） ")],-1)),o[10]||(o[10]=s("br",null,null,-1)),o[11]||(o[11]=s("h3",null,"設置單個圓角",-1)),l(t,{code:"rxx()"}),l(r,{code:"rxx",var:"$radius1, $radius2"}),o[12]||(o[12]=s("p",{class:"tip"},"x 為方向",-1)),l(c,{columns:p,rows:e.value.one},null,8,["rows"]),o[13]||(o[13]=i('<p><code>rtl</code> / <code>rlt</code> : 左上角（top-left）</p><p><code>rtr</code> / <code>rrt</code> : 右上角（top-right）</p><p><code>rbl</code> / <code>rlb</code> : 左下角（bottom-left）</p><p><code>rbr</code> / <code>rrb</code> : 右下角（bottom-right） </p><p class="f:12">（命名上有些重複，是為了符合不同命名習慣）</p><br><hr>',7)),l(f,{label:"範例 (Example)"},{default:a(()=>[l(x,{value:"0"},{default:a(()=>[l(_,null,{default:a(()=>[l(d,{value:"0"},{default:a(()=>[...o[0]||(o[0]=[n("SCSS",-1)])]),_:1}),l(d,{value:"1"},{default:a(()=>[...o[1]||(o[1]=[n("CSS",-1)])]),_:1})]),_:1}),l(b,null,{default:a(()=>[l(u,{value:"0"},{default:a(()=>[...o[2]||(o[2]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 單一角圓角"),n(`
`),s("span",{class:"o"},".box"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"rtr"),n("("),s("span",{class:"o"},"12px"),n(`);
}

`),s("span",{class:"gy"},"// 橢圓圓角（雙半徑）"),n(`
`),s("span",{class:"o"},".card"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"rbl"),n("("),s("span",{class:"o"},"10px"),n(", "),s("span",{class:"o"},"20px"),n(`);
}

`),s("span",{class:"gy"},"// 上方圓角"),n(`
`),s("span",{class:"o"},".header"),n(` {
  `),s("span",{class:"p"},"@include"),n(),s("span",{class:"b"},"rt"),n("("),s("span",{class:"o"},"10px"),n(", "),s("span",{class:"o"},"30px"),n(`);
}
`)])],-1)])]),_:1}),l(u,{value:"1"},{default:a(()=>[...o[3]||(o[3]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 單一角圓角"),n(`
`),s("span",{class:"o"},".box"),n(` {
  border-top-right-radius: `),s("span",{class:"o"},"12px"),n(`;
}

`),s("span",{class:"gy"},"// 橢圓圓角（雙半徑）"),n(`
`),s("span",{class:"o"},".card"),n(` {
  border-bottom-left-radius: `),s("span",{class:"o"},"10px 20px"),n(`;
}

`),s("span",{class:"gy"},"// 上方圓角"),n(`
`),s("span",{class:"o"},".header"),n(` {
  border-top-left-radius: `),s("span",{class:"o"},"10px"),n(`;
  border-top-right-radius: `),s("span",{class:"o"},"30px"),n(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{D as default};
