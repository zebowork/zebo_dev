(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[5],{653:function(e,t,a){"use strict";var n=a(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=a(218),s=function(e){var t=e.children;return c.default.createElement(r.OverlayTrigger,{key:"bottom",placement:"bottom",overlay:c.default.createElement(r.Tooltip,{id:"tooltip-bottom"},t)},c.default.createElement("div",{className:"btn btn-secondary border border-0 p-0 bg-transparent"},c.default.createElement("i",{className:"icofont-info-circle icofont-2x"})))};t.default=s},660:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(49),c=a.n(n),r=a(92),s=a(66),i=a(16),o=a(62),l=a(261);function u(){return b.apply(this,arguments)}function b(){return(b=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.m)(),e.next=3,Object(s.getApiResponseFromDb)(i.f);case 3:if(!(a=e.sent)){e.next=7;break}return Object(l.a)(t),e.abrupt("return",a.response);case 7:return e.abrupt("return",Object(l.a)(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.j)(t),n=Object(o.o)(t),e.next=4,Object(s.getApiResponseFromDb)(a);case 4:if(!(r=e.sent)){e.next=8;break}return Object(l.c)(t,n),e.abrupt("return",Promise.resolve({db:r.response,api:n}));case 8:return e.abrupt("return",Promise.resolve({db:void 0,api:Object(l.c)(t,n)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.n)(0,0),e.next=3,Object(s.getApiResponseFromDb)(i.h);case 3:if(!(a=e.sent)){e.next=7;break}return Object(l.b)(t),e.abrupt("return",Promise.resolve({db:a.response,api:t}));case 7:return e.abrupt("return",Promise.resolve({db:[],api:Object(l.b)(t)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},831:function(e,t,a){"use strict";a.r(t);var n=a(51),c=a(21),r=a(29),s=a(91),i=a(43),o=a(44),l=a(0),u=a.n(l),b=a(176),d=a(39),m=a.n(d),p=a(337),j=a(151),h=a.n(j),O=a(653),f=a.n(O),v=a(142),x=a(660),y=a(1),N=[{value:"COMPLAIN",label:"Complain"},{value:"SUGGESTIONS",label:"Suggestions"},{value:"GENERAL ENQUIRY",label:"General Enquiry"}],w={value:"COMPLAIN",label:"Complain"},k=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:[]},n.handleSendClick=n.handleSendClick.bind(Object(s.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.authenticated&&Object(x.b)().then((function(t){var a=t.db,n=t.api;return a.length>0&&e.setState({data:a}),n})).then((function(t){return e.setState({data:t})})).catch((function(e){m.a.err(e&&e.message||v.b)}))}},{key:"handleSendClick",value:function(e){this.props.handleSendClick(e,this.props.history)}},{key:"render",value:function(){var e=this.state.data.map((function(e){return{value:e.id,label:(t=e,t.items&&t.items.length>0?t.items.map((function(e){return 1!==e.count?e.count+" "+e.name:e.name})).join(" + "):"Asked 4 Pickup ("+t.submissionDateTime+")")};var t})),t=this.props.history.location.state,a=t?t.jobHistoryId:void 0,n=a?e.filter((function(e){return e.value===a}))[0]:void 0,c=this.props.email;return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:"content",children:Object(y.jsx)("div",{className:"container-fluid",children:Object(y.jsx)(b.b,{onSubmit:this.handleSendClick,children:function(t){var a=t.handleSubmit,r=t.submitting;return Object(y.jsx)("div",{className:"row pt-2",children:Object(y.jsx)("div",{className:"col-md-12 col-md-offset-2",children:Object(y.jsx)(p.a,{children:Object(y.jsxs)("form",{className:"form-horizontal",onSubmit:a,children:[Object(y.jsxs)("div",{className:"header pt-sm-2 px-sm-4",children:[Object(y.jsxs)("h4",{className:"title",children:[Object(y.jsx)("span",{children:"Contact"})," ",Object(y.jsx)("i",{className:"icofont-headphone-alt","aria-hidden":"true"})]}),Object(y.jsx)("p",{className:"category",children:"Customer satisfaction is our Top priority"})]}),Object(y.jsxs)("div",{className:"content pt-sm-2 px-sm-4",children:[Object(y.jsxs)("div",{className:"row pb-3",children:[Object(y.jsxs)("label",{className:"col-sm-3 control-label",htmlFor:"reason",children:["REASON"," ",Object(y.jsx)(f.a,{children:"Main reason, why you are contacting us"})]}),Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsx)(b.a,{name:"reason",component:h.a,type:"select",options:N,defaultValue:w,isSearchable:!1,inputId:"reason"})})]}),Object(y.jsxs)("div",{className:"row pb-3",children:[Object(y.jsxs)("label",{className:"col-sm-3 control-label",htmlFor:"recentJob",children:["RECENT JOB"," ",Object(y.jsx)(f.a,{children:"Your previous jobs which you can select, if contact is about job"})]}),Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsx)(b.a,{name:"recentJob",component:h.a,type:"select",label:"Recent Job:",options:e,defaultValue:n,isClearable:!0,inputId:"recentJob"})})]}),Object(y.jsxs)("div",{className:"row pb-3",children:[Object(y.jsxs)("label",{className:"col-sm-3 control-label",htmlFor:"email",children:["EMAIL"," ",Object(y.jsx)(f.a,{children:"We will contact you back on this email"})]}),Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsx)(b.a,{name:"email",component:h.a,type:"email",placeholder:"Email",defaultValue:c,"data-testid":"email"})})]}),Object(y.jsxs)("div",{className:"row pb-3",children:[Object(y.jsxs)("label",{className:"col-sm-3 control-label",children:["DESCRIPTION"," ",Object(y.jsx)(f.a,{children:"Here you can input details why you are contacting us"})]}),Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsx)(b.a,{type:"textarea",component:h.a,name:"description",className:"form-control",placeholder:"Reason and detail why you are contacting us",rows:9,"data-testid":"description"})})]}),Object(y.jsx)("div",{className:"row pb-2",children:Object(y.jsx)("div",{className:"col-md-12",children:Object(y.jsxs)("button",{type:"submit",className:"btn btn-success btn-fill btn-wd float-right",disabled:r,children:["SEND"," ",Object(y.jsx)("i",{className:"icofont-paper-plane icofont-md","aria-hidden":"true"})]})})})]})]})})})})}})})})})}}]),a}(u.a.Component),S=a(56),g=a(62),E=a(266),C=a(42),I=a(31),P=function(e,t){e.description?e.email?Object(g.h)({description:e.description,email:e.email,jobId:e.recentJob?e.recentJob.value:"",reason:e.reason.value,source:"WUI",localTime:Object(E.currentDateTime)()}).then((function(){m.a.sucs("We will contact you as soon as possible"),t.push(S.HOME)})).catch(I.notifyErr):m.a.warn("To which email should we contact you back?"):m.a.warn("Please tell! Why you are contacting?")};t.default=Object(C.o)(Object(n.b)((function(e){return{email:e.loginState.user.email,authenticated:e.loginState.authenticated,handleSendClick:P}}))(k))}}]);