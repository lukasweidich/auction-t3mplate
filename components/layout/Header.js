import { Menu, Dropdown, Divider, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InternalLink from "../misc/InternalLink";
import { DEFAULT_LANGUAGE } from "../../src/utils/constants/applicationConstants";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../actions/applicationSettingsActions";
import { getFlagIconIdFromLanguage } from "../../src/utils/functions/languageUtils";
import {
  HomeOutlined,
  FormOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Visible, Hidden } from "react-grid-system";

const Header = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const { flagId: currentFlagId } = useSelector(
    (state) => state.applicationSettings
  );

  const [flagId, setFlagId] = useState(
    getFlagIconIdFromLanguage(DEFAULT_LANGUAGE)
  );

  useEffect(() => {
    setFlagId(currentFlagId);
  }, [currentFlagId]);

  const handleLanguageSet = (language) => {
    i18n.changeLanguage(language);
    dispatch(setLanguage({ language }));
  };

  const internalLinks = [
    <InternalLink href="/">
      <a>
        <HomeOutlined /> Home
      </a>
    </InternalLink>,
    <InternalLink href="/editor">
      <a>
        <FormOutlined /> Editor
      </a>
    </InternalLink>,
    <InternalLink href="/faq">
      <a>
        <QuestionCircleOutlined /> FAQ
      </a>
    </InternalLink>,
    <InternalLink href="/about">
      <a>
        <InfoCircleOutlined /> {t("about")}
      </a>
    </InternalLink>,
  ];

  const FlagSelectorMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => handleLanguageSet("de")}>
          <span className="flag-icon flag-icon-de" />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => handleLanguageSet("en")}>
          <span className="flag-icon flag-icon-gb" />
        </a>
      </Menu.Item>
    </Menu>
  );

  const FlagSelectorDropdown = () => (
    <Dropdown
      overlay={FlagSelectorMenu}
      trigger={["click"]}
      placement="bottomRight"
    >
      <a>
        <span className={`flag-icon flag-icon-${flagId}`}></span>
      </a>
    </Dropdown>
  );

  const MobileNavigationMenu = (
    <Menu>
      {internalLinks.map((link, i) => {
        return <Menu.Item key={i}>{link}</Menu.Item>;
      })}
    </Menu>
  );

  const MobileNavigationDropdown = () => {
    return (
      <Dropdown
        overlay={MobileNavigationMenu}
        trigger={["click"]}
        placement="bottomLeft"
      >
        <a>
          <MenuOutlined /> {t("menu")}
        </a>
      </Dropdown>
    );
  };

  return (
    <header>
      <Container>
        <Divider />
        <h2>
          <InternalLink href="/">
            <a>Auction Template</a>
          </InternalLink>
        </h2>
        <h3
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Visible xs>
            <MobileNavigationDropdown />
          </Visible>
          <Hidden xs>
            <Space size="large">
              {internalLinks.map((link, i) =>
                React.cloneElement(link, { key: i })
              )}
            </Space>
          </Hidden>
          <FlagSelectorDropdown />
        </h3>
        <Divider />
      </Container>
    </header>
  );
};

export default Header;
