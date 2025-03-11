webpackJsonp([15],{NQBt:function(e,t){},TbL4:function(e,t){},YKHP:function(e,t){},eO9F:function(e,t){},nbip:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("GF3t"),n=a("iq2N"),i=a("DQwu"),r=a("KlhY"),o=a("DmSG"),c=a("0xDb"),s=[{label:"学历证书",value:"1"},{label:"职业资格证书",value:"2"},{label:"语言能力证书",value:"3"},{label:"技术认证证书",value:"4"},{label:"培训结业证书",value:"5"},{label:"荣誉证书",value:"6"},{label:"竞赛获奖证书",value:"7"},{label:"安全认证证书",value:"8"},{label:"健康证书",value:"9"},{label:"其他证书",value:"10"}],d=s.reduce(function(e,t){return e[t.value]=t,e},{}),m=[{label:"考试证书",value:"1"},{label:"培训证书",value:"2"}],u=m.reduce(function(e,t){return e[t.value]=t,e},{}),f=[{label:"永久有效",value:"1",type:"success"},{label:"到期失效",value:"2",type:"error"}],v=f.reduce(function(e,t){return e[t.value]=t,e},{}),p=[{label:"年",value:"year"},{label:"月",value:"month"},{label:"日",value:"day"}],b=p.reduce(function(e,t){return e[t.value]=t,e},{}),h=a("Kq5H"),y={components:{UploadImg:a("6a00").a},props:{name:{type:String,required:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{certCateArr:s,certTypeArr:m,validityArr:f,certCateObj:d,certTypeObj:u,validityObj:v,yearMonthDayArr:p,yearMonthDayObj:b,loading:!1,formData:{id:"",name:"",certCate:"",certType:1,validity:1,certImg:"",certDate:1,timeVal:1,timeUnit:"year",endTime:""},rules:{name:[o.a.required()]},fileList:[]}},inject:["actionMenu"],computed:{activeItem:function(){return this.data[0]},formDisabled:function(){return["viewDetail"].includes(this.name)}},mounted:function(){["edit","viewDetail"].includes(this.name)&&this.getData()},methods:{getData:function(){var e=this;this.loading=!0,Object(h.b)(this.activeItem.id).then(function(t){for(var a in e.formData)e.formData[a]=t.data[a]}).finally(function(){e.loading=!1})},onSubmit:function(){var e=this;this.$refs.formRef.validate(function(t){if(t){e.loading=!0;var a=Object(c.c)(e.formData);("edit"===e.name?h.e:h.a)(a).then(function(t){e.$message.success("模拟"+e.actionMenu.titleObj[e.name]+"成功"),e.onClose(),e.$emit("call","refresh",e.formData)}).finally(function(){e.loading=!1,e.submitLoading=!1})}})},onClose:function(){this.$emit("close")}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dialog-wrap"},[a("div",{staticClass:"dialog-wrap-content"},[a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.rules,"label-width":"120px",disabled:e.formDisabled}},[a("el-form-item",{attrs:{label:"证书名称",prop:"name"}},[e.formDisabled?a("span",[e._v(e._s(e.formData.name||"-"))]):a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"==typeof t?t.trim():t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"certCate",label:"证书分类"}},[e.formDisabled?a("span",[e._v(e._s(e.certCateObj[e.formData.certCate].label||"-"))]):a("el-select",{model:{value:e.formData.certCate,callback:function(t){e.$set(e.formData,"certCate",t)},expression:"formData.certCate"}},e._l(e.certCateArr,function(e){var t=e.value,l=e.label;return a("el-option",{key:l+t,attrs:{label:l,value:+t}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"certType",label:"证书类型"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          证书类型\n          "),a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[e._v("\n                1.在考试中可以关联考试证书，在学习地图，新员工培训中可以关联培训证书\n                "),a("br"),e._v("\n                2.证书类型在创建证书后不支持修改\n              ")])]),e._v(" "),a("span",[a("i",{staticClass:"el-icon-info"})])])],1),e._v(" "),e.formDisabled?a("span",[e._v(e._s(e.certTypeObj[e.formData.certType].label||"-"))]):a("el-radio-group",{model:{value:e.formData.certType,callback:function(t){e.$set(e.formData,"certType",t)},expression:"formData.certType"}},e._l(e.certTypeArr,function(t){var l=t.value,n=t.label;return a("el-radio",{key:n+l,attrs:{label:+l}},[e._v("\n            "+e._s(n)+"\n          ")])}),1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"validity",label:"有效期"}},[e.formDisabled?a("span",[a("el-badge",{attrs:{"is-dot":"",type:e.validityObj[e.formData.validity].type}}),e._v("\n          "+e._s(e.validityObj[e.formData.validity].label||"-")+"\n        ")],1):a("el-radio-group",{model:{value:e.formData.validity,callback:function(t){e.$set(e.formData,"validity",t)},expression:"formData.validity"}},e._l(e.validityArr,function(t){var l=t.value,n=t.label;return a("el-radio",{key:n+l,attrs:{label:+l}},[e._v("\n            "+e._s(n)+"\n          ")])}),1),e._v(" "),e.formDisabled?a("div",[1===e.formData.certDate?a("span",[e._v("\n            "+e._s("自获证日起 "+e.formData.timeVal+e.yearMonthDayObj[e.formData.timeUnit].label+" 内有效")+"\n          ")]):e._e(),e._v(" "),2===e.formData.certDate?a("span",[e._v("\n            "+e._s("有效期至 "+e.formData.endTime)+"\n          ")]):e._e()]):e._e()],1),e._v(" "),2===e.formData.validity?a("el-form-item",{attrs:{label:""}},[e.formDisabled?e._e():a("div",{staticClass:"card"},[a("el-radio-group",{model:{value:e.formData.certDate,callback:function(t){e.$set(e.formData,"certDate",t)},expression:"formData.certDate"}},[a("el-radio",{staticClass:"mb-5",attrs:{label:1}},[e._v("\n              自获证日起\n              "),a("el-input-number",{staticClass:"ml-4 mr-4",staticStyle:{width:"80px"},attrs:{min:1,max:10,"controls-position":"right"},model:{value:e.formData.timeVal,callback:function(t){e.$set(e.formData,"timeVal",t)},expression:"formData.timeVal"}}),e._v(" "),a("el-select",{staticClass:"mr-2",staticStyle:{width:"90px"},attrs:{placeholder:"请选择",clearable:!1},model:{value:e.formData.timeUnit,callback:function(t){e.$set(e.formData,"timeUnit",t)},expression:"formData.timeUnit"}},e._l(e.yearMonthDayArr,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v("\n              内有效\n            ")],1),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("\n              有效期至\n              "),a("el-date-picker",{staticClass:"ml-8",staticStyle:{width:"188px"},attrs:{type:"month","value-format":"yyyy-MM",placeholder:"选择日期"},model:{value:e.formData.endTime,callback:function(t){e.$set(e.formData,"endTime",t)},expression:"formData.endTime"}})],1)],1)],1)]):e._e()],1)],1),e._v(" "),e.formDisabled?e._e():a("div",{staticClass:"dialog-footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.onClose}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var D=a("VU/8")(y,_,!1,function(e){a("eO9F")},"data-v-59dc897e",null).exports,g=a("//Fk"),C=a.n(g),w={components:{batchTemplate:a("XzX/").a},props:{name:{type:String,required:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,checked:!1}},inject:["actionMenu"],computed:{availableArr:function(){var e=[];return this.data.forEach(function(t,a){t.hideResume||e.push(t)}),e}},methods:{onSubmit:function(){var e=this;this.loading=!0;var t=this.availableArr.map(function(e){return Object(h.d)(e.id)});C.a.all(t).then(function(a){t.length===a.length&&(e.$message.success("模拟"+e.actionMenu.titleObj[e.name]+"成功"),e.onClose(),e.$emit("call","refresh"))}).finally(function(){e.loading=!1})},onClose:function(){this.$emit("close")}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dialog-wrap"},[a("el-alert",{attrs:{closable:!1,type:"warning"}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("p",[e._v("删除证书后将无法恢复，请谨慎操作。")])])]),e._v(" "),a("batch-template",{attrs:{data:e.data,"available-data":e.availableArr,"view-key":"name","post-key":"id"}}),e._v(" "),a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("我已知晓上述风险")]),e._v(" "),a("div",{staticClass:"dialog-footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.onClose}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{disabled:!e.checked||!e.availableArr.length,type:"primary"},on:{click:e.onSubmit}},[e._v("\n      确定\n    ")])],1)],1)},staticRenderFns:[]},T={components:{create:D,edit:D,remove:a("VU/8")(w,k,!1,null,null,null).exports,viewDetail:D},props:{selectItem:{type:Array,default:function(){return[]}}},mixins:[r.a],inject:["tableList"],data:function(){return{titleObj:{create:"创建证书",edit:"编辑证书",remove:"删除证书",viewDetail:"查看证书"},drawerAction:[]}},computed:{activeItem:function(){return this.selectItem[0]}},created:function(){},methods:{clickHandler:function(e){this.clickDrop(e)},confirmCall:function(e,t){"close"===e?this.modalClose():"refresh"===e&&this.$emit("call",e,t)},drawerConfirmCall:function(e,t){this.drawerClose()}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"action-wrap"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.clickHandler("create")}}},[e._v("\n    "+e._s(e.titleObj.create)+"\n  ")]),e._v(" "),a("el-dialog",{attrs:{title:e.titleObj[e.modalName],visible:e.modalShow,width:["remove","viewDetail"].includes(e.modalName)?e.modalWidth:"600px",appendToBody:"","destroy-on-close":""},on:{"update:visible":function(t){e.modalShow=t},close:e.modalClose}},[a("transition",{attrs:{name:"el-fade-in-linear"}},[a(e.modalName,{tag:"component",attrs:{name:e.modalName,data:e.selectItem},on:{close:e.modalClose,call:e.confirmCall}})],1)],1),e._v(" "),a("el-drawer",{attrs:{title:e.titleObj[e.drawerName],visible:e.drawerShow,size:e.drawerWidth,appendToBody:""},on:{"update:visible":function(t){e.drawerShow=t},close:e.drawerClose}},[a("transition",{attrs:{name:"el-fade-in-linear"}},[a(e.drawerName,{tag:"component",attrs:{name:e.drawerName},on:{close:e.drawerClose,call:e.drawerConfirmCall}})],1)],1)],1)},staticRenderFns:[]};var N=a("VU/8")(T,x,!1,function(e){a("YKHP")},null,null).exports,j={name:"CertificateList",mixins:[a("5PZE").a],components:{TableTopBar:n.a,TablePage:i.a,ActionMenu:N},data:function(){return{moduleName:"certificate-management-list",validityObj:v,searchKeyList:[{key:"name",label:"证书名称",master:!0}],columns:[{label:"证书名称",prop:"name",columnProps:{}},{label:"证书分类",prop:"certCateName",columnProps:{minWidth:80}},{label:"证书类型",prop:"certTypeName",columnProps:{minWidth:80}},{label:"有效期",prop:"validityName",columnProps:{minWidth:80}},{label:"操作",prop:"operation",customRender:!0,columnProps:{width:200,align:"center",fixed:"right"}}],defaultCheckedRows:[],pageSize:20}},created:function(){},methods:{getList:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.tableLoading=t;var a=this.getRequestParams("page","limit");Object(h.c)(a).then(function(t){e.tableData=t.data.rows||[],e.total=t.data.total||0,e.tableData.forEach(function(e){e.certCateName=d[e.certCate].label,e.certTypeName=u[e.certType].label,e.validityName=v[e.validity].label})}).finally(function(){setTimeout(function(){e.tableLoading=!1},1e3)})},onClickRow:function(e,t){var a=this.$refs.actionMenu;switch(e){case"edit":case"remove":case"viewDetail":this.selectItem=[t],a.clickHandler(e)}}}},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("TableTopBar",{attrs:{moduleName:e.moduleName,tableTitle:e.tableTitle,columns:e.columns,searchKeyList:e.searchKeyList,selectItem:e.selectItem},on:{search:e.onSearch,refresh:e.onRefreshList},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.size,n=t.dynamicColumns;return[a("TablePage",{ref:"tablePage",attrs:{slot:"content",moduleName:e.moduleName,loading:e.tableLoading,data:e.tableData,columns:n,size:l,height:e.height,currentKey:"id",selectType:"single",hasSelection:e.hasSelection,selectItem:e.selectItem,defaultCheckedRows:e.defaultCheckedRows,pagination:e.paginationProps},on:{"on-select":e.handleSelect,pagination:e.handlePaginationChange},slot:"content",scopedSlots:e._u([{key:"cell-validityName",fn:function(t){var l=t.row;return[a("el-badge",{attrs:{"is-dot":"",type:e.validityObj[l.validity].type}}),e._v("\n        "+e._s(l.validityName)+"\n      ")]}},{key:"column-operation",fn:function(t){return[a("el-table-column",e._b({attrs:{prop:"operation",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-button-group",{staticClass:"text-buttons-with-divider"},[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.onClickRow("edit",l)}}},[e._v("\n                编辑\n              ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.onClickRow("remove",l)}}},[e._v("\n                删除\n              ")]),e._v(" "),a("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(t){return e.onClickRow("viewDetail",l)}}},[e._v("\n                查看\n              ")])],1)]}}],null,!0)},"el-table-column",t,!1))]}}],null,!0)})]}}])},[e.hiddenAction?e._e():a("template",{slot:"action"},[a("ActionMenu",{ref:"actionMenu",attrs:{moduleName:e.moduleName,selectItem:e.selectItem},on:{call:e.actionHandler}})],1)],2)},staticRenderFns:[]};var S=a("VU/8")(j,O,!1,function(e){a("NQBt")},"data-v-f714984c",null).exports,$={name:"certificate-management-list",components:{ContentHeader:l.a,TableList:S},data:function(){return{defaultCheckedRows:[]}}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-layout-wrap is-table"},[t("ContentHeader",{attrs:{backIcon:""}}),this._v(" "),t("TableList")],1)},staticRenderFns:[]};var R=a("VU/8")($,A,!1,function(e){a("TbL4")},"data-v-06ca5c78",null);t.default=R.exports}});