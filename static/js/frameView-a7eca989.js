import{d as v,a9 as p,a as o,ak as h,u as e,o as g,Y as x,S as k,e as w,j as V,h as R,F as S}from"./index-f3a66a97.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const B=["element-loading-text"],E=["src"],L=v({name:"FrameView",__name:"frameView",setup(D){var f,m,_;const{t:l}=p(),r=o(!0),t=h(),c=o(""),i=o(null);(f=e(t.meta))!=null&&f.frameSrc&&(c.value=(m=e(t.meta))==null?void 0:m.frameSrc),((_=e(t.meta))==null?void 0:_.frameLoading)===!1&&s();function s(){r.value=!1}function u(){S(()=>{const a=e(i);if(!a)return;const n=a;n.attachEvent?n.attachEvent("onload",()=>{s()}):a.onload=()=>{s()}})}return g(()=>{u()}),(a,n)=>{const d=x("loading");return k((w(),V("div",{class:"frame","element-loading-text":e(l)("status.hsLoad")},[R("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,E)],8,B)),[[d,r.value]])}}});const j=y(L,[["__scopeId","data-v-3128e9ec"]]);export{j as default};