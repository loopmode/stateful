import React from 'react';
import cx from 'classnames';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import css from './App.scss';

import AppHeader from 'components/AppHeader';
import AppMenu from 'components/AppMenu';

const Readme = React.lazy(() =>
    import(/* webpackChunkName: "Readme" */ 'markdown/Readme')
);
const AntDExample = React.lazy(() =>
    import(/* webpackChunkName: "AntDExample" */ 'examples/antd')
);
const BootstrapExample = React.lazy(() =>
    import(/* webpackChunkName: "BootstrapExample" */ 'examples/bootstrap')
);
const MaterialUIExample = React.lazy(() =>
    import(/* webpackChunkName: "MaterialUIExample" */ 'examples/material-ui')
);
const SemanticUIExample = React.lazy(() =>
    import(/* webpackChunkName: "SemanticUIExample" */ 'examples/semantic-ui')
);
const VanillaExample = React.lazy(() =>
    import(/* webpackChunkName: "VanillaExample" */ 'examples/vanilla')
);

const App = () => {
    const [menuVisible, showMenu] = React.useState(false);

    return (
        <Router basename={process.env.REACT_APP_BASENAME}>
            <div className={cx('App', css.App, { menuVisible })}>
                <AppHeader onShowMenu={() => showMenu(true)} />
                <div className="App--body">
                    <Navigation
                        onHideMenu={() => showMenu(false)}
                        menuVisible={menuVisible}
                    />
                    <Content />
                </div>
            </div>
        </Router>
    );
};

const Navigation = props => {
    const onLinkClicked = event => {
        document.documentElement.scrollTop = 0;
        props.onHideMenu(event);
    };
    return (
        <AppMenu {...props}>
            <ul>
                <li>
                    <NavLink onClick={onLinkClicked} to="/" exact>
                        Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onLinkClicked} to="/vanilla">
                        Vanilla example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onLinkClicked} to="/semantic-ui">
                        Semantic UI example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onLinkClicked} to="/antd">
                        AntD example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onLinkClicked} to="/bootstrap">
                        Bootstrap example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onLinkClicked} to="/material-ui">
                        Material UI example
                    </NavLink>
                </li>
            </ul>
        </AppMenu>
    );
};

const Content = () => (
    <div className="AppContent">
        <Route exact path="/" component={Lazy(Readme)} />
        <Route path="/vanilla" component={Lazy(VanillaExample)} />
        <Route path="/semantic-ui" component={Lazy(SemanticUIExample)} />
        <Route path="/antd" component={Lazy(AntDExample)} />
        <Route path="/bootstrap" component={Lazy(BootstrapExample)} />
        <Route path="/material-ui" component={Lazy(MaterialUIExample)} />
    </div>
);

const Lazy = Component => {
    return props => (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </React.Suspense>
    );
};

export default App;
