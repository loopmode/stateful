import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListLoader from './ListLoader';
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
                        <Link to="/list-loader">ListLoader</Link>
                    </li>
                    <li>
                        <Link to="/bootstrap">Bootstrap</Link>
                    </li>
                    <li>
                        <Link to="/semantic-ui">Semantic UI</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/list-loader" component={ListLoader} />
                <Route path="/bootstrap" component={BootstrapExample} />
                <Route path="/semantic-ui" component={SemanticUIExample} />
            </div>
        </div>
    </Router>
);
export default Examples;
