webpackJsonp([41],{"4X2G":function(t,e){},"X++T":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("c/Tr"),l=a.n(n),s=["全国计算机等级考试证书","大学英语四级证书","大学英语六级证书","普通话水平测试等级证书","教师资格证书","注册会计师证书","法律职业资格证书","导游资格证书","人力资源管理师证书","心理咨询师证书"],i={components:{CountPopover:a("2cJ2").a},data:function(){return{filterData:{single:null,text:null,border:null,multiple:[1],certName:null,value2:null,round:null,sort:null},sortOpts:[{label:"综合排序",value:1},{label:"价格从低到高",value:2},{label:"价格从高到低",value:3},{label:"销量从高到低",value:4},{label:"评价从高到低",value:5}],options1:l()({length:8}).map(function(t,e){return{label:"选项"+(e+1),value:e+1,disabled:2===e}}),options2:l()({length:20}).map(function(t,e){return{label:"选项"+(e+1),value:e+1,disabled:2===e}}),certificates:s,certificates2:s}},methods:{clickHandler:function(t,e){this.$message.info("点击了 “"+t+"” ")},closeHandler:function(t,e){var a=this;this.$confirm("确实删除 “"+t+"” 吗","提示").then(function(){a.$message.success("删除 “"+t+"” 成功");var e=a.certificates2.findIndex(function(e){return e===t});a.certificates.splice(e,1)})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-layout-wrap"},[a("el-card",{attrs:{shadow:"never"},scopedSlots:t._u([{key:"header",fn:function(){return[a("el-row",{attrs:{type:"flex",align:"middle",justify:"space-between"}},[a("span",[t._v(t._s(t.$route.meta.title))])])]},proxy:!0}])},[t._v(" "),a("p",{staticClass:"mb-2"},[t._v("基本使用")]),t._v(" "),a("CountPopover",{attrs:{data:t.certificates}}),t._v(" "),a("p",{staticClass:"my-2"},[t._v("显示3条")]),t._v(" "),a("CountPopover",{attrs:{limit:3,data:t.certificates}}),t._v(" "),a("p",{staticClass:"my-2"},[t._v("click 触发")]),t._v(" "),a("CountPopover",{attrs:{limit:3,data:t.certificates,trigger:"click"}}),t._v(" "),a("p",{staticClass:"my-2"},[t._v("点击事件")]),t._v(" "),a("CountPopover",{attrs:{limit:3,data:t.certificates},on:{click:t.clickHandler}}),t._v(" "),a("p",{staticClass:"my-2"},[t._v("可移除")]),t._v(" "),a("CountPopover",{attrs:{limit:3,data:t.certificates2,closable:""},on:{close:t.closeHandler}}),t._v(" "),a("p",{staticClass:"my-2"},[t._v("自定义内容")]),t._v(" "),a("CountPopover",{attrs:{data:t.certificates,limit:1},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.showList;return t._l(n,function(e){return a("el-link",{key:e,staticClass:"cursor-pointer",staticStyle:{width:"auto"},attrs:{"disable-transitions":!0}},[t._v("\n          "+t._s(e)+"\n        ")])})}},{key:"popover-content",fn:function(e){var n=e.value;return a("el-link",{},[t._v("\n        "+t._s(n)+"\n      ")])}}])})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(i,r,!1,function(t){a("4X2G")},null,null);e.default=c.exports}});