# ECMAScript 提案

## 五个 Stage 阶段

- stage-0：**设想**，只能由TC39成员或TC39贡献者提出

- stage-1:：**提案**，比较正式的提议，只能由TC39成员发起，这个提案要解决的问题必须有正式的书面描述。

- stage-2：**规范草案**，有了初始规范，必须对功能语法和语义进行正式描述，包括一些实验性的实现。

- stage-3：**候选**，该提议基本已经实现，需要等待实验验证，用户反馈及验收测试通过。

- stage-4：**已完成**，必须通过 Test262 验收测试，下一步就纳入ECMA标准。

## 20210729 最新提案

> 参考 阮一峰ES6：https://es6.ruanyifeng.com/#docs/proposals

### do 表达式

  作用域块、返回最后一个表达式值

  ```ts
  const x = do {
    const t = f()
    t * t + 1
  }
  // x === t * t + 1
  ```

### throw 表达式

  支持表达式的方式

  ```ts
  // 表达式
  const t = throw new Error()
  const tt = () => {
    // 行首，命令
    throw new Error()
  }
  ```

### 函数的部分执行

  参数占坑

  ```ts
  const add2 = add(1,?,2,...)
  add2(111,222,333)// === add(1,111,2,222,333)
  ```

### 管道运算符

  ```ts
  const double = a => a * 2
  const ans12 = 6 |> double
  const ans48 = 6
    |> double
    |> double
    |> double
  ```

### Math.signbit()

  判断是否为负数

  ```ts
  [1,0,-0,-1].map(n => Math.signbit(n)) // [false, false, false, true]
  ```

### 双冒号运算符

  函数绑定，取代 `apply` / `call` / `bind`

  ```ts
  foo::bar;
  // 等同于
  bar.bind(foo);

  foo::bar(...arguments);
  // 等同于
  bar.apply(foo, arguments);
  ```
### Realm API

  沙盒，只允许运行ECMAScript，不允许运行宿主环境api

  ```ts
  const globalOne = window
  const globalTwo = new Realm().global
  ```

### #!命令

  Unix 的命令行脚本都支持#!命令，又称为 Shebang 或 Hashbang。这个命令放在脚本的第一行，用来指定脚本的执行器。

  `.js` 文件的第一行 `#!/usr/bin/env node`，对于 JavaScript 引擎来说，会把 `#!` 理解成注释，忽略掉这一行。

  ```bash
  # 以前执行脚本的方式
  $ node hello.js

  # hashbang 的方式
  $ ./hello.js
  ```

### import.meta

  当前运行脚本的元信息，至少包含2个属性

  ```ts
  import.meta.url // 模块路径
  import.meta.scriptElement // 加载当前模块的 <script> 元素
  ```

### JSON 模块

  ES Module 支持加载 JSON

  ```ts
  // config.json => { "name": "N" }
  // 静态导入
  import configData from './config.json' assert { type: "json" }
  configData.name === 'N'
  // 动态
  import('./config.json', { assert: { type: 'json' } })
  // 导出
  export { config } from './config.json' assert { type: 'json' };
  ```
