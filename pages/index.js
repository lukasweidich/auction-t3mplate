import React from "react";
import { useTranslation } from "react-i18next";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const index = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleAndDesc title="index:title" desc="index:desc" i18nKey />
      <h2>{t("index:paragraph.heading")}</h2>
      <p>{t("index:paragraph.part1")}</p>
      <p>{t("index:paragraph.part2")}</p>
    </>
  );
};

export default index;
