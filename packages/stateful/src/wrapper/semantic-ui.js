import React from 'react';
import Stateful from '../Stateful';

export const StatefulButton = props => (
    <Stateful
        pendingClasses={null}
        busyClasses={null}
        successClasses={null}
        errorClasses={null}
        pendingProps="disabled"
        busyProps="loading disabled"
        successProps="positive"
        errorProps="negative"
        {...props}
    />
);

export const StatefulForm = props => (
    <Stateful
        callbacks="onSubmit"
        pendingClasses={null}
        busyClasses={null}
        successClasses={null}
        errorClasses={null}
        pendingProps="disabled"
        busyProps="loading disabled"
        successProps="success"
        errorProps="error"
        hintDuration={5000}
        {...props}
    />
);

export default StatefulButton;
