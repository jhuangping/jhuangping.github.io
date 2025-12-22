import{_ as x,a as _,b as f,c as g,d as v}from"./TabItem-BAQxWGe5.js";import{_ as T}from"./LatticeTable-B0Naatzu.js";import{_ as w}from"./LatticeHeadline-0FdPbW1y.js";import{r as y,c as S,e as o,i as c,a as s,A as n,s as e,b as B}from"./index-XeVrB2dC.js";const E={__name:"border-radius",setup(N){const a=["模式","說明"],p=y({side:[{cells:["<code>@include rx(10px)</code>","單邊半徑"]},{cells:["<code>@include rx(10px, 20px)</code>","上/下（左、右）| 左/右(上、下)"]}],one:[{cells:["<code>@include rxx(10px)</code>","單一半徑"]},{cells:["<code>@include rxx(10px, 20px)</code>","橢圓圓角（水平 10px、垂直 20px）"]}]});return(V,l)=>{const u=w,t=T,r=f,i=_,d=v,b=g,m=x;return B(),S("div",null,[o(u,{title:"border radius",subtitle:"border"}),l[4]||(l[4]=c("<p>快速設定元素的 <b>單邊圓角</b> 或 <b>單個角的圓角</b>，並支援： </p><ul><li>單一半徑（一般圓角）</li><li>雙半徑（橢圓圓角，如 <code>10px 20px</code>）</li><li>上方、下方、左側、右側單邊圓角</li><li>單個角（左上、右上、左下、右下） </li></ul><hr><h3>設置單邊圓角</h3>",4)),o(t,{columns:a,rows:p.value.side},null,8,["rows"]),l[5]||(l[5]=s("p",null,[s("code",null,"rt"),n(" (top) : 設定上方兩個圓角（左上、右上） ")],-1)),l[6]||(l[6]=s("p",null,[s("code",null,"rb"),n(" (bottom) : 設定下方兩個圓角（左下、右下） ")],-1)),l[7]||(l[7]=s("p",null,[s("code",null,"rl"),n(" (left) : 設定左方兩個圓角（左下、左上） ")],-1)),l[8]||(l[8]=s("p",null,[s("code",null,"rr"),n(" (right) : 設定右方兩個圓角（右下、右上） ")],-1)),l[9]||(l[9]=s("br",null,null,-1)),l[10]||(l[10]=s("h3",null,"設置單個圓角",-1)),o(t,{columns:a,rows:p.value.one},null,8,["rows"]),l[11]||(l[11]=c('<p><code>rtl</code> / <code>rlt</code> : 左上角（top-left）</p><p><code>rtr</code> / <code>rrt</code> : 右上角（top-right）</p><p><code>rbl</code> / <code>rlb</code> : 左下角（bottom-left）</p><p><code>rbr</code> / <code>rrb</code> : 右下角（bottom-right） </p><p class="f:12">（命名上有些重複，是為了符合不同命名習慣）</p><br><hr><h2>範例 (Example)</h2>',8)),o(m,{value:"0"},{default:e(()=>[o(i,null,{default:e(()=>[o(r,{value:"0"},{default:e(()=>[...l[0]||(l[0]=[n("SCSS",-1)])]),_:1}),o(r,{value:"1"},{default:e(()=>[...l[1]||(l[1]=[n("CSS",-1)])]),_:1})]),_:1}),o(b,null,{default:e(()=>[o(d,{value:"0"},{default:e(()=>[...l[2]||(l[2]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 單一角圓角"),n(`
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
`)])],-1)])]),_:1}),o(d,{value:"1"},{default:e(()=>[...l[3]||(l[3]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 單一角圓角"),n(`
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
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{E as default};
