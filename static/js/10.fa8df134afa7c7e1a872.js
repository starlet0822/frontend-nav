webpackJsonp([10],{"+287":function(e,t){},D9Ix:function(e,t){},e72v:function(e,t){},"kw+w":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("d7EF"),o=a.n(r),l=a("c/Tr"),s=a.n(l),n=a("ifoU"),i=a.n(n),p=a("Xqgg"),m=a("SClT"),c=a("9EK1"),f=a("DmSG"),d=a("oqQY"),u=a.n(d),h={components:{},props:{data:{type:Object}},data:function(){return{jobStatusMap:m.i,identitMap:m.h,SEX_MAP:m.a,provinceAndCityData:c.a,formDisabled:!1,submitLoading:!1,formData:{name:"",applyStatus:"",gender:"-1",nameShowType:"",birthday:"",age:null,phone:"",email:"",address:"",hideResume:!1},formRules:{name:[f.a.required()],applyStatus:[f.a.required()],nameShowType:[f.a.required()],birthday:[f.a.required()],phone:[f.a.required(),f.a.mobilePhone],email:[f.a.email]},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},watch:{"formData.birthday":{deep:!0,immediate:!0,handler:function(e){this.formData.age=e?u()(new Date).diff(e,"year"):null}}},created:function(){for(var e in this.formData)"list"!==e&&(this.formData[e]=this.data[e])},methods:{}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"==typeof t?t.trim():t)},expression:"formData.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"当前求职状态",prop:"applyStatus"}},[a("el-select",{model:{value:e.formData.applyStatus,callback:function(t){e.$set(e.formData,"applyStatus",t)},expression:"formData.applyStatus"}},e._l(e.jobStatusMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"gender",label:"性别"}},[a("el-radio-group",{model:{value:e.formData.gender,callback:function(t){e.$set(e.formData,"gender",t)},expression:"formData.gender"}},e._l(e.SEX_MAP.entries(),function(t){var r=t[0],o=t[1];return a("el-radio",{key:o+r,attrs:{label:r}},[e._v("\n              "+e._s(o)+"\n            ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"nameShowType",label:"我的牛人身份"}},[a("el-select",{model:{value:e.formData.nameShowType,callback:function(t){e.$set(e.formData,"nameShowType",t)},expression:"formData.nameShowType"}},e._l(e.identitMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:+t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出生年月",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"month","value-format":"yyyy-MM-dd",placeholder:"请选择日期","picker-options":e.pickerOptions},model:{value:e.formData.birthday,callback:function(t){e.$set(e.formData,"birthday",t)},expression:"formData.birthday"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[null!==e.formData.age?a("span",[e._v(e._s(e.formData.age)+" 岁")]):a("span",{staticClass:"stl-readonly"},[e._v("选择出生年月自动填写")])])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"==typeof t?t.trim():t)},expression:"formData.phone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email","string"==typeof t?t.trim():t)},expression:"formData.email"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-cascader",{attrs:{options:e.provinceAndCityData,props:{expandTrigger:"hover"}},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"隐藏简历",prop:"hideResume"}},[a("StlReSwitch",{attrs:{width:60,activeText:"公开",inactiveText:"隐藏"},model:{value:e.formData.hideResume,callback:function(t){e.$set(e.formData,"hideResume",t)},expression:"formData.hideResume"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(h,D,!1,function(e){a("yKs9")},null,null).exports,v={props:{data:{type:Object}},data:function(){return{positionTypeMap:m.l,businessOpts:m.b,provinceAndCityData:c.a,formDisabled:!1,positionData:[],formData:{positionType:1,position:"",expectPosition:"",business:[],lowSalary:0,highSalary:0,location:""},formRules:{expectPosition:[f.a.required()],lowSalary:[f.a.required()],highSalary:[f.a.required()],location:[f.a.required()]}}},created:function(){for(var e in this.getPositionData(),this.formData)"list"!==e&&(this.formData[e]=this.data[e])},methods:{getPositionData:function(){var e=this;a.e(50).then(a.bind(null,"xg+I")).then(function(t){0===t.code&&(e.positionData=t.zpData.config)})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"求职类型",prop:"positionType"}},[a("el-radio-group",{model:{value:e.formData.positionType,callback:function(t){e.$set(e.formData,"positionType",t)},expression:"formData.positionType"}},e._l(e.positionTypeMap.entries(),function(t){var r=t[0],o=t[1];return a("el-radio-button",{key:o+r,attrs:{label:r}},[e._v("\n              "+e._s(o)+"\n            ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"期望职位",prop:"expectPosition"}},[a("el-select-tree",{attrs:{data:e.positionData,props:{children:"subLevelModelList",label:"name",value:"code"},accordion:"",filterable:"",clearable:""},model:{value:e.formData.expectPosition,callback:function(t){e.$set(e.formData,"expectPosition",t)},expression:"formData.expectPosition"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"期望行业",prop:"business"}},[a("el-cascader",{attrs:{options:e.businessOpts,"collapse-tags":"","show-all-levels":!1,props:{expandTrigger:"hover",multiple:!0}},model:{value:e.formData.business,callback:function(t){e.$set(e.formData,"business",t)},expression:"formData.business"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"薪资要求",required:""}},[a("el-row",{staticStyle:{width:"100%"},attrs:{type:"flex"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"",prop:"lowSalary","label-width":"0"}},[a("el-input",{attrs:{placeholder:"最低"},model:{value:e.formData.lowSalary,callback:function(t){e.$set(e.formData,"lowSalary",e._n(t))},expression:"formData.lowSalary"}},[a("template",{slot:"append"},[e._v("k")])],2)],1)],1),e._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:4}},[a("span",[e._v("至")])]),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"",prop:"highSalary","label-width":"0"}},[a("el-input",{attrs:{placeholder:"最高"},model:{value:e.formData.highSalary,callback:function(t){e.$set(e.formData,"highSalary",e._n(t))},expression:"formData.highSalary"}},[a("template",{slot:"append"},[e._v("k")])],2)],1)],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工作城市",prop:"location"}},[a("el-cascader",{attrs:{options:e.provinceAndCityData,props:{expandTrigger:"hover"}},model:{value:e.formData.location,callback:function(t){e.$set(e.formData,"location",t)},expression:"formData.location"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var w=a("VU/8")(v,y,!1,function(e){a("e72v")},null,null).exports,g={props:{data:{type:Object}},data:function(){return{businessOpts:m.b,emphasisArr:m.e,formDisabled:!1,positionData:[],formData:{companyName:"",industryCode:"",department:"",position:"",jobTime:null,workContent:"",workPerformance:"",emphasis:[]},formRules:{position:[f.a.required()],companyName:[f.a.required(),f.a.base_name],jobTime:[f.a.required()]}}},created:function(){for(var e in this.getPositionData(),this.formData)"list"!==e&&(this.formData[e]=this.data[e])},methods:{getPositionData:function(){var e=this;a.e(50).then(a.bind(null,"xg+I")).then(function(t){0===t.code&&(e.positionData=t.zpData.config)})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.companyName,callback:function(t){e.$set(e.formData,"companyName","string"==typeof t?t.trim():t)},expression:"formData.companyName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属行业",prop:"industryCode"}},[a("el-cascader",{attrs:{options:e.businessOpts,"show-all-levels":!1,props:{expandTrigger:"hover",multiple:!1}},model:{value:e.formData.industryCode,callback:function(t){e.$set(e.formData,"industryCode",t)},expression:"formData.industryCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属部门",prop:"department"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.department,callback:function(t){e.$set(e.formData,"department","string"==typeof t?t.trim():t)},expression:"formData.department"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"职位名称",prop:"position"}},[a("el-select-tree",{attrs:{data:e.positionData,props:{children:"subLevelModelList",label:"name",value:"code"},accordion:"",filterable:"",clearable:""},model:{value:e.formData.position,callback:function(t){e.$set(e.formData,"position",t)},expression:"formData.position"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"在职时间",prop:"jobTime"}},[a("el-date-picker",{attrs:{type:"monthrange","value-format":"yyyy-MM","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formData.jobTime,callback:function(t){e.$set(e.formData,"jobTime",t)},expression:"formData.jobTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"工作内容",prop:"workContent"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.workContent,callback:function(t){e.$set(e.formData,"workContent",t)},expression:"formData.workContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"工作业绩",prop:"workPerformance"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.workPerformance,callback:function(t){e.$set(e.formData,"workPerformance",t)},expression:"formData.workPerformance"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{prop:"emphasis"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n            拥有技能\n            "),a("el-tooltip",{attrs:{effect:"dark",content:"输入新技能回车即可自定义",placement:"top"}},[a("span",[a("i",{staticClass:"el-icon-info"})])])],1),e._v(" "),a("el-select",{attrs:{multiple:"","allow-create":""},model:{value:e.formData.emphasis,callback:function(t){e.$set(e.formData,"emphasis",t)},expression:"formData.emphasis"}},e._l(e.emphasisArr,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(g,x,!1,function(e){a("t3Il")},null,null).exports,k={props:{data:{type:Object}},data:function(){return{formDisabled:!1,formData:{projectName:"",roleName:"",projectUrl:"",projectDate:null,description:"",performance:""},formRules:{projectName:[f.a.required(),f.a.base_name],roleName:[f.a.required()],projectUrl:[f.a.URL]}}},created:function(){for(var e in this.formData)"list"!==e&&(this.formData[e]=this.data[e])},methods:{}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.projectName,callback:function(t){e.$set(e.formData,"projectName","string"==typeof t?t.trim():t)},expression:"formData.projectName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目角色",prop:"roleName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.roleName,callback:function(t){e.$set(e.formData,"roleName","string"==typeof t?t.trim():t)},expression:"formData.roleName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目链接",prop:"projectUrl"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.projectUrl,callback:function(t){e.$set(e.formData,"projectUrl","string"==typeof t?t.trim():t)},expression:"formData.projectUrl"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目开始时间",prop:"projectDate"}},[a("el-date-picker",{attrs:{type:"monthrange","value-format":"yyyy-MM","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formData.projectDate,callback:function(t){e.$set(e.formData,"projectDate",t)},expression:"formData.projectDate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目业绩",prop:"performance"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.performance,callback:function(t){e.$set(e.formData,"performance",t)},expression:"formData.performance"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var $=a("VU/8")(k,T,!1,function(e){a("D9Ix")},null,null).exports,j={props:{data:{type:Object}},data:function(){return{eduTypeMap:m.d,degreeMap:m.c,formDisabled:!1,formData:{school:"",eduType:"",degree:"",major:"",schoolDate:null,eduDescription:"",thesisTitle:"",thesisDesc:""},formRules:{school:[f.a.required(),f.a.base_name],eduType:[f.a.required()],degree:[f.a.required()],major:[f.a.required()],schoolDate:[f.a.required()]}}},created:function(){for(var e in this.formData)"list"!==e&&(this.formData[e]=this.data[e])},methods:{}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学校名称",prop:"school"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.school,callback:function(t){e.$set(e.formData,"school","string"==typeof t?t.trim():t)},expression:"formData.school"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学制类型",prop:"eduType"}},[a("el-select",{model:{value:e.formData.eduType,callback:function(t){e.$set(e.formData,"eduType",t)},expression:"formData.eduType"}},e._l(e.eduTypeMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学历",prop:"degree"}},[a("el-select",{model:{value:e.formData.degree,callback:function(t){e.$set(e.formData,"degree",t)},expression:"formData.degree"}},e._l(e.degreeMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"专业",prop:"major"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.major,callback:function(t){e.$set(e.formData,"major","string"==typeof t?t.trim():t)},expression:"formData.major"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"时间段",prop:"schoolDate"}},[a("el-date-picker",{attrs:{type:"monthrange","value-format":"yyyy-MM","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.formData.schoolDate,callback:function(t){e.$set(e.formData,"schoolDate",t)},expression:"formData.schoolDate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"在校经历",prop:"eduDescription"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.eduDescription,callback:function(t){e.$set(e.formData,"eduDescription","string"==typeof t?t.trim():t)},expression:"formData.eduDescription"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"毕业设计/论文题目",prop:"thesisTitle"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.thesisTitle,callback:function(t){e.$set(e.formData,"thesisTitle",t)},expression:"formData.thesisTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"毕业设计/论文描述",prop:"thesisDesc"}},[a("el-input",{attrs:{placeholder:"请输入",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.formData.thesisDesc,callback:function(t){e.$set(e.formData,"thesisDesc",t)},expression:"formData.thesisDesc"}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var S=a("VU/8")(j,R,!1,function(e){a("wHBP")},null,null).exports,C=a("KlhY"),M=a("2cJ2"),q=a("S2zo"),P={mixins:[C.a],components:{selectMember:q.a,CountPopover:M.a},props:{data:{type:Object}},data:function(){return{formDisabled:!1,formData:{certJson:[]},formRules:{school:[f.a.required(),f.a.base_name],eduType:[f.a.required()],degree:[f.a.required()],major:[f.a.required()],schoolDate:[f.a.required()]},selectType:"single",drawerAction:["selectPerson","selectMember"],titleObj:{selectMember:"添加证书"}}},created:function(){for(var e in this.formData)"list"!==e&&(this.formData[e]=this.data[e])},methods:{drawerConfirmCall:function(e,t){"selectMember"===e&&this.selectMember(t),this.drawerClose()},openDrawer:function(e){"selectMember"===e&&(this.selectType="multiple"),this.clickDrop(e)},tagClose:function(e,t){"selectPerson"===e?this.handleCaptain("",""):"selectMember"===e&&this.formData.certJson.splice(t,1)},selectMember:function(e){var t=e.map(function(e){return e.id}).join(","),a=e.map(function(e){return e.name});this.$set(this.formData,"menberIds",t),this.$set(this.formData,"certJson",a),this.$refs.formRef.validateField("menberIds")}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px",disabled:e.formDisabled}},[a("el-card",{attrs:{shadow:"hover"}},[a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"","label-width":"0",prop:"certJson"}},[a("CountPopover",{attrs:{data:e.formData.certJson,showEmpty:!1,limit:3,closable:!e.formDisabled},on:{close:function(t,a){return e.tagClose("selectMember",a,t)}}}),e._v(" "),a("el-button",{attrs:{type:"ghost"},on:{click:function(t){return e.openDrawer("selectMember")}}},[e._v("\n            请"+e._s(e.titleObj.selectMember)+"\n          ")])],1)],1)],1)],1),e._v(" "),a("el-drawer",{attrs:{title:e.titleObj[e.drawerName],visible:e.drawerShow,size:e.drawerWidth},on:{"update:visible":function(t){e.drawerShow=t},close:e.drawerClose}},[a("transition",{attrs:{name:"el-fade-in-linear"}},[a(e.drawerName,{tag:"component",attrs:{name:e.drawerName,selectType:e.selectType},on:{close:e.drawerClose,call:e.drawerConfirmCall}})],1)],1)],1)},staticRenderFns:[]};var O=a("VU/8")(P,N,!1,function(e){a("qQQ4")},null,null).exports,I=a("+4Zy"),U=a("TTzd"),z=new i.a([["基本信息",b],["求职期望",w],["工作经历",_],["项目经历",$],["教育经历",S],["资格证书",O]]),E={components:{createView:p.a,step1:b,step2:w,step3:_,step4:$,step5:S,step6:O},data:function(){return{active:0,stepTotal:s()(z).length-1,stepsMap:z,title:this.$route.meta.title,loading:!1,formDisabled:!1,submitLoading:!1,formData:{name:"",applyStatus:"",gender:"-1",nameShowType:"",birthday:"",age:null,phone:"18888888888",email:"",address:"",hideResume:!1,positionType:1,position:"",expectPosition:"",business:[],lowSalary:0,highSalary:0,location:"",companyName:"",industryCode:"",department:"",jobTime:null,workContent:"",workPerformance:"",emphasis:[],projectName:"",roleName:"",projectUrl:"",projectDate:null,description:"",performance:"",school:"",eduType:"",degree:"",major:"",schoolDate:null,eduDescription:"",thesisTitle:"",thesisDesc:"",certJson:[]}}},computed:{componentId:function(){return o()(s()(z)[this.active],2)[1]}},created:function(){},methods:{toggleStep:function(e){},prev:function(){for(var e in this.$refs.stepItem.formData)this.formData[e]=this.$refs.stepItem.formData[e];this.active--},next:function(){var e=this;this.$refs.stepItem.$refs.formRef.validate(function(t){if(t){for(var a in e.$refs.stepItem.formData)e.formData[a]=e.$refs.stepItem.formData[a];e.active++}})},onSubmit:function(){var e=this;this.submitLoading=!0;var t=Object(I.d)(this.formData);(this.formData.id?U.d:U.a)(t).then(function(){e.$message.success("模拟保存成功"),e.onCancel()}).finally(function(){e.submitLoading=!1})},onCancel:function(){this.$router.go(-1)}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("create-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title}},[a("div",{staticClass:"create-form-wrap",attrs:{slot:"content"},slot:"content"},[a("el-steps",{attrs:{active:e.active,"finish-status":"success",simple:""}},e._l(e.stepsMap.entries(),function(t,r){var o=t[0];return a("el-step",{key:o,class:{"cursor-pointer":!1},attrs:{title:o},nativeOn:{click:function(t){return e.toggleStep(r)}}})}),1),e._v(" "),a("div",{staticClass:"step-wrap"},[a(e.componentId,{ref:"stepItem",tag:"component",attrs:{data:e.formData}})],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.onCancel}},[e._v("取消")]),e._v(" "),e.active>0?a("el-button",{attrs:{type:"primary"},on:{click:e.prev}},[e._v("上一步")]):e._e(),e._v(" "),e.active<e.stepTotal?a("el-button",{attrs:{type:"primary"},on:{click:e.next}},[e._v("下一步")]):e._e(),e._v(" "),e.active===e.stepTotal?a("el-button",{attrs:{type:"primary",disabled:e.formDisabled,sumbit:e.submitLoading},on:{click:e.onSubmit}},[e._v("\n      确定\n    ")]):e._e()],1)])},staticRenderFns:[]};var A=a("VU/8")(E,L,!1,function(e){a("+287")},"data-v-4cc5d468",null);t.default=A.exports},qQQ4:function(e,t){},t3Il:function(e,t){},wHBP:function(e,t){},yKs9:function(e,t){}});