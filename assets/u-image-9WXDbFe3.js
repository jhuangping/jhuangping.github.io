import{_ as f,a as g,b as _,c as b,d as v}from"./TabItem-DofG51Ln.js";import{_ as x}from"./LatticeBlock-BAOOrMdK.js";import{_ as S}from"./LatticeGrammar-B3OAbBSv.js";import{_ as y}from"./LatticeScssCode-BE0BRj7w.js";import{_ as C}from"./LatticeHeadline-CG1XX9Zt.js";import{c as L,e as i,i as V,s as a,b as T,a as l,A as s,_ as z}from"./index-DL_OigAO.js";function B(P,n){const m=C,o=y,t=S,e=x,u=_,c=g,p=v,d=b,r=f;return T(),L("div",null,[i(m,{title:"image",subtitle:"utility"}),n[20]||(n[20]=V('<p>響應式圖片容器工具，支援 u-imgfix 與 u-imgfit 類別</p><p class="mb:2">功能說明</p><ul class="mt:0"><li>統一圖片容器樣式，避免圖片外框影響排版</li><li>支援 <code>aspect-ratio</code>，可在容器上加上比例控制（例如 16:9）</li><li>圖片絕對定位，<code>img</code> 會自動填滿容器</li><li>支援 object-fit，提供 <code>scale-down</code>、<code>cover</code>、<code>contain</code> 三種模式</li><li>支援全螢幕顯示，提供多種 class 名稱，讓圖片能全螢幕顯示並自動套用</li></ul><hr>',4)),i(e,{label:"可用 Class"},{default:a(()=>[n[0]||(n[0]=l("h4",null,"基本容器",-1)),i(o,{code:[".u-imgfit:*",".u-imgfix:*"]}),n[1]||(n[1]=l("p",null,"這些容器會自動套用統一樣式，圖片填滿容器",-1)),n[2]||(n[2]=l("h4",null,"Object-fit 類型",-1)),n[3]||(n[3]=l("h5",{class:"mb:-15"},"Class Name :",-1)),i(t,{label:"",hideVar:"",code:[{code:".u-imgfix:full"},{code:".u-imgfit:full"}]}),n[4]||(n[4]=l("p",null,"縮放至容器內，必要時縮小",-1)),i(t,{label:"",hideVar:"",code:[{code:".u-imgfix:out"},{code:".u-imgfix:cover"},{code:".u-imgfit:out"},{code:".u-imgfit:cover"}]}),n[5]||(n[5]=l("p",null,"填滿容器，可能裁切",-1)),i(t,{label:"",hideVar:"",code:[{code:".u-imgfix:in"},{code:".u-imgfix:contain"},{code:".u-imgfit:in"},{code:".u-imgfit:contain"}]}),n[6]||(n[6]=l("p",null,"完整顯示圖片，可能留白",-1)),n[7]||(n[7]=l("h4",null,"全螢幕特例",-1)),n[8]||(n[8]=l("p",{class:"mb:2"},"支援多種命名方式，效果相同：",-1)),n[9]||(n[9]=l("ul",{class:"mt:0"},[l("li",null,[l("code",null,".u-imgfix:fullScreen"),s(" / "),l("code",null,".u-imgfix:full-screen")]),l("li",null,[l("code",null,".u-imgfit:fullScreen"),s(" / "),l("code",null,".u-imgfit:full-screen")]),l("li",null,[l("code",null,".u-imgfix-fullScreen"),s(" / "),l("code",null,".u-imgfix-full-screen")]),l("li",null,[l("code",null,".u-imgfit-fullScreen"),s(" / "),l("code",null,".u-imgfit-full-screen")])],-1)),n[10]||(n[10]=l("br",null,null,-1)),n[11]||(n[11]=l("hr",null,null,-1))]),_:1}),i(e,{label:"使用範例"},{default:a(()=>[i(r,{class:"is:des",value:"0"},{default:a(()=>[i(c,null,{default:a(()=>[i(u,{value:"0"},{default:a(()=>[...n[12]||(n[12]=[s("SCSS",-1)])]),_:1}),i(u,{value:"1"},{default:a(()=>[...n[13]||(n[13]=[s("HTML",-1)])]),_:1})]),_:1}),i(d,null,{default:a(()=>[i(p,{value:"0"},{default:a(()=>[...n[14]||(n[14]=[l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 比例 4:3"),s(`
`),l("span",{class:"o"},".size1"),s(" { aspect-ratio: "),l("span",{class:"o"},"4 / 3"),s(`; }

`),l("span",{class:"gy"},"// 比例 16:9"),s(`
`),l("span",{class:"o"},".size2"),s(" { aspect-ratio: "),l("span",{class:"o"},"16 / 9"),s(`; }

`),l("span",{class:"gy"},"// 比例 1:1"),s(`
`),l("span",{class:"o"},".size3"),s(" { aspect-ratio: "),l("span",{class:"o"},"1 / 1"),s("; }")])])],-1)])]),_:1}),i(p,{value:"1"},{default:a(()=>[...n[15]||(n[15]=[l("div",null,[l("pre",null,[l("code",null,[l("span",{class:"gy"},"// 比例 4:3"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"u-imgfit:cover size1"),s('">')]),s(`
  `),l("span",{class:"r"},[s('<img src="'),l("span",{class:"g"},"https://imagePath/..."),s('">')]),s(`
`),l("span",{class:"r"},"</div>"),s(`

`),l("span",{class:"gy"},"// 比例 16:9"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"u-imgfit:contain size2"),s('">')]),s(`
  `),l("span",{class:"r"},[s('<img src="'),l("span",{class:"g"},"https://imagePath/..."),s('">')]),s(`
`),l("span",{class:"r"},"</div>"),s(`

`),l("span",{class:"gy"},"// 比例 1:1"),s(`
`),l("span",{class:"r"},[s('<div class="'),l("span",{class:"g"},"u-imgfit:full size3"),s('">')]),s(`
  `),l("span",{class:"r"},[s('<img src="'),l("span",{class:"g"},"https://imagePath/..."),s('">')]),s(`
`),l("span",{class:"r"},"</div>"),s(`
`)])])],-1)])]),_:1})]),_:1})]),_:1}),n[16]||(n[16]=l("br",null,null,-1)),n[17]||(n[17]=l("hr",null,null,-1))]),_:1}),i(e,{label:"設定方式"},{default:a(()=>[i(o,{code:"utility.image"}),i(t,{code:"utility.image",hideVar:""}),n[18]||(n[18]=l("h4",{class:"mb:2"},"SCSS file setting",-1)),n[19]||(n[19]=l("pre",{class:"mt:0"},[l("code",null,[l("span",{class:"gy"},"// 引入 LatticeCSS utility"),s(`
`),l("span",{class:"p"},"@use"),s(),l("span",{class:"g"},"'LatticeCSS/utility'"),s(`;

`),l("span",{class:"gy"},"// 初始化 image"),s(`
`),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"utility.image"),s(";")])],-1))]),_:1})])}const N={},A=z(N,[["render",B]]);export{A as default};
