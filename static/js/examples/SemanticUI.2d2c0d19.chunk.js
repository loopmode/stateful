(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulForm=t.StatefulButton=void 0;var r=l(n(0)),a=l(n(58));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){return r.default.createElement(a.default,o({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"positive",errorProps:"negative"},e))};t.StatefulButton=u;t.StatefulForm=function(e){return r.default.createElement(a.default,o({callbacks:"onSubmit",pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"success",errorProps:"error",hintDuration:5e3},e))};var c=u;t.default=c},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},47:function(e,t,n){"use strict";n.r(t),n.d(t,"loadDependencies",function(){return b}),n.d(t,"default",function(){return E});var r=n(70),a=n(71),l=n(80),o=n(72),u=n(81),c=n(82),s=n.n(c),i=n(83),f=n(0),d=n.n(f),p=n(2),m=n.n(p),b=function(){var e=Object(i.a)(s.a.mark(function e(){var t,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(13).then(n.t.bind(null,109,7));case 2:return t=e.sent,e.next=5,n.e(14).then(n.t.bind(null,110,7));case 5:return e.next=7,n.e(1).then(n.t.bind(null,57,7));case 7:return e.next=9,n.e(1).then(n.t.bind(null,57,7));case 9:return e.next=11,n.e(15).then(n.t.bind(null,111,7));case 11:return r=e.sent,e.abrupt("return",{Prism:t,ReactPrism:r});case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=d.a.lazy(Object(i.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return t=e.sent,n=t.ReactPrism,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))),E=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return d.a.createElement(h,{component:"pre",className:m()("Code push","language-".concat(this.props.lang.toLowerCase()))},this.props.children)}}]),t}(d.a.Component);E.defaultProps={lang:"jsx"}},50:function(e,t,n){e.exports={PrevNextLinks:"_1O7WOT8zYg7oZ7IIhDdvoR"}},53:function(e,t,n){"use strict";var r=n(79),a=n(0),l=n.n(a),o=n(146),u=n(652),c=n(50),s=n.n(c),i=n(2),f=n.n(i),d=Object(u.a)(function(e){var t=function(e,t){var n=Object(r.a)(e).findIndex(function(e){return e.hash.replace("#","")===t}),a=e[n-1],l=a&&{to:a.hash.replace("#",""),children:"\u25c0 ".concat(a.innerHTML)},o=e[n+1],u=o&&{to:o.hash.replace("#",""),children:"".concat(o.innerHTML," \u25b6")};return{prevLink:l,nextLink:u}}(document.querySelectorAll(".AppMenu a"),e.location.pathname),n=t.prevLink,a=t.nextLink;return l.a.createElement("footer",{className:f()("PrevNextLinks",s.a.PrevNextLinks)},n&&l.a.createElement(o.a,Object.assign({},n,{onClick:p})),l.a.createElement("span",{className:"spacer"}),a&&l.a.createElement(o.a,Object.assign({},a,{onClick:p})))});function p(){document.documentElement.scrollTop=0}n.d(t,"a",function(){return d})},54:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,n=void 0===t?.5:t,r=e.min,a=void 0===r?100:r,l=e.max,o=void 0===l?2e3:l,u=Math.floor(a+Math.random()*(o-a)),c=Math.random()>n;return console.log("dummyCall -> will ".concat(c?"fail":"succeed"," in ").concat(u,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(c?"fail":"success")),c?t({status:400}):e({status:200})},u)})}n.d(t,"a",function(){return r})},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(3)),l=p(n(2)),o=p(n(8)),u=p(n(9)),c=p(n(10)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(44)),i=p(n(42)),f=p(n(59)),d=n(61);function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,l=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function v(e){var t,n=r.default.useRef(),a=function(e){return function(){return n.current&&e()}},p=E(r.default.useState(s.IDLE),2),y=p[0],g=p[1],P=(h(t={},s.SUCCESS,e.successDuration||e.hintDuration),h(t,s.ERROR,e.errorDuration||e.hintDuration),t),O=(0,o.default)(function(){return g(s.BUSY)},e.busyDelay),w=(0,o.default)(function(){return g(s.IDLE)},P[y]||e.hintDuration);(0,u.default)(function(){n.current=!0}),(0,c.default)(function(){n.current=!1,w.clear(),O.clear()});var j={onPromise:a(function(){g(s.PENDING),w.clear(),O.start()}),onReject:a(function(){g(s.ERROR),O.clear(),w.start()}),onResolve:a(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?j.rejectValue(t):(g(s.SUCCESS),O.clear(),w.start())})};return r.default.Children.map(e.children,function(t){var n=(0,d.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(v.defaultProps)))),a=m({className:(0,l.default)(t.props.className,(0,d.createStatusClasses)(y,e))},(0,d.createStatusProps)(y,e)),o=(0,f.default)(t.props,e.callbacks,j);return r.default.cloneElement(t,m({},n,a,o))})}v.propTypes={children:a.default.node,callbacks:y,pendingProps:y,pendingClasses:y,busyDelay:a.default.number,busyProps:y,busyClasses:y,successProps:y,successClasses:y,errorProps:y,errorClasses:y,hintDuration:a.default.number,successDuration:a.default.number,errorDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},v.defaultProps={callbacks:["onClick"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,successDuration:void 0,errorDuration:void 0,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var g=v;t.default=g},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,l){var o=n.onPromise,u=n.onResolve,c=n.onReject;if(!t)return{};return(0,a.default)(t,l).reduce(function(t,n){var a=e[n];return"function"===typeof a&&(t[n]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var l=e.apply(void 0,n),s=(0,r.default)(l);s&&(s.catch(c),s.then(u),o(s))}.apply(void 0,[a].concat(t))}),t},{})};var r=l(n(60)),a=l(n(42));function l(e){return e&&e.__esModule?e:{default:e}}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var n;return u((o(n={},a.PENDING,t.pendingClasses),o(n,a.BUSY,t.busyClasses),o(n,a.SUCCESS,t.successClasses),o(n,a.ERROR,t.errorClasses),n),e,t.delimiter)},t.createStatusProps=function(e,t){var n;return u((o(n={},a.PENDING,t.pendingProps),o(n,a.BUSY,t.busyProps),o(n,a.SUCCESS,t.successProps),o(n,a.ERROR,t.errorProps),n),e,t.delimiter)},t.createProps=u,t.createFlags=c,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(n,r){return t.includes(r)||(n[r]=e[r]),n},{})};var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(44)),l=(r=n(42))&&r.__esModule?r:{default:r};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var r=e[t];return"function"===typeof r?r(t):c(r,n)}function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=(0,l.default)(e,t);return r?r.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},e,o({},t,n))},{}):{}}},62:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}},668:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(73),o=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Semantic UI"),a.a.createElement("p",null,"Semantic UI is supported pretty well out of the box, because it is capable of displaying the pending, success and error states by passing props on its components."))},u=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Buttons"),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"semantic-ui-react")," default wrapper can be used via:"),a.a.createElement(l.a,null,"import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';"),a.a.createElement("p",null,"It provides ",a.a.createElement("code",null,"loading"),", ",a.a.createElement("code",null,"positive")," and"," ",a.a.createElement("code",null,"negative")," flags to the wrapped component, which is supported by the ",a.a.createElement("code",null,"Button")," component."),a.a.createElement("p",null,"Have a look at the relevant code:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L5-L17",target:"_blank",rel:"noopener noreferrer"},"Stateful button configuration"))))},c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Forms"),a.a.createElement("p",null,"Semantic UI forms are supported out of the box as well. While there is an apparent naming inconsistency with the success and error props (they are actually called ",a.a.createElement("code",null,"success")," and"," ",a.a.createElement("code",null,"error")," in the ",a.a.createElement("code",null,"Form")," component, while they are called ",a.a.createElement("code",null,"positive")," and ",a.a.createElement("code",null,"negative")," in the"," ",a.a.createElement("code",null,"Button")," component) the form does support such props as well as a ",a.a.createElement("code",null,"loading")," one."),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"semantic-ui-react")," form wrapper can be used via:"),a.a.createElement(l.a,null,"import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';"),a.a.createElement("p",null,"It provides ",a.a.createElement("code",null,"loading"),", ",a.a.createElement("code",null,"success")," and"," ",a.a.createElement("code",null,"error")," flags to the wrapped component. Note that this also triggers ",a.a.createElement("code",null,"<Message success>")," and"," ",a.a.createElement("code",null,"<Message error>")," visibility."),a.a.createElement("p",null,"Have a look at the relevant code:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L20-L34",target:"_blank",rel:"noopener noreferrer"},"Stateful button configuration"))),a.a.createElement("h4",null,"Form Demo"),a.a.createElement("i",{className:"push info"},"Submit the form below. You don't need to fill in anything, the input fields are actually ignored. ",a.a.createElement("br",null)," The example uses"," ",a.a.createElement("code",null,"hintDuration=",5e3),", meaning it will remain in success or error state for 5 seconds."))},s=n(670),i=n(62),f=n(54),d=n(206),p=n.n(d),m=function(){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(u,null),a.a.createElement(i.a,null),a.a.createElement(p.a,null,a.a.createElement(s.a,{icon:"undo",onClick:f.a,title:"Icon-only",className:"inline"})),a.a.createElement(p.a,null,a.a.createElement(s.a,{icon:"upload",content:"With icon",labelPosition:"left",onClick:f.a})),a.a.createElement(p.a,{busyDelay:1e3},a.a.createElement(s.a,{onClick:f.a},"With 1s busy delay")))},b=n(663),h=n(667),E=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c,null),a.a.createElement(d.StatefulForm,null,a.a.createElement(b.a,{onSubmit:f.a},a.a.createElement(h.a,{success:!0,header:"Form Completed",content:"You're all signed up for the newsletter"}),a.a.createElement(h.a,{error:!0,header:"Something went wrong",content:"An unexpected error occurred. Please try again."}),a.a.createElement(b.a.Field,{inline:!0},a.a.createElement("label",null,"First Name"),a.a.createElement("input",{placeholder:"First Name"})),a.a.createElement(b.a.Field,{inline:!0},a.a.createElement("label",null,"Last Name"),a.a.createElement("input",{placeholder:"Last Name"})),a.a.createElement(s.a,{type:"submit"},"Log in"))))},y=n(2),v=n.n(y),g=n(53),P=function(){return a.a.createElement("div",{className:v()("SemanticUIExample",P.SemanticUIExample)},a.a.createElement(o,null),a.a.createElement(m,null),a.a.createElement("div",{className:"push"}),a.a.createElement(E,null),a.a.createElement(g.a,null))};n.d(t,"default",function(){return P})},73:function(e,t,n){"use strict";var r=n(47);n.d(t,"a",function(){return r.default})}}]);
//# sourceMappingURL=SemanticUI.2d2c0d19.chunk.js.map