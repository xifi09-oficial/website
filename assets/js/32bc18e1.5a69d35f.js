"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97332],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"FAQ",description:"Know more about @akarui/aoi.panel and how to use it."},i=void 0,l={unversionedId:"panel/faq",id:"panel/faq",title:"FAQ",description:"Know more about @akarui/aoi.panel and how to use it.",source:"@site/extensions/panel/faq.md",sourceDirName:"panel",slug:"/panel/faq",permalink:"/extensions/panel/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ",description:"Know more about @akarui/aoi.panel and how to use it."},sidebar:"sidebarExtensions",previous:{title:"Setup",permalink:"/extensions/panel/setup"},next:{title:"Introduction",permalink:"/extensions/music/introduction"}},u={},c=[{value:"Known Errors",id:"known-errors",level:2},{value:"<code>ENOTDIR: not a directory, rename &#39;document.getElementByID(name).value&#39; -&gt; &#39;/home/runner/aoi.panel/commands/&#39;</code>",id:"enotdir-not-a-directory-rename-documentgetelementbyidnamevalue---homerunneraoipanelcommands",level:3},{value:"<code>Oops, looks like the bot has not yet been initialized. Try again in a few minutes.</code>",id:"oops-looks-like-the-bot-has-not-yet-been-initialized-try-again-in-a-few-minutes",level:3},{value:"<code>Cannot find module &lt;some package name&gt; Require stack: /home/runner/aoi.panel/</code>",id:"cannot-find-module-some-package-name-require-stack-homerunneraoipanel",level:3},{value:"<code>Uncaught Exception/Catch Error: ENOENT: no such file or directory, open &#39;/home/runner/aoi.panel/node_modules/@akarui/aoi.panel/src/errors/&lt;random string was here&gt;.txt&#39;</code>",id:"uncaught-exceptioncatch-error-enoent-no-such-file-or-directory-open-homerunneraoipanelnode_modulesakaruiaoipanelsrcerrorsrandom-string-was-heretxt",level:3}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"known-errors"},"Known Errors"),(0,o.kt)("h3",{id:"enotdir-not-a-directory-rename-documentgetelementbyidnamevalue---homerunneraoipanelcommands"},(0,o.kt)("inlineCode",{parentName:"h3"},"ENOTDIR: not a directory, rename 'document.getElementByID(name).value' -> '/home/runner/aoi.panel/commands/'")),(0,o.kt)("p",null,"You didn't give a name to the file when creating a command."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Latest update now pops up a message box to force a file name.")),(0,o.kt)("h3",{id:"oops-looks-like-the-bot-has-not-yet-been-initialized-try-again-in-a-few-minutes"},(0,o.kt)("inlineCode",{parentName:"h3"},"Oops, looks like the bot has not yet been initialized. Try again in a few minutes.")),(0,o.kt)("p",null,"Your Aoi client has not yet started.\nIf using Replit, type ",(0,o.kt)("inlineCode",{parentName:"p"},"kill 1")," in the shell and the run your code."),(0,o.kt)("p",null,"Make sure you have the latest version of aoi.js as well sufficient resources available. "),(0,o.kt)("h3",{id:"cannot-find-module-some-package-name-require-stack-homerunneraoipanel"},(0,o.kt)("inlineCode",{parentName:"h3"},"Cannot find module <some package name> Require stack: /home/runner/aoi.panel/")),(0,o.kt)("p",null,"Missing dependencies in your package.json. Install them and try again."),(0,o.kt)("h3",{id:"uncaught-exceptioncatch-error-enoent-no-such-file-or-directory-open-homerunneraoipanelnode_modulesakaruiaoipanelsrcerrorsrandom-string-was-heretxt"},(0,o.kt)("inlineCode",{parentName:"h3"},"Uncaught Exception/Catch Error: ENOENT: no such file or directory, open '/home/runner/aoi.panel/node_modules/@akarui/aoi.panel/src/errors/<random string was here>.txt'")),(0,o.kt)("p",null,"An older version of panel did not have the proper error directory, update to the latest by ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i @akarui/aoi.panel@latest")))}p.isMDXComponent=!0}}]);