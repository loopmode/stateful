import React from 'react';
import Stateful from '../Stateful';

const pendingProps = () => ({ children: 'Loading...', disabled: true });
const successProps = () => ({ variant: 'success' });
const errorProps = () => ({ variant: 'danger' });

// Stateful wrapper for Bootstrap buttons
export const StatefulButton = props => (
    <Stateful
        pendingClasses={null}
        successClasses={null}
        errorClasses={null}
        pendingProps={pendingProps}
        busyProps={pendingProps}
        successProps={successProps}
        errorProps={errorProps}
        {...props}
    />
);

export default StatefulButton;
