import React from "react";
import cx from "classnames";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../ToggleCodeViewer";
import raw from "raw.macro";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export type User = {
  id: string;
  name: string;
  email: string;
};

export default function CrudExample() {
  return (
    <div className="CrudExample">
      <UsersCrudPage />
      <ToggleCodeViewer content={raw("./crud-example.tsx")} />
    </div>
  );
}

function UsersCrudPage() {
  const history = useHistory();
  const { users, deleteUser, createUser, updateUser } = useUsersApi();

  // we return any errors so that Stateful detects the failure

  const handleCreateUser = React.useCallback(
    async (data: User) => {
      try {
        await createUser(data);
        history.push("/crud/list");
      } catch (error) {
        return error;
      }
    },
    [createUser, history]
  );

  const handleUpdateUser = React.useCallback(
    async (data: User) => {
      try {
        await updateUser(data.id, data);
        history.push("/crud/list");
      } catch (error) {
        return error;
      }
    },
    [updateUser, history]
  );

  return (
    <div className="CrudExample">
      <nav className="container is-flex">
        <Route path="/crud/(create|edit)">
          <Link className="button" to="/crud/list" children="Back to list" />
        </Route>
        <span className="is-flex-1" />
        <Route path={"/crud/list"}>
          <Link className="button" to="/crud/create" children="Create new user" />
        </Route>
      </nav>

      <hr />

      <Redirect from="/crud" to="/crud/list" />

      <Switch>
        <Route path="/crud/list">
          <UsersList users={users} onDeleteUser={(id) => deleteUser(id)} />
        </Route>

        <Route
          path="/crud/create"
          render={() => {
            return <UserForm onSubmit={(data) => handleCreateUser(data)} />;
          }}
        ></Route>

        <Route
          path="/crud/edit/:id"
          render={(props) => {
            const user = users.find((user) => user.id === props.match.params.id);
            return <UserForm onSubmit={(data) => handleUpdateUser(data)} initialUser={user} />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}

function UserForm(props: {
  initialUser?: User;
  userId?: string;
  onSubmit: (data: User) => Promise<any>;
}) {
  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues: props.initialUser,
  });

  return (
    <Stateful monitor="onSubmit" provideContext>
      <form
        onSubmit={handleSubmit(
          props.onSubmit,
          (errors) => {
            // react-hook-form invokes this callback with validation errors, e.g. {email: {message: "invalid email", ...}, password: {message: "required", ...}, ...}
            // the internal submit function of react-hook-form doesn't return anything in this case, and thus Stateful would react with a green/success state
            // So we throw an actual Error to make Stateful aware of the failure, and the submit button turns red
            throw Error(Object.values(errors)[0]?.message)
          }
        )}
      >
        <input type="hidden" name="id" ref={register} />
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input
              type="text"
              className={cx("input", { "is-danger": errors.name })}
              name="name"
              ref={register({
                required: "required",
                minLength: {
                  value: 3,
                  message: "min length is 3",
                },
                maxLength: {
                  value: 40,
                  message: "max length is 40",
                },
              })}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            {errors.name && <p className="help is-danger">{errors.name.message}</p>}
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              type="text"
              className={cx("input", { "is-danger": errors.email })}
              name="email"
              ref={register({
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            {errors.email && <p className="help is-danger">{errors.email.message}</p>}
          </div>
        </div>

        <div className="field is-flex">
          {/*
            The "reset" button triggers a local, synchronous callback.
            We use a Stateful wrapper around it so that the button turns green after clicking.
            In order for that to work, we make the onClick callback an async function, so that it returns a promise.
            */}
          <Stateful>
            <button type="button" className="button" onClick={() => reset(props.initialUser)}>
              Reset
            </button>
          </Stateful>

          <span className="is-flex-1" />

          {/* 
            The submit button doesn't have its own onClick callback whatsoever, it only forces the parent form to submit.
            That's why we use Stateful.Consumer instead of a Stateful wrapper around it.
            It connects to the parent Stateful wrapper context and applies its status to the wrapped child.
            */}
          <Stateful.Consumer>
            <button className="button" type="submit">
              {props.initialUser ? "Save" : "Create new"} User
            </button>
          </Stateful.Consumer>
        </div>
      </form>
    </Stateful>
  );
}

function UsersList(props: { users: User[]; onDeleteUser: (id: string) => Promise<any> }) {
  return (
    <table className="table is-hoverable">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th className="has-text-right">actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="has-text-right">
                <div className="buttons is-inline-block">
                  <Stateful>
                    <Link className="button" to={`/crud/edit/${user.id}`}>
                      Edit
                    </Link>
                  </Stateful>
                  <Stateful>
                    <button className="button" onClick={() => props.onDeleteUser(user.id)}>
                      Delete
                    </button>
                  </Stateful>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// this hook basically mocks an actual server+fetch mechanism
export function useUsersApi() {
  const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
  const uuid = () => Math.random().toString(36).slice(-6);

  const [users, setUsers] = React.useState<User[]>([
    { id: "pfuo8l", name: "John", email: "john@domain.com" },
    { id: "mz2q6k", name: "Jane", email: "jane@domain.com" },
  ]);

  const deleteUser = React.useCallback(async (id) => {
    // you would do your fetch to delete the user and update the local users
    await wait(500 + Math.random() * 500);
    if (Math.random() > 0.5) {
      return new Error("failed");
    }
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const createUser = React.useCallback(
    async (data: Omit<User, "id">) => {
      await wait(500 + Math.random() * 500);
      if (users.find((user) => user.email === data.email)) {
        throw new Error("Email already exists");
      }
      const newUser: User = { ...data, id: uuid() };
      setUsers((current) => [...current, newUser]);
    },
    [users]
  );

  const updateUser = React.useCallback(
    async (id: string, data: Partial<User>) => {
      console.log({ id, data });
      await wait(500 + Math.random() * 500);
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        throw new Error("User not found");
      }

      const next = [...users];
      next[index] = {
        ...next[index],
        ...data,
      };

      setUsers(next);
    },
    [users]
  );

  return {
    users,
    deleteUser,
    createUser,
    updateUser,
  };
}
