# css-helpers

###### tags: `sass` `note`

## 初使設定

1. 建立一個 `config.scss` 檔，來管控 Module 預設值

2. 引入 `CssHelpersConfig.scss` : `@import '{ path }/css-helpers/CssHelpersConfig.scss'`

3. 設定 css-helpers `config.scss` 的值
   
   ```
   @import '{ path }/css-helpers/CssHelpersConfig.scss'
   
   // Module Default ///////////////////////////////
   //- Breakpoints
   $useBreakpoints: (
     changeMobile: 1280,
     xl4: 2560,
     xl3: 1920,
     xl2: 1600,
     xl: 1440,
     lg: 1280,
     md: 1024,
     sm: 768,
     xs: 600,
     xs2: 480,
     xs3: 360,
   );
   
   //- Default
   $useWebBase: (
     htmlFontSize: null,
     bodyFontSize: 16,
     bodyLineHeight: 20,
     bodyFontColor: #333
   );
   
   //- Typography Fonts
   $fontDefault: 'Noto Sans TC', Arial, 'Microsoft JhengHei', sans-serif;
   $useFont: (dfk:'DFKai-sb');
   
   //- Color
   
   $useColor: ( 
     'base': map-get($useWebBase, bodyFontColor),
     'hover': #007bff,
     'black': #000,
     'blue': #007bff,
     'indigo': #6610f2,
     'purple': #6f42c1,
     'pink': #e83e8c,
     'red': #dc3545,
     'orange': #fd7e14,
     'yellow': #ffc107,
     'green': #28a745,
     'teal': #20c997,
     'cyan': #17a2b8,
     'white': #fff,
     'gray': #6c757d,
     'gray-dark': #343a40,
     'primary': #007bff,
     'secondary': #6c757d,
     'success': #28a745,
     'info': #17a2b8,
     'warning': #ffc107,
     'danger': #dc3545,
     'light': #f8f9fa,
     'dark': #343a40
   ) !default;
   
   // Layout Module ////////////////////////////////
   //- Wrap (l-wp)
   $useWarp: (
     range: 1024,
     both: 15,
     customName: false
   );
   $useWarpSize: 1680, 1440, 1366, 1140, 1024, 960, 720, 540;
   
   //- Grid (l-gd)
   
   $useGridCount: 2, 3, 4;
   
   // Components Module ////////////////////////////
   // Banner (c-bn)
   
   $bnWidth: 1920;
   
   $bnHeight: 300;
   
   // Utillity Module //////////////////////////////
   // Max Width
   $useMaxWidthSize: null;

   // Fonts (u-ff, u-fs, u-fw, u-ta, u-ls, u-lh)
   $useFontBreakpoints: (
     base: false, 
     sm: true, 
     md: true, 
     lg: true, 
     xl: true
   );
   
   // Font Size (u-fs)
   $useFontSizeValue: 12, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60;
   
   // Letter Spacing (u-ls)
   $useLetterSpacingValue: (
     '-1\\.5': -1.5, 
     '-1': -1, 
     '1': 1,
     '1\\.5': 1.5, 
     '2': 2
   );
   
   // Line Height (u-lh)
   
   $useLineHeightValue: (
     0: 0, 
     1: lh(16, 16)
   );
   
   // Display (u-display)
   
   $useDisplayBreakpoints: (
     sm: true, 
     md: true, 
     lg: true, 
     xl: true
   );
   
   // Flex Layout (u-fl, u-jc, u-ai, u-ac, u-as)
   $useFlexBreakpoints: (
     sm: true, 
     md: true, 
     lg: true, 
     xl: true
   );
   
   // Margin (u-m)
   $marginUnit: vw;
   
   $useMarginBreakpoints: (
     sm: true, 
     md: true, 
     lg: true, 
     xl: true
   );
   
   $useMarginValue: 50, 40, 30, 20, 10, auto, clear;
   
   // Padding (u-p)
   $paddingUnit: vw;
   
   $usePaddingBreakpoints: (
     sm: true, 
     md: true, 
     lg: true, 
     xl: true
   );
   
   $usePaddingValue: 50, 40, 30, 20, 10, auto, clear;
   
   // CSS Style ////////////////////////////////////
   //- z-index
   $useZIndex: (
     header: 99,
     gotop: 1,
   );
   
   //- transition
   $useTransition:(
     'time': .5, 
     'target': all, 
     'delay': 0, 
    'function': linear
   ) !default;
   ```

