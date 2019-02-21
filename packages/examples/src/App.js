import React from 'react';

import logo from './logo.svg';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import ListLoader from './examples/ListLoader';
import SemanticUIExample from './examples/SemanticUIExample';
const Home = () => (
    <div>
        <h1>@loopmode/stateful examples</h1>
    </div>
);

const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list-loader">ListLoader</Link>
                    </li>
                    <li>
                        <Link to="/semantic-ui">Semantic UI</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/list-loader" component={ListLoader} />
                <Route path="/semantic-ui" component={SemanticUIExample} />
            </div>
        </div>
    </Router>
);
export default App;
