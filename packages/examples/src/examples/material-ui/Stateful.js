import React from 'react';
import Stateful from '@loopmode/stateful';

export default props => (
    <Stateful
        pendingClasses={null}
        busyClasses={null}
        successClasses={null}
        errorClasses={null}
        pendingProps="disabled loading"
        busyProps="disabled loading"
        successProps="success"
        errorProps="error"
        {...props}
    />
);
