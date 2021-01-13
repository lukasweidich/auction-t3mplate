import React from "react";
import { Divider, Steps, Typography } from "antd";

import { Row, Col } from "react-grid-system";

import {
  CopyOutlined,
  HighlightOutlined,
  TrophyOutlined,
  TagOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import ExternalLink from "../misc/ExternalLink";

const { Step } = Steps;

const ATSteps = () => {
  return (
    <>
      <Divider orientation="left">
        <Typography.Title level={2}>5 Schritte</Typography.Title>
      </Divider>
      <Row>
        <Col md={12} lg={6}>
          <Steps direction="vertical" current={99}>
            <Step
              title="Artikel einladen"
              description="Finden Sie Ihren Artikel durch die eBay Artikelnummer oder wählen Sie ihn direkt aus Ihrem Shop aus. Auction Template kümmert sich um den Rest und lädt alle Informationen ein."
              icon={<TagOutlined />}
            />
            <Step
              title="Optional: Inhalte bearbeiten"
              description="Möchten Sie Inhalte hinzufügen, löschen oder bearbeiten? Kein Problem! Sollten Sie etwas an Ihrem Produkt verändern wollen, können sie dies natürlich in unserem Editor tun."
              icon={<OrderedListOutlined />}
            />
            <Step
              title="Auktionsvorlage anpassen"
              description="Ihrer Kreativität sind keine Grenzen gesetzt. Passen Sie die aussagekräftige Auktionsvorlage nach Ihren Vorlieben an und steigern Sie den Wiedererkennungswert Ihres eBay Shops."
              icon={<HighlightOutlined />}
            />
            <Step
              title="Produktbeschreibung kopieren"
              description="Fast geschafft! Nun müssen Sie den vorliegenden HTML Code kopieren und der Produktbeschreibung Ihres eBay Inserats hinzufügen. Fragen dazu beantworten wir in unserem FAQ."
              icon={<CopyOutlined />}
            />
            <Step
              title="Zurücklehnen"
              description="Im Kaufprozess des Online-Shoppings sind aussagekräftige Produktbeschreibungen und ansprechende Produktbilder elementar für eine Kaufentscheidung potentieller Kunden. ¹"
              icon={<TrophyOutlined />}
            />
          </Steps>
          <p style={{ fontSize: "12px" }}>
            ¹ KPMG, 2020.{" "}
            <ExternalLink href="https://hub.kpmg.de/studie-online-shopping">
              Online-Shopping: Analyse zu Trends und Potenzialen im E-Commerce
            </ExternalLink>
            , S. 8.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ATSteps;
