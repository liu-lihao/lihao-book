# day02

## web性能优化技术

目的：减少客户端网络延迟和优化页面渲染性能来提升web性能

- DNS查询优化
- 客户端缓存
- 优化TCP连接
- 避免重定向
- 网络边缘的缓存
- 条件缓存
- 压缩和代码极简化
- 图片优化

## 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

> `key` 是给每一个 `vnode` 的唯一 `id` ,可以 **依靠key**, 更 **准确** , 更 **快** 的拿到 `oldVnode` 中对应的 `vnode` 节点。

在被循环节点/组件非常简单的情况下，不传 `key` 或传入 `index` 都会导致diff时作为 `sameVnode`，粗暴的进行节点复用，会增加额外的diff开销，也会丢失过渡效果。

但是在 **列表稳定** 的情况下，不使用 `key` 确实会更快一点。但是对于 **频繁更新** 使用 `key` ,减少diff开销，性能会更好一点。

结论：`key` 的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度。

## `['1', '2', '3'].map(parseInt)` what & why ?

> ```js
> parseInt(string[, radix]);
> ```
> `radix`：进制数，若为 `0` 、`undefined` 、 未指定 ，则JavaScript根据字符情况指定。
>
> 情况：1、`0x` 、 `0X`开头则十六进制；
>
> ​             2、`0` 开头则可能是八进制或十进制；
>
> ​             3、其他任意开头，则是十进制。
>
> `返回值`：将第一个参数按照第二个参数规定的进制数解析成十进制。（如果 `string` 存在数字大于等于 `radix` （基数）的情况则返回 `NaN`，或无法解析的情况也返回 `NaN` ）

```js
// 因为
parseInt('1', 0); // 1
parseInt('2', 1); // NaN
parseInt('3', 2); // NaN

// 所以 最终返回
[1, NaN, NaN]
```

结论：由于 `index` 作为 `parseInt` 的第二个参数，按照 `parseInt` 的规则，返回结果一次是：`[1, NaN, NaN]`。

## 什么是防抖和节流？有什么区别？如何实现？

### 防抖

触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。

```js
function debounce(fn) {
    let timeout = null;
    return function () { // 媒介函数
        clearTimeout(timeout);
        timeout = setTimeout(() => {
        	fn.apply(this, arguments); // 注意将媒介函数接收的作用域还给 fn
        }, 500);
    };
}
```

### 节流

高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

```js
function throttle(fn) {
    let canRun = true;
    return function () { // 媒介函数
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.apply(this, arguments); // 注意将媒介函数接收的作用域还给 fn
            canRun = true;
        }, 500);
    };
}
```

结论：

* 防抖和节流的封装关键都是通过闭包

* 防抖：清除并重设定时器。
* 节流：通过flag阻止频繁执行，执行后放开flag。

## 介绍下 `Set` 、`Map` 、 `WeakSet` 和 `WeakMap` 的区别？

### `Set`

* 成员不能重复
* 只有健值，没有健名，有点类似数组。
* 可以遍历，方法有 `add` 、  `delete` 、 `has`

### `weakSet`

* 成员都是对象
* 成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏
* 不能遍历，方法有`add` 、  `delete` 、 `has`

### `Map`

* 本质上是健值对的集合，类似集合
* 可以遍历，方法很多，可以跟各种数据格式转换

### `weakMap`

* 只受对象作为健名（`null`除外），不接受其他类型的值作为健名
* 健名所指向的对象，不计入垃圾回收机制
* 不能遍历，方法同 `get` 、 `set` 、 `has` 、 `delete`

## 别用深度优先思想和广度优先思想实现一个拷贝函数

### 工具函数

```js
// 工具函数
let _toString = Object.prototype.toString
let map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
let getType = (item) => {
  return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
  return map[type] && map[type] === getType(item)
}
```

### 深度优先遍历

