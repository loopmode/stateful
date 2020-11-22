import { Status } from "./Status";

export type StatefulProps = {
  children?: React.ReactElement | React.ReactElement[];

  /** One or more callback names of the wrapped child to override and monitor */
  monitor?: string | string[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `pending` */
  pendingProps?: string | string[];
  /** One or more CSS class names to decorate wrapped children with, while status is `pending` */
  pendingClasses?: string | string[];
  /** Number of milliseconds before state `pending` turns to state `busy` */
  busyDelay?: number;
  /** One or more boolean flags that are passed as props to wrapped children while status is `busy` */
  busyProps?: string | string[];
  /** One or more CSS class names to decorate wrapped children with, while status is `busy` */
  busyClasses?: string | string[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `success` */
  successProps?: string | string[];
  /** One or more CSS class names to decorate wrapped children with, while status is `success` */
  successClasses?: string | string[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `error` */
  errorProps?: string | string[];
  /** One or more CSS class names to decorate wrapped children with, while status is `error` */
  errorClasses?: string | string[];
  /** How long to display error or success state before turning back to idle. */
  hintDuration?: number;
  /** How long to display success state before turning back to idle state. Overrides `hintDuration` for success cases. */
  successDuration?: number;
  /** How long to display error state before turning back to idle state. Overrides `hintDuration` for error cases. */
  errorDuration?: number;
  /** Delimiter for multiple values in a single string. Defaults to space, for e.g. values like "onClick onSubmit onReset"   */
  delimiter?: string;
  /** Only handle callbacks if they return a promise. */
  promisesOnly?: boolean;
  //
  shouldRejectValue?: (value: unknown) => boolean;
};
export type StatefulContextType = {
  status: Status;
  statusProps: any;
  configProps: StatefulProps;
};
