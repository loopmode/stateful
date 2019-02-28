import React from 'react';

import PropTypes from 'prop-types';
import AppMenu from 'components/AppMenu';
import DelayLink from 'components/DelayLink';

const Navigation = props => {
    const linkProps = {
        delay: props.navDelay,
        onClick: props.onHideMenu,
        onNavigate: () => (document.documentElement.scrollTop = 0)
    };
    return (
        <AppMenu {...props}>
            <ul>
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
        </AppMenu>
    );
};

Navigation.propTypes = {
    onHideMenu: PropTypes.func,
    navDelay: PropTypes.number
};
Navigation.defaultProps = {
    // give enough time for the mobile menu slide animation
    navDelay: 200
};

export default Navigation;
