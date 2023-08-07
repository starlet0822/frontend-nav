import{a as l,c as e,r as a,bs as s,e as t}from"./index-77d71d8d.js";const d=`const obj = {
  name: "john",
  age: 18,
  sex: "male",
  children: []
};

console.log(obj); // console.log
`,n=t(d),m=l({setup(){return()=>e("div",{class:"layout-demo"},[e(a("el-row"),{gutter:16},{default:()=>[e(a("el-col"),{key:name,xs:24,sm:24,md:12,lg:8,xl:6},{default:()=>[e(a("el-card"),{class:"mb-4",shadow:"never"},{default:()=>[e(s,{modelValue:n,"onUpdate:modelValue":o=>n=o,height:"200px",language:"javascript"},null)],header:()=>e("div",null,[name])})]})]})])}});export{m as default};
