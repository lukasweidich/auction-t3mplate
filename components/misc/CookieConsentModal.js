import { Modal } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { COOKIE_CONSENT_NAME } from "../../src/utils/constants/applicationConstants";
import {
  saveCookie,
  deleteAllCookies,
  isCookieAvailable,
} from "../../src/utils/functions/cookieUtils";
import InternalLink from "./InternalLink";

const CookieConsentModal = ({ open = false }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(
    !isCookieAvailable({ key: COOKIE_CONSENT_NAME }) || open
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOk = () => {
    closeModal();
    saveCookie({ key: COOKIE_CONSENT_NAME, value: true, cc: true });
  };
  const handleCancel = () => {
    closeModal();
    deleteAllCookies();
  };

  return (
    <Modal
      visible={isOpen}
      closable={false}
      okText={t("cookies.okText")}
      onOk={handleOk}
      cancelText={t("cookies.cancelText")}
      onCancel={handleCancel}
      maskClosable={false}
      title={t("cookies.title")}
    >
      {t("cookies.body")}{" "}
      <InternalLink href="/privacy">
        <a>{t("cookies.privacy")}</a>
      </InternalLink>
      .
    </Modal>
  );
};

export default CookieConsentModal;
