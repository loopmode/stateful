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

    hideOnOuterClick(ref, props);

    usePreventBodyScroll(props.menuVisible);

    return (
        <div
            className={cx('AppMenu', props.className, css.AppMenu, {
                'show-mobile-menu': props.menuVisible
            })}
        >
            <div className="AppMenu--mobile-overlay" />
            <div className="AppMenu--inner">
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

                <div className="AppMenu--contents" ref={ref}>
                    <AppMenuLinks
                        navDelay={props.navDelay}
                        onHideMenu={props.onHideMenu}
                    />
                </div>
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

function usePreventBodyScroll(menuVisible) {
    useEffect(() => {
        const addClass = () => document.body.classList.add('no-scroll');
        const removeClass = () => document.body.classList.remove('no-scroll');
        if (menuVisible) {
            addClass();
        } else {
            removeClass();
        }
        return () => removeClass();
    }, [menuVisible]);
}

function hideOnOuterClick(ref, { onHideMenu, menuVisible }) {
    const handleEvent = event => {
        console.log(ref.current, event.target, menuVisible);
        if (menuVisible && ref.current && !ref.current.contains(event.target)) {
            onHideMenu();
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleEvent);
        return () => document.removeEventListener('click', handleEvent);
    });
}
