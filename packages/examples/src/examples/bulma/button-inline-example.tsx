import { Stateful } from "@loopmode/stateful";
import raw from "raw.macro";
import React from "react";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";

// You can wrap any JSX children in Stateful wrappers.

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function ButtonInlineExample() {
  const successCallback = async () => {
    await wait(Math.random() * 2000);
  };
  const errorCallback = async () => {
    await wait(Math.random() * 2000);
    return new Error("failed");
  };
  const randomCallback = () => {
    return Math.random() > 0.5 ? successCallback() : errorCallback();
  };
  return (
    <>
      <h3>Inline buttons example</h3>
      <p>
        Here are a bunch of examples, where a <code>Stateful</code> wrapper is not part of e.g. your{" "}
        <code>Button</code> component, but is instead used inline.
      </p>
      <div className="buttons">
        <Stateful busyDelay={500}>
          <button className="button" onClick={successCallback}>
            Successfull operation
          </button>
        </Stateful>

        <Stateful busyDelay={0}>
          <button className="button" onClick={errorCallback}>
            Failing operation
          </button>
        </Stateful>

        <Stateful errorClasses="is-warning">
          <button className="button" onClick={errorCallback}>
            Warn on error
          </button>
        </Stateful>
      </div>

      <div className="buttons">
        <Stateful>
          <button className="button is-primary" onClick={successCallback}>
            Siblings
          </button>
          <button className="button is-info" onClick={randomCallback}>
            are
          </button>
          <button className="button is-dark" onClick={randomCallback}>
            grouped
          </button>
        </Stateful>
      </div>
      <ToggleCodeViewer content={raw("./button-inline-example.tsx")} />
    </>
  );
}
