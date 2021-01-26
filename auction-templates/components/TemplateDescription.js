import React from "react";

const TemplateDescription = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className="image-slider-container">
            <ImageSlider />
          </div>
        </Col>
        <Col md={6}>
          <div className="product-info-container">
            <Description title="eBay Template">
              
            </Description>
          </div>
        </Col>
      </Row>
      <hr />
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
          {" "}
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="info" title="Weitere Informationen">
          {" "}
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TemplateDescription;
