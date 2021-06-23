import React from "react";

import { StatefulProps } from "@loopmode/stateful/lib/types";
import { StatefulConfigProvider } from "@loopmode/stateful";

export function BootstrapStatefulConfig({ children, ...props }: StatefulProps) {
  return (
    <StatefulConfigProvider
      config={{
        pendingProps: (status, childProps) => ({
          children: (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />{" "}
              {childProps.children}
            </>
          ),
          disabled: true,
        }),

        successClasses: "btn-success",
        successDuration: 1000,

        errorClasses: "btn-danger",
        errorDuration: 2000,
        //
        ...props,
      }}
      children={children}
    />
  );
}
