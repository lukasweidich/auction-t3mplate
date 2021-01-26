import React from "react";
import { useTranslation } from "react-i18next";
import CopyAuctionTemplate from "../components/editor/CopyAuctionTemplate";
import ItemInput from "../components/editor/ItemInput";
import TemplateContainer from "../components/editor/TemplateContainer";
import TemplateConfigurator from "../components/editor/TemplateConfigurator";
import TitleDivider from "../components/misc/TitleDivider";
import ContentCustomizer from "../components/editor/ContentCustomizer";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const EditorScreen = () => {
  const { t } = useTranslation();
  const template = useSelector((state) => state.template);
  const { item } = template;
  return (
    <>
      <TitleDivider level={1} title={t("header.editor")} onlyTitle />
      <ItemInput />
      {item ? (
        <>
          <ContentCustomizer />
          <TemplateConfigurator />
          <TemplateContainer />
          <CopyAuctionTemplate />
        </>
      ) : (
        <Empty description={t("editor:empty")} />
      )}
    </>
  );
};

export default EditorScreen;
