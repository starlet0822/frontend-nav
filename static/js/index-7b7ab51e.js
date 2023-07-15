import{d as B,Y as F,S as m,U as K,r as L,a9 as x,as as z,e as N,j as T,h as a,a2 as Q,a as E,aa as ee,o as oe,p as ne,b as s,u as e,f as o,ag as te,w as n,a7 as H,G as Z,ai as S,g as y,v as A,bk as se,bo as ae,ay as le,N as re,_ as ie}from"./index-1dfbcfb5.js";import{k as ce,f as de,b as ue,c as _e,i as pe,j as he,d as D,g as me,a as U}from"./dark-4b5b85bc.js";const h=B({name:"Motion",props:{delay:{type:Number,default:50}},render(){const{delay:_}=this,l=F("motion");return m(K("div",{},{default:()=>[this.$slots.default()]}),[[l,{initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:_}}}]])}}),fe=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/,ve=L({password:[{validator:(_,l,r)=>{l===""?r(new Error(x(z("login.passwordReg")))):fe.test(l)?r():r(new Error(x(z("login.passwordRuleReg"))))},trigger:"blur"}]}),ge="/frontend-nav/static/png/bg-8e62401a.png",we={xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",class:"icon",viewBox:"0 0 1024 1024"},ye=a("path",{fill:"#FFEA00",d:"M108.544 313.344h808.96v604.16h-808.96z"},null,-1),xe=a("path",{d:"M387.072 632.832c-4.096 28.672-10.24 57.344-14.336 88.064h-2.048c-6.144-30.72-12.288-59.392-18.432-88.064l-34.816-143.36h-38.912l-34.816 143.36c-6.144 28.672-12.288 59.392-18.432 88.064h-2.048l-14.336-88.064-26.624-143.36h-43.008l55.296 274.432h51.2l36.864-151.552c4.096-22.528 8.192-43.008 12.288-63.488h2.048c4.096 20.48 8.192 40.96 12.288 63.488l36.864 151.552h53.248l53.248-274.432h-40.96l-24.576 143.36zm135.168 6.144h100.352v-36.864H522.24v-75.776h118.784v-36.864H479.232v274.432H645.12V727.04H522.24v-88.064zM942.08 204.8H81.92C36.864 204.8 0 241.664 0 286.72v655.36C0 987.136 36.864 1024 81.92 1024h860.16c45.056 0 81.92-36.864 81.92-81.92V286.72c0-45.056-36.864-81.92-81.92-81.92zm20.48 716.8c0 22.528-18.432 40.96-40.96 40.96H102.4c-22.528 0-40.96-18.432-40.96-40.96V307.2c0-22.528 18.432-40.96 40.96-40.96h819.2c22.528 0 40.96 18.432 40.96 40.96v614.4zM823.296 618.496c24.576-10.24 38.912-34.816 38.912-61.44 0-49.152-40.96-67.584-96.256-67.584h-83.968v274.432h92.16c61.44 0 104.448-26.624 104.448-79.872 0-36.864-22.528-59.392-55.296-65.536zm-98.304-94.208h38.912c38.912 0 57.344 10.24 57.344 38.912 0 26.624-18.432 40.96-59.392 40.96h-36.864v-79.872zM768 731.136h-43.008v-92.16H768c43.008 0 67.584 14.336 67.584 45.056S811.008 731.136 768 731.136zM993.28 0H30.72C14.336 0 0 14.336 0 30.72v102.4c0 16.384 14.336 30.72 30.72 30.72h962.56c16.384 0 30.72-14.336 30.72-30.72V30.72C1024 14.336 1009.664 0 993.28 0z"},null,-1),ze=[ye,xe];function Ce(_,l){return N(),T("svg",we,ze)}const Ve={render:Ce},ke={width:24,height:24,body:'<path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"/>'},be={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},$e={class:"select-none"},Ie=["src"],Me={class:"flex-c absolute right-5 top-3"},Re={class:"check-en"},Ee={class:"login-container"},He={class:"login-box"},Ze={class:"login-form"},Se={class:"outline-none"},Ae=B({name:"Login",__name:"index",setup(_){const l=Q(),r=E(!1),f=E(),{initStorage:j}=ce();j();const{t:v}=ee(),{dataTheme:g,dataThemeChange:C}=de();C();const{title:G,getDropdownItemStyle:V,getDropdownItemClass:k}=ue(),{locale:i,translationCh:O,translationEn:P}=_e(),c=L({username:"admin",password:"admin123"}),b=async u=>{r.value=!0,u&&await u.validate((t,w)=>{if(t)se().loginByUsername({username:c.username,password:"admin123"}).then(p=>{p.success&&ae().then(()=>{l.push(le(!0).path),re("登录成功",{type:"success"})})});else return r.value=!1,w})};function $({code:u}){u==="Enter"&&b(f.value)}return oe(()=>{window.document.addEventListener("keypress",$)}),ne(()=>{window.document.removeEventListener("keypress",$)}),(u,t)=>{const w=s("el-switch"),p=s("IconifyIconOffline"),I=s("el-dropdown-item"),q=s("el-dropdown-menu"),W=s("el-dropdown"),M=s("el-input"),R=s("el-form-item"),X=s("el-button"),Y=s("el-form"),J=F("gradual");return N(),T("div",$e,[m(a("img",{src:e(ge),class:"wave"},null,8,Ie),[[J]]),a("div",Me,[o(w,{modelValue:e(g),"onUpdate:modelValue":t[0]||(t[0]=d=>te(g)?g.value=d:null),"inline-prompt":"","active-icon":e(pe),"inactive-icon":e(he),onChange:e(C)},null,8,["modelValue","active-icon","inactive-icon","onChange"]),o(W,{trigger:"click"},{dropdown:n(()=>[o(q,{class:"translation"},{default:n(()=>[o(I,{style:H(e(V)(e(i),"zh")),class:Z(["dark:!text-white",e(k)(e(i),"zh")]),onClick:e(O)},{default:n(()=>[m(o(p,{class:"check-zh",icon:e(D)},null,8,["icon"]),[[S,e(i)==="zh"]]),y(" 简体中文 ")]),_:1},8,["style","class","onClick"]),o(I,{style:H(e(V)(e(i),"en")),class:Z(["dark:!text-white",e(k)(e(i),"en")]),onClick:e(P)},{default:n(()=>[m(a("span",Re,[o(p,{icon:e(D)},null,8,["icon"])],512),[[S,e(i)==="en"]]),y(" English ")]),_:1},8,["style","class","onClick"])]),_:1})]),default:n(()=>[o(e(me),{class:"hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"})]),_:1})]),a("div",Ee,[a("div",He,[a("div",Ze,[o(e(Ve),{class:"avatar"}),o(e(h),null,{default:n(()=>[a("h2",Se,A(e(G)),1)]),_:1}),o(Y,{ref_key:"ruleFormRef",ref:f,model:c,rules:e(ve),size:"large"},{default:n(()=>[o(e(h),{delay:100},{default:n(()=>[o(R,{rules:[{required:!0,message:e(x)(e(z)("login.usernameReg")),trigger:"blur"}],prop:"username"},{default:n(()=>[o(M,{clearable:"",modelValue:c.username,"onUpdate:modelValue":t[1]||(t[1]=d=>c.username=d),placeholder:e(v)("login.username"),"prefix-icon":e(U)(e(be))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])]),_:1}),o(e(h),{delay:150},{default:n(()=>[o(R,{prop:"password"},{default:n(()=>[o(M,{clearable:"","show-password":"",modelValue:c.password,"onUpdate:modelValue":t[2]||(t[2]=d=>c.password=d),placeholder:e(v)("login.password"),"prefix-icon":e(U)(e(ke))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(h),{delay:250},{default:n(()=>[o(X,{class:"w-full mt-4",size:"default",type:"primary",loading:r.value,onClick:t[3]||(t[3]=d=>b(f.value))},{default:n(()=>[y(A(e(v)("login.login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])])])])}}});const Be=ie(Ae,[["__scopeId","data-v-f0301f1f"]]);export{Be as default};