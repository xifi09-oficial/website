"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64195],{17119:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(30143);const r=()=>n.createElement(o.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},53992:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(67294),o=a(11128),r=a(24305),c=a(10433),i=a(41181),l=a(15861),s=a(53156),m=a(86292),p=a(51933),u=a(17119),d=a(91379),y=a(25449),g=a(56868),v=a(99578),E=Object.defineProperty,Z=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&b(e,a,t[a]);if(Z)for(var a of Z(t))h.call(t,a)&&b(e,a,t[a]);return e};const k=[{title:"Powerful Discord Bots",description:"Build advanced string-based Discord bots quickly and efficiently."},{title:"Easy to Use",description:"Simplify bot development with a simple and intuitive syntax."},{title:"Community Driven",description:"Join our active community and collaborate on projects."}];function B({title:e,description:t}){return n.createElement(i.ZP,{item:!0,xs:12,md:4},n.createElement(l.Z,{variant:"h6",component:"h3",gutterBottom:!0},e),n.createElement(l.Z,{variant:"body1"},t))}function w(){return n.createElement("section",{className:v.Z.features},n.createElement(s.Z,null,n.createElement(i.ZP,{container:!0,spacing:4},k.map(((e,t)=>n.createElement(B,_({key:t},e)))))))}function N(e){return"number"!=typeof e||isNaN(e)?"N/A":e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function S(){const[e,t]=(0,n.useState)("N/A"),[a,o]=(0,n.useState)("N/A"),[r,c]=(0,n.useState)("N/A");(0,n.useEffect)((()=>{i()}),[]);const i=async()=>{try{const e=await fetch("https://api.npmjs.org/downloads/point/last-week/aoi.js"),a=await e.json();t(a.downloads);const n=await fetch("https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/aoi.js"),r=(await n.json()).downloads.reduce(((e,t)=>e+t.downloads),0);o(r);const i=await fetch("https://api.github.com/repos/AkaruiDevelopment/aoi.js"),l=await i.json();c(l.stargazers_count)}catch(e){console.error("Error fetching package stats:",e),t("N/A"),o("N/A"),c("N/A")}};return n.createElement("section",{className:v.Z.packageStats},n.createElement(s.Z,null,n.createElement("div",{className:v.Z.packageStatsBox},n.createElement(l.Z,{variant:"h2",component:"h2",gutterBottom:!0,className:v.Z.packageStatsTitle},"Package Statistics"),n.createElement("div",{className:v.Z.statsContainer},n.createElement("div",{className:v.Z.stat},n.createElement(l.Z,{variant:"h4",component:"h3"},N(e)),n.createElement(l.Z,{variant:"body1"},"Downloads (Last Week)")),n.createElement("div",{className:v.Z.stat},n.createElement(l.Z,{variant:"h4",component:"h3"},N(a)),n.createElement(l.Z,{variant:"body1"},"Downloads (All Time)")),n.createElement("div",{className:v.Z.stat},n.createElement(l.Z,{variant:"h4",component:"h3"},N(r)),n.createElement(l.Z,{variant:"body1"},"Stars on GitHub"))))))}function I(){const[e,t]=(0,n.useState)(!1);return n.createElement("button",{className:`${v.Z.copyButton} ${e?v.Z.copied:""}`,onClick:()=>{navigator.clipboard.writeText("npm install aoi.js").then((()=>{t(!0),setTimeout((()=>t(!1)),2e3)}),(e=>{console.error("Failed to copy text: ",e)}))},type:"button"},n.createElement("span",{className:v.Z.copyIconWrapper},e?n.createElement(g.Z,{className:v.Z.copyIcon}):n.createElement(g.Z,{className:v.Z.copyIconBeforeCopy})),"npm install aoi.js")}const j=function(){const e=(0,r.Z)(),{siteConfig:t={}}=e,{title:a}=t;return n.createElement(n.Fragment,null,n.createElement(p.Z,{title:"Akarui Development Team",description:"The official aoi.js documentation | Powered by Akarui Development Team."},n.createElement("header",{className:v.Z.heroBanner},n.createElement(s.Z,null,n.createElement(l.Z,{variant:"h1",component:"h1",gutterBottom:!0,className:v.Z.title},a),n.createElement(l.Z,{variant:"subtitle1",component:"p",gutterBottom:!0},"The most advanced string-based package to create a Discord Bot fast and powerful."),n.createElement("div",{className:v.Z.buttons},n.createElement(m.Z,{variant:"contained",color:"primary",size:"large",component:o.Z,to:(0,c.Z)("/docs"),startIcon:n.createElement(d.Z,null)},"Docs"),n.createElement(m.Z,{variant:"outlined",color:"primary",size:"large",href:"https://github.com/AkaruiDevelopment/aoi.js",startIcon:n.createElement(y.Z,null)},"GitHub")),n.createElement("div",{className:v.Z.copyButtonWrapper},n.createElement(I,null)),n.createElement(u.Z,null))),n.createElement("main",null,n.createElement(w,null),n.createElement(S,null))))}},99578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={privacyContainer:"privacyContainer_t35s",privacyHeaderItem:"privacyHeaderItem_iUQ6",privacyHeaderItemSmall:"privacyHeaderItemSmall_hfP8",privacyItem:"privacyItem_Sgzu",heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng",copyButtonWrapper:"copyButtonWrapper_uKA6",copyButton:"copyButton_b65l",copyIconWrapper:"copyIconWrapper_KfKX",copyIconBeforeCopy:"copyIconBeforeCopy_cKJ3",copyIcon:"copyIcon_gf9d",copied:"copied_VSYr"}}}]);