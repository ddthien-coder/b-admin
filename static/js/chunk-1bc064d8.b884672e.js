(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bc064d8"],{9762:function(e,t,n){},aaef:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.hintShow?n("el-alert",{attrs:{title:"For picture bed configuration and usage",type:"warning","show-icon":""}}):e._e(),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-input",{staticStyle:{"min-width":"500px"},attrs:{placeholder:"Please enter the token to initialize",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchUser(t)}},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchUser},slot:"append"},[e._v("Search")])],1)],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("span",{staticClass:"middle"},[e._v("Current user: ")]),n("el-avatar",{attrs:{size:50,src:e.userInfo.avatar_url}},[e._v("User")]),n("span",{staticClass:"middle"},[e._v(e._s(e.userInfo.login))])],1)],1),n("el-row",[n("el-col",{attrs:{span:8}},[n("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-check",disabled:e.isSave},on:{click:function(t){return e.saveUser(!0)}}},[e._v("Save")]),n("el-button",{attrs:{type:"info",size:"medium",icon:"el-icon-close"},on:{click:function(t){return e.saveUser(!1)}}},[e._v("Cancel")])],1)],1)],1)},o=[],a=(n("e9c4"),n("c9f7")),s={name:"Setting",data:function(){return{token:"",userInfo:{login:"Not configured"},isSave:!0,hintShow:!1}},created:function(){this.token=localStorage.getItem("githubToken");var e=localStorage.getItem("githubUserInfo");this.token&&e?(this.userInfo=JSON.parse(e),this.isSave=!1):this.userInfo={login:"Not configured"};var t=window.localStorage.getItem("user")||"{}",n=JSON.parse(t);"{}"!==t&&"ROLE_admin"!==n.role&&(this.hintShow=!0)},methods:{searchUser:function(){var e=this;Object(a["c"])(this.token).then((function(t){e.userInfo=t,e.isSave=!1}))},saveUser:function(e){e?(localStorage.setItem("githubToken",this.token),localStorage.setItem("githubUserInfo",JSON.stringify(this.userInfo)),this.msgSuccess("Saved successfully")):(localStorage.removeItem("githubToken"),localStorage.removeItem("githubUserInfo"),this.msgSuccess("Cleared successfully"))}}},c=s,i=(n("f024"),n("2877")),u=Object(i["a"])(c,r,o,!1,null,null,null);t["default"]=u.exports},c9f7:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return h}));n("ac1f"),n("00b4"),n("d3b7"),n("99af");var r=n("bc3a"),o=n.n(r),a=n("323e"),s=n.n(a),c=(n("a5d8"),n("5c96")),i=o.a.create({baseURL:"https://api.github.com",timeout:1e4});function u(e){return i({url:"/user",method:"GET",headers:{Authorization:"token ".concat(e)}})}function l(e){return i({url:"/users/".concat(e,"/repos"),method:"GET"})}function f(e,t,n){return i({url:"/repos/".concat(e,"/").concat(t,"/contents").concat(n),method:"GET"})}function d(e,t,n,r){return i({url:"/repos/".concat(e,"/").concat(t,"/contents/").concat(n),method:"DELETE",data:r})}function h(e,t,n,r,o){return i({url:"/repos/".concat(e,"/").concat(t,"/contents").concat(n,"/").concat(r),method:"PUT",data:o})}i.interceptors.request.use((function(e){s.a.start(),/get/i.test(e.method)&&(e.params=e.params||{},e.params.t=(new Date).getTime());var t=localStorage.getItem("githubToken");return t&&(e.headers.Authorization="token ".concat(t)),e}),(function(e){return console.info(e),Promise.reject(e)})),i.interceptors.response.use((function(e){return s.a.done(),e.data}),(function(e){return console.info(e),c["Message"].error(e.message),Promise.reject(e)}))},e9c4:function(e,t,n){var r=n("23e7"),o=n("d066"),a=n("d039"),s=o("JSON","stringify"),c=/[\uD800-\uDFFF]/g,i=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,l=function(e,t,n){var r=n.charAt(t-1),o=n.charAt(t+1);return i.test(e)&&!u.test(o)||u.test(e)&&!i.test(r)?"\\u"+e.charCodeAt(0).toString(16):e},f=a((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&r({target:"JSON",stat:!0,forced:f},{stringify:function(e,t,n){var r=s.apply(null,arguments);return"string"==typeof r?r.replace(c,l):r}})},f024:function(e,t,n){"use strict";n("9762")}}]);