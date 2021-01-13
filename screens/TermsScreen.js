import React from "react";
import { useTranslation } from "react-i18next";
import TitleDivider from "../components/misc/TitleDivider";

const TermsScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider level={1} title={t("footer.terms")} />
    </>
  );
};

export default TermsScreen;
