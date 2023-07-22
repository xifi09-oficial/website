"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[p]="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))s.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$maximumMembers",description:"$maximumMembers devolver\xe1 la cantidad m\xe1xima de miembros que puede tener un servidor.",id:"maximumMembers"},b=void 0,v={unversionedId:"functions/info-related/maximumMembers",id:"version-6.4.0/functions/info-related/maximumMembers",title:"$maximumMembers",description:"$maximumMembers devolver\xe1 la cantidad m\xe1xima de miembros que puede tener un servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/maximumMembers.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/maximumMembers",permalink:"/es/docs/functions/info-related/maximumMembers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$maximumMembers",description:"$maximumMembers devolver\xe1 la cantidad m\xe1xima de miembros que puede tener un servidor.",id:"maximumMembers"},sidebar:"docs",previous:{title:"$maxRam",permalink:"/es/docs/functions/info-related/maxRam"},next:{title:"$ping",permalink:"/es/docs/functions/info-related/ping"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},x="wrapper";function k(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(x,c(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$maximumMembers")," devolver\xe1 la cantidad m\xe1xima de miembros que puede tener un servidor."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$maximumMembers[servidorID?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID del servidor."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto te devolver\xe1 el m\xe1ximo de miembros que puedes tener en tu servidor:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'maximumMembers',\n    code: `\n  Puedes tener:  \xa1$maximumMembers[$guildID] miembros en este servidor!\n  `\n});\n")))}k.isMDXComponent=!0}}]);