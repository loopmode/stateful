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
                <h1>Bootstrap Examples</h1>
                <h3>Buttons</h3>
                <Stateful>
                    <Button onClick={this.handleSubmit}>Load</Button>
                </Stateful>
            </Container>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 1500 });
    };
}
