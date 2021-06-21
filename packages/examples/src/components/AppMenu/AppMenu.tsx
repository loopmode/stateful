import React, { useRef } from "react";

import cx from "classnames";

import "./AppMenu.scss";
 
import useBodyClass from "../../hooks/useBodyClass";

import { ReactComponent as MdClose } from "../../images/close-24px.svg";
import useOutsideEvent from "../../hooks/useOutsideEvent";

/**
 * Renders the AppMenu container with some behaviour for mobile devices.
 * The actual navigation links are defined in AppMenuLinks.js
 */
export default function AppMenu(props: {
  mobileMenuVisible: boolean;
  children: React.ReactElement[];
  onHideMenu: (event: any) => void;
}) {
  const ref = useRef(null);

  useBodyClass({
    enabled: props.mobileMenuVisible,
    className: "no-scroll",
  });
  useOutsideEvent(ref, {
    enabled: props.mobileMenuVisible,
    callback: props.onHideMenu,
    eventName: "click",
  });

  const { onHideMenu } = props;
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (e.target instanceof HTMLAnchorElement) {
        onHideMenu(e);
      }
    },
    [onHideMenu]
  );

  return (
    <div
      className={cx("AppMenu", {
        "show-mobile-menu": props.mobileMenuVisible,
      })}
      onClick={handleClick}
    >
      <div className="AppMenu--mobile-overlay" />
      <div className="AppMenu--inner">
        <header className="AppMenu--mobile-header">
          <button
            className="AppMenu--mobile-close"
            onClick={(event) => {
              event.preventDefault();
              props.onHideMenu(event);
            }}
          >
            <MdClose />
            CLOSE MENU
          </button>
        </header>

        <div className="AppMenu--contents" ref={ref}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
