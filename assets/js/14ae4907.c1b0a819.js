"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,c=new Array(l);c[0]=f;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:i,c[1]=a;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={title:"$clientID",description:"$clientID will return the client's Discord User ID.",id:"clientID"},c=void 0,a={unversionedId:"functions/client-related/clientID",id:"functions/client-related/clientID",title:"$clientID",description:"$clientID will return the client's Discord User ID.",source:"@site/docs/functions/client-related/clientID.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientID",permalink:"/docs/7.0.0/functions/client-related/clientID",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fafa",lastUpdatedAt:1688504382,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"$clientID",description:"$clientID will return the client's Discord User ID.",id:"clientID"},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/7.0.0/guides/setup"}},o={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$clientID")," will return the client's Discord User ID."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$clientID\n")),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will return the client's ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'clientID',\n    code: `\n  $clientID\n  `\n});\n")))}d.isMDXComponent=!0}}]);