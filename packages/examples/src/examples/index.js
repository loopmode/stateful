import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HTMLExample from './HTMLExample';
import SemanticUIExample from './SemanticUIExample';
import BootstrapExample from './BootstrapExample';

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
                        <Link to="/plain-html">Plain HTML</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/bootstrap" component={BootstrapExample} />
                <Route path="/semantic-ui" component={SemanticUIExample} />
                <Route path="/plain-html" component={HTMLExample} />
            </div>
        </div>
    </Router>
);
export default Examples;
