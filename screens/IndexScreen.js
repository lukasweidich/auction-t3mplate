import React from "react";
import { useTranslation } from "react-i18next";

const IndexScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("index:paragraph.heading")}</h2>
      <p>{t("index:paragraph.part1")}</p>
      <p>{t("index:paragraph.part2")}</p>
    </>
  );
};

export default IndexScreen;
