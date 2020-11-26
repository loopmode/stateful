import { useStateful } from "./hooks";
import { Status } from "./Status";

export type StatusResolver = (status?: Status) => any;

export type StatefulHandlers = Pick<ReturnType<typeof useStateful>, "handlers">["handlers"];

export type RenderFunction = (props: { status: Status; handlers: StatefulHandlers }) => React.ReactElement;

export type StatefulConfig = {
  /** One or more callback names of the wrapped child to override and monitor */
  monitor?: string | string[];
  /** One or more callback names of the wrapped child to override and intercept until confirmed via Stateful.Confirm */
  confirm?: string | string[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `pending` */
  pendingFlags?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more CSS class names to decorate wrapped children with, while status is `pending` */
  pendingClasses?: string | StatusResolver | (string | StatusResolver)[];
  /** Number of milliseconds before state `pending` turns to state `busy` */
  busyDelay?: number;
  /** One or more boolean flags that are passed as props to wrapped children while status is `busy` */
  busyFlags?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more CSS class names to decorate wrapped children with, while status is `busy` */
  busyClasses?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `success` */
  successFlags?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more CSS class names to decorate wrapped children with, while status is `success` */
  successClasses?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `error` */
  errorFlags?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more CSS class names to decorate wrapped children with, while status is `error` */
  errorClasses?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more boolean flags that are passed as props to wrapped children while status is `confirm` */
  confirmFlags?: string | StatusResolver | (string | StatusResolver)[];
  /** One or more CSS class names to decorate wrapped children with, while status is `confirm` */
  confirmClasses?: string | StatusResolver | (string | StatusResolver)[];
  /** How long to display error or success state before turning back to idle. */
  hintDuration?: number;
  /** How long to display success state before turning back to idle state. Overrides `hintDuration` for success cases. */
  successDuration?: number;
  /** How long to display error state before turning back to idle state. Overrides `hintDuration` for error cases. */
  errorDuration?: number;
  /** Delimiter for multiple values in a single string. Defaults to space, for e.g. values like "onClick onSubmit onReset"   */
  delimiter?: string;
  /** Ignore regular callbacks and handle only callbacks that are async or explicitly return a promise.*/
  promisesOnly?: boolean;
  /**
   * A function that decides whether to handle a successfully resolved promise as an error, based on the resolved value.
   * Out of the box, any promise that resolves with an `Error` object is treated as rejected.
   */
  shouldRejectValue?: (value: unknown) => boolean;
};

export type StatefulProps = StatefulConfig & {
  children?: React.ReactElement | React.ReactElement[] | RenderFunction;
  provideProps?: boolean;
  provideContext?: boolean;
};

export type StatefulConsumerProps = StatefulConfig & {
  children?: React.ReactElement | React.ReactElement[] | RenderFunction;
};

export type StatefulContextValue = {
  status: Status;
  extraProps: any;
  config: StatefulConfig;
  handlers: StatefulHandlers
};
