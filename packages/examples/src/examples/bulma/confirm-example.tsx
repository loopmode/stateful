import React from "react";
import { createPortal } from "react-dom";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";
import raw from "raw.macro";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function ConfirmExample() {
  const handleProceed = async () => {
    console.log("handleProceed");
    await wait(2500);
    console.log("handleProceed done");
  };
  return (
    <>
      <div className="buttons">
        <Stateful confirm="onClick">
          <button className="button" onClick={handleProceed}>
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
          <button className="button" onClick={handleProceed}>
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
          <button className="button" onClick={handleProceed}>
            Proceed C
          </button>
        </Stateful>

        <Stateful confirm="onClick">
          <button className="button" onClick={handleProceed}>
            Proceed D
          </button>
          <Stateful.Confirm>
            <ModalConfirm title="Confirmation as child">
              <p>Do you really want to proceed?</p>
            </ModalConfirm>
          </Stateful.Confirm>
        </Stateful>
      </div>

      <ToggleCodeViewer content={raw("./confirm-example.tsx")} />
    </>
  );
}

type ModalConfirmProps = {
  title: string;
  // onCancel and onConfirm are supported out of the box
  onCancel?: () => void;
  onConfirm?: () => void;
};
function ModalConfirm(props: React.PropsWithChildren<ModalConfirmProps>) {
  return createPortal(
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
    </div>,
    document.body
  );
}
