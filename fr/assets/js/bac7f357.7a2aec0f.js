"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>v,toc:()=>k});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$giveRoles",description:"$giveRoles donnera \xe0 un utilisateur sp\xe9cifique plusieurs ou un r\xf4le sp\xe9cifique.",id:"giveRoles"},g=void 0,v={unversionedId:"functions/guild-related/giveRoles",id:"version-6.4.0/functions/guild-related/giveRoles",title:"$giveRoles",description:"$giveRoles donnera \xe0 un utilisateur sp\xe9cifique plusieurs ou un r\xf4le sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/giveRoles.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/giveRoles",permalink:"/fr/docs/functions/guild-related/giveRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$giveRoles",description:"$giveRoles donnera \xe0 un utilisateur sp\xe9cifique plusieurs ou un r\xf4le sp\xe9cifique.",id:"giveRoles"},sidebar:"docs",previous:{title:"$giveRole",permalink:"/fr/docs/functions/guild-related/giveRole"},next:{title:"$guildAFKChannelID",permalink:"/fr/docs/functions/guild-related/guildAFKChannelID"}},b={},k=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:k},O="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,d(c(c({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$giveRoles")," donnera \xe0 un utilisateur sp\xe9cifique plusieurs ou un ou plusieurs r\xf4le(s)."),(0,n.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$giveRoles[IDserveur;IDutilisateur;raison?;...roles]\n")),(0,n.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Dans quel serveur le membre devra recevoir le r\xf4le."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IDutilisateur"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"L'ID du membre du serveur."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"raison?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"La raison qui sera affich\xe9e dans les logs du serveur."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"...r\xf4les"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Les identifiants des r\xf4les \xe0 ajouter au membre."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("p",null,"Veuillez noter que le r\xf4le ",(0,n.kt)("strong",{parentName:"p"},"le plus haut")," entre tous les r\xf4les \xe0 ajouter et celui du bot, doit \xeatre celui du bot."),(0,n.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,'Cela vous assignera deux r\xf4les appel\xe9s "administrateur" et "mod\xe9rateur" (si existant):'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ajouterR\xf4les',\n    code: `\n  \n  $giveRoles[$guildID;$authorID;Some reason.;$findRole[administrateur];$findRole[mod\xe9rateur]]\n  `\n});\n")))}N.isMDXComponent=!0}}]);