import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

function TextEditor(placeholder) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={{
        placeholder: "Nhập vào đây...",
        buttons: "bold,italic,underline,strikethrough,font,fontsize,paragraph,file,cut,copy,paste,link,undo,redo,find,source",
        theme:"dark"
      }}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
      
    />
  );
}

export default TextEditor;
