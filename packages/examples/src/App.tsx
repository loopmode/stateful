import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { BulmaConfigProvider } from "@loopmode/stateful/lib/presets";

import ButtonComponentExample from "./examples/button-component-example";
import ButtonInlineExample from "./examples/button-inline-example";
import FormContextExample from "./examples/form-context-example";

import { Home } from "./Home";
import StateConsumersExample from "./examples/state-consumers-example";
import ConfigProviderExample from "./examples/config-provider-example";
import ReactHookFormCrudExample from "./examples/react-hook-form-crud-example";
import ConfirmExample from "./examples/confirm-example";
import ButtonStickyExample from "./examples/button-sticky-example";

const Link = (props: React.ComponentProps<typeof NavLink>) => (
  <NavLink activeClassName="is-active" {...props} />
);

function App() {
  return (
    <BulmaConfigProvider>
      <Router>
        <div className="App columns">
          <div className="menu column is-one-fifth">
            <ul className="menu-list">
              <li>
                <Link exact to="/">
                  Home
                </Link>
              </li>
            </ul>
            <p className="menu-label">Examples</p>
            <ul className="menu-list">
              <li>
                <Link to="/config-provider">Config provider</Link>
              </li>
              <li>
                <Link to="/button-inline">Button inline</Link>
              </li>
              <li>
                <Link to="/button-component">Button component</Link>
              </li>
              <li>
                <Link to="/button-sticky">Button sticky</Link>
              </li>
              <li>
                <Link to="/form-context">Form</Link>
              </li>
              <li>
                <Link to="/react-hook-form-crud">CRUD</Link>
              </li>
              <li>
                <Link to="/state-consumers">State consumers</Link>
              </li>
              <li>
                <Link to="/confirm">Confirmation</Link>
              </li>
            </ul>
          </div>

          <div className="container content column">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/button-inline" component={ButtonInlineExample} />
              <Route path="/button-component" component={ButtonComponentExample} />
              <Route path="/button-sticky" component={ButtonStickyExample} />
              <Route path="/form-context" component={FormContextExample} />
              <Route path="/react-hook-form-crud" component={ReactHookFormCrudExample} />
              <Route path="/state-consumers" component={StateConsumersExample} />
              <Route path="/config-provider" component={ConfigProviderExample} />
              <Route path="/confirm" component={ConfirmExample} />
            </Switch>
          </div>
        </div>
      </Router>
    </BulmaConfigProvider>
  );
}

export default App;
