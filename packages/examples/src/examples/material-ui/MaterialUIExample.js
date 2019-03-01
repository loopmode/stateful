import React from 'react';
import { Helmet } from 'react-helmet';

import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className="MaterialUIExample">
        <Helmet>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto"
                type="text/css"
            />
            <title>material-ui example - @loopmode/stateful</title>
        </Helmet>
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
