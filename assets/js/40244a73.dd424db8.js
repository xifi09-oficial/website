"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(87462),r=(n(67294),n(3905));const a={title:"$allEmojiCount"},i=void 0,l={unversionedId:"functions/allemojicount",id:"version-5.5.5/functions/allemojicount",title:"$allEmojiCount",description:"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of.",source:"@site/versioned_docs/version-5.5.5/functions/allemojicount.md",sourceDirName:"functions",slug:"/functions/allemojicount",permalink:"/docs/5.5.5/functions/allemojicount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1686318580,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"$allEmojiCount"},sidebar:"docs",previous:{title:"$allChannelsCount",permalink:"/docs/5.5.5/functions/allchannelscount"},next:{title:"$allMembersCount",permalink:"/docs/5.5.5/functions/allmemberscount"}},s={},m=[{value:"Types:",id:"types",level:4},{value:"Total emoji count:",id:"total-emoji-count",level:4},{value:"Animated Emojis:",id:"animated-emojis",level:4},{value:"normal Emojis:",id:"normal-emojis",level:4}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$allEmojiCount[type (optional)]")),(0,r.kt)("h4",{id:"types"},"Types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," or empty field => returns total amount of custom emojis the bot has access to (animated and normal)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"animated")," => returns amount of non-animated custom emojis emojis"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normal")," => returns amount of non-animated custom emojis emojis")),(0,r.kt)("h4",{id:"total-emoji-count"},"Total emoji count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount emojis`\n})\n')),(0,r.kt)("h4",{id:"animated-emojis"},"Animated Emojis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')),(0,r.kt)("h4",{id:"normal-emojis"},"normal Emojis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')))}c.isMDXComponent=!0}}]);