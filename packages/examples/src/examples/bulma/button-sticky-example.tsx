import { Stateful } from "@loopmode/stateful";
import raw from "raw.macro";
import React from "react";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function ButtonStickyExample() {
  const successCallback = async () => {
    await wait(Math.random() * 2000);
  };
  const errorCallback = async () => {
    await wait(Math.random() * 2000);
    return new Error("Nope");
  };
  const randomCallback = () => {
    return Math.random() > 0.5 ? successCallback() : errorCallback();
  };
  return (
    <>
      <h3>Sticky indicator</h3>
      <p>
        If you provide a duration of -1, the indicating state will never be automatically reset.
      </p>
      <div className="buttons">
        <Stateful successDuration={-1}>
          <button className="button" onClick={successCallback}>
            Sticky success
          </button>
        </Stateful>

        <Stateful errorDuration={-1}>
          <button className="button" onClick={errorCallback}>
            Sticky fail
          </button>
        </Stateful>
      </div>
      <p>
        Note that you can specify <code>successDuration</code> and <code>errorDuration</code>{" "}
        individually, or you can specify a value for both using <code>hintDuration</code> instead.
      </p>
      <div className="buttons">
        <Stateful hintDuration={-1}>
          <button className="button" onClick={randomCallback}>
            Sticky random
          </button>
        </Stateful>
      </div>
      <ToggleCodeViewer content={raw("./button-sticky-example.tsx")} />
    </>
  );
}
