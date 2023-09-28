"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type {
  UploadBeforeHandler,
  UploadBeforeReturn,
} from "suneditor-react/dist/types/upload";

import "suneditor/dist/css/suneditor.min.css";
import "./style.scss";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Editor = () => {
  const [content, setContent] = useState("");

  const handleImageUploadBefore = (
    files: File[],
    _: object,
    uploadHandler: UploadBeforeHandler
  ): UploadBeforeReturn => {
    if (files.length === 0) {
      // Handle the case where there are no files to upload
      return undefined;
    }
    const fileToUpload = files[0];
    const formData = new FormData();
    if (fileToUpload) {
      formData.append("file", fileToUpload, fileToUpload.name); // Specify name and filename
    }
    try {
      const response = {
        status: 200,
      };
      if (response.status === 200 || response.status === 201) {
        uploadHandler({
          result: [
            {
              url: "",
              name: "",
              size: 100,
            },
          ],
        });
      }
    } catch (error) {
      uploadHandler({
        errorMessage: "Kích thước ảnh tối đa 1MB",
        result: [],
      });
    }
    return undefined;
  };

  return (
    <SunEditor
      name="content"
      defaultValue={content}
      onChange={(text) => setContent(text)}
      setOptions={{
        height: "200",
        buttonList: [
          [
            "formatBlock",
            "font",
            "fontSize",
            "fontColor",
            "align",
            "paragraphStyle",
            "blockquote",
          ],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["removeFormat"],
          ["outdent", "indent"],
          ["table", "list"],
          ["link", "image", "video"],
          ["preview", "print"],
          ["undo", "redo"],
        ],
      }}
      onImageUploadBefore={handleImageUploadBefore}
    />
  );
};

export default Editor;
