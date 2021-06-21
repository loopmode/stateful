import React from "react";
export function usePrismBulmaFix() {
  // prismjs and bulma stylesheets collide on the .number and .tag classes
  // see https://github.com/jgthms/bulma/issues/1708
  React.useEffect(() => {
    const Prism = require("prismjs");
    require("prismjs/plugins/custom-class/prism-custom-class");
    Prism.plugins.customClass.map({ number: "prism-number", tag: "prism-tag" });
    return () => {
      Prism.plugins.customClass.map({ number: "number", tag: "tag" });
    };
  }, []);
}
