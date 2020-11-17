import React from "react";

import { Stateful as DefaultStateful } from "@loopmode/stateful";

export function Stateful(props: React.ComponentProps<typeof DefaultStateful>) {
  // defines default settings
  return (
    <DefaultStateful
      pendingProps={"disabled"}
      //
      busyDelay={500}
      busyProps={"disabled"}
      busyClasses={"is-loading"}
      //
      successClasses={"is-success"}
      successDuration={1000}
      //
      errorClasses={"is-danger"}
      errorDuration={2000}
      {...props}
    />
  );
}
