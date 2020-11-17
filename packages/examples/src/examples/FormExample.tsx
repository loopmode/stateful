import React from "react";
import { Stateful } from "./Stateful";
import { StatefulConsumer } from "@loopmode/stateful";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

async function dummyLogin() {
  await wait(200 + Math.random() * 800);
  if (Math.random() > 0.5) {
    return Promise.reject(new Error("Something went wrong"));
  }
  return Promise.resolve({ id: 1 });
}

export function FormExample() {
  const [error, setError] = React.useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setError("");
      await dummyLogin();
    } catch (error) {
      console.log();
      setError(error.message);
      return error;
    }
  };
  return (
    <div className="">
      <div className="container">
        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
          <div className="column">
            <Stateful busyDelay={0} monitor="onSubmit" provideContext>
              <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input type="email" className="input" placeholder="e.g. hkakehas@cisco.com" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" className="input" placeholder="*********" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <div className="field">
                  {error && <p className="help is-danger">{error}</p>}
                  <StatefulConsumer ignore="busy">
                    <button className="button" type="submit">
                      Login
                    </button>
                  </StatefulConsumer>
                </div>
              </form>
            </Stateful>
          </div>
        </div>
      </div>
    </div>
  );
}
