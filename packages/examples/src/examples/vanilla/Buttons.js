import React from 'react';

import Stateful from '@loopmode/stateful';

import dummyCall from 'utils/dummyCall';
import ButtonsHeader from 'components/ButtonsHeader';

export default () => (
    <div className="ButtonsExample">
        <ButtonsHeader />
        <Stateful hintDuration={500}>
            <button onClick={() => dummyCall({ min: 500, max: 3000 })}>
                hintDuration 500ms
            </button>
        </Stateful>
        <Stateful successDuration={5000}>
            <button onClick={() => dummyCall({ min: 500, max: 3000 })}>
                successDuration 5000ms
            </button>
        </Stateful>
        <Stateful errorDuration={5000}>
            <button onClick={() => dummyCall({ min: 500, max: 3000 })}>
                errorDuration 5000ms
            </button>
        </Stateful>
    </div>
);
