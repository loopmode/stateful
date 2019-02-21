import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'typeface-roboto';

import { withStyles } from '@material-ui/core/styles';
import dummyCall from '../dummyCall';

import Button from './ProgressButton';
import Stateful from './Stateful';

export default class MaterialUIExample extends Component {
    render() {
        return (
            <div>
                <h1>Material UI example</h1>
                <p>
                    While there is a nice loading animation when using Material
                    UI (
                    <a
                        href="https://material-ui.com/demos/progress/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Progress
                    </a>
                    ), there is no easy way to just pass a prop to a button and
                    be done with it. You still need to create a construct that
                    displays the <code>Progress</code> component conditionally,
                    you have to take care of the layout etc.
                </p>
                <p>
                    However, that is a typical problem that you will probably
                    have solved already, if you're working with Material UI on a
                    large-ish application.
                </p>
                <p>
                    For that reason, there is no default wrapper for Material
                    UI. Instead, have a look at the code of this example for a
                    possible approach (see links below).
                </p>
                <p>
                    Basically, the trick is to create a component that wraps a{' '}
                    <code>Button</code>, accepts some properties like `success`,
                    `error` and `loading`, and renders the button accordingly -
                    adding a <code>Progress</code> when needed. That's exactly
                    what I did here, based on this{' '}
                    <a
                        href="https://material-ui.com/demos/progress/#interactive-integration"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        official example
                    </a>{' '}
                    and without any prior experience with Material UI.
                </p>
                <p>Have a look at the relevant code:</p>
                <ul>
                    <li>
                        <a
                            href="https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/ProgressButton.js"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Custom <code>ProgressButton</code> for Material UI
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/loopmode/stateful/blob/master/packages/examples/src/examples/material-ui/Stateful.js"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Stateful wrapper for Material UI
                        </a>
                    </li>
                </ul>
                <i className="push">
                    Click any of the buttons below. Using random durations and
                    outcomes, the dummy callback will sometimes succeed and
                    sometimes fail.
                </i>

                <StyledTextButtons onButtonClick={this.handleClick} />
            </div>
        );
    }

    handleClick = e => {
        e.preventDefault();
        return dummyCall({ successRate: 0.5, min: 500, max: 2500 });
    };
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

const StyledTextButtons = withStyles(styles)(TextButtons);

function TextButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Stateful>
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={props.onButtonClick}
                >
                    Default
                </Button>
            </Stateful>
            <Stateful>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={props.onButtonClick}
                >
                    Primary
                </Button>
            </Stateful>
            <Stateful>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={props.onButtonClick}
                >
                    Secondary
                </Button>
            </Stateful>
        </div>
    );
}

TextButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    onButtonClick: PropTypes.func
};
