import { Divider } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LINK_SEPARATOR } from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import ExternalLink from "../misc/ExternalLink";
import InternalLink from "../misc/InternalLink";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container>
        <Divider />
        <p>
          <span>
            {withSeparator(
              [
                <InternalLink href="/about">
                  <a>{t("about")}</a>
                </InternalLink>,
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
        <p>
          © {new Date().getFullYear()}{" "}
          <ExternalLink href="https://quikk.de" noIcon>
            QUIKK
          </ExternalLink>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
