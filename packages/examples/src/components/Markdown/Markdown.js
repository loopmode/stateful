import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';

import css from './Markdown.scss';
import cx from 'classnames';

const StyledMarkdown = ({ className, ...props }) => (
    <div className={cx('Markdown', css.Markdown, className)}>
        <Markdown {...props} />
    </div>
);
StyledMarkdown.propTypes = {
    className: PropTypes.string
};
export default StyledMarkdown;
