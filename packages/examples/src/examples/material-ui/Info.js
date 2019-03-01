import React from 'react';

export default () => (
    <>
        <h1>Material UI</h1>
        <p>
            While there is a nice loading animation when using Material UI (
            <a
                href="https://material-ui.com/demos/progress/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Progress
            </a>
            ), there is no easy way to just pass a prop to a button and be done
            with it. You still need to create a construct that displays the{' '}
            <code>Progress</code> component conditionally, you have to take care
            of the layout etc.
        </p>
        <p>
            However, that is a typical problem that you will probably have
            solved already, if you're working with Material UI on a large-ish
            application.
        </p>
        <p>
            For that reason, there is no default wrapper for Material UI.
            Instead, have a look at the code of this example for a possible
            approach (see links below).
        </p>
        <p>
            Basically, the trick is to create a component that wraps a{' '}
            <code>Button</code>, accepts some properties like `success`, `error`
            and `loading`, and renders the button accordingly - adding a{' '}
            <code>Progress</code> when needed. That's exactly what I did here,
            based on this{' '}
            <a
                href="https://material-ui.com/demos/progress/#interactive-integration"
                target="_blank"
                rel="noreferrer noopener"
            >
                official example
            </a>{' '}
            and without any prior experience with Material UI.
        </p>
    </>
);
