import React from "react";
import { createPortal } from "react-dom";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";
import raw from "raw.macro";
import { Status } from "@loopmode/stateful/lib/Status";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export default function ConfirmExample() {
  const handleProceed = async () => {
    await wait(Math.random() * 2000);
    if (Math.random() > 0.5) {
      return Promise.reject(new Error("foo"));
    }
  };
  return (
    <>
      <h3>Confirmation examples</h3>
      <p>
        A bunch of different confirm implementations using <code>Stateful</code>.
      </p>

      <div className="buttons">
        {/*
          In this example, we just wrap a compatible ModalConfirm dialog
          that supports onCancel and onConfirm props out-of-the-box.
          Also, we do not specify any custom exit mode, hiding the Stateful.Confirm when the callback is invoked.
        */}
        <Stateful confirm>
          <button className="button" onClick={handleProceed}>
            Confirm (exit=started)
          </button>
          <Stateful.Confirm>
            <ModalConfirm title="Default confirm">
              <p>
                This dialog will disappear immediatly when the user confirms.
                <br />
                All other states are handled by the original button.
              </p>
              <br />
              <p>Do you want to proceed?</p>
            </ModalConfirm>
          </Stateful.Confirm>
        </Stateful>

        {/*
          In this example, we again wrap a dialog, however, we manually assign
          the names of the dialog props for confirming or aborting via "confirm" and "cancel" props. 
          Also, we use exit mode "finished", hiding the Stateful.Confirm after the callback has finished.
        */}
        <Stateful confirm="onClick">
          <button className="button" onClick={handleProceed}>
            Confirm (exit=finished)
          </button>
          <Stateful.Confirm confirm="onConfirm" cancel="onCancel" exit="finished">
            <ModalConfirm title="Confirm using exit=finished">
              <p>This dialog will stay until the original callback has finished.</p>
              <br />
              <p>
                The pending and busy states are handled inside this dialog itself.
                <br />
                However, the success and error states are still handled by the original button.
              </p>
              <br />
              <p>Do you want to proceed?</p>
            </ModalConfirm>
          </Stateful.Confirm>
        </Stateful>

        {/*
          In this example, we use a render function for confirmation. 

          Also, we use exit="idle". However, this time we declare it
          on the Stateful wrapper, where it's called "confirmExit" instead of just "exit"
        */}
        <Stateful confirm="onClick" confirmExit="idle">
          <button className="button" onClick={handleProceed}>
            Confirm (exit=idle)
          </button>
          <Stateful.Confirm>
            {({ onCancel, onConfirm }) => {
              return (
                <ModalConfirm
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  title="Confirm using exit=idle"
                >
                  <p>
                    This confirmation will disappear once the Stateful state switches back to idle.
                  </p>
                  <br />
                  <p>
                    That way, all states including error and success are handled inside the
                    confirmation.
                  </p>
                  <p>
                    Note that you would take extra steps to make sure the buttons are not clickable
                    during error and success states.
                  </p>
                  <br />
                  <p>Do you want to proceed?</p>
                </ModalConfirm>
              );
            }}
          </Stateful.Confirm>
        </Stateful>

        {/*
          In this example, we build an inline confirmation without using a modal dialog at all.
          We use a render function to have completely different components depending on the status.
        */}
        <Stateful confirm>
          {({ status, handlers }) => {
            if (status !== Status.CONFIRM) {
              // the regular button
              return (
                <button className="button" onClick={handleProceed}>
                  Confirm inline
                </button>
              );
            }
            // confirm state with different components
            return (
              <div className="field has-addons">
                <div className="control">
                  <button className="button" onClick={handlers.onConfirmCancel}>
                    <span className="icon is-small">
                      <i className="fas fa-times"></i>
                    </span>
                  </button>
                </div>
                <div className="control">
                  <button className="button" style={{ pointerEvents: "none" }}>
                    Sure?
                  </button>
                </div>
                <div className="control">
                  <button className="button is-primary" onClick={handlers.onConfirmApprove}>
                    <span className="icon is-small">
                      <i className="fas fa-check"></i>
                    </span>
                  </button>
                </div>
              </div>
            );
          }}
        </Stateful>
      </div>

      <ToggleCodeViewer content={raw("./confirm-example.tsx")} />
    </>
  );
}

type ModalConfirmProps = {
  title?: string;
  // onCancel and onConfirm are supported out of the box
  onCancel?: () => void;
  onConfirm?: () => void;
};
function ModalConfirm(props: React.PropsWithChildren<ModalConfirmProps>) {
  return createPortal(
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        {props.title && (
          <header className="modal-card-head">
            <div className="modal-card-title">{props.title}</div>
            <button className="delete" aria-label="close" onClick={props.onCancel}></button>
          </header>
        )}
        <section className="modal-card-body">{props.children}</section>
        <footer className="modal-card-foot">
          <button className="button" onClick={props.onCancel}>
            Cancel
          </button>
          <span style={{ flex: 1 }} />
          <Stateful.Consumer>
            <button className="button is-info" onClick={props.onConfirm}>
              Proceed
            </button>
          </Stateful.Consumer>
        </footer>
      </div>
    </div>,
    document.body
  );
}
