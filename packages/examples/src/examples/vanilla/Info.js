import React from 'react';

export default () => (
    <>
        <h1>Vanilla example</h1>
        <p>
            This example doesn't use any UI frameworks, but some simple CSS
            rules instead. It uses the default wrapper:
        </p>
        <pre className="push">
            <code>{"import Stateful from '@loopmode/stateful';"}</code>
        </pre>
        <p>
            The <code>pending</code> and <code>busy</code> CSS classes display a
            subtle animation, while the <code>success</code> and{' '}
            <code>error</code> classes give it green or red color.
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/vanilla/VanillaExample.scss"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Custom button styles
                </a>
            </li>
        </ul>
    </>
);
