import cx from 'classnames';
import * as Status from './Status';
import asArray from './asArray';

/**
 *
 * @param {Object} childProps An object with the props of the child component
 * @param {Object} ownProps An object with the props of the `Stateful` wrapper component
 * @param {Object} status The current `Status` value
 * @param {String} [delimiter] A string for splitting multi-value strings into an array
 */
export default function injectStatefulProps(
    childProps,
    ownProps,
    status,
    delimiter
) {
    return {
        className: cx(
            childProps.className,
            getClassFlags(ownProps, status, delimiter)
        ),
        ...getPropFlags(ownProps, status, delimiter)
    };
}

/**
 * Takes a key and a value and returns an object.
 * The `key` may contain multiple values, in which case the
 * resulting object contains a property for each key.
 *
 * @param {String | String[]} key One or more names for properties in the returned object
 * @param {*} value The value for all properties of the returned object
 * @param {String} delimiter A string for splitting multi-value `key` strings into an array
 * @returns {Object} An object that has a property for each `key` provided and contains the `value`
 */
export function getFlags(key, value, delimiter) {
    if (!key) {
        return {};
    }
    return asArray(key, delimiter).reduce((result, flag) => {
        return {
            ...result,
            [flag]: value
        };
    }, {});
}

function getClassFlags(props, status, delimiter) {
    return getActiveFlags(
        [
            { active: status === Status.PENDING, flags: props.pendingClasses },
            { active: status === Status.BUSY, flags: props.busyClasses },
            { active: status === Status.SUCCESS, flags: props.successClasses },
            { active: status === Status.ERROR, flags: props.errorClasses }
        ],
        delimiter
    );
}
function getPropFlags(props, status, delimiter) {
    return getActiveFlags(
        [
            { active: status === Status.PENDING, flags: props.pendingProps },
            { active: status === Status.BUSY, flags: props.busyProps },
            { active: status === Status.SUCCESS, flags: props.successProps },
            { active: status === Status.ERROR, flags: props.errorProps }
        ],
        delimiter
    );
}

function getActiveFlags(states, delimiter) {
    const state = states.find(item => item.active);
    if (state) {
        return getFlags(state.flags, true, delimiter);
    }
    return {};
}
