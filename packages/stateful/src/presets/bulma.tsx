import React from "react";
import { StatefulProps } from "../types";
import { StatefulConfigProvider } from "../Context";

export const bulmaPreset: StatefulProps = {
  pendingProps: "disabled",
  pendingClasses: "",

  busyDelay: 0,
  busyProps: "disabled",
  busyClasses: "is-loading",
  //
  successClasses: "is-success",
  successDuration: 1000,
  //
  errorClasses: "is-danger",
  errorDuration: 2000,
};

export const BulmaConfigProvider = ({ children, ...props }: StatefulProps) => {
  return (
    <StatefulConfigProvider
      value={{
        ...bulmaPreset,
        ...props,
      }}
      children={children}
    />
  );
};
