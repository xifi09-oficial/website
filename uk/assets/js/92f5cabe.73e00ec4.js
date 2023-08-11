"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),v=r,f=p["".concat(c,".").concat(v)]||p[v]||s[v]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},90466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var i=n(3905),r=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e},s=(e,t)=>o(e,a(t)),v=(e,t)=>{var n={};for(var i in e)c.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n};const f={title:"$inviteGuildID",description:"$inviteGuildID will return the invite guild ID of a given invite code.",id:"inviteGuildID"},m=void 0,y={unversionedId:"functions/invite-related/inviteGuildID",id:"version-6.4.0/functions/invite-related/inviteGuildID",title:"$inviteGuildID",description:"$inviteGuildID will return the invite guild ID of a given invite code.",source:"@site/versioned_docs/version-6.4.0/functions/invite-related/inviteGuildID.md",sourceDirName:"functions/invite-related",slug:"/functions/invite-related/inviteGuildID",permalink:"/uk/docs/functions/invite-related/inviteGuildID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$inviteGuildID",description:"$inviteGuildID will return the invite guild ID of a given invite code.",id:"inviteGuildID"},sidebar:"docs",previous:{title:"$inviteCode",permalink:"/uk/docs/functions/invite-related/inviteCode"},next:{title:"$inviteMaxUses",permalink:"/uk/docs/functions/invite-related/inviteMaxUses"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:b},D="wrapper";function h(e){var t=e,{components:n}=t,r=v(t,["components"]);return(0,i.kt)(D,s(p(p({},O),r),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$inviteGuildID")," will return the invite guild ID of a given invite code."),(0,i.kt)("h2",p({},{id:"usage"}),"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$inviteGuildID\n")),(0,i.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,i.kt)("p",null,"This will return the invite guild ID of the created invite:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.inviteCreateCommand({\n    name: 'inviteGuildID',\n    channel: '$channelID',\n    code: `\n  $inviteGuildID\n  `\n});\n")))}h.isMDXComponent=!0}}]);