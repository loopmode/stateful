import React from "react";

import {
  RenderFunction,
  StatefulProps,
  StatefulConsumerProps,
  StatefulHandlers,
  ConfirmExitMode,
} from "./types";

import { Status } from "./Status";
import { StatefulConfigurationContext, StatefulContext, StatefulProvider } from "./context";
import { useStateful } from "./hooks";
import { createProps } from "./utils/createProps";

const defaultConfig: StatefulProps = {
  // Note that we use the keys of the defaultConfig object to omit
  // our own props from propagation to children.
  // MAKE SURE TO CREATE A KEY FOR EACH SUPPORTED PROP, or that prop will be passed to wrapped children

  monitor: ["onClick"],

  confirm: undefined,
  confirmProps: [],
  confirmClasses: undefined,
  confirmExit: "started",

  pendingProps: [],
  pendingClasses: [],

  busyProps: [],
  busyClasses: [],
  busyDelay: 0,

  successProps: [],
  successClasses: [],
  successDuration: undefined,

  errorProps: [],
  errorClasses: [],
  errorDuration: undefined,

  hintDuration: 1000,
  delimiter: " ",

  shouldRejectValue: function isErrorValue(value: unknown) {
    return value instanceof Error;
  },

  provideProps: true,
  provideContext: true,
  disabled: false,
};

const ownPropNames = Object.keys(defaultConfig);

/**
 * Wraps a child component, monitors its async callbacks and provides
 * status props and classnames to the wrapped child.
 * @param props
 */
export function Stateful(props: StatefulProps): React.ReactElement {
  const parentConfig = React.useContext(StatefulConfigurationContext);

  let { children, ...config } = { ...defaultConfig, ...parentConfig, ...props };

  const { status, handlers } = useStateful(config);

  if (typeof children === "function") {
    children = (children as RenderFunction)({ status, handlers });
  }

  if (props.disabled) {
    return children as React.ReactElement;
  }

  return React.Children.map<any, any>(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const { additionalProps, callbacks, otherProps } = createProps({
      child,
      config,
      status,
      handlers,
      parentProps: props,
      ownPropNames,
    });

    const clonedElement = React.cloneElement(
      child,
      Object.assign({}, otherProps, callbacks, config.provideProps ? additionalProps : {})
    );

    if (!config.provideContext) {
      return clonedElement;
    }

    return (
      <StatefulProvider
        value={{
          status,
          config,
          additionalProps,
          handlers,
        }}
      >
        {clonedElement}
      </StatefulProvider>
    );
  });
}

/**
 * Adds the stateful props of the parent context to its children
 * @param props
 */
export function StatefulConsumer(props: StatefulConsumerProps): React.ReactElement {
  const { status, config: parentConfig } = React.useContext(StatefulContext);

  const config = { ...parentConfig, ...props };

  return React.Children.map<any, any>(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const { additionalProps, otherProps } = createProps({
      child,
      status,
      parentProps: props,
      config,
      ownPropNames,
    });

    return React.cloneElement(child, {
      ...otherProps,
      ...additionalProps,
    });
  });
}

export function StatefulGate(props: {
  children?: React.ReactNode;
  allow: Status | Status[];
}): React.ReactElement | null {
  const { status } = React.useContext(StatefulContext);

  if (props.allow === status || props.allow.includes(status)) {
    return props.children as React.ReactElement;
  }

  return null;
}

export function IdleConsumer(props: React.PropsWithChildren<any>) {
  return <StatefulGate {...props} allow={Status.IDLE} />;
}

export function SuccessConsumer(props: React.PropsWithChildren<any>) {
  return <StatefulGate {...props} allow={Status.SUCCESS} />;
}

export function ErrorConsumer(props: React.PropsWithChildren<any>) {
  return <StatefulGate {...props} allow={Status.ERROR} />;
}

export function FinishedConsumer(props: React.PropsWithChildren<any>) {
  return <StatefulGate {...props} allow={[Status.SUCCESS, Status.ERROR]} />;
}

export function PendingConsumer({
  exact,
  ...props
}: React.PropsWithChildren<{
  exact?: boolean;
}>) {
  return <StatefulGate {...props} allow={exact ? Status.PENDING : [Status.BUSY, Status.PENDING]} />;
}

export function BusyConsumer({
  exact,
  ...props
}: React.PropsWithChildren<{
  exact?: boolean;
}>) {
  return <StatefulGate {...props} allow={exact ? Status.BUSY : [Status.BUSY, Status.PENDING]} />;
}

