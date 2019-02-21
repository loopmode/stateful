import React, { Component } from 'react';

import { Button, Segment } from 'semantic-ui-react';

import dummyCall from '../dummyCall';
import ButtonsInfo from '../ButtonsInfo';

import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';

export const Info = () => (
    <>
        <h3>Buttons</h3>
        <div>
            The default <code>semantic-ui-react</code> wrapper can be used via:
            <Segment>
                <code>
                    {
                        "import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';"
                    }
                </code>
            </Segment>
            It provides <code>loading</code>, <code>positive</code> and{' '}
            <code>negative</code> flags to the wrapped component - which is
            understood by at least the <code>Button</code> component.
        </div>
    </>
);

export default class ButtonsExample extends Component {
    render() {
        return (
            <>
                <ButtonsInfo />
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
            </>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 2500 });
    };
}
