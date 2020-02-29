import React from 'react';
import { Helmet } from 'react-helmet';
import Markdown from 'components/Markdown';
import source from './readme.md';

import PrevNextLinks from 'components/PrevNextLinks';

export default props => (
    <>
        <Helmet>
            <title>Overview - @loopmode/stateful</title>
        </Helmet>
        <Markdown
            {...props}
            className="Readme"
            source={source}
            options={{ html: true }}
        />
        <PrevNextLinks />
    </>
);
