"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$guildChannels",description:"$guildChannels devolver\xe1 todos los canales de una categor\xeda determinada.",id:"guildChannels"},f=void 0,v={unversionedId:"functions/guild-related/guildChannels",id:"version-6.4.0/functions/guild-related/guildChannels",title:"$guildChannels",description:"$guildChannels devolver\xe1 todos los canales de una categor\xeda determinada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildChannels.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildChannels",permalink:"/es/docs/functions/guild-related/guildChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$guildChannels",description:"$guildChannels devolver\xe1 todos los canales de una categor\xeda determinada.",id:"guildChannels"},sidebar:"docs",previous:{title:"$guildChannelExists",permalink:"/es/docs/functions/guild-related/guildChannelExists"},next:{title:"$guildCommunityUpdatesChannelID",permalink:"/es/docs/functions/guild-related/guildCommunityUpdatesChannelID"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,c(p(p({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildChannels")," devolver\xe1 todos los canales de una categor\xeda determinada."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildChannels[servidorID?;opci\xf3n?;sep?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"La ID del gremio."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"opci\xf3n?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"La opci\xf3n sobre c\xf3mo devolver el canal ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"nombre")," (por defecto) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"ids")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"mencionar")),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sep?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"El separador para separar los valores devueltos."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 la cantidad de Canales de Voz en su servidor:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildChannels',\n    code: `\n  $guildChannels[$guildID;mention;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);