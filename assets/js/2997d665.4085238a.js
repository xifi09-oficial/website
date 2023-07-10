"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),A=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=A(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",D={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=A(n),g=r,d=u["".concat(c,".").concat(g)]||u[g]||D[g]||i;return n?a.createElement(d,o(o({ref:t},l),{},{components:n})):a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var A=2;A<i;A++)o[A]=n[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>D,frontMatter:()=>i,metadata:()=>s,toc:()=>A});var a=n(87462),r=(n(67294),n(3905));const i={title:"$disableMentions",description:"Disables, @ mentioned, and replaces with the Username."},o=void 0,s={unversionedId:"functions/disablementions",id:"version-5.5.5/functions/disablementions",title:"$disableMentions",description:"Disables, @ mentioned, and replaces with the Username.",source:"@site/versioned_docs/version-5.5.5/functions/disablementions.md",sourceDirName:"functions",slug:"/functions/disablementions",permalink:"/docs/5.5.5/functions/disablementions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689004470,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$disableMentions",description:"Disables, @ mentioned, and replaces with the Username."},sidebar:"docs",previous:{title:"$digitalFormat",permalink:"/docs/5.5.5/functions/digitalformat"},next:{title:"$discriminator",permalink:"/docs/5.5.5/functions/discriminator"}},c={},A=[{value:"Usage",id:"usage",level:4}],l={toc:A},u="wrapper";function D(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function removes any mention and replaces with name instead"),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "say", \ncode: `$message\n$disableMentions` \n})\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example",src:n(72858).Z,width:"411",height:"74"})))}D.isMDXComponent=!0},72858:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);