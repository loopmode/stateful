import React from "react";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";
import raw from "raw.macro";

// The Stateful wrapper can be used on form elements as well, by using `monitor="onSubmit"`
// however, your submit button will be deeply nested, and only the wrapped form element will receive stateful props
// in order to display success or error state on your submit button, you can use the context features
// - in the wrapper, do not disable the provideContext prop
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
  const handleSubmit = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
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
  }, []);

  return (
    <>
      <div className="container">
        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
          <div className="column is-half">
            <Stateful monitor="onSubmit">
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
                    {error.email && <p className="help is-danger">{error.email}</p>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <Stateful.Consumer>
                      <input type="password" className="input" placeholder="*********" required />
                    </Stateful.Consumer>
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                    {error.password && <p className="help is-danger">{error.password}</p>}
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <Stateful.Consumer>
                      <input type="checkbox" />
                    </Stateful.Consumer>{" "}
                    Remember me
                  </label>
                </div>
                <div className="field">
                  <Stateful.Consumer>
                    <button className="button" type="submit">
                      Login
                    </button>
                  </Stateful.Consumer>
                </div>
              </form>
            </Stateful>
          </div>
        </div>
        <hr />
        <div className="content">
          <h3>Form example</h3>
          <ul>
            <li>Disable inputs and submit button while pending</li>
            <li>Display error/success on submit button</li>
          </ul>
          <p>
            While we wrap a form element and monitor its state, we want to add the resulting props
            not to the form itself, but to some of its children instead.
          </p>
          <p>
            That's why we use Stateful.Consumer around nested inout fields and the submit button
          </p>
        </div>
        <ToggleCodeViewer content={raw("./form-context-example.tsx")} />
      </div>
    </>
  );
}
