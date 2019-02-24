import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import css from './App.scss';

import AppHeader from 'components/AppHeader';
import NavMenu from 'components/NavMenu';
import Lazy from 'components/Lazy';

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
    const [menuVisible, setMenuVisible] = useState(false);
    const showMenu = () => setMenuVisible(true);
    const hideMenu = () => setMenuVisible(false);
    return (
        <Router basename={process.env.REACT_APP_BASENAME}>
            <div className={cx('App', css.App, { menuVisible })}>
                <AppHeader onShowMenu={showMenu} />
                <div className="AppBody">
                    <AppMenu onHideMenu={hideMenu} />
                    <AppContent />
                </div>
            </div>
        </Router>
    );
};

const AppMenu = ({ onHideMenu }) => {
    const onLinkClicked = event => {
        document.documentElement.scrollTop = 0;
        onHideMenu(event);
    };
    return (
        <NavMenu className="AppMenu" onClose={onHideMenu}>
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
        </NavMenu>
    );
};
AppMenu.propTypes = {
    onHideMenu: PropTypes.func
};

const AppContent = () => (
    <div className="AppContent">
        <Route exact path="/" component={Lazy(Readme)} />
        <Route path="/vanilla" component={Lazy(VanillaExample)} />
        <Route path="/semantic-ui" component={Lazy(SemanticUIExample)} />
        <Route path="/antd" component={Lazy(AntDExample)} />
        <Route path="/bootstrap" component={Lazy(BootstrapExample)} />
        <Route path="/material-ui" component={Lazy(MaterialUIExample)} />
    </div>
);

export default App;
