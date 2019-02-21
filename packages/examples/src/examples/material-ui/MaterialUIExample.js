import React, { Component } from 'react';

import 'typeface-roboto';

import Info from './Info';
import Buttons from './Buttons';

export default class MaterialUIExample extends Component {
    render() {
        return (
            <div>
                <h1>Material UI</h1>

                <Info />
                <h2>Buttons</h2>
                <Buttons />
            </div>
        );
    }
}
