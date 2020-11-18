import React from "react";
import { Stateful } from "@loopmode/stateful";
import { ToggleCode } from "../ToggleCode";
import raw from "raw.macro";

// The Stateful wrapper can be used on form elements as well, by using `monitor="onSubmit"`
// however, your submit button will be deeply nested, and only the wrapped form element will receive stateful props
// in order to display success or error state on your submit button, you can use the context features
// - in the wrapper, you set the provideContext prop
// - deeply nested, you can use Stateful.Consumer to pick up the statefull props and add them to its children

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

async function dummyLogin() {
  await wait(200 + Math.random() * 800);
  if (Math.random() > 0.5) {
    return Promise.reject(new Error("Incorrect value"));
  }
  return Promise.resolve({ id: 1 });
}

export default function FormContextExample() {
  const [error, setError] = React.useState<any>({
    email: "",
    password: "",
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setError({});
      await dummyLogin();
    } catch (error) {
      const random = Math.random();
      setError({
        email: random > 0.5 ? error.message : "",
        password: random < 0.5 ? error.message : "",
      });
      return error;
    }
  };
  return (
    <div className="">
      <div className="container">
        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
          <div className="column is-half">
            <Stateful monitor="onSubmit" provideContext>
              <form className="box" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input type="email" className="input" placeholder="e.g. hkakehas@cisco.com" />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  {error.email && <p className="help is-danger">{error.email}</p>}
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" className="input" placeholder="*********" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                  {error.password && <p className="help is-danger">{error.password}</p>}
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <div className="field">
                  <Stateful.Consumer ignore="busy">
                    <button className="button" type="submit">
                      Login
                    </button>
                  </Stateful.Consumer>
                </div>
              </form>
            </Stateful>
          </div>
        </div>
      </div>
      <ToggleCode content={raw("./form-context-example.tsx")} />
    </div>
  );
}
