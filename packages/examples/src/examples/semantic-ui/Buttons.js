import React from 'react';

import { Button } from 'semantic-ui-react';

import ButtonsHeader from 'components/ButtonsHeader';

import dummyCall from 'utils/dummyCall';

import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';

import { Buttons as Info } from './Info';

export default () => (
    <div className="ButtonsExample">
        <Info />
        <ButtonsHeader />
        <Stateful>
            <Button
                icon="undo"
                onClick={dummyCall}
                title="Icon-only"
                className="inline"
            />
        </Stateful>
        <Stateful>
            <Button
                icon="upload"
                content="With icon"
                labelPosition="left"
                onClick={dummyCall}
            />
        </Stateful>
        <Stateful busyDelay={1000}>
            <Button onClick={dummyCall}>With 1s busy delay</Button>
        </Stateful>
    </div>
);
