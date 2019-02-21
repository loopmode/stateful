import React, { Component } from 'react';

import { Button, Container, Form } from 'react-bootstrap';

import dummyCall from './dummyCall';

import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';

export default class BootstrapExample extends Component {
    render() {
        return (
            <Container>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />
                <h1>Bootstrap example</h1>
                <h3>Buttons</h3>
                <div>
                    The default <code>semantic-ui-react</code> wrapper can be
                    used via:
                    <code className="push">
                        {
                            "import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';"
                        }
                    </code>
                    It provides <code>loading</code>, <code>positive</code> and{' '}
                    <code>negative</code> flags to the wrapped component - which
                    is understood by at least the <code>Button</code> component.
                </div>

                <p>
                    Unfortunately, <code>react-bootstrap</code> does not provide
                    any sophisticated loading states or animations.
                </p>
                <p>
                    Instead, the default wrapper configuration replaces the
                    <code>children</code> property of the wrapped component and
                    displays a "Loading..." string while pending or busy.
                </p>
                <p>
                    If you need to change that text or localize it, simply
                    create a custom wrapper and provide the{' '}
                    <code>pendingProps</code> and <code>busyProps</code> in a
                    similar fashion to how{' '}
                    <a
                        href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js#L4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        how the default wrapper does it
                    </a>
                    .
                </p>

                <i className="push">
                    Click any of the buttons below. Using random durations and
                    outcomes, the dummy callback will sometimes succeed and
                    sometimes fail.
                </i>
                <Stateful>
                    <Button onClick={this.handleSubmit}>Load</Button>
                </Stateful>
                <Stateful>
                    <Button onClick={this.handleSubmit}>Save</Button>
                </Stateful>
            </Container>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 1500 });
    };
}
