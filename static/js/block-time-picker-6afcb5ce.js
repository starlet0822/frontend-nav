import{d as K,b1 as G,a as m,r as U,n as J,$ as Q,i as Y,o as Z,C as ee,e as V,j as g,B as A,h as v,ad as j,F as R,a0 as z,v as F,_ as te,b as f,c as le,w as x,f as _,g as h,u as L,K as oe,m as ae,b2 as ne}from"./index-e3adf0ce.js";const ue={class:"time-picker"},ie={class:"time-scroll"},se={class:"time-text"},re={class:"time-full"},de=["data-val","data-idx","onClick","onMousemove","onMouseleave"],ce=K({__name:"index",props:{modelValue:{type:Array,default:()=>[]},minHour:{type:[Number,String],default:"0"},maxHour:{type:[Number,String],default:"23"},step:{type:[Number,String],default:30,validator:c=>60%+c===0},rangeSeparator:{type:String,default:" ~ "},activeColor:{type:String,default:"#2e6cf3"},inactiveColor:{type:String,default:"#a0a6ae"},size:{type:String,default:"default",validatior(c){return["large","default","small"].includes(c)}},showArrow:Boolean,fixed:Boolean,readonly:Boolean,disabledBefore:Boolean},emits:["update:modelValue"],setup(c,{emit:p}){const n=c;G(t=>({"1b47c669":b.value,"2c9db92c":c.inactiveColor,"7317a3a2":c.activeColor}));const B=m(0);m(!0),m(0);const $=m(0),b=m("");U([]),U([]),U([]);const w=m([]);m([]);const u=m([]),l=m(),i=m();m(!1);const y=m(),H=J(()=>{let t=[];return l.value!==void 0&&y.value!==void 0&&(t=[l.value,y.value].sort((d,e)=>d-e)),t});Q(document.body,t=>{}),Y(()=>n,t=>{},{deep:!0}),Z(()=>{O(),P()});const P=async()=>{var t;await ee(),$.value=(t=document.querySelector(".time-bar"))==null?void 0:t.getBoundingClientRect().width},I=t=>{if(B.value+=$.value*t,B.value===$.value){B.value=0;return}},C=t=>Math.floor(t/60)>=10?Math.floor(t/60):"0"+Math.floor(t/60),W=()=>{if(u.value.length===0){p("update:modelValue",null);return}const t=+n.minHour*60+Number(n.step)*l.value+Number(n.step),d=+n.minHour*60+Number(n.step)*i.value+Number(n.step);let e,a,o,r,N,M;t&&d?(o=C(t-+n.step),e=C(d),r=(t-+n.step)%60===0?"00":Math.round(((t-+n.step)/60-o)*60),a=d%60===0?"00":Math.round((d/60-e)*60),N=o+":"+r,e===24&&(e=23,a=59),M=e+":"+a):(o=C(t-+n.step),e=C(t),r=(t-+n.step)%60===0?"00":Math.round(((t-+n.step)/60-o)*60),a=t%60===0?"00":Math.round((t/60-e)*60),N=o+":"+r,e===24&&(e=23,a=59),M=e+":"+a),p("update:modelValue",[N,M])},O=()=>{const t=parseInt(new Date().getHours()),d=parseInt(new Date().getMinutes()),e=[],a=o=>{const r=[],N=60/+n.step*(o-+n.minHour),M=(k,q)=>{if(!n.disabledBefore)return!1;if(k<t)return!0;if(t===k){const X=+n.step*(q-1),E=+n.step*q;if(d>=X&&d<=E||d>=E)return!0}};for(let k=1;k<=60/+n.step;k++)r.push({value:o*60+ +n.step*k,selected:!1,disabled:M(o,k),index:N+k-1});return r};for(let o=+n.minHour;o<=+n.maxHour;o++){const r={time:void 0,blocks:a(o)};r.time=o*60,e.push(r)}w.value=e},D=(t,d,e)=>{if(n.readonly)return!1;if(n.disabledBefore&&O(),!d.disabled){if(y.value=void 0,l.value===void 0&&i.value===void 0)l.value=u.value[0]=e;else if(l.value!==void 0&&i.value===void 0){if(e===l.value&&u.value.indexOf(e)>-1&&(u.value.splice(u.value.indexOf(e),1),l.value=i.value=void 0),e>l.value){i.value=e,u.value.splice(0);for(let a=l.value;a<=i.value;a++)u.value.splice(a-l.value,0,a)}if(e<l.value){const[a,o]=[e,l.value];l.value=a,i.value=o,u.value.splice(0);for(let r=l.value;r<=i.value;r++)u.value.splice(r-l.value,0,r)}}else if(l.value!==void 0&&i.value!==void 0){if(e===l.value){const a=u.value.indexOf(e);u.value.splice(a,1),u.value.length?l.value=u.value[0]:l.value=i.value=void 0}else if(e===i.value){const a=u.value.indexOf(e);u.value.splice(a,1),i.value=u.value[u.value.length-1],l.value===i.value&&(i.value=void 0)}else if(e<l.value)u.value.splice(0),l.value=i.value=void 0;else if(e>l.value){i.value=e,u.value.splice(0);for(let a=l.value;a<=i.value;a++)u.value.splice(a-l.value,0,a)}}W()}},s=t=>{n.readonly||u.value.length>1||l.value===void 0||(y.value=t)},S=t=>{n.readonly||u.value.length>1||l.value===void 0||(y.value=void 0)};return(t,d)=>(V(),g("div",ue,[c.showArrow?(V(),g("div",{key:0,class:"time-picker-prev",onClick:d[0]||(d[0]=e=>I(1))}," < ")):A("",!0),v("div",ie,[v("div",{class:j(["time-wrapper",{"time-wrapper__fixed":c.fixed}])},[(V(!0),g(R,null,z(w.value,(e,a)=>(V(),g("div",{key:e.time+a,class:j(["time-bar",[{"time-bar--fixed-start":c.fixed&&a==0,"time-bar--fixed-end":c.fixed&&w.value.length-1===a,paddingno:c.fixed&&w.value.length-2===a}]])},[v("span",se,F(C(e.time)+":00"),1),v("div",re,[(V(!0),g(R,null,z(e.blocks,o=>(V(),g("div",{key:o.value,"data-val":o.value,"data-idx":o.index,class:j(["time-block",{"time-block--selected":u.value.includes(o.index)||y.value==o.index,"time-block--readonly":c.readonly,"time-block--disabled":o.disabled,"in-range":H.value.length==2&&o.index>H.value[0]&&o.index<H.value[1]}]),onClick:r=>D(e,o,o.index),onMousemove:r=>s(o.index),onMouseleave:r=>S(o.index)},null,42,de))),128))])],2))),128))],2)]),c.showArrow?(V(),g("div",{key:1,class:"time-picker-next",onClick:d[1]||(d[1]=e=>I(-1))}," > ")):A("",!0)]))}});const T=te(ce,[["__scopeId","data-v-a47c5af3"]]),ve={class:"flex-c"},me=v("p",null,[h(" 操作逻辑："),v("br"),h(" 1.当选择了某一节，点击该节之前则是选择开始时间，点击该节之后则是选择结束时间；"),v("br"),h(" 2.开始和结束时间均选择完毕，选择高亮区域之前则重置，选择高亮区域之后则是重新选择结束时间；"),v("br"),h(" 3.开始和结束时间均选择完毕，往前选择则重置，往后选择则是选择结束时间；"),v("br"),h(" 3.开始和结束时间均选择完毕，点击高亮区域中间（不含第一节或最后一节），则是重新选择结束时间；"),v("br"),h(" 4.开始和结束时间均选择完毕，点击高亮区域第一节或最后一节均是取消选择该时间。"),v("br")],-1),pe={class:"my-2"},_e=K({__name:"block-time-picker",setup(c){const p=m([]),n={10:"10分",15:"15分",20:"20分",30:"30分",60:"60分"},B=U({minHour:"00",maxHour:"23",step:20,activeColor:"#f55",readonly:!0,disabledBefore:!0});return($,b)=>{const w=f("el-icon"),u=f("el-tooltip"),l=f("el-row"),i=f("el-divider"),y=f("el-color-picker"),H=f("el-form-item"),P=f("el-checkbox"),I=f("el-switch"),C=f("el-option"),W=f("el-select"),O=f("el-form"),D=f("el-card");return V(),le(D,{shadow:"never"},{header:x(()=>[_(l,{type:"flex",align:"middle",justify:"space-between"},{default:x(()=>{var s;return[v("div",ve,[h(" 块状时间段选择组件(自主封装)  "),_(u,{trigger:"click"},{content:x(()=>[me]),default:x(()=>[_(w,{class:"cursor-pointer"},{default:x(()=>[_(L(oe))]),_:1})]),_:1})]),v("span",null,"已选时间(当前操作)："+F(((s=p.value)==null?void 0:s.join(" ~ "))??"--"),1)]}),_:1})]),default:x(()=>[v("div",null,[_(i,{"content-position":"left"},{default:x(()=>[h("默认使用")]),_:1}),_(T,{modelValue:p.value,"onUpdate:modelValue":b[0]||(b[0]=s=>p.value=s)},null,8,["modelValue"]),_(i,{"content-position":"left"},{default:x(()=>[h("指定可选范围")]),_:1}),_(T,{modelValue:p.value,"onUpdate:modelValue":b[1]||(b[1]=s=>p.value=s),"min-hour":9,"max-hour":18},null,8,["modelValue"]),_(i,{"content-position":"left"},{default:x(()=>[h("只读和禁用过去时间")]),_:1}),_(T,ae({modelValue:p.value,"onUpdate:modelValue":b[2]||(b[2]=s=>p.value=s)},L(ne)(B,["readonly","disabledBefore"])),null,16,["modelValue"]),_(i,{"content-position":"left"},{default:x(()=>[h("自定义时间间隔")]),_:1}),(V(!0),g(R,null,z(Object.keys(n).reverse(),s=>(V(),g("div",{key:s},[v("p",pe,"每隔 "+F(s)+" 分钟",1),_(T,{modelValue:p.value,"onUpdate:modelValue":b[3]||(b[3]=S=>p.value=S),step:s},null,8,["modelValue","step"])]))),128)),A("",!0)])]),_:1})}}});export{_e as default};
