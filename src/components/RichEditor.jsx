import React, { useEffect, useState } from "react";

import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

export const RichEditor = ({ product, setConvertedContent }) => {
  // Display old content
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(product.description))
    );
  });

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState, setConvertedContent]);

  return (
    <div className="flex-1">
      <Editor
        editorClassName="border w-full max-w-[350px] lg:max-w-none"
        toolbarClassName="w-full max-w-[350px] lg:max-w-none"
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};
