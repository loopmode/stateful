import React from "react";
import { StatefulContextValue, StatefulConfig } from "./types";
import { Status } from "./Status";

const noop = () => null;

export const StatefulConfigContext = React.createContext<StatefulConfig>({});
StatefulConfigContext.displayName = "StatefulConfigContext";

export function StatefulConfigProvider(props: React.PropsWithChildren<{ config: StatefulConfig }>) {
  return (
    <StatefulConfigContext.Provider value={props.config}>
      {props.children}
    </StatefulConfigContext.Provider>
  );
}

export const StatefulContext = React.createContext<StatefulContextValue>({
  status: Status.IDLE,
  additionalProps: {},
  handlers: {
    onConfirmShow: noop,
    onConfirmApprove: noop,
    onConfirmCancel: noop,
    onPromise: noop,
    onReject: noop,
    onResolve: noop,
  },
  config: {},
});

export const StatefulProvider = StatefulContext.Provider;
StatefulContext.displayName = "StatefulContext";
