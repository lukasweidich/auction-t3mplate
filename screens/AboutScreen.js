import React from "react";
import { useTranslation } from "react-i18next";

const AboutScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("about:heading")}</h1>
      <p>{t("faq:1.a")}</p>
      <h2>{t("about:motivation.title")}</h2>
      <p>{t("about:motivation.body")}</p>
      <h2>{t("about:numbers.title")}</h2>
      <p>{t("about:numbers.body")}</p>
      <h2>{t("about:contact.title")}</h2>
      <p>{t("about:contact.body")}</p>
    </>
  );
};

export default AboutScreen;
