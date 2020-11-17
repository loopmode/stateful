import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { ButtonExample } from "./examples/ButtonExample";
import { FormExample } from "./examples/FormExample";

import { Start } from "./examples/Start";

const Link = (props: React.ComponentProps<typeof NavLink>) => (
  <NavLink activeClassName="is-active" {...props} />
);

function App() {
  return (
    <Router>
      <div className="App columns">
        <div className="menu column is-one-fifth">
          <p className="menu-label">Examples</p>
          <ul className="menu-list">
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </div>

        <div className="container content column">
          <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/button" component={ButtonExample} />
            <Route path="/form" component={FormExample} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
