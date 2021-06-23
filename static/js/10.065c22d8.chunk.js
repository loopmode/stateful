(this["webpackJsonp@stateful/examples"]=this["webpackJsonp@stateful/examples"]||[]).push([[10],{293:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var a=e(56),r=e.n(a),c=e(57),o=e(14),i=(e(0),e(55)),s=e(1),u=function(t){return new Promise((function(n){return setTimeout(n,t)}))};function l(){var t=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(2e3*Math.random());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(2e3*Math.random());case 2:return t.abrupt("return",new Error("Nope"));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Sticky indicator"}),Object(s.jsx)("p",{children:"If you provide a duration of -1, the indicating state will never be automatically reset."}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)(o.Stateful,{successDuration:-1,children:Object(s.jsx)("button",{className:"button",onClick:t,children:"Sticky success"})}),Object(s.jsx)(o.Stateful,{errorDuration:-1,children:Object(s.jsx)("button",{className:"button",onClick:n,children:"Sticky fail"})})]}),Object(s.jsxs)("p",{children:["Note that you can specify ",Object(s.jsx)("code",{children:"successDuration"})," and ",Object(s.jsx)("code",{children:"errorDuration"})," ","individually, or you can specify a value for both using ",Object(s.jsx)("code",{children:"hintDuration"})," instead."]}),Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)(o.Stateful,{hintDuration:-1,children:Object(s.jsx)("button",{className:"button",onClick:function(){return Math.random()>.5?t():n()},children:"Sticky random"})})}),Object(s.jsx)(i.a,{content:'import { Stateful } from "@loopmode/stateful";\nimport raw from "raw.macro";\nimport React from "react";\nimport { ToggleCodeViewer } from "../../ToggleCodeViewer";\n\nconst wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));\n\nexport default function ButtonStickyExample() {\n  const successCallback = async () => {\n    await wait(Math.random() * 2000);\n  };\n  const errorCallback = async () => {\n    await wait(Math.random() * 2000);\n    return new Error("Nope");\n  };\n  const randomCallback = () => {\n    return Math.random() > 0.5 ? successCallback() : errorCallback();\n  };\n  return (\n    <>\n      <h3>Sticky indicator</h3>\n      <p>\n        If you provide a duration of -1, the indicating state will never be automatically reset.\n      </p>\n      <div className="buttons">\n        <Stateful successDuration={-1}>\n          <button className="button" onClick={successCallback}>\n            Sticky success\n          </button>\n        </Stateful>\n\n        <Stateful errorDuration={-1}>\n          <button className="button" onClick={errorCallback}>\n            Sticky fail\n          </button>\n        </Stateful>\n      </div>\n      <p>\n        Note that you can specify <code>successDuration</code> and <code>errorDuration</code>{" "}\n        individually, or you can specify a value for both using <code>hintDuration</code> instead.\n      </p>\n      <div className="buttons">\n        <Stateful hintDuration={-1}>\n          <button className="button" onClick={randomCallback}>\n            Sticky random\n          </button>\n        </Stateful>\n      </div>\n      <ToggleCodeViewer content={raw("./button-sticky-example.tsx")} />\n    </>\n  );\n}\n'})]})}},55:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var a=e(10),r=e(58),c=e(0),o=e.n(c),i=e(1);function s(t){var n=t.language,e=void 0===n?"jsx":n,c=t.content,s=o.a.useState(!1),u=Object(a.a)(s,2),l=u[0],d=u[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("hr",{}),Object(i.jsxs)("a",{href:"#",onClick:function(){return d(!l)},children:[l?"Hide":"Show"," code"]}),l&&Object(i.jsx)(r.a,{language:e,children:c})]})}}}]);
//# sourceMappingURL=10.065c22d8.chunk.js.map