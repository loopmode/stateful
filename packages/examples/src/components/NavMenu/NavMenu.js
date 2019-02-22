import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from './NavMenu.scss';

import { MdClose } from 'react-icons/md';
import NavIcon from '../NavIcon';

const prevent = event => event.preventDefault();

function NavMenu(props) {
    const onClose = event => {
        prevent(event);
        props.onClose(event);
    };
    return (
        <nav
            className={cx('NavMenu', props.className, css.NavMenu)}
            onTouchMove={prevent}
        >
            <div className="hide-mobile-menu" onClick={onClose}>
                <NavIcon icon={MdClose} className="hide-menu-icon" />
                <div>CLOSE MENU</div>
            </div>
            {props.children}
        </nav>
    );
}
NavMenu.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    className: PropTypes.string
};

export default NavMenu;