```js
let DFSdeepClone = (obj, visitedArr = []) => {
  let _obj = {}
  if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
    let index = visitedArr.indexOf(obj)
    _obj = isTypeOf(obj, 'array') ? [] : {}
    if (~index) { // 判断环状数据
      _obj = visitedArr[index]
    } else {
      visitedArr.push(obj)
      for (let item in obj) {
        _obj[item] = DFSdeepClone(obj[item], visitedArr)
      }
    }
  } else if (isTypeOf(obj, 'function')) {
    _obj = eval('(' + obj.toString() + ')');
  } else {
    _obj = obj
  }
  return _obj
}
```

### 广度优先遍历

```js
let BFSdeepClone = (obj) => {
    let origin = [obj],
      copyObj = {},
      copy = [copyObj]
      // 去除环状数据
    let visitedQueue = [],
      visitedCopyQueue = []
    while (origin.length > 0) {
      let items = origin.shift(),
        _obj = copy.shift()
      visitedQueue.push(items)
      if (isTypeOf(items, 'object') || isTypeOf(items, 'array')) {
        for (let item in items) {
          let val = items[item]
          if (isTypeOf(val, 'object')) {
            let index = visitedQueue.indexOf(val)
            if (!~index) {
              _obj[item] = {}
                //下次while循环使用给空对象提供数据
              origin.push(val)
                // 推入引用对象
              copy.push(_obj[item])
            } else {
              _obj[item] = visitedCopyQueue[index]
              visitedQueue.push(_obj)
            }
          } else if (isTypeOf(val, 'array')) {
            // 数组类型在这里创建了一个空数组
            _obj[item] = []
            origin.push(val)
            copy.push(_obj[item])
          } else if (isTypeOf(val, 'function')) {
            _obj[item] = eval('(' + val.toString() + ')');
          } else {
            _obj[item] = val
          }
        }
        // 将已经处理过的对象数据推入数组 给环状数据使用
        visitedCopyQueue.push(_obj)
      } else if (isTypeOf(items, 'function')) {
        copyObj = eval('(' + items.toString() + ')');
      } else {
        copyObj = obj
      }
    }
  return copyObj
}
```

## ES5/ES6 的继承除了写法以外还有什么区别？

1. `class` 声明会提升，但不会初始化赋值。`Foo` 进入暂时性死区，类似于 `let`、`const` 声明变量。

```js
const bar = new Bar(); // it's ok
function Bar() {
  this.bar = 42;
}

const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {
  constructor() {
    this.foo = 42;
  }
}
```

2. `class` 声明内部会启用严格模式。

```js
// 引用一个未声明的变量
function Bar() {
  baz = 42; // it's ok
}
const bar = new Bar();

class Foo {
  constructor() {
    fol = 42; // ReferenceError: fol is not defined
  }
}
const foo = new Foo();
```

3. `class` 的所有方法（包括静态方法和实例方法）都是不可枚举的。

```js
// 引用一个未声明的变量
function Bar() {
  this.bar = 42;
}
Bar.answer = function() {
  return 42;
};
Bar.prototype.print = function() {
  console.log(this.bar);
};
const barKeys = Object.keys(Bar); // ['answer']
const barProtoKeys = Object.keys(Bar.prototype); // ['print']

class Foo {
  constructor() {
    this.foo = 42;
  }
  static answer() {
    return 42;
  }
  print() {
    console.log(this.foo);
  }
}
const fooKeys = Object.keys(Foo); // []
const fooProtoKeys = Object.keys(Foo.prototype); // []
```

4. `class` 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有`[[construct]]`，不能使用 `new` 来调用。

```js
function Bar() {
  this.bar = 42;
}
Bar.prototype.print = function() {
  console.log(this.bar);
};

const bar = new Bar();
const barPrint = new bar.print(); // it's ok

class Foo {
  constructor() {
    this.foo = 42;
  }
  print() {
    console.log(this.foo);
  }
}
const foo = new Foo();
const fooPrint = new foo.print(); // TypeError: foo.print is not a constructor
```

5. 必须使用 `new` 调用 `class`。

```js
function Bar() {
  this.bar = 42;
}
const bar = Bar(); // it's ok

class Foo {
  constructor() {
    this.foo = 42;
  }
}
const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'
```

