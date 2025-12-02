import{_ as v,a as S,b as x,c as g,d as $,e as b,f as _}from"./LatticeHeadline-Bqg6cnjd.js";import{r as w,c as C,e,i as M,a as u,s as n,b as y,A as o}from"./index-DLKXIvMG.js";const B={__name:"med-breakpoint",setup(Q){const s=["Mixin 名稱","功能","參數"],f=w([{cells:["<code>med-max($media)</code>","建立 max-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:["<code>med-min($media)</code>","建立 min-width Media Query","<code>$media</code>：斷點名稱或 px"]},{cells:["<code>med-range($max, $min)</code>","建立 範圍寬度 Media Query","<p><code>$max</code>：最大寬度</p><p><code>$min</code>：最小寬度</p>"]},{cells:["<code>med-max-h($size)</code>","建立 max-height Media Query","<code>$size</code>：最大高度"]},{cells:["<code>med-min-h($size)</code>","建立 min-height Media Query","<code>$size</code>：最小高度"]},{cells:["<code>med-range-h($max, $min)</code>","建立 範圍高度 Media Query","<code>$max</code>：最大高度<br><br><code>$min</code>：最小高度"]}]);return(T,l)=>{const p=v,r=S,d=$,i=g,t=_,a=b,m=x;return y(),C("div",null,[e(p,{title:"breakpoint",subtitle:"media"}),l[28]||(l[28]=M("<p>統一管理響應式斷點，讓響應式設計更簡潔、可維護。</p><p>提供了 寬度 <code>(width)</code> 與 高度 <code>(height)</code> 兩大類的 Media Query 建立方式，並支援： </p><ul><li>max-width / min-width / range-width</li><li>max-height / min-height / range-height</li><li>斷點名稱對應：可從 <code>$useBreakpoints</code> 取得設定好的斷點值</li><li>自訂數值：若斷點名稱不存在，可直接傳入 px 數值</li></ul><hr><h2>Mixin 說明</h2>",5)),e(r,{columns:s,rows:f.value},null,8,["rows"]),l[29]||(l[29]=u("p",null," ",-1)),l[30]||(l[30]=u("hr",null,null,-1)),l[31]||(l[31]=u("h2",null,"範例 (Example)",-1)),l[32]||(l[32]=u("h3",null,"Max-width",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[0]||(l[0]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[1]||(l[1]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[2]||(l[2]=[u("pre",null,[u("code",null,`.title {
  @include med-max(sm) {
    font-size: 14px;
  }
}
`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[3]||(l[3]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1}),l[33]||(l[33]=u("h3",null,"Min-width",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[4]||(l[4]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[5]||(l[5]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[6]||(l[6]=[u("pre",null,[u("code",null,`.container {
  @include med-min(md) {
    padding: 20px;
  }
}
`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[7]||(l[7]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1}),l[34]||(l[34]=u("h3",null,"Range-width",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[8]||(l[8]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[9]||(l[9]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[10]||(l[10]=[u("pre",null,[u("code",null,`.box {
  @include med-range(1280, tablet) {
    display: flex;
  }
}`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[11]||(l[11]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1}),l[35]||(l[35]=u("h3",null,"Range-width",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[12]||(l[12]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[13]||(l[13]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[14]||(l[14]=[u("pre",null,[u("code",null,`.box {
  @include med-range(1280, tablet) {
    display: flex;
  }
}`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[15]||(l[15]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1}),l[36]||(l[36]=u("h3",null,"Max-height",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[16]||(l[16]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[17]||(l[17]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[18]||(l[18]=[u("pre",null,[u("code",null,`.panel {
  @include med-max-h(800) {
    overflow: auto;
  }
}`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[19]||(l[19]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1}),l[37]||(l[37]=u("h3",null,"Min-height",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[20]||(l[20]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[21]||(l[21]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[22]||(l[22]=[u("pre",null,[u("code",null,`.text {
  @include med-min-h(600) {
    font-size: 18px;
  }
}`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[23]||(l[23]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1}),l[38]||(l[38]=u("h3",null,"Range-height",-1)),e(m,{value:"0"},{default:n(()=>[e(i,null,{default:n(()=>[e(d,{value:"0"},{default:n(()=>[...l[24]||(l[24]=[o("SCSS",-1)])]),_:1}),e(d,{value:"1"},{default:n(()=>[...l[25]||(l[25]=[o("CSS",-1)])]),_:1})]),_:1}),e(a,null,{default:n(()=>[e(t,{value:"0"},{default:n(()=>[...l[26]||(l[26]=[u("pre",null,[u("code",null,`.section {
  @include med-range-h(1080, 720) {
    line-height: 1.5;
  }
}
`)],-1)])]),_:1}),e(t,{value:"1"},{default:n(()=>[...l[27]||(l[27]=[u("pre",null,[u("code")],-1)])]),_:1})]),_:1})]),_:1})])}}};export{B as default};
