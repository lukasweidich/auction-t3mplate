import { Divider } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LINK_SEPARATOR } from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import ExternalLink from "../misc/ExternalLink";
import InternalLink from "../misc/InternalLink";
import ebayDevMemberLogo from "../../src/assets/images/developersprogrammember_vert.png";
import Legal from "./Legal";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container>
        <Divider />
        <p style={{ fontSize: "12px" }}>{t("footer.short-desc")}</p>
        <p style={{ fontSize: "12px" }}>
          <ExternalLink href="https://www.ebay.com/help/policies/listing-policies/listing-policies?id=4213">
            eBay Grundsätze für das Einstellen von Artikeln{" "}
            {new Date().getFullYear()}
          </ExternalLink>
        </p>
        <p>
          <img
            src={ebayDevMemberLogo}
            alt={t("footer.ebay-dev-alt")}
            style={{ minWidth: "36px", height: "3rem" }}
          />
        </p>
        <p style={{ fontSize: "12px" }}>{t("footer.disclaimer")}</p>
        <Legal />
      </Container>
    </footer>
  );
};

export default Footer;