/**
 * Renders a confirmation UI that is displayed while the parent Stateful status is "confirm".
 *
 * If you provide react children, they will receive two additional props that need to be invoked to
 * confirm or cancel the operation.
 * By default, those props are "onConfirm" and "onCancel". However, you can specify custom
 * names using the `confirm` and `cancel` props.
 *
 * If you provide a render function, that render function will be invoked with an `{onConfirm, onCancel}` object
 * containing the callbacks.
 *
 * @example
 * <Stateful confirm="onClick">
 *  <button onClick="handleDelete">Delete</button>
 *  <Stateful.Confirm>
 *    <Modal>
 *      Are you sure?
 *      (This modal supports onConfirm and onCancel props)
 *    </Modal>
 *  </Stateful.Confirm>
 * </Stateful>

 * @example
 * <Stateful confirm="onClick">
 *  <button onClick="handleDelete">Delete</button>
 *  <Stateful.Confirm confirm="onCustomConfirm" cancel="onCustomCancel">
 *    <Modal>
 *      Are you sure?
 *      (This modal supports onCustomConfirm and onCustomCancel props)
 *    </Modal>
 *  </Stateful.Confirm>
 * </Stateful>
 * 
 * @example
 * <Stateful confirm="onClick">
 *  <button onClick="handleDelete">Delete</button>
 *  <Stateful.Confirm>
 *    {({onConfirm, onCancel}) => (
 *      <Modal onCustomConfirm={onConfirm} onCustomAbort={onCancel}>
 *        Are you sure?
 *      </Modal>
 *    )}
 *  </Stateful.Confirm>
 * </Stateful>
 *
*
 */
export function Confirm({
  confirm = "onConfirm",
  cancel = "onCancel",
  exit,
  ...props
}: {
  /**
   * The name of the wrapped child's callback prop that is invoked
   * when the user confirms the operation, e.g. "onConfirm"
   */
  confirm?: string;

  /**
   * The name of the wrapped child's callback prop that is invoked
   * when the user aborts the operation, e.g. "onCancel"
   */
  cancel?: string;

  /**
   * When to remove the confirmation view
   *
   * - `early`: as soon as the confirmed operation is invoked
   * - `normal`: after the confirmed operation has finished
   * - `late`: after the outcome of the confirmed operation has been indicated
   */
  exit?: ConfirmExitMode;

  children:
    | React.ReactElement
    | ((args: { onConfirm: () => void; onCancel: () => void }) => React.ReactElement);
}) {
  const { status, handlers, config } = React.useContext(StatefulContext);

  if (!shouldRenderConfirm(status, exit || config.confirmExit)) {
    return null;
  }

  if (typeof props.children === "function") {
    return props.children({
      onConfirm: handlers.onConfirmApprove,
      onCancel: handlers.onConfirmCancel,
    });
  }

  return React.Children.map<any, any>(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    return React.cloneElement(child, {
      [confirm]: handlers.onConfirmApprove,
      [cancel]: handlers.onConfirmCancel,
    } as any);
  });
}

/**
 * Returns a boolean for whether to show the confirmation view, based on the current status and exit mode.
 * @param status
 * @param exitMode
 */
function shouldRenderConfirm(status: Status, exitMode?: ConfirmExitMode) {
  const isCurrentStatus = (value: Status[]) => value.some((v) => v === status);
  switch (exitMode) {
    case "started":
      return isCurrentStatus([
        // only show confirmation during CONFIRM state
        Status.CONFIRM,
      ]);

    case "finished":
      return isCurrentStatus([
        // keep showing the confirmation until the operation is finished
        Status.CONFIRM,
        Status.PENDING,
        Status.BUSY,
      ]);

    case "idle":
      return isCurrentStatus([
        // keep showing the confirmation until the outcome has been indicated
        Status.CONFIRM,
        Status.PENDING,
        Status.BUSY,
        Status.SUCCESS,
        Status.ERROR,
      ]);

    default:
      return false;
  }
}

Stateful.Consumer = StatefulConsumer;
Stateful.IdleConsumer = IdleConsumer;
Stateful.SuccessConsumer = SuccessConsumer;
Stateful.ErrorConsumer = ErrorConsumer;
Stateful.FinishedConsumer = FinishedConsumer;
Stateful.PendingConsumer = PendingConsumer;
Stateful.BusyConsumer = BusyConsumer;
Stateful.Confirm = Confirm;
