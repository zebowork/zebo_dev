(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[14],{658:function(e,t,s){"use strict";s.d(t,"a",(function(){return d})),s.d(t,"c",(function(){return j})),s.d(t,"b",(function(){return p}));var a=s(49),n=s.n(a),c=s(91),i=s(66),r=s(16),l=s(62),o=s(260);function d(){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(n.a.mark((function e(){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.m)(),e.next=3,Object(i.getApiResponseFromDb)(r.f);case 3:if(!(s=e.sent)){e.next=7;break}return Object(o.a)(t),e.abrupt("return",s.response);case 7:return e.abrupt("return",Object(o.a)(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(n.a.mark((function e(t){var s,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(r.j)(t),a=Object(l.o)(t),e.next=4,Object(i.getApiResponseFromDb)(s);case 4:if(!(c=e.sent)){e.next=8;break}return Object(o.c)(t,a),e.abrupt("return",Promise.resolve({db:c.response,api:a}));case 8:return e.abrupt("return",Promise.resolve({db:void 0,api:Object(o.c)(t,a)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(n.a.mark((function e(){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.n)(0,0),e.next=3,Object(i.getApiResponseFromDb)(r.h);case 3:if(!(s=e.sent)){e.next=7;break}return Object(o.b)(t),e.abrupt("return",Promise.resolve({db:s.response,api:t}));case 7:return e.abrupt("return",Promise.resolve({db:[],api:Object(o.b)(t)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},701:function(e,t,s){},816:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s(21),c=s(28),i=s(90),r=s(42),l=s(43),o=s(61),d=s(0),b=s.n(d),j=s(680),u=s.n(j),p=s(686),m=s.n(p),h=(s(793),s(794)),x=s.n(h),O=s(6),f=s.n(O),g=(s(701),s(648)),N=s(92),v=s(139),y=(s(360),s(63)),w=s(129),k=s(118),C=s(659),S=s(651),D=s.n(S),F=s(1),I=function(e){var t=Object(d.useState)(!1),s=Object(N.a)(t,2),a=s[0],n=s[1],c=Object(d.useState)(new Array),i=Object(N.a)(c,2),r=i[0],l=i[1],o=Object(d.useState)(!1),b=Object(N.a)(o,2),j=b[0],u=b[1],p=e.items,m=e.submissionDateTime,h=e.totalPrice,x=e.deliveryCost,O=e.errors,f=e.warnings,g=e.jobDescriptionComponent,S=e.status;return Object(F.jsxs)("div",{className:"row text-wrap m-0 pb-0 mb-0",children:[Object(F.jsx)("div",{className:"col-sm-12 col-md-6 rounded text-wrap r-border bg-detail",children:Object(F.jsxs)("div",{className:"row m-0 p-0",children:[Object(F.jsxs)("div",{className:"col p-0 text-left",children:[Object(F.jsx)("div",{className:"pt-2 pl-2",children:Object(F.jsx)("span",{children:m})}),p.map((function(e){return Object(F.jsx)("div",{className:"card my-1 border-0",children:Object(F.jsxs)("div",{className:"d-flex flex-row  rounded bg-detail",children:[Object(F.jsx)("div",{className:"d-flex align-items-start flex-column align-self-center",children:Object(F.jsx)("div",{className:"align-self-center align-self-stretch",children:Object(F.jsx)("span",{className:"circleNum",children:Object(y.twoDigitNumber)(e.count)})})}),Object(F.jsxs)("div",{className:"d-flex align-items-start flex-column pl-2  w-100",children:[Object(F.jsxs)("div",{className:"d-flex pt-2 w-100",children:[Object(F.jsxs)("div",{className:"p-0 ",children:[Object(F.jsxs)("span",{className:"wr font-weight-bold",children:[" ",Object(y.text_truncate)(e.name,19)]})," ",e.hanger&&Object(F.jsx)("i",{className:"icofont-hanger","aria-hidden":"true"}),"  ",e.imageUrls.length>0&&Object(F.jsx)(k.a,{className:"btn btn-xs",onClick:function(t){return function(e){n(!0),l(e)}(e.imageUrls)},children:Object(F.jsx)("i",{className:"icofont-ui-camera opc6 cBlack","aria-hidden":"true","data-testid":"camera"})})]}),Object(F.jsx)("div",{className:"pt-2 ",style:{fontSize:"10px",textAlign:"right"},children:"OTHER"===e.fabric?"":e.fabric})]}),Object(F.jsx)("div",{className:"d-flex justify-content-between p-0",children:e.operationsOnItem.map((function(e){return Object(y.constantToStringUpperCaseFirstLetter)(e)})).join(", ")}),Object(F.jsxs)("div",{className:"d-flex justify-content-between p-0",children:[" ",Object(F.jsx)("i",{className:"icofont-database icofont-sm opc6 pt-2","aria-hidden":"true"}),Object(F.jsx)("span",{children:e.priceLine})]})]})]})},Object(w.generateRandomNumber)())}))]}),Object(F.jsxs)("div",{className:"col p-0 pt-4 text-left",children:[Object(F.jsx)("div",{className:"d-flex flex-column pl-5",children:Object(F.jsxs)("div",{children:["Status: ",Object(F.jsx)("span",{className:"font-weight-bold",style:{color:Object(C.getStatusColor)(S)},children:S}),Object(F.jsx)(D.a,{children:Object(C.getStatusDescription)(S)})]})}),Object(F.jsx)("div",{className:"d-flex flex-column pl-5",children:Object(F.jsxs)("div",{children:["Delivery: ",Object(F.jsx)("span",{className:"font-weight-bold",children:x})]})}),Object(F.jsx)("div",{className:"d-flex flex-column pl-5",children:Object(F.jsxs)("div",{children:["Total: ",Object(F.jsx)("span",{className:"font-weight-bold",children:h})]})}),(O.length>0||f.length>0)&&Object(F.jsx)("div",{className:"d-flex flex-row  rounded pl-0",children:Object(F.jsx)("div",{className:"d-flex flex-column pl-5",children:Object(F.jsx)("button",{className:"btn btn-xs",onClick:function(){return u(!0)},children:"Notes"})})})]})]})}),g,Object(F.jsxs)(v.a,{show:a,onHide:function(){n(!1),l([])},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"xl",centered:!0,children:[Object(F.jsx)(v.a.Header,{closeButton:!0,translate:"yes",children:"Images"}),Object(F.jsx)(v.a.Body,{style:{backgroundColor:"white"},children:r.map((function(e){return Object(F.jsx)("div",{className:"img-wrap m-2",children:Object(F.jsx)("img",{src:e,alt:"item",className:"img-fluid","data-testid":"image"})})}))})]}),Object(F.jsxs)(v.a,{show:j,onHide:function(){return u(!1)},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0,children:[Object(F.jsx)(v.a.Header,{closeButton:!0,translate:"yes",children:"Warnings"}),Object(F.jsxs)(v.a.Body,{style:{backgroundColor:"white"},children:[Object(F.jsx)("ul",{className:"text-danger",children:O&&O.map((function(e){return Object(F.jsx)("li",{children:e})}))}),Object(F.jsx)("ul",{className:"text-warning",children:f&&f.map((function(e){return Object(F.jsx)("li",{children:e})}))})]})]})]})},E=function(e){return e===C.StatusConst.CANCEL||e===C.StatusConst.COMPLETE},M=function(e){return e===C.StatusConst.INITIAL||e===C.StatusConst.SUBMITTED||e===C.StatusConst.BID||e===C.StatusConst.ASSIGN},A=function(e){var t=b.a.useState({show:!1,status:""}),s=Object(N.a)(t,2),a=s[0],n=s[1],c=function(e){n({show:!0,status:e})},i=function(){n({show:!1,status:""})},r=e.handleContactClick,l=e.status,o=e.handleStatusChange,d=e.id;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"buttons-with-margin",children:[Object(F.jsx)("button",{className:"btn btn-fill btn-primary",onClick:r,children:Object(F.jsx)("i",{className:"icofont-headphone-alt icofont-md","aria-hidden":"true"})}),M(l)&&Object(F.jsx)(k.a,{variant:"warning",onClick:function(){return c(C.StatusConst.CANCEL)},children:"Cancel Job"}),E(l)&&Object(F.jsx)(k.a,{variant:"danger",onClick:function(){return c(C.StatusConst.DELETE)},children:Object(F.jsx)("i",{className:"icofont-trash icofont-md","aria-hidden":"true"})})]}),Object(F.jsxs)(v.a,{show:a.show,onHide:i,dialogClassName:"modal-dialog","aria-labelledby":"contained-modal-title-center",size:"sm",centered:!0,children:[Object(F.jsx)(v.a.Header,{translate:"yes",children:Object(F.jsxs)(v.a.Title,{children:[Object(F.jsx)("i",{className:"icofont-barricade icofont-md","aria-hidden":"true"})," ",a.status," job?"]})}),Object(F.jsxs)(v.a.Footer,{children:[Object(F.jsxs)(k.a,{variant:"primary",onClick:function(){var e=a.status;n({show:!1,status:""}),o(d,e)},children:[Object(F.jsx)("i",{className:"icofont-tick-mark","aria-hidden":"true"})," Yes"]}),Object(F.jsxs)(k.a,{variant:"secondary",onClick:i,children:[Object(F.jsx)("i",{className:"icofont-close","aria-hidden":"true"})," No"]})]})]})]})},L=function(e){var t=e.contactNumber,s=e.deliverAfter,n=e.deliverBefore,c=e.deliverNote,i=e.pickupAfter,r=e.pickupBefore,l=e.pickupDeliveryAddress,o=e.pickupNote,d=e.laundryName,b=e.type,j=e.emailCorrespondence;return Object(F.jsx)("div",{className:"col-sm-12 col-md-6 r-border bg-detail",children:Object(F.jsx)("div",{className:"card pb-0 border-0",children:Object(F.jsxs)("ul",{className:"list-group list-group-flush pb-0 border-0",children:[Object(F.jsx)("li",{className:"list-group-item pb-0 px-0 bg-detail",children:Object(F.jsx)("span",{className:"font-weight-bold",children:d})}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 pt-2 bg-detail",children:["Type: ",Object(F.jsx)("span",{className:"font-weight-bold",children:b})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Pickup Before:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:r})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Pickup After:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:i})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Pickup Note:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:o})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Delivery Before:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:n})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Delivery After:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:s})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Delivery Note:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:c})]}),Object(F.jsx)("li",{className:"list-group-item py-0 px-0 pt-2 bg-detail",children:t}),Object(F.jsx)("li",{className:"list-group-item py-0 px-0 bg-detail",children:j}),Object(F.jsx)("li",{className:"list-group-item py-0 px-0 bg-detail",children:l}),Object(F.jsx)("li",{className:"list-group-item px-0 pb-0 bg-detail",children:Object(F.jsx)("div",{className:"float-right pb-0",children:Object(F.jsx)(A,Object(a.a)({},e))})})]})})})},H=function(e){var t=e.contactNumber,s=e.deliverAfter,n=e.deliverBefore,c=e.deliverNote,i=e.pickupAfter,r=e.pickupBefore,l=e.pickupDeliveryAddress,o=e.pickupNote,d=e.laundryName,b=e.type,j=e.emailCorrespondence;return Object(F.jsxs)("div",{className:"col-sm-12 col-md-6 r-border bg-detail",children:[Object(F.jsxs)("div",{className:"row m-0 p-0 pb-1",children:[Object(F.jsx)("div",{className:"col p-0 text-left",children:Object(F.jsxs)("ul",{className:"list-group list-group-flush pb-0 border-0 bg-detail",children:[Object(F.jsx)("li",{className:"list-group-item pb-2 px-0 bg-detail",children:Object(F.jsx)("span",{className:"p-0 font-weight-bold",children:d})}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Pickup Before:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:r})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Pickup After:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:i})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Pickup Note:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:o})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Delviery Before:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:n})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Delivery After:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:s})]}),Object(F.jsxs)("li",{className:"list-group-item py-0 px-0 bg-detail",children:["Delivery Note:"," ",Object(F.jsx)("span",{className:"font-weight-bold",children:c})]})]})}),Object(F.jsx)("div",{className:"col p-0 py-1 text-left",children:Object(F.jsxs)("ul",{className:"list-group list-group-flush pb-0 border-0 bg-detail",children:[Object(F.jsxs)("li",{className:"list-group-item py-2 px-0 bg-detail",children:["Type: ",Object(F.jsx)("span",{className:"font-weight-bold",children:b})]}),Object(F.jsx)("li",{className:"list-group-item py-0 px-0 bg-detail",children:Object(F.jsx)("span",{children:t})}),Object(F.jsx)("li",{className:"list-group-item py-0 px-0 bg-detail",children:Object(F.jsx)("span",{children:j})}),Object(F.jsx)("li",{className:"list-group-item py-0 px-0 bg-detail",children:Object(F.jsx)("span",{children:l})})]})})]}),Object(F.jsx)("div",{className:"float-right pb-2","data-testid":"contact",children:Object(F.jsx)(A,Object(a.a)({},e))})]})},T=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props.isMobile;return Object(F.jsxs)("div",{children:[e&&Object(F.jsx)(I,Object(a.a)(Object(a.a)({},this.props),{},{jobDescriptionComponent:Object(F.jsx)(L,Object(a.a)({},this.props))})),!e&&Object(F.jsx)(I,Object(a.a)(Object(a.a)({},this.props),{},{jobDescriptionComponent:Object(F.jsx)(H,Object(a.a)({},this.props))}))]})}}]),s}(b.a.Component),B=Object(o.b)((function(e){return{isMobile:e.layoutState.isMobile}}))(T),P=s(175),J=s(151),R=s.n(J);var z=function(e){var t=e.handleSubmitClick,s=e.header,a=void 0===s?"Feedback Rating":s,n=e.text,c=void 0===n?"Leave feedback":n,i=e.btnClass,r=void 0===i?"btn btn-success":i,l=d.useState(!1),o=Object(N.a)(l,2),b=o[0],j=o[1],u=d.useState(""),p=Object(N.a)(u,2),m=p[0],h=p[1],x=function(){h(""),j(!1)},O=function(e){console.log(e),e.rating?(x(),t(e)):h("Press on stars")};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("button",{onClick:function(){x(),j(!0)},className:r,children:[Object(F.jsx)(g.Icon,{classes:"notification"})," ",c]}),Object(F.jsx)(P.b,{onSubmit:O,children:function(e){var t=e.values;return Object(F.jsxs)(v.a,{show:b,onHide:x,children:[Object(F.jsx)(v.a.Header,{closeButton:!0,children:Object(F.jsxs)(v.a.Title,{children:[Object(F.jsx)(g.IconMd,{classes:"ui-rate-blank text-warning"})," ",a," ",Object(F.jsx)(g.IconMd,{classes:"ui-rate-blank text-warning"})," ",t.rating]})}),Object(F.jsx)(v.a.Body,{children:Object(F.jsxs)("div",{className:"d-flex flex-column",children:[Object(F.jsx)("div",{className:"pb-5",children:"How happy you are with service?"}),Object(F.jsxs)("div",{className:"pb-3",children:[Object(F.jsx)(P.a,{name:"rating",type:"rating",isHalf:!1,component:R.a})," ",m]}),Object(F.jsx)("div",{className:"pb-5",children:Object(F.jsx)(P.a,{name:"comment",type:"textarea",component:R.a,placeholder:"Write you comments here"})}),Object(F.jsx)(P.a,{name:"hideName",type:"checkbox",component:R.a,label:"Hide my name - Your feedback will be anonymous and name will be hidden from laundry and other users"})]})}),Object(F.jsxs)(v.a.Footer,{children:[Object(F.jsxs)(k.a,{variant:"primary",onClick:function(){return O(t)},children:[" ",Object(F.jsx)(g.Icon,{classes:"tick-mark"})," Send "]}),Object(F.jsxs)(k.a,{variant:"secondary",onClick:x,children:[" ",Object(F.jsx)(g.Icon,{classes:"close"})," Close "]})]})]})}})]})},U={className:"r-background",renderer:function(e){return Object(F.jsx)(B,Object(a.a)({},e))},showExpandColumn:!0,expandByColumnOnly:!0,expandHeaderColumnRenderer:function(e){return e.isAnyExpands?Object(F.jsx)(g.Icon,{classes:"minus"}):Object(F.jsx)(g.Icon,{classes:"plus"})},expandColumnRenderer:function(e){return e.expanded?Object(F.jsx)(g.IconMd,{classes:"simple-up text-primary"}):Object(F.jsx)(g.IconMd,{classes:"simple-down text-primary"})}},_=Object(a.a)(Object(a.a)({},U),{},{expandColumnPosition:"right"}),Y=function(e,t){var s=null;return e.status===C.StatusConst.DELIVERED&&(s="bg-feedback"),s},G=function(e,t,s,a){var n=e?e.map((function(e){return((t=e).count>1?t.count+" ":"")+t.name;var t})).join(" + "):"";return Object(F.jsxs)("div",{children:[Object(F.jsx)("button",{className:"btn btn-fill btn-primary",onClick:function(){return a(t)},children:Object(F.jsx)(g.IconMd,{classes:"basket"})})," ",n]})},V=function(e,t){return e===C.StatusConst.DELIVERED?Object(F.jsx)(z,{header:t.laundryName,handleSubmitClick:function(e){return t.sendJobFeedback(t.id,e)}},t.id):Object(F.jsx)("span",{children:e.toLocaleLowerCase()})},W=function(e){return[{dataField:"items",text:"Items",formatter:G,formatExtraData:e},{dataField:"status",text:"Status",formatter:V},{dataField:"submissionDateTime",text:"Posted on",sort:!0},{dataField:"type",text:"Type"}]},K=function(e){return W(e).map((function(e){return Object(a.a)(Object(a.a)({},e),{},{hidden:!("items"===e.dataField||"status"===e.dataField)})}))},q=function(e){var t=e.columns,s=e.onColumnToggle,n=e.toggles;return Object(F.jsx)("div",{className:"buttons-with-margin","data-toggle":"buttons",children:t.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{toggle:n[e.dataField]})})).filter((function(e){return"items"!==e.dataField})).map((function(e){return Object(F.jsx)("button",{type:"button",className:"btn btn-primary ".concat(e.toggle?"active":""),"data-toggle":"button","aria-pressed":e.toggle?"true":"false",onClick:function(){return s(e.dataField)},children:e.text},e.dataField)}))})},Q=function(e,t){return Object(F.jsx)(u.a,{bootstrap4:!0,keyField:"id",data:e,columns:W(t),expandRow:U,rowClasses:Y,stripe:"true",noDataIndication:"No job posted yet!",pagination:m()()})},X=function(e,t){return Object(F.jsx)(x.a,{bootstrap4:!0,keyField:"id",data:e,columns:K(t),columnToggle:!0,children:function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(q,Object(a.a)({},e.columnToggleProps)),Object(F.jsx)(u.a,Object(a.a)({expandRow:_,rowClasses:Y,stripe:"true",noDataIndication:"No job posted yet!",pagination:m()()},e.baseProps))]})}})},Z=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.props,t=e.isMobile,s=e.handleCreateBasketFromHistory,n=e.data,c=e.handleContactFromHistory,i=e.handleStatusChange,r=e.sendJobFeedback,l=n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{sendJobFeedback:r,handleStatusChange:i,handleContactClick:function(){return c(e.id)}})}));return Object(F.jsx)("div",{className:f()("container-fluid",{"mt-2":t}),children:Object(F.jsx)("div",{className:"row",children:Object(F.jsx)("div",{className:"col-md-12",children:Object(F.jsxs)("div",{className:"card",children:[Object(F.jsx)("div",{className:"header pt-sm-2 px-sm-4",children:Object(F.jsxs)("h4",{children:["Job History ",Object(F.jsx)(g.IconMd,{classes:"history"})]})}),Object(F.jsx)("div",{className:"content pt-sm-2 px-sm-4",children:t?X(l,s):Q(l,s)})]})})})})}}]),s}(b.a.Component),$=s(206),ee=s(46),te=s.n(ee),se=s(55),ae=function(e){var t=e.isMobile;return Object(F.jsxs)("div",{className:"container text-center",children:[Object(F.jsx)("div",{className:f()("d-flex flex-row justify-content-center align-self-end r-height p-4",{"r-heightM":t}),children:Object(F.jsx)("div",{className:"d-flex align-self-center",children:Object(F.jsx)("div",{className:"align-self-center",children:Object(F.jsx)(se.Link,{to:"job",children:Object(F.jsx)("button",{className:f()("btn btn-success btn-fill btn-lg",{"btn-sm":t}),children:Object(F.jsxs)("span",{children:["Order Your First Laundry ",Object(F.jsx)("i",{className:"icofont-runner-alt-1 pr-2","aria-hidden":"true"})]})})})})})}),Object(F.jsx)("div",{className:f()("row m-1",{"mt-2":t}),children:Object(F.jsxs)("div",{className:"col-12",children:[Object(F.jsx)("span",{className:f()("circlebg-sub1",{"circlebg-sub1M":t}),children:Object(F.jsx)("i",{className:"icofont-refree-jersey icofont-md","aria-hidden":"true"})}),Object(F.jsx)("span",{className:f()("circlebg",{circlebgM:t}),children:Object(F.jsx)("i",{className:"icofont-washing-machine","aria-hidden":"true"})}),Object(F.jsx)("span",{className:f()("circlebg-sub1",{"circlebg-sub1M":t}),children:Object(F.jsx)("i",{className:"icofont-refree-jersey icofont-md","aria-hidden":"true"})})]})})]})},ne=s(263),ce=s(30),ie=s(41),re=s(658),le=s(176),oe=s(260),de=s(62),be=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={data:void 0,page:void 0,size:void 0},a.updateJobHistoryStatus=a.updateJobHistoryStatus.bind(Object(i.a)(a)),a.sendJobFeedback=a.sendJobFeedback.bind(Object(i.a)(a)),a.updateLocalStatus=a.updateLocalStatus.bind(Object(i.a)(a)),a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this;Object(re.b)().then((function(t){var s=t.db,a=t.api;return s.length>0&&e.setState({data:s}),a})).then((function(t){return e.setState({data:t})})).catch((function(t){te.a.err(Object(le.getDisplayableMessage)(t)),e.setState({data:[]})}))}},{key:"updateLocalStatus",value:function(e,t,s){var a=this,n=C.StatusConst.INITIAL;return null===s||void 0===s||s.filter((function(t){return t.id===e})).forEach((function(e){n=e.status,e.status=t})),s&&s.length>0&&Object(oe.b)(Promise.resolve(s)),a.setState({data:s}),n}},{key:"updateJobHistoryStatus",value:function(e,t){var s=this,a=this.state.data,n=this.updateLocalStatus(e,t,a);Object(de.A)(e,t).catch((function(t){te.a.err(Object(le.getDisplayableMessage)(t)),s.updateLocalStatus(e,n,a)}))}},{key:"sendJobFeedback",value:function(e,t){var s=this,a=this.state.data,n=this.updateLocalStatus(e,C.StatusConst.COMPLETE,a),c=t.rating||0,i=t.comment||"",r=t.hideName||!1;Object(de.v)({jobId:e,rating:c,comment:i,anonymous:r}).then((function(e){return te.a.info(e.message)})).catch((function(t){te.a.err(Object(le.getDisplayableMessage)(t)),s.updateLocalStatus(e,n,a)}))}},{key:"render",value:function(){var e=this.state.data;return e?e.length<=0?Object(F.jsx)(ae,{isMobile:this.props.isMobile}):Object(F.jsx)(Z,Object(a.a)(Object(a.a)({},this.props),{},{data:e.filter((function(e){return e.status!==C.StatusConst.DELETE})),handleStatusChange:this.updateJobHistoryStatus,sendJobFeedback:this.sendJobFeedback})):Object(F.jsx)(ne.a,{variant:"info",animated:!0,now:75,label:"LOADING..."})}}]),s}(b.a.Component);t.default=Object(ie.o)(Object(o.b)((function(e){return{isMobile:e.layoutState.isMobile}}),(function(e,t){return{handleCreateBasketFromHistory:function(s){e(function(e){return{type:$.a.CREATE_BASKET,history:e}}(s)),t.history.push(ce.g)},handleContactFromHistory:function(e){t.history.push({pathname:ce.c,state:{jobHistoryId:e}})}}}))(be))}}]);