4. 再建立 `style.scss` 檔，管控使用的 Module

5. 引入剛剛設定好的`config.scss`  以及  `CssHelpers.scss` : `@import '{ path }/css-helpers/CssHelpers.scss'`
   
   ```
   // Module Config ////////////////////////////////
   @import 'config.scss' // 剛剛的config
   
   @import '{ path }/css-helpers/CssHelpers'
   ```

6. 設定 css-helpers `style.sass` 的值

   **以下為 SASS 的範列，SCSS 需自行轉換**
   
   ```
   // Plugin Style /////////////////////////////////
   // ... Edit Plugin Style
   
   // Module Components ////////////////////////////
   +c-banner()
   +c-button()
   +c-card()
   +c-input()
   +c-textarea()
   +c-from()
   +c-lightbox()
   +c-table() // 不實用，可刪
   
   // Module Layout ////////////////////////////////
   +l-reset()
   
   +l-base()
   +l-typography()
   +l-main()
   +l-wrap()
   +l-grid()
   +bootstrap-grid() // 仿 bootstrap grid v3，可刪
   
   .l-edit
       +l-edit()
       
   // Page Style ///////////////////////////////////
   // ... Edit Page Style
   
   // Module Utility ///////////////////////////////
   +u-image()
   +u-javascript() // 可刪
   +u-style()
   +u-scroll()
   +u-ff()
   +u-fs()
   +u-ta()
   +u-fc()
   +u-fw()
   +u-bgc()
   +u-ls()
   +u-lh()
   +u-display()
   +u-flex()
   +u-margin()
   +u-padding()
   +u-other()
   ```



---


## 說明

### Config

#### Default

- **$useBreakpoints :**  設定斷點尺寸
- **$useWebBase :** 設定 reset 時初始 `font-size`, `color` ...
- **$fontDefault :** 設定網頁預設字型
- **$useFont :** 擴充網頁中使用的其他字型
- **$useColor :** 設定顏色

#### Layout
- **Wrap `l-wp` :**

  **$useWarp :** `l-wp` 設定預設值

  **$useWarpSize :** 擴充 `l-wp` 其他尺寸 (值為`null`則關閉不會產出)

- **Grid `l-gd` :**

  **$useGridCount :** 擴充 `l-gd` 其他格數

#### Components
- **Banner `c-bn` :**

  **$bnWidth :** 預設 banner 寬度
  
  **$bnHeight :** 預設 banner 高度

#### Utillity
- **Fonts `u-ff` `u-fs` `u-fw` `u-ta` `u-ls` `u-lh` :**

  **$useFontBreakpoints :** 是否啟用斷點開關

  **$useFontSizeValue :** 設定使用的字級大小
  
  **$useLetterSpacingValue :** 設定使用的字距
  
  **$useLineHeightValue :** 設定使用的行高
  
- **Display `u-d` :**
  
  **$useDisplayBreakpoints :** 是否啟用斷點開關
  
- **Flex Layout `u-fl` `u-jc` `u-ai` `u-ac` `u-as` :**

  **$useFlexBreakpoints :** 是否啟用斷點開關
  
- **Margin `u-m` :**
  
  **$marginUnit :** 設定外距單位
  
  **$useMarginBreakpoints :** 是否啟用斷點開關
  
  **$marginDetail :** 是否開啟詳細模式
  
  **$useMarginValue :** 設定使用外距數值
  
- **Padding `u-p` :**

  **$paddingUnit :** 設定內距單位
  
  **$usePaddingBreakpoints :** 是否啟用斷點開關
  
  **$paddingDetail :** 是否開啟詳細模式
  
  **$usePaddingValue :** 設定使用內距數值

#### CSS Style

- **Z-index :**
  **$useZIndex :**  設定使用數值

---


### Components ( c- )

#### Banner ( c-bn )

