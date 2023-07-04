"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"$editIn",description:"Edit the Bot Message, in amount of intervals."},a=void 0,s={unversionedId:"functions/editin",id:"version-5.5.5/functions/editin",title:"$editIn",description:"Edit the Bot Message, in amount of intervals.",source:"@site/versioned_docs/version-5.5.5/functions/editin.md",sourceDirName:"functions",slug:"/functions/editin",permalink:"/docs/5.5.5/functions/editin",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688504382,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"$editIn",description:"Edit the Bot Message, in amount of intervals."},sidebar:"docs",previous:{title:"$editChannel",permalink:"/docs/5.5.5/functions/editchannel"},next:{title:"$editMessage",permalink:"/docs/5.5.5/functions/editmessage"}},l={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function edits the message that the bot just sent"),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 2 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Time ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Message ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Message 2 ","(","Optional",")"),(0,r.kt)("li",{parentName:"ol"},"Etc")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$editIn[time;message;message...]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time - The amount of time to edit the message"),(0,r.kt)("li",{parentName:"ul"},"Message","(","s",")"," - The message","(","s",")"," we're editing the original message into")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Editing the message once"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "hello", \ncode: `\nHello $editIn[5s;Bye]` //Sends Hello, in 5 seconds it edits it to Bye\n})\n')),(0,r.kt)("p",null,"Editing the message twice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "hello", \ncode: `\nHello $editIn[5s;Bye;Leaving]` \n/*Sends Hello, in 5 seconds it edits it to Bye\nThen in 5 seconds edits it to Leaving\n*/\n})\n')))}p.isMDXComponent=!0}}]);