6. `class` 内部无法重写类名。

```js
function Bar() {
  Bar = 'Baz'; // it's ok
  this.bar = 42;
}
const bar = new Bar();
// Bar: 'Baz'
// bar: Bar {bar: 42}  

class Foo {
  constructor() {
    this.foo = 42;
    Foo = 'Fol'; // TypeError: Assignment to constant variable
  }
}
const foo = new Foo();
Foo = 'Fol'; // it's ok
```

## `setTimeout` 、 `Promise` 、 `async` / `await` 的区别

其中 `settimeout` 的回调函数放到宏任务队列里，等到执行栈清空以后执行；

`promise.then` 里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；

`async` 函数表示函数里面可能会有异步方法，`await` 后面跟一个表达式，`async` 方法执行时，遇到 `await` 会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。

ps: 被标记为 `async` 的函数会返回 `Promise` 。

## Async/Await 如何通过同步的方式实现异步

`async/await` 是参照 `Generator` 封装的一套异步处理方案，可以理解为 `Generator` 的语法糖，

所以了解 `async/await` 就不得不讲一讲 `Generator`,

而 `Generator` 又依赖于迭代器`Iterator`，

所以就得先讲一讲 `Iterator`,

而 `Iterator` 的思想呢又来源于单向链表，

终于找到源头了：**单向链表**

### 单向链表

单向链表通常有的方法：

- `append(element)`：追加节点

- `insert(element,index)`：在索引位置插入节点

- `remove(element)`：删除第一个匹配到的节点

- `removeAt(index)`：删除指定索引节点

- `removeAll(element)`：删除所有匹配的节点

- `get(index)`：获取指定索引的节点信息

- `set(element,index)`：修改指定索引的节点值

- `indexOf(element)`：获取某节点的索引位置

- `clear()`：清除所有节点

- `length()`：返回节点长度

- `printf()`：打印节点信息

### `Iterator` 

一个对象要变成可迭代的，必须实现 `@@iterator` 方法，即对象（或它原型链上的某个对象）必须有一个名字是 `Symbol.iterator` 的属性（原生具有该属性的有：字符串、数组、类数组的对象、Set 和 Map）：

| 属性              | 值                                               |
| ----------------- | ------------------------------------------------ |
| [Symbol.iterator] | 返回一个对象的无参函数，被返回对象符合迭代器协议 |

- 创建一个**指针对象**，指向当前数据结构的起始位置
- 第一次调用指针对象的 `next` 方法，将指针指向数据结构的第一个成员
- 第二次调用指针对象的 `next` 方法，将指针指向数据结构的第二个成员
- 不断的调用指针对象的 `next` 方法，直到它指向数据结构的结束位置

`next()` 的方法，该方法**必须返回一个对象**,对象有两个必要的属性：

- `done`（`boolean`）
- `true`：迭代器已经超过了可迭代次数。这种情况下,`value` 的值可以被省略
  - 如果迭代器可以产生序列中的下一个值，则为 `false`。这等效于没有指定 `done` 这个属性
  
- `value` 迭代器返回的任何 JavaScript 值。done 为 true 时可省略

### `Generator`

`Generator`：生成器对象是生成器函数（GeneratorFunction）返回的，它符合**可迭代协议**和**迭代器协议**，既是迭代器也是可迭代对象，可以调用 `next` 方法，但它不是函数，更不是构造函数。

生成器函数（GeneratorFunction）：`function* name([param[, param[, ... param]]]) { statements }`

用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的迭代器对象，当这个迭代器的 `next()` 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现 `yield` 的位置为止（让执行处于**暂停状**），`yield` 后紧跟迭代器要返回的值。或者如果用的是 `yield*`（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器**暂停执行**），调用 `next()` （再启动）方法时，如果传入了参数，那么这个参数会作为**上一条执行的 `yield` 语句的返回值**，例如：

