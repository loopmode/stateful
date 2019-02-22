import React from 'react';

export default () => (
    <>
        <h2>AntD</h2>
        <p>
            AntD can't be fully supported out of the box because its buttons do
            not support any kind of success state, so you'll have to define some
            CSS for it yourself. Other than that, its buttons do support a
            loading flag and display an animated spinner, which is great.
        </p>
        <p>
            The default <code>antd</code> wrapper can be used via:
            <code className="push">
                {"import Stateful from '@loopmode/stateful/lib/wrapper/antd';"}
            </code>
        </p>
        <p>
            AntD already has <code>loading</code> and <code>danger</code>{' '}
            support, but it has no default <code>success</code> handling.
        </p>
        <p>
            For that reason, the default wrapper just adds a<code>success</code>{' '}
            CSS class, but you are still responsible for defining a CSS rule for
            that class.
        </p>
        <p>Have a look at the relevant code:</p>
        <ul>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/antd/AntDExample.scss"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Custom button styles
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/antd.js"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stateful configuration
                </a>
            </li>
        </ul>
    </>
);
