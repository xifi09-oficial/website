"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Cat Command",description:"Cat command nothing interesting.",authors:{name:"@devlordduck2",title:"Member - 1096717977304453160",userid:"1096717977304453160",url:"https://discord.com/users/1096717977304453160",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,s={permalink:"/wikis/posts/1096717977304453160/vwxtre",source:"@site/forums/posts/1096717977304453160/vwxtre.md",title:"Cat Command",description:"Cat command nothing interesting.",date:"2023-07-12T18:50:39.000Z",formattedDate:"July 12, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@devlordduck2",title:"Member - 1096717977304453160",userid:"1096717977304453160",url:"https://discord.com/users/1096717977304453160",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png"}],frontMatter:{title:"Cat Command",description:"Cat command nothing interesting.",authors:{name:"@devlordduck2",title:"Member - 1096717977304453160",userid:"1096717977304453160",url:"https://discord.com/users/1096717977304453160",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"msgAfter function",permalink:"/wikis/posts/1096717977304453160/v71q0o"},nextItem:{title:"Guess the country game",permalink:"/wikis/posts/1121808241974837308/txlnl"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The title says everything."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n   name: "cat",\n   aliases: ["kitty"],\n   code: `\n$title[1;\ud83d\udc31CAT\ud83d\udc31]\n$description[1;[Image]($get[url])]\n$image[$get[url]]\n$footer[This cat/kitty says meow]\n$let[url;$jsonRequest[https://ild.vercel.app/api/cat;image]]\n`\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1106869098077491200/1127304975786192966/SmartSelect_20230708_212712_Discord.jpg?width=253&height=381",alt:"#"})))}u.isMDXComponent=!0}}]);