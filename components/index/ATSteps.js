import React from "react";
import { Steps } from "antd";

import { Row, Col } from "react-grid-system";

import {
  CopyOutlined,
  HighlightOutlined,
  TrophyOutlined,
  TagOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import ExternalLink from "../misc/ExternalLink";
import TitleDivider from "../misc/TitleDivider";

const { Step } = Steps;
import { useTranslation } from "react-i18next";
const ATSteps = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleDivider title={t("index:steps.heading")} />
      <Row>
        <Col md={12} lg={6}>
          <Steps direction="vertical" current={99}>
            <Step
              title={t("index:steps.1.title")}
              description={t("index:steps.1.description")}
              icon={<TagOutlined />}
            />
            <Step
              title={t("index:steps.2.title")}
              description={t("index:steps.2.description")}
              icon={<OrderedListOutlined />}
            />
            <Step
              title={t("index:steps.3.title")}
              description={t("index:steps.3.description")}
              icon={<HighlightOutlined />}
            />
            <Step
              title={t("index:steps.4.title")}
              description={t("index:steps.4.description")}
              icon={<CopyOutlined />}
            />
            <Step
              title={t("index:steps.5.title")}
              description={t("index:steps.5.description")}
              icon={<TrophyOutlined />}
            />
          </Steps>
          <p style={{ fontSize: "12px" }}>
            ¹ KPMG, 2020.{" "}
            <ExternalLink href="https://hub.kpmg.de/studie-online-shopping">
              {t("index:steps.source.name")}
            </ExternalLink>
            , {t("index:steps.source.page")} 8.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ATSteps;
