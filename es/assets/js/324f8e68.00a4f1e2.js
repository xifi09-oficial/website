"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>N,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$deleteVar",description:"$deleteVar eliminar\xe1 una variable determinada.",id:"deleteVar"},b=void 0,v={unversionedId:"functions/variables-related/deleteVar",id:"version-6.4.0/functions/variables-related/deleteVar",title:"$deleteVar",description:"$deleteVar eliminar\xe1 una variable determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/deleteVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/deleteVar",permalink:"/es/docs/functions/variables-related/deleteVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690769721,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$deleteVar",description:"$deleteVar eliminar\xe1 una variable determinada.",id:"deleteVar"},sidebar:"docs",previous:{title:"$createVar",permalink:"/es/docs/functions/variables-related/createVar"},next:{title:"$getChannelVar",permalink:"/es/docs/functions/variables-related/getChannelVar"}},g={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(O,u(s(s({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$deleteVar")," eliminar\xe1 una variable determinada."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteVar[variable;id;table?]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"variable"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena, n\xfamero"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nombre variable."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ID de la variable a eliminar ( userID etc.)."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"tabla?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Tabla variable."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'Esto eliminar\xe1 una variable llamada "Test":'),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "deleteVar",\n    code: `\n  $deleteVar[Test;$authorID;main]\n  `\n});\n')))}N.isMDXComponent=!0}}]);