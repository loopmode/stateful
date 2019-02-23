import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// a component that wraps a `Button` and displays a `Progress` when the `loading` prop is set
// based on https://material-ui.com/demos/progress/#interactive-integration

const styles = () => ({
    wrapper: {
        display: 'inline-block',
        position: 'relative'
    },

    success: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700]
        }
    },

    error: {
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700]
        }
    },

    progress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -8,
        marginLeft: -8
    }
});

const ProgressButton = props => {
    const {
        className,
        classes,
        loading,
        success,
        error,
        ...buttonProps
    } = props;

    const buttonClassname = cx(className, {
        [classes.success]: success,
        [classes.error]: error
    });

    return (
        <div className={cx('ProgressButton Button', classes.wrapper)}>
            <Button
                className={buttonClassname}
                disabled={loading}
                {...buttonProps}
            >
                {props.children}
            </Button>
            {loading && (
                <CircularProgress size={16} className={classes.progress} />
            )}
        </div>
    );
};

ProgressButton.propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    onClick: PropTypes.func
};

export default withStyles(styles)(ProgressButton);
