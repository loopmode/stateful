(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{412:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var n=u(r(0)),a=u(r(64));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(){return{children:"Loading...",disabled:!0}},l=function(){return{variant:"success"}},s=function(){return{variant:"danger"}},i=function(e){return n.default.createElement(a.default,o({pendingClasses:null,successClasses:null,errorClasses:null,pendingProps:c,busyProps:c,successProps:l,errorProps:s},e))};t.StatefulButton=i;var f=i;t.default=f},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},47:function(e,t,r){"use strict";r.r(t),r.d(t,"loadDependencies",function(){return b}),r.d(t,"default",function(){return v});var n=r(60),a=r(61),u=r(75),o=r(62),c=r(76),l=r(51),s=r.n(l),i=r(52),f=r(0),d=r.n(f),p=r(5),m=r.n(p),b=function(){var e=Object(i.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(8).then(r.t.bind(null,110,7));case 2:return t=e.sent,e.next=5,r.e(9).then(r.t.bind(null,111,7));case 5:return e.next=7,r.e(0).then(r.t.bind(null,57,7));case 7:return e.next=9,r.e(0).then(r.t.bind(null,57,7));case 9:return e.next=11,r.e(10).then(r.t.bind(null,112,7));case 11:return n=e.sent,e.abrupt("return",{Prism:t,ReactPrism:n});case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=d.a.lazy(Object(i.a)(s.a.mark(function e(){var t,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return t=e.sent,r=t.ReactPrism,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))),v=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return d.a.createElement(y,{component:"pre",className:m()("Code push","language-".concat(this.props.lang.toLowerCase()))},this.props.children)}}]),t}(d.a.Component);v.defaultProps={lang:"jsx"}},54:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,r=void 0===t?.5:t,n=e.min,a=void 0===n?100:n,u=e.max,o=void 0===u?2e3:u,c=Math.floor(a+Math.random()*(o-a)),l=Math.random()>r;return console.log("dummyCall -> will ".concat(l?"fail":"succeed"," in ").concat(c,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(l?"fail":"success")),l?t({status:400}):e({status:200})},c)})}r.d(t,"a",function(){return n})},63:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}},64:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(0)),a=p(r(1)),u=p(r(5)),o=p(r(65)),c=p(r(66)),l=p(r(67)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(44)),i=p(r(42)),f=p(r(68)),d=r(70);function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){b(e,t,r[t])})}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,u=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function g(e){var t=n.default.useRef(),r=function(e){return function(){return t.current&&e()}},a=v(n.default.useState(s.IDLE),2),p=a[0],b=a[1],h=(0,o.default)(function(){return b(s.BUSY)},e.busyDelay),P=(0,o.default)(function(){return b(s.IDLE)},e.hintDuration);(0,c.default)(function(){t.current=!0}),(0,l.default)(function(){t.current=!1,P.clear(),h.clear()});var O={onPromise:r(function(){b(s.PENDING),P.clear(),h.start()}),onReject:r(function(){b(s.ERROR),h.clear(),P.start()}),onResolve:r(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?O.rejectValue(t):(b(s.SUCCESS),h.clear(),P.start())})};return n.default.Children.map(e.children,function(t){var r=(0,d.omitProps)(t.props,[].concat(y((0,i.default)(e.callbacks)),y(Object.keys(g.defaultProps)))),a=m({className:(0,u.default)(t.props.className,(0,d.createStatusClasses)(p,e))},(0,d.createStatusProps)(p,e)),o=(0,f.default)(t.props,e.callbacks,O);return n.default.cloneElement(t,m({},r,a,o))})}g.propTypes={children:a.default.node,callbacks:h,pendingProps:h,pendingClasses:h,busyDelay:a.default.number,busyProps:h,busyClasses:h,successProps:h,successClasses:h,errorProps:h,errorClasses:h,hintDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},g.defaultProps={callbacks:["onClick"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var P=g;t.default=P},65:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(o=(0,n.useState)(!1),c=2,function(e){if(Array.isArray(e))return e}(o)||function(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(l){a=!0,u=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw u}}return r}(o,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),a=r[0],u=r[1];var o,c;return(0,n.useEffect)(function(){if(a){var r=window.setTimeout(e,t);return function(){window.clearTimeout(r)}}},[a]),{clear:function(){return u(!1)},start:function(){return u(!0)}}};var n=r(0)},654:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(80),o=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Bootstrap"),a.a.createElement("p",null,"Unfortunately, ",a.a.createElement("code",null,"react-bootstrap")," does not provide any sophisticated loading states or animations, so besides indicating success or danger, we need to perform some tricks for the loading state."),a.a.createElement("p",null,"As suggested by the official documentation, the default wrapper replaces the ",a.a.createElement("code",null,"children"),' property of the wrapped component and displays a "Loading..." string while pending or busy.'),a.a.createElement("p",null,"If you need to change that text or localize it, simply create a custom wrapper and provide the ",a.a.createElement("code",null,"pendingProps")," and"," ",a.a.createElement("code",null,"busyProps")," in a similar fashion to how how the"," ",a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"default")," ","does it."),a.a.createElement("p",null,"The default ",a.a.createElement("code",null,"react-bootstrap")," wrapper can be used via:"),a.a.createElement(u.a,null,"import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';"),a.a.createElement("p",null,"Have a look at the relevant code:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},c=r(649),l=r(54),s=r(63),i=r(412),f=r.n(i),d=function(){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(s.a,null),a.a.createElement(f.a,null,a.a.createElement(c.a,{onClick:l.a},"Load")),a.a.createElement(f.a,null,a.a.createElement(c.a,{onClick:l.a},"Save")))},p=function(){return a.a.createElement("div",{className:"BootstrapExample"},a.a.createElement(o,null),a.a.createElement(d,null))};r.d(t,"default",function(){return p})},66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.useEffect)(function(){return"function"===typeof e&&e()},[])};var n=r(0)},67:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.useEffect)(function(){return e},[])};var n=r(0)},68:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,u){var o=r.onPromise,c=r.onResolve,l=r.onReject;if(!t)return{};return(0,a.default)(t,u).reduce(function(t,r){var a=e[r];return"function"===typeof a&&(t[r]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var u=e.apply(void 0,r),s=(0,n.default)(u);s&&(s.catch(l),s.then(c),o(s))}.apply(void 0,[a].concat(t))}),t},{})};var n=u(r(69)),a=u(r(42));function u(e){return e&&e.__esModule?e:{default:e}}},69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},70:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var r;return c((o(r={},a.PENDING,t.pendingClasses),o(r,a.BUSY,t.busyClasses),o(r,a.SUCCESS,t.successClasses),o(r,a.ERROR,t.errorClasses),r),e,t.delimiter)},t.createStatusProps=function(e,t){var r;return c((o(r={},a.PENDING,t.pendingProps),o(r,a.BUSY,t.busyProps),o(r,a.SUCCESS,t.successProps),o(r,a.ERROR,t.errorProps),r),e,t.delimiter)},t.createProps=c,t.createFlags=l,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(r,n){return t.includes(n)||(r[n]=e[n]),r},{})};var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(44)),u=(n=r(42))&&n.__esModule?n:{default:n};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r){var n=e[t];return"function"===typeof n?n(t):l(n,r)}function l(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=(0,u.default)(e,t);return n?n.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}({},e,o({},t,r))},{}):{}}},80:function(e,t,r){"use strict";var n=r(47);r.d(t,"a",function(){return n.default})}}]);
//# sourceMappingURL=BootstrapExample.4f9f1148.chunk.js.map