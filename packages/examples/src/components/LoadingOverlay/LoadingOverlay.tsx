import React from "react";

import cx from "classnames";
import "./LoadingOverlay.scss";

import AnimatedLogo from "../AnimatedLogo";

function useTimeout(callback: () => void, delay: number | null) {
  // https://usehooks-typescript.com/react-hook/use-timeout

  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}

const LoadingOverlay = ({ delay = 500 }) => {
  const [spinnerVisible, setSpinnerVisible] = React.useState(false);
  const showSpinner = () => setSpinnerVisible(true);
  useTimeout(showSpinner, delay);

  return (
    <div className={cx("LoadingOverlay", { visible: spinnerVisible })}>
      <div>
        <AnimatedLogo scale={0.5} />
      </div>
    </div>
  );
};
export default LoadingOverlay;
