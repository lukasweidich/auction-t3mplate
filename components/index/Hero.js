import { Button, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import InternalLink from "../misc/InternalLink";

import { Row, Col } from "react-grid-system";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Row style={{ alignItems: "center" }}>
      <Col md={12} lg={6}>
        <Typography.Title level={1}>{t("index:hero.heading")}</Typography.Title>
        <Typography.Title level={4}>
          {t("index:hero.subheading")}
        </Typography.Title>
        <Typography.Paragraph>{t("index:hero.paragraph")}</Typography.Paragraph>
        <Button type="primary">
          <InternalLink href="/editor">
            <a>{t("index:hero.cta")}</a>
          </InternalLink>
        </Button>
      </Col>
    </Row>
  );
};

export default Hero;
