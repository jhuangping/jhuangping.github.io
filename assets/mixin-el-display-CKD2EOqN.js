import{_ as i}from"./LatticeBlock-84aYVsHv.js";import{_ as r}from"./LatticeTable-BiE0n4NR.js";import{_ as m}from"./LatticeGrammar-Cf0PxrB8.js";import{_}from"./LatticeScssCode-DGDOmNHn.js";import{_ as b}from"./LatticeHeadline-CGlEl7vO.js";import{r as f,c as y,e as o,a as l,s as u,b as w,A as s}from"./index-CWOuoNZf.js";const V={__name:"mixin-el-display",setup(g){const a=f({columns:["參數","說明","預設值"],rows:[{cells:["<code>$switch</code>","切換元素顯示/隱藏","<code>hide</code>"]}]});return(x,n)=>{const t=b,e=_,c=m,d=r,p=i;return w(),y("div",null,[o(t,{title:"display",subtitle:"element"}),n[9]||(n[9]=l("p",null,"元素顯示控制工具，適合動畫、UI 狀態切換、互動元件",-1)),n[10]||(n[10]=l("hr",null,null,-1)),o(p,{label:"Mixin 說明"},{default:u(()=>[o(e,{code:"el-hide()"}),n[0]||(n[0]=l("p",null,"讓元素「不可見」且「不可點擊」",-1)),n[1]||(n[1]=l("br",null,null,-1)),o(e,{code:"el-show()"}),n[2]||(n[2]=l("p",null,"讓元素「可見」且「可點擊」",-1)),n[3]||(n[3]=l("br",null,null,-1)),o(e,{code:"el-display()"}),n[4]||(n[4]=l("p",null,"依照傳入的參數，自動決定要顯示或隱藏元素",-1)),o(c,{code:"el-display",var:"$switch"}),o(d,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),n[5]||(n[5]=l("br",null,null,-1)),n[6]||(n[6]=l("div",{class:"tip"},[l("code",null,"$switch"),s(" : "),l("p",null,[l("b",null,"顯示 : "),l("code",null,"show"),s("、"),l("code",null,"1"),s("、"),l("code",null,"true"),s("、"),l("code",null,"yes"),s("、"),l("code",null,"on")]),l("p",{class:"mb:0"},[l("b",null,"隱藏 : "),l("code",null,"hide"),s("、"),l("code",null,"0"),s("、"),l("code",null,"false"),s("、"),l("code",null,"no"),s("、"),l("code",null,"off")])],-1)),n[7]||(n[7]=l("br",null,null,-1))]),_:1}),o(p,{label:"使用範例"},{default:u(()=>[...n[8]||(n[8]=[l("h4",{class:"mb:2"},"顯示元素",-1),l("pre",null,[l("code",null,[l("span",{class:"o"},".className"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"el-show"),s(`();
  `),l("span",{class:"gy"},"--- or ---"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"el-display"),s("("),l("span",{class:"g"},"'show'"),s(`);
  `),l("span",{class:"gy"},"--- or ---"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"el-display"),s("("),l("span",{class:"o"},"1"),s(`);
}
`)])],-1),l("h4",{class:"mb:2"},"隱藏元素",-1),l("pre",null,[l("code",null,[l("span",{class:"o"},".className"),s(` {
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"el-hide"),s(`();
  `),l("span",{class:"gy"},"--- or ---"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"el-display"),s("("),l("span",{class:"g"},"'hide'"),s(`);
  `),l("span",{class:"gy"},"--- or ---"),s(`
  `),l("span",{class:"p"},"@include"),s(),l("span",{class:"b"},"el-display"),s("("),l("span",{class:"o"},"0"),s(`);
}`)])],-1)])]),_:1})])}}};export{V as default};
