import React from 'react';

export default () => (
    <>
        <h1>Vanilla example</h1>
        <p>
            This example doesn't use any UI frameworks, but some simple CSS
            rules instead. It uses the default wrapper:
            <code className="push">
                {"import Stateful from '@loopmode/stateful';"}
            </code>
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
        <p>
            The <code>pending</code> and <code>busy</code> CSS classes have
            rules to display a little animation based on{' '}
            <a
                href="https://codepen.io/seansean11/pen/dhwzj"
                target="_blank"
                rel="noopener noreferrer"
            >
                this codepen
            </a>
            , while <code>success</code> and <code>error</code> just give it
            green or red background.
        </p>
    </>
);
