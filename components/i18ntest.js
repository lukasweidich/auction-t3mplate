import React from "react";
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t, i18n } = useTranslation();
  return (
    <h1>
      <span onClick={() => i18n.changeLanguage("de")}>DE</span>
      <span onClick={() => i18n.changeLanguage("en")}>EN</span>
      <h1>{t("title")}</h1>
      <p>{t("lorem")}</p>
    </h1>
  );
}
