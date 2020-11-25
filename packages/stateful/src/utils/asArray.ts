import { Status } from "../Status";
import { StatusResolver } from "../types";

export default function asArray<T = string>(
  value: string | StatusResolver | (string | StatusResolver)[] | undefined,
  status?: Status,
  delimiter = " "
): T[] {
  if (!value) {
    return [];
  }
  if (typeof value === "function") {
    return value(status);
  }
  if (typeof value === "string") {
    return (value.split(delimiter) as unknown) as T[];
  }
  if (Array.isArray(value)) {
    return (value as any[]).reduce((result, current) => {
      return [...result, ...asArray(current, status, delimiter)];
    }, []) as T[];
  }
  return (value as unknown) as T[];
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
