import React from 'react';
import { Helmet } from 'react-helmet';

import Info from './Info';
import Buttons from './Buttons';
import Forms from './Forms';
import RelevantCode from './RelevantCode';

import css from './SemanticUIExample';
import cx from 'classnames';
import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className={cx('SemanticUIExample', css.SemanticUIExample)}>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                type="text/css"
            />
            <title>semantic-ui example - @loopmode/stateful</title>
        </Helmet>
        <Info />
        <Buttons />
        <Forms />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
