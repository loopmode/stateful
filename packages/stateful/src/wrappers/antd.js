import React from 'react';
import Stateful from '../Stateful';

// Stateful wrapper for Ant Design buttons
export const StatefulButton = props => (
    <Stateful
        pendingClasses={null}
        busyClasses={null}
        successClasses={'success'}
        errorClasses={'error'}
        pendingProps="disabled"
        busyProps="loading disabled"
        successProps={null}
        errorProps={null}
        {...props}
    />
);

export default StatefulButton;
