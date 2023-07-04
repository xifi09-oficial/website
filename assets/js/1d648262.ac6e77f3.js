"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"$editMessage",description:"You change a previous sent, message from the Bot."},s=void 0,o={unversionedId:"functions/editmessage",id:"version-5.5.5/functions/editmessage",title:"$editMessage",description:"You change a previous sent, message from the Bot.",source:"@site/versioned_docs/version-5.5.5/functions/editmessage.md",sourceDirName:"functions",slug:"/functions/editmessage",permalink:"/docs/5.5.5/functions/editmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688504382,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{title:"$editMessage",description:"You change a previous sent, message from the Bot."},sidebar:"docs",previous:{title:"$editIn",permalink:"/docs/5.5.5/functions/editin"},next:{title:"$editTextSplitElement",permalink:"/docs/5.5.5/functions/edittextsplitelement"}},l={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function edits the bot's message that has already been sent"),(0,a.kt)("h4",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 2 required fields"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Message ID ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Message ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Channel ID ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$editMessage[messageID;new message;channel ID (optional)]")),(0,a.kt)("h4",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Message ID - The message we're editing"),(0,a.kt)("li",{parentName:"ul"},"Message - The new message that's replacing the old one"),(0,a.kt)("li",{parentName:"ul"},"Channel ID - The channel where the message is")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Without the optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"edit\", \ncode: `\n$editMessage[773696146089967688;Bye]` //Edits message to 'Bye' \n})\n")),(0,a.kt)("p",null,"With the optional field"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: \"edit\", \ncode: `\n$editMessage[773696146089967688;Bye;804505335397744650]` \n//Edits message to 'Bye' \n})\n")))}d.isMDXComponent=!0}}]);