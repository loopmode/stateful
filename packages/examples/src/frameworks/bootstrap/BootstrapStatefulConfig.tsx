import React from "react";

import { StatefulProps } from "@loopmode/stateful/lib/types";
import { StatefulConfigurationProvider } from "@loopmode/stateful";

export function BootstrapStatefulConfig({ children, ...props }: StatefulProps) {
  return (
    <StatefulConfigurationProvider
      value={{
        pendingProps: () => ({ children: "Loading...", disabled: true }),

        successProps: () => ({ variant: "success" }),
        successDuration: 1000,

        errorProps: () => ({ variant: "danger" }),
        errorDuration: 2000,
        //
        ...props,
      }}
      children={children}
    />
  );
}
