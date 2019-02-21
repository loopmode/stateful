import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';

import FormExample, { Info as FormInfo } from './FormExample';
import Buttons, { Info as ButtonsInfo } from './ButtonsExample';

export default class SemanticUIExample extends Component {
    render() {
        return (
            <div>
                <h2>Semantic UI</h2>
                <p>
                    Semantic UI is mostly supported out of the box, as it's
                    capable to display the pending, success and error states by
                    merely setting boolean flags on its components.
                </p>
                <ButtonsInfo />
                <Buttons />
                <div className="push">
                    <hr />
                </div>
                <FormInfo />
                <FormExample />
            </div>
        );
    }
}
