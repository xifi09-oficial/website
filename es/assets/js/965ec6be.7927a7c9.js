"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30845:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>E,frontMatter:()=>b,metadata:()=>v,toc:()=>g});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>i(e,l(t)),m=(e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const b={title:"$isVariableExist",description:"$isVariableExist comprueba si existe una variable dada en una tabla determinada.",id:"isVariableExist"},f=void 0,v={unversionedId:"functions/util-related/isVariableExist",id:"version-6.4.0/functions/util-related/isVariableExist",title:"$isVariableExist",description:"$isVariableExist comprueba si existe una variable dada en una tabla determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isVariableExist.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isVariableExist",permalink:"/es/docs/functions/util-related/isVariableExist",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$isVariableExist",description:"$isVariableExist comprueba si existe una variable dada en una tabla determinada.",id:"isVariableExist"},sidebar:"docs",previous:{title:"$isValidObject",permalink:"/es/docs/functions/util-related/isValidObject"},next:{title:"$isVerified",permalink:"/es/docs/functions/util-related/isVerified"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function E(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(O,d(c(c({},k),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isVariableExist")," comprueba si existe una variable dada en una tabla determinada."),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isVariableExist[variable;table?]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"variable"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"El nombre de variable."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"tabla?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"El nombre de la tabla."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto ser\xe1 verdadero o falso dependiendo de si existe una variable llamada ",(0,r.kt)("inlineCode",{parentName:"p"},"Ejemplo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isVariableExist',\n    code: `\n  $isVariableExist[Example;main]\n  `\n});\n")))}E.isMDXComponent=!0}}]);