import React from 'react';

import Info from './Info';
import Buttons from './Buttons';
import Forms from './Forms';

import css from './SemanticUIExample';
import cx from 'classnames';

export default () => (
    <div className={cx('SemanticUIExample', css.SemanticUIExample)}>
        <Info />
        <Buttons />
        <div className="push" />
        <Forms />
    </div>
);
