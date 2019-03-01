import React from 'react';

import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className="BootstrapExample">
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
