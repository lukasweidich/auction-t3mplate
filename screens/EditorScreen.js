import React from "react";
import { useTranslation } from "react-i18next";
import ItemInput from "../components/editor/ItemInput";
import TitleDivider from "../components/misc/TitleDivider";

const EditorScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider level={1} title={t("header.editor")} />
      <ItemInput />
    </>
  );
};

export default EditorScreen;
