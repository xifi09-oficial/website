"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$channelOverwrites",description:"$channelOverwrites retournera les r\xe9\xe9critures du salon donn\xe9.",id:"channelOverwrites"},k=void 0,v={unversionedId:"functions/info-related/channelOverwrites",id:"version-6.4.0/functions/info-related/channelOverwrites",title:"$channelOverwrites",description:"$channelOverwrites retournera les r\xe9\xe9critures du salon donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/channelOverwrites.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelOverwrites",permalink:"/fr/docs/functions/info-related/channelOverwrites",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 juil. 2023",frontMatter:{title:"$channelOverwrites",description:"$channelOverwrites retournera les r\xe9\xe9critures du salon donn\xe9.",id:"channelOverwrites"},sidebar:"docs",previous:{title:"$channelName",permalink:"/fr/docs/functions/info-related/channelName"},next:{title:"$channelTopic",permalink:"/fr/docs/functions/info-related/channelTopic"}},y={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:g},O="wrapper";function h(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,d(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelOverwrites")," retournera les r\xe9\xe9critures du salon donn\xe9."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channelOverwrites[IDsalon?;r\xe9ponse?;s\xe9p?]\n")),(0,r.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IDsalon?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID du salon dont vous voulez obtenir les r\xe9\xe9critures."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"r\xe9ponse?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Le format dans lequel les r\xe9\xe9critures du salon seront retourn\xe9es."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"s\xe9p?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Le s\xe9parateur pour s\xe9parer les multiples r\xe9\xe9critures, s'il y en a plusieurs."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Type de texte"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Sortie"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"{mention}")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Mentionne le r\xf4le ou l'utilisateur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"{type}")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Renvoie le type, utilisateur ou r\xf4le")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"{allow}")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The granted permissions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"{deny}")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Les permissions refus\xe9es")))),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera les r\xe9\xe9critures du salon dans lequel vous ex\xe9cutez la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelOverwrites',\n    code: `\n  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]\n  `\n});\n")))}h.isMDXComponent=!0}}]);