#### Button ( c-btn )

#### Card ( c-crd )

#### From ( c-fm )

#### Lightbox ( c-lbx )

---

### Helpers

#### Breakpoints
- `+mq-max($val)` : breakpoint down
- `+mq-min($val)` : breakpoint up
- `+mq-range($max, $min)` : breakpoint range
- `+mq-max-h($val)` : breakpoint height down
- `+mq-min-h($val)` : breakpoint height up
- `+mq-range-h($max, $min)` : breakpoint height range

#### Compound Css
- **Reset :**
  `+el-reset($element)` : 重置元素 element : `font` `ul` `li`
  
  > `+el-reset()` : margin: 0px | padding: 0px  // 固定保留
  > 
  > `+el-reset(font)` : font-size: 100% | font-weight: inherit 
  > 
  > `+el-reset(ul)` `+el-reset(li)` : list-style: none

- **Width / Height :**

  `+full()` : 填滿 

  > width: 100% | height: 100%


  `+size($widthValue, $heightValue)` : 設定寬高，需 key 單位
  
  > `+size(50px)` : width: 50px | height: 50px
  > 
  > `+size(100px, 50px)` : width: 100px | height: 50px

- **Position :**

  `+abs-center($z-index)` : Position Absolute Center
  
  `+abs-full($z-index)` : Position Absolute Full
  
- **z-index :**

  `+z($useZIndex.value)` : 設定層級，搭配 $useZIndex 來擴充管理使用的 z-index

  > **config :**
  > 
  > $useZIndex: ( header: 99, gotop: 1 );
  >
  > **SASS :**
  > 
  > `+z(header)` : z-index: 99

- **Flex Layout :**
  
  *外容器 :* 
  
  `+fx($dis, $fd, $fw, $ai, $jc)` : 初始值 display: flex
  
  - **$dis :** `cc` `lc` `rc` `ccc`
  
    > `+fx(cc)` : 水平垂直置中，row
    > 
    > `+fx(lc)` : 靠左，垂直置中
    > 
    > `+fx(rc)` : 靠右，垂直置中
    > 
    > `+fx(ccc)` : 水平垂直置中，column
  
  - **$fd :** `row` `row-r` `col` `col-r`，*flex-direction*
  
    > `+fx($fd: row)` : row
    > 
    > `+fx($fd: row-r)` : row-reverse
    > 
    > `+fx($fd: col)` : column
    > 
    > `+fx($fd: col-r)` : column-reverse
    > 
    > `+fx($fd: $val)` : $val : `row` `row-reverse` `column` `column-reverse`
  
  - **$fw :** `wp` `wp-r` `n-wp` ，*flex-wrap*
  
    > `+fx($fw: wp)` : wrap
    > 
    > `+fx($fw: wp-r)` : wrap-reverse
    > 
    > `+fx($fw: n-wp)` : nowrap
    > 
    > `+fx($fw: $val)` : $val : `wrap` `wrap-reverse` `nowrap`
  
  - **$ai :** `start` `end` `c` `bl` `str`，*align-items*
  
    > `+fx($ai: start)` : flex-start
    > 
    > `+fx($ai: end)` : flex-end
    > 
    > `+fx($ai: c)` : center
    > 
    > `+fx($ai: bl)` : baseline
    > 
    > `+fx($ai: str)` : stretch
    > 
    > `+fx($ai: $val)` : $val : `flex-start` `flex-end` `center` `baseline` `stretch`
  
  - **$jc :** `start` `end` `c` `sa` `sb`，*justify-content*

    > `+fx($jc: start)` : flex-start
    > 
    > `+fx($jc: end)` : flex-end
    > 
    > `+fx($jc: c)` : center
    > 
    > `+fx($jc: sa)` : space-around
    > 
    > `+fx($jc: sb)` : space-between
    > 
    > `+fx($jc: $val)` : $val : `flex-start` `flex-end` `center` `space-between` ...

  `+fx-c($dis, $fd, $fw, $ai, $jc)` : 水平垂直置中, 設定值同 `+fx()`
  
  `+fx-cc()` : 水平垂直置中 `row`，無其他設定值
  
  `+fx-lc()` : 靠左，垂直置中，無其他設定值
  
  `+fx-rc()` : 靠右，垂直置中，無其他設定值
  
  `+fx-ccc()` : 水平垂直置中 `column`，無其他設定值
  
  *內元件 :* 
  
  `+fx-i($b, $s, $g, $as, $o)` : `flex` `align-self` `order`
  
  - **$b :** `auto` `1%` `1px` `1em` ... , `flex-basis`
  - **$s :** `1` ... , `flex-shrink`
  - **$g :** `1` ... , `flex-grow`
  - **$as :** `auto` `stretch` `center` ... , `align-self`
  - **$o :** `0` ... , `order`

  *其他 :*
  
  `+fx-gd($item, $col, $row, $init)` : flex 網格佈局應用

  - **$item :** 設置網格數量
  - **$col :** 設置網格佈局 "列" 間隙大小，需 key 單位 
  - **$row :** 設置網格佈局 "行" 間隙大小，需 key 單位 ( 預設值為 $col )
  - **$init :** 是否啟用 $init : init
 
    > 第一次設置需啟用 $init: true
    > 
    > 後繼的設定皆為調整網格
    ```
    SASS
    
    .grid
        +fx-gd(5, 15px, $init: true)
        +mq-max()  
            +fx-gd(3, 10px)
            
    CSS
    
    .grid {
        display: flex;
        flex-wrap: wrap;
        gap: 15px 15px;
    }
    .grid > * { width: calc(100%/5 - 30px) }
    
    @media all and (max-width) {
        .grid { gap: 10px 10px; }
        .grid > * { width: calc(100%/3 - 20px) }
    }
    ``` 
  
