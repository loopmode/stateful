import React from 'react';

import Prism from 'components/Prism';

export default () => (
    <>
        <h1>Semantic UI</h1>
        <p>
            Semantic UI is supported pretty well out of the box, because it is
            capable of displaying the pending, success and error states by
            setting boolean props on its components.
        </p>
    </>
);
export const Buttons = () => (
    <>
        <h3>Buttons</h3>
        <p>
            The <code>semantic-ui-react</code> default wrapper can be used via:
        </p>
        <Prism>
            {
                "import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';"
            }
        </Prism>
        <p>
            It provides <code>loading</code>, <code>positive</code> and{' '}
            <code>negative</code> flags to the wrapped component, which is
            supported by the <code>Button</code> component.
        </p>
    </>
);
export const Forms = () => (
    <>
        <h3>Forms</h3>
        <p>
            Semantic UI forms are supported out of the box as well. Note that
            this also includes <code>&lt;Message success&gt;</code> and{' '}
            <code>&lt;Message error&gt;</code> visibility.
        </p>

        <p>
            The <code>semantic-ui-react</code> form wrapper can be used via:
        </p>
        <Prism>
            {
                "import { StatefulForm } from '@loopmode/stateful/lib/wrappers/semantic-ui';"
            }
        </Prism>
        <p>
            It provides <code>loading</code>, <code>success</code> and{' '}
            <code>error</code> flags to the wrapped component.
        </p>

        <h4>Form Demo</h4>
        <i className="push info">
            Submit the form below. You don't need to fill in anything, the input
            fields are actually ignored. <br /> The example uses{' '}
            <code>hintDuration={5000}</code>, meaning it will remain in success
            or error state for 5 seconds.
        </i>
    </>
);
