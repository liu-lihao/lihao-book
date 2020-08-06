# Day03

## 重绘和回流（Repaint & Reflow）

###  1. 浏览器渲染机制

- 浏览器采用流式布局模型（`Flow Based Layout`）
- 浏览器会把`HTML`解析成`DOM`，把`CSS`解析成`CSSOM`，`DOM`和`CSSOM`合并就产生了渲染树（`Render Tree`）。
- 有了`RenderTree`，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
- 由于浏览器使用流式布局，对`Render Tree`的计算通常只需要遍历一次就可以完成，**但`table`及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用`table`布局的原因之一**。

### 2. 重绘

由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘，例如`outline`, `visibility`, `color`、`background-color`等，重绘的代价是高昂的，因为浏览器必须验证DOM树上其他节点元素的可见性。

### 3. 回流

回流是布局或者几何属性需要改变就称为回流。回流是影响浏览器性能的关键因素，因为其变化涉及到部分页面（或是整个页面）的布局更新。一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

**回流必定会发生重绘，重绘不一定会引发回流。**

### 4. 浏览器优化

现代浏览器大多都是通过队列机制来批量更新布局，浏览器会把修改操作放在队列中，至少一个浏览器刷新（即16.6ms）才会清空队列，但当你**获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值**。

主要包括以下属性或方法：

- `offsetTop`、`offsetLeft`、`offsetWidth`、`offsetHeight`
- `scrollTop`、`scrollLeft`、`scrollWidth`、`scrollHeight`
- `clientTop`、`clientLeft`、`clientWidth`、`clientHeight`
- `width`、`height`
- `getComputedStyle()`
- `getBoundingClientRect()`

所以，我们应该避免频繁的使用上述的属性，他们都会强制渲染刷新队列。

### 5. 减少重绘与回流

#### 5.1 CSS

