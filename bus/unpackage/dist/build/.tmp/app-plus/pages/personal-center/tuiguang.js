(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal-center/tuiguang"],{1822:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},computed:{Screen_width:function(){return t.getSystemInfoSync().windowWidth},Screen_height:function(){return t.getSystemInfoSync().windowHeight}},onLoad:function(){wx.showShareMenu({withShareTicket:!0})},methods:{onShareAppMessage:function(){return{title:"简直走别拐弯",path:"/pages/personal-center/tuiguang",success:function(t){console.log(t.shareTickets[0]),wx.getShareInfo({shareTicket:t.shareTickets[0],success:function(t){},fail:function(t){console.log(t)},complete:function(t){console.log(t)}})},fail:function(t){console.log(t)}}}}};e.default=n}).call(this,n("649d")["default"])},"44e5":function(t,e,n){"use strict";var c=n("bad4"),a=n.n(c);a.a},"53ce":function(t,e,n){"use strict";n.r(e);var c=n("1822"),a=n.n(c);for(var o in c)"default"!==o&&function(t){n.d(e,t,function(){return c[t]})}(o);e["default"]=a.a},6013:function(t,e,n){t.exports=n.p+"static/img/出行有优惠分享能赚钱.caedd884.png"},"73ba":function(t,e,n){"use strict";var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",style:{width:t.Screen_width+"px",height:t.Screen_height+"px"}},[t._m(0),n("div",{staticClass:"but"},[n("button",{attrs:{"open-type":"share",eventid:"a96d7302-0"},on:{tap:t.onShareAppMessage}},[t._v("立即分享给好友")])],1)])},a=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"img"},[c("img",{attrs:{src:n("6013"),alt:""}})])}];n.d(e,"a",function(){return c}),n.d(e,"b",function(){return a})},"8cba":function(t,e,n){"use strict";n.r(e);var c=n("73ba"),a=n("53ce");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("44e5");var u=n("2877"),i=Object(u["a"])(a["default"],c["a"],c["b"],!1,null,null,null);i.options.__file="tuiguang.vue",e["default"]=i.exports},bad4:function(t,e,n){},e007:function(t,e,n){"use strict";n("c16c");var c=o(n("b0ce")),a=o(n("8cba"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,c.default)(a.default))}},[["e007","common/runtime","common/vendor"]]]);