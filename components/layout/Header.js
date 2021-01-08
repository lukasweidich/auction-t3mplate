import { Divider, Menu, Dropdown } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import InternalLink from "../misc/InternalLink";
import { LINK_SEPARATOR } from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import { useTranslation } from "react-i18next";
import { RocketTwoTone, DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../actions/applicationSettingsActions";

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const handleLanguageSet = (language) => {
    i18n.changeLanguage(language);
    dispatch(setLanguage({ language }));
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => handleLanguageSet("de")}>
          <span className="flag-icon flag-icon-de" /> DE
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => handleLanguageSet("en")}>
          <span className="flag-icon flag-icon-gb" /> EN
        </a>
      </Menu.Item>
    </Menu>
  );

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
                <Dropdown overlay={menu}>
                  <a>
                    {t("language")} <DownOutlined />
                  </a>
                </Dropdown>,
              ],
              LINK_SEPARATOR
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
