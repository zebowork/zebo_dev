(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[12],{644:function(e,t,a){"use strict";var n=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.IconMd=t.Icon=void 0;var i=n(a(0)),o=function(e){var t=e.classes;return i.default.createElement("i",{className:"icofont-"+t,"aria-hidden":"true"})};t.Icon=o;t.IconMd=function(e){var t=e.classes;return i.default.createElement(o,{classes:t+" icofont-md"})}},655:function(e,t,a){"use strict";var n=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.taskOptions=t.getStatusDescription=t.getStatusColor=t.StatusConst=t.statusOptions=void 0;var i=n(a(260)),o="INITIAL",r="ASSIGN",c="PICKING",l="PICKUP",s="PROCESSING",u="DONE",d="DELIVERING",f="DELIVERED",m="CANCEL",E="COMPLETE",p="BLOCK",v=[{value:o,color:"#ebdef0",description:"job submitted by user",isForLaundry:!1},{value:"BID",color:"#f2d7d5",description:"Job sent to laundries to get bid",isForLaundry:!1},{value:r,color:"#a9dfbf",description:"User received bids, accept single bid means assign to single laundry",isForLaundry:!1},{value:m,color:"#c2c7cc",description:"Customer has cancel the job",isForLaundry:!1},{value:c,color:"#a3e4d7",description:"laundry is out to pickup items",isForLaundry:!0},{value:l,color:"#a3e4d7",description:"laundry's representative picked up items",isForLaundry:!0},{value:s,color:"#f9e79f",description:"started to processing",isForLaundry:!0},{value:u,color:"#f6ddcc",description:"laundry has finished processing and order is ready to pickup",isForLaundry:!0},{value:d,color:"#bfc9ca",description:"laundry is out to deliver order",isForLaundry:!0},{value:f,color:"#AEB6EF",description:"items are with customer, payment is clear",isForLaundry:!0},{value:E,color:"#a9cce3",description:"customer mark order complete after checking items",isForLaundry:!1},{value:p,color:"#f0b274",description:"customer mark order complete after checking items",isForLaundry:!0}];t.statusOptions=v;var b={INITIAL:o,SUBMITTED:"SUBMITTED",BID:"BID",ASSIGN:r,PICKING:c,PICKUP:l,PROCESSING:s,DONE:u,DELIVERING:d,DELIVERED:f,CANCEL:m,COMPLETE:E,DELETE:"DELETE",BLOCK:p};t.StatusConst=b;t.getStatusColor=function(e){var t=v.filter((function(t){return t.value===e})).map((function(e){return e.color}));return t.length?t[0]:""};t.getStatusDescription=function(e){var t=v.filter((function(t){return t.value===e})).map((function(e){return e.description}));return t.length?t[0]:""};var I=[v[2]].concat((0,i.default)(v.filter((function(e){return e.isForLaundry})).filter((function(e){return e.value!==p}))));t.taskOptions=I},786:function(e,t,a){},787:function(e,t,a){"use strict";var n=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),o=a(54),r=n(a(5)),c=a(644),l=n(a(45)),s=(0,o.withRouter)((function(e){var t=e.isMobile,a=e.route,n=e.clickHandler,o=e.icon,s=e.children,u=e.testId,d=e.history,f=e.lock,m=e.notification,E=u||s+"UiButton",p=n||function(e){if(f)return e.preventDefault(),void l.default.warn("Please login to use this feature");d.push(a)};return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"col-6 P-1 justify-content-center text-center"},i.default.createElement("button",{onClick:p,className:(0,r.default)("uiButton noOutline",{uiButtonMobile:t}),"data-testid":E},i.default.createElement("div",{className:"d-flex flex-row justify-content-center h-75"},f&&i.default.createElement("span",{className:(0,r.default)("d-flex align-self-start smallIconUi",{"smallIconUi-mob":t})},i.default.createElement(c.Icon,{classes:"lock"})),m&&i.default.createElement("span",{className:(0,r.default)("d-flex align-self-start notificationUi smallIconUi",{"smallIconUi-mob":t})},i.default.createElement(c.Icon,{classes:"notification"})),i.default.createElement("div",{className:(0,r.default)("d-flex align-self-center txt-wrp p-0",{"txt-wrp-mob":t})},i.default.createElement(c.Icon,{classes:o}))),i.default.createElement("span",{className:(0,r.default)("d-inline h-25 w-100 txt-ico",{"txt-ico-mob":t})},s))))}));t.default=s},788:function(e,t,a){},820:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(91),o=a(0),r=a.n(o),c=a(60),l=(a(786),a(5)),s=a.n(l),u=a(29),d=a(62),f=a(50),m=a(787),E=a.n(m),p=(a(788),function(e){var t=e.isMobile,n=e.name,i=e.authenticated,o=e.notificationHistory;return r.a.createElement("div",{className:"content justify-content-center"},r.a.createElement("div",{className:"container-fluid  justify-content-center"},r.a.createElement("h4",{className:s()("mainHeading",{mainHeadingMobile:t})},"Welcome ",Object(d.text_truncate)(n,10,".")),r.a.createElement("div",{className:"row mx-auto py-3"},r.a.createElement(E.a,{isMobile:t,icon:"washing-machine",route:u.g},"LAUNDRY"),r.a.createElement(E.a,{isMobile:t,icon:"ui-love",route:u.d,lock:!i},"FAVORITE")),r.a.createElement("div",{className:"row mx-auto py-3"},r.a.createElement(E.a,{isMobile:t,icon:"history",route:u.h,lock:!i,notification:o},"HISTORY"),r.a.createElement(E.a,{isMobile:t,icon:"ui-settings",route:u.l,lock:!i},"SETTINGS")),r.a.createElement("div",{className:"row mx-auto py-3"},r.a.createElement(E.a,{isMobile:t,icon:"headphone-alt",route:u.c},"CONTACT"),r.a.createElement("div",{className:"col-6 P-1 justify-content-center text-center"},function(e){if(!f.IS_TEST)return a(361),r.a.createElement("pwa-install",{id:"homePwaInstall"},r.a.createElement("div",{className:"d-flex flex-row  justify-content-center h-75"},r.a.createElement("div",{className:s()("d-flex align-self-center txt-wrp p-0",{"txt-wrp-mob":e})},r.a.createElement("i",{className:"icofont-cloud-download","aria-hidden":"true"}))),r.a.createElement("span",{className:s()("d-inline p-2 inline h-25 txt-ico",{"txt-ico-mob":e})},"INSTALL"))}(t)))))}),v=a(65),b=a(15),I=a(655);t.default=Object(c.b)((function(e){return{name:e.loginState.user.name,isMobile:e.layoutState.isMobile,authenticated:e.loginState.authenticated}}))((function(e){var t=Object(o.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(o.useEffect)((function(){Object(v.getApiResponseFromDb)(b.h).then((function(e){var t=null===e||void 0===e?void 0:e.response,a=null===t||void 0===t?void 0:t.filter((function(e){return e.status===I.StatusConst.DELIVERED})).length;l(a>0)}))}),[]),r.a.createElement(p,Object(n.a)(Object(n.a)({},e),{},{notificationHistory:c}))}))}}]);