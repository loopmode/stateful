import React from 'react';
import Stateful from '../Stateful';

const errorProps = () => ({ type: 'danger' });

// Stateful wrapper for Ant Design buttons
export const StatefulButton = props => (
    <Stateful
        pendingClasses={null}
        busyClasses={null}
        successClasses={'success'}
        errorClasses={null}
        pendingProps="disabled"
        busyProps="loading disabled"
        successProps={null}
        errorProps={errorProps}
        {...props}
    />
);

export default StatefulButton;
