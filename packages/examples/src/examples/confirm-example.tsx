import React from "react";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../ToggleCodeViewer";
import raw from "raw.macro";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function ConfirmExample() {
  const handleDelete = async () => {
    await wait(2500);
    console.trace("done");
  };
  return (
    <div className="ConfirmExample">
      <div className="buttons">
        <Stateful confirm="onClick">
          <button className="button" onClick={handleDelete}>
            Proceed A
          </button>
          <Stateful.Confirm>
            {({ onConfirm, onCancel }) => {
              return (
                <ModalConfirm
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  title="Confirmation as render function"
                >
                  <p>Do you really want to proceed?</p>
                </ModalConfirm>
              );
            }}
          </Stateful.Confirm>
        </Stateful>

        <Stateful confirm="onClick">
          <button className="button" onClick={handleDelete}>
            Proceed B
          </button>
          <Stateful.Confirm>
            <ModalConfirm title="Confirmation as child">
              <p>Do you really want to proceed?</p>
            </ModalConfirm>
          </Stateful.Confirm>
        </Stateful>

        <Stateful
          confirm="onClick"
          confirmClasses="is-warning"
          confirmProps={() => ({
            children: "Are you sure?",
          })}
        >
          <button className="button" onClick={handleDelete}>
            Proceed C
          </button>
        </Stateful>
      </div>

      <ToggleCodeViewer content={raw("./confirm-example.tsx")} />
    </div>
  );
}

type ModalConfirmProps = {
  title: string;
  // onCancel and onConfirm are supported out of the box
  onCancel?: () => void;
  onConfirm?: () => void;
};
function ModalConfirm(props: React.PropsWithChildren<ModalConfirmProps>) {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">{props.title}</div>
          <button className="delete" aria-label="close" onClick={props.onCancel}></button>
        </header>
        <section className="modal-card-body">{props.children}</section>
        <footer className="modal-card-foot">
          <button className="button" onClick={props.onCancel}>
            Cancel
          </button>
          <span style={{ flex: 1 }} />
          <button className="button is-info" onClick={props.onConfirm}>
            Proceed
          </button>
        </footer>
      </div>
    </div>
  );
}
