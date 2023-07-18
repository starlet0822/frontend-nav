import{d as l,f as e,b as o,bo as s,a as t}from"./index-d20c5bfd.js";const d=`const obj = {
  name: "john",
  age: 18,
  sex: "male",
  children: []
};

console.log(obj); // console.log
`,a=t(d),m=l({setup(){return()=>e("div",{class:"layout-demo"},[e(o("el-row"),{gutter:16},{default:()=>[e(o("el-col"),{key:name,xs:24,sm:24,md:12,lg:8,xl:6},{default:()=>[e(o("el-card"),{class:"mb-4",shadow:"never"},{default:()=>[e(s,{modelValue:a,"onUpdate:modelValue":n=>a=n,height:"200px",language:"javascript"},null)],header:()=>e("div",null,[name])})]})]})])}});export{m as default};