```js
function* ohterGen() {
  console.log('ohterGen 1');
  yield 'llh';
  console.log('ohterGen 2');
  yield 'handsome'
  console.log('ohterGen 3');
}
function* gen() {
  console.log('gen 1');
  yield* ohterGen(); // 移交执行权，next的会被指向 ohterGen 内部 yield；
  
  console.log('gen 2');
  const a = yield 'hello'; 	  // 停留在这里，返回 value : 'hello'
 						   	  // 执行 next('你好'),覆盖 'hello'
  console.log('gen 3', a);	  // 可以看到 a === ‘你好’
  const b = yield a;     	  // 停留在这里，返回 value : '你好'
    				      	  // 执行 next('世界'),覆盖 a （==='你好'）
  console.log('gen 4', a, b); // 可以看到 a === ‘你好’,b === ‘世界'
  yield b;					  // 停留到这里，返回 value : '世界'
    
  console.log('gen 5', a, b);
}

const g = gen(); // 啥也不会执行

g.next();
// gen 1
// otherGen 1
// -> { value: "llh", done: false }

g.next();
// ohterGen 2
// -> {value: "handsome", done: false}

g.next();
// ohterGen 3
// gen 2
// -> {value: "hello", done: false}

g.next('你好');
// gen 3 你好
// -> {value: "你好", done: false}

g.next('世界');
// gen 4 你好 世界
// -> {value: "世界", done: false}

g.next();
// gen 5 你好 世界
// -> {value: undefined, done: true}
```

### Generator 自动异步执行器

```js
function run(gen) {
  const g = gen();
  function next(data) {
    const res = g.next(data);
    // 深度递归，只要 `Generator` 函数还没执行到最后一步，`next` 函数就调用自身
    if (res.done) return res.value;
    res.value.then(function(data) {
      next(data);
    });
  }
  next();
}

run(function*() {
  const res1 = yield axios.get('...'); // 这里会停下来，返回promise，在外部执行这个promise.then触发出发next(res),使得 res1 = res;
  console.log(res1);
  const res2 = yield axios.get('...');
  console.log(res2);
});
```

### `async` / `await`

```js
const readFile = async ()=>{
  const res1 = await axios.get('...');
  console.log(res1);
  const res2 = await axios.get('...');
  console.log(res2);
  return 'done'；
}
```

将 `async` / `await` 的写法和 *使用 Generator 自动异步执行器* 的写法对比一下，可以发现几乎一样了。

## 异步代码顺序

```js
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end'); // 注意，在 await 后，会被加入到微任务。
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

答案：

```js
// 同步
script start
async1 start
async2
promise1

// 微任务
script end
async1 end
promise2

