# React Hooks

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

* 向下兼容，没有破坏性改动。
* 核心原理：闭包

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

* 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
* 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有自定义的 Hook）

团队规范：
* 安装  eslint-plugin-react-hooks ESLint插件

## 入门 Demo

```jsx
function userList() {
    const [pageInfo, setPageInfo] = useState({ page: 1, size: 10 });
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        UserListAPI.getList(pageInfo).then(res => {
            setList(res.data);
            setLoading(false);
        }).catch(err => {
            setList([]);
            setLoading(false);
        })
    }, [pageInfo]);
    return (
        <div>
            {/* ... */}
        </div>
    )
}
```


## useState

在函数组件使用状态。

```jsx
// 声明多个 state 变量
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');
const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
```


## useEffect

合并 componentDidMount、componentDidUpdate 和 componentWillUnmount

* 不传入第二参数，则 componentDidMount + componentDidUpdate ;
* 第二参数传入空数组 [], 则 componentDidMount ;
* 第二参数传入带有 State 的数组，则 componentDidMount + 类似 componentDidUpdate，但只有被传入的 State 变化时才会触发；
* 第一个参数的返回值函数作为 componentWillUnmount 。



## 自定义 Hook

自定义Hook的 state 是完全独立的。Hook 是一种复用状态逻辑的方式，它不复用 state 本身。事实上 Hook 的每次调用都有一个完全独立的 state —— 因此你可以在单个组件中多次调用同一个自定义 Hook。

自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook。 useSomething 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug。

* 函数的名字以 `use` 开头。
* 函数内部可以调用其他 `Hook`。
* `Hook`、`组件`、`其他 Hook`之间都不共享 `State`.

## useMemo

把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

注意：
* useMemo 的函数会在渲染期间执行；
* useMemo 在每次渲染时都会计算新的值。

## useCallback

当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

## useRef

useRef 会在每次渲染时返回同一个 ref 对象。

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

请记住，当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。

```jsx
const refContainer = useRef(initialValue);
// refContainer --> { current: initialValue }
```

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      {/* React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。 */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## useReducer

可以说是内置的 Redux。

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

## useImperativeHandle

组件传递给父组件方法，需结合 `forwardRef`。

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

渲染 `<FancyInput ref={inputRef} />` 的父组件可以调用 `inputRef.current.focus()`。

## useLayoutEffect

同步的 `useEffect` ，避免使用。

