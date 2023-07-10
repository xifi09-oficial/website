"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44690],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},o=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},g="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),g=p(a),u=r,N=g["".concat(m,".").concat(u)]||g[u]||k[u]||l;return a?n.createElement(N,d(d({ref:e},o),{},{components:a})):n.createElement(N,d({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[g]="string"==typeof t?t:r,d[1]=i;for(var p=2;p<l;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91997:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",id:"getAuditLogs"},d=void 0,i={unversionedId:"functions/info-related/getAuditLogs",id:"version-6.3.0/functions/info-related/getAuditLogs",title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",source:"@site/versioned_docs/version-6.3.0/functions/info-related/getAuditLogs.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getAuditLogs",permalink:"/docs/functions/info-related/getAuditLogs",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011381,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",id:"getAuditLogs"},sidebar:"docs",previous:{title:"$getAttachment",permalink:"/docs/functions/info-related/getAttachment"},next:{title:"$getBanReason",permalink:"/docs/functions/info-related/getBanReason"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"AuditLogEvents",id:"auditlogevents",level:2},{value:"Example(s)",id:"examples",level:2}],o={toc:p},g="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getAuditLogs")," will retrieve guild audit logs according to the given arguments."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getAuditLogs[guildID;userID?;limit?;action?;format?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of a specific guild."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The user who executed the action stated in audit logs."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit?"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum of audit logs it will return."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The action that was executed."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The format to return the audit logs in."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.username}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the username of the user who excuted the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.mention}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will mention the user who executed the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the user ID of the user who executed the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.tag}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the discriminator of the user who executed the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{target.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the ID of the user who was the target of the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{action}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the action itself")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the action/auditlog ID")))),(0,r.kt)("h2",{id:"auditlogevents"},"AuditLogEvents"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EVENT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OBJECT CHANGED"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GuildUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Server settings were updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Guild")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChannelCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChannelUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel settings were updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChannelDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChannelOverwriteCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission overwrite was added to a channel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel Overwrite")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChannelOverwriteUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission overwrite was updated for a channel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel Overwrite")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChannelOverwriteDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Permission overwrite was deleted from a channel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Channel Overwrite")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberKick"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was removed from server"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberPrune"),(0,r.kt)("td",{parentName:"tr",align:"center"},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"Members were pruned from server"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberBanAdd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was banned from server"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberBanRemove"),(0,r.kt)("td",{parentName:"tr",align:"center"},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Server ban was lifted for a member"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was updated in server"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Member")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberRoleUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was added or removed from a role"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Partial Role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberMove"),(0,r.kt)("td",{parentName:"tr",align:"center"},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was moved to a different voice channel"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemberDisconnect"),(0,r.kt)("td",{parentName:"tr",align:"center"},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was disconnected from a voice channel"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BotAdd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"Bot user was added to server"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RoleCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"Role was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RoleUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"Role was edited"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RoleDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Role was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Role")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InviteCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"Server invite was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Invite and Invite Metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InviteUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"41"),(0,r.kt)("td",{parentName:"tr",align:null},"Server invite was updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Invite and Invite Metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InviteDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42"),(0,r.kt)("td",{parentName:"tr",align:null},"Server invite was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Invite and Invite Metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WebhookCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Webhook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WebhookUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"51"),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook properties or channel were updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Webhook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WebhookDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"52"),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Webhook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EmojiCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Emoji was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Emoji")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EmojiUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"61"),(0,r.kt)("td",{parentName:"tr",align:null},"Emoji name was updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Emoji")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EmojiDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"62"),(0,r.kt)("td",{parentName:"tr",align:null},"Emoji was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Emoji")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MessageDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"72"),(0,r.kt)("td",{parentName:"tr",align:null},"Single message was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MessageBulkDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"73"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple messages were deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MessagePin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"74"),(0,r.kt)("td",{parentName:"tr",align:null},"Message was pinned to a channel"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MessageUnPin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"75"),(0,r.kt)("td",{parentName:"tr",align:null},"Message was unpinned from a channel"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntegrationCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"App was added to server"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Integration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntegrationUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"81"),(0,r.kt)("td",{parentName:"tr",align:null},"App was updated (as an example, its scopes were updated)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Integration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IntegrationDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"82"),(0,r.kt)("td",{parentName:"tr",align:null},"App was removed from server"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Integration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StageInstanceCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"83"),(0,r.kt)("td",{parentName:"tr",align:null},"Stage instance was created (stage channel becomes live)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Stage Instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StageInstanceUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"84"),(0,r.kt)("td",{parentName:"tr",align:null},"Stage instance details were updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Stage Instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StageInstanceDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"85"),(0,r.kt)("td",{parentName:"tr",align:null},"Stage instance was deleted (stage channel no longer live)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Stage Instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StickerCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"Sticker was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StickerUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"91"),(0,r.kt)("td",{parentName:"tr",align:null},"Sticker details were updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StickerDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"92"),(0,r.kt)("td",{parentName:"tr",align:null},"Sticker was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Sticker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GuildScheduledEventCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Event was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Guild Scheduled Event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GuildScheduledEventUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"101"),(0,r.kt)("td",{parentName:"tr",align:null},"Event was updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Guild Scheduled Event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GuildScheduledEventDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"102"),(0,r.kt)("td",{parentName:"tr",align:null},"Event was cancelled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Guild Scheduled Event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"110"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread was created in a channel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Thread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"111"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread was updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Thread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"112"),(0,r.kt)("td",{parentName:"tr",align:null},"Thread was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Thread")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ApplicationCommandPermissionUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"121"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions were updated for a command"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Command Permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoModerationRuleCreate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"140"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Moderation rule was created"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Auto Moderation Rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoModerationRuleUpdate"),(0,r.kt)("td",{parentName:"tr",align:"center"},"141"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Moderation rule was updated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Auto Moderation Rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoModerationRuleDelete"),(0,r.kt)("td",{parentName:"tr",align:"center"},"142"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Moderation rule was deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Auto Moderation Rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoModerationBlockMessage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"143"),(0,r.kt)("td",{parentName:"tr",align:null},"Message was blocked by Auto Moderation"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoModerationFlagToChannel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"144"),(0,r.kt)("td",{parentName:"tr",align:null},"Message was flagged by Auto Moderation"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoModerationUserCommunicationDisabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"145"),(0,r.kt)("td",{parentName:"tr",align:null},"Member was timed out by Auto Moderation"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return your latest bans (which are logged in audit logs):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'getAuditLogs',\n    code: `\n  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]\n  `\n});\n")))}k.isMDXComponent=!0}}]);