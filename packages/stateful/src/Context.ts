import React from "react";
import { StatefulContextType, StatefulProps } from "./types";
import { Status } from "./Status";

export const StatefulContext = React.createContext<StatefulContextType>({
  status: Status.IDLE,
  statusProps: {},
  configProps: {},
});
export const StatefulProvider = StatefulContext.Provider;
StatefulContext.displayName = "StatefulContext";

 

export const StatefulConfigContext = React.createContext<StatefulProps>({});
export const StatefulConfigProvider = StatefulConfigContext.Provider;
StatefulConfigContext.displayName = "StatefulConfigContext";

 
