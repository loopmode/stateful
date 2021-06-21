export default function isPromise(value: unknown): boolean {
  if (value && typeof (value as any).then === "function") {
    return true;
  }
  return false;
}
