import { Stateful } from "@loopmode/stateful";
import raw from "raw.macro";
import React from "react";
import { ToggleCodeViewer } from "../ToggleCodeViewer";

// You can wrap any JSX children in Stateful wrappers.

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function ButtonInlineExample() {
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
    <div className="">
      <div className="buttons">
        <Stateful busyDelay={500}>
          <button className="button" onClick={successCallback}>
            Will succeed
          </button>
        </Stateful>
        
        <Stateful>
          <button className="button" onClick={errorCallback}>
            Will fail
          </button>
        </Stateful>

        <Stateful errorClasses="is-warning">
          <button className="button" onClick={errorCallback}>
            Will warn
          </button>
        </Stateful>

        <Stateful>
          <button className="button button-primary" onClick={successCallback}>
            Grouped
          </button>
          <button className="button button-primary" onClick={randomCallback}>
            Grouped
          </button>
        </Stateful>
      </div>
      <ToggleCodeViewer content={raw("./button-inline-example.tsx")} />
    </div>
  );
}
