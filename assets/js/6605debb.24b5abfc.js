"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1402],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"$ordinal"},i=void 0,l={unversionedId:"functions/ordinal",id:"version-5.5.5/functions/ordinal",title:"$ordinal",description:"This function adds st,nd,rd,th to the end of a number",source:"@site/versioned_docs/version-5.5.5/functions/ordinal.md",sourceDirName:"functions",slug:"/functions/ordinal",permalink:"/docs/5.5.5/functions/ordinal",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688504382,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"$ordinal"},sidebar:"docs",previous:{title:"$onlyPerms",permalink:"/docs/5.5.5/functions/onlyperms"},next:{title:"$ownerID",permalink:"/docs/5.5.5/functions/ownerid"}},c={},s=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4}],u={toc:s},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function adds ",(0,o.kt)("inlineCode",{parentName:"p"},"st"),",",(0,o.kt)("inlineCode",{parentName:"p"},"nd"),",",(0,o.kt)("inlineCode",{parentName:"p"},"rd"),",",(0,o.kt)("inlineCode",{parentName:"p"},"th")," to the end of a number"),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This function has 1 field"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Content ","(","Required",")")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$ordinal[content]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Content - The content the function is adding the suffix to")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "ordinal",\ncode: `\n$ordinal[23]\n`\n})\n//Would return 23rd\n\n//Specified number\n\nbot.command({\nname: "ordinal",\ncode: `\n$ordinal[$message]\n`\n})\n\n//Returns undefined if <content> isn\'t number\n')))}p.isMDXComponent=!0}}]);