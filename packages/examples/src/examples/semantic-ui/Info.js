import React from 'react';

export default () => (
    <>
        <h1>Semantic UI</h1>
        <p>
            Semantic UI is supported pretty well out of the box, because it is
            capable of displaying the pending, success and error states by
            passing props on its components.
        </p>
    </>
);
export const Buttons = () => (
    <>
        <h3>Buttons</h3>
        <p>
            The <code>semantic-ui-react</code> default wrapper can be used via:
        </p>
        <pre className="push">
            <code>
                {
                    "import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';"
                }
            </code>
        </pre>
        <p>
            It provides <code>loading</code>, <code>positive</code> and{' '}
            <code>negative</code> flags to the wrapped component, which is
            supported by the <code>Button</code> component.
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L5-L17"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stateful button configuration
                </a>
            </li>
        </ul>
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

        <p>
            The <code>semantic-ui-react</code> form wrapper can be used via:
        </p>
        <pre className="push">
            <code>
                {
                    "import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';"
                }
            </code>
        </pre>
        <p>
            It provides <code>loading</code>, <code>success</code> and{' '}
            <code>error</code> flags to the wrapped component. Note that this
            also triggers <code>&lt;Message success&gt;</code> and{' '}
            <code>&lt;Message error&gt;</code> visibility.
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L20-L34"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stateful button configuration
                </a>
            </li>
        </ul>

        <h4>Form Demo</h4>
        <i className="push info">
            Submit the form below. You don't need to fill in anything, the input
            fields are actually ignored. <br /> The example uses{' '}
            <code>hintDuration={5000}</code>, meaning it will remain in success
            or error state for 5 seconds.
        </i>
    </>
);
