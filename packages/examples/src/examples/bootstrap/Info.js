import React from 'react';
import Prism from 'components/Prism';

export default () => (
    <>
        <h1>Bootstrap</h1>
        <p>
            While <code>react-bootstrap</code> provides danger and success
            variants of their buttons, there is no built-in loading variant.
        </p>
        <p>
            Just as suggested in their docs, the default wrapper replaces the{' '}
            <code>children</code> property of the wrapped component and displays
            a "Loading..." string while pending or busy.
        </p>
        <p>
            If you need to change that text or localize it, simply create your
            own wrapper and provide the <code>pendingProps</code> and{' '}
            <code>busyProps</code> in a similar fashion to how how the{' '}
            <a
                href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js#L4"
                target="_blank"
                rel="noopener noreferrer"
            >
                default
            </a>{' '}
            does it.
        </p>
        <p>
            The default <code>react-bootstrap</code> wrapper can be used via:
        </p>
        <Prism>
            {
                "import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';"
            }
        </Prism>
    </>
);
