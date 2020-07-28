# React 进阶

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

### React setState 笔试题，下面的代码输出什么？

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