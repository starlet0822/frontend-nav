import{a as k,v as b,e as w,bl as u,r as a,g as d,f as C,w as t,c as s,a9 as i,j as V,k as m,z as x,n as B,K as S,L as z,aM as P,ae as N,bt as U}from"./index-f893409e.js";const j={class:"card-header"},A=k({name:"PermissionPage",__name:"index",setup(H){var o;const n=b(()=>({width:"85vw",justifyContent:"start"})),l=w((o=u())==null?void 0:o.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:l.value,password:"admin123"}).then(r=>{r.success&&(P().removeItem("async-routes"),N().clearAllCachePage(),U())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),g=a("el-select"),y=a("el-card"),h=a("el-space");return d(),C(h,{direction:"vertical",size:"large"},{default:t(()=>[s(v,{style:i(n.value),size:"large",effect:"dark"},{default:t(()=>[V(" 模拟后台根据不同角色返回对应路由（具体参考完整版pure-admin代码） ")]),_:1},8,["style"]),s(y,{shadow:"never",style:i(n.value)},{header:t(()=>[m("div",j,[m("span",null,"当前角色："+x(l.value),1)])]),default:t(()=>[s(g,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),onChange:p},{default:t(()=>[(d(),B(S,null,z(_,e=>s(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{A as default};