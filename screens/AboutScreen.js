import { GithubFilled } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import ExternalLink from "../components/misc/ExternalLink";
import PersonRef from "../components/misc/PersonRef";
import TitleDivider from "../components/misc/TitleDivider";

const AboutScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider level={1} title={t("header.about")} onlyTitle />
      <p>{t("faq:1.a")}</p>
      <h2>{t("about:motivation.title")}</h2>
      <p>{t("about:motivation.body")}</p>
      <h2>{t("about:contact.title")}</h2>
      <p>{t("about:contact.body")}</p>
      <h2>{t("about:roadmap.title")}</h2>
      <p>{t("about:roadmap.body")}</p>
      <h2> {t("about:donate.title")}</h2>
      <p>
        <ExternalLink href={t("about:donate.link")}>
          {t("about:donate.text")}
        </ExternalLink>
      </p>
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
      <ExternalLink
        href="https://github.com/lukasweidich/auction-template"
        noIcon
      >
        {t("about:code")} <GithubFilled />
      </ExternalLink>
    </>
  );
};

export default AboutScreen;
