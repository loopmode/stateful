import { Stateful, StatefulConfigProvider } from "@loopmode/stateful";
import raw from "raw.macro";
import React from "react";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";

const statefulConfig = {
  pendingProps: "disabled",
  pendingClasses: "",

  busyDelay: 0,
  busyProps: "disabled",
  busyClasses: "is-loading",

  successClasses: "is-success",
  successDuration: 2000,

  errorClasses: "is-danger",
  errorDuration: 2000,
};

export default function ConfigProviderExample() {
  return (
    <StatefulConfigProvider config={statefulConfig}>
      <h3>StatefulConfigProvider</h3>
      <p>
        You can render a <code>StatefulConfigProvider</code> at high level (e.g. wrapping your app)
        and provide default configuration for all nested Stateful instances.
        <br />
        This way, you can create defaults that match the UI framework your app is using, in a
        central place.
        <br />
        Of course, you can still use props on individual components to override those defaults.
      </p>
      <p>
        In this example, we define a configuration that works for the{" "}
        <a href="https://bulma.io/" target="_blank" rel="noreferrer noopener">
          bulma
        </a>{" "}
        CSS framework.
      </p>
      <ExampleApp />
      <ToggleCodeViewer content={raw("./config-provider-example.tsx")} />
    </StatefulConfigProvider>
  );
}

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
function ExampleApp() {
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
          Successfull operation
        </button>
      </Stateful>

      {/* of course you can still override the provided defaults per instance */}
      <Stateful errorProps={{ title: "Something went wrong..." }} errorDuration={10000}>
        <button className="button" onClick={errorCallback}>
          Failing operation
        </button>
      </Stateful>
    </div>
  );
}
