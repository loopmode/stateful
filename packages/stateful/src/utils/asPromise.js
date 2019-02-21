export default function asPromise(value) {
    if (value && typeof value.then === 'function') {
        return value;
    }
    return undefined;
}
