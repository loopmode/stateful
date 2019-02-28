import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import cx from 'classnames';

import css from './AppMenu.scss';
import AppMenuLinks from './AppMenuLinks';

/**
 * Renders the AppMenu container with some behaviour for mobile devices.
 * The actual navigation links are defined in AppMenuLinks.js
 */
export default function AppMenu(props) {
    const ref = useRef();

    hideOnOuterTouch(ref, props);
    preventTouchMove(ref);

    return (
        <div ref={ref} className={cx('AppMenu', props.className, css.AppMenu)}>
            <header className="AppMenu--mobile-header">
                <button
                    className="AppMenu--mobile-close"
                    onClick={event => {
                        event.preventDefault();
                        props.onHideMenu(event);
                    }}
                >
                    <MdClose />
                    CLOSE MENU
                </button>
            </header>

            <div className="AppMenu--contents">
                <AppMenuLinks
                    navDelay={props.navDelay}
                    onHideMenu={props.onHideMenu}
                />
            </div>
        </div>
    );
}
AppMenu.propTypes = {
    children: PropTypes.node,
    menuVisible: PropTypes.bool,
    navDelay: PropTypes.number,
    onHideMenu: PropTypes.func,
    className: PropTypes.string
};

function hideOnOuterTouch(ref, { onHideMenu, menuVisible }) {
    const handleTouch = event => {
        if (menuVisible && ref.current && !ref.current.contains(event.target)) {
            event.preventDefault();
            onHideMenu();
        }
    };
    useEffect(() => {
        document.addEventListener('touchstart', handleTouch);
        return () => document.removeEventListener('touchstart', handleTouch);
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
