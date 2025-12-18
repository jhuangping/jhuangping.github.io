import{_ as a}from"./LatticeTable-BZ-aAWxS.js";import{_ as t}from"./LatticeHeadline-vAXp6lnu.js";import{r as d,c as i,e as o,i as s,b as p}from"./index-CPHuEMGI.js";const h={__name:"font-weight",setup(r){const l=d({columns:["Mixin 名稱","對應字重","數值"],rows:[{cells:["<code>f-lighter</code>","lighter","相對字重"]},{cells:["<code>f-bolder</code>","bolder","相對字重"]},{cells:["<code>f-thin</code>","Thin","100"]},{cells:["<code>f-extralight</code>","Extra Light","200"]},{cells:["<code>f-light</code>","Light","300"]},{cells:["<code>f-regular</code>","Regular","400"]},{cells:["<code>f-medium</code>","Medium","500"]},{cells:["<code>f-semibold</code>","Semi Bold","600"]},{cells:["<code>f-bold</code>","Bold","700"]},{cells:["<code>f-extrabold</code>","Extra Bold","800"]},{cells:["<code>f-heavy</code>","Heavy / Black","900"]}]});return(u,e)=>{const n=t,c=a;return p(),i("div",null,[o(n,{title:"font weight",subtitle:"font"}),e[0]||(e[0]=s("<p>不必每次都手寫數字或記住每個字重的對應值<br>它能做到：</p><ul><li>以語意化名稱設定字重（如 <code>f-bold</code>、<code>f-light</code>）</li><li>以數字對應字重（100–900）</li><li>讓排版系統更一致、可維護 </li></ul><hr><h2>Mixin 一覽表</h2>",4)),o(c,{columns:l.value.columns,rows:l.value.rows},null,8,["columns","rows"]),e[1]||(e[1]=s(`<br><hr><h2>使用範例</h2><pre><code><span class="o">.title</span> {
  <span class="p">@include</span> <span class="b">f-bold</span>;
}

<span class="o">.note</span> {
  <span class="p">@include</span> <span class="b">f-light</span>;
}

<span class="o">.banner</span> {
  <span class="p">@include</span> <span class="b">f-heavy</span>;
}</code></pre>`,4))])}}};export{h as default};
