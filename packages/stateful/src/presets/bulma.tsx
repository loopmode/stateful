import React from "react";
import { StatefulConfig, StatefulProps } from "../types";
import { StatefulConfigurationProvider } from "../context";

export const bulmaPreset: StatefulConfig = {
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
    <StatefulConfigurationProvider
      value={{
        ...bulmaPreset,
        ...props,
      }}
      children={children}
    />
  );
};
