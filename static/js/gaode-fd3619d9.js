import{e as s,o as p,b3 as f,a as m,r as h,f as w,w as i,I as v,u as _,g,k as l,a8 as M}from"./index-367ecc49.js";import{_ as y}from"./plugin-vueexport-helper-c27b6911.js";function k(t){const o=s(!1),n=s(!1),a=s(!1);let e;const c=new Promise((r,u)=>{p(()=>{e=document.createElement("script"),e.type="text/javascript",e.onload=function(){o.value=!1,a.value=!0,n.value=!1,r("")},e.onerror=function(d){o.value=!1,a.value=!1,n.value=!0,u(d)},e.src=t.src,document.head.appendChild(e)})});return f(()=>{e&&e.remove()}),{isLoading:o,error:n,success:a,toPromise:()=>c}}const A="https://webapi.amap.com/maps?v=2.0&key=431cda275c880659aa68b495895c81d8",x=m({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"100vh"}},setup(){const t=s(null),{toPromise:o}=k({src:A});async function n(){await o(),await v();const a=_(t);if(!a)return;const e=window.AMap;new e.Map(a,{zoom:11,zooms:[2,22],viewMode:"3D"})}return p(()=>{n()}),{wrapRef:t}}}),C=l("div",null,"高德地图",-1);function P(t,o,n,a,e,c){const r=h("el-card");return g(),w(r,{shadow:"never"},{header:i(()=>[C]),default:i(()=>[l("div",{ref:"wrapRef",style:M({height:t.height,width:t.width})},null,4)]),_:1})}const b=y(x,[["render",P]]);export{b as default};