webpackJsonp([25],{"3wMg":function(e,t){},jZc5:function(e,t){},pqEH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("GF3t"),l=n("DQwu"),o=n("EHSG"),s={mixins:[n("5PZE").a],components:{TablePage:l.a},data:function(){return{moduleName:"tree-list",validityObj:o.g,hasSelection:!1,columns:[{label:"职位名称",prop:"name",columnProps:{}},{label:"职位编码",prop:"code"},{label:"状态",prop:"flag",columnProps:{minWidth:80}}]}},created:function(){},methods:{getList:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.tableLoading=t,n.e(45).then(n.bind(null,"xg+I")).then(function(t){e.tableData=t.zpData.config||[]}).finally(function(){setTimeout(function(){e.tableLoading=!1},1e3)})}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TablePage",{ref:"tablePage",attrs:{slot:"content",moduleName:e.moduleName,loading:e.tableLoading,data:e.tableData,columns:e.columns,height:e.height,hasSelection:e.hasSelection,selectItem:e.selectItem,"row-key":"code","tree-props":{children:"subLevelModelList",hasChildren:"hasChildren"}},slot:"content",scopedSlots:e._u([{key:"cell-flag",fn:function(t){var a=t.row;return[n("el-tag",{attrs:{type:1==a.flag?"success":"info"}},[e._v("\n      "+e._s(1==a.flag?"启用":"禁用")+"\n    ")])]}}])})},staticRenderFns:[]};var c=n("VU/8")(s,i,!1,function(e){n("jZc5")},"data-v-5a3bffe6",null).exports,r={name:"tree-list",components:{ContentHeader:a.a,TableList:c},data:function(){return{defaultCheckedRows:[]}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-layout-wrap is-table"},[t("ContentHeader",{attrs:{backIcon:""}}),this._v(" "),t("TableList")],1)},staticRenderFns:[]};var d=n("VU/8")(r,u,!1,function(e){n("3wMg")},"data-v-ad20f84a",null);t.default=d.exports}});