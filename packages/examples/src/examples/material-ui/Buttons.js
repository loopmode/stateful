import React from 'react';
import PropTypes from 'prop-types';

import dummyCall from 'utils/dummyCall';
import ButtonsHeader from 'components/ButtonsHeader';

import Button from './ProgressButton';
import Stateful from './Stateful';

function TextButtons(props) {
    return (
        <div className="ButtonsExample">
            <ButtonsHeader />
            <Stateful>
                <Button variant="contained" onClick={dummyCall}>
                    Default
                </Button>
            </Stateful>
            <Stateful>
                <Button variant="contained" color="primary" onClick={dummyCall}>
                    Primary
                </Button>
            </Stateful>
            <Stateful>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={dummyCall}
                >
                    Secondary
                </Button>
            </Stateful>
        </div>
    );
}

TextButtons.propTypes = {
    onButtonClick: PropTypes.func
};

export default TextButtons;
