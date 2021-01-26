import React from "react";
import TemplateGeneralInfo from "../components/TemplateGeneralInfo";
import TemplateHeader from "../components/TemplateHeader";
import ImagePreview from "../components/TemplateImagePreview";
import Head from "next/head";
import { Card, Col, ListGroup, Row, Tabs, Tab } from "react-bootstrap";
import { defaultTheme } from "../../src/utils/constants/AtConstants";

const Solstorm = ({ item }) => {
  return (
    <div id="at">
      <TemplateHeader sellerName={item?.Seller.UserId} />
      <Row>
        <Col md={6} style={{ padding: "1rem" }}>
          <ImagePreview images={item?.PictureURL} />
        </Col>
        <Col md={6} style={{ padding: "1rem" }}>
          <TemplateGeneralInfo title={item?.Title}>
            <Card.Text>{item.Description}</Card.Text>
          </TemplateGeneralInfo>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col style={{ padding: "1rem" }}>
          <Tabs defaultActiveKey="specifics" id="uncontrolled-tab-example">
            <Tab eventKey="specifics" title="Artikelmerkmale">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="payment" title="Versand & Zahlungen">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="info" title="Weitere Informationen">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Solstorm;
