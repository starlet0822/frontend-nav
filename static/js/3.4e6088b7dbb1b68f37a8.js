webpackJsonp([3],{V9D7:function(e,t,a){"use strict";var r=a("ifoU"),o=a.n(r),l=a("Tdz7"),s=a.n(l);var n=a("0xDb");a.d(t,"f",function(){return i}),a.d(t,"h",function(){return p}),a.d(t,"i",function(){return c}),a.d(t,"e",function(){return m}),a.d(t,"d",function(){return f}),a.d(t,"g",function(){return u}),a.d(t,"c",function(){return d}),a.d(t,"b",function(){return v}),a.d(t,"a",function(){return n.b});var i="standard-table",p=(function(){var e=[];for(var t in s.a){var a=s.a[t],r={label:a.name,value:t,children:[]};for(var o in a.children){var l=a.children[o];r.children.push({label:l.name,value:o})}e.push(r)}}(),[{label:"未开始",value:"0",type:"info"},{label:"进行中",value:"1",type:"primary"},{label:"已完成",value:"2",type:"success"}]),c=(p.reduce(function(e,t){return e[t.value]=t,e},{}),new o.a([["1","普通"],["2","VIP"],["3","SVIP"]])),m=new o.a([["1","离职-随时到岗"],["2","在职-暂不考虑"],["3","在职-考虑机会"],["4","在职-月内到岗"]]),f=new o.a([["1","招聘人"],["2","职场人"],["3","应届生"]]),u=new o.a([["1","全职"],["2","兼职"]]),d=new o.a([["1","全日制"],["2","非全日制"]]),v=new o.a([["1","初中以下"],["2","中专/中技"],["3","高中"],["4","大专"],["5","本科"],["6","硕士"],["7","博士"]])},ixIZ:function(e,t){},wJ4w:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),o=a.n(r),l=a("Xqgg"),s=a("iBN+"),n=a("bnSG"),i=a("DmSG"),p=a("9EK1"),c=a("0xDb"),m=a("V9D7"),f=a("+4Zy"),u=a("KlhY"),d=a("2cJ2"),v=a("S2zo"),b={mixins:[n.b,n.a,u.a],components:{createView:l.a,selectPerson:v.a,selectMember:v.a,CardTitle:s.a,CountPopover:d.a},data:function(){return{loading:!1,jobStatusMap:m.e,identitMap:m.d,eduTypeMap:m.c,degreeMap:m.b,SEX_MAP:m.a,positionTypeMap:m.g,OPERATOR:c.a,provinceAndCityData:p.a,formData:{gender:"-1",positionType:"1",hideResume:!1,certJson:[]},formRules:{name:[i.a.required()],applyStatus:[i.a.required()],nameShowType:[i.a.required()],birthday:[i.a.required()],phone:[i.a.required(),i.a.mobilePhone],email:[i.a.email],position:[i.a.required],companyName:[i.a.required(),i.a.base_name],projectName:[i.a.required(),i.a.base_name]},selectType:"single",drawerAction:["selectPerson","selectMember"],titleObj:{selectPerson:"选择队长",selectMember:"添加证书"}}},computed:{isEdit:function(){return this.$route.path.indexOf("edit")>-1},viewTitle:function(){return(this.isEdit?"编辑":"新增")+"简历"}},created:function(){},methods:{drawerConfirmCall:function(e,t){"selectPerson"===e?this.handleCaptain(t):"selectMember"===e&&this.selectMember(t),this.drawerClose()},openDrawer:function(e){"selectPerson"===e?this.selectType="single":"selectMember"===e&&(this.selectType="multiple"),this.clickDrop(e)},tagClose:function(e,t){"selectPerson"===e?this.handleCaptain("",""):"selectMember"===e&&this.formData.certJson.splice(t,1)},selectMember:function(e){var t=e.map(function(e){return e.id}).join(","),a=e.map(function(e){return e.name});this.$set(this.formData,"menberIds",t),this.$set(this.formData,"certJson",a),this.$refs.formRef.validateField("menberIds")},onSubmit:Object(c.x)(1e3,function(){var e=this;this.$refs.formRef.validate(function(t){if(!t)return e.$message.error("校验未通过"),e.focusFirstError(e.$el),!1;e.$message.success("校验通过"),e.formData.values=e.formData.formItems;Object(f.f)(o()({},e.formData),["formItems"]);e.onCancel()})}),onCancel:function(){this.$router.go(-1)}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("create-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.viewTitle}},[a("div",{staticClass:"create-form-wrap",attrs:{slot:"content"},slot:"content"},[a("el-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules,"label-position":"left","label-width":"140px"}},[a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:"基本信息"},slot:"header"}),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"==typeof t?t.trim():t)},expression:"formData.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"当前求职状态",prop:"applyStatus"}},[a("el-select",{model:{value:e.formData.applyStatus,callback:function(t){e.$set(e.formData,"applyStatus",t)},expression:"formData.applyStatus"}},e._l(e.jobStatusMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"gender",label:"性别"}},[a("el-radio-group",{model:{value:e.formData.gender,callback:function(t){e.$set(e.formData,"gender",t)},expression:"formData.gender"}},e._l(e.SEX_MAP.entries(),function(t){var r=t[0],o=t[1];return a("el-radio",{key:o+r,attrs:{label:r}},[e._v("\n                  "+e._s(o)+"\n                ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"nameShowType",label:"我的牛人身份"}},[a("el-select",{model:{value:e.formData.nameShowType,callback:function(t){e.$set(e.formData,"nameShowType",t)},expression:"formData.nameShowType"}},e._l(e.identitMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"出生年月",prop:"birthday"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择日期"},model:{value:e.formData.birthday,callback:function(t){e.$set(e.formData,"birthday",t)},expression:"formData.birthday"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"年龄",prop:"age"}},[e.formData.age?a("span",[e._v(e._s(e.formData.age))]):a("span",{staticClass:"stl-readonly"},[e._v("选择出生年月自动填写")])])],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"电话",prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"==typeof t?t.trim():t)},expression:"formData.phone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email","string"==typeof t?t.trim():t)},expression:"formData.email"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-cascader",{attrs:{options:e.provinceAndCityData,props:{expandTrigger:"hover"}},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"隐藏简历",prop:"hideResume"}},[a("StlReSwitch",{attrs:{width:60,activeText:"公开",inactiveText:"隐藏"},model:{value:e.formData.hideResume,callback:function(t){e.$set(e.formData,"hideResume",t)},expression:"formData.hideResume"}})],1)],1)],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:"期望职位"},slot:"header"}),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"求职类型",prop:"positionType"}},[a("el-radio-group",{model:{value:e.formData.positionType,callback:function(t){e.$set(e.formData,"positionType",t)},expression:"formData.positionType"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v("全职")]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v("兼职")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"期望职位",prop:"position"}},[a("el-select",{model:{value:e.formData.position,callback:function(t){e.$set(e.formData,"position",t)},expression:"formData.position"}},e._l(e.jobStatusMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"business",label:"期望行业"}},[a("el-radio-group",{model:{value:e.formData.business,callback:function(t){e.$set(e.formData,"business",t)},expression:"formData.business"}},e._l(e.SEX_MAP.entries(),function(t){var r=t[0],o=t[1];return a("el-radio",{key:o+r,attrs:{label:r}},[e._v("\n                  "+e._s(o)+"\n                ")])}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"salary",label:"薪资要求"}},[a("el-select",{model:{value:e.formData.salary,callback:function(t){e.$set(e.formData,"salary",t)},expression:"formData.salary"}},e._l(e.identitMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工作城市",prop:"location"}},[a("el-cascader",{attrs:{options:e.provinceAndCityData,props:{expandTrigger:"hover"}},model:{value:e.formData.location,callback:function(t){e.$set(e.formData,"location",t)},expression:"formData.location"}})],1)],1)],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:"工作经历"},slot:"header"}),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.companyName,callback:function(t){e.$set(e.formData,"companyName","string"==typeof t?t.trim():t)},expression:"formData.companyName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"所属行业",prop:"industryCode"}},[a("el-select",{model:{value:e.formData.industryCode,callback:function(t){e.$set(e.formData,"industryCode",t)},expression:"formData.industryCode"}},e._l(e.jobStatusMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"department",label:"所属部门"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.department,callback:function(t){e.$set(e.formData,"department","string"==typeof t?t.trim():t)},expression:"formData.department"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"position",label:"职位名称"}},[a("el-select",{model:{value:e.formData.position,callback:function(t){e.$set(e.formData,"position",t)},expression:"formData.position"}},e._l(e.identitMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"在职时间",prop:"jobTime"}},[a("el-date-picker",{attrs:{type:"daterange",placeholder:"请选择日期"},model:{value:e.formData.jobTime,callback:function(t){e.$set(e.formData,"jobTime",t)},expression:"formData.jobTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"工作内容",prop:"workContent"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.workContent,callback:function(t){e.$set(e.formData,"workContent","string"==typeof t?t.trim():t)},expression:"formData.workContent"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"工作业绩",prop:"workPerformance"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.workPerformance,callback:function(t){e.$set(e.formData,"workPerformance","string"==typeof t?t.trim():t)},expression:"formData.workPerformance"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"拥有技能",prop:"emphasis"}},[a("el-select",{attrs:{multiple:""},model:{value:e.formData.emphasis,callback:function(t){e.$set(e.formData,"emphasis",t)},expression:"formData.emphasis"}},e._l(e.identitMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1)],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:"项目经历"},slot:"header"}),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.projectName,callback:function(t){e.$set(e.formData,"projectName","string"==typeof t?t.trim():t)},expression:"formData.projectName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目角色",prop:"roleName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.roleName,callback:function(t){e.$set(e.formData,"roleName","string"==typeof t?t.trim():t)},expression:"formData.roleName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"projectUrl",label:"项目链接（选填）"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.projectUrl,callback:function(t){e.$set(e.formData,"projectUrl","string"==typeof t?t.trim():t)},expression:"formData.projectUrl"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"项目开始时间",prop:"projectDate"}},[a("el-date-picker",{attrs:{type:"daterange",placeholder:"请选择日期"},model:{value:e.formData.projectDate,callback:function(t){e.$set(e.formData,"projectDate",t)},expression:"formData.projectDate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description","string"==typeof t?t.trim():t)},expression:"formData.description"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目业绩",prop:"performance"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.performance,callback:function(t){e.$set(e.formData,"performance","string"==typeof t?t.trim():t)},expression:"formData.performance"}})],1)],1)],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:"教育经历"},slot:"header"}),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学校名称",prop:"school"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.school,callback:function(t){e.$set(e.formData,"school","string"==typeof t?t.trim():t)},expression:"formData.school"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学制类型",prop:"eduType"}},[a("el-select",{model:{value:e.formData.eduType,callback:function(t){e.$set(e.formData,"eduType",t)},expression:"formData.eduType"}},e._l(e.eduTypeMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"学历",prop:"degree"}},[a("el-select",{model:{value:e.formData.degree,callback:function(t){e.$set(e.formData,"degree",t)},expression:"formData.degree"}},e._l(e.degreeMap.entries(),function(e){var t=e[0],r=e[1];return a("el-option",{key:r+t,attrs:{label:r,value:t}})}),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"专业",prop:"major"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.major,callback:function(t){e.$set(e.formData,"major","string"==typeof t?t.trim():t)},expression:"formData.major"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"时间段",prop:"projectDate"}},[a("el-date-picker",{attrs:{type:"daterange",placeholder:"请选择日期"},model:{value:e.formData.projectDate,callback:function(t){e.$set(e.formData,"projectDate",t)},expression:"formData.projectDate"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"在校经历",prop:"eduDescription"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.eduDescription,callback:function(t){e.$set(e.formData,"eduDescription","string"==typeof t?t.trim():t)},expression:"formData.eduDescription"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"毕业设计/论文题目",prop:"thesisTitle"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.thesisTitle,callback:function(t){e.$set(e.formData,"thesisTitle","string"==typeof t?t.trim():t)},expression:"formData.thesisTitle"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"毕业设计/论文描述",prop:"thesisDesc"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.thesisDesc,callback:function(t){e.$set(e.formData,"thesisDesc","string"==typeof t?t.trim():t)},expression:"formData.thesisDesc"}})],1)],1)],1)],1),e._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("CardTitle",{attrs:{slot:"header",title:"资格证书"},slot:"header"}),e._v(" "),a("el-row",{attrs:{type:"flex",gutter:24}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"","label-width":"0",prop:"certJson"}},[a("CountPopover",{attrs:{data:e.formData.certJson,showEmpty:!1,limit:3},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.showList;return e._l(r,function(t,r){return a("el-tag",{key:t,staticClass:"cursor-pointer mr-2",attrs:{"disable-transitions":!0,closable:""},on:{close:function(t){return e.tagClose("selectMember",r)}}},[e._v("\n                    "+e._s(t)+"\n                  ")])})}},{key:"popover-content",fn:function(t){var r=t.value,o=t.index;return a("el-tag",{attrs:{"disable-transitions":!0,closable:""},on:{close:function(t){return e.tagClose("selectMember",o)}}},[e._v("\n                  "+e._s(r)+"\n                ")])}}])}),e._v(" "),a("el-button",{attrs:{type:"ghost"},on:{click:function(t){return e.openDrawer("selectMember")}}},[e._v("\n                请"+e._s(e.titleObj.selectMember)+"\n              ")])],1)],1)],1)],1)],1),e._v(" "),a("el-drawer",{attrs:{title:e.titleObj[e.drawerName],visible:e.drawerShow,size:e.drawerWidth},on:{"update:visible":function(t){e.drawerShow=t},close:e.drawerClose}},[a("transition",{attrs:{name:"el-fade-in-linear"}},[a(e.drawerName,{tag:"component",attrs:{name:e.drawerName,selectType:e.selectType},on:{close:e.drawerClose,call:e.drawerConfirmCall}})],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.onCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")])],1)])},staticRenderFns:[]};var h=a("VU/8")(b,D,!1,function(e){a("ixIZ")},null,null);t.default=h.exports}});