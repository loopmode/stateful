import React from 'react';

/**
 * Adds a `className` CSS class to the body while mounted and `enabled` is true.
 * Makes the app unscrollable while the menu is displayed.
 * @param {Object} options -
 * @param {Boolean} options.enabled - whether to add/remove the body class
 * @param {String} options.className - the body class to add/remove
 */
export default function useBodyClass({ enabled, className }) {
    React.useEffect(() => {
        const addClass = () => document.body.classList.add(className);
        const removeClass = () => document.body.classList.remove(className);
        if (enabled) {
            addClass();
        } else {
            removeClass();
        }
        return () => removeClass();
    }, [enabled]);
}
