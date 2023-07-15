import{d as l,f as e,b as n,bn as s,a as t}from"./index-1dfbcfb5.js";const d=`const obj = {
  name: "john",
  age: 18,
  sex: "male",
  children: []
};

console.log(obj); // console.log
`,a=t(d),m=l({setup(){return()=>e("div",{class:"layout-demo"},[e(n("el-row"),{gutter:16},{default:()=>[e(n("el-col"),{key:name,xs:24,sm:24,md:12,lg:8,xl:6},{default:()=>[e(n("el-card"),{class:"mb-4",shadow:"never"},{default:()=>[e(s,{modelValue:a,"onUpdate:modelValue":o=>a=o,height:"200px",language:"javascript"},null)],header:()=>e("div",null,[name])})]})]})])}});export{m as default};
