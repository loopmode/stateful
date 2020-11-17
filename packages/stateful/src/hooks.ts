import React from "react";

import { Status } from "./Status";
import { StatefulProps } from "./types";

export function useTimeout(func: () => void, delay = 0) {
  const [isPending, setPending] = React.useState(false);

  React.useEffect(() => {
    if (isPending) {
      const timeoutID = window.setTimeout(func, delay);
      return () => {
        window.clearTimeout(timeoutID);
      };
    }
  }, [isPending]);

  return {
    clear: () => setPending(false),
    start: () => setPending(true),
  };
}

export function useStateful(props: StatefulProps) {
  const isMounted = React.useRef(false);

  const [status, setStatus] = React.useState<Status>(Status.IDLE);

  const hintDurations: Partial<Record<Status, number>> = {
    [Status.SUCCESS]: props.successDuration || props.hintDuration,
    [Status.ERROR]: props.errorDuration || props.hintDuration,
  };

  const setBusy = React.useCallback(() => setStatus(Status.BUSY), []);
  const setIdle = React.useCallback(() => setStatus(Status.IDLE), []);

  const busyTimer = useTimeout(setBusy, props.busyDelay);
  const resetTimer = useTimeout(setIdle, hintDurations[status] || props.hintDuration);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      resetTimer.clear();
      busyTimer.clear();
      isMounted.current = false;
    };
  }, [isMounted]);

  const handlers = {
    onPromise: () => {
      if (!isMounted.current) return;
      setStatus(Status.PENDING);
      resetTimer.clear();
      busyTimer.start();
    },
    onReject: () => {
      if (!isMounted.current) return;
      setStatus(Status.ERROR);
      busyTimer.clear();
      resetTimer.start();
    },
    onResolve: (value: unknown) => {
      if (props.shouldRejectValue?.(value) === true) {
        handlers.onReject();
        return;
      }

      if (!isMounted.current) return;
      setStatus(Status.SUCCESS);
      busyTimer.clear();
      resetTimer.start();
    },
  };

  return {
    status,
    handlers,
  };
}
