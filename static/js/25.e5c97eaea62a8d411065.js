webpackJsonp([25],{BpWw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("SClT"),l=a("iBN+"),o=a("Xxa5"),s=a.n(o),n=a("exGp"),i=a.n(n),m={props:{zIndex:{type:[Number,String],default:9},align:{type:String,default:"right",validator:function(e){return["left","right","center"].includes(e)}},placeholder:{type:Boolean,default:!0}},data:function(){return{height:"auto"}},mounted:function(){this.setActionBarH()},methods:{setActionBarH:function(){var e,t=this;this.placeholder&&(e=i()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:t.height=t.$refs.fixedBoxRef.getBoundingClientRect().height+"px";case 4:case"end":return e.stop()}},e,t)})),function(){return e.apply(this,arguments)})()}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"placeholder",style:{height:this.height}},[t("div",{ref:"fixedBoxRef",staticClass:"actionBar",style:{"z-index":this.zIndex}},[t("div",{style:{"text-align":this.align}},[this._t("default")],2)])])},staticRenderFns:[]};var p=a("VU/8")(m,c,!1,function(e){a("wKeK")},"data-v-e2e82bfa",null).exports,u=a("oqQY"),f=a.n(u),d=a("+4Zy"),v=a("bnSG"),h=a("9EK1"),y=a("DmSG"),b=a("TTzd"),D={mixins:[v.b,v.a],components:{CardTitle:l.a,ActionBar:p},data:function(){return{jobStatusMap:r.i,identitMap:r.h,SEX_MAP:r.a,provinceAndCityData:h.a,title:this.$route.meta.title,formDisabled:!1,submitLoading:!1,formData:{name:"",applyStatus:"",gender:"-1",nameShowType:"",birthday:"",age:null,phone:"",email:"",address:"",hideResume:!1,formItems:[]},rules:{name:[y.a.required()],applyStatus:[y.a.required()],nameShowType:[y.a.required()],birthday:[y.a.required()],phone:[y.a.required(),y.a.mobilePhone],email:[y.a.email]},requireRules:y.a.required(),getNewFormItem:function(){return{projectName:"",roleName:"",projectUrl:"",projectDate:""}},formItemRules:[],formRules:y.a,layout:"single-line",pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},watch:{"formData.birthday":{deep:!0,immediate:!0,handler:function(e){this.formData.age=e?f()(new Date).diff(e,"year"):null}}},created:function(){},methods:{onSubmit:function(){var e=this;this.$refs.formRef.validate(function(t){if(!t)return e.focusFirstError(e.$el),!1;e.submitLoading=!0;var a=Object(d.a)(e.formData);(e.formData.id?b.d:b.a)(a).then(function(){e.$message.success("模拟保存成功"),e.onCancel()}).finally(function(){e.submitLoading=!1})})},onCancel:function(){this.$refs.formRef.resetFields()}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content-layout-wrap"},[a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.rules,"label-position":"right","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:e.title},slot:"header"}),e._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[e._v("普通表单")]),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"==typeof t?t.trim():t)},expression:"formData.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"当前求职状态",prop:"applyStatus"}},[a("el-select",{model:{value:e.formData.applyStatus,callback:function(t){e.$set(e.formData,"applyStatus",t)},expression:"formData.applyStatus"}},e._l(e.jobStatusMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"gender",label:"性别"}},[a("el-radio-group",{model:{value:e.formData.gender,callback:function(t){e.$set(e.formData,"gender",t)},expression:"formData.gender"}},e._l(e.SEX_MAP.entries(),function(t){var r=t[0],l=t[1];return a("el-radio",{key:l+r,attrs:{label:r}},[e._v("\n                "+e._s(l)+"\n              ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"nameShowType",label:"我的牛人身份"}},[a("el-select",{model:{value:e.formData.nameShowType,callback:function(t){e.$set(e.formData,"nameShowType",t)},expression:"formData.nameShowType"}},e._l(e.identitMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:+t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出生年月",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"month","value-format":"yyyy-MM-dd",placeholder:"请选择日期","picker-options":e.pickerOptions},model:{value:e.formData.birthday,callback:function(t){e.$set(e.formData,"birthday",t)},expression:"formData.birthday"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[null!==e.formData.age?a("span",[e._v(e._s(e.formData.age)+" 岁")]):a("span",{staticClass:"stl-readonly"},[e._v("选择出生年月自动填写")])])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"==typeof t?t.trim():t)},expression:"formData.phone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email","string"==typeof t?t.trim():t)},expression:"formData.email"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-cascader",{attrs:{options:e.provinceAndCityData,props:{expandTrigger:"hover"}},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"隐藏简历",prop:"hideResume"}},[a("StlReSwitch",{attrs:{width:60,activeText:"公开",inactiveText:"隐藏"},model:{value:e.formData.hideResume,callback:function(t){e.$set(e.formData,"hideResume",t)},expression:"formData.hideResume"}})],1)],1),e._v(" "),a("el-divider",{attrs:{"content-position":"left"}},[e._v("动态表单")]),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-radio-group",{model:{value:e.layout,callback:function(t){e.layout=t},expression:"layout"}},[a("el-radio-button",{attrs:{label:"single-line"}},[e._v("单行展示")]),e._v(" "),a("el-radio-button",{attrs:{label:"multi-line"}},[e._v("多行展示")])],1)],1),e._v(" "),"single-line"===e.layout?a("el-col",{staticClass:"card",attrs:{span:24}},e._l(e.formData.formItems,function(t,r){return a("el-form-item",{key:r+"",staticClass:"dynamic-item",attrs:{label:r>0?"":"项目",required:!0}},[a("el-row",{attrs:{type:"flex",gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"formItems."+r+".projectName",rules:[e.formRules.required()].concat(e.formItemRules)}},[a("el-input",{attrs:{placeholder:"名称"},model:{value:t.projectName,callback:function(a){e.$set(t,"projectName","string"==typeof a?a.trim():a)},expression:"item.projectName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{prop:"formItems."+r+".roleName",rules:[e.formRules.required()]}},[a("el-input",{attrs:{placeholder:"角色"},model:{value:t.roleName,callback:function(a){e.$set(t,"roleName","string"==typeof a?a.trim():a)},expression:"item.roleName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"formItems."+r+".projectUrl",rules:e.formItemRules}},[a("el-input",{attrs:{placeholder:"链接"},model:{value:t.projectUrl,callback:function(a){e.$set(t,"projectUrl","string"==typeof a?a.trim():a)},expression:"item.projectUrl"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"formItems."+r+".projectDate",rules:e.formItemRules}},[a("el-date-picker",{attrs:{type:"monthrange","value-format":"yyyy-MM","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.projectDate,callback:function(a){e.$set(t,"projectDate",a)},expression:"item.projectDate"}})],1)],1),e._v(" "),e.formData.formItems.length>1?a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{"label-width":"0px",label:""}},[a("span",{staticClass:"stl-hover"},[e.formData.formItems.length>1?a("i",{staticClass:"el-icon-close",on:{click:function(a){return a.preventDefault(),e.removeFormItem(t)}}}):e._e()])])],1):e._e()],1)],1)}),1):e._e(),e._v(" "),"multi-line"===e.layout?a("el-col",{attrs:{span:24}},e._l(e.formData.formItems,function(t,r){return a("div",{key:r+"projectName",staticClass:"card"},[a("span",{staticClass:"delete stl-hover"},[e.formData.formItems.length>1?a("i",{staticClass:"el-icon-close",on:{click:function(a){return a.preventDefault(),e.removeFormItem(t)}}}):e._e()]),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:10}},[a("el-col",{key:r+"projectName",attrs:{span:8}},[a("el-form-item",{attrs:{label:"项目名称",prop:"formItems."+r+".projectName",rules:[e.formRules.required()]}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.projectName,callback:function(a){e.$set(t,"projectName","string"==typeof a?a.trim():a)},expression:"item.projectName"}})],1)],1),e._v(" "),a("el-col",{key:r+"roleName",attrs:{span:8}},[a("el-form-item",{attrs:{label:"项目角色",prop:"formItems."+r+".roleName",rules:[e.formRules.required()]}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.roleName,callback:function(a){e.$set(t,"roleName","string"==typeof a?a.trim():a)},expression:"item.roleName"}})],1)],1),e._v(" "),a("el-col",{key:r+"projectUrl",attrs:{span:8}},[a("el-form-item",{attrs:{label:"项目链接",prop:"formItems."+r+".projectUrl",rules:e.formItemRules}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.projectUrl,callback:function(a){e.$set(t,"projectUrl","string"==typeof a?a.trim():a)},expression:"item.projectUrl"}})],1)],1),e._v(" "),a("el-col",{key:r+"projectDate",attrs:{span:8}},[a("el-form-item",{attrs:{label:"项目开始时间",prop:"formItems."+r+".projectDate",rules:e.formItemRules}},[a("el-date-picker",{attrs:{type:"monthrange","value-format":"yyyy-MM","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.projectDate,callback:function(a){e.$set(t,"projectDate",a)},expression:"item.projectDate"}})],1)],1)],1)],1)}),0):e._e(),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{"label-width":"0"}},[a("el-form-item",[a("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:e.addFormItem}},[e._v("添加项目")])],1)],1)],1)],1)],1)],1),e._v(" "),a("ActionBar",[a("el-button",{attrs:{type:"default"},on:{click:e.onCancel}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.formDisabled,sumbit:e.submitLoading},on:{click:e.onSubmit}},[e._v("\n      提交\n    ")])],1)],1)},staticRenderFns:[]};var g=a("VU/8")(D,_,!1,function(e){a("kviw")},"data-v-44e73e0f",null);t.default=g.exports},kviw:function(e,t){},wKeK:function(e,t){}});