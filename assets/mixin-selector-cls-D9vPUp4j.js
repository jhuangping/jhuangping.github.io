import{_ as y,a as g,b as B,c as $,d as S}from"./TabItem-Dm0vhPld.js";import{_ as w}from"./LatticeGrammar-aCBYUnHW.js";import{_ as k}from"./LatticeScssCode-Cv0IqA5U.js";import{_ as E}from"./LatticeBlock-Cmb-lu-l.js";import{_ as T}from"./LatticeTable-C3v95GrU.js";import{_ as L}from"./LatticeHeadline-sDF0Qg4Z.js";import{r as p,c as M,e as o,i as x,a as e,s as l,b as C,A as s}from"./index-Cyi5GN-D.js";const q={__name:"mixin-selector-cls",setup(N){const c=p({columns:["類型","範例","說明"],rows:[{cells:["狀態類別（冒號）","<code>.is:active</code>","狀態、互動、條件"]},{cells:["狀態類別（破折號）","<code>.is-active</code>","常見於 utility / state class"]},{cells:["BEM modifier","<code>&-active</code>","元件的修飾樣式"]},{cells:["BEM double modifier","<code>&--active</code>","強調或第二層 modifier"]}]}),t=p({columns:["參數","說明","預設"],rows:[{cells:["<code>$modifier</code>","前綴（如 is / type / skin / style）","<code>'is'</code>"]},{cells:["<code>$name</code>","後綴名稱（如 active / primary）","<code>null</code>"]}]});return(V,n)=>{const m=L,i=T,a=E,u=k,_=w,r=B,b=g,d=S,f=$,v=y;return C(),M("div",null,[o(m,{title:"attribute selector",subtitle:"selector"}),n[4]||(n[4]=x("<p>一次產生四種常見的 class pattern，非常適合大型 UI、BEM、狀態類別、主題類別等架構<br> class 變體，包含： </p><ul><li><b>狀態類別（state class）</b><br><code>.is:active</code>、.<code>type:primary</code>、<code>.skin:dark</code></li><li><b>狀態類別（破折號版本）</b><br><code>.is-active</code>、<code>.type-primary</code></li><li><b>BEM 修飾類別（modifier）</b><br><code>&amp;-active</code></li><li><b>BEM 強調修飾類別（double modifier）</b><br><code>&amp;--active</code>（常見於 BEM 的 modifier） </li></ul><p>這讓你在寫 SCSS 時，不用重複寫四次 selector，也能保持命名一致、語意清楚</p>",3)),o(a,{label:"產生的選擇器形式"},{default:l(()=>[o(i,{columns:c.value.columns,rows:c.value.rows},null,8,["columns","rows"])]),_:1}),n[5]||(n[5]=e("br",null,null,-1)),o(u,{code:["class()","cls()"]}),o(_,{code:[{code:"class",var:"$modifier,$name"},{code:"cls",var:"$modifier,$name"}]}),o(a,{label:"參數說明"},{default:l(()=>[o(i,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"])]),_:1}),n[6]||(n[6]=e("br",null,null,-1)),o(a,{label:"使用範例"},{default:l(()=>[o(v,{value:"0"},{default:l(()=>[o(b,null,{default:l(()=>[o(r,{value:"0"},{default:l(()=>[...n[0]||(n[0]=[s("SCSS",-1)])]),_:1}),o(r,{value:"1"},{default:l(()=>[...n[1]||(n[1]=[s("CSS",-1)])]),_:1})]),_:1}),o(f,null,{default:l(()=>[o(d,{value:"0"},{default:l(()=>[...n[2]||(n[2]=[e("pre",null,[e("code",null,[e("span",{class:"gy"},"// active 狀態"),s(`
`),e("span",{class:"o"},".btn"),s(` {
  `),e("span",{class:"p"},"@include"),s(),e("span",{class:"o"},"cls"),s("("),e("span",{class:"g"},"'is', 'active'"),s(`) {
    color: `),e("span",{class:"o"},"red"),s(`;
  }
}

`),e("span",{class:"gy"},"// 使用不同 modifier（type）"),s(`
`),e("span",{class:"o"},".card"),s(` {
  `),e("span",{class:"p"},"@include"),s(),e("span",{class:"o"},"cls"),s("("),e("span",{class:"g"},"'type', 'primary'"),s(`) {
    border-color: `),e("span",{class:"o"},"blue"),s(`;
  }
}
`)])],-1)])]),_:1}),o(d,{value:"1"},{default:l(()=>[...n[3]||(n[3]=[e("pre",null,[e("code",null,[e("span",{class:"gy"},"// active 狀態"),s(`
`),e("span",{class:"o"},`.btn.is:active,
.btn.is-active,
.btn-active,
.btn--active`),s(` {
  color: `),e("span",{class:"o"},"red"),s(`;
}

`),e("span",{class:"gy"},"// 使用不同 modifier（type）"),s(`
`),e("span",{class:"o"},`.card.type:primary,
.card.type-primary,
.card-primary,
.card--primary`),s(` {
  border-color: `),e("span",{class:"o"},"blue"),s(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{q as default};
