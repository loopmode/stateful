import React from 'react';

import cx from 'classnames';
import css from './Logo.scss';
import Hex from './Hex';

// complicated solution for an animated logo using lots of nested divs and and lots of CSS
// TODO: just code the damn thing using javascript and some basic trigonometry - shouldn't be too hard.

export default function Logo({
    className,
    animated = true,
    scale = 1,
    ...props
}) {
    return (
        <div {...props} className={cx('Logo', css.Logo, className)}>
            <div
                className={'Logo-outer'}
                style={{ transform: `scale(${scale})` }}
            >
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
}

function Rotator({ children, className }) {
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
}
