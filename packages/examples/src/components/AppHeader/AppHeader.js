import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Link } from 'react-router-dom';

import { MdMenu } from 'react-icons/md';

import css from './AppHeader.scss';

import HoverLogo from 'components/AnimatedLogo/HoverLogo';

const AppHeader = ({ onShowMenu, className }) => {
    const handleShowMenu = event => {
        event.preventDefault();
        onShowMenu();
    };
    return (
        <header className={cx('AppHeader', className, css.AppHeader)}>
            <div className="contents">
                <div className="title">
                    <MdMenu
                        className="show-mobile-menu only-small-screen"
                        onClick={handleShowMenu}
                    />
                    @loopmode/stateful
                </div>
                <div className="info">React helper for async buttons</div>
            </div>
            <Link
                to="/"
                className="logo-link"
                onClick={() => (document.documentElement.scrollTop = 0)}
            >
                <HoverLogo scale={0.25} />
            </Link>
        </header>
    );
};
AppHeader.propTypes = {
    onShowMenu: PropTypes.func,
    className: PropTypes.string
};
export default AppHeader;
