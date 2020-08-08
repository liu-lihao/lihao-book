# CSS 随笔

## 粘性定位：`position: sticky`

`position:sticky` 是 css 定位新增属性；

可以说是相对定位 `relative` 和固定定位 `fixed` 的结合；

它主要用在对拥有 **scrolling box** 祖先元素来的 `scroll` 事件的监听上；

简单来说，在滑动过程中，某个元素距离其父元素的距离达到`sticky`粘性定位的要求时(比如 `top: 100px` )， 这时的效果相当于 `fixed` 定位，固定到适当位置。

## 图片固定比例

```html
<!-- 该图宽高比为 2:1 -->
<div class="img-wrapper">
    <img src="xxx.webp" />
</div>
<style>
    .img-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        overflow: hidden;
    }
    .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
```