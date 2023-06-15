"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81236],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var u=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);n&&(u=u.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,u)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,u,r=function(e,n){if(null==e)return{};var t,u,r={},i=Object.keys(e);for(u=0;u<i.length;u++)t=i[u],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(u=0;u<i.length;u++)t=i[u],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=u.createContext({}),s=function(e){var n=u.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return u.createElement(a.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return u.createElement(u.Fragment,{},n)}},p=u.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,h=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return t?u.createElement(h,o(o({ref:n},c),{},{components:t})):u.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return u.createElement.apply(null,o)}return u.createElement.apply(null,t)}p.displayName="MDXCreateElement"},16139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var u=t(87462),r=(t(67294),t(3905));const i={title:"$unshuffleQueue",description:"$unshuffleQueue will unshuffle the current queue.",id:"unshuffleQueue"},o=void 0,l={unversionedId:"aoi.music/functions/unshuffleQueue",id:"aoi.music/functions/unshuffleQueue",title:"$unshuffleQueue",description:"$unshuffleQueue will unshuffle the current queue.",source:"@site/extensions/aoi.music/functions/unshuffleQueue.md",sourceDirName:"aoi.music/functions",slug:"/aoi.music/functions/unshuffleQueue",permalink:"/extensions/aoi.music/functions/unshuffleQueue",draft:!1,tags:[],version:"current",frontMatter:{title:"$unshuffleQueue",description:"$unshuffleQueue will unshuffle the current queue.",id:"unshuffleQueue"},sidebar:"docs",previous:{title:"$stopTrack",permalink:"/extensions/aoi.music/functions/stopTrack"},next:{title:"$voicePing",permalink:"/extensions/aoi.music/functions/voicePing"}},a={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:s};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,u.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$unshuffleQueue")," will unshuffle the current queue. "),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$unshuffleQueue\n")),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will unshuffle the current queue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'unshuffleQueue',\n    code: `\n    $unshuffleQueue\n  `\n});\n")))}f.isMDXComponent=!0}}]);