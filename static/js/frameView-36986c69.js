import{d as v,a9 as p,a as o,ak as h,u as e,o as g,X as x,R as k,e as w,j as R,h as V,E,_ as y}from"./index-8b05b7ac.js";const B=["element-loading-text"],L=["src"],S=v({name:"FrameView",__name:"frameView",setup(D){var f,_,l;const{t:m}=p(),r=o(!0),t=h(),c=o(""),i=o(null);(f=e(t.meta))!=null&&f.frameSrc&&(c.value=(_=e(t.meta))==null?void 0:_.frameSrc),((l=e(t.meta))==null?void 0:l.frameLoading)===!1&&s();function s(){r.value=!1}function u(){E(()=>{const a=e(i);if(!a)return;const n=a;n.attachEvent?n.attachEvent("onload",()=>{s()}):a.onload=()=>{s()}})}return g(()=>{u()}),(a,n)=>{const d=x("loading");return k((w(),R("div",{class:"frame","element-loading-text":e(m)("status.hsLoad")},[V("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,L)],8,B)),[[d,r.value]])}}});const j=y(S,[["__scopeId","data-v-3128e9ec"]]);export{j as default};
