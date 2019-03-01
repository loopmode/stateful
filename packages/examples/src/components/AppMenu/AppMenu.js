import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import cx from 'classnames';

import css from './AppMenu.scss';
import AppMenuLinks from './AppMenuLinks';

import useOutsideEvent from './useOutsideEvent';
import useBodyClass from './useBodyClass';

/**
 * Renders the AppMenu container with some behaviour for mobile devices.
 * The actual navigation links are defined in AppMenuLinks.js
 */
export default function AppMenu(props) {
    const ref = useRef();

    useBodyClass({
        enabled: props.menuVisible,
        className: 'no-scroll'
    });
    useOutsideEvent(ref, {
        enabled: props.menuVisible,
        callback: props.onHideMenu,
        eventName: 'click'
    });

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
