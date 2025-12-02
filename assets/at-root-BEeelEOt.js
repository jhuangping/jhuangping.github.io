import{_,a as f,b,c as S,d as v,e as g,f as w}from"./LatticeHeadline-Bqg6cnjd.js";import{r as C,c as $,e as o,a as l,i as T,A as e,s,b as x}from"./index-DLKXIvMG.js";const k={__name:"at-root",setup(B){const p=["Parameter Name","Type","Description"],i=C([{cells:["<code>$parentSelector</code>","<code>String</code>","<b>指定</b>的父層選擇"]},{cells:["<code>$isChild</code>","<code>Boolean</code>",'是否將子選擇器直接合併到父層選擇器<br/>      <ul class="my:0">        <li><b>true (預設)</b>：保持空格，產生「父層 > 當前選擇器」的結構</li>        <li><b>false</b>：直接合併，無空格，產生「父層當前選擇器」的結構</li>      </ul>']}]);return(N,n)=>{const c=_,m=f,t=v,u=S,a=w,r=g,d=b;return x(),$("div",null,[o(c,{title:"at-root",subtitle:"at-root"}),n[8]||(n[8]=l("p",null,[e("將當前選擇器提升到指定的父層選擇器 ("),l("code",null,"parent selector"),e(") 下，並保持或合併子選擇器結構。")],-1)),n[9]||(n[9]=l("hr",null,null,-1)),n[10]||(n[10]=l("h2",null,"參數 (Parameters)",-1)),o(m,{columns:p,rows:i.value},null,8,["rows"]),n[11]||(n[11]=T("<p><code>at-root($parentSelector, $isChild)</code></p><br><hr><h2>範例 (Example)</h2><h3>範例 1: <code>$isChild = true</code> (預設)</h3><p>將 <code>.card</code> 提升到 <code>.wrapper</code> 下，中間以空格分隔，表示後代選擇器。</p>",6)),o(d,{value:"0"},{default:s(()=>[o(u,null,{default:s(()=>[o(t,{value:"0"},{default:s(()=>[...n[0]||(n[0]=[e("SCSS",-1)])]),_:1}),o(t,{value:"1"},{default:s(()=>[...n[1]||(n[1]=[e("CSS",-1)])]),_:1})]),_:1}),o(r,null,{default:s(()=>[o(a,{value:"0"},{default:s(()=>[...n[2]||(n[2]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".card"),e(` {
  `),l("span",{class:"p"},"@include"),e(),l("span",{class:"b"},"at-root"),e("("),l("span",{class:"g"},'".wrapper"'),e(`) {
    color: `),l("span",{class:"o"},"red"),e(`;
  }
}`)])],-1)])]),_:1}),o(a,{value:"1"},{default:s(()=>[...n[3]||(n[3]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".wrapper .card"),e(` {
  color: `),l("span",{class:"o"},"red"),e(`;
}

`)])],-1)])]),_:1})]),_:1})]),_:1}),n[12]||(n[12]=l("br",null,null,-1)),n[13]||(n[13]=l("h3",null,[e("範例 2: "),l("code",null,"$isChild = false")],-1)),n[14]||(n[14]=l("p",null,[e("將 "),l("code",null,".item"),e(" 直接合併到 "),l("code",null,".list"),e(" 後面，形成 "),l("code",null,".list.item"),e("。 ")],-1)),o(d,{value:"0"},{default:s(()=>[o(u,null,{default:s(()=>[o(t,{value:"0"},{default:s(()=>[...n[4]||(n[4]=[e("SCSS",-1)])]),_:1}),o(t,{value:"1"},{default:s(()=>[...n[5]||(n[5]=[e("CSS",-1)])]),_:1})]),_:1}),o(r,null,{default:s(()=>[o(a,{value:"0"},{default:s(()=>[...n[6]||(n[6]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".item"),e(` {
  `),l("span",{class:"p"},"@include"),e(),l("span",{class:"b"},"at-root"),e("("),l("span",{class:"g"},'".list"'),e(`, false) {
    font-weight: `),l("span",{class:"o"},"bold"),e(`;
  }
}`)])],-1)])]),_:1}),o(a,{value:"1"},{default:s(()=>[...n[7]||(n[7]=[l("pre",null,[l("code",null,[l("span",{class:"o"},".list.item"),e(` {
  font-weight: `),l("span",{class:"o"},"bold"),e(`;
}`)])],-1)])]),_:1})]),_:1})]),_:1})])}}};export{k as default};
