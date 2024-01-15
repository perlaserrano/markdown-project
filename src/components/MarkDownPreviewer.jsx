import React, { useState } from "react";
import "../css/style.css";
import ReactMarkdown from "react-markdown";
import initialMarkdown from "../helpers/initialMarkdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <div className="editorWrap">
        <div className="toolbar">
          <FontAwesomeIcon icon={faFreeCodeCamp} title="no-stack-dub-sack" />
          <div className="toolbarTitle">Editor</div>
        </div>
        <textarea id="editor" className="editorTextarea" value={markdown} onChange={handleMarkdownChange} />
      </div>
      <div id="preview" className="previewWrap">
        <div className="toolbar">
          <FontAwesomeIcon icon={faFreeCodeCamp} title="no-stack-dub-sack" />
          <div className="toolbarTitle">Previewer</div>
        </div>
        <div className="preview-two">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default MarkdownPreviewer;
