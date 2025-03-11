webpackJsonp([22],{GnzR:function(t,n){},RAlg:function(t,n){},aCbg:function(t,n,s){
/*!
 * vue-countdown v1.1.5
 * https://fengyuanchen.github.io/vue-countdown
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-02-25T01:19:32.769Z
 */var e;e=function(){"use strict";return{name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/864e5)},hours:function(){return Math.floor(this.totalMilliseconds%864e5/36e5)},minutes:function(){return Math.floor(this.totalMilliseconds%36e5/6e4)},seconds:function(){return Math.floor(this.totalMilliseconds%6e4/1e3)},milliseconds:function(){return Math.floor(this.totalMilliseconds%1e3)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/36e5)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/6e4)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/1e3)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var n=Math.min(this.totalMilliseconds,this.interval);if(n>0)if(window.requestAnimationFrame){var s,e;this.requestId=requestAnimationFrame(function i(o){s||(s=o),e||(e=o);var a=o-s;a>=n||a+(o-e)/2>=n?t.progress():t.requestId=requestAnimationFrame(i),e=o})}else this.timeoutId=setTimeout(function(){t.progress()},n);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.pause()}}},t.exports=e()},bpK2:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("Dd8w"),i=s.n(e),o=s("aCbg"),a=s.n(o),u=s("NYxO"),r={name:"Countdown",props:{time:{type:Number,default:864e5},viewDays:{type:Boolean,default:!1},onlySecond:{type:Boolean,default:!1},stageId:{type:[String,Number],default:""}},components:{VueCountdown:a.a},computed:i()({},Object(u.b)(["stageInfo"]),Object(u.c)("websocketListener",["match_changeSceneStatus_Socket"])),methods:{end:function(){this.$emit("end")}}},c={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("vue-countdown",t._g(t._b({ref:"countdown",staticClass:"countdown",attrs:{time:t.time>0?t.time:0,tag:"span"},on:{end:t.end},scopedSlots:t._u([{key:"default",fn:function(n){return[t.onlySecond?s("span",{staticClass:"second"},[t._v("\n      "+t._s(n.totalSeconds)+"\n      "),s("span",{staticClass:"unit"},[t._v("秒")])]):s("span",[t.viewDays?s("span",[s("span",[t._v(t._s(n.days.toString().padStart(2,0)))]),t._v(" "),s("span",{staticClass:"days"},[t._v("天")]),t._v(" "),s("span",[t._v(t._s(n.hours.toString().padStart(2,0)))])]):s("span",[t._v(t._s((24*n.days+n.hours).toString().padStart(2,0)))]),t._v(" "),s("span",[t._v(":")]),t._v(" "),s("span",[t._v(t._s(n.minutes.toString().padStart(2,0)))]),t._v(" "),s("span",[t._v(":")]),t._v(" "),s("span",[t._v(t._s(n.seconds.toString().padStart(2,0)))])])]}}])},"vue-countdown",t.$attrs,!1),t.$listeners))},staticRenderFns:[]};var d={components:{countdown:s("VU/8")(r,c,!1,function(t){s("GnzR")},"data-v-2d21ec36",null).exports},data:function(){return{countdownTime:1e4,countdownTime_old:1e4,isEnd:!1,isStop:!1,countdownRef:{}}},mounted:function(){var t=this;this.$nextTick(function(){var n=t.$refs.countdown.$refs.countdown;t.countdownRef=n})},methods:{startCountdown:function(){this.countdownTime=this.countdownTime_old,this.countdownRef.start()},abortCountdown:function(){this.countdownRef.abort()},continueCountdown:function(){this.countdownRef.continue()},resetCountdown:function(){this.isEnd=!1,this.abortCountdown(),this.startCountdown()},pause:function(){this.isStop=!0},end:function(t){this.isEnd=!0}}},l={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content-layout-wrap"},[s("el-card",{attrs:{shadow:"never"}},[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("倒计时")]),t._v(" "),s("div",[t._v("\n      距比赛结束：\n      "),s("countdown",{attrs:{time:864e6,viewDays:""}})],1),t._v(" "),s("div",[t._v("\n      距答题时间结束：\n      "),s("countdown",{attrs:{time:36e5}})],1),t._v(" "),s("div",[t._v("\n      跨年倒计时：\n      "),s("countdown",{ref:"countdown",attrs:{time:t.countdownTime,onlySecond:!0,"auto-start":!0},on:{end:t.end,pause:t.pause}})],1)])],1)},staticRenderFns:[]};var h=s("VU/8")(d,l,!1,function(t){s("RAlg")},null,null);n.default=h.exports}});