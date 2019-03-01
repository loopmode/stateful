import React from 'react';
import { Helmet } from 'react-helmet';

import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className="BootstrapExample">
        <Helmet>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                type="text/css"
            />
        </Helmet>
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
