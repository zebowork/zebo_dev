(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[11],{659:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o}));var n=a(8),i=function(){return{type:n.e.CANCEL_JOB}},r=function(e){return{type:n.e.LAUNDRY_PRICE_DETAIL,laundryId:e}},s=function(){return{type:n.e.PRICE_DETAIL}},o=function(e){return{type:n.e.DISPLAY_POST_JOB,selectedLaundryId:e}}},808:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(60),s=a(335),o=a(338),c=a(200),u=a(5),l=a.n(u),b=(a(359),a(29)),d=a(659),f=function(e){var t=e.path,a=e.isBasketPage,n=e.isPricePage,i=e.isJobSubmitPage;return t===b.h||t===b.c||t===b.l||t===b.p||t===b.g&&a?"Home":t===b.g&&n?"Basket":t===b.g&&i?"Prices":t===b.j||t===b.n||t===b.o||t===b.b?"Settings":"Back"},g={cancelJobAndListAllItems:d.a,showPriceDetail:d.d};t.default=Object(r.b)((function(e){return{isMobile:e.layoutState.isMobile,isBasketPage:e.jobPageState.showBasket,isPricePage:e.jobPageState.showPriceSummaries,isJobSubmitPage:e.jobPageState.showPostJob}}),g)((function(e){var t,a,n=!e.isMobile,r=(t=e.isMobile,a=e.path,t&&a!==b.f);return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{fluid:!0},i.a.createElement(o.a,{className:l()({sloganHeading:n,sloganHeadingMobile:e.isMobile})},r&&i.a.createElement(c.a,{xs:"auto",className:"backBtn p-2",style:{cursor:"pointer"},onClick:function(){return function(e){var t=f(e);"Home"===t?e.history.replace(b.f):"Settings"===t?e.history.goBack():"Basket"===t?e.cancelJobAndListAllItems():"Prices"===t&&e.showPriceDetail()}(e)},"data-testid":"backBtn"},"< "+f(e)),i.a.createElement(c.a,{className:l()({"mobile-nav p-2":e.isMobile}),style:{textAlign:"center"},"data-testid":"headerNav"},"ZEBO - connecting YOU with YOUR laundry"))),i.a.createElement("div",{ref:e.refPointer,tabIndex:-1}))}))}}]);