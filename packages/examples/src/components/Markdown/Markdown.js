import React from 'react';
import Markdown from 'react-remarkable';

import css from './Markdown.scss';
import cx from 'classnames';

export default props => (
    <div className={cx('Markdown', css.Markdown)}>
        <Markdown {...props} />
    </div>
);
