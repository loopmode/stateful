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

  return (
    <>
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
      <ToggleCodeViewer content={raw("./button-sticky-example.tsx")} />
    </>
  );
}
