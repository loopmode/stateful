import React from "react";
import { StatefulContextValue, StatefulConfig } from "./types";
import { Status } from "./Status";

export const StatefulConfigurationContext = React.createContext<StatefulConfig>({});
export const StatefulConfigurationProvider = StatefulConfigurationContext.Provider;
StatefulConfigurationContext.displayName = "StatefulConfigurationContext";

export const StatefulContext = React.createContext<StatefulContextValue>({
  status: Status.IDLE,
  extraProps: {},
  config: {},
});
export const StatefulProvider = StatefulContext.Provider;
StatefulContext.displayName = "StatefulContext";
