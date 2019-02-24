import React from 'react';
import Markdown from 'components/Markdown';
import source from './Readme.md';

export default props => (
    <Markdown
        {...props}
        className="Readme"
        source={source}
        options={{ html: true }}
    />
);
