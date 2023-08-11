"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,f=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},98548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>h,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),c=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$pruneMembers",description:"$pruneMembers will kick all inactive users whose been inactive for a given amount of time.",id:"pruneMembers"},b=void 0,g={unversionedId:"functions/user-related/pruneMembers",id:"version-6.4.0/functions/user-related/pruneMembers",title:"$pruneMembers",description:"$pruneMembers will kick all inactive users whose been inactive for a given amount of time.",source:"@site/versioned_docs/version-6.4.0/functions/user-related/pruneMembers.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/pruneMembers",permalink:"/uk/docs/functions/user-related/pruneMembers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$pruneMembers",description:"$pruneMembers will kick all inactive users whose been inactive for a given amount of time.",id:"pruneMembers"},sidebar:"docs",previous:{title:"$muteUser",permalink:"/uk/docs/functions/user-related/muteUser"},next:{title:"$removeThreadMember",permalink:"/uk/docs/functions/user-related/removeThreadMember"}},k={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:y},N="wrapper";function h(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,d(m(m({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$pruneMembers")," will kick all inactive users whose been inactive for a given amount of time."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$pruneMembers[days;guildID?;roleIDs?;dry?;reason?;returnCount?]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"days"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Number of days to count prune for (1-30, 7 default)."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Where members are going to be pruned."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"roleIDs?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer, string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Roles to include, splitted by commas."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"dry?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"1. ",(0,n.kt)("strong",{parentName:"td"},"true")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (default)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"reason?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Reason to display in the guild's audit logs."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"returnCount?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Return count of pruned members. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"true")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (default)"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will prune all members who have been inactive for 4 days and return the count of the pruned members that meet those\nrequirements:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'pruneMembers',\n    code: `\n   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]\n  `\n});\n")))}h.isMDXComponent=!0}}]);