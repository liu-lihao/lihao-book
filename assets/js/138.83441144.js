(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{538:function(t,a,s){"use strict";s.r(a);var r=s(46),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),s("p",[t._v("设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。")]),t._v(" "),s("h2",{attrs:{id:"五个设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五个设计原则"}},[t._v("#")]),t._v(" 五个设计原则")]),t._v(" "),s("p",[s("strong",[t._v("S – Single Responsibility Principle 单一职责原则")])]),t._v(" "),s("ul",[s("li",[t._v("一个程序只做好一件事")]),t._v(" "),s("li",[t._v("如果功能过于复杂就拆分开，每个部分保持独立")])]),t._v(" "),s("p",[s("strong",[t._v("O – OpenClosed Principle 开放/封闭原则")])]),t._v(" "),s("ul",[s("li",[t._v("对扩展开放，对修改封闭")]),t._v(" "),s("li",[t._v("增加需求时，扩展新代码，而非修改已有代码")])]),t._v(" "),s("p",[s("strong",[t._v("L – Liskov Substitution Principle 里氏替换原则")])]),t._v(" "),s("ul",[s("li",[t._v("子类能覆盖父类")]),t._v(" "),s("li",[t._v("父类能出现的地方子类就能出现")])]),t._v(" "),s("p",[s("strong",[t._v("I – Interface Segregation Principle 接口隔离原则")])]),t._v(" "),s("ul",[s("li",[t._v("保持接口的单一独立")]),t._v(" "),s("li",[t._v("类似单一职责原则，这里更关注接口")])]),t._v(" "),s("p",[s("strong",[t._v("D – Dependency Inversion Principle 依赖倒转原则")])]),t._v(" "),s("ul",[s("li",[t._v("面向接口编程，依赖于抽象而不依赖于具")]),t._v(" "),s("li",[t._v("使用方只关注接口而不关注具体类的实现")])]),t._v(" "),s("h2",{attrs:{id:"三种设计模式类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三种设计模式类型"}},[t._v("#")]),t._v(" 三种设计模式类型")]),t._v(" "),s("p",[s("strong",[t._v("结构型模式（Structural Patterns）：")]),t._v(" 通过识别系统中组件间的简单关系来简化系统的设计。")]),t._v(" "),s("p",[s("strong",[t._v("创建型模式（Creational Patterns）：")]),t._v(" 处理对象的创建，根据实际情况使用合适的方式创建对象。常规的对象创建方式可能会导致设计上的问题，或增加设计的复杂度。创建型模式通过以某种方式控制对象的创建来解决问题。")]),t._v(" "),s("p",[s("strong",[t._v("行为型模式（Behavioral Patterns）：")]),t._v(" 用于识别对象之间常见的交互模式并加以实现，如此，增加了这些交互的灵活性。")]),t._v(" "),s("h2",{attrs:{id:"_9-种前端常见的设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-种前端常见的设计模式"}},[t._v("#")]),t._v(" 9 种前端常见的设计模式")]),t._v(" "),s("h3",{attrs:{id:"_1-外观模式-facade-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-外观模式-facade-pattern"}},[t._v("#")]),t._v(" 1. 外观模式（Facade Pattern）")]),t._v(" "),s("p",[t._v("提供简单易用的API")]),t._v(" "),s("p",[t._v("缺点：不符合开闭原则，改起来麻烦。")]),t._v(" "),s("h3",{attrs:{id:"_2-代理模式-proxy-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-代理模式-proxy-pattern"}},[t._v("#")]),t._v(" 2. 代理模式（Proxy Pattern）")]),t._v(" "),s("p",[t._v("不直接修改，找个中间商代理，由中间商保护目标。")]),t._v(" "),s("p",[t._v("缺点：加了层代理，会有额外开销。")]),t._v(" "),s("h3",{attrs:{id:"_3-工厂模式-factory-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-工厂模式-factory-pattern"}},[t._v("#")]),t._v(" 3. 工厂模式（Factory Pattern）")]),t._v(" "),s("p",[t._v("实例化对象是，由厂家去控制实例化成哪个对象。我们只需关注结果即可。")]),t._v(" "),s("p",[t._v("缺点：添加新构造函数时复杂度高了点。")]),t._v(" "),s("h3",{attrs:{id:"_4-单例模式-singleton-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-单例模式-singleton-pattern"}},[t._v("#")]),t._v(" 4. 单例模式（Singleton Pattern）")]),t._v(" "),s("p",[t._v("只 "),s("code",[t._v("new")]),t._v(" 一个对象出来用，比如在 "),s("code",[t._v("Vue 2.x")]),t._v(" 就是这样。")]),t._v(" "),s("p",[t._v("缺点：耦合度高、不太好单元测试")]),t._v(" "),s("h3",{attrs:{id:"_5-策略模式-strategy-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-策略模式-strategy-pattern"}},[t._v("#")]),t._v(" 5. 策略模式（Strategy Pattern）")]),t._v(" "),s("p",[t._v("写个战术，以分别使用不同函数/参数。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非策略模式，硬写")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("普通用户"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("普通用户操作")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("会员用户"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("会员用户操作")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 策略模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" 我的策略 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    普通用户"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 普通用户操作\n    会员用户"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 会员用户操作\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n我的策略"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xx用户"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("缺点：函数可能会有点多")]),t._v(" "),s("h3",{attrs:{id:"_6-迭代器模式-iterator-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-迭代器模式-iterator-pattern"}},[t._v("#")]),t._v(" 6. 迭代器模式（Iterator Pattern）")]),t._v(" "),s("p",[t._v("提供一种方法顺序一个聚合对象中各个元素")]),t._v(" "),s("h3",{attrs:{id:"_7-观察者模式-observer-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-观察者模式-observer-pattern"}},[t._v("#")]),t._v(" 7. 观察者模式（Observer Pattern）")]),t._v(" "),s("p",[s("strong",[t._v("观察者模式")]),t._v("又称"),s("strong",[t._v("发布-订阅模式")]),t._v("（Publish/Subscribe Pattern）")]),t._v(" "),s("p",[s("strong",[t._v("被观察对象（subject）维护一组观察者（observer），当被观察对象状态改变时，通过调用观察者的某个方法将这些变化通知到观察者")]),t._v("。")]),t._v(" "),s("p",[t._v("缺点：过度使用会导致对象与对象之间的联系弱化（比如数据和 "),s("code",[t._v("DOM")]),t._v(" ，还好 "),s("code",[t._v("Vue")]),t._v(" 够优秀）")]),t._v(" "),s("h3",{attrs:{id:"_8-中介者模式-mediator-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-中介者模式-mediator-pattern"}},[t._v("#")]),t._v(" 8. 中介者模式（Mediator Pattern）")]),t._v(" "),s("p",[t._v("对象直接不直接沟通，通过中介。")]),t._v(" "),s("p",[t._v("缺点：复杂度高的话，导致中介会及其复杂")]),t._v(" "),s("h3",{attrs:{id:"_9-访问者模式-visitor-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-访问者模式-visitor-pattern"}},[t._v("#")]),t._v(" 9. 访问者模式（Visitor Pattern）")]),t._v(" "),s("p",[t._v("不影响自身的前提下，可以随便提供其他逻辑，即添加插件。扩展好。")]),t._v(" "),s("p",[t._v("缺点：插件多了后果你知道的。")])])}),[],!1,null,null,null);a.default=n.exports}}]);