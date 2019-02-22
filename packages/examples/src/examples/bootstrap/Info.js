import React from 'react';

export default () => (
    <>
        <h2>Bootstrap</h2>
        <p>
            Unfortunately, <code>react-bootstrap</code> does not provide any
            sophisticated loading states or animations, so besides indicating
            success or danger, we need to perform some tricks for the loading
            state.
        </p>
        <p>
            As suggested by the official documentation, the default wrapper
            replaces the <code>children</code> property of the wrapped component
            and displays a "Loading..." string while pending or busy.
        </p>
        <p>
            If you need to change that text or localize it, simply create a
            custom wrapper and provide the <code>pendingProps</code> and{' '}
            <code>busyProps</code> in a similar fashion to how how the default
            wrapper does it.
        </p>
        <p>
            The default <code>react-bootstrap</code> wrapper can be used via:
            <code className="push">
                {
                    "import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';"
                }
            </code>
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js#L4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stateful configuration
                </a>
            </li>
        </ul>
    </>
);
