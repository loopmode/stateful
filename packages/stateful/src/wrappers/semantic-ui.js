import React from 'react';
import Stateful from '../Stateful';

// Stateful wrapper for Semantic UI buttons
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

// Stateful wrapper for Semantic UI forms
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
