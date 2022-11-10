import React, { lazy } from "react";
import cx from "classnames";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { Home } from "./Home";

import "./App.scss";
import LoadingOverlay from "./components/LoadingOverlay";
import { BulmaAssetsProvider } from "./frameworks/bulma/BulmaAssetsProvider";
import { BulmaStatefulConfig } from "./frameworks/bulma/BulmaStatefulConfig";
import { BootstrapStatefulConfig } from "./frameworks/bootstrap/BootstrapStatefulConfig";
import { BootstrapAssetsProvider } from "./frameworks/bootstrap/BootstrapAssetsProvider";

const AppHeader = lazy(() => import("./components/AppHeader"));
const AppMenu = lazy(() => import("./components/AppMenu"));

function App() {
  const [isMobileMenuVisible, setMobileMenuVisible] = React.useState(false);
  const showMenu = React.useCallback(() => setMobileMenuVisible(true), []);
  const hideMenu = React.useCallback(() => setMobileMenuVisible(false), []);

  return (
    <HelmetProvider>
      <React.Suspense fallback={<LoadingOverlay />}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className={cx("App")}>
            <AppHeader onShowMenu={showMenu} />
            <div className="App--body">
              <AppMenu onHideMenu={hideMenu} mobileMenuVisible={isMobileMenuVisible}>
                <h4>Bulma</h4>
                <NavLink to="/bulma/config-provider" children="Config provider" />
                <NavLink to="/bulma/button-inline" children="Button inline" />
                <NavLink to="/bulma/button-component" children="Button component" />
                <NavLink to="/bulma/button-sticky" children="Button sticky" />
                <NavLink to="/bulma/form-context" children="Form" />
                <NavLink to="/bulma/react-hook-form" children="react-hook-form" />
                {/*  <NavLink to="/bulma/react-hook-form-crud" children="CRUD" /> */}
                <NavLink to="/bulma/state-consumers" children="State consumers" />
                <NavLink to="/bulma/confirm" children="Confirmation" />
                <h4>Bootstrap</h4>
                <NavLink to="/bootstrap/button-inline" children="Button inline" />
              </AppMenu>
              <main>
                <React.Suspense fallback={<LoadingOverlay />}>
                  <Route path="/" exact component={Home} />
                  <Route path="/bulma">
                    <BulmaStatefulConfig>
                      <BulmaAssetsProvider>
                        <Route
                          path="/bulma/button-inline"
                          component={lazy(() => import("./examples/bulma/button-inline-example"))}
                        />
                        <Route
                          path="/bulma/button-component"
                          component={lazy(
                            () => import("./examples/bulma/button-component-example")
                          )}
                        />
                        <Route
                          path="/bulma/button-sticky"
                          component={lazy(() => import("./examples/bulma/button-sticky-example"))}
                        />
                        <Route
                          path="/bulma/form-context"
                          component={lazy(() => import("./examples/bulma/form-context-example"))}
                        />
                        {/*<Route
                          path="/bulma/react-hook-form-crud"
                          component={lazy(
                            () => import("./examples/bulma/react-hook-form-crud-example")
                          )}
                        />*/}
                        <Route
                          path="/bulma/react-hook-form"
                          component={lazy(() => import("./examples/bulma/react-hook-form-example"))}
                        />
                        <Route
                          path="/bulma/state-consumers"
                          component={lazy(() => import("./examples/bulma/state-consumers-example"))}
                        />
                        <Route
                          path="/bulma/config-provider"
                          component={lazy(() => import("./examples/bulma/config-provider-example"))}
                        />
                        <Route
                          path="/bulma/confirm"
                          component={lazy(() => import("./examples/bulma/confirm-example"))}
                        />
                      </BulmaAssetsProvider>
                    </BulmaStatefulConfig>
                  </Route>

                  <Route path="/bootstrap">
                    <BootstrapStatefulConfig>
                      <BootstrapAssetsProvider>
                        <Route
                          path="/bootstrap/button-inline"
                          component={lazy(
                            () => import("./examples/bootstrap/button-inline-example")
                          )}
                        />
                      </BootstrapAssetsProvider>
                    </BootstrapStatefulConfig>
                  </Route>
                </React.Suspense>
              </main>
            </div>
          </div>
        </Router>
      </React.Suspense>
    </HelmetProvider>
  );
}

export default App;
