import React from 'react';

import cx from 'classnames';
import css from './LoadingOverlay.scss';

import AnimatedLogo from 'components/AnimatedLogo';

const LoadingOverlay = () => (
    <div className={cx('LoadingOverlay', css.LoadingOverlay)}>
        <AnimatedLogo scale={0.5} />
    </div>
);
export default LoadingOverlay;
