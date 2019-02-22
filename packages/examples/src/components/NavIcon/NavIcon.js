import React from 'react';
import cx from 'classnames';
import css from './NavIcon.scss';
import PropTypes from 'prop-types';

const NavIcon = ({ icon: Icon, className, ...props }) => {
    return (
        <Icon className={cx('NavIcon', className, css.NavIcon)} {...props} />
    );
};
NavIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.func
};
export default NavIcon;
