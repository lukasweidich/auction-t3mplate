import React from "react";
import { useTranslation } from "react-i18next";
import TitleDivider from "../components/misc/TitleDivider";

const ImprintScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider level={1} title={t("footer.imprint")} onlyTitle />
    </>
  );
};

export default ImprintScreen;
