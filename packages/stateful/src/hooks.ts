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
  }, [delay, func, isPending]);

  const controller = React.useRef({
    clear: () => setPending(false),
    start: () => setPending(true),
  });

  return controller.current;
}

export function useStateful(props: StatefulConfig) {
  const { shouldRejectValue } = props;

  const isMounted = React.useRef(false);
  const isRejected = React.useRef(false);

  const [status, setStatus] = React.useState<Status>(Status.IDLE);
  const confirmCallback = React.useRef<any>(null);

  const hintDurations: Partial<Record<Status, number>> = React.useMemo(
    () => ({
      [Status.SUCCESS]: props.successDuration || props.hintDuration || 0,
      [Status.ERROR]: props.errorDuration || props.hintDuration || 0,
    }),
    [props.errorDuration, props.hintDuration, props.successDuration]
  );

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
  }, [isMounted, busyTimer, resetTimer]);

  const onPromise = React.useCallback(() => {
    if (!isMounted.current) return;
    isRejected.current = false;
    setStatus(Status.PENDING);
    resetTimer.clear();
    busyTimer.start();
  }, [busyTimer, resetTimer]);

  const onReject = React.useCallback(() => {
    if (!isMounted.current) return;
    isRejected.current = true;
    setStatus(Status.ERROR);
    busyTimer.clear();

    if (Number(hintDurations[Status.ERROR]) > -1) {
      resetTimer.start();
    }
  }, [busyTimer, hintDurations, resetTimer]);

  const onResolve = React.useCallback(
    (value?: unknown) => {
      if (isRejected.current || shouldRejectValue?.(value) === true) {
        onReject();
        return;
      }

      if (!isMounted.current) return;
      setStatus(Status.SUCCESS);
      busyTimer.clear();

      if (Number(hintDurations[Status.SUCCESS]) > -1) {
        resetTimer.start();
      }
    },
    [busyTimer, hintDurations, shouldRejectValue, onReject, resetTimer]
  );

  const onConfirmShow = React.useCallback(
    (callback: () => void) => {
      if (status === Status.CONFIRM) {
        confirmCallback.current();
        confirmCallback.current = null;
        onPromise();
      } else {
        confirmCallback.current = callback;
        setStatus(Status.CONFIRM);
        resetTimer.clear();
        busyTimer.clear();
      }
    },
    [busyTimer, onPromise, resetTimer, status]
  );

  const onConfirmCancel = React.useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    confirmCallback.current = null;
    setStatus(Status.IDLE);
  }, []);

  const onConfirmApprove = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      confirmCallback.current();
      confirmCallback.current = null;
      onPromise();
    },
    [onPromise]
  );

  const handlers = React.useMemo(
    () => ({
      onPromise,
      onReject,
      onResolve,
      onConfirmShow,
      onConfirmCancel,
      onConfirmApprove,
    }),
    [onConfirmApprove, onConfirmCancel, onConfirmShow, onPromise, onReject, onResolve]
  );

  return {
    status,
    handlers,
  };
}
