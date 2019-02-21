export default function asArray(value, delimiter = ' ') {
    if (typeof value === 'string') {
        return value.split(delimiter);
    }
    return value;
}
