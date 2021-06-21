import { Stateful, StatefulConfigurationProvider } from "@loopmode/stateful";
import raw from "raw.macro";
import React from "react";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";

// You can render a StatefulConfigurationProvider at high level (e.g. wrapping your app)
// and provide default configuration for all nested Stateful wrappers.
// You can still use props on individual components to override those defaults.
// This way, you can create a configuration for your specific UI framework.

const statefulConfig = {
  pendingProps: "disabled",
  pendingClasses: "",

  busyDelay: 0,
  busyProps: "disabled",
  busyClasses: "is-loading",
  //
  successClasses: "is-success",
  successDuration: 2000,
  //
  errorClasses: "is-danger",
  errorDuration: 2000,
};

export default function ConfigProviderExample() {
  return (
    <StatefulConfigurationProvider value={statefulConfig}>
      <SomeComponent />
      <ToggleCodeViewer content={raw("./config-provider-example.tsx")} />
    </StatefulConfigurationProvider>
  );
}

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
function SomeComponent() {
  const successCallback = async () => {
    await wait(200 + Math.random() * 800);
  };
  const errorCallback = async () => {
    await wait(200 + Math.random() * 800);
    return new Error("Nope");
  };

  return (
    <div className="buttons">
      <Stateful>
        <button className="button" onClick={successCallback}>
          Will succeed
        </button>
      </Stateful>

      <Stateful
        errorClasses="is-warning"
        errorProps={() => ({
          title: "Something went wrong...",
        })}
        errorDuration={10000}
      >
        <button className="button" onClick={errorCallback}>
          Will fail
        </button>
      </Stateful>
    </div>
  );
}
