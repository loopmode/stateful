(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},164:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var n=l(a(0)),r=l(a(82));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(){return{children:"Loading...",disabled:!0}},u=function(){return{variant:"success"}},c=function(){return{variant:"danger"}},i=function(e){return n.default.createElement(r.default,o({pendingClasses:null,successClasses:null,errorClasses:null,pendingProps:s,busyProps:s,successProps:u,errorProps:c},e))};t.StatefulButton=i;var p=i;t.default=p},178:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},248:function(e,t,a){e.exports={Markdown:"_3HAAgi00lfs4qIw3St0ANt"}},249:function(e,t,a){e.exports={VanillaExample:"ShIoj2UOXVrGKHEoOsAI5"}},270:function(e,t,a){e.exports={AntDExample:"_244PeBoteqgqFskxWHGkv-"}},277:function(e,t,a){e.exports={Examples:"_1N-972BoR3mn_Pm84pa66d"}},279:function(e,t,a){e.exports={App:"_3jQ0wgPc3Hj0LizMGGPFst"}},293:function(e,t,a){e.exports=a(625)},298:function(e,t,a){},359:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,l){var o=a.onPromise,s=a.onResolve,u=a.onReject;if(!t)return{};return(0,r.default)(t,l).reduce(function(t,a){var r=e[a];return"function"===typeof r&&(t[a]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var l=e.apply(void 0,a),c=(0,n.default)(l);c&&(c.catch(u),c.then(s),o(c))}.apply(void 0,[r].concat(t))}),t},{})};var n=l(a(360)),r=l(a(123));function l(e){return e&&e.__esModule?e:{default:e}}},360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},361:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var a;return s((o(a={},r.PENDING,t.pendingClasses),o(a,r.BUSY,t.busyClasses),o(a,r.SUCCESS,t.successClasses),o(a,r.ERROR,t.errorClasses),a),e,t.delimiter)},t.createStatusProps=function(e,t){var a;return s((o(a={},r.PENDING,t.pendingProps),o(a,r.BUSY,t.busyProps),o(a,r.SUCCESS,t.successProps),o(a,r.ERROR,t.errorProps),a),e,t.delimiter)},t.createProps=s,t.createFlags=u,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(a,n){return t.includes(n)||(a[n]=e[n]),a},{})};var n,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(178)),l=(n=a(123))&&n.__esModule?n:{default:n};function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t,a){var n=e[t];return"function"===typeof n?n(t):u(n,a)}function u(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=(0,l.default)(e,t);return n?n.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){o(e,t,a[t])})}return e}({},e,o({},t,a))},{}):{}}},625:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),s=(a(298),a(4)),u=a.n(s),c=a(642),i=a(644),p=a(627),m=a(247),d=a.n(m),f=a(248),h=a.n(f),b=function(e){return r.a.createElement("div",{className:u()("Markdown",h.a.Markdown)},r.a.createElement(d.a,e))},g=a(249),E=a.n(g),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Vanilla example"),r.a.createElement("p",null,"This example doesn't use any UI frameworks, but some simple CSS rules instead. It uses the default wrapper:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful';")),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/vanilla/VanillaExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles"))),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"pending")," and ",r.a.createElement("code",null,"busy")," CSS classes have rules to display a little animation based on"," ",r.a.createElement("a",{href:"https://codepen.io/seansean11/pen/dhwzj",target:"_blank",rel:"noopener noreferrer"},"this codepen"),", while ",r.a.createElement("code",null,"success")," and ",r.a.createElement("code",null,"error")," just give it green or red background."))},v=a(65),w=a.n(v);function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,a=void 0===t?.5:t,n=e.min,r=void 0===n?100:n,l=e.max,o=void 0===l?2e3:l,s=Math.floor(r+Math.random()*(o-r)),u=Math.random()>a;return console.log("dummyCall -> will ".concat(u?"fail":"succeed"," in ").concat(s,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(u?"fail":"success")),u?t({status:400}):e({status:200})},s)})}var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"push"},"Click any of the buttons below. A dummy callback will sometimes succeed and sometimes fail, using random durations and outcomes."))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(w.a,{hintDuration:2e3},r.a.createElement("button",{onClick:function(){return S({min:500,max:3e3})}},"Do something")),r.a.createElement(w.a,null,r.a.createElement("button",{onClick:function(){return S({min:500,max:3e3})}},"Do something")),r.a.createElement(w.a,null,r.a.createElement("button",{onClick:function(){return S({min:500,max:3e3})}},"Do something")))},C=function(){return r.a.createElement("div",{className:u()("VanillaExample",E.a.VanillaExample)},r.a.createElement(y,null),r.a.createElement(k,null))},O=(a(362),a(643)),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Semantic UI"),r.a.createElement("p",null,"Semantic UI is mostly supported out of the box, as it's capable to display the pending, success and error states by merely setting boolean flags on its components."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/semantic-ui.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement("div",null,"The default ",r.a.createElement("code",null,"semantic-ui-react")," wrapper can be used via:",r.a.createElement(O.a,null,r.a.createElement("code",null,"import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';")),"It provides ",r.a.createElement("code",null,"loading"),", ",r.a.createElement("code",null,"positive")," and"," ",r.a.createElement("code",null,"negative")," flags to the wrapped component - which is understood by at least the ",r.a.createElement("code",null,"Button")," component."))},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Forms"),r.a.createElement("p",null,"Semantic UI forms are supported out of the box as well. While there is an apparent naming inconsistency with the success and error props (they are actually called ",r.a.createElement("code",null,"success")," and"," ",r.a.createElement("code",null,"error")," in the ",r.a.createElement("code",null,"Form")," component, while they are called ",r.a.createElement("code",null,"positive")," and ",r.a.createElement("code",null,"negative")," in the"," ",r.a.createElement("code",null,"Button")," component) the form does support such props as well as a ",r.a.createElement("code",null,"loading")," one."),r.a.createElement("div",null,r.a.createElement("p",null,"The ",r.a.createElement("code",null,"semantic-ui-react")," form wrapper can be used via:"),r.a.createElement(O.a,null,r.a.createElement("code",null,"import { StatefulForm } from '@loopmode/stateful/lib/wrapper/semantic-ui';")),"It provides ",r.a.createElement("code",null,"loading"),", ",r.a.createElement("code",null,"success")," and"," ",r.a.createElement("code",null,"error")," flags to the wrapped component. Note that this also triggers ",r.a.createElement("code",null,"<Message success>")," and"," ",r.a.createElement("code",null,"<Message error>")," visibility."),r.a.createElement("i",{className:"push"},"Submit the form below. You don't need to fill in anything, the input fields are actually ignored. ",r.a.createElement("br",null)," The example uses"," ",r.a.createElement("code",null,"hintDuration=",5e3),", meaning it will remain in success or error state for 5 seconds."))},_=a(641),D=a(66),I=a.n(D),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(P,null),r.a.createElement(I.a,null,r.a.createElement(_.a,{icon:"undo",onClick:S})),r.a.createElement(I.a,null,r.a.createElement(_.a,{icon:"upload",content:"Upload",labelPosition:"left",onClick:S})),r.a.createElement(I.a,{busyDelay:1e3},r.a.createElement(_.a,{onClick:S},"With 1s busy delay")))},M=a(637),U=a(640),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(D.StatefulForm,null,r.a.createElement(M.a,{onSubmit:S},r.a.createElement(U.a,{success:!0,header:"Form Completed",content:"You're all signed up for the newsletter"}),r.a.createElement(U.a,{error:!0,header:"Something went wrong",content:"An unexpected error occurred. Please try again."}),r.a.createElement(M.a.Field,{inline:!0},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{placeholder:"First Name"})),r.a.createElement(M.a.Field,{inline:!0},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{placeholder:"Last Name"})),r.a.createElement(_.a,{type:"submit"},"Log in"))))},B=function(){return r.a.createElement("div",{className:"SemanticUIExample"},r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement("div",{className:"push"}),r.a.createElement(F,null))},R=(a(491),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Material UI"),r.a.createElement("p",null,"While there is a nice loading animation when using Material UI (",r.a.createElement("a",{href:"https://material-ui.com/demos/progress/",target:"_blank",rel:"noopener noreferrer"},"Progress"),"), there is no easy way to just pass a prop to a button and be done with it. You still need to create a construct that displays the"," ",r.a.createElement("code",null,"Progress")," component conditionally, you have to take care of the layout etc."),r.a.createElement("p",null,"However, that is a typical problem that you will probably have solved already, if you're working with Material UI on a large-ish application."),r.a.createElement("p",null,"For that reason, there is no default wrapper for Material UI. Instead, have a look at the code of this example for a possible approach (see links below)."),r.a.createElement("p",null,"Basically, the trick is to create a component that wraps a"," ",r.a.createElement("code",null,"Button"),", accepts some properties like `success`, `error` and `loading`, and renders the button accordingly - adding a"," ",r.a.createElement("code",null,"Progress")," when needed. That's exactly what I did here, based on this"," ",r.a.createElement("a",{href:"https://material-ui.com/demos/progress/#interactive-integration",target:"_blank",rel:"noreferrer noopener"},"official example")," ","and without any prior experience with Material UI."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/ProgressButton.js",target:"_blank",rel:"noopener noreferrer"},"Custom ProgressButton")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/Stateful.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))}),A=a(115),G=a(163),L=a(280),Y=a(120),H=a.n(Y),W=a(114),V=a.n(W),q=a(266),z=a.n(q),J=a(268),K=a.n(J),Q=Object(A.withStyles)(function(){return{wrapper:{display:"inline-block",position:"relative"},success:{backgroundColor:H.a[500],"&:hover":{backgroundColor:H.a[700]}},error:{backgroundColor:V.a[500],"&:hover":{backgroundColor:V.a[700]}},progress:{color:H.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-8,marginLeft:-8}}})(function(e){var t,a=e.className,n=e.classes,l=e.loading,o=e.success,s=e.error,c=Object(L.a)(e,["className","classes","loading","success","error"]),i=u()(a,(t={},Object(G.a)(t,n.success,o),Object(G.a)(t,n.error,s),t));return r.a.createElement("div",{className:u()("ProgressButton",n.wrapper)},r.a.createElement(z.a,Object.assign({className:i,disabled:l},c),e.children),l&&r.a.createElement(K.a,{size:16,className:n.progress}))}),X=function(e){return r.a.createElement(w.a,Object.assign({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled loading",busyProps:"disabled loading",successProps:"success",errorProps:"error"},e))};var Z=Object(A.withStyles)(function(e){return{button:{margin:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(X,null,r.a.createElement(Q,{variant:"contained",className:t.button,onClick:S},"Default")),r.a.createElement(X,null,r.a.createElement(Q,{variant:"contained",color:"primary",className:t.button,onClick:S},"Primary")),r.a.createElement(X,null,r.a.createElement(Q,{variant:"contained",color:"secondary",className:t.button,onClick:S},"Secondary")))}),$=function(){return r.a.createElement("div",{className:"MaterialUIExample"},r.a.createElement(R,null),r.a.createElement(Z,null))},ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Bootstrap"),r.a.createElement("p",null,"Unfortunately, ",r.a.createElement("code",null,"react-bootstrap")," does not provide any sophisticated loading states or animations, so besides indicating success or danger, we need to perform some tricks for the loading state."),r.a.createElement("p",null,"As suggested by the official documentation, the default wrapper replaces the ",r.a.createElement("code",null,"children"),' property of the wrapped component and displays a "Loading..." string while pending or busy.'),r.a.createElement("p",null,"If you need to change that text or localize it, simply create a custom wrapper and provide the ",r.a.createElement("code",null,"pendingProps")," and"," ",r.a.createElement("code",null,"busyProps")," in a similar fashion to how how the"," ",r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"default")," ","does it."),r.a.createElement("p",null,"The default ",r.a.createElement("code",null,"react-bootstrap")," wrapper can be used via:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';")),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},te=a(639),ae=a(164),ne=a.n(ae),re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement(P,null),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:S},"Load")),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:S},"Save")))},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossOrigin:"anonymous"}),r.a.createElement("div",{className:"BootstrapExample"},r.a.createElement(ee,null),r.a.createElement(re,null)))},oe=(a(568),a(270)),se=a.n(oe),ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"AntD"),r.a.createElement("p",null,"AntD can't be fully supported out of the box because its buttons do not support any kind of success state, so you'll have to define some CSS for it yourself. Other than that, its buttons do support a loading flag and display an animated spinner, which is great."),r.a.createElement("p",null,"The default ",r.a.createElement("code",null,"antd")," wrapper can be used via:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful/lib/wrapper/antd';")),r.a.createElement("p",null,"AntD already has ",r.a.createElement("code",null,"loading")," and ",r.a.createElement("code",null,"danger")," ","support, but it has no default ",r.a.createElement("code",null,"success")," handling."),r.a.createElement("p",null,"For that reason, the default wrapper just adds a",r.a.createElement("code",null,"success")," ","CSS class, but you are still responsible for defining a CSS rule for that class."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/antd.js",target:"_blank",rel:"noopener noreferrer"},"Stateful configuration"))))},ce=a(638),ie=a(77),pe=a.n(ie),me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement(P,null),r.a.createElement(pe.a,null,r.a.createElement(ce.a,{onClick:S,type:"primary"},"Primary")),r.a.createElement(pe.a,null,r.a.createElement(ce.a,{onClick:S},"Default")),r.a.createElement(pe.a,null,r.a.createElement(ce.a,{onClick:S,type:"dashed"},"Dashed")),r.a.createElement(pe.a,null,r.a.createElement(ce.a,{onClick:S,type:"danger"},"Danger")))},de=function(){return r.a.createElement("div",{className:u()("AntDExample",se.a.AntDExample)},r.a.createElement(ue,null),r.a.createElement(me,null))},fe=a(277),he=a.n(fe),be=function(){return r.a.createElement("div",{className:u()("Examples",he.a.Examples)},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.a,{to:"/",exact:!0},"Overview")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/vanilla"},"Vanilla example")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/semantic-ui"},"Semantic UI example")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/antd"},"AntD example")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/bootstrap"},"Bootstrap example")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/material-ui"},"Material UI example")))),r.a.createElement("div",{className:"Content"},r.a.createElement(p.a,{exact:!0,path:"/",component:function(e){return r.a.createElement(b,Object.assign({},e,{source:"# @loopmode/stateful\n\nA react component for visual indication of async state.\n\nThis component is meant as an unobtrusive, opt-in helper that doesn't require significant changes in your code.\nThe idea is that you simply wrap it around an existing component in your JSX, without changing or adding any props, and the rest should \"just work\".\n\n![success gif](https://github.com/loopmode/stateful/raw/master/stateful-success.gif 'Example of loading and success indication')\n![error gif](https://github.com/loopmode/stateful/raw/master/stateful-error.gif 'Example of loading and error indication')\n\n## Installation\n\nUsing npm:\n\n```\nnpm install --save @loopmode/stateful\n```\n\nUsing yarn:\n\n```\nyarn add @loopmode/stateful\n```\n\n## Usage\n\n```\nimport Stateful from '@loopmode/stateful';\n\n...\n    <Stateful>\n        <button onClick={somePromiseHandler}>load</button>\n    </Stateful>\n...\n```\n\n## Supported props\n\n| Prop           | Type     | Default                       | Description                                                                                             |\n| -------------- | -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |\n| callbacks      | PolyType | `['onClick', 'onTouchStart']` | Names of callbacks to intercept and check for promises                                                  |\n| pendingProps   | PolyType | `['disabled']`                | Names of props to add for `Status.PENDING`                                                              |\n| pendingClasses | PolyType | `[]`                          | Names of CSS classes to add for `Status.PENDING`                                                        |\n| busyDelay      | Number   | `0`                           | Duration in milliseconds to wait after `Status.PENDING` and before `Status.BUSY`                        |\n| busyProps      | PolyType | `['disabled']`                | Names of props to add for `Status.BUSY`                                                                 |\n| busyClasses    | PolyType | `[]`                          | Names of CSS classes to add for `Status.BUSY`                                                           |\n| errorProps     | PolyType | `[]`                          | Names of props to add for `Status.ERROR`                                                                |\n| errorClasses   | PolyType | `['error']`                   | Names of CSS classes to add for `Status.ERROR`                                                          |\n| successProps   | PolyType | `[]`                          | Names of props to add for `Status.SUCCESS`                                                              |\n| successClasses | PolyType | `['success']`                 | Names of CSS classes to add for `Status.SUCCESS`                                                        |\n| hintDuration   | Number   | `1000`                        | Duration in milliseconds for `Status.SUCCESS` and `Status.ERROR` before returning to the default status |\n| delimiter      | String   | `' '`                         | Delimiter for splitting `Poly` props of type `String` into multiple strings                             |\n\n## \"PolyType\" props\n\nThe term \"PolyType\" isn't the latest thing, it's just something made up for the sakes of this documentation. It means that the prop value can be one of three types:\n\n```\nconst PolyType = PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.arrayOf(PropTypes.string),\n    PropTypes.func\n]);\n```\n\n**String**\n\nIn most cases, you can stick with the `String` type. It supports both single and multiple values, but in a primitive type that works well with pure components.\nSingle values are typed as a simple string, while multiple values are delimiter-separated strings. The default delimiter is a space (``), but you can change that using the `delimiter` prop.\n\n```\n<Stateful pendingProps=\"disabled\" />\n<Stateful pendingProps=\"disabled pending\" />\n<Stateful pendingProps=\"disabled,pending\" delimiter=\",\" />\n```\n\n**Array**\n\nIn some cases, it might be preferrable to provide the props as an array. While this interferes with rendering of pure components when typed inline, in many cases you do have an array that you can pass on directly.\n\n```\n<Stateful pendingProps={['disabled']} />\n<Stateful pendingProps={['disabled', 'pending']} />\n<Stateful pendingProps={myPropsArray} />\n```\n\n**Function**\n\nSometimes, the component you need to wrap just doesn't support a simple boolean flag to get the job done. For example, `react-bootstraps` wants to receive `variant=\"success\"` or `variant=\"danger\"` - the same prop, but with a different value.\nIn these cases, you can provide a function that receives the current `status` and returns an object with as many properties and values as needed.\n\n```\n<Stateful\n    pendingProps={() => ({status: 'pending'})}\n    successProps={() => ({status: 'success'})}\n />\n<Stateful pendingProps={status => {\n    console.log({ status });\n    return {\n        status,\n        foo: 'bar',\n        bar: 'baz\n    }\n}} />\n```\n\n## Usage with UI libraries and frameworks\n\nMost UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.\nWhile `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.\n(Suggestions and especially pull requests for more support are highly welcome!)\n\nTo use the pre-configured wrapper components, you should import them specifically from `lib/wrapper`.\nIdeally, you would do this only once for the local `Stateful` component of a project, configure it there, and import that one across your codebase.\n\n| name        | usage                                                                | implementation                                                                                                          | examples                                                    |\n| ----------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |\n| antd        | `import Stateful from '@loopmode/stateful/lib/wrapper/antd';`        | [wrapper/antd.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/antd.js)               | [example](http://loopmode.github.io/stateful/#/antd)        |\n| bootstrap   | `import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';`   | [wrapper/bootstrap.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js)     | [example](http://loopmode.github.io/stateful/#/bootstrap)   |\n| semantic-ui | `import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';` | [wrapper/semantic-ui.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/semantic-ui.js) | [example](http://loopmode.github.io/stateful/#/semantic-ui) |\n| material-ui | [see example page](http://loopmode.github.io/stateful/#/material-ui) | -                                                                                                                       | [example](http://loopmode.github.io/stateful/#/material-ui) |\n",options:{html:!0}}))}}),r.a.createElement(p.a,{path:"/vanilla",component:C}),r.a.createElement(p.a,{path:"/semantic-ui",component:B}),r.a.createElement(p.a,{path:"/antd",component:de}),r.a.createElement(p.a,{path:"/bootstrap",component:le}),r.a.createElement(p.a,{path:"/material-ui",component:$})))},ge=a(279),Ee=a.n(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{basename:"/stateful"},r.a.createElement("div",{className:u()("App",Ee.a.App)},r.a.createElement("header",null,r.a.createElement("h1",null,"@loopmode/stateful"),r.a.createElement("p",null,"React helper for async buttons and more")),r.a.createElement(be,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var n,r=(n=a(82))&&n.__esModule?n:{default:n}},66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulForm=t.StatefulButton=void 0;var n=l(a(0)),r=l(a(82));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(e){return n.default.createElement(r.default,o({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"positive",errorProps:"negative"},e))};t.StatefulButton=s;t.StatefulForm=function(e){return n.default.createElement(r.default,o({callbacks:"onSubmit",pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"success",errorProps:"error",hintDuration:5e3},e))};var u=s;t.default=u},77:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var n=l(a(0)),r=l(a(82));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(){return{type:"danger"}},u=function(e){return n.default.createElement(r.default,o({pendingClasses:null,busyClasses:null,successClasses:"success",errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:null,errorProps:s},e))};t.StatefulButton=u;var c=u;t.default=c},82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(0)),r=d(a(6)),l=d(a(4)),o=d(a(356)),s=d(a(357)),u=d(a(358)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(178)),i=d(a(123)),p=d(a(359)),m=a(361);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){h(e,t,a[t])})}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(u){r=!0,l=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=r.default.oneOfType([r.default.func,r.default.string,r.default.arrayOf(r.default.string)]);function y(e){var t=n.default.useRef(),a=function(e){return function(){return t.current&&e()}},r=g(n.default.useState(c.IDLE),2),d=r[0],h=r[1],E=(0,o.default)(function(){return h(c.BUSY)},e.busyDelay),v=(0,o.default)(function(){return h(c.IDLE)},e.hintDuration);(0,s.default)(function(){t.current=!0}),(0,u.default)(function(){t.current=!1,v.clear(),E.clear()});var w={onPromise:a(function(){h(c.PENDING),v.clear(),E.start()}),onReject:a(function(){h(c.ERROR),E.clear(),v.start()}),onResolve:a(function(){h(c.SUCCESS),E.clear(),v.start()})};return n.default.Children.map(e.children,function(t){var a=(0,m.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(y.defaultProps)))),r=f({className:(0,l.default)(t.props.className,(0,m.createStatusClasses)(d,e))},(0,m.createStatusProps)(d,e)),o=(0,p.default)(t.props,e.callbacks,w);return n.default.cloneElement(t,f({},a,r,o))})}y.propTypes={children:r.default.node,callbacks:E,pendingProps:E,pendingClasses:E,busyDelay:r.default.number,busyProps:E,busyClasses:E,successProps:E,successClasses:E,errorProps:E,errorClasses:E,hintDuration:r.default.number,delimiter:r.default.string},y.defaultProps={callbacks:["onClick","onTouchStart"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,delimiter:" "};var v=y;t.default=v}},[[293,2,1]]]);
//# sourceMappingURL=main.b2bc8714.chunk.js.map