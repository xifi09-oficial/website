"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,d=s["".concat(p,".").concat(f)]||s[f]||g[f]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>O,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var r=n(3905),i=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&u(e,n,t[n]);return e},g=(e,t)=>l(e,a(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",id:"getTextSplitLength"},m=void 0,y={unversionedId:"functions/util-related/getTextSplitLength",id:"version-6.4.0/functions/util-related/getTextSplitLength",title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",source:"@site/versioned_docs/version-6.4.0/functions/util-related/getTextSplitLength.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/getTextSplitLength",permalink:"/docs/functions/util-related/getTextSplitLength",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689984654,formattedLastUpdatedAt:"Jul 22, 2023",frontMatter:{title:"$getTextSplitLength",description:"$getTextSplitLength will return the amount of split arguments in $textSplit",id:"getTextSplitLength"},sidebar:"docs",previous:{title:"$get",permalink:"/docs/functions/util-related/get"},next:{title:"$guildRoleIconURL",permalink:"/docs/functions/util-related/guildRoleIconURL"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],h={toc:b},x="wrapper";function O(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(x,g(s(s({},h),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getTextSplitLength")," will return the amount of split arguments in ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit"),"."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$getTextSplitLength\n")),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," as there are five arguments separated by commas given in ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getTextSplitLength',\n    code: `\n  $getTextSplitLength\n  $textSplit[Hello, my, name, is, Leref;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);