import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Container, Message, Segment } from 'semantic-ui-react';

import dummyCall from './dummyCall';

import Stateful, {
    StatefulForm
} from '@loopmode/stateful/lib/wrapper/semantic-ui';

export default class SemanticUIExample extends Component {
    render() {
        return (
            <Container text>
                <h1>Semantic UI Example</h1>

                <h3>Buttons</h3>
                <div>
                    The default <code>semantic-ui-react</code> wrapper can be
                    used via:
                    <Segment>
                        <code>
                            {
                                "import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';"
                            }
                        </code>
                    </Segment>
                    It provides <code>loading</code>, <code>positive</code> and{' '}
                    <code>negative</code> flags to the wrapped component - which
                    is understood by at least the <code>Button</code> component.
                </div>

                <i className="push">
                    Click any of the buttons below. Using random durations and
                    outcomes, the dummy callback will sometimes succeed and
                    sometimes fail.
                </i>

                <Stateful>
                    <Button icon="undo" onClick={this.handleSubmit} />
                </Stateful>
                <Stateful>
                    <Button
                        icon="upload"
                        content="Upload"
                        labelPosition="left"
                        onClick={this.handleSubmit}
                    />
                </Stateful>
                <Stateful busyDelay={1000}>
                    <Button onClick={this.handleSubmit}>
                        With 1s busy delay
                    </Button>
                </Stateful>

                <h3>Form</h3>

                <div>
                    There is an additional wrapper for forms:
                    <Segment>
                        <code>
                            {
                                "import { StatefulForm } from '@loopmode/stateful/lib/wrapper/semantic-ui';"
                            }
                        </code>
                    </Segment>
                    It provides <code>loading</code>, <code>success</code> and{' '}
                    <code>error</code> flags. Note that this also triggers{' '}
                    <code>&lt;Message success&gt;</code> and{' '}
                    <code>&lt;Message error&gt;</code> visibility.
                </div>
                <StatefulForm>
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
                </StatefulForm>
            </Container>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 2500 });
    };
}
