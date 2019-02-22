import React from 'react';
import cx from 'classnames';
import { HashRouter as Router } from 'react-router-dom';

import Examples from './Examples';

import css from './App.scss';

export default () => (
    <Router basename={process.env.REACT_APP_BASENAME}>
        <div className={cx('App', css.App)}>
            <header>
                <h1>@loopmode/stateful</h1>
                <p>React helper for async buttons and more</p>
            </header>
            <Examples />
        </div>
    </Router>
);
