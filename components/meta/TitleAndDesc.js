import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const TitleAndDesc = ({ title, desc }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  title = isHome ? title : `${title} - WatchTrade24`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
    </Head>
  );
};

export default TitleAndDesc;
