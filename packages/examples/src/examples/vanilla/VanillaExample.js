import React from 'react';
import { Helmet } from 'react-helmet';

import cx from 'classnames';

import PrevNextLinks from 'components/PrevNextLinks';

import css from './VanillaExample.scss';
import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

export default () => (
    <div className={cx('VanillaExample', css.VanillaExample)}>
        <Helmet>
            <title>vanilla example - @loopmode/stateful</title>
        </Helmet>
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
