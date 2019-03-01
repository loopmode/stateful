import React from 'react';
import Prism from 'components/Prism';

export default () => (
    <>
        <h1>AntD</h1>
        <p>
            AntD buttons do not support success and error state, so you'll have
            to define some CSS for that yourself. Besides that, they do support
            a loading flag to show an animated spinner, which is neat.
        </p>
        <p>
            The default <code>antd</code> wrapper can be used via:
        </p>
        <Prism>
            {"import Stateful from '@loopmode/stateful/lib/wrappers/antd';"}
        </Prism>

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
                    href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stateful configuration
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples/antd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    This example
                </a>
            </li>
        </ul>
    </>
);
