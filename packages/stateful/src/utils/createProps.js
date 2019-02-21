import * as Status from './Status';
import asArray from './asArray';

/**
 * Creates an object with boolean flags for the defined CSS classNames.
 * The object has a property and the value `true` for each class
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
export function createStatusClasses(status, props) {
    const flags = {
        [Status.PENDING]: props.pendingClasses,
        [Status.BUSY]: props.busyClasses,
        [Status.SUCCESS]: props.successClasses,
        [Status.ERROR]: props.errorClasses
    };

    return createProps(flags, status, props.delimiter);
}

/**
 * Creates an object with boolean flags for the defined props.
 * The object has a property and the value `true` for each propName
 * that was defined for the matching state.
 *
 * @param {Status} status The current status of the Stateful instance state
 * @param {Object} props The props of the Stateful instance
 */
export function createStatusProps(status, props) {
    const flags = {
        [Status.PENDING]: props.pendingProps,
        [Status.BUSY]: props.busyProps,
        [Status.SUCCESS]: props.successProps,
        [Status.ERROR]: props.errorProps
    };

    return createProps(flags, status, props.delimiter);
}

export function createProps(flags, status, delimiter) {
    const statusFlags = flags[status];
    if (typeof statusFlags === 'function') {
        return statusFlags(status);
    } else {
        return createFlags(statusFlags, delimiter);
    }
}

/**
 * Takes one or more string keys and returns an object with boolean flags for each key.
 * If `key` contains multiple values, the returned object contains a property for each key.
 *
 * @param {String | String[]} key One or more names for properties in the returned object
 * @param {String} delimiter A string for splitting multi-value `key` strings into an array
 * @param {*} [value=true] The value for each property of the returned object
 * @returns {Object} An object that has a property for each `key` provided and contains the `value`
 */
export function createFlags(key, delimiter, value = true) {
    const keys = asArray(key, delimiter);
    if (!keys) {
        return {};
    }
    return keys.reduce((result, propName) => {
        return {
            ...result,
            [propName]: value
        };
    }, {});
}

/**
 * Creates an object with props that are unknown and should be passed along to the children.
 * The object contains all props not found in a given list `omittedNames`.
 *
 * @param {*} childProps A child's props object
 * @param {String[]} omittedNames Names of props to exclude from the result
 * @return {*} The remaining props object
 */
export function omitProps(childProps, omittedNames = []) {
    return Object.keys(childProps).reduce((result, key) => {
        if (!omittedNames.includes(key)) {
            result[key] = childProps[key];
        }
        return result;
    }, {});
}
