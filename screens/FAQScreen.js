import { Collapse } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const FAQScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("faq:heading")}</h1>
      <p>{t("faq:subheading")}</p>
      <Collapse accordion>
        {[...Array(11)]
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
