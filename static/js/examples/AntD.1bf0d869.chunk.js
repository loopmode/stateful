(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},501:function(e,t,n){e.exports={AntDExample:"_244PeBoteqgqFskxWHGkv-"}},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var r=u(n(0)),a=u(n(63));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return r.default.createElement(a.default,o({pendingClasses:null,busyClasses:null,successClasses:"success",errorClasses:"error",pendingProps:"disabled",busyProps:"loading disabled",successProps:null,errorProps:null},e))};t.StatefulButton=l;var c=l;t.default=c},52:function(e,t,n){e.exports={PrevNextLinks:"_1O7WOT8zYg7oZ7IIhDdvoR"}},55:function(e,t,n){"use strict";var r=n(80),a=n(0),u=n.n(a),o=n(143),l=n(647),c=n(52),s=n.n(c),i=n(2),f=n.n(i),d=Object(l.a)(function(e){var t=function(e,t){var n=Object(r.a)(e).findIndex(function(e){return e.hash.replace("#","")===t}),a=e[n-1],u=a&&{to:a.hash.replace("#",""),children:"\u25c0 ".concat(a.innerHTML)},o=e[n+1],l=o&&{to:o.hash.replace("#",""),children:"".concat(o.innerHTML," \u25b6")};return{prevLink:u,nextLink:l}}(document.querySelectorAll(".AppMenu a"),e.location.pathname),n=t.prevLink,a=t.nextLink;return u.a.createElement("footer",{className:f()("PrevNextLinks",s.a.PrevNextLinks)},n&&u.a.createElement(o.a,Object.assign({},n,{onClick:p})),u.a.createElement("span",{className:"spacer"}),a&&u.a.createElement(o.a,Object.assign({},a,{onClick:p})))});function p(){document.documentElement.scrollTop=0}n.d(t,"a",function(){return d})},58:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,n=void 0===t?.5:t,r=e.min,a=void 0===r?100:r,u=e.max,o=void 0===u?2e3:u,l=Math.floor(a+Math.random()*(o-a)),c=Math.random()>n;return console.log("dummyCall -> will ".concat(c?"fail":"succeed"," in ").concat(l,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(c?"fail":"success")),c?t({status:400}):e({status:200})},l)})}n.d(t,"a",function(){return r})},62:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(56),a=n.n(r),u=n(57);function o(){return l.apply(this,arguments)}function l(){return(l=Object(u.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(13).then(n.t.bind(null,105,7));case 2:return t=e.sent,e.next=5,n.e(14).then(n.t.bind(null,106,7));case 5:return e.next=7,n.e(1).then(n.t.bind(null,61,7));case 7:return e.next=9,n.e(1).then(n.t.bind(null,61,7));case 9:return e.next=11,n.e(15).then(n.t.bind(null,107,7));case 11:return r=e.sent,e.abrupt("return",{Prism:t,ReactPrism:r});case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(3)),u=p(n(2)),o=p(n(9)),l=p(n(10)),c=p(n(11)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(47)),i=p(n(45)),f=p(n(64)),d=n(66);function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,u=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function g(e){var t,n=r.default.useRef(),a=function(e){return function(){return n.current&&e()}},p=v(r.default.useState(s.IDLE),2),h=p[0],E=p[1],P=(y(t={},s.SUCCESS,e.successDuration||e.hintDuration),y(t,s.ERROR,e.errorDuration||e.hintDuration),t),O=(0,o.default)(function(){return E(s.BUSY)},e.busyDelay),j=(0,o.default)(function(){return E(s.IDLE)},P[h]||e.hintDuration);(0,l.default)(function(){n.current=!0}),(0,c.default)(function(){n.current=!1,j.clear(),O.clear()});var C={onPromise:a(function(){E(s.PENDING),j.clear(),O.start()}),onReject:a(function(){E(s.ERROR),O.clear(),j.start()}),onResolve:a(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?C.rejectValue(t):(E(s.SUCCESS),O.clear(),j.start())})};return r.default.Children.map(e.children,function(t){var n=(0,d.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(g.defaultProps)))),a=m({className:(0,u.default)(t.props.className,(0,d.createStatusClasses)(h,e))},(0,d.createStatusProps)(h,e)),o=(0,f.default)(t.props,e.callbacks,C);return r.default.cloneElement(t,m({},n,a,o))})}g.propTypes={children:a.default.node,callbacks:h,pendingProps:h,pendingClasses:h,busyDelay:a.default.number,busyProps:h,busyClasses:h,successProps:h,successClasses:h,errorProps:h,errorClasses:h,hintDuration:a.default.number,successDuration:a.default.number,errorDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},g.defaultProps={callbacks:["onClick"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,successDuration:void 0,errorDuration:void 0,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var E=g;t.default=E},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,u){var o=n.onPromise,l=n.onResolve,c=n.onReject;if(!t)return{};return(0,a.default)(t,u).reduce(function(t,n){var a=e[n];return"function"===typeof a&&(t[n]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var u=e.apply(void 0,n),s=(0,r.default)(u);s&&(s.catch(c),s.then(l),o(s))}.apply(void 0,[a].concat(t))}),t},{})};var r=u(n(65)),a=u(n(45));function u(e){return e&&e.__esModule?e:{default:e}}},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var n;return l((o(n={},a.PENDING,t.pendingClasses),o(n,a.BUSY,t.busyClasses),o(n,a.SUCCESS,t.successClasses),o(n,a.ERROR,t.errorClasses),n),e,t.delimiter)},t.createStatusProps=function(e,t){var n;return l((o(n={},a.PENDING,t.pendingProps),o(n,a.BUSY,t.busyProps),o(n,a.SUCCESS,t.successProps),o(n,a.ERROR,t.errorProps),n),e,t.delimiter)},t.createProps=l,t.createFlags=c,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(n,r){return t.includes(r)||(n[r]=e[r]),n},{})};var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(47)),u=(r=n(45))&&r.__esModule?r:{default:r};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){var r=e[t];return"function"===typeof r?r(t):c(r,n)}function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=(0,u.default)(e,t);return r?r.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},e,o({},t,n))},{}):{}}},667:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=(n(499),n(501)),o=n.n(u),l=n(2),c=n.n(l),s=n(81),i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"AntD"),a.a.createElement("p",null,"AntD buttons do not support success and error state, so you'll have to define some CSS for that yourself. Besides that, they do support a loading flag to show an animated spinner, which is neat."),a.a.createElement("p",null,"The default ",a.a.createElement("code",null,"antd")," wrapper can be used via:"),a.a.createElement(s.a,null,"import Stateful from '@loopmode/stateful/lib/wrappers/antd';"),a.a.createElement("p",null,"Have a look at the relevant code:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},f=n(658),d=n(67),p=n(58),m=n(503),b=n.n(m),y=function(){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(d.a,null),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:p.a,type:"primary"},"Primary")),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:p.a},"Default")),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:p.a,type:"dashed"},"Dashed")),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:p.a,type:"danger"},"Danger")))},v=n(55),h=function(){return a.a.createElement("div",{className:c()("AntDExample",o.a.AntDExample)},a.a.createElement(i,null),a.a.createElement(y,null),a.a.createElement(v.a,null))};n.d(t,"default",function(){return h})},67:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}},81:function(e,t,n){"use strict";var r=n(8),a=n(56),u=n.n(a),o=n(57),l=n(0),c=n.n(l),s=n(2),i=n.n(s),f=n(62),d=c.a.lazy(Object(o.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)();case 2:return t=e.sent,n=t.ReactPrism,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))),p=function(e){var t=e.children,n=e.className,a=e.lang,u=void 0===a?"jsx":a,o=Object(r.a)(e,["children","className","lang"]);return c.a.createElement(d,Object.assign({},o,{component:"pre",className:i()(n,"Prism","language-".concat(u.toLowerCase()))}),t)};n.d(t,"a",function(){return p})}}]);
//# sourceMappingURL=AntD.1bf0d869.chunk.js.map