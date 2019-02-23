import React from 'react';

import Stateful from '@loopmode/stateful';

import dummyCall from 'utils/dummyCall';
import ButtonsHeader from 'components/ButtonsHeader';

export default () => (
    <div className="ButtonsExample">
        <ButtonsHeader />
        <Stateful hintDuration={2000}>
            <button onClick={() => dummyCall({ min: 500, max: 3000 })}>
                Do something
            </button>
        </Stateful>
        <Stateful>
            <button onClick={() => dummyCall({ min: 500, max: 3000 })}>
                Do something
            </button>
        </Stateful>
        <Stateful>
            <button onClick={() => dummyCall({ min: 500, max: 3000 })}>
                Do something
            </button>
        </Stateful>
    </div>
);
