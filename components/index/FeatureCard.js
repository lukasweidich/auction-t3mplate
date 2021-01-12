import { Card, Col } from "antd";
import React from "react";

const FeatureCard = ({ children, title, description }) => {
  return (
    <Col sm={24} md={12} lg={8}>
      <Card>
        <Card.Meta {...{ avatar: children, title, description }} />
      </Card>
    </Col>
  );
};

export default FeatureCard;
