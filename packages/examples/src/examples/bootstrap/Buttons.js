import React from 'react';

import { Button } from 'react-bootstrap';

import dummyCall from 'utils/dummyCall';
import ButtonsHeader from 'components/ButtonsHeader';

import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';

export default () => (
    <div className="ButtonsExample">
        <ButtonsHeader />
        <Stateful>
            <Button onClick={dummyCall}>Load</Button>
        </Stateful>
        <Stateful>
            <Button onClick={dummyCall}>Save</Button>
        </Stateful>
    </div>
);
