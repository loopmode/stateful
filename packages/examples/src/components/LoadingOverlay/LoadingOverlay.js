import React from 'react';

import cx from 'classnames';
import css from './LoadingOverlay.scss';

import AnimatedLogo from 'components/AnimatedLogo';

import useTimeout from '@loopmode/stateful/lib/hooks/timeout';
import useDidMount from '@loopmode/stateful/lib/hooks/did-mount';
import useWillUnmount from '@loopmode/stateful/lib/hooks/will-unmount';

const LoadingOverlay = ({ delay = 500 }) => {
    const [visible, setVisible] = React.useState(false);

    const timer = useTimeout(() => setVisible(true), delay);
    useDidMount(() => timer.start());
    useWillUnmount(() => timer.clear());

    return (
        <div className={cx('LoadingOverlay', css.LoadingOverlay, { visible })}>
            <AnimatedLogo scale={0.5} />
        </div>
    );
};
export default LoadingOverlay;
