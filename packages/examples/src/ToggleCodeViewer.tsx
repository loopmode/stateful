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
    <>
      <hr />
      {/* eslint-disable-next-line */}
      <a href="#" onClick={() => setShowCode(!showCode)}>{showCode ? "Hide" : "Show"} code</a>
      {showCode && <Codeblock language={language as any} children={content} />}
    </>
  );
}
