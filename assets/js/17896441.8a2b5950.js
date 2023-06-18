"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27918],{47559:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var a=n(67294),r=n(10833),l=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:r},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(87462),p=n(95999),v=n(32244);function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v.Z,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v.Z,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){const{metadata:e}=s();return a.createElement(b,{previous:e.previous,next:e.next})}var f=n(52263),g=n(39960),E=n(80143),C=n(35281),L=n(60373),y=n(74477);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=_[e.versionMetadata.banner];return a.createElement(t,e)}function N(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(g.Z,{to:n,onClick:r},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,f.Z)(),{pluginId:l}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,L.J)(l),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,E.Jo)(l),c=i??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,C.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(k,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(N,{versionLabel:s.label,to:c.path,onClick:()=>o(s.name)})))}function Z(e){let{className:t}=e;const n=(0,y.E)();return n.banner?a.createElement(x,{className:t,versionMetadata:n}):null}function w(e){let{className:t}=e;const n=(0,y.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,C.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function I(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:C.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(I,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(84881),H=n(86233);const D={lastUpdated:"lastUpdated_vwxv"};function M(e){return a.createElement("div",{className:(0,d.Z)(C.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(H.Z,e)))}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l}=e;return a.createElement("div",{className:(0,d.Z)(C.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",D.lastUpdated)},(n||r)&&a.createElement(T,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function S(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,i=o.length>0,c=!!(t||n||l);return i||c?a.createElement("footer",{className:(0,d.Z)(C.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(M,{tags:o}),c&&a.createElement(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var O=n(86043),$=n(93743);const q={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",q.tocCollapsibleButton,!t&&q.tocCollapsibleButtonExpanded,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const P={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:l}=e;const{collapsed:o,toggleCollapsed:i}=(0,O.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(P.tocCollapsible,!o&&P.tocCollapsibleExpanded,n)},a.createElement(V,{collapsed:o,onClick:i}),a.createElement(O.z,{lazy:!0,className:P.tocCollapsibleContent,collapsed:o},a.createElement($.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const R={tocMobile:"tocMobile_ITEo"};function j(){const{toc:e,frontMatter:t}=s();return a.createElement(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(C.k.docs.docTocMobile,R.tocMobile)})}var z=n(39407);function J(){const{toc:e,frontMatter:t}=s();return a.createElement(z.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:C.k.docs.docTocDesktop})}var G=n(92503),W=n(45042);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(C.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(G.Z,{as:"h1"},n)),a.createElement(W.Z,null,t))}var Q=n(53438),Y=n(48596),K=n(44996);function ee(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ne(){const e=(0,K.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(g.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ee,{className:te.breadcrumbHomeIcon})))}const ae={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(g.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function le(e){let{children:t,active:n,index:r,addMicrodata:l}=e;return a.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function oe(){const e=(0,Q.s1)(),t=(0,Y.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(C.k.docs.docBreadcrumbs,ae.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ne,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(le,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:r},t.label))})))):null}const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(j,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(J,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&ie.docItemCol)},a.createElement(Z,null),a.createElement("div",{className:ie.docItemContainer},a.createElement("article",null,a.createElement(oe,null),a.createElement(w,null),n.mobile,a.createElement(X,null,t),a.createElement(S,null)),a.createElement(h,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ce(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(c,null),a.createElement(se,null,a.createElement(n,null))))}},32244:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010),l=n(39960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},39407:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:s,linkActiveClassName:c})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=d();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const p=r.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const b=(0,l.L)(),h=d??b.tableOfContents.minHeadingLevel,f=u??b.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:f});return m((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:f}}),[s,c,h,f])),r.createElement(p,(0,a.Z)({toc:g,className:n,linkClassName:s},v))}},74477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(67294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},45706:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(99861),l=n(92949);function o(){const{colorMode:e}=(0,l.I)();return a.createElement(r.Z,{repo:"Faf4a/website",repoId:"R_kgDOJwxdeQ",category:"General",categoryId:"DIC_kwDOJwxdec4CXSeZ",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0})}},58073:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),r=n(8121);const l=e=>{let{children:t,color:n,radius:r,padding:l}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:r||"2px",color:"#fff",padding:l||"0.2rem"}},t)};var o=n(74866),i=n(85162),s=n(45706),c=n(17891);const d=e=>{let{name:t,id:n,value:r,onChange:l,type:o,error:i}=e;const s={width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid "+(i?"red":"#A9A9A9"),fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",color:"var(--aoijs-color)",background:"var(--aoijs-color)",position:"relative"},[c,d]=(0,a.useState)(""),u=e=>{l(e)},p=async()=>{if("number"!==o)return;if(""===r)return;if(r.length<18)return;let e;try{e=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${r}`)}catch{return}try{const t=await e.text();if(t.startsWith("<"))return;const n=JSON.parse(t);n&&n.avatar&&d(n.avatar)}catch(i){return}};let v=null;switch(o){case"textarea":v=a.createElement("textarea",{name:t,id:n,value:r,onChange:u,style:{...s,minHeight:"150px",resize:"none"},required:!0});break;case"number":const e=e=>{const{value:n}=e.target,a=n.replace(/[^0-9]/g,"");a.length>20||l({target:{name:t,value:a}})};v=a.createElement("div",{style:{position:"relative"}},a.createElement("input",{type:"text",name:t,id:n,value:r,onChange:e,onBlur:p,style:s,inputMode:"numeric",pattern:"[0-9]*",required:!0}),c&&a.createElement("img",{src:c,alt:"Avatar",style:m}));break;case"small":v=a.createElement("input",{type:"text",name:t,id:n,value:r,onChange:u,style:{...s,width:"50%",fontSize:"12px"},required:!0});break;default:v=a.createElement("input",{type:"text",name:t,id:n,value:r,onChange:u,style:s,required:!0})}return a.createElement("div",null,v)},m={position:"absolute",top:"50%",right:"8px",transform:"translateY(-50%)",width:"24px",height:"24px",borderRadius:"50%"};var u=n(99578),p=n(39960),v=n(86010);const b=()=>{const[e,t]=(0,a.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[n,r]=(0,a.useState)({title:!1,discordUID:!1,description:!1,code:!1}),{title:l,description:o,discordUID:i,code:s,tags:c,isUIDValid:m}=e,b=e=>{const{name:n,value:a}=e.target;t((e=>({...e,[n]:a})))},h=async e=>{e.preventDefault();const n={title:!1,discordUID:!1,description:!1,code:!1};if(""===l.trim()&&(n.title=!0),""===i.trim()&&(n.discordUID=!0),""===o.trim()&&(n.description=!0),""===s.trim()&&(n.code=!0),r(n),!0===n.description||!0===n.code||!0===n.title||!0===n.discordUID)return;const a=await(async e=>{if(["1224141242141241241","5389583258325892352"].includes(e))return!1;const t=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`);return!(await t.json()).bot})(i);if(!a)return console.log("Invalid user"),void t((e=>({...e,isUIDValid:!1})));const{avatar:d,username:m}=await(async e=>{const t=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),n=await t.json();return{avatar:n.avatar,username:n.username}})(i),u=l.toLowerCase().replace(/\s+/g,"-");let p=`${u}.md`,v=!0;for(;v;){const e=`https://api.github.com/repos/Faf4a/website/contents/forums/wikis/${p}`,t=await fetch(e);if(200===t.status){p=`${u}-${Math.random().toString(36).substring(7)}.md`}else{if(404!==t.status)return;v=!1}}const b=`---\ntitle: "${l}"\ndescription: "${o}"\nauthors:\n  name: @${m}\n  title: Member\n  url: https://discord.com/users/${i}\n  image_url: ${d}\ntags: ${JSON.stringify(c)}\nhide_table_of_contents: false\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n  \n${s}`,h=`https://api.github.com/repos/Faf4a/website/contents/forums/wikis/${p}`,f=btoa(b);(await fetch(h,{method:"PUT",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({message:`Create new file -- ${m}`,content:f})})).ok&&setTimeout((async()=>{await alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}),1e3)};return a.createElement("form",{onSubmit:h},a.createElement("br",null),a.createElement("br",null),a.createElement("h3",null,"Title of Wiki"),a.createElement(d,{name:"title",id:"title",value:l,onChange:b,type:"text",placeholder:"Title",required:!0,error:n.title}),n.title&&a.createElement("p",{style:{color:"red"}},"Title is required"),a.createElement("br",null),a.createElement("h3",null,"Description"),a.createElement(d,{name:"description",id:"description",value:o,onChange:b,type:"textarea",placeholder:"Description",required:!0,error:n.description}),n.description&&a.createElement("p",{style:{color:"red"}},"Description is required"),a.createElement("br",null),a.createElement("h3",null,"Discord User ID"),a.createElement(d,{name:"discordUID",id:"discordUID",value:i,onChange:b,type:"number",placeholder:"Discord UID",required:!0,error:!m||n.discordUID}),!m&&a.createElement("p",{style:{color:"red"}},"Invalid user"),n.discordUID&&a.createElement("p",{style:{color:"red"}},"Discord UID is required"),a.createElement("br",null),a.createElement("h3",null,"Content of Wiki"),a.createElement(d,{name:"code",id:"code",value:s,onChange:b,type:"textarea",placeholder:"Code",required:!0,error:n.code}),n.code&&a.createElement("p",{style:{color:"red"}},"Content is required"),a.createElement("br",null),a.createElement("div",{className:u.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>a.createElement("span",{key:e,className:(0,v.Z)(u.Z.tag,{[u.Z.active]:c.includes(e)}),onClick:()=>(e=>{const n=[...c];n.includes(e)?n.splice(n.indexOf(e),1):n.push(e),t((e=>({...e,tags:n})))})(e)},e)))),a.createElement("div",{className:u.Z.buttons,style:{display:"flex",justifyContent:"flex-end"}},a.createElement(p.Z,{className:(0,v.Z)("button button--outline button--secondary"),onClick:h},"Submit")))},h={...r.Z,Highlight:l,GiscusComponent:s.Z,InputField:d,SubmitForm:b,Tabs:o.Z,Tooltip:c.u,TabItem:i.Z}},99578:(e,t,n)=>{n.d(t,{Z:()=>a});const a={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG",active:"active_Iznl"}}}]);