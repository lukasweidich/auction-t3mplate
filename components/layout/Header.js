import {
  Affix,
  Menu,
  Dropdown,
  Divider,
  Space,
  Button,
  Typography,
  Drawer,
  Grid,
  Alert,
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
  CommentOutlined,
  InfoCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Visible, Hidden } from "react-grid-system";

import atLogo from "../../src/assets/images/at-logo.png";

const { useBreakpoint } = Grid;

const Header = () => {
  const { xs, sm, md, lg, xl } = useBreakpoint();

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
        <CommentOutlined /> {t("header.faq")}
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
    <>
      <Alert message={t("dev-alert")} type="info" banner closable />
      <Affix
        style={{
          height: xs ? "var(--header-mobile-height)" : "var(--header-height)",
          width: "100%",
          ...headerStyling,
        }}
      >
        <header
          style={{
            height: xs ? "var(--header-mobile-height)" : "var(--header-height)",
            width: "100%",
            ...headerStyling,
          }}
        >
          <Drawer
            placement="right"
            closable={false}
            onClose={() => setIsDrawerOpen(false)}
            visible={isDrawerOpen}
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
              <FlagSelectorDropdown />
            </Space>
          </Drawer>
          <Container style={{ ...headerStyling }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <InternalLink href="/">
                <Typography.Title
                  level={2}
                  style={{ margin: "var(--divider-margin) 0 0 0" }}
                >
                  <img
                    height="50rem"
                    src={atLogo}
                    alt="Auction Template Logo"
                    style={{ cursor: "pointer" }}
                  />
                </Typography.Title>
              </InternalLink>
              <Visible xs>
                <MobileNavigationButton />
              </Visible>
            </div>
            <Hidden xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "var(--divider-margin)",
                  verticalAlign: "bottom",
                }}
              >
                <Space size="large">
                  {internalLinks.map((link, i) => (
                    <h3 key={i} style={{ margin: 0 }}>
                      {link}
                    </h3>
                  ))}
                </Space>
                <FlagSelectorDropdown />
              </div>
            </Hidden>
            <Divider />
          </Container>
        </header>
      </Affix>
    </>
  );
};

export default Header;
