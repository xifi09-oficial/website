"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[73504],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(r),d=l,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=r(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))m.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$removeTextSplitElement",description:"$removeTextSplitElement will remove a specific text split element.",id:"removeTextSplitElement"},v=void 0,y={unversionedId:"functions/misc-related/removeTextSplitElement",id:"version-6.4.0/functions/misc-related/removeTextSplitElement",title:"$removeTextSplitElement",description:"$removeTextSplitElement will remove a specific text split element.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/removeTextSplitElement.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/removeTextSplitElement",permalink:"/uk/docs/functions/misc-related/removeTextSplitElement",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$removeTextSplitElement",description:"$removeTextSplitElement will remove a specific text split element.",id:"removeTextSplitElement"},sidebar:"docs",previous:{title:"$removeSplitTextElement",permalink:"/uk/docs/functions/misc-related/removeSplitTextElement"},next:{title:"$renameFile",permalink:"/uk/docs/functions/misc-related/renameFile"}},b={},g=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],x={toc:g},O="wrapper";function k(e){var t=e,{components:r}=t,l=d(t,["components"]);return(0,n.kt)(O,u(s(s({},x),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeTextSplitElement")," will remove a specific text split element."),(0,n.kt)("h2",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$removeTextSplitElement[element]\n")),(0,n.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"element"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Text split element to remove."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,'This will remove the word "bye" from the array:'),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "removeTextSplitElement",\n    code: `\n    $removeTextSplitElement[bye]\n    $textSplit[hello, bye, aoi.js;, ]\n    `\n});\n')))}k.isMDXComponent=!0}}]);