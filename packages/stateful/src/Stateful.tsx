import React from "react";

import { RenderFunction, StatefulProps, StatefulConsumerProps, StatefulConfig } from "./types";

import { Status } from "./Status";
import { StatefulConfigurationContext, StatefulContext, StatefulProvider } from "./context";
import { useStateful } from "./hooks";
import { createChildProps } from "./utils/createProps";

const defaultConfig: StatefulProps = {
  // Note that we use the keys of the defaultConfig object to omit
  // our own props from propagation to children.
  // MAKE SURE TO CREATE A KEY FOR EACH SUPPORTED PROP, or that prop will be passed to wrapped children

  monitor: ["onClick"],

  pendingFlags: [],
  pendingClasses: [],

  busyFlags: [],
  busyClasses: [],
  busyDelay: 0,

  successFlags: [],
  successClasses: [],
  successDuration: undefined,

  errorFlags: [],
  errorClasses: [],
  errorDuration: undefined,

  hintDuration: 1000,
  delimiter: " ",

  shouldRejectValue: function isErrorValue(value: unknown) {
    return value instanceof Error;
  },

  provideProps: true,
  provideContext: false,
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

  return React.Children.map<any, any>(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const { extraProps, callbackOverrides, foreignProps } = createChildProps({
      child,
      config,
      status,
      handlers,
      omitProps: ownPropNames,
    });

    const childProps = Object.assign(
      {},
      foreignProps,
      callbackOverrides,
      config.provideProps ? extraProps : {}
    );

    return (
      <StatefulWrapper status={status} config={config} extraProps={extraProps}>
        {React.cloneElement(child, childProps)}
      </StatefulWrapper>
    );
  });
}

function StatefulWrapper({
  children,
  ...props
}: {
  children: React.ReactElement | React.ReactElement[];
  status: Status;
  extraProps: any;
  config: StatefulProps;
}): React.ReactElement {
  if (props.config.provideContext) {
    return <StatefulProvider value={props}>{children}</StatefulProvider>;
  }
  return children as React.ReactElement;
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

    const { extraProps, foreignProps } = createChildProps({
      child,
      status,
      config,
      omitProps: ownPropNames,
    });

    return React.cloneElement(child, {
      ...foreignProps,
      ...extraProps,
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

Stateful.Consumer = StatefulConsumer;
Stateful.IdleConsumer = IdleConsumer;
Stateful.SuccessConsumer = SuccessConsumer;
Stateful.ErrorConsumer = ErrorConsumer;
Stateful.FinishedConsumer = FinishedConsumer;
Stateful.PendingConsumer = PendingConsumer;
Stateful.BusyConsumer = BusyConsumer;