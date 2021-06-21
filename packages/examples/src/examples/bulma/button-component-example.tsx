import { Stateful } from "@loopmode/stateful";
import React from "react";
import cx from "classnames";
import { StatefulProps } from "@loopmode/stateful/lib/types";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";
import raw from "raw.macro";

// Example using a custom button component.
// If you have a custom Button component anyways, you can add a single Stateful wrapper and configure it there.
// Later throughout your codebase, you don't care about importing or configuring Stateful wrappers anymore.

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const Button = ({
  stateful,
  ...props
}: React.HTMLProps<HTMLButtonElement> & {
  // If you care about individual settings per instance, you can pass a stateful props object along
  stateful?: StatefulProps;
  // latest react types workaround
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <Stateful
      busyDelay={300}
      pendingProps="disabled"
      busyClasses="is-loading"
      successClasses="is-success"
      errorClasses="is-error"
      {...stateful}
    >
      <button {...props} className={cx("button", props.className)}>
        {props.children}
      </button>
    </Stateful>
  );
};

export default function ButtonComponentExample() {
  const handleSuccessClick = async () => {
    await wait(Math.random() * 2500);
  };
  const handleErrorClick = async () => {
    await wait(Math.random() * 2500);
    return new Error("Nope");
  };
  const handleRandomClick = () => {
    return Math.random() > 0.5 ? handleSuccessClick() : handleErrorClick();
  };
  return (
    <>
      <div className="buttons">
        <Button onClick={handleSuccessClick}>Will succeed</Button>
        <Button onClick={handleErrorClick}>Will fail</Button>
        <Button onClick={handleRandomClick} stateful={{ busyDelay: 0 }}>
          Random fail
        </Button>
      </div>

      <ToggleCodeViewer content={raw("./button-component-example.tsx")} />
    </>
  );
}
