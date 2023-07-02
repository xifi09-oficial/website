"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),v=o,m=p["".concat(l,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},98113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"bot.onLeave",description:"An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file."},s=void 0,i={unversionedId:"events/bot.onleave",id:"version-5.5.5/events/bot.onleave",title:"bot.onLeave",description:"An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onleave.md",sourceDirName:"events",slug:"/events/bot.onleave",permalink:"/docs/5.5.5/events/bot.onleave",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688327456,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"bot.onLeave",description:"An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onJoin",permalink:"/docs/5.5.5/events/bot.onjoin"},next:{title:"bot.onMemberUpdate",permalink:"/docs/5.5.5/events/bot.onmemberupdate"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This callback that allows the bot to log every user who leaves the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.leaveCommand({ //command\n        channel: "channel id", //channel where the bot logs\n        code: `your code` //Message sent to <channel>\n})\n')),(0,o.kt)("p",null,"Make sure the ","`","channel","`"," is in the server. So recommended to use server variables (if your bot isn't for 1 server)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.leaveCommand({ \n        channel: "782446718704812032", \n        code: `Goodbye, $username, hope you had a good stay at $serverName`\n        /*\n                Code Breakdown\n        $serverName - The name of the server the user left\n        $username - The user who left the server\n        */\n})\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GUILD_MEMBERS")," intent needed! Information in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/other/gateway-intents"},"Gateway Intents")," guide."),(0,o.kt)("p",null,"You can use all guild and member based functions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/servername"},"$serverName")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/guildid"},"$guildID")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/username"},"$username")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/authorid"},"$authorID")," in these commands."))}d.isMDXComponent=!0}}]);