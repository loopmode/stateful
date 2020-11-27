import React from "react";
import { Status } from "../Status";
import { StatusResolver } from "../types";

export default function asArray<T = string>({
  value,
  status,
  childProps,
  delimiter = " ",
}: {
  value: string | StatusResolver | (string | StatusResolver)[] | undefined;
  status: Status;
  childProps: React.PropsWithChildren<any>;
  delimiter?: string;
}): T[] {
  if (!value) {
    return [];
  }

  if (typeof value === "function") {
    const result = value(status, childProps);
    if (Array.isArray(result)) {
      return result;
    }
    return [result];
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
