import React from 'react';
import { Button } from 'antd';

import ButtonsHeader from 'components/ButtonsHeader';
import dummyCall from 'utils/dummyCall';

import Stateful from '@loopmode/stateful/lib/wrappers/antd';

export default () => (
    <>
        <h3>Buttons</h3>
        <ButtonsHeader />
        <Stateful>
            <Button onClick={dummyCall} type="primary">
                Primary
            </Button>
        </Stateful>
        <Stateful>
            <Button onClick={dummyCall}>Default</Button>
        </Stateful>
        <Stateful>
            <Button onClick={dummyCall} type="dashed">
                Dashed
            </Button>
        </Stateful>
        <Stateful>
            <Button onClick={dummyCall} type="danger">
                Danger
            </Button>
        </Stateful>
    </>
);
