import React from 'react';

import cx from 'classnames';
import css from './Logo.scss';
import Hex from './Hex';

const Rotator = ({ children, className }) => {
    return (
        <div className={cx('rotator', className)}>
            <div className="center-outer">
                <div className="center-inner">
                    <div className="rotation rotation-outer">
                        <div className="position">
                            <div className="rotation rotation-inner">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Logo = ({ animated = true, scale = 1 }) => (
    <div className={cx('Logo', css.Logo)}>
        <div className={'Logo-outer'} style={{ transform: `scale(${scale})` }}>
            <div className={cx('Logo-inner')}>
                <Rotator className={cx('rotator-1', { animated })}>
                    <Hex size={50} className="hex" />
                </Rotator>

                <Rotator className={cx('rotator-2', { animated })}>
                    <Hex size={50} className="hex" />
                </Rotator>

                <Rotator className={cx('rotator-3', { animated })}>
                    <Hex size={50} className="hex" />
                </Rotator>
            </div>
        </div>
    </div>
);
export default Logo;
