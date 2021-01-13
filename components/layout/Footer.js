import { Divider } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LINK_SEPARATOR } from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import ExternalLink from "../misc/ExternalLink";
import InternalLink from "../misc/InternalLink";
import ebayDevMemberLogo from "../../src/assets/images/developersprogrammember_vert.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container>
        <Divider />
        <p style={{ fontSize: "12px" }}>{t("footer.short-desc")}</p>
        <p>
          <img
            src={ebayDevMemberLogo}
            alt={t("footer.ebay-dev-alt")}
            style={{ minWidth: "36px", height: "3rem" }}
          />
        </p>
        <p style={{ fontSize: "12px" }}>{t("footer.disclaimer")}</p>
        <p>
          <span>
            {withSeparator(
              [
                <InternalLink href="/imprint">
                  <a>{t("footer.imprint")}</a>
                </InternalLink>,
                <InternalLink href="/privacy">
                  <a>{t("footer.privacy")}</a>
                </InternalLink>,
                <InternalLink href="/terms">
                  <a>{t("footer.terms")}</a>
                </InternalLink>,
              ],
              LINK_SEPARATOR
            )}
          </span>
        </p>
        <p>
          {withSeparator(
            [
              <>
                © {new Date().getFullYear()}{" "}
                <ExternalLink href="https://quikk.de">QUIKK</ExternalLink>
              </>,
              <ExternalLink href="https://quikk.de/kontakt">
                {t("footer.contact")}
              </ExternalLink>,
            ],
            LINK_SEPARATOR
          )}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
