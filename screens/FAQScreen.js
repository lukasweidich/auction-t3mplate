import { Collapse } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import TitleDivider from "../components/misc/TitleDivider";

const { Panel } = Collapse;

const FAQScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider level={1} title={t("header.faq")} onlyTitle />
      <p>{t("faq:subheading")}</p>
      <Collapse accordion>
        {[...Array(14)]
          .map((el, i) => i + 1)
          .map((key) => (
            <Panel header={t(`faq:${key}.q`)} key={key}>
              <p>{t(`faq:${key}.a`)}</p>
            </Panel>
          ))}
      </Collapse>
    </>
  );
};

export default FAQScreen;
