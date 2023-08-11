"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25769],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(a),s=n,f=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return a?r.createElement(f,o(o({ref:e},p),{},{components:a})):r.createElement(f,o({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},60268:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))d.call(e,a)&&p(t,a,e[a]);if(i)for(var a of i(e))m.call(e,a)&&p(t,a,e[a]);return t},c=(t,e)=>l(t,o(e)),s=(t,e)=>{var a={};for(var r in t)d.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&m.call(t,r)&&(a[r]=t[r]);return a};const f={title:"$formatDate",description:"$formatDate formatear\xe1 una fecha determinada.",id:"formatDate"},g=void 0,k={unversionedId:"functions/util-related/formatDate",id:"version-6.4.0/functions/util-related/formatDate",title:"$formatDate",description:"$formatDate formatear\xe1 una fecha determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/formatDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/formatDate",permalink:"/es/docs/functions/util-related/formatDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$formatDate",description:"$formatDate formatear\xe1 una fecha determinada.",id:"formatDate"},sidebar:"docs",previous:{title:"$findSpecialChars",permalink:"/es/docs/functions/util-related/findSpecialChars"},next:{title:"$get",permalink:"/es/docs/functions/util-related/get"}},N={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:b},y="wrapper";function h(t){var e=t,{components:a}=e,n=s(e,["components"]);return(0,r.kt)(y,c(u(u({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$formatDate")," formatear\xe1 una fecha determinada."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$formatDate[fecha;formato?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"fecha"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"La fecha que desea formatear."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"formato?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El formato que se utilizar\xe1 para mostrar la fecha (listado a continuaci\xf3n)."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null," ",(0,r.kt)("h2",null," Formateo posible ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Formato"),(0,r.kt)("th",u({parentName:"tr"},{align:null})),(0,r.kt)("th",u({parentName:"tr"},{align:"right"}),"Devueltos"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"dddd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve la semana, lunes, martes, mi\xe9rcoles ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"dd"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve la abreviatura del d\xeda de la semana, Lun, Mar, Mi\xe9 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"D"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Obtiene el d\xeda del mes"),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"N\xfamero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"DD"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Obtiene el d\xeda del mes"),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"DDD"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el d\xeda del a\xf1o, 256, 257 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"N\xfamero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"M / MM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el d\xeda del a\xf1o, 10, 11 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"N\xfamero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"MMM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve la abreviatura del d\xeda de la semana, Lun, Mar, Mi\xe9 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"MMMM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el mes completamente Enero, Febrero ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"Cadena")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"YYYY"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el a\xf1o en su totalidad, 2020, 2021 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"N\xfamero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"YY"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el d\xeda del a\xf1o, 20, 21 ..."),(0,r.kt)("td",u({parentName:"tr"},{align:"right"}),"N\xfamero"))))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 tu fecha actual en el formato ",(0,r.kt)("inlineCode",{parentName:"p"},"dddd, DD MMMM YYYY"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'formatDate',\n    code: `\n  $formatDate[$dateStamp;dddd, DD MMMM YYYY]\n  `\n});\n")))}h.isMDXComponent=!0}}]);