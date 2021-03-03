(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{951:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"字符串字面量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串字面量类型"}},[t._v("#")]),t._v(" 字符串字面量类型")]),t._v(" "),a("p",[t._v("字符串字面量类型用来约束取值只能是某几个字符串中的一个。")]),t._v(" "),a("h2",{attrs:{id:"简单的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的例子"}},[t._v("#")]),t._v(" 简单的例子")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventNames")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没问题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dbclick'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错，event 不能为 'dbclick'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.ts(7,47): error TS2345: Argument of type '\"dbclick\"' is not assignable to parameter of type 'EventNames'.")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("上例中，我们使用 "),a("code",[t._v("type")]),t._v(" 定了一个字符串字面量类型 "),a("code",[t._v("EventNames")]),t._v("，它只能取三种字符串中的一种。")]),t._v(" "),a("p",[t._v("注意，"),a("strong",[t._v("类型别名与字符串字面量类型都是使用 "),a("code",[t._v("type")]),t._v(" 进行定义。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Types # Type Aliases"),a("OutboundLink")],1),t._v("（"),a("a",{attrs:{href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版"),a("OutboundLink")],1),t._v("）")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/type-aliases.html"}},[t._v("上一章：类型别名")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/tuple.html"}},[t._v("下一章：元组")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);