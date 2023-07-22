"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63047],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(y,o(o({ref:r},p),{},{components:t})):a.createElement(y,o({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85144:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>y,metadata:()=>v,toc:()=>g});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>l(e,o(r)),m=(e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arrayReverse",description:"$arrayReverse inverse les \xe9l\xe9ments dans le tableau donn\xe9.",id:"arrayReverse"},f=void 0,v={unversionedId:"functions/array-related/arrayReverse",id:"version-6.4.0/functions/array-related/arrayReverse",title:"$arrayReverse",description:"$arrayReverse inverse les \xe9l\xe9ments dans le tableau donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayReverse.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayReverse",permalink:"/fr/docs/functions/array-related/arrayReverse",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 juil. 2023",frontMatter:{title:"$arrayReverse",description:"$arrayReverse inverse les \xe9l\xe9ments dans le tableau donn\xe9.",id:"arrayReverse"},sidebar:"docs",previous:{title:"$arrayPush",permalink:"/fr/docs/functions/array-related/arrayPush"},next:{title:"$arrayShift",permalink:"/fr/docs/functions/array-related/arrayShift"}},b={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:g},k="wrapper";function h(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(k,d(u(u({},O),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayReverse")," inverse les \xe9l\xe9ments dans le tableau donn\xe9."),(0,a.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$arrayReverse[nom]\n")),(0,a.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-reverse",\n    code: `\n  $arrayReverse[tableau]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}h.isMDXComponent=!0}}]);