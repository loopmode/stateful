import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import readme from 'markdown/readme.md';
import Markdown from 'components/Markdown';
import NavMenu from 'components/NavMenu';

import AppHeader from 'components/AppHeader';

import VanillaExample from 'examples/vanilla/VanillaExample';
import SemanticUIExample from 'examples/semantic-ui/SemanticUIExample';
import MaterialUIExample from 'examples/material-ui/MaterialUIExample';
import BootstrapExample from 'examples/bootstrap/BootstrapExample';
import AntDExample from 'examples/antd/AntDExample';

import css from './App.scss';

export default () => {
    const [showMobileMenu, setShowMenu] = useState(false);
    const showMenu = () => setShowMenu(true);
    const hideMenu = () => setShowMenu(false);
    return (
        <Router basename={process.env.REACT_APP_BASENAME}>
            <div className={cx('App', css.App, { showMobileMenu })}>
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
    return (
        <NavMenu className="AppMenu" onClose={onHideMenu}>
            <ul>
                <li>
                    <NavLink onClick={onHideMenu} to="/" exact>
                        Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onHideMenu} to="/vanilla">
                        Vanilla example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onHideMenu} to="/semantic-ui">
                        Semantic UI example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onHideMenu} to="/antd">
                        AntD example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onHideMenu} to="/bootstrap">
                        Bootstrap example
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onHideMenu} to="/material-ui">
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

const Readme = props => (
    <Markdown
        {...props}
        className="Readme"
        source={readme}
        options={{ html: true }}
    />
);

const AppContent = () => (
    <div className="AppContent">
        <Route exact path="/" component={Readme} />
        <Route path="/vanilla" component={VanillaExample} />
        <Route path="/semantic-ui" component={SemanticUIExample} />
        <Route path="/antd" component={AntDExample} />
        <Route path="/bootstrap" component={BootstrapExample} />
        <Route path="/material-ui" component={MaterialUIExample} />
    </div>
);
