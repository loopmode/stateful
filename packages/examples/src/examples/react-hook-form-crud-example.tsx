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
      <ToggleCodeViewer content={raw("./react-hook-form-crud-example.tsx")} />
    </div>
  );
}

const currentPath = "/react-hook-form-crud";

// this hook basically mocks server+fetch mechanisms
export function useData() {
  const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
  const uuid = () => Math.random().toString(36).slice(-6);

  const [users, setUsers] = React.useState<User[]>([
    { id: "pfuo8l", name: "John", email: "john@domain.com" },
    { id: "mz2q6k", name: "Jane", email: "jane@domain.com" },
  ]);

  const deleteUser = React.useCallback(async (id) => {
    await wait(500 + Math.random() * 500);
    if (Math.random() > 0.5) {
      throw new Error("failed for some reasons");
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

function UsersCrudPage() {
  const history = useHistory();
  const { users, deleteUser, createUser, updateUser } = useData();

  const handleCreateUser = React.useCallback(
    async (data: User) => {
      try {
        await createUser(data);
        history.push(`${currentPath}/list`);
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
        history.push(`${currentPath}/list`);
      } catch (error) {
        return error;
      }
    },
    [updateUser, history]
  );

  return (
    <div className="CrudExample">
      <nav className="container is-flex">
        <Route path={`${currentPath}/(create|edit)`}>
          <Link className="button" to={`${currentPath}/list`} children="Back to list" />
        </Route>
        <span className="is-flex-1" />
        <Route path={`${currentPath}/list`}>
          <Link className="button" to={`${currentPath}/create`} children="Create new user" />
        </Route>
      </nav>

      <hr />

      <Switch>
        <Redirect exact from={`${currentPath}/`} to={`${currentPath}/list`} />
        <Route path={`${currentPath}/list`}>
          <UsersList users={users} onDeleteUser={(id) => deleteUser(id)} />
        </Route>

        <Route
          path={`${currentPath}/create`}
          render={() => {
            return <UserForm onSubmit={(data) => handleCreateUser(data)} />;
          }}
        ></Route>

        <Route
          path={`${currentPath}/edit/:id`}
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
      {/*
       * Due to how react-hook-form works, we need to use a render function here.
       *
       * In react-hook-form, while validation errors will prevent onSubmit, there won't be any kind of error
       * that Stateful could detect in order to indicate the failure.
       * However, you can provide a second callback to the handleSubmit function,
       * and it will be invoked with validation errors.
       *
       * Also, you can use a render function for Stateful and access its internal handlers.
       *
       * Effectively, you can pass the onReject handler as validation error handler.
       */}
      {({ handlers }) => (
        <form onSubmit={handleSubmit(props.onSubmit, handlers.onReject)}>
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
                  minLength: { value: 3, message: "min length is 3" },
                  maxLength: { value: 40, message: "max length is 40" },
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
                  pattern: { value: /\S+@\S+\.\S+/, message: "Not a valid email" },
                })}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              {errors.email && <p className="help is-danger">{errors.email.message}</p>}
            </div>
          </div>

          <div className="field is-flex">
            <Stateful>
              <button type="button" className="button" onClick={() => reset(props.initialUser)}>
                Reset
              </button>
            </Stateful>

            <span className="is-flex-1" />
            <Stateful.Consumer>
              <button className="button" type="submit">
                {props.initialUser ? "Save" : "Create new"} User
              </button>
            </Stateful.Consumer>
          </div>
        </form>
      )}
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
                    <Link className="button" to={`/react-hook-form-crud/edit/${user.id}`}>
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
