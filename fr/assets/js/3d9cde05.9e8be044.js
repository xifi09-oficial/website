"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$addEmoji",description:"$addEmoji ajoutera un emoji au serveur donn\xe9. Si des identifiants de r\xf4le sont donn\xe9s, l'emoji ne sera utilisable que par les utilisateurs avec l'un des identifiants de r\xf4le fournis.",id:"addEmoji"},g=void 0,v={unversionedId:"functions/guild-related/addEmoji",id:"version-6.4.0/functions/guild-related/addEmoji",title:"$addEmoji",description:"$addEmoji ajoutera un emoji au serveur donn\xe9. Si des identifiants de r\xf4le sont donn\xe9s, l'emoji ne sera utilisable que par les utilisateurs avec l'un des identifiants de r\xf4le fournis.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/addEmoji.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/addEmoji",permalink:"/fr/docs/functions/guild-related/addEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$addEmoji",description:"$addEmoji ajoutera un emoji au serveur donn\xe9. Si des identifiants de r\xf4le sont donn\xe9s, l'emoji ne sera utilisable que par les utilisateurs avec l'un des identifiants de r\xf4le fournis.",id:"addEmoji"},sidebar:"docs",previous:{title:"$webhookUpdate",permalink:"/fr/docs/functions/event-related/webhookUpdate"},next:{title:"$addThreadMember",permalink:"/fr/docs/functions/guild-related/addThreadMember"}},k={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],j={toc:b},y="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(y,c(p(p({},j),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addEmoji")," ajoutera un emoji au serveur donn\xe9. Si des identifiants de r\xf4le sont donn\xe9s, l'emoji ne sera utilisable que par les utilisateurs avec l'un des identifiants de r\xf4le fournis."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addEmoji[IDserveur;URL;nom;renvoyerEmoji?;raison?;...r\xf4les?]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID du serveur"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"URL"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"URL d'une image valide"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"nom"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Nom de l\u2019\xe9moji"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"renvoyerEmoji?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Renvoyer l'\xe9moji cr\xe9\xe9 ?"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"raison?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"raison qui sera affich\xe9e dans les logs du serveur"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"...r\xf4les?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"quels r\xf4les pourront utiliser l'\xe9moji donn\xe9"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci va cr\xe9er un emoji :"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ajouterEmoji',\n    code: `\n  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]\n  `\n});\n")))}N.isMDXComponent=!0}}]);