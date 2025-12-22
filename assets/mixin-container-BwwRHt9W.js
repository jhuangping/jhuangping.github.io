import{_ as r}from"./LatticeTable-B0Naatzu.js";import{_ as i}from"./LatticeHeadline-0FdPbW1y.js";import{r as p,c as u,e as o,a as s,i as t,A as e,b as m}from"./index-XeVrB2dC.js";const x={__name:"mixin-container",setup(y){const l=p({columns:["參數","說明","必填","預設"],rows:[{cells:["<code>$w</code>","觸發寬度（px）","✅ 必填","<code>null</code>"]},{cells:["<code>$name</code>","容器名稱（null = 無名容器）","❌ 選填","<code>null</code>"]}]}),a=p({columns:["參數","說明","預設"],rows:[{cells:["<code>$name</code>","容器名稱，可為 <code>null</code>（無名容器）","<code>null</code>"]},{cells:["<code>$type</code>","容器類型，常用 <code>inline-size</code> 或 <code>size</code>","<code>inline-size</code>"]}]});return(b,n)=>{const d=i,c=r;return m(),u("div",null,[o(d,{title:"container query",subtitle:"container"}),n[0]||(n[0]=s("p",null,"設定容器查詢（Container Query），並建立基於容器寬度的響應式樣式",-1)),n[1]||(n[1]=s("hr",null,null,-1)),n[2]||(n[2]=s("h2",null,"Mixin 說明",-1)),n[3]||(n[3]=s("h3",{class:"use-code"},[s("code",null,[e("cont("),s("span",{class:"opy"},"$w, $type"),e(") ")])],-1)),n[4]||(n[4]=s("p",null,[e("建立 "),s("code",null,"@container"),e(" 查詢，讓你可以針對某個容器的寬度變化套用不同樣式，而不是依賴傳統的 @media（視窗寬度） ")],-1)),n[5]||(n[5]=s("h4",null,"參數說明",-1)),o(c,{columns:l.value.columns,rows:l.value.rows},null,8,["columns","rows"]),n[6]||(n[6]=t('<br><h3 class="use-code"><code>cont-set(<span class="opy">$name, $type</span>) </code></h3><p>搭配 <code>@container</code> 查詢使用，讓該元素能被用於 CSS Container Query，讓元件可以依照「容器大小」而不是「視窗大小」進行響應式調整 </p><p class="mb:0">用來在元素上設定：</p><ul><li><code>container-type</code></li><li><code>container-name</code>（可選） </li></ul><h4>參數說明</h4>',6)),o(c,{columns:a.value.columns,rows:a.value.rows},null,8,["columns","rows"]),n[7]||(n[7]=t(`<br><hr><h2>使用範例</h2><pre><code><span class="gy">// 無名容器</span>
<span class="p">@include</span> <span class="b">cont</span>(<span class="o">500</span>) {
  <span class="o">.child</span> { flex-direction: <span class="o">column</span>; }
}

<span class="o">.section</span> {
  <span class="p">@include</span> <span class="b">cont-set</span>();
}

<span class="gy">// 具名容器</span>
<span class="p">@include</span> <span class="b">cont</span>(<span class="o">768, card</span>) {
  <span class="o">.card-item</span> { gap: <span class="o">1rem</span>; }
}

<span class="o">.card</span> {
  <span class="p">@include</span> <span class="b">cont-set</span>(<span class="o">card, size</span>);
}</code></pre>`,4))])}}};export{x as default};
