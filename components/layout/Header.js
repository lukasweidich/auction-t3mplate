import {
  Affix,
  Menu,
  Dropdown,
  Divider,
  Space,
  Button,
  Typography,
  Drawer,
} from "antd";
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
  const headerStyling = {
    zIndex: "var(--header-z-index)",
    backgroundColor: "var(--background-color)",
  };

  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <HomeOutlined /> {t("header.home")}
      </a>
    </InternalLink>,
    <InternalLink href="/editor">
      <a>
        <FormOutlined /> {t("header.editor")}
      </a>
    </InternalLink>,
    <InternalLink href="/faq">
      <a>
        <QuestionCircleOutlined /> {t("header.faq")}
      </a>
    </InternalLink>,
    <InternalLink href="/about">
      <a>
        <InfoCircleOutlined /> {t("header.about")}
      </a>
    </InternalLink>,
  ];

  const FlagSelectorMenu = (
    <Menu>
      <Menu.Item>
        <a
          onClick={() => handleLanguageSet("de")}
          style={{ textAlign: "center" }}
        >
          <span
            className={`flag-icon flag-icon-${getFlagIconIdFromLanguage(
              "de"
            )} language-select`}
          />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => handleLanguageSet("en")}
          style={{ textAlign: "center" }}
        >
          <span
            className={`flag-icon flag-icon-${getFlagIconIdFromLanguage(
              "en"
            )} language-select`}
          />
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
      <Button>
        <span className={`flag-icon flag-icon-${flagId}`} />
      </Button>
    </Dropdown>
  );

  const MobileNavigationButton = () => {
    return (
      <Button onClick={() => setIsDrawerOpen(true)}>
        <MenuOutlined />
      </Button>
    );
  };

  return (
    <header
      style={{
        height: "var(--header-height)",
        width: "100%",
        ...headerStyling,
      }}
    >
      <Drawer
        placement="left"
        closable={false}
        onClose={() => setIsDrawerOpen(false)}
        visible={isDrawerOpen}
        title={t("app-name")}
      >
        <Space direction="vertical">
          {internalLinks.map((link, i) => (
            <div key={i} onClick={() => setIsDrawerOpen(false)}>
              <h3>
                {React.cloneElement(link, {
                  style: { display: "block", padding: "1rem 0" },
                })}
              </h3>
            </div>
          ))}
        </Space>
      </Drawer>
      <Container style={{ ...headerStyling }}>
        <Typography.Title
          level={2}
          style={{ margin: "var(--divider-margin) 0 0 0" }}
        >
          <InternalLink href="/">
            <a>{t("app-name")}</a>
          </InternalLink>
        </Typography.Title>
        <Affix style={{ ...headerStyling }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "var(--divider-margin)",
            }}
          >
            <Visible xs>
              <MobileNavigationButton />
            </Visible>
            <Hidden xs>
              <Space size="large">
                {internalLinks.map((link, i) => (
                  <h3 key={i} style={{ margin: 0 }}>
                    {link}
                  </h3>
                ))}
              </Space>
            </Hidden>
            <FlagSelectorDropdown />
          </div>
          <Divider />
        </Affix>
      </Container>
    </header>
  );
};

export default Header;
