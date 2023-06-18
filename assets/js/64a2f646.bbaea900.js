"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57040],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(v,i(i({ref:n},d),{},{components:t})):o.createElement(v,i({ref:n},d))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"bot.onGuildJoin",description:"An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile."},i=void 0,l={unversionedId:"events/bot.onguildjoin",id:"version-5.5.5/events/bot.onguildjoin",title:"bot.onGuildJoin",description:"An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile.",source:"@site/versioned_docs/version-5.5.5/events/bot.onguildjoin.md",sourceDirName:"events",slug:"/events/bot.onguildjoin",permalink:"/docs/5.5.5/events/bot.onguildjoin",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687062520,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"bot.onGuildJoin",description:"An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile."},sidebar:"docs",previous:{title:"bot.onFunctionError",permalink:"/docs/5.5.5/events/bot.onfunctionerror"},next:{title:"bot.onGuildLeave",permalink:"/docs/5.5.5/events/bot.onguildleave"}},s={},c=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback will allow the bot to log a message whenever it joins a server."),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.guildJoinCommand({//command\nchannel: "channel id",//the channel where <code> will be sent to\ncode: `your code`//message sent to <channel>\n})\n')),(0,r.kt)("h4",{id:"example-command"},"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.guildJoinCommand({\nchannel: "772414449839636490",\ncode: `\nIve joined $serverName!\n`\n})\n')),(0,r.kt)("p",null,"You can also have it send in the server where it joined by using ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/systemchannelid"},"$systemChannelID")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/randomchannelid"},"$randomChannelID"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.guildJoinCommand({\nchannel: "$systemChannelID",\ncode: `\nHi i am Awesome Bot and I can do many things.\n`\n \n})\n')),(0,r.kt)("p",null,"Keep in mind: Not all servers have a system channel!"),(0,r.kt)("p",null,"You can use all guild based functions like ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/servername"},"$serverName")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/guildid"},"$guildID")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/getserverinvite"},"$getServerInvite")," in these commands."))}p.isMDXComponent=!0}}]);