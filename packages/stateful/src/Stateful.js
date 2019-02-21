import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useTimeout from '@rooks/use-timeout';
import useDidMount from '@rooks/use-did-mount';
import useWillUnmount from '@rooks/use-will-unmount';

import * as Status from './utils/Status';
import asArray from './utils/asArray';
import createCallbacks from './utils/createCallbacks';
import {
    createStatusClasses,
    createStatusProps,
    omitProps
} from './utils/createProps';

const Shapes = {
    def: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])
};
Stateful.propTypes = {
    children: PropTypes.node,

    callbacks: Shapes.def,

    pendingProps: Shapes.def,
    pendingClasses: Shapes.def,

    busyDelay: PropTypes.number,
    busyProps: Shapes.def,
    busyClasses: Shapes.def,

    successProps: Shapes.def,
    successClasses: Shapes.def,

    errorProps: Shapes.def,
    errorClasses: Shapes.def,

    hintDuration: PropTypes.number,

    delimiter: PropTypes.string
};

// Note that we use the keys of the defaultProps object to omit
// our own props from propagation to children
// make sure to create a key for each own prop - even if the value must be `undefined`
Stateful.defaultProps = {
    callbacks: ['onClick', 'onTouchStart'],

    pendingProps: ['disabled'],
    pendingClasses: [],

    busyDelay: 0,
    busyProps: ['disabled'],
    busyClasses: ['busy'],

    successProps: [],
    successClasses: ['success'],

    errorProps: [],
    errorClasses: ['error'],

    hintDuration: 1000,
    delimiter: ' '
};

function Stateful(props) {
    const isMounted = React.useRef();
    const ifMounted = fn => () => isMounted.current && fn();

    const [status, setStatus] = React.useState(Status.IDLE);

    const setBusy = () => setStatus(Status.BUSY);
    const setIdle = () => setStatus(Status.IDLE);

    const busyTimer = useTimeout(setBusy, props.busyDelay);
    const idleTimer = useTimeout(setIdle, props.hintDuration);

    useDidMount(() => {
        isMounted.current = true;
    });

    useWillUnmount(() => {
        isMounted.current = false;
        idleTimer.clear();
        busyTimer.clear();
    });

    const handlers = {
        onPromise: ifMounted(() => {
            setStatus(Status.PENDING);
            idleTimer.clear();
            busyTimer.start();
        }),
        onReject: ifMounted(() => {
            setStatus(Status.ERROR);
            busyTimer.clear();
            idleTimer.start();
        }),
        onResolve: ifMounted(() => {
            setStatus(Status.SUCCESS);
            busyTimer.clear();
            idleTimer.start();
        })
    };

    return React.Children.map(props.children, child => {
        // propagate all unknown props
        const propagatedProps = omitProps(child.props, [
            ...asArray(props.callbacks),
            ...Object.keys(Stateful.defaultProps)
        ]);

        // add new props for the current status
        const statusProps = {
            className: cx(
                child.props.className,
                createStatusClasses(status, props)
            ),
            ...createStatusProps(status, props)
        };

        // override the callbacks, attach handlers
        const callbackProps = createCallbacks(
            child.props,
            props.callbacks,
            handlers
        );

        return React.cloneElement(child, {
            ...propagatedProps,
            ...statusProps,
            ...callbackProps
        });
    });
}

export default Stateful;
