(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[7],{822:function(e,t,r){"use strict";r.r(t);var n=r(51),i=r(49),s=r.n(i),c=r(92),a=r(21),o=r(29),l=r(91),u=r(43),d=r(44),p=r(0),f=r(677),b=r.n(f),h=r(337),j=r(118),m=r(39),v=r.n(m),g=r(52),O=r(653),k=r.n(O),x=r(24),y=r(62),B=r(16),N=r(133),A=r.n(N),T=r(177),w=r(1),C=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).updatePreferences=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.apiRequestSend(B.A),e.prev=1,e.next=4,Object(y.z)(t);case 4:v.a.sucs("Your Preferences updated"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),v.a.err(Object(T.getDisplayableMessage)(e.t0));case 10:return e.prev=10,n.props.apiRequestReceive(B.A),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),n.state={displayTimepicker:!1,code:""},n.getValue=n.getValue.bind(Object(l.a)(n)),n.changeTimeState=n.changeTimeState.bind(Object(l.a)(n)),n.updatePreferences=n.updatePreferences.bind(Object(l.a)(n)),n}return Object(o.a)(r,[{key:"toggleTimekeeper",value:function(e){var t=!this.state.displayTimepicker;this.setState({displayTimepicker:t,code:e})}},{key:"getValue",value:function(){switch(this.state.code){case"pa":return this.props.pickupAfter;case"pb":return this.props.pickupBefore;case"da":return this.props.deliverAfter;case"db":return this.props.deliverBefore;default:return""}}},{key:"changeTimeState",value:function(e){switch(this.state.code){case"pa":return this.props.pickupAfterChange(e);case"pb":return this.props.pickupBeforeChange(e);case"da":return this.props.deliverAfterChange(e);case"db":return this.props.deliverBeforeChange(e);default:return}}},{key:"render",value:function(){var e=this,t=this.props,r=t.pickupAfter,n=t.pickupBefore,i=t.deliverAfter,s=t.deliverBefore,c=t.isLoading,a=t.isMobile,o={preferredPickupAfter:r,preferredPickupBefore:n,preferredDeliverAfter:i,preferredDeliverBefore:s};return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"content",children:Object(w.jsx)("div",{className:"container-fluid",children:Object(w.jsx)("div",{className:"row pt-2",children:Object(w.jsx)("div",{className:"col-md-12 col-md-offset-2",children:Object(w.jsx)(h.a,{children:Object(w.jsxs)("div",{className:"row",children:[!!this.state.displayTimepicker&&Object(w.jsx)("div",{className:"col-md-6",children:Object(w.jsx)("div",{className:"content pt-sm-2 px-sm-4",children:Object(w.jsx)(b.a,{time:this.getValue(),onChange:this.changeTimeState,onDoneClick:function(){e.toggleTimekeeper("")},switchToMinuteOnHourSelect:!0})})}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("div",{className:"header pt-sm-2 px-sm-4",children:[Object(w.jsxs)("h4",{className:"title",children:["Preferences"," ",Object(w.jsx)(k.a,{children:"Updating these values will have impact on job default values, you will see these values by default on your laundry posting page."})]}),Object(w.jsx)("p",{className:"category",children:"Your default values according to you need"})]}),Object(w.jsxs)("div",{className:"content pt-sm-2 px-sm-4",children:[Object(w.jsxs)("div",{style:{marginBottom:20,marginTop:40},children:[Object(w.jsx)("h4",{className:"title",children:"Preferred pick up"}),Object(w.jsxs)("div",{className:"btn-group",style:{marginBottom:5},children:[Object(w.jsxs)("button",{type:"button","data-testid":"pickupAfter",className:"btn btn-default",onClick:function(){return e.toggleTimekeeper("pa")},children:["After ",r]}),Object(w.jsxs)("button",{type:"button","data-testid":"pickupBefore",className:"btn btn-default",onClick:function(){return e.toggleTimekeeper("pb")},children:["Before ",n]})]})]}),Object(w.jsxs)("div",{style:{marginBottom:50},children:[Object(w.jsx)("h4",{className:"title",children:"Preferred delivery"}),Object(w.jsxs)("div",{className:"btn-group",style:{marginBottom:5},children:[Object(w.jsxs)("button",{type:"button","data-testid":"deliverAfter",className:"btn btn-default",onClick:function(){return e.toggleTimekeeper("da")},children:["After ",i]}),Object(w.jsxs)("button",{type:"button","data-testid":"deliverBefore",className:"btn btn-default",onClick:function(){return e.toggleTimekeeper("db")},children:["Before ",s]})]})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-left flex-wrap",children:[Object(w.jsx)(j.a,{className:"btn btn-success btn-fill btn-wd",onClick:function(t){return e.updatePreferences(o)},children:Object(w.jsxs)(A.a,{variant:"light",show:c,id:"preferencesButtonText",children:["SAVE ",Object(w.jsx)("i",{className:"icofont-save"})]})}),!a&&Object(w.jsx)(g.Link,{to:x.m,children:Object(w.jsxs)(j.a,{className:"btn btn-wd mt-1 ml-sm-1",children:["Go to Setting"," ",Object(w.jsx)("i",{className:"icofont-ui-settings icofont-md","aria-hidden":"true"})]})})]})]})]})]})})})})})})})}}]),r}(p.Component),S=r(104),P=r(152),R=r(357),E=r.n(R);t.default=Object(n.b)((function(e){return{pickupAfter:e.loginState.user.preferences.preferredPickupAfter,pickupBefore:e.loginState.user.preferences.preferredPickupBefore,deliverAfter:e.loginState.user.preferences.preferredDeliverAfter,deliverBefore:e.loginState.user.preferences.preferredDeliverBefore,isLoading:E.a.isInProgress(B.A,e.aPICallsState.calls),isMobile:e.layoutState.isMobile}}),(function(e){return{pickupAfterChange:function(t){return e(function(e){return{type:S.c.PICK_AFTER,newTime:e}}(t.formatted12))},pickupBeforeChange:function(t){return e(function(e){return{type:S.c.PICK_BEFORE,newTime:e}}(t.formatted12))},deliverAfterChange:function(t){return e(function(e){return{type:S.c.DELIVER_AFTER,newTime:e}}(t.formatted12))},deliverBeforeChange:function(t){return e(function(e){return{type:S.c.DELIVER_BEFORE,newTime:e}}(t.formatted12))},apiRequestSend:function(t){return e(Object(P.updateStoreSend)(t))},apiRequestReceive:function(t){return e(Object(P.updateStoreReceive)(t))}}}))(C)}}]);