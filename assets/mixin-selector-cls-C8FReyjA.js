import{_,a as f,b as v,c as y,d as g}from"./TabItem-BAQxWGe5.js";import{_ as B}from"./LatticeTable-B0Naatzu.js";import{_ as w}from"./LatticeHeadline-0FdPbW1y.js";import{r as d,c as S,e as n,i as $,a as s,A as l,s as o,b as E}from"./index-XeVrB2dC.js";const V={__name:"mixin-selector-cls",setup(T){const a=d({columns:["類型","範例","說明"],rows:[{cells:["狀態類別（冒號）","<code>.is:active</code>","狀態、互動、條件"]},{cells:["狀態類別（破折號）","<code>.is-active</code>","常見於 utility / state class"]},{cells:["BEM modifier","<code>&-active</code>","元件的修飾樣式"]},{cells:["BEM double modifier","<code>&--active</code>","強調或第二層 modifier"]}]}),t=d({columns:["參數","說明","預設"],rows:[{cells:["<code>$modifier</code>","前綴（如 is / type / skin / style）","<code>'is'</code>"]},{cells:["<code>$name</code>","後綴名稱（如 active / primary）","<code>null</code>"]}]});return(k,e)=>{const p=w,c=B,i=v,u=f,r=g,m=y,b=_;return E(),S("div",null,[n(p,{title:"attribute selector",subtitle:"selector"}),e[4]||(e[4]=$("<p>一次產生四種常見的 class pattern，非常適合大型 UI、BEM、狀態類別、主題類別等架構<br> class 變體，包含： </p><ul><li><b>狀態類別（state class）</b><br><code>.is:active</code>、.<code>type:primary</code>、<code>.skin:dark</code></li><li><b>狀態類別（破折號版本）</b><br><code>.is-active</code>、<code>.type-primary</code></li><li><b>BEM 修飾類別（modifier）</b><br><code>&amp;-active</code></li><li><b>BEM 強調修飾類別（double modifier）</b><br><code>&amp;--active</code>（常見於 BEM 的 modifier） </li></ul><p>這讓你在寫 SCSS 時，不用重複寫四次 selector，也能保持命名一致、語意清楚</p><hr><h2>產生的選擇器形式</h2>",5)),n(c,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),e[5]||(e[5]=s("br",null,null,-1)),e[6]||(e[6]=s("hr",null,null,-1)),e[7]||(e[7]=s("h2",null,"參數說明",-1)),e[8]||(e[8]=s("h3",{class:"use-code"},[s("code",null,[l("class("),s("span",{class:"opy"},"$modifier,$name"),l(")")]),l(" "),s("code",null,[l("cls("),s("span",{class:"opy"},"$modifier,$name"),l(") ")])],-1)),n(c,{columns:t.value.columns,rows:t.value.rows},null,8,["columns","rows"]),e[9]||(e[9]=s("br",null,null,-1)),e[10]||(e[10]=s("hr",null,null,-1)),e[11]||(e[11]=s("h2",null,"使用範例",-1)),n(b,{value:"0"},{default:o(()=>[n(u,null,{default:o(()=>[n(i,{value:"0"},{default:o(()=>[...e[0]||(e[0]=[l("SCSS",-1)])]),_:1}),n(i,{value:"1"},{default:o(()=>[...e[1]||(e[1]=[l("CSS",-1)])]),_:1})]),_:1}),n(m,null,{default:o(()=>[n(r,{value:"0"},{default:o(()=>[...e[2]||(e[2]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// active 狀態"),l(`
`),s("span",{class:"o"},".btn"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"o"},"cls"),l("("),s("span",{class:"g"},"'is', 'active'"),l(`) {
    color: `),s("span",{class:"o"},"red"),l(`;
  }
}

`),s("span",{class:"gy"},"// 使用不同 modifier（type）"),l(`
`),s("span",{class:"o"},".card"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"o"},"cls"),l("("),s("span",{class:"g"},"'type', 'primary'"),l(`) {
    border-color: `),s("span",{class:"o"},"blue"),l(`;
  }
}
`)])],-1)])]),_:1}),n(r,{value:"1"},{default:o(()=>[...e[3]||(e[3]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// active 狀態"),l(`
`),s("span",{class:"o"},`.btn.is:active,
.btn.is-active,
.btn-active,
.btn--active`),l(` {
  color: `),s("span",{class:"o"},"red"),l(`;
}

`),s("span",{class:"gy"},"// 使用不同 modifier（type）"),l(`
`),s("span",{class:"o"},`.card.type:primary,
.card.type-primary,
.card-primary,
.card--primary`),l(` {
  border-color: `),s("span",{class:"o"},"blue"),l(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{V as default};
