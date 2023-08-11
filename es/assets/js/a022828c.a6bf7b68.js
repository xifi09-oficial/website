"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&d(e,n,t[n]);return e},p=(e,t)=>o(e,s(t)),u=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$messageAttachment",description:"$messageAttachment devolver\xe1 un archivo adjunto de mensajes dependiendo del \xedndice dado.",id:"messageAttachment"},f=void 0,v={unversionedId:"functions/message-related/messageAttachment",id:"version-6.4.0/functions/message-related/messageAttachment",title:"$messageAttachment",description:"$messageAttachment devolver\xe1 un archivo adjunto de mensajes dependiendo del \xedndice dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/messageAttachment.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/messageAttachment",permalink:"/es/docs/functions/message-related/messageAttachment",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$messageAttachment",description:"$messageAttachment devolver\xe1 un archivo adjunto de mensajes dependiendo del \xedndice dado.",id:"messageAttachment"},sidebar:"docs",previous:{title:"$message",permalink:"/es/docs/functions/message-related/message"},next:{title:"$messageFlags",permalink:"/es/docs/functions/message-related/messageFlags"}},h={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:y},j="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(j,p(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messageAttachment")," devolver\xe1 un mensaje adjunto dependiendo del \xedndice dado."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$messageAttachment[indice?]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\xedndice?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"El \xedndice del archivo adjunto de mensajes ser\xe1 devuelto."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 el archivo adjunto:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'messageAttachment',\n    code: `\nTen\xeda el siguiente archivo adjunto en su mensaje: $messageAttachment\n  `\n});\n")))}O.isMDXComponent=!0}}]);