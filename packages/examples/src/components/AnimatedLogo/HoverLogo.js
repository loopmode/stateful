import React from "react";
import Logo from "./Logo";

export default function HoverLogo(props) {
  const [animated, setAnimated] = React.useState(false);

  return (
    <Logo
      {...props}
      animated={animated}
      onMouseEnter={() => setAnimated(true)}
      onMouseLeave={() => setAnimated(false)}
      onClick={() => setAnimated(false)}
    />
  );
}
