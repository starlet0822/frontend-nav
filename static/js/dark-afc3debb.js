import{F as x,v as f,bg as Z,aG as ee,ac as O,a6 as j,as as c,at as m,a7 as p,aj as te,a8 as F,e as _,a as S,h as k,bh as ne,bi as E,bj as ae,a4 as oe,bk as ue,ae as le,bl as N,ab as re,bm as se,aA as fe,bn as ie,an as de,l as ce,aK as me,g as A,n as I,k as v}from"./index-77d71d8d.js";function he(){const{$storage:t,$config:e}=x(),a=()=>{Z().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=ee),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},O().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=f(()=>t==null?void 0:t.layout.layout),o=f(()=>t.layout);return{layout:n,layoutTheme:o,initStorage:a}}const ge=j({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=c().getItem(`${m()}layout`))==null?void 0:t.sidebarStatus)??p().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=c().getItem(`${m()}layout`))==null?void 0:e.layout)??p().Layout,device:te()?"mobile":"desktop"}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device}},actions:{TOGGLE_SIDEBAR(t,e){const a=c().getItem(`${m()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),c().setItem(`${m()}layout`,a)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function pe(){return ge(F)}const $e=j({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=c().getItem(`${m()}layout`))==null?void 0:t.epThemeColor)??p().EpThemeColor,epTheme:((e=c().getItem(`${m()}layout`))==null?void 0:e.theme)??p().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":t.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=c().getItem(`${m()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,c().setItem(`${m()}layout`,e))}}});function y(){return $e(F)}const w={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"D:/前端个人项目仓库/frontend_nav/node_modules/.pnpm/@pureadmin+theme@3.1.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $red: #ff2020;
        $blue: #2166f0;
        $grey: #999999;

        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},be="/frontend-nav/",ve="assets";function G(t){let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e}function V(t,e,a){let n=[t.toString(16),e.toString(16),a.toString(16)];for(let o=0;o<3;o++)n[o].length==1&&(n[o]=`0${n[o]}`);return`#${n.join("")}`}function Te(t,e){let a=G(t);for(let n=0;n<3;n++)a[n]=Math.floor(a[n]*(1-e));return V(a[0],a[1],a[2])}function ye(t,e){let a=G(t);for(let n=0;n<3;n++)a[n]=Math.floor((255-a[n])*e+a[n]);return V(a[0],a[1],a[2])}function z(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function D({scopeName:t,multipleScopeVars:e}){const a=Array.isArray(e)&&e.length?e:w.multipleScopeVars;let n=document.documentElement.className;new RegExp(z(t)).test(n)||(a.forEach(o=>{n=n.replace(new RegExp(z(o.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function P({id:t,href:e}){const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a}function Ce(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},a=e.themeLinkTagId||w.themeLinkTagId;let n=document.getElementById(a);const o=e.customLinkHref(`${be.replace(/\/$/,"")}${`/${ve}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${a}_old`;const s=P({id:a,href:o});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),D(e)};return}n=P({id:a,href:o}),D(e),document[(e.themeLinkTagInjectTo||w.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Fe(){var T;const{layoutTheme:t,layout:e}=he(),a=_([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=x(),o=_((T=n==null?void 0:n.layout)==null?void 0:T.darkMode),s=document.documentElement;function i(l=p().Theme??"default"){var r,g;if(t.value.theme=l,Ce({scopeName:`layout-theme-${l}`}),n.layout={layout:e.value,theme:l,darkMode:o.value,sidebarStatus:(r=n.layout)==null?void 0:r.sidebarStatus,epThemeColor:(g=n.layout)==null?void 0:g.epThemeColor},l==="default"||l==="light")h(p().EpThemeColor);else{const C=a.value.find(M=>M.themeColor===l);h(C.color)}}function $(l,r,g){document.documentElement.style.setProperty(`--el-color-primary-${l}-${r}`,o.value?Te(g,r/10):ye(g,r/10))}const h=l=>{y().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let r=1;r<=2;r++)$("dark",r,l);for(let r=1;r<=9;r++)$("light",r,l)};function b(){y().epTheme==="light"&&o.value?i("default"):i(y().epTheme),o.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:o,layoutTheme:t,themeColors:a,dataThemeChange:b,setEpThemeColor:h,setLayoutThemeColor:i}}function Ge(t,e){const a=/^IF-/;if(a.test(t)){const n=t.split(a)[1],o=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),s=n.slice(n.indexOf(" ")+1,n.length);return S({name:"FontIcon",render(){return k(ne,{icon:o,iconType:s,...e})}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?t:typeof t=="object"?S({name:"OfflineIcon",render(){return k(E,{icon:t,...e})}}):S({name:"Icon",render(){const n=t&&t.includes(":")?ae:E;return k(n,{icon:t,...e})}})}function Me(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map(function(o){o(a)}),(n=t.get("*"))&&n.slice().map(function(o){o(e,a)})}}}const R=Me(),Be="/frontend-nav/static/png/user-86885b70.png",Se="当前路由配置不正确，请检查配置";function ke(){var L;const t=pe(),e=oe().options.routes,{wholeMenus:a}=ue(le()),n=((L=p())==null?void 0:L.TooltipEffect)??"light",o=f(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),s=f(()=>{var u;return(u=N())==null?void 0:u.username}),i=f(()=>(u,d)=>({background:u===d?y().epThemeColor:"",color:u===d?"#f4f4f5":"#000"})),$=f(()=>(u,d)=>u===d?"":"dark:hover:!text-primary"),h=f(()=>s.value?{marginRight:"10px"}:""),b=f(()=>!t.getSidebarStatus),T=f(()=>t.getDevice),{$storage:l,$config:r}=x(),g=f(()=>{var u;return(u=l==null?void 0:l.layout)==null?void 0:u.layout}),C=f(()=>"Frontend Nav");function M(u){const d="Frontend Nav";document.title=`${re(u.title)} · ${d}`}function Q(){N().logOut()}function W(){var u;se.push((u=fe())==null?void 0:u.path)}function K(){R.emit("openPanel")}function U(){t.toggleSideBar()}function q(u){u==null||u.handleResize()}function J(u){var H;if(!u.children)return console.error(Se);const d=/^http(s?):\/\//,B=(H=u.children[0])==null?void 0:H.path;return d.test(B)?u.path+"/"+B:B}function X(u){a.value.length===0||Y(u)||R.emit("changLayoutRoute",u)}function Y(u){return ie.includes(u)}return{title:C,device:T,layout:g,logout:Q,routers:e,$storage:l,backTopMenu:W,onPanel:K,getDivStyle:o,changeTitle:M,toggleSideBar:U,menuSelect:X,handleResize:q,resolvePath:J,isCollapse:b,pureApp:t,username:s,userAvatar:Be,avatarsStyle:h,tooltipEffect:n,getDropdownItemStyle:i,getDropdownItemClass:$}}function Ve(t){const{$storage:e,changeTitle:a,handleResize:n}=ke(),{locale:o,t:s}=O(),i=de();function $(){e.locale={locale:"zh"},o.value="zh",t&&n(t.value)}function h(){e.locale={locale:"en"},o.value="en",t&&n(t.value)}return ce(()=>o.value,()=>{a(i.meta)}),me(()=>{var b;o.value=((b=e.locale)==null?void 0:b.locale)??"zh"}),{t:s,route:i,locale:o,translationCh:$,translationEn:h}}const we={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},xe=v("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),Ae=[xe];function Ie(t,e){return A(),I("svg",we,Ae)}const Qe={render:Ie},We={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},Le={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},He=v("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),_e=v("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Ee=[He,_e];function Ne(t,e){return A(),I("svg",Le,Ee)}const Ke={render:Ne},ze={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},De=v("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Pe=v("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),Re=[De,Pe];function Oe(t,e){return A(),I("svg",ze,Re)}const Ue={render:Oe};export{Ge as a,ke as b,Ve as c,We as d,R as e,Fe as f,Qe as g,pe as h,Ke as i,Ue as j,he as k,Ce as t,y as u};
