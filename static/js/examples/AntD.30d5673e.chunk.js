(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},501:function(e,t,n){e.exports={AntDExample:"_244PeBoteqgqFskxWHGkv-"}},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var r=l(n(0)),a=l(n(63));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){return r.default.createElement(a.default,o({pendingClasses:null,busyClasses:null,successClasses:"success",errorClasses:"error",pendingProps:"disabled",busyProps:"loading disabled",successProps:null,errorProps:null},e))};t.StatefulButton=u;var s=u;t.default=s},52:function(e,t,n){e.exports={PrevNextLinks:"_1O7WOT8zYg7oZ7IIhDdvoR"}},55:function(e,t,n){"use strict";var r=n(80),a=n(0),l=n.n(a),o=n(143),u=n(647),s=n(52),c=n.n(s),i=n(2),f=n.n(i),p=Object(u.a)(function(e){var t=function(e,t){var n=Object(r.a)(e).findIndex(function(e){return e.hash.replace("#","")===t}),a=e[n-1],l=a&&{to:a.hash.replace("#",""),children:"\u25c0 ".concat(a.innerHTML)},o=e[n+1],u=o&&{to:o.hash.replace("#",""),children:"".concat(o.innerHTML," \u25b6")};return{prevLink:l,nextLink:u}}(document.querySelectorAll(".AppMenu a"),e.location.pathname),n=t.prevLink,a=t.nextLink;return l.a.createElement("footer",{className:f()("PrevNextLinks",c.a.PrevNextLinks)},n&&l.a.createElement(o.a,Object.assign({},n,{onClick:d})),l.a.createElement("span",{className:"spacer"}),a&&l.a.createElement(o.a,Object.assign({},a,{onClick:d})))});function d(){document.documentElement.scrollTop=0}n.d(t,"a",function(){return p})},58:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,n=void 0===t?.5:t,r=e.min,a=void 0===r?100:r,l=e.max,o=void 0===l?2e3:l,u=Math.floor(a+Math.random()*(o-a)),s=Math.random()>n;return console.log("dummyCall -> will ".concat(s?"fail":"succeed"," in ").concat(u,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(s?"fail":"success")),s?t({status:400}):e({status:200})},u)})}n.d(t,"a",function(){return r})},62:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(56),a=n.n(r),l=n(57);function o(){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(13).then(n.t.bind(null,105,7));case 2:return t=e.sent,e.next=5,n.e(14).then(n.t.bind(null,106,7));case 5:return e.next=7,n.e(1).then(n.t.bind(null,61,7));case 7:return e.next=9,n.e(1).then(n.t.bind(null,61,7));case 9:return e.next=11,n.e(15).then(n.t.bind(null,107,7));case 11:return r=e.sent,e.abrupt("return",{Prism:t,ReactPrism:r});case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),l=d(n(2)),o=d(n(9)),u=d(n(10)),s=d(n(11)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(47)),i=d(n(45)),f=d(n(64)),p=n(66);function d(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,l=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function g(e){var t,n=r.default.useRef(),a=function(e){return function(){return n.current&&e()}},d=v(r.default.useState(c.IDLE),2),h=d[0],E=d[1],P=(y(t={},c.SUCCESS,e.successDuration||e.hintDuration),y(t,c.ERROR,e.errorDuration||e.hintDuration),t),O=(0,o.default)(function(){return E(c.BUSY)},e.busyDelay),j=(0,o.default)(function(){return E(c.IDLE)},P[h]||e.hintDuration);(0,u.default)(function(){n.current=!0}),(0,s.default)(function(){n.current=!1,j.clear(),O.clear()});var C={onPromise:a(function(){E(c.PENDING),j.clear(),O.start()}),onReject:a(function(){E(c.ERROR),O.clear(),j.start()}),onResolve:a(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?C.rejectValue(t):(E(c.SUCCESS),O.clear(),j.start())})};return r.default.Children.map(e.children,function(t){var n=(0,p.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(g.defaultProps)))),a=m({className:(0,l.default)(t.props.className,(0,p.createStatusClasses)(h,e))},(0,p.createStatusProps)(h,e)),o=(0,f.default)(t.props,e.callbacks,C);return r.default.cloneElement(t,m({},n,a,o))})}g.propTypes={children:a.default.node,callbacks:h,pendingProps:h,pendingClasses:h,busyDelay:a.default.number,busyProps:h,busyClasses:h,successProps:h,successClasses:h,errorProps:h,errorClasses:h,hintDuration:a.default.number,successDuration:a.default.number,errorDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},g.defaultProps={callbacks:["onClick"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,successDuration:void 0,errorDuration:void 0,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var E=g;t.default=E},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,l){var o=n.onPromise,u=n.onResolve,s=n.onReject;if(!t)return{};return(0,a.default)(t,l).reduce(function(t,n){var a=e[n];return"function"===typeof a&&(t[n]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var l=e.apply(void 0,n),c=(0,r.default)(l);c&&(c.catch(s),c.then(u),o(c))}.apply(void 0,[a].concat(t))}),t},{})};var r=l(n(65)),a=l(n(45));function l(e){return e&&e.__esModule?e:{default:e}}},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var n;return u((o(n={},a.PENDING,t.pendingClasses),o(n,a.BUSY,t.busyClasses),o(n,a.SUCCESS,t.successClasses),o(n,a.ERROR,t.errorClasses),n),e,t.delimiter)},t.createStatusProps=function(e,t){var n;return u((o(n={},a.PENDING,t.pendingProps),o(n,a.BUSY,t.busyProps),o(n,a.SUCCESS,t.successProps),o(n,a.ERROR,t.errorProps),n),e,t.delimiter)},t.createProps=u,t.createFlags=s,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(n,r){return t.includes(r)||(n[r]=e[r]),n},{})};var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(47)),l=(r=n(45))&&r.__esModule?r:{default:r};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var r=e[t];return"function"===typeof r?r(t):s(r,n)}function s(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=(0,l.default)(e,t);return r?r.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},e,o({},t,n))},{}):{}}},665:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=(n(499),n(501)),o=n.n(l),u=n(2),s=n.n(u),c=n(81),i=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"AntD"),a.a.createElement("p",null,"AntD buttons do not support success and error state, so you'll have to define some CSS for that yourself. Besides that, they do support a loading flag to show an animated spinner, which is neat."),a.a.createElement("p",null,"The default ",a.a.createElement("code",null,"antd")," wrapper can be used via:"),a.a.createElement(c.a,null,"import Stateful from '@loopmode/stateful/lib/wrappers/antd';"),a.a.createElement("p",null,"Have a look at the relevant code:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples/antd",target:"_blank",rel:"noopener noreferrer"},"This example"))))},f=n(658),p=n(67),d=n(58),m=n(503),b=n.n(m),y=function(){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(p.a,null),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:d.a,type:"primary"},"Primary")),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:d.a},"Default")),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:d.a,type:"dashed"},"Dashed")),a.a.createElement(b.a,null,a.a.createElement(f.a,{onClick:d.a,type:"danger"},"Danger")))};function v(){return a.a.createElement("div",{className:"relevant-code"},a.a.createElement("h3",null,"Relevant code"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples/antd",target:"_blank",rel:"noopener noreferrer"},"This example"))))}var h=n(55),g=function(){return a.a.createElement("div",{className:s()("AntDExample",o.a.AntDExample)},a.a.createElement(i,null),a.a.createElement(y,null),a.a.createElement(v,null),a.a.createElement(h.a,null))};n.d(t,"default",function(){return g})},67:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}},81:function(e,t,n){"use strict";var r=n(8),a=n(56),l=n.n(a),o=n(57),u=n(0),s=n.n(u),c=n(2),i=n.n(c),f=n(62),p=s.a.lazy(Object(o.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)();case 2:return t=e.sent,n=t.ReactPrism,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))),d=function(e){var t=e.children,n=e.className,a=e.lang,l=void 0===a?"jsx":a,o=Object(r.a)(e,["children","className","lang"]);return s.a.createElement(p,Object.assign({},o,{component:"pre",className:i()(n,"Prism","language-".concat(l.toLowerCase()))}),t)};n.d(t,"a",function(){return d})}}]);
//# sourceMappingURL=AntD.30d5673e.chunk.js.map