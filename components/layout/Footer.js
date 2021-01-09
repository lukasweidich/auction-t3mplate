import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LINK_SEPARATOR } from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import ExternalLink from "../misc/ExternalLink";
import InternalLink from "../misc/InternalLink";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <Container>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>
            © {new Date().getFullYear()}{" "}
            <ExternalLink href="https://quikk.de" noIcon>
              QUIKK
            </ExternalLink>
          </span>
          <span>
            {withSeparator(
              [
                <InternalLink href="/imprint">
                  <a>{t("imprint")}</a>
                </InternalLink>,
                <InternalLink href="/privacy">
                  <a>{t("privacy")}</a>
                </InternalLink>,
              ],
              LINK_SEPARATOR
            )}
          </span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
