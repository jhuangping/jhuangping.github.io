import{_ as o}from"./LatticeTable-BZ-aAWxS.js";import{_ as e}from"./LatticeHeadline-vAXp6lnu.js";import{r as t,c as r,e as a,i as p,b as i}from"./index-CPHuEMGI.js";const b={__name:"input-placeholder",setup(d){const n=t({columns:["參數","說明","預設值"],rows:[{cells:["<code>$color</code>","placeholder 文字顏色","<code>null</code>（不設定）"]}]});return(u,s)=>{const l=e,c=o;return i(),r("div",null,[a(l,{title:"input placeholder",subtitle:"input"}),s[0]||(s[0]=p('<p>用來設定 <code>&lt;input&gt;</code> 或 <code>&lt;textarea&gt;</code> 的 placeholder 文字樣式 </p><p>功能說明：</p><ul><li>一次寫法，支援所有主流瀏覽器的 placeholder</li><li>可選擇性設定顏色</li><li>可透過 <code>@content</code> 加入更多樣式</li><li>讓 placeholder 樣式更一致、可維護</li></ul><p>輕量、實用的 placeholder 樣式工具，非常適合表單 UI 設計</p><hr><h2>參數說明</h2><h3 class="use-code"><code>input-placeholder(<span class="opy">$color</span>) </code></h3>',7)),a(c,{columns:n.value.columns,rows:n.value.rows},null,8,["columns","rows"]),s[1]||(s[1]=p(`<p class="tip">若 <code>$color</code> 為 <code>null</code>，則不輸出 <code>color</code><br> 你可以在 <code>@content</code> 裡加入更多樣式（如字距、透明度等） </p><br><hr><h2>使用範例</h2><pre><code><span class="gy">// 設定 placeholder 顏色</span>
<span class="o">input</span> {
  <span class="p">@include</span> <span class="b">input-placeholder</span>(<span class="o">#999</span>);
}
<span class="gy">--- or ---</span>
<span class="o">input</span> {
  <span class="p">@include</span> <span class="b">input-placeholder()</span> {
    color: <span class="o">#999</span>;
  };
}

<span class="gy">// 設定顏色 + 額外樣式</span>
<span class="o">input</span> {
  <span class="p">@include</span> <span class="b">input-placeholder</span>(<span class="o">#aaa</span>) {
    opacity: <span class="o">0.7</span>;
    letter-spacing: <span class="o">1px</span>;
  }
}
<span class="gy">--- or ---</span>
<span class="o">input</span> {
  <span class="p">@include</span> <span class="b">input-placeholder()</span> {
    color: <span class="o">#aaa</span>;
    opacity: <span class="o">0.7</span>;
    letter-spacing: <span class="o">1px</span>;
  }
}

<span class="gy">// 只加自訂樣式（不改顏色）</span>
<span class="o">input</span> {
  <span class="p">@include</span> <span class="b">input-placeholder()</span> {
    font-style: <span class="o">italic</span>;
  }
}</code></pre>`,5))])}}};export{b as default};
