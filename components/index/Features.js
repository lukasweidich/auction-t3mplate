import {
  BgColorsOutlined,
  CreditCardOutlined,
  LayoutOutlined,
  LockOutlined,
  SafetyOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import React from "react";
import FeatureCard from "./FeatureCard";
import TitleDivider from "../misc/TitleDivider";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleDivider title={t("index:features.heading")} />
      <Row gutter={[32, 32]}>
        <FeatureCard
          title={t("index:features.1.title")}
          description={t("index:features.1.description")}
        >
          <DownloadOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title={t("index:features.2.title")}
          description={t("index:features.2.description")}
        >
          <CreditCardOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title={t("index:features.3.title")}
          description={t("index:features.3.description")}
        >
          <LockOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title={t("index:features.4.title")}
          description={t("index:features.4.description")}
        >
          <BgColorsOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title={t("index:features.5.title")}
          description={t("index:features.5.description")}
        >
          <LayoutOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title={t("index:features.6.title", {
            year: new Date().getFullYear(),
          })}
          description={t("index:features.6.description")}
        >
          <SafetyOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
      </Row>
    </>
  );
};

export default Features;
