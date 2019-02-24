import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './AppMenu.scss';

import { MdClose } from 'react-icons/md';

function AppMenu(props) {
    const ref = useRef();

    hideOnOuterClick(ref, props);
    preventTouchMove(ref);

    return (
        <div ref={ref} className={cx('AppMenu', props.className, css.AppMenu)}>
            <div
                className="hide-mobile-menu"
                onClick={event => {
                    event.preventDefault();
                    props.onHideMenu(event);
                }}
            >
                <MdClose />
                <div>CLOSE MENU</div>
            </div>
            {props.children}
        </div>
    );
}
AppMenu.propTypes = {
    children: PropTypes.node,
    menuVisible: PropTypes.bool,
    onHideMenu: PropTypes.func,
    className: PropTypes.string
};

function hideOnOuterClick(ref, { onHideMenu, menuVisible }) {
    const handleClick = event => {
        if (menuVisible && ref.current && !ref.current.contains(event.target)) {
            event.preventDefault();
            onHideMenu();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });
}

function preventTouchMove(ref) {
    // prevent scrolling of the page via menu overlay
    const preventTouchMove = event => {
        if (ref.current === event.target) {
            event.preventDefault();
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

export default AppMenu;
