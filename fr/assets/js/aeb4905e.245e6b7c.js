"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$argsCheck",description:"$argsCheck will check the arguments of what the user typed and the required one, if requirements didn't meet, it will return an error message.",id:"argsCheck"},k=void 0,f={unversionedId:"functions/util-related/argsCheck",id:"version-6.4.0/functions/util-related/argsCheck",title:"$argsCheck",description:"$argsCheck will check the arguments of what the user typed and the required one, if requirements didn't meet, it will return an error message.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/argsCheck.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/argsCheck",permalink:"/fr/docs/functions/util-related/argsCheck",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$argsCheck",description:"$argsCheck will check the arguments of what the user typed and the required one, if requirements didn't meet, it will return an error message.",id:"argsCheck"},sidebar:"docs",previous:{title:"$usersWithRole",permalink:"/fr/docs/functions/user-related/usersWithRole"},next:{title:"$argsSlice",permalink:"/fr/docs/functions/util-related/argsSlice"}},h={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"Example(s)",id:"examples",level:2}],b={toc:y},N="wrapper";function v(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(N,d(c(c({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$argsCheck")," will check the arguments of user typed and the required one, if requirements didn't meet, it will return an\nerror message."),(0,a.kt)("h2",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$argsCheck[condition;errorMessage]\n")),(0,a.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"condition"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Condition to be made."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"errorMessage"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Error message if condition did not meet."),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h4",c({},{id:"valid-mathematical-operators"}),"Valid Mathematical Operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Operator"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"Mathematical Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"not equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"less than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),">","="),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"greater than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"greater than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"less than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"|","|"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"logical OR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),"&&"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"logical conjunction")))),(0,a.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This returns: Greater than 2 arguments if condition met, else it will return an error message."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "argsCheck",\n    code: `\n  You have more than two arguments, nice!\n\n  $argsCheck[>2;You have less than two arguments!]\n  `\n});\n')))}v.isMDXComponent=!0}}]);