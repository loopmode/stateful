import React from 'react';

import 'antd/dist/antd.css';

import css from './AntDExample.scss';
import cx from 'classnames';

import Info from './Info';
import Buttons from './Buttons';
import RelevantCode from './RelevantCode';

import PrevNextLinks from 'components/PrevNextLinks';

export default () => (
    <div className={cx('AntDExample', css.AntDExample)}>
        <Info />
        <Buttons />
        <RelevantCode />
        <PrevNextLinks />
    </div>
);
