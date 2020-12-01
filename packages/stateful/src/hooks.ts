import React from "react";

import { Status } from "./Status";
import { StatefulConfig } from "./types";

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

export function useStateful(props: StatefulConfig) {
  const isMounted = React.useRef(false);
  const isRejected = React.useRef(false);

  const [status, setStatus] = React.useState<Status>(Status.IDLE);
  const confirmCallback = React.useRef<any>(null);

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
      isRejected.current = false;
      setStatus(Status.PENDING);
      resetTimer.clear();
      busyTimer.start();
    },
    onReject: (error?: any) => {
      if (!isMounted.current) return;
      isRejected.current = true;
      setStatus(Status.ERROR);
      busyTimer.clear();
      if (Number(props.errorDuration) > -1) {
        resetTimer.start();
      }
    },
    onResolve: (value: unknown) => {
      if (isRejected.current || props.shouldRejectValue?.(value) === true) {
        handlers.onReject(value);
        return;
      }

      if (!isMounted.current) return;
      setStatus(Status.SUCCESS);
      busyTimer.clear();
      if (Number(props.successDuration) > -1) {
        resetTimer.start();
      }
    },
    onConfirmShow: (callback: () => void) => {
      if (status === Status.CONFIRM) {
        confirmCallback.current();
        confirmCallback.current = null;
        handlers.onPromise();
      } else {
        confirmCallback.current = callback;
        setStatus(Status.CONFIRM);
        resetTimer.clear();
        busyTimer.clear();
      }
    },
    onConfirmCancel: () => {
      confirmCallback.current = null;
      setStatus(Status.IDLE);
    },
    onConfirmApprove: () => {
      confirmCallback.current();
      confirmCallback.current = null;
      handlers.onPromise();
    },
  };

  return {
    status,
    handlers,
  };
}
