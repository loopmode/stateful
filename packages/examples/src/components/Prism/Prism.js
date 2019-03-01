import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import loadDependencies from './loadDependencies';

const ReactPrism = React.lazy(async () => {
    const { ReactPrism } = await loadDependencies();
    return ReactPrism;
});

const Prism = ({ children, className, lang = 'jsx', ...props }) => (
    <ReactPrism
        {...props}
        component="pre"
        className={cx(className, 'Prism', `language-${lang.toLowerCase()}`)}
    >
        {children}
    </ReactPrism>
);

Prism.propTypes = {
    children: PropTypes.node,
    lang: PropTypes.string,
    className: PropTypes.string
};

export default Prism;
