import React, { RefObject } from "react";

/**
 * Invokes the `onHideMenu` callback when a click outside of the given element ref is detected.
 *
 * @param {Object} ref - React ref to the menu DOM element
 * @param {Object} options -
 * @param {String} options.event - Name of the event to handle
 * @param {Boolean} options.enabled - whether to handle events
 * @param {Function} options.callback - callback to invoke upon outer click
 */
export default function useOutsideEvent(
  ref: RefObject<HTMLElement>,
  {
    eventName,
    callback,
    enabled,
  }: {
    eventName: string;
    callback: (event: any) => void;
    enabled: boolean;
  }
) {
  const handleEvent = (event: any) => {
    if (enabled && ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback(event);
    }
  };
  React.useEffect(() => {
    document.addEventListener(eventName, handleEvent);
    return () => document.removeEventListener(eventName, handleEvent);
  });
}
