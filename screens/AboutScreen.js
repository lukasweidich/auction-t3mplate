import React from "react";
import { useTranslation } from "react-i18next";
import PersonRef from "../components/misc/PersonRef";
import TitleDivider from "../components/misc/TitleDivider";

const AboutScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider level={1} title={t("header.about")} />
      <p>{t("faq:1.a")}</p>
      <h2>{t("about:motivation.title")}</h2>
      <p>{t("about:motivation.body")}</p>
      <h2>{t("about:contact.title")}</h2>
      <p>{t("about:contact.body")}</p>
      <p>{t("about:thanks")}</p>
      <PersonRef
        name="Lukas Weidich"
        github="https://github.com/lukasweidich"
        linkedin="https://linkedin.com/in/lukasweidich/"
      />
      <PersonRef
        name="Joyce M. Rafflenbeul"
        github="https://github.com/jrafflenbeul"
        linkedin="https://linkedin.com/in/jrafflenbeul"
      />
    </>
  );
};

export default AboutScreen;
