import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import ButtonsInfo from '../ButtonsInfo';
import dummyCall from '../dummyCall';
import css from './AntDExample.scss';
import cx from 'classnames';

import Stateful from '@loopmode/stateful/lib/wrapper/antd';

export default class AntDExample extends React.Component {
    render() {
        return (
            <div className={cx(css.AntDExample, 'AntDExample example')}>
                <h2>AntD</h2>
                <p>
                    AntD can't be fully supported out of the box because its
                    buttons do not know a success state and you'll have to
                    provide your own CSS rules. Other than that, the buttons do
                    support a loading flag and display an animated spinner,
                    which is great.
                </p>
                <Info />
                <h3>Buttons</h3>
                <Buttons />
            </div>
        );
    }
}

const Info = () => (
    <>
        <p>
            The default <code>antd</code> wrapper can be used via:
            <code className="push">
                {"import Stateful from '@loopmode/stateful/lib/wrapper/antd';"}
            </code>
        </p>
        <p>
            AntD already has <code>loading</code> and <code>danger</code>{' '}
            support, but it has no default <code>success</code> handling.
        </p>
        <p>
            For that reason, the default wrapper just adds a<code>success</code>{' '}
            CSS class, but you are still responsible for defining a CSS rule for
            that class.
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Custom button styles for AntD
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/antd.js"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    The default wrapper for AntD
                </a>
            </li>
        </ul>
    </>
);

class Buttons extends React.Component {
    render() {
        return (
            <>
                <ButtonsInfo />
                <Stateful>
                    <Button onClick={this.handleClick} type="primary">
                        Primary
                    </Button>
                </Stateful>
                <Stateful>
                    <Button onClick={this.handleClick}>Default</Button>
                </Stateful>
                <Stateful>
                    <Button onClick={this.handleClick} type="dashed">
                        Dashed
                    </Button>
                </Stateful>
                <Stateful>
                    <Button onClick={this.handleClick} type="danger">
                        Danger
                    </Button>
                </Stateful>
            </>
        );
    }

    handleClick = e => {
        e.preventDefault();
        return dummyCall({ successRate: 1, min: 500, max: 1500 });
    };
}
