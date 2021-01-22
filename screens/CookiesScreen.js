import { Checkbox, Button, Form } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import InternalLink from "../components/misc/InternalLink";
import TitleDivider from "../components/misc/TitleDivider";
import { COOKIE_CONSENT_NAME } from "../src/utils/constants/applicationConstants";
import {
  acceptCookies,
  isCookieAvailable,
  rejectCookies,
} from "../src/utils/functions/cookieUtils";

const CookiesScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <TitleDivider onlyTitle title={t("cookies.title")} />
      <Form>
        <Form.Item>
          <span>
            {t("cookies.body")}{" "}
            <InternalLink href="/privacy">
              <a>{t("cookies.privacy")}</a>
            </InternalLink>
            .
          </span>
        </Form.Item>
        <Form.Item>
          <span>
            Im Moment sind Cookies{" "}
            {isCookieAvailable({ key: COOKIE_CONSENT_NAME })
              ? "aktiviert"
              : "deaktiviert"}
          </span>
        </Form.Item>
        <Form.Item>
          <Button onClick={rejectCookies}>{t("cookies.cancelText")}</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={acceptCookies}>
            {t("cookies.okText")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CookiesScreen;
