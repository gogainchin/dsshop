(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"3f7e":function(t,n,e){"use strict";(function(t){e("ebeb");i(e("66fd"));var n=i(e("cc909"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},4561:function(t,n,e){"use strict";var i=e("93f3"),a=e.n(i);a.a},"5ab9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a")),a=r(e("4a8c"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,i,a,r,c){try{var o=t[r](c),u=o.value}catch(s){return void e(s)}o.done?n(u):Promise.resolve(u).then(i,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var r=t.apply(n,e);function o(t){c(r,i,a,o,u,"next",t)}function u(t){c(r,i,a,o,u,"throw",t)}o(void 0)}))}}var u={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:49,flist:[],slist:[],tlist:[],tap:0}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=this;return o(i.default.mark((function n(){var e;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t,n.next=3,a.default.goodCategory({},(function(t){t.forEach((function(t){t.pid?t.resources?e.tlist.push(t):e.slist.push(t):e.flist.push(t)})),setTimeout((function(){e.sizeCalcState||e.calcSize()}),1)}));case 3:case"end":return n.stop()}}),n)})))()},tabtap:function(t){this.sizeCalcState||this.calcSize(),this.tap=1,this.currentId=t.id;var n=this.slist.findIndex((function(n){return n.pid===t.id}));this.tabScrollTop===this.slist[n].top?this.tabScrollTop=this.slist[n].top+1:this.tabScrollTop=this.slist[n].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var n=t.detail.scrollTop,e=this.slist.filter((function(t){return t.top<=n})).reverse();e.length>0&&!this.tap&&(this.currentId=e[0].pid),this.tap=0},calcSize:function(){var n=0;this.slist.forEach((function(e){var i=t.createSelectorQuery().select("#main-"+e.id);i.fields({size:!0},(function(t){e.top=n,n+=t.height,e.bottom=n})).exec()})),this.sizeCalcState=!0},navToList:function(n,e){t.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(n,"&tid=").concat(e)})}}};n.default=u}).call(this,e("543d")["default"])},"93f3":function(t,n,e){},"97e4":function(t,n,e){"use strict";e.r(n);var i=e("5ab9"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},cc909:function(t,n,e){"use strict";e.r(n);var i=e("f30a"),a=e("97e4");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("4561");var c,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=u.exports},f30a:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.slist,(function(n,e){var i=t.__get_orig(n),a=t.__map(t.tlist,(function(e,i){var a=t.__get_orig(e),r=e.pid===n.id?t._f("smallImage")(e.resources.img,80):null;return{$orig:a,f0:r}}));return{$orig:i,l0:a}})));t.$mp.data=Object.assign({},{$root:{l1:e}})},r=[]}},[["3f7e","common/runtime","common/vendor"]]]);