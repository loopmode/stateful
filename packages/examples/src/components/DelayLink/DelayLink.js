// based on https://gist.github.com/headzoo/8f4c6a5e843ec26abdcad87cd93e3e2e

import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

/**
 * Wraps the React Router Link component and creates a delay after the link is clicked.
 */
export default class DelayLink extends React.Component {
    static propTypes = {
        /**
         * What kind of component to use, e.g. Link instead of NavLink
         */
        as: PropTypes.func,
        /**
         * Milliseconds to wait before registering the click.
         */
        delay: PropTypes.number,
        /**
         * Called after the link is clicked and before the delay timer starts.
         */
        onClick: PropTypes.func,
        /**
         * Called after the delay timer ends.
         */
        onNavigate: PropTypes.func
    };

    static defaultProps = {
        as: NavLink,
        delay: 0,
        onClick: () => {},
        onNavigate: () => {}
    };

    static contextTypes = Link.contextTypes;

    constructor(props) {
        super(props);
        this.timeout = null;
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    /**
     * Called when the link is clicked
     *
     * @param {Event} e
     */
    handleClick(e) {
        const { replace, to, delay, onClick, onNavigate } = this.props;
        const { history } = this.context.router;

        onClick(e, to);
        if (e.defaultPrevented) {
            return;
        }
        e.preventDefault();

        this.timeout = setTimeout(() => {
            if (replace) {
                history.replace(to);
            } else {
                history.push(to);
            }
            onNavigate(e, to);
        }, delay);
    }

    render() {
        const { as: Component } = this.props;
        const props = Object.assign({}, this.props);
        delete props.as;
        delete props.delay;
        delete props.onClick;
        delete props.onNavigate;

        return <Component {...props} onClick={this.handleClick} />;
    }
}
