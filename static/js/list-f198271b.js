import{_ as q}from"./index.vue_vue_type_script_setup_true_lang-9eb635e2.js";import{P as N,g as A,a as F}from"./constants-e4917016.js";import{d as H}from"./default-2af36baf.js";import{o as M}from"./omit-4a017f3f.js";import{d as Q,a as x,r as U,n as W,b as o,Y as P,j as r,f as a,w as _,e as n,h as s,S as k,H as Y,I as G,u as B,v as C,g as J,c as K,B as I,z as T,A as X}from"./index-09423f12.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-40e7771b.js";import"./question-filled-00b6e9f5.js";const ee=(l="el-option",u={})=>{const m=[];return Object.keys(u).forEach((e,i)=>{const t={optionsType:l,prop:`${l.replace("el-","")}${i+1}`,text:u[e]};["el-radio","el-radio-button","el-checkbox"].includes(l)&&(t.label=e),["el-option"].includes(l)&&(t.value=e,t.label=u[e]),m.push(t)}),m},z=l=>(T("data-v-a2e891ad"),l=l(),X(),l),te={class:"list-wrapper overflow-auto",style:{height:"500px"}},le=["infinite-scroll-disabled"],ae={class:"flex items-start"},se={class:"name flex-1"},oe={class:""},ne={key:1,class:"el-loading-spinner flex-center",style:{position:"unset","margin-top":"10px"}},ie=z(()=>s("svg",{class:"circular",viewBox:"0 0 50 50"},[s("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})],-1)),ce=z(()=>s("div",{class:"text-gray-400"},"loading...",-1)),re=[ie,ce],ue={key:2,class:"mt-2 text-sm text-gray-400 text-center"},pe=Q({name:"InfiniteScrollList",__name:"list",setup(l){const u={labelPosition:"right",labelWidth:"80px",labelSuffix:":"},m=[{type:"el-input",prop:"name",label:"名称",value:"",attrs:{clearable:!0},col:{xs:24,sm:24,md:12,lg:8,xl:6}},{type:"el-select",prop:"type",label:"类型",value:"",attrs:{class:"w-full"},options:ee("el-option",N),col:{xs:24,sm:24,md:12,lg:8,xl:6}}],e=x([]),i=x({}),t=U({pageNo:1,pageSize:10,total:0}),p=x(!1),O=W(()=>e.value.length>=t.total),v=x(!1),S=()=>{V()},j=f=>{v.value=!1,i.value=f,t.pageNo=1,e.value=[],S()},V=async()=>{if(!v.value)try{p.value=!0;const f=M({...t,...i.value},["total"]),{success:g,data:{rows:h,total:y}={}}=await A(f);if(g){t.total=y??0,t.pageNo+=1;let d=[];Object.values(F).forEach(b=>{d=d.concat(h.filter(w=>w.type===b))}),e.value.length<=t.total&&(e.value=e.value.concat(d)),e.value.length===t.total&&(v.value=!0)}}finally{p.value=!1}};return V(),(f,g)=>{const h=o("el-card"),y=o("el-avatar"),d=o("el-tag"),b=o("el-statistic"),w=o("el-empty"),D=o("el-col"),E=o("el-row"),L=P("waves"),$=P("infinite-scroll");return n(),r("div",null,[a(h,{shadow:"never"},{default:_(()=>[a(q,{modelValue:i.value,"onUpdate:modelValue":g[0]||(g[0]=c=>i.value=c),formItems:m,formOptions:u,colCount:"4",isQuery:"",onSearch:j},null,8,["modelValue"])]),_:1}),a(h,{shadow:"never"},{default:_(()=>[a(E,null,{default:_(()=>[a(D,{span:24},{default:_(()=>[s("div",te,[k((n(),r("ul",{"infinite-scroll-disabled":v.value,"infinite-scroll-immediate":!1},[(n(!0),r(Y,null,G(e.value,(c,R)=>k((n(),r("li",{key:c.name+R,class:"list-item p-5 cursor-pointer"},[s("div",ae,[s("div",null,[a(y,{shape:"square",size:"large",src:B(H),style:{width:"50px",height:"50px",opacity:.5,marginRight:"16px"}},null,8,["src"])]),s("div",se,[s("p",oe,C(c.name),1),a(d,null,{default:_(()=>[J(C(B(N)[c.type]),1)]),_:2},1024)]),a(b,{title:"权重",value:c.priority},null,8,["value"])])])),[[L]])),128))],8,le)),[[$,S]]),!p.value&&!e.value.length?(n(),K(w,{key:0,"image-size":200})):I("",!0),p.value?(n(),r("div",ne,re)):I("",!0),!p.value&&O.value?(n(),r("p",ue," 没有更多了~ ")):I("",!0)])]),_:1})]),_:1})]),_:1})])}}});const ye=Z(pe,[["__scopeId","data-v-a2e891ad"]]);export{ye as default};
