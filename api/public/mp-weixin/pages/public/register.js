(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/register"],{"7f68":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("a34a")),a=o(r("0cea")),i=r("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){u(i,n,a,o,s,"next",e)}function s(e){u(i,n,a,o,s,"throw",e)}o(void 0)}))}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={data:function(){return{tabname:["微信授权","短信验证"],codename:"获取验证码",unit:"",TabCur:0,seconds:"",ruleForm:{cellphone:"",code:"",password:"",rPassword:"",uuid:""},nodes:[{name:"span",children:[{type:"text",text:"在您注册成为dsshop用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，"}]},{name:"span",attrs:{style:"text-decoration: underline;"},children:[{type:"text",text:"请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）："}]},{name:"p",children:[{type:"text",text:"《dsshop用户注册协议》"}]},{name:"p",children:[{type:"text",text:"《dsshop隐私政策》"}]},{name:"span",attrs:{style:"text-decoration: underline;"},children:[{type:"text",text:"【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意dsshop可以依据以上的隐私政策内容来处理您的个人信息。"}]},{name:"span",children:[{type:"text",text:"如您对以上协议内容有任何疑问，您可随时与dsshop客服联系。"}]}],disabled:!1,logining:!1,modalName:"agreement"}},onLoad:function(e){e.uuid&&(this.ruleForm.uuid=e.uuid)},methods:l(l({},(0,i.mapMutations)(["login"])),{},{inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},toRegister:function(t){var r=this;return s(n.default.mark((function i(){var o,u,s;return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=r.ruleForm,u=r,!t.detail.iv){n.next=8;break}o.iv=t.detail.iv,o.session_key=e.getStorageSync("applyDsshopSession_key"),o.encryptedData=t.detail.encryptedData,n.next=35;break;case 8:if(o.cellphone){n.next=13;break}return r.$api.msg("请填写手机号码"),n.abrupt("return",!1);case 13:if(11==o.cellphone.length){n.next=16;break}return r.$api.msg("手机号长度有误"),n.abrupt("return",!1);case 16:if(s=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/,s.test(o.cellphone)){n.next=20;break}return r.$api.msg("手机号有误"),n.abrupt("return",!1);case 20:if(o.code){n.next=23;break}return r.$api.msg("验证码必须"),n.abrupt("return",!1);case 23:if(5==o.code.length){n.next=26;break}return r.$api.msg("验证码长度有误"),n.abrupt("return",!1);case 26:if(o.password){n.next=29;break}return r.$api.msg("密码必须"),n.abrupt("return",!1);case 29:if(o.rPassword){n.next=32;break}return r.$api.msg("重复密码必须"),n.abrupt("return",!1);case 32:if(o.password==o.rPassword){n.next=35;break}return r.$api.msg("重复密码和密码不一致"),n.abrupt("return",!1);case 35:a.default.register(o,(function(t){u.$api.msg("注册成功"),e.redirectTo({url:"/pages/public/login"})}));case 36:case"end":return n.stop()}}),i)})))()},tabSelect:function(e){this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1)},toLogin:function(){e.redirectTo({url:"/pages/public/login"})},goNavigator:function(t){e.navigateTo({url:"/pages/article/details?list=0&id=".concat(t)})},cellphoneInput:function(e){var t=this.ruleForm;t.cellphone=e.detail.value},codeInput:function(e){var t=this.ruleForm;t.code=e.detail.value},passwordInput:function(e){var t=this.ruleForm;t.password=e.detail.value},rPasswordInput:function(e){var t=this.ruleForm;t.rPassword=e.detail.value},getCode:function(){var e=this;if(!this.ruleForm.cellphone)return this.$api.msg("请填写手机号码"),!1;if(11!=this.ruleForm.cellphone.length)return this.$api.msg("手机号长度有误"),!1;var t=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;if(!t.test(this.ruleForm.cellphone))return this.$api.msg("手机号有误"),!1;a.default.cellphoneCode(this.ruleForm,(function(t){e.seconds=60,e.codename="",e.unit="s",e.disabled=!0,e.timer=setInterval((function(){e.seconds=e.seconds-1,0==e.seconds&&(clearInterval(e.timer),e.seconds="",e.codename="获取验证码",e.unit="",e.disabled=!1)}),1e3),t.code&&(e.ruleForm.code=t.code.toString())}))},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null}})};t.default=p}).call(this,r("543d")["default"])},8465:function(e,t,r){"use strict";(function(e){r("ebeb");n(r("66fd"));var t=n(r("bb0a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"90a4":function(e,t,r){"use strict";var n=r("e574"),a=r.n(n);a.a},a930:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.modalName=""})},i=[]},bb0a:function(e,t,r){"use strict";r.r(t);var n=r("a930"),a=r("ebab");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);r("90a4");var o,u=r("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=s.exports},e574:function(e,t,r){},ebab:function(e,t,r){"use strict";r.r(t);var n=r("7f68"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a}},[["8465","common/runtime","common/vendor"]]]);