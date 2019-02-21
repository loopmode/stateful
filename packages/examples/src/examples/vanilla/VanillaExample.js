import React, { Component } from 'react';
import Stateful from '@loopmode/stateful';
import css from './VanillaExample.scss';

import dummyCall from '../dummyCall';
import ButtonsInfo from '../ButtonsInfo';

export default class VanillaExample extends Component {
    render() {
        return (
            <>
                <h2>Plain HTML</h2>
                <Info />
                <Example />
            </>
        );
    }
}

const Info = () => (
    <>
        <p>
            This example doesn't use any UI frameworks, but some simple CSS
            rules instead. It uses the default wrapper:
            <code className="push">
                {"import Stateful from '@loopmode/stateful';"}
            </code>
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/plain-html/VanillaExample.scss"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Custom button styles
                </a>
            </li>
        </ul>
        <p>
            The <code>pending</code> and <code>busy</code> CSS classes have
            rules to display a little animation based on{' '}
            <a
                href="https://codepen.io/seansean11/pen/dhwzj"
                target="_blank"
                rel="noopener noreferrer"
            >
                this codepen
            </a>
            , while <code>success</code> and <code>error</code> just give it
            green or red background.
        </p>
    </>
);
class Example extends React.Component {
    render() {
        return (
            <div className={css.VanillaExample}>
                <ButtonsInfo />
                <Stateful>
                    <button onClick={this.handleClick}>load</button>
                </Stateful>
                <Stateful>
                    <button onClick={this.handleClick}>load</button>
                </Stateful>
                <Stateful>
                    <button onClick={this.handleClick}>load</button>
                </Stateful>
            </div>
        );
    }
    handleClick = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 2500, max: 3500 });
    };
}
