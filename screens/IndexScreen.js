import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import InternalLink from "../components/misc/InternalLink";

const IndexScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("index:heading")}</h1>
      <h3>{t("index:subheading")}</h3>
      <Button type="primary">
        <InternalLink href="/editor">
          <a>Create Templates</a>
        </InternalLink>
      </Button>
    </>
  );
};

export default IndexScreen;
