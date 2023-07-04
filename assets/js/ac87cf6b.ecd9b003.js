"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Download function",description:"This is a custom function for downloading files accessible through https.",authors:{name:"@artemcurious",title:"Member - 591690683509768223",userid:"591690683509768223",url:"https://discord.com/users/591690683509768223",image_url:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,l={permalink:"/wikis/posts/591690683509768223/h3mscp",source:"@site/forums/posts/591690683509768223/h3mscp.md",title:"Download function",description:"This is a custom function for downloading files accessible through https.",date:"2023-07-04T20:59:42.000Z",formattedDate:"July 4, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@artemcurious",title:"Member - 591690683509768223",userid:"591690683509768223",url:"https://discord.com/users/591690683509768223",image_url:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png",imageURL:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png"}],frontMatter:{title:"Download function",description:"This is a custom function for downloading files accessible through https.",authors:{name:"@artemcurious",title:"Member - 591690683509768223",userid:"591690683509768223",url:"https://discord.com/users/591690683509768223",image_url:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png",imageURL:"https://cdn.discordapp.com/avatars/591690683509768223/e193473ac4cbcdecf90fc00826f1175e.png"},tags:["aoi.js","v6"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Is file empty function",permalink:"/wikis/posts/591690683509768223/d0m8v5"},nextItem:{title:"Yes or no command",permalink:"/wikis/posts/632607624742961153/0s8eh9"}},s={authorsImageUrls:[void 0]},c=[{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Improvements",id:"improvements",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hey there! Ever needed to download an image, an audio file, or basically any type of file from the internet? Here's the\ncommand to solve your issue!"),(0,r.kt)("p",null,"Paste the following code into your bot's main file, which is usually ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const url = require('url');\n\nbot.functionManager.createFunction({\n  name: '$download',\n  type: 'djs',\n  code: async (d) => {\n    const data = d.util.aoiFunc(d);\n    let [urlValue, destinationPath] = data.inside.splits;\n\n    if (!destinationPath) {\n      let parsedUrl = new URL(urlValue.replace(/#COLON#/g, ':'));\n      let pathname = parsedUrl.pathname;\n      let filename = pathname.split('/').pop();\n      destinationPath = filename;\n    }\n\n    let unescapedURL = urlValue\n      .replace(/#LEFT#/g, ']')\n      .replace(/#SEMI#/g, ';')\n      .replace(/#COLON#/g, ':')\n      .replace(/#CHAR#/g, '$')\n      .replace(/#RIGHT_CLICK#/g, '<')\n      .replace(/#LEFT_CLICK#/g, '>')\n      .replace(/#EQUAL#/g, '=')\n      .replace(/#RIGHT_BRACKET#/g, '{')\n      .replace(/#LEFT_BRACKET#/g, '}')\n      .replace(/#COMMA#/g, ',')\n      .replace(/#AND#/g, '&&');\n\n    function download() {\n      const https = require('https');\n      const fs = require('fs');\n\n      const file = fs.createWriteStream(destinationPath);\n\n      https.get(unescapedURL, (response) => {\n        response.pipe(file);\n      });\n    }\n\n    if (!urlValue) return d.aoiError.fnError(d, 'custom', {}, 'The parameter \"url\" does not have any arguments!');\n\n    data.result = download();\n    return {\n      code: d.util.setCode(data),\n    };\n  },\n});\n")),(0,r.kt)("p",null,"After that is done, you can call the function by doing ",(0,r.kt)("inlineCode",{parentName:"p"},"$download")," with the URL and filepath parameters like so:\n",(0,r.kt)("inlineCode",{parentName:"p"},"$download[https://cdn.discordapp.com/icons/773352845738115102/a_fa8ffe5e43202d2974e8484548d4662c.gif;./aoijs.gif]")),(0,r.kt)("p",null,"That's it!"),(0,r.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," module to download the file you requested. Please note that any files accessible only through\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," protocol can't be downloaded!"),(0,r.kt)("h3",{id:"improvements"},"Improvements"),(0,r.kt)("p",null,"Recently, I made some improvements to the code, so it's different to the old $download function I made.\nThe changes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"it will now automatically unescape characters and makes it so that there is no need of using $nonEscape"),(0,r.kt)("li",{parentName:"ul"},"it will now auto-generate a destination path from the file's link if you didn't specify the parameter. For example, if\nyou only specified the URL, but no destination path, like over\nhere: ",(0,r.kt)("inlineCode",{parentName:"li"},"$download[https://cdn.discordapp.com/icons/773352845738115102/a_fa8ffe5e43202d2974e8484548d4662c.gif]"),", then it\nwill just download the file with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"a_fa8ffe5e43202d2974e8484548d4662c.gif")," and to the root directory of your\nproject"),(0,r.kt)("li",{parentName:"ul"},"if the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," parameter is not specified, then it will now return a proper error")),(0,r.kt)("p",null,"Have fun coding your aoi.js bot!"))}u.isMDXComponent=!0}}]);