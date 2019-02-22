import React from 'react';

import 'semantic-ui-css/semantic.min.css';

import Info from './Info';
import Buttons from './Buttons';
import Forms from './Forms';

export default () => (
    <div className="SemanticUIExample">
        <Info />

        <Buttons />
        <div className="push" />
        <Forms />
    </div>
);