- **Line Height :** 

  `+lh($height, $font-size)` : 計算行高
  
  - **$height :** `24` ...
  - **$font-size :** `16` ... ( 預設值為 $useWebBase.bodyFontSize )

  > Code View :*

  ```
  SASS
  
  .text
      +lh(24)
      
  .text-2
      +lh(24, 16)
  --------------------------------
  CSS
  
  .text { line-height: 1.5 }
  
  .text-2 { line-height: 1.5 }
  ```
 
- **Text :**

  `+t-lg($L, $R, $path)` : 文字漸層
  
  > `+t-lg(#f00, #00f, 45deg)`
  
  `+t-o($row)` : 文字溢出，預設為一行
  
  > `+t-o()` : 大於一行後以 ' ... '表示
  > 
  > `+t-o(3)` : 大於第三行後以 ' ... '表示

- **Border :**

  `+b-lg($L, $R, $path)` : 線漸層
  
  - **$L :** `#f00` `red` `rgba(255, 0, 0, 1)`
  - **$R :** `#f00` `red` `rgba(255, 0, 0, 1)`
  - **$path :** `top` `bottom` `left` `right`
  
  `+b-arrow($w, $h, $path, $cr)` : 用線 layout 出箭頭，常用於`::before` `::after`
  
  - **$w :** `25px` ...
  - **$h :** `25px` ...
  - **$path :** `top` `bottom` `left` `right`
  - **$cr :** `#f00` `red` `rgba(255, 0, 0, 1)`

- **Transition :**
  `+trs($time, $tag, $delay, $fn)` : 過渡設定，預設值 `$useTransition`
  - **$time :** `.5` ，*transition-duration*
  - **$tag :** `all` ，*transition-property*
  - **$delay :** `0` ，*transition-delay*
  - **$fn :** `linear` ，*transition-timing-function*

- **Spacing :**

  *padding*
  `+p($val, $direction)`
  
  - **$val :** `10px` `10em` ... ，間距數值 ( 需key單位 ) 
  - **$direction :** `t` `r` `b` `l` `x` `y` ，方向
  - 
    > **t :** `top`
    > 
    > **r :** `right`
    > 
    > **b :** `bottom`
    > 
    > **l :** `left`
    > 
    > **x :** `left` `right` 
    > 
    > **y :** `top` `bottom`
  
  *margin*
  `+m($val, $direction)`
  
  - **$val :** `10px` `10em` ... ，間距數值 ( 需key單位 ) 
  - **$direction :** `t` `r` `b` `l` `x` `y` ，方向
 
    > **t :** `top`
    > 
    > **r :** `right`
    > 
    > **b :** `bottom`
    > 
    > **l :** `left`
    > 
    > **x :** `left` `right` 
    > 
    > **y :** `top` `bottom`

  `+mx-auto()` : 左右自動對齊
  
