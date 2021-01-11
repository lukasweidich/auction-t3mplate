import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { TITLE_SEPARATOR } from "../../src/utils/constants/applicationConstants";

const TitleAndDesc = ({ title, desc, i18nKey }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  if (i18nKey) {
    title = t(title);
    desc = t(desc);
  }

  const router = useRouter();
  const isHome = router.pathname === "/";
  title = isHome ? title : `${title} ${TITLE_SEPARATOR} ${t("app-name")}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta httpEquiv="language" content={language} />
      <meta name="language" content={language} />
    </Head>
  );
};

export default TitleAndDesc;
