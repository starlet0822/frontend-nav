import g from"./SignaturePad-7a803157.js";import{d as y,a as f,b as l,j as w,f as s,w as a,e as b,u as L,K as R,g as m,h as r,B as U,L as k,z as x,A as S,_ as B}from"./index-e3adf0ce.js";function C(n){const e=n.split(","),o=e[0].match(/:(.*?);/)[1],c=window.atob(e[1]);let t=c.length;const d=new Uint8Array(t);for(;t--;)d[t]=c.charCodeAt(t);return new Blob([d],{type:o})}function j(n){let e="";if(window.createObjectURL!==void 0)e=window.createObjectURL(n);else if(window.webkitURL!==void 0)try{e=window.webkitURL.createObjectURL(n)}catch{}else if(window.URL!==void 0)try{e=window.URL.createObjectURL(n)}catch{}return e}function O(n,e){const o=C(n);if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(o,e);else{const c=j(o),t=document.createElement("a");t.style.display="none",t.href=c,t.setAttribute("download",e),document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}}const v=n=>(x("data-v-7177bdac"),n=n(),S(),n),A={class:"signature-demo"},I=v(()=>r("span",null,"手写签名区域",-1)),V=v(()=>r("span",null,"预览签名区域",-1)),N=["src"],P=y({__name:"index",setup(n){const e=f(null),o=f(null),c=()=>{o.value.guide()},t=()=>{},d=i=>{if(e.value=i,!e.value)return!1},h=()=>{if(!e.value)return k("下载失败，要先签名哦~",{type:"error"}),!1;O(e.value,"mySign.png")};return(i,E)=>{const u=l("el-button"),_=l("el-row"),p=l("el-card");return b(),w("div",A,[s(p,{shadow:"never"},{header:a(()=>[s(_,{type:"flex",align:"middle",justify:"space-between"},{default:a(()=>[I,s(u,{class:"button",text:"",icon:L(R),onClick:c},{default:a(()=>[m(" 签名教程 ")]),_:1},8,["icon"])]),_:1})]),default:a(()=>[s(g,{ref_key:"signaturePadRef",ref:o,onSave:d},null,512)]),_:1}),s(p,{shadow:"never",class:"preview"},{header:a(()=>[s(_,{type:"flex",align:"middle",justify:"space-between"},{default:a(()=>[V,s(u,{class:"button",disabled:!e.value,onClick:h},{default:a(()=>[m(" 下载签名 ")]),_:1},8,["disabled"])]),_:1})]),default:a(()=>[r("div",null,[e.value?(b(),w("img",{key:0,class:"sign-img",src:e.value,onClick:t},null,8,N)):U("",!0)])]),_:1})])}}});const D=B(P,[["__scopeId","data-v-7177bdac"]]);export{D as default};
