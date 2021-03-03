(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{944:function(t,r,e){"use strict";e.r(r);var i=e(46),a=Object(i.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"typescript-入门教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-入门教程"}},[t._v("#")]),t._v(" TypeScript 入门教程")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://travis-ci.org/xcatliu/typescript-tutorial",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/xcatliu/typescript-tutorial.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://greenkeeper.io/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badges.greenkeeper.io/xcatliu/typescript-tutorial.svg",alt:"Greenkeeper badge"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。")]),t._v(" "),e("h2",{attrs:{id:"关于本书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于本书"}},[t._v("#")]),t._v(" 关于本书")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://ts.xcatliu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线阅读"),e("OutboundLink")],1),t._v("（部署在 "),e("a",{attrs:{href:"https://www.gitbook.com/book/xcatliu/typescript-tutorial/details",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBook"),e("OutboundLink")],1),t._v(" 上，可能需要翻墙）")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线阅读（GitHub 版）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 地址"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("作者："),e("a",{attrs:{href:"https://github.com/xcatliu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("xcatliu"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("官方 QQ 群："),e("a",{attrs:{href:"https://jq.qq.com/?_wv=1027&k=5nkkFCl",target:"_blank",rel:"noopener noreferrer"}},[t._v("加入 QQ 群 767142358"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("本书是作者在学习 "),e("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v(" 后整理的学习笔记。")]),t._v(" "),e("p",[t._v("随着对 TypeScript 理解的加深和 TypeScript 社区的发展，本书也会做出相应的更新，欢迎大家 "),e("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("Star 收藏"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("发现文章内容有问题，可以直接在页面下方评论")]),t._v(" "),e("li",[t._v("对项目的建议，可以"),e("a",{attrs:{href:"https://github.com/xcatliu/typescript-tutorial/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交 issue"),e("OutboundLink")],1),t._v(" 向作者反馈")]),t._v(" "),e("li",[t._v("欢迎直接提交 pull-request 参与贡献")])]),t._v(" "),e("h2",{attrs:{id:"为什么要写本书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要写本书"}},[t._v("#")]),t._v(" 为什么要写本书")]),t._v(" "),e("p",[t._v("TypeScript 虽然有"),e("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方手册"),e("OutboundLink")],1),t._v("及其"),e("a",{attrs:{href:"https://zhongsp.gitbook.io/typescript-handbook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("非官方中文版"),e("OutboundLink")],1),t._v("，但是它每一章都希望能详尽的描述一个概念，导致前面的章节就会包含很多后面才会学习到的内容，而有些本该一开始就了解的基础知识却在后面才会涉及。如果是初学者，可能需要阅读多次才能理解。所以它更适合用来查阅，而不是学习。")]),t._v(" "),e("p",[t._v("与官方手册不同，本书着重于从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript，希望能给大家一些帮助和启示。")]),t._v(" "),e("p",[t._v("由于一些知识点与官方手册重合度很高，本书会在相应章节推荐直接阅读中文手册。")]),t._v(" "),e("h2",{attrs:{id:"关于-typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于-typescript"}},[t._v("#")]),t._v(" 关于 TypeScript")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v(" 是 JavaScript 的一个超集，主要提供了"),e("strong",[t._v("类型系统")]),t._v("和"),e("strong",[t._v("对 ES6 的支持")]),t._v("，它由 Microsoft 开发，代码"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源于 GitHub"),e("OutboundLink")],1),t._v(" 上。")]),t._v(" "),e("p",[t._v("它的第一个版本发布于 2012 年 10 月，经历了多次更新后，现在已成为前端社区中不可忽视的力量，不仅在 Microsoft 内部得到广泛运用，而且 Google 的 "),e("a",{attrs:{href:"https://angular.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular2"),e("OutboundLink")],1),t._v(" 也使用了 TypeScript 作为开发语言。")]),t._v(" "),e("h2",{attrs:{id:"适合人群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适合人群"}},[t._v("#")]),t._v(" 适合人群")]),t._v(" "),e("p",[t._v("本书适合以下人群")]),t._v(" "),e("ul",[e("li",[t._v("熟悉 JavaScript，至少阅读过一遍"),e("a",{attrs:{href:"https://book.douban.com/subject/10546125/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《JavaScript 高级程序设计》"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("了解 ES6，推荐阅读 "),e("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("了解 Node.js，会用 npm 安装及使用一些工具")]),t._v(" "),e("li",[t._v("想了解 TypeScript 或者想对 TypeScript 有更深的理解")])]),t._v(" "),e("p",[t._v("本书"),e("strong",[t._v("不适合")]),t._v("以下人群")]),t._v(" "),e("ul",[e("li",[t._v("没有系统学习过 JavaScript")]),t._v(" "),e("li",[t._v("已经能够很熟练的运用 TypeScript")])]),t._v(" "),e("h2",{attrs:{id:"评价"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#评价"}},[t._v("#")]),t._v(" 评价")]),t._v(" "),e("blockquote",[e("p",[t._v("《TypeScript 入门教程》全面介绍了 TS 强大的类型系统，完整而简洁，示例丰富，比官方文档更易读，非常适合作为初学者学习 TS 的第一本书。")]),t._v(" "),e("p",[t._v("—— "),e("a",{attrs:{href:"https://github.com/ruanyf",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/"}},[t._v("前言")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/introduction/"}},[t._v("简介")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/introduction/what-is-typescript.html"}},[t._v("什么是 TypeScript")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/introduction/get-typescript.html"}},[t._v("安装 TypeScript")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/introduction/hello-typescript.html"}},[t._v("Hello TypeScript")])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/"}},[t._v("基础")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/primitive-data-types.html"}},[t._v("原始数据类型")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/any.html"}},[t._v("任意值")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/type-inference.html"}},[t._v("类型推论")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/union-types.html"}},[t._v("联合类型")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/type-of-object-interfaces.html"}},[t._v("对象的类型——接口")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/type-of-array.html"}},[t._v("数组的类型")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/type-of-function.html"}},[t._v("函数的类型")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/type-assertion.html"}},[t._v("类型断言")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/declaration-files.html"}},[t._v("声明文件")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/basics/built-in-objects.html"}},[t._v("内置对象")])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/"}},[t._v("进阶")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/type-aliases.html"}},[t._v("类型别名")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/string-literal-types.html"}},[t._v("字符串字面量类型")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/tuple.html"}},[t._v("元组")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/enum.html"}},[t._v("枚举")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/class.html"}},[t._v("类")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/class-and-interfaces.html"}},[t._v("类与接口")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/generics.html"}},[t._v("泛型")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/declaration-merging.html"}},[t._v("声明合并")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/advanced/further-reading.html"}},[t._v("扩展阅读")])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/engineering/"}},[t._v("工程")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/engineering/lint.html"}},[t._v("代码检查")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/engineering/compiler-options.html"}},[t._v("代码检查")])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/thanks/"}},[t._v("感谢")])],1)]),t._v(" "),e("h2",{attrs:{id:"版权许可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版权许可"}},[t._v("#")]),t._v(" 版权许可")]),t._v(" "),e("p",[t._v("本书采用「保持署名—非商用」创意共享 4.0 许可证。")]),t._v(" "),e("p",[t._v("只要保持原作者署名和非商用，您可以自由地阅读、分享、修改本书。")]),t._v(" "),e("p",[t._v("详细的法律条文请参见"),e("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("创意共享"),e("OutboundLink")],1),t._v("网站。")]),t._v(" "),e("h2",{attrs:{id:"相关资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[t._v("#")]),t._v(" 相关资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 官网"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Handbook"),e("OutboundLink")],1),t._v("（"),e("a",{attrs:{href:"https://zhongsp.gitbook.io/typescript-handbook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("li",[e("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门"),e("OutboundLink")],1)])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/TypeScript-xcatliu/introduction/"}},[t._v("下一章：简介")])],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);