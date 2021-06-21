import React from "react";

export default function useBodyClass({
  enabled = true,
  className,
}: {
  enabled?: boolean;
  className: string;
}) {
  React.useEffect(() => {
    const addClass = () => document.body.classList.add(className);
    const removeClass = () => document.body.classList.remove(className);
    if (enabled) {
      addClass();
    } else {
      removeClass();
    }
    return () => removeClass();
  }, [enabled, className]);
}
