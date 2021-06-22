(this["webpackJsonp@stateful/examples"]=this["webpackJsonp@stateful/examples"]||[]).push([[1],[,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(47),t),a(n(27),t)},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AllStatuses=t.Status=void 0,function(e){e.IDLE="idle",e.PENDING="pending",e.BUSY="busy",e.SUCCESS="success",e.ERROR="error",e.CONFIRM="confirm"}(r=t.Status||(t.Status={})),t.AllStatuses=[r.IDLE,r.PENDING,r.BUSY,r.SUCCESS,r.ERROR,r.CONFIRM]},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(11),a=n(13),s=(n(0),n(9)),o=n.n(s),i=(n(45),n(1)),u=Math.sqrt(3)/2,c=function(e){var t=e.className,n=e.size,r=void 0===n?100:n;function a(e){for(var t=e,n=e,r=[],a=0;a<7;a++)r.push({x:t+e*Math.sin(2*a*Math.PI/6),y:n+e*Math.cos(2*a*Math.PI/6)});return r.map((function(e){return"".concat(e.x,",").concat(e.y)})).join(" ")}return Object(i.jsx)("div",{className:o()("Hex",t),children:Object(i.jsxs)("svg",{width:r,height:r,style:{position:"relative",left:.5*-(r-r*u)},children:[Object(i.jsx)("polyline",{className:"border",points:a(r/2)}),Object(i.jsx)("polyline",{className:"fill",points:a(r/2*.8)})]})})},l=["animated","scale"];function d(e){var t=e.animated,n=void 0===t||t,s=e.scale,u=void 0===s?1:s,d=Object(a.a)(e,l);return Object(i.jsx)("div",Object(r.a)(Object(r.a)({},d),{},{className:o()("Logo",{animated:n}),children:Object(i.jsx)("div",{className:"Logo-outer",style:{transform:"scale(".concat(u,")")},children:Object(i.jsxs)("div",{className:"Logo-inner",children:[Object(i.jsx)(f,{className:"rotator-1",children:Object(i.jsx)(c,{size:50,className:"hex"})}),Object(i.jsx)(f,{className:"rotator-2",children:Object(i.jsx)(c,{size:50,className:"hex"})}),Object(i.jsx)(f,{className:"rotator-3",children:Object(i.jsx)(c,{size:50,className:"hex"})})]})})}))}function f(e){var t=e.children,n=e.className;return Object(i.jsx)("div",{className:o()("rotator",n),children:Object(i.jsx)("div",{className:"center-outer",children:Object(i.jsx)("div",{className:"center-inner",children:Object(i.jsx)("div",{className:"rotation rotation-outer",children:Object(i.jsx)("div",{className:"position",children:Object(i.jsx)("div",{className:"rotation rotation-inner",children:t})})})})})})}},,function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StatefulProvider=t.StatefulContext=t.StatefulConfigurationProvider=t.StatefulConfigurationContext=void 0;var a=r(n(0)),s=n(15);t.StatefulConfigurationContext=a.default.createContext({}),t.StatefulConfigurationProvider=t.StatefulConfigurationContext.Provider,t.StatefulConfigurationContext.displayName="StatefulConfigurationContext";var o=function(){return null};t.StatefulContext=a.default.createContext({status:s.Status.IDLE,additionalProps:{},handlers:{onConfirmShow:o,onConfirmApprove:o,onConfirmCancel:o,onPromise:o,onReject:o,onResolve:o},config:{}}),t.StatefulProvider=t.StatefulContext.Provider,t.StatefulContext.displayName="StatefulContext"},function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};function a(e){var t=e.value,n=e.status,s=e.childProps,o=e.delimiter,i=void 0===o?" ":o;return t?"function"===typeof t?a({value:t(n,s),status:n,childProps:s,delimiter:i}):"string"===typeof t?t.split(i):Array.isArray(t)?t.reduce((function(e,t){return r(r([],e),a({value:t,status:n,delimiter:i,childProps:s}))}),[]):[t]:[]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,a.simple=function(e,t){return void 0===t&&(t=" "),e?"string"===typeof e?e.split(t):e:[]}},,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Confirm=t.BusyConsumer=t.PendingConsumer=t.FinishedConsumer=t.ErrorConsumer=t.SuccessConsumer=t.IdleConsumer=t.StatefulGate=t.StatefulConsumer=t.Stateful=void 0;var o=s(n(0)),i=n(15),u=n(27),c=n(48),l=n(49),d={monitor:["onClick"],confirm:void 0,confirmProps:[],confirmClasses:void 0,confirmExit:"started",pendingProps:[],pendingClasses:[],busyProps:[],busyClasses:[],busyDelay:0,successProps:[],successClasses:[],successDuration:void 0,errorProps:[],errorClasses:[],errorDuration:void 0,hintDuration:1e3,delimiter:" ",shouldRejectValue:function(e){return e instanceof Error},provideProps:!0,provideContext:!0,disabled:!1},f=Object.keys(d);function m(e){var t=o.default.useContext(u.StatefulConfigurationContext),n=r(r(r({},d),t),e),s=n.children,i=a(n,["children"]),m=c.useStateful(i),p=m.status,h=m.handlers;return"function"===typeof s&&(s=s({status:p,handlers:h})),e.disabled?s:o.default.Children.map(s,(function(t){if(!o.default.isValidElement(t))return t;var n=l.createProps({child:t,config:i,status:p,handlers:h,parentProps:e,ownPropNames:f}),r=n.additionalProps,a=n.callbacks,s=n.otherProps,c=o.default.cloneElement(t,Object.assign({},s,a,i.provideProps?r:{}));return i.provideContext?o.default.createElement(u.StatefulProvider,{value:{status:p,config:i,additionalProps:r,handlers:h}},c):c}))}function p(e){var t=o.default.useContext(u.StatefulContext),n=t.status,a=t.config,s=r(r({},a),e);return o.default.Children.map(e.children,(function(t){if(!o.default.isValidElement(t))return t;var a=l.createProps({child:t,status:n,parentProps:e,config:s,ownPropNames:f}),i=a.additionalProps,u=a.otherProps;return o.default.cloneElement(t,r(r({},u),i))}))}function h(e){var t=o.default.useContext(u.StatefulContext).status;return e.allow===t||e.allow.includes(t)?e.children:null}function b(e){return o.default.createElement(h,r({},e,{allow:i.Status.IDLE}))}function v(e){return o.default.createElement(h,r({},e,{allow:i.Status.SUCCESS}))}function j(e){return o.default.createElement(h,r({},e,{allow:i.Status.ERROR}))}function O(e){return o.default.createElement(h,r({},e,{allow:[i.Status.SUCCESS,i.Status.ERROR]}))}function S(e){var t=e.exact,n=a(e,["exact"]);return o.default.createElement(h,r({},n,{allow:t?i.Status.PENDING:[i.Status.BUSY,i.Status.PENDING]}))}function C(e){var t=e.exact,n=a(e,["exact"]);return o.default.createElement(h,r({},n,{allow:t?i.Status.BUSY:[i.Status.BUSY,i.Status.PENDING]}))}function x(e){var t=e.confirm,n=void 0===t?"onConfirm":t,r=e.cancel,s=void 0===r?"onCancel":r,c=e.exit,l=a(e,["confirm","cancel","exit"]),d=o.default.useContext(u.StatefulContext),f=d.status,m=d.handlers,p=d.config;return function(e,t){var n=function(t){return t.some((function(t){return t===e}))};switch(t){case"started":return n([i.Status.CONFIRM]);case"finished":return n([i.Status.CONFIRM,i.Status.PENDING,i.Status.BUSY]);case"idle":return n([i.Status.CONFIRM,i.Status.PENDING,i.Status.BUSY,i.Status.SUCCESS,i.Status.ERROR]);default:return!1}}(f,c||p.confirmExit)?"function"===typeof l.children?l.children({onConfirm:m.onConfirmApprove,onCancel:m.onConfirmCancel}):o.default.Children.map(l.children,(function(e){var t;return o.default.isValidElement(e)?o.default.cloneElement(e,((t={})[n]=m.onConfirmApprove,t[s]=m.onConfirmCancel,t)):e})):null}t.Stateful=m,t.StatefulConsumer=p,t.StatefulGate=h,t.IdleConsumer=b,t.SuccessConsumer=v,t.ErrorConsumer=j,t.FinishedConsumer=O,t.PendingConsumer=S,t.BusyConsumer=C,t.Confirm=x,m.Consumer=p,m.IdleConsumer=b,m.SuccessConsumer=v,m.ErrorConsumer=j,m.FinishedConsumer=O,m.PendingConsumer=S,m.BusyConsumer=C,m.Confirm=x},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useStateful=t.useTimeout=void 0;var a=r(n(0)),s=n(15);function o(e,t){void 0===t&&(t=0);var n=a.default.useState(!1),r=n[0],s=n[1];return a.default.useEffect((function(){if(r){var n=window.setTimeout(e,t);return function(){window.clearTimeout(n)}}}),[r]),{clear:function(){return s(!1)},start:function(){return s(!0)}}}t.useTimeout=o,t.useStateful=function(e){var t,n=a.default.useRef(!1),r=a.default.useRef(!1),i=a.default.useState(s.Status.IDLE),u=i[0],c=i[1],l=a.default.useRef(null),d=((t={})[s.Status.SUCCESS]=e.successDuration||e.hintDuration,t[s.Status.ERROR]=e.errorDuration||e.hintDuration,t),f=a.default.useCallback((function(){return c(s.Status.BUSY)}),[]),m=a.default.useCallback((function(){return c(s.Status.IDLE)}),[]),p=o(f,e.busyDelay),h=o(m,d[u]||e.hintDuration);a.default.useEffect((function(){return n.current=!0,function(){h.clear(),p.clear(),n.current=!1}}),[n]);var b={onPromise:function(){n.current&&(r.current=!1,c(s.Status.PENDING),h.clear(),p.start())},onReject:function(e){n.current&&(r.current=!0,c(s.Status.ERROR),p.clear(),Number(d[s.Status.ERROR])>-1&&h.start())},onResolve:function(t){var a;r.current||!0===(null===(a=e.shouldRejectValue)||void 0===a?void 0:a.call(e,t))?b.onReject(t):n.current&&(c(s.Status.SUCCESS),p.clear(),Number(d[s.Status.SUCCESS])>-1&&h.start())},onConfirmShow:function(e){u===s.Status.CONFIRM?(l.current(),l.current=null,b.onPromise()):(l.current=e,c(s.Status.CONFIRM),h.clear(),p.clear())},onConfirmCancel:function(){l.current=null,c(s.Status.IDLE)},onConfirmApprove:function(){l.current(),l.current=null,b.onPromise()}};return{status:u,handlers:b}}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createProps=t.omitProps=void 0;var o=s(n(9)),i=n(15),u=s(n(28)),c=s(n(50));function l(e,t){return void 0===t&&(t=[]),Object.keys(e).reduce((function(n,r){return t.includes(r)||(n[r]=e[r]),n}),{})}function d(e){var t=e.valueMap,n=e.status,a=e.delimiter,s=e.childProps,o=void 0===s?{}:s,i=t[n];if("function"===typeof i)return i(n,o);if("string"===typeof i||Array.isArray(i)){var c=u.default({value:i,status:n,delimiter:a,childProps:o});return c?c.reduce((function(e,t){var a;if("function"===typeof t)return r(r({},e),t(n,o));if(Object(t)===t)return r(r({},e),t);var s=t.split(":"),i=s[0],u=s[1],c=void 0===u||u;return r(r({},e),((a={})[i]=c,a))}),{}):{}}return Object(i)===i?i:(i&&console.warn("[Stateful] resolveProps - unhandled value type",i),{})}function f(e){var t=e.childProps,n=e.status,r=e.config;if(n===i.Status.IDLE)return t.className;var s;return o.default((void 0===(s=t.className)&&(s=""),i.AllStatuses.reduce((function(e,t){return e.replace(t,"")}),s).trim()),function(e){var t,n=e.status,r=e.config,s=e.childProps;return d({valueMap:((t={})[i.Status.IDLE]=void 0,t[i.Status.PENDING]=r.pendingClasses,t[i.Status.BUSY]=a(a([],u.default({value:r.pendingClasses,status:n,delimiter:r.delimiter,childProps:s})),u.default({value:r.busyClasses,status:n,delimiter:r.delimiter,childProps:s})),t[i.Status.SUCCESS]=r.successClasses,t[i.Status.ERROR]=r.errorClasses,t[i.Status.CONFIRM]=r.confirmClasses,t),status:n,delimiter:r.delimiter})}({status:n,config:r,childProps:t}))}t.omitProps=l,t.createProps=function(e){var t=e.status,n=e.config,s=e.ownPropNames,o=Object.assign({},e.child?e.child.props:{},e.parentProps);return{additionalProps:r({className:f({config:n,status:t,childProps:o})},function(e){var t,n=e.status,r=e.config,s=e.childProps;return d({valueMap:((t={})[i.Status.IDLE]=void 0,t[i.Status.PENDING]=r.pendingProps,t[i.Status.BUSY]=a(a([],u.default({value:r.pendingProps,status:n,delimiter:r.delimiter,childProps:s})),u.default({value:r.busyProps,status:n,delimiter:r.delimiter,childProps:s})),t[i.Status.SUCCESS]=r.successProps,t[i.Status.ERROR]=r.errorProps,t[i.Status.CONFIRM]=r.confirmProps,t),status:n,delimiter:r.delimiter,childProps:s})}({status:t,config:n,childProps:o})),otherProps:function(e){var t=e.childProps,n=e.status,r=e.config,s=e.ownPropNames,o=void 0===s?[]:s,i=u.default({value:r.monitor,delimiter:r.delimiter,childProps:t,status:n}),c=u.default({value:"boolean"===typeof r.confirm?void 0:r.confirm,delimiter:r.delimiter,childProps:t,status:n}),d=Array.from(new Set(a(a(a(["children"],i),c),o)));return l(t,d)}({childProps:o,status:t,config:n,ownPropNames:s}),callbacks:e.handlers?c.default({childProps:o,monitor:n.monitor,confirm:n.confirm,handlers:e.handlers,delimiter:n.delimiter,promisesOnly:n.promisesOnly}):{}}}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{u(r.next(e))}catch(t){s(t)}}function i(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,s,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(i){s=[6,i],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(51)),i=s(n(28));t.default=function(e){if(!e.monitor)return{};function t(n){return r(this,void 0,void 0,(function(){var r,s,i,u,c,l,d;return a(this,(function(a){switch(a.label){case 0:if(r=n.callback,s=n.callbackName,i=n.callbackArgs,!n.isConfirmed&&function(e,t){var n;if(!t.confirm)return!1;if("boolean"===typeof t.confirm)return null===(n=t.monitor)||void 0===n?void 0:n.includes(e);return t.confirm.includes(e)}(s,e))return u=function(){t({isConfirmed:!0,callback:r,callbackName:s,callbackArgs:i})},e.handlers.onConfirmShow(u),[2];if(e.promisesOnly)return l=r.apply(void 0,i),o.default(l)&&(e.handlers.onPromise(),(c=l).catch(e.handlers.onReject),c.then(e.handlers.onResolve)),[2];e.handlers.onPromise(),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,r.apply(void 0,i)];case 2:return l=a.sent(),e.handlers.onResolve(l),[3,4];case 3:return d=a.sent(),e.handlers.onReject(d),[3,4];case 4:return[2]}}))}))}return i.default.simple(e.monitor,e.delimiter).reduce((function(n,r){var a=e.childProps[r];return"function"===typeof a&&(n[r]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t({callback:a,callbackName:r,callbackArgs:e})}),n}),{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return!(!e||"function"!==typeof e.then)}},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(26),o=n.n(s),i=(n(39),n(10)),u=n(9),c=n.n(u),l=n(30),d=n(8),f=n(3),m=n(1);function p(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"@loopmode/stateful v2"}),Object(m.jsx)("h3",{children:"Some usage examples"}),Object(m.jsx)("p",{children:"Use the menu on the left side to check out some examples."})]})}n(43),n(44);var h=n(25);var b=function(e){var t=e.delay,n=void 0===t?500:t,r=a.a.useState(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a.a.useState(!1),r=Object(i.a)(n,2),s=r[0],o=r[1];a.a.useEffect((function(){if(s){var n=window.setTimeout(e,t);return function(){window.clearTimeout(n)}}}),[t,e,s]);var u=a.a.useCallback((function(){return o(!1)}),[]),c=a.a.useCallback((function(){return o(!0)}),[]);return{clearTimer:u,startTimer:c}}(a.a.useCallback((function(){return u(!0)}),[]),n),d=l.clearTimer,f=l.startTimer;return a.a.useEffect((function(){return f(),function(){return d()}}),[d,f]),Object(m.jsx)("div",{className:c()("LoadingOverlay",{visible:o}),children:Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{scale:.5})})})};function v(e){var t=a.a.useState(!1),n=Object(i.a)(t,2),r=n[0],s=n[1],o=a.a.useCallback((function(){return s(!0)}),[]);return a.a.useEffect((function(){var t=document.createElement("link");return t.addEventListener("load",o),t.type="text/css",t.rel="stylesheet",t.href=e,document.head.appendChild(t),function(){t.removeEventListener("load",o),document.head.removeChild(t)}}),[o,e]),{stylesLoaded:r}}function j(e){var t=function(e){var t=a.a.useState(!1),n=Object(i.a)(t,2),r=n[0],s=n[1],o=a.a.useCallback((function(){return s(!0)}),[]);return a.a.useEffect((function(){var t=document.createElement("script");return t.addEventListener("load",o),t.src=e,document.head.appendChild(t),function(){t.removeEventListener("load",o),document.head.removeChild(t)}}),[o,e]),{scriptLoaded:r}}("https://use.fontawesome.com/releases/v5.14.0/js/all.js").scriptLoaded,r=v("https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.css").stylesLoaded;return a.a.useEffect((function(){var e=n(34);return n(46),e.plugins.customClass.map({number:"prism-number",tag:"prism-tag"}),function(){e.plugins.customClass.map({number:"number",tag:"tag"})}}),[]),r&&t?e.children:Object(m.jsx)(b,{delay:0})}var O=n(11),S=n(13),C=n(14),x=["children"];function P(e){var t=e.children,n=Object(S.a)(e,x);return Object(m.jsx)(C.StatefulConfigurationProvider,{value:Object(O.a)({pendingProps:"disabled",pendingClasses:"",busyDelay:0,busyProps:"disabled",busyClasses:"is-loading",successClasses:"is-success",successDuration:1e3,errorClasses:"is-danger",errorDuration:2e3},n),children:t})}var y=["children"];function g(e){var t=e.children,n=Object(S.a)(e,y);return Object(m.jsx)(C.StatefulConfigurationProvider,{value:Object(O.a)({pendingProps:function(e,t){return{children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ",t.children]}),disabled:!0}},successClasses:"btn-success",successDuration:1e3,errorClasses:"btn-danger",errorDuration:2e3},n),children:t})}function E(e){return v("https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css").stylesLoaded?e.children:Object(m.jsx)(b,{delay:0})}var N=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,302))})),_=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,301))}));var R=function(){var e=a.a.useState(!1),t=Object(i.a)(e,2),s=t[0],o=t[1],u=a.a.useCallback((function(){return o(!0)}),[]),h=a.a.useCallback((function(){return o(!1)}),[]);return Object(m.jsx)(l.a,{children:Object(m.jsx)(a.a.Suspense,{fallback:Object(m.jsx)(b,{}),children:Object(m.jsx)(d.a,{basename:"/",children:Object(m.jsxs)("div",{className:c()("App"),children:[Object(m.jsx)(N,{onShowMenu:u}),Object(m.jsxs)("div",{className:"App--body",children:[Object(m.jsxs)(_,{onHideMenu:h,mobileMenuVisible:s,children:[Object(m.jsx)("h4",{children:"Bulma"}),Object(m.jsx)(d.c,{to:"/bulma/config-provider",children:"Config provider"}),Object(m.jsx)(d.c,{to:"/bulma/button-inline",children:"Button inline"}),Object(m.jsx)(d.c,{to:"/bulma/button-component",children:"Button component"}),Object(m.jsx)(d.c,{to:"/bulma/button-sticky",children:"Button sticky"}),Object(m.jsx)(d.c,{to:"/bulma/form-context",children:"Form"}),Object(m.jsx)(d.c,{to:"/bulma/react-hook-form-crud",children:"CRUD"}),Object(m.jsx)(d.c,{to:"/bulma/state-consumers",children:"State consumers"}),Object(m.jsx)(d.c,{to:"/bulma/confirm",children:"Confirmation"}),Object(m.jsx)("h4",{children:"Bootstrap"}),Object(m.jsx)(d.c,{to:"/bootstrap/button-inline",children:"Button inline"})]}),Object(m.jsx)("main",{children:Object(m.jsxs)(a.a.Suspense,{fallback:Object(m.jsx)(b,{}),children:[Object(m.jsx)(f.b,{path:"/",exact:!0,component:p}),Object(m.jsx)(f.b,{path:"/bulma",children:Object(m.jsx)(P,{children:Object(m.jsxs)(j,{children:[Object(m.jsx)(f.b,{path:"/bulma/button-inline",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,291))}))}),Object(m.jsx)(f.b,{path:"/bulma/button-component",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,292))}))}),Object(m.jsx)(f.b,{path:"/bulma/button-sticky",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,293))}))}),Object(m.jsx)(f.b,{path:"/bulma/form-context",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,294))}))}),Object(m.jsx)(f.b,{path:"/bulma/react-hook-form-crud",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(14)]).then(n.bind(null,295))}))}),Object(m.jsx)(f.b,{path:"/bulma/state-consumers",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,296))}))}),Object(m.jsx)(f.b,{path:"/bulma/config-provider",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,297))}))}),Object(m.jsx)(f.b,{path:"/bulma/confirm",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,298))}))})]})})}),Object(m.jsx)(f.b,{path:"/bootstrap",children:Object(m.jsx)(g,{children:Object(m.jsx)(E,{children:Object(m.jsx)(f.b,{path:"/bootstrap/button-inline",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,299))}))})})})})]})})]})]})})})})},w=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),w()}],[[54,2,3]]]);
//# sourceMappingURL=main.889814a0.chunk.js.map