"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$interactionDelete",description:"$interactionDelete eliminar\xe1 una respuesta de una interacci\xf3n.",id:"interactionDelete"},v=void 0,y={unversionedId:"functions/event-related/interactionDelete",id:"version-6.4.0/functions/event-related/interactionDelete",title:"$interactionDelete",description:"$interactionDelete eliminar\xe1 una respuesta de una interacci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/interactionDelete.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/interactionDelete",permalink:"/es/docs/functions/event-related/interactionDelete",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$interactionDelete",description:"$interactionDelete eliminar\xe1 una respuesta de una interacci\xf3n.",id:"interactionDelete"},sidebar:"docs",previous:{title:"$interactionDeferUpdate",permalink:"/es/docs/functions/event-related/interactionDeferUpdate"},next:{title:"$interactionEdit",permalink:"/es/docs/functions/event-related/interactionEdit"}},b={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},D="wrapper";function j(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(D,d(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionDelete")," eliminar\xe1 una respuesta de una interacci\xf3n."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$interactionDelete\n")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto eliminar\xe1 la interacci\xf3n despu\xe9s de 5 segundos."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.interactionCommand({\n    name: "interactionDelete",\n    prototype: "button",\n    code: `\n  $interactionDelete\n  $wait[5s]\n  $interactionReply[\xa1Hola Mundo!;;;;everyone;false]\n  `\n});\n')))}j.isMDXComponent=!0}}]);