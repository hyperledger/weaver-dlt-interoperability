"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[3938],{1875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=()=>null},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3938:(e,t,n)=>{n.d(t,{Z:()=>ve});var a=n(7294),r=n(6010),l=n(6550),o=n(4973),c=n(3773);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var d=n(7462);function u(e){let{width:t=21,height:n=21,color:r="currentColor",strokeWidth:l=1.2,className:o,...c}=e;return a.createElement("svg",(0,d.Z)({viewBox:"0 0 15 15",width:t,height:n},c),a.createElement("g",{stroke:r,strokeWidth:l},a.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}const h="announcementBar_axC9",g="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",v="announcementBarContent_6uhP";const f=function(){const{isActive:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!e)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:g}),a.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(u,{width:14,height:14,strokeWidth:3.1})):null)};var E=n(1875),k=n(2389);const p={toggle:"toggle_iYfV",toggleScreenReader:"toggleScreenReader_h9qa",toggleDisabled:"toggleDisabled_xj38",toggleTrack:"toggleTrack_t-f2",toggleTrackCheck:"toggleTrackCheck_mk7D",toggleChecked:"toggleChecked_a04y",toggleTrackX:"toggleTrackX_dm8H",toggleTrackThumb:"toggleTrackThumb_W6To",toggleFocused:"toggleFocused_pRSw",toggleIcon:"toggleIcon_pHJ9"},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggleIcon,p.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggleIcon,p.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,d]=(0,a.useState)(!1),u=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)(p.toggle,t,{[p.toggleChecked]:s,[p.toggleFocused]:m,[p.toggleDisabled]:o})},a.createElement("div",{className:p.toggleTrack,role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=u.current)?void 0:e.click()}},a.createElement("div",{className:p.toggleTrackCheck},n.checked),a.createElement("div",{className:p.toggleTrackX},n.unchecked),a.createElement("div",{className:p.toggleTrackThumb})),a.createElement("input",{ref:u,checked:s,type:"checkbox",className:p.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>d(!0),onBlur:()=>d(!1),onKeyDown:e=>{var t;"Enter"===e.key&&(null==(t=u.current)||t.click())}}))}));function N(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,k.Z)();return a.createElement(w,(0,d.Z)({disabled:!o,icons:{checked:a.createElement(_,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var y=n(5350);const C=e=>{const[t,n]=(0,a.useState)(e),r=(0,a.useRef)(!1),l=(0,a.useRef)(0),o=(0,a.useCallback)((e=>{null!==e&&(l.current=e.getBoundingClientRect().height)}),[]);return(0,c.RF)(((t,a)=>{if(!e)return;const o=t.scrollY;if(o<l.current)return void n(!0);if(r.current)return void(r.current=!1);const c=null==a?void 0:a.scrollY,s=document.documentElement.scrollHeight-l.current,i=window.innerHeight;c&&o>=c?n(!1):o+i<s&&n(!0)})),(0,c.SL)((t=>{if(e)return t.location.hash?(r.current=!0,void n(!1)):void n(!0)})),{navbarRef:o,isNavbarVisible:t}};const T=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(3783),S=n(907),I=n(7819),D=n(5537);const B=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,d.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},x={toggle:"toggle_2i4l",navbarHideable:"navbarHideable_RReh",navbarHidden:"navbarHidden_FBwS",navbarSidebarToggle:"navbarSidebarToggle_AVbO"},A="right";function R(){return(0,c.LU)().navbar.items}function M(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,y.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function H(e){let{sidebarShown:t,toggleSidebar:n}=e;T(t);const l=R(),s=M(),i=function(e){var t;let{sidebarShown:n,toggleSidebar:r}=e;const l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),[s,i]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{l&&!o&&i(!0)}),[l,o]);const m=!!l;return(0,a.useEffect)((()=>{m?n||i(!0):i(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((()=>{i(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(N,{className:x.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(u,{color:"var(--ifm-color-emphasis-600)",className:x.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(I.Z,(0,d.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const U=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{if(n)return r(!1),!1}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=M(),o=(0,S.gA)(),{navbarRef:s,isNavbarVisible:i}=C(e),m=R(),u=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:g}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??A))),rightItems:e.filter((e=>"right"===(e.position??A)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[x.navbarHideable]:e,[x.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==m?void 0:m.length)>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(B,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(I.Z,(0,d.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},g.map(((e,t)=>a.createElement(I.Z,(0,d.Z)({},e,{key:t})))),!l.disabled&&a.createElement(N,{className:x.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!u&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(H,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(6742),P=n(4996),W=n(3919);const z="footerLogoLink_SRtH";var F=n(8465),$=n(8617);function O(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,P.Z)(t),s=(0,P.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,d.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,W.Z)(n)?a.createElement("span",null,r,a.createElement($.Z,null)):r)}const G=e=>{let{sources:t,alt:n}=e;return a.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};const q=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,P.Z)(l.src),dark:(0,P.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(O,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:z},a.createElement(G,{alt:l.alt,sources:o})):a.createElement(G,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var J=n(412);const K=(0,c.WA)("theme"),X="light",Y="dark",j=e=>e===Y?Y:X,Q=e=>{(0,c.WA)("theme").set(j(e))},ee=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>J.Z.canUseDOM?j(document.documentElement.getAttribute("data-theme")):j(e))(e)),o=(0,a.useCallback)((()=>{l(X),Q(X)}),[]),s=(0,a.useCallback)((()=>{l(Y),Q(Y)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",j(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=K.get();null!==e&&l(j(e))}catch(e){console.error(e)}}),[t,l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?Y:X)}))}),[t,n]),{isDarkTheme:r===Y,setLightTheme:o,setDarkTheme:s}};var te=n(2924);const ne=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ee();return a.createElement(te.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ae="docusaurus.tab.",re=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`docusaurus.tab.${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(ae)){const n=t.substring(ae.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},le=(0,a.createContext)(void 0);const oe=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=re();return a.createElement(le.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ce(e){let{children:t}=e;return a.createElement(ne,null,a.createElement(c.pl,null,a.createElement(oe,null,a.createElement(c.OC,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t))))))}var se=n(9105),ie=n(2263);function me(e){let{locale:t,version:n,tag:r}=e;return a.createElement(se.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var de=n(1217);function ue(){const{i18n:{defaultLocale:e,locales:t}}=(0,ie.Z)(),n=(0,c.l5)();return a.createElement(se.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,ie.Z)(),r=function(){const{siteConfig:{url:e}}=(0,ie.Z)(),{pathname:t}=(0,l.TH)();return e+(0,P.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(se.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ge(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,ie.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:u,searchMetadatas:h}=e,g=(0,P.Z)(t),b=(0,c.pe)(s),v=n,f=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(se.Z,null,a.createElement("html",{lang:v,dir:f}),t&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(de.Z,{image:o}),m&&a.createElement(de.Z,{image:m}),a.createElement(de.Z,{description:i,keywords:u}),a.createElement(he,null),a.createElement(ue,null),a.createElement(me,(0,d.Z)({tag:c.HX,locale:n},h)),a.createElement(se.Z,null,l.map(((e,t)=>a.createElement("meta",(0,d.Z)({key:`metadata_${t}`},e))))))}const be=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ve=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return be(),a.createElement(ce,null,a.createElement(ge,e),a.createElement(m,null),a.createElement(f,null),a.createElement(U,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(q,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263),i=n(3773);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:d,titleClassName:u,...h}=e,g=(0,c.Z)(m.href||"/"),b={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)},v=r.createElement(o.Z,{sources:b,alt:m.alt||n||t});return r.createElement(l.Z,(0,a.Z)({to:g},h,m.target&&{target:m.target}),m.src&&(d?r.createElement("div",{className:d},v):r.createElement(r.Fragment,null,v)),null!=n&&r.createElement("b",{className:u},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>d,Z:()=>g});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919),m=n(7819);function d(e){var t;let{activeBasePath:n,activeBaseRegex:l,to:m,href:d,label:u,activeClassName:h="",prependBaseUrlToHref:g,...b}=e;const v=(0,c.Z)(m),f=(0,c.Z)(n),E=(0,c.Z)(d,{forcePrependBaseUrl:!0}),k=u&&d&&!(0,i.Z)(d),p="dropdown__link--active"===h;return r.createElement(o.Z,(0,a.Z)({},d?{href:g?E:d}:{isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(h)?"":h,to:v,...n||l?{isActive:(e,t)=>l?new RegExp(l).test(t.pathname):t.pathname.startsWith(f)}:null},b),k?r.createElement("span",null,u,r.createElement(s.Z,p&&{width:12,height:12})):u)}function u(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(d,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function h(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const g=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?h:u;return r.createElement(o,(0,a.Z)({},l,{activeClassName:l.activeClassName??(0,m.E)(t)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(7819),i=n(3773),m=n(8780);function d(e){let{docId:t,label:n,docsPluginId:d,...u}=e;const{activeVersion:h,activeDoc:g}=(0,o.Iw)(d),{preferredVersion:b}=(0,i.J)(d),v=(0,o.yW)(d),f=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,b,v].filter(Boolean)),t),E=(0,s.E)(u.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},u,{className:(0,c.Z)(u.className,{[E]:(null==g?void 0:g.sidebar)&&g.sidebar===f.sidebar}),activeClassName:E,label:n??f.id,to:f.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(3773),i=n(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:h,...g}=e;const b=(0,c.Iw)(n),v=(0,c.gB)(n),f=(0,c.yW)(n),{preferredVersion:E,savePreferredVersionName:k}=(0,s.J)(n);const p=function(){const e=v.map((e=>{const t=(null==b?void 0:b.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==b?void 0:b.activeVersion),onClick:()=>{k(e.name)}}}));return[...u,...e,...h]}(),_=b.activeVersion??E??f,Z=t&&p?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):_.label,w=t&&p?void 0:m(_).path;return p.length<=1?r.createElement(l.Z,(0,a.Z)({},g,{mobile:t,label:Z,to:w,isActive:d?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},g,{mobile:t,label:Z,to:w,items:p,isActive:d?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(3773);function s(e){let{label:t,to:n,docsPluginId:s,...i}=e;const m=(0,o.zu)(s),{preferredVersion:d}=(0,c.J)(s),u=(0,o.yW)(s),h=m??d??u,g=t??h.label,b=n??(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return r.createElement(l.Z,(0,a.Z)({},i,{label:g,to:b}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(6010),o=n(3773),c=n(5525),s=n(7819);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:n,className:o,...i}=e;const m=(0,r.useRef)(null),d=(0,r.useRef)(null),[u,h]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":u})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",o)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),h(!u))}}),i.children??i.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:n}))))))}function d(e){let{items:t,className:n,position:m,...d}=e;const u=(0,o.be)(),h=i(t,u),{collapsed:g,toggleCollapsed:b,setCollapsed:v}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&v(!h)}),[u,h,v]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},d,{onClick:e=>{e.preventDefault(),b()}}),d.children??d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const u=function(e){let{mobile:t=!1,...n}=e;const a=t?d:m;return r.createElement(a,n)}},7819:(e,t,n)=>{n.d(t,{Z:()=>v,E:()=>b});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(3773);const m="iconLanguage_EbrZ";function d(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...d}=e;const{i18n:{currentLocale:u,locales:h,localeConfigs:g}}=(0,s.Z)(),b=(0,i.l5)();function v(e){return g[e].label}const f=[...n,...h.map((e=>{const t=`pathname://${b.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":v(u);return a.createElement(l.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:f}))}var u=n(1875);function h(e){let{mobile:t}=e;return t?null:a.createElement(u.Z,null)}const g={default:()=>r.Z,localeDropdown:()=>d,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z};const b=e=>e?"menu__link--active":"navbar__link--active";function v(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=(e=>{const t=g[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(r);return a.createElement(l,n)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:d="",...u}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:d,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},u)))))}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);