"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32094],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85118:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>j,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&u(t,n,e[n]);return t},s=(t,e)=>l(t,o(e)),c=(t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const k={title:"$addButton",description:"$addButton a\xf1adir\xe1 un bot\xf3n al mensaje del bot.",id:"addButton"},g=void 0,N={unversionedId:"functions/interaction-related/addButton",id:"version-6.4.0/functions/interaction-related/addButton",title:"$addButton",description:"$addButton a\xf1adir\xe1 un bot\xf3n al mensaje del bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addButton.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addButton",permalink:"/es/docs/functions/interaction-related/addButton",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$addButton",description:"$addButton a\xf1adir\xe1 un bot\xf3n al mensaje del bot.",id:"addButton"},sidebar:"docs",previous:{title:"$addApplicationCommandPermissions",permalink:"/es/docs/functions/interaction-related/addApplicationCommandPermissions"},next:{title:"$addClientReactions",permalink:"/es/docs/functions/interaction-related/addClientReactions"}},b={},f=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:f},v="wrapper";function j(t){var e=t,{components:n}=e,r=c(e,["components"]);return(0,a.kt)(v,s(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addButton")," a\xf1adir\xe1 un bot\xf3n al mensaje del bot."),(0,a.kt)("h2",m({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$addButton[\xedndice;etiqueta;estilo;ID personalizado;desactivado?;emoji?]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\xedndice"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"En que (acci\xf3n)fila aparece el bot\xf3n."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"etiqueta"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"El texto que se mostrar\xe1 en el bot\xf3n como etiqueta."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"estilo"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"El bot\xf3n ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",m({parentName:"strong"},{href:"https://discord.com/developers/docs/interactions/message-components#button-object-button-styles"}),"estilo")),"."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ID personalizado"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"El ID personalizado del componente utilizado para identificar el bot\xf3n."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"desactivado?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\xbfHacer el bot\xf3n inutilizable/desactivado? ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"emoji?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Los emoji mostrados en el bot\xf3n."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Tipos de bot\xf3n ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nombre"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Valor"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Color"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Primary"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"borroso"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;primary;ID personalizado;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Secondary"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"gris"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;secondary;ID personalizado;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Success"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"verde"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;success;ID personalizado;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Danger"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rojo"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;danger;ID personalizado;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Link"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"gris, navega a una URL"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;link;https://discord.gg;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Custom Emoji"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cualquier"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cualquier"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;link;ID personalizado;false;nombre de emoji,emojiID,animado(true/false)]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Unicode Emoji"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cualquier"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cualquier"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Example Button!;link;ID personalizado;false;\ud83d\ude00]")))))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto a\xf1ade un bot\xf3n principal y de enlace al mensaje del bot:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addButton',\n    code: `\n    Hola!\n    $addButton[1;ejemplo Bot\xf3n!;primary;ejemploBot\xf3n;false;\ud83d\udc94]\n    $addButton[1;ejemplo Bot\xf3n!;link;https://discord.gg;false]\n  `\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.interactionCommand({\n    name: 'exampleButton',\n    prototype: 'button',\n    code: `\n    $interactionReply[\xa1Impresionante interacci\xf3n de botones!]\n  `\n});\n")))}j.isMDXComponent=!0}}]);