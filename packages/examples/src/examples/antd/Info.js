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
    </>
);
