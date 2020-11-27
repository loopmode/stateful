import React from "react";

import { Link } from "react-router-dom";

import "./AppHeader.scss";

import { ReactComponent as MdMenu } from "../../images/menu-24px.svg";
import HoverLogo from "../AnimatedLogo/HoverLogo";

const AppHeader = ({
  onShowMenu,
}: React.PropsWithChildren<{
  onShowMenu: () => void;
}>) => {
  const handleShowMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    onShowMenu();
  };
  return (
    <header className="AppHeader">
      <div className="contents">
        <div className="AppHeader--title">
          <MdMenu className="show-mobile-menu only-small-screen" onClick={handleShowMenu} />
          @loopmode/stateful
        </div>
      </div>
      <Link to="/" className="logo-link" onClick={() => (document.documentElement.scrollTop = 0)}>
        <HoverLogo scale={0.25} />
      </Link>
    </header>
  );
};
export default AppHeader;
