import React from 'react';
import { Helmet } from 'react-helmet';

import css from './AntDExample.scss';
import cx from 'classnames';

import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className={cx('AntDExample', css.AntDExample)}>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.13.6/antd.min.css"
                type="text/css"
            />
            <title>antd example - @loopmode/stateful</title>
        </Helmet>
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
