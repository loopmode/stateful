import React from 'react';

/**
 * Invokes the `onHideMenu` callback when a click outside of the given element ref is detected.
 *
 * @param {Object} ref - React ref to the menu DOM element
 * @param {Object} options -
 * @param {String} options.event - Name of the event to handle
 * @param {Boolean} options.enabled - whether to handle events
 * @param {Function} options.callback - callback to invoke upon outer click
 */
export default function useOutsideEvent(ref, { eventName, callback, enabled }) {
    const handleEvent = event => {
        if (enabled && ref.current && !ref.current.contains(event.target)) {
            callback();
        }
    };
    React.useEffect(() => {
        document.addEventListener(eventName, handleEvent);
        return () => document.removeEventListener(eventName, handleEvent);
    });
}
