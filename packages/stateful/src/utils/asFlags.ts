import asArray from "./asArray";

export default function asFlags(value: string | string[]): Record<string, true> {
  return asArray(value).reduce((result, name) => Object.assign(result, { [name]: true }), {});
}
