(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"1f49":function(e,t,n){"use strict";var i=n("73ab"),o=n.n(i);o.a},"6e78":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"73ab":function(e,t,n){},7416:function(e,t,n){"use strict";n.r(t);var i=n("850a"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"850a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n("a34a")),o=u(n("4a8c")),r=(n("3f95"),u(n("ca6c"))),s=u(n("1352")),a=n("2f62");function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,i,o,r,s){try{var a=e[r](s),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(i,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function s(e){d(r,i,o,s,a,"next",e)}function a(e){d(r,i,o,s,a,"throw",e)}s(void 0)}))}}var p=function(){Promise.all([n.e("common/vendor"),n.e("components/gaoyia-parse/parse")]).then(function(){return resolve(n("807a"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/share").then(function(){return resolve(n("258a"))}.bind(null,n)).catch(n.oe)},g=function(){Promise.all([n.e("common/vendor"),n.e("components/sku/index")]).then(function(){return resolve(n("f2f3"))}.bind(null,n)).catch(n.oe)},m={components:{share:v,sku:g,uParse:p},data:function(){return{cartGood:{},id:"",specClass:"none",specificationDefaultDisplay:"",getList:{is_delete:0,is_show:1},shoppingAttributes:[],favorite:!1,shareList:[],poster:"",resources_many:[],video:"",index:0,buy:!1}},onLoad:function(e){var t=this;return h(i.default.mark((function n(){var o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=e.id,o&&(t.id=o,t.loadData(o));case 2:case"end":return n.stop()}}),n)})))()},computed:f({},(0,a.mapState)(["hasLogin"])),onReady:function(t){this.videoContext=e.createVideoContext("myVideo")},methods:f(f({},(0,a.mapMutations)(["loginCheck"])),{},{loadData:function(e){var t=this;return h(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,n.next=3,o.default.getDetails(e,{},(function(e){e.resources_many.length>0&&e.resources_many.forEach((function(e,t){-1!==e.depict.indexOf("_video")?(e.type="video",r.resources_many.unshift(e)):-1!==e.depict.indexOf("_poster")?r.poster=e.img:(e.type="img",r.resources_many.push(e))})),r.getList=e,r.hasLogin&&r.browse()}));case 3:if(!r.hasLogin){n.next=6;break}return n.next=6,s.default.getDetails(e,(function(e){r.favorite=1===e}));case 6:case"end":return n.stop()}}),n)})))()},imgCtu:function(e){this.index=e.target.current},showVideo:function(){var e=this.resources_many[this.index];"video"===e.type&&(this.video=e.img)},closeVideo:function(){this.video=""},browse:function(){var e=this.getList;r.default.createSubmit(e,(function(e){}))},imgList:function(){var t=[];this.resources_many.forEach((function(e){"video"!==e.type&&t.push(e.img)})),e.previewImage({urls:t,longPressActions:{success:function(e){},fail:function(e){}}})},goLogin:function(){this.hasLogin||e.navigateTo({url:"/pages/public/login"})},toggleSpec:function(e){var t=this;if(this.loginCheck(),!this.hasLogin&&!0===e)return this.$api.msg("请先登录"),!1;"boolean"===typeof e&&(this.buy=e),"show"===this.specClass?(this.specClass="hide",setTimeout((function(){t.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show")},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){if(this.hasLogin){var e=this.getList;this.favorite?s.default.deleteSubmit(e.id,(function(e){})):s.default.createSubmit(e,(function(e){}))}this.favorite=!this.favorite},purchasePattern:function(e){this.specificationDefaultDisplay=e},stopPrevent:function(){}})};t.default=m}).call(this,n("543d")["default"])},"95d2":function(e,t,n){"use strict";n.r(t);var i=n("6e78"),o=n("7416");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("1f49");var s,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=u.exports},e127:function(e,t,n){"use strict";(function(e){n("ebeb");i(n("66fd"));var t=i(n("95d2"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["e127","common/runtime","common/vendor"]]]);