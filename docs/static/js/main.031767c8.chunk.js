(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("string"===typeof e)return e.split(t);return e}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var a=l(n(0)),r=l(n(90));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(){return{children:"Loading...",disabled:!0}},c=function(){return{variant:"success"}},u=function(){return{variant:"danger"}},i=function(e){return a.default.createElement(r.default,o({pendingClasses:null,successClasses:null,errorClasses:null,pendingProps:s,busyProps:s,successProps:c,errorProps:u},e))};t.StatefulButton=i;var p=i;t.default=p},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR=t.SUCCESS=t.BUSY=t.PENDING=t.IDLE=void 0;t.IDLE=0;t.PENDING=1;t.BUSY=2;t.SUCCESS=3;t.ERROR=4},257:function(e,t,n){e.exports={VanillaExample:"ShIoj2UOXVrGKHEoOsAI5"}},278:function(e,t,n){e.exports={AntDExample:"_244PeBoteqgqFskxWHGkv-"}},299:function(e,t,n){e.exports=n(629)},304:function(e,t,n){},306:function(e,t,n){},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,l){var o=n.onPromise,s=n.onResolve,c=n.onReject;if(!t)return{};return(0,r.default)(t,l).reduce(function(t,n){var r=e[n];return"function"===typeof r&&(t[n]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l=e.apply(void 0,n),u=(0,a.default)(l);u&&(u.catch(c),u.then(s),o(u))}.apply(void 0,[r].concat(t))}),t},{})};var a=l(n(366)),r=l(n(130));function l(e){return e&&e.__esModule?e:{default:e}}},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e&&"function"===typeof e.then)return e;return}},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStatusClasses=function(e,t){var n;return s((o(n={},r.PENDING,t.pendingClasses),o(n,r.BUSY,t.busyClasses),o(n,r.SUCCESS,t.successClasses),o(n,r.ERROR,t.errorClasses),n),e,t.delimiter)},t.createStatusProps=function(e,t){var n;return s((o(n={},r.PENDING,t.pendingProps),o(n,r.BUSY,t.busyProps),o(n,r.SUCCESS,t.successProps),o(n,r.ERROR,t.errorProps),n),e,t.delimiter)},t.createProps=s,t.createFlags=c,t.omitProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(function(n,a){return t.includes(a)||(n[a]=e[a]),n},{})};var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(185)),l=(a=n(130))&&a.__esModule?a:{default:a};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){var a=e[t];return"function"===typeof a?a(t):c(a,n)}function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=(0,l.default)(e,t);return a?a.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){o(e,t,n[t])})}return e}({},e,o({},t,n))},{}):{}}},629:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(33),o=n.n(l),s=(n(304),n(306),n(649)),c=n(642),u=n(648),i=n(18),p=n(19),d=n(21),m=n(20),f=n(22),h=n(256),b=n.n(h),y=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"readme"},r.a.createElement(b.a,{source:"# @loopmode/stateful\n\nA react component for visual indication of async state.\n\nThis component is meant as an unobtrusive, opt-in helper that doesn't require significant changes in your code.\nThe idea is that you simply wrap it around an existing component in your JSX, without changing or adding any props, and the rest should \"just work\".\n\n![success gif](https://github.com/loopmode/stateful/raw/master/stateful-success.gif 'Example of loading and success indication')\n![error gif](https://github.com/loopmode/stateful/raw/master/stateful-error.gif 'Example of loading and error indication')\n\n## Installation\n\nUsing npm:\n\n```\nnpm install --save @loopmode/stateful\n```\n\nUsing yarn:\n\n```\nyarn add @loopmode/stateful\n```\n\n## Usage\n\n```\nimport Stateful from '@loopmode/stateful';\n\n...\n    <Stateful>\n        <button onClick={somePromiseHandler}>load</button>\n    </Stateful>\n...\n```\n\n## Supported props\n\n_Note: The `Poly` type is described below._\n\n| Prop           | Type   | Default                       | Description                                                                                             |\n| -------------- | ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------- |\n| callbacks      | Poly   | `['onClick', 'onTouchStart']` | Names of callbacks to intercept and check for promises                                                  |\n| pendingProps   | Poly   | `['disabled']`                | Names of props to add for `Status.PENDING`                                                              |\n| pendingClasses | Poly   | `[]`                          | Names of CSS classes to add for `Status.PENDING`                                                        |\n| busyDelay      | Number | `0`                           | Duration in milliseconds to wait after `Status.PENDING` and before `Status.BUSY`                        |\n| busyProps      | Poly   | `['disabled']`                | Names of props to add for `Status.BUSY`                                                                 |\n| busyClasses    | Poly   | `[]`                          | Names of CSS classes to add for `Status.BUSY`                                                           |\n| errorProps     | Poly   | `[]`                          | Names of props to add for `Status.ERROR`                                                                |\n| errorClasses   | Poly   | `['error']`                   | Names of CSS classes to add for `Status.ERROR`                                                          |\n| successProps   | Poly   | `[]`                          | Names of props to add for `Status.SUCCESS`                                                              |\n| successClasses | Poly   | `['success']`                 | Names of CSS classes to add for `Status.SUCCESS`                                                        |\n| hintDuration   | Number | `1000`                        | Duration in milliseconds for `Status.SUCCESS` and `Status.ERROR` before returning to the default status |\n| delimiter      | String | `' '`                         | Delimiter for splitting `Poly` props of type `String` into multiple strings                             |\n\n### Polymorphic prop types\n\nMost of the props accept values of multiple types: `String`, `Array` or `Function`, and depending on your use case, some might be preferrable over others.\nWe call this prop type `PolyType` and it's defined in the code like this:\n\n```\nconst PolyType = PropTypes.oneOfType([\n    PropTypes.func,\n    PropTypes.string,\n    PropTypes.arrayOf(PropTypes.string)\n]);\n```\n\n**String**\n\nIn most cases, you can stick with the `String` type, as it supports both single and multiple values, but in a primitive type that works well with pure components.\n\nSingle values are typed as a simple string, while multiple values are delimiter-separated strings. The default delimiter is a space (``), but you can change that using the `delimiter` prop.\n\n```\n<Stateful pendingProps=\"disabled\" />\n<Stateful pendingProps=\"disabled pending\" />\n```\n\n**Array**\n\nIn some cases, it might be preferrable to provide the props as an array. While this interferes with rendering of pure components when typed inline (e.g. `pendingClasses={['pending', 'inactive']}`), in many cases you do have an array that you can pass on directly.\n\n```\n<Stateful pendingProps={['disabled']} />\n<Stateful pendingProps={['disabled', 'pending']} />\n<Stateful pendingProps={myPropsArray} />\n```\n\n**Function**\n\nSometimes, the component you need to wrap just doesn't support a simple boolean flag to get the job done. For example, `react-bootstraps` wants to receive `variant=\"success\"` or `variant=\"danger\"` - the same prop, but with a different value.\nIn these cases, you can provide a function that receives the current `status` and returns an object with as many properties and values as needed.\n\n```\n<Stateful\n    pendingProps={() => ({status: 'pending'})}\n    successProps={() => ({status: 'success'})}\n />\n<Stateful pendingProps={status => {\n    console.log({ status });\n    return {\n        status,\n        foo: 'bar',\n        bar: 'baz\n    }\n}} />\n```\n\n## Explanation\n\nConsider you have a react component that performs some async operation, like loading or submitting data. Typically, you have some component that triggers the action, like a button with an `onClick` handler. That handler will typically perform something that results in a promise.\n\nThat is already everything you need to make use of this library - a component with a callback that results in promise.\n\n_Note: The callback must actually return the promise for this to work. This means your function must either be `async` or `return` a promise explicitly._\n\n### Example: initial component\n\nThis is our example component. It has a `load` button that fetches some data, the data is set to the state, then rendered.\n\n```\nimport React, { Component } from 'react';\nexport default class ListLoader extends Component {\n    state = {\n        data: []\n    };\n    render() {\n        return (\n            <div>\n                <button onClick={this.handleClick}>load</button>\n                <ul>\n                    {this.state.data.map(item => (\n                        <li key={item.id}>\n                            <h3>{item.name}</h3>\n                            <p>{item.body}</p>\n                        </li>\n                    ))}\n                </ul>\n            </div>\n        );\n    }\n    handleClick = () => {\n        fetch('https://jsonplaceholder.typicode.com/comments')\n            .then(res => res.json())\n            .then(data => this.setState({ data }));\n    };\n}\n```\n\nNow if the response was slow to return, for example due to some heavy API operations or simply a slow connection, apparently nothing would happen after clicking the button. The user might wonder whether he actually clicked \"correctly\" and even click again.\nSo you, as a developer, would start putting some kind of `isLoading` flag into the state, you would disable the button while `state.isLoading`, you might add a loading animation to make it look nicer than just a disabled button, etc.\n\nUsing `@loopmode/stateful`, you don't have to do any of that.\n\n#### 1. Preparation\n\nAs mentioned earlier, the callback function _must_ return a promise for this to work. If we used an `async` function, that would be a given. In our case, we have manual promise handling - so we must ensure that we **return the promise**:\n\n```\n...\nhandleClick = () => {\n    // notice how we explicitly return the promise\n    return fetch('https://jsonplaceholder.typicode.com/comments')\n        .then(res => res.json())\n        .then(data => this.setState({ data }));\n};\n...\n```\n\n#### 2. Usage\n\nWe can now simply put a `<Stateful>` wrapper around the button, and we're done.\n\n```\nimport Stateful from '@loopmode/Stateful;\n...\n    <Stateful>\n        <button onClick={this.handleClick}>load</button>\n    </Stateful>\n...\n```\n\nThat's it. In the default configuration, our button will be disabled and have a `pending` CSS class while the promise is pending. After the promise is resolved or rejected, our button will have a `success` or `error` class for 1 second. You could define some CSS rules to make `button.success` look green or `button.error` look red.\n\n## Usage with UI libraries and frameworks\n\nMost UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.\nWhile `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.\n(Suggestions and especially pull requests for more support are highly welcome!)\n\nTo use the pre-configured components, you should import the specific components from `lib` instead of the default.\n\nHave a look at the different [examples](https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples).\n"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(a.Component),g=n(73),E=n.n(g),v=n(257),w=n.n(v);function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.successRate,n=void 0===t?.5:t,a=e.min,r=void 0===a?100:a,l=e.max,o=void 0===l?2e3:l,s=Math.floor(r+Math.random()*(o-r)),c=Math.random()>n;return console.log("dummyCall -> will ".concat(c?"fail":"succeed"," in ").concat(s,"ms")),new Promise(function(e,t){setTimeout(function(){return console.log("dummyCall -> ".concat(c?"fail":"success")),c?t({status:400}):e({status:200})},s)})}var O=function(){return r.a.createElement("i",{className:"push"},"Click any of the buttons below. Using random durations and outcomes, the dummy callback will sometimes succeed and sometimes fail.")},k=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Plain HTML"),r.a.createElement(P,null),r.a.createElement(j,null))}}]),t}(a.Component),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"This example doesn't use any UI frameworks, but some simple CSS rules instead. It uses the default wrapper:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful';")),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/plain-html/VanillaExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles"))),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"pending")," and ",r.a.createElement("code",null,"busy")," CSS classes have rules to display a little animation based on"," ",r.a.createElement("a",{href:"https://codepen.io/seansean11/pen/dhwzj",target:"_blank",rel:"noopener noreferrer"},"this codepen"),", while ",r.a.createElement("code",null,"success")," and ",r.a.createElement("code",null,"error")," just give it green or red background."))},j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){return e.preventDefault(),S({successRate:.5,min:2500,max:3500})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:w.a.VanillaExample},r.a.createElement(O,null),r.a.createElement(E.a,null,r.a.createElement("button",{onClick:this.handleClick},"load")),r.a.createElement(E.a,null,r.a.createElement("button",{onClick:this.handleClick},"load")),r.a.createElement(E.a,null,r.a.createElement("button",{onClick:this.handleClick},"load")))}}]),t}(r.a.Component),C=(n(369),n(650)),N=n(643),x=n(645),D=n(647),_=n(74),I=n.n(_),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Forms"),r.a.createElement("p",null,"Semantic UI forms are supported out of the box as well. While there is an apparent naming inconsistency with the success and error props (they are actually called ",r.a.createElement("code",null,"success")," and"," ",r.a.createElement("code",null,"error")," in the ",r.a.createElement("code",null,"Form")," component, while they are called ",r.a.createElement("code",null,"positive")," and ",r.a.createElement("code",null,"negative")," in the"," ",r.a.createElement("code",null,"Button")," component) the form does support such props as well as a ",r.a.createElement("code",null,"loading")," one."),r.a.createElement("div",null,r.a.createElement("p",null,"The ",r.a.createElement("code",null,"semantic-ui-react")," form wrapper can be used via:"),r.a.createElement(C.a,null,r.a.createElement("code",null,"import { StatefulForm } from '@loopmode/stateful/lib/wrapper/semantic-ui';")),"It provides ",r.a.createElement("code",null,"loading"),", ",r.a.createElement("code",null,"success")," and"," ",r.a.createElement("code",null,"error")," flags to the wrapped component. Note that this also triggers ",r.a.createElement("code",null,"<Message success>")," and"," ",r.a.createElement("code",null,"<Message error>")," visibility."),r.a.createElement("i",{className:"push"},"Submit the form below. You don't need to fill in anything, the input fields are actually ignored. ",r.a.createElement("br",null)," The example uses"," ",r.a.createElement("code",null,"hintDuration=",5e3),", meaning it will remain in success or error state for 5 seconds."))},U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){return e.preventDefault(),S({successRate:.5,min:500,max:2500})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(_.StatefulForm,null,r.a.createElement(N.a,{onSubmit:this.handleSubmit},r.a.createElement(x.a,{success:!0,header:"Form Completed",content:"You're all signed up for the newsletter"}),r.a.createElement(x.a,{error:!0,header:"Something went wrong",content:"An unexpected error occurred. Please try again."}),r.a.createElement(N.a.Field,{inline:!0},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{placeholder:"First Name"})),r.a.createElement(N.a.Field,{inline:!0},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{placeholder:"Last Name"})),r.a.createElement(D.a,{type:"submit"},"Log in")))}}]),t}(a.Component),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Buttons"),r.a.createElement("div",null,"The default ",r.a.createElement("code",null,"semantic-ui-react")," wrapper can be used via:",r.a.createElement(C.a,null,r.a.createElement("code",null,"import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';")),"It provides ",r.a.createElement("code",null,"loading"),", ",r.a.createElement("code",null,"positive")," and"," ",r.a.createElement("code",null,"negative")," flags to the wrapped component - which is understood by at least the ",r.a.createElement("code",null,"Button")," component."))},R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){return e.preventDefault(),S({successRate:.5,min:500,max:2500})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(I.a,null,r.a.createElement(D.a,{icon:"undo",onClick:this.handleSubmit})),r.a.createElement(I.a,null,r.a.createElement(D.a,{icon:"upload",content:"Upload",labelPosition:"left",onClick:this.handleSubmit})),r.a.createElement(I.a,{busyDelay:1e3},r.a.createElement(D.a,{onClick:this.handleSubmit},"With 1s busy delay")))}}]),t}(a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Semantic UI"),r.a.createElement("p",null,"Semantic UI is mostly supported out of the box, as it's capable to display the pending, success and error states by merely setting boolean flags on its components."),r.a.createElement(M,null),r.a.createElement(R,null),r.a.createElement("div",{className:"push"},r.a.createElement("hr",null)),r.a.createElement(T,null),r.a.createElement(U,null))}}]),t}(a.Component),B=(n(146),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"While there is a nice loading animation when using Material UI (",r.a.createElement("a",{href:"https://material-ui.com/demos/progress/",target:"_blank",rel:"noopener noreferrer"},"Progress"),"), there is no easy way to just pass a prop to a button and be done with it. You still need to create a construct that displays the ",r.a.createElement("code",null,"Progress")," component conditionally, you have to take care of the layout etc."),r.a.createElement("p",null,"However, that is a typical problem that you will probably have solved already, if you're working with Material UI on a large-ish application."),r.a.createElement("p",null,"For that reason, there is no default wrapper for Material UI. Instead, have a look at the code of this example for a possible approach (see links below)."),r.a.createElement("p",null,"Basically, the trick is to create a component that wraps a"," ",r.a.createElement("code",null,"Button"),", accepts some properties like `success`, `error` and `loading`, and renders the button accordingly - adding a ",r.a.createElement("code",null,"Progress")," when needed. That's exactly what I did here, based on this"," ",r.a.createElement("a",{href:"https://material-ui.com/demos/progress/#interactive-integration",target:"_blank",rel:"noreferrer noopener"},"official example")," ","and without any prior experience with Material UI."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/ProgressButton.js",target:"_blank",rel:"noopener noreferrer"},"Custom ",r.a.createElement("code",null,"ProgressButton")," for Material UI")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/Stateful.js",target:"_blank",rel:"noopener noreferrer"},"Stateful wrapper for Material UI"))))}}]),t}(a.Component)),F=n(121),L=n(171),Y=n(286),G=n(4),W=n.n(G),H=n(127),q=n.n(H),z=n(120),J=n.n(z),V=n(274),K=n.n(V),X=n(276),Z=n.n(X),Q=Object(F.withStyles)(function(){return{wrapper:{display:"inline-block",position:"relative"},success:{backgroundColor:q.a[500],"&:hover":{backgroundColor:q.a[700]}},error:{backgroundColor:J.a[500],"&:hover":{backgroundColor:J.a[700]}},progress:{color:q.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-8,marginLeft:-8}}})(function(e){var t,n=e.className,a=e.classes,l=e.loading,o=e.success,s=e.error,c=Object(Y.a)(e,["className","classes","loading","success","error"]),u=W()(n,(t={},Object(L.a)(t,a.success,o),Object(L.a)(t,a.error,s),t));return r.a.createElement("div",{className:W()("ProgressButton",a.wrapper)},r.a.createElement(K.a,Object.assign({className:u,disabled:l},c),e.children),l&&r.a.createElement(Z.a,{size:16,className:a.progress}))}),$=function(e){return r.a.createElement(E.a,Object.assign({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled loading",busyProps:"disabled loading",successProps:"success",errorProps:"error"},e))};var ee=Object(F.withStyles)(function(e){return{button:{margin:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement($,null,r.a.createElement(Q,{variant:"contained",className:t.button,onClick:S},"Default")),r.a.createElement($,null,r.a.createElement(Q,{variant:"contained",color:"primary",className:t.button,onClick:S},"Primary")),r.a.createElement($,null,r.a.createElement(Q,{variant:"contained",color:"secondary",className:t.button,onClick:S},"Secondary")))}),te=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Material UI"),r.a.createElement(B,null),r.a.createElement("h2",null,"Buttons"),r.a.createElement(ee,null))}}]),t}(a.Component),ne=n(641),ae=n(646),re=n(172),le=n.n(re),oe=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(ne.a,null,r.a.createElement(se,null),r.a.createElement("h3",null,"Buttons"),r.a.createElement(ce,null),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossOrigin:"anonymous"}))}}]),t}(a.Component),se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Bootstrap"),r.a.createElement("p",null,"Unfortunately, ",r.a.createElement("code",null,"react-bootstrap")," does not provide any sophisticated loading states or animations, so besides indicating success or danger, we need to perform some tricks for the loading state."),r.a.createElement("p",null,"As suggested by the official documentation, the default wrapper replaces the ",r.a.createElement("code",null,"children"),' property of the wrapped component and displays a "Loading..." string while pending or busy.'),r.a.createElement("p",null,"If you need to change that text or localize it, simply create a custom wrapper and provide the ",r.a.createElement("code",null,"pendingProps")," and"," ",r.a.createElement("code",null,"busyProps")," in a similar fashion to how how the default wrapper does it."),r.a.createElement("p",null,"The default ",r.a.createElement("code",null,"react-bootstrap")," wrapper can be used via:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';")),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js#L4",target:"_blank",rel:"noopener noreferrer"},"Bootstrap wrapper default implementation"))))},ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){return e.preventDefault(),S({successRate:.5,min:500,max:1500})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(le.a,null,r.a.createElement(ae.a,{onClick:this.handleSubmit},"Load")),r.a.createElement(le.a,null,r.a.createElement(ae.a,{onClick:this.handleSubmit},"Save")))}}]),t}(a.Component),ue=n(644),ie=(n(574),n(278)),pe=n.n(ie),de=n(85),me=n.n(de),fe=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:W()(pe.a.AntDExample,"AntDExample example")},r.a.createElement("h2",null,"AntD"),r.a.createElement("p",null,"AntD can't be fully supported out of the box because its buttons do not know a success state and you'll have to provide your own CSS rules. Other than that, the buttons do support a loading flag and display an animated spinner, which is great."),r.a.createElement(he,null),r.a.createElement("h3",null,"Buttons"),r.a.createElement(be,null))}}]),t}(r.a.Component),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"The default ",r.a.createElement("code",null,"antd")," wrapper can be used via:",r.a.createElement("code",{className:"push"},"import Stateful from '@loopmode/stateful/lib/wrapper/antd';")),r.a.createElement("p",null,"AntD already has ",r.a.createElement("code",null,"loading")," and ",r.a.createElement("code",null,"danger")," ","support, but it has no default ",r.a.createElement("code",null,"success")," handling."),r.a.createElement("p",null,"For that reason, the default wrapper just adds a",r.a.createElement("code",null,"success")," ","CSS class, but you are still responsible for defining a CSS rule for that class."),r.a.createElement("p",null,"Have a look at the relevant code:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss",target:"_blank",rel:"noopener noreferrer"},"Custom button styles for AntD")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/antd.js",target:"_blank",rel:"noopener noreferrer"},"The default wrapper for AntD"))))},be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){return e.preventDefault(),S({successRate:1,min:500,max:1500})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:this.handleClick,type:"primary"},"Primary")),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:this.handleClick},"Default")),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:this.handleClick,type:"dashed"},"Dashed")),r.a.createElement(me.a,null,r.a.createElement(ue.a,{onClick:this.handleClick,type:"danger"},"Danger")))}}]),t}(r.a.Component),ye=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"Examples"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:"./"},"Readme")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"./vanilla"},"Vanilla")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"./semantic-ui"},"Semantic UI")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"./antd"},"AntD")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"./bootstrap"},"Bootstrap")),r.a.createElement("li",null,r.a.createElement(c.a,{to:"./material-ui"},"Material UI")))),r.a.createElement("div",{className:"content"},r.a.createElement(u.a,{exact:!0,path:"/",component:y}),r.a.createElement(u.a,{path:"/vanilla",component:k}),r.a.createElement(u.a,{path:"/semantic-ui",component:A}),r.a.createElement(u.a,{path:"/antd",component:fe}),r.a.createElement(u.a,{path:"/bootstrap",component:oe}),r.a.createElement(u.a,{path:"/material-ui",component:te}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"@loopmode/stateful"),r.a.createElement("p",null,"React helper for async buttons and more"))),r.a.createElement(ye,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var a,r=(a=n(90))&&a.__esModule?a:{default:a}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulForm=t.StatefulButton=void 0;var a=l(n(0)),r=l(n(90));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){return a.default.createElement(r.default,o({pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"positive",errorProps:"negative"},e))};t.StatefulButton=s;t.StatefulForm=function(e){return a.default.createElement(r.default,o({callbacks:"onSubmit",pendingClasses:null,busyClasses:null,successClasses:null,errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:"success",errorProps:"error",hintDuration:5e3},e))};var c=s;t.default=c},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StatefulButton=void 0;var a=l(n(0)),r=l(n(90));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(){return{type:"danger"}},c=function(e){return a.default.createElement(r.default,o({pendingClasses:null,busyClasses:null,successClasses:"success",errorClasses:null,pendingProps:"disabled",busyProps:"loading disabled",successProps:null,errorProps:s},e))};t.StatefulButton=c;var u=c;t.default=u},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(7)),l=m(n(4)),o=m(n(362)),s=m(n(363)),c=m(n(364)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(185)),i=m(n(130)),p=m(n(365)),d=n(367);function m(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){h(e,t,n[t])})}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=r.default.oneOfType([r.default.func,r.default.string,r.default.arrayOf(r.default.string)]);function E(e){var t=a.default.useRef(),n=function(e){return function(){return t.current&&e()}},r=y(a.default.useState(u.IDLE),2),m=r[0],h=r[1],g=(0,o.default)(function(){return h(u.BUSY)},e.busyDelay),v=(0,o.default)(function(){return h(u.IDLE)},e.hintDuration);(0,s.default)(function(){t.current=!0}),(0,c.default)(function(){t.current=!1,v.clear(),g.clear()});var w={onPromise:n(function(){h(u.PENDING),v.clear(),g.start()}),onReject:n(function(){h(u.ERROR),g.clear(),v.start()}),onResolve:n(function(){h(u.SUCCESS),g.clear(),v.start()})};return a.default.Children.map(e.children,function(t){var n=(0,d.omitProps)(t.props,[].concat(b((0,i.default)(e.callbacks)),b(Object.keys(E.defaultProps)))),r=f({className:(0,l.default)(t.props.className,(0,d.createStatusClasses)(m,e))},(0,d.createStatusProps)(m,e)),o=(0,p.default)(t.props,e.callbacks,w);return a.default.cloneElement(t,f({},n,r,o))})}E.propTypes={children:r.default.node,callbacks:g,pendingProps:g,pendingClasses:g,busyDelay:r.default.number,busyProps:g,busyClasses:g,successProps:g,successClasses:g,errorProps:g,errorClasses:g,hintDuration:r.default.number,delimiter:r.default.string},E.defaultProps={callbacks:["onClick","onTouchStart"],pendingProps:["disabled"],pendingClasses:[],busyDelay:0,busyProps:["disabled"],busyClasses:["busy"],successProps:[],successClasses:["success"],errorProps:[],errorClasses:["error"],hintDuration:1e3,delimiter:" "};var v=E;t.default=v}},[[299,2,1]]]);
//# sourceMappingURL=main.031767c8.chunk.js.map