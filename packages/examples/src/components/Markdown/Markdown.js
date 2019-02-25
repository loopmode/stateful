import React from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'react-remarkable';

import css from './Markdown.scss';
import cx from 'classnames';

const Markdown = ({ className, ...props }) => {
    const ref = React.useRef();
    usePrism(ref);
    return (
        <div className={cx('Markdown', css.Markdown, className)} ref={ref}>
            <Remarkable {...props} />
        </div>
    );
};
Markdown.propTypes = {
    className: PropTypes.string
};
export default Markdown;

function usePrism(ref) {
    const { loadDependencies } = require('components/Code/Code');
    const applyPrism = async () => {
        const { Prism } = await loadDependencies();
        if (!ref) {
            Prism.highlightAll();
        } else if (ref.current) {
            Prism.highlightAllUnder(ref.current);
        }
    };
    React.useEffect(() => {
        applyPrism();
    });
}
