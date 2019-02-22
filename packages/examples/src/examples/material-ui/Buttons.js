import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import dummyCall from 'utils/dummyCall';
import ButtonsHeader from 'components/ButtonsHeader';

import Button from './ProgressButton';
import Stateful from './Stateful';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

function TextButtons(props) {
    const { classes } = props;
    return (
        <>
            <ButtonsHeader />
            <Stateful>
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={dummyCall}
                >
                    Default
                </Button>
            </Stateful>
            <Stateful>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={dummyCall}
                >
                    Primary
                </Button>
            </Stateful>
            <Stateful>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={dummyCall}
                >
                    Secondary
                </Button>
            </Stateful>
        </>
    );
}

TextButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    onButtonClick: PropTypes.func
};

export default withStyles(styles)(TextButtons);
