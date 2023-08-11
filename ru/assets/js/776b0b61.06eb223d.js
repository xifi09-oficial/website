"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$moveUser",description:"$moveUser \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c\u0438 \u043a\u0430\u043d\u0430\u043b\u0430\u043c\u0438.",id:"moveUser"},v=void 0,g={unversionedId:"functions/user-related/moveUser",id:"version-6.4.0/functions/user-related/moveUser",title:"$moveUser",description:"$moveUser \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c\u0438 \u043a\u0430\u043d\u0430\u043b\u0430\u043c\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/moveUser.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/moveUser",permalink:"/ru/docs/functions/user-related/moveUser",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691715678,formattedLastUpdatedAt:"11 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$moveUser",description:"$moveUser \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c\u0438 \u043a\u0430\u043d\u0430\u043b\u0430\u043c\u0438.",id:"moveUser"},sidebar:"docs",previous:{title:"$membersCount",permalink:"/ru/docs/functions/user-related/membersCount"},next:{title:"$muteUser",permalink:"/ru/docs/functions/user-related/muteUser"}},b={},y=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,m(s(s({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$moveUser")," \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u043c\u0438 \u043a\u0430\u043d\u0430\u043b\u0430\u043c\u0438."),(0,n.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$moveUser[guildID;userID;channelID;reason?]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"ID \u0433\u0438\u043b\u044c\u0434\u0438\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u043a\u0430\u043d\u0430\u043b."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0433\u043e \u043a\u0430\u043d\u0430\u043b\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0447\u0438\u043d\u0430?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0435 \u0430\u0443\u0434\u0438\u0442\u0430 \u0433\u0438\u043b\u044c\u0434\u0438\u0438."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043b\u043e\u0436\u044c")))),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0439 \u043a\u0430\u043d\u0430\u043b:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'moveUser',\n    code: `\n  $moveUser[$guildID;userID;new voice channel ID;Testing!]\n  \xab\n});\n")))}N.isMDXComponent=!0}}]);