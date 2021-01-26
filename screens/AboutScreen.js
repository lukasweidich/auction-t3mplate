import { GithubFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
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
      <p>
        <ExternalLink href="https://github.com/lukasweidich/auction-template">
          {t("about:code")}
        </ExternalLink>
      </p>
      <Row gutter={[32, 32]} style={{ marginBottom: 0 }}>
        <PersonRef
          name="Lukas Weidich"
          github="https://github.com/lukasweidich"
          linkedin="https://linkedin.com/in/lukasweidich/"
          avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHo5tM-jgPmjw/profile-displayphoto-shrink_200_200/0/1610065502564?e=1617235200&v=beta&t=W-B9cdxHqHIBPhIiOimOV14kXtM-ZNK0IqQ7SdJyuZk"
          mail="mailto:lukas@quikk.de"
        />
        <PersonRef
          name="Joyce Marvin Rafflenbeul"
          github="https://github.com/jrafflenbeul"
          linkedin="https://linkedin.com/in/jrafflenbeul"
          avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHbsRGpjPZmPQ/profile-displayphoto-shrink_200_200/0/1611319246964?e=1617235200&v=beta&t=5qhuMETycgj516UhrHRDrQc_3wRZ4YU_-KABLh22TSg"
          mail="mailto:joyce@quikk.de"
        />
      </Row>
    </>
  );
};

export default AboutScreen;
