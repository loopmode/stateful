import React from 'react';

import { Button, Form, Message } from 'semantic-ui-react';

import dummyCall from 'utils/dummyCall';

import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';

import { Forms as Info } from './Info';

export default () => (
    <>
        <Info />
        <StatefulForm>
            <Form onSubmit={dummyCall}>
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
    </>
);
