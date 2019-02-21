import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import VanillaExample from './vanilla/VanillaExample';
import SemanticUIExample from './semantic-ui/SemanticUIExample';
import MaterialUIExample from './material-ui/MaterialUIExample';
import BootstrapExample from './bootstrap/BootstrapExample';
import AntDExample from './antd/AntDExample';

const Home = () => (
    <div>
        <h1>@loopmode/stateful examples</h1>
    </div>
);

const Examples = () => (
    <Router>
        <div className="Examples">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
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
                <Route exact path="/" component={Home} />
                <Route path="/vanilla" component={VanillaExample} />
                <Route path="/semantic-ui" component={SemanticUIExample} />
                <Route path="/antd" component={AntDExample} />
                <Route path="/bootstrap" component={BootstrapExample} />
                <Route path="/material-ui" component={MaterialUIExample} />
            </div>
        </div>
    </Router>
);
export default Examples;
