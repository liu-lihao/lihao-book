(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{546:function(t,e,s){"use strict";s.r(e);var r=s(46),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见网络攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见网络攻击"}},[t._v("#")]),t._v(" 常见网络攻击")]),t._v(" "),s("p",[t._v("本文是站在一个前端工程师的角度来看网络攻击，不是很全面，请多多体谅...")]),t._v(" "),s("h2",{attrs:{id:"xss-跨网站脚本攻击-crosssite-scripting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-跨网站脚本攻击-crosssite-scripting"}},[t._v("#")]),t._v(" XSS (跨网站脚本攻击 CrossSite Scripting)")]),t._v(" "),s("p",[t._v("处理富文本、innerHTML等动态渲染节点的场景，需要处理处理恶意代码，需要处理： "),s("code",[t._v("<script><\/script>")]),t._v(" /"),s("code",[t._v("<style></style>")]),t._v(" / "),s("code",[t._v("<link></link>")]),t._v("/ "),s("code",[t._v('<a href="javascript:alert(666)" ></a>')])]),t._v(" "),s("h2",{attrs:{id:"csrf-跨站请求伪造攻击-cross-site-request-forgery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-跨站请求伪造攻击-cross-site-request-forgery"}},[t._v("#")]),t._v(" CSRF (跨站请求伪造攻击 Cross-site request forgery)")]),t._v(" "),s("p",[t._v("利用浏览器Cookie或服务器Session策略，盗取用户身份。通过让目标用户在不注意的情况下点击某些链接（链接可能伪装成图片、超链接等）（该链接是实名接口，如支付、评论等），从而造成个人隐私泄露以及财产安全。")]),t._v(" "),s("h3",{attrs:{id:"cookie-和-token-都存放在-header-中-为什么不会劫持-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-token-都存放在-header-中-为什么不会劫持-token"}},[t._v("#")]),t._v(" cookie 和 token 都存放在 header 中，为什么不会劫持 token？")]),t._v(" "),s("ol",[s("li",[t._v("首先token不是防止XSS的，而是为了防止CSRF的；")]),t._v(" "),s("li",[t._v("CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token")])]),t._v(" "),s("h2",{attrs:{id:"ddos-分布式拒绝服务攻击-distributed-denial-of-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ddos-分布式拒绝服务攻击-distributed-denial-of-service"}},[t._v("#")]),t._v(" DDoS (分布式拒绝服务攻击 Distributed Denial of Service)")]),t._v(" "),s("p",[t._v("通过大量合法的请求占用大量网络资源，以达到瘫痪网络的目的。")]),t._v(" "),s("h2",{attrs:{id:"文件上传漏洞攻击-fileupload-attack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件上传漏洞攻击-fileupload-attack"}},[t._v("#")]),t._v(" 文件上传漏洞攻击(FileUpload Attack)")]),t._v(" "),s("p",[t._v("攻击者利用程序缺陷绕过系统对文件的验证与处理策略将恶意代码上传到服务器并获得执行服务器端命令的能力。（如上传shell脚本等）")])])}),[],!1,null,null,null);e.default=a.exports}}]);