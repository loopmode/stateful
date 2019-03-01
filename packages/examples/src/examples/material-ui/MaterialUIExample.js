import React from 'react';

import 'typeface-roboto';

import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className="MaterialUIExample">
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
