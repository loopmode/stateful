import React, { Component } from 'react';

import { Button, Form, Message, Segment } from 'semantic-ui-react';

import dummyCall from '../dummyCall';

import { StatefulForm } from '@loopmode/stateful/lib/wrapper/semantic-ui';

export const Info = () => (
    <>
        <h3>Forms</h3>
        <p>
            Semantic UI forms are supported out of the box as well. While there
            is an apparent naming inconsistency with the success and error props
            (they are actually called <code>success</code> and{' '}
            <code>error</code> in the <code>Form</code> component, while they
            are called <code>positive</code> and <code>negative</code> in the{' '}
            <code>Button</code> component) the form does support such props as
            well as a <code>loading</code> one.
        </p>
        <div>
            <p>
                The <code>semantic-ui-react</code> form wrapper can be used via:
            </p>
            <Segment>
                <code>
                    {
                        "import { StatefulForm } from '@loopmode/stateful/lib/wrapper/semantic-ui';"
                    }
                </code>
            </Segment>
            It provides <code>loading</code>, <code>success</code> and{' '}
            <code>error</code> flags to the wrapped component. Note that this
            also triggers <code>&lt;Message success&gt;</code> and{' '}
            <code>&lt;Message error&gt;</code> visibility.
        </div>

        <i className="push">
            Submit the form below. You don't need to fill in anything, the input
            fields are actually ignored. <br /> The example uses{' '}
            <code>hintDuration={5000}</code>, meaning it will remain in success
            or error state for 5 seconds.
        </i>
    </>
);

export default class FormExample extends Component {
    render() {
        return (
            <StatefulForm>
                <Form onSubmit={this.handleSubmit}>
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
                    <Form.Field inline>
                        <label>First Name</label>
                        <input placeholder="First Name" />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Last Name</label>
                        <input placeholder="Last Name" />
                    </Form.Field>
                    <Button type="submit">Log in</Button>
                </Form>
            </StatefulForm>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 2500 });
    };
}
