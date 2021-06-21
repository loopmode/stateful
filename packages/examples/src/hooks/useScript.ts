import React from "react";

export function useScript(url: string) {
  const [scriptLoaded, setLoaded] = React.useState(false);
  const handleLoaded = React.useCallback(() => setLoaded(true), []);
  React.useEffect(() => {
    const el = document.createElement("script");
    el.addEventListener("load", handleLoaded);
    el.src = url;
    document.head.appendChild(el);
    return () => {
      el.removeEventListener("load", handleLoaded);
      document.head.removeChild(el);
    };
  }, [handleLoaded, url]);
  return { scriptLoaded };
}
