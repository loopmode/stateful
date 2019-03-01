import React from 'react';

export default function RelevantCode() {
    return (
        <div className="relevant-code">
            <h3>Relevant code</h3>
            <ul>
                <li>
                    <a
                        href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L5-L17"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Stateful button configuration
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js#L20-L34"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Stateful form configuration
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/loopmode/stateful/tree/master/packages/examples/src/examples/semantic-ui"
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
