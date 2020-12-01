import React from "react";
import { createPortal } from "react-dom";
import { Stateful } from "@loopmode/stateful";
import { ToggleCodeViewer } from "../../ToggleCodeViewer";
import raw from "raw.macro";
import { Status } from "@loopmode/stateful/lib/Status";

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
            Confirm (exit=started)
          </button>
          <Stateful.Confirm>
            {({ onConfirm, onCancel }) => {
              return (
                <ModalConfirm
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  title={`Confirm using exit="started" (default)`}
                >
                  <p>This confirmation will disappear when the original callback has started.</p>
                  <br />
                  <p>
                    That way, the pending and busy states are handled by the original button,
                    outside the confirmation window itself.
                  </p>
                  <br />
                  <br />
                  <p>Do you want to proceed?</p>
                </ModalConfirm>
              );
            }}
          </Stateful.Confirm>
        </Stateful>

        <Stateful confirm="onClick">
          <button className="button" onClick={handleProceed}>
            Confirm (exit=finished)
          </button>
          <Stateful.Confirm exit="finished">
            <ModalConfirm title={`Confirm using exit="finished"`}>
              <p>This confirmation will disappear when the original callback has finished.</p>
              <br />
              <p>
                That way, the pending and busy states need to be handled inside the confirmation
                window itself.
              </p>
              <p>The success and error states are still handled by the original button.</p>
              <br />
              <p>Do you want to proceed?</p>
            </ModalConfirm>
          </Stateful.Confirm>
        </Stateful>

        <Stateful confirm="onClick">
          <button className="button" onClick={handleProceed}>
            Confirm (exit=idle)
          </button>
          <Stateful.Confirm exit="idle">
            <ModalConfirm title={`Confirm using exit="idle"`}>
              <p>
                This confirmation will disappear once the Stateful state switches back to idle.
              </p>
              <br />
              <p>
                That way, all states including error and success are handled inside the confirmation.
              </p>
              <p>
                Note that you would take extra steps to make sure the buttons are not clickable during error and success states.
              </p>
              <br />
              <p>Do you want to proceed?</p>
            </ModalConfirm>
          </Stateful.Confirm>
        </Stateful>

        <Stateful confirm="onClick" confirmClasses="is-warning">
          {({ status, handlers }) => {
            if (status === Status.CONFIRM)
              return (
                <div className="field has-addons">
                  <div className="control">
                    <button className="button" onClick={handlers.onConfirmCancel}>
                      Cancel
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-primary" onClick={handlers.onConfirmApprove}>
                      Confirm
                    </button>
                  </div>
                </div>
              );
            return (
              <button className="button" onClick={handleProceed}>
                Confirm inline
              </button>
            );
          }}
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
