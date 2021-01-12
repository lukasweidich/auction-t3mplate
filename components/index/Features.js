import {
  BgColorsOutlined,
  CreditCardOutlined,
  LayoutOutlined,
  LockOutlined,
  SafetyOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Divider, Row, Typography } from "antd";
import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <>
      <Divider orientation="left">
        <Typography.Title level={2}>Ihre Vorteile</Typography.Title>
      </Divider>
      <Row gutter={[32, 32]}>
        <FeatureCard
          title="Automatisiert"
          description="Auction Template ist mit eBay verbunden und kann Ihr Inserat direkt einladen - keine Doppelpflege notwendig."
        >
          <UploadOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title="Kostenlos"
          description="Auction Template ist ein Open-Source-Projekt und wird daher immer in einer kostenlosen Version verfügbar sein."
        >
          <CreditCardOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title="Sicher"
          description="Auction Template benötigt keine Zugangsdaten - weder für Ihr eBay Konto noch für unsere Software."
        >
          <LockOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title="Innovativer Editor"
          description="Auction Template benötigt keine Vorkenntnisse, um Auktionsvorlagen zu konfigurieren."
        >
          <BgColorsOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title="Modernes Design"
          description="Auction Template vereint stylische Auktionsvorlagen mit Optimierung für mobile Endgeräte."
        >
          <LayoutOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
        <FeatureCard
          title={`eBay Konform ${new Date().getFullYear()}`}
          description="Auction Template ist Teil des eBay Developers Program und unsere Templates sind eBay Richtlinien konform."
        >
          <SafetyOutlined style={{ fontSize: "24px" }} />
        </FeatureCard>
      </Row>
    </>
  );
};

export default Features;