// 宏任务
setTimeout
```

## 数组扁平、去重、排序

```js
// 已知：

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
```

答案：

```js
[...new Set(arr.flat(Infinity))].sort((a,b) => a - b)
```

ps: `Array.prototype.flat([depth = 1])`，`depth`为拍平的深度，默认为1。

## JS 异步解决方案的发展历程以及优缺点

### 回调函数

**优点：解决了同步的问题**（只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。）

**缺点：回调地狱，不能用 try catch 捕获错误，不能 return**

- 缺乏顺序性： 回调地狱导致的调试困难，和大脑的思维方式不符
- 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身，即（**控制反转**）
- 嵌套函数过多的多话，很难处理错误

### Promise

**优点：解决了回调地狱的问题**

**缺点：无法取消 Promise ，错误需要通过回调函数来捕获**

### Generator

**特点：可以控制函数的执行**，可以配合 co 函数库使用

### Async/await

**优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题**

**缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。**

## HTTP2 多路复用

在 HTTP/1 中，每次请求都会建立一次HTTP连接，也就是我们常说的3次握手4次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了 `Keep-Alive` ，解决了多次连接的问题，但是依然有两个效率上的问题：

- 第一个：**串行的文件传输**。当请求a文件时，b文件只能等待，等待a连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是1秒，那么a文件用时为3秒，b文件传输完成用时为6秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）
- 第二个：连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6，也就是服务器能承载的最高并发为50，当第51个人访问时，就需要等待前面某个请求处理完成。

HTTP/2的多路复用就是为了解决上述的两个性能问题。
在 HTTP/2 中，有两个非常重要的概念，分别是 **帧（frame）** 和 **流（stream）** 。
帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。
多路复用，就是**在一个 TCP 连接中可以存在多条流**。换句话说，也就是可以发送多个请求，对端可以**通过帧中的标识知道属于哪个请求**。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。

## A、B 机器正常连接后，B 机器突然重启，问 A 此时处于 TCP 什么状态

>服务器和客户端建立连接后，若服务器主机崩溃，有两种可能：
>
>* 服务器不重启，客户端继续工作，就会发现对方没有回应（ETIMEOUT），路由器聪明的话，则是目的不可达到（EHOSTUNREACH）。
>* 服务器重启后，客户端继续工作，然而服务器已丢失客户信息，收到客户数据后响应RST。

b和a沟通过程双方有一份数据， b重启之后这份数据没有了，就会发送rst重置。

## React 中 `setState` 什么时候是同步的，什么时候是异步的？

React 的 `setState` 本身并不是异步的，是因为其批处理机制给人一种异步的假象。

【 React 的更新机制】

生命周期函数和合成事件中：

1. 无论调用多少次 `setState` ，都不会立即执行更新。而是将要更新的 `state` 存入 `'_pendingStateQuene'` ,将要更新的组件存入 `'dirtyComponent'` ;
2. 当根组件 `didMount` 后，批处理机制更新为 `false` 。此时再取出 `'_pendingStateQuene'` 和 `'dirtyComponent'` 中的 `state` 和组件进行合并更新；

原生事件和异步代码中：

1. 原生事件不会触发 React 的批处理机制，因而调用 `setState` 会直接更新；
2. 异步代码中调用 `setState` ，由于 js 的异步处理机制，异步代码会暂存，等待同步代码执行完毕再执行，此时 React 的批处理机制已经结束，因而直接更新。

总结：
React 会表现出同步和异步的现象，但本质上是同步的，是其批处理机制造成了一种异步的假象。（其实完全可以在开发过程中，在合成事件和生命周期函数里，完全可以将其视为异步）

## React setState 笔试题，下面的代码输出什么？

```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
```

答案：

1、第一次和第二次都是在 React 自身生命周期内，触发时 `isBatchingUpdates` 为 `true` ，所以并不会直接执行更新 `state`，而是加入了 `dirtyComponents`，所以打印时获取的都是更新前的状态 `0`。

2、两次 `setState` 时，获取到 `this.state.val` 都是 `0`，所以执行时都是将 `0` 设置成 `1`，在 React 内部会被合并掉，只执行一次。设置完成后 `state.val` 值为 `1`。

3、`setTimeout`中的代码，触发时 `isBatchingUpdates` 为 `false`，所以能够直接进行更新，所以连着输出 `2`，`3`。

输出：` 0 0 2 3`

## 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？

###  npm 模块安装机制：

- 发出`npm install`命令
- 查询node_modules目录之中是否已经存在指定模块
  - 若存在，不再重新安装
  - 若不存在
    - npm 向 registry 查询模块压缩包的网址
    - 下载压缩包，存放在根目录下的`.npm`目录里
    - 解压压缩包到当前项目的`node_modules`目录

### npm 实现原理

1. **执行工程自身 `preinstall`**

   生命周期 `preinstall` 会被先执行。

2. **确定首层依赖模块**

   是指该项目写在 `package.json` 的：`dependencies`、 `devDependencies` 上的依赖。

3. **获取模块**

   递归获取依赖的依赖。

4. **模块扁平化（dedupe）**

   拍平依赖，并处理兼容问题，使用兼容版本。若两个版本互不兼容则同时保留两个版本在 `node_modules`。

5. **安装模块**

   开始安装，并按照 `preinstall` 、 `install` 、 `postinstall` 的顺序执行各模块的生命周期。

6. **执行工程自身生命周期**

   当前 npm 工程如果定义了钩子此时会被执行（按照 install、postinstall、prepublish、prepare 的顺序）。

   最后一步是生成或更新版本描述文件，npm install 过程完成。