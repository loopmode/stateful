import React from "react";
 
import LoadingOverlay from "../../components/LoadingOverlay";
import { useStylesheet } from "../../hooks/useStylesheet";

export function BootstrapAssetsProvider(props: React.PropsWithChildren<any>) {
  const { stylesLoaded } = useStylesheet(
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  );
  if (stylesLoaded) {
    return props.children;
  }

  return <LoadingOverlay delay={0} />;
}
