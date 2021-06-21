import React from "react";
import { StatefulContextValue, StatefulConfig } from "./types";
import { Status } from "./Status";

export const StatefulConfigurationContext = React.createContext<StatefulConfig>({});
export const StatefulConfigurationProvider = StatefulConfigurationContext.Provider;
StatefulConfigurationContext.displayName = "StatefulConfigurationContext";

const noop = () => null;
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
