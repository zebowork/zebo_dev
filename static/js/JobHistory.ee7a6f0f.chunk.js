(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[14],{654:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(48),r=a.n(n),l=a(90),s=a(65),c=a(15),i=a(61),o=a(258);function m(){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.m)(),e.next=3,Object(s.getApiResponseFromDb)(c.f);case 3:if(!(a=e.sent)){e.next=7;break}return Object(o.a)(t),e.abrupt("return",a.response);case 7:return e.abrupt("return",Object(o.a)(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(r.a.mark((function e(t){var a,n,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(c.j)(t),n=Object(i.o)(t),e.next=4,Object(s.getApiResponseFromDb)(a);case 4:if(!(l=e.sent)){e.next=8;break}return Object(o.c)(t,n),e.abrupt("return",Promise.resolve({db:l.response,api:n}));case 8:return e.abrupt("return",Promise.resolve({db:void 0,api:Object(o.c)(t,n)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.n)(0,0),e.next=3,Object(s.getApiResponseFromDb)(c.h);case 3:if(!(a=e.sent)){e.next=7;break}return Object(o.b)(t),e.abrupt("return",Promise.resolve({db:a.response,api:t}));case 7:return e.abrupt("return",Promise.resolve({db:[],api:Object(o.b)(t)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},697:function(e,t,a){},812:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(27),l=a(89),s=a(41),c=a(42),i=a(60),o=a(3),m=a(0),u=a.n(m),d=a(676),p=a.n(d),b=a(682),f=a.n(b),E=(a(789),a(790)),g=a.n(E),h=a(5),N=a.n(h),v=(a(697),a(644)),y=a(91),x=a(138),j=(a(358),a(62)),k=a(128),w=a(117),O=a(655),C=a(647),S=a.n(C),D=function(e){var t=Object(m.useState)(!1),a=Object(y.a)(t,2),n=a[0],r=a[1],l=Object(m.useState)(new Array),s=Object(y.a)(l,2),c=s[0],i=s[1],o=Object(m.useState)(!1),d=Object(y.a)(o,2),p=d[0],b=d[1],f=e.items,E=e.submissionDateTime,g=e.totalPrice,h=e.deliveryCost,N=e.errors,v=e.warnings,C=e.jobDescriptionComponent,D=e.status;return u.a.createElement("div",{className:"row text-wrap m-0 pb-0 mb-0"},u.a.createElement("div",{className:"col-sm-12 col-md-6 rounded text-wrap r-border bg-detail"},u.a.createElement("div",{className:"row m-0 p-0"},u.a.createElement("div",{className:"col p-0 text-left"},u.a.createElement("div",{className:"pt-2 pl-2"},u.a.createElement("span",null,E)),f.map((function(e){return u.a.createElement("div",{className:"card my-1 border-0",key:Object(k.generateRandomNumber)()},u.a.createElement("div",{className:"d-flex flex-row  rounded bg-detail"},u.a.createElement("div",{className:"d-flex align-items-start flex-column align-self-center"},u.a.createElement("div",{className:"align-self-center align-self-stretch"},u.a.createElement("span",{className:"circleNum"},Object(j.twoDigitNumber)(e.count)))),u.a.createElement("div",{className:"d-flex align-items-start flex-column pl-2  w-100"},u.a.createElement("div",{className:"d-flex pt-2 w-100"},u.a.createElement("div",{className:"p-0 "},u.a.createElement("span",{className:"wr font-weight-bold"}," ",Object(j.text_truncate)(e.name,19))," ",e.hanger&&u.a.createElement("i",{className:"icofont-hanger","aria-hidden":"true"}),"  ",e.imageUrls.length>0&&u.a.createElement(w.a,{className:"btn btn-xs",onClick:function(t){return function(e){r(!0),i(e)}(e.imageUrls)}},u.a.createElement("i",{className:"icofont-ui-camera opc6 cBlack","aria-hidden":"true","data-testid":"camera"}))),u.a.createElement("div",{className:"pt-2 ",style:{fontSize:"10px",textAlign:"right"}},"OTHER"===e.fabric?"":e.fabric)),u.a.createElement("div",{className:"d-flex justify-content-between p-0"},e.operationsOnItem.map((function(e){return Object(j.constantToStringUpperCaseFirstLetter)(e)})).join(", ")),u.a.createElement("div",{className:"d-flex justify-content-between p-0"}," ",u.a.createElement("i",{className:"icofont-database icofont-sm opc6 pt-2","aria-hidden":"true"}),u.a.createElement("span",null,e.priceLine)))))}))),u.a.createElement("div",{className:"col p-0 pt-4 text-left"},u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("div",null,"Status: ",u.a.createElement("span",{className:"font-weight-bold",style:{color:Object(O.getStatusColor)(D)}},D),u.a.createElement(S.a,null,Object(O.getStatusDescription)(D)))),u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("div",null,"Delivery: ",u.a.createElement("span",{className:"font-weight-bold"},h))),u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("div",null,"Total: ",u.a.createElement("span",{className:"font-weight-bold"},g))),(N.length>0||v.length>0)&&u.a.createElement("div",{className:"d-flex flex-row  rounded pl-0"},u.a.createElement("div",{className:"d-flex flex-column pl-5"},u.a.createElement("button",{className:"btn btn-xs",onClick:function(){return b(!0)}},"Notes")))))),C,u.a.createElement(x.a,{show:n,onHide:function(){r(!1),i([])},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"xl",centered:!0},u.a.createElement(x.a.Header,{closeButton:!0,translate:"yes"},"Images"),u.a.createElement(x.a.Body,{style:{backgroundColor:"white"}},c.map((function(e){return u.a.createElement("div",{className:"img-wrap m-2"},u.a.createElement("img",{src:e,alt:"item",className:"img-fluid","data-testid":"image"}))})))),u.a.createElement(x.a,{show:p,onHide:function(){return b(!1)},dialogClassName:"modal-dialog modal-dialog-scrollable","aria-labelledby":"contained-modal-title-vcenter",size:"lg",centered:!0},u.a.createElement(x.a.Header,{closeButton:!0,translate:"yes"},"Warnings"),u.a.createElement(x.a.Body,{style:{backgroundColor:"white"}},u.a.createElement("ul",{className:"text-danger"},N&&N.map((function(e){return u.a.createElement("li",null,e)}))),u.a.createElement("ul",{className:"text-warning"},v&&v.map((function(e){return u.a.createElement("li",null,e)}))))))},F=function(e){var t=u.a.useState({show:!1,status:""}),a=Object(y.a)(t,2),n=a[0],r=a[1],l=function(e){r({show:!0,status:e})},s=function(){r({show:!1,status:""})},c=e.handleContactClick,i=e.status,o=e.handleStatusChange,m=e.id;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"buttons-with-margin"},u.a.createElement("button",{className:"btn btn-fill btn-primary",onClick:c},u.a.createElement("i",{className:"icofont-headphone-alt icofont-md","aria-hidden":"true"})),function(e){return e===O.StatusConst.INITIAL||e===O.StatusConst.SUBMITTED||e===O.StatusConst.BID||e===O.StatusConst.ASSIGN}(i)&&u.a.createElement(w.a,{variant:"warning",onClick:function(){return l(O.StatusConst.CANCEL)}},"Cancel Job"),function(e){return e===O.StatusConst.CANCEL||e===O.StatusConst.COMPLETE}(i)&&u.a.createElement(w.a,{variant:"danger",onClick:function(){return l(O.StatusConst.DELETE)}},u.a.createElement("i",{className:"icofont-trash icofont-md","aria-hidden":"true"}))),u.a.createElement(x.a,{show:n.show,onHide:s,dialogClassName:"modal-dialog","aria-labelledby":"contained-modal-title-center",size:"sm",centered:!0},u.a.createElement(x.a.Header,{translate:"yes"},u.a.createElement(x.a.Title,null,u.a.createElement("i",{className:"icofont-barricade icofont-md","aria-hidden":"true"})," ",n.status," job?")),u.a.createElement(x.a.Footer,null,u.a.createElement(w.a,{variant:"primary",onClick:function(){var e=n.status;r({show:!1,status:""}),o(m,e)}},u.a.createElement("i",{className:"icofont-tick-mark","aria-hidden":"true"})," Yes"),u.a.createElement(w.a,{variant:"secondary",onClick:s},u.a.createElement("i",{className:"icofont-close","aria-hidden":"true"})," No"))))},I=function(e){var t=e.contactNumber,a=e.deliverAfter,n=e.deliverBefore,r=e.deliverNote,l=e.pickupAfter,s=e.pickupBefore,c=e.pickupDeliveryAddress,i=e.pickupNote,o=e.laundryName,m=e.type,d=e.emailCorrespondence;return u.a.createElement("div",{className:"col-sm-12 col-md-6 r-border bg-detail"},u.a.createElement("div",{className:"card pb-0 border-0"},u.a.createElement("ul",{className:"list-group list-group-flush pb-0 border-0"},u.a.createElement("li",{className:"list-group-item pb-0 px-0 bg-detail"},u.a.createElement("span",{className:"font-weight-bold"},o)),u.a.createElement("li",{className:"list-group-item py-0 px-0 pt-2 bg-detail"},"Type: ",u.a.createElement("span",{className:"font-weight-bold"},m)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},s)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup After:"," ",u.a.createElement("span",{className:"font-weight-bold"},l)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},i)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},n)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery After:"," ",u.a.createElement("span",{className:"font-weight-bold"},a)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},r)),u.a.createElement("li",{className:"list-group-item py-0 px-0 pt-2 bg-detail"},t),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},d),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},c),u.a.createElement("li",{className:"list-group-item px-0 pb-0 bg-detail"},u.a.createElement("div",{className:"float-right pb-0"},u.a.createElement(F,e))))))},M=function(e){var t=e.contactNumber,a=e.deliverAfter,n=e.deliverBefore,r=e.deliverNote,l=e.pickupAfter,s=e.pickupBefore,c=e.pickupDeliveryAddress,i=e.pickupNote,o=e.laundryName,m=e.type,d=e.emailCorrespondence;return u.a.createElement("div",{className:"col-sm-12 col-md-6 r-border bg-detail"},u.a.createElement("div",{className:"row m-0 p-0 pb-1"},u.a.createElement("div",{className:"col p-0 text-left"},u.a.createElement("ul",{className:"list-group list-group-flush pb-0 border-0 bg-detail"},u.a.createElement("li",{className:"list-group-item pb-2 px-0 bg-detail"},u.a.createElement("span",{className:"p-0 font-weight-bold"},o)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},s)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup After:"," ",u.a.createElement("span",{className:"font-weight-bold"},l)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Pickup Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},i)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delviery Before:"," ",u.a.createElement("span",{className:"font-weight-bold"},n)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery After:"," ",u.a.createElement("span",{className:"font-weight-bold"},a)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},"Delivery Note:"," ",u.a.createElement("span",{className:"font-weight-bold"},r)))),u.a.createElement("div",{className:"col p-0 py-1 text-left"},u.a.createElement("ul",{className:"list-group list-group-flush pb-0 border-0 bg-detail"},u.a.createElement("li",{className:"list-group-item py-2 px-0 bg-detail"},"Type: ",u.a.createElement("span",{className:"font-weight-bold"},m)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},u.a.createElement("span",null,t)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},u.a.createElement("span",null,d)),u.a.createElement("li",{className:"list-group-item py-0 px-0 bg-detail"},u.a.createElement("span",null,c))))),u.a.createElement("div",{className:"float-right pb-2","data-testid":"contact"},u.a.createElement(F,e)))},A=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.isMobile;return u.a.createElement("div",null,e&&u.a.createElement(D,Object.assign({},this.props,{jobDescriptionComponent:u.a.createElement(I,this.props)})),!e&&u.a.createElement(D,Object.assign({},this.props,{jobDescriptionComponent:u.a.createElement(M,this.props)})))}}]),a}(u.a.Component),L=Object(i.b)((function(e){return{isMobile:e.layoutState.isMobile}}))(A),H=a(173),T=a(150),B=a.n(T);var P=function(e){var t=e.handleSubmitClick,a=e.header,n=void 0===a?"Feedback Rating":a,r=e.text,l=void 0===r?"Leave feedback":r,s=e.btnClass,c=void 0===s?"btn btn-success":s,i=m.useState(!1),o=Object(y.a)(i,2),u=o[0],d=o[1],p=m.useState(""),b=Object(y.a)(p,2),f=b[0],E=b[1],g=function(){E(""),d(!1)},h=function(e){console.log(e),e.rating?(g(),t(e)):E("Press on stars")};return m.createElement(m.Fragment,null,m.createElement("button",{onClick:function(){g(),d(!0)},className:c},m.createElement(v.Icon,{classes:"notification"})," ",l),m.createElement(H.b,{onSubmit:h},(function(e){var t=e.values;return m.createElement(x.a,{show:u,onHide:g},m.createElement(x.a.Header,{closeButton:!0},m.createElement(x.a.Title,null,m.createElement(v.IconMd,{classes:"ui-rate-blank text-warning"})," ",n," ",m.createElement(v.IconMd,{classes:"ui-rate-blank text-warning"})," ",t.rating)),m.createElement(x.a.Body,null,m.createElement("div",{className:"d-flex flex-column"},m.createElement("div",{className:"pb-5"},"How happy you are with service?"),m.createElement("div",{className:"pb-3"},m.createElement(H.a,{name:"rating",type:"rating",isHalf:!1,component:B.a})," ",f),m.createElement("div",{className:"pb-5"},m.createElement(H.a,{name:"comment",type:"textarea",component:B.a,placeholder:"Write you comments here"})),m.createElement(H.a,{name:"hideName",type:"checkbox",component:B.a,label:"Hide my name - Your feedback will be anonymous and name will be hidden from laundry and other users"}))),m.createElement(x.a.Footer,null,m.createElement(w.a,{variant:"primary",onClick:function(){return h(t)}}," ",m.createElement(v.Icon,{classes:"tick-mark"})," Send "),m.createElement(w.a,{variant:"secondary",onClick:g}," ",m.createElement(v.Icon,{classes:"close"})," Close ")))})))},J={className:"r-background",renderer:function(e){return u.a.createElement(L,e)},showExpandColumn:!0,expandByColumnOnly:!0,expandHeaderColumnRenderer:function(e){return e.isAnyExpands?u.a.createElement(v.Icon,{classes:"minus"}):u.a.createElement(v.Icon,{classes:"plus"})},expandColumnRenderer:function(e){return e.expanded?u.a.createElement(v.IconMd,{classes:"simple-up text-primary"}):u.a.createElement(v.IconMd,{classes:"simple-down text-primary"})}},R=Object(o.a)(Object(o.a)({},J),{},{expandColumnPosition:"right"}),z=function(e,t){var a=null;return e.status===O.StatusConst.DELIVERED&&(a="bg-feedback"),a},U=function(e,t,a,n){var r=e?e.map((function(e){return((t=e).count>1?t.count+" ":"")+t.name;var t})).join(" + "):"";return u.a.createElement("div",null,u.a.createElement("button",{className:"btn btn-fill btn-primary",onClick:function(){return n(t)}},u.a.createElement(v.IconMd,{classes:"basket"}))," ",r)},_=function(e,t){return e===O.StatusConst.DELIVERED?u.a.createElement(P,{key:t.id,header:t.laundryName,handleSubmitClick:function(e){return t.sendJobFeedback(t.id,e)}}):u.a.createElement("span",null,e.toLocaleLowerCase())},Y=function(e){return[{dataField:"items",text:"Items",formatter:U,formatExtraData:e},{dataField:"status",text:"Status",formatter:_},{dataField:"submissionDateTime",text:"Posted on",sort:!0},{dataField:"type",text:"Type"}]},G=function(e){return Y(e).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{hidden:!("items"===e.dataField||"status"===e.dataField)})}))},V=function(e){var t=e.columns,a=e.onColumnToggle,n=e.toggles;return u.a.createElement("div",{className:"buttons-with-margin","data-toggle":"buttons"},t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{toggle:n[e.dataField]})})).filter((function(e){return"items"!==e.dataField})).map((function(e){return u.a.createElement("button",{type:"button",key:e.dataField,className:"btn btn-primary ".concat(e.toggle?"active":""),"data-toggle":"button","aria-pressed":e.toggle?"true":"false",onClick:function(){return a(e.dataField)}},e.text)})))},W=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleCreateBasketFromHistory,n=e.data,r=e.handleContactFromHistory,l=e.handleStatusChange,s=e.sendJobFeedback,c=n.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{sendJobFeedback:s,handleStatusChange:l,handleContactClick:function(){return r(e.id)}})}));return u.a.createElement("div",{className:N()("container-fluid",{"mt-2":t})},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"header pt-sm-2 px-sm-4"},u.a.createElement("h4",null,"Job History ",u.a.createElement(v.IconMd,{classes:"history"}))),u.a.createElement("div",{className:"content pt-sm-2 px-sm-4"},t?function(e,t){return u.a.createElement(g.a,{bootstrap4:!0,keyField:"id",data:e,columns:G(t),columnToggle:!0},(function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(V,e.columnToggleProps),u.a.createElement(p.a,Object.assign({expandRow:R,rowClasses:z,stripe:"true",noDataIndication:"No job posted yet!",pagination:f()()},e.baseProps)))}))}(c,a):function(e,t){return u.a.createElement(p.a,{bootstrap4:!0,keyField:"id",data:e,columns:Y(t),expandRow:J,rowClasses:z,stripe:"true",noDataIndication:"No job posted yet!",pagination:f()()})}(c,a))))))}}]),a}(u.a.Component),K=a(204),q=a(45),Q=a.n(q),X=a(54),Z=function(e){var t=e.isMobile;return u.a.createElement("div",{className:"container text-center"},u.a.createElement("div",{className:N()("d-flex flex-row justify-content-center align-self-end r-height p-4",{"r-heightM":t})},u.a.createElement("div",{className:"d-flex align-self-center"},u.a.createElement("div",{className:"align-self-center"},u.a.createElement(X.Link,{to:"job"},u.a.createElement("button",{className:N()("btn btn-success btn-fill btn-lg",{"btn-sm":t})},u.a.createElement("span",null,"Order Your First Laundry ",u.a.createElement("i",{className:"icofont-runner-alt-1 pr-2","aria-hidden":"true"}))))))),u.a.createElement("div",{className:N()("row m-1",{"mt-2":t})},u.a.createElement("div",{className:"col-12"},u.a.createElement("span",{className:N()("circlebg-sub1",{"circlebg-sub1M":t})},u.a.createElement("i",{className:"icofont-refree-jersey icofont-md","aria-hidden":"true"})),u.a.createElement("span",{className:N()("circlebg",{circlebgM:t})},u.a.createElement("i",{className:"icofont-washing-machine","aria-hidden":"true"})),u.a.createElement("span",{className:N()("circlebg-sub1",{"circlebg-sub1M":t})},u.a.createElement("i",{className:"icofont-refree-jersey icofont-md","aria-hidden":"true"})))))},$=a(261),ee=a(29),te=a(40),ae=a(654),ne=a(174),re=a(258),le=a(61),se=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:void 0,page:void 0,size:void 0},r.updateJobHistoryStatus=r.updateJobHistoryStatus.bind(Object(l.a)(r)),r.sendJobFeedback=r.sendJobFeedback.bind(Object(l.a)(r)),r.updateLocalStatus=r.updateLocalStatus.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(ae.b)().then((function(t){var a=t.db,n=t.api;return a.length>0&&e.setState({data:a}),n})).then((function(t){return e.setState({data:t})})).catch((function(t){Q.a.err(Object(ne.getDisplayableMessage)(t)),e.setState({data:[]})}))}},{key:"updateLocalStatus",value:function(e,t,a){var n=this,r=O.StatusConst.INITIAL;return null===a||void 0===a||a.filter((function(t){return t.id===e})).forEach((function(e){r=e.status,e.status=t})),a&&a.length>0&&Object(re.b)(Promise.resolve(a)),n.setState({data:a}),r}},{key:"updateJobHistoryStatus",value:function(e,t){var a=this,n=this.state.data,r=this.updateLocalStatus(e,t,n);Object(le.A)(e,t).catch((function(t){Q.a.err(Object(ne.getDisplayableMessage)(t)),a.updateLocalStatus(e,r,n)}))}},{key:"sendJobFeedback",value:function(e,t){var a=this,n=this.state.data,r=this.updateLocalStatus(e,O.StatusConst.COMPLETE,n),l=t.rating||0,s=t.comment||"",c=t.hideName||!1;Object(le.v)({jobId:e,rating:l,comment:s,anonymous:c}).then((function(e){return Q.a.info(e.message)})).catch((function(t){Q.a.err(Object(ne.getDisplayableMessage)(t)),a.updateLocalStatus(e,r,n)}))}},{key:"render",value:function(){var e=this.state.data;return e?e.length<=0?u.a.createElement(Z,{isMobile:this.props.isMobile}):u.a.createElement(W,Object.assign({},this.props,{data:e.filter((function(e){return e.status!==O.StatusConst.DELETE})),handleStatusChange:this.updateJobHistoryStatus,sendJobFeedback:this.sendJobFeedback})):u.a.createElement($.a,{variant:"info",animated:!0,now:75,label:"LOADING..."})}}]),a}(u.a.Component);t.default=Object(te.o)(Object(i.b)((function(e){return{isMobile:e.layoutState.isMobile}}),(function(e,t){return{handleCreateBasketFromHistory:function(a){e(function(e){return{type:K.a.CREATE_BASKET,history:e}}(a)),t.history.push(ee.g)},handleContactFromHistory:function(e){t.history.push({pathname:ee.c,state:{jobHistoryId:e}})}}}))(se))}}]);