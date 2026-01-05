import{_ as u}from"./LatticeBlock-BfcNPi7u.js";import{_ as i}from"./LatticeTable-BVH2LRJ-.js";import{_ as m}from"./LatticeScssCode-D274NkqP.js";import{_}from"./LatticeHeadline-BswCHU26.js";import{r as p,c as $,e as a,a as s,s as t,b as x,A as l}from"./index-_tu4U4cc.js";const L={__name:"scrollbar-base",setup(f){const o=p({columns:["Mixin","功能"],rows:[{cells:['<code><span class="b">scrollbar</span>(<span class="r">$bar, $bg, $w , $radius</span>)</code>',"自訂 WebKit 捲軸樣式（顏色、寬度、圓角）"]},{cells:['<code><span class="b">scrollbar-x</span>(<span class="r">$bar, $bg, $w , $radius</span>)</code>',"自訂捲軸 + 隱藏垂直捲軸（只保留水平）"]},{cells:['<code><span class="b">scrollbar-y</span>(<span class="r">$bar, $bg, $w , $radius</span>)</code>',"自訂捲軸 + 隱藏水平捲軸（只保留垂直）"]},{cells:['<code><span class="b">scrollbar-hide</span>()</code>',"隱藏所有捲軸，但保留滾動功能（跨瀏覽器）"]}]}),c=p({columns:["參數","說明","預設值"],rows:[{cells:["<code>$bar</code>","滑塊（thumb）顏色","<code>#00f</code>"]},{cells:["<code>$bg</code>","捲軸背景（track）顏色","<code>#f00</code>"]},{cells:["<code>$w</code>","捲軸寬度（px）","<code>5</code>"]},{cells:["<code>$radius</code>","圓角（px），<code>null</code> 表示不設定","<code>null</code>"]}]});return(w,n)=>{const d=_,b=m,e=i,r=u;return x(),$("div",null,[a(d,{title:"scrollbar",subtitle:"scrollbar"}),n[4]||(n[4]=s("p",null,"客製化 WebKit 瀏覽器的捲軸外觀（Chrome / Safari / Edge），包含寬度、背景、滑塊顏色與圓角 ",-1)),n[5]||(n[5]=s("p",{class:"tip"},"輕量、實用的捲軸樣式工具，非常適合打造一致的 UI 風格 ",-1)),n[6]||(n[6]=s("hr",null,null,-1)),a(r,{label:"Mixin 一覽表"},{default:t(()=>[a(b,{code:["scrollbar()","scrollbar-x()","scrollbar-y()","scrollbar-hide()"]}),a(e,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"]),n[0]||(n[0]=s("br",null,null,-1)),n[1]||(n[1]=s("h4",{class:"mb:2"},"參數說明",-1)),a(e,{columns:c.value.columns,rows:c.value.rows},null,8,["columns","rows"]),n[2]||(n[2]=s("br",null,null,-1))]),_:1}),a(r,{label:"使用範例"},{default:t(()=>[...n[3]||(n[3]=[s("pre",null,[s("code",null,[s("span",{class:"gy"},"// 基本用法"),l(`
`),s("span",{class:"o"},".box"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"scrollbar"),l("("),s("span",{class:"o"},"#333, #eee, 8, 4"),l(`);
}

`),s("span",{class:"gy"},"// 隱藏水平捲軸（只保留垂直）"),l(`
`),s("span",{class:"o"},".box"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"scrollbar-x"),l("("),s("span",{class:"o"},"#333, #eee, 8, 4"),l(`);
}

`),s("span",{class:"gy"},"// 隱藏水平捲軸（只保留垂直）"),l(`
`),s("span",{class:"o"},".box"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"scrollbar-y"),l("("),s("span",{class:"o"},"#333, #eee, 8, 4"),l(`);
}

`),s("span",{class:"gy"},"// 隱藏所有捲軸，但保留滾動功能"),l(`
`),s("span",{class:"o"},".box"),l(` {
  `),s("span",{class:"p"},"@include"),l(),s("span",{class:"b"},"scrollbar-hide"),l(`();
}`)])],-1)])]),_:1})])}}};export{L as default};
