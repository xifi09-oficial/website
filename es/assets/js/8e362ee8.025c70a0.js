"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36281],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,u(u({ref:r},s),{},{components:t})):n.createElement(m,u({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68340:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&s(e,t,r[t]);return e},d=(e,r)=>a(e,u(r)),f=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$authorID",description:"$authorID devolver\xe1 el ID de usuario de quien ejecut\xf3 el comando.",id:"authorID"},v=void 0,y={unversionedId:"functions/user-related/authorID",id:"version-6.4.0/functions/user-related/authorID",title:"$authorID",description:"$authorID devolver\xe1 el ID de usuario de quien ejecut\xf3 el comando.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/authorID.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/authorID",permalink:"/es/docs/functions/user-related/authorID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 jul 2023",frontMatter:{title:"$authorID",description:"$authorID devolver\xe1 el ID de usuario de quien ejecut\xf3 el comando.",id:"authorID"},sidebar:"docs",previous:{title:"$authorBannerColor",permalink:"/es/docs/functions/user-related/authorBannerColor"},next:{title:"$cacheMembers",permalink:"/es/docs/functions/user-related/cacheMembers"}},b={},h=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:h},j="wrapper";function g(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(j,d(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$authorID")," devolver\xe1 el ID de usuario de quien ejecut\xf3 el comando."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$authorID\n")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 tu ID de usuario:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'authorID',\n    code: `\n  $authorID\n  `\n});\n")))}g.isMDXComponent=!0}}]);