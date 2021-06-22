(this["webpackJsonp@stateful/examples"]=this["webpackJsonp@stateful/examples"]||[]).push([[14],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O})),t.d(n,"useData",(function(){return U}));var r=t(66),a=t(11),s=t(56),i=t.n(s),c=t(57),o=t(10),l=t(0),u=t.n(l),d=t(9),m=t.n(d),h=t(14),b=t(55),f=t(3),p=t(8),j=t(290),x=t(1);function O(){return Object(x.jsxs)("div",{className:"CrudExample",children:[Object(x.jsx)(N,{}),Object(x.jsx)(b.a,{content:'import React from "react";\nimport cx from "classnames";\nimport { Stateful } from "@loopmode/stateful";\nimport { ToggleCodeViewer } from "../../ToggleCodeViewer";\nimport raw from "raw.macro";\nimport { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";\nimport { useForm } from "react-hook-form";\n\nexport type User = {\n  id: string;\n  name: string;\n  email: string;\n};\n\nexport default function CrudExample() {\n  return (\n    <div className="CrudExample">\n      <UsersCrudPage />\n      <ToggleCodeViewer content={raw("./react-hook-form-crud-example.tsx")} />\n    </div>\n  );\n}\n\nconst currentPath = "/react-hook-form-crud";\n\n// this hook basically mocks server+fetch mechanisms\nexport function useData() {\n  const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));\n  const uuid = () => Math.random().toString(36).slice(-6);\n\n  const [users, setUsers] = React.useState<User[]>([\n    { id: "pfuo8l", name: "John", email: "john@domain.com" },\n    { id: "mz2q6k", name: "Jane", email: "jane@domain.com" },\n  ]);\n\n  const deleteUser = React.useCallback(async (id) => {\n    await wait(500 + Math.random() * 500);\n    if (Math.random() > 0.5) {\n      throw new Error("failed for some reasons");\n    }\n    setUsers((users) => users.filter((user) => user.id !== id));\n  }, []);\n\n  const createUser = React.useCallback(\n    async (data: Omit<User, "id">) => {\n      await wait(500 + Math.random() * 500);\n\n      if (users.find((user) => user.email === data.email)) {\n        throw new Error("Email already exists");\n      }\n      const newUser: User = { ...data, id: uuid() };\n      setUsers((current) => [...current, newUser]);\n    },\n    [users]\n  );\n\n  const updateUser = React.useCallback(\n    async (id: string, data: Partial<User>) => {\n      await wait(500 + Math.random() * 500);\n      const index = users.findIndex((user) => user.id === id);\n      if (index === -1) {\n        throw new Error("User not found");\n      }\n\n      const next = [...users];\n      next[index] = {\n        ...next[index],\n        ...data,\n      };\n\n      setUsers(next);\n    },\n    [users]\n  );\n\n  return {\n    users,\n    deleteUser,\n    createUser,\n    updateUser,\n  };\n}\n\nfunction UsersCrudPage() {\n  const history = useHistory();\n  const { users, deleteUser, createUser, updateUser } = useData();\n\n  const handleCreateUser = React.useCallback(\n    async (data: User) => {\n      try {\n        await createUser(data);\n        history.push(`${currentPath}/list`);\n      } catch (error) {\n        return error;\n      }\n    },\n    [createUser, history]\n  );\n\n  const handleUpdateUser = React.useCallback(\n    async (data: User) => {\n      try {\n        await updateUser(data.id, data);\n        history.push(`${currentPath}/list`);\n      } catch (error) {\n        return error;\n      }\n    },\n    [updateUser, history]\n  );\n\n  return (\n    <>\n      <nav className="container is-flex">\n        <Route path={`${currentPath}/(create|edit)`}>\n          <Link className="button" to={`${currentPath}/list`} children="Back to list" />\n        </Route>\n        <span className="is-flex-1" />\n        <Route path={`${currentPath}/list`}>\n          <Link className="button" to={`${currentPath}/create`} children="Create new user" />\n        </Route>\n      </nav>\n\n      <hr />\n\n      <Switch>\n        <Redirect exact from={`${currentPath}/`} to={`${currentPath}/list`} />\n        <Route path={`${currentPath}/list`}>\n          <UsersList users={users} onDeleteUser={(id) => deleteUser(id)} />\n        </Route>\n\n        <Route\n          path={`${currentPath}/create`}\n          render={() => {\n            return <UserForm onSubmit={(data) => handleCreateUser(data)} />;\n          }}\n        ></Route>\n\n        <Route\n          path={`${currentPath}/edit/:id`}\n          render={(props) => {\n            const user = users.find((user) => user.id === props.match.params.id);\n            return <UserForm onSubmit={(data) => handleUpdateUser(data)} initialUser={user} />;\n          }}\n        ></Route>\n      </Switch>\n    </>\n  );\n}\n\nfunction UserForm(props: {\n  initialUser?: User;\n  userId?: string;\n  onSubmit: (data: User) => Promise<any>;\n}) {\n  const { register, handleSubmit, reset, errors } = useForm({\n    defaultValues: props.initialUser,\n  });\n\n  return (\n    <Stateful monitor="onSubmit" provideContext>\n      {/*\n       * Due to how react-hook-form works, we need to use a render function here.\n       *\n       * In react-hook-form, while validation errors will prevent onSubmit, there won\'t be any kind of error\n       * that Stateful could detect in order to indicate the failure.\n       * However, you can provide a second callback to the handleSubmit function,\n       * and it will be invoked with validation errors.\n       *\n       * Also, you can use a render function for Stateful and access its internal handlers.\n       *\n       * Effectively, you can pass the onReject handler as validation error handler.\n       */}\n      {({ handlers }) => (\n        <form onSubmit={handleSubmit(props.onSubmit, handlers.onReject)}>\n          <input type="hidden" name="id" ref={register} />\n          <div className="field">\n            <label className="label">Name</label>\n            <div className="control has-icons-left">\n              <input\n                type="text"\n                className={cx("input", { "is-danger": errors.name })}\n                name="name"\n                ref={register({\n                  required: "required",\n                  minLength: { value: 3, message: "min length is 3" },\n                  maxLength: { value: 40, message: "max length is 40" },\n                })}\n              />\n              <span className="icon is-small is-left">\n                <i className="fa fa-user"></i>\n              </span>\n              {errors.name && <p className="help is-danger">{errors.name.message}</p>}\n            </div>\n          </div>\n          <div className="field">\n            <label className="label">Email</label>\n            <div className="control has-icons-left">\n              <input\n                type="text"\n                className={cx("input", { "is-danger": errors.email })}\n                name="email"\n                ref={register({\n                  required: "required",\n                  pattern: { value: /\\S+@\\S+\\.\\S+/, message: "Not a valid email" },\n                })}\n              />\n              <span className="icon is-small is-left">\n                <i className="fa fa-envelope"></i>\n              </span>\n              {errors.email && <p className="help is-danger">{errors.email.message}</p>}\n            </div>\n          </div>\n\n          <div className="field is-flex">\n            <Stateful>\n              <button type="button" className="button" onClick={() => reset(props.initialUser)}>\n                Reset\n              </button>\n            </Stateful>\n\n            <span className="is-flex-1" />\n            <Stateful.Consumer>\n              <button className="button" type="submit">\n                {props.initialUser ? "Save" : "Create new"} User\n              </button>\n            </Stateful.Consumer>\n          </div>\n        </form>\n      )}\n    </Stateful>\n  );\n}\n\nfunction UsersList(props: { users: User[]; onDeleteUser: (id: string) => Promise<any> }) {\n  return (\n    <table className="table is-hoverable">\n      <thead>\n        <tr>\n          <th>id</th>\n          <th>name</th>\n          <th>email</th>\n          <th className="has-text-right">actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        {props.users.map((user) => {\n          return (\n            <tr key={user.id}>\n              <td>{user.id}</td>\n              <td>{user.name}</td>\n              <td>{user.email}</td>\n              <td className="has-text-right">\n                <div className="buttons is-inline-block">\n                  <Stateful>\n                    <Link className="button" to={`/react-hook-form-crud/edit/${user.id}`}>\n                      Edit\n                    </Link>\n                  </Stateful>\n                  <Stateful>\n                    <button className="button" onClick={() => props.onDeleteUser(user.id)}>\n                      Delete\n                    </button>\n                  </Stateful>\n                </div>\n              </td>\n            </tr>\n          );\n        })}\n      </tbody>\n    </table>\n  );\n}\n'})]})}var v="/react-hook-form-crud";function U(){var e=function(e){return new Promise((function(n){return setTimeout(n,e)}))},n=u.a.useState([{id:"pfuo8l",name:"John",email:"john@domain.com"},{id:"mz2q6k",name:"Jane",email:"jane@domain.com"}]),t=Object(o.a)(n,2),s=t[0],l=t[1],d=u.a.useCallback(function(){var n=Object(c.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(500+500*Math.random());case 2:if(!(Math.random()>.5)){n.next=4;break}throw new Error("failed for some reasons");case 4:l((function(e){return e.filter((function(e){return e.id!==t}))}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]),m=u.a.useCallback(function(){var n=Object(c.a)(i.a.mark((function n(t){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(500+500*Math.random());case 2:if(!s.find((function(e){return e.email===t.email}))){n.next=4;break}throw new Error("Email already exists");case 4:c=Object(a.a)(Object(a.a)({},t),{},{id:Math.random().toString(36).slice(-6)}),l((function(e){return[].concat(Object(r.a)(e),[c])}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[s]),h=u.a.useCallback(function(){var n=Object(c.a)(i.a.mark((function n(t,c){var o,u;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(500+500*Math.random());case 2:if(-1!==(o=s.findIndex((function(e){return e.id===t})))){n.next=5;break}throw new Error("User not found");case 5:(u=Object(r.a)(s))[o]=Object(a.a)(Object(a.a)({},u[o]),c),l(u);case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[s]);return{users:s,deleteUser:d,createUser:m,updateUser:h}}function N(){var e=Object(f.g)(),n=U(),t=n.users,r=n.deleteUser,a=n.createUser,s=n.updateUser,o=u.a.useCallback(function(){var n=Object(c.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a(t);case 3:e.push("".concat(v,"/list")),n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),[a,e]),l=u.a.useCallback(function(){var n=Object(c.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s(t.id,t);case 3:e.push("".concat(v,"/list")),n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),[s,e]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("nav",{className:"container is-flex",children:[Object(x.jsx)(f.b,{path:"".concat(v,"/(create|edit)"),children:Object(x.jsx)(p.b,{className:"button",to:"".concat(v,"/list"),children:"Back to list"})}),Object(x.jsx)("span",{className:"is-flex-1"}),Object(x.jsx)(f.b,{path:"".concat(v,"/list"),children:Object(x.jsx)(p.b,{className:"button",to:"".concat(v,"/create"),children:"Create new user"})})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(f.d,{children:[Object(x.jsx)(f.a,{exact:!0,from:"".concat(v,"/"),to:"".concat(v,"/list")}),Object(x.jsx)(f.b,{path:"".concat(v,"/list"),children:Object(x.jsx)(g,{users:t,onDeleteUser:function(e){return r(e)}})}),Object(x.jsx)(f.b,{path:"".concat(v,"/create"),render:function(){return Object(x.jsx)(w,{onSubmit:function(e){return o(e)}})}}),Object(x.jsx)(f.b,{path:"".concat(v,"/edit/:id"),render:function(e){var n=t.find((function(n){return n.id===e.match.params.id}));return Object(x.jsx)(w,{onSubmit:function(e){return l(e)},initialUser:n})}})]})]})}function w(e){var n=Object(j.a)({defaultValues:e.initialUser}),t=n.register,r=n.handleSubmit,a=n.reset,s=n.errors;return Object(x.jsx)(h.Stateful,{monitor:"onSubmit",provideContext:!0,children:function(n){var i=n.handlers;return Object(x.jsxs)("form",{onSubmit:r(e.onSubmit,i.onReject),children:[Object(x.jsx)("input",{type:"hidden",name:"id",ref:t}),Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{className:"label",children:"Name"}),Object(x.jsxs)("div",{className:"control has-icons-left",children:[Object(x.jsx)("input",{type:"text",className:m()("input",{"is-danger":s.name}),name:"name",ref:t({required:"required",minLength:{value:3,message:"min length is 3"},maxLength:{value:40,message:"max length is 40"}})}),Object(x.jsx)("span",{className:"icon is-small is-left",children:Object(x.jsx)("i",{className:"fa fa-user"})}),s.name&&Object(x.jsx)("p",{className:"help is-danger",children:s.name.message})]})]}),Object(x.jsxs)("div",{className:"field",children:[Object(x.jsx)("label",{className:"label",children:"Email"}),Object(x.jsxs)("div",{className:"control has-icons-left",children:[Object(x.jsx)("input",{type:"text",className:m()("input",{"is-danger":s.email}),name:"email",ref:t({required:"required",pattern:{value:/\S+@\S+\.\S+/,message:"Not a valid email"}})}),Object(x.jsx)("span",{className:"icon is-small is-left",children:Object(x.jsx)("i",{className:"fa fa-envelope"})}),s.email&&Object(x.jsx)("p",{className:"help is-danger",children:s.email.message})]})]}),Object(x.jsxs)("div",{className:"field is-flex",children:[Object(x.jsx)(h.Stateful,{children:Object(x.jsx)("button",{type:"button",className:"button",onClick:function(){return a(e.initialUser)},children:"Reset"})}),Object(x.jsx)("span",{className:"is-flex-1"}),Object(x.jsx)(h.Stateful.Consumer,{children:Object(x.jsxs)("button",{className:"button",type:"submit",children:[e.initialUser?"Save":"Create new"," User"]})})]})]})}})}function g(e){return Object(x.jsxs)("table",{className:"table is-hoverable",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"id"}),Object(x.jsx)("th",{children:"name"}),Object(x.jsx)("th",{children:"email"}),Object(x.jsx)("th",{className:"has-text-right",children:"actions"})]})}),Object(x.jsx)("tbody",{children:e.users.map((function(n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:n.id}),Object(x.jsx)("td",{children:n.name}),Object(x.jsx)("td",{children:n.email}),Object(x.jsx)("td",{className:"has-text-right",children:Object(x.jsxs)("div",{className:"buttons is-inline-block",children:[Object(x.jsx)(h.Stateful,{children:Object(x.jsx)(p.b,{className:"button",to:"/react-hook-form-crud/edit/".concat(n.id),children:"Edit"})}),Object(x.jsx)(h.Stateful,{children:Object(x.jsx)("button",{className:"button",onClick:function(){return e.onDeleteUser(n.id)},children:"Delete"})})]})})]},n.id)}))})]})}},55:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(10),a=t(58),s=t(0),i=t.n(s),c=t(1);function o(e){var n=e.language,t=void 0===n?"jsx":n,s=e.content,o=i.a.useState(!1),l=Object(r.a)(o,2),u=l[0],d=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("a",{href:"#",onClick:function(){return d(!u)},children:[u?"Hide":"Show"," code"]}),u&&Object(c.jsx)(a.a,{language:t,children:s})]})}}}]);
//# sourceMappingURL=14.7894fc75.chunk.js.map