- **Scrollbar :**

  `+scrollbar($bar, $bg, $w, $radius)` : 滾動條樣式
    
  `+scrollbar-x($bar, $bg, $w, $radius)` : 滾動條樣式，多了 `overflow-x: hidden`
  - **$bar :** `#f00`，bar color 
  - **$bg :** `#00f`，background color
  - **$w :** `5`，bar width
  - **$radius :** `5`，bar radius
  
- **Font :**

  *Font Family*
  
  `+ff($useFont.value)` : 設定使用的字型，可在 `$useFont` 擴充

  > **config :**
  > 
  > $useFont: ( dfk:'DFKai-sb' );
  >
  > **SASS :**
  > 
  > +ff(dfk)

  
  *Font Size*
  
  `+fs($base, $ary, $fun, $unit)` : 自訂各斷字級大小

  - **$base :** `16` ，預設字級大小 `16`
  - **$ary :** `('md', 24)` ， 預設為 `null` ， 設定格式 `(breakpoints : font-size, ...)`
  - **$fun :** `min` `max` ， 選擇 @media 方式，預設 `min`
  - **$unit :** `px` `rem` `em` `vw` 設定字級單位，預設 `px`
  
  > **SASS**
  >
  > +fs(16, (xs: 18, md: 24))
  
  *Font Weight*
  
  `+fw($val)` : 設定文字粗體
 
  - **$val :** `lighter` `bolder` ... ，也可直接輸入`font-weight`數值
  
  
  `+f-lighter` : font-weight: lighter
  
  `+f-bolder` : font-weight: bolder
  
  `+f-thin`	: font-weight: 100
  
  `+f-extralight` : font-weight: 200
  
  `+f-light` : font-weight: 300
  
  `+f-regular` : font-weight: 400
  
  `+f-medium` : font-weight: 500
  
  `+f-semibold`	: font-weight: 600
  
  `+f-bold` : font-weight: 700
  
  `+f-extrabold` : font-weight: 800
  
  `+f-heavy` : font-weight: 900
  
- **Background :**
  
  *Mask*
  
  `+mask-init($position, $size, $repeat)` : CSS mask 初始設定
  
  - **$position :** 預設`center`，*mask-position*
  - **$size :** 預設`contain`，*mask-size*
  - **$repeat :** 預設`no-repeat`，*mask-repeat*
  
  `+mask-img($url)` : 設定 mask 圖片

  - **$url :** `圖片路徑 ...`，*mask-image*
  
  `+mask($url, $position, $size, $repeat)` : CSS mask 設定
  
  
  *Background*
  
  `+bg-lg($L, $R, $path)` : 漸層背景
  
  - **$L :** `#f00` `red` `rgba(255, 0, 0, 1)`
  - **$R :** `#f00` `red` `rgba(255, 0, 0, 1)`
  - **$path :** `top` `bottom` `left` `right`
  
  `+bg-init($position, $size, $repeat)` : background 初始設定
  
  - **$position :** 預設`center`，*background-position*
  - **$size :** 預設`null`，*background-size*
  - **$repeat :** 預設`no-repeat`，*background-repeat*
  
  `+bg-img($url)` : 設定 background 圖片
  
  - **$url :** `圖片路徑 ...`，*background-image*
  
  `+bg($url, $position, $size, $repeat)` : CSS background 設定
  
  `+bg-cc()` : 填滿置中對齊
  
  >　`background-position: center`
  >　
  >　`background-size: cover`


  
  `+pa-h($h, $w, $patch)` ： 設定彈性高 （% )
  
  - **$h :** 預設 `9` ，設定高的數值
  - **$w :** 預設 `16` ，設定當前 element 的寬
  - **$path :** 預設 `null`，補高的差值，單位為 px

  ```
  SASS
  
  .test::before
    +pa-h(9, 16, 10)
    
  CSS
  
  .test::before {
    padding-bottom: 56.25%;
    padding-top: 10px;
  }
  ```
  
  `+aspect($w, $h)` : `aspect-ratio`
  
  - **$w :** 預設 `16`
  - **$h :** 預設 `9`
  
  `+obj($fit, $position)` : 設定圖片對齊方式及是否填滿
  
  - **$fit :** `t` `b` `l` `r` `c`
  
    > **t :** `top`
    > 
    > **b :** `bottom`
    > 
    > **l :** `left`
    >
    > **r :** `right`
    >
    > **c :** `center`

  - **$position :** `none` `contain` `cover` `fill` `scale-down`
  
