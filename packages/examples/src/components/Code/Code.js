import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

export const loadDependencies = async () => {
    const Prism = await import(/* webpackChunkName: 'libs.prism' */ 'prismjs');
    await import(/* webpackChunkName: 'libs.prism-theme-okaidia' */ 'prismjs/themes/prism-okaidia.css');
    await import(/* webpackChunkName: 'libs.prism-bash' */ 'prismjs/components/prism-jsx');
    await import(/* webpackChunkName: 'libs.prism-jsx' */ 'prismjs/components/prism-jsx');
    const ReactPrism = await import(/* webpackChunkName: 'libs.prism-react' */ 'react-prism');
    return {
        Prism,
        ReactPrism
    };
};

const ReactPrism = React.lazy(async () => {
    const { ReactPrism } = await loadDependencies();
    return ReactPrism;
});

export default class Code extends React.Component {
    static propTypes = {
        children: PropTypes.string,
        lang: PropTypes.string
    };
    static defaultProps = {
        lang: 'jsx'
    };

    render() {
        return (
            <ReactPrism
                component="pre"
                className={cx(
                    'Code push',
                    `language-${this.props.lang.toLowerCase()}`
                )}
            >
                {this.props.children}
            </ReactPrism>
        );
    }
}
