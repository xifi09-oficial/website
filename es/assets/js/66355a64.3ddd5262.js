"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,b=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>w,frontMatter:()=>b,metadata:()=>f,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),s=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$newMember",description:"$newMember contiene datos para el miembro despu\xe9s de la actualizaci\xf3n, podr\xeda ser una buena idea verificar la opci\xf3n parcial antes de acceder a cualquier propiedad. (memberUpdate evento)",id:"newMember"},k=void 0,f={unversionedId:"functions/event-related/newMember",id:"version-6.4.0/functions/event-related/newMember",title:"$newMember",description:"$newMember contiene datos para el miembro despu\xe9s de la actualizaci\xf3n, podr\xeda ser una buena idea verificar la opci\xf3n parcial antes de acceder a cualquier propiedad. (memberUpdate evento)",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newMember.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newMember",permalink:"/es/docs/functions/event-related/newMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$newMember",description:"$newMember contiene datos para el miembro despu\xe9s de la actualizaci\xf3n, podr\xeda ser una buena idea verificar la opci\xf3n parcial antes de acceder a cualquier propiedad. (memberUpdate evento)",id:"newMember"},sidebar:"docs",previous:{title:"$newGuild",permalink:"/es/docs/functions/event-related/newGuild"},next:{title:"$newPresence",permalink:"/es/docs/functions/event-related/newPresence"}},v={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Opciones",id:"opciones",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:g},y="wrapper";function w(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(y,m(c(c({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$newMember")," contiene datos para el miembro despu\xe9s de la actualizaci\xf3n, podr\xeda ser una buena idea verificar la opci\xf3n parcial antes de acceder cualquier propiedad. (memberUpdate evento)"),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$newMember[opci\xf3n]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"opci\xf3n"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Opci\xf3n a recuperar."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h3",c({},{id:"opciones"}),"Opciones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"id"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve el ID de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve el nombre del usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"roles"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve roles de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"permissions"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve los permisos de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"nick"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve el apodo del usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"highestRoleID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve el usuario Higher role ID.")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nota: necesitas la intenci\xf3n ",(0,r.kt)("inlineCode",{parentName:"strong"},"GuildMembers")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),'bot.memberUpdateCommand({\n    channel: "channelid",\n    code: `\n    $username[$newMember[id]] ha actualizado su apodo!\n- Nuevo apodo: $newMember[nick]\n - Apodo antiguo: $oldMember[nick]\n\n   $username[$newMember[id]] ha actualizado su nombre!\n- Nuevo nombre: $newMember[name]\n - Viejo nombre: $oldMember[name]`\n})\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Este c\xf3digo se ejecutar\xe1 cuando ",(0,r.kt)("strong",{parentName:"li"},"miembro actualice su apodo de gremio o nombre de usuario de discordia"))),(0,r.kt)("hr",null))}w.isMDXComponent=!0}}]);