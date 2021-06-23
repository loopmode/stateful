(this["webpackJsonp@stateful/examples"]=this["webpackJsonp@stateful/examples"]||[]).push([[15],{296:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var s=t(56),i=t.n(s),a=t(57),c=(t(0),t(14)),r=t(55),l=t(1),o=function(e){return new Promise((function(n){return setTimeout(n,e)}))};function u(){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(4e3);case 2:if(!(Math.random()>.5)){e.next=4;break}return e.abrupt("return",new Error("Something went wrong"));case 4:return e.abrupt("return",Promise.resolve({id:1}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){var e=function(){var e=Object(a.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.abrupt("return",u());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Consumers / Gates"}),Object(l.jsx)("p",{children:"There are a bunch of utility wrappers that only display their contents when a specific stateful status is currently active."}),Object(l.jsx)("p",{children:"You could use this to display some content only while loading, or only after an error."}),Object(l.jsx)("div",{className:"columns is-5-tablet is-4-desktop is-3-widescreen",children:Object(l.jsx)("div",{className:"column is-half",children:Object(l.jsx)(c.Stateful,{monitor:"onSubmit",busyDelay:2e3,successDuration:2e3,errorDuration:-1,children:Object(l.jsxs)("form",{className:"box",onSubmit:e,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",children:"Email"}),Object(l.jsxs)("div",{className:"control has-icons-left",children:[Object(l.jsx)(c.Stateful.Consumer,{children:Object(l.jsx)("input",{type:"email",className:"input",placeholder:"e.g. hkakehas@cisco.com"})}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fa fa-envelope"})})]})]}),Object(l.jsx)("div",{className:"field",children:Object(l.jsx)(c.Stateful.Consumer,{children:Object(l.jsx)("button",{className:"button",type:"submit",children:"Login"})})}),Object(l.jsx)(c.Stateful.IdleConsumer,{children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification",children:"Idle"})})}),Object(l.jsx)(c.Stateful.PendingConsumer,{children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification",children:"Pending or busy"})})}),Object(l.jsx)(c.Stateful.PendingConsumer,{exact:!0,children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification is-info",children:"Pending"})})}),Object(l.jsx)(c.Stateful.BusyConsumer,{exact:!0,children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification is-info",children:"Busy"})})}),Object(l.jsx)(c.Stateful.FinishedConsumer,{children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification",children:"Finished"})})}),Object(l.jsx)(c.Stateful.SuccessConsumer,{children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification is-success",children:"Success"})})}),Object(l.jsx)(c.Stateful.ErrorConsumer,{children:Object(l.jsx)("div",{className:"field",children:Object(l.jsx)("div",{className:"notification is-danger",children:"Error"})})})]})})})})]}),Object(l.jsx)(r.a,{content:'import React from "react";\nimport { Stateful } from "@loopmode/stateful";\nimport { ToggleCodeViewer } from "../../ToggleCodeViewer";\nimport raw from "raw.macro";\n\nconst wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));\n\nasync function randomCallback() {\n  await wait(4000);\n  if (Math.random() > 0.5) {\n    return new Error("Something went wrong");\n  }\n  return Promise.resolve({ id: 1 });\n}\n\nexport default function StateConsumersExample() {\n  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n    return randomCallback();\n  };\n  return (\n    <>\n      <div className="container">\n        <h3>Consumers / Gates</h3>\n        <p>\n          There are a bunch of utility wrappers that only display their contents when a specific\n          stateful status is currently active.\n        </p>\n        <p>\n          You could use this to display some content only while loading, or only after an error.\n        </p>\n        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">\n          <div className="column is-half">\n            <Stateful monitor="onSubmit" busyDelay={2000} successDuration={2000} errorDuration={-1}>\n              <form className="box" onSubmit={handleSubmit}>\n                <div className="field">\n                  <label className="label">Email</label>\n                  <div className="control has-icons-left">\n                    <Stateful.Consumer>\n                      <input type="email" className="input" placeholder="e.g. hkakehas@cisco.com" />\n                    </Stateful.Consumer>\n\n                    <span className="icon is-small is-left">\n                      <i className="fa fa-envelope"></i>\n                    </span>\n                  </div>\n                </div>\n\n                <div className="field">\n                  <Stateful.Consumer>\n                    <button className="button" type="submit">\n                      Login\n                    </button>\n                  </Stateful.Consumer>\n                </div>\n\n                <Stateful.IdleConsumer>\n                  <div className="field">\n                    <div className="notification">Idle</div>\n                  </div>\n                </Stateful.IdleConsumer>\n\n                <Stateful.PendingConsumer>\n                  <div className="field">\n                    <div className="notification">Pending or busy</div>\n                  </div>\n                </Stateful.PendingConsumer>\n\n                <Stateful.PendingConsumer exact>\n                  <div className="field">\n                    <div className="notification is-info">Pending</div>\n                  </div>\n                </Stateful.PendingConsumer>\n\n                <Stateful.BusyConsumer exact>\n                  <div className="field">\n                    <div className="notification is-info">Busy</div>\n                  </div>\n                </Stateful.BusyConsumer>\n\n                <Stateful.FinishedConsumer>\n                  <div className="field">\n                    <div className="notification">Finished</div>\n                  </div>\n                </Stateful.FinishedConsumer>\n\n                <Stateful.SuccessConsumer>\n                  <div className="field">\n                    <div className="notification is-success">Success</div>\n                  </div>\n                </Stateful.SuccessConsumer>\n\n                <Stateful.ErrorConsumer>\n                  <div className="field">\n                    <div className="notification is-danger">Error</div>\n                  </div>\n                </Stateful.ErrorConsumer>\n              </form>\n            </Stateful>\n          </div>\n        </div>\n      </div>\n      <ToggleCodeViewer content={raw("./state-consumers-example.tsx")} />\n    </>\n  );\n}\n'})]})}},55:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var s=t(10),i=t(58),a=t(0),c=t.n(a),r=t(1);function l(e){var n=e.language,t=void 0===n?"jsx":n,a=e.content,l=c.a.useState(!1),o=Object(s.a)(l,2),u=o[0],d=o[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("a",{href:"#",onClick:function(){return d(!u)},children:[u?"Hide":"Show"," code"]}),u&&Object(r.jsx)(i.a,{language:t,children:a})]})}}}]);
//# sourceMappingURL=15.b8637240.chunk.js.map