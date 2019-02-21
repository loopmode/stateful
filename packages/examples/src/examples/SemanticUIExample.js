import React, { Component } from 'react';

import { Button, Form, Container, Message } from 'semantic-ui-react';

import dummyCall from './dummyCall';

import Stateful from '@loopmode/stateful/lib/semantic-ui';

export default class SemanticUIExample extends Component {
    render() {
        return (
            <Container text>
                <h1>Semantic UI Examples</h1>
                <h3>Buttons</h3>
                <Stateful.Button>
                    <Button icon="undo" onClick={this.handleSubmit} />
                </Stateful.Button>
                <Stateful.Button>
                    <Button
                        icon="upload"
                        content="Upload"
                        labelPosition="left"
                        onClick={this.handleSubmit}
                    />
                </Stateful.Button>
                <Stateful.Button>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Stateful.Button>

                <h3>Form</h3>

                <Stateful.Form>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field inline>
                            <label>First Name</label>
                            <input placeholder="First Name" />
                        </Form.Field>
                        <Form.Field inline>
                            <label>Last Name</label>
                            <input placeholder="Last Name" />
                        </Form.Field>
                        <Button type="submit">Log in</Button>
                        <Message
                            success
                            header="Form Completed"
                            content="You're all signed up for the newsletter"
                        />
                        <Message
                            error
                            header="Something went wrong"
                            content="An unexpected error occurred. Please try again."
                        />
                    </Form>
                </Stateful.Form>
            </Container>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 2000, max: 2500 });
    };
}
