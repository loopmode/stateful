import React from "react";
export function useStylesheet(url: string) {
  const [stylesLoaded, setLoaded] = React.useState(false);
  const handleLoaded = React.useCallback(() => setLoaded(true), []);
  React.useEffect(() => {
    const el = document.createElement("link");
    el.addEventListener("load", handleLoaded);
    el.type = "text/css";
    el.rel = "stylesheet";
    el.href = url;
    document.head.appendChild(el);
    return () => {
      el.removeEventListener("load", handleLoaded);
      document.head.removeChild(el);
    };
  }, [handleLoaded, url]);
  return { stylesLoaded };
}
