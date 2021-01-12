import { Button, Col, Row, Typography } from "antd";
import React from "react";
import InternalLink from "../misc/InternalLink";

const Hero = () => {
  return (
    <Row
      gutter={[32, 32]}
      justify="space-between"
      align="middle"
      style={{ height: "60vh" }}
    >
      <Col md={24} lg={12}>
        <Typography.Title level={1}>eBay Auktionsvorlagen</Typography.Title>
        <Typography.Title level={4}>
          Kostenlos. Ohne Anmeldung. In Sekundenschnelle.
        </Typography.Title>
        <Typography.Paragraph>
          Mit Auction Template generieren Sie automatisiert Ihre eBay
          persönliche Auktionsvorlage in Sekundenschnelle. Sicher, kostenlos und
          ohne Anmeldung - für immer.
        </Typography.Paragraph>
        <Button type="primary">
          <InternalLink href="/editor">
            <a>Auktionsvorlage generieren</a>
          </InternalLink>
        </Button>
      </Col>
    </Row>
  );
};

export default Hero;
