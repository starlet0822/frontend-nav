import{d as s,a4 as c,u as p,j as u,e as _}from"./index-e3adf0ce.js";const l=s({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=c(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(_(),u("div"))}});export{l as default};
