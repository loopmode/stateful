import React from 'react';

import './App.css';
import Examples from './examples';

export default () => (
    <div className="App">
        <header>
            <div className="content">
                <h1>@loopmode/stateful</h1>
                <p>React helper for async buttons and more</p>
            </div>
        </header>
        <Examples />
    </div>
);
