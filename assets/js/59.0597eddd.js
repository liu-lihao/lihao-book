(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{450:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js随笔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js随笔"}},[t._v("#")]),t._v(" JS随笔")]),t._v(" "),a("h2",{attrs:{id:"js数据类型-值是如何存储的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型-值是如何存储的"}},[t._v("#")]),t._v(" JS数据类型，值是如何存储的")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("基本类型："),a("code",[t._v("Undefined")]),t._v("、"),a("code",[t._v("Null")]),t._v("、"),a("code",[t._v("Boolean")]),t._v("、"),a("code",[t._v("Number")]),t._v("、"),a("code",[t._v("String")]),t._v("、"),a("code",[t._v("Symbol")]),t._v("（ES6，独一无二）、"),a("code",[t._v("BigInt")]),t._v("（ES10，大数）。")]),t._v(" "),a("p",[t._v("存储在 "),a("strong",[t._v("栈(stack)")]),t._v(" 。占据空间小，大小固定。")])]),t._v(" "),a("li",[a("p",[t._v("引用类型："),a("code",[t._v("Object")])]),t._v(" "),a("p",[t._v("指针存储在 "),a("strong",[t._v("栈(stack)")]),t._v(" ，数据存储在 "),a("strong",[t._v("堆(heap)")]),t._v(" 。占据空间大，大小不固定。")])])]),t._v(" "),a("h2",{attrs:{id:"、-和-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#、-和-运算符"}},[t._v("#")]),t._v(" && 、 ||和!! 运算符")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("&&")]),t._v(" ： 逻辑与，返回找到的第一个虚值，如果没有则返回最后一个真值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("||")]),t._v(" ： 逻辑或，返回找到的第一个真值，如果没有则返回最后一个虚值。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("!!")]),t._v(" ： 转 "),a("code",[t._v("Boolean")]),t._v(" 类型。")])])]),t._v(" "),a("h2",{attrs:{id:"js类型判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js类型判断"}},[t._v("#")]),t._v(" JS类型判断")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("typeof")])]),t._v(" "),a("ul",[a("li",[t._v("可能返回："),a("code",[t._v("object")]),t._v("/"),a("code",[t._v("number")]),t._v("/"),a("code",[t._v("string")]),t._v("/"),a("code",[t._v("boolean")]),t._v("/"),a("code",[t._v("function")]),t._v("/"),a("code",[t._v("undefined")]),t._v("/"),a("code",[t._v("symbol")]),t._v("/"),a("code",[t._v("bigint")])]),t._v(" "),a("li",[a("code",[t._v("typeof null")]),t._v(" 返回 "),a("code",[t._v("object")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("instanceof")])]),t._v(" "),a("ul",[a("li",[t._v("通过判断对象的原型链中是不是能找到类型的 "),a("code",[t._v("prototype")]),t._v("。")]),t._v(" "),a("li",[t._v("无法判断基本类型")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("constructor")])]),t._v(" "),a("ul",[a("li",[t._v("可改，有时不太靠谱。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Object.prototype.toString.call()")])]),t._v(" "),a("ul",[a("li",[t._v("比较靠谱")]),t._v(" "),a("li",[a("code",[t._v('Object.prototype.toString.call(null); // "[object Null]"')])])])])]),t._v(" "),a("h2",{attrs:{id:"作用域和作用域链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域和作用域链"}},[t._v("#")]),t._v(" 作用域和作用域链")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("作用域")]),t._v(" ： 作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量（标识符）进行变量查找。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("作用域链")]),t._v(" ： 作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，我们可以访问到外层环境的变量和函数。")])])]),t._v(" "),a("h2",{attrs:{id:"javascript-创建对象的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-创建对象的几种方式"}},[t._v("#")]),t._v(" JavaScript 创建对象的几种方式？")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("工厂模式")]),t._v(" ：工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("构造函数模式")]),t._v(" ：js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("原型模式")]),t._v(" ：因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("组合使用构造函数模式和原型模式")]),t._v(" ：这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此我们可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("动态原型模式")]),t._v(" ：这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("寄生构造函数模式")]),t._v(" ：这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。")])])]),t._v(" "),a("h2",{attrs:{id:"javascript-继承的几种实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-继承的几种实现方式"}},[t._v("#")]),t._v(" JavaScript 继承的几种实现方式？")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("以原型链的方式来实现继承")]),t._v(" ：但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("使用借用构造函数的方式")]),t._v(" ：这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("组合继承")]),t._v(" ：组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("原型式继承")]),t._v(" ：原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 "),a("code",[t._v("Object.create()")]),t._v("方法就是原型式继承的实现。缺点与原型链方式相同。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("寄生式继承")]),t._v(" ：寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("寄生式组合继承")]),t._v(" ：组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。")])])]),t._v(" "),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("p",[t._v("闭包是指有权访问另一个函数作用域内变量的函数，其实闭包的本质就是作用域链的一个特殊的应用。")]),t._v(" "),a("h2",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),a("p",[t._v("本质上是利用了浏览器事件冒泡的机制。")]),t._v(" "),a("h2",{attrs:{id:"延迟加载js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延迟加载js"}},[t._v("#")]),t._v(" 延迟加载js")]),t._v(" "),a("ul",[a("li",[t._v("js置底")]),t._v(" "),a("li",[t._v("给 "),a("code",[t._v("<script>")]),t._v("  添加 "),a("code",[t._v("defer")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("给 "),a("code",[t._v("<script>")]),t._v(" 添加 "),a("code",[t._v("async")]),t._v(" 属性")]),t._v(" "),a("li",[t._v("动态创建 "),a("code",[t._v("<script>")])])]),t._v(" "),a("h2",{attrs:{id:"var-let-和-const-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-let-和-const-的区别是什么"}},[t._v("#")]),t._v(" "),a("code",[t._v("var")]),t._v(" , "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 的区别是什么？")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("var")]),t._v(" 声明的变量会挂载在 "),a("code",[t._v("window")]),t._v(" 上，而 "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 声明的变量不会：")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("var")]),t._v(" 声明变量存在变量提升， "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 不存在变量提升:")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 声明形成块作用域")])]),t._v(" "),a("li",[a("p",[t._v("同一作用域下 "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 不能声明同名变量，而var可以")])]),t._v(" "),a("li",[a("p",[t._v("暂存死区")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而这时，还未到声明时候，所以控制台Error:a is not defined")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("const")])]),t._v(" "),a("ul",[a("li",[t._v("声明必须赋值")]),t._v(" "),a("li",[t._v("引用类型指针不可改变")]),t._v(" "),a("li",[t._v("基本类型不可变")])])])]),t._v(" "),a("h2",{attrs:{id:"声明变量的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明变量的方式"}},[t._v("#")]),t._v(" 声明变量的方式")]),t._v(" "),a("p",[t._v("ES5 只有两种声明变量的方法："),a("code",[t._v("var")]),t._v(" 命令和 "),a("code",[t._v("function")]),t._v(" 命令。ES6 除了添加 "),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v(" 命令，后面章节还会提到，另外两种声明变量的方法： "),a("code",[t._v("import")]),t._v(" 命令和 "),a("code",[t._v("class")]),t._v(" 命令。所以，ES6 一共有 6 种声明变量的方法。")]),t._v(" "),a("p",[t._v("所以："),a("code",[t._v("var")]),t._v("、"),a("code",[t._v("function")]),t._v("、"),a("code",[t._v("let")]),t._v("、"),a("code",[t._v("const")]),t._v("、"),a("code",[t._v("import")]),t._v("、"),a("code",[t._v("class")])]),t._v(" "),a("h2",{attrs:{id:"async-await-优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await-优缺点"}},[t._v("#")]),t._v(" async/await 优缺点")]),t._v(" "),a("p",[a("code",[t._v("async/await")]),t._v("的优势在于处理 "),a("code",[t._v("then")]),t._v(" 的调用链，能够更清晰准确的写出代码，并且也能优雅地解决回调地狱问题。当然也存在一些缺点，因为 "),a("code",[t._v("await")]),t._v(" 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 "),a("code",[t._v("await")]),t._v(" 会导致性能上的降低。")]),t._v(" "),a("p",[t._v("需要注意，只要加上了 "),a("code",[t._v("async")]),t._v(" 的函数，无论返回什么都会变成 "),a("code",[t._v("Promise")]),t._v("，（比如返回"),a("code",[t._v("3")]),t._v("，则转换为"),a("code",[t._v("Promise.resolve(3)")]),t._v(" 。若返回自身就是 "),a("code",[t._v("Promise")]),t._v(" 则直接返回自身）。")]),t._v(" "),a("h2",{attrs:{id:"同一浏览器实现多个标签页通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一浏览器实现多个标签页通信"}},[t._v("#")]),t._v(" 同一浏览器实现多个标签页通信")]),t._v(" "),a("p",[t._v("最优方式：使用"),a("code",[t._v("localStorage")]),t._v("，监听"),a("code",[t._v("storage")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'storage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("触发条件:\n"),a("ol",[a("li",[a("code",[t._v("localStorage")]),t._v("发生变化("),a("code",[t._v("sessionStorage")]),t._v("无效)。")]),t._v(" "),a("li",[a("code",[t._v("localStorage.clear()")]),t._v("，若本身为空，则不会触发。")]),t._v(" "),a("li",[t._v("同一个html不会触发，需在服务器上不同的html，即域名、端口、协议相同的不同页面。")])])])]),t._v(" "),a("h2",{attrs:{id:"hash路由的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash路由的实现"}},[t._v("#")]),t._v(" hash路由的实现")]),t._v(" "),a("p",[t._v("原理：url中"),a("code",[t._v("#")]),t._v("号及其后面的内容不会作为有效网址，并且当#号及其后面内容发生改变是会触发"),a("code",[t._v("hashchange")]),t._v("事件。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hashchange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里加上判断，并可以通过动态加载js实现按需加载js。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("按需加载js:")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-router.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"array-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-sort"}},[t._v("#")]),t._v(" Array.sort()")]),t._v(" "),a("p",[t._v("一直以为它的作用仅仅是纯数字数组排序，直到最近才发现我错了，原来它对不太多的各种数据排序都很方便。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("默认情况：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("默认排序规则：字符串方式")])]),t._v(" "),a("li",[a("p",[t._v("默认排序顺序：递增")])]),t._v(" "),a("li",[a("p",[t._v("Demo：")])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  [10, 2, 4, 6]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("传入比较函数：")]),t._v(" "),a("ol",[a("li",[t._v("比较函数：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//递增排序")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果希望小的数字在左边(arr[0]最小),则对value1来说，小的话要放到左边去，返回<0的数。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果希望大的数字在左边(arr[0]最大),则对value1来说，小的话要放到右边去，返回>0的数。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//相等的话返回0。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//总的来说：两个参数比较，随便返回-1/1，0不用管，不是想要的顺序就换了一下-1/1就行了。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Demo：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"num"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"num"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"num"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"num"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//[{"num":2},{"num":4},{"num":6},{"num":10}]')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);