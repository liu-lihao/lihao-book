(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1001:function(t,a,s){"use strict";s.r(a);var e=s(46),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[t._v("#")]),t._v(" HTTP缓存")]),t._v(" "),e("p",[t._v("先来区分一下缓存，下文中的缓存都只的是 "),e("strong",[t._v("HTTP缓存")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(393),alt:"前端缓存"}})]),t._v(" "),e("h2",{attrs:{id:"什么是http缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是http缓存"}},[t._v("#")]),t._v(" 什么是HTTP缓存")]),t._v(" "),e("p",[t._v("当客户端向服务器请求资源时，会先抵达浏览器缓存，如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HTTP 缓存只能缓存 "),e("code",[t._v("get")]),t._v(" 请求响应的资源。")])]),t._v(" "),e("li",[e("p",[t._v("HTTP 缓存都是从第二次请求开始的。")]),t._v(" "),e("p",[t._v("第一次请求时，服务器返回资源，并在 "),e("code",[t._v("respone header")]),t._v(" 头中回传资源的缓存参数；")]),t._v(" "),e("p",[t._v("第二次请求时，浏览器判断这些请求参数，命中 "),e("strong",[t._v("强缓存")]),t._v(" 就直接 "),e("code",[t._v("200")]),t._v(" ，否则就把请求参数加到 "),e("code",[t._v("request header")]),t._v(" 头中传给服务器，看是否命中 "),e("strong",[t._v("协商缓存")]),t._v(" ，命中则返回 "),e("code",[t._v("304")]),t._v(" ，否则服务器会返回新的资源。")])])]),t._v(" "),e("h3",{attrs:{id:"缓存分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存分类"}},[t._v("#")]),t._v(" 缓存分类")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("强缓存")]),t._v(" "),e("ul",[e("li",[t._v("不需要和服务器交互")])])]),t._v(" "),e("li",[e("p",[t._v("协商缓存")]),t._v(" "),e("ul",[e("li",[t._v("需要和服务器交互")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(394),alt:"强缓存和协商缓存"}})]),t._v(" "),e("h3",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),e("p",[t._v("强制缓存在缓存数据未失效的情况下（即 "),e("code",[t._v("Cache-Control")]),t._v(" 的 "),e("code",[t._v("max-age")]),t._v("没有过期或者 "),e("code",[t._v("Expires")]),t._v(" 的 "),e("strong",[t._v("缓存时间没有过期")]),t._v(" ），那么就会"),e("strong",[t._v("直接使用浏览器的缓存数据，不会再向服务器发送任何请求")]),t._v("。")]),t._v(" "),e("p",[t._v("强制缓存生效时，http状态码为 "),e("code",[t._v("200")]),t._v(" 。这种方式页面的加载速度是最快的，性能也是很好的，但是在这期间，如果服务器端的资源修改了，页面上是拿不到的，因为它不会再向服务器发请求了。")]),t._v(" "),e("p",[t._v("这种情况就是我们在开发种经常遇到的，比如你修改了页面上的某个样式，在页面上刷新了但没有生效，因为走的是强缓存，所以 "),e("code",[t._v("Ctrl + F5")]),t._v(" 一顿操作之后就好了。")]),t._v(" "),e("p",[t._v("跟强制缓存相关的header头属性有（"),e("code",[t._v("Pragma")]),t._v("/"),e("code",[t._v("Cache-Control")]),t._v("/"),e("code",[t._v("Expires")]),t._v("）。")]),t._v(" "),e("p",[e("code",[t._v("Pragma")]),t._v(" 和 "),e("code",[t._v("Cache-control")]),t._v(" 共存时，"),e("code",[t._v("Pragma")]),t._v(" 的优先级是比 "),e("code",[t._v("Cache-Control")]),t._v(" 高的。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(395),alt:"强制缓存相关的header头属性"}})]),t._v(" "),e("h3",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),e("p",[t._v("当第一次请求时服务器返回的响应头中没有 "),e("code",[t._v("Cache-Control")]),t._v(" 和 "),e("code",[t._v("Expires")]),t._v(" 或者 "),e("code",[t._v("Cache-Control")]),t._v(" 和 "),e("code",[t._v("Expires")]),t._v(" 过期还或者它的属性设置为 "),e("code",[t._v("no-cache")]),t._v(" 时(即"),e("strong",[t._v("不走强缓存")]),t._v(")，那么浏览器第二次请求时就会与服务器进行协商，"),e("strong",[t._v("与服务器端对比判断资源是否进行了修改更新")]),t._v("。")]),t._v(" "),e("p",[t._v("如果服务器端的资源没有修改，那么就会返回 "),e("code",[t._v("304")]),t._v(" 状态码，告诉浏览器可以使用缓存中的数据，这样就减少了服务器的数据传输压力。")]),t._v(" "),e("p",[t._v("如果数据有更新就会返回 "),e("code",[t._v("200")]),t._v(" 状态码，服务器就会返回更新后的资源并且将缓存信息一起返回。")]),t._v(" "),e("p",[t._v("跟协商缓存相关的header头属性有（ "),e("code",[t._v("ETag")]),t._v("/"),e("code",[t._v("If-Not-Match")]),t._v(" 、"),e("code",[t._v("Last-Modified")]),t._v(" / "),e("code",[t._v("If-Modified-Since")]),t._v(" ）"),e("strong",[t._v("请求头和响应头需要成对出现")]),t._v(" 。")]),t._v(" "),e("p",[t._v("当浏览器第一次向服务器发送请求时，会在响应头中返回协商缓存的头属性： "),e("code",[t._v("ETag")]),t._v(" 和 "),e("code",[t._v("Last-Modified")]),t._v(" ,其中 "),e("code",[t._v("ETag")]),t._v(" 返回的是一个 "),e("code",[t._v("hash")]),t._v(" 值，"),e("code",[t._v("Last-Modified")]),t._v(" 返回的是GMT格式的最后修改时间。")]),t._v(" "),e("p",[t._v("然后浏览器在第二次发送请求的时候，会在请求头中带上与ETag对应的If-Not-Match，其值就是响应头中返回的 "),e("code",[t._v("ETag")]),t._v(" 的值， "),e("code",[t._v("Last-Modified")]),t._v(" 对应的 "),e("code",[t._v("If-Modified-Since")]),t._v(" 。")]),t._v(" "),e("p",[t._v("服务器在接收到这两个参数后会做比较，如果返回的是 "),e("code",[t._v("304")]),t._v(" 状态码，则说明请求的资源没有修改，浏览器可以直接在缓存中取数据，否则，服务器会直接返回数据。")]),t._v(" "),e("p",[e("strong",[t._v("注意：")])]),t._v(" "),e("p",[e("code",[t._v("ETag")]),t._v(" / "),e("code",[t._v("If-Not-Match")]),t._v(" 是在 "),e("code",[t._v("HTTP/1.1")]),t._v(" 出现的，主要是解决以下问题：")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("Last-Modified")]),t._v(" 标注的最后修改"),e("strong",[t._v("只能精确到秒级")]),t._v("，如果某些文件在1秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间")])]),t._v(" "),e("li",[e("p",[t._v("如果某些文件被修改了，但是内容并没有任何变化，而 "),e("code",[t._v("Last-Modified")]),t._v(" 却改变了，导致文件没法使用缓存")])]),t._v(" "),e("li",[e("p",[t._v("有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形")])])]),t._v(" "),e("h3",{attrs:{id:"私有缓存-浏览器级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有缓存-浏览器级缓存"}},[t._v("#")]),t._v(" 私有缓存（浏览器级缓存）")]),t._v(" "),e("p",[t._v("私有缓存只能用于单独的用户：Cache-Control: Private")]),t._v(" "),e("h3",{attrs:{id:"共享缓存-代理级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享缓存-代理级缓存"}},[t._v("#")]),t._v(" 共享缓存（代理级缓存）")]),t._v(" "),e("p",[t._v("共享缓存可以被多个用户使用: Cache-Control: Public")]),t._v(" "),e("h2",{attrs:{id:"http缓存有什么好处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http缓存有什么好处"}},[t._v("#")]),t._v(" HTTP缓存有什么好处")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("减少了冗余的数据传输，节省了网费。")])]),t._v(" "),e("li",[e("p",[t._v("缓解了服务器的压力， 大大提高了网站的性能")])]),t._v(" "),e("li",[e("p",[t._v("加快了客户端加载网页的速度")])])]),t._v(" "),e("h2",{attrs:{id:"如何使用http缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用http缓存"}},[t._v("#")]),t._v(" 如何使用HTTP缓存")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("针对THML文件")]),t._v(" "),e("ol",[e("li",[t._v("禁用")])]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pragma"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" // IE供浏览器使用\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cache-control"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" // 主流浏览器\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("expires"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" // IE，仅作为知会IE缓存时间的标记\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("开启")])]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-Control"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("max-age=7200"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" // 主流\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Expires"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Mon, 20 Aug 2018 23:00:00 GMT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" // IE\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("其他静态资源")]),t._v(" "),e("p",[t._v("需要配置服务器代理")])])]),t._v(" "),e("h2",{attrs:{id:"巩固一下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#巩固一下"}},[t._v("#")]),t._v(" 巩固一下")]),t._v(" "),e("p",[e("img",{attrs:{src:s(396),alt:"HTTP缓存"}}),t._v(";")])])}),[],!1,null,null,null);a.default=n.exports},393:function(t,a,s){t.exports=s.p+"assets/img/Front-End-Cache.d2f8a09b.png"},394:function(t,a,s){t.exports=s.p+"assets/img/Http-Cache-Type.2cb81c44.png"},395:function(t,a,s){t.exports=s.p+"assets/img/Strong-Cache-Header.54290a05.png"},396:function(t,a,s){t.exports=s.p+"assets/img/HTTP-Cache.0c529972.png"}}]);