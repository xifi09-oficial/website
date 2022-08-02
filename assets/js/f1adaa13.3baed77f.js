"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[99965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"$defaultMessageNotifications",description:"Return the guild default message notification level."},a=void 0,s={unversionedId:"functions/defaultmessagenotifications",id:"version-5.5.5/functions/defaultmessagenotifications",title:"$defaultMessageNotifications",description:"Return the guild default message notification level.",source:"@site/versioned_docs/version-5.5.5/functions/defaultmessagenotifications.md",sourceDirName:"functions",slug:"/functions/defaultmessagenotifications",permalink:"/docs/functions/defaultmessagenotifications",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$defaultMessageNotifications",description:"Return the guild default message notification level."},sidebar:"docs",previous:{title:"$deafenUser",permalink:"/docs/functions/deafenuser"},next:{title:"$deleteApplicationCommand",permalink:"/docs/functions/deleteapplicationcommand"}},l={},c=[{value:"Usage:",id:"usage",level:2}],u={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the level of a server'S default message notifications."),(0,o.kt)("p",null,"Returns either ",(0,o.kt)("inlineCode",{parentName:"p"},"Mentions")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"All"),"."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$defaultMessageNotifications[guildID (optional)]")),(0,o.kt)("h2",{id:"usage"},"Usage:"),(0,o.kt)("p",null,"Returning the default message notifications type of the current guild:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'bot.command({\nname: "notifications",\ncode: `\nNotifications type of this server: $defaultMessageNotifications\n`\n})\n')),(0,o.kt)("p",null,"Returning the default message notifications type of another guild:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'bot.command({\nname: "notifications",\ncode: `\nNotifications type of the server $serverName[773352845738115102]: \n$defaultMessageNotifications[773352845738115102]\n`\n})\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example from the Official Aoi.JS Server =&gt; $defaultMessageNotifications would return &quot;Mentions&quot; on this guild",src:n(89552).Z,width:"1065",height:"386"})))}f.isMDXComponent=!0},89552:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image (29) (1) (1) (1) (2) (3) (2) (3)-cfd672f3fdc8287c5d12dcf25a803f3c.png"}}]);