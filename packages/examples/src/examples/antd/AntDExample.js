import React from 'react';

import 'antd/dist/antd.css';

import css from './AntDExample.scss';
import cx from 'classnames';

import Info from './Info';
import Buttons from './Buttons';

export default () => (
    <div className={cx('AntDExample', css.AntDExample)}>
        <Info />
        <Buttons />
    </div>
);
