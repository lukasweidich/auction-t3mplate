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
  EditOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

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

  return (
    <header>
      <Container>
        <Divider />
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InternalLink href="/">
            <a>Auction Template</a>
          </InternalLink>
          <FlagSelectorDropdown />
        </h2>
        <h3>
          <Space size="large">
            <InternalLink href="/">
              <a>
                <HomeOutlined /> Home
              </a>
            </InternalLink>
            <InternalLink href="/editor">
              <a>
                <EditOutlined /> Editor
              </a>
            </InternalLink>
            <InternalLink href="/faq">
              <a>
                <QuestionCircleOutlined /> FAQ
              </a>
            </InternalLink>
            <InternalLink href="/about">
              <a>
                <InfoCircleOutlined /> {t("about")}
              </a>
            </InternalLink>
          </Space>
        </h3>
        <Divider />
      </Container>
    </header>
  );
};

export default Header;
