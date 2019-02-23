import React from 'react';
import { Segment } from 'semantic-ui-react';

export default () => (
    <>
        <h1>Semantic UI</h1>
        <p>
            Semantic UI is mostly supported out of the box, as it's capable to
            display the pending, success and error states by merely setting
            boolean flags on its components.
        </p>

        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stateful configuration
                </a>
            </li>
        </ul>
    </>
);
export const Buttons = () => (
    <>
        <h3>Buttons</h3>
        <div>
            The default <code>semantic-ui-react</code> wrapper can be used via:
            <Segment>
                <code>
                    {
                        "import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';"
                    }
                </code>
            </Segment>
            It provides <code>loading</code>, <code>positive</code> and{' '}
            <code>negative</code> flags to the wrapped component - which is
            understood by at least the <code>Button</code> component.
        </div>
    </>
);
export const Forms = () => (
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
                        "import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';"
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
