import{_ as m,a as f,b as v,c as k,d as $}from"./TabItem-DojJw6c7.js";import{_ as S}from"./LatticeBlock-DLnlnv5b.js";import{_ as z}from"./LatticeTable-BTl1O2MD.js";import{_ as C}from"./LatticeScssCode-DmvcEpOQ.js";import{_ as x}from"./LatticeHeadline-Bci94iqe.js";import{r as T,c as B,e as l,a as n,s as o,b as L,A as s}from"./index-Dhf5dUn1.js";const I={__name:"bg-base",setup(w){const d=["Mixin 名稱","功能","參數"],i=T([{cells:['<code><span class="b">bg-init</span>(<span class="r">$position, $size, $repeat</span>)</code>',"初始化背景屬性","<code>$position</code>：位置 (預設 center)<br><code>$size</code>：尺寸 (預設 null 不設定)<br><code>$repeat</code>：重複方式 (預設 no-repeat)"]},{cells:['<code><span class="b">bg</span>(<span class="r">$url, $position, $size, $repeat</span>)</code>',"綜合設置背景圖片與屬性","<code>$url</code>：圖片路徑<br><code>$position</code>：位置<br><code>$size</code>：尺寸<br><code>$repeat</code>：重複方式"]},{cells:['<code><span class="b">bg-cc()</span></code>',"快速設置背景為居中、全覆蓋、不重複","無參數"]}]);return(N,a)=>{const b=x,g=C,_=z,r=S,e=v,t=f,p=$,u=k,c=m;return L(),B("div",null,[l(b,{title:"background",subtitle:"background"}),a[15]||(a[15]=n("ul",null,[n("li",null,"背景初始化（位置、尺寸、重複方式）"),n("li",null,"綜合背景設定（圖片 + 初始化）"),n("li",null,"快速預設背景樣式（居中、全覆蓋、不重複） ")],-1)),a[16]||(a[16]=n("hr",null,null,-1)),l(r,{label:"Mixin 說明"},{default:o(()=>[l(g,{code:["bg-init()","bg()","bg-cc()"]}),l(_,{columns:d,rows:i.value},null,8,["rows"])]),_:1}),a[17]||(a[17]=n("br",null,null,-1)),l(r,{label:"範例 (Example)"},{default:o(()=>[a[12]||(a[12]=n("h4",null,"背景初始化",-1)),l(c,{value:"0"},{default:o(()=>[l(t,null,{default:o(()=>[l(e,{value:"0"},{default:o(()=>[...a[0]||(a[0]=[s("SCSS",-1)])]),_:1}),l(e,{value:"1"},{default:o(()=>[...a[1]||(a[1]=[s("CSS",-1)])]),_:1})]),_:1}),l(u,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[2]||(a[2]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".banner-1"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-init"),s(`();
}

`),n("span",{class:"o"},".banner-2"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-init"),s("("),n("span",{class:"o"},"center"),s(", "),n("span",{class:"o"},"cover"),s(", "),n("span",{class:"o"},"no-repeat"),s(`);
}
`)])],-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[3]||(a[3]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".banner-1"),s(` {
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
}

`),n("span",{class:"o"},".banner-2"),s(` {
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),a[13]||(a[13]=n("h4",null,"綜合背景設定",-1)),l(c,{value:"0"},{default:o(()=>[l(t,null,{default:o(()=>[l(e,{value:"0"},{default:o(()=>[...a[4]||(a[4]=[s("SCSS",-1)])]),_:1}),l(e,{value:"1"},{default:o(()=>[...a[5]||(a[5]=[s("CSS",-1)])]),_:1})]),_:1}),l(u,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[6]||(a[6]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".card-1"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg"),s("("),n("span",{class:"g"},"'img/card.png'"),s(`);
}

`),n("span",{class:"o"},".card-2"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg"),s("("),n("span",{class:"g"},"'img/card.png'"),s(", "),n("span",{class:"o"},"center"),s(", "),n("span",{class:"o"},"cover"),s(", "),n("span",{class:"o"},"no-repeat"),s(`);
}
`)])],-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[7]||(a[7]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".card-1"),s(` {
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
  background-position: c`),n("span",{class:"o"},"enter"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
  background-image: `),n("span",{class:"o"},"url(img/card.png)"),s(`;
}

`),n("span",{class:"o"},".card-2"),s(` {
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
  background-image: `),n("span",{class:"o"},"url(img/card.png)"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),a[14]||(a[14]=n("h4",null,"快速居中覆蓋",-1)),l(c,{value:"0"},{default:o(()=>[l(t,null,{default:o(()=>[l(e,{value:"0"},{default:o(()=>[...a[8]||(a[8]=[s("SCSS",-1)])]),_:1}),l(e,{value:"1"},{default:o(()=>[...a[9]||(a[9]=[s("CSS",-1)])]),_:1})]),_:1}),l(u,null,{default:o(()=>[l(p,{value:"0"},{default:o(()=>[...a[10]||(a[10]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".thumb"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-cc()"),s(`;
}
`)])],-1)])]),_:1}),l(p,{value:"1"},{default:o(()=>[...a[11]||(a[11]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".thumb"),s(` {
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{I as default};
