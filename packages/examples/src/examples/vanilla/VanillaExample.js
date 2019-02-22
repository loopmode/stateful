import React from 'react';
import cx from 'classnames';

import css from './VanillaExample.scss';
import Info from './Info';
import Buttons from './Buttons';

export default () => (
    <div className={cx('VanillaExample', css.VanillaExample)}>
        <Info />
        <Buttons />
    </div>
);
