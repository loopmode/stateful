import React from 'react';

import { Button } from 'react-bootstrap';

import dummyCall from 'utils/dummyCall';
import ButtonsHeader from 'components/ButtonsHeader';

import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';

export default () => (
    <>
        <h3>Buttons</h3>
        <ButtonsHeader />
        <Stateful>
            <Button onClick={dummyCall}>Load</Button>
        </Stateful>
        <Stateful>
            <Button onClick={dummyCall}>Save</Button>
        </Stateful>
    </>
);
