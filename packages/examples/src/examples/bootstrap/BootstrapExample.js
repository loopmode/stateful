import React, { Component } from 'react';

import { Button, Container } from 'react-bootstrap';

import dummyCall from '../dummyCall';
import ButtonsInfo from '../ButtonsInfo';

import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';

export default class BootstrapExample extends Component {
    render() {
        return (
            <Container>
                <Info />
                <h3>Buttons</h3>
                <Buttons />

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />
            </Container>
        );
    }
}
const Info = () => (
    <>
        <h2>Bootstrap</h2>

        <p>
            Unfortunately, <code>react-bootstrap</code> does not provide any
            sophisticated loading states or animations, so besides indicating
            success or danger, we need to perform some tricks for the loading
            state.
        </p>
        <p>
            As suggested by the official documentation, the default wrapper
            replaces the <code>children</code> property of the wrapped component
            and displays a "Loading..." string while pending or busy.
        </p>
        <p>
            If you need to change that text or localize it, simply create a
            custom wrapper and provide the <code>pendingProps</code> and{' '}
            <code>busyProps</code> in a similar fashion to how how the default
            wrapper does it.
        </p>

        <p>
            The default <code>react-bootstrap</code> wrapper can be used via:
            <code className="push">
                {
                    "import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';"
                }
            </code>
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js#L4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Bootstrap wrapper default implementation
                </a>
            </li>
        </ul>
    </>
);

class Buttons extends Component {
    render() {
        return (
            <>
                <ButtonsInfo />
                <Stateful>
                    <Button onClick={this.handleSubmit}>Load</Button>
                </Stateful>
                <Stateful>
                    <Button onClick={this.handleSubmit}>Save</Button>
                </Stateful>
            </>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 1500 });
    };
}
