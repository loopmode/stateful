import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HTMLExample from './plain-html/HTMLExample';
import SemanticUIExample from './semantic-ui/SemanticUIExample';
import MaterialUIExample from './material-ui/MaterialUIExample';
import BootstrapExample from './bootstrap/BootstrapExample';

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
                        <Link to="/bootstrap">Bootstrap</Link>
                    </li>
                    <li>
                        <Link to="/semantic-ui">Semantic UI</Link>
                    </li>
                    <li>
                        <Link to="/material-ui">Material UI</Link>
                    </li>
                    <li>
                        <Link to="/plain-html">Plain HTML</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/bootstrap" component={BootstrapExample} />
                <Route path="/semantic-ui" component={SemanticUIExample} />
                <Route path="/material-ui" component={MaterialUIExample} />
                <Route path="/plain-html" component={HTMLExample} />
            </div>
        </div>
    </Router>
);
export default Examples;
