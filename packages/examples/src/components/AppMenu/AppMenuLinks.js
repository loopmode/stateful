import React from 'react';
import PropTypes from 'prop-types';

import DelayLink from 'components/DelayLink';
import cx from 'classnames';
import css from './AppMenuLinks.scss';

const scrollToTop = () => (document.documentElement.scrollTop = 0);

/**
 * Renders the actual navigational items of the menu
 */
const AppMenuLinks = React.forwardRef((props, ref) => {
    const linkProps = {
        delay: props.navDelay,
        onClick: props.onHideMenu,
        onNavigate: scrollToTop
    };
    return (
        <ul
            ref={ref}
            className={cx('AppMenuLinks', props.className, css.AppMenuLinks)}
        >
            <li>
                <DelayLink exact to="/" {...linkProps}>
                    Overview
                </DelayLink>
            </li>
            <li>
                <DelayLink to="/vanilla" {...linkProps}>
                    Vanilla example
                </DelayLink>
            </li>
            <li>
                <DelayLink to="/semantic-ui" {...linkProps}>
                    Semantic UI example
                </DelayLink>
            </li>
            <li>
                <DelayLink to="/antd" {...linkProps}>
                    AntD example
                </DelayLink>
            </li>
            <li>
                <DelayLink to="/bootstrap" {...linkProps}>
                    Bootstrap example
                </DelayLink>
            </li>
            <li>
                <DelayLink to="/material-ui" {...linkProps}>
                    Material UI example
                </DelayLink>
            </li>
        </ul>
    );
});

AppMenuLinks.propTypes = {
    className: PropTypes.string,
    onHideMenu: PropTypes.func,
    navDelay: PropTypes.number
};
AppMenuLinks.defaultProps = {
    // enough time for the mobile menu slide animation to finish
    navDelay: 300
};

export default AppMenuLinks;
