"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46103],{78602:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(67294),r=n(86010),l=n(7452),o=n(87524),i=n(39960),s=n(95999);const c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function m(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,r.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:c.sidebarItem},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=n(13102);function d(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return a.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(g,{sidebar:t}):a.createElement(m,{sidebar:t}):null}function f(e){const{sidebar:t,toc:n,children:o,...i}=e,s=t&&t.items.length>0;return a.createElement(l.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(p,{sidebar:t}),a.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},76830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(67294),r=n(86010),l=n(10833),o=n(35281),i=n(9460),s=n(78602),c=n(51700);function m(e){return null}function u(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:o,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(l.d,{title:n,description:r,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var d=n(39407);function g(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,i.C)(),{nextItem:o,prevItem:u,frontMatter:g}=r,{hide_table_of_contents:p,toc_min_heading_level:f,toc_max_heading_level:h}=g;return a.createElement(s.Z,{sidebar:t,toc:!p&&l.length>0?a.createElement(d.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(c.Z,null,n),(o||u)&&a.createElement(m,{nextItem:o,prevItem:u}))}function p(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(u,null),a.createElement(g,{sidebar:e.sidebar},a.createElement(t,null))))}},39407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,l.Z)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,a.Z)({},n,{linkClassName:s,linkActiveClassName:c})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),l=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=m();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=r.memo(d);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const f=(0,l.L)(),h=m??f.tableOfContents.minHeadingLevel,v=d??f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[s,c,h,v])),r.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:s},p))}},9460:(e,t,n)=>{n.d(t,{C:()=>i,n:()=>o});var a=n(67294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return a.createElement(l.Provider,{value:o},t)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},88824:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(67294),r=n(52263);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},45706:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(99861),l=n(92949);function o(){const{colorMode:e}=(0,l.I)();return a.createElement(r.Z,{repo:"Faf4a/website",repoId:"R_kgDOJwxdeQ",category:"General",categoryId:"DIC_kwDOJwxdec4CXSeZ",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0})}},51700:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(67294),r=n(9460),l=n(86010),o=n(44996);function i(e){let{children:t,className:n}=e;const{frontMatter:l,assets:i}=(0,r.C)(),{withBaseUrl:s}=(0,o.C)(),c=i.image??l.image;return a.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&a.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),t)}var s=n(39960);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:o}=(0,r.C)(),{permalink:i,title:m}=n,u=o?"h1":"h2";return a.createElement(u,{className:(0,l.Z)(c.title,t),itemProp:"headline"},o?m:a.createElement(s.Z,{itemProp:"url",to:i},m))}var u=n(95999),d=n(88824);const g={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,d.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function f(){return a.createElement(a.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:n}=(0,r.C)(),{date:o,formattedDate:i,readingTime:s}=n;return a.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},void 0!==s&&a.createElement(a.Fragment,null,a.createElement(f,null),a.createElement(p,{readingTime:s})))}function v(e){return e.href?a.createElement(s.Z,e):a.createElement(a.Fragment,null,e.children)}function b(e){let{author:t,className:n}=e;const{name:r,title:o,url:i,imageURL:s,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return a.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",n)},s&&a.createElement(v,{href:m,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(v,{href:m,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),o&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const E={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function y(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,r.C)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?E.imageOnlyAuthorRow:"row",t)},n.map(((e,t)=>a.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?E.imageOnlyAuthorCol:E.authorCol),key:t},a.createElement(b,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function C(){return a.createElement("header",null,a.createElement(m,null),a.createElement(h,null),a.createElement(y,null))}var _=n(18780),N=n(45042);function k(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,r.C)();return a.createElement("div",{id:o?_.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),itemProp:"articleBody"},a.createElement(N.Z,null,t))}var I=n(84881),x=n(86233),Z=n(87462);function w(){return a.createElement("b",null,a.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...n}=e;return a.createElement(s.Z,(0,Z.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(w,null))}const P={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function T(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:n,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=n.length>0;return m||c||i?a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&P.blogPostFooterDetailsFull)},m&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},a.createElement(x.Z,{tags:n})),t&&i&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(I.Z,{editUrl:i})),c&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},a.createElement(L,{blogPostTitle:o,to:e.permalink}))):null}function A(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(i,{className:(0,l.Z)(o,n)},a.createElement(C,null),a.createElement(k,null,t),a.createElement(T,null))}var D=n(45706),H=n(72389);function O(e){const{metadata:t,isBlogPostPage:n}=(0,r.C)(),{frontMatter:l,slug:o,title:i}=((0,H.Z)(),t),{enableComments:s}=l;return a.createElement(a.Fragment,null,a.createElement(A,e),s&&n&&a.createElement(D.Z,null))}},58073:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),r=n(8121);const l=e=>{let{children:t,color:n,radius:r,padding:l}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:r||"2px",color:"#fff",padding:l||"0.2rem"}},t)};var o=n(74866),i=n(85162),s=n(45706),c=n(17891);const m=e=>{let{name:t,id:n,value:r,onChange:l,type:o,error:i}=e;const s={width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid "+(i?"red":"#A9A9A9"),fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",color:"var(--aoijs-color)",background:"var(--aoijs-color)",position:"relative"},[c,m]=(0,a.useState)(""),d=e=>{l(e)},g=async()=>{if("number"!==o)return;if(""===r)return;if(r.length<18)return;let e;try{e=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${r}`)}catch{return}try{const t=await e.text();if(t.startsWith("<"))return;const n=JSON.parse(t);n&&n.avatar&&m(n.avatar)}catch(i){return}};let p=null;switch(o){case"textarea":p=a.createElement("textarea",{name:t,id:n,value:r,onChange:d,style:{...s,minHeight:"150px",resize:"none"},required:!0});break;case"number":const e=e=>{const{value:n}=e.target,a=n.replace(/[^0-9]/g,"");a.length>20||l({target:{name:t,value:a}})};p=a.createElement("div",{style:{position:"relative"}},a.createElement("input",{type:"text",name:t,id:n,value:r,onChange:e,onBlur:g,style:s,inputMode:"numeric",pattern:"[0-9]*",required:!0}),c&&a.createElement("img",{src:c,alt:"Avatar",style:u}));break;case"small":p=a.createElement("input",{type:"text",name:t,id:n,value:r,onChange:d,style:{...s,width:"50%",fontSize:"12px"},required:!0});break;default:p=a.createElement("input",{type:"text",name:t,id:n,value:r,onChange:d,style:s,required:!0})}return a.createElement("div",null,p)},u={position:"absolute",top:"50%",right:"8px",transform:"translateY(-50%)",width:"24px",height:"24px",borderRadius:"50%"};var d=n(99578),g=n(39960),p=n(86010);const f=()=>{const[e,t]=(0,a.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[n,r]=(0,a.useState)({title:!1,discordUID:!1,description:!1,code:!1}),{title:l,description:o,discordUID:i,code:s,tags:c,isUIDValid:u}=e,f=e=>{const{name:n,value:a}=e.target;t((e=>({...e,[n]:a})))},h=async e=>{e.preventDefault();const n={title:!1,discordUID:!1,description:!1,code:!1};if(""===l.trim()&&(n.title=!0),""===i.trim()&&(n.discordUID=!0),""===o.trim()&&(n.description=!0),""===s.trim()&&(n.code=!0),r(n),!0===n.description||!0===n.code||!0===n.title||!0===n.discordUID)return;const a=await(async e=>{if(["1224141242141241241","5389583258325892352"].includes(e))return!1;const t=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`);return!(await t.json()).bot})(i);if(!a)return console.log("Invalid user"),void t((e=>({...e,isUIDValid:!1})));const{avatar:m,username:u}=await(async e=>{const t=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),n=await t.json();return{avatar:n.avatar,username:n.username}})(i),d=l.toLowerCase().replace(/\s+/g,"-");let g=`${d}.md`,p=!0;for(;p;){const e=`https://api.github.com/repos/Faf4a/website/contents/forums/wikis/${g}`,t=await fetch(e);if(200===t.status){g=`${d}-${Math.random().toString(36).substring(7)}.md`}else{if(404!==t.status)return;p=!1}}const f=`---\ntitle: "${l}"\ndescription: "${o}"\nauthors:\n  name: @${u}\n  title: Member\n  url: https://discord.com/users/${i}\n  image_url: ${m}\ntags: ${JSON.stringify(c)}\nhide_table_of_contents: false\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n  \n${s}`,h=`https://api.github.com/repos/Faf4a/website/contents/forums/wikis/${g}`,v=btoa(f);(await fetch(h,{method:"PUT",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({message:`Create new file -- ${u}`,content:v})})).ok&&setTimeout((async()=>{await alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}),1e3)};return a.createElement("form",{onSubmit:h},a.createElement("br",null),a.createElement("br",null),a.createElement("h3",null,"Title of Wiki"),a.createElement(m,{name:"title",id:"title",value:l,onChange:f,type:"text",placeholder:"Title",required:!0,error:n.title}),n.title&&a.createElement("p",{style:{color:"red"}},"Title is required"),a.createElement("br",null),a.createElement("h3",null,"Description"),a.createElement(m,{name:"description",id:"description",value:o,onChange:f,type:"textarea",placeholder:"Description",required:!0,error:n.description}),n.description&&a.createElement("p",{style:{color:"red"}},"Description is required"),a.createElement("br",null),a.createElement("h3",null,"Discord User ID"),a.createElement(m,{name:"discordUID",id:"discordUID",value:i,onChange:f,type:"number",placeholder:"Discord UID",required:!0,error:!u||n.discordUID}),!u&&a.createElement("p",{style:{color:"red"}},"Invalid user"),n.discordUID&&a.createElement("p",{style:{color:"red"}},"Discord UID is required"),a.createElement("br",null),a.createElement("h3",null,"Content of Wiki"),a.createElement(m,{name:"code",id:"code",value:s,onChange:f,type:"textarea",placeholder:"Code",required:!0,error:n.code}),n.code&&a.createElement("p",{style:{color:"red"}},"Content is required"),a.createElement("br",null),a.createElement("div",{className:d.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>a.createElement("span",{key:e,className:(0,p.Z)(d.Z.tag,{[d.Z.active]:c.includes(e)}),onClick:()=>(e=>{const n=[...c];n.includes(e)?n.splice(n.indexOf(e),1):n.push(e),t((e=>({...e,tags:n})))})(e)},e)))),a.createElement("div",{className:d.Z.buttons,style:{display:"flex",justifyContent:"flex-end"}},a.createElement(g.Z,{className:(0,p.Z)("button button--outline button--secondary"),onClick:h},"Submit")))},h={...r.Z,Highlight:l,GiscusComponent:s.Z,InputField:m,SubmitForm:f,Tabs:o.Z,Tooltip:c.u,TabItem:i.Z}},99578:(e,t,n)=>{n.d(t,{Z:()=>a});const a={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG",active:"active_Iznl"}}}]);