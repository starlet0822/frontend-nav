import{a as C,$ as V,e as b,r as s,Z as k,n as y,c as n,w as o,g as E,u,a0 as F,j as J,U as O,k as d,a1 as i}from"./index-367ecc49.js";const S=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," JSON 读取回显 ")],-1),B=d("div",{class:"el-upload__tip"},"仅支持上传 json 文件",-1),_=".json",T=C({name:"JsonReader",__name:"json-reader",setup(D){const{isDark:f}=V(),l=b("{}"),p=t=>{const e=t.name,r=e.lastIndexOf(".");if(r===-1)return i.error("文件格式不正确!"),!1;const a=e.substring(r+1);return _.includes(a)?!0:(i.error("文件格式不正确!"),!1)},m=t=>{l.value="{}"},v=t=>new Promise((e,r)=>{const a=new FileReader;a.onload=()=>{const c=a.result;e(c)},a.readAsText(t)}),w=async t=>{const e=await v(t.file);l.value=e};return(t,e)=>{const r=s("el-button"),a=s("el-upload"),c=s("el-col"),h=s("CodeEditor"),j=s("el-row"),x=s("el-card"),N=k("copy");return E(),y("div",null,[n(x,{shadow:"never"},{header:o(()=>[S]),default:o(()=>[n(j,null,{default:o(()=>[n(c,null,{default:o(()=>[n(a,{accept:_,"before-upload":p,"http-request":w,action:"/",limit:1,multiple:!1,"on-remove":m},{tip:o(()=>[B]),default:o(()=>[n(r,{type:"primary",icon:u(F)},{default:o(()=>[J(" 上传 JSON 文件 ")]),_:1},8,["icon"])]),_:1})]),_:1}),n(c,null,{default:o(()=>[O(n(h,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=g=>l.value=g),language:"json",showTools:!1,mode:u(f)?"dark":"default"},null,8,["modelValue","mode"]),[[N,l.value]])]),_:1})]),_:1})]),_:1})])}}});export{T as default};
