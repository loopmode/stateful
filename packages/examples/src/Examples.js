import React from 'react';
import cx from 'classnames';
import { Route, NavLink } from 'react-router-dom';

import readme from 'md/readme.md';
import Markdown from 'components/Markdown';

import VanillaExample from 'examples/vanilla/VanillaExample';
import SemanticUIExample from 'examples/semantic-ui/SemanticUIExample';
import MaterialUIExample from 'examples/material-ui/MaterialUIExample';
import BootstrapExample from 'examples/bootstrap/BootstrapExample';
import AntDExample from 'examples/antd/AntDExample';

import css from './Examples.scss';

export default () => (
    <div className={cx('Examples', css.Examples)}>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Overview
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/vanilla">Vanilla example</NavLink>
                </li>
                <li>
                    <NavLink to="/semantic-ui">Semantic UI example</NavLink>
                </li>
                <li>
                    <NavLink to="/antd">AntD example</NavLink>
                </li>
                <li>
                    <NavLink to="/bootstrap">Bootstrap example</NavLink>
                </li>
                <li>
                    <NavLink to="/material-ui">Material UI example</NavLink>
                </li>
            </ul>
        </nav>
        <div className="Content">
            <Route
                exact
                path="/"
                component={props => (
                    <Markdown
                        {...props}
                        source={readme}
                        options={{ html: true }}
                    />
                )}
            />
            <Route path="/vanilla" component={VanillaExample} />
            <Route path="/semantic-ui" component={SemanticUIExample} />
            <Route path="/antd" component={AntDExample} />
            <Route path="/bootstrap" component={BootstrapExample} />
            <Route path="/material-ui" component={MaterialUIExample} />
        </div>
    </div>
);
