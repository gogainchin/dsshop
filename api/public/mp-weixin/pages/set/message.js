(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/message"],{"0f9b":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},3379:function(t,e,n){"use strict";n.r(e);var r=n("6d88"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},"3cbd":function(t,e,n){"use strict";n.r(e);var r=n("0f9b"),i=n("3379");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("cc90");var c,o=n("f0c5"),a=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=a.exports},"6d88":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("0143")),i=n("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{user:{}}},onShow:function(){this.loginCheck(),this.getUser()},methods:o(o({},(0,i.mapMutations)(["loginCheck"])),{},{getUser:function(){var t=this;r.default.detail((function(e){t.user=e}))},setNotification:function(e){var n=e.currentTarget.dataset.type;if("email"===n){if(!this.user.email)return this.$api.msg("请先绑定邮箱"),setTimeout((function(){t.navigateTo({url:"/pages/userinfo/email"})}),800),!1}else if("wechat"===n&&!this.user.wechat)return this.$api.msg("请先关注微信公众号"),setTimeout((function(){t.navigateTo({url:"/pages/public/subscribe"})}),800),!1;this.user.notification[n]=e.detail.value,r.default.notification(this.user,(function(t){}))}})};e.default=f}).call(this,n("543d")["default"])},"6def":function(t,e,n){"use strict";(function(t){n("ebeb");r(n("66fd"));var e=r(n("3cbd"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cc90:function(t,e,n){"use strict";var r=n("fb05"),i=n.n(r);i.a},fb05:function(t,e,n){}},[["6def","common/runtime","common/vendor"]]]);