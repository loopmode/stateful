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
    return new Error("Nope");
  };

  return (
    <>
      <div>
        <Stateful busyDelay={500}>
          <button className="btn btn-primary mr-1" onClick={successCallback}>
            Will succeed
          </button>
        </Stateful>

        <Stateful>
          <button className="btn btn-info" onClick={errorCallback}>
            Will fail
          </button>
        </Stateful>
      </div>
      <ToggleCodeViewer content={raw("./button-inline-example.tsx")} />
    </>
  );
}
