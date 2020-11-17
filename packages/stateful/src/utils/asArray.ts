export default function asArray<T = string>(
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
}
