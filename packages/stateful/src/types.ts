import { Status } from "./Status";

export type StatefulProps = {
  children?: React.ReactElement | React.ReactElement[];
  /**
   * Name of the function(s) to override and monitor.
   */
  monitor?: string | string[];
  //
  pendingProps?: string | string[];
  pendingClasses?: string | string[];
  //
  busyDelay?: number;
  busyProps?: string | string[];
  busyClasses?: string | string[];
  //
  successProps?: string | string[];
  successClasses?: string | string[];
  //
  errorProps?: string | string[];
  errorClasses?: string | string[];
  //
  hintDuration?: number;
  successDuration?: number;
  errorDuration?: number;
  //
  delimiter?: string;
  //
  shouldRejectValue?: (value: unknown) => boolean;
};

export type StatefulContextType = {
  status: Status;
  statusProps: any;
  configProps: StatefulProps;
};
