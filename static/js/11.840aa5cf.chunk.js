(this["webpackJsonp@stateful/examples"]=this["webpackJsonp@stateful/examples"]||[]).push([[11],{297:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var r=t(56),s=t.n(r),o=t(57),a=t(14),i=(t(0),t(55)),u=t(1),c={pendingProps:"disabled",pendingClasses:"",busyDelay:0,busyProps:"disabled",busyClasses:"is-loading",successClasses:"is-success",successDuration:2e3,errorClasses:"is-danger",errorDuration:2e3};function l(){return Object(u.jsxs)(a.StatefulConfigProvider,{config:c,children:[Object(u.jsx)(d,{}),Object(u.jsx)(i.a,{content:'import { Stateful, StatefulConfigProvider } from "@loopmode/stateful";\nimport raw from "raw.macro";\nimport React from "react";\nimport { ToggleCodeViewer } from "../../ToggleCodeViewer";\n\n// You can render a StatefulConfigProvider at high level (e.g. wrapping your app)\n// and provide default configuration for all nested Stateful wrappers.\n// You can still use props on individual components to override those defaults.\n// This way, you can create a configuration for your specific UI framework.\n\nconst statefulConfig = {\n  pendingProps: "disabled",\n  pendingClasses: "",\n\n  busyDelay: 0,\n  busyProps: "disabled",\n  busyClasses: "is-loading",\n  //\n  successClasses: "is-success",\n  successDuration: 2000,\n  //\n  errorClasses: "is-danger",\n  errorDuration: 2000,\n};\n\nexport default function ConfigProviderExample() {\n  return (\n    <StatefulConfigProvider config={statefulConfig}>\n      <SomeComponent />\n      <ToggleCodeViewer content={raw("./config-provider-example.tsx")} />\n    </StatefulConfigProvider>\n  );\n}\n\nconst wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));\nfunction SomeComponent() {\n  const successCallback = async () => {\n    await wait(200 + Math.random() * 800);\n  };\n  const errorCallback = async () => {\n    await wait(200 + Math.random() * 800);\n    return new Error("Nope");\n  };\n\n  return (\n    <div className="buttons">\n      <Stateful>\n        <button className="button" onClick={successCallback}>\n          Will succeed\n        </button>\n      </Stateful>\n\n      <Stateful\n        errorClasses="is-warning"\n        errorProps={() => ({\n          title: "Something went wrong...",\n        })}\n        errorDuration={10000}\n      >\n        <button className="button" onClick={errorCallback}>\n          Will fail\n        </button>\n      </Stateful>\n    </div>\n  );\n}\n'})]})}var f=function(n){return new Promise((function(e){return setTimeout(e,n)}))};function d(){var n=function(){var n=Object(o.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(200+800*Math.random());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e=function(){var n=Object(o.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(200+800*Math.random());case 2:return n.abrupt("return",new Error("Nope"));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(a.Stateful,{children:Object(u.jsx)("button",{className:"button",onClick:n,children:"Will succeed"})}),Object(u.jsx)(a.Stateful,{errorClasses:"is-warning",errorProps:function(){return{title:"Something went wrong..."}},errorDuration:1e4,children:Object(u.jsx)("button",{className:"button",onClick:e,children:"Will fail"})})]})}},55:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(10),s=t(58),o=t(0),a=t.n(o),i=t(1);function u(n){var e=n.language,t=void 0===e?"jsx":e,o=n.content,u=a.a.useState(!1),c=Object(r.a)(u,2),l=c[0],f=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("hr",{}),Object(i.jsxs)("a",{href:"#",onClick:function(){return f(!l)},children:[l?"Hide":"Show"," code"]}),l&&Object(i.jsx)(s.a,{language:t,children:o})]})}}}]);
//# sourceMappingURL=11.840aa5cf.chunk.js.map