(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},163:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var n=l(a(0)),r=l(a(82));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(){return{children:"Loading...",disabled:!0}},u=function(){return{variant:"success"}},c=function(){return{variant:"danger"}},i=function(e){return n.default.createElement(r.default,o({pendingClasses:null,successClasses:null,errorClasses:null,pendingProps:s,busyProps:s,successProps:u,errorProps:c},e))};t.StatefulButton=i;var p=i;t.default=p},248:function(e,t,a){e.exports={Markdown:"_3HAAgi00lfs4qIw3St0ANt"}},249:function(e,t,a){e.exports={NavMenu:"_2ECyVSrwbRzkTss6vGeBm3"}},250:function(e,t,a){e.exports={NavIcon:"_3E75T383IyK2saqP3GVemN"}},251:function(e,t,a){e.exports={AppHeader:"_1X_Yk9kdXjWydUczyXrz6q"}},252:function(e,t,a){e.exports={VanillaExample:"ShIoj2UOXVrGKHEoOsAI5"}},273:function(e,t,a){e.exports={AntDExample:"_244PeBoteqgqFskxWHGkv-"}},280:function(e,t,a){e.exports={App:"_3jQ0wgPc3Hj0LizMGGPFst"}},294:function(e,t,a){e.exports=a(616)},299:function(e,t,a){},360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(0);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(u){r=!0,l=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=r((0,n.useState)(!1),2),l=a[0],o=a[1];return(0,n.useEffect)(function(){if(l){var a=window.setTimeout(e,t);return function(){window.clearTimeout(a)}}},[l]),{clear:function(){return o(!1)},start:function(){return o(!0)}}};t.default=l},361:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.useEffect)(function(){return"function"===typeof e&&e()},[])};var n=a(0)},362:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.useEffect)(function(){return e},[])};var n=a(0)},363:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,l){var o=a.onPromise,s=a.onResolve,u=a.onReject;if(!t)return{};return(0,r.default)(t,l).reduce(function(t,a){var r=e[a];return"function"===typeof r&&(t[a]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var l=e.apply(void 0,a),c=(0,n.default)(l);c&&(c.catch(u),c.then(s),o(c))}.apply(void 0,[r].concat(t))}),t},{})};var n=l(a(364)),r=l(a(123));function l(e){return e&&e.__esModule?e:{default:e}}},364:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},365:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var a;return s((o(a={},r.PENDING,t.pendingClasses),o(a,r.BUSY,t.busyClasses),o(a,r.SUCCESS,t.successClasses),o(a,r.ERROR,t.errorClasses),a),e,t.delimiter)},t.createStatusProps=function(e,t){var a;return s((o(a={},r.PENDING,t.pendingProps),o(a,r.BUSY,t.busyProps),o(a,r.SUCCESS,t.successProps),o(a,r.ERROR,t.errorProps),a),e,t.delimiter)},t.createProps=s,t.createFlags=u,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(a,n){return t.includes(n)||(a[n]=e[n]),a},{})};var n,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(122)),l=(n=a(123))&&n.__esModule?n:{default:n};function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t,a){var n=e[t];return"function"===typeof n?n(t):u(n,a)}function u(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=(0,l.default)(e,t);return n?n.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){o(e,t,a[t])})}return e}({},e,o({},t,a))},{}):{}}},616:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),s=(a(299),a(282)),u=a(5),c=a.n(u),i=a(634),p=a(636),m=a(618),d=a(62),f=a(247),h=a.n(f),b=a(248),E=a.n(b),g=function(e){var t=e.className,a=Object(d.a)(e,["className"]);return r.a.createElement("div",{className:c()("Markdown",E.a.Markdown,t)},r.a.createElement(h.a,a))},y=a(249),v=a.n(y),w=a(117),S=a(250),P=a.n(S),k=function(e){var t=e.icon,a=e.className,n=Object(d.a)(e,["icon","className"]);return r.a.createElement(t,Object.assign({className:c()("NavIcon",a,P.a.NavIcon)},n))};var C=function(e){var t=Object(n.useRef)();return function(e){var t=function(t){e.current&&e.current===t.target&&t.preventDefault()};Object(n.useEffect)(function(){return document.addEventListener("touchmove",t,{passive:!1}),function(){document.removeEventListener("touchmove",t,{passive:!1})}})}(t),r.a.createElement("div",{ref:t,className:c()("NavMenu",e.className,v.a.NavMenu)},r.a.createElement("div",{className:"hide-mobile-menu",onClick:function(t){t.preventDefault(),e.onClose(t)}},r.a.createElement(k,{icon:w.a,className:"hide-menu-icon"}),r.a.createElement("div",null,"CLOSE MENU")),e.children)},O=a(251),j=a.n(O),N=function(e){var t=e.onShowMenu,a=e.className;return r.a.createElement("header",{className:c()("AppHeader",a,j.a.AppHeader)},r.a.createElement("div",{className:"title"},r.a.createElement(k,{className:"show-mobile-menu only-small-screen",icon:w.b,onClick:function(e){e.preventDefault(),t()}}),"@loopmode/stateful"),r.a.createElement("div",{className:"info"},"React helper for async buttons"))},_=a(252),x=a.n(_),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Vanilla example"),r.a.createElement("p",null,"This example doesn't use any UI frameworks, but some simple CSS rules instead. It uses the default wrapper:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful';")),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/vanilla/VanillaExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles"))),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"pending")," and ",r.a.createElement("code",null,"busy")," CSS classes have rules to display a little animation based on"," ",r.a.createElement("a",{href:"https://codepen.io/seansean11/pen/dhwzj",target:"_blank",rel:"noopener noreferrer"},"this codepen"),", while ",r.a.createElement("code",null,"success")," and ",r.a.createElement("code",null,"error")," just give it green or red background."))},M=a(65),I=a.n(M);function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,a=void 0===t?.5:t,n=e.min,r=void 0===n?100:n,l=e.max,o=void 0===l?2e3:l,s=Math.floor(r+Math.random()*(o-r)),u=Math.random()>a;return console.log("dummyCall -> will ".concat(u?"fail":"succeed"," in ").concat(s,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(u?"fail":"success")),u?t({status:400}):e({status:200})},s)})}var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"push"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(I.a,{hintDuration:2e3},r.a.createElement("button",{onClick:function(){return T({min:500,max:3e3})}},"Do something")),r.a.createElement(I.a,null,r.a.createElement("button",{onClick:function(){return T({min:500,max:3e3})}},"Do something")),r.a.createElement(I.a,null,r.a.createElement("button",{onClick:function(){return T({min:500,max:3e3})}},"Do something")))},F=function(){return r.a.createElement("div",{className:c()("VanillaExample",x.a.VanillaExample)},r.a.createElement(D,null),r.a.createElement(A,null))},R=(a(366),a(635)),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Semantic UI"),r.a.createElement("p",null,"Semantic UI is mostly supported out of the box, as it's capable to display the pending, success and error states by merely setting boolean flags on its components."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement("div",null,"The default ",r.a.createElement("code",null,"semantic-ui-react")," wrapper can be used via:",r.a.createElement(R.a,null,r.a.createElement("code",null,"import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';")),"It provides ",r.a.createElement("code",null,"loading"),", ",r.a.createElement("code",null,"positive")," and"," ",r.a.createElement("code",null,"negative")," flags to the wrapped component - which is understood by at least the ",r.a.createElement("code",null,"Button")," component."))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Forms"),r.a.createElement("p",null,"Semantic UI forms are supported out of the box as well. While there is an apparent naming inconsistency with the success and error props (they are actually called ",r.a.createElement("code",null,"success")," and"," ",r.a.createElement("code",null,"error")," in the ",r.a.createElement("code",null,"Form")," component, while they are called ",r.a.createElement("code",null,"positive")," and ",r.a.createElement("code",null,"negative")," in the"," ",r.a.createElement("code",null,"Button")," component) the form does support such props as well as a ",r.a.createElement("code",null,"loading")," one."),r.a.createElement("div",null,r.a.createElement("p",null,"The ",r.a.createElement("code",null,"semantic-ui-react")," form wrapper can be used via:"),r.a.createElement(R.a,null,r.a.createElement("code",null,"import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';")),"It provides ",r.a.createElement("code",null,"loading"),", ",r.a.createElement("code",null,"success")," and"," ",r.a.createElement("code",null,"error")," flags to the wrapped component. Note that this also triggers ",r.a.createElement("code",null,"<Message success>")," and"," ",r.a.createElement("code",null,"<Message error>")," visibility."),r.a.createElement("i",{className:"push"},"Submit the form below. You don't need to fill in anything, the input fields are actually ignored. ",r.a.createElement("br",null)," The example uses"," ",r.a.createElement("code",null,"hintDuration=",5e3),", meaning it will remain in success or error state for 5 seconds."))},H=a(633),Y=a(66),W=a.n(Y),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(U,null),r.a.createElement(W.a,null,r.a.createElement(H.a,{icon:"undo",onClick:T})),r.a.createElement(W.a,null,r.a.createElement(H.a,{icon:"upload",content:"Upload",labelPosition:"left",onClick:T})),r.a.createElement(W.a,{busyDelay:1e3},r.a.createElement(H.a,{onClick:T},"With 1s busy delay")))},V=a(629),q=a(632),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(Y.StatefulForm,null,r.a.createElement(V.a,{onSubmit:T},r.a.createElement(q.a,{success:!0,header:"Form Completed",content:"You're all signed up for the newsletter"}),r.a.createElement(q.a,{error:!0,header:"Something went wrong",content:"An unexpected error occurred. Please try again."}),r.a.createElement(V.a.Field,{inline:!0},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{placeholder:"First Name"})),r.a.createElement(V.a.Field,{inline:!0},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{placeholder:"Last Name"})),r.a.createElement(H.a,{type:"submit"},"Log in"))))},X=function(){return r.a.createElement("div",{className:"SemanticUIExample"},r.a.createElement(B,null),r.a.createElement(z,null),r.a.createElement("div",{className:"push"}),r.a.createElement(J,null))},K=(a(490),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Material UI"),r.a.createElement("p",null,"While there is a nice loading animation when using Material UI (",r.a.createElement("a",{href:"https://material-ui.com/demos/progress/",target:"_blank",rel:"noopener noreferrer"},"Progress"),"), there is no easy way to just pass a prop to a button and be done with it. You still need to create a construct that displays the"," ",r.a.createElement("code",null,"Progress")," component conditionally, you have to take care of the layout etc."),r.a.createElement("p",null,"However, that is a typical problem that you will probably have solved already, if you're working with Material UI on a large-ish application."),r.a.createElement("p",null,"For that reason, there is no default wrapper for Material UI. Instead, have a look at the code of this example for a possible approach (see links below)."),r.a.createElement("p",null,"Basically, the trick is to create a component that wraps a"," ",r.a.createElement("code",null,"Button"),", accepts some properties like `success`, `error` and `loading`, and renders the button accordingly - adding a"," ",r.a.createElement("code",null,"Progress")," when needed. That's exactly what I did here, based on this"," ",r.a.createElement("a",{href:"https://material-ui.com/demos/progress/#interactive-integration",target:"_blank",rel:"noreferrer noopener"},"official example")," ","and without any prior experience with Material UI."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/ProgressButton.js",target:"_blank",rel:"noopener noreferrer"},"Custom ProgressButton")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/Stateful.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))}),Q=a(113),Z=a(162),$=a(119),ee=a.n($),te=a(112),ae=a.n(te),ne=a(269),re=a.n(ne),le=a(271),oe=a.n(le),se=Object(Q.withStyles)(function(){return{wrapper:{display:"inline-block",position:"relative"},success:{backgroundColor:ee.a[500],"&:hover":{backgroundColor:ee.a[700]}},error:{backgroundColor:ae.a[500],"&:hover":{backgroundColor:ae.a[700]}},progress:{color:ee.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-8,marginLeft:-8}}})(function(e){var t,a=e.className,n=e.classes,l=e.loading,o=e.success,s=e.error,u=Object(d.a)(e,["className","classes","loading","success","error"]),i=c()(a,(t={},Object(Z.a)(t,n.success,o),Object(Z.a)(t,n.error,s),t));return r.a.createElement("div",{className:c()("ProgressButton",n.wrapper)},r.a.createElement(re.a,Object.assign({className:i,disabled:l},u),e.children),l&&r.a.createElement(oe.a,{size:16,className:n.progress}))}),ue=function(e){return r.a.createElement(I.a,Object.assign({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled loading",busyProps:"disabled loading",successProps:"success",errorProps:"error"},e))};var ce=Object(Q.withStyles)(function(e){return{button:{margin:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(ue,null,r.a.createElement(se,{variant:"contained",className:t.button,onClick:T},"Default")),r.a.createElement(ue,null,r.a.createElement(se,{variant:"contained",color:"primary",className:t.button,onClick:T},"Primary")),r.a.createElement(ue,null,r.a.createElement(se,{variant:"contained",color:"secondary",className:t.button,onClick:T},"Secondary")))}),ie=function(){return r.a.createElement("div",{className:"MaterialUIExample"},r.a.createElement(K,null),r.a.createElement(ce,null))},pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Bootstrap"),r.a.createElement("p",null,"Unfortunately, ",r.a.createElement("code",null,"react-bootstrap")," does not provide any sophisticated loading states or animations, so besides indicating success or danger, we need to perform some tricks for the loading state."),r.a.createElement("p",null,"As suggested by the official documentation, the default wrapper replaces the ",r.a.createElement("code",null,"children"),' property of the wrapped component and displays a "Loading..." string while pending or busy.'),r.a.createElement("p",null,"If you need to change that text or localize it, simply create a custom wrapper and provide the ",r.a.createElement("code",null,"pendingProps")," and"," ",r.a.createElement("code",null,"busyProps")," in a similar fashion to how how the"," ",r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"default")," ","does it."),r.a.createElement("p",null,"The default ",r.a.createElement("code",null,"react-bootstrap")," wrapper can be used via:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';")),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},me=a(631),de=a(163),fe=a.n(de),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement(U,null),r.a.createElement(fe.a,null,r.a.createElement(me.a,{onClick:T},"Load")),r.a.createElement(fe.a,null,r.a.createElement(me.a,{onClick:T},"Save")))},be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossOrigin:"anonymous"}),r.a.createElement("div",{className:"BootstrapExample"},r.a.createElement(pe,null),r.a.createElement(he,null)))},Ee=(a(565),a(273)),ge=a.n(Ee),ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"AntD"),r.a.createElement("p",null,"AntD can't be fully supported out of the box because its buttons do not support any kind of success state, so you'll have to define some CSS for it yourself. Other than that, its buttons do support a loading flag and display an animated spinner, which is great."),r.a.createElement("p",null,"The default ",r.a.createElement("code",null,"antd")," wrapper can be used via:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful/lib/wrappers/antd';")),r.a.createElement("p",null,"AntD already has ",r.a.createElement("code",null,"loading")," and ",r.a.createElement("code",null,"danger")," ","support, but it has no default ",r.a.createElement("code",null,"success")," handling."),r.a.createElement("p",null,"For that reason, the default wrapper just adds a",r.a.createElement("code",null,"success")," ","CSS class, but you are still responsible for defining a CSS rule for that class."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},ve=a(630),we=a(77),Se=a.n(we),Pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement(U,null),r.a.createElement(Se.a,null,r.a.createElement(ve.a,{onClick:T,type:"primary"},"Primary")),r.a.createElement(Se.a,null,r.a.createElement(ve.a,{onClick:T},"Default")),r.a.createElement(Se.a,null,r.a.createElement(ve.a,{onClick:T,type:"dashed"},"Dashed")),r.a.createElement(Se.a,null,r.a.createElement(ve.a,{onClick:T,type:"danger"},"Danger")))},ke=function(){return r.a.createElement("div",{className:c()("AntDExample",ge.a.AntDExample)},r.a.createElement(ye,null),r.a.createElement(Pe,null))},Ce=a(280),Oe=a.n(Ce),je=function(e){var t=e.onHideMenu;return r.a.createElement(C,{className:"AppMenu",onClose:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.a,{onClick:t,to:"/",exact:!0},"Overview")),r.a.createElement("li",null,r.a.createElement(p.a,{onClick:t,to:"/vanilla"},"Vanilla example")),r.a.createElement("li",null,r.a.createElement(p.a,{onClick:t,to:"/semantic-ui"},"Semantic UI example")),r.a.createElement("li",null,r.a.createElement(p.a,{onClick:t,to:"/antd"},"AntD example")),r.a.createElement("li",null,r.a.createElement(p.a,{onClick:t,to:"/bootstrap"},"Bootstrap example")),r.a.createElement("li",null,r.a.createElement(p.a,{onClick:t,to:"/material-ui"},"Material UI example"))))},Ne=function(e){return r.a.createElement(g,Object.assign({},e,{className:"Readme",source:"# @loopmode/stateful\n\nA react component for visual indication of async state.\n\nThis component is meant as an unobtrusive, opt-in helper that doesn't require significant changes in your code.\nThe idea is that you simply wrap it around an existing component in your JSX, without changing or adding any props, and the rest should \"just work\".\n\n![success gif](https://github.com/loopmode/stateful/raw/master/stateful-success.gif 'Example of loading and success indication')\n![error gif](https://github.com/loopmode/stateful/raw/master/stateful-error.gif 'Example of loading and error indication')\n\n## Installation\n\nUsing npm:\n\n```\nnpm install --save @loopmode/stateful\n```\n\nUsing yarn:\n\n```\nyarn add @loopmode/stateful\n```\n\n## Usage\n\n```\nimport Stateful from '@loopmode/stateful';\n\n...\n    <Stateful>\n        <button onClick={somePromiseHandler}>load</button>\n    </Stateful>\n...\n```\n\n## Supported props\n\n| Prop           | Type     | Default                       | Description                                                                                             |\n| -------------- | -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |\n| callbacks      | PolyType | `['onClick', 'onTouchStart']` | Names of callbacks to intercept and check for promises                                                  |\n| pendingProps   | PolyType | `['disabled']`                | Names of props to add for `Status.PENDING`                                                              |\n| pendingClasses | PolyType | `[]`                          | Names of CSS classes to add for `Status.PENDING`                                                        |\n| busyProps      | PolyType | `['disabled']`                | Names of props to add for `Status.BUSY`                                                                 |\n| busyClasses    | PolyType | `[]`                          | Names of CSS classes to add for `Status.BUSY`                                                           |\n| errorProps     | PolyType | `[]`                          | Names of props to add for `Status.ERROR`                                                                |\n| errorClasses   | PolyType | `['error']`                   | Names of CSS classes to add for `Status.ERROR`                                                          |\n| successProps   | PolyType | `[]`                          | Names of props to add for `Status.SUCCESS`                                                              |\n| successClasses | PolyType | `['success']`                 | Names of CSS classes to add for `Status.SUCCESS`                                                        |\n| hintDuration   | Number   | `1000`                        | Duration in milliseconds for `Status.SUCCESS` and `Status.ERROR` before returning to the default status |\n| busyDelay      | Number   | `0`                           | Duration in milliseconds to wait after `Status.PENDING` and before `Status.BUSY`                        |\n| delimiter      | String   | `' '`                         | Delimiter for splitting `PolyType` props of type `String` into multiple values                          |\n\n## \"PolyType\" props\n\nThe term \"PolyType\" isn't the latest thing, it's just something made up for the sakes of this documentation. It means that the prop value can be one of three types:\n\n```\nconst PolyType = PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.arrayOf(PropTypes.string),\n    PropTypes.func\n]);\n```\n\n**String**\n\nIn most cases, you can stick with the `String` type. It supports both single and multiple values, but in a primitive type that works well with pure components.\nSingle values are typed as a simple string, while multiple values are delimiter-separated strings. The default delimiter is a space (``), but you can change that using the `delimiter` prop.\n\n```\n<Stateful pendingProps=\"disabled\" />\n<Stateful pendingProps=\"disabled pending\" />\n<Stateful pendingProps=\"disabled,pending\" delimiter=\",\" />\n```\n\n**Array**\n\nIn some cases, it might be preferrable to provide the props as an array. While this interferes with rendering of pure components when typed inline, in many cases you do have an array that you can pass on directly.\n\n```\n<Stateful pendingProps={['disabled']} />\n<Stateful pendingProps={['disabled', 'pending']} />\n<Stateful pendingProps={myPropsArray} />\n```\n\n**Function**\n\nSometimes, the component you need to wrap just doesn't support a simple boolean flag to get the job done. For example, `react-bootstraps` wants to receive `variant=\"success\"` or `variant=\"danger\"` - the same prop, but with a different value.\nIn these cases, you can provide a function that receives the current `status` and returns an object with as many properties and values as needed.\n\n```\n<Stateful\n    pendingProps={() => ({status: 'pending'})}\n    successProps={() => ({status: 'success'})}\n />\n<Stateful pendingProps={status => {\n    console.log({ status });\n    return {\n        status,\n        foo: 'bar',\n        bar: 'baz\n    }\n}} />\n```\n\n## Usage with UI libraries and frameworks\n\nMost UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.\nWhile `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.\n(Suggestions and especially pull requests for more support are highly welcome!)\n\nTo use the pre-configured wrapper components, you should import them specifically from `lib/wrapper`.\nIdeally, you would do this only once for the local `Stateful` component of a project, configure it there, and import that one across your codebase.\n\n| name        | examples                                                    | implementation                                                                                                            | usage                                                                 |\n| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |\n| antd        | [example](http://loopmode.github.io/stateful/#/antd)        | [wrappers/antd.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js)               | `import Stateful from '@loopmode/stateful/lib/wrappers/antd';`        |\n| bootstrap   | [example](http://loopmode.github.io/stateful/#/bootstrap)   | [wrappers/bootstrap.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js)     | `import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';`   |\n| semantic-ui | [example](http://loopmode.github.io/stateful/#/semantic-ui) | [wrappers/semantic-ui.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js) | `import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';` |\n| material-ui | [example](http://loopmode.github.io/stateful/#/material-ui) | -                                                                                                                         | -                                                                     |\n",options:{html:!0}}))},_e=function(){return r.a.createElement("div",{className:"AppContent"},r.a.createElement(m.a,{exact:!0,path:"/",component:Ne}),r.a.createElement(m.a,{path:"/vanilla",component:F}),r.a.createElement(m.a,{path:"/semantic-ui",component:X}),r.a.createElement(m.a,{path:"/antd",component:ke}),r.a.createElement(m.a,{path:"/bootstrap",component:be}),r.a.createElement(m.a,{path:"/material-ui",component:ie}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement(i.a,{basename:"/stateful"},r.a.createElement("div",{className:c()("App",Oe.a.App,{showMobileMenu:a})},r.a.createElement(N,{onShowMenu:function(){return l(!0)}}),r.a.createElement("div",{className:"AppBody"},r.a.createElement(je,{onHideMenu:function(){return l(!1)}}),r.a.createElement(_e,null))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}}),t.Status=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(122));t.Status=n;var r,l=(r=a(82))&&r.__esModule?r:{default:r}},66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulForm=t.StatefulButton=void 0;var n=l(a(0)),r=l(a(82));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(e){return n.default.createElement(r.default,o({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"positive",errorProps:"negative"},e))};t.StatefulButton=s;t.StatefulForm=function(e){return n.default.createElement(r.default,o({callbacks:"onSubmit",pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"success",errorProps:"error",hintDuration:5e3},e))};var u=s;t.default=u},77:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var n=l(a(0)),r=l(a(82));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(){return{type:"danger"}},u=function(e){return n.default.createElement(r.default,o({pendingClasses:null,busyClasses:null,successClasses:"success",errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:null,errorProps:s},e))};t.StatefulButton=u;var c=u;t.default=c},82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),r=d(a(3)),l=d(a(5)),o=d(a(360)),s=d(a(361)),u=d(a(362)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(122)),i=d(a(123)),p=d(a(363)),m=a(365);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){h(e,t,a[t])})}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(u){r=!0,l=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=r.default.oneOfType([r.default.func,r.default.string,r.default.arrayOf(r.default.string)]);function y(e){var t=n.default.useRef(),a=function(e){return function(){return t.current&&e()}},r=E(n.default.useState(c.IDLE),2),d=r[0],h=r[1],g=(0,o.default)(function(){return h(c.BUSY)},e.busyDelay),v=(0,o.default)(function(){return h(c.IDLE)},e.hintDuration);(0,s.default)(function(){t.current=!0}),(0,u.default)(function(){t.current=!1,v.clear(),g.clear()});var w={onPromise:a(function(){h(c.PENDING),v.clear(),g.start()}),onReject:a(function(){h(c.ERROR),g.clear(),v.start()}),onResolve:a(function(){h(c.SUCCESS),g.clear(),v.start()})};return n.default.Children.map(e.children,function(t){var a=(0,m.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(y.defaultProps)))),r=f({className:(0,l.default)(t.props.className,(0,m.createStatusClasses)(d,e))},(0,m.createStatusProps)(d,e)),o=(0,p.default)(t.props,e.callbacks,w);return n.default.cloneElement(t,f({},a,r,o))})}y.propTypes={children:r.default.node,callbacks:g,pendingProps:g,pendingClasses:g,busyDelay:r.default.number,busyProps:g,busyClasses:g,successProps:g,successClasses:g,errorProps:g,errorClasses:g,hintDuration:r.default.number,delimiter:r.default.string},y.defaultProps={callbacks:["onClick","onTouchStart"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,delimiter:" "};var v=y;t.default=v}},[[294,2,1]]]);
//# sourceMappingURL=main.a46beda7.chunk.js.map