# React 进阶

## React 组件之间通信

* `props`
* `props` 传递 `this` / `ref`
* `context`
* event.js
* Redux / mobx / Storage

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

## React 原理及优化

### React Fiber

阶段一: `render` ，生成 Fiber 树，得出需要更新的节点信息( `diff` 对比生成新的 Virtual DOM )。这一步是一个渐进的过程，可以被打断。
阶段二: `commit` ，将需要更新的节点一次过批量更新，这个过程不能被打断。

通过 `requestIdleCallback` (`requestAnimationFrame` 模拟出来)，将运算切割为多个步骤，分批完成。Fiber 实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。

### 更新机制 `setState`

理想情况下 `setState` 应该是异步的，但其实一直是**同步**的。

在挂载 `mount` 流程下，是批量更新，即表现为“异步”。

### diff

开销最大的地方，React 从传统的 O(n3) 优化到 O(n) 的三条策略：

* WebUI 中 DOM 节点跨节点的操作特别少，可以忽略不计。
* 拥有相同类的组件会拥有相似的 DOM 结构。拥有不同类的组件会生成不同的 DOM 结构。
* 同一层级的子节点，可以根据唯一的 `key` 来区分。

### 性能优化方案

#### 减少 diff

尽量较少 `setState` , 减少 `render` 。
避免每次 `render` 给组件传值都是不一样的值。

#### 适当使用 `shouldComponentUpdate` 和 `PureComponent`

用来达到减少 `render` 的作用。

#### 使用 `ImmerJs` 优化

其使用 `Proxy`，在让我们在没有修改时保持同一引用；修改时，修改部分和未修改部分从新组合成新的引用。

基本概念：

* `currentState` : 被操作对象的最初状态
* `draftState` : 根据 `currentState` 生成的草稿状态，它是 `currentState` 的代理，对 `draftState` 所做的任何修改都将被记录并用于生成 nextState 。在此过程中，`currentState` 将不受影响
* `nextState` : 根据 `draftState` 生成的最终状态
* `produce` : 生产，用来生成 `nextState` 或 `producer` 的函数
* `producer` : 生产者，通过 `produce` 生成，用来生产 `nextState` ，每次执行相同的操作
* `recipe` : 生产机器，用来操作 `draftState` 的函数

```js
import produce from 'immer';

/* 
    优化 setState
*/

// 直接获取 nextState
const nextState = produce(currentState, draft => {
  draft.p.x = 1;
});
this.setState(nextState);

// 通过 producer
// 解释： produce(fn) => producer => producer(currentState) => nextState
this.setState(produce((draft) => {
    draft.arr[0].status = 'FINISHED'
}));


/* 
    优化 reducer
*/
const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'SET_FINISHED':
      draft.arr[0].status = 'FINISHED';
  }
})

```
