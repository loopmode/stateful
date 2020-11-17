import React from "react";
import cx from "classnames";

import { AllStatuses, Status } from "./Status";
import asArray from "./utils/asArray";
import asFlags from "./utils/asFlags";
import createCallbacks from "./utils/createCallbacks";

import {
  createStatusClassFlags,
  createStatusProps,
  omitProps,
  getStatusPropKeys,
  getStatusClassNames,
  pickProps,
} from "./utils/createProps";

import StatefulContext, { StatefulProvider } from "./Context";
import { useStateful } from "./hooks";
import { StatefulProps } from "./types";

Stateful.defaultProps = {
  // Note that we use the keys of the defaultProps object to omit
  // our own props from propagation to children.
  // MAKE SURE TO CREATE A KEY FOR EACH SUPPORTED PROP, or that prop will be passed to wrapped children

  monitor: ["onClick"],

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
  provideContext: false,
};

export function Stateful(
  props: StatefulProps & {
    provideProps?: boolean;
    provideContext?: boolean;
  }
) {
  const { status, handlers } = useStateful(props);

  return React.Children.map<any, any>(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // all existing props we found on the wrapped child
    const childProps = (child as React.ReactElement<any>).props;

    // the props we generate and attach to the wrapped child
    const statusProps = {
      className: cx(childProps.className, createStatusClassFlags(status, props)),
      ...createStatusProps(status, props),
    };

    // props of the child that we pass along because they are unknown to us
    const foreignProps = omitProps(childProps, [
      ...asArray(props.monitor!),
      ...Object.keys(Stateful.defaultProps),
    ]);

    // overridden callbacks for the wrapped child. these are the monitored functions
    const callbackOverrides = createCallbacks(childProps, props.monitor!, handlers);

    if (props.provideContext && props.provideProps) {
      // case "props and context": provide context, and also attach statusProps
      return (
        <StatefulProvider value={{ statusProps, status, configProps: props }}>
          {React.cloneElement(child, {
            ...callbackOverrides,
            ...foreignProps,
            ...statusProps,
          })}
        </StatefulProvider>
      );
    }

    if (props.provideContext) {
      // case "context only": provide context, but do not attach statusProps
      return (
        <StatefulProvider value={{ statusProps, status, configProps: props }}>
          {React.cloneElement(child, {
            ...callbackOverrides,
            ...foreignProps,
          })}
        </StatefulProvider>
      );
    }

    // case "props only": only attach statusProps, but do not provide context
    return React.cloneElement(child, {
      ...callbackOverrides,
      ...foreignProps,
      ...statusProps,
    });
  });
}

export function StatefulConsumer(props: {
  children?: React.ReactElement | React.ReactElement[];
  ignore?: string | string[];
}) {
  const { configProps, statusProps } = React.useContext(StatefulContext);

  return React.Children.map<any, any>(props.children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const ignoredStatuses = asArray<Status>(props.ignore);
    const effectiveStatuses = AllStatuses.filter((s) => !ignoredStatuses.includes(s));
    const effectivePropKeys = getStatusPropKeys(effectiveStatuses, configProps);
    const effectiveClassKeys = getStatusClassNames(effectiveStatuses, configProps);

    const childProps = {
      ...pickProps(statusProps, effectivePropKeys),
      className: cx(
        (child as any).props.className,
        pickProps(asFlags(statusProps.className), effectiveClassKeys)
      ),
    };

    return React.cloneElement(child, childProps);
  });
}

export function StatefulGate(props: { children?: React.ReactNode; allow: Status | Status[] }) {
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
