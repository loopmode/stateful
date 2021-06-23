import { Stateful } from "@loopmode/stateful";
import React from "react";
import cx from "classnames";
import { StatefulProps } from "@loopmode/stateful/lib/types";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";
import raw from "raw.macro";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const Button = ({
  stateful,
  ...props
}: React.HTMLProps<HTMLButtonElement> & {
  // If you care about individual settings per instance, you can pass a stateful props object along
  stateful?: StatefulProps;
  // workaround for warnings with current react+typescript
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <Stateful
      // set defaults here
      busyDelay={300}
      pendingProps="disabled"
      busyClasses="is-loading"
      successClasses="is-success"
      errorClasses="is-danger"
      // override with individual settings
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
      <h3> Example using a custom button component.</h3>
      <p>
        If you have a custom <code>Button</code> component in your project, you can add a Stateful
        wrapper and configure inside of it. Later throughout your codebase, you won't have to care
        about using Stateful wrappers anymore.
      </p>
      <p>Click a button to launch an operation of random duration.</p>
      <div className="buttons">
        <Button onClick={handleSuccessClick}>Successfull operation</Button>
        <Button onClick={handleErrorClick}>Failing operation</Button>
        <Button onClick={handleRandomClick} stateful={{ busyDelay: 0 }}>
          Random outcome
        </Button>
      </div>

      <ToggleCodeViewer content={raw("./button-component-example.tsx")} />
    </>
  );
}
