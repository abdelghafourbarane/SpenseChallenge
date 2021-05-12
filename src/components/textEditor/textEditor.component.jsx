import React from "react";

import TextEditorImage from "../../Assets/text_editor_image.png";

import "./textEditor.styles.scss";

const TextEditor = () => (
  <div className="editor-container">
    <div className="text-editor-image">
      <img src={TextEditorImage} />
    </div>
    <div className="text-editor-text">
      <h1>A text editor like no other.</h1>
      <p>
        Our editor pulls you into focus mode with it's simplistic design and
        usability so you can put you best writing.
      </p>
      <span>
        <a>Text Editor Live Demo -› </a>
      </span>
    </div>
  </div>
);

export default TextEditor;
