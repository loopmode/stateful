(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulForm=t.StatefulButton=void 0;var r=l(n(0)),a=l(n(66));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(e){return r.default.createElement(a.default,u({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"positive",errorProps:"negative"},e))};t.StatefulButton=o;t.StatefulForm=function(e){return r.default.createElement(a.default,u({callbacks:"onSubmit",pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"success",errorProps:"error",hintDuration:5e3},e))};var c=o;t.default=c},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},55:function(e,t,n){e.exports={PrevNextLinks:"_1O7WOT8zYg7oZ7IIhDdvoR"}},58:function(e,t,n){"use strict";var r=n(99),a=n(0),l=n.n(a),u=n(198),o=n(674),c=n(55),s=n.n(c),i=n(2),f=n.n(i),d=Object(o.a)(function(e){var t=function(e,t){var n=Object(r.a)(e).findIndex(function(e){return e.hash.replace("#","")===t}),a=e[n-1],l=a&&{to:a.hash.replace("#",""),children:"\u25c0 ".concat(a.innerHTML)},u=e[n+1],o=u&&{to:u.hash.replace("#",""),children:"".concat(u.innerHTML," \u25b6")};return{prevLink:l,nextLink:o}}(document.querySelectorAll(".AppMenu a"),e.location.pathname),n=t.prevLink,a=t.nextLink;return l.a.createElement("footer",{className:f()("PrevNextLinks",s.a.PrevNextLinks)},n&&l.a.createElement(u.a,Object.assign({},n,{onClick:m})),l.a.createElement("span",{className:"spacer"}),a&&l.a.createElement(u.a,Object.assign({},a,{onClick:m})))});function m(){document.documentElement.scrollTop=0}n.d(t,"a",function(){return d})},59:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,n=void 0===t?.5:t,r=e.min,a=void 0===r?100:r,l=e.max,u=void 0===l?2e3:l,o=Math.floor(a+Math.random()*(u-a)),c=Math.random()>n;return console.log("dummyCall -> will ".concat(c?"fail":"succeed"," in ").concat(o,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(c?"fail":"success")),c?t({status:400}):e({status:200})},o)})}n.d(t,"a",function(){return r})},65:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(50),a=n.n(r),l=n(51);function u(){return o.apply(this,arguments)}function o(){return(o=Object(l.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(13).then(n.t.bind(null,109,7));case 2:return t=e.sent,e.next=5,n.e(14).then(n.t.bind(null,110,7));case 5:return e.next=7,n.e(1).then(n.t.bind(null,62,7));case 7:return e.next=9,n.e(1).then(n.t.bind(null,62,7));case 9:return e.next=11,n.e(15).then(n.t.bind(null,111,7));case 11:return r=e.sent,e.abrupt("return",{Prism:t,ReactPrism:r});case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(0)),a=m(n(3)),l=m(n(2)),u=m(n(9)),o=m(n(10)),c=m(n(11)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(48)),i=m(n(46)),f=m(n(67)),d=n(69);function m(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){a=!0,l=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function v(e){var t,n=r.default.useRef(),a=function(e){return function(){return n.current&&e()}},m=y(r.default.useState(s.IDLE),2),h=m[0],g=m[1],P=(E(t={},s.SUCCESS,e.successDuration||e.hintDuration),E(t,s.ERROR,e.errorDuration||e.hintDuration),t),O=(0,u.default)(function(){return g(s.BUSY)},e.busyDelay),j=(0,u.default)(function(){return g(s.IDLE)},P[h]||e.hintDuration);(0,o.default)(function(){n.current=!0}),(0,c.default)(function(){n.current=!1,j.clear(),O.clear()});var w={onPromise:a(function(){g(s.PENDING),j.clear(),O.start()}),onReject:a(function(){g(s.ERROR),O.clear(),j.start()}),onResolve:a(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?w.rejectValue(t):(g(s.SUCCESS),O.clear(),j.start())})};return r.default.Children.map(e.children,function(t){var n=(0,d.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(v.defaultProps)))),a=p({className:(0,l.default)(t.props.className,(0,d.createStatusClasses)(h,e))},(0,d.createStatusProps)(h,e)),u=(0,f.default)(t.props,e.callbacks,w);return r.default.cloneElement(t,p({},n,a,u))})}v.propTypes={children:a.default.node,callbacks:h,pendingProps:h,pendingClasses:h,busyDelay:a.default.number,busyProps:h,busyClasses:h,successProps:h,successClasses:h,errorProps:h,errorClasses:h,hintDuration:a.default.number,successDuration:a.default.number,errorDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},v.defaultProps={callbacks:["onClick"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,successDuration:void 0,errorDuration:void 0,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var g=v;t.default=g},664:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(84),u=n(83),o=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Semantic UI"),a.a.createElement("p",null,"Semantic UI is supported pretty well out of the box, because it is capable of displaying the pending, success and error states by setting boolean props on its components."))},c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Buttons"),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"semantic-ui-react")," default wrapper can be used via:"),a.a.createElement(u.a,null,"import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';"),a.a.createElement("p",null,"It provides ",a.a.createElement("code",null,"loading"),", ",a.a.createElement("code",null,"positive")," and"," ",a.a.createElement("code",null,"negative")," flags to the wrapped component, which is supported by the ",a.a.createElement("code",null,"Button")," component."))},s=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Forms"),a.a.createElement("p",null,"Semantic UI forms are supported out of the box as well. Note that this also includes ",a.a.createElement("code",null,"<Message success>")," and"," ",a.a.createElement("code",null,"<Message error>")," visibility."),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"semantic-ui-react")," form wrapper can be used via:"),a.a.createElement(u.a,null,"import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';"),a.a.createElement("p",null,"It provides ",a.a.createElement("code",null,"loading"),", ",a.a.createElement("code",null,"success")," and"," ",a.a.createElement("code",null,"error")," flags to the wrapped component."),a.a.createElement("h4",null,"Form Demo"),a.a.createElement("i",{className:"push info"},"Submit the form below. You don't need to fill in anything, the input fields are actually ignored. ",a.a.createElement("br",null)," The example uses"," ",a.a.createElement("code",null,"hintDuration=",5e3),", meaning it will remain in success or error state for 5 seconds."))},i=n(671),f=n(70),d=n(59),m=n(208),p=n.n(m),b=function(){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(c,null),a.a.createElement(f.a,null),a.a.createElement(p.a,null,a.a.createElement(i.a,{icon:"undo",onClick:d.a,title:"Icon-only",className:"inline"})),a.a.createElement(p.a,null,a.a.createElement(i.a,{icon:"upload",content:"With icon",labelPosition:"left",onClick:d.a})),a.a.createElement(p.a,{busyDelay:1e3},a.a.createElement(i.a,{onClick:d.a},"With 1s busy delay")))},E=n(660),y=n(669),h=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(m.StatefulForm,null,a.a.createElement(E.a,{onSubmit:d.a},a.a.createElement(y.a,{success:!0,header:"Form Completed",content:"You're all signed up for the newsletter"}),a.a.createElement(y.a,{error:!0,header:"Something went wrong",content:"An unexpected error occurred. Please try again."}),a.a.createElement(E.a.Field,{inline:!0},a.a.createElement("label",null,"First Name"),a.a.createElement("input",{placeholder:"First Name"})),a.a.createElement(E.a.Field,{inline:!0},a.a.createElement("label",null,"Last Name"),a.a.createElement("input",{placeholder:"Last Name"})),a.a.createElement(i.a,{type:"submit"},"Log in"))))};function v(){return a.a.createElement("div",{className:"relevant-code"},a.a.createElement("h3",null,"Relevant code"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L5-L17",target:"_blank",rel:"noopener noreferrer"},"Stateful button configuration")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L20-L34",target:"_blank",rel:"noopener noreferrer"},"Stateful form configuration")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples/semantic-ui",target:"_blank",rel:"noopener noreferrer"},"This example"))))}var g=n(2),P=n.n(g),O=n(58),j=function(){return a.a.createElement("div",{className:P()("SemanticUIExample",j.SemanticUIExample)},a.a.createElement(l.Helmet,null,a.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",type:"text/css"}),a.a.createElement("title",null,"semantic-ui example - @loopmode/stateful")),a.a.createElement(o,null),a.a.createElement(b,null),a.a.createElement(h,null),a.a.createElement(v,null),a.a.createElement(O.a,null))};n.d(t,"default",function(){return j})},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,l){var u=n.onPromise,o=n.onResolve,c=n.onReject;if(!t)return{};return(0,a.default)(t,l).reduce(function(t,n){var a=e[n];return"function"===typeof a&&(t[n]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var l=e.apply(void 0,n),s=(0,r.default)(l);s&&(s.catch(c),s.then(o),u(s))}.apply(void 0,[a].concat(t))}),t},{})};var r=l(n(68)),a=l(n(46));function l(e){return e&&e.__esModule?e:{default:e}}},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var n;return o((u(n={},a.PENDING,t.pendingClasses),u(n,a.BUSY,t.busyClasses),u(n,a.SUCCESS,t.successClasses),u(n,a.ERROR,t.errorClasses),n),e,t.delimiter)},t.createStatusProps=function(e,t){var n;return o((u(n={},a.PENDING,t.pendingProps),u(n,a.BUSY,t.busyProps),u(n,a.SUCCESS,t.successProps),u(n,a.ERROR,t.errorProps),n),e,t.delimiter)},t.createProps=o,t.createFlags=c,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(n,r){return t.includes(r)||(n[r]=e[r]),n},{})};var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(48)),l=(r=n(46))&&r.__esModule?r:{default:r};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){var r=e[t];return"function"===typeof r?r(t):c(r,n)}function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=(0,l.default)(e,t);return r?r.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},e,u({},t,n))},{}):{}}},70:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}},83:function(e,t,n){"use strict";var r=n(8),a=n(50),l=n.n(a),u=n(51),o=n(0),c=n.n(o),s=n(2),i=n.n(s),f=n(65),d=c.a.lazy(Object(u.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)();case 2:return t=e.sent,n=t.ReactPrism,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))),m=function(e){var t=e.children,n=e.className,a=e.lang,l=void 0===a?"jsx":a,u=Object(r.a)(e,["children","className","lang"]);return c.a.createElement(d,Object.assign({},u,{component:"pre",className:i()(n,"Prism","language-".concat(l.toLowerCase()))}),t)};n.d(t,"a",function(){return m})}}]);
//# sourceMappingURL=SemanticUI.d6db4d03.chunk.js.map