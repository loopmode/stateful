(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.default}}),t.Status=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(23));t.Status=n;var a,u=(a=r(33))&&a.__esModule?a:{default:a}},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},23:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},29:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,r=void 0===t?.5:t,n=e.min,a=void 0===n?100:n,u=e.max,o=void 0===u?2e3:u,l=Math.floor(a+Math.random()*(o-a)),c=Math.random()>r;return console.log("dummyCall -> will ".concat(c?"fail":"succeed"," in ").concat(l,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(c?"fail":"success")),c?t({status:400}):e({status:200})},l)})}r.d(t,"a",function(){return n})},32:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(0)),a=p(r(1)),u=p(r(5)),o=p(r(34)),l=p(r(35)),c=p(r(36)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(23)),i=p(r(21)),f=p(r(37)),d=r(39);function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,u=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function E(e){var t=n.default.useRef(),r=function(e){return function(){return t.current&&e()}},a=v(n.default.useState(s.IDLE),2),p=a[0],y=a[1],O=(0,o.default)(function(){return y(s.BUSY)},e.busyDelay),P=(0,o.default)(function(){return y(s.IDLE)},e.hintDuration);(0,l.default)(function(){t.current=!0}),(0,c.default)(function(){t.current=!1,P.clear(),O.clear()});var h={onPromise:r(function(){y(s.PENDING),P.clear(),O.start()}),onReject:r(function(){y(s.ERROR),O.clear(),P.start()}),onResolve:r(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?h.rejectValue(t):(y(s.SUCCESS),O.clear(),P.start())})};return n.default.Children.map(e.children,function(t){var r=(0,d.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(E.defaultProps)))),a=m({className:(0,u.default)(t.props.className,(0,d.createStatusClasses)(p,e))},(0,d.createStatusProps)(p,e)),o=(0,f.default)(t.props,e.callbacks,h);return n.default.cloneElement(t,m({},r,a,o))})}E.propTypes={children:a.default.node,callbacks:O,pendingProps:O,pendingClasses:O,busyDelay:a.default.number,busyProps:O,busyClasses:O,successProps:O,successClasses:O,errorProps:O,errorClasses:O,hintDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},E.defaultProps={callbacks:["onClick","onTouchStart"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var P=E;t.default=P},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(c){a=!0,u=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=a((0,n.useState)(!1),2),u=r[0],o=r[1];return(0,n.useEffect)(function(){if(u){var r=window.setTimeout(e,t);return function(){window.clearTimeout(r)}}},[u]),{clear:function(){return o(!1)},start:function(){return o(!0)}}};t.default=u},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.useEffect)(function(){return"function"===typeof e&&e()},[])};var n=r(0)},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.useEffect)(function(){return e},[])};var n=r(0)},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,u){var o=r.onPromise,l=r.onResolve,c=r.onReject;if(!t)return{};return(0,a.default)(t,u).reduce(function(t,r){var a=e[r];return"function"===typeof a&&(t[r]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var u=e.apply(void 0,r),s=(0,n.default)(u);s&&(s.catch(c),s.then(l),o(s))}.apply(void 0,[a].concat(t))}),t},{})};var n=u(r(38)),a=u(r(21));function u(e){return e&&e.__esModule?e:{default:e}}},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},39:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var r;return l((o(r={},a.PENDING,t.pendingClasses),o(r,a.BUSY,t.busyClasses),o(r,a.SUCCESS,t.successClasses),o(r,a.ERROR,t.errorClasses),r),e,t.delimiter)},t.createStatusProps=function(e,t){var r;return l((o(r={},a.PENDING,t.pendingProps),o(r,a.BUSY,t.busyProps),o(r,a.SUCCESS,t.successProps),o(r,a.ERROR,t.errorProps),r),e,t.delimiter)},t.createProps=l,t.createFlags=c,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(r,n){return t.includes(n)||(r[n]=e[n]),r},{})};var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(23)),u=(n=r(21))&&n.__esModule?n:{default:n};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r){var n=e[t];return"function"===typeof n?n(t):c(n,r)}function c(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=(0,u.default)(e,t);return n?n.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}({},e,o({},t,r))},{}):{}}},617:function(e,t,r){e.exports={VanillaExample:"ShIoj2UOXVrGKHEoOsAI5"}},640:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(5),o=r.n(u),l=r(617),c=r.n(l),s=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Vanilla example"),a.a.createElement("p",null,"This example doesn't use any UI frameworks, but some simple CSS rules instead. It uses the default wrapper:"),a.a.createElement("pre",{className:"push"},a.a.createElement("code",null,"import Stateful from '@loopmode/stateful';")),a.a.createElement("p",null,"The ",a.a.createElement("code",null,"pending")," and ",a.a.createElement("code",null,"busy")," CSS classes display a subtle animation, while the ",a.a.createElement("code",null,"success")," and"," ",a.a.createElement("code",null,"error")," classes give it green or red color."),a.a.createElement("p",null,"Have a look at the relevant code:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/vanilla/VanillaExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles"))))},i=r(134),f=r.n(i),d=r(29),p=r(32),m=function(){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(p.a,null),a.a.createElement(f.a,{hintDuration:2e3},a.a.createElement("button",{onClick:function(){return Object(d.a)({min:500,max:3e3})}},"Do something")),a.a.createElement(f.a,null,a.a.createElement("button",{onClick:function(){return Object(d.a)({min:500,max:3e3})}},"Do something")),a.a.createElement(f.a,null,a.a.createElement("button",{onClick:function(){return Object(d.a)({min:500,max:3e3})}},"Do something")))},y=function(){return a.a.createElement("div",{className:o()("VanillaExample",c.a.VanillaExample)},a.a.createElement(s,null),a.a.createElement(m,null))};r.d(t,"default",function(){return y})}}]);
//# sourceMappingURL=VanillaExample.03f9b7f9.chunk.js.map