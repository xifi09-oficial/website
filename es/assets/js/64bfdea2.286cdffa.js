"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&d(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$awaitComponentsUntil",description:"$awaitComponentsUntil espera los componentes del mensaje.",id:"awaitComponentsUntil"},k=void 0,g={unversionedId:"functions/awaited-related/awaitComponentsUntil",id:"version-6.4.0/functions/awaited-related/awaitComponentsUntil",title:"$awaitComponentsUntil",description:"$awaitComponentsUntil espera los componentes del mensaje.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitComponentsUntil.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitComponentsUntil",permalink:"/es/docs/functions/awaited-related/awaitComponentsUntil",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$awaitComponentsUntil",description:"$awaitComponentsUntil espera los componentes del mensaje.",id:"awaitComponentsUntil"},sidebar:"docs",previous:{title:"$awaitComponents",permalink:"/es/docs/functions/awaited-related/awaitComponents"},next:{title:"$awaitData",permalink:"/es/docs/functions/awaited-related/awaitData"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],N={toc:y},w="wrapper";function v(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(w,m(c(c({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$awaitComponentsUntil")," espera los componentes del mensaje."),(0,a.kt)("h2",c({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$awaitComponentsUntil[CanalID;ID de mensaje;filtro de usuario;tiempo;ID personalizados;comandos;mensaje de error?;esperar datos?]\n")),(0,a.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"canalID"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ID del canal."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"ID de mensaje"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Mensaje ID."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"filtro de usuario"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"A lo que el bot responder\xe1 ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"todos ")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"ID de usuario espec\xedfico")," - cualquier ID de usuario"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"reacciones"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Reacciones que escuchar\xe1 el bot, puede separar varios emojis con una coma ( ",(0,a.kt)("inlineCode",{parentName:"td"},",")," )"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"comandos"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Comandos que se ejecutar\xe1n, puedes separar m\xfaltiples emojis con una coma (",(0,a.kt)("inlineCode",{parentName:"td"},","),")"),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"mensaje de error?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Mensaje de error cuando caduca el comando."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"esperar datos?"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Datos esperados."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"falso")))))}v.isMDXComponent=!0}}]);