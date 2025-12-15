import{_ as r}from"./LatticeTable-fVp187r_.js";import{_ as d}from"./LatticeHeadline-DbwJ8jck.js";import{r as c,c as u,e as l,a as n,i as t,b}from"./index-Dur5vxo0.js";const g={__name:"scrollbar-base",setup(i){const a=c({columns:["Mixin","功能"],rows:[{cells:['<code>scrollbar(<span class="opy">$bar, $bg, $w , $radius</span>)</code>',"自訂 WebKit 捲軸樣式（顏色、寬度、圓角）"]},{cells:['<code>scrollbar-x(<span class="opy">$bar, $bg, $w , $radius</span>)</code>',"自訂捲軸 + 隱藏垂直捲軸（只保留水平）"]},{cells:['<code>scrollbar-y(<span class="opy">$bar, $bg, $w , $radius</span>)</code>',"自訂捲軸 + 隱藏水平捲軸（只保留垂直）"]},{cells:["<code>scrollbar-hide</code>","隱藏所有捲軸，但保留滾動功能（跨瀏覽器）"]}]}),o=c({columns:["參數","說明","預設值"],rows:[{cells:["<code>$bar</code>","滑塊（thumb）顏色","<code>#00f</code>"]},{cells:["<code>$bg</code>","捲軸背景（track）顏色","<code>#f00</code>"]},{cells:["<code>$w</code>","捲軸寬度（px）","<code>5</code>"]},{cells:["<code>$radius</code>","圓角（px），<code>null</code> 表示不設定","<code>null</code>"]}]});return(m,s)=>{const p=d,e=r;return b(),u("div",null,[l(p,{title:"scrollbar",subtitle:"scrollbar"}),s[0]||(s[0]=n("p",null,"客製化 WebKit 瀏覽器的捲軸外觀（Chrome / Safari / Edge），包含寬度、背景、滑塊顏色與圓角 ",-1)),s[1]||(s[1]=n("p",{class:"tip"},"輕量、實用的捲軸樣式工具，非常適合打造一致的 UI 風格 ",-1)),s[2]||(s[2]=n("hr",null,null,-1)),s[3]||(s[3]=n("h2",null,"Mixin 一覽表",-1)),l(e,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),s[4]||(s[4]=n("br",null,null,-1)),s[5]||(s[5]=n("h3",{class:"mb:0"},"參數說明",-1)),l(e,{columns:o.value.columns,rows:o.value.rows},null,8,["columns","rows"]),s[6]||(s[6]=t(`<br><hr><h2>使用範例</h2><pre><code><span class="gy">// 基本用法</span>
<span class="o">.box</span> {
  <span class="p">@include</span> <span class="b">scrollbar</span>(<span class="o">#333, #eee, 8, 4</span>);
}

<span class="gy">// 隱藏水平捲軸（只保留垂直）</span>
<span class="o">.box</span> {
  <span class="p">@include</span> <span class="b">scrollbar-x</span>(<span class="o">#333, #eee, 8, 4</span>);
}

<span class="gy">// 隱藏水平捲軸（只保留垂直）</span>
<span class="o">.box</span> {
  <span class="p">@include</span> <span class="b">scrollbar-y</span>(<span class="o">#333, #eee, 8, 4</span>);
}

<span class="gy">// 隱藏所有捲軸，但保留滾動功能</span>
<span class="o">.box</span> {
  <span class="p">@include</span> <span class="b">scrollbar-hide</span>();
}</code></pre>`,4))])}}};export{g as default};
