import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import EditorScreen from "../screens/EditorScreen";

const editor = () => {
  return (
    <>
      <TitleAndDesc title="editor:title" desc="editor:desc" i18nKey />
      <EditorScreen />
    </>
  );
};

export default editor;
