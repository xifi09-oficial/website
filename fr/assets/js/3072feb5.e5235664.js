"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(a)for(var n of a(t))c.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,l(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$elseif",description:"$elseif est utilis\xe9 pour cr\xe9er une instruction sinon avec une condition.",id:"elseif"},v=void 0,y={unversionedId:"functions/misc-related/elseif",id:"version-6.4.0/functions/misc-related/elseif",title:"$elseif",description:"$elseif est utilis\xe9 pour cr\xe9er une instruction sinon avec une condition.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/elseif.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/elseif",permalink:"/fr/docs/functions/misc-related/elseif",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$elseif",description:"$elseif est utilis\xe9 pour cr\xe9er une instruction sinon avec une condition.",id:"elseif"},sidebar:"docs",previous:{title:"$editTextSplitElement",permalink:"/fr/docs/functions/misc-related/editTextSplitElement"},next:{title:"$endelseif",permalink:"/fr/docs/functions/misc-related/endelseif"}},b={},O=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:O},k="wrapper";function j(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(k,f(u(u({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$elseif")," est utilis\xe9 pour cr\xe9er une instruction sinon avec une condition."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$elseif[condition]\n")),(0,r.kt)("p",null,":::avertissement de d\xe9pr\xe9ciation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'$if: "old"')," est obsol\xe8te et ne doit plus \xeatre utilis\xe9 car il sera supprim\xe9 dans le futur."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Exemple d'utilisation de ",(0,r.kt)("inlineCode",{parentName:"p"},'$if: "old"'),' (retournera "Bonjour" lorsque la condition est vraie) :'),(0,r.kt)("p",null,"Vous avez besoin de ",(0,r.kt)("inlineCode",{parentName:"p"},"$endelseif")," pour mettre fin \xe0 la d\xe9claration ",(0,r.kt)("inlineCode",{parentName:"p"},"$elseIf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name : "if",\n    $if: "old",\n    code: `\n  $if[1==2]\n  Bonjour !\n  $elseif[2==4]\n  $endelseif\n  $endif\n  `\n});\n')))}j.isMDXComponent=!0}}]);