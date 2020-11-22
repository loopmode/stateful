import React from "react";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../ToggleCodeViewer";
import raw from "raw.macro";

// When you use provideContext, you can conditionally render some children only in specific states

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

async function randomCallback() {
  await wait(4000);
  if (Math.random() > 0.5) {
    return new Error("Something went wrong");
  }
  return Promise.resolve({ id: 1 });
}

export default function StateConsumersExample() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return randomCallback();
  };
  return (
    <div className="">
      <div className="container">
        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
          <div className="column is-half">
            <Stateful
              provideContext
              monitor="onSubmit"
              busyDelay={2000}
              successDuration={2000}
              errorDuration={2000}
            >
              <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <Stateful.Consumer>
                      <input type="email" className="input" placeholder="e.g. hkakehas@cisco.com" />
                    </Stateful.Consumer>

                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <Stateful.Consumer>
                    <button className="button" type="submit">
                      Login
                    </button>
                  </Stateful.Consumer>
                </div>

                <Stateful.IdleConsumer>
                  <div className="field">
                    <div className="notification">Idle</div>
                  </div>
                </Stateful.IdleConsumer>

                <Stateful.PendingConsumer>
                  <div className="field">
                    <div className="notification">Pending or busy</div>
                  </div>
                </Stateful.PendingConsumer>

                <Stateful.PendingConsumer exact>
                  <div className="field">
                    <div className="notification is-info">Pending</div>
                  </div>
                </Stateful.PendingConsumer>

                <Stateful.BusyConsumer exact>
                  <div className="field">
                    <div className="notification is-info">Busy</div>
                  </div>
                </Stateful.BusyConsumer>

                <Stateful.FinishedConsumer>
                  <div className="field">
                    <div className="notification">Finished</div>
                  </div>
                </Stateful.FinishedConsumer>

                <Stateful.SuccessConsumer>
                  <div className="field">
                    <div className="notification is-success">Success</div>
                  </div>
                </Stateful.SuccessConsumer>

                <Stateful.ErrorConsumer>
                  <div className="field">
                    <div className="notification is-danger">Error</div>
                  </div>
                </Stateful.ErrorConsumer>
              </form>
            </Stateful>
          </div>
        </div>
      </div>
      <ToggleCodeViewer content={raw("./state-consumers-example.tsx")} />
    </div>
  );
}
