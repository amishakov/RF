"use strict";(self.webpackChunkrf_website=self.webpackChunkrf_website||[]).push([[4279],{53465:(e,t,s)=>{s.d(t,{W:()=>o});var l=s(96540),n=s(44586);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=i();return{selectMessage:(t,s)=>function(e,t,s){const l=e.split("|");if(1===l.length)return l[0];l.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(s,t,e)}}},52802:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(96540);var l=s(28774),n=s(53465),r=s(21312),a=s(66588);const c={main:"main_qroE",columns:"columns_X3s3",left:"left_wB29",description:"description_Cx0X",right:"right_ILy1"};var i=s(74848);function o(e){let{doc:t}=e;return(0,i.jsxs)("article",{className:"margin-vert--lg",children:[(0,i.jsx)(l.A,{to:t.permalink,children:(0,i.jsx)("h3",{children:t.title})}),t.description&&(0,i.jsx)("p",{children:t.description})]})}function d(e){let{doc:t}=e;const s=t.permalink,n="/img/generated/single/"+(s.endsWith("/")?s+"index":s)+".svg";return(0,i.jsx)("article",{className:c.docItem,children:(0,i.jsxs)("div",{className:c.columns,children:[(0,i.jsx)("div",{className:c.left,children:(0,i.jsx)("img",{src:n,className:c.articleImage})}),(0,i.jsxs)("div",{className:c.right,children:[(0,i.jsx)(l.A,{to:t.permalink,children:(0,i.jsx)("h3",{children:t.title})},t.permalink),(0,i.jsx)("p",{className:c.description,children:t.description})]})]})})}function u(e){return e.permalink.substring(0,e.permalink.lastIndexOf("/")+1)}function m(e){let{tag:t}=e;const s=(0,a.P_)("category-listing")[t.label],m=function(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,r.T)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),g=function(e,t){const s=e.find((e=>e.title==t.label));return s||e.find((e=>(e.frontMatter.definitions??[]).map((e=>e.name)).includes(t.label)))}(s,t),h=function(e,t){const s=Array.from(new Set(e.map((e=>u(e))))).sort(),l={};return e.filter((e=>e!==t)).forEach((e=>{const t=u(e);return s.forEach((s=>{t==s&&(l[s]||(l[s]=[]),l[s].push(e))})),l})),l}(s,g),p=(0,r.T)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:m(t.count),tagName:t.label});return(0,i.jsx)("div",{className:"container margin-vert--lg",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,i.jsxs)("header",{className:"margin-bottom--m",children:[(0,i.jsx)("h1",{children:p}),(0,i.jsx)(l.A,{href:t.allTagsPath,children:(0,i.jsx)(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),g?(0,i.jsxs)("section",{className:`margin-vert--lg  ${c.main}`,style:{textTransform:"capitalize"},children:[(0,i.jsx)("h2",{children:"Main Result"}),(0,i.jsx)(d,{id:-1,doc:g})]},"maindoc"):"",Object.keys(h).map((e=>{return(0,i.jsxs)("section",{className:"margin-vert--lg",style:{textTransform:"capitalize"},children:[(0,i.jsx)("h2",{children:(t=e,t.substr(1).replace(new RegExp("/$"),"").replaceAll("/"," > "))}),h[e].map(((e,t)=>(0,i.jsx)(o,{id:t,doc:e},t)))]},e);var t}))]})})})}}}]);