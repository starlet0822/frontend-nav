webpackJsonp([41],{"5jHl":function(e,t){},"f/Fr":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("7+uW"),a=s("TQvf"),n=s.n(a);function i(e,t){var s=new n.a(t.target,{text:function(){return e}});s.on("success",function(){r.default.prototype.$message({message:"复制成功",type:"success",duration:1500}),s.destroy()}),s.on("error",function(){r.default.prototype.$message({message:"复制失败",type:"error"}),s.destroy()}),s.onClick(t)}var o=[{label:"我是超长选项666666666666666666666",value:"0",type:"info"},{label:"进行中",value:"1",type:"primary"},{label:"已完成",value:"2",type:"success"}],l={data:function(){return{statusArr:o,ruleForm:{content:"点击输入框后面复制按钮即可进行复制输入框内容",name:"输入内容长度超出会自动出现tooltip",region:"",desc:"文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容文本域内容"},richText:'<p>富文本内容</p><p><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="width: 100px;height: 100px;" alt="" data-href="" /></p>'}},directives:{},methods:{handleClipboard:function(e,t){i(e,t)},clipboardSuccess:function(){this.$message({type:"success",message:"复制成功"})},onTapFn:function(){this.$message("触摸手势触发",{type:"success"})},doubletapFn:function(){this.$message("双击手势触发",{type:"success"})},onPressFn:function(){this.$message("长按手势触发",{type:"success"})},onswipeLFn:function(e){this.$message("向左滑动手势触发",{type:"success"})},onswipeRFn:function(){this.$message("向右滑动手势触发",{type:"success"})}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-layout-wrap"},[s("el-card",[s("div",{attrs:{slot:"header"},slot:"header"},[e._v("自定义指令示例")]),e._v(" "),s("el-divider",[e._v("v-clipboard 复制指令")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClipboard("单击复制当前点击文本",t)}}},[e._v("\n      单击复制当前点击文本\n    ")]),e._v(" "),s("el-input",{directives:[{name:"input-tooltip",rawName:"v-input-tooltip"}],staticStyle:{width:"220px"},attrs:{placeholder:"请输入"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}},[s("span",{attrs:{slot:"append"},slot:"append"},[s("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.ruleForm.content,expression:"ruleForm.content",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"el-icon-document-copy cursor-pointer stl-hover",attrs:{title:"点击复制"}})])]),e._v(" "),s("el-divider",[e._v("v-input-tooltip 输入框 tooltip 指令")]),e._v(" "),s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[s("el-input",{directives:[{name:"input-tooltip",rawName:"v-input-tooltip"}],staticStyle:{width:"220px"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"状态",prop:"region"}},[s("el-select",{directives:[{name:"input-tooltip",rawName:"v-input-tooltip"}],staticStyle:{width:"220px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}},e._l(e.statusArr,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),s("el-divider",[e._v("v-waves 反馈指令")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}]},[e._v("取消")]),e._v(" "),s("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"}},[e._v("确定")]),e._v(" "),s("el-divider",[e._v("v-image-viewer 点击预览富文本中图片")]),e._v(" "),s("div",{directives:[{name:"image-viewer",rawName:"v-image-viewer",value:{maskClosable:!0},expression:"{ maskClosable: true }"}],domProps:{innerHTML:e._s(e.richText)}}),e._v(" "),s("el-divider",[e._v("触摸手势指令")]),e._v(" "),s("el-button",{directives:[{name:"tap",rawName:"v-tap",value:e.onTapFn,expression:"onTapFn"}],attrs:{type:"primary"}},[e._v("触摸(tap)")]),e._v(" "),s("el-button",{directives:[{name:"doubletap",rawName:"v-doubletap",value:e.doubletapFn,expression:"doubletapFn"}],attrs:{type:"default"}},[e._v("双击(doubletap)")]),e._v(" "),s("el-button",{directives:[{name:"press",rawName:"v-press",value:e.onPressFn,expression:"onPressFn"}],attrs:{type:"success"}},[e._v("长按(press)")]),e._v(" "),s("el-button",{directives:[{name:"swipeleft",rawName:"v-swipeleft",value:e.onswipeLFn,expression:"onswipeLFn"}],attrs:{type:"warning"}},[e._v("向左滑动(swipeleft)")]),e._v(" "),s("el-button",{directives:[{name:"swiperight",rawName:"v-swiperight",value:e.onswipeRFn,expression:"onswipeRFn"}],attrs:{type:"danger"}},[e._v("向右滑动(swiperight)")])],1)],1)},staticRenderFns:[]};s.d(t,"statusArr",function(){return o});var c=s("VU/8")(l,p,!1,function(e){s("5jHl")},null,null);t.default=c.exports}});