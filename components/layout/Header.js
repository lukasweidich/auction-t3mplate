import { Menu, Dropdown, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import InternalLink from "../misc/InternalLink";
import {
  DEFAULT_LANGUAGE,
  LINK_SEPARATOR,
} from "../../src/utils/constants/applicationConstants";
import withSeparator from "../../src/utils/functions/withSeparator";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../actions/applicationSettingsActions";
import { getFlagIconIdFromLanguage } from "../../src/utils/functions/languageUtils";

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const { flagId: currentFlagId } = useSelector(
    (state) => state.applicationSettings
  );

  const [flagId, setFlagId] = useState(
    getFlagIconIdFromLanguage(DEFAULT_LANGUAGE)
  );

  //TODO: find way to properly display flag for current language in header
  useEffect(() => {
    setFlagId(currentFlagId);
  }, [currentFlagId]);

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
          <span>
            {withSeparator(
              [
                <InternalLink href="/">
                  <a>Home</a>
                </InternalLink>,
                <InternalLink href="/editor">
                  <a>Editor</a>
                </InternalLink>,
                <InternalLink href="/faq">
                  <a>FAQ</a>
                </InternalLink>,
              ],
              LINK_SEPARATOR
            )}
          </span>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
            <a>
              <span className={`flag-icon flag-icon-${flagId}`}></span>
            </a>
          </Dropdown>
        </h3>
        <Divider />
      </Container>
    </header>
  );
};

export default Header;
