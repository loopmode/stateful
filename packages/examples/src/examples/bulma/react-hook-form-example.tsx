import { Stateful } from "@loopmode/stateful";
import * as React from "react";
import { useForm } from "react-hook-form";
import cx from "classnames";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const requiredSettings = {
  value: true,
  message: "This field is required",
};

const emailSettings = {
  value: /\S+@\S+\.\S+/,
  message: "Entered value does not match email format",
};

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = React.useCallback(async (data: any) => {
    console.log(">> Submit form!");
    await wait(Math.random() * 1000);
    if (Math.random() > 0.5) {
      console.log(">> Server error!");
      throw Error("Oops! Fail!");
    }
    console.log(">> Form submitted!");
  }, []);

  return (
    <Stateful provideContext monitor="onSubmit">
      {({ handlers }) => (
        <form onSubmit={handleSubmit(onSubmit, handlers.onReject)} onInvalid={handlers.onReject}>
          <div className="field">
            <label className="label">First name</label>
            <div className="control">
              <input
                className={cx("input", { "is-danger": errors.firstName })}
                aria-invalid={Boolean(errors.firstName)}
                {...register("firstName", { required: requiredSettings })}
              />
              {errors.firstName && <p className="help is-danger">{errors.firstName.message}</p>}
            </div>
          </div>

          <div className="field">
            <label className="label">Last name</label>
            <div className="control">
              <input
                className={cx("input", { "is-danger": errors.lastName })}
                aria-invalid={Boolean(errors.lastName)}
                {...register("lastName", { required: requiredSettings })}
              />
              {errors.lastName && <p className="help is-danger">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={cx("input", { "is-danger": errors.email })}
                aria-invalid={Boolean(errors.email)}
                type="email"
                {...register("email", {
                  required: requiredSettings,
                  pattern: emailSettings,
                })}
              />
              {errors.email && <p className="help is-danger">{errors.email.message}</p>}
            </div>
          </div>

          <Stateful.Consumer>
            <button className="button" type="submit">
              Submit
            </button>
          </Stateful.Consumer>
        </form>
      )}
    </Stateful>
  );
}
