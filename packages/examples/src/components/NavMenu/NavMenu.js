import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './NavMenu.scss';

import { MdClose } from 'react-icons/md';

function NavMenu(props) {
    const ref = useRef();

    const onClose = event => {
        event.preventDefault();
        props.onClose(event);
    };

    usePreventTouchMove(ref);

    return (
        <div ref={ref} className={cx('NavMenu', props.className, css.NavMenu)}>
            <div className="hide-mobile-menu" onClick={onClose}>
                <MdClose />
                <div>CLOSE MENU</div>
            </div>
            {props.children}
        </div>
    );
}
NavMenu.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    className: PropTypes.string
};

function usePreventTouchMove(ref) {
    // prevent scrolling of the page via menu overlay
    const preventTouchMove = event => {
        if (ref.current) {
            if (ref.current === event.target) {
                event.preventDefault();
            }
        }
    };
    useEffect(() => {
        document.addEventListener('touchmove', preventTouchMove, {
            passive: false
        });
        return () => {
            document.removeEventListener('touchmove', preventTouchMove, {
                passive: false
            });
        };
    });
}

export default NavMenu;
