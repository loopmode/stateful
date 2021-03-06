import React from "react";

import { StatefulProps } from "@loopmode/stateful/lib/types";
import { StatefulConfigProvider } from "@loopmode/stateful";

export function BulmaStatefulConfig({ children, ...props }: StatefulProps) {
  return (
    <StatefulConfigProvider
      config={{
        pendingProps: "disabled",
        pendingClasses: "",

        busyDelay: 0,
        busyProps: "disabled",
        busyClasses: "is-loading",

        successClasses: "is-success",
        successDuration: 1000,

        errorClasses: "is-danger",
        errorDuration: 2000,
        //
        ...props,
      }}
      children={children}
    />
  );
}
