"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$setTimeout",description:"$setTimeout establecer\xe1 un tiempo de espera para una acci\xf3n determinada (que incluso continuar\xe1 ejecut\xe1ndose despu\xe9s de reiniciar el bot).",id:"setTimeout"},b=void 0,g={unversionedId:"functions/misc-related/setTimeout",id:"version-6.4.0/functions/misc-related/setTimeout",title:"$setTimeout",description:"$setTimeout establecer\xe1 un tiempo de espera para una acci\xf3n determinada (que incluso continuar\xe1 ejecut\xe1ndose despu\xe9s de reiniciar el bot).",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/setTimeout.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/setTimeout",permalink:"/es/docs/functions/misc-related/setTimeout",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$setTimeout",description:"$setTimeout establecer\xe1 un tiempo de espera para una acci\xf3n determinada (que incluso continuar\xe1 ejecut\xe1ndose despu\xe9s de reiniciar el bot).",id:"setTimeout"},sidebar:"docs",previous:{title:"$setCacheData",permalink:"/es/docs/functions/misc-related/setCacheData"},next:{title:"$shutdown",permalink:"/es/docs/functions/misc-related/shutdown"}},k={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:y},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,c(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setTimeout")," establecer\xe1 un tiempo de espera para una acci\xf3n determinada (que incluso continuar\xe1 ejecut\xe1ndose despu\xe9s de reiniciar el bot)."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$setTimeout[esperadoCmd;duraci\xf3n;timeoutData;ID de retorno?;legumbres?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Cmds esperados"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Comando esperado para ejecutar cuando termine el bucle."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Duraci\xf3n"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cadena, n\xfamero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Despu\xe9s de cu\xe1nto tiempo ejecutar\xe1 / esto no puede pasar ",(0,r.kt)("strong",{parentName:"td"},"21 d\xedas"),"."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"datos de tiempo de espera"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"objeto"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Tiempo de espera de datos."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID de retorno?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Devolver el tiempo de espera ID."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"legumbres?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Legumbres."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Puedes recuperar datos de tiempo de espera usando ",(0,r.kt)("inlineCode",{parentName:"li"},"$timeoutData[name]"),"."),(0,r.kt)("li",{parentName:"ul"},"Tenga en cuenta que la duraci\xf3n no puede pasar ",(0,r.kt)("strong",{parentName:"li"},"21 d\xedas"),".")),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto enviar\xe1 "Hello!" despu\xe9s de 10 segundos en el canal de ejecuci\xf3n de comandos:'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setTimeout",\n    code: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\nbot.timeoutCommand({\n    name: "timeoutCommand",\n    code: `\n    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]\n    `\n});\n')))}O.isMDXComponent=!0}}]);