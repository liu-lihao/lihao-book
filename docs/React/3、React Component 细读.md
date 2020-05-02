# React Component 细读

> 这里主要针对 class 组件

## 定义 class 组件，需要继承 React.Component

> 强烈建议不要创建自己的组件基类。
> 在 React 组件中，代码重用的主要方式是组合而不是继承。

FaceBook 这种超大型项目都不考虑继承，而是将页面分成成百上千个组件，对其组合使用，才是最佳方案。

## `render()` 方法是必须的

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

* 检查 `state` 和 `props` 的变化。
* 如果 `shouldComponentUpdate()` 返回 `false` ，则不会调用 `render()`。
* 该函数建议为纯函数（不改参数，不调用浏览器API），有返回值，如下：
    1. **React 元素**: 用 `jsx` 写的，无论是普通的`<div />`还是`<Com />`
    2. **数组或 fragments**: 多个并列的 React 元素(`<React.Fragment>`节点不会被渲染，而其包裹的节点会直接渲染)
    3. **Portals**: 可以渲染子节点到不同的 DOM 子树中。
    4. **字符串或数值类型**: 文本节点。
    5. **布尔类型或 null**: 什么都不渲染，so，实现组件是否挂载的方式可以有：
        * `flag && <Com />`
        * `flag ? <Com /> : null`

## 生命周期

> [React 生命周期图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 挂载

组件实例被创建，并且挂载到DOM时。

1. `constructor()`
    * 下面说的**构造函数**就是指 `constructor()`
    * 如果组件不需要 `state` 或*方法绑定*，则可以不需要使用改构造函数。
    * 钩子函数第一个参数是：`props`
    * 构造函数里第一行应该是：`super(props)`
    * 需要用到 `state` ，请直接赋值：`this.state = { ... }`
    * 在构造函数里，不要调用 `setState()` 方法，用如上赋值方式初始化
    * 在其他地方，请使用 `setState()` 方法作为修改 `state` 的 **唯一** 方式。
    * 千万不要将 `props` 初始化到 `state`，如:

        ```jsx
        constructor(props) {
            this.state = {
                // 这是错误的，这回导致props改变，而state不更新，即视图不更新的问题。
                name: props.name
            }
        }
        ```

    * 不要放诸如 `setTimeout` 、订阅(`on/emit`)等，在构造函数里以期改变 `state`

2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`
    * 会在组件挂载后（插入 DOM 树中）立即调用
    * 应该在这里执行各种请求，或者添加各种订阅、定时器、循环等。（记得要在 `componentWillUnmount()` 清除这些副作用）

### 更新

当组件的 props 或 state 发生变化时会触发更新。

1. `static getDerivedStateFromProps()`
    * 会在调用 `render` 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 `state`，如果返回 `null` 则不更新任何内容。
    * 不管原因是什么，都会在每次渲染前触发此方法
    * 此方法适用于罕见的用例，即 `state` 的值在任何时候都取决于 `props`。
2. `shouldComponentUpdate()`
    * `shouldComponentUpdate(nextProps, nextState)`
    * 首次渲染或使用 forceUpdate() 时不会调用该方法。
    * 当 `props` 或 `state` 发生变化时，`shouldComponentUpdate()` 会在渲染执行之前被调用。返回值默认为 `true`。
    * 返回 `false` 并不会阻止子组件在 `state` 更改时重新渲染。
    * 不建议在 `shouldComponentUpdate()` 中进行深层比较或使用 `JSON.stringify()`
    * `shouldComponentUpdate()` 返回 `false`，则不会调用 `render()` 和 `componentDidUpdate()`
    * 后续版本可能返回 `false` 也会导致页面渲染。
    * 该方法 **仅做优化性能**，如需阻止渲染请减少使用 `this.setState()`，或继承 `React.PureComponent` 方式创建 class 组件。（`PureComponent` 会对 `props` 和 `state` 进行浅层比较，并减少了跳过必要更新的可能性。）

3. `render()`
4. `getSnapshotBeforeUpdate()`
    * `getSnapshotBeforeUpdate(prevProps, prevState)`
    * 在最近一次渲染输出（提交到 DOM 节点） **之前** 调用
    * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）
    * 此生命周期的任何 **返回值** 将作为参数传递给 `componentDidUpdate()`
5. `componentDidUpdate()`
    * 会在更新后会被调用。首次渲染不会执行此方法。
    * `componentDidUpdate(prevProps, prevState, snapshot)`
    * 如果组件实现了 `getSnapshotBeforeUpdate()` 生命周期（不常用），则它的返回值将作为 `componentDidUpdate()` 的第三个参数 `snapshot` 参数传递。否则此参数将为 `undefined`。
    * `shouldComponentUpdate()` 返回值为 `false`，则不会调用 `componentDidUpdate()`。

### 卸载

组件从DOM移除前。

* `componentWillUnmount()`
  * 会在组件卸载及销毁之前直接调用
  * 在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等
  * 这里不应该使用`this.setState()`，组件将要卸，这时触发`render()`毫无意义。

### 错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时。

> Error boundaries
>
> 如果 class 组件定义了生命周期方法 `static getDerivedStateFromError()` 或 `componentDidCatch()` 中的任何一个（或两者），它就成为了 Error boundaries。通过生命周期更新 `state` 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。

1. `static getDerivedStateFromError()`
    * 一般用于降级 UI
    * 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state。
    * 此方法是渲染阶段调用，因此**不允许出现错误**。如存在错误的可能，请使用 `componentDidCatch()`
2. `componentDidCatch()`
    * `componentDidCatch(error, info)`
    * `error` —— 抛出的错误。
    * `info` —— 带有 `componentStack key` 的对象，其中包含有关组件引发错误的栈信息。
    * 会在“提交”阶段被调用，因此允许执行副作用
    * 一般用于提交错误信息，或执行一些逻辑。

## 补充

### 其他API

* setState()
  * `setState(updater[, callback])`
  * 不会保证 `state` 的变更会立即生效，它批量推迟更新，即调用该方法后，`this.state.xxx`不一定去得到更新后的值。
  * 如有需要更新后的执行，请使用第二个回调函数参数，或 `componentDidUpdate()`
  * 除非 `shouldComponentUpdate()` 返回 `false`，否则 `setState()` 将始终执行重新渲染操作。
  * 如果 `state` 依赖 `props`，请在 `static getDerivedStateFromProps()` 中使用该方法。
  * 如果需要频繁的叠加`state`，比如购物车数量时，建议使用`updater`函数：

    ```jsx
    this.setState((state, props) => {
        return {
            quantity: state.quantity + props.quantity + 1
        }
    });
    ```

* forceUpdate()
  * 强制让组件重新渲染
  * 使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`，(子组件正常，不跳过)
  * 应避免使用

### class 属性

* defaultProps
  * 提供 `props` 默认值

    ```jsx
    class CustomButton extends React.Component {
    // ...
    }

    CustomButton.defaultProps = {
        color: 'blue' // 默认值
    };
    ```

* displayName
  * 字符串，多用于调试消息。通常，你不需要设置它。

### 实例属性

* props
  * 使用该组件时，对齐传入的属性，包括事件监听函数。
  * `this.props.children` 是特殊的属性，作为插槽.
  * 插槽若只有一个根节点则是 **对象类型**，若多个并列，则是个 **数组类型**。
* state
  * 永远不要直接改变 `this.state`
  * 未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 `state`
