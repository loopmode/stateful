import React from 'react';
import Prism from 'components/Prism';

export default () => (
    <>
        <h1>AntD</h1>
        <p>
            AntD can't be fully supported out of the box because its buttons do
            not support any kind of success state, so you'll have to define some
            CSS for it yourself. Other than that, its buttons do support a
            loading flag and display an animated spinner, which is great.
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
        </ul>
    </>
);
