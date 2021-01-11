import React from "react";
import { useTranslation } from "react-i18next";
import ItemInput from "../components/editor/ItemInput";
const EditorScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("editor:heading")}</h1>
      <ItemInput />
    </>
  );
};

export default EditorScreen;
