(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),t.Status=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(48));t.Status=n;var a,o=(a=r(66))&&a.__esModule?a:{default:a}},46:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},55:function(e,t,r){e.exports={PrevNextLinks:"_1O7WOT8zYg7oZ7IIhDdvoR"}},58:function(e,t,r){"use strict";var n=r(99),a=r(0),o=r.n(a),l=r(198),s=r(674),c=r(55),u=r.n(c),i=r(2),f=r.n(i),d=Object(s.a)(function(e){var t=function(e,t){var r=Object(n.a)(e).findIndex(function(e){return e.hash.replace("#","")===t}),a=e[r-1],o=a&&{to:a.hash.replace("#",""),children:"\u25c0 ".concat(a.innerHTML)},l=e[r+1],s=l&&{to:l.hash.replace("#",""),children:"".concat(l.innerHTML," \u25b6")};return{prevLink:o,nextLink:s}}(document.querySelectorAll(".AppMenu a"),e.location.pathname),r=t.prevLink,a=t.nextLink;return o.a.createElement("footer",{className:f()("PrevNextLinks",u.a.PrevNextLinks)},r&&o.a.createElement(l.a,Object.assign({},r,{onClick:p})),o.a.createElement("span",{className:"spacer"}),a&&o.a.createElement(l.a,Object.assign({},a,{onClick:p})))});function p(){document.documentElement.scrollTop=0}r.d(t,"a",function(){return d})},59:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,r=void 0===t?.5:t,n=e.min,a=void 0===n?100:n,o=e.max,l=void 0===o?2e3:o,s=Math.floor(a+Math.random()*(l-a)),c=Math.random()>r;return console.log("dummyCall -> will ".concat(c?"fail":"succeed"," in ").concat(s,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(c?"fail":"success")),c?t({status:400}):e({status:200})},s)})}r.d(t,"a",function(){return n})},66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(0)),a=p(r(3)),o=p(r(2)),l=p(r(9)),s=p(r(10)),c=p(r(11)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(48)),i=p(r(46)),f=p(r(67)),d=r(69);function p(e){return e&&e.__esModule?e:{default:e}}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=a.default.oneOfType([a.default.func,a.default.string,a.default.arrayOf(a.default.string)]);function g(e){var t,r=n.default.useRef(),a=function(e){return function(){return r.current&&e()}},p=h(n.default.useState(u.IDLE),2),v=p[0],E=p[1],O=(y(t={},u.SUCCESS,e.successDuration||e.hintDuration),y(t,u.ERROR,e.errorDuration||e.hintDuration),t),P=(0,l.default)(function(){return E(u.BUSY)},e.busyDelay),j=(0,l.default)(function(){return E(u.IDLE)},O[v]||e.hintDuration);(0,s.default)(function(){r.current=!0}),(0,c.default)(function(){r.current=!1,j.clear(),P.clear()});var w={onPromise:a(function(){E(u.PENDING),j.clear(),P.start()}),onReject:a(function(){E(u.ERROR),P.clear(),j.start()}),onResolve:a(function(t){"function"===typeof e.rejectValue&&e.rejectValue(t)?w.rejectValue(t):(E(u.SUCCESS),P.clear(),j.start())})};return n.default.Children.map(e.children,function(t){var r=(0,d.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(g.defaultProps)))),a=m({className:(0,o.default)(t.props.className,(0,d.createStatusClasses)(v,e))},(0,d.createStatusProps)(v,e)),l=(0,f.default)(t.props,e.callbacks,w);return n.default.cloneElement(t,m({},r,a,l))})}g.propTypes={children:a.default.node,callbacks:v,pendingProps:v,pendingClasses:v,busyDelay:a.default.number,busyProps:v,busyClasses:v,successProps:v,successClasses:v,errorProps:v,errorClasses:v,hintDuration:a.default.number,successDuration:a.default.number,errorDuration:a.default.number,delimiter:a.default.string,rejectValue:a.default.func},g.defaultProps={callbacks:["onClick"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,successDuration:void 0,errorDuration:void 0,delimiter:" ",rejectValue:function(e){return e instanceof Error}};var E=g;t.default=E},663:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(84),l=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Material UI"),a.a.createElement("p",null,"While there is a nice loading animation when using Material UI (",a.a.createElement("a",{href:"https://material-ui.com/demos/progress/",target:"_blank",rel:"noopener noreferrer"},"Progress"),"), there is no easy way to just pass a prop to a button and be done with it. You still need to create a construct that displays the"," ",a.a.createElement("code",null,"Progress")," component conditionally, you have to take care of the layout etc."),a.a.createElement("p",null,"However, that is a typical problem that you will probably have solved already, if you're working with Material UI on a large-ish application."),a.a.createElement("p",null,"For that reason, there is no default wrapper for Material UI. Instead, have a look at the code of this example for a possible approach (see links below)."),a.a.createElement("p",null,"Basically, the trick is to create a component that wraps a"," ",a.a.createElement("code",null,"Button"),", accepts some properties like `success`, `error` and `loading`, and renders the button accordingly - adding a"," ",a.a.createElement("code",null,"Progress")," when needed. That's exactly what I did here, based on this"," ",a.a.createElement("a",{href:"https://material-ui.com/demos/progress/#interactive-integration",target:"_blank",rel:"noreferrer noopener"},"official example")," ","and without any prior experience with Material UI."))},s=r(59),c=r(70),u=r(569),i=r(8),f=r(2),d=r.n(f),p=r(642),m=r(570),b=r.n(m),y=r(269),h=r.n(y),v=r(571),g=r.n(v),E=r(640),O=r.n(E),P=Object(p.withStyles)(function(){return{wrapper:{display:"inline-block",position:"relative"},success:{backgroundColor:b.a[500],"&:hover":{backgroundColor:b.a[700]}},error:{backgroundColor:h.a[500],"&:hover":{backgroundColor:h.a[700]}},progress:{color:b.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-8,marginLeft:-8}}})(function(e){var t,r=e.className,n=e.classes,o=e.loading,l=e.success,s=e.error,c=Object(i.a)(e,["className","classes","loading","success","error"]),f=d()(r,(t={},Object(u.a)(t,n.success,l),Object(u.a)(t,n.error,s),t));return a.a.createElement("div",{className:d()("ProgressButton Button",n.wrapper)},a.a.createElement(g.a,Object.assign({className:f,disabled:o},c),e.children),o&&a.a.createElement(O.a,{size:16,className:n.progress}))}),j=r(150),w=r.n(j),k=function(e){return a.a.createElement(w.a,Object.assign({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled loading",busyProps:"disabled loading",successProps:"success",errorProps:"error"},e))};var C=function(e){return a.a.createElement("div",{className:"ButtonsExample"},a.a.createElement(c.a,null),a.a.createElement(k,null,a.a.createElement(P,{variant:"contained",onClick:s.a},"Default")),a.a.createElement(k,null,a.a.createElement(P,{variant:"contained",color:"primary",onClick:s.a},"Primary")),a.a.createElement(k,null,a.a.createElement(P,{variant:"contained",color:"secondary",onClick:s.a},"Secondary")))};function S(){return a.a.createElement("div",{className:"relevant-code"},a.a.createElement("h3",null,"Relevant code"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/ProgressButton.js",target:"_blank",rel:"noopener noreferrer"},"Custom ProgressButton")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/Stateful.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples/material-ui",target:"_blank",rel:"noopener noreferrer"},"This example"))))}var D=r(58),_=function(){return a.a.createElement("div",{className:"MaterialUIExample"},a.a.createElement(o.Helmet,null,a.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto",type:"text/css"}),a.a.createElement("title",null,"material-ui example - @loopmode/stateful")),a.a.createElement(l,null),a.a.createElement(C,null),a.a.createElement(S,null),a.a.createElement(D.a,null))};r.d(t,"default",function(){return _})},67:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,o){var l=r.onPromise,s=r.onResolve,c=r.onReject;if(!t)return{};return(0,a.default)(t,o).reduce(function(t,r){var a=e[r];return"function"===typeof a&&(t[r]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var o=e.apply(void 0,r),u=(0,n.default)(o);u&&(u.catch(c),u.then(s),l(u))}.apply(void 0,[a].concat(t))}),t},{})};var n=o(r(68)),a=o(r(46));function o(e){return e&&e.__esModule?e:{default:e}}},68:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var r;return s((l(r={},a.PENDING,t.pendingClasses),l(r,a.BUSY,t.busyClasses),l(r,a.SUCCESS,t.successClasses),l(r,a.ERROR,t.errorClasses),r),e,t.delimiter)},t.createStatusProps=function(e,t){var r;return s((l(r={},a.PENDING,t.pendingProps),l(r,a.BUSY,t.busyProps),l(r,a.SUCCESS,t.successProps),l(r,a.ERROR,t.errorProps),r),e,t.delimiter)},t.createProps=s,t.createFlags=c,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(r,n){return t.includes(n)||(r[n]=e[n]),r},{})};var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(48)),o=(n=r(46))&&n.__esModule?n:{default:n};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t,r){var n=e[t];return"function"===typeof n?n(t):c(n,r)}function c(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=(0,o.default)(e,t);return n?n.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({},e,l({},t,r))},{}):{}}},70:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Button Demo"),a.a.createElement("i",{className:"push info"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))}}}]);
//# sourceMappingURL=MaterialUI.a6fa14ae.chunk.js.map