(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/system/system_detail"],{"1db9":function(t,e,n){"use strict";n.r(e);var o=n("ae8b"),u=n("6906");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);var c=n("2877"),i=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);i.options.__file="system_detail.vue",e["default"]=i.exports},6906:function(t,e,n){"use strict";n.r(e);var o=n("dd65"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a},ae8b:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{},[t._v("系统消息详情")])},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},bc2e:function(t,e,n){"use strict";n("c16c");var o=a(n("b0ce")),u=a(n("1db9"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(u.default))},dd65:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{dataList:{}}},methods:{name:function(){}},onLoad:function(e){console.log(e);var n=t.getStorageSync("user_info").token,o=3,u=e.id;t.request({url:"http://bus.liebianzhe.com/api/user/act_msg",method:"POST",data:{token:n,type:o,id:u},success:function(e){console.log(e),1==e.data.code||t.showToast({title:e.data.msg,icon:"noen"})},fail:function(){}})}};e.default=n}).call(this,n("649d")["default"])}},[["bc2e","common/runtime","common/vendor"]]]);