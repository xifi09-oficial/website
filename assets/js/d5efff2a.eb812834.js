"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[97661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={title:"$mfaLevel"},a=void 0,i={unversionedId:"functions/mfalevel",id:"functions/mfalevel",title:"$mfaLevel",description:"Returns the guild mfa level \\(true or false\\)",source:"@site/docs/functions/mfalevel.md",sourceDirName:"functions",slug:"/functions/mfalevel",permalink:"/docs/functions/mfalevel",draft:!1,tags:[],version:"current",frontMatter:{title:"$mfaLevel"},sidebar:"someSidebar",previous:{title:"$messageWebhookID",permalink:"/docs/functions/messagewebhookid"},next:{title:"$minute",permalink:"/docs/functions/minute"}},c={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage without optional field",id:"usage-without-optional-field",level:4},{value:"Usage with optional field",id:"usage-with-optional-field",level:4}],s={toc:u};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Returns the guild mfa level ","(","true or false",")"),(0,l.kt)("h4",{id:"fields"},"Fields"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Guild ID ","(","Optional",")")),(0,l.kt)("p",null,"Raw usage: ",(0,l.kt)("inlineCode",{parentName:"p"},"$mfaLevel[Guild ID]")),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Guild ID - Guild's mfa level you want to check.")),(0,l.kt)("h4",{id:"usage-without-optional-field"},"Usage without optional field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "mfalevel",\n    code: `$mfaLevel`\n})\n')),(0,l.kt)("h4",{id:"usage-with-optional-field"},"Usage with optional field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "mfalevel",\n    code: `$mfaLevel[773352845738115102]`\n}) // This will check the mfaLevel of Aoi.js official server\n')))}f.isMDXComponent=!0}}]);