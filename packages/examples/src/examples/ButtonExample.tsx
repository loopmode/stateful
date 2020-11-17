import React from "react"; 
import { Stateful } from "./Stateful";

const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function ButtonExample() {
  const handleSuccessClick = async () => {
    await wait(Math.random() * 2500);
  };
  const handleErrorClick = async () => {
    await wait(Math.random() * 2500);
    return new Error("Nope");
  };
  return (
    <div className="">
      <div className="buttons">
        <Stateful>
          <button className="button" onClick={handleSuccessClick}>
            Success
          </button>
        </Stateful>
        <Stateful>
          <button className="button" onClick={handleErrorClick}>
            Error
          </button>
        </Stateful>
      </div>
    </div>
  );
}
