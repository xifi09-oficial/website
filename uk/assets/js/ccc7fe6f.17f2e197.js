"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,f=d["".concat(c,".").concat(s)]||d[s]||u[s]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),s=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$commandInfo",description:"$commandInfo will return the given text of a property.",id:"commandInfo"},g=void 0,y={unversionedId:"functions/info-related/commandInfo",id:"version-6.4.0/functions/info-related/commandInfo",title:"$commandInfo",description:"$commandInfo will return the given text of a property.",source:"@site/versioned_docs/version-6.4.0/functions/info-related/commandInfo.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/commandInfo",permalink:"/uk/docs/functions/info-related/commandInfo",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"22 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$commandInfo",description:"$commandInfo will return the given text of a property.",id:"commandInfo"},sidebar:"docs",previous:{title:"$commandCode",permalink:"/uk/docs/functions/info-related/commandCode"},next:{title:"$commandName",permalink:"/uk/docs/functions/info-related/commandName"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:v},O="wrapper";function h(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(O,u(d(d({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$commandInfo")," will return the given text of a property."),(0,r.kt)("h2",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$commandInfo[name;option]\n")),(0,r.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Command name or alias."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Property to retrieve."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the usage (defined by added properties) of the command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'You can add anything you\'d like, for example "usage" as below.'),(0,r.kt)("li",{parentName:"ul"},"You can use aliases or the command name to return it's information.")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'commandInfo\',\n    aliases: ["ci", "cmdInfo"],\n    usage: "commandInfo [command]",\n    code: `\n  Usage: $commandInfo[ci;usage]\n  `\n});\n')))}h.isMDXComponent=!0}}]);