import React from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'react-remarkable';

import css from './Markdown.scss';
import cx from 'classnames';
import usePrism from 'components/Prism/usePrism';

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
