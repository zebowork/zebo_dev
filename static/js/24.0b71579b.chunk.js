(this.webpackJsonpzebo_fe=this.webpackJsonpzebo_fe||[]).push([[24],{600:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return m}));var o=r(123),n="INITIAL",a="ASSIGN",u="PICKING",l="PICKUP",i="PROCESSING",s="DONE",c="DELIVERING",f="DELIVERED",d="CANCEL",p="COMPLETE",h="BLOCK",b=[{value:n,color:"#ebdef0",description:"job submitted by user",isForLaundry:!1},{value:"BID",color:"#f2d7d5",description:"Job sent to laundries to get bid",isForLaundry:!1},{value:a,color:"#a9dfbf",description:"User received bids, accept single bid means assign to single laundry",isForLaundry:!1},{value:d,color:"#c2c7cc",description:"Customer has cancel the job",isForLaundry:!1},{value:u,color:"#a3e4d7",description:"laundry is out to pickup items",isForLaundry:!0},{value:l,color:"#a3e4d7",description:"laundry's representative picked up items",isForLaundry:!0},{value:i,color:"#f9e79f",description:"started to processing",isForLaundry:!0},{value:s,color:"#f6ddcc",description:"laundry has finished processing and order is ready to pickup",isForLaundry:!0},{value:c,color:"#bfc9ca",description:"laundry is out to deliver order",isForLaundry:!0},{value:f,color:"#AEB6EF",description:"items are with customer, payment is clear",isForLaundry:!0},{value:p,color:"#a9cce3",description:"customer mark order complete after checking items",isForLaundry:!1},{value:h,color:"#f0b274",description:"customer mark order complete after checking items",isForLaundry:!0}],y={INITIAL:n,SUBMITTED:"SUBMITTED",BID:"BID",ASSIGN:a,PICKING:u,PICKUP:l,PROCESSING:i,DONE:s,DELIVERING:c,DELIVERED:f,CANCEL:d,COMPLETE:p,DELETE:"DELETE",BLOCK:h},v=function(e){var t=b.filter((function(t){return t.value===e})).map((function(e){return e.color}));return t.length?t[0]:""},m=function(e){var t=b.filter((function(t){return t.value===e})).map((function(e){return e.description}));return t.length?t[0]:""};[b[2]].concat(Object(o.a)(b.filter((function(e){return e.isForLaundry})).filter((function(e){return e.value!==h}))))},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=c(r(0)),l=c(r(9)),i=c(r(751)),s=c(r(756));function c(e){return e&&e.__esModule?e:{default:e}}var f=u.default.createContext(),d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o={};return r._=null,r.onClear=r.onClear.bind(r),r.onSearch=r.onSearch.bind(r),r.onColumnToggle=r.onColumnToggle.bind(r),r.setDependencyModules=r.setDependencyModules.bind(r),e.columnToggle&&(o.columnToggle=e.columns.reduce((function(e,t){return e[t.dataField]=!t.hidden,e}),{})),o.searchText="object"===n(e.search)&&e.search.defaultSearch||"",r.state=o,r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.state.columnToggle;t=e.columnToggle?e.columns.reduce((function(e,t){return e[t.dataField]=!t.hidden,e}),{}):null,this.setState(o({},this.state,{columnToggle:t}))}},{key:"onSearch",value:function(e){e!==this.state.searchText&&this.setState({searchText:e})}},{key:"onClear",value:function(){this.setState({searchText:""})}},{key:"onColumnToggle",value:function(e){var t=this.state.columnToggle;t[e]=!t[e],this.setState(o({},this.state,{columnToggle:t}))}},{key:"setDependencyModules",value:function(e){this._=e}},{key:"render",value:function(){var e={keyField:this.props.keyField,columns:this.props.columns,data:this.props.data,bootstrap4:this.props.bootstrap4,setDependencyModules:this.setDependencyModules,registerExposedAPI:this.registerExposedAPI};return this.props.search&&(e.search={searchContext:(0,s.default)(this.props.search),searchText:this.state.searchText}),this.props.columnToggle&&(e.columnToggle={toggles:this.state.columnToggle}),u.default.createElement(f.Provider,{value:{searchProps:{searchText:this.state.searchText,onSearch:this.onSearch,onClear:this.onClear},csvProps:{onExport:this.handleExportCSV},columnToggleProps:{columns:this.props.columns,toggles:this.state.columnToggle,onColumnToggle:this.onColumnToggle},baseProps:e}},this.props.children)}}]),t}((0,i.default)(u.default.Component));d.propTypes={keyField:l.default.string.isRequired,data:l.default.array.isRequired,columns:l.default.array.isRequired,children:l.default.node.isRequired,bootstrap4:l.default.bool,search:l.default.oneOfType([l.default.bool,l.default.shape({defaultSearch:l.default.string,searchFormatted:l.default.bool})]),exportCSV:l.default.oneOfType([l.default.bool,l.default.shape({fileName:l.default.string,separator:l.default.string,ignoreHeader:l.default.bool,ignoreFooter:l.default.bool,noAutoBOM:l.default.bool,blobType:l.default.string,exportAll:l.default.bool,onlyExportFiltered:l.default.bool,onlyExportSelection:l.default.bool})])},d.defaultProps={search:!1,exportCSV:!1,bootstrap4:!1},t.default={Provider:d,Consumer:f.Consumer}},742:function(e,t,r){},743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColumnToggle=t.CSVExport=t.Search=t.ToolkitContext=void 0;var o=r(744);Object.defineProperty(t,"Search",{enumerable:!0,get:function(){return i(o).default}});var n=r(747);Object.defineProperty(t,"CSVExport",{enumerable:!0,get:function(){return i(n).default}});var a=r(749);Object.defineProperty(t,"ColumnToggle",{enumerable:!0,get:function(){return i(a).default}});var u=i(r(645)),l=i(r(757));function i(e){return e&&e.__esModule?e:{default:e}}t.default=l.default;t.ToolkitContext=u.default},744:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(r(745)),n=a(r(746));function a(e){return e&&e.__esModule?e:{default:e}}t.default={SearchBar:o.default,ClearSearchButton:n.default}},745:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=arguments,a=r(0),u=s(a),l=r(9),i=s(l);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e,t,r){var o=void 0;return function(){var a=r&&!o;clearTimeout(o),o=setTimeout((function(){o=null,r||e.apply(void 0,n)}),t||0),a&&e.appy(void 0,n)}},h=function(e){function t(e){c(this,t);var r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onChangeValue=function(e){r.setState({value:e.target.value})},r.onKeyup=function(){var e=r.props,t=e.delay,o=e.onSearch;p((function(){o(r.input.value)}),t)()},r.state={value:e.searchText},r}return d(t,e),o(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.searchText})}},{key:"render",value:function(){var e=this,r=this.props,o=r.className,n=r.style,a=r.placeholder,l=r.tableId,i=r.srText;return u.default.createElement("label",{htmlFor:"search-bar-"+l,className:"search-label"},u.default.createElement("span",{id:"search-bar-"+l+"-label",className:"sr-only"},i),u.default.createElement("input",{ref:function(t){return e.input=t},id:"search-bar-"+l,type:"text",style:n,"aria-labelledby":"search-bar-"+l+"-label",onKeyUp:function(){return e.onKeyup()},onChange:this.onChangeValue,className:"form-control "+o,value:this.state.value,placeholder:a||t.defaultProps.placeholder}))}}]),t}(u.default.Component);h.propTypes={onSearch:i.default.func.isRequired,className:i.default.string,placeholder:i.default.string,style:i.default.object,delay:i.default.number,searchText:i.default.string,tableId:i.default.string,srText:i.default.string},h.defaultProps={className:"",style:{},placeholder:"Search",delay:250,searchText:"",tableId:"0",srText:"Search this table"},t.default=h},746:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(r(0)),n=a(r(9));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.onClear,r=e.text,n=e.className;return o.default.createElement("button",{className:"btn btn-default "+n,onClick:t},r)};u.propTypes={onClear:n.default.func.isRequired,className:n.default.string,text:n.default.string},u.defaultProps={text:"Clear",className:""},t.default=u},747:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(748),a=(o=n)&&o.__esModule?o:{default:o};t.default={ExportCSVButton:a.default}},748:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=u(r(0)),a=u(r(9));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.onExport,r=e.children,a=e.className,u=function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["onExport","children","className"]);return n.default.createElement("button",o({type:"button",className:"react-bs-table-csv-btn btn btn-default "+a,onClick:function(){return t()}},u),r)};l.propTypes={children:a.default.node.isRequired,onExport:a.default.func.isRequired,className:a.default.string,style:a.default.object},l.defaultProps={className:"",style:{}},t.default=l},749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(750),a=(o=n)&&o.__esModule?o:{default:o};t.default={ToggleList:a.default}},750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=u(r(0)),a=u(r(9));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.columns,r=e.onColumnToggle,a=e.toggles,u=e.contextual,l=e.className,i=e.btnClassName;return n.default.createElement("div",{className:"btn-group btn-group-toggle "+l,"data-toggle":"buttons"},t.map((function(e){return o({},e,{toggle:a[e.dataField]})})).map((function(e){return n.default.createElement("button",{type:"button",key:e.dataField,className:i+" btn btn-"+u+" "+(e.toggle?"active":""),"data-toggle":"button","aria-pressed":e.toggle?"true":"false",onClick:function(){return r(e.dataField)}},e.text)})))};l.propTypes={columns:a.default.array.isRequired,toggles:a.default.object.isRequired,onColumnToggle:a.default.func.isRequired,btnClassName:a.default.string,className:a.default.string,contextual:a.default.string},l.defaultProps={btnClassName:"",className:"",contextual:"primary"},t.default=l},751:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(752),a=(o=n)&&o.__esModule?o:{default:o};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}t.default=function(e){return function(e){function t(){var e,r,o;u(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return r=o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.registerExposedAPI=function(e){o.tableExposedAPIEmitter=e},l(o,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(a.default.csvOperation(e))}},752:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(753),a=(o=n)&&o.__esModule?o:{default:o};t.default={csvOperation:a.default}},753:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=r(754);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var l={fileName:"spreadsheet.csv",separator:",",ignoreHeader:!1,ignoreFooter:!0,noAutoBOM:!0,blobType:"text/plain;charset=utf-8",exportAll:!0,onlyExportSelection:!1};t.default=function(e){return function(e){function t(){var e,r,i;a(this,t);for(var s=arguments.length,c=Array(s),f=0;f<s;f++)c[f]=arguments[f];return r=i=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.handleExportCSV=function(e){var t=i.props,r=t.columns,a=t.exportCSV,u=t.keyField,s=(0,n.getMetaInfo)(r),c=!0===a?l:o({},l,a),f=void 0;if("undefined"!==typeof e)f=e;else if(c.exportAll)f=i.props.data;else if(c.onlyExportFiltered){var d={};i.tableExposedAPIEmitter.emit("get.filtered.rows",d),f=d.result}else{var p={};i.tableExposedAPIEmitter.emit("get.table.data",p),f=p.result}if(c.onlyExportSelection){var h={};i.tableExposedAPIEmitter.emit("get.selected.rows",h);var b=h.result;f=f.filter((function(e){return!!b.find((function(t){return e[u]===t}))}))}var y=(0,n.transform)(f,s,r,i._,c);(0,n.save)(y,c)},u(i,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(e)}},754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.save=t.transform=t.getMetaInfo=void 0;var o,n=r(755),a=(o=n)&&o.__esModule?o:{default:o};t.getMetaInfo=function(e){return e.map((function(e){return{field:e.dataField,type:e.csvType||String,formatter:e.csvFormatter,formatExtraData:e.formatExtraData,header:e.csvText||e.text,export:!1!==e.csvExport,row:Number(e.row)||0,rowSpan:Number(e.rowSpan)||1,colSpan:Number(e.colSpan)||1,footer:e.footer,footerFormatter:e.footerFormatter}})).filter((function(e){return e.export}))},t.transform=function(e,t,r,o,n){var a=n.separator,u=n.ignoreHeader,l=n.ignoreFooter,i=t.filter((function(e){return e.export})),s="";return u||(s+=i.map((function(e){return'"'+e.header+'"'})).join(a),s+="\n"),0===e.length||(s+=e.map((function(e,t){return i.map((function(r){var n=o.get(e,r.field);return r.formatter&&(n=r.formatter(n,e,t,r.formatExtraData)),r.type===String?'"'+(""+n).replace(/"/g,'""')+'"':n})).join(a)})).join("\n"),l||(s+="\n",s+=i.map((function(t,n){if("function"===typeof t.footer){var a=o.pluck(e,r[n].dataField);return'"'+t.footer(a,r[n],n)+'"'}return t.footerFormatter?'"'+t.footerFormatter(r[n],n)+'"':'"'+t.footer+'"'})).join(a))),s},t.save=function(e,t){var r=t.noAutoBOM,o=t.fileName,n=t.blobType;a.default.saveAs(new Blob([e],{type:n}),o,r)}},755:function(e,t,r){(function(r){var o,n,a;n=[],void 0===(a="function"===typeof(o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,r){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,r)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r&&r.global===r?r:void 0,l=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,r){var l=u.URL||u.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?a(i):n(i.href)?o(e,t,r):a(i,i.target="_blank")):(i.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(i.href)}),4e4),setTimeout((function(){a(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,u){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,u),r);else if(n(e))o(e,r,u);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,r);var a="application/octet-stream"===e.type,l=/constructor/i.test(u.HTMLElement)||u.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||a&&l)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},s.readAsDataURL(e)}else{var c=u.URL||u.webkitURL,f=c.createObjectURL(e);n?n.location=f:location.href=f,n=null,setTimeout((function(){c.revokeObjectURL(f)}),4e4)}});u.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,n):o)||(e.exports=a)}).call(this,r(116))},756:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=u(r(0)),a=u(r(9));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchFormatted:!1,afterSearch:null,onColumnMatch:null};return function(t,r,u){var c=n.default.createContext(),f=function(a){function f(e){l(this,f);var t=i(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e)),o=e.data;return r()&&""!==t.props.searchText?u(t.props.searchText):(o=t.search(e),t.triggerListener(o,!0)),t.state={data:o},t}return s(f,a),o(f,[{key:"getSearched",value:function(){return this.state.data}},{key:"triggerListener",value:function(t,r){e.afterSearch&&!r&&e.afterSearch(t),this.props.dataChangeListener&&this.props.dataChangeListener.emit("filterChanged",t.length)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(e.searchText!==this.props.searchText)if(r())u(e.searchText);else{var o=this.search(e);this.triggerListener(o),this.setState({data:o})}else if(r())this.setState({data:e.data});else if(!t.isEqual(e.data,this.props.data)){var n=this.search(e);this.triggerListener(n),this.setState({data:n})}}},{key:"search",value:function(r){var o=r.data,n=r.columns,a=r.searchText.toLowerCase();return o.filter((function(r,o){for(var u=0;u<n.length;u+=1){var l=n[u];if(!1!==l.searchable){var i=t.get(r,l.dataField);if(l.formatter&&e.searchFormatted?i=l.formatter(i,r,o,l.formatExtraData):l.filterValue&&(i=l.filterValue(i,r)),e.onColumnMatch){if(e.onColumnMatch({searchText:a,value:i,column:l,row:r}))return!0}else if(null!==i&&"undefined"!==typeof i&&(i=i.toString().toLowerCase()).indexOf(a)>-1)return!0}}return!1}))}},{key:"render",value:function(){return n.default.createElement(c.Provider,{value:{data:this.state.data}},this.props.children)}}]),f}(n.default.Component);return f.propTypes={data:a.default.array.isRequired,columns:a.default.array.isRequired,searchText:a.default.string,dataChangeListener:a.default.object},{Provider:f,Consumer:c.Consumer}}}},757:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(r(0)),n=u(r(9)),a=u(r(645));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return o.default.createElement(a.default.Provider,e,o.default.createElement(a.default.Consumer,null,(function(t){return e.children(t)})))};l.propTypes={children:n.default.func.isRequired},t.default=l}}]);