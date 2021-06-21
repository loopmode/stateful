import React from "react";

import cx from "classnames";
import "./LoadingOverlay.scss";

import AnimatedLogo from "../AnimatedLogo";

export function useTimeout(func: () => void, delay = 0) {
  const [isStarted, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (isStarted) {
      const timeoutID = window.setTimeout(func, delay);
      return () => {
        window.clearTimeout(timeoutID);
      };
    }
  }, [delay, func, isStarted]);

  const clearTimer = React.useCallback(() => setStarted(false), []);
  const startTimer = React.useCallback(() => setStarted(true), []);

  return {
    clearTimer,
    startTimer,
  };
}

const LoadingOverlay = ({ delay = 500 }) => {
  const [visible, setVisible] = React.useState(false);
  const show = React.useCallback(() => setVisible(true), []);
  const { clearTimer, startTimer } = useTimeout(show, delay);

  React.useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [clearTimer, startTimer]);

  return (
    <div className={cx("LoadingOverlay", { visible })}>
      <div>
        <AnimatedLogo scale={0.5} />
      </div>
    </div>
  );
};
export default LoadingOverlay;
