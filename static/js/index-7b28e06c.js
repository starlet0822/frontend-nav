import{d as b}from"./file-03a9a626.js";import x from"./SignaturePad-d461fc6b.js";import{d as y,a as _,b as s,j as u,f as t,w as e,e as p,u as S,J as k,g as f,h as o,B as C,N as B,z as N,A as I}from"./index-09423f12.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const m=n=>(N("data-v-7177bdac"),n=n(),I(),n),j={class:"signature-demo"},P=m(()=>o("span",null,"手写签名区域",-1)),R=m(()=>o("span",null,"预览签名区域",-1)),q=["src"],z=y({__name:"index",setup(n){const a=_(null),l=_(null),v=()=>{l.value.guide()},g=()=>{},h=d=>{if(a.value=d,!a.value)return!1},w=()=>{if(!a.value)return B("下载失败，要先签名哦~",{type:"error"}),!1;b(a.value,"mySign.png")};return(d,A)=>{const c=s("el-button"),i=s("el-row"),r=s("el-card");return p(),u("div",j,[t(r,{shadow:"never"},{header:e(()=>[t(i,{type:"flex",align:"middle",justify:"space-between"},{default:e(()=>[P,t(c,{class:"button",text:"",icon:S(k),onClick:v},{default:e(()=>[f(" 签名教程 ")]),_:1},8,["icon"])]),_:1})]),default:e(()=>[t(x,{ref_key:"signaturePadRef",ref:l,onSave:h},null,512)]),_:1}),t(r,{shadow:"never",class:"preview"},{header:e(()=>[t(i,{type:"flex",align:"middle",justify:"space-between"},{default:e(()=>[R,t(c,{class:"button",disabled:!a.value,onClick:w},{default:e(()=>[f(" 下载签名 ")]),_:1},8,["disabled"])]),_:1})]),default:e(()=>[o("div",null,[a.value?(p(),u("img",{key:0,class:"sign-img",src:a.value,onClick:g},null,8,q)):C("",!0)])]),_:1})])}}});const T=V(z,[["__scopeId","data-v-7177bdac"]]);export{T as default};
