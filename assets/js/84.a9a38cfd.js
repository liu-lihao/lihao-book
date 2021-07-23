(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{479:function(t,s,e){"use strict";e.r(s);var a=e(46),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-component-细读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-component-细读"}},[t._v("#")]),t._v(" React Component 细读")]),t._v(" "),e("blockquote",[e("p",[t._v("这里主要针对 class 组件")])]),t._v(" "),e("h2",{attrs:{id:"定义-class-组件-需要继承-react-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义-class-组件-需要继承-react-component"}},[t._v("#")]),t._v(" 定义 class 组件，需要继承 React.Component")]),t._v(" "),e("blockquote",[e("p",[t._v("强烈建议不要创建自己的组件基类。\n在 React 组件中，代码重用的主要方式是组合而不是继承。")])]),t._v(" "),e("p",[t._v("FaceBook 这种超大型项目都不考虑继承，而是将页面分成成百上千个组件，对其组合使用，才是最佳方案。")]),t._v(" "),e("h2",{attrs:{id:"render-方法是必须的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render-方法是必须的"}},[t._v("#")]),t._v(" "),e("code",[t._v("render()")]),t._v(" 方法是必须的")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Welcome")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Hello, ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("ul",[e("li",[t._v("检查 "),e("code",[t._v("state")]),t._v(" 和 "),e("code",[t._v("props")]),t._v(" 的变化。")]),t._v(" "),e("li",[t._v("如果 "),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 返回 "),e("code",[t._v("false")]),t._v(" ，则不会调用 "),e("code",[t._v("render()")]),t._v("。")]),t._v(" "),e("li",[t._v("该函数建议为纯函数（不改参数，不调用浏览器API），有返回值，如下：\n"),e("ol",[e("li",[e("strong",[t._v("React 元素")]),t._v(": 用 "),e("code",[t._v("jsx")]),t._v(" 写的，无论是普通的"),e("code",[t._v("<div />")]),t._v("还是"),e("code",[t._v("<Com />")])]),t._v(" "),e("li",[e("strong",[t._v("数组或 fragments")]),t._v(": 多个并列的 React 元素("),e("code",[t._v("<React.Fragment>")]),t._v("节点不会被渲染，而其包裹的节点会直接渲染)")]),t._v(" "),e("li",[e("strong",[t._v("Portals")]),t._v(": 可以渲染子节点到不同的 DOM 子树中。")]),t._v(" "),e("li",[e("strong",[t._v("字符串或数值类型")]),t._v(": 文本节点。")]),t._v(" "),e("li",[e("strong",[t._v("布尔类型或 null")]),t._v(": 什么都不渲染，so，实现组件是否挂载的方式可以有：\n"),e("ul",[e("li",[e("code",[t._v("flag && <Com />")])]),t._v(" "),e("li",[e("code",[t._v("flag ? <Com /> : null")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 生命周期图谱"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"挂载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),e("p",[t._v("组件实例被创建，并且挂载到DOM时。")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("constructor()")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("下面说的"),e("strong",[t._v("构造函数")]),t._v("就是指 "),e("code",[t._v("constructor()")])])]),t._v(" "),e("li",[e("p",[t._v("如果组件不需要 "),e("code",[t._v("state")]),t._v(" 或"),e("em",[t._v("方法绑定")]),t._v("，则可以不需要使用改构造函数。")])]),t._v(" "),e("li",[e("p",[t._v("钩子函数第一个参数是："),e("code",[t._v("props")])])]),t._v(" "),e("li",[e("p",[t._v("构造函数里第一行应该是："),e("code",[t._v("super(props)")])])]),t._v(" "),e("li",[e("p",[t._v("需要用到 "),e("code",[t._v("state")]),t._v(" ，请直接赋值："),e("code",[t._v("this.state = { ... }")])])]),t._v(" "),e("li",[e("p",[t._v("在构造函数里，不要调用 "),e("code",[t._v("setState()")]),t._v(" 方法，用如上赋值方式初始化")])]),t._v(" "),e("li",[e("p",[t._v("在其他地方，请使用 "),e("code",[t._v("setState()")]),t._v(" 方法作为修改 "),e("code",[t._v("state")]),t._v(" 的 "),e("strong",[t._v("唯一")]),t._v(" 方式。")])]),t._v(" "),e("li",[e("p",[t._v("千万不要将 "),e("code",[t._v("props")]),t._v(" 初始化到 "),e("code",[t._v("state")]),t._v("，如:")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是错误的，这回导致props改变，而state不更新，即视图不更新的问题。")]),t._v("\n        name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("不要放诸如 "),e("code",[t._v("setTimeout")]),t._v(" 、订阅("),e("code",[t._v("on/emit")]),t._v(")等，在构造函数里以期改变 "),e("code",[t._v("state")])])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("static getDerivedStateFromProps()")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("render()")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("componentDidMount()")])]),t._v(" "),e("ul",[e("li",[t._v("会在组件挂载后（插入 DOM 树中）立即调用")]),t._v(" "),e("li",[t._v("应该在这里执行各种请求，或者添加各种订阅、定时器、循环等。（记得要在 "),e("code",[t._v("componentWillUnmount()")]),t._v(" 清除这些副作用）")])])])]),t._v(" "),e("h3",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),e("p",[t._v("当组件的 props 或 state 发生变化时会触发更新。")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("static getDerivedStateFromProps()")])]),t._v(" "),e("ul",[e("li",[t._v("会在调用 "),e("code",[t._v("render")]),t._v(" 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 "),e("code",[t._v("state")]),t._v("，如果返回 "),e("code",[t._v("null")]),t._v(" 则不更新任何内容。")]),t._v(" "),e("li",[t._v("不管原因是什么，都会在每次渲染前触发此方法")]),t._v(" "),e("li",[t._v("此方法适用于罕见的用例，即 "),e("code",[t._v("state")]),t._v(" 的值在任何时候都取决于 "),e("code",[t._v("props")]),t._v("。")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("shouldComponentUpdate()")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("shouldComponentUpdate(nextProps, nextState)")])]),t._v(" "),e("li",[t._v("首次渲染或使用 forceUpdate() 时不会调用该方法。")]),t._v(" "),e("li",[t._v("当 "),e("code",[t._v("props")]),t._v(" 或 "),e("code",[t._v("state")]),t._v(" 发生变化时，"),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 会在渲染执行之前被调用。返回值默认为 "),e("code",[t._v("true")]),t._v("。")]),t._v(" "),e("li",[t._v("返回 "),e("code",[t._v("false")]),t._v(" 并不会阻止子组件在 "),e("code",[t._v("state")]),t._v(" 更改时重新渲染。")]),t._v(" "),e("li",[t._v("不建议在 "),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 中进行深层比较或使用 "),e("code",[t._v("JSON.stringify()")])]),t._v(" "),e("li",[e("code",[t._v("shouldComponentUpdate()")]),t._v(" 返回 "),e("code",[t._v("false")]),t._v("，则不会调用 "),e("code",[t._v("render()")]),t._v(" 和 "),e("code",[t._v("componentDidUpdate()")])]),t._v(" "),e("li",[t._v("后续版本可能返回 "),e("code",[t._v("false")]),t._v(" 也会导致页面渲染。")]),t._v(" "),e("li",[t._v("该方法 "),e("strong",[t._v("仅做优化性能")]),t._v("，如需阻止渲染请减少使用 "),e("code",[t._v("this.setState()")]),t._v("，或继承 "),e("code",[t._v("React.PureComponent")]),t._v(" 方式创建 class 组件。（"),e("code",[t._v("PureComponent")]),t._v(" 会对 "),e("code",[t._v("props")]),t._v(" 和 "),e("code",[t._v("state")]),t._v(" 进行浅层比较，并减少了跳过必要更新的可能性。）")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("render()")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("getSnapshotBeforeUpdate()")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("getSnapshotBeforeUpdate(prevProps, prevState)")])]),t._v(" "),e("li",[t._v("在最近一次渲染输出（提交到 DOM 节点） "),e("strong",[t._v("之前")]),t._v(" 调用")]),t._v(" "),e("li",[t._v("它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）")]),t._v(" "),e("li",[t._v("此生命周期的任何 "),e("strong",[t._v("返回值")]),t._v(" 将作为参数传递给 "),e("code",[t._v("componentDidUpdate()")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("componentDidUpdate()")])]),t._v(" "),e("ul",[e("li",[t._v("会在更新后会被调用。首次渲染不会执行此方法。")]),t._v(" "),e("li",[e("code",[t._v("componentDidUpdate(prevProps, prevState, snapshot)")])]),t._v(" "),e("li",[t._v("如果组件实现了 "),e("code",[t._v("getSnapshotBeforeUpdate()")]),t._v(" 生命周期（不常用），则它的返回值将作为 "),e("code",[t._v("componentDidUpdate()")]),t._v(" 的第三个参数 "),e("code",[t._v("snapshot")]),t._v(" 参数传递。否则此参数将为 "),e("code",[t._v("undefined")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("shouldComponentUpdate()")]),t._v(" 返回值为 "),e("code",[t._v("false")]),t._v("，则不会调用 "),e("code",[t._v("componentDidUpdate()")]),t._v("。")])])])]),t._v(" "),e("h3",{attrs:{id:"卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),e("p",[t._v("组件从DOM移除前。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("componentWillUnmount()")]),t._v(" "),e("ul",[e("li",[t._v("会在组件卸载及销毁之前直接调用")]),t._v(" "),e("li",[t._v("在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 "),e("code",[t._v("componentDidMount()")]),t._v(" 中创建的订阅等")]),t._v(" "),e("li",[t._v("这里不应该使用"),e("code",[t._v("this.setState()")]),t._v("，组件将要卸，这时触发"),e("code",[t._v("render()")]),t._v("毫无意义。")])])])]),t._v(" "),e("h3",{attrs:{id:"错误处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),e("p",[t._v("当渲染过程，生命周期，或子组件的构造函数中抛出错误时。")]),t._v(" "),e("blockquote",[e("p",[t._v("Error boundaries")]),t._v(" "),e("p",[t._v("如果 class 组件定义了生命周期方法 "),e("code",[t._v("static getDerivedStateFromError()")]),t._v(" 或 "),e("code",[t._v("componentDidCatch()")]),t._v(" 中的任何一个（或两者），它就成为了 Error boundaries。通过生命周期更新 "),e("code",[t._v("state")]),t._v(" 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("static getDerivedStateFromError()")]),t._v(" "),e("ul",[e("li",[t._v("一般用于降级 UI")]),t._v(" "),e("li",[t._v("此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state。")]),t._v(" "),e("li",[t._v("此方法是渲染阶段调用，因此"),e("strong",[t._v("不允许出现错误")]),t._v("。如存在错误的可能，请使用 "),e("code",[t._v("componentDidCatch()")])])])]),t._v(" "),e("li",[e("code",[t._v("componentDidCatch()")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("componentDidCatch(error, info)")])]),t._v(" "),e("li",[e("code",[t._v("error")]),t._v(" —— 抛出的错误。")]),t._v(" "),e("li",[e("code",[t._v("info")]),t._v(" —— 带有 "),e("code",[t._v("componentStack key")]),t._v(" 的对象，其中包含有关组件引发错误的栈信息。")]),t._v(" "),e("li",[t._v("会在“提交”阶段被调用，因此允许执行副作用")]),t._v(" "),e("li",[t._v("一般用于提交错误信息，或执行一些逻辑。")])])])]),t._v(" "),e("h2",{attrs:{id:"补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),e("h3",{attrs:{id:"其他api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他api"}},[t._v("#")]),t._v(" 其他API")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("setState()")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("setState(updater[, callback])")])])]),t._v(" "),e("li",[e("p",[t._v("不会保证 "),e("code",[t._v("state")]),t._v(" 的变更会立即生效，它批量推迟更新，即调用该方法后，"),e("code",[t._v("this.state.xxx")]),t._v("不一定去得到更新后的值。")])]),t._v(" "),e("li",[e("p",[t._v("如有需要更新后的执行，请使用第二个回调函数参数，或 "),e("code",[t._v("componentDidUpdate()")])])]),t._v(" "),e("li",[e("p",[t._v("除非 "),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 返回 "),e("code",[t._v("false")]),t._v("，否则 "),e("code",[t._v("setState()")]),t._v(" 将始终执行重新渲染操作。")])]),t._v(" "),e("li",[e("p",[t._v("如果 "),e("code",[t._v("state")]),t._v(" 依赖 "),e("code",[t._v("props")]),t._v("，请在 "),e("code",[t._v("static getDerivedStateFromProps()")]),t._v(" 中使用该方法。")])]),t._v(" "),e("li",[e("p",[t._v("如果需要频繁的叠加"),e("code",[t._v("state")]),t._v("，比如购物车数量时，建议使用"),e("code",[t._v("updater")]),t._v("函数：")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        quantity"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quantity "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quantity "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("forceUpdate()")]),t._v(" "),e("ul",[e("li",[t._v("强制让组件重新渲染")]),t._v(" "),e("li",[t._v("使组件调用 "),e("code",[t._v("render()")]),t._v(" 方法，此操作会跳过该组件的 "),e("code",[t._v("shouldComponentUpdate()")]),t._v("，(子组件正常，不跳过)")]),t._v(" "),e("li",[t._v("应避免使用")])])])]),t._v(" "),e("h3",{attrs:{id:"class-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-属性"}},[t._v("#")]),t._v(" class 属性")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("defaultProps")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("提供 "),e("code",[t._v("props")]),t._v(" 默认值")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomButton")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nCustomButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultProps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认值")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("displayName")]),t._v(" "),e("ul",[e("li",[t._v("字符串，多用于调试消息。通常，你不需要设置它。")])])])]),t._v(" "),e("h3",{attrs:{id:"实例属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[t._v("#")]),t._v(" 实例属性")]),t._v(" "),e("ul",[e("li",[t._v("props\n"),e("ul",[e("li",[t._v("使用该组件时，对齐传入的属性，包括事件监听函数。")]),t._v(" "),e("li",[e("code",[t._v("this.props.children")]),t._v(" 是特殊的属性，作为插槽.")]),t._v(" "),e("li",[t._v("插槽若只有一个根节点则是 "),e("strong",[t._v("对象类型")]),t._v("，若多个并列，则是个 "),e("strong",[t._v("数组类型")]),t._v("。")])])]),t._v(" "),e("li",[t._v("state\n"),e("ul",[e("li",[t._v("永远不要直接改变 "),e("code",[t._v("this.state")])]),t._v(" "),e("li",[t._v("未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 "),e("code",[t._v("state")])])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);