import{d as y,b as _,Y as f,e as m,j as i,f as t,w as s,h as e,S as g,H as h,I as b,z as j,A as w}from"./index-d20c5bfd.js";import{_ as z}from"./plugin-vueexport-helper-c27b6911.js";const o=d=>(j("data-v-029845bd"),d=d(),w(),d),I={class:"demo-loading"},S=["src"],k=o(()=>e("p",{class:"text-center truncate"},"原生 img 标签",-1)),L=o(()=>e("p",{class:"text-center truncate"},"el-image 组件",-1)),B=["src"],C=o(()=>e("p",{class:"text-center truncate"},"v-gradual 渐进式指令加载",-1)),D=o(()=>e("p",{class:"text-center truncate"},"el-image 图片预览",-1)),N=o(()=>e("p",{class:"text-center truncate"},"el-image 组件懒加载",-1)),V=o(()=>e("p",{class:"text-center truncate"},"v-lazy & v-gradual 指令懒加载",-1)),A=y({__name:"Loading",setup(d){const l={width:"100%",height:"auto"},a=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"];return(E,F)=>{const c=_("el-col"),r=_("el-image"),p=_("el-card"),v=_("el-row"),u=f("gradual"),x=f("lazy");return m(),i("div",I,[t(v,{gutter:16},{default:s(()=>[t(c,{xs:24,sm:24,md:12,lg:8,xl:6},{default:s(()=>[e("div",null,[e("img",{src:a[0],style:l,alt:"原生 img 标签"},null,8,S),k])]),_:1}),t(c,{xs:24,sm:24,md:12,lg:8,xl:6},{default:s(()=>[e("div",null,[t(r,{src:a[0],style:l,alt:"el-image 组件"},null,8,["src"]),L])]),_:1}),t(c,{xs:24,sm:24,md:12,lg:8,xl:6},{default:s(()=>[e("div",null,[g(e("img",{src:a[0],style:l,alt:"渐进式加载"},null,8,B),[[u]]),C])]),_:1}),t(c,{xs:24,sm:24,md:12,lg:8,xl:6},{default:s(()=>[e("div",null,[t(r,{src:a[0],"zoom-rate":1.2,"preview-src-list":a,style:l},null,8,["src"]),D])]),_:1}),t(c,{span:12,class:"mt-6 text-center"},{default:s(()=>[t(p,{shadow:"never",class:"demo-image__lazy"},{header:s(()=>[N]),default:s(()=>[e("div",null,[(m(),i(h,null,b(a,n=>t(r,{class:"mb-4",key:n,src:n,lazy:"","zoom-rate":1.2,"preview-src-list":a,style:l},null,8,["src"])),64))])]),_:1})]),_:1}),t(c,{span:12,class:"mt-6 text-center"},{default:s(()=>[t(p,{shadow:"never",class:"demo-image__lazy"},{header:s(()=>[V]),default:s(()=>[(m(),i(h,null,b(a,n=>e("div",{key:n,class:"mb-4"},[g(e("img",{style:l,alt:"v-lazy 指令懒加载"},null,512),[[x,n],[u]])])),64))]),_:1})]),_:1})]),_:1})])}}});const q=z(A,[["__scopeId","data-v-029845bd"]]);export{q as default};