- **Other :**

  `+el-display($switch)` : 顯示 / 隱藏 element
  
  - **$switch :** `show` `hide` `1` `0`
  
  `+el-hide()` : 隱藏 element
  
  `+el-show()` : 顯示 element
  

  `+gd($item, $col, $row, $d)` : layout 網格 // 可改用 +fx-gd 

  `+test($tip, $tstCr, $tstBg)` : 測試 element 用
  
#### Comput

- **Unit :**

  `rem($val, $fz)` : 單位轉換 px to rem
  
  > Code View
  
  ```
  SASS
  
  .test
    width: rem(500)
    height: rem(200)
    font-size: rem(18)
    ...
  ```
  
  `em($val, $fz)` : 單位轉換 px to em
  
  > Code View
  
  ```
  SASS
  
  .test
    width: em(500)
    height: em(200)
    font-size: em(18)
    ...
  ```
  
  `vw($val, $win)` : 轉換 vw
  
  > Code View
  
  ```
  SASS
  
  .test
    width: vw(500)
    height: vw(200)
    font-size: vw(18)
    ...
  ```
  
  `vh($val, $win)` : 轉換 vh
  
  > Code View
  
  ```
  SASS
  
  .test
    width: vh(500)
    height: vh(200)
    font-size: vh(18)
    ...
  ```
  
  `pa($val, $win)` : 轉換 % (中文音譯"趴")
  
  > Code View
  
  ```
  SASS
  
  .test
    width: pa(500)
    height: pa(200)
    font-size: pa(18)
    ...
  ```

 `toCalc($content)`: 簡化 `calc(#{@function})`
  > Code View
  ```
  // 使用 '' 單引號來連接 @function
  
  .test
    width: toCalc(pa(50, 100)'+ 10px')
  .test2
    width: toCalc(pa(50, 100)'+ 10px +'vw(10))
    
  .test3
    width: toCalc('10px +'pa(50, 100))
  ```

- **Font :**

  `font($fontVal, $default)`
  
  > Code View
  
  ```
  font-family: font($font-name)
  ```

  `lh($lh, $px)` : 計算文字行高
  
  > Code View
  
  ```
  SASS
  
  .test
    line-height: lh()
    
  .test2
    line-height: lh(32)
    
  .test3
    line-height: lh(32, 18)
  ```
  
- **Color :**
 
  `cr($color-name)`
  
  > Code View
  
  ```
  SASS
  
  .test
    color: cr($color-name)
    background: cr($color-name)
  ```

#### Restore

  - `+no-reset()` : 復原已被重置的排版樣式

---

### Layout ( l- )

#### Reset

#### Default

#### Typography

#### Wrap

#### Grid

---

### Utility ( u- )

#### Background Color

#### Display

#### Flex layout

#### Fonts

#### Typography

#### Padding

#### Margin

#### Other

---

### Variable

#### Reset

  - **normal :** `$fontReset` `$fontRe` `$fRe`
 
    > Code View
    
    ```
    font-weight: $fRe
    ```
  
  - **initial :** `$cssReset` `$cssRe` `$csRe`
 
    > Code View
    
    ```
    color: $csRe
    ```
  
  - **inherit :** `$cssDna` `$dna`

    > Code View
    
    ```
    color: $dna
    ```
  
  - **color :** `$colorReset` `$colorRe` `$cRe`
  
    > Code View
    
    ```
    color: $cRe
    ```