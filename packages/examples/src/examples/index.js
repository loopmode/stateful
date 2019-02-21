import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Readme from './Readme';
import VanillaExample from './vanilla/VanillaExample';
import SemanticUIExample from './semantic-ui/SemanticUIExample';
import MaterialUIExample from './material-ui/MaterialUIExample';
import BootstrapExample from './bootstrap/BootstrapExample';
import AntDExample from './antd/AntDExample';

export default () => (
    <Router>
        <div className="Examples">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Readme</Link>
                    </li>
                    <li>
                        <Link to="/vanilla">Vanilla</Link>
                    </li>
                    <li>
                        <Link to="/semantic-ui">Semantic UI</Link>
                    </li>
                    <li>
                        <Link to="/antd">AntD</Link>
                    </li>
                    <li>
                        <Link to="/bootstrap">Bootstrap</Link>
                    </li>
                    <li>
                        <Link to="/material-ui">Material UI</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Route exact path="/" component={Readme} />
                <Route path="/vanilla" component={VanillaExample} />
                <Route path="/semantic-ui" component={SemanticUIExample} />
                <Route path="/antd" component={AntDExample} />
                <Route path="/bootstrap" component={BootstrapExample} />
                <Route path="/material-ui" component={MaterialUIExample} />
            </div>
        </div>
    </Router>
);