- **使用 `transform` 替代 `top`**
- **使用 `visibility` 替换 `display: none`** ，因为前者只会引起重绘，后者会引发回流（改变了布局
- **避免使用`table`布局**，可能很小的一个小改动会造成整个 `table` 的重新布局。
- **尽可能在`DOM`树的最末端改变`class`**，回流是不可避免的，但可以减少其影响。尽可能在DOM树的最末端改变class，可以限制了回流的范围，使其影响尽可能少的节点。
- **避免设置多层内联样式**，CSS 选择符**从右往左**匹配查找，避免节点层级过多。
- **将动画效果应用到`position`属性为`absolute`或`fixed`的元素上**，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 `requestAnimationFrame`，详见[探讨 requestAnimationFrame](https://github.com/LuNaHaiJiao/blog/issues/30)。
- **避免使用`CSS`表达式**，可能会引发回流。
- **将频繁重绘或者回流的节点设置为图层**，图层能够阻止该节点的渲染行为影响别的节点，例如`will-change`、`video`、`iframe`等标签，浏览器会自动将该节点变为图层。
- **CSS3 硬件加速（GPU加速）**，使用css3硬件加速，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘 。但是对于动画的其它属性，比如`background-color`这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

#### 5.2 JavaScript

- **避免频繁操作样式**，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
- **避免频繁操作`DOM`**，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
- **避免频繁读取会引发回流/重绘的属性**，如果确实需要多次使用，就用一个变量缓存起来。
- **对具有复杂动画的元素使用绝对定位**，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

## 观察者模式和订阅-发布模式的区别

>  观察者模式没中间商赚差价
>  发布订阅模式 有中间商赚差价

发布-订阅只是把一部分功能抽象成一个独立的ChangeManager。

## Vuex、Flux、Redux、Redux-saga、Dva、MobX 原理及对比

> [知乎：Vuex、Flux、Redux、Redux-saga、Dva、MobX](https://zhuanlan.zhihu.com/p/53599723)

## 浏览器和 Node 的事件循环的区别

### 浏览器

**关于微任务和宏任务在浏览器的执行顺序是这样的：**

- 执行一只 task （宏任务）
- 执行完 micro-task 队列 （微任务）

如此循环往复下去

> 浏览器的 task （宏任务）执行顺序在 [html#event-loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) 里面有讲就不翻译了
> 常见的 task （宏任务） 比如： `setTimeout` 、 `setInterval` 、 `script` （整体代码）、 I/O 操作、UI 渲染等。
> 常见的 micro-task 比如: `new Promise().then` (回调)、`MutationObserver` (html5新特性) 等。

### Node

大体的task（宏任务）执行顺序是这样的：

- timers定时器：本阶段执行已经安排的 `setTimeout()` 和 `setInterval()` 的回调函数。
- pending callbacks待定回调：执行延迟到下一个循环迭代的 I/O 回调。
- idle, prepare：仅系统内部使用。
- poll 轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和 `setImmediate()` 排定的之外），其余情况 node 将在此处阻塞。
- check 检测：`setImmediate()` 回调函数在这里执行。
- close callbacks 关闭的回调函数：一些准备关闭的回调函数，如：`socket.on('close', ...)` 。
微任务和宏任务在Node的执行顺序

> Node 10以前：
> 执行完一个阶段的所有任务
> 执行完nextTick队列里面的内容
> 然后执行完微任务队列的内容

Node 11以后：和浏览器的行为统一了，都是每执行一个宏任务就执行完微任务队列。

### 例子

```js
function test () {
   console.log('start')
    setTimeout(() => {
        console.log('children2')
        Promise.resolve().then(() => {console.log('children2-1')})
    }, 0)
    setTimeout(() => {
        console.log('children3')
        Promise.resolve().then(() => {console.log('children3-1')})
    }, 0)
    Promise.resolve().then(() => {console.log('children1')})
    console.log('end') 
}

test()

// 以上代码在node11以下版本的执行结果(先执行所有的宏任务，再执行微任务) **
// start
// end
// children1
// children2
// children3
// children2-1
// children3-1

// 以上代码在node11及浏览器的执行结果(顺序执行宏任务和微任务) **
// start
// end
// children1
// children2
// children2-1
// children3
// children3-1
```

## JS模块化：CommonJS、AMD、CMD、ESModule

> 见 day01

![js模块化](D:\LLH\文档\ms\day03\js模块化.png)

## cookie 和 token 都存放在 header 中，为什么不会劫持 token？

1. 首先token不是防止XSS的，而是为了防止CSRF的；
2. CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token

## 使 `for` 循环 + `setTimeout` 的 `console.log` 能按顺序打印出 0-9

```js
// 改造下面的代码，使之输出0 - 9
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
```

解法如下：

```js
// 1 使用 let 创建局部变量
for (var i = 0; i< 10; i++){
  let j = i;
	setTimeout(() => {
		console.log(j);
  }, 1000)
}

// 2 使用 let 创建局部变量(同2)
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
  }, 1000)
}

// 3 直接作为 setTimeout 参数
for (var i = 0; i< 10; i++){
	setTimeout((j) => {
		console.log(j);
  }, 1000, i)
}

// 4 套一层函数作为其参数(同3)
for (var i = 0; i< 10; i++){
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, 1000)
  })(i)
}

// 5 在ES5 try-catch也有作用域
for (var i = 0; i< 10; i++){
  try {
    throw new Error(i);
  } catch ({ message: i }) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
}

// (误)
setTimeout(() => {
  for (var i = 0; i< 10; i++){
    console.log(i);
  }
}, 1000)
```

## Virtual DOM 真的比操作原生 DOM 快吗？

这是一个性能 vs 可维护性的取舍。

但是优秀的 Virtual DOM 和 diff，在绝大多数会比操作原生 DOM 快。

> **对 React 的 Virtual DOM 的误解**
>
> React 从来没有说过 “React 比原生操作 DOM 快”。React 的基本思维模式是每次有变动就整个重新渲染整个应用。如果没有 Virtual DOM，简单来想就是直接重置 innerHTML。很多人都没有意识到，在一个大型列表所有数据都变了的情况下，重置 innerHTML 其实是一个还算合理的操作... 真正的问题是在 “全部重新渲染” 的思维模式下，即使只有一行数据变了，它也需要重置整个 innerHTML，这时候显然就有大量的浪费。

不要天真地以为 Virtual DOM 就是快，diff 不是免费的，batching 么 MVVM 也能做，而且最终 patch 的时候还不是要用原生 API。在我看来 Virtual DOM 真正的价值从来都不是性能，而是它

1.  为函数式的 UI 编程方式打开了大门；

2. 可以渲染到 DOM 以外的 backend，比如 ReactNative。

## 下面的代码打印什么内容，为什么？(具名函数重新赋值)

```js
var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();
```

解：

```js
var b = 10;
(function b() {
   // 内部作用域，会先去查找是有已有变量b的声明，有就直接赋值20，确实有了呀。发现了具名函数 function b(){}，拿此b做赋值；
   // IIFE的函数无法进行赋值（内部机制，类似const定义的常量），所以无效。
  // （这里说的“内部机制”，想搞清楚，需要去查阅一些资料，弄明白IIFE在JS引擎的工作方式，堆栈存储IIFE的方式等）
    b = 20;
    console.log(b); // [Function b]
    console.log(window.b); // 10，不是20
})();
```

严格模式下回报错：

```js
var b = 10;
(function b() {
  'use strict'
  b = 20;
  console.log(b)
})() // "Uncaught TypeError: Assignment to constant variable."
```

## 请求时浏览器缓存 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？

- 对于大文件来说，大概率是不存储在内存中的，反之优先
- 当前系统内存使用率高的话，文件优先存储进硬盘

## 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作

如果经常用React+Redux开发，那么就应该了解Redux的设计初衷。Redux的设计参考了Flux的模式，作者希望以此来实现时间旅行，保存应用的历史状态，实现应用状态的可预测。所以整个Redux都是函数式编程的范式，要求reducer是 **纯函数** 也是自然而然的事情，**使用纯函数才能保证相同的输入得到相同的输入，保证状态的可预测** 。所以Redux有三大原则：

* 单一数据源，也就是state
* state 是只读，Redux并没有暴露出直接修改state的接口，必须通过action来触发修改
* 使用纯函数来修改state，reducer必须是纯函数

## 下面代码中 a 在什么情况下会打印 1？( `==` 的隐式转换)

```js
// 优先依次 Symbol.toPrimitive > valueOf > toString
var a = {
    i: 1,
    [Symbol.toPrimitive]() {
        return a.i++;
    },
    valueOf() {
        return a.i++;
    },
    toString() {
        return a.i++;
    },
}

if ( a == 1 && a == 2 && a == 3 ) {
  console.log(1);
}
```

## BFC

BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。

**创建 BFC** 的方式有：

1. html 根元素
2. float 浮动
3. 绝对定位
4. overflow 不为 visiable
5. display 为表格布局或者弹性布局

**BFC 主要的作用** 是：

1. 清除浮动
2. 防止同一 BFC 容器中的相邻元素间的外边距重叠问题