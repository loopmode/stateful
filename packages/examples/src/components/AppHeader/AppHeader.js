import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { MdMenu } from 'react-icons/md';

import css from './AppHeader.scss';

const AppHeader = ({ onShowMenu, className }) => {
    const handleShowMenu = event => {
        event.preventDefault();
        onShowMenu();
    };
    return (
        <header className={cx('AppHeader', className, css.AppHeader)}>
            <div className="title">
                <MdMenu
                    className="show-mobile-menu only-small-screen"
                    onClick={handleShowMenu}
                />
                @loopmode/stateful
            </div>
            <div className="info">React helper for async buttons</div>
        </header>
    );
};
AppHeader.propTypes = {
    onShowMenu: PropTypes.func,
    className: PropTypes.string
};
export default AppHeader;
