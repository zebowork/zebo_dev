(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[13],{655:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"a",(function(){return O}));var a=n(49),c=n.n(a),s=n(92),r=n(61),i=n(16),l=n(63),d=n(261);function o(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.m)(),e.next=3,Object(r.getApiResponseFromDb)(i.f);case 3:if(!(n=e.sent)){e.next=7;break}return Object(d.b)(t),e.abrupt("return",n.response);case 7:return e.abrupt("return",Object(d.b)(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(c.a.mark((function e(t){var n,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(i.j)(t),a=Object(l.o)(t),e.next=4,Object(r.getApiResponseFromDb)(n);case 4:if(!(s=e.sent)){e.next=8;break}return Object(d.d)(t,a),e.abrupt("return",Promise.resolve({db:s.response,api:a}));case 8:return e.abrupt("return",Promise.resolve({db:void 0,api:Object(d.d)(t,a)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.n)(0,0),e.next=3,Object(r.getApiResponseFromDb)(i.h);case 3:if(!(n=e.sent)){e.next=7;break}return Object(d.c)(t),e.abrupt("return",Promise.resolve({db:n.response,api:t}));case 7:return e.abrupt("return",Promise.resolve({db:[],api:Object(d.c)(t)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.l)(),e.next=3,Object(r.getApiResponseFromDb)(i.x);case 3:if(!(n=e.sent)){e.next=7;break}return Object(d.a)(t),e.abrupt("return",Promise.resolve({db:n.response,api:t}));case 7:return e.abrupt("return",Promise.resolve({db:[],api:Object(d.a)(t)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},676:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(169),c=n(63),s=n(39),r=n.n(s);function i(e){return function(t,n){t(o(e)),r.a.info("Removed favorite laundry"),n().loginState.authenticated&&Object(c.t)(e).catch((function(n){r.a.warn("Failed to removed favorite laundry try again"),t(d(e))}))}}function l(e){return function(t,n){t(d(e)),r.a.info("Added to your favorite laundries"),n().loginState.authenticated&&Object(c.d)(e).catch((function(n){r.a.warn("Failed to add favorite laundry try again"),t(o(e))}))}}var d=function(e){return{type:a.a.FVT_LAUNDRY_ADD,laundryId:e}},o=function(e){return{type:a.a.FVT_LAUNDRY_REMOVE,laundryId:e}},b=function(e){return{type:a.a.FVT_LAUNDRY_PICKUP,laundry:e}}},684:function(e,t,n){"use strict";var a=n(4),c=n(74),s=n(0),r=n.n(s),i=n(677),l=n.n(i),d=n(359),o=n.n(d),b=n(133),j=n.n(b),u=n(118),h=n(652),m=n.n(h),O=n(151),f=n.n(O),x=n(1);var p=function(e){var t,n=e.contacts,a=e.contactNumberChange,c=e.contactNumber,s=e.updateEmailJob,r=e.email,i=e.toggleTimekeeper,l=e.pickupAfter,d=e.pickupBefore,b=e.deliverAfter,h=e.deliverBefore,O=e.pickupNote,p=e.deliverNote,v=e.pickupNoteChange,g=e.isLoading,y=e.handleCancelJob,N=e.deliverNoteChange,k=e.validateAndHandlePostJob;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{style:{marginBottom:20},children:["CONTACT NUMBER"," ",Object(x.jsx)(m.a,{children:"We will share this number to zebo, if something confusing zebo can contact you on this"}),Object(x.jsx)(f.a,{type:"dropDownAddNew",label:"Phone number: ",isClearable:"true",options:n.map((function(e){return{value:e,label:e}})),onChange:function(e){return a((t=e)?t.value:"");var t},defaultValue:(t=c,0!==t.length?{value:t,label:t}:null),onlyNumbers:!0})]}),Object(x.jsxs)("div",{style:{marginBottom:20},children:["EMAIL "," ",Object(x.jsx)(m.a,{children:"We will use this to update you about your job status e-g we will send you email once your job is complete"}),Object(x.jsx)(o.a,{type:"email",name:"email",placeholder:"Email",meta:{},defaultValue:r,onChange:function(e){return s(e.target.value)}})]}),Object(x.jsxs)("div",{style:{marginBottom:20},children:[Object(x.jsxs)("div",{children:["PREFERRED PICK UP "," ",Object(x.jsx)(m.a,{children:"Zebo will come to pick up clothes between these time. You can mention any notes as well e-g pickup from front door"})]}),Object(x.jsxs)("div",{className:"btn-group",style:{marginBottom:5},children:[Object(x.jsxs)("button",{type:"button","data-testid":"pickupAfter",className:"btn btn-default",onClick:function(){return i("pa")},children:["After ",l]}),Object(x.jsxs)("button",{type:"button","data-testid":"pickupBefore",className:"btn btn-default",onClick:function(){return i("pb")},children:["Before ",d]})]}),Object(x.jsx)(o.a,{type:"text",placeholder:"pick up notes - e.g i need urgent service",meta:{},input:{value:O,onChange:function(e){return v(e.target.value)}}})]}),Object(x.jsxs)("div",{style:{marginBottom:20},children:[Object(x.jsxs)("div",{children:["PREFERRED DELIVERY "," ",Object(x.jsx)(m.a,{children:"Zebo will come to deliver clothes between these time. You should be at home this time. You can also mention any notes as well e-g door ball is not working"})]}),Object(x.jsxs)("div",{className:"btn-group",style:{marginBottom:5},children:[Object(x.jsxs)("button",{type:"button","data-testid":"deliverAfter",className:"btn btn-default",onClick:function(){return i("da")},children:["After ",b]}),Object(x.jsxs)("button",{type:"button","data-testid":"deliverBefore",className:"btn btn-default",onClick:function(){return i("db")},children:["Before ",h]})]}),Object(x.jsx)(o.a,{type:"text",placeholder:"delivery notes - e.g deliver me on 16th",meta:{},input:{value:p,onChange:function(e){return N(e.target.value)}}})]}),Object(x.jsx)("div",{className:"row float-right",children:Object(x.jsxs)("div",{className:"col-md-12 input-group",children:[Object(x.jsxs)(u.a,{variant:"light",className:"btn btn-wd",onClick:function(){return y()},children:["Cancel ",Object(x.jsx)("i",{className:"icofont-close icofont-md","aria-hidden":"true"})]}),Object(x.jsx)(u.a,{className:"btn btn-success btn-fill btn-wd ml-1",onClick:function(){return k()},disabled:g,children:Object(x.jsxs)(j.a,{variant:"light",show:g,id:"postJobButtonText",children:["POST ",Object(x.jsx)("i",{className:"icofont-paper-plane icofont-md","aria-hidden":"true"})]})})]})})]})};t.a=function(e){var t=r.a.useState(""),n=Object(c.a)(t,2),s=n[0],i=n[1],d=r.a.useState(!1),o=Object(c.a)(d,2),b=o[0],j=o[1],u=function(e){j(!b),i(e)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"card",children:Object(x.jsx)("div",{className:"content pt-sm-2 px-sm-4",children:Object(x.jsxs)("div",{className:"row",children:[b&&Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)(l.a,{time:function(){switch(s){case"pa":return e.pickupAfter;case"pb":return e.pickupBefore;case"da":return e.deliverAfter;case"db":return e.deliverBefore;default:return""}}(),onChange:function(t){switch(s){case"pa":return e.pickupAfterTimeChange(t);case"pb":return e.pickupBeforeTimeChange(t);case"da":return e.deliverAfterTimeChange(t);case"db":return e.deliverBeforeTimeChange(t);default:return}},onDoneClick:function(){return u("")},switchToMinuteOnHourSelect:!0})}),Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h4",{className:"title",children:e.heading}),e.extraFields,Object(x.jsx)(p,Object(a.a)({},Object(a.a)(Object(a.a)({},e),{},{toggleTimekeeper:u})))]}),!b&&e.detailsPanel]})})})})}},706:function(e,t,n){},819:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(51),r=n(4),i=n(345),l=n(87),d=n(74),o=n(118),b=n(139),j=n(151),u=n.n(j),h=n(358),m=n.n(h),O=n(39),f=n.n(O),x=n(64),p=n(60),v=n(166),g=n(1),y=function(e){var t=e.items,n=e.deleteItem,a=e.editItem;return Object(g.jsxs)("div",{children:[" ",Object(g.jsx)("div",{children:t.map((function(e){return Object(g.jsx)("span",{children:Object(g.jsx)("div",{className:"card p-0 mb-2 border-top-0 border-right-0 border-left-0",children:Object(g.jsxs)("div",{className:"d-flex flex-row  justify-content-between rounded bg-white",children:[Object(g.jsxs)("div",{className:"d-flex align-items-start flex-column  bg-white",children:[Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("div",{className:"p-1 ",children:Object(g.jsx)("button",{type:"button",className:"close text-danger float-left","aria-label":"Close","data-original-title":"Delete item",onClick:function(t){return n(e.basketFeId)},children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})}),Object(g.jsxs)("div",{className:"p-1 font-weight-bold pull-left",children:[Object(g.jsxs)("span",{className:"wr",children:[" ",Object(x.text_truncate)(e.name,19)]})," ",Object(p.exist)(e.operations,v.a)&&Object(g.jsx)("i",{className:"icofont-hanger icofont-md","aria-hidden":"true"})]}),Object(g.jsx)("div",{className:"pt-2  pull-right",style:{fontSize:"10px",textAlign:"right"},children:Object(x.constantToStringUpperCaseFirstLetter)(e.febric)})]}),Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("div",{className:"p-1 ",children:Object(g.jsx)("button",{type:"button",className:"border border-0 bg-transparent p-0","aria-hidden":"true",style:{color:"#3386ff",outline:"none"},"data-testid":"edit-btn",onClick:function(t){return a(e)},children:Object(g.jsx)("i",{className:"icofont-edit","aria-hidden":"true"})})}),Object(g.jsx)("div",{className:"p-1 ",style:{fontSize:"12px"},children:Object(p.removeAllMatched)(e.operations,v.a).map((function(e){return Object(x.constantToStringUpperCaseFirstLetter)(e)})).join(", ")}),Object(g.jsxs)("div",{className:"p-1",style:{fontSize:"12px"},children:["- ",e.imageUrls.length," ",Object(g.jsx)("i",{className:"icofont-ui-camera","aria-hidden":"true"})]})]})]}),Object(g.jsx)("div",{className:"d-flex align-items-end flex-column bg-white align-self-center",children:Object(g.jsx)("div",{className:"align-self-center align-self-stretch",children:Object(g.jsx)("span",{className:"circleNum",children:Object(x.twoDigitNumber)(e.count)})})})]})})},e.basketFeId)}))})]})},N=function(e){var t=e.items,n=e.deleteItem,a=e.editItem;return Object(g.jsx)("div",{className:"table-responsive table-full-width",children:Object(g.jsxs)("table",{className:"table table-hover table-striped",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{}),Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Count"}),Object(g.jsx)("th",{children:"Ops."}),Object(g.jsx)("th",{children:"Febric"}),Object(g.jsx)("th",{})]})}),Object(g.jsx)("tbody",{children:t.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{type:"button",className:"close text-danger float-left pr-1","aria-label":"Close","data-original-title":"Delete item",onClick:function(t){return n(e.basketFeId)},children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(g.jsx)("button",{type:"button",className:"border border-0 p-0 bg-transparent noOutline","aria-hidden":"true",style:{color:"#3386ff"},"data-testid":"edit-btn",onClick:function(t){return a(e)},children:Object(g.jsx)("i",{className:"icofont-edit","aria-hidden":"true"})})]}),Object(g.jsxs)("td",{children:[e.name," ",Object(p.exist)(e.operations,v.a)&&Object(g.jsx)("i",{className:"icofont-hanger icofont-md","aria-hidden":"true"})]}),Object(g.jsx)("td",{children:e.count}),Object(g.jsx)("td",{children:Object(p.removeAllMatched)(e.operations,v.a).map((function(e){return Object(x.constantToStringUpperCaseFirstLetter)(e)})).join(", ")}),Object(g.jsx)("td",{children:Object(x.constantToStringUpperCaseFirstLetter)(e.febric)}),Object(g.jsxs)("td",{children:[e.imageUrls.length," ",Object(g.jsx)("i",{className:"icofont-ui-camera","aria-hidden":"true"})]})]},e.basketFeId)}))})]})})},k=n(6),C=n.n(k),w=(n(706),n(133)),I=n.n(w),S=n(88),P=n(79),A=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],i=function(){return s(!1)},l=e.isMobile,j=e.handleClearBasket,h=e.items,O=e.handleAddressChange,x=e.addresses,p=e.handleServiceChange,v=e.selectedService,k=e.selectedAddress,w=e.handleCheckBasketPrice,A=e.isLoading;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"card",ref:e.refsMap.get(S.a.basket),tabIndex:-1,children:[Object(g.jsxs)("div",{className:C()("header",{"p-3":l,"pt-sm-2 px-sm-4":!l}),children:[Object(g.jsxs)("h4",{className:"title",children:["Basket ",Object(g.jsx)("i",{className:"icofont-basket icofont-md","aria-hidden":"true"})]}),0!==h.length&&Object(g.jsx)("p",{className:"category",children:"Following items you have added to you basket"})]}),Object(g.jsxs)("div",{className:C()("content",{"p-2":l,"pt-sm-2 px-sm-4":!l}),children:[0===h.length&&Object(g.jsx)("div",{style:{textAlign:"center"},"data-testid":"emptyBasket",children:Object(g.jsx)("i",{className:C()("icofont-delete-alt icofont-md",{mobileEmptyBasket:l,desktopEmptyBasket:!l}),"aria-hidden":"true"})}),0!==h.length&&Object(g.jsxs)(g.Fragment,{children:[l&&Object(g.jsx)(y,Object(r.a)({},e)),!l&&Object(g.jsx)(N,Object(r.a)({},e)),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"d-flex flex-column",children:Object(g.jsx)(u.a,{type:"dropDownAddNew",label:"Pickup and delivery: ",onChange:function(e){return O(Object(P.e)(e))},options:x.map((function(e){return{value:e,label:e}})),defaultValue:Object(P.j)(k)})}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"d-flex flex-column",children:[Object(g.jsx)(m.a,{label:"Express",input:{name:"serviceType",value:"EXPRESS",onChange:function(e){return p(e.target.value)},checked:"EXPRESS"===v}}),Object(g.jsx)(m.a,{label:"Urgent",input:{name:"serviceType",value:"URGENT",onChange:function(e){return p(e.target.value)},checked:"URGENT"===v}}),Object(g.jsx)(m.a,{label:"Standard",input:{name:"serviceType",value:"STANDARD",onChange:function(e){return p(e.target.value)},checked:"STANDARD"===v}})]}),Object(g.jsxs)("div",{className:"d-flex justify-content-end flex-wrap",children:[Object(g.jsxs)(o.a,{variant:"light",className:"btn btn-wd",onClick:function(){return s(!0)},children:["Empty Basket ",Object(g.jsx)("i",{className:"icofont-delete-alt icofont-md","aria-hidden":"true"})]}),Object(g.jsx)(o.a,{className:"btn btn-success btn-fill btn-wd float-right mt-1 ml-1",onClick:function(){k?w():f.a.warn("Select or enter address for pickup & delivery")},disabled:A,children:Object(g.jsxs)(I.a,{variant:"light",show:A,id:"checkPriceButtonText",children:["Check Price ",Object(g.jsx)("i",{className:"icofont-database icofont-md","aria-hidden":"true"})]})})]})]})]})]})]}),Object(g.jsxs)(b.a,{show:c,onHide:i,children:[Object(g.jsx)(b.a.Header,{closeButton:!0,translate:"yes",children:Object(g.jsx)(b.a.Title,{children:"Empty Basket"})}),Object(g.jsx)(b.a.Body,{children:"Everything will be delete from basket!"}),Object(g.jsxs)(b.a.Footer,{children:[Object(g.jsx)(o.a,{variant:"primary",onClick:function(){i(),j()},children:"Delete"}),Object(g.jsx)(o.a,{variant:"secondary",onClick:i,children:"No"})]})]})]})},E=n(16),F=n(357),T=n.n(F),D=Object(s.b)((function(e){return{items:e.basketState.items,selectedAddress:e.basketState.selectedAddress,selectedService:e.basketState.selectedService,addresses:e.loginState.user.preferences.deliveryAddress,isMobile:e.layoutState.isMobile,isLoading:T.a.isInProgress(E.a,e.aPICallsState.calls)}}),(function(e){return{deleteItem:function(t){return e(Object(i.g)(t))},editItem:function(t){return e(Object(i.f)(t))},handleCheckBasketPrice:function(){return e(Object(i.d)())},handleAddressChange:function(t){e(Object(i.b)(t)),e(Object(l.f)(t))},handleServiceChange:function(t){return e(Object(i.c)(t))},handleClearBasket:function(){return e(Object(i.e)())}}}))((function(e){return Object(g.jsx)(A,Object(r.a)(Object(r.a)({},e),{},{editItem:function(t){var n,a;e.editItem(t),null===(n=e.refsMap.get(S.a.itemOption))||void 0===n||null===(a=n.current)||void 0===a||a.focus()}}))})),B=n(21),L=n(29),R=n(91),M=n(43),_=n(44),J=n(9),U=n(152),V=n(77),z=n(142),H=n(655),W=n(63),Y=n(344);var K=function(){return{type:J.b.REQUEST_ITEMS}},G=function(e,t){var n=function(e){return Object(r.a)({FAVORITES:[]},e.categoriesWithItems)}(e);return t.forEach((function(e){return Object(Y.b)(e,n)})),{type:J.b.RECEIVE_ITEMS,categoriesWithItems:n,receivedAt:Date.now()}},X=function(e){return{type:J.b.REMOVE_FAVORITE_ITEM,id:e}},Z=function(e){return{type:J.b.ADD_FAVORITE_ITEM,id:e}},q=n(107),Q=n(337),$=n(141),ee=n(650),te=function(e){switch(e){case ce:return Object(g.jsx)(ee.Icon,{classes:"ui-love text-danger"});case"GENERAL":return Object(g.jsx)(ee.Icon,{classes:"users-alt-4"});case"FEMALES_REMAINING":return Object(g.jsx)(ee.Icon,{classes:"female"});case"OTHERS":return Object(g.jsx)(ee.Icon,{classes:"atom"});case"HOUSEHOLD":return Object(g.jsx)(ee.Icon,{classes:"ui-home"})}};function ne(e){return e===ce?"close":"ui-love"}var ae=function(e){return Object(g.jsx)(Q.a,{className:"buttons-with-margin",children:Object(g.jsxs)(Q.a.Body,{children:[Object(g.jsxs)(Q.a.Title,{children:[e.category," ",te(e.category)]}),e.items.map((function(t){return Object(g.jsxs)($.a,{"aria-label":"Items button group",children:[Object(g.jsx)(o.a,{variant:"light",size:"sm",onClick:function(n){return e.handleFvtClick(t.id)},children:Object(g.jsx)(ee.Icon,{classes:ne(e.category)})}),Object(g.jsx)("button",{type:"button",className:"btn btn-wd btn-info",onClick:function(n){return e.handleClick(n,t.name)},children:t.name}),Object(g.jsx)(o.a,{variant:"light",hidden:!0})]},t.id)}))]})})},ce="FAVORITES",se=function(e){var t=e.categoriesWithItems,n=e.handleItemClick,a=e.isLoad,c=e.addFvtClick,s=e.removeFvtClick,r=[];if(t)for(var i in t)if(0!==t[i].length){var l=i===ce?s:c;r.push(Object(g.jsx)(ae,{category:i,items:t[i],handleClick:n,handleFvtClick:l},i))}return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"header pt-sm-2 px-sm-4",children:Object(g.jsxs)("h4",{id:"itms",children:["Laundry Items ",Object(g.jsx)(ee.IconMd,{classes:"refree-jersey"})]})}),Object(g.jsx)("div",{className:"content pt-sm-2 px-sm-4",children:Object(g.jsx)(I.a,{variant:"dark",children:r,show:a,id:"items"})})]})},re=n(336),ie=function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"card m-1",children:[Object(g.jsx)("div",{className:"ourheader",children:Object(g.jsxs)(re.a.Toggle,{as:Q.a.Header,eventKey:e.index+"",children:[Object(g.jsx)(ee.IconMd,{classes:"caret-down"})," ",e.category," ",te(e.category)]})}),Object(g.jsx)(re.a.Collapse,{eventKey:e.index+"",children:Object(g.jsx)("div",{className:"card-body card-text border-none buttons-with-margin",children:e.items.map((function(t){return Object(g.jsxs)($.a,{"aria-label":"Items button group",children:[Object(g.jsx)(o.a,{variant:"light",size:"sm",onClick:function(n){return e.handleFvtClick(t.id)},style:{padding:0,paddingLeft:2},children:Object(g.jsx)(ee.Icon,{classes:ne(e.category)})}),Object(g.jsx)("button",{type:"button",className:"btn btn-wd btn-info",onClick:function(n){return e.handleClick(n,t.name)},children:t.name})]},t.id)}))})})]})})},le=function(e){var t=e.categoriesWithItems,n=e.handleItemClick,a=e.isLoad,c=e.addFvtClick,s=e.removeFvtClick,r=[];if(t){var i=0;for(var l in t)if(0!==t[l].length){var d=l===ce?s:c;r.push(Object(g.jsx)(ie,{category:l,items:t[l],index:i,handleClick:n,handleFvtClick:d},l)),i++}}return Object(g.jsxs)("div",{className:"mb-5",children:[Object(g.jsx)("div",{className:"header",children:Object(g.jsxs)("h4",{id:"itms",className:"pb-2 m-0",style:{color:"#3f44ea"},children:["Laundry Items ",Object(g.jsx)(ee.IconMd,{classes:"refree-jersey"})]})}),Object(g.jsx)("div",{className:"content",children:Object(g.jsx)(I.a,{variant:"dark",show:a,id:"items",children:Object(g.jsx)(re.a,{defaultActiveKey:"0",children:r})})})]})},de=function(e){Object(M.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).handleItemClick=a.handleItemClick.bind(Object(R.a)(a)),a}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"handleItemClick",value:function(e,t){e.preventDefault(),this.props.selectItemToPutInBasket(t)}},{key:"render",value:function(){var e=this.props,t=e.categoriesWithItems,n=e.isMobile,a=e.isLoading;return Object(g.jsxs)("div",{ref:this.props.refsMap.get(S.a.items),tabIndex:-1,children:[!n&&Object(g.jsx)(se,{categoriesWithItems:t,handleItemClick:this.handleItemClick,isLoad:a,addFvtClick:this.props.addFvtItem,removeFvtClick:this.props.removeFvtItem}),n&&Object(g.jsx)(le,{categoriesWithItems:t,handleItemClick:this.handleItemClick,isLoad:a,addFvtClick:this.props.addFvtItem,removeFvtClick:this.props.removeFvtItem})]})}}]),n}(c.a.Component);var oe,be={fetchItems:function(){return function(e,t){e(Object(U.updateStoreSend)(E.f)),e(K()),Object(H.b)().then((function(n){return e(G(n,t().loginState.user.preferences.favoriteItems))})).catch((function(e){return f.a.err(z.b)})).finally((function(){e(Object(U.updateStoreReceive)(E.f)),Object(V.b)()}))}},selectItemToPutInBasket:q.i,addFvtItem:function(e){return f.a.info("Added to favorite"),function(t,n){n().loginState.authenticated&&Object(W.c)(e).catch((function(e){return console.log(e)})),t(Z(e))}},removeFvtItem:function(e){return f.a.info("Removed  favorite"),function(t,n){n().loginState.authenticated&&Object(W.s)(e).catch((function(e){return console.log(e)})),t(X(e))}}},je=Object(s.b)((function(e){return{categoriesWithItems:e.itemState.categoriesWithItems,isMobile:e.layoutState.isMobile,isLoading:T.a.isInProgress(E.f,e.aPICallsState.calls)}}),be)(de),ue=n(264),he=n(361),me=n.n(he),Oe=n(685),fe=n.n(Oe),xe=n(691),pe=n.n(xe),ve=n(751),ge=n.n(ve),ye=n(31),Ne=n(349);var ke=function(e){var t=e.feedback;if(!t)return Object(Ne.b)();var n=function(e){var n;return!t||(null===(n=t.reviews)||void 0===n?void 0:n.filter((function(t){return t.rating===e})).length)<1};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Ce,{value:5,percentage:t.star5,disabled:n(5)}),Object(g.jsx)(Ce,{value:4,percentage:t.star4,disabled:n(4)}),Object(g.jsx)(Ce,{value:3,percentage:t.star3,disabled:n(3)}),Object(g.jsx)(Ce,{value:2,percentage:t.star2,disabled:n(2)}),Object(g.jsx)(Ce,{value:1,percentage:t.star1,disabled:n(1)})]})},Ce=function(e){var t=e.value,n=e.percentage,a=e.disabled;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"d-flex flex-row",children:[Object(g.jsxs)("button",{className:"px-2 btn-link link",onClick:function(){return Pe(t)},disabled:a,children:[t," star"]}),Object(g.jsx)("div",{className:"px-2 flex-grow-1 align-self-center",children:Object(g.jsx)(ue.a,{variant:"warning",now:n})}),Object(g.jsx)("div",{className:"px-2",children:Object(g.jsxs)("button",{className:"px-2 btn-link link",onClick:function(){return Pe(t)},disabled:a,children:[Object(g.jsx)(we,{val:n}),"%"]})})]})})},we=function(e){var t=e.val;return t<10?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Ie,{}),Object(g.jsx)(Ie,{}),t]}):t>=10&&t<=99?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Ie,{}),t]}):Object(g.jsx)(g.Fragment,{children:t})},Ie=function(){return Object(g.jsx)("span",{style:{display:"inline-block",width:".385em"}})},Se=[{dataField:"id",text:"Customers' reviews",formatter:function(e,t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"d-flex flex-column py-2",children:[Object(g.jsx)("div",{className:"font-weight-bolder",children:t.name}),Object(g.jsx)("div",{className:"text-muted font-weight-lighter pb-2",children:t.date}),Object(g.jsx)(me.a,{input:{value:t.rating},isEdit:!1,size:18}),t.comment]})})},headerAttrs:{hidden:!0}},{dataField:"rating",text:"Rating",filter:Object(ve.numberFilter)({getFilter:function(e){oe=e}}),headerAttrs:{hidden:!0},style:{display:"none"}}],Pe=function(e){oe({number:e,comparator:"="})},Ae={sizePerPage:5,hideSizePerPage:!0,hidePageListOnlyOnePage:!0},Ee=function(e){var t=e.laundryId,n=e.rating,c=void 0===n?0:n,s=e.laundryName,r=void 0===s?"Laundry":s,i=Object(a.useState)(),l=Object(d.a)(i,2),j=l[0],u=l[1],h=Object(a.useState)(!1),m=Object(d.a)(h,2),O=m[0],f=m[1];Object(a.useEffect)((function(){O&&Object(H.d)(t).then((function(e){var t=e.db,n=e.api;return t&&u(t),n})).then((function(e){return u(e)})).catch(ye.notifyErr)}),[O,t]);var x=function(){f(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{onClick:function(){f(!0)},className:"btn-link link",children:Object(g.jsxs)("div",{className:"d-flex flex-row",children:[Object(g.jsx)(me.a,{input:{value:c},isEdit:!1,size:20,className:"transparent"}),Object(g.jsxs)("div",{className:"p-1 align-self-center",children:[c.toFixed(1)," out of 5"]})]})}),Object(g.jsxs)(b.a,{show:O,onHide:x,scrollable:!0,size:"lg",children:[Object(g.jsx)(b.a.Header,{style:{display:"block",border:0},children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-12 col-sm-3 col-lg-6",children:Object(g.jsx)("h3",{children:r})}),Object(g.jsx)("div",{className:"col-12 col-sm-9 col-lg-6 px-2",children:Object(g.jsx)(ke,{feedback:j})})]})}),Object(g.jsxs)(b.a.Body,{children:[!j&&Object(Ne.b)(),j&&Object(g.jsx)(fe.a,{keyField:"comment",data:null===j||void 0===j?void 0:j.reviews,columns:Se,pagination:pe()(Ae),filter:ge()()})]}),Object(g.jsx)(b.a.Footer,{children:Object(g.jsxs)(o.a,{variant:"secondary",onClick:x,children:[" ",Object(g.jsx)(ee.Icon,{classes:"close"})," Close "]})})]})]})},Fe=n(675),Te=n.n(Fe),De=function(e){var t=e.summary,n=e.handleDetailClick,c=e.handleFvtLaundry,s=e.handlePostJob,r=Object(a.useState)(!1),i=Object(d.a)(r,2),l=i[0],j=i[1],u=function(){return j(!0)},h=t.id,m=t.name,O=t.estimatedPrice,f=t.estimatedTime,p=t.deliveryCharges,v=t.notMatchReasons,y=t.warningReasons,N=t.rating,k=t.isFvtLaundry;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(Q.a,{children:[Object(g.jsxs)(Q.a.Header,{children:[Object(g.jsxs)(Q.a.Title,{children:[Object(g.jsx)(Te.a,{imgSize:"20x20",text:Object(x.initialCharacters)(m),hashTheme:!0,circle:!0})," ",Object(g.jsx)("strong",{children:m})," ",k&&Object(g.jsx)(ee.Icon,{classes:"ui-love text-danger"}),!k&&Object(g.jsxs)(o.a,{variant:"light",size:"sm",className:"float-right",onClick:function(e){return c(h)},children:["Add favorite ",Object(g.jsx)(ee.IconMd,{classes:"ui-love-add"})]})]}),N>0&&Object(g.jsx)(Ee,{laundryName:m,laundryId:h,rating:N})]}),Object(g.jsxs)("div",{className:"content pt-sm-2 px-sm-4",children:[f&&Object(g.jsxs)("p",{children:["Time: ",f]}),p&&Object(g.jsxs)("p",{children:["Delivery: ",p]}),O>0&&Object(g.jsxs)("p",{children:["Total: ",O]}),y&&y.length>0?Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"text-warning",children:"Some prices are missing"})," ",Object(g.jsx)("button",{className:"btn btn-xs",onClick:function(e){return u()},children:"Details"})]}):v&&v.length>0?Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"text-danger",children:"Some services may not be provided"})," ",Object(g.jsx)("button",{className:"btn btn-xs",onClick:function(e){return u()},children:"Details"})]}):"",Object(g.jsxs)("div",{className:"d-flex justify-content-end flex-wrap",children:[Object(g.jsxs)(o.a,{className:"float-right",onClick:function(){return n(h)},children:["Price Details"," ",Object(g.jsx)(ee.IconMd,{classes:"database"})]}),Object(g.jsxs)(o.a,{className:"btn btn-success btn-fill float-right ml-1",onClick:function(){return s(h)},children:["Assign Job"," ",Object(g.jsx)(ee.IconMd,{classes:"share-alt"})]})]})]})]}),Object(g.jsxs)(b.a,{show:l,onHide:function(){return j(!1)},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0,children:[Object(g.jsx)(b.a.Header,{closeButton:!0,translate:"yes",children:"Possible problems details"}),Object(g.jsxs)(b.a.Body,{style:{backgroundColor:"white"},children:[Object(g.jsx)("ul",{className:"text-danger",children:v&&v.map((function(e){return Object(g.jsx)("li",{children:e},e)}))}),Object(g.jsx)("ul",{className:"text-warning",children:y&&y.map((function(e){return Object(g.jsx)("li",{children:e},e)}))}),Object(g.jsx)("b",{children:"Don't worry too much about these message(s). Your zebo can contact you for details on your requirements."})]})]})]})},Be=function(e){var t=e.summary,n=e.handlePostJob,c=e.refsMap,s=e.handleFvtLaundry,r=t.id,i=t.name,l=t.estimatedPrice,d=t.estimatedTime,b=t.deliveryCharges,j=t.displayItemPriceBreakDown,u=t.rating,h=t.isFvtLaundry;return Object(a.useEffect)((function(){var e,t;null===(e=c.get(S.a.laundryDetail))||void 0===e||null===(t=e.current)||void 0===t||t.focus()})),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"card",ref:c.get(S.a.laundryDetail),tabIndex:-1,children:[Object(g.jsx)("div",{className:"header pt-sm-2 px-sm-4",children:Object(g.jsxs)("h4",{id:"ld",children:[Object(g.jsx)("span",{className:"pr-2",children:Object(g.jsx)(Te.a,{imgSize:"20x20",text:Object(x.initialCharacters)(i),hashTheme:!0,circle:!0})}),i," ",h&&Object(g.jsx)(ee.Icon,{classes:"ui-love text-danger"}),!h&&Object(g.jsxs)(o.a,{variant:"light",size:"sm",className:"float-right",onClick:function(e){return s(r)},children:["Add favorite ",Object(g.jsx)(ee.IconMd,{classes:"ui-love-add"})]})]})}),Object(g.jsx)("div",{className:"px-sm-3",children:u>0&&Object(g.jsx)(Ee,{laundryName:i,laundryId:r,rating:u})}),Object(g.jsxs)("div",{className:"content pt-sm-2 px-sm-4",children:[d&&Object(g.jsxs)("p",{className:"text-info",children:["Time: ",d]}),j&&Object(g.jsx)("div",{className:"content table-responsive table-full-width",children:Object(g.jsx)("table",{className:"table table-hover table-striped",children:Object(g.jsx)("tbody",{children:j.map((function(e,t){return Object(g.jsx)("tr",{children:Object(g.jsx)("td",{className:"text-right",children:e})},t)}))})})}),Object(g.jsxs)("div",{className:"text-right",children:[b&&Object(g.jsxs)("p",{children:["Delivery: ",b]}),l&&Object(g.jsxs)("p",{children:["Total: ",l]})]}),Object(g.jsx)("div",{className:"d-flex justify-content-end flex-wrap",children:Object(g.jsxs)("button",{className:"btn btn-success btn-fill ml-1",onClick:function(){return n(r)},children:[Object(g.jsx)("span",{className:"pr-2",children:"Assign Job"}),Object(g.jsx)("i",{className:"icofont-share-alt icofont-md","aria-hidden":"true"})]})})]})]})})},Le=function(e){var t=e.summaries,n=e.isMobile,a=e.handleCancelJob,c=e.displayDetail,s=e.handleDetailClick,r=e.clickedLaundryId,i=e.handlePostJob,l=e.addFvtLaundryAndUpdateStore,d=e.refsMap,o=function(e){var t,n;s(e),null===(t=d.get(S.a.laundryDetail))||void 0===t||null===(n=t.current)||void 0===n||n.focus()},b=c?t.filter((function(e){return e.id!==r})):t,j=c&&r>0;return Object(g.jsxs)("div",{children:[!1,Object(g.jsxs)("div",{className:"row",children:[j&&Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsx)(Be,{handlePostJob:i,refsMap:d,handleFvtLaundry:l,summary:t.filter((function(e){return e.id===r}))[0]})}),Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsxs)("div",{className:"card",ref:d.get(S.a.laundrySummaries),tabIndex:-1,children:[Object(g.jsx)("div",{className:"header pt-sm-2 px-sm-4",children:Object(g.jsxs)("h4",{"data-testid":"psHeading",children:[Object(g.jsx)("span",{className:"pr-2",children:"Laundries"}),Object(g.jsx)("i",{className:"icofont-users","aria-hidden":"true"})]})}),Object(g.jsxs)("div",{className:"content pt-sm-2 px-sm-4",children:[!t&&Object(g.jsx)("p",{children:"No Laundry Found in your Area"}),t&&Object(g.jsxs)("div",{children:[!n&&Object(g.jsxs)("button",{className:"btn btn-wd",onClick:function(){return a()},children:[Object(g.jsx)("span",{className:"pr-2",children:"Basket"}),Object(g.jsx)("i",{className:"icofont-basket icofont-md","aria-hidden":"true"})]}),Object(g.jsx)("p",{children:"Laundries found in your area."}),b.map((function(e){return Object(g.jsx)(De,{summary:e,handlePostJob:i,handleDetailClick:o,handleFvtLaundry:l},e.id)})),Object(g.jsx)("p",{className:"text-muted",children:"*Price/time are estimates based on price list, but can be changed."})]})]})]})})]})]})},Re=n(220),Me=n(95),_e=n(676);var Je=function(e){Object(M.a)(n,e);var t=Object(_.a)(n);function n(){return Object(B.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){return Object(g.jsx)(Le,Object(r.a)(Object(r.a)({clickedLaundryId:this.props.laundryId},this.props),{},{handleDetailClick:this.props.updateGlobalStateOnDetailClick}))}}]),n}(c.a.Component),Ue=Object(s.b)((function(e){return{summaries:(t=e.priceSummaryState.laundryPriceSummaries,n=e.loginState.user.preferences.favoriteLaundries,t.map((function(e){var t=Object(p.exist)(n,e.id);return Object(r.a)(Object(r.a)({},e),{},{isFvtLaundry:t})}))),displayDetail:e.jobPageState.showPriceDetail,laundryId:e.priceSummaryState.showDetailLaundryId,isMobile:e.layoutState.isMobile};var t,n}),(function(e){return Object(Me.b)({handleCancelJob:function(){return Object(Re.a)()},updateGlobalStateOnDetailClick:function(e){return Object(Re.c)(e)},handlePostJob:function(e){return Object(Re.b)(e)},addFvtLaundryAndUpdateStore:_e.a},e)}))(Je),Ve=n(360),ze=n.n(Ve),He=n(219),We=n(684);var Ye=function(e){Object(M.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).validateAndHandlePostJob=a.validateAndHandlePostJob.bind(Object(R.a)(a)),a}return Object(L.a)(n,[{key:"validateAndHandlePostJob",value:function(){var e=Object(He.b)(this.props.email);this.props.contactNumber?e?f.a.warn(e+" "+this.props.email):this.props.handlePostJob():f.a.warn("Select or enter contact number")}},{key:"render",value:function(){return Object(g.jsx)(We.a,Object(r.a)({heading:"Job Post - Pickup Information",detailsPanel:(e=this.props,Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h4",{children:"Your are about to laundry"}),Object(g.jsx)(m.a,{disabled:!0,"data-testid":"checkbtn",input:{checked:!0},label:"Posting ".concat(e.posting)}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{disabled:!0,input:{checked:!0},label:"To & From ".concat(e.selectedAddress)}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{disabled:!0,input:{checked:!0},label:"".concat(e.selectedService," Service")}),Object(g.jsx)("br",{}),e.laundryItems.map((function(e){return"".concat(e.count," x ").concat(e.name," (").concat(e.operations,")")})).map((function(e,t){return Object(g.jsx)("div",{children:Object(g.jsx)(ze.a,{disabled:!0,input:{checked:!0},label:e})},t)}))]})),extraFields:Object(g.jsx)(g.Fragment,{})},Object(r.a)(Object(r.a)({},this.props),{},{validateAndHandlePostJob:this.validateAndHandlePostJob})));var e}}]),n}(a.Component),Ke=n(265),Ge=function(){return function(e,t){e(Object(U.updateStoreSend)(E.i));var n=Object(Ke.b)(t());return Object(W.w)(n).then((function(t){var n;e((n=t,{type:J.d.RECEIVE_POST_JOB,newVal:n})),f.a.sucs(t.message)})).catch(ye.notifyErr).finally((function(){e(Object(U.updateStoreReceive)(E.i)),Object(V.b)()}))}},Xe=Object(s.b)((function(e){return{pickupAfter:Object(P.h)(e),pickupBefore:Object(P.i)(e),deliverAfter:Object(P.f)(e),deliverBefore:Object(P.g)(e),laundryItems:e.basketState.items,selectedService:e.basketState.selectedService,selectedAddress:e.basketState.selectedAddress,posting:0===e.basketState.selectedLaundryId?"To all laundries in your area":e.priceSummaryState.laundryPriceSummaries.filter((function(t){return t.id===e.basketState.selectedLaundryId}))[0].name,contactNumber:e.basketState.contactNumber,deliverNote:e.basketState.deliverNote,pickupNote:e.basketState.pickupNote,contacts:e.loginState.user.preferences.contactNumbers,email:e.basketState.emailCorrespondence,isLoading:T.a.isInProgress(E.i,e.aPICallsState.calls)}}),(function(e){return{pickupAfterTimeChange:function(t){return e(function(e){return{type:J.d.UPDATE_PICKUP_AFTER,newTime:e}}(t.formatted12))},pickupBeforeTimeChange:function(t){return e(function(e){return{type:J.d.UPDATE_PICKUP_BEFORE,newTime:e}}(t.formatted12))},deliverAfterTimeChange:function(t){return e(function(e){return{type:J.d.UPDATE_DELIVER_AFTER,newTime:e}}(t.formatted12))},deliverBeforeTimeChange:function(t){return e(function(e){return{type:J.d.UPDATE_DELIVER_BEFORE,newTime:e}}(t.formatted12))},handleCancelJob:function(){return e(Object(Re.a)())},handlePostJob:function(){return e(Ge())},contactNumberChange:function(t){var n;e((n=t,{type:J.d.UPDATE_CONTACT_NUMBER,newVal:n})),e(Object(l.g)(t))},deliverNoteChange:function(t){return e((n=t,{type:J.d.UPDATE_DELIVER_NOTE,newVal:n}));var n},pickupNoteChange:function(t){return e((n=t,{type:J.d.UPDATE_PICKUP_NOTE,newVal:n}));var n},updateEmailJob:function(t){return e((n=t,{type:J.d.UPDATE_EMAIL_JOB,newVal:n}));var n}}}))(Ye);t.default=Object(s.b)((function(e){return{showAllItems:e.jobPageState.showAllItems,showBasket:e.jobPageState.showBasket,showAddItem:e.jobPageState.showAddItem,showPriceSummaries:e.jobPageState.showPriceSummaries,showPostJob:e.jobPageState.showPostJob}}))((function(e){var t=e.showAllItems,n=e.showBasket,a=e.showAddItem,c=e.showPriceSummaries,s=e.showPostJob,r=e.refsMap;return Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"content",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsxs)("div",{className:"row pt-2",children:[Object(g.jsx)("div",{className:"col-md-6",children:n&&Object(g.jsx)(D,{refsMap:r})}),Object(g.jsxs)("div",{className:"col-md-6",children:[t&&Object(g.jsx)(je,{refsMap:r}),a&&Object(g.jsx)(v.b,{refsMap:r})]})]}),Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-md-12",children:c&&Object(g.jsx)(Ue,{refsMap:r})})}),s&&Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-md-12",children:Object(g.jsx)(Xe,{})})})]})})})}))}}]);