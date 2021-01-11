import { Modal } from "antd";
import React, { useState } from "react";
import { COOKIE_CONSENT_NAME } from "../../src/utils/constants/applicationConstants";
import {
  saveCookie,
  deleteAllCookies,
  isCookieAvailable,
} from "../../src/utils/functions/cookieUtils";
import InternalLink from "./InternalLink";

const CookieConsentModal = () => {
  const [isOpen, setIsOpen] = useState(
    !isCookieAvailable({ key: COOKIE_CONSENT_NAME })
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
      okText={"OKAY"}
      onOk={handleOk}
      cancelText={"CANCEL"}
      onCancel={handleCancel}
      maskClosable={false}
      title="Cookies"
    >
      Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern
      zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite
      stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zu
      Cookies erhalten Sie in unserer{" "}
      <InternalLink href="/privacy">
        <a>Datenschutzerklärung</a>
      </InternalLink>
      .
    </Modal>
  );
};

export default CookieConsentModal;
