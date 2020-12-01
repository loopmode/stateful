import React from "react";
import { Status } from "../Status";
import { StatusResolver } from "../types";

/**
 * Resolves one or more values that will to an array.
 *
 * If the given value is a string, it is treated as a delimiter list,
 * e.g. `"one two"` becomes `["one", "two"]`
 *
 * If the given value is a resolver function, that function is invoked with `value(status, childProps)`,
 * and its return value is returned as an array,
 * e.g. `() => ("one two")` becomes `["one", "two"]`
 *
 * If the given value is an array, each of its elements will be treated recursively,
 * e.g. `["0 1", "2", () => ("3 4"), ["5 6"]]` becomes  `["0", "1", "2", "3", "4", "5", "6"]`
 *
 *  TODO: write tests dammit!
 */
export default function asArray<T = string>({
  value,
  status,
  childProps,
  delimiter = " ",
}: {
  value:
    | string
    | StatusResolver
    | (string | StatusResolver)[]
    | Record<string, unknown>
    | undefined;
  status: Status;
  /**
   * The childProps are only needed when `value` is a resolver function.
   */
  childProps?: React.PropsWithChildren<any>;
  delimiter?: string;
}): T[] {
  if (!value) {
    return [];
  }

  if (typeof value === "function") {
    return asArray({
      value: value(status, childProps),
      status,
      childProps,
      delimiter,
    });
  }

  if (typeof value === "string") {
    return (value.split(delimiter) as unknown) as T[];
  }

  if (Array.isArray(value)) {
    return (value as any[]).reduce((result, current) => {
      return [...result, ...asArray({ value: current, status, delimiter, childProps })];
    }, []) as T[];
  }

  return [value as unknown] as T[];
}

asArray.simple = function asArraySimple<T = string>(
  value: string | string[] | undefined,
  delimiter = " "
): T[] {
  if (!value) {
    return [];
  }
  if (typeof value === "string") {
    return (value.split(delimiter) as unknown) as T[];
  }
  return (value as unknown) as T[];
};
