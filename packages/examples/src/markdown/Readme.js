import React from 'react';
import Markdown from 'components/Markdown';
import source from './Readme.md';

import PrevNextLinks from 'components/PrevNextLinks';

export default props => (
    <>
        <Markdown
            {...props}
            className="Readme"
            source={source}
            options={{ html: true }}
        />
        <PrevNextLinks />
    </>
);
