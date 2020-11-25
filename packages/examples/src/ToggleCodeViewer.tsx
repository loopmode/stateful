import Codeblock from "@codeblock/react";
import React from "react";

export function ToggleCodeViewer({
  language = "jsx",
  content,
}: {
  language?: string;
  content: string;
}) {
  const [showCode, setShowCode] = React.useState(false);
  return (
    <div className="container">
      {showCode && (
        <>
          <hr />
          <Codeblock language={language as any} children={content} />
        </>
      )}
      <button className="button is-small" onClick={() => setShowCode(!showCode)}>
        {showCode ? "Hide" : "Show"} example code
      </button>
    </div>
  );
}
