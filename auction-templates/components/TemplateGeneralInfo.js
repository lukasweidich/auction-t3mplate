import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

const TemplateDescription = ({ children = <></>, title = "eBay Template" }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {children}
        <hr />
        <Card.Title>EUR 49.95</Card.Title>
        <Button variant="primary">Sofort kaufen</Button>
        <Badge>kostenloser Versand</Badge>
      </Card.Body>
    </Card>
  );
};

export default TemplateDescription;
