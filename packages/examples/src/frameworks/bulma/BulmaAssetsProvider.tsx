import React from "react";

import LoadingOverlay from "../../components/LoadingOverlay";
import { useScript } from "../../hooks/useScript";
import { useStylesheet } from "../../hooks/useStylesheet";

import { usePrismBulmaFix } from "./bulma-prism-fix";

export function BulmaAssetsProvider(props: React.PropsWithChildren<any>) {
  const { scriptLoaded } = useScript("https://use.fontawesome.com/releases/v5.14.0/js/all.js");
  const { stylesLoaded } = useStylesheet("https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.css");

  usePrismBulmaFix();

  if (stylesLoaded && scriptLoaded) {
    return props.children;
  }

  return <LoadingOverlay delay={0} />;
}
