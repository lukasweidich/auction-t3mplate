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
          <img
            src={ebayDevMemberLogo}
            alt={t("footer.ebay-dev-alt")}
            style={{ minWidth: "36px", height: "3rem" }}
          />
        </p>
        <p style={{ fontSize: "12px" }}>
          Auction Template bietet Ihnen eine exklusiv mit HTML und CSS
          entwickelte Auktionsvorlage für die Produktbeschreibungen Ihrer eBay
          Inserate. Wir haben alle wichtigen eBay Richtlinien{" "}
          {new Date().getFullYear()} berücksichtigt (Responsive, HTTPS/SSL,
          keine aktiven Inhalte mit JavaScript, etc.), damit Sie mit dem
          Open-Source-Projekt Auction Template eine ganzheitliche und
          zufriedenstellende Lösung erhalten. Unsere eBay Verkaufsvorlagen sind
          professionell entwickelt auf ein konsistentes und seriöses
          Erscheinungsbild für Ihren eBay Shop ausgerichtet. Im Gegensatz zu
          anderen Anbietern nimmt Auction Template an dem eBay Developers
          Program teil und hat so Zugriff auf offizielle und gesicherte
          Schnittstellen von eBay. Durch diese APIs erhalten wir die
          Informationen und Bilder Ihrer Artikel, die Sie ansonsten in
          mühseliger Doppelpflege hätten eintragen müssen. Die automatisch
          generierte Auktionsvorlage von Auction Template kann mit unserem
          innovativen Editor ganz bequem bearbeitet werden und der HTML-Code
          direkt in die Produktbeschreibungen Ihrer eBay Inserate eingefügt
          werden.
        </p>
        <p style={{ fontSize: "12px" }}>
          Nützliche Quellen:
          <ul>
            <li>
              eBay Inc., 2021.{" "}
              <ExternalLink href="https://www.ebay.de/help/policies/listing-policies/listing-policies?id=4213">
                Grundsätze für das Einstellen von Artikeln
              </ExternalLink>
            </li>
            <li>
              KPMG, 2020.{" "}
              <ExternalLink href="https://hub.kpmg.de/kpmg-studie-online-shopping-02-februar-2020">
                Online-Shopping: Analyse zu Trends und Potenzialen im E-Commerce
              </ExternalLink>
              , S. 8.
            </li>
          </ul>
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
