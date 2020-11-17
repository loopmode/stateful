import React from "react";
import { StatefulContextType } from "./types";
import { Status } from "./Status";

const StatefulContext = React.createContext<StatefulContextType>({
  status: Status.IDLE,
  statusProps: {},
  configProps: {},
});
export const StatefulProvider = StatefulContext.Provider;
StatefulContext.displayName = "StatefulContext";

export default StatefulContext;
