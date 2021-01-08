import { Divider } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import InternalLink from "../misc/InternalLink";
import {
  LINK_SEPARATOR,
  FLAG_SEPARATOR,
} from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import { useTranslation } from "react-i18next";
import { RocketTwoTone } from "@ant-design/icons";
const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
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
            <InternalLink href="/">
              <a>
                <RocketTwoTone /> Auction Template
              </a>
            </InternalLink>
          </span>
          <span>
            {withSeparator(
              [
                <InternalLink href="/">
                  <a>Home</a>
                </InternalLink>,
                <InternalLink href="/generator">
                  <a>Generator</a>
                </InternalLink>,
                <InternalLink href="/faq">
                  <a>FAQ</a>
                </InternalLink>,
              ],
              LINK_SEPARATOR
            )}
          </span>
          <span>
            {withSeparator(
              [
                <a
                  onClick={() => i18n.changeLanguage("de")}
                  className="flag-icon flag-icon-de"
                />,
                <a
                  onClick={() => i18n.changeLanguage("en")}
                  className="flag-icon flag-icon-gb"
                />,
              ],
              FLAG_SEPARATOR
            )}
          </span>
        </p>
        <Divider />
      </Container>
      <style jsx>{`
        p {
          margin: 1em 0;
        }
      `}</style>
    </header>
  );
};

export default Header;
