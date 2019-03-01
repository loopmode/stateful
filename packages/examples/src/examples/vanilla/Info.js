import React from 'react';

import Prism from 'components/Prism';

export default () => (
    <>
        <h1>Vanilla example</h1>
        <p>
            This example doesn't use any UI frameworks, but some simple CSS
            rules instead. It uses the default wrapper:
        </p>
        <Prism>{"import Stateful from '@loopmode/stateful';"}</Prism>
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
