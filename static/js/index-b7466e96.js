import{d as l,_ as n,a as d,c as o,r,h as i,i as u}from"./index-77d71d8d.js";const s=Object.assign({"./Bar.vue":()=>n(()=>import("./Bar-8a2dd0cb.js"),["static/js/Bar-8a2dd0cb.js","static/js/useEcharts-3cbff949.js","static/js/index-77d71d8d.js","static/css/index-45124732.css","static/js/install-caa0498b.js","static/js/plugin-vueexport-helper-c27b6911.js"]),"./Line.vue":()=>n(()=>import("./Line-6d3ac6eb.js"),["static/js/Line-6d3ac6eb.js","static/js/useEcharts-3cbff949.js","static/js/index-77d71d8d.js","static/css/index-45124732.css","static/js/install-caa0498b.js","static/js/plugin-vueexport-helper-c27b6911.js"]),"./Pie.vue":()=>n(()=>import("./Pie-969ddb2d.js"),["static/js/Pie-969ddb2d.js","static/js/useEcharts-3cbff949.js","static/js/index-77d71d8d.js","static/css/index-45124732.css","static/js/install-caa0498b.js","static/js/plugin-vueexport-helper-c27b6911.js"])}),_=Object.keys(s).reduce((e,t)=>{const c=t.replace(/^\.\/(.*)\.\w+$/,"$1");return e[c]=l(s[t]),e},{}),a=_;function m(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!u(e)}const f=d({setup(){return()=>{let e;return o("div",{class:"layout-demo"},[o(r("el-row"),{gutter:16},m(e=Object.keys(a).map(t=>o(r("el-col"),{key:t,xs:24,sm:24,md:12,lg:8,xl:6},{default:()=>[o(r("el-card"),{class:"mb-4",shadow:"never"},{default:()=>[i(a[t])],header:()=>o("div",null,[t])})]})))?e:{default:()=>[e]})])}}});export{f as default};