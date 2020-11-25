import React from "react";
import { StatefulConfig, StatefulProps } from "../types";
import { StatefulConfigurationProvider } from "../context";

export const bulmaPreset: StatefulConfig = {
  pendingFlags: "disabled",
  pendingClasses: "",

  busyDelay: 0,
  busyFlags: "disabled",
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
