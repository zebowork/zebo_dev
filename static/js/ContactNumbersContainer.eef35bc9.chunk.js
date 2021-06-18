(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[6],{647:function(e,t,a){"use strict";var n=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=a(213),c=function(e){var t=e.children;return l.default.createElement(r.OverlayTrigger,{key:"bottom",placement:"bottom",overlay:l.default.createElement(r.Tooltip,{id:"tooltip-bottom"},t)},l.default.createElement("div",{className:"btn btn-secondary border border-0 p-0 bg-transparent"},l.default.createElement("i",{className:"icofont-info-circle icofont-2x"})))};t.default=c},674:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));var n=function(e){var t=void 0;return e?e.length<3&&(t="Must be 3 characters or more"):t="Address is required",t},l=function(e){var t=void 0;return e?e.length<3&&(t="Must be 3 characters or more"):t="Contact Number is required",t}},675:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearFinalForm=function(e,t){setTimeout((function(){t.reset(),n.IS_TEST||Object.keys(e).forEach((function(e){t.resetFieldState(e)}))}))};var n=a(50)},817:function(e,t,a){"use strict";a.r(t);var n=a(60),l=a(20),r=a(27),c=a(89),o=a(41),i=a(42),s=a(0),u=a.n(s),m=a(173),d=a(333),b=a(117),f=a(150),p=a.n(f),h=a(54),E=a(674),v=a(45),N=a.n(v),y=a(647),O=a.n(y),j=a(675),S=a(29),g=a(353),C=a.n(g),w=a(15),k=a(132),x=a.n(k),T=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSaveClick=n.handleSaveClick.bind(Object(c.a)(n)),n}return Object(r.a)(a,[{key:"handleSaveClick",value:function(e,t){this.props.contacts.indexOf(e.num)>=0?N.a.warn("You already have this Number"):(this.props.handleAdd(e.num),Object(j.clearFinalForm)(e,t))}},{key:"render",value:function(){var e=this,t=this.props,a=t.contacts,n=t.isMobile,l=this.props.handleDelete,r=function(t){return C.a.isInProgress(t,e.props.apiCalls)},c=r(w.s);return u.a.createElement("div",null,u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"row pt-2"},u.a.createElement("div",{className:"col-md-12 col-md-offset-2"},u.a.createElement(d.a,null,u.a.createElement(m.b,{onSubmit:this.handleSaveClick},(function(e){var t=e.handleSubmit;e.submitting;return u.a.createElement("form",{className:"form-horizontal",onSubmit:t},u.a.createElement("div",{className:"header pt-sm-2 px-sm-4"},u.a.createElement("h4",{className:"title"},u.a.createElement("span",null,"Contact Numbers"," ",u.a.createElement(O.a,null,"These are the contact numbers which you will see and select while submitting your laundry job")))),u.a.createElement("div",{className:"content pt-sm-2 px-sm-4"},u.a.createElement("div",{className:"d-flex form-group"},u.a.createElement("div",{className:"pt-1 flex-grow-1"},u.a.createElement(m.a,{type:"number",component:p.a,name:"num",className:"form-control",placeholder:"Add Contact Number","data-testid":"contact-number",validate:E.b})),u.a.createElement("div",{className:"pl-2"},u.a.createElement(b.a,{type:"submit",className:"btn btn-success btn-fill btn-wd",disabled:c},u.a.createElement(x.a,{variant:"light",show:c,id:"addContactButtonText"},"ADD ",u.a.createElement("i",{className:"icofont-plus","aria-hidden":"true"})))))))})),u.a.createElement("div",{className:"content pt-sm-2 px-sm-4"},u.a.createElement("div",null,u.a.createElement("div",{className:"table-responsive table-full-width"},u.a.createElement("table",{className:"table table-hover border"},u.a.createElement("thead",{className:"table table-hover table-secondary"},u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,"Contact Numbers"))),u.a.createElement("tbody",null,a.map((function(e){return u.a.createElement("tr",{key:e},u.a.createElement("td",null,u.a.createElement("button",{type:"button",className:"close text-danger float-left pl-4","aria-label":"Close","data-original-title":"Delete item",onClick:function(t){l(e)},disabled:r(e)},u.a.createElement(x.a,{show:r(e),spinnerText:"",id:"removeContact"},u.a.createElement("span",{"aria-hidden":"true"},"\xd7")))),u.a.createElement("td",null,e))})))))),!n&&u.a.createElement("div",{className:"row pb-2 float-right"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement(h.Link,{to:S.l},u.a.createElement("button",{type:"submit",className:"btn btn-wd"},"Go to Setting ",u.a.createElement("i",{className:"icofont-ui-settings icofont-md"}))))))))))))}}]),a}(u.a.Component),M=a(94),_=a(102),D=a(61),A=a(85),F=a(151),P=a(75),z=a(31);function I(e){return function(t){return t(Object(F.updateStoreSend)(e)),Object(D.r)(e).then((function(a){t(function(e){return{type:_.b.DELETE_NUMBER,contact:e}}(e))})).catch(z.notifyErr).finally((function(){t(Object(F.updateStoreReceive)(e)),Object(P.b)()}))}}function R(e){return function(t){t(Object(F.updateStoreSend)(w.s)),Object(D.b)(e).then((function(a){t(Object(A.g)(e))})).catch(z.notifyErr).finally((function(){t(Object(F.updateStoreReceive)(w.s)),Object(P.b)()}))}}t.default=Object(n.b)((function(e){return{contacts:e.loginState.user.preferences.contactNumbers,apiCalls:e.aPICallsState.calls,isMobile:e.layoutState.isMobile}}),(function(e){return Object(M.b)({handleDelete:I,handleAdd:R},e)}))(T)}}]);