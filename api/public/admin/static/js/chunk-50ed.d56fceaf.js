(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-50ed"],{"2ck9":function(t,n,e){"use strict";e.r(n);var o=e("JMdz"),i=e("Fp50");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("oSLR"),e("xvr+");var r=e("KHd+"),a=Object(r.a)(i.default,o.a,o.b,!1,null,"65479779",null);a.options.__file="index.vue",n.default=a.exports},"7hVn":function(t,n,e){},Fp50:function(t,n,e){"use strict";e.r(n);var o=e("ifWo"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n.default=i.a},JMdz:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))]),t._v(" "),e("lang-select",{staticClass:"set-language"})],1),t._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),e("el-input",{attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),e("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.handleLogin(n):null}},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),e("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t._v(" "),e("el-form-item",[e("Verify",{attrs:{type:3,"bar-size":{width:"100%",height:"40px"},"show-button":!1},on:{success:function(n){t.verification=1}}})],1),t._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v(t._s(t.$t("login.logIn")))]),t._v(" "),e("div",{staticStyle:{position:"relative"}})],1),t._v(" "),e("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog},on:{"update:visible":function(n){t.showDialog=n}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("social-sign")],1)],1)},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},LTnJ:function(t,n,e){},OT4V:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}}},ctUK:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(n){t.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),e("div",{staticClass:"sign-btn",on:{click:function(n){t.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},i3Cl:function(t,n,e){"use strict";e.r(n);var o=e("ctUK"),i=e("j5gV");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("nqxs");var r=e("KHd+"),a=Object(r.a)(i.default,o.a,o.b,!1,null,"4bcfaf4d",null);a.options.__file="socialsignin.vue",n.default=a.exports},ifWo:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(e("ETGp")),i=a(e("i3Cl")),s=e("X4fA"),r=a(e("yTBe"));function a(t){return t&&t.__esModule?t:{default:t}}n.default={name:"Login",components:{LangSelect:o.default,SocialSign:i.default,Verify:r.default},data:function(){var t=this;return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,e,o){e?o():o(new Error(t.$t("errorMsg.logoUserNmae")))}}],password:[{required:!0,trigger:"blur",validator:function(n,e,o){e.length<4?o(new Error(t.$t("errorMsg.logoPasswordLength"))):o()}}]},verification:!1,passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(n){return t.verification?n?((0,s.removeToken)(),(0,s.removeToken)("access_token"),(0,s.removeToken)("expires_in"),(0,s.removeToken)("refresh_token"),(0,s.removeToken)("token_type"),t.loading=!0,void t.$store.dispatch("LoginByUsername",t.loginForm).then(function(){t.$router.push({path:t.redirect||"/"})}).catch(function(){t.loading=!1})):(console.log("error submit!!"),!1):(t.$message.error("请完成验证!"),!1)})},afterQRScan:function(){}}}},j5gV:function(t,n,e){"use strict";e.r(n);var o=e("OT4V"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n.default=i.a},nSc2:function(t,n,e){},nqxs:function(t,n,e){"use strict";var o=e("nSc2");e.n(o).a},oSLR:function(t,n,e){"use strict";var o=e("7hVn");e.n(o).a},"xvr+":function(t,n,e){"use strict";var o=e("LTnJ");e.n(o).a}}]);