import React, { Component } from 'react';
import Markdown from 'react-remarkable';

import raw from 'raw.macro';

class Readme extends Component {
    render() {
        return (
            <div className="readme">
                <Markdown source={raw('../../../stateful/README.md')} />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Readme;
