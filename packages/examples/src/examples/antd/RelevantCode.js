import React from 'react';

export default function RelevantCode() {
    return (
        <div className="relevant-code">
            <h3>Relevant code</h3>
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
        </div>
    );
}
