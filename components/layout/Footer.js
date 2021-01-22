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
        <p style={{ fontSize: "10px" }}>
          {t("footer.short-desc", { year: new Date().getFullYear() })}
        </p>
        <p>
          <ExternalLink href={t("footer.policies.url")}>
            {t("footer.policies.text", { year: new Date().getFullYear() })}
          </ExternalLink>
        </p>
        <p>
          <img
            src={ebayDevMemberLogo}
            alt={t("footer.ebay-dev-alt")}
            style={{ minWidth: "36px", height: "3rem" }}
          />
        </p>
        <p style={{ fontSize: "10px" }}>{t("footer.disclaimer")}</p>
        <Legal />
      </Container>
    </footer>
  );
};

export default Footer;
