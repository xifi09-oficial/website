"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59516],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),g=o,b=l["".concat(p,".").concat(g)]||l[g]||m[g]||a;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},69356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"Roblox group info command",description:"Displays info about a roblox group",authors:{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/964024743172915220.png"},tags:["v6","aoi.js"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,i={permalink:"/wikis/posts/964024743172915220/ebigj",source:"@site/forums/posts/964024743172915220/ebigj.md",title:"Roblox group info command",description:"Displays info about a roblox group",date:"2023-07-07T01:34:57.000Z",formattedDate:"July 7, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/964024743172915220.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/964024743172915220.png"}],frontMatter:{title:"Roblox group info command",description:"Displays info about a roblox group",authors:{name:"@supremesupreme",title:"Member - 964024743172915220",userid:"964024743172915220",url:"https://discord.com/users/964024743172915220",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/964024743172915220.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/964024743172915220.png"},tags:["v6","aoi.js"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Ticketing system",permalink:"/wikis/posts/949588732498018324/r4uv0q"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "groupinfo",\n    code: `\n    $title[1;Success!] \n    $description[> Group ID: $getobjectproperty[id]\n    > **Group Name:** $getobjectproperty[name]\n    > **Group Description:** $getobjectproperty[description] $if[$getobjectproperty[description]==;undefined;]\n    > **Group OwnerId:** $getobjectproperty[owner.username]\n    > **Group Latest Shout:** $getobjectproperty[shout.body] $if[$getobjectproperty[shout.body]==;undefined;]\n]\n    $color[1;#C3A78E]\n    $footer[1;bob]\n    $createObject[$jsonRequest[https://groups.roblox.com/v1/groups/$message[1]]]\n    $argscheck[1;Group id?]\n    `\n}\n')))}m.isMDXComponent=!0}}]);