import{_ as g,a as m,b as f,c as _,d as v}from"./TabItem-BZAe4E6a.js";import{_ as k}from"./LatticeTable-BZ-aAWxS.js";import{_ as $}from"./LatticeHeadline-vAXp6lnu.js";import{r as S,c as z,e as a,a as n,s as o,b as x,A as s}from"./index-CPHuEMGI.js";const V={__name:"bg-base",setup(C){const d=["Mixin 名稱","功能","參數"],c=S([{cells:['<code>bg-init(<span class="opy">$position, $size, $repeat</span>)</code>',"初始化背景屬性","<code>$position</code>：位置 (預設 center)<br><code>$size</code>：尺寸 (預設 null 不設定)<br><code>$repeat</code>：重複方式 (預設 no-repeat)"]},{cells:['<code>bg(<span class="opy">$url, $position, $size, $repeat</span>)</code>',"綜合設置背景圖片與屬性","<code>$url</code>：圖片路徑<br><code>$position</code>：位置<br><code>$size</code>：尺寸<br><code>$repeat</code>：重複方式"]},{cells:["<code>bg-cc()</code>","快速設置背景為居中、全覆蓋、不重複","無參數"]}]);return(T,l)=>{const i=$,b=k,e=f,p=m,u=v,t=_,r=g;return x(),z("div",null,[a(i,{title:"background",subtitle:"background"}),l[12]||(l[12]=n("ul",null,[n("li",null,"背景初始化（位置、尺寸、重複方式）"),n("li",null,"綜合背景設定（圖片 + 初始化）"),n("li",null,"快速預設背景樣式（居中、全覆蓋、不重複） ")],-1)),l[13]||(l[13]=n("hr",null,null,-1)),l[14]||(l[14]=n("h2",null,"Mixin 說明",-1)),a(b,{columns:d,rows:c.value},null,8,["rows"]),l[15]||(l[15]=n("br",null,null,-1)),l[16]||(l[16]=n("hr",null,null,-1)),l[17]||(l[17]=n("h2",null,"範例 (Example)",-1)),l[18]||(l[18]=n("h3",null,"背景初始化",-1)),a(r,{value:"0"},{default:o(()=>[a(p,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[0]||(l[0]=[s("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[1]||(l[1]=[s("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:o(()=>[a(u,{value:"0"},{default:o(()=>[...l[2]||(l[2]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".banner-1"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-init"),s(`();
}

`),n("span",{class:"o"},".banner-2"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-init"),s("("),n("span",{class:"o"},"center"),s(", "),n("span",{class:"o"},"cover"),s(", "),n("span",{class:"o"},"no-repeat"),s(`);
}
`)])],-1)])]),_:1}),a(u,{value:"1"},{default:o(()=>[...l[3]||(l[3]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".banner-1"),s(` {
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
}

`),n("span",{class:"o"},".banner-2"),s(` {
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
}
`)])],-1)])]),_:1})]),_:1})]),_:1}),l[19]||(l[19]=n("h3",null,"綜合背景設定",-1)),a(r,{value:"0"},{default:o(()=>[a(p,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[4]||(l[4]=[s("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[5]||(l[5]=[s("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:o(()=>[a(u,{value:"0"},{default:o(()=>[...l[6]||(l[6]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".card-1"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg"),s("("),n("span",{class:"g"},"'img/card.png'"),s(`);
}

`),n("span",{class:"o"},".card-2"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg"),s("("),n("span",{class:"g"},"'img/card.png'"),s(", "),n("span",{class:"o"},"center"),s(", "),n("span",{class:"o"},"cover"),s(", "),n("span",{class:"o"},"no-repeat"),s(`);
}
`)])],-1)])]),_:1}),a(u,{value:"1"},{default:o(()=>[...l[7]||(l[7]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".card-1"),s(` {
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
`)])],-1)])]),_:1})]),_:1})]),_:1}),l[20]||(l[20]=n("h3",null,"快速居中覆蓋",-1)),a(r,{value:"0"},{default:o(()=>[a(p,null,{default:o(()=>[a(e,{value:"0"},{default:o(()=>[...l[8]||(l[8]=[s("SCSS",-1)])]),_:1}),a(e,{value:"1"},{default:o(()=>[...l[9]||(l[9]=[s("CSS",-1)])]),_:1})]),_:1}),a(t,null,{default:o(()=>[a(u,{value:"0"},{default:o(()=>[...l[10]||(l[10]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".thumb"),s(` {
  `),n("span",{class:"p"},"@include"),s(),n("span",{class:"b"},"bg-cc()"),s(`;
}
`)])],-1)])]),_:1}),a(u,{value:"1"},{default:o(()=>[...l[11]||(l[11]=[n("pre",null,[n("code",null,[n("span",{class:"o"},".thumb"),s(` {
  background-position: `),n("span",{class:"o"},"center"),s(`;
  background-size: `),n("span",{class:"o"},"cover"),s(`;
  background-repeat: `),n("span",{class:"o"},"no-repeat"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{V as default};
