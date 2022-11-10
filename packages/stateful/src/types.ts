import { useStateful } from "./hooks";
import { Status } from "./Status";

export type StatusResolver = (status: Status, childProps: React.PropsWithChildren<any>) => any;

export type StatefulHandlers = Pick<ReturnType<typeof useStateful>, "handlers">["handlers"];

export type RenderFunction = (props: {
  status: Status;
  handlers: StatefulHandlers;
}) => React.ReactElement;

export type ConfirmExitMode = "started" | "finished" | "idle";

export type StatefulConfig = {
  /** One or more callback names to override and monitor */
  monitor?: string | string[];
  /**
   * Either a boolean flag or one or more callback names to
   * intercept and delay until confirmed by the user.
   * A boolean `true` will use the value defined in `monitor` (confirm all callbacks) */
  confirm?: boolean | string | string[];

  /**
   * The mode of confirm exit
   *
   * - `started`: confirm state exits when confirm callback is invoked
   * - `finished`: confirm state exits when confirm callback has finished
   * - `idle`: confirm state exits when confirm callback and its result indicator have finished
   */
  confirmExit?: ConfirmExitMode;

  /** One or more boolean flags that are passed as props to wrapped children while status is `pending` */
  pendingProps?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;
  /** One or more CSS class names to decorate wrapped children with while the status is `pending` */
  pendingClasses?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;

  /** Number of milliseconds before state `pending` turns to state `busy` */
  busyDelay?: number;
  /** One or more boolean flags that are passed as props to wrapped children while status is `busy` */
  busyProps?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;
  /** One or more CSS class names to decorate wrapped children with while the status is `busy` */
  busyClasses?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;

  /** One or more boolean flags that are passed as props to wrapped children while status is `success` */
  successProps?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;
  /** One or more CSS class names to decorate wrapped children with while the status is `success` */
  successClasses?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;

  /** One or more boolean flags that are passed as props to wrapped children while status is `error` */
  errorProps?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;
  /** One or more CSS class names to decorate wrapped children with while the status is `error` */
  errorClasses?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;

  /** One or more boolean flags that are passed as props to wrapped children while status is `confirm` */
  confirmProps?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;
  /** One or more CSS class names to decorate wrapped children with while the status is `confirm` */
  confirmClasses?: string | StatusResolver | (string | StatusResolver)[] | Record<string, unknown>;

  /**
   * How long to remain in error or success state before turning back to idle.
   * Set to -1 to keep the final state indefinitely.
   * Will be overridden by `successDuration` or `errorDuration`, if set.
   */
  hintDuration?: number;
  /**
   * How long to remain in success state before turning back to idle state.
   * Set to -1 to keep the final state indefinitely.
   * Overrides `hintDuration` for success cases.
   */
  successDuration?: number;
  /**
   * How long to remain in error state before turning back to idle state.
   * Set to -1 to keep the final state indefinitely.
   * Overrides `hintDuration` for error cases.
   */
  errorDuration?: number;

  /**
   * Delimiter for multiple values in a single string.
   * Defaults to a single space character, for values like "onClick onSubmit onReset"
   */
  delimiter?: string;

  /**
   * If true, callbacks are only handled if they are async (or explicitly return a promise).
   */
  promisesOnly?: boolean;

  /**
   * A function that decides whether to handle a successfully resolved promise as a rejection, based on the resolved value.
   * Out of the box, any promise that resolves with an `Error` object is treated as rejected.
   */
  shouldRejectValue?: (value: unknown) => boolean;

};

export type StatefulProps = StatefulConfig & {
  children?: React.ReactElement | React.ReactElement[] | RenderFunction;
  
  /**
   * Whether to add the generated props to wrapped children. Default is true.
   */
  provideProps?: boolean;

  /**
   * Whether to provide a Stateful context to deeply nested children. Default is true.
   */
  provideContext?: boolean;

  /**
   * Renders the original children without attaching or overriding any props.
   */
  disabled?: boolean;
};

export type StatefulConsumerProps = StatefulConfig & {
  children?: React.ReactElement | React.ReactElement[] | RenderFunction;
};

export type StatefulContextValue = {
  status: Status;
  statusProps: any;
  config: StatefulConfig;
  handlers: StatefulHandlers;
};
