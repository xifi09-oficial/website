"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file."},s=void 0,i={unversionedId:"events/bot.onmessageupdate",id:"version-5.5.5/events/bot.onmessageupdate",title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onmessageupdate.md",sourceDirName:"events",slug:"/events/bot.onmessageupdate",permalink:"/docs/5.5.5/events/bot.onmessageupdate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689004470,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"bot.onMessageUpdate",description:"An event that gets executed, if the bot sees a user editing a message. To let the bot listen to the event, add one bot.onMessageUpdate() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onMessageDelete",permalink:"/docs/5.5.5/events/bot.onmessagedelete"},next:{title:"bot.onPresenceUpdate",permalink:"/docs/5.5.5/events/bot.onpresenceupdate"}},l={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example command:",id:"example-command",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This callback allows the bot to log any edited messages to the given channel"),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.updateCommand({ //the command \n        channel: "the channel id", //the chanel where the bot will log\n        code: `Your wonderful code` //Your code that will appear in <channel>\n})\n')),(0,o.kt)("h4",{id:"example-command"},"Example command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.updateCommand({\n        channel: "782446718704812032", \n        code: `Message edited from $username in <#$channelUsed>:\n$message\nOld message: $oldMessage`\n/*\n        Code Breakdown\n$message - The new message\n$oldMessage - The message before it was edited (This function only works in this callback)\n$username - The person who edited the message\n$channelUsed - Where the person edited the message\n*/\n})\n')))}u.isMDXComponent=!0}}]);